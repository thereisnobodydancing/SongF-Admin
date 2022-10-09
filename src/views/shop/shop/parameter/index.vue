<!-- /shop/shop/parameter -->
<!-- 商城管理 -> 商城中心 -> 参数管理（列表） -->
<template>
  <div class="w-full h-full flex flex-col space-y-4">
    <!-- 筛选区 -->
    <div class="flex-shrink-0 w-full bg-white p-4 space-y-2">
      <div class="flex flex-wrap">
        <!-- 参数名称 -->
        <div class="flex items-center space-x-2 mr-10 mb-3">
          <p class="flex-shrink-0">参数名称：</p>
          <div class="w-52">
            <el-input v-model="params.name" placeholder="请输入关键字" clearable />
          </div>
        </div>
        <!-- 参数状态 -->
        <div class="flex items-center space-x-2 mr-10 mb-3">
          <p class="flex-shrink-0">参数状态：</p>
          <div class="w-52">
            <el-select v-model="params.state" placeholder="请选择">
              <el-option
                v-for="item in stateOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div>
      <div>
        <el-button type="primary" class="w-24">筛选</el-button>
        <el-button type="primary" plain class="w-24">清空</el-button>
        <el-button type="primary" plain class="w-24">导出报表</el-button>
        <el-button type="primary" class="w-24">添加商品</el-button>
      </div>
    </div>
    <!-- 表单 -->
    <div class="w-full h-full bg-white">

    </div>
  </div>
</template>

<script setup>
const params = reactive({
  name: '',
  state: ''
})
const stateOptions = [
  { label: '全部', value: '' },
  { label: '在线', value: '1' },
  { label: '下架', value: '0' }
]
</script>