import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import personalCenter from '../views/personalCenter.vue'
import homepage from '../views/homepage.vue'
import logining from '../views/Login.vue'
import registering from '../views/Register.vue'

Vue.use(VueRouter)

  const routes = [
  {
      path:'/homepage',
      name:'homepage',
      component: homepage,
      meta:{
        isLogin:false
      }
    },
    {
      path:'/login',
      name:'login',
      component:logining,
      meta:{
        isLogin:false
      }
    },
    {
      path:'/register',
      name:'registering',
      component:registering,
      meta:{
        isLogin:false
      }
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: personalCenter
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
