import type { MiddlewarePayload } from '.'

export default async function admin({ next, store }: MiddlewarePayload) {
  const isLoggedIn = await store.isLoggedIn()
  if (!isLoggedIn) {
    return next({
      name: 'web.home'
    })
  }

  return next()
}