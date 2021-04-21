<template>
<layout title="Welcome">
<!--  
    <label for="imageId">ImageId:</label>
    <input id="imageId" v-model="form.imageId" />
   
    <label for="title">Title:</label>
    <input id="title" v-model="form.title" />

     <label for="altText">AltText:</label>
    <input id="altText" v-model="form.altText" />
     -->
  


<div class="py-12 mx-auto">
     <form @submit="onSubmit">
          <h2 class="text-2xl font-bold">Add an image</h2>
          <p class="mt-2 text-lg text-gray-600">test test.</p>
          <div class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label for="imageId" class="block">
                <span class="text-gray-700">ImageId</span>
                <input id="imageId" v-model="form.imageId" type="text" class="mt-1 block w-full" placeholder="" />
              </label>
              <label for="title" class="block">
                <span class="text-gray-700">Title</span>
                <input id="title" v-model="form.title" type="text" class="mt-1 block w-full" placeholder="ABC..." />
              </label>
              
              
              <label for="altText" class="block">
                <span class="text-gray-700">AltText</span>
                <textarea id="altText" v-model="form.altText" class="mt-1 block w-full" rows="3"></textarea>
              </label>

             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
             type="submit" :disabled="form.processing">Submit</button>
            </div>
          </div>
          </form>
</div>


<div class="flex border-grey-light border ">
                <input
                  class="w-full  ml-1"
                  type="text"
                  placeholder="Search..."
                  v-model="searchResult"
                />
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  v-on:click="searchImage(searchResult)"
                >
                  Search
                </button>
              </div>

              <div class="flex border-grey-light border ">

                  
                  <div v-for="tmp in responseResults.results">
              
                <img  :src="tmp.urls.small" :alt="tmp.altText">
            
              </div>
              </div>

</layout>
</template>

<script>
import Layout from './Layout'
import axios from 'axios';

export default {

    
  data() {
    return {
       form: {
        title: null,
        altText: null,
        imageId: null,
      },
      
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
      total: 0,
    }
  },
  components: {
       // Using a render function
      layout: (h, page) => h(Layout, [page]),
    },
  methods: {
    // submit() {
    //   this.$inertia.post(this.$page.props.urls.store, this.form)
    // },

 onSubmit: function (event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
      //add all selected images
      
        let data = JSON.stringify(this.form);
        console.log(this.$page.props.urls.store);
        console.log(data);

        axios.request({
          url: this.$page.props.urls.store,
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          data: data
        })
            .then((response) => {
              console.log(JSON.stringify(response.status));
              if (response.status === 201) {
                alert('image added');
              }else {
                alert('unexpected error');
              }
            })
            .catch((error) => {
                // console.log(error.response);
                if(error.response.status===422){
                    alert(error.response.data.message);
                }
                console.log(error.response.data)
                });
      
      
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
            this.total = response.data.total;
            console.log(response.data.total);
            // Array.from(this.responseResults.results).forEach(e => {
            //   console.log(e.id);
            // })
          })
          .catch((error) => console.log(error));
      // console.log(this.responseResults);
    },

  },
}
</script>