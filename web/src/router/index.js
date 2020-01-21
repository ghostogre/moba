import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home/index.vue')
      },
      {
        path: '/articles/:id',
        name: 'articles',
        component: () => import(/* webpackChunkName: "article" */ '../views/Article/index.vue'),
        props: true
      }
    ]
  },
  {
    path: '/heroes/:id',
    name: 'hero',
    component: () => import(/* webpackChunkName: "hero" */ '../views/Hero/index.vue'),
    props: true
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
