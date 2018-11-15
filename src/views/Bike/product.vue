<template>
  <div class="product">
    <router-link
      v-for="(img , index) in lists"
      :key="index"
      :to="{'name': '详细信息', query:{productId: img.id}}">
      <img v-lazy="img.img">
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'BikeProduct',
  data() {
    return {
      lists: []
    }
  },
  mounted() {
    this.getBikeProducts()
  },
  methods: {
    getBikeProducts() {
      this.$store.dispatch('getBikeProducts').then(res => {
        this.lists = res
      })
    }
  }
}
</script>

<style lang='less' scoped>
.product {
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  text-align: left;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    width: 240px;
    height: 400px;
  }
}
</style>
