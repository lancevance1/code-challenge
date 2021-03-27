<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Media Library</div>

          <div class="card-body">

            <input v-model="searchResult" placeholder="Search...">
            <button type="submit" class="btn btn-primary" v-on:click="searchImage(searchResult)">Search Image:
              {{queryTerm}}
            </button>

            <div>
              <p>Total results: {{responseResults.total||0}}</p>
            </div>
            <li v-for="tmp in responseResults.results">
              <img :src="tmp.urls.small" class="img-fluid" alt="Responsive image">
              <button type="submit" class="btn btn-primary" v-on:click="selectImage(tmp.id)">Select</button>
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
      responseResults: [],
      urlUnsplash: 'https://api.unsplash.com',
      urlRandom: '/photos/random',
      urlSearch: 'search/photos',
      response: [],
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

    // loadImages:function(){
    //   axios.request({
    //     url: this.urlRandom,
    //     method: 'get',
    //     baseURL: this.urlUnsplash,
    //     headers: {
    //       'Authorization': ' Client-ID '+this.ACCESS_KEY
    //     }
    //   })
    //       .then((response)=>{this.response= response.data;})
    //       .catch((error)=>console.log(error));
    //
    //   console.log(this.response);
    // },
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
          })
          .catch((error) => console.log(error));

      console.log(this.responseResults);

    },

  }
}
</script>
