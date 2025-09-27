import { initDb, query } from '../lib/db.js'

async function main(){
  initDb()
  try{
    const rows = await query('SELECT * FROM projects LIMIT 5')
    console.log('SAMPLE PROJECTS:', rows)
    process.exit(0)
  }catch(e){
    console.error(e)
    process.exit(1)
  }
}

main()
