<template>
  <div>
    <h3>{{ data.msg }}</h3>
    <button @click="clickTest">123123123123</button>
  </div>
</template>

<script>
export default {
  name: 'IndexAll',
  data() {
    return {
      data: {
        name: 'index',
        msg: ' first workstation'
      }
    }
  },
  mounted() {},
  methods: {
    clickTest() {
      this.$store.dispatch('testUrl')
    }
  }
}
</script>

<style lang='less' scoped>
</style>
