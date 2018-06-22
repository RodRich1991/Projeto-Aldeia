<script>

export default {
  methods: {
    connect () {
      const mysql = require('mysql')

      const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'vertrigo',
        database: 'aldeia'
      })

      return connection.connect(function (err) {
        if (err) return console.log(err)
        console.log('Conectado no BD!')
      })
    },
    close (connection) {
      connection.end()
      console.log('Conexão fechada!')
    },

    sql (query) {
      const con = this.connect()
      con.query(query, (error, results, fields) => {
        if (error)console.log(error)
      })
      this.close(con)
    }

  }
}

</script>
