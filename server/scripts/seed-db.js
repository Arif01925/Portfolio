import { readFile } from 'fs/promises'
import path from 'path'
import dotenv from 'dotenv'
import { initDb, query } from '../lib/db.js'

dotenv.config()

const dataDir = path.join(process.cwd(), 'server', 'data')

// normalize large JSON ids to fit into existing int(11) columns if necessary
function normalizeId(id) {
  if (!id) return null
  const s = String(id)
  // take last 9 digits to reduce size but keep stable mapping
  const last = s.slice(-9)
  return Math.abs(Number(last))
}

async function ensureCategoryId(name) {
  if (!name) return null
  const slug = name.toLowerCase().replace(/\s+/g, '-')
  const found = await query('SELECT id FROM categories WHERE name = ? OR slug = ? LIMIT 1', [name, slug])
  if (found && found.length > 0) return found[0].id
  const res = await query('INSERT INTO categories (name, slug, created_at) VALUES (?, ?, NOW())', [name, slug])
  return res.insertId || null
}

async function tableColumns(table) {
  try {
    const rows = await query("SELECT COLUMN_NAME FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?", [table])
    return rows.map(r => r.COLUMN_NAME)
  } catch (err) {
    return []
  }
}

async function isIdInt(table) {
  try {
    const rows = await query("SELECT COLUMN_TYPE FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = 'id'", [table])
    if (!rows || rows.length === 0) return false
    const t = rows[0].COLUMN_TYPE || ''
    return t.startsWith('int') || t.startsWith('bigint')
  } catch (e) {
    return false
  }
}

async function seedProjectTypes() {
  try {
    const file = path.join(dataDir, 'project-types.json')
    const content = JSON.parse(await readFile(file, 'utf8'))

    // If there's a categories table, seed that instead
    const hasCategories = (await tableColumns('categories')).length > 0
    const hasProjectTypes = (await tableColumns('project_types')).length > 0

    if (hasCategories) {
      for (const t of content) {
        const name = t.name || t.title || ''
        const slug = (name || '').toLowerCase().replace(/\s+/g, '-')
        const id = normalizeId(t.id) || null
        await query('INSERT INTO categories (id, name, slug, created_at) VALUES (?, ?, ?, NOW()) ON DUPLICATE KEY UPDATE name=VALUES(name), slug=VALUES(slug)', [id, name, slug])
      }
      console.log('categories seeded')
      return
    }

    if (hasProjectTypes) {
      for (const t of content) {
        const id = t.id || null
        const name = t.name || t.title || ''
        if (id) await query('INSERT INTO project_types (id, name) VALUES (?, ?) ON DUPLICATE KEY UPDATE name = VALUES(name)', [id, name])
        else await query('INSERT INTO project_types (name) VALUES (?)', [name])
      }
      console.log('project_types seeded')
      return
    }

    console.warn('No categories or project_types table found; skipping types seed')
  } catch (err) {
    console.warn('project_types seed failed:', err.message)
  }
}

async function seedProjects() {
  try {
    const file = path.join(dataDir, 'projects.json')
    const content = JSON.parse(await readFile(file, 'utf8'))
    const cols = await tableColumns('projects')

    const hasCategoryId = cols.includes('category_id')
    const hasImages = cols.includes('images')
    const hasSlug = cols.includes('slug')
    const hasCreatedAt = cols.includes('created_at')
    const hasThumbnail = cols.includes('thumbnail') || cols.includes('featured_image')

    // use shared ensureCategoryId

    for (const p of content) {
  const id = normalizeId(p.id)
      if (!id) continue
      const title = p.title || ''
      const description = p.description || ''
      const type = p.type || null
      const date = p.date || null
      const thumbnail = p.thumbnail || null
      const images = p.images || []
      const slug = (p.title || '').toLowerCase().replace(/\s+/g, '-')

  if (hasCategoryId) {
        // map type (string or id) to category_id
  let categoryId = null
  if (typeof type === 'number') categoryId = type
  else categoryId = await ensureCategoryId(type)

        // store images as JSON string if images column exists
        const imagesValue = hasImages ? JSON.stringify(images) : null
        const thumbnailCol = cols.includes('thumbnail') ? 'thumbnail' : (cols.includes('featured_image') ? 'featured_image' : null)
        const thumbnailVal = thumbnailCol ? thumbnail : null
        const createdAtVal = hasCreatedAt ? date : null

        const insertCols = ['id','title','description','category_id']
        const params = [id, title, description, categoryId]
        if (hasImages) { insertCols.push('images'); params.push(imagesValue) }
        if (hasSlug) { insertCols.push('slug'); params.push(slug) }
        if (hasCreatedAt) { insertCols.push('created_at'); params.push(createdAtVal) }
        if (thumbnailCol) { insertCols.push(thumbnailCol); params.push(thumbnailVal) }

        const placeholders = insertCols.map(()=>'?').join(', ')
        const finalSql = `INSERT INTO projects (${insertCols.join(',')}) VALUES (${placeholders}) ON DUPLICATE KEY UPDATE title=VALUES(title), description=VALUES(description)`
        await query(finalSql, params)
      } else {
        // try new schema style
        await query('INSERT INTO projects (id, title, description, `type`, date, thumbnail) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE title=VALUES(title), description=VALUES(description), `type`=VALUES(`type`), date=VALUES(date), thumbnail=VALUES(thumbnail)', [id, title, description, type, date, thumbnail])
        // project_images table
        const imgCols = await tableColumns('project_images')
        if (imgCols.length > 0) {
          try {
            await query('DELETE FROM project_images WHERE project_id = ?', [id])
            for (const img of images) {
              await query('INSERT INTO project_images (project_id, url) VALUES (?, ?)', [id, img])
            }
          } catch (e) {
            console.warn('project_images insert failed for', id, e.message)
          }
        }
      }
    }
    console.log('projects seeded')
  } catch (err) {
    console.warn('projects seed failed:', err.message)
  }
}

async function seedBlogs() {
  try {
    const file = path.join(dataDir, 'blogs.json')
    const content = JSON.parse(await readFile(file, 'utf8'))
    const cols = await tableColumns('blogs')

    const hasCategoryId = cols.includes('category_id')
    const hasFeaturedImage = cols.includes('featured_image')
    const hasCreatedAt = cols.includes('created_at')

    const idIsInt = await isIdInt('blogs')
    for (const b of content) {
      const rawId = b.id
      const id = normalizeId(rawId)
      console.log('SEED BLOG:', { rawId, id, idIsInt })
      if (!id) continue
      const title = b.title || ''
      const excerpt = b.excerpt || ''
      const contentBody = b.content || ''
        const category = b.category || null
      const date = b.date || null
      const thumbnail = b.thumbnail || null
      const slug = b.slug || null

      if (hasCategoryId) {
          // our DB uses category_id and featured_image
          const featuredVal = hasFeaturedImage ? thumbnail : null
          const createdVal = hasCreatedAt ? date : null
          // ensure category exists and get id
          const categoryId = await ensureCategoryId(category)
          const insertCols = ['id','title','content','excerpt','category_id']
          if (hasFeaturedImage) insertCols.push('featured_image')
          if (cols.includes('slug')) insertCols.push('slug')
          if (hasCreatedAt) insertCols.push('created_at')
          const placeholders = insertCols.map(()=>'?').join(', ')
    const params = [id, title, contentBody, excerpt, categoryId]
          if (hasFeaturedImage) params.push(featuredVal)
          if (cols.includes('slug')) params.push(slug)
          if (hasCreatedAt) params.push(createdVal)
          // If id column is int and our normalized id might still be problematic, insert without id using slug as key
          // If id column is int, avoid inserting the possibly-large id: insert without id and rely on slug/unique keys for dedupe
          // Insert without id (let DB auto-assign) for existing schema to avoid id range issues
          const colsNoId = insertCols.filter(c => c !== 'id')
          const placeholdersNoId = colsNoId.map(()=>'?').join(', ')
          const paramsNoId = [title, contentBody, excerpt, categoryId]
          if (hasFeaturedImage) paramsNoId.push(featuredVal)
          if (cols.includes('slug')) paramsNoId.push(slug)
          if (hasCreatedAt) paramsNoId.push(createdVal)
          const finalNoId = `INSERT INTO blogs (${colsNoId.join(',')}) VALUES (${placeholdersNoId}) ON DUPLICATE KEY UPDATE title=VALUES(title), content=VALUES(content), excerpt=VALUES(excerpt)`
          console.log('FINAL BLOG INSERT:', finalNoId, paramsNoId)
          await query(finalNoId, paramsNoId)
      } else {
        // new schema style
        await query('INSERT INTO blogs (id, title, excerpt, content, category, date, thumbnail, slug) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE title=VALUES(title), excerpt=VALUES(excerpt), content=VALUES(content), category=VALUES(category), date=VALUES(date), thumbnail=VALUES(thumbnail), slug=VALUES(slug)', [id, title, excerpt, contentBody, category, date, thumbnail, slug])
      }
    }
    console.log('blogs seeded')
  } catch (err) {
    console.warn('blogs seed failed:', err.message)
  }
}

async function main() {
  try {
    initDb()
    console.log('DB pool initialized')
    await seedProjectTypes()
    await seedProjects()
    await seedBlogs()
    console.log('Seeding complete')
    process.exit(0)
  } catch (err) {
    console.error('Seeding failed:', err)
    process.exit(1)
  }
}

main()
