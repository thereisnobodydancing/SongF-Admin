/** - 内容管理 - **/
export default [
  // --------------------------------------------------------------------------------------------------- 基础内容
  // ---------------------------------------------------------- 基础内容 -> 对症找药
  {
    path: '/app/base/symptom',
    name: 'AppBaseSymptom',
    component:() => import('../views/app/base/symptom/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'base', 
      class3: 'symptom',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '基础内容', name: ''}, {title: '对症找药', name: 'AppBaseSymptom'}]
    }
  },
  {
    path: '/app/base/symptom/add',
    name: 'AppBaseSymptomAdd',
    component:() => import('../views/app/base/symptom/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'base', 
      class3: 'symptom',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '基础内容', name: ''}, {title: '对症找药', name: 'AppBaseSymptom'}, {title: '添加症状', name: 'AppBaseSymptomAdd'}] 
    }
  },
  {
    path: '/app/base/symptom/edit/:id',
    name: 'AppBaseSymptomEdit',
    component:() => import('../views/app/base/symptom/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'base', 
      class3: 'symptom',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '基础内容', name: ''}, {title: '对症找药', name: 'AppBaseSymptom'}, {title: '编辑症状', name: 'AppBaseSymptomEdit'}]
    }
  },
  // ---------------------------------------------------------- 基础内容 -> 搜索底纹
  {
    path: '/app/base/searchhint',
    name: 'AppBaseSearchHint',
    component:() => import('../views/app/base/searchhint/index.vue'),
    meta: { 
      class1: 'app',
      class2: 'base', 
      class3: 'searchhint',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '基础内容', name: ''}, {title: '搜索底纹', name: 'AppBaseSearchHint'}]
    }
  },
  {
    path: '/app/base/searchhint/add',
    name: 'AppBaseSearchHintAdd',
    component:() => import('../views/app/base/searchhint/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'base', 
      class3: 'searchhint',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '基础内容', name: ''}, {title: '搜索底纹', name: 'AppBaseSearchHint'}, {title: '添加底纹', name: 'AppBaseSearchHintAdd'}]
    }
  },
  {
    path: '/app/base/searchhint/edit/:id',
    name: 'AppBaseSearchHintEdit',
    component:() => import('../views/app/base/searchhint/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'base', 
      class3: 'searchhint',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '基础内容', name: ''}, {title: '搜索底纹', name: 'AppBaseSearchHint'}, {title: '编辑底纹', name: 'AppBaseSearchHintEdit'}]
    }
  },
  // ---------------------------------------------------------- 基础内容 -> 搜索推荐
  {
    path: '/app/base/searchhot',
    name: 'AppBaseSearchhot',
    component:() => import('../views/app/base/searchhot/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'base', 
      class3: 'searchhot',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '基础内容', name: ''}, {title: '搜索推荐', name: 'AppBaseSearchhot'}]
    }
  },
  {
    path: '/app/base/searchhot/add',
    name: 'AppBaseSearchhotAdd',
    component:() => import('../views/app/base/searchhot/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'base', 
      class3: 'searchhot',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '基础内容', name: ''}, {title: '搜索推荐', name: 'AppBaseSearchhot'}, {title: '添加内容', name: 'AppBaseSearchhotAdd'}]
    }
  },
  {
    path: '/app/base/searchhot/edit/:id',
    name: 'AppBaseSearchhotEdit',
    component:() => import('../views/app/base/searchhot/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'base', 
      class3: 'searchhot',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '基础内容', name: ''}, {title: '搜索推荐', name: 'AppBaseSearchhot'}, {title: '编辑内容', name: 'AppBaseSearchhotEdit'}]
    }
  },
  // --------------------------------------------------------------------------------------------------- 广告位
  // ---------------------------------------------------------- 广告位 -> 首页 banner
  {
    path: '/app/ad/homebanner',
    name: 'AppAdHomebanner',
    component:() => import('../views/app/ad/homebanner/index.vue'),
    meta: { 
      class1: 'app',
      class2: 'ad', 
      class3: 'homebanner',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '广告位', name: ''}, {title: '首页 banner', name: 'AppAdHomebanner'}] 
    }
  },
  {
    path: '/app/ad/homebanner/add',
    name: 'AppAdHomebannerAdd',
    component:() => import('../views/app/ad/homebanner/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'ad', 
      class3: 'homebanner',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '广告位', name: ''}, {title: '首页 banner', name: 'AppAdHomebanner'}, {title: '添加', name: 'AppAdHomebannerAdd'}]  
    }
  },
  {
    path: '/app/ad/homebanner/edit/:id',
    name: 'AppAdHomebannerEdit',
    component:() => import('../views/app/ad/homebanner/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'ad', 
      class3: 'homebanner',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '广告位', name: ''}, {title: '首页 banner', name: 'AppAdHomebanner'}, {title: '编辑', name: 'AppAdHomebannerEdit'}]  
    }
  },
  // ---------------------------------------------------------- 广告位 -> 商城 banner
  {
    path: '/app/ad/shopbanner',
    name: 'AppAdShopbanner',
    component:() => import('../views/app/ad/shopbanner/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'ad', 
      class3: 'shopbanner',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '广告位', name: ''}, {title: '商城 banner', name: 'AppAdShopbanner'}] 
    }
  },
  {
    path: '/app/ad/shopbanner/add',
    name: 'AppAdShopbannerAdd',
    component:() => import('../views/app/ad/shopbanner/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'ad', 
      class3: 'shopbanner',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '广告位', name: ''}, {title: '商城 banner', name: 'AppAdShopbanner'}, {title: '添加', name: 'AppAdShopbannerAdd'}]  
    }
  },
  {
    path: '/app/ad/shopbanner/edit/:id',
    name: 'AppAdShopbannerEdit',
    component:() => import('../views/app/ad/shopbanner/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'ad', 
      class3: 'shopbanner',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '广告位', name: ''}, {title: '商城 banner', name: 'AppAdShopbanner'}, {title: '编辑', name: 'AppAdShopbannerEdit'}]  
    }
  },
  // ---------------------------------------------------------- 广告位 -> 资讯 banner
  {
    path: '/app/ad/infobanner',
    name: 'AppAdInfobanner',
    component:() => import('../views/app/ad/infobanner/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'ad', 
      class3: 'infobanner',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '广告位', name: ''}, {title: '资讯 banner', name: 'AppAdInfobanner'}]  
    }
  },
  {
    path: '/app/ad/infobanner/add',
    name: 'AppAdInfobannerAdd',
    component:() => import('../views/app/ad/infobanner/add.vue'),
    meta: { 
      class1: 'app',
      class2: 'ad', 
      class3: 'infobanner',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '广告位', name: ''}, {title: '资讯 banner', name: 'AppAdInfobanner'}, {title: '添加', name: 'AppAdInfobannerAdd'}]  
    }
  },
  {
    path: '/app/ad/infobanner/edit/:id',
    name: 'AppAdInfobannerEdit',
    component:() => import('../views/app/ad/infobanner/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'ad', 
      class3: 'infobanner',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '广告位', name: ''}, {title: '资讯 banner', name: 'AppAdInfobanner'}, {title: '编辑', name: 'AppAdInfobannerEdit'}]  
    }
  },
  // --------------------------------------------------------------------------------------------------- 金刚区
  // ---------------------------------------------------------- 金刚区 -> 首页金刚区（主）
  {
    path: '/app/kingkong/main',
    name: 'AppKingkongMain',
    component:() => import('../views/app/kingkong/main/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'kingkong', 
      class3: 'main',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '金刚区', name: ''}, {title: '首页金刚区（主）', name: 'AppKingkongMain'}]  
    }
  },
  {
    path: '/app/kingkong/main/add',
    name: 'AppKingkongMainAdd',
    component:() => import('../views/app/kingkong/main/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'kingkong', 
      class3: 'main',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '金刚区', name: ''}, {title: '首页金刚区（主）', name: 'AppKingkongMain'}, {title: '添加', name: 'AppKingkongMainAdd'}]  
    }
  },
  {
    path: '/app/kingkong/main/edit/:id',
    name: 'AppKingkongMainEdit',
    component:() => import('../views/app/kingkong/main/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'kingkong', 
      class3: 'main',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '金刚区', name: ''}, {title: '首页金刚区（主）', name: 'AppKingkongMain'}, {title: '编辑', name: 'AppKingkongMainEdit'}]  
    }
  },
  // ---------------------------------------------------------- 金刚区 -> 首页金刚区（副）
  {
    path: '/app/kingkong/second',
    name: 'AppKingkongSecond',
    component:() => import('../views/app/kingkong/second/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'kingkong', 
      class3: 'second',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '金刚区', name: ''}, {title: '首页金刚区（副）', name: 'AppKingkongSecond'}]   
    }
  },
  {
    path: '/app/kingkong/second/add',
    name: 'AppKingkongSecondAdd',
    component:() => import('../views/app/kingkong/second/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'kingkong', 
      class3: 'second',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '金刚区', name: ''}, {title: '首页金刚区（副）', name: 'AppKingkongMain'}, {title: '添加', name: 'AppKingkongSecondAdd'}]   
    }
  },
  {
    path: '/app/kingkong/second/edit/:id',
    name: 'AppKingkongSecondEdit',
    component:() => import('../views/app/kingkong/second/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'kingkong', 
      class3: 'second',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '金刚区', name: ''}, {title: '首页金刚区（副）', name: 'AppKingkongMain'}, {title: '编辑', name: 'AppKingkongSecondEdit'}] 
    }
  },
  // ---------------------------------------------------------- 金刚区 -> 商城金刚区
  {
    path: '/app/kingkong/shop',
    name: 'AppKingkongShop',
    component:() => import('../views/app/kingkong/shop/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'kingkong', 
      class3: 'shop',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '金刚区', name: ''}, {title: '商城金刚区', name: 'AppKingkongShop'}] 
    }
  },
  {
    path: '/app/kingkong/shop/add',
    name: 'AppKingkongShopAdd',
    component:() => import('../views/app/kingkong/shop/add.vue'),
    meta: { 
      class1: 'app',
      class2: 'kingkong', 
      class3: 'shop',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '金刚区', name: ''}, {title: '商城金刚区', name: 'AppKingkongSecond'}, { title: '添加', name: 'AppKingkongShopAdd' }] 
    }
  },
  {
    path: '/app/kingkong/shop/edit/:id',
    name: 'AppKingkongShopEdit',
    component:() => import('../views/app/kingkong/shop/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'kingkong', 
      class3: 'shop',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '金刚区', name: ''}, {title: '商城金刚区', name: 'AppKingkongSecond'}, { title: '编辑', name: 'AppKingkongShopEdit' }] 
    }
  },
  // --------------------------------------------------------------------------------------------------- 磁片管理
  // ---------------------------------------------------------- 磁片管理 -> 首页热门商品
  {
    path: '/app/porcelain/homehot',
    name: 'AppPorcelainHomehot',
    component:() => import('../views/app/porcelain/homehot/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'porcelain', 
      class3: 'homehot',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '磁片管理', name: ''}, {title: '首页热门商品', name: 'AppPorcelainHomehot'}] 
    }
  },
  {
    path: '/app/porcelain/homehot/add',
    name: 'AppPorcelainHomehotAdd',
    component:() => import('../views/app/porcelain/homehot/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'porcelain', 
      class3: 'homehot',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '磁片管理', name: ''}, {title: '首页热门商品', name: 'AppPorcelainHomehot'},{title: '添加', name: 'AppPorcelainHomehotAdd'}] 
    }
  },
  {
    path: '/app/porcelain/homehot/edit/:id',
    name: 'AppPorcelainHomehotEdit',
    component:() => import('../views/app/porcelain/homehot/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'porcelain', 
      class3: 'homehot',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '磁片管理', name: ''}, {title: '首页热门商品', name: 'AppPorcelainHomehot'},{title: '编辑', name: 'AppPorcelainHomehotEdit'}]
    }
  },
  // ---------------------------------------------------------- 磁片管理 -> 首页医疗器械
  {
    path: '/app/porcelain/homedevices',
    name: 'AppPorcelainHomedevices',
    component:() => import('../views/app/porcelain/homedevices/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'porcelain', 
      class3: 'homedevices',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '磁片管理', name: ''}, {title: '首页医疗器械', name: 'AppPorcelainHomedevices'}] 
    }
  },
  {
    path: '/app/porcelain/homedevices/add',
    name: 'AppPorcelainHomedevicesAdd',
    component:() => import('../views/app/porcelain/homedevices/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'porcelain', 
      class3: 'homedevices',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '磁片管理', name: ''}, {title: '首页医疗器械', name: 'AppPorcelainHomedevices'}, {title: '添加', name: 'AppPorcelainHomedevicesAdd'}]
    }
  },
  {
    path: '/app/porcelain/homedevices/edit/:id',
    name: 'AppPorcelainHomedevicesEdit',
    component:() => import('../views/app/porcelain/homedevices/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'porcelain', 
      class3: 'homedevices',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '磁片管理', name: ''}, {title: '首页医疗器械', name: 'AppPorcelainHomedevices'}, {title: '编辑', name: 'AppPorcelainHomedevicesEdit'}] 
    }
  },
  // ---------------------------------------------------------- 磁片管理 -> 首页赴日医检
  {
    path: '/app/porcelain/homecheckup',
    name: 'AppPorcelainHomecheckup',
    component:() => import('../views/app/porcelain/homecheckup/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'porcelain', 
      class3: 'homecheckup',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '磁片管理', name: ''}, {title: '首页赴日医检', name: 'AppPorcelainHomecheckup'}] 
    }
  },
  {
    path: '/app/porcelain/homecheckup/add',
    name: 'AppPorcelainHomecheckupAdd',
    component:() => import('../views/app/porcelain/homecheckup/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'porcelain', 
      class3: 'homecheckup',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '磁片管理', name: ''}, {title: '首页赴日医检', name: 'AppPorcelainHomecheckup'}, {title: '添加', name: 'AppPorcelainHomecheckupAdd'}]  
    }
  },
  {
    path: '/app/porcelain/homecheckup/edit/:id',
    name: 'AppPorcelainHomecheckupEdit',
    component:() => import('../views/app/porcelain/homecheckup/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'porcelain', 
      class3: 'homecheckup',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '磁片管理', name: ''}, {title: '首页赴日医检', name: 'AppPorcelainHomecheckup'}, {title: '编辑', name: 'AppPorcelainHomecheckupEdit'}]  
    }
  },
  // --------------------------------------------------------------------------------------------------- 页面管理
  // ---------------------------------------------------------- 页面管理 -> 微页面
  {
    path: '/app/page/micropage',
    name: 'AppPageMicropage',
    component:() => import('../views/app/page/micropage/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'page', 
      class3: 'micropage',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '页面管理', name: ''}, {title: '微页面', name: 'AppPageMicropage'}] 
    }
  },
  {
    path: '/app/page/micropage/add',
    name: 'AppPageMicropageAdd',
    component:() => import('../views/app/page/micropage/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'page', 
      class3: 'micropage',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '页面管理', name: ''}, {title: '微页面', name: 'AppPageMicropage'}, {title: '添加', name: 'AppPageMicropageAdd'}] 
    }
  },
  {
    path: '/app/page/micropage/edit/:id',
    name: 'AppPageMicropageEdit',
    component:() => import('../views/app/page/micropage/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'page', 
      class3: 'micropage',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '页面管理', name: ''}, {title: '微页面', name: 'AppPageMicropage'}, {title: '编辑', name: 'AppPageMicropageEdit'}] 
    }
  },
  // --------------------------------------------------------------------------------------------------- 健康资讯
  // ---------------------------------------------------------- 健康资讯 -> 资讯分类
  {
    path: '/app/info/classify',
    name: 'AppInfoClassify',
    component:() => import('../views/app/info/classify/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'info', 
      class3: 'classify',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '健康资讯', name: ''}, {title: '资讯分类', name: 'AppInfoClassify'}] 
    }
  },
  {
    path: '/app/info/classify/add',
    name: 'AppInfoClassifyAdd',
    component:() => import('../views/app/info/classify/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'info', 
      class3: 'classify',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '健康资讯', name: ''}, {title: '资讯分类', name: 'AppInfoClassify'}, {title: '添加', name: 'AppInfoClassifyAdd'}] 
    }
  },
  {
    path: '/app/info/classify/edit/:id',
    name: 'AppInfoClassifyEdit',
    component:() => import('../views/app/info/classify/edit.vue'),
    meta: { 
      class1: 'app',
      class2: 'info', 
      class3: 'classify',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '健康资讯', name: ''}, {title: '资讯分类', name: 'AppInfoClassify'}, {title: '编辑', name: 'AppInfoClassifyEdit'}] 
    }
  },
  // ---------------------------------------------------------- 健康资讯 -> 资讯列表
  {
    path: '/app/info/list',
    name: 'AppInfoList',
    component:() => import('../views/app/info/list/index.vue'),
    meta: { 
      class1: 'app', 
      class2: 'info', 
      class3: 'list',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '健康资讯', name: ''}, {title: '资讯列表', name: 'AppInfoList'}]  
    }
  },
  {
    path: '/app/info/list/add',
    name: 'AppInfoListAdd',
    component:() => import('../views/app/info/list/add.vue'),
    meta: { 
      class1: 'app', 
      class2: 'info', 
      class3: 'list',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '健康资讯', name: ''}, {title: '资讯列表', name: 'AppInfoList'}, {title: '添加', name: 'AppInfoListAdd'}] 
    }
  },
  {
    path: '/app/info/list/edit/:id',
    name: 'AppInfoListEdit',
    component:() => import('../views/app/info/list/edit.vue'),
    meta: { 
      class1: 'app', 
      class2: 'info', 
      class3: 'list',
      breadcrumb: [{title: '内容管理', name: ''}, {title: '健康资讯', name: ''}, {title: '资讯列表', name: 'AppInfoList'}, {title: '编辑', name: 'AppInfoListEdit'}] 
    }
  },
]