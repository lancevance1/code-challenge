<template>
  <layout title="Welcome">
    <h1>Welcome</h1>
    <!-- <inertia-link :href="$route('media.create')">Create User</inertia-link> -->
    <p>Hello {{ $page.props.user }}, welcome {{ $page.props.media }} to your first Inertia app!</p>




<!--    <div class="py-1">Total results: {{ total }}</div>-->

    <loading v-if="hideLoading"></loading>

<waterfall-component :items="items"></waterfall-component>

  </layout>
</template>

<script>
  import Layout from '../Shared/Layout'
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
    mounted(){
       // axios.get(this.$page.props.urls.index)
this.loadImages();
    },
    data(){
      return{
        line: "v",
        hideLoading: false,
        items: [],
        responseResults: [],
        searchResult: "",
        imageId: "",
        perPage: 20,
        currentPage: 1,
        total: 0,
        totalPages: 1,
        urlApi: 'https://homestead.test/api',
        urlGetMediaItems: '/media',
      }
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods:{
      loadImages: function () {
        this.hideLoading = true;
        console.log(this.$page.props.urls.index)
        axios.request({
          url: this.$page.props.urls.index,

          method: 'get',


        })
            .then((response) => {
              this.responseResults = response.data;
              console.log(JSON.stringify(response.data));
              this.total = response.data.length;

              let i = 0;
              Array.from(this.responseResults).forEach((e) => {
                this.item = e;
                this.item["index"] = i;
                i++;
                // console.log(item.url_regular)
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
        if (true) {
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

    // props: {
    //   media: [],
    // },
  }
</script>