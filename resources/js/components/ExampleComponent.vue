<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
<!--          <div class="card-header">Media Library</div>-->

          <div class="card-body">

            <input v-model="searchResult" placeholder="Search...">
            <button type="submit" class="btn btn-primary" v-on:click="searchImage(searchResult)">Search Image:
              {{queryTerm}}
            </button>

            <div>
              <p>Total results: {{responseResults.total||0}}</p>

            </div>
            <li v-for="tmp in responseResults.results">
              <b-form @submit="onSubmit"  v-if="show">
              <img :src="tmp.urls.small" class="img-fluid" alt="Responsive image">
              <button type="submit" class="btn btn-primary" v-on:click="selectImage(tmp.id)">Select</button>

                <b-form-group
                    :id="`input-group-1-${tmp.id}`"
                    label="Title:"
                    :label-for="`input-1-${tmp.id}`"
                >
                  <b-form-input
                      :id="`input-1-${tmp.id}`"
                      v-model="form.title[tmp.id]"
                      placeholder="Enter title"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    :id="`input-group-2-${tmp.id}`"
                    label="AltText:"
                    :label-for="`input-2-${tmp.id}`"
                >
                  <b-form-input
                      :id="`input-2-${tmp.id}`"
                      v-model="form.altText[tmp.id]"
                      placeholder="Enter altText"
                  ></b-form-input>
                </b-form-group>

                <b-form-group :id="`input-group-3-${tmp.id}`" >
                  <b-form-checkbox-group
                      v-model="form.imageId[tmp.id]"
                      :id="`checkboxes-3-${tmp.id}`"

                  >
                    <b-form-checkbox :value="tmp.id"></b-form-checkbox>

                  </b-form-checkbox-group>
                </b-form-group>


              </b-form>



            </li>

            <!-- pagination                     -->
            <!-- @input="searchImage(searchResult)" not a good way to implement pagination, need to be improved -->
            <div class="overflow-auto">
              <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  @input="searchImage(searchResult)"
              ></b-pagination>
              <!--                        <p class="mt-3">Current Page: {{ currentPage }}</p>-->
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        title: {},
        altText: {},
        imageId: {},
      },

      show: true,
      urlGetMediaItems: '/media',
      urlApi: 'https://homestead.test/api',
      responseResults: [],
      urlUnsplash: 'https://api.unsplash.com',
      urlRandom: '/photos/random',
      urlSearch: 'search/photos',
      ACCESS_KEY: 'wu6uBElgkanxZD7v3iT1Ekqm9ejk8vsLdBWKcXeIwaI',
      searchResult: '',
      queryTerm: '',
      imageId: '',
      perPage: 10,
      currentPage: 1,
    }
  },
  computed: {
    rows() {
      return this.responseResults.total
    }
  },

  mounted() {
    console.log('Component mounted.')
  },

  methods: {
    //reset form
    formReset:function() {
      this.form = {title: {},
        altText: {},
        imageId: {},}
    },

    //add searched images into media library.
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));


      for (  let key in this.form.imageId) {
        let tmpData ={imageId:'',altText:'',title:''};
        tmpData.imageId=this.form.imageId[key][0];
        //console.log(tmpData.imageId);
        tmpData.altText=this.form.altText[key];
        tmpData.title=this.form.title[key];



      let data = JSON.stringify(tmpData);
      console.log(data);
        axios.request({
          url: this.urlGetMediaItems,
          method: 'post',
          baseURL: this.urlApi,
          headers: {
            'Content-Type': 'application/json'
          },
          data : data
        })
            .then((response) => {
              console.log(JSON.stringify(response.data));


            })
            .catch((error) => console.log(error.response.data));
      }

      this.formReset();

    },

    selectImage: function (e) {
      this.imageId = e;
      console.log(this.imageId);
    },
    searchImage: function (e) {
      this.queryTerm = e;

      axios.request({
        url: this.urlSearch,
        method: 'get',
        baseURL: this.urlUnsplash,
        headers: {
          'Authorization': ' Client-ID ' + this.ACCESS_KEY
        },
        params: {
          query: this.queryTerm,
          page: this.currentPage,

        }
      })
          .then((response) => {
            this.responseResults = response.data;

            Array.from(this.responseResults.results).forEach(e => {
              console.log(e.id);
              // this.form.title[e.id]='';
              // this.form.imageId.push(e.id);
              // this.form.altText.push(e.id);
            })
          })
          .catch((error) => console.log(error));

      console.log(this.responseResults);

    },

  }
}
</script>
