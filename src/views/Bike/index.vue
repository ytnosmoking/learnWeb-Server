<template>
 <div>
   this is how to {{data.style}} my {{data.name}}
 </div>
</template>

<script>
export default {
  name: 'Bike',
  data () {
    return {
      data: {
        name: 'bike',
        style: 'ride'
      }
    }
  }
}
</script>

<style lang='less' scoped>

</style>
