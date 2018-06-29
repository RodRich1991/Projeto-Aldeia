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
              <li v-if="logado" class="nav-item" role="presentation">
                <router-link :to="{ name: 'jogo-form'}" :style="`${$route.path === '/jogos/novo' ? 'font-weight: bold;' : ''} font-size: 1.2rem;`" class="nav-link text-info">
                  Cadastrar Jogo
                </router-link>
              </li>
            </ul>
            <div class="d-none d-lg-flex">
              <input class="form-control mr-2 bg-light" style="height: 2.5rem; font-size: 0.8rem; width: auto;" type="email" name="email" placeholder="E-mail">
              <input class="form-control mr-2 bg-light" style="height: 2.5rem; font-size: 0.8rem; width: auto;" type="password" name="password" placeholder="Senha">
              <button class="btn btn-outline-info pl-3 pr-3" style="height: 2.5rem; font-size: 0.8rem;" type="submit">Entrar</button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      logado: 1
    }
  }
}
</script>

<style scoped>
</style>
