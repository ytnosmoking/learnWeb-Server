/* eslint-disable */
import router from "./router";
import store from "./store";
import {
  configRouter
} from "./router/config";
import {
  getToken
} from "@/utils/tools";

import NProgress from "nprogress";
import "nprogress/nprogress.css"; // progress bar style

NProgress.configure({
  showSpinner: false
});

const routerList = [
  "/index",
  "/index/all",
  "/index/other",
  "/bike",
  "/bike/index",
  "/bike/product",
  // "/bike/product/1",
  // "/bike/product/1/index",
  // "/bike/product/2",
  "/bike/detail",
  "/films",
  "/films/index",
  // "/films/top100",
  "/films/detail"
];


const mateRouter = [{
  path: "*",
  redirect: "/index/all"
}];
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (getToken()) {
    if (to.path === "/login") {
      next({
        path: "/"
      });
      NProgress.done();
    } else {
      if (store.state.userRoles.length === 0) {
        // 用户 路由列表为空时 刷新的时候
        let nowRouter;
        if (getToken() === "admin") { // admin
          nowRouter = configRouter.concat(mateRouter);
          store.commit("userRoles", nowRouter);
          router.addRoutes(nowRouter);
          next({ ...to,
            replace: true
          });
        } else {
          // 异步请求获取 路由信息表
          new Promise((resolve, reject) => {
            resolve(routerList);
          }).then(res => {
            nowRouter = filterRouter(res, configRouter)
            nowRouter = nowRouter.concat(mateRouter);
            store.commit("userRoles", nowRouter);
            router.addRoutes(nowRouter);
            next({ ...to,
              replace: true
            });
          });
        }
      } else {
        // 未刷先 点击 跳转
        store.getters.getFatherRoutes.forEach(routes => {
          if (routes.redirect === to.path) {
            store.state.sonRoutes = routes.children;
          } else {
            let flag = false;
            routes.children.forEach(item => {
              if (item.path === to.path) {
                flag = true;
              }
            });
            if (flag) {
              store.state.sonRoutes = routes.children;
            }
          }
        });
        next();
      }
    }
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
    NProgress.done();
  }
});
router.afterEach(() => {
  NProgress.done();
  // if()
});

/**
 * @desc 过滤用户路由
 * @param {*} arr 
 * @param {*} configRouter 
 */
function filterRouter(arr, configRouter) {
  return configRouter.filter(routes => {
    if (routes.children) {
      if (arr.includes(routes.path)) {
        routes.children = filterRouter(arr, routes.children)
        return routes
      }
    } else {
      if (arr.includes(routes.path)) {
        return routes
      }
    }
  })
}
