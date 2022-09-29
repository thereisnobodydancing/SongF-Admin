/** - 系统管理 - **/

export default [
  // --------------------------------------------------------------------------------------------------- 权限管理
  // ---------------------------------------------------------- 权限管理 -> 角色管理
  {
    path: '/config/permissions/role',
    component:() => import('../views/config/permissions/role/index.vue'),
    meta: { class1: 'config', class2: 'permissions', class3: 'role' }
  },
  {
    path: '/config/permissions/role/add',
    component:() => import('../views/config/permissions/role/add.vue'),
    meta: { class1: 'config', class2: 'permissions', class3: 'role' }
  },
  {
    path: '/config/permissions/role/edit',
    component:() => import('../views/config/permissions/role/edit.vue'),
    meta: { class1: 'config', class2: 'permissions', class3: 'role' }
  },
  // ---------------------------------------------------------- 权限管理 -> 账号管理
  {
    path: '/config/permissions/account',
    component:() => import('../views/config/permissions/account/index.vue'),
    meta: { class1: 'config', class2: 'permissions', class3: 'account' }
  },
  {
    path: '/config/permissions/account/add',
    component:() => import('../views/config/permissions/account/add.vue'),
    meta: { class1: 'config', class2: 'permissions', class3: 'account' }
  },
  {
    path: '/config/permissions/account/edit',
    component:() => import('../views/config/permissions/account/edit.vue'),
    meta: { class1: 'config', class2: 'permissions', class3: 'account' }
  },
]