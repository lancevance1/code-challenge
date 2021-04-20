<template>
  <main>
    <header>
      <inertia-link href="/">Home</inertia-link>
      <inertia-link href="/media">Media</inertia-link>
      <inertia-link href="/search">Search</inertia-link>
    </header>
    <article>
      <slot />
    </article>
  </main>
</template>

<script>
  export default {
    props: {
      title: String,
    },
    watch: {
      title: {
        immediate: true,
        handler(title) {
          document.title = title
        },
      },
    },
  }
</script>