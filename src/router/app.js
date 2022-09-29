/** - 内容管理 - **/
export default [
  // --------------------------------------------------------------------------------------------------- 基础内容
  // ---------------------------------------------------------- 基础内容 -> 对症找药
  {
    path: '/app/base/symptom',
    component:() => import('../views/app/base/symptom/index.vue'),
    meta: { class1: 'app', class2: 'base', class3: 'symptom' }
  },
  {
    path: '/app/base/symptom/add',
    component:() => import('../views/app/base/symptom/add.vue'),
    meta: { class1: 'app', class2: 'base', class3: 'symptom' }
  },
  {
    path: '/app/base/symptom/edit',
    component:() => import('../views/app/base/symptom/edit.vue'),
    meta: { class1: 'app', class2: 'base', class3: 'symptom' }
  },
  // ---------------------------------------------------------- 基础内容 -> 搜索底纹
  {
    path: '/app/base/searchhint',
    component:() => import('../views/app/base/searchhint/index.vue'),
    meta: { class1: 'app', class2: 'base', class3: 'searchhint' }
  },
  {
    path: '/app/base/searchhint/add',
    component:() => import('../views/app/base/searchhint/add.vue'),
    meta: { class1: 'app', class2: 'base', class3: 'searchhint' }
  },
  {
    path: '/app/base/searchhint/edit',
    component:() => import('../views/app/base/searchhint/edit.vue'),
    meta: { class1: 'app', class2: 'base', class3: 'searchhint' }
  },
  // ---------------------------------------------------------- 基础内容 -> 搜索推荐
  {
    path: '/app/base/searchhot',
    component:() => import('../views/app/base/searchhot/index.vue'),
    meta: { class1: 'app', class2: 'base', class3: 'searchhot' }
  },
  {
    path: '/app/base/searchhot/add',
    component:() => import('../views/app/base/searchhot/add.vue'),
    meta: { class1: 'app', class2: 'base', class3: 'searchhot' }
  },
  {
    path: '/app/base/searchhot/edit',
    component:() => import('../views/app/base/searchhot/edit.vue'),
    meta: { class1: 'app', class2: 'base', class3: 'searchhot' }
  },
  // --------------------------------------------------------------------------------------------------- 广告位
  // ---------------------------------------------------------- 广告位 -> 首页 banner
  {
    path: '/app/ad/homebanner',
    component:() => import('../views/app/ad/homebanner/index.vue'),
    meta: { class1: 'app', class2: 'ad', class3: 'homebanner' }
  },
  {
    path: '/app/ad/homebanner/add',
    component:() => import('../views/app/ad/homebanner/add.vue'),
    meta: { class1: 'app', class2: 'ad', class3: 'homebanner' }
  },
  {
    path: '/app/ad/homebanner/edit',
    component:() => import('../views/app/ad/homebanner/edit.vue'),
    meta: { class1: 'app', class2: 'ad', class3: 'homebanner' }
  },
  // ---------------------------------------------------------- 广告位 -> 商城 banner
  {
    path: '/app/ad/shopbanner',
    component:() => import('../views/app/ad/shopbanner/index.vue'),
    meta: { class1: 'app', class2: 'ad', class3: 'shopbanner' }
  },
  {
    path: '/app/ad/shopbanner/add',
    component:() => import('../views/app/ad/shopbanner/add.vue'),
    meta: { class1: 'app', class2: 'ad', class3: 'shopbanner' }
  },
  {
    path: '/app/ad/shopbanner/edit',
    component:() => import('../views/app/ad/shopbanner/edit.vue'),
    meta: { class1: 'app', class2: 'ad', class3: 'shopbanner' }
  },
  // ---------------------------------------------------------- 广告位 -> 资讯 banner
  {
    path: '/app/ad/infobanner',
    component:() => import('../views/app/ad/infobanner/index.vue'),
    meta: { class1: 'app', class2: 'ad', class3: 'infobanner' }
  },
  {
    path: '/app/ad/infobanner/add',
    component:() => import('../views/app/ad/infobanner/add.vue'),
    meta: { class1: 'app', class2: 'ad', class3: 'infobanner' }
  },
  {
    path: '/app/ad/infobanner/edit',
    component:() => import('../views/app/ad/infobanner/edit.vue'),
    meta: { class1: 'app', class2: 'ad', class3: 'infobanner' }
  },
  // --------------------------------------------------------------------------------------------------- 金刚区
  // ---------------------------------------------------------- 金刚区 -> 首页金刚区（主）
  {
    path: '/app/kingkong/main',
    component:() => import('../views/app/kingkong/main/index.vue'),
    meta: { class1: 'app', class2: 'kingkong', class3: 'main' }
  },
  {
    path: '/app/kingkong/main/add',
    component:() => import('../views/app/kingkong/main/add.vue'),
    meta: { class1: 'app', class2: 'kingkong', class3: 'main' }
  },
  {
    path: '/app/kingkong/main/edit',
    component:() => import('../views/app/kingkong/main/edit.vue'),
    meta: { class1: 'app', class2: 'kingkong', class3: 'main' }
  },
  // ---------------------------------------------------------- 金刚区 -> 首页金刚区（副）
  {
    path: '/app/kingkong/second',
    component:() => import('../views/app/kingkong/second/index.vue'),
    meta: { class1: 'app', class2: 'kingkong', class3: 'second' }
  },
  {
    path: '/app/kingkong/second/add',
    component:() => import('../views/app/kingkong/second/add.vue'),
    meta: { class1: 'app', class2: 'kingkong', class3: 'second' }
  },
  {
    path: '/app/kingkong/second/edit',
    component:() => import('../views/app/kingkong/second/edit.vue'),
    meta: { class1: 'app', class2: 'kingkong', class3: 'second' }
  },
  // ---------------------------------------------------------- 金刚区 -> 商城金刚区
  {
    path: '/app/kingkong/shop',
    component:() => import('../views/app/kingkong/shop/index.vue'),
    meta: { class1: 'app', class2: 'kingkong', class3: 'shop' }
  },
  {
    path: '/app/kingkong/shop/add',
    component:() => import('../views/app/kingkong/shop/add.vue'),
    meta: { class1: 'app', class2: 'kingkong', class3: 'shop' }
  },
  {
    path: '/app/kingkong/shop/edit',
    component:() => import('../views/app/kingkong/shop/edit.vue'),
    meta: { class1: 'app', class2: 'kingkong', class3: 'shop' }
  },
  // --------------------------------------------------------------------------------------------------- 瓷片管理
  // ---------------------------------------------------------- 瓷片管理 -> 首页热门商品
  {
    path: '/app/porcelain/homehot',
    component:() => import('../views/app/porcelain/homehot/index.vue'),
    meta: { class1: 'app', class2: 'porcelain', class3: 'homehot' }
  },
  {
    path: '/app/porcelain/homehot/add',
    component:() => import('../views/app/porcelain/homehot/add.vue'),
    meta: { class1: 'app', class2: 'porcelain', class3: 'homehot' }
  },
  {
    path: '/app/porcelain/homehot/edit',
    component:() => import('../views/app/porcelain/homehot/edit.vue'),
    meta: { class1: 'app', class2: 'porcelain', class3: 'homehot' }
  },
  // ---------------------------------------------------------- 瓷片管理 -> 首页医疗器械
  {
    path: '/app/porcelain/homedevices',
    component:() => import('../views/app/porcelain/homedevices/index.vue'),
    meta: { class1: 'app', class2: 'porcelain', class3: 'homedevices' }
  },
  {
    path: '/app/porcelain/homedevices/add',
    component:() => import('../views/app/porcelain/homedevices/add.vue'),
    meta: { class1: 'app', class2: 'porcelain', class3: 'homedevices' }
  },
  {
    path: '/app/porcelain/homedevices/edit',
    component:() => import('../views/app/porcelain/homedevices/edit.vue'),
    meta: { class1: 'app', class2: 'porcelain', class3: 'homedevices' }
  },
  // ---------------------------------------------------------- 瓷片管理 -> 首页赴日医检
  {
    path: '/app/porcelain/homecheckup',
    component:() => import('../views/app/porcelain/homecheckup/index.vue'),
    meta: { class1: 'app', class2: 'porcelain', class3: 'homecheckup' }
  },
  {
    path: '/app/porcelain/homecheckup/add',
    component:() => import('../views/app/porcelain/homecheckup/add.vue'),
    meta: { class1: 'app', class2: 'porcelain', class3: 'homecheckup' }
  },
  {
    path: '/app/porcelain/homecheckup/edit',
    component:() => import('../views/app/porcelain/homecheckup/edit.vue'),
    meta: { class1: 'app', class2: 'porcelain', class3: 'homecheckup' }
  },
  // --------------------------------------------------------------------------------------------------- 页面管理
  // ---------------------------------------------------------- 页面管理 -> 微页面
  {
    path: '/app/page/micropage',
    component:() => import('../views/app/page/micropage/index.vue'),
    meta: { class1: 'app', class2: 'page', class3: 'micropage' }
  },
  {
    path: '/app/page/micropage/add',
    component:() => import('../views/app/page/micropage/add.vue'),
    meta: { class1: 'app', class2: 'page', class3: 'micropage' }
  },
  {
    path: '/app/page/micropage/edit',
    component:() => import('../views/app/page/micropage/edit.vue'),
    meta: { class1: 'app', class2: 'page', class3: 'micropage' }
  },
  // --------------------------------------------------------------------------------------------------- 健康资讯
  // ---------------------------------------------------------- 健康资讯 -> 资讯分类
  {
    path: '/app/info/classify',
    component:() => import('../views/app/info/classify/index.vue'),
    meta: { class1: 'app', class2: 'info', class3: 'classify' }
  },
  {
    path: '/app/info/classify/add',
    component:() => import('../views/app/info/classify/add.vue'),
    meta: { class1: 'app', class2: 'info', class3: 'classify' }
  },
  {
    path: '/app/info/classify/edit',
    component:() => import('../views/app/info/classify/edit.vue'),
    meta: { class1: 'app', class2: 'info', class3: 'classify' }
  },
  // ---------------------------------------------------------- 健康资讯 -> 资讯列表
  {
    path: '/app/info/list',
    component:() => import('../views/app/info/list/index.vue'),
    meta: { class1: 'app', class2: 'info', class3: 'list' }
  },
  {
    path: '/app/info/list/add',
    component:() => import('../views/app/info/list/add.vue'),
    meta: { class1: 'app', class2: 'info', class3: 'list' }
  },
  {
    path: '/app/info/list/edit',
    component:() => import('../views/app/info/list/edit.vue'),
    meta: { class1: 'app', class2: 'info', class3: 'list' }
  },
]