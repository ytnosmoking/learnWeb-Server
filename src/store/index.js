import Vuex from 'vuex'

import Vue from 'vue'
import {defaultRouter} from '@/router'
import {sendAjax} from '@/utils/tools'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    defaultRouter,
    sideBar: true,
    sonRoutes: []
  },
  getters: {
    getFatherRoutes (context) {
      return context.defaultRouter.filter(routes => routes && routes.name)
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
    getTotalMovie (context, payload) {
      return new Promise((resolve, reject) => {
        alert(11)
        // const url = '/book/1220562'
        sendAjax('/movie/in_theaters').then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      })
    }
  }

})
export default store
