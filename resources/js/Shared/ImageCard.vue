<template>
  <div @click="changeSrc">
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
      height: null,
      width: null,
      outputData: {},
      isLarge: true,
    };
  },
  props: {
    inputName: null,
  },
  components: {
    loading,
  },
  mounted() {
    this.loadImage();
  },
  methods: {
    loadImage: function (e) {
      this.show = true;
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
          this.imageSrc = this.responseResults.urls.small;
          this.urls = this.responseResults.urls;
          this.height = this.responseResults.height;
          this.width = this.responseResults.width;

          this.outputData["urls"] = this.urls;
          this.outputData["height"] = this.height;
          this.outputData["width"] = this.width;
          this.outputMethod();
        })
        .catch((error) => {
          this.show = false;
        });
    },

    outputMethod: function () {
      this.$emit("childByValue", this.outputData);
    },
    changeSrc: function () {
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

<style scoped></style>
