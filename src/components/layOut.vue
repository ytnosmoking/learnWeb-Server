<template>
  <el-container class="commonView">
    <el-aside width="200px" :class="{active: closeBar}">
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header>
        <div class="commonHead">
          <el-button type="primary"
            :icon="closeBar?'el-icon-arrow-right':'el-icon-arrow-left'"
            :circle=btnShape
            :round=!btnShape
            style="transition:all .3s ease"
            @click="closeSideBar"
            class="fl mt10">
            </el-button>
            <nav-head></nav-head>
            <el-button icon="el-icon-info"
              type="info" round
              class="fr mt10">信息按钮</el-button>

        </div>
      </el-header>
      <el-main>Main
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sideBar from './sideBar'
import navHead from './NavHead'
export default {
  name: 'Index',
  components: {
    sideBar,
    navHead
  },
  data () {
    return {
      btnShape: true,
      closeBar: true
    }
  },
  methods: {
    closeSideBar () {
      this.closeBar = !this.closeBar
    },
    showBtnShape (boolean) {
      this.btnShape = boolean
    }
  }
}
</script>

<style lang='less' scoped>

.el-aside {
  transition: all 0.3s ease;
}
.active {
  width: 100px !important;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.commonView {
  height: 100%;
}
.commonHead {
  height: 100%;
  box-sizing: border-box;
  // display: flex;
  // justify-content: flex-start;
  // align-items: center;
}
</style>
