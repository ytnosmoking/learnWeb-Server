import Vuex from 'vuex'

import Vue from 'vue'
import {defaultRouter} from '@/router'
import {sendAjax} from '@/utils/tools'

Vue.use(Vuex)

// 阿凡达数据
// 天气预报
const commonKey = '6cf203f215e043fcb560e0e7082d7e8e'

const store = new Vuex.Store({
  state: {
    defaultRouter,
    sideBar: true,
    sonRoutes: []
  },
  getters: {
    getFatherRoutes (context) {
      return context.defaultRouter.filter(routes => routes && routes.name && routes.children)
    },
    getSideBar (context) {
      return context.sideBar
    },
    getSonRoutes (context) {
      return context.sonRoutes
    }
  },
  mutations: {
    changeSidebar (context, payload) {
      context.sideBar = payload
    },
    changeSonRoutes (context, payload) {
      console.log(payload)
      context.sonRoutes = payload
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        sendAjax('/login/login', payload).then(res => {
          console.log(res)
          resolve(res)
        }).catch(err => reject(err))
      })
    },
    logout (context, payload) {
      return new Promise((resolve, reject) => {
        sendAjax('/login/logout')
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
    },
    getBikeTotal (context, payload) {
      return new Promise((resolve, reject) => {
        sendAjax('/bike/total')
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
    },
    getBikeProducts (context, payload) {
      return new Promise((resolve, reject) => {
        sendAjax('/bike/products')
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
    },
    getProductDetail (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        sendAjax('/bike/detail', {...payload})
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
    },
    getTotalMovie (context, payload) {
      return new Promise((resolve, reject) => {
        // const url = '/book/1220562'
        sendAjax('/movie/in_theaters').then(res => {
          console.log(res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    getWeather (context, payload) {
      return new Promise((resolve, reject) => {
        sendAjax('/weather/Query?key=' + commonKey + '&cityname=' + payload.cityname, {}, 'get').then(res => {
          resolve(res)
        }).catch(err => {
          console.log(err)
        })
      })
    },
    getShapeData () {
      return new Promise((resolve, reject) => {
        sendAjax('/shape/all')
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
    }
  }
})
export default store
