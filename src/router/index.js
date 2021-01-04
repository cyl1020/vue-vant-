import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: "/index",
    name: "Index",
    component: () => import('../views/index.vue'),
    children: [{
      path: "test1",
      name: "Test1",
      component: () => import('../views/breadcrumbTest/test1.vue'),
      meta: {
        title: "测试1",
      },
    }],
    meta: {
      title: "首页",
    },
  },
  {
    path: "/test2",
    name: "Test2",
    component: () => import('../views/breadcrumbTest/test2.vue'),
    children: [{
      path: "test3",
      name: "Test3",
      component: () => import('../views/breadcrumbTest/test3.vue'),
      meta: {
        title: "测试3",
      },
    }],
    meta: {
      title: "测试2",
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router