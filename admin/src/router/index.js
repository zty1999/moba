import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Welcome from '../views/Welcome.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import GoodsEdit from '../views/GoodsEdit.vue'
import GoodsList from '../views/GoodsList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import AdsEdit from '../views/AdsEdit.vue'
import AdsList from '../views/AdsList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/welcome',
  },
  {path: '/login',component: Login,meta: {isPublic: true}},
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {path: 'welcome', component: Welcome},
      {path: 'category/create', component: CategoryEdit},
      {path: 'category/edit/:id', component: CategoryEdit, props: true},
      {path: 'category/list', component: CategoryList},

      {path: 'goods/edit/:id', component: GoodsEdit, props: true},
      {path: 'goods/create', component: GoodsEdit},
      {path: 'goods/list', component: GoodsList},

      {path: 'heroes/edit/:id', component: HeroEdit, props: true},
      {path: 'heroes/create', component: HeroEdit},
      {path: 'heroes/list', component: HeroList},

      {path: 'articles/edit/:id', component:ArticleEdit, props: true},
      {path: 'articles/create', component: ArticleEdit},
      {path: 'articles/list', component:ArticleList},

      {path: 'ads/edit/:id', component:AdsEdit, props: true},
      {path: 'ads/create', component: AdsEdit},
      {path: 'ads/list', component:AdsList},

      {path: 'admin_users/edit/:id', component:AdminUserEdit, props: true},
      {path: 'admin_users/create', component: AdminUserEdit},
      {path: 'admin_users/list', component:AdminUserList},
    ]
  },
  // {
  //   path: '/categoryEdit',
  //   name: 'categoryEdit',
  //   component: CategoryEdit
  // }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes,
  mode: 'hash'
});

//全局前置守卫
router.beforeEach((to,from,next) => {
  if(!to.meta.isPublic && !localStorage.token) {
    window.console.log('need login');
    return next('/login')
  }
  next()
});

export default router
