(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/image.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/image.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Layout.vue */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
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
  name: "image",
  data: function data() {
    return {
      form: {
        title: null,
        altText: null,
        imageId: null
      }
    };
  },
  props: {
    inputName: {},
    imageId: null
  },
  components: {
    // Using a render function
    layout: function layout(h, page) {
      return h(_Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"], [page]);
    }
  },
  created: function created() {
    console.log("aa");
    console.log(this.inputName.id);
  },
  mounted: function mounted() {
    console.log("bb");
    console.log(this.inputName.id);
  },
  methods: {
    onSubmit: function onSubmit(event) {
      event.preventDefault(); // alert(JSON.stringify(this.form));
      //add all selected images

      this.form.imageId = this.inputName.id;
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
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/image.vue?vue&type=template&id=8aa437bc&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/image.vue?vue&type=template&id=8aa437bc& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "py-12 mx-auto" }, [
    _c("form", { on: { submit: _vm.onSubmit } }, [
      _c("div", { staticClass: "mt-8 max-w-md" }, [
        _c("div", { staticClass: "grid grid-cols-1 gap-6" }, [
          _vm._v("\n        " + _vm._s(_vm.inputName.id) + "\n        "),
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
            _c("span", { staticClass: "text-gray-700" }, [_vm._v("AltText")]),
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
            [_vm._v("\n          Save\n        ")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/image.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/image.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_vue_vue_type_template_id_8aa437bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.vue?vue&type=template&id=8aa437bc& */ "./resources/js/Pages/image.vue?vue&type=template&id=8aa437bc&");
/* harmony import */ var _image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.vue?vue&type=script&lang=js& */ "./resources/js/Pages/image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _image_vue_vue_type_template_id_8aa437bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _image_vue_vue_type_template_id_8aa437bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/image.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/image.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/image.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./image.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/image.vue?vue&type=template&id=8aa437bc&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/image.vue?vue&type=template&id=8aa437bc& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_template_id_8aa437bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./image.vue?vue&type=template&id=8aa437bc& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/image.vue?vue&type=template&id=8aa437bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_template_id_8aa437bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_vue_vue_type_template_id_8aa437bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);