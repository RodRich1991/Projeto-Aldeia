// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App'
import Login from './pages/main/Login'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
