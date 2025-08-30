import { readFile, writeFile } from 'fs/promises'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const file = 'server/data/project-types.json'
  let types = JSON.parse(await readFile(file, 'utf-8'))
  types = types.filter(t => t.id !== body.id)
  await writeFile(file, JSON.stringify(types, null, 2))
  return { success: true }
})
