<template lang="html">
  <form class="w-100">
    <div v-if="sucesso" class="m-4 text-center alert alert-success" role="alert">
      Jogo cadastrado com sucesso!
      <button type="button" class="close" aria-label="Close">
        <span @click.prevent="resetAlert">&times;</span>
      </button>
    </div>
    <div v-if="falha" class="m-4 text-center alert alert-danger" role="alert">
      Falha ao cadastrar o jogo!
      <button type="button" class="close" aria-label="Close">
        <span @click.prevent="resetAlert">&times;</span>
      </button>
    </div>
    <fieldset class="col-6 m-3">
      <div class="form-group">
        <label for="disabledTextInput">Nome</label>
        <input v-model="jogo.nome" type="text" id="disabledTextInput" class="form-control bg-light" placeholder="">
      </div>
      <div class="form-group">
        <label for="disabledSelect">Selecionar Gênero</label>
        <select v-model="jogo.idGenero" id="disabledSelect" class="form-control bg-light">
          <option v-for="genero in generos" :key="genero.id" :value="genero.id">{{ genero.nome }}</option>
        </select>
      </div>
      <label for="">Selecione o zip de Arquivos</label>
      <div class="custom-file mb-3">
        <label class="custom-file-label" for="customFile">Escolha o arquivo</label>
        <input type="file" class="custom-file-input bg-light" id="customFile">
      </div>
      <div class="form-group">
        <label for="disabledTextInput">Digite o caminho do jogo</label>
        <input v-model="jogo.pathUrl" type="text" id="URL" class="form-control bg-light" placeholder="">
      </div>
      <div class="form-group">
        <label for="disablesDesc">Descrição</label>
        <textarea rows="3" v-model="jogo.descricao" id="disablesDesc" class="form-control bg-light"></textarea>
      </div>
      <div @click.prevent="cadastrar" class="btn btn-info p-2 pl-3 pr-3">Cadastrar</div>
    </fieldset>
  </form>
</template>

<script>
import Proxy from '@/proxies/Proxy'
import VueFrame from 'vue-frame'

export default {
  name: 'jogos-form',
  data: function () {
    return {
      generos: [],
      jogo: {
        nome: '',
        idGenero: 0,
        descricao: '',
        pathUrl: ''
      },
      sucesso: false,
      falha: false
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
      const self = this
      const proxy = new Proxy('jogo')
      const response = proxy.create(this.jogo)
      response.then(retorno => {
        if (retorno.data) {
          self.sucesso = true
        } else {
          self.falha = true
        }
      }).catch(() => { self.falha = true })
    },
    resetAlert () {
      this.sucesso = false
      this.falha = false
    }
  },
  components: {
    VueFrame
  }
}
</script>

<style lang="css">
</style>
