import { createRouter, createWebHistory } from 'vue-router'

import type { MiddlewareFunction, MiddlewarePayload } from '@/middlewares'
import auth from '@/middlewares/auth'
import admin from '../middlewares/admin'
import { useUserStore } from '@/stores/user'

import CMSView from '../modules/cms/CMS.vue'
import CMSHome from '../modules/cms/views/HomeView.vue'

import LoginView from '../views/LoginView.vue'

import WebView from '../modules/web/WebView.vue'
import HomeView from '../modules/web/views/HomeView.vue'
import axios from '../plugins/axios'
import { setCookie } from '@/utils/cookie'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        middleware: [
          auth
        ]
      },
      component: LoginView
    },
    {
      path: '/cms',
      name: 'cms',
      meta: {
        middleware: [
          admin
        ]
      },
      component: CMSView,
      children: [
        {
          path: '',
          name: 'cms.home',
          component: CMSHome
        }
      ]
    },
    {
      path: '/',
      name: 'web',
      component: WebView,
      children: [
        {
          path: '',
          name: 'web.home',
          component: HomeView
        }
      ]
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  const res = await axios.get('csrf')
  setCookie('X-CSRF-TOKEN', res.data?.data, 1)

  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware as Array<MiddlewareFunction>;
  const context = {
    to, 
    from, 
    next,
    store: useUserStore()
  } as MiddlewarePayload

  return middleware[0](context)
}) 

export default router
