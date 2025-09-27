import { readFile } from 'fs/promises'
import path from 'path'
import { initDb, query } from '../lib/db.js'

async function ensureCategoryId(name) {
  if (!name) return null
  const slug = name.toLowerCase().replace(/\s+/g, '-')
  const found = await query('SELECT id FROM categories WHERE name = ? OR slug = ? LIMIT 1', [name, slug])
  if (found && found.length > 0) return found[0].id
  const res = await query('INSERT INTO categories (name, slug, created_at) VALUES (?, ?, NOW())', [name, slug])
  return res.insertId || null
}

async function main(){
  initDb()
  const file = path.join(process.cwd(), 'server', 'data', 'blogs.json')
  const content = JSON.parse(await readFile(file, 'utf8'))
  const b = content[0]
  const title = b.title || ''
  const excerpt = b.excerpt || ''
  const contentBody = b.content || ''
  const category = b.category || null
  const date = b.date || null
  const thumbnail = b.thumbnail || null
  const slug = b.slug || null

  const categoryId = await ensureCategoryId(category)

  const cols = ['title','content','excerpt','category_id']
  const params = [title, contentBody, excerpt, categoryId]
  cols.push('featured_image')
  params.push(thumbnail)
  cols.push('slug')
  params.push(slug)
  cols.push('created_at')
  params.push(date)

  const placeholders = cols.map(()=>'?').join(', ')
  const sql = `INSERT INTO blogs (${cols.join(',')}) VALUES (${placeholders}) ON DUPLICATE KEY UPDATE title=VALUES(title), content=VALUES(content), excerpt=VALUES(excerpt)`
  console.log('SQL:', sql)
  console.log('PARAMS:', params)
  try{
    const res = await query(sql, params)
    console.log('RESULT:', res)
  }catch(e){
    console.error('ERR:', e.message)
  }
  process.exit(0)
}

main()
