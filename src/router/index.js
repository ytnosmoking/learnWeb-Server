import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Bike from '@/views/Bike'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }, {
      path: '/bike',
      name: 'Bike',
      component: Bike
    }
  ]
})
