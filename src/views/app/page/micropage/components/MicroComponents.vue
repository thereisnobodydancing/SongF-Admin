<!-- 微组件 -->
<template>
  <div class="space-y-2">
    <p class="text-gray-600 select-none">{{ props.item.name }}</p>
    <div class="w-full h-20 border border-gray-300 cursor-pointer">
      <!-- 两列商品 -->
      <template v-if="props.item.id === '1'">
        <div class="w-full h-full px-1.5 py-2 flex space-x-2">
          <div v-for="i in 2" :key="i" class="w-full space-y-1">
            <div class="w-full h-11 bg-gray-300" />
            <div class="w-full h-1.5 bg-gray-300" />
            <div class="w-1/3 h-1.5 bg-gray-300" />
          </div>
        </div>
      </template>
      <!-- 三列商品 -->
      <template v-if="props.item.id === '2'" >
        <div class="w-full h-full px-1.5 py-2 flex space-x-2">
          <div v-for="i in 3" :key="i" class="w-full space-y-1">
            <div class="w-full h-11 bg-gray-300" />
            <div class="w-full h-1.5 bg-gray-300" />
            <div class="w-1/3 h-1.5 bg-gray-300" />
          </div>
        </div>
      </template>
      <!-- 大图广告 -->
      <template v-if="props.item.id === '3'">
        <div class="w-full h-full p-1">
          <div class="w-full h-full bg-gray-300" />
        </div>
      </template>
      <!-- 标题文本 -->
      <template v-if="props.item.id === '4'">
        <div class="w-full h-full p-2">
          <div class="w-2/3 h-2.5 bg-gray-300" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})
</script>