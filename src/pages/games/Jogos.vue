<template lang="html">
  <div>
    <div class="row m-3">
      <div class="card border-info m-3" style="width: 18rem;" v-for="jogo in jogos" :key="jogo.id">
        <img class="card-img-top" :src="`${jogo.path_url}miniatura.png`" :alt="jogo.nome">
        <div class="card-body pt-2 d-flex flex-column justify-content-between">
          <span class="card-title text-info" style="font-weight: bold; font-size: 1.5rem;">
            {{ jogo.nome }}
          </span>
          <p class="card-text text-dark">
            {{ jogo.descricao }}
          </p>
          <router-link :to="{ name: 'jogar', params: { url: jogo.path_url }}" class="btn btn-outline-info w-100">
            Jogar
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Proxy from '@/proxies/Proxy'
export default {
  name: 'Jogos',
  data: function () {
    return {
      jogos: []
    }
  },
  created () {
    this.carregarPagina()
  },
  methods: {
    carregarPagina () {
      const proxy = new Proxy('jogo')
      const response = proxy.findAll()
      response.then(retorno => { this.jogos = retorno.data })
    }
  }
}
</script>

<style lang="css">
</style>
