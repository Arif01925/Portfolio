import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  const filePath = path.join(process.cwd(), 'server', 'data', 'blogs.json')
  const data = await fs.readFile(filePath, 'utf8')
  const posts = JSON.parse(data)

  const post = posts.find(p => String(p.id) === id || p.slug === id)

  if (!post) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found' })
  }

  return post
})
