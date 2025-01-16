import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import ReturnView from '@/views/ReturnView.vue'
import RejectView from '@/views/RejectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
    },
    {
      path: '/returns',
      name: 'returns',
      component: ReturnView,
    },
    {
      path: '/rejects',
      name: 'rejects',
      component: RejectView,
    },
  ],
})

export default router
