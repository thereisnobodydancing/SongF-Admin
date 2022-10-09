<template>
  <div 
    v-loading="showLoading" 
    class="w-full h-full flex flex-col"
  >
    <div 
      class="flex-grow w-full"
      :class="localList.length === 0 && !showLoading ? 'flex items-center justify-center' : 'h-px overflow-y-scroll'"
    >
      <slot v-if="localList.length > 0" :list="localList" />
      <el-empty 
        v-if="localList.length === 0 && !showLoading" 
        :description="props.description"
      />
    </div>
    <div
      v-if="localList.length > 0"
      class="flex-shrink-0 w-full h-16 flex items-center justify-end px-4"
    >
      <el-pagination
        v-model:currentPage="currentPage"
        :page-size="props.size"
        layout="prev, pager, next, jumper"
        :total="total"
        @current-change="askApi()"
      />
    </div>
  </div>
</template>

<script setup>
import api from '/src/api/index.js'
import { pickBy } from 'lodash'
import { onMounted } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    default: 10
  },
  url: {
    type: String,
    required: true
  },
  params: {
    type: Object,
    default: () => {}
  },
  description: {
    type: String,
    default: '无数据'
  }
})
const showLoading = ref(false)
const currentPage = ref(1)
const localList = ref([''])
const total = ref(0)

const askApi = function(more = true) {
  showLoading.value = true
  let newParams = {}
  if(!more) currentPage.value = 1
  Object.assign(newParams, props.params, { currentPage: currentPage.value, size: props.size })
  api.get(props.url, pickBy(newParams)).then((res) => {
    console.log(res.data.data)
  })
}

onMounted(() => askApi(false))

watch(props.params, (value) => {
  console.log('params',value)
  askApi(false)
}, {
  deep: true
})
</script>