/** - 商城管理 - **/
export default [
  // --------------------------------------------------------------------------------------------------- 商品中心
  // ---------------------------------------------------------- 商品中心 -> 商品列表
  {
    path: '/shop/shop/product',
    name: 'ShopShopProduct',
    component:() => import('../views/shop/shop/product/index.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'shop', 
      class3: 'product', 
      breadcrumb: [{title: '商城管理', name: ''}, {title: '商品中心', name: ''}, {title: '商品列表', name: 'ShopShopProduct'}]
    }
  },
  {
    path: '/shop/shop/product/add',
    name: 'ShopShopProductAdd',
    component:() => import('../views/shop/shop/product/add.vue'),
    meta: {
      class1: 'shop', 
      class2: 'shop', 
      class3: 'product',
      breadcrumb: [{title: '商城管理', name: ''}, {title: '商品中心', name: ''}, {title: '商品列表', name: 'ShopShopProduct'}, {title: '添加商品', name: 'ShopShopProductAdd'}]
    }
  },
  {
    path: '/shop/shop/product/edit/:id',
    name: 'ShopShopProductEdit',
    component:() => import('../views/shop/shop/product/edit.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'shop', 
      class3: 'product',
      breadcrumb: [{title: '商城管理', name: ''}, {title: '商品中心', name: ''}, {title: '商品列表', name: 'ShopShopProduct'}, {title: '编辑商品', name: 'ShopShopProductEdit'}]
    }
  },

  // ---------------------------------------------------------- 商品中心 -> 类目管理
  {
    path: '/shop/shop/category',
    name: 'ShopShopCategory',
    component:() => import('../views/shop/shop/category/index.vue'),
    meta: { 
      class1: 'shop',
      class2: 'shop', 
      class3: 'category',
      breadcrumb: [{title: '商城管理', name: ''}, {title: '商品中心', name: ''}, {title: '类目管理', name: 'ShopShopCategory'}]
    }
  },

  // ---------------------------------------------------------- 商品中心 -> 分类管理
  {
    path: '/shop/shop/classify',
    name: 'ShopShopClassify',
    component:() => import('../views/shop/shop/classify/index.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'shop', 
      class3: 'classify',
      breadcrumb: [{title: '商城管理', name: ''}, {title: '商品中心', name: ''}, {title: '分类管理', name: 'ShopShopClassify'}] 
    }
  },

  // ---------------------------------------------------------- 商品中心 -> 参数列表
  {
    path: '/shop/shop/parameter',
    name: 'ShopShopParameter',
    component:() => import('../views/shop/shop/parameter/index.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'shop', 
      class3: 'parameter',
      breadcrumb: [{title: '商城管理', name: ''}, {title: '商品中心', name: ''}, {title: '参数列表', name: 'ShopShopParameter'}] 
    }
  },
  {
    path: '/shop/shop/parameter/add',
    name: 'ShopShopParameterAdd',
    component:() => import('../views/shop/shop/parameter/add.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'shop', 
      class3: 'parameter',
      breadcrumb: [{title: '商城管理', name: ''}, {title: '商品中心', name: ''}, {title: '参数列表', name: 'ShopShopParameter'}, {title: '添加参数', name: 'ShopShopParameterAdd'}] 
    }
  },
  {
    path: '/shop/shop/parameter/edit/:id',
    name: 'ShopShopParameterEdit',
    component:() => import('../views/shop/shop/parameter/edit.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'shop', 
      class3: 'parameter',
      breadcrumb: [{title: '商城管理', name: ''}, {title: '商品中心', name: ''}, {title: '参数列表', name: 'ShopShopParameter'}, {title: '添加参数', name: 'ShopShopParameterEdit'}] 
    }
  },

  // ---------------------------------------------------------- 商品中心 -> 服务管理
  {
    path: '/shop/shop/service',
    name: 'ShopShopService',
    component:() => import('../views/shop/shop/service/index.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'shop', 
      class3: 'service',
      breadcrumb: [{title: '商城管理', name: ''}, {title: '商品中心', name: ''}, {title: '服务管理', name: 'ShopShopService'}] 
    }
  },
  {
    path: '/shop/shop/service/add',
    name: 'ShopShopServiceAdd',
    component:() => import('../views/shop/shop/service/add.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'shop', 
      class3: 'service',
      breadcrumb: [{title: '商城管理', name: ''}, {title: '商品中心', name: ''}, {title: '服务管理', name: 'ShopShopService'}, {title: '添加服务', name: 'ShopShopServiceAdd'}] 
    }
  },
  {
    path: '/shop/shop/service/edit/:id',
    name: 'ShopShopServiceEdit',
    component:() => import('../views/shop/shop/service/edit.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'shop', 
      class3: 'service',
      breadcrumb: [{title: '商城管理', name: ''}, {title: '商品中心', name: ''}, {title: '服务管理', name: 'ShopShopService'}, {title: '编辑服务', name: 'ShopShopServiceEdit'}] 
    }
  },


  // --------------------------------------------------------------------------------------------------- 订单中心
  // ---------------------------------------------------------- 订单中心 -> 订单管理
  {
    path: '/shop/order/order',
    name: 'ShopOrderOrder',
    component:() => import('../views/shop/order/order/index.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'order', 
      class3: 'order', 
      breadcrumb: [{title: '商城管理', name: ''}, {title: '订单中心', name: ''}, {title: '订单管理', name: 'ShopOrderOrder'}] 
    }
  },
  {
    path: '/shop/order/order/detail/:id',
    name: 'ShopOrderOrderDetail',
    component:() => import('../views/shop/order/order/detail.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'order', 
      class3: 'order', 
      breadcrumb: [{title: '商城管理', name: ''}, {title: '订单中心', name: ''}, {title: '订单管理', name: 'ShopOrderOrder'}, {title: '订单详情', name: 'ShopOrderOrderDetail'}] 
    }
  },
  // ---------------------------------------------------------- 订单中心 -> 售后管理
  {
    path: '/shop/order/aftersale',
    name: 'ShopOrderAftersale',
    component:() => import('../views/shop/order/aftersale/index.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'order', 
      class3: 'aftersale', 
      breadcrumb: [{title: '商城管理', name: ''}, {title: '订单中心', name: ''}, {title: '售后管理', name: 'ShopOrderAftersale'}] 
    }
  },
  {
    path: '/shop/order/aftersale/detail/:id',
    name: 'ShopOrderAftersaleDetail',
    component:() => import('../views/shop/order/aftersale/index.vue'),
    meta: { 
      class1: 'shop', 
      class2: 'order', 
      class3: 'aftersale', 
      breadcrumb: [{title: '商城管理', name: ''}, {title: '订单中心', name: ''}, {title: '售后管理', name: 'ShopOrderAftersale'}, {title: '售后详情', name: 'ShopOrderAftersaleDetail'}] 
    }
  },
]