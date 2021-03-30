<template>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Title: {{form.title}}</div>

          <div class="card-body">
<!--            {{responseResults.urls}}-->
            <b-card
                :title="form.title"
                :img-src="imageSrc"
                img-alt="Image"
                img-top
                tag="article"

            >
              <b-card-text>
                {{form.altText}}
              </b-card-text>

              <b-button variant="primary"   @click="edit()" size="sm">Edit</b-button>

              <b-form @submit="onSubmit"  v-if="show">
                <b-form-group
                    id="input-group-1"
                    label="Title"
                    label-for="input-1"

                >
                  <b-form-input
                      id="input-1"
                      v-model="form.title"
                      placeholder="Enter title"
                      required
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="altText:" label-for="input-2">
                  <b-form-input
                      id="input-2"
                      v-model="form.altText"
                      placeholder="Enter altText"
                  ></b-form-input>
                </b-form-group>



<!--                <b-button :href="`https://homestead.test/media/`"  type="submit" variant="primary" size="sm">Submit</b-button>-->
                <b-button  type="submit" variant="primary" size="sm">Submit</b-button>
                <b-button variant="danger" @click="deleteImage(response.id)" size="sm">Delete</b-button>
              </b-form>

            </b-card>


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
      form: {
        title: '',
        altText: '',
      },
      show: false,
      responseResults: [],
      // responseResult: [],
      urlApi: 'https://homestead.test/api',
      urlUnsplash: 'https://api.unsplash.com',
      urlUnsplashPhotos: '/photos',
      ACCESS_KEY: 'wu6uBElgkanxZD7v3iT1Ekqm9ejk8vsLdBWKcXeIwaI',
      // urlApi: 'http://127.0.0.1:8000/api',
      urlGetMediaItems: '/media',
      response: {},
      mediaId:0,
      imageSrc:'',
      imageId:'',
      // searchResult: '',
      // queryTerm: '',
      // imageId: '',
      // perPage: 10,
      // currentPage: 1,
    }
  },
  mounted() {
    console.log(this.$route.params.mediaId)
    console.log('MediaItemComponent mounted.')
    this.mediaId = this.$route.params.mediaId;
    this.loadImage(this.mediaId);
  },
  watch: {
    $route(to, from) {
      console.log("change route");
      // location.reload();
    }
  },
  props: ['token'],
  methods: {
    edit:function (){
      if (this.show){
        this.show=false;
      }else{
        this.show = true;
      }

    },
    onSubmit:function (event) {
      event.preventDefault()

      alert(JSON.stringify(this.form))


      const qs = require('qs');
      let data = qs.stringify({
        'imageId': this.imageId,
        'title': this.form.title,
        'altText': this.form.altText,
      });

      let config = {
        method: 'put',
        url: this.urlGetMediaItems+'/'+this.mediaId,
        baseURL: this.urlApi,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+this.token,
        },
        data : data
      };

      axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error.response.data);
          });


    },
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
       console.log(e);
      // this.findImage(e);

      axios({
        url: this.urlGetMediaItems+'/'+e,
        method: 'delete',
        baseURL: this.urlApi,
        headers: {
          'Authorization': 'Bearer '+this.token,
        },
      })
          .then((response) => {
            console.log(JSON.stringify(response.data));
            // redirect to /media
            this.$router.push( { name: 'media' }, () => this.$router.go(0));
          })
          .catch((error) => {
            console.log(error.response.data);
          });


    },
    loadImage: function (e) {
      axios.request({
        url: this.urlGetMediaItems+'/'+e,
        method: 'get',
        baseURL: this.urlApi,
        headers: {
          'Authorization': 'Bearer '+this.token,
        },
      })
          .then((response) => {
            this.response = response.data;
            console.log(JSON.stringify(response.data));

            console.log(this.response.imageId)
            this.imageId = this.response.imageId;
            this.form.title=this.response.title;
            this.form.altText=this.response.altText;

            axios.request({
              url: this.urlUnsplashPhotos+'/'+this.response.imageId,
              method: 'get',
              baseURL: this.urlUnsplash,
              headers: {
                'Authorization': ' Client-ID ' + this.ACCESS_KEY
              },

            })
                .then((response) => {

                  this.responseResults = response.data;
                  this.imageSrc = this.responseResults.urls.regular;
                  console.log(this.responseResults);

                })
                .catch((error) => console.log(error.response.data));
          })
          .catch((error) => {console.log(error.response.data)

          });
    },
  }
}
</script>

<style scoped>

</style>