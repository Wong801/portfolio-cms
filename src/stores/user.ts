import { computed, ref, type ComputedRef, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserData, UserLogin } from './user.interface'
import UserApi from '@/services/user'

export const useUserStore = defineStore('user', () => {
  const user: Ref<UserData> = ref({
    firstName: '',
    lastName: '',
  } as UserData)

  const fullName: ComputedRef<string> = computed(() => `${user.value.firstName} ${user.value.lastName}`)
  
  async function login(payload: UserLogin) {
    await UserApi.login(payload)
  }

  async function isLoggedIn() {
    return await UserApi.checkLogin()
  }

  async function logout() {
    await UserApi.logout()
  }

  async function getProfile() {
    const res = await UserApi.getProfile()
    user.value = res as UserData
  }

  async function updateProfile(payload: UserData) {
    await UserApi.updateProfile(payload)
  }

  return { user, fullName, isLoggedIn, login, logout, getProfile, updateProfile }
})
