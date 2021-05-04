<template>
  <layout title="Register">
    <div class="p-6 min-h-full flex justify-center items-center">
      <div class="w-full max-w-md">
        <form
            class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden"
            @submit.prevent="register"
        >
          <div class="px-10 py-12">
            <h1 class="text-center font-bold text-3xl">Register</h1>
            <div class="mx-auto mt-6 w-24 border-b-2" />
            <TextInput
                v-model="form.name"
                :error="form.errors.name"
                class="mt-6"
                label="Username"
                type="text"
                autofocus
                autocapitalize="on"
            />
            <TextInput
                v-model="form.email"
                :error="form.errors.email"
                class="mt-10"
                label="Email"
                type="email"
                autofocus
                autocapitalize="off"
            />
            <TextInput
                v-model="form.password"
                :error="form.errors.password"
                class="mt-6"
                label="Password"
                type="password"
            />
            <TextInput
                v-model="form.password_confirmation"
                :error="form.errors.password_confirmation"
                class="mt-6"
                label="Confirm Password"
                type="password"
            />

          </div>
          <div
              class="px-10 py-4 bg-gray-100 border-t border-gray-100 flex justify-between items-center"
          >

            <LoadingButton
                :loading="form.processing"
                class="btn-blue"
                type="submit"
            >Register</LoadingButton
            >
          </div>
        </form>
      </div>
    </div>
  </layout>
</template>

<script>
import LoadingButton from "../../Shared/LoadingButton";
import TextInput from "../../Shared/TextInput";
import Layout from "../../Shared/Layout";

export default {
  name: "Register",
  metaInfo: { title: "Register" },
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
        password_confirmation     : "",
        remember: false,
        name:"",
      }),
    };
  },
  methods: {
    register() {
      this.form
          .post(this.$page.props.register);
    },
  },
}

</script>

<style scoped>
.btn-blue {
  @apply bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>