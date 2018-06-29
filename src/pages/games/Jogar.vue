<template>
  <div>
    <iframe :src="link" width="800" height="600"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Jogar',
  data: function () {
    return {
      link: 'https://www.w3.org/Style/Examples/011/firstcss.en.html'
    }
  }
}
</script>

<style lang="css">
</style>
