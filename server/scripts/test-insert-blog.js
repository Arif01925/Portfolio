import { query, initDb } from '../lib/db.js'
import dotenv from 'dotenv'
dotenv.config()

async function run(){
  try{
    initDb()
    const cat = await query('SELECT id FROM categories WHERE name = ? LIMIT 1', ['AI'])
    const catId = (cat && cat[0] && cat[0].id) || null
    const title = 'Testing'
    const content = 'I Love google Banana AI'
    const excerpt = 'seriously'
    const featured = '/images/blogs/testing/ub4i5o3sf1p0d6oc2r31m8zhc.png'
    const slug = 'testing'
    const sql = 'INSERT INTO blogs (title, content, excerpt, category_id, featured_image, slug, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())'
    console.log('About to run:', sql)
    const res = await query(sql, [title, content, excerpt, catId, featured, slug])
    console.log('Insert result:', res)
  }catch(err){
    console.error('TEST INSERT ERROR')
    console.error(err && err.stack ? err.stack : err)
  }
}

run()
