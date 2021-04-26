<template>
  <div>
    <loading v-if="show"></loading>
    <img :src="imageSrc"/>
  </div>

</template>

<script>
import axios from "axios";
import loading from "../Shared/Loading"

export default {
  name: "ImageCard",
  data() {
    return {
      imageSrc: null,
      imageUrls: {},
      show: false,
      urlUnsplash: 'https://api.unsplash.com',
      urlUnsplashPhotos: '/photos',
      responseResults: [],
    }

  },
  props: {
    inputName: null,
  },
  components: {
    loading
  },
  mounted() {
    this.loadImage();
    // console.log('appName');
    // console.log(this.$page.props.appName);
  },
  computed: {
    unsplash_key() {
      return this.$page.props.access_key;
    },
  },
  methods: {
    loadImage: function (e) {
      this.show = true;

      console.log(this.urlUnsplashPhotos + '/' + this.inputName)
      axios.request({
        url: this.urlUnsplashPhotos + '/' + this.inputName,
        method: 'get',
        baseURL: this.urlUnsplash,
        headers: {
          'Authorization': ' Client-ID '+ this.unsplash_key
        },

      })
          .then((response) => {
            this.show = false;
            this.responseResults = response.data;
            this.imageSrc = this.responseResults.urls.regular;
            // console.log(this.responseResults);

          })
          .catch((error) => {
                console.log(error.response.data)
                this.show = false;
              }
          );
    },
  }
}


</script>

<style scoped>

</style>