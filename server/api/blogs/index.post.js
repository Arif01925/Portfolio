import { writeFile, readFile, mkdir } from 'fs/promises'
import { join, basename } from 'path'
import formidable from 'formidable'

export default defineEventHandler(async (event) => {
  const uploadDir = join(process.cwd(), 'public', 'images', 'tmp')

  const form = formidable({ uploadDir, keepExtensions: true })

  try {
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(event.req, (err, fields, files) => {
        if (err) return reject(err)
        resolve([fields, files])
      })
    })

    const title = fields.title?.[0] || ''
    const excerpt = fields.excerpt?.[0] || ''
    const content = fields.content?.[0] || ''
    const category = fields.category?.[0] || ''
    const date = fields.date?.[0] || ''

    const slug = title.toLowerCase().replace(/\s+/g, '-') || `post-${Date.now()}`
    const postFolder = join(process.cwd(), 'public', 'images', 'blogs', slug)
    await mkdir(postFolder, { recursive: true })

    let thumbnail = ''
    if (files.thumbnail?.[0]) {
      const thumbPath = files.thumbnail[0].filepath || files.thumbnail[0].upload
      const thumbName = basename(thumbPath)
      await writeFile(join(postFolder, thumbName), await readFile(thumbPath))
      thumbnail = `/images/blogs/${slug}/${thumbName}`
    }

    const dbPath = join(process.cwd(), 'server', 'data', 'blogs.json')
    const existing = JSON.parse(await readFile(dbPath, 'utf-8'))

    const newPost = {
      id: Date.now(),
      title,
      excerpt,
      content,
      category,
      date,
      thumbnail,
      slug,
    }

    existing.push(newPost)
    await writeFile(dbPath, JSON.stringify(existing, null, 2))

    return { success: true, post: newPost }
  } catch (err) {
    console.error('[BLOG_SAVE_ERROR]', err)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Failed to save post' }))
  }
})
