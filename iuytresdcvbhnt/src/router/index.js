import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ConcoursPage from '@/views/ConcoursPage.vue'
import ImpactsPage from '@/views/ImpactsPage.vue'
import SurveillancePage from '@/views/SurveillancePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/vue-ensemble',
      name: 'VueEnsemble',
      component: ConcoursPage,
    },
    {
      path: '/impacts',
      name: 'Impacts',
      component: ImpactsPage,
    },
    {
      path: '/surveillance',
      name: 'Surveillance',
      component: SurveillancePage,
    },
  ],
})

export default router
