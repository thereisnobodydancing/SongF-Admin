<template>
  <div class="relative pt-16">

    <!-- 头部（header） -->
    <layout-header @change="headerChange" />

    <!-- content -->
    <div class="flex" :style="{ height: mainHeight + 'px'}">
      <layout-sidebar :header-key="headerKey" class="flex-shrink-0" />
      <!-- content -->
      <div class="flex-grow h-full bg-page flex flex-col">
        <!-- 面包屑 -->
        <div class="flex-shrink-0 w-full h-12 bg-white px-4 flex items-center">
          <button 
            class="flex items-center space-x-1"
            :class="$route.path === '/home' ? 'text-primary cursor-default' : 'text-gray-600 hover:text-primary'"
            @click="$router.push('/')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span>首页</span>
          </button>
          <p v-if="$route.path !== '/home'" class="mx-1.5">/</p>
          <div v-for="(item, index) in $route.meta.breadcrumb" :key="index">
            <span 
              :class="item.name ? item.name === $route.name ? 'text-primary cursor-default' : 'text-gray-600 cursor-pointer hover:text-primary' : 'text-gray-600 cursor-default'"
              @click="clickBredcrumb(item.name, index)"
            >
              {{ item.title }}
            </span>
            <span v-if="$route.meta.breadcrumb.length - 1 !== index" class="mx-1.5 cursor-default">/</span>
          </div>
        </div>
        <div class="flex-grow p-4">
          <router-view v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
              <component :is="Component" />
            </Transition>
          </router-view>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const mainHeight = document.documentElement.clientHeight - 64
// header标签处理
const headerKey = ref(route.meta.class1 ? route.meta.class1 : '')
const headerChange = (key) => headerKey.value = key
// 点击面包屑跳转
const clickBredcrumb = (name, index) => {
  if(name && index < route.meta.breadcrumb.length - 1) router.push({name: name})
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    @apply transition opacity-100 ease-out
  }
  .fade-enter-from, .fade-leave-to {
    @apply transition opacity-50 ease-in-out
  }
  </style>