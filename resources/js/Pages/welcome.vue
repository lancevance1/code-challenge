<template>
  <layout title="Welcome">
    <h1>Welcome</h1>
    <p>Hello {{ $page.props.user }}, welcome {{ $page.props.media }} to your first Inertia app!</p>
    
  </layout>
</template>

<script>
  import Layout from './Layout'

  export default {
    components: {
       // Using a render function
      layout: (h, page) => h(Layout, [page]),
    },
    mounted(){
      axios.get(this.$page.props.urls.index)
    }
  }
</script>