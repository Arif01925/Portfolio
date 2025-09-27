import { initDb, query } from '../lib/db.js'

async function main(){
  initDb()
  try{
    const rows = await query("SELECT TABLE_NAME, CONSTRAINT_NAME, COLUMN_NAME FROM information_schema.KEY_COLUMN_USAGE WHERE TABLE_SCHEMA=DATABASE() AND REFERENCED_TABLE_NAME='categories' AND REFERENCED_COLUMN_NAME='id'")
    console.log('FKs referencing categories.id:', rows)
    process.exit(0)
  }catch(e){
    console.error(e)
    process.exit(1)
  }
}

main()
