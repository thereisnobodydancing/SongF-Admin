<template>
  <div class="h-full flex">
    <!-- sidebar（侧边栏2级） -->
    <div class="flex-shrink-0 w-28 bg-sidebar">
      <button
        v-for="item in sidebarData[props.headerKey]"
        :key="item.key"
        :aria-label="item.label"
        class="w-full h-12 text-white/80 hover:text-white hover:bg-gray-300/30"
        :class="{'bg-gray-300/30': sidebarKey === item.key}"
        @mouseenter="hoverOption(item.list, item.key)"
      >
        {{ item.label }}
      </button>
    </div>
    <!-- sidebar2（侧边栏3级） -->
    <div class="flex-shrink-0 w-40 bg-page/30">
      <button
        v-for="(item, index) in sidebarList"
        :key="item.key"
        :aria-label="item.label"
        class="w-full h-12 hover:bg-gray-300/10"
        :class="{'bg-gray-300/20 border-r-2 border-r-primary': $route.meta.class1 === props.headerKey && $route.meta.class2 === sidebarKey && $route.meta.class3 === item.key}"
        @click="$router.push(item.url)"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';

const props = defineProps({
  headerKey: {
    type: String,
    required: true
  }
})
const route = useRoute()
const sidebarData = {
  shop: [
    { 
      label: '商品中心', 
      key: 'shop', 
      list: [
        { label: '商品列表', key: 'product', url: '/shop/shop/product' },
        { label: '类目管理', key: 'category', url: '/shop/shop/category' },
        { label: '分类管理', key: 'classify', url: '/shop/shop/classify' },
        { label: '参数管理', key: 'parameter', url: '/shop/shop/parameter' },
        { label: '服务管理', key: 'service', url: '/shop/shop/service' }
      ]
    },
    { 
      label: '订单中心', 
      key: 'order',
      list: [
        { label: '订单管理', key: 'order', url: '/shop/order/order' },
        { label: '售后管理', key: 'aftersale', url: '/shop/order/aftersale' }
      ]
    }
  ],
  app: [
    { 
      label: '基础内容', 
      key: 'base',
      list: [
        { label: '对症找药', key: 'symptom', url: '/app/base/symptom' },
        { label: '搜索底纹', key: 'searchhint', url: '/app/base/searchhint' },
        { label: '搜索推荐', key: 'searchhot', url: '/app/base/searchhot' }
      ]
    },
    { 
      label: '广告位', 
      key: 'ad',
      list: [
      { label: '首页 banner', key: 'homebanner', url: '/app/ad/homebanner' },
      { label: '商城 banner', key: 'shopbanner', url: '/app/ad/shopbanner' },
      { label: '资讯 banner', key: 'infobanner', url: '/app/ad/infobanner' }
      ]
    },
    { 
      label: '金刚区', 
      key: 'kingkong',
      list: [
        { label: '首页金刚区（主）', key: 'main', url: '/app/kingkong/main' },
        { label: '首页金刚区（副）', key: 'second', url: '/app/kingkong/second' },
        { label: '商城金刚区', key: 'shop', url: '/app/kingkong/shop' }
      ]
    },
    { 
      label: '瓷片管理', 
      key: 'porcelain',
      list: [
        { label: '首页热门商品', key: 'homehot', url: '/app/porcelain/homehot' },
        { label: '首页医疗器械', key: 'homedevices', url: '/app/porcelain/homedevices' },
        { label: '首页赴日医检', key: 'homecheckup', url: '/app/porcelain/homecheckup' }
      ]
    },
    { 
      label: '页面管理', 
      key: 'page',
      list: [
        { label: '微页面', key: 'micropage', url: '/app/page/micropage' },
      ]
    },
    { 
      label: '健康资讯', 
      key: 'info',
      list: [
        { label: '资讯分类', key: 'classify', url: '/app/info/classify' },
        { label: '资讯列表', key: 'list', url: '/app/info/list' },
      ]
    },
  ],
  user: [
    { 
      label: '用户管理', 
      key: 'manage',
      list: [
        { label: '用户列表', key: 'list', url: '/user/manage/list' }
      ]
    },
    { 
      label: '用户反馈', 
      key: 'feedback',
      list: [
        { label: '反馈列表', key: 'list', url: '/user/feedback/list' },
      ]
    }
  ],
  data: [
    { 
      label: '数据中心', 
      key: 'data',
      list: []
    }
  ],
  config: [
    { 
      label: '权限管理', 
      key: 'permissions',
      list: [
        { label: '角色管理', key: 'role', url: '/config/permissions/role' },
        { label: '账号管理', key: 'account', url: '/config/permissions/account' },
      ]
    }
  ]
}

// const sidebarKey = ref(sidebarData[props.headerKey][0].key)
const sidebarKey = ref()
const sidebarList = ref()

const initSidebar = function(key) {
  if(route.meta.class1 === key) {
    let obj = sidebarData[key].find(item => item.key === route.meta.class2)
    sidebarKey.value = obj.key
    sidebarList.value = obj.list
  }
  if(route.meta.class1 !== key) {
    sidebarKey.value = sidebarData[key][0].key
    sidebarList.value = sidebarData[key][0].list
  }
}

onMounted(() => {
  initSidebar(props.headerKey)
})

watch(() => props.headerKey, value => {
  initSidebar(value)
})

const hoverOption = function(list, key) {
  sidebarList.value = list
  sidebarKey.value = key
}

/** 三级菜单 **/
</script>