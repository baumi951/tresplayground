import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ThreeView from '../views/ThreeView.vue'
import Glass from '../views/Glass.vue'
import particle from '../views/particle/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ThreeView',
      name: 'ThreeView',
      component: ThreeView
    },
    {
      path: '/particle',
      name: 'particle',
      component: particle
    },
    {
      path: '/particle',
      name: 'particle',
      component: particle
    },
    {
      path: '/Glass',
      name: 'Glass',
      component: Glass
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
