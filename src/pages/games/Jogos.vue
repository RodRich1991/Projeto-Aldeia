<template lang="html">
  <div>
    <!-- <div v-for="jogo in jogos" :key="jogo.id">
      <h2>{{ jogo.nome }}</h2>
    </div> -->
    <div class="row m-3">
      <div class="card border-info m-3" style="width: 18rem;" v-for="jogo in jogos" :key="jogo.id">
        <img class="card-img-top" src="../assets/img/alien.jpg" :alt="jogo.nome">
        <!-- <img class="card-img-top" :src="getPicName(jogo.nome)" :alt="jogo.nome"> -->
        <div class="card-body pt-2 d-flex flex-column justify-content-between">
          <span class="card-title text-info" style="font-weight: bold; font-size: 1.5rem;">
            {{ jogo.nome }}
          </span>
          <p class="card-text text-dark">
            {{ jogo.descricao }}
          </p>
          <router-link :to="{ name: jogo.nome }" class="btn btn-outline-info w-100">
            Jogar
          </router-link>
        </div>
      </div>
    </div>
    <iframe id="iframe" class="w-100" height="700"/>
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
    this.setIframe('<p>hello</p>')
  },
  methods: {
    setIframe (html) {
      document.getElementById('iframe').src = 'data:text/html;charset=utf-8,' + escape(html)
    },
    carregarPagina () {
      const proxy = new Proxy('jogo')
      const response = proxy.findAll()
      response.then(retorno => { this.jogos = retorno.data })
    },
    getPicName (jogo) {
      // return "../assets/img/"+jogo.replace(" ","-")+".jpg"
      return '../assets/img/alien.jpg'
    }
  }
}
</script>

<style lang="css">
</style>
