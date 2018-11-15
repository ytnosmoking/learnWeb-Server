const _importView = file => () => import('@/views/' + file)
const _importCom = component => () => import('@/components/' + component)

export const configRouter = [

  {
    path: '/index',
    name: '首页',
    component: _importCom('layOut'),
    meta: {
      icon: 'info'
    },
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
  },
  {
    path: '/bike',
    name: '单车',
    component: _importCom('layOut'),
    redirect: '/bike/index',
    meta: {
      icon: 'warning'
    },
    children: [{
      name: '单车首页',
      path: '/bike/index',
      component: _importView('Bike/index')
    }, {
      name: '产品',
      path: '/bike/product',
      component: _importView('Bike/product')
      // children: [
      //   {
      //     name: '产品1',
      //     path: '/bike/product/1',
      //     component: _importView('Bike/product'),
      //     children: [{
      //       name: '产品1index',
      //       path: '/bike/product/1/index',
      //       hide: false,
      //       component: _importView('Bike/index')
      //     }]
      //   }, {
      //     name: '产品2',
      //     path: '/bike/product/2',
      //     component: _importView('Bike/product')
      //   }
      // ]
    }, {
      name: '详细信息',
      path: '/bike/detail',
      component: _importView('Bike/detail')
    }]
  },
  {
    path: '/films',
    name: '电影',
    component: _importCom('layOut'),
    redirect: '/films/index',
    meta: {
      icon: 'menu'
    },
    children: [{
      name: '上映',
      path: '/films/index',
      component: _importView('Movie/index')
    }, {
      name: 'top100',
      path: '/films/top100',
      component: _importView('Movie/top100')
    },
    {
      name: '电影详情',
      path: '/films/detail',
      component: _importView('Movie/detail')
    }
    ]
  },
  {
    path: '/shape',
    name: '图形',
    component: _importCom('layOut'),
    redirect: '/shape/index',
    meta: {
      icon: 'picture'
    },
    children: [{
      name: '各种图形',
      path: '/shape/index',
      component: _importView('Shape/index')
    }]
  }
]
