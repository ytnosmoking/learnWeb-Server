<template>
  <el-container class="commonView">
    <el-aside width="200px" :class="{active: closeBar}">
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header>
        <div class="commonHead">

          <el-switch
            class="fl"
            style="line-height:100%;height:100%;"
            v-model="closeBar"
            @click="closeSideBar"
            active-color="#13ce66"
            inactive-color="#545c64">
          </el-switch>
          <!-- <el-button type="primary" :icon="closeBar?'el-icon-arrow-right':'el-icon-arrow-left'" :circle=btnShape :round=!btnShape style="transition:all .3s ease" @click="closeSideBar" class="fl mt10">
          </el-button> -->
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
                  <el-dropdown-item command="out">退出</el-dropdown-item>
                  <!-- <el-dropdown-item command="in">登录</el-dropdown-item> -->
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <!-- <el-main> -->
        <div class="main">

        <transition mode="out-in" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" class="" >
          <router-view ></router-view>
        </transition>
        </div>
      <!-- </el-main> -->
    </el-container>
  </el-container>
</template>

<script>
// eslint-disable-next-line
import { removeToken } from "@/utils/tools";
// eslint-disable-next-line
import sideBar from "./sideBar";
// eslint-disable-next-line
import navHead from "./NavHead";
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
      console.log(command)
      if (command === 'out') {
        this.$store.dispatch('logout').then(res => {
          console.log(res)
          removeToken()
          location.reload()
        })
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

.main {
  height: calc(100% - 60px);
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
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
