import { initDb, query } from '../lib/db.js'

async function main(){
  initDb()
  const tables = ['categories','blogs','projects']
  for (const t of tables) {
    try {
      const col = await query("SELECT COLUMN_NAME, COLUMN_TYPE FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME='id'", [t])
      if (!col || col.length === 0) {
        console.log(`${t}: no id column found, skipping`)
        continue
      }
      const type = col[0].COLUMN_TYPE
      if (type.toLowerCase().startsWith('bigint')) {
        console.log(`${t}: already bigint`) 
        continue
      }
      console.log(`${t}: converting id from ${type} -> BIGINT`)
      await query(`ALTER TABLE \`${t}\` MODIFY \`id\` BIGINT NOT NULL AUTO_INCREMENT`)
      console.log(`${t}: converted`)
    } catch (e) {
      console.error(`${t}: convert failed:`, e.message)
    }
  }
  process.exit(0)
}

main()
