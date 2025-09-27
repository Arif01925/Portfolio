import { initDb, query } from '../lib/db.js'

async function main(){
  initDb()
  try{
    const fkRows = await query("SELECT CONSTRAINT_NAME FROM information_schema.KEY_COLUMN_USAGE WHERE TABLE_SCHEMA=DATABASE() AND REFERENCED_TABLE_NAME='categories' AND TABLE_NAME='blogs' AND REFERENCED_COLUMN_NAME='id'")
    const fk = fkRows && fkRows[0] ? fkRows[0].CONSTRAINT_NAME : null
    console.log('Found FK:', fk)
    if (fk) {
        await query(`ALTER TABLE blogs DROP FOREIGN KEY ${fk}`)
      console.log('Dropped FK', fk)
    }
    await query("ALTER TABLE `categories` MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT")
    console.log('Converted categories.id to BIGINT')
    if (fk) {
        await query(`ALTER TABLE blogs ADD CONSTRAINT ${fk} FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL`)
      console.log('Re-added FK', fk)
    }
    process.exit(0)
  }catch(e){
    console.error('Error:', e.message)
    process.exit(1)
  }
}

main()
