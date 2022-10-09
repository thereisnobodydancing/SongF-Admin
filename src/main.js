import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'

import { ElMessage, ElMessageBox, ElLoading } from 'element-plus';

import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'

const app = createApp(App)

app.use(router).use(ElMessage).use(ElMessageBox).use(ElLoading)
app.mount('#app')
