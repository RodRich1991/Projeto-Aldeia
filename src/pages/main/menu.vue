<template>
  <div class="d-block navbar navbar-light navbar-expand-md navigation-clean-button pt-0 pb-0" style="background: linear-gradient(to right, rgba(135,199,255,1) 0%, rgba(200,227,250,1) 35%, rgba(214,237,255,1) 65%, rgba(224,241,255,1) 85%, rgba(224,241,255,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#87c7ff', endColorstr='#e0f1ff', GradientType=1 );">
      <div class="d-flex align-items-center justify-content-between pl-3 pr-3">
        <router-link to="/">
          <span class="btn btn-outline-info p-0 pl-2 pr-2 mt-2 mb-2 mr-4 ml-0" style="font-size: 1.7rem;">
            Aldeia
          </span>
        </router-link>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
          <span class="sr-only">
            Toggle navigation
          </span>
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse w-100" id="navcol-1">
            <ul class="nav navbar-nav mr-auto w-100 d-flex align-items-center">
              <li class="nav-item" role="presentation">
                <router-link class="nav-link text-info" :style="`${$route.path === '/jogos' ? 'font-weight: bold;' : ''} font-size: 1.2rem;`" :to="{name: 'jogos'}">
                  Jogos
                </router-link>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link text-info" style="font-size: 1.2rem;" href="#">
                  Favoritos
                </a>
              </li>
              <li v-if="logado && usuario.grupo === 99" class="nav-item" role="presentation">
                <router-link :to="{ name: 'jogo-form'}" :style="`${$route.path === '/jogos/novo' ? 'font-weight: bold;' : ''} font-size: 1.2rem;`" class="nav-link text-info">
                  Cadastrar Jogo
                </router-link>
              </li>
              <li v-if="logado && usuario.grupo === 99" class="nav-item" role="presentation">
                <router-link :to="{ name: 'cadastro-genero'}" :style="`${$route.path === '/genero/novo' ? 'font-weight: bold;' : ''} font-size: 1.2rem;`" class="nav-link text-info">
                  Cadastrar Genero
                </router-link>
              </li>
            </ul>
            <div v-if="logado && usuario.id" class="row">
              <span>Bem vindo <strong>{{ usuario.nome }}</strong></span>
              <a href="#" @click="usuario = null; logado = false"><span>Sair</span></a>
            </div>
            <div v-else class="d-none d-lg-flex">
              <input v-model="txtUsuario" class="form-control mr-2 bg-light" style="height: 2.5rem; font-size: 0.8rem; width: auto;" type="text" name="usuario" placeholder="Usuario">
              <input v-model="txtSenha" class="form-control mr-2 bg-light" style="height: 2.5rem; font-size: 0.8rem; width: auto;" type="password" name="password" placeholder="Senha">
              <button class="btn btn-outline-info pl-3 pr-3" style="height: 2.5rem; font-size: 0.8rem;" @click="logar()">Entrar</button>
              <router-link :to="{ name: 'cadastro-usuario' }"><button class="btn btn-outline-info pl-3 pr-3 ml-1" style="height: 2.5rem; font-size: 0.8rem;">Cadastre-se</button></router-link>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Proxy from '@/proxies/Proxy'

export default {
  name: 'Menu',
  data () {
    return {
      logado: false,
      txtUsuario: '',
      txtSenha: '',
      usuario: null
    }
  },
  created () {
    this.carregarPagina()
  },
  methods: {
    carregarPagina () {
      console.warn(this.usuario)
    },
    logar () {
      const proxy = new Proxy('usuario')
      const response = proxy.findUser(this.txtUsuario)
      response.then(retorno => { this.usuario = retorno.data[0] })
      if (this.usuario.usuario === this.txtUsuario && this.usuario.senha === this.txtSenha) {
        this.logado = true
      }
    }
  }
}
</script>

<style scoped>
</style>
