<template>
  <main>
    <header>
      <div class="bg-white rounded-lg shadow-xl">
        <h1 class="pt-6 text-4xl font-bold text-center">
          <inertia-link class="" href="/">Media Library</inertia-link>
        </h1>


        <nav
            class="bg-gray-100"
        >

          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">


              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white
                        hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        @click="clickMenu()"
                        aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <!--
                    Icon when menu is closed.

                    Heroicon name: outline/menu

                    Menu open: "hidden", Menu closed: "block"
                  -->
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                  <!--
                    Icon when menu is open.

                    Heroicon name: outline/x

                    Menu open: "block", Menu closed: "hidden"
                  -->
                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4">


                    <inertia-link class="text-lg" href="/">Home</inertia-link>


                    <inertia-link class="text-lg" href="/media">Media</inertia-link>


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

                  </div>
                </div>

              </div>

              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                <dropdown
                    v-if="isLogin"
                    placement="bottom-end"
                >
                </dropdown>
                <inertia-link v-if="!isLogin" class="text-lg" href="/login"
                >Log in
                </inertia-link
                >

                <inertia-link v-if="!isLogin" class="text-lg" href="/register"
                >Register
                </inertia-link
                >

              </div>
            </div>
          </div>


          <!-- Mobile menu, show/hide based on menu state. -->
          <div class="sm:hidden" id="mobile-menu" v-show="showMenu">
            <div class="px-2 pt-2 pb-3 space-y-1">


              <inertia-link class="text-lg block px-3 py-2" href="/">Home</inertia-link>

              <inertia-link class="text-lg block px-3 py-2" href="/media">Media</inertia-link>


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
            </div>
          </div>
        </nav>
      </div>
      <flashcard></flashcard>
    </header>

    <div class="container mx-auto px-0.5 ">
      <slot/>
      <!--      <div class="antialiased text-gray-900 px-6">-->
      <!--        <div class="md:flex md:flex-grow md:overflow-hidden">-->

      <!--          <div-->
      <!--            class="md:flex-1  md:p-12 md:overflow-y-auto"-->
      <!--            scroll-region-->
      <!--          >-->


      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
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
      showMenu:false,
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
      this.searchResult = e;
      if (
          typeof this.searchResult !== "undefined" &&
          this.searchResult.length !== 0
      ) {
        window.location.href = "/search?q=" + e;
      }
    },
    clickMenu(){
      this.showMenu=!this.showMenu;
    }
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

.nav {
  @apply relative flex flex-wrap items-center justify-center   px-2 py-2
}
</style>
