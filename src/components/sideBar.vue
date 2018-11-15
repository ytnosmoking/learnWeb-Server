<template>
  <div>
    <ul>
      <li v-for="routes in getFatherRoutes" :key="routes.name" @click="getSonRoutes(routes)">
        <el-tooltip :content="routes.name" placement="right">
          <router-link :to="{name: routes.name}">

            <i :class="'el-icon-'+routes.meta.icon"/>
            &nbsp;&nbsp;
            <i v-show="getSideBar" style="font-style:normal;">{{ routes.name }}</i>
          </router-link>
        </el-tooltip>
      </li>
    <!-- <router-link tag="li"
    v-for="routes in getFaterRouter"
    :key="routes.name"
    @click="getSonRoutes(routes)"
    :to="{name: routes.name}">{{routes.name}}</router-link> -->
    </ul>
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

<style lang='less' scoped>
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
  }
  a.router-link-active {
    // padding: 0 10px !important;
    font-weight: bold;
    color: red;
    text-decoration: none;
  }
}
</style>
