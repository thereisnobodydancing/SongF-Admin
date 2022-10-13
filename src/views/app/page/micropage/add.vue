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
          :list="components"
          :sort="false"
          animation=200
          :group="{ name: 'micropage', pull: 'clone', put: false }"
          item-key="name"
          class="mt-4 grid grid-cols-2 gap-4"
        >
          <template #item="{element, index}">
            <micro-components :item="element" @click="handleClickComponent(element)" />
          </template>
        </draggable>
      </div>
      <!-- 中间-渲染区 -->
      <div class="py-4">
        <phone-mockup :title="data.title" :color="data.background">
          <draggable
            id="formId"
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
                class="cursor-default relative"
                :class="{'border-b-2 border-primary/80': active === index}"
              >
                <micro-render :item="element"/>
                <!-- 书签 -->
                <div v-show="active === index" class="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/20 cursor-pointer"></div>
                <button 
                  v-show="active === index"
                  class="absolute bottom-0.5 right-0.5 bg-primary/90 text-white h-7 flex items-center rounded"
                >
                  <span class="px-2 border-r text-xs cursor-default">{{ element.name }}</span>
                  <div class="px-1" @click="removeItem(index)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </div>
                </button>
              </div>
            </template>
          </draggable>
        </phone-mockup>
      </div>
      <!-- 右侧-属性编辑区 -->
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
          <micro-config :data="data" :active="active" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { debounce } from 'lodash'
import PhoneMockup from './components/PhoneMockup.vue'
import MicroComponents from './components/MicroComponents.vue'
import MicroRender from './components/MicroRender.vue'
import MicroConfig from './components/MicroConfig.vue'

const height = document.documentElement.clientHeight

// 左侧： 组件区
const components = ref([
  {id: '1', name: '两列商品', options: {name: '', desc: '', link: '', products: []}},
  {id: '2', name: '三列商品', options: {name: '', desc: '', link: '', products: []}},
  {id: '3', name: '大图广告', options: {name: '', iamge: '', link: ''}},
  {id: '4', name: '标题文本', options: {name: '', position: 'left', size: 'base', bold: true, color: '#333333', background: '#FFFFFF'}}        //large, default, small
])
const initComponents = debounce(() => {
  components.value = [
    {id: '1', name: '两列商品', options: {name: '', desc: '', link: '', products: []}},
    {id: '2', name: '三列商品', options: {name: '', desc: '', link: '', products: []}},
    {id: '3', name: '大图广告', options: {name: '', iamge: '', link: ''}},
    {id: '4', name: '标题文本', options: {name: '', position: 'left', size: 'base', bold: true, color: '#333333', background: '#FFFFFF'}}        //large, default, small
  ]
}, 300, {leading: true, trailing: false})

// 中间：渲染区 以及 右侧：属性编辑区
const data = reactive({
  title: '',
  background: '#FFFFFF',
  list: []
})
// 当前选中的
const active = ref(null)
// 点击左侧菜单
const handleClickComponent = function(item) {
  data.list.push(item)
  initComponents()
  active.value = data.list.length - 1
  const centerHTML = document.querySelector('#formId')
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
  initComponents()
  active.value = data.list.length === 1 ? 0 : newIndex
}
// 选则单元时的回调函数
const chooseList = function({item, oldIndex}) {
  if(active.value !== oldIndex ) {
    active.value = oldIndex
    const componentHTML = document.querySelector(`#component${oldIndex}Id`)
    nextTick(() => {
      document.querySelector('#formId').scrollTop = componentHTML.offsetTop - 70
    })
  }
}
// 排序发生变化时的回调函数
const updateList = function({newIndex}) {
  active.value = newIndex
}

onUnmounted(() => {
  initComponents.cancel()
})
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