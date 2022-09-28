<template>
  <div class="h-full flex">
    <!-- sidebar（侧边栏2级） -->
    <div class="flex-shrink-0 w-28 bg-sidebar">
      <button
        v-for="item in sidebarData[props.headerKey]"
        :key="item.key"
        class="w-full h-12 text-white/80 hover:text-white hover:bg-gray-300/30"
      >
        {{ item.label }}
      </button>
    </div>
    <!-- sidebar2（侧边栏3级） -->
    <div class="flex-shrink-0 w-40 bg-page/30">
      {{ props.headerKey }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  headerKey: {
    type: String,
    required: true
  }
})
const sidebarActive = ref(0)
const sidebarData = {
  shop: [
    { 
      label: '商品中心', 
      key: 'shop', 
      list: []
    },
    { label: '订单中心', key: 'order'}
  ],
  app: [
    { label: '基础内容', key: 'base'},
    { label: '广告位', key: 'ad'},
    { label: '金刚区', key: 'kingkong'},
    { label: '瓷片管理', key: 'porcelain'},
    { label: '页面管理', key: 'page'},
    { label: '健康资讯', key: 'info'},
  ],
  user: [
    { label: '用户管理', key: 'manage'},
    { label: '用户反馈', key: 'feedback'}
  ],
  data: [
    { label: '数据中心', key: 'data' }
  ],
  system: [
    { label: '角色管理', key: 'role'},
    { label: '权限管理', key: 'permissions'}
  ]
}
</script>