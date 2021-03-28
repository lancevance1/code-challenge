<template>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Media Library</div>

          <div class="card-body">
<!--            {{responseResults.urls}}-->
            <b-container fluid class="p-4 bg-dark">
              <b-row>
                <b-col v-for="tmp in responseResults" sm="3">
                  <b-img-lazy thumbnail fluid :src="tmp.urls.thumb" alt=""></b-img-lazy>
                </b-col>

              </b-row>
            </b-container>
<!--            <li v-for="tmp in responseResults">-->
<!--              <img :src="tmp.urls.thumb" class="img-fluid" alt="Responsive image">-->

<!--            </li>-->


          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "media",
  data: function () {
    return {
      mainProps: {
        blank: true,
        width: 50,
        height: 50,
      },
      responseResults: [],
      // responseResult: [],
      urlApi: 'https://homestead.test/api',
      urlUnsplash: 'https://api.unsplash.com',
      urlUnsplashPhotos: '/photos',
      ACCESS_KEY: 'wu6uBElgkanxZD7v3iT1Ekqm9ejk8vsLdBWKcXeIwaI',
      // urlApi: 'http://127.0.0.1:8000/api',
      urlGetMediaItems: '/media',
      response: [],
      // searchResult: '',
      // queryTerm: '',
      // imageId: '',
      // perPage: 10,
      // currentPage: 1,
    }
  },
  mounted() {
    this.loadImages();
    console.log('MediaComponent mounted.')
  },
  methods: {
    loadImages: function () {
      axios.request({
        url: this.urlGetMediaItems,
        method: 'get',
        baseURL: this.urlApi,
      })
          .then((response) => {
            this.response = response.data;
            console.log(JSON.stringify(response.data));
            console.log(this.response.value);
            let arr = JSON.stringify(response.data);

            //this.response.forEach(element => console.log(element));
            Array.from(this.response).forEach(e =>{
              console.log(e.imageId)
              //console.log(e.altText)
              console.log(this.urlUnsplash+this.urlUnsplashPhotos+'/'+e.imageId)

              axios.request({
                url: this.urlUnsplashPhotos+'/'+e.imageId,
                method: 'get',
                baseURL: this.urlUnsplash,
                headers: {
                  'Authorization': ' Client-ID ' + this.ACCESS_KEY
                },

              })
                  .then((response) => {
                    // this.responseResult = response.data;
                    this.responseResults.push(response.data);
                  })
                  .catch((error) => console.log(error));



            })



          })
          .catch((error) => console.log(error));





    },
  }
}
</script>

<style scoped>

</style>