<template>
  <div class="relative pt-[66px]">

    <!-- 头部（header） -->
    <layout-header />

    <!-- content -->
    <div class="flex" :style="{ height: mainHeight + 'px'}">
      <!-- sidebar（侧边栏2级） -->
      <div class="flex-shrink-0 w-20 bg-sidebar">
        333
      </div>
      <!-- sidebar2（侧边栏3级） -->
      <div class="flex-shrink-0 w-48 bg-white">
        3334
      </div>
      <!-- content -->
      <div class="flex-grow h-full bg-page p-4">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script setup>
const mainHeight = document.documentElement.clientHeight - 66
</script>