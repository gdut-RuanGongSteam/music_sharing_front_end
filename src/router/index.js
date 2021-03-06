import Vue from "vue";
import VueRouter from "vue-router";
import personalCenter from "../views/personalCenter.vue";
import homepage from "../views/homepage.vue";
import logining from "../views/Login.vue";
import registering from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/homepage",
    name: "homepage",
    component: homepage,
  },
  {
    path: "/login",
    name: "login",
    component: logining,
  },
  {
    path: "/register",
    name: "registering",
    component: registering,
  },
  {
    path: "/",
    name: "Home",
    redirect: "/homepage",
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      {
        path: "comment-page",
        name: "comment-page",
        component: () => import("../views/Comment-Page"),
      },
      {
        path: "setting",
        name: "setting",
        component: () => import("../views/Setting"),
        children: [
          {
            path: "profile",
            name: "profile",
            component: () => import("../components/Setting/user-info"),
          },
          {
            path: "password",
            name: "password",
            component: () => import("../components/Setting/modify-password"),
          },
        ],
      },
      {
        path: "find",
        name: "find",
        component: () => import("../views/find"),
      },
      {
        path: "download",
        name: "download",
        component: () => import("../views/Download"),
      },
      {
        path: "share",
        name: "share",
        component: () => import("../views/Share"),
      },
      {
        path: "/search",
        name: "search",
        component: () => import("../views/search"),
      },
      {
        path: "/personalCenter",
        name: "personalCenter",
        component: () => import("../views/personalCenter"),
      },
      {
        path: "/otherUserCenter",
        name: "otherUserCenter",
        component: () => import("../views/otherUserCenter"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//路由导航收守卫???
// routes.beforeEach((to,from,next)=>{
//   if(to.path==='/login') return next();
//   //获取token
//   const tokenStr=window.sessionStorage.getItem('token');
//   if(!tokenStr) return next('/login');
//   next()
// })

export default router;
