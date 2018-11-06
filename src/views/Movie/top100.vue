<template>
 <div>
   this is top100

   <el-button @click="getSelfDetail">getSelf movie detail</el-button>
   <br>
   <el-button @click="getSelfGoodId">getSelf goods Id</el-button>
 </div>
</template>

<script>
export default {
  name: 'Top100',
  data () {
    return {}
  },
  methods: {
    getSelfDetail () {
      this.$store.dispatch('getSelfDetail')
    },
    getSelfGoodId () {
      this.$store.dispatch('getSelfGoodId')
    }
  }
}
</script>

<style lang='less' scoped>
</style>
