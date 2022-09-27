<template>
  <div class="relative pt-[66px]">
    <layout-header />
    <!-- content -->
    <div class="flex">
      <!-- sidebar（侧边栏2级） -->
      <div 
        class="flex-shrink-0 w-20 bg-sidebar"
        :style="{ height: mainHeight + 'px'}"  
      >
        333
      </div>
      <!-- sidebar2（侧边栏3级） -->
      <div
        class="flex-shrink-0 w-48 bg-white"
        :style="{ height: mainHeight + 'px'}"
      >

      </div>
      <!-- content -->
      <div 
        class="flex-grow h-full bg-page p-4"
        :style="{ minHeight: mainHeight + 'px'}"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
const mainHeight = document.documentElement.clientHeight - 66
</script>