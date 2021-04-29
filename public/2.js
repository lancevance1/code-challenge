(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/addImageModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/addImageModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Layout.vue */ "./resources/js/Shared/Layout.vue");
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
  name: "addImageModal",
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
    inputName: Object,
    imageId: null
  },
  components: {
    // Using a render function
    layout: function layout(h, page) {
      return h(_Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"], [page]);
    }
  },
  mounted: function mounted() {
    this.$page.props.test = 'ssss';
    console.log(this.$route);
  },
  methods: {
    onSubmit: function onSubmit(event) {
      event.preventDefault(); // alert(JSON.stringify(this.form));
      //add all selected images

      var data = JSON.stringify(this.form);
      console.log(this.$page.props.urls.store);
      console.log(data);
      axios.request({
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

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/addImageModal.vue?vue&type=template&id=080bfd4c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/addImageModal.vue?vue&type=template&id=080bfd4c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", { staticClass: "text-2xl font-bold" }, [_vm._v("Add an image")]),
      _vm._v(" "),
      _c("p", { staticClass: "mt-2 text-lg text-gray-600" }, [
        _vm._v("test test.")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-8 max-w-md" }, [
        _c("div", { staticClass: "grid grid-cols-1 gap-6" }, [
          _c("img", { attrs: { src: _vm.inputName.regular } }),
          _vm._v(" "),
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
            [_vm._v("\n          Submit\n        ")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/addImageModal.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/addImageModal.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addImageModal_vue_vue_type_template_id_080bfd4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addImageModal.vue?vue&type=template&id=080bfd4c&scoped=true& */ "./resources/js/Pages/addImageModal.vue?vue&type=template&id=080bfd4c&scoped=true&");
/* harmony import */ var _addImageModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addImageModal.vue?vue&type=script&lang=js& */ "./resources/js/Pages/addImageModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addImageModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addImageModal_vue_vue_type_template_id_080bfd4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addImageModal_vue_vue_type_template_id_080bfd4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "080bfd4c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/addImageModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/addImageModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/addImageModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addImageModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./addImageModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/addImageModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addImageModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/addImageModal.vue?vue&type=template&id=080bfd4c&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/addImageModal.vue?vue&type=template&id=080bfd4c&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addImageModal_vue_vue_type_template_id_080bfd4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./addImageModal.vue?vue&type=template&id=080bfd4c&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/addImageModal.vue?vue&type=template&id=080bfd4c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addImageModal_vue_vue_type_template_id_080bfd4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addImageModal_vue_vue_type_template_id_080bfd4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);