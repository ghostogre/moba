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
      },
      {
        path: '/articles/create',
        component: () => import(/* webpackChunkName: "ArticleEdit" */ "../views/Article/ArticleEdit.vue")
      },
      {
        path: '/articles/edit/:id',
        component: () => import(/* webpackChunkName: "ArticleEdit" */ "../views/Article/ArticleEdit.vue"),
        props: true
      },
      {
        path: '/articles/list',
        component: () => import(/* webpackChunkName: "ArticleList" */ "../views/Article/ArticleList.vue")
      },
      {
        path: '/ads/create',
        component: () => import(/* webpackChunkName: "AdEdit" */ "../views/Ad/AdEdit.vue")
      },
      {
        path: '/ads/edit/:id',
        component: () => import(/* webpackChunkName: "AdEdit" */ "../views/Ad/AdEdit.vue"),
        props: true
      },
      {
        path: '/ads/list',
        component: () => import(/* webpackChunkName: "AdList" */ "../views/Ad/AdList.vue")
      },
      {
        path: '/admin_users/create',
        component: () => import(/* webpackChunkName: "AdminUserEdit" */ "../views/AdminUser/AdminUserEdit.vue")
      },
      {
        path: '/admin_users/edit/:id',
        component: () => import(/* webpackChunkName: "AdminUserEdit" */ "../views/AdminUser/AdminUserEdit.vue"),
        props: true
      },
      {
        path: '/admin_users/list',
        component: () => import(/* webpackChunkName: "AdminUserList" */ "../views/AdminUser/AdminUserList.vue")
      }
      // 在编辑页面点击新建的时候，不会切换组件？
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ "../views/AdminUser/Login.vue"),
    meta: {
      isPublic: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    next('/login')
  } else {
    next()
  }
})

export default router
