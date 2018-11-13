<template>
  <div class="detail">
    <img v-lazy="detail.images.large" class="fl detail_img">
    <h3>{{detail.original_title}}</h3>
    <h5>译名：<span v-for="name in detail.aka" :key="name">{{name}}&nbsp;</span></h5>
    <div>导演：
      <span v-for="director in detail.directors" :key="director.id">
        {{director.name}}
      </span>
    </div>
    <div>主演：
      <span v-for="cast in detail.casts" :key="cast.id">
        {{cast.name}}
      </span>
    </div>
    <div>类型：
      <span v-for="genre in detail.genres" :key="genre">
        {{genre}}
      </span>
    </div>
    <div>制片国家/地区:
      <span v-for="country in detail.countries" :key="country">
        {{country}}
      </span>
    </div>
    <div class="clearfix" style="margin-top:10px;">
      <h3>{{detail.title}}剧情简介...</h3>
      <p>{{detail.summary}}</p>
    </div>
    <div>
      <h3>{{detail.title}}的演职员...（全部）</h3>
      <ul class="castUl">
        <li  v-for="cast in detail.casts" :key="cast.id" class="fl casts">
          <img v-lazy="getImgUrl(cast.avatars.small)">
          <!-- <img :src="cast.avatars.small"> -->
          <br>
          {{cast.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BikeDetail',
  data () {
    return {
      detail: {
        images: {}
      }
    }
  },
  methods: {
    getFilmDetail (movieId) {
      console.log(movieId)
      return this.$store.dispatch('getFilmDetail', movieId)
    },
    getImgUrl (url) {
      return url.replace(/https:\/\//g, 'https://images.weserv.nl/?url=') // 请求限制  线上缓存图片地址
    }
  },

  mounted () {
    const query = this.$route.query
    if (JSON.stringify(query) === '{}') {
      // this.$message('请选择产品...')
      this.$message({
        message: '请选择电影...',
        type: 'warning'
      })
      this.$router.go(-1)
    } else {
      alert(JSON.stringify(query))
      this.getFilmDetail(query).then(res => {
        console.log(res)
        this.detail = res
      })
    }
  },
  watch: {
    $route (to, from) {
      let query = to.query
      if (from.query && JSON.stringify(query) === '{}') {
        console.log(query)
        query = from.query
        this.$router.replace({ name: '电影详情', query })
      } else {
        if (JSON.stringify(query) === '{}') {
          // this.$message('请选择产品...')1235
          // 1234
          this.$message({
            message: '请选择电影.....',
            type: 'warning'
          })
          this.$router.go(-1)
        } else {
          this.getFilmDetail(query).then(res => {
            console.log(res)
            this.detail = res
          })
        }
      }
    }
  }
}
</script>

<style lang='less' scoped>
.detail {
  text-align: left;
  .detail_img {
    width: 270px;
    height: 400px;
    margin-right: 10px;
  }
  .imgCont {
    width: 50%;
    height: 300px;
  }

  p {
    text-indent: 2em;
    line-height: 1.5em;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
  }

  .castUl {
    .casts {
      &:first-child {
        margin-left: 0;
      }
      margin-left: 21px;
      text-align: center;
      img {
        height: 133px;
      }
    }
  }
}
</style>
