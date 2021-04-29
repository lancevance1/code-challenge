<template>
  <div class="menu">
    <inertia-link
      class="button-menu"
      :href="'/users/' + $page.props.auth.user.id + '/edit'"
      >My Profile</inertia-link
    >
    <inertia-link v-if="isAdmin" class="button-menu" href="/"
      >Manage Users</inertia-link
    >
    <inertia-link class="button-menu" :href="$page.props.logout" method="post"
      >Logout</inertia-link
    >
  </div>
</template>
<script>
export default {
  name: "LoginMenu",
  data() {
    return {
      isAdmin: false,
    };
  },
};
</script>

<style scoped>
.button-menu {
  @apply block px-6 py-2 hover:bg-gray-100  text-lg;
}
.menu {
  @apply mt-2 py-2 shadow-xl bg-white rounded text-sm;
}
</style>
