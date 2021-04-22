<template>
<layout>
 
 <div class="py-12 mx-auto">
      <form @submit="onSubmit">
        <h2 class="text-2xl font-bold">Add an image</h2>
        <p class="mt-2 text-lg text-gray-600">test test.</p>
        <div class="mt-8 max-w-md">
          <div class="grid grid-cols-1 gap-6">
            <label for="imageId" class="block">
              <span class="text-gray-700">ImageId</span>
              <input
                id="imageId"
                v-model="form.imageId"
                type="text"
                class="mt-1 block w-full"
                placeholder=""
              />
            </label>
            <label for="title" class="block">
              <span class="text-gray-700">Title</span>
              <input
                id="title"
                v-model="form.title"
                type="text"
                class="mt-1 block w-full"
                placeholder="ABC..."
              />
            </label>

            <label for="altText" class="block">
              <span class="text-gray-700">AltText</span>
              <textarea
                id="altText"
                v-model="form.altText"
                class="mt-1 block w-full"
                rows="3"
              ></textarea>
            </label>

            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              :disabled="form.processing"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>

 </layout>
</template>

<script>
import Layout from '../Shared/Layout.vue';
export default {
  data() {
    return {

       form: {
        title: null,
        altText: null,
        imageId: null,
      },
    }
  },
  components: {
    // Using a render function
    layout: (h, page) => h(Layout, [page]),
  },
  methods: {
     onSubmit: function(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
      //add all selected images

      let data = JSON.stringify(this.form);
      console.log(this.$page.props.urls.store);
      console.log(data);

      axios
        .request({
          url: this.$page.props.urls.store,
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        })
        .then((response) => {
          console.log(JSON.stringify(response.status));
          if (response.status === 201) {
            alert("image added");
          } else {
            alert("unexpected error");
          }
        })
        .catch((error) => {
          // console.log(error.response);
          if (error.response.status === 422) {
            alert(error.response.data.message);
          }
          console.log(error.response.data);
        });
    },
  },
}
</script>