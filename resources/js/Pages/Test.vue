<template>
    <form @submit.prevent="submit">
      <label for="name">name</label>
      <input type="text" id="name" />
      <label for="email">Email</label>
      <input type="email" id="email" />
      <label for="password">Password:</label>
      <input type="password" id="Password" />
      <button type="submit">Submit</button>
    </form>
  </template>
  <script>
  import { reactive } from 'vue'
  import { Inertia } from '@inertiajs/inertia'
  
  export default {
    setup () {
      const form = reactive({
        name: null,
        email: null,
        password: null,
      })
  
      function submit() {
        Inertia.post('/users', form)
      }
  
      return { form, submit }
    },
  }
  </script>
