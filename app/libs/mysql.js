import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: "191.101.230.154",
  user: "u747016719_property",
  password: "~rXHj4h0=R",
  database: "u747016719_propertyease",
  waitForConnections: true,
})

export default pool

