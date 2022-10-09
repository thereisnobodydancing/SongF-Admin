<!-- /app/page/micropage -->
<!-- 内容管理 -> 页面管理 -> 微页面（列表） -->
<template>
  <div class="w-full h-full flex flex-col space-y-4">
    <div class="flex-shrink-0 w-full bg-white p-4 space-y-2">
      <div class="flex flex-wrap">
        <!-- 页面名称 -->
        <div class="flex items-center space-x-2 mr-10 mb-2">
          <p class="flex-shrink-0">页面名称：</p>
          <div class="w-52">
            <el-input v-model="params.name" placeholder="请输入关键字" clearable />
          </div>
        </div>
        <!-- 页面状态 -->
        <div class="flex items-center space-x-2 mr-10 mb-2">
          <p class="flex-shrink-0">页面状态：</p>
          <el-select v-model="params.state" class="m-2" placeholder="全部" clearable>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div>
        <el-button type="primary" class="w-24">筛选</el-button>
        <el-button type="primary" plain class="w-24" @click="clearForm">清空</el-button>
        <el-button type="primary" class="w-24" @click="$router.push('/app/page/micropage/add')">添加</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
const params = reactive({
  name: '',
  state: ''
})

const options = [
  { label: '全部', value: '全部' },
  { label: '上架', value: '上架' },
  { label: '下架', value: '下架' }
]
</script>