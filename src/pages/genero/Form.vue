<template>
  <div>
    <div v-if="sucesso" class="m-4 text-center alert alert-success" role="alert">
      {{ msg }}
      <button type="button" class="close" aria-label="Close">
        <span @click.prevent="resetAlert">&times;</span>
      </button>
    </div>
    <div v-if="falha" class="m-4 text-center alert alert-danger" role="alert">
      {{ msg }}
      <button type="button" class="close" aria-label="Close">
        <span @click.prevent="resetAlert">&times;</span>
      </button>
    </div>
      <form class="col-6">
        <h2 class="text-center"><strong>Cadastrar Genero</strong></h2>
        <div class="form-group"><input v-model="genero.nome" class="form-control" type="text" name="Nome" placeholder="Nome do Genero"></div>
        <div class="form-group"><button class="btn btn-primary col-4" type="submit" @click.prevent="cadastro" style="padding:7px;margin:28px;height:40px; ">Guardar Genero</button></div>
      </form>
  </div>
</template>

<script>

import Proxy from '@/proxies/Proxy'

export default {
  name: 'novo-usuario',
  data: function () {
    return {
      genero: {
        nome: ''
      },
      sucesso: false,
      falha: false
    }
  },
  methods: {
    cadastro () {
      const proxy = new Proxy('genero')
      const response = proxy.create(this.genero)
      response.then(retorno => {
        if (retorno.data) {
          this.msg = 'Genero cadastrado com sucesso!'
          this.sucesso = true
        } else {
          this.msg = 'Falha ao cadastrar genero!'
          this.falha = true
        }
      }).catch((e) => {
        this.msg = e
        this.falha = true
      })
    },
    resetAlert () {
      this.sucesso = false
      this.falha = false
    }
  }
}
</script>
