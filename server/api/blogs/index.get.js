import { readFile } from 'fs/promises'
import { join } from 'path'
import { query } from '../../lib/db'

export default defineEventHandler(async () => {
  try {
    const rows = await query('SELECT id, title, excerpt, category, date, thumbnail, slug FROM blogs ORDER BY date DESC')
    return rows
  } catch (err) {
    const file = join('server', 'data', 'blogs.json')
    const data = await readFile(file, 'utf-8')
    return JSON.parse(data)
  }
})
