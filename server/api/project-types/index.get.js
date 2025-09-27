import { readFile } from 'fs/promises'
import { query } from '../../lib/db'

export default defineEventHandler(async () => {
  try {
    const rows = await query('SELECT id, name FROM project_types ORDER BY name')
    return rows
  } catch (err) {
    const data = await readFile('server/data/project-types.json', 'utf-8')
    return JSON.parse(data)
  }
})
