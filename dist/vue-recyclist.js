(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueRecyclist"] = factory();
	else
		root["VueRecyclist"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VueRecyclist_vue__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__components_VueRecyclist_vue__["a" /* default */]);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-recyclist', __WEBPACK_IMPORTED_MODULE_0__components_VueRecyclist_vue__["a" /* default */]);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_VueRecyclist_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79cdd4d5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_VueRecyclist_vue__ = __webpack_require__(6);
function injectStyle (ssrContext) {
  __webpack_require__(3)
  __webpack_require__(4)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79cdd4d5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_VueRecyclist_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_79cdd4d5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_VueRecyclist_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      name: 'VueRecyclist',
      items: [], // Wrapped full list items
      height: 0, // Full list height
      loadings: [], // Loading status queue
      start: 0, // Visible items start index
      startOffset: 0 // Start item offset
    };
  },

  computed: {
    visibleItems: function visibleItems() {
      return this.items.slice(Math.max(0, this.start - this.size), Math.min(this.items.length, this.start + this.size));
    },
    containerHeight: function containerHeight() {
      return this.$el && this.$el.offsetHeight || 0;
    },
    tombHeight: function tombHeight() {
      return this.tombstone ? this.$refs.tomb && this.$refs.tomb.offsetHeight : 0;
    },
    loading: function loading() {
      return this.loadings.length;
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    tombstone: {
      type: Boolean,
      default: false // Whether to show tombstones.
    },
    size: {
      type: Number,
      default: 20 // The number of items added each time.
    },
    offset: {
      type: Number,
      default: 200 // The number of pixels of additional length to allow scrolling to.
    },
    loadmore: {
      type: Function,
      required: true // The function of loading more items.
    },
    spinner: {
      type: Boolean,
      default: true // Whether to show loading spinner.
    },
    nomore: {
      type: Boolean,
      default: false // Whether to show 'no more data' status bar
    }
  },
  watch: {
    list: function list(arr) {
      if (arr.length) {
        this.loadings.pop();
        if (!this.loading) {
          this.loadItems();
        }
      } else {
        this.init();
      }
    },
    items: function items(arr) {
      if (arr.length > this.list.length) {
        this.getItems();
      }
    }
  },
  mounted: function mounted() {
    this.$el.addEventListener('scroll', this.onScroll.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
    this.init();
  },

  methods: {
    init: function init() {
      this.reset();
      this.load();
    },
    reset: function reset() {
      this.items = [];
      this.height = this.top = this.start = 0;
      this.$el.scrollTop = 0;
    },
    load: function load() {
      if (this.tombstone) {
        this.items.length += this.size;
        this.loadItems();
      } else if (!this.loading) {
        this.getItems();
      }
    },
    getItems: function getItems() {
      this.loadings.push(1);
      this.loadmore();
    },
    loadItems: function loadItems() {
      var _this = this;

      var loads = [];
      var start = 0;
      var end = this.tombstone ? this.items.length : this.list.length;

      var _loop = function _loop(i) {
        if (_this.items[i] && _this.items[i].loaded) {
          return 'continue';
        }
        _this.setItem(i, _this.list[i] || null);
        // update newly added items position
        loads.push(_this.$nextTick().then(function () {
          _this.updateItemHeight(i);
        }));
      };

      for (var i = start; i < end; i++) {
        var _ret = _loop(i);

        if (_ret === 'continue') continue;
      }
      // update items top and full list height
      Promise.all(loads).then(function () {
        _this.updateItemTop();
      });
    },
    setItem: function setItem(index, data) {
      this.$set(this.items, index, {
        data: data ? data : {},
        height: 0,
        top: -1000,
        tomb: !data,
        loaded: !!data
      });
    },
    updateItemHeight: function updateItemHeight(index) {
      // update item height
      var cur = this.items[index];
      var dom = this.$refs['item' + index];
      if (dom && dom[0]) {
        cur.height = dom[0].offsetHeight;
      } else {
        // item is tombstone
        cur.height = this.tombHeight;
      }
    },
    updateItemTop: function updateItemTop() {
      // loop all items to update item top and list height
      this.height = 0;
      for (var i = 0; i < this.items.length; i++) {
        var pre = this.items[i - 1];
        this.items[i].top = pre ? pre.top + pre.height : 0;
        this.height += this.items[i].height;
      }
      // update scroll top when needed
      if (this.startOffset) {
        this.setScrollTop();
      }
      this.updateIndex();
      this.makeScrollable();
    },
    updateIndex: function updateIndex() {
      // update visible items start index
      var top = this.$el.scrollTop;
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].top > top) {
          this.start = Math.max(0, i - 1);
          break;
        }
      }
      // scrolling does not need recalculate scrolltop
      // this.getStartItemOffset()
    },
    getStartItemOffset: function getStartItemOffset() {
      if (this.items[this.start]) {
        this.startOffset = this.items[this.start].top - this.$el.scrollTop;
      }
    },
    setScrollTop: function setScrollTop() {
      if (this.items[this.start]) {
        this.$el.scrollTop = this.items[this.start].top - this.startOffset;
        // reset start item offset
        this.startOffset = 0;
      }
    },
    makeScrollable: function makeScrollable() {
      // make ios -webkit-overflow-scrolling scrollable
      this.$el.classList.add('vue-recyclist-scrollable');
    },
    onScroll: function onScroll() {
      if (this.$el.scrollTop + this.$el.offsetHeight > this.height - this.offset) {
        this.load();
      }
      this.updateIndex();
    },
    onResize: function onResize() {
      this.getStartItemOffset();
      this.items.forEach(function (item) {
        item.loaded = false;
      });
      this.loadItems();
    }
  },
  destroyed: function destroyed() {
    this.$el.removeEventListener('scroll', this.onScroll.bind(this));
    window.removeEventListener('resize', this.onResize.bind(this));
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-recyclist"},[_c('div',{ref:"list",staticClass:"vue-recyclist-items",style:({height: _vm.height + 'px'})},[_vm._l((_vm.visibleItems),function(item,index){return _c('div',{staticClass:"vue-recyclist-item",style:({transform: 'translate3d(0,' + item.top + 'px,0)'})},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.tombstone),expression:"tombstone"}],class:{'vue-recyclist-transition': _vm.tombstone},style:({opacity: +!item.loaded})},[_vm._t("tombstone")],2),_vm._v(" "),_c('div',{class:{'vue-recyclist-transition': _vm.tombstone},style:({opacity: +item.loaded})},[_vm._t("item",null,{data:item.data,index:index})],2)])}),_vm._v(" "),_c('div',{staticClass:"vue-recyclist-pool"},[_vm._l((_vm.items),function(item,index){return (!item.tomb && !item.height)?_c('div',{ref:'item'+index,refInFor:true,staticClass:"vue-recyclist-item vue-recyclist-invisible"},[_vm._t("item",null,{data:item.data})],2):_vm._e()}),_vm._v(" "),_c('div',{ref:"tomb",staticClass:"vue-recyclist-item vue-recyclist-invisible"},[_vm._t("tombstone")],2)],2)],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.spinner && !_vm.nomore && !_vm.tombstone),expression:"spinner && !nomore && !tombstone"}],staticClass:"vue-recyclist-loading",style:({visibility: _vm.loading ? 'visible' : 'hidden'})},[_vm._t("spinner",[_vm._m(0)])],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.nomore && !_vm.loading),expression:"nomore && !loading"}],staticClass:"vue-recyclist-nomore"},[_vm._t("nomore",[_c('div',[_vm._v("End of list")])])],2)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-recyclist-loading-content"},[_c('div',{staticClass:"cssloading-circle spinner"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-recyclist.js.map