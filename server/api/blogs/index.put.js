import { readFile, writeFile, mkdir } from 'fs/promises'
import { join, basename } from 'path'
import formidable from 'formidable'

export const config = { api: { bodyParser: false } }

export default defineEventHandler(async (event) => {
  const form = formidable({ multiples: false, uploadDir: './public/images/tmp', keepExtensions: true })

  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) reject(err)
      else resolve({ fields, files })
    })
  })

  const id = Number(fields.id?.[0] || fields.id)
  const title = fields.title?.[0] || fields.title || ''
  const excerpt = fields.excerpt?.[0] || fields.excerpt || ''
  const content = fields.content?.[0] || fields.content || ''
  const category = fields.category?.[0] || fields.category || ''
  const date = fields.date?.[0] || fields.date || ''

  const slug = title.toLowerCase().replace(/\s+/g, '-') || `post-${Date.now()}`
  const folderPath = join(process.cwd(), 'public', 'images', 'blogs', slug)
  await mkdir(folderPath, { recursive: true })

  const dbPath = join(process.cwd(), 'server', 'data', 'blogs.json')
  const data = JSON.parse(await readFile(dbPath, 'utf-8'))

  const index = data.findIndex(p => p.id === id)
  if (index === -1) throw createError({ statusCode: 404, statusMessage: 'Post not found' })

  let thumbnail = data[index].thumbnail || ''
  if (files.thumbnail) {
    const thumbFile = Array.isArray(files.thumbnail) ? files.thumbnail[0] : files.thumbnail
    const thumbName = basename(thumbFile.filepath || thumbFile.upload)
    await writeFile(join(folderPath, thumbName), await readFile(thumbFile.filepath || thumbFile.upload))
    thumbnail = `/images/blogs/${slug}/${thumbName}`
  }

  data[index] = { id, title, excerpt, content, category, date, thumbnail, slug }
  await writeFile(dbPath, JSON.stringify(data, null, 2))

  return { message: 'Post updated successfully.' }
})
