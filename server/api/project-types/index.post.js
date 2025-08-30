import { readFile, writeFile } from 'fs/promises'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const file = 'server/data/project-types.json'
  const types = JSON.parse(await readFile(file, 'utf-8'))
  types.push({ id: Date.now(), name: body.name })
  await writeFile(file, JSON.stringify(types, null, 2))
  return { success: true }
})
