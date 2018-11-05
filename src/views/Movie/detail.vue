<template>
  <div class="detail">
    <img v-lazy="detail.images.large" class="fl detail_img">
    <h3>{{detail.original_title}}</h3>
    <h5>译名：<span v-for="name in detail.aka" :key="name">{{name}}&nbsp;</span></h5>

  </div>
</template>

<script>
export default {
  name: 'BikeDetail',
  data () {
    return {
      detail: {
        original_title: '',
        images: {}
      }
    }
  },
  methods: {
    goBack (query) {
      return new Promise((resolve, reject) => {
        console.log(query)
        if (JSON.stringify(query) === '{}') {
          // this.$message('请选择产品...')
          this.$message({
            message: '请选择电影...',
            type: 'warning'
          })
          this.$router.go(-1)
        } else {
          resolve()
        }
      })
    },
    getFilmDetail (movieId) {
      console.log(movieId)
      return this.$store.dispatch('getFilmDetail', movieId)
    }
  },
  mounted () {
    const movieId = this.$route.query
    this.goBack(movieId).then(() => {
      this.getFilmDetail(movieId).then(res => {
        console.log(res)
        this.detail = res
      })
    })
  },
  watch: {
    $route (to, from) {
      console.log(to.query)
      const movieId = to.query
      this.goBack(movieId)
    }
  }
}
</script>

<style lang='less' scoped>
.detail {
.detail_img {
  width: 270px;
  height: 400px;
}
  .imgCont {
    width: 50%;
    height: 300px;
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
