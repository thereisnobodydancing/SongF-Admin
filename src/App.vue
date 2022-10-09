<template>
  <div class="text-gray-900 text-sm">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script setup>
import { debounce } from 'lodash'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const fangdou = debounce(() => { location. reload() }, 300, {
  leading: true,  // 延长开始后调用
	trailing: false  // 延长结束前调用
})

const clientHeight = ref(document.documentElement.clientHeight)

onMounted(() => {
  window.onresize = () => {
    clientHeight.value = document.documentElement.clientHeight
  }
})

watch(() => clientHeight.value, value => {
  fangdou()
})

onUnmounted(() => {
  fangdou.cancel()
})
</script>

<style>
html { overflow-y: overlay }

::-webkit-scrollbar { @apply w-2 h-2 }
::-webkit-scrollbar-thumb { @apply bg-gray-400 w-2 rounded-lg cursor-pointer }
</style>
