import { readFile, writeFile } from 'fs/promises'
import { query } from '../../lib/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const name = body.name
  try {
    const res = await query('INSERT INTO project_types (name) VALUES (?)', [name])
    return { success: true, id: res.insertId }
  } catch (err) {
    // Fallback to JSON
    const file = 'server/data/project-types.json'
    const types = JSON.parse(await readFile(file, 'utf-8'))
    types.push({ id: Date.now(), name })
    await writeFile(file, JSON.stringify(types, null, 2))
    return { success: true }
  }
})
