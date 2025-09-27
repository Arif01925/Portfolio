import { initDb, query } from '../lib/db.js'

async function normalizeProjectRow(row) {
  const project = {
    id: row.id,
    title: row.title || row.name || '',
    description: row.description || row.content || row.excerpt || '',
    date: row.date || row.created_at || row.createdAt || null,
    type: row.type || row.category || null,
  }

  let images = []
  if (row.images) {
    if (Array.isArray(row.images)) images = row.images
    else {
      try {
        const parsed = JSON.parse(row.images)
        images = Array.isArray(parsed) ? parsed : [String(parsed)]
      } catch (e) {
        images = String(row.images).split(',').map(s => s.trim()).filter(Boolean)
      }
    }
  }
  project.images = images
  project.thumbnail = row.thumbnail || row.featured_image || images[0] || null
  return project
}

async function main(){
  initDb()
  try{
    const rows = await query('SELECT * FROM projects LIMIT 1')
    if (!rows || rows.length === 0) {
      console.log('no projects')
      process.exit(0)
    }
    const out = await normalizeProjectRow(rows[0])
    console.log('NORMALIZED:', JSON.stringify(out, null, 2))
    process.exit(0)
  }catch(e){
    console.error('ERR', e.message)
    process.exit(1)
  }
}

main()
