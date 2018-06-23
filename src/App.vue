<template>
  <div>
    <Menu/>
  </div>
</template>

<script>
// import Vue from 'vue'
import Menu from '@/pages/main/menu'
import Proxy from '@/proxies/Proxy'

export default {
  name: 'App',
  components: {
    Menu
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
</style>
