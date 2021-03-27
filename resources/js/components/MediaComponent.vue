<template>
  <router-link :to="{ name: 'media', params: { mediaId: 123 }}">Media</router-link>
</template>

<script>
export default {
  name: "media"
}
</script>

<style scoped>

</style>