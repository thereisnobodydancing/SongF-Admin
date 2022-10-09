<template>
  <!-- header（头部） -->
  <header class="fixed top-0 inset-x-0 w-full h-16 bg-header pl-6 pr-4 flex items-center z-50">
    <!-- header-logo（头部-logo） -->
    <img 
      :src="logoImg" 
      alt="logo" 
      width="228" 
      height="36" 
      class="mr-5 flex-shrink-0 cursor-pointer" 
      @click="gohome"
    >
    <!-- header-menu（头部-菜单栏） -->
    <div
      v-for="item in headerList"
      :key="item.key"
      class="flex items-center"
    >
      <!-- header-menu-option（头部-菜单栏选项） -->
      <button
        :aria-label="item.label"
        class="w-[119px] h-16 flex items-center justify-center space-x-2"
        :class="[headerKey === item.key ? 'text-white bg-gray-500/30' : ' text-white/80 hover:text-white hover:bg-gray-500/10']"
        @click="handleOption(item.key)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" :d="item.d" />
        </svg>

        <p>{{ item.label }}</p>
      </button>
    </div>
    <!-- header-user（头部-用户） -->
    <div class="flex-shrink-0 ml-auto flex items-center cursor-pointer">
      <div class="w-9 h-9 bg-gray-200 rounded-full py-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mx-auto">
          <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
        </svg>
      </div>
      <p class="ml-3 mr-2 text-white">{{ user.name }}</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-white">
        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
      </svg>
    </div>
  </header>
</template>


<script setup>
import logoImg from '/src/assets/logo.png'

const route = useRoute()
const router = useRouter()
const user = JSON.parse(sessionStorage.getItem('user'))
const emit = defineEmits(['change'])
const headerKey = ref(route.meta.class1 ? route.meta.class1 : '')
const headerList = [
  { label: '商城管理', key: 'shop', d: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
  { label: '内容管理', key: 'app', d: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z' },
  { label: '用户管理', key: 'user', d: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
  { label: '数据中心', key: 'data', d: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605' },
  { label: '系统管理', key: 'config', d: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' }
]
// 点击头部菜单选项
const handleOption = function(key) {
  headerKey.value = key
  emit('change', key)
}
const gohome = function() {
  handleOption('shop')
  router.push('/')
}
</script>