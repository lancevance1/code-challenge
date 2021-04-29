<template>
  <layout title="Welcome">
    <div class="py-4 mx-auto">
      <!--      <image-card :inputName="imageId" @childByValue="getUrls"></image-card>-->
      <div class="flex justify-center" @click="changeSrc">
        <img :src="imageSrc" />
      </div>
      <!--        <h2 class="text-2xl font-bold">Add an image</h2>-->
      <!--        <p class="mt-2 text-lg text-gray-600">test test.</p>-->
      <form @submit="onSubmit" class="form-container">
      <!-- <div class="mt-8 max-w-md">
        <div class="grid grid-cols-1 gap-6">
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
            @click="onSubmit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            :disabled="form.processing"
          >
            Save
          </button>
          <button
            @click="deleteImage"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            :disabled="form.processing"
          >
            Delete
          </button>
        </div>
      </div> -->

      <div class="mt-8 max-w-full w-full">
          <div class="grid grid-cols-1 gap-6">
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
            @click="onSubmit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            :disabled="form.processing"
          >
            Save
          </button>
          <button
            @click="deleteImage"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            :disabled="form.processing"
          >
            Delete
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
  name: "editImage",
  data() {
    return {
      form: {
        title: null,
        altText: null,
        imageId: null,
        urls: {},
        width: null,
        height: null,
      },
      urls: {},
      hideLoading: false,
      imageId: null,
      height: null,
      width: null,
      id: null,
      imageSrc: null,
      isLoadImage: true,
      isLarge: true,
    };
  },
  props: {
    inputName: {},
    media: {},
  },
  components: {
    // Using a render function
    layout: (h, page) => h(Layout, [page]),
    imageCard,
  },
  created() {
    console.log("pathname: " + window.location.pathname.split("/")[2]);
    this.id = window.location.pathname.split("/")[2];
  },
  mounted() {
    // this.imageId = this.$page.props.media.imageId;
    // console.log("title "+this.$page.props.media.title)

    this.getImage();
  },
  methods: {
    onSubmit: function (event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
      //add all selected images

      this.form.height = this.height;
      this.form.width = this.width;
      this.form.imageId = this.imageId;
      this.form.urls = this.urls;
      let data = JSON.stringify(this.form);
      console.log(this.$page.props.urls.update);
      console.log(data);

      axios
        .request({
          url: this.$page.props.urls.update.replace(":id", this.id),
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        })
        .then((response) => {
          console.log(JSON.stringify(response.status));
          if (response.status === 200) {
            alert("image edited");
          } else {
            alert("unexpected error");
          }
        })
        .catch((error) => {
          if (error.response.status === 422) {
            alert(error.response.data.message);
          }
          console.log(error.response.data);
        });
    },
    getUrls: function (childValue) {
      // console.log("child: "+childValue.width)
      this.urls = childValue.urls;
      this.width = childValue.width;
      this.height = childValue.height;
    },
    getImage: function () {
      axios
        .request({
          url: this.$page.props.urls.show.replace(":id", this.id),
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(JSON.stringify(response.data));

          this.form.title = response.data.data.title;
          this.form.altText = response.data.data.altText;
          this.imageId = response.data.data.imageId;
          this.imageSrc = response.data.data.urls.small;
          this.urls = response.data.data.urls;
          this.height = response.data.data.height;
          this.width = response.data.data.width;
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          if (error.status == 404) {
            return console.log("404");
          }
          console.log(error.response.data);
        });
    },

    deleteImage: function () {
      axios({
        url: this.$page.props.urls.destroy.replace(":id", this.id),
        method: "delete",
      })
        .then((response) => {
          console.log(JSON.stringify(response.data));
          window.history.go(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeSrc: function () {
      console.log(this.isLarge);
      if (this.isLarge) {
        this.imageSrc = this.urls.regular;
        this.isLarge = false;
      } else {
        this.imageSrc = this.urls.small;
        this.isLarge = true;
      }
    },
  },
};
</script>
<style scoped>
.form-container {
  margin: 0 auto;
  @apply w-full;
}
@media (min-width: 640px) {
  .form-container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .c {
    max-width: 768px;
  }
}

</style>
