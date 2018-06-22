const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'vertrigo',
  database: 'aldeia'
})

const query = "INSERT INTO tb_genero (nome) VALUES ('acao');"

connection.connect((err) => {
  if (err) return console.log(err)
  console.log('Conectado no BD!')
  sql(query)
})

connection.query(query, (error, results, fields) => {
    if (error)console.log(error)
    connection.end()
    console.log('Conexão fechada!')
})
