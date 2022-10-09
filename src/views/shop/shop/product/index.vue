<!-- /shop/shop/product -->
<!-- 商城管理 -> 商城中心 -> 商品列表（列表） -->
<template>
  <div class="w-full h-full flex flex-col space-y-4">
    <!-- 筛选区 -->
    <div class="flex-shrink-0 w-full bg-white p-4 space-y-2">
      <div class="flex flex-wrap">
        <!-- 商品名称 -->
        <div class="flex items-center space-x-2 mr-10 mb-3">
          <p class="flex-shrink-0">商品名称：</p>
          <div class="w-52">
            <el-input v-model="params.name" placeholder="请输入关键字" clearable />
          </div>
        </div>
        <!-- 商品名称 -->
        <div class="flex items-center space-x-2 mr-10 mb-3">
          <p class="flex-shrink-0">商品ID：</p>
          <div class="w-54">
            <el-input v-model="params.id" placeholder="请输入商品ID" clearable />
          </div>
        </div>
        <!-- 上架时间 -->
        <div class="flex items-center space-x-2 mr-10 mb-3">
          <p class="flex-shrink-0">上架时间：</p>
          <el-date-picker v-model="params.starttime" type="daterange" start-placeholder="开始时间" end-placeholder="结束时间" />
        </div>
        <!-- 创建时间 -->
        <div class="flex items-center space-x-2 mr-10 mb-3">
          <p class="flex-shrink-0">创建时间：</p>
          <el-date-picker v-model="params.starttime" type="daterange" start-placeholder="开始时间" end-placeholder="结束时间" />
        </div>
      </div>
      <div>
        <el-button type="primary" class="w-24">筛选</el-button>
        <el-button type="primary" plain class="w-24" @click="clearForm">清空</el-button>
        <el-button type="primary" plain class="w-24">导出报表</el-button>
        <el-button type="primary" class="w-24" @click="$router.push('/shop/shop/product/add')">添加商品</el-button>
      </div>
    </div>
    <!-- 表单 -->
    <div class="flex-grow w-full h-full bg-white">
      <base-pagination
        url="/product/guige/getProductPage"
        :params="params"
      >
        33
      </base-pagination>
    </div>
  </div>
</template>

<script setup>
const params = reactive({
  name: '',
  id: '',
  sku: '',
  starttime: '',
  endtime: '',
})
// 清空表单
const clearForm = () => params.name = params.id = params.sku = params.starttime = params.endtime = ''
</script>