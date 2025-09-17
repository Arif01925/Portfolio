import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async () => {
  const file = join('server', 'data', 'blogs.json')
  const data = await readFile(file, 'utf-8')
  return JSON.parse(data)
})
