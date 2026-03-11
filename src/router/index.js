import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import OverviewPage from '@/views/OverviewPage.vue'
import ImpactsPage from '@/views/ImpactsPage.vue'
import SurveillancePage from '@/views/SurveillancePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Home — iuytresdcvbhnt',
      description: 'Welcome to iuytresdcvbhnt — overview, impacts and surveillance information.'
    }
  },
  {
    path: '/vue-ensemble',
    name: 'VueEnsemble',
    component: OverviewPage,
    meta: {
      title: 'Overview — iuytresdcvbhnt',
      description: 'Overview and ensemble information for the project.'
    }
  },
  {
    path: '/impacts',
    name: 'Impacts',
    component: ImpactsPage,
    meta: {
      title: 'Impacts — iuytresdcvbhnt',
      description: 'Impacts page containing analyses and summaries.'
    }
  },
  {
    path: '/surveillance',
    name: 'Surveillance',
    component: SurveillancePage,
    meta: {
      title: 'Surveillance — iuytresdcvbhnt',
      description: 'Surveillance and monitoring details.'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

// Update page title and key meta tags after each navigation
router.afterEach((to) => {
  const defaultTitle = 'iuytresdcvbhnt'
  const title = to.meta && to.meta.title ? to.meta.title : defaultTitle
  const description = to.meta && to.meta.description ? to.meta.description : document.querySelector('meta[name="description"]')?.getAttribute('content') || ''

  // Title
  document.title = title

  // Helper to set or update meta tags
  function upsertMeta(selector, attrName, value) {
    let el = document.querySelector(selector)
    if (el) {
      el.setAttribute(attrName, value)
    } else {
      el = document.createElement('meta')
      const parts = selector.match(/meta\[([^=]+)=\"([^\"]+)\"]/)
      if (parts) el.setAttribute(parts[1], parts[2])
      el.setAttribute(attrName, value)
      document.head.appendChild(el)
    }
  }

  // Description
  upsertMeta('meta[name="description"]', 'content', description)

  // Open Graph
  upsertMeta('meta[property="og:title"]', 'content', title)
  upsertMeta('meta[property="og:description"]', 'content', description)

  // Use existing og:image from index fallback
  const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '/images/iuytresdcvbhnt.jpg'
  upsertMeta('meta[property="og:image"]', 'content', ogImage)

  // Twitter
  upsertMeta('meta[name="twitter:title"]', 'content', title)
  upsertMeta('meta[name="twitter:description"]', 'content', description)
  upsertMeta('meta[name="twitter:image"]', 'content', ogImage)

  // Canonical: try to create/update a canonical link
  let canonical = document.querySelector('link[rel="canonical"]')
  const base = window.location.origin
  const path = to.path || '/'
  const canonicalHref = base + path
  if (canonical) {
    canonical.setAttribute('href', canonicalHref)
  } else {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', canonicalHref)
    document.head.appendChild(canonical)
  }
})

export default router
