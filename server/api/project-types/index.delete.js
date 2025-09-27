import { readFile, writeFile } from 'fs/promises'
import { query } from '../../lib/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = body.id
  try {
    await query('DELETE FROM project_types WHERE id = ?', [id])
    return { success: true }
  } catch (err) {
    const file = 'server/data/project-types.json'
    let types = JSON.parse(await readFile(file, 'utf-8'))
    types = types.filter(t => t.id !== id)
    await writeFile(file, JSON.stringify(types, null, 2))
    return { success: true }
  }
})
