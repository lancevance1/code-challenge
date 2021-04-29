(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/editImage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/editImage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
  name: "editImage",
  data: function data() {
    return {
      form: {
        title: null,
        altText: null,
        imageId: null,
        urls: {},
        width: null,
        height: null
      },
      urls: {},
      hideLoading: false,
      imageId: null,
      height: null,
      width: null,
      id: null,
      imageSrc: null,
      isLoadImage: true,
      isLarge: true
    };
  },
  props: {
    inputName: {},
    media: {}
  },
  components: {
    // Using a render function
    layout: function layout(h, page) {
      return h(_Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"], [page]);
    },
    imageCard: _Shared_ImageCard__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    console.log("pathname: " + window.location.pathname.split("/")[2]);
    this.id = window.location.pathname.split("/")[2];
  },
  mounted: function mounted() {
    // this.imageId = this.$page.props.media.imageId;
    // console.log("title "+this.$page.props.media.title)
    this.getImage();
  },
  methods: {
    onSubmit: function onSubmit(event) {
      event.preventDefault(); // alert(JSON.stringify(this.form));
      //add all selected images

      this.form.height = this.height;
      this.form.width = this.width;
      this.form.imageId = this.imageId;
      this.form.urls = this.urls;
      var data = JSON.stringify(this.form);
      console.log(this.$page.props.urls.update);
      console.log(data);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.request({
        url: this.$page.props.urls.update.replace(":id", this.id),
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        data: data
      }).then(function (response) {
        console.log(JSON.stringify(response.status));

        if (response.status === 200) {
          alert("image edited");
        } else {
          alert("unexpected error");
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          alert(error.response.data.message);
        }

        console.log(error.response.data);
      });
    },
    getUrls: function getUrls(childValue) {
      // console.log("child: "+childValue.width)
      this.urls = childValue.urls;
      this.width = childValue.width;
      this.height = childValue.height;
    },
    getImage: function getImage() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.request({
        url: this.$page.props.urls.show.replace(":id", this.id),
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        console.log(JSON.stringify(response.data));
        _this.form.title = response.data.data.title;
        _this.form.altText = response.data.data.altText;
        _this.imageId = response.data.data.imageId;
        _this.imageSrc = response.data.data.urls.small;
        _this.urls = response.data.data.urls;
        _this.height = response.data.data.height;
        _this.width = response.data.data.width;
      })["catch"](function (error) {
        console.log(JSON.stringify(error));

        if (error.status == 404) {
          return console.log("404");
        }

        console.log(error.response.data);
      });
    },
    deleteImage: function deleteImage() {
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        url: this.$page.props.urls.destroy.replace(":id", this.id),
        method: "delete"
      }).then(function (response) {
        console.log(JSON.stringify(response.data));
        window.history.go(-1);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    changeSrc: function changeSrc() {
      console.log(this.isLarge);

      if (this.isLarge) {
        this.imageSrc = this.urls.regular;
        this.isLarge = false;
      } else {
        this.imageSrc = this.urls.small;
        this.isLarge = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/editImage.vue?vue&type=style&index=0&id=24ce51b8&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/editImage.vue?vue&type=style&index=0&id=24ce51b8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-container[data-v-24ce51b8] {\n  margin: 0 auto;\n  width: 100%;\n}\n@media (min-width: 640px) {\n.form-container[data-v-24ce51b8] {\n    max-width: 640px;\n}\n}\n@media (min-width: 768px) {\n.c[data-v-24ce51b8] {\n    max-width: 768px;\n}\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/editImage.vue?vue&type=template&id=24ce51b8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/editImage.vue?vue&type=template&id=24ce51b8&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "py-4 mx-auto" }, [
      _c(
        "div",
        { staticClass: "flex justify-center", on: { click: _vm.changeSrc } },
        [_c("img", { attrs: { src: _vm.imageSrc } })]
      ),
      _vm._v(" "),
      _c(
        "form",
        { staticClass: "form-container", on: { submit: _vm.onSubmit } },
        [
          _c("div", { staticClass: "mt-8 max-w-full w-full" }, [
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
                  attrs: { type: "submit", disabled: _vm.form.processing },
                  on: { click: _vm.onSubmit }
                },
                [_vm._v("\n          Save\n        ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                  attrs: { type: "submit", disabled: _vm.form.processing },
                  on: { click: _vm.deleteImage }
                },
                [_vm._v("\n          Delete\n        ")]
              )
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/editImage.vue?vue&type=style&index=0&id=24ce51b8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/editImage.vue?vue&type=style&index=0&id=24ce51b8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./editImage.vue?vue&type=style&index=0&id=24ce51b8&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/editImage.vue?vue&type=style&index=0&id=24ce51b8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/Pages/editImage.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/editImage.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editImage_vue_vue_type_template_id_24ce51b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editImage.vue?vue&type=template&id=24ce51b8&scoped=true& */ "./resources/js/Pages/editImage.vue?vue&type=template&id=24ce51b8&scoped=true&");
/* harmony import */ var _editImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editImage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/editImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _editImage_vue_vue_type_style_index_0_id_24ce51b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editImage.vue?vue&type=style&index=0&id=24ce51b8&scoped=true&lang=css& */ "./resources/js/Pages/editImage.vue?vue&type=style&index=0&id=24ce51b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _editImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editImage_vue_vue_type_template_id_24ce51b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editImage_vue_vue_type_template_id_24ce51b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "24ce51b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/editImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/editImage.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/editImage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./editImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/editImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/editImage.vue?vue&type=style&index=0&id=24ce51b8&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/editImage.vue?vue&type=style&index=0&id=24ce51b8&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editImage_vue_vue_type_style_index_0_id_24ce51b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./editImage.vue?vue&type=style&index=0&id=24ce51b8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/editImage.vue?vue&type=style&index=0&id=24ce51b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editImage_vue_vue_type_style_index_0_id_24ce51b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editImage_vue_vue_type_style_index_0_id_24ce51b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editImage_vue_vue_type_style_index_0_id_24ce51b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editImage_vue_vue_type_style_index_0_id_24ce51b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/editImage.vue?vue&type=template&id=24ce51b8&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/editImage.vue?vue&type=template&id=24ce51b8&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editImage_vue_vue_type_template_id_24ce51b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./editImage.vue?vue&type=template&id=24ce51b8&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/editImage.vue?vue&type=template&id=24ce51b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editImage_vue_vue_type_template_id_24ce51b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editImage_vue_vue_type_template_id_24ce51b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);