<template>
 <div>
    this is bike-detail
 </div>
</template>

<script>
export default {
  name: 'BikeDetail',
  data () {
    return {

    }
  },
  mounted () {
    // console.log(this.$router)
    console.log(this.$route.params)
    // if (this.$route.params.id === ':id') {
    //   this.$router.go(-1)
    //   // alert(1)
    // }
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      alert(1)
    }
  }
}
</script>

<style lang='less' scoped>

</style>
