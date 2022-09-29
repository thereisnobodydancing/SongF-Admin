/** - 商城管理 - **/
export default [
  // --------------------------------------------------------------------------------------------------- 商品中心
  // ---------------------------------------------------------- 商品中心 -> 商品列表
  {
    path: '/shop/shop/product',
    component:() => import('../views/shop/shop/product/index.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'product' }
  },
  {
    path: '/shop/shop/product/add',
    component:() => import('../views/shop/shop/product/add.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'product' }
  },
  {
    path: '/shop/shop/product/edit',
    component:() => import('../views/shop/shop/product/edit.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'product' }
  },

  // ---------------------------------------------------------- 商品中心 -> 类目管理
  {
    path: '/shop/shop/category',
    component:() => import('../views/shop/shop/category/index.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'category' }
  },

  // ---------------------------------------------------------- 商品中心 -> 分类管理
  {
    path: '/shop/shop/classify',
    component:() => import('../views/shop/shop/classify/index.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'classify' }
  },

  // ---------------------------------------------------------- 商品中心 -> 参数列表
  {
    path: '/shop/shop/parameter',
    component:() => import('../views/shop/shop/parameter/index.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'parameter' }
  },
  {
    path: '/shop/shop/parameter/add',
    component:() => import('../views/shop/shop/parameter/add.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'parameter' }
  },
  {
    path: '/shop/shop/parameter/edit',
    component:() => import('../views/shop/shop/parameter/edit.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'parameter' }
  },

  // ---------------------------------------------------------- 商品中心 -> 服务管理
  {
    path: '/shop/shop/service',
    component:() => import('../views/shop/shop/service/index.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'service' }
  },
  {
    path: '/shop/shop/service/add',
    component:() => import('../views/shop/shop/service/add.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'service' }
  },
  {
    path: '/shop/shop/service/edit',
    component:() => import('../views/shop/shop/service/edit.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'service' }
  },


  // --------------------------------------------------------------------------------------------------- 订单中心
  // ---------------------------------------------------------- 订单中心 -> 订单管理
  {
    path: '/shop/order/order',
    component:() => import('../views/shop/order/order/index.vue'),
    meta: { class1: 'shop', class2: 'order', class3: 'order' }
  },
  // ---------------------------------------------------------- 订单中心 -> 售后管理
  {
    path: '/shop/order/aftersale',
    component:() => import('../views/shop/order/aftersale/index.vue'),
    meta: { class1: 'shop', class2: 'order', class3: 'aftersale' }
  },
]