<template>
  <div>
    <loading v-if="show"></loading>
    <img :src="imageSrc" />
  </div>
</template>

<script>
import axios from "axios";
import loading from "../Shared/Loading";

export default {
  name: "ImageCard",
  data() {
    return {
      imageSrc: null,
      imageUrls: {},
      show: false,
      responseResults: [],
      urls: {
        raw: String,
        full: String,
        regular: String,
        small: String,
        thumb: String,
      },
    };
  },
  props: {
    inputName: null,
  },
  components: {
    loading,
  },
  mounted() {
    console.log('test: '+this.inputName)
    this.loadImage();
  },
  // computed: {
  //   unsplash_key() {
  //     return this.$page.props.access_key;
  //   },
  // },
  methods: {
    loadImage: function(e) {
      this.show = true;

      console.log(this.urlUnsplashPhotos + "/" + this.inputName);
      axios
        .request({
          url: this.$page.props.unsplashGetImage,
          method: "get",
          params: {
            imageId: this.inputName,
          },
        })
        .then((response) => {
          this.show = false;
          this.responseResults = response.data;
          this.imageSrc = this.responseResults.urls.regular;
          this.urls = this.responseResults.urls;
          this.outputMethod();
        })
        .catch((error) => {
          console.log(error.response.data);
          this.show = false;
        });
    },

    outputMethod: function() {
      this.$emit("childByValue", this.urls);
    },
  },
};
</script>

<style scoped></style>
