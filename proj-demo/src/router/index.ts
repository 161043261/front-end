import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArticleCategory from '@/views/article/ArticleCategory.vue'
import ArticleManage from '@/views/article/ArticleManage.vue'
import UserAvatar from '@/views/user/UserAvatar.vue'
import UserInfo from '@/views/user/UserInfo.vue'
import UserPassword from '@/views/user/UserPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/article/manage',
      children: [
        { path: '/article/category', component: ArticleCategory },
        { path: '/article/manage', component: ArticleManage },
        { path: '/user/avatar', component: UserAvatar },
        { path: '/user/info', component: UserInfo },
        { path: '/user/password', component: UserPassword }
      ]
    }, {
      path: '/auth', name: 'auth',
      // route level code-splitting
      // this generates a separate chunk (Auth.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AuthView.vue')
    }
  ]
})

export default router
