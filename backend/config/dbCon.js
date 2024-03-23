import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const { DBHOST, DBUSERNAME, DBPASS, DBNAME } = process.env

const conn = mysql.createConnection({
  host: DBHOST,
  user: DBUSERNAME,
  password: DBPASS,
  database: DBNAME
})

conn.connect(function (err) {
  if (err) throw err
  console.log('Database Connected')
})

export { conn }
