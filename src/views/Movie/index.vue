<template>
 <div>
    this is 大杂烩
 </div>
</template>

<script>
export default {
  name: 'MovieIndex',
  data () {
    return {

    }
  },
  methods: {
    getTotalMovie () {
      this.$store.dispatch('getTotalMovie')
    }
  },
  mounted () {
    this.getTotalMovie()
  }
}
</script>

<style lang='less' scoped>

</style>
