<template>
  <main>
    <header>
      <!-- 
      <inertia-link href="/">Home</inertia-link>
      <inertia-link href="/media">Media</inertia-link>
      <inertia-link href="/search">Search</inertia-link>

  -->
    </header>

    <div class="container mx-auto ">
      <div class="antialiased text-gray-900 px-6 ">
        <div class="max-w-xl mx-auto py-1 divide-y md:max-w-4xl xl:max-w-full ">
          <div class="py-8">
            <h1 class="text-4xl font-bold">Media Library</h1>
            <!-- <p class="mt-2 text-lg text-gray-600">
            foobar
          </p> -->
            <div class="mt-4 flex space-x-4">
              <inertia-link class="text-lg " href="/">Home</inertia-link>
              <inertia-link class="text-lg " href="/media">Media</inertia-link>
              <inertia-link class="text-lg " href="/media/create"
                >Add
              </inertia-link>
              <!-- <inertia-link class="text-lg " href="/search"> </inertia-link> -->

              <div class="flex border-grey-light border w-1/2">
                <input
                  class="w-full  ml-1"
                  type="text"
                  placeholder="Search..."
                  v-model="searchResult"
                  @keyup.enter="goToSearch(searchResult)"
                />
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  v-on:click="goToSearch(searchResult)"
                >
                  Search
                </button>

                <dropdown class="mt-1" placement="bottom-end">
                  <div
                    class="flex items-center cursor-pointer select-none group"
                  >
                    <div
                      class="text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 mr-1 whitespace-nowrap"
                    >
                      <!-- <span>{{ $page.props.auth.user.first_name }}</span>
                  <span class="hidden md:inline">{{ $page.props.auth.user.last_name }}</span> -->
                      <span>test</span>
                    </div>
                    <icon
                      class="w-5 h-5 group-hover:fill-indigo-600 fill-gray-700 focus:fill-indigo-600"
                      name="cheveron-down"
                    />
                  </div>
                  <div
                    slot="dropdown"
                    class="mt-2 py-2 shadow-xl bg-white rounded text-sm"
                  >
                    <!-- <inertia-link class="block px-6 py-2 hover:bg-indigo-500 hover:text-white" :href="route('users.edit', $page.props.auth.user.id)">My Profile</inertia-link>
                <inertia-link class="block px-6 py-2 hover:bg-indigo-500 hover:text-white" :href="route('users')">Manage Users</inertia-link>
                <inertia-link class="block px-6 py-2 hover:bg-indigo-500 hover:text-white w-full text-left" :href="route('logout')" method="post" as="button">Logout</inertia-link> -->
                  </div>
                </dropdown>
              </div>
            </div>
          </div>

          <article>
            <slot />
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import Dropdown from "../Shared/Dropdown";
import Icon from "../Shared/Icon";
export default {
  name: "Layout",
  data() {
    return {
      searchResult: "",
      queryTerm: "",
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
      $route(to, from) {
        console.log(to);
        console.log(from);
      },
    },

    //  searchResult(newVal, oldVal) {
    //     console.log(`searchResult changed: ${newVal}`);
    //     console.log(this.searchResult);
    //   }
  },
  mounted() {
    this.searchResult = this.$route.query.q;
  },
  components: {
    Dropdown,
    Icon,
  },
  methods: {
    goToSearch: function(e) {
      this.queryTerm = e;
      this.$router.push(
        { path: "search", query: { q: this.searchResult } },
        () => this.$router.go(0)
      );
    },
  },
};
</script>
