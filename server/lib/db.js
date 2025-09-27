import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import { existsSync } from 'fs'

// Load .env if present
if (existsSync('.env')) dotenv.config()

const {
  DB_HOST = 'localhost',
  DB_PORT = '3306',
  DB_USER = 'root',
  DB_PASSWORD = '',
  DB_NAME = 'portfolio'
} = process.env

let pool

export function initDb(opts = {}) {
  if (pool) return pool
  pool = mysql.createPool({
    host: opts.host || DB_HOST,
    port: opts.port ? Number(opts.port) : Number(DB_PORT),
    user: opts.user || DB_USER,
    password: opts.password || DB_PASSWORD,
    database: opts.database || DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  return pool
}

export async function query(sql, params = []) {
  if (!pool) initDb()
  const [rows] = await pool.execute(sql, params)
  return rows
}

export default { initDb, query }
