<template>
  <div class="w-full h-full">
    <div class="w-full h-12 bg-white border-b flex items-center px-4">
      <h2 class="text-lg font-bold">页面装修</h2>
      <div class="ml-auto">
        <el-button type="info" plain>取消</el-button>
        <el-button type="primary">保存</el-button>
      </div>
    </div>
    <div class="bg-gray-200 flex justify-between">
      <!-- 左侧-组件区 -->
      <div class="w-72 bg-white p-4">
        <p class="text-base font-bold">组件</p>
        <draggable
          :list="menu"
          :sort="false"
          animation=200
          :group="{ name: 'micropage', pull: 'clone', put: false }"
          item-key="name"
          class="mt-4 grid grid-cols-2 gap-4"
        >
          <template #item="{element, index}">
            <div class="space-y-2" @click="selMenu(index)">
              <p class="text-gray-600 select-none">{{ element.name }}{{ index }}</p>
              <div class="w-full h-20 border border-gray-300 cursor-pointer">
                <!-- 两列商品 -->
                <div 
                  v-if="element.id === '1'" 
                  class="w-full h-full px-1.5 py-2 flex space-x-2"
                >
                  <div v-for="i in 2" :key="i" class="w-full space-y-1">
                    <div class="w-full h-11 bg-gray-300" />
                    <div class="w-full h-1.5 bg-gray-300" />
                    <div class="w-1/3 h-1.5 bg-gray-300" />
                  </div>
                </div>
                <!-- 三列商品 -->
                <div 
                  v-if="element.id === '2'" 
                  class="w-full h-full px-1.5 py-2 flex space-x-2"
                >
                  <div v-for="i in 3" :key="i" class="w-full space-y-1">
                    <div class="w-full h-11 bg-gray-300" />
                    <div class="w-full h-1.5 bg-gray-300" />
                    <div class="w-1/3 h-1.5 bg-gray-300" />
                  </div>
                </div>
                <!-- 大图广告 -->
                <div v-if="element.id === '3'" class="h-full p-1">
                  <div class="w-full h-full bg-gray-300" />
                </div>
                <!-- 标题文本 -->
                <div v-if="element.id === '4'" class="h-full p-2">
                  <div class="w-2/3 h-2.5 bg-gray-300" />
                </div>
              </div>
            </div>
          </template>
        </draggable>
      </div>
      <!-- 中间-模拟区 -->
      <div class="py-4">
        <phone-mockup :title="data.title" :color="data.color">
          <draggable
            id="centerId"
            :list="data.list"
            group="micropage"
            item-key="name"
            class="w-full overflow-y-scroll pb-4 min-h-[500px]"
            :class="{'border-t-2 border-dotted': data.list.length === 0}"
            :style="{height: height - 310 + 'px'}"
            ghost-class="ghost"
            chosen-class="chosen"
            @add="addList"
            @choose="chooseList"
            @update="updateList"
          >
            <template #header>
              <div v-if="data.list.length === 0" class="text-gray-500 p-2">点击或拖拽左侧控件至此处</div>
            </template>
            <template #item="{element, index}">
              <div
                :id="`component${index}Id`"
                class="cursor-default"
                :class="{'relative pt-6' : active === index}"
              >
                <!-- 书签 -->
                <div :class="{'hidden' : active !== index}" class="absolute inset-0 bg-primary/20 cursor-pointer">
                  <button class="bg-primary text-white h-6 ml-auto flex items-center">
                    <span class="px-2 border-r leading-6 text-xs">{{ element.name }}</span>
                    <div class="px-1 hover:opacity-60" @click="removeItem(index)">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </div>
                  </button>
                </div>
                <!-- 两列商品 -->
                <div v-if="element.id === '1'" class="px-4 cursor-pointer">
                  <div class="h-10 flex items-center">
                    <p class="text-base font-bold">磁片标题</p>
                    <p class="ml-3 text-gray-500">磁片描述</p>
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
                <!-- 三列商品 -->
                <div v-if="element.id === '2'" class="px-4 cursor-pointer">
                  <div class="h-10 flex items-center">
                    <p class="text-base font-bold">磁片标题</p>
                    <p class="ml-3 text-gray-500">磁片描述</p>
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
                <!-- 大图广告 -->
                <div v-if="element.id === '3'" class="cursor-pointer">
                  <div class="w-full h-48 bg-gray-300 text-gray-500 flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <p class="text-xs">大图广告</p>
                  </div>
                </div>
                <!-- 标题文本 -->
                <div v-if="element.id === '4'" class="px-4 py-2 cursor-pointer">
                  <p class="text-base font-bold">标题文本</p>
                </div>
              </div>
            </template>
          </draggable>
        </phone-mockup>
      </div>
      <!-- 右侧-布局区 -->
      <div class="w-1/3 bg-white flex ">
        <!-- 列表 -->
        <div class="flex-shrink-0 w-32 h-full border-r">
          <button 
            class="w-full h-12 border-b" 
            :class="{'border-l-2 border-l-primary text-primary': active === null}"
            @click="active = null"
          >
            通用设置
          </button>
          <draggable
            id="centerId"
            :list="data.list"
            group="micropage"
            item-key="name"
            class="w-full overflow-y-scroll pb-4"
            :style="{height: height - 242 + 'px'}"
            ghost-class="ghost"
            chosen-class="chosen"
            @add="addList"
            @choose="chooseList"
            @update="updateList"
          >
            <template #item="{element, index}">
              <button 
                class="w-full h-12 border-b"
                :class="{'border-l-2 border-l-primary text-primary': active === index}"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="-ml-6 mr-2 w-4 h-4 inline-block text-gray-500">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>

                {{ element.name }}
              </button>
            </template>
          </draggable>
        </div>
        <!-- 内容 -->
        <div class="flex-grow">
          <div class="h-12 border-b px-4">
            <p class="text-base font-bold leading-[3rem]">{{ active === null ? '通用设置' : data.list[active].name }}</p>
          </div>
          <div class="p-4">
            <!-- 通用设置 -->
            <div v-if="active === null" class="space-y-6">
              <!-- 页面标题 -->
              <div class="space-y-2">
                <p><span class="text-error font-bold mr-1">*</span>页面标题：</p>
                <el-input v-model="data.title" maxlength="15" placeholder="请输入页面标题，最多15个字符" clearable />
              </div>
              <!-- 背景颜色 -->
              <div class="flex items-center">
                <p>背景颜色：</p>
                <p class="ml-4">{{ data.color }}</p>
                <div class="ml-auto">
                  <el-color-picker v-model="data.color" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick } from 'vue';
import draggable from 'vuedraggable'
import PhoneMockup from './components/PhoneMockup.vue'

const height = document.documentElement.clientHeight
const menu = [
  { id: '1', name: '两列商品'},
  { id: '2', name: '三列商品'},
  { id: '3', name: '大图广告'},
  { id: '4', name: '标题文本'}
]
const data = reactive({
  title: '',
  color: '#FFFFFF',
  list: []
})
// 当前选中的
const active = ref(null)
// 点击左侧菜单
const selMenu = function(index) {
  data.list.push(menu[index])
  active.value = data.list.length - 1
  const centerHTML = document.querySelector('#centerId')
  nextTick(() => {
    centerHTML.scrollTop = centerHTML.scrollHeight
  })
}

// 删除一个内容
const removeItem = function(index) {
  data.list.splice(index, 1)
  active.value = null
}

// 添加单元的回调函数
const addList = function({newIndex}) {
  active.value = data.list.length === 1 ? 0 : newIndex
}
// 选则单元时的回调函数
const chooseList = function({item, oldIndex}) {
  if(active.value !== oldIndex ) {
    active.value = oldIndex
    const componentHTML = document.querySelector(`#component${oldIndex}Id`)
    nextTick(() => {
      document.querySelector('#centerId').scrollTop = componentHTML.offsetTop - 70
    })
  }
}
// 排序发生变化时的回调函数
const updateList = function({newIndex}) {
  active.value = newIndex
}
</script>

<style scoped>
::-webkit-scrollbar { @apply w-0 }
.ghost {
  @apply bg-primary/20
}
.chosen {
  @apply border-b border-primary/50
}
</style>