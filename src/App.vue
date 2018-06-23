<template>
  <div>
    <Menu/>
      <div id="page">
          <transition name="fade">
              <router-view></router-view>
          </transition>
      </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import Menu from '@/pages/main/menu'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>
