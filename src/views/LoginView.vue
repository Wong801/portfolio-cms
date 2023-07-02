<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { UserLogin } from '@/stores/user.interface';
import { useUserStore } from '@/stores/user'

interface DefaultAPIError {
  reason: string
}

const router = useRouter()
const store = useUserStore()

const form = reactive({
  username: '',
  password: ''
} as UserLogin)

const login = async (payload: UserLogin) => {
  try {
    await store.login(payload)
    return router.push({
      name: 'cms'
    })
  } catch (err) {
    if (Array.isArray(err)) {
      alert(err[0])
    } else {
      const error = err as DefaultAPIError
      alert(error.reason)
    }
  }
}
</script>

<template>
  <main class="flex justify-center items-center min-h-screen bg-slate-200">
    <form class="form--login" @submit.prevent="login(form)">
      <h1 class="text-center text-xl font-bold">Login</h1>
      <div class="form__content">
        <div>
          <label class="block" for="username">Username: </label>
          <input v-model="form.username" class="block" type="text" name="username">
        </div>
        <div>
          <label class="block" for="password">Password: </label>
          <input v-model="form.password" class="block" type="password" name="password" id="form-password">
        </div>
        <button class="my-4 button-action w-full" type="submit">Login</button>
      </div>
    </form>
  </main>
</template>