import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './utils/filters'
// Vant UI组件库
import Vant from 'vant'
import 'vant/lib/index.css'
import AtComponents from 'at-ui'
import 'at-ui-style'
// 使用组件库
Vue.use(Vant)
Vue.use(AtComponents)
Vue.config.productionTip = false
/**
 * 全局注册过滤器
 */
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
