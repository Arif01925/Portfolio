import { readFile } from 'fs/promises'
import path from 'path'
import dotenv from 'dotenv'
import { initDb, query } from '../lib/db.js'

dotenv.config()

async function main() {
  try {
    initDb()
    const file = path.join(process.cwd(), 'server', 'db', 'schema.sql')
    const sql = await readFile(file, 'utf8')

    // Naive split by semicolon to run individual statements
    const statements = sql
      .split(/;\s*\n/)
      .map(s => s.trim())
      .filter(s => s && !s.startsWith('--'))

    for (const stmt of statements) {
      try {
        await query(stmt)
      } catch (err) {
        console.warn('Statement failed (continuing):', err.message)
      }
    }

    console.log('Schema applied (best-effort)')
    process.exit(0)
  } catch (err) {
    console.error('Failed to apply schema:', err)
    process.exit(1)
  }
}

main()
