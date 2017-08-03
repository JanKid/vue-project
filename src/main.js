// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './App'
import components from './components' // 公用组件扩展
import routes from './config/router'
import { path } from './config/path'

Vue.use(VueRouter) // Vue路由
Vue.use(VueResource) // Vue请求库
Vue.use(Vuex) // Vue状态管理

// 自定义组件扩展
Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`${name}`, components[key])
})
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: routes
})
// 路由检查
router.beforeEach((to, from, next) => {
  // 判断是否需要权限范围的
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 判断是否登录
    next()
  } else {
    next() // 确保一定要调用 next()
  }
  document.title = to.meta.title ? to.meta.title : 'A vue Project'
})

// 请求处理
// 设置请求拦截器处理HTTP错误状态
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true
Vue.http.interceptors.push((req, next) => {
  req.headers['X-Requested-With'] = 'XMLHttpRequest'
  req.credentials = true
  next((res) => {
    let data = res.body
    let status = data.error || res.status
    let currentRoute = router.currentRoute
    if (status === 401) {
      if (data.data && data.data.redirect) {
        location.href = data.data.redirect
      } else if (currentRoute.matched.some(record => record.meta.requiresAuth)) {
        router.push({
          path: path.site.login,
          query: { redirect: currentRoute.fullPath }
        })
      }
    } else if (status === 403) {
      console.error('您无权访问哦，请切换账号再尝试')
    } else if (status === 404) {
      console.error('页面丢失了，请联系管理员')
    } else if (status >= 500) {
      console.error('服务器君忙碌，请稍后再尝试')
    }
  })
  // }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
