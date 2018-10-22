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
    name: '首页',
    component: _importCom('layOut'),
    redirect: '/index/all',
    children: [{
      name: '所有',
      path: '/index/all',
      component: _importView('Index/all')
    }, {
      name: '其他',
      path: '/index/other',
      component: _importView('Index/other')
    }]
  }, {
    path: '/bike',
    name: '单车',
    component: _importCom('layOut'),
    redirect: '/bike/index',
    children: [{
      name: '首页',
      path: '/bike/index',
      component: _importView('Bike/index')
    }, {
      name: '产品',
      path: '/bike/product',
      component: _importView('Bike/product')
    }]
  },
  {
    path: '/movie',
    name: '电影',
    component: _importCom('layOut'),
    redirect: '/movie/index',
    children: [{
      name: '大杂烩',
      path: '/movie/index',
      component: _importView('Movie/index')
    }, {
      name: 'top',
      path: '/movie/top',
      component: _importView('Movie/top100')
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
