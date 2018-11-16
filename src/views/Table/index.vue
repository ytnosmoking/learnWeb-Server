<template>
  <div>
    123
  </div>
</template>
<script>
export default {
  name: 'TableIndex',
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    console.log(1)
  },
  methods: {
    change() {
      console.log(2)
    }
  }
}
</script>
<style scoped>
div {
  height: 100px;
}
</style>
