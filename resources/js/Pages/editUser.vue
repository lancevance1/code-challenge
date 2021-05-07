<template>


  <div class="">

    <!--    <div class="p-6 min-h-full flex justify-center items-center">-->
    <!--      <div class="w-full max-w-md">-->
    <!--        <form-->
    <!--            class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden"-->
    <!--            @submit.prevent=""-->
    <!--        >-->
    <!--          <div class="px-10 py-12">-->
    <!--            <h1 class="text-center font-bold text-3xl">Welcome Back!</h1>-->
    <!--            <div class="mx-auto mt-6 w-24 border-b-2" />-->
    <!--            <TextInput-->
    <!--                v-model="form.email"-->
    <!--                :error="form.errors.email"-->
    <!--                class="mt-10"-->
    <!--                label="Email"-->
    <!--                type="email"-->
    <!--                autofocus-->
    <!--                autocomplete="username"-->
    <!--                autocapitalize="off"-->
    <!--            />-->
    <!--            <TextInput-->
    <!--                v-model="form.password"-->
    <!--                :error="form.errors.password"-->
    <!--                class="mt-6"-->
    <!--                label="Password"-->
    <!--                autocomplete="current-password"-->
    <!--                type="password"-->
    <!--            />-->

    <!--          </div>-->
    <!--          <div-->
    <!--              class="px-10 py-4 bg-gray-100 border-t border-gray-100 flex justify-between items-center"-->
    <!--          >-->
    <!--            <inertia-link class="text-md" href="/forgot-password"-->
    <!--            >Forgot password?</inertia-link>-->
    <!--            <LoadingButton-->
    <!--                :loading="form.processing"-->
    <!--                class="btn-blue"-->
    <!--                type="submit"-->
    <!--            >Login</LoadingButton-->
    <!--            >-->
    <!--          </div>-->
    <!--        </form>-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="p-6 min-h-full flex justify-center  flex-wrap gap-y-4">
      <!--      <h1 class="font-bold text-3xl">-->
      <!--        <span class="text-blue-500 font-medium">Welcome {{ $page.props.auth.user.name}}</span>-->
      <!--      </h1>-->


      <div class="bg-white rounded-md shadow overflow-hidden max-w-3xl w-full">

        <form @submit.prevent="update">
          <h1 class="pt-3 text-center font-bold text-3xl">Profile</h1>
          <div class="mx-auto mt-6 w-24 border-b-2"/>
          <div class="p-4 -mr-6 -mb-8 flex flex-wrap">
            <text-input v-model="form.name" :error="form.errors.name" class="pr-6 pb-8 w-full lg:w-1/2" label="Name"/>
            <text-input v-model="form.email" :error="form.errors.email" class="pr-6 pb-8 w-full lg:w-1/2"
                        label="Email"/>
          </div>
          <div class="px-8 py-1 bg-gray-50 border-t border-gray-100 flex items-center">
            <loading-button :loading="form.processing" class="btn-blue" type="submit">Update User</loading-button>
          </div>
        </form>
      </div>

      <div class="bg-white rounded-md shadow overflow-hidden max-w-3xl w-full">
        <form @submit.prevent="updatePass">
          <h1 class="pt-3 text-center font-bold text-3xl">Password</h1>
          <div class="mx-auto mt-6 w-24 border-b-2"/>
          <div class="p-4 -mr-6 -mb-8 flex flex-wrap">
            <text-input v-model="formPassword.password" :error="formPassword.errors.password"
                        class="pr-6 pb-8 w-full lg:w-1/2" type="password" autocomplete="current-password"
                        label="Current Password"/>
            <text-input v-model="formPassword.new_password" :error="formPassword.errors.new_password"
                        class="pr-6 pb-8 w-full lg:w-1/2" type="password" autocomplete="new-password"
                        label="New Password"/>
            <text-input v-model="formPassword.new_password_confirmation"
                        :error="formPassword.errors.new_password_confirmation" class="pr-6 pb-8 w-full lg:w-1/2"
                        type="password" autocomplete="new-password" label="Confirm New Password"/>
          </div>
          <div class="px-8 py-1 bg-gray-50 border-t border-gray-100 flex items-center">
            <loading-button :loading="formPassword.processing" class="btn-blue" type="submit">Update Password
            </loading-button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import Layout from '../Shared/Layout'
import TextInput from '../Shared/TextInput'


import LoadingButton from '../Shared/LoadingButton'

export default {
  name: 'editUser',
  metaInfo() {
    return {}
  },
  components: {
    Layout,
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
      }),
      formPassword: this.$inertia.form({
        _method: 'put',
        password: null,
        new_password: null,
        new_password_confirmation: null,
      }),
    }
  },
  created() {
  },
  methods: {
    update() {
      this.form.post(this.$page.props.urls.update.replace(":id", this.$page.props.auth.user.id))
    },
    updatePass: function () {
      this.formPassword.post(this.$page.props.urls.updatePassword.replace(":id", this.$page.props.auth.user.id))
    },
  },
}
</script>
<style scoped>
.btn-blue {
  @apply bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>