<template lang="html">
  <form class="col-6 m-4">
    <fieldset>
      <div class="form-group">
        <label for="disabledTextInput">Nome do Jogo</label>
        <input v-model="jogo.nome" type="text" id="disabledTextInput" class="form-control" placeholder="">
      </div>
      <div class="form-group">
        <label for="disabledSelect">Selecionar Gênero</label>
        <select v-model="jogo.idGenero" id="disabledSelect" class="form-control">
          <option v-for="genero in generos" :key="genero.id" :value="genero.id">{{ genero.nome }}</option>
        </select>
      </div>
      <label for="">Selecione o zip de Arquivos</label>
      <div class="custom-file mb-3">
        <input type="file" class="custom-file-input" id="customFile">
        <label class="custom-file-label" for="customFile">Escolha o arquivo</label>
      </div>
      <div @click.prevent="cadastrar" class="btn btn-primary">Cadastrar</div>
    </fieldset>
  </form>
</template>

<script>
import Proxy from '@/proxies/Proxy'
export default {
  name: 'jogos-form',
  data: function () {
    return {
      generos: [],
      jogo: {
        nome: '',
        idGenero: 0
      }
    }
  },
  created () {
    this.carregarPagina()
  },
  methods: {
    carregarPagina () {
      const proxy = new Proxy('genero')
      const response = proxy.findAll()
      response.then(retorno => { this.generos = retorno.data })
    },
    cadastrar () {
      console.warn('here')
      const proxy = new Proxy('jogo')
      const response = proxy.create(this.jogo)
      response.then(retorno => {
        if (retorno.data) {
          console.warn('sucesso')
        } else {
          console.warn('erro')
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
