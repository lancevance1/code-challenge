<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Media Library</div>

                    <div class="card-body">

                      <input v-model="searchResult" placeholder="Search...">
                      <button type="submit" class="btn btn-primary" v-on:click="searchImage(searchResult)">Search Image: {{test}}</button>


                      <div>
                        <p>Total numbers of results: {{responseResults.total||0}}</p>
                      </div>
                      <li v-for="tmp in responseResults.results" >
                        <img :src="tmp.urls.small" class="img-fluid" alt="Responsive image">
                      </li>

                      <!-- pagination                     -->
                      <div class="overflow-auto">
                        <b-pagination
                            v-model="currentPage"
                            :total-rows="rows"
                            :per-page="perPage"
                            aria-controls="my-table"
                        ></b-pagination>

                        <p class="mt-3">Current Page: {{ currentPage }}</p>

                        <b-table
                            id="my-table"
                            :items="items"
                            :per-page="perPage"
                            :current-page="currentPage"
                            small
                        ></b-table>
                      </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function(){
    return{
      responseResults: [],
      urlUnsplash: 'https://api.unsplash.com',
      urlRandom:'/photos/random',
      urlSearch: 'search/photos',
      response:[],
      ACCESS_KEY:'wu6uBElgkanxZD7v3iT1Ekqm9ejk8vsLdBWKcXeIwaI',
      searchResult: '',
      test:'',
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
      ]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  },

  mounted() {
    console.log('Component mounted.')
  },

  methods:{

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
      searchImage: function (e) {
        this.test = e;

        axios.request({
          url: this.urlSearch,
          method: 'get',
          baseURL: this.urlUnsplash,
          headers: {
            'Authorization': ' Client-ID '+this.ACCESS_KEY
          },
          params: {
            query: this.test,

          }
        })
            .then((response)=>{this.responseResults= response.data;})
            .catch((error)=>console.log(error));

        console.log(this.responseResults);

    },

  }
}
</script>
