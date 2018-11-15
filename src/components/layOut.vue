<template>
  <el-container class="commonView">
    <el-aside :class="{active: !closeBar}" width="100px">
      <side-bar/>
    </el-aside>
    <el-container>
      <!-- header start -->
      <el-header>
        <div class="commonHead">
          <!-- left controlSideBar -->
          <el-switch
            v-model="closeBar"
            class="fl"
            style="line-height:100%;height:100%;"
            active-color="#13ce66"
            inactive-color="#545c64"
            @change="closeSideBar"/>
          <!-- middle router -->
          <div class="navHead">
            <nav-head/>
          </div>
          <!-- right setting  -->
          <el-row class="block-col-2 fr">
            <el-col>
              <el-dropdown @command="userSet">
                <span class="el-dropdown-link">
                  <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
                  <img v-lazy="'http://localhost:3000/static/images/5beabb2535278719563f90dctask1.png'" class="userImg" alt="">
                  <!-- <i class="el-icon-setting el-icon--right"></i> -->
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
      <!-- header end -->
      <!-- <el-main> -->
      <div class="main">

        <transition mode="out-in" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" class="" >
          <router-view />
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
  data() {
    return {
      btnShape: true,
      closeBar: true
    }
  },
  methods: {
    closeSideBar() {
      // this.closeBar = !this.closeBar
      console.log(this.closeBar)
      this.$store.commit('changeSidebar', this.closeBar)
    },
    showBtnShape(boolean) {
      this.btnShape = boolean
    },
    userSet(command) {
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
  width: 50px !important;
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
  width: calc(100% - 200px);
  height: 100%;
  padding: 0 10px;
  overflow: hidden;
  overflow-x: auto;
  position: relative;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  // border: 1px solid blue;
  box-shadow: -5px 0 10px -5px red, -10px 0 10px -5px blue, 5px 0 10px -5px red;
}
.userImg {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
  & + i {
    transform: scale(1.2);
  }
}
</style>
