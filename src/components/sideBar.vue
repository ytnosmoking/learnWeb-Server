<template>
  <div>
    <ul>
      <li v-for="routes in getFatherRoutes" :key="routes.name" @click="getSonRoutes(routes)">

        <el-tooltip :content="routes.name" :disabled="getSideBar" placement="right">
          <router-link :to="{name: routes.name}">
            <svg-icon :icon-class="routes.meta.icon"/>
            &nbsp;&nbsp;
            <i v-show="getSideBar" style="font-style:normal;">{{ routes.name }}</i>
          </router-link>
        </el-tooltip>

      </li>
    </ul>
    <!-- <el-menu
      default-active="2"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="(routes, index) in getFatherRoutes" :index="index">
        <el-submenu v-if="routes.children" :key="index" :index="routes.path">
          <template slot="title">
            <el-tooltip :content="routes.name" :disabled="getSideBar" placement="right">
              <svg-icon v-if="routes.meta.icon" :icon-class="routes.meta.icon"/>
              &nbsp;
              <span v-show="getSideBar">{{ routes.name }}</span>
            </el-tooltip>
          </template>
          <el-menu-item v-for="(child, key) in routes.children" :key="key" :index="child.path">
            <router-link :to="{path:child.path}">
              <el-tooltip :content="child.name" :disabled="getSideBar" placement="right">
                <svg-icon v-if="child.meta" :icon-class="child.meta.icon"/>
                <span v-show="getSideBar">{{ child.name }}</span>
              </el-tooltip>
            </router-link>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu> -->
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapGetters } from "vuex";
export default {
  name: 'SideBar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getSideBar', 'getFatherRoutes'])
  },
  watch: {
    getFatherRoutes(newValue, oldValue) {}
  },
  methods: {
    getSonRoutes(routes) {
      console.log(this.getSideBar)
      this.$store.commit('changeSonRoutes', routes.children)
    }
  }
}
</script>

<style lang='less' scoped >
// a {
//   display: block;
//   height: 100%;
//   width: 100%;
//   color: #fff;
//   text-align: left;
// }
// .el-menu {
//   border: none;
// }
// .el-submenu__title {
//   text-align: left !important;
// }
// i.el-submenu__icon-arrow {
//   right: 10px !important;
// }

// .el-menu.el-menu--inline {
//   & > li {
//     background-color: #ccc !important;
//     &:hover {
//       background: rgb(67, 74, 80) !important;
//     }
//   }
// }
// .el-menu-item {
//   float: left;
//   padding: 0 20px !important;
//   min-width: 100%;
//   box-sizing: border-box;
// }
// -------------------

.el-submenu {
  width: 100%;
  box-sizing: border-box;
}

li {
  height: 60px;
  line-height: 60px;

  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    // display: block;
    height: 100%;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      background-color: rgb(48, 65, 86);
    }
    &.router-link-active {
      // padding: 0 10px !important;
      font-weight: bold;
      color: #66b1ff;
      text-decoration: none;
      background-color: rgb(48, 65, 86);
    }
  }
}
</style>
