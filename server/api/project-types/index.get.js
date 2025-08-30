import { readFile } from 'fs/promises'

export default defineEventHandler(async () => {
  const data = await readFile('server/data/project-types.json', 'utf-8')
  return JSON.parse(data)
})
