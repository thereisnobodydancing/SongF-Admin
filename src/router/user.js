/** - 用户管理 - **/

export default [
  // --------------------------------------------------------------------------------------------------- 用户管理
  // ---------------------------------------------------------- 用户管理 -> 用户列表
  {
    path: '/user/manage/list',
    component:() => import('../views/user/manage/list/index.vue'),
    meta: { class1: 'user', class2: 'manage', class3: 'list' }
  },
  // ---------------------------------------------------------- 用户反馈 -> 反馈列表
  {
    path: '/user/feedback/list',
    component:() => import('../views/user/feedback/list/index.vue'),
    meta: { class1: 'user', class2: 'feedback', class3: 'list' }
  },
]