import fs from 'fs/promises'
import path from 'path'
import { query } from '../../lib/db'

export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  console.log('[api] GET /api/projects/' + id)
  try {
    function normalizeId(val) {
      if (val === null || val === undefined) return null
      const s = String(val)
      if (!/\d+/.test(s)) return null
      return Math.abs(Number(s.slice(-9)))
    }

    // Try direct id match
    let rows = await query('SELECT * FROM projects WHERE id = ? LIMIT 1', [id])
    // try normalized numeric id (handles large JSON Date.now() ids stored in JSON)
    if (!rows || rows.length === 0) {
      const n = normalizeId(id)
      if (n) {
        console.log('[api] trying normalized id', n)
        rows = await query('SELECT * FROM projects WHERE id = ? LIMIT 1', [n])
      }
    }
    // try slug match
    if (!rows || rows.length === 0) {
      rows = await query('SELECT * FROM projects WHERE slug = ? LIMIT 1', [id])
    }

    if (!rows || rows.length === 0) {
      return createError({ statusCode: 404, statusMessage: 'Project not found' })
    }

    const row = rows[0]

    // Normalize DB row to the shape the frontend expects
    const project = {
      id: row.id,
      title: row.title || row.name || '',
      description: row.description || row.content || row.excerpt || '',
      date: row.date || row.created_at || row.createdAt || null,
      type: row.type || row.category || null,
    }

    // Normalize images: could be stored as JSON string, array, or comma-separated
    let images = []
    if (row.images) {
      if (Array.isArray(row.images)) {
        images = row.images
      } else {
        try {
          const parsed = JSON.parse(row.images)
          images = Array.isArray(parsed) ? parsed : [String(parsed)]
        } catch (e) {
          // Not JSON: try comma-separated or single string
          images = String(row.images).split(',').map(s => s.trim()).filter(Boolean)
        }
      }
    }

    project.images = images

    // Thumbnail can be stored as thumbnail, featured_image, or be the first image
    project.thumbnail = row.thumbnail || row.featured_image || images[0] || null
    console.log('[api] project normalized:', { id: project.id, title: project.title, images: project.images && project.images.length })
    return project
  } catch (err) {
    const filePath = path.join(process.cwd(), 'server/data/projects.json')
    const data = await fs.readFile(filePath, 'utf8')
    const projects = JSON.parse(data)
    const project = projects.find(p => String(p.id) === id)

    if (!project) {
      return {
        statusCode: 404,
        message: 'Project not found'
      }
    }

    return project
  }
})
