import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async (event) => {
  const id = event.context.params.id
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
})
