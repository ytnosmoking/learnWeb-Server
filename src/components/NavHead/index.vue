<template>
  <ul class="fl ">
    <router-link
      v-for="router in getSonRoutes"
      :key="router.name"
      :to="{&quot;path&quot;:router.path }"
      class="navLi"
      tag="li">
      <el-tooltip :content="router.name" placement="bottom">
        <i>{{ router.name }}</i>

      </el-tooltip>
    </router-link>
  </ul>
</template>

<script>
// eslint-disable-next-line
import { mapGetters } from "vuex";
export default {
  name: 'NavHead',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getSonRoutes'])
  }
}
</script>

<style lang='less' scoped>
ul,
li {
  height: 100%;
  box-sizing: border-box;
}
ul {
  // max-width: 300%;
  min-width: 100%;
  max-width: 300%;
  // position: relative;
  // width: 100%;
  text-align: left;
  white-space: nowrap;
  // overflow: scroll-x;
}
.navLi {
  display: inline-block;
  // width: 50px;
  text-align: center;
  cursor: pointer;

  position: relative;
  &:before {
    position: absolute;
    content: "";
    overflow: hidden;
    top: 0;
    width: 0;
    left: 100%;
    height: 100%;
    box-sizing: border-box;
    transition: all 0.3s ease;
    border-bottom: 4px solid blue;
  }
  & + {
    margin-left: 20px;
  }
  &:hover::before,
  &.router-link-exact-active::before {
    width: 100%;
    left: 0;
  }
  &.router-link-active::before {
    width: 100%;
    left: 0;
  }
  &:hover ~ &::before {
    left: 0;
  }
  i {
    display: block;
    height: 100%;
    font-style: normal;
    position: relative;
    z-index: 2;
  }
}
</style>
