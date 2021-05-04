<template>
  <layout title="Media Library">
    <div class="text-base">
      <h1>Welcome User: {{ $page.props.auth.user.name }}</h1>
    </div>

    <loading v-if="hideLoading"></loading>

    <waterfall-component :items="items"></waterfall-component>
  </layout>
</template>

<script>
import Layout from "../Shared/Layout";
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
import loading from "../Shared/Loading";
import axios from "axios";
import WaterfallComponent from "../Shared/WaterfallComponent";
export default {
  components: {
    WaterfallComponent,
    // Using a render function
    layout: (h, page) => h(Layout, [page]),
    Waterfall,
    WaterfallSlot,
    loading,
  },
  mounted() {
    // axios.get(this.$page.props.urls.index)
    this.loadImages();
  },
  data() {
    return {
      line: "v",
      hideLoading: false,
      item: {},
      items: [],
      responseResults: [],
      searchResult: "",
      imageId: "",
      perPage: 20,
      currentPage: 1,
      total: 0,
      totalPages: 1,
      isBottom: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    loadImages: function () {
      this.hideLoading = true;
      axios
        .request({
          url: this.$page.props.urls.index,
          method: "get",
        })
        .then((response) => {
          this.responseResults = response.data.data;
          this.total = response.data.length;
          let i = 0;
          Array.from(this.responseResults).forEach((e) => {
            this.item = e;
            this.item["index"] = i;
            i++;
            this.items.push(this.item);
          });
          this.hideLoading = false;
        })
        .catch((error) => {
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
      if (!this.isBottom) {
        this.isBottom = true;

        return alert("no more images");
        //todo session
      }
    },
    itemsReset: function () {
      this.items = [];
      this.currentPage = 1;
    },
  },
};
</script>
