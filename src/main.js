import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'
import './assets/ali_icon/iconfont.css'
import APlayer from '@moefe/vue-aplayer';

import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL="http://120.24.35.66:8080/music_system/"//跨域问题
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: false,
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
