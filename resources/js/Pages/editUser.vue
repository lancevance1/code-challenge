<template>
  <div class="">
    <div class="mb-8 flex justify-start max-w-3xl">
      <h1 class="font-bold text-3xl">
        <span class="text-blue-500 font-medium">Welcome {{ $page.props.auth.user.name}}</span>
      </h1>
    </div>

    <div class="bg-white rounded-md shadow overflow-hidden max-w-3xl w-full">
      <form @submit.prevent="update">
        <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
          <text-input v-model="form.name" :error="form.errors.name" class="pr-6 pb-8 w-full lg:w-1/2" label="Name" />
          <text-input v-model="form.email" :error="form.errors.email" class="pr-6 pb-8 w-full lg:w-1/2" label="Email" />
          <text-input v-model="form.password" :error="form.errors.password" class="pr-6 pb-8 w-full lg:w-1/2" type="password" autocomplete="new-password" label="Password" />
        </div>
        <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center">
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">Update User</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Layout from '../Shared/Layout'
import TextInput from '../Shared/TextInput'


import LoadingButton from '../Shared/LoadingButton'

export default {
  name:'editUser',
  metaInfo() {
    return {
    }
  },
  components: {
    LoadingButton,
    TextInput,
  },
  layout: Layout,
  data() {
    return {
      form: this.$inertia.form({
        _method: 'put',
        name: this.$page.props.auth.user.name,
        email: this.$page.props.auth.user.email,
        password: null,
      }),
    }
  },
  created() {
  },
  methods: {
    update() {
      this.form.post(this.$page.props.urls.update.replace(":id", this.$page.props.auth.user.id)
      )
    },
  },
}
</script>