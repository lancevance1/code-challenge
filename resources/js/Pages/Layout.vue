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
              <inertia-link class="text-lg " href="/search"
                >Search</inertia-link
              >

              <div class="flex border-grey-light border w-1/2">
                <input
                  class="w-full  ml-1"
                  type="text"
                  placeholder="Search..."
                />
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  
                >
                  Search
                </button>
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
export default {
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
};
</script>
