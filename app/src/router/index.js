import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        redirect:'/home/tab1',
    children:[
      {
        path: 'tab1',
        name: 'tab1',
        component: () => import(/* webpackChunkName: "tab1" */ '../views/pages/tab1.vue'),
      },
      {
        path: 'tab2',
        name: 'tab2',
        component: () => import(/* webpackChunkName: "tab2" */ '../views/pages/tab2.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/Mine.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
