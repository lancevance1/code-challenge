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




<waterfall :line="line"
        :line-gap="200"
        :min-line-gap="180"
        :max-line-gap="220"
        :watch="items"
        
        ref="waterfall">
  <!-- each component is wrapped by a waterfall slot -->
  <waterfall-slot
    v-for="(item, index) in items"
    :width="item.width"
    :height="item.height"
    :order="index"
    :key="item.id"
  >
    <!--
      your component
    -->
     <img :src="item.urls.small" :alt="item.altText" />



  </waterfall-slot>
</waterfall>



    <!-- <div class="flex border-grey-light border ">
      <div v-for="tmp in responseResults.results" >
        <img :src="tmp.urls.small" :alt="tmp.altText" />
        
      </div>
    </div> -->





  </layout>
</template>

<script>
import Layout from '../Shared/Layout'
import axios from "axios";

import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'


export default {
  data() {
    return {
      line: 'v',
      item: {
        width:100,
        height:100,
        id:null,
        index:null,
      },
      items: [],
      
      group: 0,// request param
      
      form: {
        title: null,
        altText: null,
        imageId: null,
      },
      
      responseResults: [],
      urlUnsplash: "https://api.unsplash.com",
      urlRandom: "/photos/random",
      urlSearch: "search/photos",
      ACCESS_KEY: "wu6uBElgkanxZD7v3iT1Ekqm9ejk8vsLdBWKcXeIwaI",
      searchResult: "",
      // queryTerm: "",
      imageId: "",
      perPage: 10,
      currentPage: 1,
      total: 0,
    };
  },
  components: {
    // Using a render function
    layout: (h, page) => h(Layout, [page]),
    Waterfall,
    WaterfallSlot
  },
  mounted() {
    // console.log(route('search'));
    this.searchResult = this.$route.query.q;
  },
  watch:{
    $route(to, from) {
      console.log("a")
    }
  },
  // computed: {
  //   queryTerm: function() {
      
  //       return this.$route.query.q;
      
      
  //   },
  // },
  // watch: {
  //    searchResult: function () {

  //     console.log(this.$route.query.page);
  //     this.searchResult =  this.$route.query.page;
  //   }

  // },

  // created() {
  //   this.getData()
  // },

  methods: {
    // submit() {
    //   this.$inertia.post(this.$page.props.urls.store, this.form)
    // },

    getData() {
      // In the real environment,the backend will return a new image array based on the parameter group.
      // Here I simulate it with a stunned json file.
      // axios.get('./static/mock/data.json?group=' + this.group)
      //   .then(res => {
      //     this.imgsArr = this.imgsArr.concat(res.data)
      //     this.group++
      //   })

      this.searchImage(this.searchResult);
      this.currentPage++;
    },

    searchImage: function(e) {
      
      this.queryTerm = e;
      // this.$inertia.replace(this.route('search', Object.keys(this.queryTerm).length ? this.queryTerm : { remember: 'forget' }));
      this.$router.push({ path: "search", query: { q: this.searchResult } }).catch(()=>{});
      axios
        .request({
          url: this.urlSearch,
          method: "get",
          baseURL: this.urlUnsplash,
          headers: {
            Authorization: " Client-ID " + this.ACCESS_KEY,
          },
          params: {
            query: this.queryTerm,
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.responseResults = response.data;
          this.total = response.data.total;
          console.log(response.data.total);
          let i =0;
          Array.from(this.responseResults.results).forEach(e => {
            console.log(e.id);
            this.item = e;
            
            this.item["index"] = i;
            i++;
            this.items.push(this.item);
          })
          console.log(this.items);
        })
        .catch((error) => console.log(error));
      // console.log(this.responseResults);
    },



     

  },
};

window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop + window.innerHeight >= document.body.clientHeight) {
          // app.addItems()
          console.log("haha")
        }
      })
</script>
