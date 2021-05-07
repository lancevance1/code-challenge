<template>
  <layout title="Log in">
    <div class="p-6 min-h-full flex justify-center items-center">
      <div class="w-full max-w-md">
        <form
          class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden"
          @submit.prevent="login"
        >
          <div class="px-10 py-12">
            <h1 class="text-center font-bold text-3xl">Welcome Back!</h1>
            <div class="mx-auto mt-6 w-24 border-b-2" />
            <TextInput
              v-model="form.email"
              :error="form.errors.email"
              class="mt-10"
              label="Email"
              type="email"
              autofocus
              autocomplete="username"
              autocapitalize="off"
            />
            <TextInput
              v-model="form.password"
              :error="form.errors.password"
              class="mt-6"
              label="Password"
              autocomplete="current-password"
              type="password"
            />
            <label class="mt-6 select-none flex items-center" for="remember">
              <input
                id="remember"
                v-model="form.remember"
                class="mr-1"
                type="checkbox"
              />
              <span class="text-sm">Remember Me</span>
            </label>
          </div>
          <div
            class="px-10 py-4 bg-gray-100 border-t border-gray-100 flex justify-between items-center"
          >
            <inertia-link class="text-md" href="/forgot-password"
            >Forgot password?</inertia-link>
            <LoadingButton
              :loading="form.processing"
              class="btn-blue"
              type="submit"
              >Login</LoadingButton
            >
          </div>
        </form>
      </div>
    </div>
  </layout>
</template>

<script>
import TextInput from "../../Shared/TextInput";
import LoadingButton from "../../Shared/LoadingButton";
import Layout from "../../Shared/Layout.vue";
export default {
  name: "Login",
  metaInfo: { title: "Login" },
  components: {
    LoadingButton,
    TextInput,
    Layout,
  },
  data() {
    return {
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false,
      }),
    };
  },
  methods: {
    login() {
      this.form
        .transform((data) => ({
          ...data,
          remember: data.remember ? "on" : "",
        }))
        .post(this.$page.props.loginAttempt);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.btn-blue {
  @apply bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>
