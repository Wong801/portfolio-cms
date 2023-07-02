import type { MiddlewarePayload } from ".";

export default async function auth({ next, store }: MiddlewarePayload) {
  const isLoggedIn = await store.isLoggedIn()
  if (isLoggedIn) {
    return next({
      name: 'cms.home'
    })
  }

  return next()
}