<template>
  <main>
    <header>

    </header>

    <div class="container mx-auto ">
      <div class="antialiased text-gray-900 px-6 ">
        <div class="max-w-xl mx-auto py-1 divide-y md:max-w-4xl xl:max-w-full ">
          <div class="py-8">
            <h1 class="text-4xl font-bold">Media Library</h1>
            <div class="mt-4 flex space-x-4">
              <inertia-link class="text-lg " href="/">Home</inertia-link>
              <inertia-link class="text-lg " href="/media">Media</inertia-link>
<!--              <inertia-link class="text-lg " href="/media/create">Add</inertia-link>-->

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


              </div>

              <dropdown class="mt-1 ml-8" placement="bottom-end">

              </dropdown>

            </div>
          </div>

          <div class="md:flex md:flex-grow md:overflow-hidden">
          <div class="md:flex-1 px-4 py-8 md:p-12 md:overflow-y-auto" scroll-region>
            <flashcard></flashcard>
            <slot />
          </div>
          </div>
<!--          <article>-->
<!--           -->
<!--          </article>-->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import Dropdown from "../Shared/Dropdown";
import Icon from "../Shared/Icon";
import Flashcard from "./Flashcard";
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
    Flashcard,
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
