<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <!--          <div class="card-header">Media Library</div>-->

          <div class="card-body">

            <!-- Using components -->
            <b-input-group class="mt-3">
              <b-form-input v-model="searchResult" placeholder="Search..."></b-form-input>
              <b-input-group-append>
                <b-button variant="primary" type="submit" v-on:click="searchImage(searchResult)">Search</b-button>
              </b-input-group-append>
            </b-input-group>

            <div>
              <p>Total results: {{ total || 0 }}</p>

            </div>
            <li v-for="tmp in responseResults.results">
              <b-form @submit="onSubmit">
                <b-img-lazy v-bind="mainProps" :src="tmp.urls.small" :alt="tmp.altText"></b-img-lazy>

                <!--input groups                -->
                <b-form-group  :id="`input-group-3-${tmp.id}`">
                  <b-form-checkbox-group
                      v-model="form.imageId[tmp.id]"
                      :id="`checkboxes-3-${tmp.id}`">
                    <b-form-checkbox></b-form-checkbox>

                  </b-form-checkbox-group>
                </b-form-group>


                <b-form-group
                    :id="`input-group-1-${tmp.id}`"
                    label="Title:"
                    :label-for="`input-1-${tmp.id}`"
                    v-show="showInput(tmp.id)"
                >
                  <b-form-input
                      :id="`input-1-${tmp.id}`"
                      v-model="form.title[tmp.id]"
                      placeholder="Enter title"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                    :id="`input-group-2-${tmp.id}`"
                    label="AltText:"
                    :label-for="`input-2-${tmp.id}`"
                    v-show="showInput(tmp.id)"
                >
                  <b-form-input
                      :id="`input-2-${tmp.id}`"
                      v-model="form.altText[tmp.id]"
                      placeholder="Enter altText"
                  ></b-form-input>
                </b-form-group>
                <button type="submit" class="btn btn-primary" v-on:click="selectImage(tmp.id)"
                        v-show="showInput(tmp.id)">Add
                </button>

              </b-form>


            </li>

            <!-- pagination                     -->
            <!-- @input="searchImage(searchResult)" not a good way to implement pagination, need to be improved -->
            <div class="overflow-auto" v-if="show">
              <!--              <p>{{token}}</p>-->
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
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 400,
        class: 'my-5'
      },

      form: {
        title: {},
        altText: {},
        imageId: {},
        show: [],
      },

      show: false,
      urlGetMediaItems: '/media',
      // urlApi: 'https://homestead.test/api',
      urlApi: 'https://172.105.191.198/api',
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
  watch: {
    total: function () {
      if (this.total === 0) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
  props: ['token'],
  computed: {
    rows() {
      return this.responseResults.total
    },
  },

  mounted() {
    // console.log('Component mounted.');
    // console.log(this.token);
  },

  methods: {

    //show input groups once checked
    showInput: function (e) {
      if (this.form.imageId[e] != null) {
        // console.log(Object.keys(this.form.imageId[e]).length);
        // console.log(this.form.imageId[e]);
        if (Object.keys(this.form.imageId[e]).length !== 0) {
          return true;
        } else {
          return false;
        }
      }
    },

    //reset form
    formReset: function () {
      this.form = {
        title: {},
        altText: {},
        imageId: {},
      }
    },

    //add searched images into media library.
    onSubmit: function (event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));

      //add all selected images
      for (let key in this.form.imageId) {

        let tmpData = {imageId: '', altText: '', title: ''};
        if (this.form.imageId[key][0] === true) {
          tmpData.imageId = key;
          tmpData.altText = this.form.altText[key];
          tmpData.title = this.form.title[key];



        let data = JSON.stringify(tmpData);
        console.log(data);
        axios.request({
          url: this.urlGetMediaItems,
          method: 'post',
          baseURL: this.urlApi,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
          },
          data: data
        })
            .then((response) => {
              // console.log(JSON.stringify(response.data));
              if (response.data.success === true) {
                alert('image added');
              } else if (response.data.success === false) {
                alert('pls select image');
              } else {
                alert('unexpected error');
              }
            })
            .catch((error) => console.log(error.response.data));
        }
      }

      this.formReset();

    },

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
            this.total = response.data.total;
            // Array.from(this.responseResults.results).forEach(e => {
            //   console.log(e.id);
            // })
          })
          .catch((error) => console.log(error));
      // console.log(this.responseResults);
    },
  }
}
</script>
