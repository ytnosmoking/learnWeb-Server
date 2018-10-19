import Vue from 'vue'
import Router from 'vue-router'
// import layOut from '@/components/layOut'
// import Index from '@/views/Index'
// import Bike from '@/views/Bike'
Vue.use(Router)

const _importView = file => () => import('@/views/' + file)
const _importCom = component => () => import('@/components/' + component)

export const defaultRouter = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: _importCom('layOut'),
    redirect: '/index/all',
    children: [{
      name: 'all',
      path: 'all',
      component: _importView('Index')
    }, {
      name: 'other',
      path: 'other',
      component: _importView('Other')
    }]
  }, {
    path: '/bike',
    name: 'Bike',
    component: _importCom('layOut'),
    redirect: '/bike/index',
    children: [{
      name: 'index',
      path: 'index',
      component: _importView('Bike')
    }]
  },
  {
    path: '*',
    redirect: '/index'
  }
]

export default new Router({
  mode: 'history',
  routes: defaultRouter
})
