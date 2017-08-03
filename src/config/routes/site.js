import { path } from '../path'

export default [{
  name: 'site',
  path: path.site.index,
  meta: {
    title: '首页',
    requiresAuth: true
  },
  component: resolve => require(['@/pages/site/index'], resolve)
}, {
  name: 'login',
  path: path.site.login,
  meta: {
    title: '登录',
    requiresAuth: false
  },
  component: resolve => require(['@/pages/site/login'], resolve)
}]
