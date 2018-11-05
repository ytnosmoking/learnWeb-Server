<template>
  <div class="cont">
    <div class="title">
      MOCK INFO &nbsp;
      <el-button primary @click="mockInfo"> MOCK INFO </el-button>
    </div>

    <ul class="clearfix bikeCont">
      <router-link  :to="{'name': '详细信息', query:{productId: list.id}}"
        tag="li"
        v-for="list in lists" :key="list.id" class="fl"
        >
      <!-- <li v-for="(list, index) in lists" :key="index" class="fl"> -->
        <img v-lazy="list.img" alt="">
        <el-collapse @change="handleChange">
          <el-collapse-item title="Name">
            <div>first === {{list.first}}</div>
            <div>last === {{list.last}}</div>
            <div>name === {{list.name}}</div>
          </el-collapse-item>
          <el-collapse-item title="para color">
            <div :style="{'color':list.color}">{{list.para}}</div>
          </el-collapse-item>
          <el-collapse-item title="now">
            <div>now === {{list.now}}</div>
          </el-collapse-item>
          <el-collapse-item title="Boolean">
            <div>Boolean === {{list.boolean}}</div>
          </el-collapse-item>
          <el-collapse-item title="URL">
            <dl>
              <dt>domin === {{list.domin}}</dt>
              <dd>tld === {{list.tld}}</dd>
              <dd>email === {{list.email}}</dd>
              <dd>ip === {{list.ip}}</dd>
              <dd>url === {{list.url}}</dd>
              <dd>protocol === {{list.protocol}}</dd>
            </dl>
          </el-collapse-item>
          <el-collapse-item title="PLACE">
            <dl>
              <dt>region === {{list.region}}</dt>
              <dd>province === {{list.province}}</dd>
              <dd>city === {{list.city}}</dd>
              <dd>county === {{list.county}}</dd>
            </dl>
          </el-collapse-item>
          <el-collapse-item title="ID" name="9">
            <dl>
              <dt>guid === {{list.guid}}</dt>
              <dd>id === {{list.id}}</dd>
              <dd>zip === {{list.zip}}</dd>
            </dl>
          </el-collapse-item>
        </el-collapse>
      <!-- </li> -->
      </router-link>
    </ul>

  </div>
</template>

<script>
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

export default {
  name: 'Bike',
  data () {
    return {
      data: {
        name: 'bike',
        style: 'ride'
      },
      lists: []
    }
  },
  components: {
    Waterfall,
    WaterfallSlot
  },
  methods: {
    mockInfo () {
      this.$store
        .dispatch('getBikeTotal')
        .then(res => {
          // console.log(res)
          this.lists = res
        })
        .catch(err => console.log(err))
    },
    handleChange (val) {
      console.log(val)
    }
  },
  mounted () {
    this.mockInfo()
  }
}
</script>

<style lang='less' scoped>
.cont {
  height: 100%;
  .title {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 0 0 10px #ccc;
    }
  }
}
.bikeCont {
  height: calc(100% - 100px);
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: block;
  }
  // display: flex;
  // justify-content: flex-start;
  // // align-items: center;
  // flex-wrap: wrap;
  & > li {
    width: 300px;
    margin: 0 10px 10px 0;
    display: inline-block;
    overflow: hidden;
    // border: 1px solid #000;
    transition: all .3s ease;
    &:hover {
      box-shadow: 0 0 10px #ccc;
    }
    img {
      width: 300px;
      height: 250px;
      transition: all 0.3 ease;
      // vertical-align: middle;
      border-radius: 5px 5px 0 0;
      &:hover {
        transform: scaleX(1.1);
        font-size: 20px;
      }
    }
    div.el-collapse-item__content {
      padding-bottom: 0!important;
      &>div {
        height: 48px;
        line-height: 48px;
        border-top: 1px solid #ebeef5;
      }
    }
  }
}
</style>
