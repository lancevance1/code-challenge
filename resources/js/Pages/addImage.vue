<template>
  <layout title="Welcome">
    <div class="py-4 mx-auto">
      <image-card :inputName="imageId" @childByValue="getUrls"></image-card>
      <form @submit="onSubmit">
        <!--        <h2 class="text-2xl font-bold">Add an image</h2>-->
        <!--        <p class="mt-2 text-lg text-gray-600">test test.</p>-->
        <div class="mt-8 max-w-md">
          <div class="grid grid-cols-1 gap-6">
            <!--            <label for="imageId" class="block">-->
            <!--              <span class="text-gray-700">ImageId</span>-->
            <!--              <input-->
            <!--                id="imageId"-->
            <!--                v-model="form.imageId"-->
            <!--                type="text"-->
            <!--                class="mt-1 block w-full"-->
            <!--                placeholder=""-->
            <!--              />-->
            <!--            </label>-->
            <!--            <img :src="inputName.urls.regular"/>-->

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
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </layout>
</template>

<script>
import Layout from "../Shared/Layout.vue";
import axios from "axios";
import imageCard from "../Shared/ImageCard";

export default {
  name: "addImage",

  data() {
    return {
      // ACCESS_KEY: 'wu6uBElgkanxZD7v3iT1Ekqm9ejk8vsLdBWKcXeIwaI',
      form: {
        title: null,
        altText: null,
        imageId: null,
        url_raw: String,
        url_full: String,
        url_regular: String,
        url_small: String,
        url_thumb: String,
      },
      urls:{},
      hideLoading: false,
      imageId: null,
    };
  },
  props: {
    inputName: {},
  },
  components: {
    // Using a render function
    layout: (h, page) => h(Layout, [page]),
    imageCard,
  },
  created() {
    console.log(this.$route.query.imageId);
    this.imageId = this.$route.query.imageId;
  },
  mounted() {
    console.log("bb");
  },
  methods: {
    onSubmit: function(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
      //add all selected images

      this.form.imageId = this.imageId;
      this.form.url_raw = this.urls.raw;
      console.log(this.form.url_raw);
      this.form.url_full = this.urls.full;
      this.form.url_regular = this.urls.regular;
      this.form.url_small = this.urls.small;
      this.form.url_thumb = this.urls.thumb;
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
    getUrls: function(childValue) {
      this.urls = childValue;
    },
  },
};
</script>
