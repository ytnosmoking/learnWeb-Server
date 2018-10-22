<template>
  <el-container class="commonView">
    <el-aside width="200px" :class="{active: closeBar}">
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header>
        <div class="commonHead">
          <el-button type="primary" :icon="closeBar?'el-icon-arrow-right':'el-icon-arrow-left'" :circle=btnShape :round=!btnShape style="transition:all .3s ease" @click="closeSideBar" class="fl mt10">
          </el-button>
          <div class="navHead">
            <nav-head></nav-head>
          </div>
          <el-row class="block-col-2 fr">
            <el-col>
              <el-dropdown @command="userSet">
                <span class="el-dropdown-link">
                  设置
                  <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
                  <i class="el-icon-setting el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">退出</el-dropdown-item>
                  <el-dropdown-item command="b">狮子头</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>
        <transition mode="out-in" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" class="" >
          <router-view ></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sideBar from './sideBar'
import navHead from './NavHead'
export default {
  name: 'LayOut',
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
      this.$store.commit('changeSidebar', this.closeBar)
    },
    showBtnShape (boolean) {
      this.btnShape = boolean
    },
    userSet (command) {
      if (command === 'a') {
        console.log(command)
        console.log(1111)
      }
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
  background-color: #545c64;
  &::-webkit-scrollbar {
    display: block;
  }
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
.navHead {
  display: inline-block;
  width: calc(100% - 100px);
  height: 100%;
  overflow: hidden;
  overflow-x: auto;
  position: relative;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
}

</style>
