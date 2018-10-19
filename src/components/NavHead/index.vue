<template>
  <ul class="fl">
    <router-link v-for="router in navRouter"
      :key="router.name" class="navLi"
      :to='{"name":router.name }' tag="li">{{router.name}}</router-link>
  </ul>
</template>

<script>
export default {
  name: 'NavHead',
  data () {
    return {
      navRouter: [{
        name: 'all',
        path: 'all'
      }, {
        name: 'other',
        path: 'other'
      }, {
        name: 'two',
        path: 'two'
      }, {
        name: 'all',
        path: 'all'
      }, {
        name: 'other',
        path: 'other'
      } ]
    }
  }
}
</script>

<style lang='less' scoped>
ul,li {
  height: 100%;
  box-sizing: border-box;
}
  .navLi {
    display: inline-block;
    width: 50px;
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
    &:hover~&::before {
      left: 0;
    }
  }
</style>
