<template>
  <layout title="Forgot Password">
    <div class="p-6 min-h-full flex justify-center items-center">
      <div class="w-full max-w-md">
        <form
            class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden"
            @submit.prevent="forgotPassword"
        >
          <div class="px-10 py-12">
            <h1 class="text-center font-bold text-3xl">Reset Password</h1>
            <div class="mx-auto mt-6 w-24 border-b-2" />
            <TextInput
                v-model="form.email"
                :error="form.errors.email"
                class="mt-10"
                label="Email"
                type="email"
                autofocus
                autocapitalize="off"
            />

          </div>
          <div
              class="px-10 py-4 bg-gray-100 border-t border-gray-100 flex justify-between items-center"
          >

            <LoadingButton
                :loading="form.processing"
                class="btn-blue"
                type="submit"
            >Send Password Reset Link</LoadingButton
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
  name: "ForgotPassword",

  components: {
    LoadingButton,
    TextInput,
    Layout,
  },
  data() {
    return {
      form: this.$inertia.form({
        email: "",
      }),
    };
  },
  methods: {
    forgotPassword() {
      this.form.post(this.$page.props.sendLink);
    },
  },


}
</script>

<style scoped>
.btn-blue {
  @apply bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>