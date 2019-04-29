// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入css
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css' // progress bar style
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'
import 'normalize.css'
import vueToastPanel from 'yttestplugin'
Vue.use(vueToastPanel)
//  common css
import './public/css/common.less'
import '@/assets/icon/iconfont.css' //   private icon

// v-lazy
import VueLazyLoad from 'vue-lazyload'

import './Mock' // mock数据
import './permmison'

import './icons'
// import {
//   getToken
// } from '@/utils/tools'
Vue.use(VueLazyLoad, {
  error: '/static/lazy/loading-balls.svg',
  loading: '/static/lazy/loading-bars.svg'

})

// NProgress.configure({
//   showSpinner: false
// })
// router.beforeEach((to, from, next) => {
//   NProgress.start()

//   if (getToken()) {
//     // console.log(to.path)
//     // console.log(store.getters.getFatherRoutes)
//     store.getters.getFatherRoutes.forEach(routes => {
//       if (routes.redirect === to.path) {
//         store.state.sonRoutes = routes.children
//       } else {
//         let flag = false
//         routes.children.forEach(item => {
//           if (item.path === to.path) {
//             flag = true
//           }
//         })
//         if (flag) {
//           store.state.sonRoutes = routes.children
//         }
//       }
//     })
//     next()
//   } else {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//     NProgress.done()
//   }
// })
// router.afterEach(() => {
//   NProgress.done()
//   // if()
// })

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
