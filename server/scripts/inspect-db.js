import { query, initDb } from '../lib/db.js'

async function showColumns(table) {
  try {
    const rows = await query("SELECT COLUMN_NAME, COLUMN_TYPE FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?", [table])
    console.log('Table:', table)
    if (!rows || rows.length === 0) {
      console.log('  (no such table)')
      return
    }
    for (const r of rows) console.log('  ', r.COLUMN_NAME, r.COLUMN_TYPE)
  } catch (err) {
    console.error('Error inspecting', table, err.message)
  }
}

async function main() {
  initDb()
  const tables = ['projects', 'blogs', 'categories', 'project_types', 'users', 'project_images']
  for (const t of tables) await showColumns(t)
  process.exit(0)
}

main()
