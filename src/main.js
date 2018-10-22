// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'
import 'normalize.css'

//  common css
import './public/css/common.less'

NProgress.configure({
  showSpinner: false
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log(to.path)
  console.log(store.getters.getFatherRoutes)
  store.getters.getFatherRoutes.forEach(routes => {
    if (routes.redirect === to.path) {
      store.state.sonRoutes = routes.children
    } else {
      let flag = false
      routes.children.forEach(item => {
        if (item.path === to.path) {
          flag = true
        }
      })
      if (flag) store.state.sonRoutes = routes.children
    }
  })
  // console.log(store.state.sonRoutes)
  // if (store.state.sonRoutes.length === 0) {
  //   const fatherRoute = store.state.getters.getFatherRoutes
  //   fatherRoute.fileter(router => {
  //     return router.children.forEach(item => {
  //       return item.path === to.path
  //     })
  //   })
  //   console.log(fatherRoute)
  // }
  next()
})
router.afterEach(() => {
  NProgress.done()
  // if()
})

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
