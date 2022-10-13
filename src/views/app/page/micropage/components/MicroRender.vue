<!-- 微渲染 -->
<template>
  <div>
    <!-- 两列商品 -->
    <template v-if="props.item.id === '1'">
      <div class="px-4 py-2 cursor-pointer">
        <div v-if="props.item.options.name" class="h-10 flex items-center">
          <p class="text-base font-bold">{{ props.item.options.name }}</p>
          <p class="ml-3 text-gray-500">{{ props.item.options.desc }}</p>
          <p class="ml-auto">更多 ></p>
        </div>
        <div class="grid grid-cols-2 gap-3 py-2">
          <div v-for="i in 4" :key="i" class="shadow rounded-md bg-white">
            <div class="w-full h-32 bg-gray-300 rounded-t-md text-center text-gray-500 py-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p class="text-xs">商品图片</p>
            </div>
            <div class="w-full h-16 p-3 space-y-1.5">
              <div class="w-full h-2.5 bg-gray-300"></div>
              <div class="w-1/3 h-2.5 bg-gray-300"></div>
              <div class="w-2/3 h-2.5 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- 三列商品 -->
    <template v-if="props.item.id === '2'" >
      <div class="px-4 py-2 cursor-pointer">
        <div v-if="props.item.options.name" class="h-10 flex items-center">
          <p class="text-base font-bold">{{ props.item.options.name }}</p>
          <p class="ml-3 text-gray-500">{{ props.item.options.desc }}</p>
          <p class="ml-auto">更多 ></p>
        </div>
        <div class="grid grid-cols-3 gap-3 py-2">
          <div v-for="i in 6" :key="i" class="shadow rounded-md bg-white">
            <div class="w-full h-24 bg-gray-300 rounded-t-md text-center text-gray-500 py-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p class="text-xs">商品图片</p>
            </div>
            <div class="w-full h-14 p-2.5 space-y-1.5">
              <div class="w-full h-2 bg-gray-300"></div>
              <div class="w-1/3 h-2 bg-gray-300"></div>
              <div class="w-2/3 h-2 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- 大图广告 -->
    <template v-if="props.item.id === '3'">
      <div class="w-full h-48 bg-gray-300 text-gray-500 flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <p class="text-xs">大图广告</p>
      </div>
    </template>
    <!-- 标题文本 -->
    <template v-if="props.item.id === '4'">
      <div 
        class="h-11 flex items-center cursor-pointer px-4"
        :class="{'justify-center': props.item.options.position === 'center'}"
        :style="{background: props.item.options.background, color: props.item.options.color}"
      >
        <p
          :class="{
            'text-lg': props.item.options.size === 'lg',
            'text-base': props.item.options.size === 'base',
            'text-sm': props.item.options.size === 'sm',
            'font-bold': props.item.options.bold
          }"
        >
          {{ props.item.options.name }}
        </p>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})
</script>