(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/search.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/search.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_waterfall_lib_waterfall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-waterfall/lib/waterfall */ "./node_modules/vue-waterfall/lib/waterfall.vue");
/* harmony import */ var vue_waterfall_lib_waterfall_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-waterfall/lib/waterfall-slot */ "./node_modules/vue-waterfall/lib/waterfall-slot.vue");
/* harmony import */ var vue_popperjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-popperjs */ "./node_modules/vue-popperjs/dist/vue-popper.min.js");
/* harmony import */ var vue_popperjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_popperjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_popperjs_dist_vue_popper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-popperjs/dist/vue-popper.css */ "./node_modules/vue-popperjs/dist/vue-popper.css");
/* harmony import */ var vue_popperjs_dist_vue_popper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_popperjs_dist_vue_popper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _addImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addImage */ "./resources/js/Pages/addImage.vue");
/* harmony import */ var _Shared_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Shared/Loading */ "./resources/js/Shared/Loading.vue");
/* harmony import */ var _Shared_WaterfallComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Shared/WaterfallComponent */ "./resources/js/Shared/WaterfallComponent.vue");
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      hideLoading: false,
      item: {
        src: null,
        href: null
      },
      items: [],
      form: {
        title: null,
        altText: null,
        imageId: null
      },
      responseResults: [],
      searchResult: "",
      imageId: "",
      perPage: 20,
      currentPage: 1,
      total: 0,
      totalPages: 0
    };
  },
  components: {
    WaterfallComponent: _Shared_WaterfallComponent__WEBPACK_IMPORTED_MODULE_8__["default"],
    // Using a render function
    layout: function layout(h, page) {
      return h(_Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], [page]);
    },
    Waterfall: vue_waterfall_lib_waterfall__WEBPACK_IMPORTED_MODULE_2__["default"],
    WaterfallSlot: vue_waterfall_lib_waterfall_slot__WEBPACK_IMPORTED_MODULE_3__["default"],
    popper: vue_popperjs__WEBPACK_IMPORTED_MODULE_4___default.a,
    addImage: _addImage__WEBPACK_IMPORTED_MODULE_6__["default"],
    loading: _Shared_Loading__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mounted: function mounted() {
    this.searchResult = this.$route.query.q;

    if (this.$route.query.q !== "") {
      this.searchImage(this.searchResult, false);
    }
  },
  methods: {
    handleLoad: function handleLoad(e) {
      console.log(e);
    },
    searchImage: function searchImage(e, isScroll) {
      var _this = this;

      // if user scrolled to the end to trigger searchImage function, the items list would not be reset.
      // Only reset items list when user searched new image.
      if (!isScroll) {
        this.itemsReset();
      }

      this.queryTerm = e;

      if (typeof e === "undefined") {
        return;
      }

      this.hideLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.request({
        url: this.$page.props.unsplashSearch,
        method: "get",
        params: {
          search: this.queryTerm,
          page: this.currentPage,
          perPage: this.perPage
        }
      }).then(function (response) {
        _this.responseResults = response.data;
        _this.total = response.data.total;
        _this.totalPages = response.data.total_pages;
        var i = 0;
        Array.from(_this.responseResults.results).forEach(function (e) {
          _this.item = e;
          _this.item["imageId"] = e.id;
          _this.item["index"] = i;
          i++;

          _this.items.push(_this.item);
        });
        _this.hideLoading = false;
      })["catch"](function (error) {
        _this.hideLoading = false;
      });
    },
    handleScroll: function handleScroll(event) {
      // Any code to be executed when the window is scrolled
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop + window.innerHeight >= document.body.clientHeight) {
        this.getData();
      }
    },
    getData: function getData() {
      if (this.currentPage === this.totalPages) {
        return alert("no more images"); //todo session
      }

      this.currentPage++;
      this.searchImage(this.searchResult, true);
    },
    itemsReset: function itemsReset() {
      this.items = [];
      this.currentPage = 1;
    }
  },
  created: function created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/WaterfallComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/WaterfallComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_waterfall_lib_waterfall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-waterfall/lib/waterfall */ "./node_modules/vue-waterfall/lib/waterfall.vue");
/* harmony import */ var vue_waterfall_lib_waterfall_slot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-waterfall/lib/waterfall-slot */ "./node_modules/vue-waterfall/lib/waterfall-slot.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WaterfallComponent",
  components: {
    Waterfall: vue_waterfall_lib_waterfall__WEBPACK_IMPORTED_MODULE_0__["default"],
    WaterfallSlot: vue_waterfall_lib_waterfall_slot__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    items: {},
    searchResult: String
  },
  data: function data() {
    return {
      line: "v"
    };
  },
  methods: {
    goToImage: function goToImage(e) {
      var tmp = window.location.pathname.split("/")[1];

      if (tmp === "search") {
        window.location.href = "media/create?imageId=" + e.imageId;
      } else if (tmp === "media") {
        window.location.href = "media/" + e.id + "/edit";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/search.vue?vue&type=template&id=6d55e71e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/search.vue?vue&type=template&id=6d55e71e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "layout",
    { attrs: { title: "Welcome" } },
    [
      _c("div", { staticClass: "py-1 text-base" }, [
        _vm._v("Total results: " + _vm._s(_vm.total))
      ]),
      _vm._v(" "),
      _vm.hideLoading ? _c("loading") : _vm._e(),
      _vm._v(" "),
      _c("waterfall-component", {
        attrs: { items: _vm.items, searchResult: _vm.searchResult }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/WaterfallComponent.vue?vue&type=template&id=6a3a3ee7&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/WaterfallComponent.vue?vue&type=template&id=6a3a3ee7&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "waterfall",
    {
      ref: "waterfall",
      attrs: {
        line: _vm.line,
        "line-gap": 600,
        "min-line-gap": 180,
        "max-line-gap": 220,
        watch: _vm.items
      }
    },
    _vm._l(_vm.items, function(item, index) {
      return _c(
        "waterfall-slot",
        {
          key: item.imageId,
          attrs: { width: item.width, height: item.height, order: index }
        },
        [
          _c("div", { staticClass: "container mx-auto py-4" }, [
            _c("img", {
              attrs: { src: item.urls.regular, alt: item.altText },
              on: {
                click: function($event) {
                  return _vm.goToImage(item)
                }
              }
            })
          ])
        ]
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/search.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/search.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_6d55e71e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=6d55e71e& */ "./resources/js/Pages/search.vue?vue&type=template&id=6d55e71e&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "./resources/js/Pages/search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_6d55e71e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_6d55e71e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/search.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/search.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/search.vue?vue&type=template&id=6d55e71e&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/search.vue?vue&type=template&id=6d55e71e& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_6d55e71e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=template&id=6d55e71e& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/search.vue?vue&type=template&id=6d55e71e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_6d55e71e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_6d55e71e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/WaterfallComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/Shared/WaterfallComponent.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WaterfallComponent_vue_vue_type_template_id_6a3a3ee7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WaterfallComponent.vue?vue&type=template&id=6a3a3ee7&scoped=true& */ "./resources/js/Shared/WaterfallComponent.vue?vue&type=template&id=6a3a3ee7&scoped=true&");
/* harmony import */ var _WaterfallComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaterfallComponent.vue?vue&type=script&lang=js& */ "./resources/js/Shared/WaterfallComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WaterfallComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WaterfallComponent_vue_vue_type_template_id_6a3a3ee7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WaterfallComponent_vue_vue_type_template_id_6a3a3ee7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6a3a3ee7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/WaterfallComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/WaterfallComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Shared/WaterfallComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaterfallComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./WaterfallComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/WaterfallComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaterfallComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/WaterfallComponent.vue?vue&type=template&id=6a3a3ee7&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Shared/WaterfallComponent.vue?vue&type=template&id=6a3a3ee7&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaterfallComponent_vue_vue_type_template_id_6a3a3ee7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./WaterfallComponent.vue?vue&type=template&id=6a3a3ee7&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/WaterfallComponent.vue?vue&type=template&id=6a3a3ee7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaterfallComponent_vue_vue_type_template_id_6a3a3ee7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaterfallComponent_vue_vue_type_template_id_6a3a3ee7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);