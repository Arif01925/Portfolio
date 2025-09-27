import { readFile } from 'fs/promises'
import { join } from 'path'
import { query } from '../../lib/db'

export default defineEventHandler(async () => {
  try {
    // Join to categories to get the category name as `type` if available
    const rows = await query(`
      SELECT p.id, p.title, p.description, p.images, p.thumbnail, p.featured_image, p.date, c.name as type
      FROM projects p
      LEFT JOIN categories c ON p.category_id = c.id
      ORDER BY p.date DESC
    `)

    // Normalize each row to the shape the frontend expects
    const normalized = rows.map(r => {
      const project = {
        id: r.id,
        title: r.title || '',
        description: r.description || r.content || '',
        date: r.date || r.created_at || null,
        type: r.type || r.category || null,
      }

      // images may be stored as JSON string
      let images = []
      if (r.images) {
        try {
          const parsed = JSON.parse(r.images)
          images = Array.isArray(parsed) ? parsed : [String(parsed)]
        } catch (e) {
          images = String(r.images).split(',').map(s=>s.trim()).filter(Boolean)
        }
      }
      project.images = images
      project.thumbnail = r.thumbnail || r.featured_image || images[0] || null
      return project
    })

    return normalized
  } catch (err) {
    // Fallback to JSON file for local/dev when DB isn't configured
    const file = join('server/data/projects.json')
    const data = await readFile(file, 'utf-8')
    return JSON.parse(data)
  }
})
