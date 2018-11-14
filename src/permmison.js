/* eslint-disable */
import router from './router'
import store from './store'
import {
  configRouter
} from './router/config'
import {
  getToken
} from '@/utils/tools'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({
  showSpinner: false
})
const mateRouter = [{
  path: '*',
  redirect: '/index/all'
}]
router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log(router)
  if (getToken()) {
    if (to.path === "/login") {
      next({
        path: '/'
      })
      NProgress.done()
    } else {


      if (store.state.userRoles.length === 0) { // 用户 路由列表为空时 刷新的时候
        let nowRouter;
        if (getToken() === "admin") {
          nowRouter = configRouter.concat(mateRouter)
          store.commit('userRoles', nowRouter)
          console.log(nowRouter)
          router.addRoutes(nowRouter)
          next({ ...to,
            replace: true
          })
        } else {
          new Promise((resolve, reject) => {
            const getRouter = [
              "/index", "/index/all", "/index/other",
              "/bike", "/bike/index", "/bike/product", "/bike/detail",
              "/films", "/films/index", "/films/top100", "/films/detail"
            ]
            resolve(getRouter)
          }).then(res => {
            nowRouter = configRouter.filter(routes => {
              if (res.includes(routes.path)) {
                routes.children = routes.children.filter(route => {
                  if (res.includes(route.name)) {
                    return route
                  }
                })
                return routes
              }
            })
            nowRouter = nowRouter.concat(mateRouter)
            store.commit('userRoles', nowRouter)
            console.log(nowRouter)
            router.addRoutes(nowRouter)
            next({ ...to,
              replace: true
            })
          })
        }
      } else { // 未刷先 点击 跳转
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
            if (flag) {
              store.state.sonRoutes = routes.children
            }
          }
        })
        next()
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
    NProgress.done()
  }
})
router.afterEach(() => {
  NProgress.done()
  // if()
})
