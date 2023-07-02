<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import type { UserData } from '@/stores/user.interface';
import { ref, watch } from 'vue';

const store = useUserStore()

const form = ref({} as UserData)

const updateProfile = async (payload: UserData) => {
  await store.updateProfile({
    ...payload, 
    dob: new Date(payload.dob as string),
    phone: '+' + payload.phone
  })
  return true
}

watch(
  () => store.user,
  () => {
    console.log(store.user)
    form.value = {...store.user}
  },
  {
    immediate: true,
    deep: true
  }
)
</script>

<template>
  <form @submit.prevent="updateProfile(form)" class="form">
    <div class="form__content--user">
      <div>
        <label class="block" for="firstName">First Name: </label>
        <input v-model="form.firstName" type="text" name="firstName">
      </div>
      <div>
        <label class="block" for="lastName">Last Name: </label>
        <input v-model="form.lastName" type="text" name="lastName">
      </div>
      <div>
        <label class="block" for="email">Email: </label>
        <input v-model="form.email" type="email" name="email">
      </div>
      <div>
        <label class="block" for="desc">Description: </label>
        <textarea v-model="form.desc" name="desc" id="" cols="30" rows="1"></textarea>
      </div>
      <div>
        <label class="block" for="dob">Date of Born: </label>
        <input v-model="form.dob" type="date" name="dob">
      </div>
      <div>
        <label class="block" for="phone">Phone Number: </label>
        <input v-model="form.phone" type="tel" name="tel">
      </div>
    </div>
    <button type="submit" class="button-action">
      Save
    </button>
  </form>
  </template>