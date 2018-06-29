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
    <div class="register-photo">
      <div class="clearfix"></div>
      <div class="clearfix"></div>
      <div class="form-container">
        <form class="col-6">
          <h2 class="text-center"><strong>Criar uma conta</strong></h2>
          <div class="form-group"><input v-model="usuario.nome" class="form-control" type="text" name="Nome" placeholder="Nome"></div>
          <div class="form-group"><input v-model="usuario.usuario" class="form-control" type="text" name="Usuario" placeholder="Usuario"></div>
          <div class="form-group"><input v-model="usuario.senha" class="form-control" type="password" name="senha" placeholder="Senha" autocomplete="off" inputmode="numeric"></div>
          <div class="form-group"><input v-model="reSenha" class="form-control" type="password" name="confirmar senha" placeholder="Repetir a Senha"></div>
          <input v-model="usuario.email" class="form-control visible" type="email" name="E-mail" value="E-mail" placeholder="Email">
          <div class="form-group"><button class="btn btn-primary col-4" type="submit" @click.prevent="cadastro" style="padding:7px;margin:28px;height:40px; ">Cadastrar</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import Proxy from '@/proxies/Proxy'

export default {
  name: 'novo-usuario',
  data: function () {
    return {
      usuario: {
        nome: '',
        usuario: '',
        senha: '',
        email: ''
      },
      reSenha: '',
      sucesso: false,
      falha: false
    }
  },
  methods: {
    cadastro () {
      if (this.usuario.senha !== this.reSenha) {
        this.msg = 'As senhas nao concidem!'
        this.falha = true
      } else {
        const proxy = new Proxy('usuario')
        console.warn(this.usuario)
        const response = proxy.create(this.usuario)
        response.then(retorno => {
          if (retorno.data) {
            this.msg = 'Usuario cadastrado com sucesso!'
            this.sucesso = true
          } else {
            this.msg = 'Falha ao cadastrar usuario!'
            this.falha = true
          }
        }).catch((e) => {
          this.msg = e
          this.falha = true
        })
      }
    },
    resetAlert () {
      this.sucesso = false
      this.falha = false
    }
  }
}
</script>
