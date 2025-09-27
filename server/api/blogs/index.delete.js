import { readFile, writeFile, rm } from 'fs/promises'
import { join } from 'path'
import { query } from '../../lib/db'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const postId = body.id

    // Try deleting from DB first
    try {
      await query('DELETE FROM blogs WHERE id = ?', [postId])
    } catch (dbErr) {
      console.warn('[BLOG_DB_DELETE_FAILED]', dbErr.message)
    }

    const filePath = join('server', 'data', 'blogs.json')
    const postsData = JSON.parse(await readFile(filePath, 'utf-8'))
    const postToDelete = postsData.find(p => p.id === postId)

    if (!postToDelete) throw new Error('Post not found')

    const updatedData = postsData.filter(p => p.id !== postId)
    await writeFile(filePath, JSON.stringify(updatedData, null, 2))

    // Remove image folder
    const postFolder = join('public', 'images', 'blogs', postToDelete.slug)
    await rm(postFolder, { recursive: true, force: true })

    return { success: true }
  } catch (err) {
    console.error('[BLOG_DELETE_ERROR]', err)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Failed to delete post' }))
  }
})
