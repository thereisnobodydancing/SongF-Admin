<template>
  <!-- header（头部） -->
  <header class="fixed top-0 inset-x-0 w-full h-[66px] bg-header pl-6 pr-4 flex items-center z-50">
    <!-- header-logo（头部-logo） -->
    <router-link to="/" class="mr-10">
      <img :src="logoImg" alt="logo" width="228" height="36">
    </router-link>
    <!-- header-menu（头部-菜单栏） -->
    <div
      v-for="(item, index) in headerList"
      :key="item.key"
      class="flex items-center"
    >
      <!-- header-menu-option（头部-菜单栏选项） -->
      <button
        :aria-label="item.label"
        class="w-[119px] h-10"
        @click="headerActive = index"
        :class="[headerActive === index ? 'text-primary hover:bg-primary/20' : ' text-white hover:bg-gray-300/20']"
      >
        {{ item.label }}
      </button>
      <!-- header-menu-divider（头部-菜单栏分割线） -->
      <div v-if="index !== headerList.length - 1" class="mx-2 h-3.5 border-l border-l-gray-600" />
    </div>
    <!-- header-user（头部-用户） -->
    <div class="ml-auto flex items-center cursor-pointer">
      <div class="w-9 h-9 bg-gray-300 rounded-full"></div>
      <p class="ml-3 mr-2 text-white">安星星</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-white">
        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
      </svg>
    </div>
  </header>
</template>

<script setup>
import logoImg from '/src/assets/logo.png'

const headerActive = ref(0)
const headerList = [
  { label: '商城管理', key: 'shop' },
  { label: '内容管理', key: 'app' },
  { label: '用户管理', key: 'user' },
  { label: '数据中心', key: 'data' },
  { label: '系统管理', key: 'system' },
]
</script>