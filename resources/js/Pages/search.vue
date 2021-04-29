<template>
  <layout title="Welcome">
    <div class="py-1 text-base">Total results: {{ total }}</div>
    <loading v-if="hideLoading"></loading>
    <waterfall-component
      :items="items"
      :searchResult="searchResult"
    ></waterfall-component>
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
import WaterfallComponent from "../Shared/WaterfallComponent";

export default {
  data() {
    return {
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
    };
  },
  components: {
    WaterfallComponent,
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
    console.log("props", this.$page.props.appName);
    if (this.$route.query.q !== "") {
      this.searchImage(this.searchResult, false);
    }
  },
  methods: {
    handleLoad(e) {
      console.log(e);
    },

    searchImage: function (e, isScroll) {
      // if user scrolled to the end to trigger searchImage function, the items list would not be reset.
      // Only reset items list when user searched new image.
      if (!isScroll) {
        this.itemsReset();
      }
      this.queryTerm = e;
      console.log(typeof e);
      if (typeof e === "undefined") {
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
            this.item["imageId"] = e.id;
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
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop + window.innerHeight >= document.body.clientHeight) {
        this.getData();
      }
    },
    getData: function () {
      if (this.currentPage === this.totalPages) {
        return alert("no more images");
        //todo session
      }
      this.currentPage++;
      this.searchImage(this.searchResult, true);
    },
    itemsReset: function () {
      this.items = [];
      this.currentPage = 1;
    },
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
