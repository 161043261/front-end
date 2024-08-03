import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArticleCategory from '@/views/article/ArticleCategory.vue'
import ArticleManage from '@/views/article/ArticleManage.vue'
import UserAvatar from '@/views/user/UserAvatar.vue'
import UserProfile from '@/views/user/UserProfile.vue'
import UserPassword from '@/views/user/UserPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/user',
      children: [
        { path: '/article/category', component: ArticleCategory },
        { path: '/article/manage', component: ArticleManage },
        { path: '/user/avatar', component: UserAvatar },
        { path: '/user/profile', component: UserProfile },
        { path: '/user/password', component: UserPassword }
      ]
    },
    // route level code-splitting
    // this generates a separate chunk (User.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    { path: '/user', component: () => import('@/views/UserView.vue') }
  ]
})

export default router
