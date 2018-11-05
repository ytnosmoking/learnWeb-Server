<template>
  <div class="detail"  v-loading="loading">
    <!-- <img v-lazy="detail.imgs" class="fl"> -->
    <el-carousel class="imgCont fl"
      indicator-position="none">
      <el-carousel-item v-for="item in detail.imgs" :key="item">
        <img v-lazy="item" alt="">
      </el-carousel-item>
    </el-carousel>

    <p class="clearAfter">{{detail.detail}}</p>
    <el-popover
      width="200"
      trigger="hover"
      :content="detail.name">
     <h3 slot="reference">{{detail.name}}</h3>
    </el-popover>

    <em>{{detail.id}}</em>

    <el-carousel :interval="4000"
      arrow="never"
      type="card" indicator-position="none">
     <el-carousel-item v-for="item in detail.imgs" :key="item">
        <img v-lazy="item" alt="">
      </el-carousel-item>
    </el-carousel>
     <el-carousel indicator-position="outside" arrow="always">
      <el-carousel-item v-for="item in detail.imgs" :key="item">
        <img v-lazy="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'BikeDetail',
  data () {
    return {
      detail: {},
      loading: true
    }
  },
  methods: {
    goBack (query) {
      return new Promise((resolve, reject) => {
        console.log(query)
        if (JSON.stringify(query) === '{}') {
          // this.$message('请选择产品...')
          this.$message({
            message: '请选择产品...',
            type: 'warning'
          })
          this.$router.go(-1)
        } else {
          resolve()
        }
      })
    },
    getProductDetail (productId) {
      return this.$store.dispatch('getProductDetail', productId)
    }
  },
  mounted () {
    const productId = this.$route.query
    this.goBack(productId).then(() => {
      this.getProductDetail(productId).then(res => {
        console.log(res)

        setTimeout(() => {
          this.detail = res
          this.loading = false
        }, 5000)
      })
    })
  },
  watch: {
    $route (to, from) {
      console.log(to.query)
      const productId = to.query
      this.goBack(productId)
    }
  }
}
</script>

<style lang='less' scoped>
.detail {
  .imgCont {
    width: 50%;
    height: 300px;
  }
  img {
    width: 100%;
    height: 300px;
    border-radius: 5px;
  }
  p {
    padding-left: 52%;
    text-indent: 2em;
    text-align: left;
    height: 300px;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
