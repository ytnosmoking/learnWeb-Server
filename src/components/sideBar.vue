<template>
<div>
  <ul>
    <li v-for="routes in getFatherRoutes" :key="routes.name" @click="getSonRoutes(routes)">
      <router-link :to="{name: routes.name}">{{routes.name}}</router-link>
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
import { mapGetters } from 'vuex'
export default {
  name: 'sideBar',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getSideBar', 'getFatherRoutes'])
  },
  methods: {
    getSonRoutes (routes) {
      this.$store.commit('changeSonRoutes', routes.children)
    }
  },
  watch: {
    getFatherRoutes (newValue, oldValue) {

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
    padding: 0 20px;
    display: block;
    height: 100%;
    color: #fff;
  }
  a.router-link-active {
    // padding: 0 10px !important;
    font-weight: bold;
    color: red;
  }
}
</style>
