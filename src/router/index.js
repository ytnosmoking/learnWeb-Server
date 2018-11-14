import Vue from 'vue'
import Router from 'vue-router'
// import layOut from '@/components/layOut'
// import Index from '@/views/Index'
// import Bike from '@/views/Bike'
Vue.use(Router)

const _importView = file => () => import('@/views/' + file)
// const _importCom = component => () => import('@/components/' + component)

const defaultRouter = [

  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: '登陆',
    component: _importView('Login/index')
  }

]

export default new Router({
  mode: 'history',
  routes: defaultRouter
})
