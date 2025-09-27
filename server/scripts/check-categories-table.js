import { initDb, query } from '../lib/db.js'

async function main(){
  initDb()
  try{
    const col = await query("SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_KEY, EXTRA FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'categories' AND COLUMN_NAME='id'")
    console.log('COLUMN INFO:', col)
    const create = await query('SHOW CREATE TABLE categories')
    console.log('SHOW CREATE TABLE:', create[0])
    const t = await query("SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'categories'")
    console.log('AUTO_INCREMENT:', t[0])
    const maxId = await query('SELECT MAX(id) as maxId FROM categories')
    console.log('MAX ID:', maxId[0])
    process.exit(0)
  }catch(e){
    console.error('ERR', e)
    process.exit(1)
  }
}

main()
