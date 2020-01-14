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
        component: () => import(/* webpackChunkName: "CategoryEdit" */ "../views/Category/CategoryEdit.vue")
      },
      {
        path: '/categories/edit/:id',
        component: () => import(/* webpackChunkName: "CategoryEdit" */ "../views/Category/CategoryEdit.vue"),
        props: true
      },
      {
        path: '/categories/list',
        component: () => import(/* webpackChunkName: "CategoryList" */ "../views/Category/CategoryList.vue")
      },
      {
        path: '/items/create',
        component: () => import(/* webpackChunkName: "ItemEdit" */ "../views/Item/ItemEdit.vue")
      },
      {
        path: '/items/edit/:id',
        component: () => import(/* webpackChunkName: "ItemEdit" */ "../views/Item/ItemEdit.vue"),
        props: true
      },
      {
        path: '/items/list',
        component: () => import(/* webpackChunkName: "ItemList" */ "../views/Item/ItemList.vue")
      },
      {
        path: '/heroes/create',
        component: () => import(/* webpackChunkName: "HeroEdit" */ "../views/Hero/HeroEdit.vue")
      },
      {
        path: '/heroes/edit/:id',
        component: () => import(/* webpackChunkName: "HeroEdit" */ "../views/Hero/HeroEdit.vue"),
        props: true
      },
      {
        path: '/heroes/list',
        component: () => import(/* webpackChunkName: "HeroList" */ "../views/Hero/HeroList.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
