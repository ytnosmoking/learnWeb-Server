<template>
  <div id="app">
    <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
html, body {
  height: 100%;
   &::-webkit-scrollbar {
    display: none;
  }
}
#app {
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }

}
</style>
