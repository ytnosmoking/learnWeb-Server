<template>
  <div>
    <h3> {{ data.msg }}</h3>

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
  methods: {}
}
</script>

<style lang='less' scoped>
</style>
