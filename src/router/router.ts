import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export interface RouteMeta {
  name: string;
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      name: 'home',
    }
  },

  {
    path: `/home`,
    name: 'home',
    component: () => import('../views/the-home.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if ( to.hash) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            top: 0,
            behavior: 'smooth',

          })

        }, 300)
      })
    }
    return { top: 0, behavior: 'smooth', }
  },
})

export default router
