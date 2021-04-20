<template>
  <form @submit.prevent="submit">
    <label for="name">First name:</label>
    <input id="name" v-model="form.name" />
   
    <label for="email">Email:</label>
    <input id="email" v-model="form.email" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
      },
    }
  },
  methods: {
    submit() {
      this.$inertia.post(this.$page.props.urls.store, this.form)
    },
  },
}
</script>