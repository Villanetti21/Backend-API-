import mysql from 'mysql2/promise'


const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '181021',
  database: 'car'
})


export { connection }