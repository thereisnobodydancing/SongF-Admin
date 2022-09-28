/** --- 商城管理 --- **/
export default [
  // 商品中心 -> 商品列表
  {
    path: '/shop/shop/product',
    component:() => import('../views/shop/shop/product/index.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'product' }
  },
  // 商品中心 -> 商品列表 -> 添加商品
  {
    path: '/shop/shop/product/add',
    component:() => import('../views/shop/shop/product/add.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'product' }
  },
  // 商品中心 -> 商品列表 -> 编辑商品
  {
    path: '/shop/shop/product/edit',
    component:() => import('../views/shop/shop/product/edit.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'product' }
  },

  // 商品中心 -> 类目管理
  {
    path: '/shop/shop/category',
    component:() => import('../views/shop/shop/category/index.vue'),
    meta: { class1: 'shop', class2: 'shop', class3: 'category' }
  },
]