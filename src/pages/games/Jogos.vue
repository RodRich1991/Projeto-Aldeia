<template lang="html">
  <div>
    <!-- <div v-for="jogo in jogos" :key="jogo.id">
      <h2>{{ jogo.nome }}</h2>
    </div> -->
    <div class="row m-3">
      <div class="card m-2" style="width: 18rem;" v-for="jogo in jogos" :key="jogo.id">
        <img class="card-img-top" src="../assets/img/alien.jpg" :alt="jogo.nome">
        <!-- <img class="card-img-top" :src="getPicName(jogo.nome)" :alt="jogo.nome"> -->
        <div class="card-body">
          <h5 class="card-title">{{ jogo.nome }}</h5>
          <p class="card-text">Um jogo que adivinha o seu pensamento.</p>
          <router-link :to="{ name: jogo.nome }"><div class="btn btn-primary">Jogar</div></router-link>
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
