<template>
  <div class="mt-2 py-2 shadow-xl bg-white rounded text-sm">
<inertia-link class="block px-6 py-2 hover:bg-blue-700 hover:text-white" href="/">My Profile</inertia-link>
  <inertia-link v-if="isAdmin" class="block px-6 py-2 hover:bg-blue-700 hover:text-white" href="/">Manage Users</inertia-link>
  <inertia-link class="block px-6 py-2 hover:bg-blue-700 hover:text-white" href="/">Logout</inertia-link>
  </div>
</template>
<script>
export default {
  name: "LoginMenu",
  data(){
    return{
      isAdmin:true,
    }

  }

}
</script>

<style scoped>

</style>