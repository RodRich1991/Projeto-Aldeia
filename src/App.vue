<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
// import Vue from 'vue'
import HelloWorld from './components/HelloWorld'
// import {sql} from './db/connection.js'

// Vue.use(sql)

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      query: "INSERT INTO tb_genero (nome) VALUES ('acao');",
      object: null
    }
  },
  created () {
    // this.object = this.createConnect()
    // this.object.connect()
    this.newtest()
  },
  methods: {
    prepareConnection () {
      return require('mysql')
    },
    createConnect () {
      return this.prepareConnection().createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'vertrigo',
        database: 'aldeia'
      }).then(this.connect())
    },
    newtest () {
      var mysql = require('mysql')
      var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'vertrigo'
      })
      con.connect(function (err) {
        if (err) throw err
        console.log('Connected!')
      })
    }
    // makeConnection () {
    //   return this.createConnection().connect((err) => {
    //     if (err) return console.log(err)
    //     console.log('Conectado no BD!')
    //   })
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
