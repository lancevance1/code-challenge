(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/addImage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/addImage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Layout.vue */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_ImageCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/ImageCard */ "./resources/js/Shared/ImageCard.vue");
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
  name: "addImage",
  data: function data() {
    return {
      // ACCESS_KEY: 'wu6uBElgkanxZD7v3iT1Ekqm9ejk8vsLdBWKcXeIwaI',
      form: {
        title: null,
        altText: null,
        imageId: null,
        url_raw: String,
        url_full: String,
        url_regular: String,
        url_small: String,
        url_thumb: String
      },
      urls: {},
      hideLoading: false,
      imageId: null
    };
  },
  props: {
    inputName: {}
  },
  components: {
    // Using a render function
    layout: function layout(h, page) {
      return h(_Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"], [page]);
    },
    imageCard: _Shared_ImageCard__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    console.log(this.$route.query.imageId);
    this.imageId = this.$route.query.imageId;
  },
  mounted: function mounted() {
    console.log("bb");
  },
  methods: {
    onSubmit: function onSubmit(event) {
      event.preventDefault(); // alert(JSON.stringify(this.form));
      //add all selected images

      this.form.imageId = this.imageId;
      this.form.url_raw = this.urls.raw;
      console.log(this.form.url_raw);
      this.form.url_full = this.urls.full;
      this.form.url_regular = this.urls.regular;
      this.form.url_small = this.urls.small;
      this.form.url_thumb = this.urls.thumb;
      var data = JSON.stringify(this.form);
      console.log(this.$page.props.urls.store);
      console.log(data);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.request({
        url: this.$page.props.urls.store,
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        data: data
      }).then(function (response) {
        console.log(JSON.stringify(response.status));

        if (response.status === 201) {
          alert("image added");
        } else {
          alert("unexpected error");
        }
      })["catch"](function (error) {
        // console.log(error.response);
        if (error.response.status === 422) {
          alert(error.response.data.message);
        }

        console.log(error.response.data);
      });
    },
    getUrls: function getUrls(childValue) {
      this.urls = childValue;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/ImageCard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/ImageCard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/Loading */ "./resources/js/Shared/Loading.vue");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ImageCard",
  data: function data() {
    return {
      imageSrc: null,
      imageUrls: {},
      show: false,
      responseResults: [],
      urls: {
        raw: String,
        full: String,
        regular: String,
        small: String,
        thumb: String
      }
    };
  },
  props: {
    inputName: null
  },
  components: {
    loading: _Shared_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    console.log('test: ' + this.inputName);
    this.loadImage();
  },
  // computed: {
  //   unsplash_key() {
  //     return this.$page.props.access_key;
  //   },
  // },
  methods: {
    loadImage: function loadImage(e) {
      var _this = this;

      this.show = true;
      console.log(this.urlUnsplashPhotos + "/" + this.inputName);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.request({
        url: this.$page.props.unsplashGetImage,
        method: "get",
        params: {
          imageId: this.inputName
        }
      }).then(function (response) {
        _this.show = false;
        _this.responseResults = response.data;
        _this.imageSrc = _this.responseResults.urls.regular;
        _this.urls = _this.responseResults.urls;

        _this.outputMethod();
      })["catch"](function (error) {
        console.log(error.response.data);
        _this.show = false;
      });
    },
    outputMethod: function outputMethod() {
      this.$emit("childByValue", this.urls);
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/addImage.vue?vue&type=template&id=79067a7a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/addImage.vue?vue&type=template&id=79067a7a& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { title: "Welcome" } }, [
    _c(
      "div",
      { staticClass: "py-4 mx-auto" },
      [
        _c("image-card", {
          attrs: { inputName: _vm.imageId },
          on: { childByValue: _vm.getUrls }
        }),
        _vm._v(" "),
        _c("form", { on: { submit: _vm.onSubmit } }, [
          _c("div", { staticClass: "mt-8 max-w-md" }, [
            _c("div", { staticClass: "grid grid-cols-1 gap-6" }, [
              _c("label", { staticClass: "block", attrs: { for: "title" } }, [
                _c("span", { staticClass: "text-gray-700" }, [_vm._v("Title")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.title,
                      expression: "form.title"
                    }
                  ],
                  staticClass: "mt-1 block w-full",
                  attrs: { id: "title", type: "text", placeholder: "ABC..." },
                  domProps: { value: _vm.form.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "title", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("label", { staticClass: "block", attrs: { for: "altText" } }, [
                _c("span", { staticClass: "text-gray-700" }, [
                  _vm._v("AltText")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.altText,
                      expression: "form.altText"
                    }
                  ],
                  staticClass: "mt-1 block w-full",
                  attrs: { id: "altText", rows: "3" },
                  domProps: { value: _vm.form.altText },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "altText", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                  attrs: { type: "submit", disabled: _vm.form.processing }
                },
                [_vm._v("\n            Save\n          ")]
              )
            ])
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/ImageCard.vue?vue&type=template&id=ffc92c42&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/ImageCard.vue?vue&type=template&id=ffc92c42&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _vm.show ? _c("loading") : _vm._e(),
      _vm._v(" "),
      _c("img", { attrs: { src: _vm.imageSrc } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/addImage.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/addImage.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addImage_vue_vue_type_template_id_79067a7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addImage.vue?vue&type=template&id=79067a7a& */ "./resources/js/Pages/addImage.vue?vue&type=template&id=79067a7a&");
/* harmony import */ var _addImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addImage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/addImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addImage_vue_vue_type_template_id_79067a7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addImage_vue_vue_type_template_id_79067a7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/addImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/addImage.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/addImage.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./addImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/addImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/addImage.vue?vue&type=template&id=79067a7a&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/addImage.vue?vue&type=template&id=79067a7a& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addImage_vue_vue_type_template_id_79067a7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./addImage.vue?vue&type=template&id=79067a7a& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/addImage.vue?vue&type=template&id=79067a7a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addImage_vue_vue_type_template_id_79067a7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addImage_vue_vue_type_template_id_79067a7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/ImageCard.vue":
/*!*******************************************!*\
  !*** ./resources/js/Shared/ImageCard.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageCard_vue_vue_type_template_id_ffc92c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCard.vue?vue&type=template&id=ffc92c42&scoped=true& */ "./resources/js/Shared/ImageCard.vue?vue&type=template&id=ffc92c42&scoped=true&");
/* harmony import */ var _ImageCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCard.vue?vue&type=script&lang=js& */ "./resources/js/Shared/ImageCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageCard_vue_vue_type_template_id_ffc92c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageCard_vue_vue_type_template_id_ffc92c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ffc92c42",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/ImageCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/ImageCard.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/ImageCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/ImageCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/ImageCard.vue?vue&type=template&id=ffc92c42&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Shared/ImageCard.vue?vue&type=template&id=ffc92c42&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_template_id_ffc92c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ImageCard.vue?vue&type=template&id=ffc92c42&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/ImageCard.vue?vue&type=template&id=ffc92c42&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_template_id_ffc92c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCard_vue_vue_type_template_id_ffc92c42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);