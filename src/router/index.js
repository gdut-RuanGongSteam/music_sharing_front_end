import Vue from 'vue'
import VueRouter from 'vue-router'
import personalCenter from '../views/personalCenter.vue'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: "setting",
        name: 'setting',
        component: () => import('../views/Setting'),
        children: [
          {
            path: 'profile',
            name: 'profile',
            component: () => import('../components/Setting/user-info')
          },
          {
            path: "password",
            name: "password",
            component: () => import('../components/Setting/modify-password')
          }
        ]
      },
      {
        path: "download",
        name: 'download',
        component: () => import('../views/Download')
      },
      {
        path: "share",
        name: 'share',
        component: () => import('../views/Share')
      }
    ]
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: personalCenter
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
