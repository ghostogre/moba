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
        path: '/categories/create',
        component: () => import(/* webpackChunkName: "CategoryEdit" */ "../views/CategoryEdit.vue")
      },
      {
        path: '/categories/edit/:id',
        component: () => import(/* webpackChunkName: "CategoryEdit" */ "../views/CategoryEdit.vue"),
        props: true
      },
      {
        path: '/categories/list',
        component: () => import(/* webpackChunkName: "CategoryList" */ "../views/CategoryList.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
