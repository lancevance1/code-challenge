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
        @keyup.enter="searchImage(searchResult, false)"
      />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        v-on:click="searchImage(searchResult, false)"
      >
        Search
      </button>
    </div>


<div class="py-4">
Total results: {{total}}

</div>

    <!-- line gap 600 for 3 lines -->
    <waterfall
      :line="line"
      :line-gap="600"
      :min-line-gap="180"
      :max-line-gap="220"
      :watch="items"
      ref="waterfall"
    >
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
        <div class="container mx-auto py-4">
          <!-- <img v-lazy="item.urls.regular" :alt="item.altText" />
          <div v-lazy:background-image="imgObj"></div> -->
          <inertia-link class="text-lg " href="/media/create" :data="{imageId:item.id}"><img  :src="item.urls.regular" :alt="item.altText" /></inertia-link>


          

          <!-- with customer error and loading -->
     <!-- <img v-lazy="imgObj"/>
     <div v-lazy:background-image="imgObj"></div> -->
        </div>
      </waterfall-slot>
    </waterfall>

    <!-- <vue-waterfall-easy :imgsArr="items" @scrollReachBottom="getData" @imgError="imgErrorFn"></vue-waterfall-easy> -->

    <!-- <div class="flex border-grey-light border ">
      <div v-for="tmp in responseResults.results" >
        <img :src="tmp.urls.small" :alt="tmp.altText" />
        
      </div>
    </div> -->
    <div>
      
    </div>
  </layout>
</template>

<script>
import Layout from "../Shared/Layout";
import axios from "axios";

import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
export default {
  data() {
    return {


      line: "v",
      item: {
        src: null,
        href: null,
      },
      items: [],

      group: 0, // request param

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
      totalPages: 0,
    };
  },
  components: {
    // Using a render function
    layout: (h, page) => h(Layout, [page]),
    Waterfall,
    WaterfallSlot,
  },
  mounted() {
    // console.log(route('search'));
    this.searchResult = this.$route.query.q;
  },
  watch: {
    $route(to, from) {
      console.log("a");
    },
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

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    // submit() {
    //   this.$inertia.post(this.$page.props.urls.store, this.form)
    // },

    getData: function() {
      
      if (this.currentPage === this.totalPages) {
        return alert("no more images");
      }
      this.currentPage++;
      this.searchImage(this.searchResult, true);

      console.log("test");
    },

    searchImage: function(e, isScroll) {
      if (!isScroll) {
        this.itemsReset();
      }

      this.queryTerm = e;
      // this.$inertia.replace(this.route('search', Object.keys(this.queryTerm).length ? this.queryTerm : { remember: 'forget' }));
      this.$router
        .push({ path: "search", query: { q: this.searchResult } })
        .catch(() => {});
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
          this.totalPages = response.data.total_pages;
          let i = 0;
          Array.from(this.responseResults.results).forEach((e) => {
            console.log(e.id);
            this.item = e;

            this.item["index"] = i;

            i++;
            this.items.push(this.item);
          });
          console.log(this.items);
        })
        .catch((error) => console.log(error));
      // console.log(this.responseResults);
    },

    itemsReset: function() {
      this.items = [];
      this.currentPage = 1;
    },



    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      

      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop + window.innerHeight >= document.body.clientHeight) {
        
        
        this.getData();
      }
    },
  },
};


</script>
