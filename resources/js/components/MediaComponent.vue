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
<!--                  <b-img-lazy thumbnail fluid :src="tmp.urls.thumb" alt=""></b-img-lazy>-->
<!--                  <b-form-input  size="sm"></b-form-input>-->
<!--                  <p>{{tmp.databaseId}}</p>-->
<!--                  <b-button variant="success">Save</b-button>-->

                  <b-card
                      :title="tmp.title"
                      :img-src="tmp.urls.thumb"
                      img-alt="Image"
                      img-top
                      tag="article"

                  >
<!--                    <b-card-text>-->
<!--                      {{tmp.altText}}-->
<!--                    </b-card-text>-->
                    <b-button variant="danger" @click="deleteImage(tmp.databaseId)" size="sm">Delete</b-button>
                    <b-button :href="`https://homestead.test/media/${tmp.databaseId}`" variant="primary" size="sm">Save</b-button>
                  </b-card>


                </b-col>

              </b-row>
            </b-container>
<!--            <li v-for="tmp in responseResults">-->
<!--              <img :src="tmp.urls.thumb" class="img-fluid" alt="Responsive image">-->

<!--            </li>-->


<!--            <div v-for="tmp in responseResults" >-->
<!--              <b-card-->
<!--                  :title="tmp.title"-->
<!--                  :img-src="tmp.urls.thumb"-->
<!--                  img-alt="Image"-->
<!--                  img-top-->
<!--                  tag="article"-->
<!--                  style="max-width: 20rem;"-->
<!--                  class="mb-2"-->
<!--              >-->
<!--                <b-card-text>-->
<!--                  {{tmp.altText}}-->
<!--                </b-card-text>-->

<!--                <b-button href="#" variant="primary">Go somewhere</b-button>-->
<!--              </b-card>-->
<!--            </div>-->

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
  // watch:{
  //
  // },
  methods: {
    findImage:function (e) {
      let i;
      // console.log(this.responseResults[0].databaseId);
      for (i=0;i<this.responseResults.length;i++){
        // console.log(this.responseResults[i].databaseId);
        if (this.responseResults[i].databaseId===e){
          console.log(i);
         break;
        }
      }

      this.responseResults.splice(i, 1);
    },

    //delete media item from media library.
    deleteImage:function (e){
      // console.log(e);
      // this.findImage(e);

      axios({
        url: this.urlGetMediaItems+'/'+e,
        method: 'delete',
        baseURL: this.urlApi,
      })
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.findImage(e);
          })
          .catch((error) => {
            console.log(error);
          });


    },
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


            //this.response.forEach(element => console.log(element));
            // let i;
            // for (i=0;i<this.response.length;i++){
            //   console.log(this.response[i].imageId)
            //   //console.log(e.altText)
            //   console.log(this.urlUnsplash+this.urlUnsplashPhotos+'/'+this.response[i].imageId)
            //
            //   axios.request({
            //     url: this.urlUnsplashPhotos+'/'+this.response[i].imageId,
            //     method: 'get',
            //     baseURL: this.urlUnsplash,
            //     headers: {
            //       'Authorization': ' Client-ID ' + this.ACCESS_KEY
            //     },
            //
            //   })
            //       .then((response) => {
            //         // this.responseResult = response.data;
            //         console.log(this.response);
            //         response.data['altText']=this.response[i].altText;
            //         response.data['title']=this.response[i].title;
            //         response.data['databaseId']=this.response[i].id;
            //
            //         console.log(response.data.databaseId);
            //         this.responseResults.push(response.data);
            //
            //
            //       })
            //       .catch((error) => console.log(error));
            // }

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
                    response.data['altText']=e.altText;
                    response.data['title']=e.title;
                    response.data['databaseId']=e.id;

                    console.log(response.data.databaseId);
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