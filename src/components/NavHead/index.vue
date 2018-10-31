<template>
  <ul class="fl ">
    <router-link v-for="router in getSonRoutes"
      :key="router.name" class="navLi"
      :to='{"path":router.path }' tag="li">{{router.name}}</router-link>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NavHead',
  computed: {
    ...mapGetters([
      'getSonRoutes'
    ])
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='less' scoped>
ul,li {
  height: 100%;
  box-sizing: border-box;
}
ul {
  // max-width: 300%;
  min-width: 100%;
  max-width: 300%;
  text-align: left;
  white-space: nowrap;
}
  .navLi {
    display: inline-block;
    // width: 50px;
    text-align: center;
    cursor: pointer;

    position: relative;
    &:before {
      position: absolute;
      content: '';
      overflow: hidden;
      top: 0;
      width: 0;
      left: 100%;
      height: 100%;
      box-sizing: border-box;
      transition: all .3s ease;
      border-bottom: 4px solid blue;
    }
    &+ {
      margin-left: 20px;
    }
    &:hover::before,&.router-link-exact-active::before {
      width: 100%;
      left: 0;
    }
    &.router-link-active::before {
      width: 100%;
      left: 0;
    }
    &:hover~&::before {
      left: 0;
    }
  }
</style>
