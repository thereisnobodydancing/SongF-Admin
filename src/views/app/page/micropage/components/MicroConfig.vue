<!-- 微编辑 -->
<template>
  <!-- title -->
  <div class="h-12 border-b px-4">
    <p class="text-base font-bold leading-[3rem]">{{ active === null ? '通用设置' : props.data.list[active].name }}</p>
  </div>
  <!-- content -->
  <div class="p-4">
    <!-- 通用设置 -->
    <template v-if="active === null">
      <div class="space-y-6">
        <!-- 页面标题 -->
        <div class="space-y-2">
          <p class="text-gray-500"><span class="text-error font-bold mr-1">*</span>页面标题：</p>
          <el-input v-model="props.data.title" maxlength="15" placeholder="请输入页面标题，最多15个字符" show-word-limit clearable />
        </div>
        <!-- 背景颜色 -->
        <div class="flex items-center">
          <p class="text-gray-500">背景颜色：</p>
          <p class="ml-4">{{ props.data.background }}</p>
          <div class="ml-auto">
            <el-color-picker v-model="props.data.background" :predefine="predefineColors" />
          </div>
        </div>
      </div>
    </template>
    <!-- 非通用设置 -->
    <div v-if="active !== null && props.data.list.length > 0">
      <!-- 两列商品、三列商品 -->
      <template v-if="props.data.list[active].id === '1' || props.data.list[active].id === '2'">
        <div class="space-y-6">
          <!-- 磁片标题 -->
          <div class="space-y-2">
            <p class="text-gray-500">磁片标题：</p>
            <el-input v-model="props.data.list[active].options.name" :minlength="3" :maxlength="6" placeholder="请输入标题，3-6个字符（选填）" show-word-limit clearable />
            <p class="text-xs text-gray-300">无磁片标题时，磁片将不展示头部区域，直接展示商品类表，且描述和链接无论是否填写都不会显示。</p>
          </div>
          <!-- 磁片描述 -->
          <div class="space-y-2">
            <p class="text-gray-500">磁片描述：</p>
            <el-input v-model="props.data.list[active].options.desc" :minlength="4" :maxlength="12" placeholder="请输入描述，4-12个字符（选填）" show-word-limit clearable />
          </div>
        </div> 
      </template>
      <!-- 大图广告 -->
      <template v-if="props.data.list[active].id === '3'">
        <p>大图广告</p>
      </template>
      <!-- 标题文本 -->
      <template v-if="props.data.list[active].id === '4'">
        <div class="space-y-6">
          <!-- 标题内容 -->
          <div class="space-y-2">
            <p class="text-gray-500">标题内容：</p>
            <el-input v-model="props.data.list[active].options.name" :maxlength="15" placeholder="请输入标题，最多15个字符" clearable />
          </div>
          <!-- 显示位置 -->
          <div class="flex items-center">
            <p class="w-20 flex-shrink-0 text-gray-500">显示位置：</p>
            <p>{{ text.position[props.data.list[active].options.position] }}</p>
            <div class="ml-auto rounded flex items-center">
              <!-- 居左 -->
              <button 
                class="w-6 h-7 border rounded-l flex items-center justify-center"
                :class="props.data.list[active].options.position === 'left' ? 'bg-primary text-white border-primary' : 'hover:text-primary'"
                @click="props.data.list[active].options.position = 'left'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                </svg>
              </button>
              <!-- 居中 -->
              <button 
                class="w-6 h-7 border rounded-r flex items-center justify-center"
                :class="props.data.list[active].options.position === 'center' ? 'bg-primary text-white border-primary' : 'hover:text-primary'"
                @click="props.data.list[active].options.position = 'center'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
          <!-- 标题大小 -->
          <div class="flex items-center">
            <p class="w-20 flex-shrink-0 text-gray-500">显示位置：</p>
            <p>{{ text.size[props.data.list[active].options.size] }}</p>
            <div class="ml-auto flex items-center rounded">
              <button 
                class="w-6 h-7 border rounded-l text-lg"
                :class="props.data.list[active].options.size === 'lg' ? 'bg-primary text-white border-primary' : 'hover:text-primary'"
                @click="props.data.list[active].options.size = 'lg'"
              >
                A
              </button>
              <button 
                class="w-6 h-7 border text-base"
                :class="props.data.list[active].options.size === 'base' ? 'bg-primary text-white border-primary' : 'hover:text-primary'"
                @click="props.data.list[active].options.size = 'base'"
              >
                A
              </button>
              <button 
                class="w-6 h-7 border rounded-r text-sm"
                :class="props.data.list[active].options.size === 'sm' ? 'bg-primary text-white border-primary' : 'hover:text-primary'"
                @click="props.data.list[active].options.size = 'sm'"
              >
                A
              </button>
            </div>
          </div>
          <!-- 标题粗细 -->
          <div class="flex items-center">
            <p class="w-20 flex-shrink-0 text-gray-500">标题粗细：</p>
            <p>{{ props.data.list[active].options.bold ? '加粗' : '正常'}}</p>
            <div class="ml-auto flex items-center rounded">
              <button 
                class="w-7 h-7 border rounded-l text-base font-bold"
                :class="props.data.list[active].options.bold ? 'bg-primary text-white border-primary' : 'hover:text-primary'"
                @click="props.data.list[active].options.bold = true"
              >
                T
              </button>
              <button 
                class="w-7 h-7 border rounded-r text-base"
                :class="!props.data.list[active].options.bold ? 'bg-primary text-white border-primary' : 'hover:text-primary'"
                @click="props.data.list[active].options.bold = false"
              >
                T
              </button>
            </div>
          </div>
          <!-- 标题颜色 -->
          <div class="flex items-center">
            <p class="text-gray-500">标题颜色：</p>
            <p class="ml-4">{{ props.data.list[active].options.color }}</p>
            <div class="ml-auto">
              <el-color-picker v-model="props.data.list[active].options.color" :predefine="predefineColors" />
            </div>
          </div>
          <!-- 背景颜色 -->
          <div class="flex items-center">
            <p class="text-gray-500">背景颜色：</p>
            <p class="ml-4">{{ props.data.list[active].options.background }}</p>
            <div class="ml-auto">
              <el-color-picker v-model="props.data.list[active].options.background" :predefine="predefineColors" show-alpha />
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
  active: ''
})
const text = reactive({
  position: {
    left: '居左显示',
    center: '居中显示'
  },
  size: {
    lg: '大号(18)',
    base: '中号(16)',
    sm: '小号(14)'
  }
})
const predefineColors = ref([
  '#FFFFFF',
  '#67C23A',
  '#E6A23C',
  '#F56C6C',
  '#409EFF',
  '#909399',
  '#333333'
])
</script>

<style>
.el-color-predefine__color-selector {
  @apply border
}
</style>