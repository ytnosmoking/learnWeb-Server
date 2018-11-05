<template>
  <div class="movies">
    <div class="head">
      <h3>{{movies.title}}</h3>
      <i>{{movies.count}}</i>
    </div>

    <ul>
      <!-- <li v-for="(movie,index) in movies.subjects" :key="index" :class="'item'+(index+1)"> -->
        <router-link :to="{name: '电影详情', query:{movie:movie.id}}"
          tag="li" v-for="movie in movies.subjects" :key="movie.id">
        <!-- <a :href="movie.alt"> -->
          <div class="imgBd">
            <img v-lazy="movie.images.large" alt="">
          </div>
          <div class="content">
            <div class="clearfix">
              <h5 class="fl">{{movie.title}}</h5>
              <span class="fr">{{movie.year}}</span>
              <div class="clearfix">
                <span class="fl" v-for="(gen,genIndex) in movie.genres" :key="genIndex">{{genIndex===0?'':','}}{{gen}}</span>
              </div>

            </div>

            <el-rate v-model="movie.rating.average" :max="10" disabled show-score text-color="#ff9900" score-template="{value}">
            </el-rate>
          </div>
        <!-- </a> -->
      </router-link>
      <!-- </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieIndex',
  data () {
    return {
      value5: 4,
      movies: {}
    }
  },
  methods: {
    getTotalMovie () {
      this.$store.dispatch('getTotalMovie').then(res => {
        res.subjects.filter(movie => {
          return movie.rating.average / 2
        })
        this.movies = res
      })
    },
    getWeahther () {
      this.$store.dispatch('getWeather', { cityname: '武汉' })
    }
  },
  mounted () {
    this.getTotalMovie()
  }
}
</script>

<style lang='less' scoped>
.movies {
  height: 100%;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  line-height: 60px;
  // box-shadow: 0 1px 1px red;
}
ul {
  height: calc(100% - 60px);
   overflow: hidden;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 450px 450px 450px 450px;
  // display: flex;
  // height: calc(100% - 60px);
  // overflow: auto;
  // justify-content: flex-start;
  // flex-wrap: wrap;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    // height: 450px;
    padding-right: 10px;
    box-sizing: border-box;
    &:nth-child(5n) {
      padding-right: 0;
    }
    .imgBd {
      overflow: hidden;
      width: 100%;
      height: 370px;
      img {
        width: 100%;
        height: 100%;
        transition: all .3s ease;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .content {
      h5 {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
</style>
