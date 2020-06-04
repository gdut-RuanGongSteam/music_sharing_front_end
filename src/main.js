import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css'
import './assets/ali_icon/iconfont.css'
import APlayer from '@moefe/vue-aplayer';

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
