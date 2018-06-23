<template>
  <div>
    <Menu/>
    <div class="register-photo">
      <div class="clearfix"></div>
      <div class="clearfix"></div>
      <div class="form-container">
        <form class="col-6">
          <h2 class="text-center"><strong>Criar uma conta</strong></h2>
          <div class="form-group"><input v-model="usuario.nome" class="form-control" type="text" name="Nome" placeholder="nome"></div>
          <div class="form-group"><input v-model="usuario.senha" class="form-control" type="password" name="senha" placeholder="Password" autocomplete="off" inputmode="numeric"></div>
          <div class="form-group"><input v-model="usuario.reSenha" class="form-control" type="password" name="confirmar senha" placeholder="Password (repeat)"></div><input v-model="usuario.email" class="form-control visible" type="email" name="E-mail" value="E-mail" placeholder="Email">
          <div class="form-group">
              <div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox">I agree to the license terms.</label></div>
          </div>
          <div class="form-group"><button class="btn btn-primary btn-block" type="submit" @click="cadastro" style="padding:7px;margin:28px;height:40px;">Sign Up</button></div>
          <a href="#" class="already">You already have an account? Login here.</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import Menu from '@/pages/main/menu'
import Proxy from '@/proxies/Proxy'

export default {
  name: 'novo-usuario',
  data: function () {
    return {
      usuario: {
        nome: '',
        senha: '',
        reSenha: '',
        email: ''
      }
    }
  },
  methods: {
    cadastro () {
      if (this.usuario.senha !== this.usuario.reSenha) {
        console.warn('senhas nao concidem!')
      } else {
        const proxy = new Proxy('usuario')
        const response = proxy.create(this.usuario, ...this.usuario.reSenha)
        response.then(retorno => console.warn(retorno))
      }
    }
  },
  components: {
    Menu
  }
}
</script>
