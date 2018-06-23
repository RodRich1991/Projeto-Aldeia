<template lang="html">
  <div>
    <div id="mostrador">
      <p style="float: left; margin-right: 10px;">Vez do Jogador:</p>
      <img src="" border="0" height="50">
    </div>
    <div class="tabuleiro">
      <div id="a1" class="espaco" jogada=""></div>
      <div id="a2" class="espaco" jogada=""></div>
      <div id="a3" class="espaco" jogada=""></div>
      <div id="b1" class="espaco" jogada=""></div>
      <div id="b2" class="espaco" jogada=""></div>
      <div id="b3" class="espaco" jogada=""></div>
      <div id="c1" class="espaco" jogada=""></div>
      <div id="c2" class="espaco" jogada=""></div>
      <div id="c3" class="espaco" jogada=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Velha',
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
