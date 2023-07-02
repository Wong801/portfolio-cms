import type DefineSetupStoreOptions from "pinia";
import { NavigationGuardNext, type RouteLocationNormalized } from "vue-router";

export interface MiddlewarePayload {
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  store: DefineSetupStoreOptions
}

export type MiddlewareFunction = Function<MiddlewarePayload>