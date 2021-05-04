<template>
  <layout title="Welcome">
    <div class="py-4 mx-auto">
      <div class="flex justify-center" @click="changeSrc">
        <img :src="imageSrc" />
      </div>

      <form @submit="onSubmit" class="form-container">

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
    this.getImage();
  },
  methods: {
    onSubmit: function (event) {
      event.preventDefault();
      //add all selected images

      this.form.height = this.height;
      this.form.width = this.width;
      this.form.imageId = this.imageId;
      this.form.urls = this.urls;
      let data = JSON.stringify(this.form);
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
        });
    },
    getUrls: function (childValue) {
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
          this.form.title = response.data.data.title;
          this.form.altText = response.data.data.altText;
          this.imageId = response.data.data.imageId;
          this.imageSrc = response.data.data.urls.small;
          this.urls = response.data.data.urls;
          this.height = response.data.data.height;
          this.width = response.data.data.width;
        })
        .catch((error) => {
          if (error.status === 404) {
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
