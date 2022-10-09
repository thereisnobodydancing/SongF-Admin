import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../components/Layout/index.vue'
import shop from './shop.js'
import app from './app.js'
import user from './user.js'
import config from './config.js'

const routes= [
  {
    path: '/',
    redirect: '/main'
  },
  /** -----登录页----- **/
  {
    path: '/login',
    name: 'Login',
    component:() => import('../views/login/index.vue'),
    meta: { name: 'Login' }
  },

  {
    path: '/main',
    component: Layout,
    redirect: '/home',
    children: [
      /** ----- 首页 ----- **/
      {
        path: '/home',
        name: 'Home',
        component:() => import('../views/home/index.vue'),
        meta: { class1: 'shop', class2: 'shop', class3: '' }
      },
      /** --- 商城管理 --- **/
      ...shop,
      /** --- 内容管理 --- **/
      ...app,
      /** --- 用户管理 --- **/
      ...user,
      /** --- 系统管理 --- **/
      ...config
    ]
  },

  /** -------404------- **/
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component:() => import('../views/404/index.vue'),
    meta: { name: 'NotFound' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to,from,next) => {
  if(to.path === '/login') return next()
  if(!window.sessionStorage.getItem("token")) return next('/login')
  next()
})
export default router