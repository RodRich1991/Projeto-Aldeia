<template>
  <div>
    <iframe :src="link" width="1366" height="768"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Jogar',
  data: function () {
    return {
      link: ''
    }
  },
  created () {
    // console.warn(this.$route)
    this.link = this.$route.params.url
  }
}
</script>

<style lang="css">
</style>
