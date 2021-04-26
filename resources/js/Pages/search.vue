<template>
  <layout title="Welcome">
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
      Total results: {{ total }}






    </div>


    <loading v-if="hideLoading"></loading>


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
        <div class="container mx-auto py-4">
          <!-- <img v-lazy="item.urls.regular" :alt="item.altText" />
          <div v-lazy:background-image="imgObj"></div> -->

          <inertia-link class="text-lg " href="/media/create" :data="{imageId:item.id}"><img :src="item.urls.regular"
                                                                                             :alt="item.altText"/>
          </inertia-link>


<!--          <popper-->
<!--              trigger="clickToOpen"-->
<!--              :options="{-->
<!--      placement: 'top',-->
<!--      modifiers: { offset: { offset: '0,10px' } }-->
<!--    }">-->
<!--            <div class="popper">-->
<!--              <addImage :inputName="item"></addImage>-->
<!--            </div>-->

<!--            <button slot="reference">-->
<!--              <img :src="item.urls.regular"-->
<!--                   :alt="item.altText"/>-->
<!--            </button>-->
<!--          </popper>-->



<!--          <img :src="item.urls.regular"-->
<!--               :alt="item.altText" @load="handleLoad" :href=""/>-->



        </div>
      </waterfall-slot>
    </waterfall>

  </layout>
</template>

<script>
import Layout from "../Shared/Layout";
import axios from "axios";

import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import addImage from "./addImage";
import loading from "../Shared/Loading"
import ModalWindow from "../Shared/ModalWindow"


export default {
  data() {
    return {
      line: "v",
      hideLoading:false,
      item: {
        src: null,
        href: null,
      },
      items: [],
      form: {
        title: null,
        altText: null,
        imageId: null,
      },
      responseResults: [],
      // urlUnsplash: "https://api.unsplash.com",
      //
      // urlSearch: "search/photos",

      searchResult: "",
      // queryTerm: "",
      imageId: "",
      perPage: 10,
      currentPage: 1,
      total: 0,
      totalPages: 0,
      showModal:true,
    };
  },
  components: {
    // Using a render function
    layout: (h, page) => h(Layout, [page]),
    Waterfall,
    WaterfallSlot,
    'popper': Popper,
    addImage,
    loading,
    ModalWindow,

  },
  mounted() {
    // console.log(route('search'));
    this.searchResult = this.$route.query.q;
    console.log('appName');
    console.log(this.$page.props.appName);

  },
  watch: {
    $route(to, from) {
      console.log("a");
    },
  },


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
  computed: {
    unsplash_key() {
      return this.$page.props.access_key;
    },
    urlSearch(){
      return this.$page.props.search_url;
    }
  },
  methods: {

    // submit() {
    //   this.$inertia.post(this.$page.props.urls.store, this.form)
    // },
    handleLoad(e){
      console.log(e)
    },

    getData: function () {

      if (this.currentPage === this.totalPages) {
        return alert("no more images");
      }
      this.currentPage++;
      this.searchImage(this.searchResult, true);

      console.log("test");
    },

    searchImage: function (e, isScroll) {
      // if user scrolled to the end to trigger searchImage function, the items list would not be reset.
      // Only reset items list when user searched new image.
      if (!isScroll) {
        this.itemsReset();
      }

      this.queryTerm = e;
      // this.$inertia.replace(this.route('search', Object.keys(this.queryTerm).length ? this.queryTerm : { remember: 'forget' }));
      this.$router
          .push({path: "search", query: {q: this.searchResult}})
          .catch(() => {
          });

      this.hideLoading = true
      axios
          .request({
            url: this.urlSearch,
            method: "get",

            headers: {
              Authorization: " Client-ID " + this.unsplash_key,
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

            this.hideLoading = false;
            console.log(this.items);
          })
          .catch((error) =>{console.log(error);
                this.hideLoading = false;
          }

          );
      // console.log(this.responseResults);
    },

    itemsReset: function () {
      this.items = [];
      this.currentPage = 1;
    },


    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop + window.innerHeight >= document.body.clientHeight) {
        this.getData();
      }
    },
  },
};


</script>
