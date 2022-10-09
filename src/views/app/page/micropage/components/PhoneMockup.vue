<template>
  <div 
    class="w-96 h-full border-8 border-gray-900 rounded-3xl ring-4 relative"
    :style="{backgroundColor: props.color}"  
  >
    <!-- 状态栏 -->
    <div class="sticky top-0 w-full h-6 bg-white rounded-t-2xl flex items-center pl-6 pr-4">
      <div class="w-3 h-3 bg-gray-900 rounded-full" />
      <p class="text-xs ml-2">AM 5:25</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-auto w-4 h-4">
        <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-2 w-5 h-5">
        <path fill-rule="evenodd" d="M.676 6.941A12.964 12.964 0 0110 3c3.657 0 6.963 1.511 9.324 3.941a.75.75 0 01-.008 1.053l-.353.354a.75.75 0 01-1.069-.008C15.894 6.28 13.097 5 10 5 6.903 5 4.106 6.28 2.106 8.34a.75.75 0 01-1.069.008l-.353-.354a.75.75 0 01-.008-1.053zm2.825 2.833A8.976 8.976 0 0110 7a8.976 8.976 0 016.499 2.774.75.75 0 01-.011 1.049l-.354.354a.75.75 0 01-1.072-.012A6.978 6.978 0 0010 9c-1.99 0-3.786.83-5.061 2.165a.75.75 0 01-1.073.012l-.354-.354a.75.75 0 01-.01-1.05zm2.82 2.84A4.989 4.989 0 0110 11c1.456 0 2.767.623 3.68 1.614a.75.75 0 01-.022 1.039l-.354.354a.75.75 0 01-1.085-.026A2.99 2.99 0 0010 13c-.88 0-1.67.377-2.22.981a.75.75 0 01-1.084.026l-.354-.354a.75.75 0 01-.021-1.039zm2.795 2.752a1.248 1.248 0 011.768 0 .75.75 0 010 1.06l-.354.354a.75.75 0 01-1.06 0l-.354-.353a.75.75 0 010-1.06z" clip-rule="evenodd" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-2 w-6 h-6">
        <path d="M4.75 8a.75.75 0 00-.75.75v2.5c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-2.5a.75.75 0 00-.75-.75h-9.5z" />
        <path fill-rule="evenodd" d="M1 7.25A2.25 2.25 0 013.25 5h12.5A2.25 2.25 0 0118 7.25v1.085a1.5 1.5 0 011 1.415v.5a1.5 1.5 0 01-1 1.415v1.085A2.25 2.25 0 0115.75 15H3.25A2.25 2.25 0 011 12.75v-5.5zm2.25-.75a.75.75 0 00-.75.75v5.5c0 .414.336.75.75.75h12.5a.75.75 0 00.75-.75v-5.5a.75.75 0 00-.75-.75H3.25z" clip-rule="evenodd" />
      </svg>
    </div>
    <!-- 标题栏 -->
    <div class="sticky top-6 w-full h-11 flex items-center bg-white px-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
      </svg>
      <div class="mx-auto">
        <p class="-ml-7 font-bold text-base">{{ props.title }}</p>
      </div>
    </div>
    <!-- 内容 -->
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '页面标题'
  },
  color: {
    type: String,
    default: '#FFFFFF'
  }
})
</script>