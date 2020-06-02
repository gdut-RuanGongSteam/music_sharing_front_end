import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'
import './assets/ali_icon/iconfont.css'

import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL="http://120.24.35.66:8080/music_system/"//跨域问题
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
