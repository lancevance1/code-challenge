<template>
  <main>
    <header>
      <div class="bg-white rounded-lg shadow-xl">
        <h1 class="pt-6 text-4xl font-bold text-center">
          <inertia-link class="" href="/">Media Library </inertia-link>
        </h1>

        <nav
          class="nav"
        >
          <div class="container px-6 mx-auto">
            <ul class="nav-ul">
              <li>
                <dropdown
                  v-if="isLogin"
                  class="mt-1 ml-8"
                  placement="bottom-end"
                >
                </dropdown>
                <inertia-link v-if="!isLogin" class="text-lg" href="/login"
                  >Log in</inertia-link
                >
              </li>

              <li>
                <inertia-link v-if="!isLogin" class="text-lg" href="/register"
                >Register</inertia-link
                >
              </li>

              <li>
                <inertia-link class="text-lg" href="/">Home</inertia-link>
              </li>
              <li>
                <inertia-link class="text-lg" href="/media">Media</inertia-link>
              </li>
              <li>
                <div class="flex">
                  <input
                    class="w-full ml-1"
                    type="text"
                    placeholder="Search..."
                    v-model="searchResult"
                    @keyup.enter="goToSearch(searchResult)"
                  />
                  <button 
                    class="button"
                    v-on:click="goToSearch(searchResult)"
                  >
                    Search
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <div class="container mx-auto">
      <div class="antialiased text-gray-900 px-6">
        <div class="md:flex md:flex-grow md:overflow-hidden">
          <div
            class="md:flex-1 px-4 py-8 md:p-12 md:overflow-y-auto"
            scroll-region
          >
            <flashcard></flashcard>

            <slot />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Dropdown from "../Shared/Dropdown";

import Flashcard from "./Flashcard";
export default {
  name: "Layout",
  data() {
    return {
      searchResult: "",
      isLogin: false,
    };
  },
  props: {
    title: String,
  },
  watch: {
    title: {
      immediate: true,
      handler(title) {
        document.title = title;
      },
    },

    searchResult(newVal, oldVal) {
      console.log(`searchResult changed: ${newVal}`);
      console.log(this.searchResult);
    },
  },
  created() {
    this.searchResult = this.$route.query.q;
    if (this.$page.props.auth.user !== null) {
      this.isLogin = true;
    }
  },
  components: {
    Flashcard,
    Dropdown,
  },
  methods: {
    goToSearch: function (e) {
      // this.$router.push(
      //   { path: "search", query: { q: this.searchResult } },

      // );
      this.searchResult = e;

      if (
        typeof this.searchResult !== "undefined" &&
        this.searchResult.length != 0
      ) {
        window.location.href = "/search?q=" + e;
      }
    },
  },
};
</script>

<style lang="scss">
.nav-ul {
  li {
    margin-left: 0.5rem !important;
    @apply flex items-center space-x-4;
  }
  @apply flex flex-col lg:flex-row list-none space-x-4;
}
.button {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
}
.nav{
  @apply relative flex flex-wrap items-center justify-between px-2 py-2
}
</style>
