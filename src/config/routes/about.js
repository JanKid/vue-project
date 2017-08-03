import { path } from '../path'

export default [{
  path: path.about.index,
  name: 'about',
  meta: {
    title: '关于我们',
    requiresAuth: true
  },
  redirect: path.about.us,
  component: resolve => require(['@/components/common/body'], resolve),
  children: [{
    name: 'aboutUs',
    path: path.about.us,
    meta: {
      title: '关于我们-首页',
      requiresAuth: true
    },
    component: resolve => require(['@/pages/about/index'], resolve)
  }]
}]
