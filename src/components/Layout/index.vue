<template>
  <div class="relative pt-16">

    <!-- 头部（header） -->
    <layout-header @change="headerChange" />

    <!-- content -->
    <div class="flex" :style="{ height: mainHeight + 'px'}">
      <layout-sidebar :header-key="headerKey" />
      <!-- content -->
      <div class="flex-grow h-full bg-page flex flex-col">
        <div class="flex-shrink-0 w-full h-12 bg-white flex items-center px-4">
          面包屑
        </div>
        <div class="flex-grow p-4">
          <router-view />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const route = useRoute()
const mainHeight = document.documentElement.clientHeight - 64
const headerKey = ref(route.meta.class1 ? route.meta.class1 : '')
const headerChange = (key) => headerKey.value = key
</script>