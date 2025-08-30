import { readFile, writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false
  }
}

export default defineEventHandler(async (event) => {
  const form = formidable({ multiples: true, uploadDir: './public/images/tmp', keepExtensions: true })

  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) reject(err)
      else resolve({ fields, files })
    })
  })

  const id = Number(fields.id?.[0])
  const title = fields.title?.[0] || ''
  const description = fields.description?.[0] || ''
  const type = fields.type?.[0] || ''
  const date = fields.date?.[0] || ''

  const safeTitle = title.replace(/\s+/g, '_').toLowerCase()
  const folderPath = `public/images/projects/${safeTitle}`
  await mkdir(folderPath, { recursive: true })

  const dbPath = 'server/data/projects.json'
  let data = JSON.parse(await readFile(dbPath, 'utf-8'))

  const index = data.findIndex(p => p.id === id)
  if (index === -1) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' })
  }

  // Thumbnail replace
  let thumbnail = data[index].thumbnail
  if (files.thumbnail?.[0]) {
    const thumbFile = files.thumbnail[0]
    const thumbName = `thumb_${Date.now()}_${thumbFile.originalFilename}`
    await writeFile(join(folderPath, thumbName), await readFile(thumbFile.filepath))
    thumbnail = `${folderPath}/${thumbName}`
  }

  // Append new images
  const images = data[index].images || []
  if (files.images) {
    for (const file of files.images) {
      const imageName = `img_${Date.now()}_${file.originalFilename}`
      await writeFile(join(folderPath, imageName), await readFile(file.filepath))
      images.push(`${folderPath}/${imageName}`)
    }
  }

  data[index] = { id, title, description, type, date, thumbnail, images }

  await writeFile(dbPath, JSON.stringify(data, null, 2))
  return { message: 'Project updated successfully.' }
})
