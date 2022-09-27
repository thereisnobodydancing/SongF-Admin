import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../components/Layout/index.vue'

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
        meta: { name: 'Home'}
      },
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
export default router