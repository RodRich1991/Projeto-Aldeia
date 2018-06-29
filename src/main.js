// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App'
import Login from './pages/main/Login'
import NewUser from './pages/usuario/Novo'
import JogosForm from './pages/games/Form'
import Jogos from './pages/games/Jogos'
import Jogar from './pages/games/Jogar'
import NewGenero from './pages/genero/Form'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    name: 'index',
    path: '/',
    component: Jogos
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'cadastro-usuario',
    path: '/cadastro-usuario',
    component: NewUser
  },
  {
    name: 'cadastro-genero',
    path: '/genero/novo',
    component: NewGenero
  },
  {
    name: 'jogo-form',
    path: '/jogos/novo',
    component: JogosForm
  },
  {
    name: 'jogar',
    path: '/jogar',
    component: Jogar
  },
  {
    name: 'jogos',
    path: '/jogos',
    component: Jogos
  }
]

const router = new VueRouter({
  routes: routes, // short for `routes: routes`
  mode: 'history'
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
