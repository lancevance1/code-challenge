<template>
  <layout title="Welcome">

    <div class="py-1">Total results: {{ total }}</div>

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
<img :src="item.urls.regular" :alt="item.altText" @click="goToCreate(item.id)"/>
          <!-- <inertia-link
           
            href="/media/create"
            :data="{ imageId: item.id }"
          >
            
          </inertia-link> -->

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
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import addImage from "./addImage";
import loading from "../Shared/Loading";

export default {
  data() {
    return {
      line: "v",
      hideLoading: false,
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
      searchResult: "",
      imageId: "",
      perPage: 20,
      currentPage: 1,
      total: 0,
      totalPages: 0,
      showModal: true,
    };
  },
  components: {
    // Using a render function
    layout: (h, page) => h(Layout, [page]),
    Waterfall,
    WaterfallSlot,
    popper: Popper,
    addImage,
    loading,
  },
  mounted() {
    this.searchResult = this.$route.query.q;
    console.log('props', this.$page.props.appName)
    if (this.$route.query.q != "") {
      this.searchImage(this.searchResult, false);
    }
  },
  watch: {},

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
    urlSearch() {
      return this.$page.props.search_url;
    },
  },
  methods: {
    goToCreate(e){
console.log(e)
 window.location.href = "media/create?imageId=" + e;
    },
    // submit() {
    //   this.$inertia.post(this.$page.props.urls.store, this.form)
    // },
    handleLoad(e) {
      console.log(e);
    },

    getData: function() {
      if (this.currentPage === this.totalPages) {
        return alert("no more images");
      }
      this.currentPage++;
      this.searchImage(this.searchResult, true);

    },

    searchImage: function(e, isScroll) {
      // if user scrolled to the end to trigger searchImage function, the items list would not be reset.
      // Only reset items list when user searched new image.
      if (!isScroll) {
        this.itemsReset();
      }

      this.queryTerm = e;
      // this.$inertia.replace(this.route('search', Object.keys(this.queryTerm).length ? this.queryTerm : { remember: 'forget' }));
      console.log(typeof e)
      if(typeof e==='undefined'){
        return;
      }


      this.hideLoading = true;
      axios
        .request({
          url: this.$page.props.unsplashSearch,
          method: "get",

         
          params: {
            search: this.queryTerm,
            page: this.currentPage,
            perPage: this.perPage,

          },
        })
        .then((response) => {
          this.responseResults = response.data;
          this.total = response.data.total;
          this.totalPages = response.data.total_pages;
          let i = 0;
          Array.from(this.responseResults.results).forEach((e) => {
            this.item = e;
            this.item["index"] = i;
            i++;
            this.items.push(this.item);
          });

          this.hideLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.hideLoading = false;
        });
    },

    itemsReset: function() {
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
