<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
// import Vue from 'vue'
import HelloWorld from './components/HelloWorld'
import Proxy from '@/proxies/Proxy'

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
    const proxy = new Proxy('genero')
    const response = proxy.findOneById(8)
    response.then(retorno => console.warn(retorno))
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
