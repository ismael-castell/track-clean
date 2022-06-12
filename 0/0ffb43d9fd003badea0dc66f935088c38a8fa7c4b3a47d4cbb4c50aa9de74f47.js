/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7228:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ 2858:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ 3646:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(7228);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 1506:
/***/ (),

/***/ 4575:
/***/ (),

/***/ 3913:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 9713:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 7154:
/***/ ((module) => {

function(){}

module.exports = _extends;

/***/ }),

/***/ 9754:
/***/ ((module) => {

function(){}

module.exports = _getPrototypeOf;

/***/ }),

/***/ 2205:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(9489);

function(){}

module.exports = _inherits;

/***/ }),

/***/ 6860:
/***/ ((module) => {

function(){}

module.exports = _iterableToArray;

/***/ }),

/***/ 3884:
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ 8135:
/***/ ((module) => {

var REACT_ELEMENT_TYPE;

function _createRawReactElement(type, props, key, children) {
  if (!REACT_ELEMENT_TYPE) {
    REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7;
  }

  var defaultProps = type && type.defaultProps;
  var childrenLength = arguments.length - 3;

  if (!props && childrenLength !== 0) {
    props = {
      children: void 0
    };
  }

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = new Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 3];
    }

    props.children = childArray;
  }

  if (props && defaultProps) {
    for (var propName in defaultProps) {
      if (props[propName] === void 0) {
        props[propName] = defaultProps[propName];
      }
    }
  } else if (!props) {
    props = defaultProps || {};
  }

  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key === undefined ? null : '' + key,
    ref: null,
    props: props,
    _owner: null
  };
}

module.exports = _createRawReactElement;

/***/ }),

/***/ 521:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ 8206:
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 8585:
/***/ (),

/***/ 9489:
/***/ ((module) => {

function(){}

module.exports = _setPrototypeOf;

/***/ }),

/***/ 3038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(2858);

var iterableToArrayLimit = __webpack_require__(3884);

var unsupportedIterableToArray = __webpack_require__(379);

var nonIterableRest = __webpack_require__(521);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ 319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(3646);

var iterableToArray = __webpack_require__(6860);

var unsupportedIterableToArray = __webpack_require__(379);

var nonIterableSpread = __webpack_require__(8206);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 8:
/***/ ((module) => {

function(){}

module.exports = _typeof;

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(7228);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ 9369:
/***/ (() => {

if (!window.getUpdatedCookieWhitelistByTermly) {
  window.getUpdatedCookieWhitelistByTermly = function (data) {// console.log(data);
  };
}

if (!window.getCookieWhitelistByTermly) {
  window.getCookieWhitelistByTermly = function (data) {// console.log(data);
  };
}

/***/ }),

/***/ 9538:
/***/ (() => {

// add array.find polyfill for IE11
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this === null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


      var thisArg = arguments[1]; // 5. Let k be 0.

      var k = 0; // 6. Repeat, while k < len

      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        } // e. Increase k by 1.


        k += 1;
      } // 7. Return undefined.


      return undefined;
    },
    configurable: true,
    writable: true
  });
} // add string includes for IE11


if (!String.prototype.includes) {
  Object.defineProperty(String.prototype, 'includes', {
    value: function value(search, start) {
      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    }
  });
} // Production steps of ECMA-262, Edition 6, 22.1.2.1


if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function(){};

    var toInteger = function(){};

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function(){}; // The length property of the from method is 1.


    return function from(arrayLike) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike === null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method 
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();
}

/***/ }),

/***/ 4184:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function(){}());


/***/ }),

/***/ 9020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes termly-style-bannerFadeIn-bd5f5c{0%{display:none;opacity:0}1%{display:block;opacity:0;bottom:-120px}100%{display:block;opacity:.98;bottom:0}}@keyframes termly-style-bannerFadeInFromTop-ea0c6f{0%{display:none;opacity:0}1%{display:block;opacity:0;top:-120px}100%{display:block;opacity:.98;top:0}}@keyframes termly-style-fadeIn-6cecb4{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:.98}}.termly-style-container-1010df{width:100%;height:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center;background-color:#000}.termly-style-container-1010df .termly-style-content-50d28d{width:370px;height:160px;padding:40px;background-color:#fff;border-radius:5px;box-sizing:content-box}.termly-style-container-1010df .termly-style-content-50d28d .termly-style-title-0b92d4{font-family:\"Roboto\";font-size:18px;font-weight:bold;color:#1f1e33;margin-bottom:15px;text-align:center}.termly-style-container-1010df .termly-style-content-50d28d .termly-style-description-3ac037{font-family:\"Roboto\";font-size:12px;font-weight:normal;color:#303030;line-height:21px;margin-bottom:15px;text-align:center}.termly-style-container-1010df .termly-style-content-50d28d .termly-style-accept-08c3cd{font-family:\"Roboto\";font-size:14px;font-weight:normal;color:#fff;width:140px;height:40px;border-radius:5px;background-color:#3b9cf6;display:flex;flex-flow:row wrap;justify-content:center;align-items:center;margin:0 auto;cursor:pointer}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "termly-style-container-1010df",
	"content": "termly-style-content-50d28d",
	"title": "termly-style-title-0b92d4",
	"description": "termly-style-description-3ac037",
	"accept": "termly-style-accept-08c3cd",
	"bannerFadeIn": "termly-style-bannerFadeIn-bd5f5c",
	"bannerFadeInFromTop": "termly-style-bannerFadeInFromTop-ea0c6f",
	"fadeIn": "termly-style-fadeIn-6cecb4"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6537:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes termly-style-bannerFadeIn-81a1e2{0%{display:none;opacity:0}1%{display:block;opacity:0;bottom:-120px}100%{display:block;opacity:.98;bottom:0}}@keyframes termly-style-bannerFadeInFromTop-39cf11{0%{display:none;opacity:0}1%{display:block;opacity:0;top:-120px}100%{display:block;opacity:.98;top:0}}@keyframes termly-style-fadeIn-554b68{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:.98}}.termly-style-button-123b18{font-family:'Open Sans', Helvetica, Arial;font-size:15px;color:white;line-height:1.5;padding:9px;cursor:pointer;outline:none;letter-spacing:.5px;background:#2bb4e0;margin-left:10px;width:190px;text-transform:none;font-weight:normal;border-radius:5px;border:1px solid #808ba4}@media only screen and (max-width: 768px){.termly-style-button-123b18{margin-bottom:10px !important;width:65%;padding:9px 0;text-align:center}}@media screen and (max-width: 374px){.termly-style-button-123b18{margin-bottom:10px !important;width:65%;padding:9px 0;text-align:center}}.termly-style-button-123b18.termly-style-accept-39430a{min-width:210px}.termly-style-cookie-preference-910d9b{font-family:Roboto, Helvetica, Arial;font-size:15px;color:#fff;font-weight:600;box-sizing:border-box;text-transform:none;width:178px;height:40px;padding:10px 0;border-width:0;line-height:normal;letter-spacing:normal;text-align:center;margin:0 !important}.termly-style-cookie-preference-910d9b+.termly-style-cookie-preference-910d9b{margin-left:10px !important}.termly-style-consent-banner-8ff11f{padding:9px 20px;border-radius:5px;display:inline-block;border-width:0;width:183px}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"button": "termly-style-button-123b18",
	"accept": "termly-style-accept-39430a",
	"cookie-preference": "termly-style-cookie-preference-910d9b",
	"consent-banner": "termly-style-consent-banner-8ff11f",
	"bannerFadeIn": "termly-style-bannerFadeIn-81a1e2",
	"bannerFadeInFromTop": "termly-style-bannerFadeInFromTop-39cf11",
	"fadeIn": "termly-style-fadeIn-554b68"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes termly-cookie-details-bannerFadeIn-730b90{0%{display:none;opacity:0}1%{display:block;opacity:0;bottom:-120px}100%{display:block;opacity:.98;bottom:0}}@keyframes termly-cookie-details-bannerFadeInFromTop-c58c92{0%{display:none;opacity:0}1%{display:block;opacity:0;top:-120px}100%{display:block;opacity:.98;top:0}}@keyframes termly-cookie-details-fadeIn-b8c01f{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:.98}}.termly-cookie-details-container-75f73c{padding:20px 40px 0}@media only screen and (max-width: 768px){.termly-cookie-details-container-75f73c{width:100%;padding:20px 0}}.termly-cookie-details-container-75f73c h3{height:auto;margin:0;padding:0;font-family:Roboto, Helvetica, Arial;font-size:19px;font-weight:500;line-height:23px;color:#363840;word-break:break-all}.termly-cookie-details-container-75f73c h3 span{color:#2bb4e0}.termly-cookie-details-container-75f73c table{margin-top:15px;width:100%;border-radius:5px;border:1px solid #ededef}.termly-cookie-details-container-75f73c table thead{color:#363840;font-family:Roboto, Helvetica, Arial;font-size:13px;font-weight:500;background-color:#f7f9fc;border-bottom:1px solid #ededef}.termly-cookie-details-container-75f73c table th{padding:10px 20px}@media only screen and (max-width: 768px){.termly-cookie-details-container-75f73c table th{padding:10px 5px}}.termly-cookie-details-container-75f73c table tbody{font-family:Roboto, Helvetica, Arial;font-size:13px;font-weight:400;line-height:1.54;color:#363840}.termly-cookie-details-container-75f73c table tbody tr:nth-child(even){background-color:#f9f9f9}.termly-cookie-details-container-75f73c table tbody td{padding:14px 20px;word-break:break-word}@media only screen and (max-width: 768px){.termly-cookie-details-container-75f73c table tbody td{padding:10px 5px}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "termly-cookie-details-container-75f73c",
	"bannerFadeIn": "termly-cookie-details-bannerFadeIn-730b90",
	"bannerFadeInFromTop": "termly-cookie-details-bannerFadeInFromTop-c58c92",
	"fadeIn": "termly-cookie-details-fadeIn-b8c01f"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{width:100%}.termly-style-dialog-default-861819{position:fixed;display:none;overflow:auto;width:100%;height:100%;top:0;left:0;z-index:10000;background:rgba(58,58,58,0.8)}.termly-style-show-default-f5d371{display:block;transition:display 1s}.termly-style-modal-md-98c9df,.termly-style-modal-xl-4f103a,.termly-style-modal-default-55d109{max-width:461px;width:95%;border-radius:5px;box-shadow:0 0 8px rgba(0,0,0,0.3);opacity:0;margin-top:-100px;transition:margin .5s, opacity .5s;box-sizing:border-box;text-align:center;background:white}.termly-style-modal-md-98c9df{max-width:645px}.termly-style-modal-xl-4f103a{max-width:940px;width:95%;padding:50px 52px}@media only screen and (max-width: 576px){.termly-style-modal-xl-4f103a{padding:0 0 25px}}.termly-style-consent-banner-b6269f{left:50%;top:50%;transform:translate(-50%, -50%);transition:margin .5s, opacity .5s;position:fixed;opacity:0}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"dialog-default": "termly-style-dialog-default-861819",
	"show-default": "termly-style-show-default-f5d371",
	"modal-md": "termly-style-modal-md-98c9df",
	"modal-xl": "termly-style-modal-xl-4f103a",
	"modal-default": "termly-style-modal-default-55d109",
	"consent-banner": "termly-style-consent-banner-b6269f"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8105:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".termly-style-document-modal-container-c1ac2f{width:100%;height:60vh;overflow-y:auto;-webkit-overflow-scrolling:touch}.termly-style-document-modal-container-c1ac2f .termly-style-container-14abbf{position:relative}.termly-style-document-modal-container-c1ac2f .termly-style-container-14abbf .termly-style-loading-22691a{position:absolute;transform:translate(-50%, -50%);left:50%;top:50%}.termly-style-document-modal-container-c1ac2f .termly-style-container-14abbf .termly-style-iframe-18bd7b{width:100%;transition:.5s all;display:block}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"document-modal-container": "termly-style-document-modal-container-c1ac2f",
	"container": "termly-style-container-14abbf",
	"loading": "termly-style-loading-22691a",
	"iframe": "termly-style-iframe-18bd7b"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes termly-switch-bannerFadeIn-3d8dc5{0%{display:none;opacity:0}1%{display:block;opacity:0;bottom:-120px}100%{display:block;opacity:.98;bottom:0}}@keyframes termly-switch-bannerFadeInFromTop-8266d5{0%{display:none;opacity:0}1%{display:block;opacity:0;top:-120px}100%{display:block;opacity:.98;top:0}}@keyframes termly-switch-fadeIn-40f4d1{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:.98}}.termly-switch-switch-e6ba01{width:39px;height:20px;border-radius:100px;background:#868e96;display:inline-block;vertical-align:middle;padding:2px;cursor:pointer;margin-left:6px}@media only screen and (max-width: 768px){.termly-switch-switch-e6ba01{width:26px;height:13px}}.termly-switch-switch-e6ba01 .termly-switch-switch-button-caade0{border-radius:50%;background:white;transition:left .2s ease;position:relative;display:block;content:\"\";width:50%;height:100%;left:0}.termly-switch-checkbox-624d97{display:none}.termly-switch-checkbox-624d97:checked+.termly-switch-switch-e6ba01{background:#2bb4e0}.termly-switch-checkbox-624d97:checked+.termly-switch-switch-e6ba01 .termly-switch-switch-button-caade0{left:50%}.termly-switch-checkbox-624d97:disabled+.termly-switch-switch-e6ba01{background:#2bb4e0;opacity:.5}.termly-switch-checkbox-624d97:disabled+.termly-switch-switch-e6ba01 .termly-switch-switch-button-caade0{left:50%}.termly-switch-toggleStatus-ada5fd{cursor:pointer;user-select:none;letter-spacing:normal;font-size:12px;text-transform:none}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"switch": "termly-switch-switch-e6ba01",
	"switch-button": "termly-switch-switch-button-caade0",
	"checkbox": "termly-switch-checkbox-624d97",
	"toggleStatus": "termly-switch-toggleStatus-ada5fd",
	"bannerFadeIn": "termly-switch-bannerFadeIn-3d8dc5",
	"bannerFadeInFromTop": "termly-switch-bannerFadeInFromTop-8266d5",
	"fadeIn": "termly-switch-fadeIn-40f4d1"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3676:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes termly-accordion-bannerFadeIn-0c3090{0%{display:none;opacity:0}1%{display:block;opacity:0;bottom:-120px}100%{display:block;opacity:.98;bottom:0}}@keyframes termly-accordion-bannerFadeInFromTop-13abe5{0%{display:none;opacity:0}1%{display:block;opacity:0;top:-120px}100%{display:block;opacity:.98;top:0}}@keyframes termly-accordion-fadeIn-b3ac18{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:.98}}.termly-accordion-accordion-f504a4{margin:0;padding:0 40px;text-transform:none;opacity:1}@media only screen and (max-width: 768px){.termly-accordion-accordion-f504a4{padding:0}}.termly-accordion-accordion-f504a4 dl dt,.termly-accordion-accordion-f504a4 dl dd{display:block;margin:0;box-sizing:content-box}.termly-accordion-accordion-f504a4 dl{opacity:1;text-transform:none;font-size:1em}.termly-accordion-accordion-f504a4 input[type=\"checkbox\"]{display:none;margin:0}.termly-accordion-accordion-f504a4 input[type=\"checkbox\"]+label{display:inline-block}.termly-accordion-accordion-f504a4 label{margin:0}.termly-accordion-accordion-f504a4 .termly-accordion-title-703c2e{font-family:Roboto, Helvetica, Arial;font-size:17px;color:#3a3a3a;font-weight:500;padding:15px 0 5px;line-height:1.65;transform:translate3d(0, 0, 0);border-radius:3px 3px 0 0;clear:both;display:block;margin:0;box-sizing:content-box}@media only screen and (max-width: 768px){.termly-accordion-accordion-f504a4 .termly-accordion-title-703c2e{font-size:14px}}@media screen and (max-width: 374px){.termly-accordion-accordion-f504a4 .termly-accordion-title-703c2e{font-size:12px}}.termly-accordion-accordion-f504a4 .termly-accordion-content-f05af5{overflow:hidden;max-height:0;transition:max-height .5s;margin:0;padding:0;border-bottom:solid 1px #ededef;border-radius:0 0 3px 3px;display:block}@media only screen and (max-width: 768px){.termly-accordion-accordion-f504a4 .termly-accordion-content-f05af5{padding:0}}.termly-accordion-cookie-type-setting-259ce7{font-family:Roboto, Helvetica, Arial;font-size:12px;color:#8b93a7;position:absolute;right:0}@media only screen and (max-width: 768px){.termly-accordion-cookie-type-setting-259ce7{font-size:10px}}.termly-accordion-cookie-type-setting-259ce7 .termly-accordion-cookie-details-link-17f1a9{color:#0da3dc;text-decoration:underline;cursor:pointer;margin-right:10px}.termly-accordion-cookie-type-setting-259ce7 .termly-accordion-switch-content-9d16f8{display:inline-block}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"accordion": "termly-accordion-accordion-f504a4",
	"title": "termly-accordion-title-703c2e",
	"content": "termly-accordion-content-f05af5",
	"cookie-type-setting": "termly-accordion-cookie-type-setting-259ce7",
	"cookie-details-link": "termly-accordion-cookie-details-link-17f1a9",
	"switch-content": "termly-accordion-switch-content-9d16f8",
	"bannerFadeIn": "termly-accordion-bannerFadeIn-0c3090",
	"bannerFadeInFromTop": "termly-accordion-bannerFadeInFromTop-13abe5",
	"fadeIn": "termly-accordion-fadeIn-b3ac18"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5064:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_termly_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6127);
/* harmony import */ var _assets_images_termly_logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_termly_logo_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_close_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6644);
/* harmony import */ var _assets_images_close_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_close_icon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_icon_chevron_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9310);
/* harmony import */ var _assets_images_icon_chevron_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_icon_chevron_svg__WEBPACK_IMPORTED_MODULE_4__);
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()((_assets_images_termly_logo_svg__WEBPACK_IMPORTED_MODULE_2___default()));
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()((_assets_images_close_icon_svg__WEBPACK_IMPORTED_MODULE_3___default()));
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()((_assets_images_icon_chevron_svg__WEBPACK_IMPORTED_MODULE_4___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes termly-consent-banner-bannerFadeIn-370f52{0%{display:none;opacity:0}1%{display:block;opacity:0;bottom:-120px}100%{display:block;opacity:.98;bottom:0}}@keyframes termly-consent-banner-bannerFadeInFromTop-283d94{0%{display:none;opacity:0}1%{display:block;opacity:0;top:-120px}100%{display:block;opacity:.98;top:0}}@keyframes termly-consent-banner-fadeIn-7bdc5c{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:.98}}.termly-consent-banner-termly-banner-f68a55,.termly-consent-banner-termly-tooltip-c268b9{display:block;box-sizing:border-box;opacity:1;position:fixed;text-align:center;z-index:9999}.termly-consent-banner-termly-banner-f68a55[hidden],.termly-consent-banner-termly-tooltip-c268b9[hidden]{display:none}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735 p,.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 p{box-sizing:border-box;justify-content:space-between}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735 p>span,.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 p>span{display:inline-block;text-align:left;line-height:1.75;letter-spacing:normal;overflow:auto;max-height:70vh;box-sizing:border-box}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735 p>span::-webkit-scrollbar,.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 p>span::-webkit-scrollbar{color:inherit;width:7px}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735 p>span::-webkit-scrollbar-thumb,.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 p>span::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.5);border-radius:8px}@media only screen and (max-width: 768px){.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735 p,.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 p{text-align:center}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735 p>span,.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 p>span{display:block;width:100%;margin:0 auto 10px}}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-logo-d72fb8>p,.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p,.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-logo-d72fb8>p,.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735>p{margin:0 auto}.termly-consent-banner-logo-d72fb8{width:100%;max-width:1280px;margin:0 auto;padding:0;display:block;background-repeat:no-repeat;background-position:center;height:20px;background-size:132px 20px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.termly-consent-banner-termly-banner-f68a55{width:calc(100% - 40px);min-height:142px;margin:20px;padding:35px 40px;overflow:hidden;box-sizing:border-box;border-radius:5px;border-width:0;box-shadow:0 0 35px 0 rgba(0,0,0,0.2);left:0}@media only screen and (max-width: 768px){.termly-consent-banner-termly-banner-f68a55{width:calc(100% - 20px);margin:10px;padding:35px}}.termly-consent-banner-termly-banner-f68a55.termly-consent-banner-top-4e6e33{top:0;animation:termly-consent-banner-bannerFadeInFromTop-283d94 .8s}.termly-consent-banner-termly-banner-f68a55.termly-consent-banner-bottom-fde15d{bottom:0;animation:termly-consent-banner-bannerFadeIn-370f52 .8s}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-logo-d72fb8{background-position-x:left;margin-bottom:10px}@media only screen and (max-width: 768px){.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-logo-d72fb8{background-position-x:center;margin-bottom:15px}}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p{width:100%;max-width:1280px;box-sizing:border-box}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p>span{padding-right:14px}@media only screen and (max-width: 768px){.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p>span{padding:0;text-align:center}}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p{display:flex;align-items:center;justify-content:space-between}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p .termly-consent-banner-btn-container-ae12bd{display:block;white-space:nowrap}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p .termly-consent-banner-btn-container-ae12bd button{margin:0}@media only screen and (max-width: 768px){.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p .termly-consent-banner-btn-container-ae12bd button{margin:10px 7px 0 !important}}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p .termly-consent-banner-btn-container-ae12bd button+button{margin-left:14px}@media only screen and (max-width: 768px){.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p .termly-consent-banner-btn-container-ae12bd{width:100%;white-space:normal}}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p .termly-consent-banner-btn-container-ae12bd .termly-consent-banner-preference-button-02fef2{display:inline-block;margin-right:14px}@media only screen and (max-width: 768px){.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p .termly-consent-banner-btn-container-ae12bd .termly-consent-banner-preference-button-02fef2{display:none}}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p .termly-consent-banner-btn-container-ae12bd .termly-consent-banner-decline-button-d-a23ae4{display:inline-block;margin-right:14px}@media only screen and (max-width: 768px){.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p .termly-consent-banner-btn-container-ae12bd .termly-consent-banner-decline-button-d-a23ae4{display:none}}.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p .termly-consent-banner-btn-container-ae12bd .termly-consent-banner-decline-button-m-f51ed2{display:none}@media only screen and (max-width: 768px){.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p .termly-consent-banner-btn-container-ae12bd .termly-consent-banner-decline-button-m-f51ed2{display:inline-block}}@media only screen and (max-width: 768px){.termly-consent-banner-termly-banner-f68a55 .termly-consent-banner-content-302735>p{flex-direction:column}}.termly-consent-banner-termly-tooltip-c268b9{box-sizing:border-box;width:548px;max-width:calc(100vw - 40px);animation:termly-consent-banner-fadeIn-7bdc5c .8s;overflow:hidden;border-radius:5px;box-shadow:0 0 40px 0 rgba(0,0,0,0.25);border-width:0;padding:35px;margin:20px}@media only screen and (max-width: 768px){.termly-consent-banner-termly-tooltip-c268b9{width:548px;max-width:calc(100vw - 20px);margin:10px}}.termly-consent-banner-termly-tooltip-c268b9.termly-consent-banner-top_left-9eea4f{top:0;left:0}.termly-consent-banner-termly-tooltip-c268b9.termly-consent-banner-top_right-bc9d51{top:0;right:0}.termly-consent-banner-termly-tooltip-c268b9.termly-consent-banner-bottom_left-eabec1{left:0;bottom:0}.termly-consent-banner-termly-tooltip-c268b9.termly-consent-banner-bottom_right-746dff{right:0;bottom:0}.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-logo-d72fb8{margin:0 auto 15px}.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-logo-d72fb8 p{text-align:center;padding:11px 30px}.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 p span{text-align:center;padding:0;margin-bottom:10px}.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 .termly-consent-banner-btn-container-ae12bd{width:100%;text-align:center}.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 .termly-consent-banner-btn-container-ae12bd button{margin:10px 0 0}@media only screen and (max-width: 768px){.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 .termly-consent-banner-btn-container-ae12bd button{margin:10px 7px 0 !important}}.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 .termly-consent-banner-btn-container-ae12bd button+button{margin-left:14px}.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 .termly-consent-banner-btn-container-ae12bd .termly-consent-banner-decline-button-d-a23ae4{display:inline-block;margin-right:14px}@media only screen and (max-width: 768px){.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 .termly-consent-banner-btn-container-ae12bd .termly-consent-banner-decline-button-d-a23ae4{display:none}}.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 .termly-consent-banner-btn-container-ae12bd .termly-consent-banner-decline-button-m-f51ed2{display:none}@media only screen and (max-width: 768px){.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-content-302735 .termly-consent-banner-btn-container-ae12bd .termly-consent-banner-decline-button-m-f51ed2{display:inline-block}}.termly-consent-banner-termly-tooltip-c268b9 .termly-consent-banner-link-c3b554{color:inherit}.termly-consent-banner-termly-modal-bd5ddf{overflow:hidden;border-radius:5px;box-shadow:0 0 40px 0 rgba(0,0,0,0.25);box-sizing:border-box;border-width:0;width:548px;padding:35px;margin:20px}@media only screen and (max-width: 768px){.termly-consent-banner-termly-modal-bd5ddf{width:548px;max-width:calc(100vw - 20px);margin:10px}}.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-link-c3b554{text-decoration:underline;cursor:pointer;font-weight:bold}.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-power-header-948ead{height:53px;text-align:center;background-color:#2a2a2a;border-top-left-radius:5px;border-top-right-radius:5px;padding:12px 35px 11px 23px;box-sizing:border-box}.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-power-header-948ead img{display:inline-block;vertical-align:middle;width:141px;height:30px}.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-content-302735{line-height:1.75;letter-spacing:normal}.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-content-302735 a{font-weight:normal}.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-content-302735>span{display:inline-block;text-align:center;margin-bottom:10px}.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-content-302735 .termly-consent-banner-button-wrapper-b375e7{display:block;text-align:center}.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-content-302735 .termly-consent-banner-button-wrapper-b375e7 button{margin:10px 0 0}@media only screen and (max-width: 768px){.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-content-302735 .termly-consent-banner-button-wrapper-b375e7 button{margin:10px 7px 0 !important}}.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-content-302735 .termly-consent-banner-button-wrapper-b375e7 button+button{margin-left:14px}.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-content-302735 .termly-consent-banner-button-wrapper-b375e7 .termly-consent-banner-decline-button-d-a23ae4{display:inline-block;margin-right:14px}@media only screen and (max-width: 768px){.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-content-302735 .termly-consent-banner-button-wrapper-b375e7 .termly-consent-banner-decline-button-d-a23ae4{display:none}}.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-content-302735 .termly-consent-banner-button-wrapper-b375e7 .termly-consent-banner-decline-button-m-f51ed2{display:none}@media only screen and (max-width: 768px){.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-content-302735 .termly-consent-banner-button-wrapper-b375e7 .termly-consent-banner-decline-button-m-f51ed2{display:inline-block}}.termly-consent-banner-termly-modal-bd5ddf .termly-consent-banner-content-302735 .termly-consent-banner-logo-container-a90996{width:100%;margin-bottom:15px}.termly-consent-banner-preference-modal-8c3834{text-align:left;position:relative;padding-top:30px}.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-close-tag-container-5b6b86{width:100%;height:10px;position:relative;margin-bottom:10px}.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-close-tag-container-5b6b86 .termly-consent-banner-close-tag-c80607{width:10px;height:10px;background-size:10px 10px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");position:absolute;top:0;right:30px;cursor:pointer}.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-power-header-948ead{padding:15px;background:#0da3dc;border-radius:3px 3px 0 0;text-align:center}.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-preference-container-48a972{padding:0;padding-bottom:30px;max-height:500px;overflow-y:auto}@media only screen and (max-width: 768px){.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-preference-container-48a972{padding:15px;max-height:443px}}.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-preference-title-256288{font-family:Roboto, Helvetica, Arial;font-size:21px;font-weight:500;line-height:1.24;color:#3b3b3b;margin:0;padding:30px 40px 11px}@media only screen and (max-width: 768px){.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-preference-title-256288{padding:30px 0}}.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-cookie-details-title-b0978a{font-family:Roboto, Helvetica, Arial;font-size:26px;font-weight:600;line-height:1.38;color:#3b3b3b;margin:0;padding:20px 40px}@media only screen and (max-width: 768px){.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-cookie-details-title-b0978a{padding:30px 0}}.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-back-button-d55a0c{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat 11px center;margin:30px 40px 0;padding-left:25px;width:69px;height:30px;border-radius:5px;border:1px solid #808ba4;cursor:pointer;font-family:Roboto, Helvetica, Arial;font-size:14px;font-weight:600;line-height:30px;color:#808ba4;box-sizing:border-box}@media only screen and (max-width: 768px){.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-back-button-d55a0c{margin-left:0}}.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-description-91d946{font-family:Roboto, Helvetica, Arial;font-size:13px;font-weight:normal;line-height:1.62;color:#3b3b3b;border-bottom:solid 1px #ededef;padding:0 40px 15px;margin:0}@media only screen and (max-width: 768px){.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-description-91d946{padding:0 0 15px}}.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-policy-link-719bdc{color:#0da3dc;text-decoration:underline;cursor:pointer}.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-footer-f8c175{padding:15px 25px;text-align:right;border-top:1px solid #e6e6e6}@media only screen and (max-width: 768px){.termly-consent-banner-preference-modal-8c3834 .termly-consent-banner-footer-f8c175{padding:17px 15px;display:flex;justify-content:flex-end}}.termly-consent-banner-preference-description-71a5c2{font-family:Roboto, Helvetica, Arial;font-size:12px;color:#8b93a7;width:100%;line-height:1.67;margin:0 0 15px}.termly-consent-banner-table-view-ba2ae0{border:1px solid #e6e6e6;margin:0 0 10px;border-radius:3px;padding:8px 10px;position:relative;min-height:50px}@media only screen and (max-width: 768px){.termly-consent-banner-table-view-ba2ae0{border:0;border-top:1px solid #e6e6e6;padding:8px 0}}.termly-consent-banner-table-view-ba2ae0 .termly-consent-banner-content-302735{min-width:65px;font-family:Roboto, Helvetica, Arial;font-size:12px;line-height:1.67;margin:0 0 8px}.termly-consent-banner-table-view-ba2ae0 .termly-consent-banner-content-302735 .termly-consent-banner-item-title-68a885{text-align:right;color:#19243c;width:60px;vertical-align:top}.termly-consent-banner-table-view-ba2ae0 .termly-consent-banner-content-302735 .termly-consent-banner-item-value-78b5c7{color:#8b93a7;padding-left:5px;display:inline-block;overflow-wrap:break-word}.termly-consent-banner-table-view-ba2ae0 .termly-consent-banner-content-302735 .termly-consent-banner-service-policy-link-66ebb4{color:#1a98eb;text-decoration:underline;cursor:pointer}.termly-consent-banner-table-view-ba2ae0 .termly-consent-banner-show-link-46c415{font-family:Roboto, Helvetica, Arial;color:#1a98eb;font-size:12px;text-decoration:underline;cursor:pointer;display:block;text-align:right;margin:5px 0 0}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"termly-banner": "termly-consent-banner-termly-banner-f68a55",
	"termly-tooltip": "termly-consent-banner-termly-tooltip-c268b9",
	"content": "termly-consent-banner-content-302735",
	"logo": "termly-consent-banner-logo-d72fb8",
	"top": "termly-consent-banner-top-4e6e33",
	"bannerFadeInFromTop": "termly-consent-banner-bannerFadeInFromTop-283d94",
	"bottom": "termly-consent-banner-bottom-fde15d",
	"bannerFadeIn": "termly-consent-banner-bannerFadeIn-370f52",
	"btn-container": "termly-consent-banner-btn-container-ae12bd",
	"preference-button": "termly-consent-banner-preference-button-02fef2",
	"decline-button-d": "termly-consent-banner-decline-button-d-a23ae4",
	"decline-button-m": "termly-consent-banner-decline-button-m-f51ed2",
	"fadeIn": "termly-consent-banner-fadeIn-7bdc5c",
	"top_left": "termly-consent-banner-top_left-9eea4f",
	"top_right": "termly-consent-banner-top_right-bc9d51",
	"bottom_left": "termly-consent-banner-bottom_left-eabec1",
	"bottom_right": "termly-consent-banner-bottom_right-746dff",
	"link": "termly-consent-banner-link-c3b554",
	"termly-modal": "termly-consent-banner-termly-modal-bd5ddf",
	"power-header": "termly-consent-banner-power-header-948ead",
	"button-wrapper": "termly-consent-banner-button-wrapper-b375e7",
	"logo-container": "termly-consent-banner-logo-container-a90996",
	"preference-modal": "termly-consent-banner-preference-modal-8c3834",
	"close-tag-container": "termly-consent-banner-close-tag-container-5b6b86",
	"close-tag": "termly-consent-banner-close-tag-c80607",
	"preference-container": "termly-consent-banner-preference-container-48a972",
	"preference-title": "termly-consent-banner-preference-title-256288",
	"cookie-details-title": "termly-consent-banner-cookie-details-title-b0978a",
	"back-button": "termly-consent-banner-back-button-d55a0c",
	"description": "termly-consent-banner-description-91d946",
	"policy-link": "termly-consent-banner-policy-link-719bdc",
	"footer": "termly-consent-banner-footer-f8c175",
	"preference-description": "termly-consent-banner-preference-description-71a5c2",
	"table-view": "termly-consent-banner-table-view-ba2ae0",
	"item-title": "termly-consent-banner-item-title-68a885",
	"item-value": "termly-consent-banner-item-value-78b5c7",
	"service-policy-link": "termly-consent-banner-service-policy-link-66ebb4",
	"show-link": "termly-consent-banner-show-link-46c415"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function(){};

  return list;
};

/***/ }),

/***/ 1667:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 531:
/***/ ((module) => {

"use strict";

module.exports = function (hex) {
	if (typeof hex !== 'string') {
		throw new TypeError('Expected a string');
	}

	hex = hex.replace(/^#/, '');

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	var num = parseInt(hex, 16);

	return [num >> 16, num >> 8 & 255, num & 255];
};


/***/ }),

/***/ 7418:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function(){}

function(){}

module.exports = shouldUseNative() ? Object.assign : function(){};


/***/ }),

/***/ 2703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(414);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function(){};


/***/ }),

/***/ 5697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2703)();
}


/***/ }),

/***/ 414:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 4448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/** @license React v16.9.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(7294),m=__webpack_require__(7418),q=__webpack_require__(3840);function t(a){for(var b=a.message,c="https://reactjs.org/docs/error-decoder.html?invariant="+b,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);a.message="Minified React error #"+b+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}if(!aa)throw t(Error(227));var ba=null,ca={};
function(){}
function(){}var ea=[],fa={},ia={},ja={};function ka(a,b,c,d,e,f,h,g,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var la=!1,ma=null,na=!1,oa=null,pa={onError:function(){}};function(){}
function(){}var sa=null,ta=null,va=null;function(){}function(){}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function(){}function(){}
var Ca={injectEventPluginOrder:function(){},injectEventPluginsByName:function(){}};
function(){}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function(){}function(){}function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;throw t(Error(33));}function Ka(a){return a[Ga]||null}function(){}
function(){}function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}
function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement);
function(){}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function(){}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),ab=Wa("transitionend"),bb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=null,db=null,eb=null;
function(){}function gb(){return!0}function hb(){return!1}
function(){}
m(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=gb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=gb)},persist:function(){this.isPersistent=gb},isPersistent:hb,destructor:function(){}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(){};ib(y);function(){}
function(){}function(){}var lb=y.extend({data:null}),mb=y.extend({data:null}),nb=[9,13,27,32],ob=Ra&&"CompositionEvent"in window,pb=null;Ra&&"documentMode"in document&&(pb=document.documentMode);
var qb=Ra&&"TextEvent"in window&&!pb,sb=Ra&&(!ob||pb&&8<pb&&11>=pb),tb=String.fromCharCode(32),ub={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vb=!1;
function wb(a,b){switch(a){case "keyup":return-1!==nb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function(){}var yb=!1;function(){}
function(){}
var Cb={eventTypes:ub,extractEvents:function(){}},Db=null,Eb=null,Fb=null;function(){}function Hb(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a}function(){}
function Jb(a,b){return a(b)}function Kb(a,b,c,d){return a(b,c,d)}function Lb(){}var Mb=Jb,Nb=!1;function(){}var Pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function(){}
function(){}function(){}function Tb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function(){}function(){}function(){}var Xb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Xb.hasOwnProperty("ReactCurrentDispatcher")||(Xb.ReactCurrentDispatcher={current:null});Xb.hasOwnProperty("ReactCurrentBatchConfig")||(Xb.ReactCurrentBatchConfig={suspense:null});
var Yb=/^(.*)[\\\/]/,B="function"===typeof Symbol&&Symbol.for,Zb=B?Symbol.for("react.element"):60103,$b=B?Symbol.for("react.portal"):60106,ac=B?Symbol.for("react.fragment"):60107,bc=B?Symbol.for("react.strict_mode"):60108,cc=B?Symbol.for("react.profiler"):60114,dc=B?Symbol.for("react.provider"):60109,ec=B?Symbol.for("react.context"):60110,fc=B?Symbol.for("react.concurrent_mode"):60111,gc=B?Symbol.for("react.forward_ref"):60112,hc=B?Symbol.for("react.suspense"):60113,ic=B?Symbol.for("react.suspense_list"):
60120,jc=B?Symbol.for("react.memo"):60115,kc=B?Symbol.for("react.lazy"):60116;B&&Symbol.for("react.fundamental");B&&Symbol.for("react.responder");var lc="function"===typeof Symbol&&Symbol.iterator;function(){}
function(){}function(){}
var qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rc=Object.prototype.hasOwnProperty,sc={},tc={};
function(){}function(){}
function(){}function(){}var F={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){F[a]=new D(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];F[b]=new D(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){F[a]=new D(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){F[a]=new D(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){F[a]=new D(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){F[a]=new D(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){F[a]=new D(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){F[a]=new D(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){F[a]=new D(a,5,!1,a.toLowerCase(),null,!1)});var xc=/[\-:]([a-z])/g;function yc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(xc,
yc);F[b]=new D(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(xc,yc);F[b]=new D(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(xc,yc);F[b]=new D(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){F[a]=new D(a,1,!1,a.toLowerCase(),null,!1)});
F.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){F[a]=new D(a,1,!1,a.toLowerCase(),null,!0)});
function(){}
function Ac(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Bc(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function(){}function(){}
function(){}
function(){}
function(){}var Hc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function(){}var Jc=null,Kc=null;function Lc(a){Ba(a)}
function(){}function Nc(a,b){if("change"===a)return b}var Oc=!1;Ra&&(Oc=Sb("input")&&(!document.documentMode||9<document.documentMode));function Pc(){Jc&&(Jc.detachEvent("onpropertychange",Qc),Kc=Jc=null)}function Qc(a){if("value"===a.propertyName&&Mc(Kc))if(a=Ic(Kc,a,Rb(a)),Nb)Ba(a);else{Nb=!0;try{Jb(Lc,a)}finally{Nb=!1,Ob()}}}function(){}
function Sc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Mc(Kc)}function Tc(a,b){if("click"===a)return Mc(b)}function Uc(a,b){if("input"===a||"change"===a)return Mc(b)}
var Vc={eventTypes:Hc,_isInputEventSupported:Oc,extractEvents:function(){}},Wc=y.extend({view:null,detail:null}),Xc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function(){}function Zc(){return Yc}
var $c=0,ad=0,bd=!1,cd=!1,dd=Wc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Zc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=$c;$c=a.screenX;return bd?"mousemove"===a.type?a.screenX-b:0:(bd=!0,0)},movementY:function(){}}),ed=dd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},gd={eventTypes:fd,extractEvents:function(){}};function(){}var id=Object.prototype.hasOwnProperty;
function jd(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!id.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function kd(a,b){return{responder:a,props:b}}new Map;new Map;new Set;new Map;
function(){}function(){}
function(){}function(){}
var rd=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),sd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),td=Wc.extend({relatedTarget:null});function(){}
var vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd=Wc.extend({key:function(){},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Zc,charCode:function(a){return"keypress"===
a.type?ud(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ud(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),yd=dd.extend({dataTransfer:null}),zd=Wc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Zc}),Ad=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Bd=dd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Cd=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],
["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",
1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",2],[Xa,"animationEnd",2],[Ya,"animationIteration",2],[Za,"animationStart",2],["canplay","canPlay",2],["canplaythrough",
"canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress","progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",
2],[ab,"transitionEnd",2],["waiting","waiting",2]],Dd={},Ed={},Fd=0;for(;Fd<Cd.length;Fd++){var Gd=Cd[Fd],Hd=Gd[0],Id=Gd[1],Jd=Gd[2],Kd="on"+(Id[0].toUpperCase()+Id.slice(1)),Ld={phasedRegistrationNames:{bubbled:Kd,captured:Kd+"Capture"},dependencies:[Hd],eventPriority:Jd};Dd[Id]=Ld;Ed[Hd]=Ld}
var Md={eventTypes:Dd,getEventPriority:function(){},extractEvents:function(){}},Nd=Md.getEventPriority,Od=[];
function(){}var Qd=!0;function G(a,b){Rd(b,a,!1)}
function(){}function(){}function(){}
function(){}var Vd=new ("function"===typeof WeakMap?WeakMap:Map);
function(){}function(){}function Yd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function(){}function(){}
function(){}function be(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var ce=Ra&&"documentMode"in document&&11>=document.documentMode,de={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ee=null,fe=null,ge=null,he=!1;
function(){}
var je={eventTypes:de,extractEvents:function(){}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));sa=Ka;ta=Ia;va=Ja;Ca.injectEventPluginsByName({SimpleEventPlugin:Md,EnterLeaveEventPlugin:gd,ChangeEventPlugin:Vc,SelectEventPlugin:je,BeforeInputEventPlugin:Cb});function(){}
function(){}function(){}
function ne(a,b){if(null!=b.dangerouslySetInnerHTML)throw t(Error(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function(){}
function(){}function qe(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var re={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function se(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function te(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?se(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ue=void 0,ve=function(){}(function(){});
function(){}
var xe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ye=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(){});function ze(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||xe.hasOwnProperty(a)&&xe[a]?(""+b).trim():b+"px"}
function(){}var Ce=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function(){}
function Ee(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function(){}function Ge(){}var He=null,Ie=null;
function Je(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ke(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Le="function"===typeof setTimeout?setTimeout:void 0,Me="function"===typeof clearTimeout?clearTimeout:void 0;
function Ne(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}new Set;var Oe=[],Pe=-1;function H(a){0>Pe||(a.current=Oe[Pe],Oe[Pe]=null,Pe--)}function(){}var Qe={},L={current:Qe},M={current:!1},Re=Qe;
function(){}function(){}function Te(a){H(M,a);H(L,a)}function(){}
function(){}function(){}function(){}
function(){}
var Ze=q.unstable_runWithPriority,$e=q.unstable_scheduleCallback,af=q.unstable_cancelCallback,bf=q.unstable_shouldYield,cf=q.unstable_requestPaint,df=q.unstable_now,ef=q.unstable_getCurrentPriorityLevel,ff=q.unstable_ImmediatePriority,hf=q.unstable_UserBlockingPriority,jf=q.unstable_NormalPriority,kf=q.unstable_LowPriority,lf=q.unstable_IdlePriority,mf={},nf=void 0!==cf?cf:function(){},of=null,pf=null,qf=!1,rf=df(),sf=1E4>rf?df:function(){return df()-rf};
function tf(){switch(ef()){case ff:return 99;case hf:return 98;case jf:return 97;case kf:return 96;case lf:return 95;default:throw t(Error(332));}}function uf(a){switch(a){case 99:return ff;case 98:return hf;case 97:return jf;case 96:return kf;case 95:return lf;default:throw t(Error(332));}}function(){}function(){}function(){}function(){}
function(){}function(){}function(){}
function(){}var Cf={current:null},Df=null,Ef=null,Ff=null;function Gf(){Ff=Ef=Df=null}
function(){}function(){}function(){}
function(){}function(){}var Nf=!1;
function Of(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Pf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Qf(a,b){return{expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Rf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function(){}
function(){}function(){}
function(){}
function(){}
function(){}function(){}
var $f=Xb.ReactCurrentBatchConfig,ag=(new aa.Component).refs;function(){}
var fg={isMounted:function(){},enqueueSetState:function(){},enqueueReplaceState:function(){},enqueueForceUpdate:function(){}};function(){}
function(){}
function(){}
function(){}var kg=Array.isArray;
function(){}
function(){}
function(){}var tg=ng(!0),ug=ng(!1),vg={},wg={current:vg},xg={current:vg},yg={current:vg};function zg(a){if(a===vg)throw t(Error(174));return a}
function(){}function(){}function(){}function(){}var Eg=1,Fg=1,Gg=2,P={current:0};
function(){}
var Ig=0,Jg=2,Kg=4,Lg=8,Mg=16,Ng=32,Og=64,Pg=128,Qg=Xb.ReactCurrentDispatcher,Rg=0,Sg=null,Q=null,Tg=null,Ug=null,R=null,Vg=null,Wg=0,Xg=null,Yg=0,Zg=!1,$g=null,ah=0;function bh(){throw t(Error(321));}function ch(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!hd(a[c],b[c]))return!1;return!0}
function(){}
function(){}function(){}function(){}
function lh(a,b){return"function"===typeof b?b(a):b}
function mh(a){var b=kh(),c=b.queue;if(null===c)throw t(Error(311));c.lastRenderedReducer=a;if(0<ah){var d=c.dispatch;if(null!==$g){var e=$g.get(c);if(void 0!==e){$g.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);hd(f,b.memoizedState)||(Lf=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var h=b.baseUpdate;f=b.baseState;null!==h?(null!==d&&(d.next=null),d=h.next):d=null!==d?d.next:null;if(null!==
d){var g=e=null,k=d,l=!1;do{var n=k.expirationTime;n<Rg?(l||(l=!0,g=h,e=f),n>Wg&&(Wg=n)):(Xf(n,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));h=k;k=k.next}while(null!==k&&k!==d);l||(g=h,e=f);hd(f,b.memoizedState)||(Lf=!0);b.memoizedState=f;b.baseUpdate=g;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function(){}function(){}
function(){}function(){}function rh(){}
function(){}
var hh={readContext:Mf,useCallback:bh,useContext:bh,useEffect:bh,useImperativeHandle:bh,useLayoutEffect:bh,useMemo:bh,useReducer:bh,useRef:bh,useState:bh,useDebugValue:bh,useResponder:bh},eh={readContext:Mf,useCallback:function(){},useContext:Mf,useEffect:function(a,b){return oh(516,Pg|Og,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return oh(4,Kg|Ng,qh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return oh(4,
Kg|Ng,a,b)},useMemo:function(){},useReducer:function(){},useRef:function(){},useState:function(){},useDebugValue:rh,useResponder:kd},fh={readContext:Mf,useCallback:function(){},useContext:Mf,useEffect:function(){},useImperativeHandle:function(){},useLayoutEffect:function(a,b){return ph(4,Kg|Ng,a,b)},useMemo:function(){},useReducer:mh,useRef:function(){},useState:function(a){return mh(lh,a)},useDebugValue:rh,useResponder:kd},th=null,uh=null,vh=!1;
function(){}function(){}
function(){}function Ah(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;th=a}
function(){}function(){}var Dh=Xb.ReactCurrentOwner,Lf=!1;function S(a,b,c,d){b.child=null===a?ug(b,null,c,d):tg(b,a.child,c,d)}
function(){}
function(){}
function Ih(a,b,c,d,e,f){return null!==a&&jd(a.memoizedProps,d)&&a.ref===b.ref&&(Lf=!1,e<f)?Fh(a,b,f):Jh(a,b,c,d,f)}function(){}function(){}
function(){}
function(){}function(){}
var Oh={};
function(){}function(){}
function(){}function(){}function Sh(a){a.effectTag|=4}
var Th=void 0,Uh=void 0,Vh=void 0,Wh=void 0;Th=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(20===c.tag)a.appendChild(c.stateNode.instance);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Uh=function(){};
Vh=function(){};Wh=function(a,b,c,d){c!==d&&Sh(b)};
function $h(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function ai(a){switch(a.tag){case 1:N(a.type)&&Te(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:Bg(a);Ue(a);b=a.effectTag;if(0!==(b&64))throw t(Error(285));a.effectTag=b&-2049|64;return a;case 5:return Dg(a),null;case 13:return H(P,a),b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 19:return H(P,a),null;case 4:return Bg(a),null;case 10:return If(a),null;default:return null}}function bi(a,b){return{value:a,source:b,stack:pc(b)}}
var ci="function"===typeof WeakSet?WeakSet:Set;function(){}function(){}function gi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){fi(a,c)}else b.current=null}
function(){}
function(){}
function(){}function mi(a){return 5===a.tag||3===a.tag||4===a.tag}
function(){}
function(){}
function(){}function(){}var si="function"===typeof WeakMap?WeakMap:Map;
function(){}
function(){}
var yi=Math.ceil,zi=Xb.ReactCurrentDispatcher,Ai=Xb.ReactCurrentOwner,T=0,Bi=8,Ci=16,Di=32,Ei=0,Fi=1,Gi=2,Hi=3,Ii=4,U=T,Ji=null,V=null,W=0,X=Ei,Ki=1073741823,Li=1073741823,Mi=null,Ni=!1,pi=0,Oi=500,Y=null,ui=!1,vi=null,xi=null,Pi=!1,Qi=null,Ri=90,Si=0,Ti=null,Ui=0,Vi=null,Wi=0;function cg(){return(U&(Ci|Di))!==T?1073741821-(sf()/10|0):0!==Wi?Wi:Wi=1073741821-(sf()/10|0)}
function(){}var Xi=0;
function eg(a,b){if(50<Ui)throw Ui=0,Vi=null,t(Error(185));a=Yi(a,b);if(null!==a){a.pingTime=0;var c=tf();if(1073741823===b)if((U&Bi)!==T&&(U&(Ci|Di))===T)for(var d=Z(a,1073741823,!0);null!==d;)d=d(!0);else Zi(a,99,1073741823),U===T&&O();else Zi(a,c,b);(U&4)===T||98!==c&&99!==c||(null===Ti?Ti=new Map([[a,b]]):(c=Ti.get(a),(void 0===c||c>b)&&Ti.set(a,b)))}}
function(){}function(){}function(){}
function(){}function(){}function(){}function(){}function(){}
function(){}
function(){}
function Z(a,b,c){if((U&(Ci|Di))!==T)throw t(Error(327));if(a.firstPendingTime<b)return null;if(c&&a.finishedExpirationTime===b)return ij.bind(null,a);cj();if(a!==Ji||b!==W)hj(a,b);else if(X===Hi)if(Ni)hj(a,b);else{var d=a.lastPendingTime;if(d<b)return Z.bind(null,a,d)}if(null!==V){d=U;U|=Ci;var e=zi.current;null===e&&(e=hh);zi.current=hh;if(c){if(1073741823!==b){var f=cg();if(f<b)return U=d,Gf(),zi.current=e,Z.bind(null,a,f)}}else Wi=0;do try{if(c)for(;null!==V;)V=jj(V);else for(;null!==V&&!bf();)V=
jj(V);break}catch(rb){Gf();ih();f=V;if(null===f||null===f.return)throw hj(a,b),U=d,rb;a:{var h=a,g=f.return,k=f,l=rb,n=W;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===typeof l&&"function"===typeof l.then){var z=l,x=0!==(P.current&Fg);l=g;do{var v;if(v=13===l.tag)null!==l.memoizedState?v=!1:(v=l.memoizedProps,v=void 0===v.fallback?!1:!0!==v.unstable_avoidThisFallback?!0:x?!1:!0);if(v){g=l.updateQueue;null===g?(g=new Set,g.add(z),l.updateQueue=g):g.add(z);if(0===(l.mode&
2)){l.effectTag|=64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(n=Qf(1073741823,null),n.tag=2,Sf(k,n)));k.expirationTime=1073741823;break a}k=h;h=n;x=k.pingCache;null===x?(x=k.pingCache=new si,g=new Set,x.set(z,g)):(g=x.get(z),void 0===g&&(g=new Set,x.set(z,g)));g.has(h)||(g.add(h),k=kj.bind(null,k,z,h),z.then(k,k));l.effectTag|=2048;l.expirationTime=n;break a}l=l.return}while(null!==l);l=Error((oc(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
pc(k))}X!==Ii&&(X=Fi);l=bi(l,k);k=g;do{switch(k.tag){case 3:k.effectTag|=2048;k.expirationTime=n;n=ti(k,l,n);Tf(k,n);break a;case 1:if(z=l,h=k.type,g=k.stateNode,0===(k.effectTag&64)&&("function"===typeof h.getDerivedStateFromError||null!==g&&"function"===typeof g.componentDidCatch&&(null===xi||!xi.has(g)))){k.effectTag|=2048;k.expirationTime=n;n=wi(k,z,n);Tf(k,n);break a}}k=k.return}while(null!==k)}V=lj(f)}while(1);U=d;Gf();zi.current=e;if(null!==V)return Z.bind(null,a,b)}a.finishedWork=a.current.alternate;
a.finishedExpirationTime=b;if(dj(a,b))return null;Ji=null;switch(X){case Ei:throw t(Error(328));case Fi:return d=a.lastPendingTime,d<b?Z.bind(null,a,d):c?ij.bind(null,a):(hj(a,b),xf(Z.bind(null,a,b)),null);case Gi:if(1073741823===Ki&&!c&&(c=pi+Oi-sf(),10<c)){if(Ni)return hj(a,b),Z.bind(null,a,b);d=a.lastPendingTime;if(d<b)return Z.bind(null,a,d);a.timeoutHandle=Le(ij.bind(null,a),c);return null}return ij.bind(null,a);case Hi:if(!c){if(Ni)return hj(a,b),Z.bind(null,a,b);c=a.lastPendingTime;if(c<b)return Z.bind(null,
a,c);1073741823!==Li?c=10*(1073741821-Li)-sf():1073741823===Ki?c=0:(c=10*(1073741821-Ki)-5E3,d=sf(),b=10*(1073741821-b)-d,c=d-c,0>c&&(c=0),c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>c?4320:1960*yi(c/1960))-c,b<c&&(c=b));if(10<c)return a.timeoutHandle=Le(ij.bind(null,a),c),null}return ij.bind(null,a);case Ii:return!c&&1073741823!==Ki&&null!==Mi&&(d=Ki,e=Mi,b=e.busyMinDurationMs|0,0>=b?b=0:(c=e.busyDelayMs|0,d=sf()-(10*(1073741821-d)-(e.timeoutMs|0||5E3)),b=d<=c?0:c+b-d),10<b)?(a.timeoutHandle=
Le(ij.bind(null,a),b),null):ij.bind(null,a);default:throw t(Error(329));}}function(){}function(){}
function lj(a){V=a;do{var b=V.alternate;a=V.return;if(0===(V.effectTag&1024)){a:{var c=b;b=V;var d=W,e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:N(b.type)&&Te(b);break;case 3:Bg(b);Ue(b);d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===c||null===c.child)Bh(b),b.effectTag&=-3;Uh(b);break;case 5:Dg(b);d=zg(yg.current);var f=b.type;if(null!==c&&null!=b.stateNode)Vh(c,b,f,e,d),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var h=
zg(wg.current);if(Bh(b)){c=b;e=void 0;f=c.stateNode;var g=c.type,k=c.memoizedProps;f[Fa]=c;f[Ga]=k;switch(g){case "iframe":case "object":case "embed":G("load",f);break;case "video":case "audio":for(var l=0;l<bb.length;l++)G(bb[l],f);break;case "source":G("error",f);break;case "img":case "image":case "link":G("error",f);G("load",f);break;case "form":G("reset",f);G("submit",f);break;case "details":G("toggle",f);break;case "input":Cc(f,k);G("invalid",f);Fe(d,"onChange");break;case "select":f._wrapperState=
{wasMultiple:!!k.multiple};G("invalid",f);Fe(d,"onChange");break;case "textarea":oe(f,k),G("invalid",f),Fe(d,"onChange")}De(g,k);l=null;for(e in k)k.hasOwnProperty(e)&&(h=k[e],"children"===e?"string"===typeof h?f.textContent!==h&&(l=["children",h]):"number"===typeof h&&f.textContent!==""+h&&(l=["children",""+h]):ia.hasOwnProperty(e)&&null!=h&&Fe(d,e));switch(g){case "input":Vb(f);Gc(f,k,!0);break;case "textarea":Vb(f);qe(f,k);break;case "select":case "option":break;default:"function"===typeof k.onClick&&
(f.onclick=Ge)}d=l;c.updateQueue=d;null!==d&&Sh(b)}else{k=f;c=e;g=b;l=9===d.nodeType?d:d.ownerDocument;h===re.html&&(h=se(k));h===re.html?"script"===k?(k=l.createElement("div"),k.innerHTML="<script>\x3c/script>",l=k.removeChild(k.firstChild)):"string"===typeof c.is?l=l.createElement(k,{is:c.is}):(l=l.createElement(k),"select"===k&&(k=l,c.multiple?k.multiple=!0:c.size&&(k.size=c.size))):l=l.createElementNS(h,k);k=l;k[Fa]=g;k[Ga]=c;c=k;Th(c,b,!1,!1);g=c;var n=d,z=Ee(f,e);switch(f){case "iframe":case "object":case "embed":G("load",
g);d=e;break;case "video":case "audio":for(d=0;d<bb.length;d++)G(bb[d],g);d=e;break;case "source":G("error",g);d=e;break;case "img":case "image":case "link":G("error",g);G("load",g);d=e;break;case "form":G("reset",g);G("submit",g);d=e;break;case "details":G("toggle",g);d=e;break;case "input":Cc(g,e);d=Bc(g,e);G("invalid",g);Fe(n,"onChange");break;case "option":d=le(g,e);break;case "select":g._wrapperState={wasMultiple:!!e.multiple};d=m({},e,{value:void 0});G("invalid",g);Fe(n,"onChange");break;case "textarea":oe(g,
e);d=ne(g,e);G("invalid",g);Fe(n,"onChange");break;default:d=e}De(f,d);k=void 0;l=f;h=g;var x=d;for(k in x)if(x.hasOwnProperty(k)){var v=x[k];"style"===k?Ae(h,v):"dangerouslySetInnerHTML"===k?(v=v?v.__html:void 0,null!=v&&ve(h,v)):"children"===k?"string"===typeof v?("textarea"!==l||""!==v)&&we(h,v):"number"===typeof v&&we(h,""+v):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ia.hasOwnProperty(k)?null!=v&&Fe(n,k):null!=v&&zc(h,k,v,z))}switch(f){case "input":Vb(g);
Gc(g,e,!1);break;case "textarea":Vb(g);qe(g,e);break;case "option":null!=e.value&&g.setAttribute("value",""+Ac(e.value));break;case "select":d=g;g=e;d.multiple=!!g.multiple;k=g.value;null!=k?me(d,!!g.multiple,k,!1):null!=g.defaultValue&&me(d,!!g.multiple,g.defaultValue,!0);break;default:"function"===typeof d.onClick&&(g.onclick=Ge)}Je(f,e)&&Sh(b);b.stateNode=c}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw t(Error(166));break;case 6:if(c&&null!=b.stateNode)Wh(c,b,c.memoizedProps,
e);else{if("string"!==typeof e&&null===b.stateNode)throw t(Error(166));c=zg(yg.current);zg(wg.current);Bh(b)?(d=b.stateNode,c=b.memoizedProps,d[Fa]=b,d.nodeValue!==c&&Sh(b)):(d=b,c=(9===c.nodeType?c:c.ownerDocument).createTextNode(e),c[Fa]=b,d.stateNode=c)}break;case 11:break;case 13:H(P,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}d=null!==e;e=!1;null===c?Bh(b):(f=c.memoizedState,e=null!==f,d||null===f||(f=c.child.sibling,null!==f&&(g=b.firstEffect,null!==g?(b.firstEffect=
f,f.nextEffect=g):(b.firstEffect=b.lastEffect=f,f.nextEffect=null),f.effectTag=8)));if(d&&!e&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&Fg))X===Ei&&(X=Gi);else if(X===Ei||X===Gi)X=Hi;if(d||e)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Bg(b);Uh(b);break;case 10:If(b);break;case 9:break;case 14:break;case 17:N(b.type)&&Te(b);break;case 18:break;case 19:H(P,b);e=b.memoizedState;if(null===e)break;f=0!==(b.effectTag&64);g=e.rendering;
if(null===g)if(f)$h(e,!1);else{if(X!==Ei||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){g=Hg(c);if(null!==g){b.effectTag|=64;$h(e,!1);c=g.updateQueue;null!==c&&(b.updateQueue=c,b.effectTag|=4);b.firstEffect=b.lastEffect=null;for(c=b.child;null!==c;)e=c,f=d,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,g=e.alternate,null===g?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=
g.childExpirationTime,e.expirationTime=g.expirationTime,e.child=g.child,e.memoizedProps=g.memoizedProps,e.memoizedState=g.memoizedState,e.updateQueue=g.updateQueue,f=g.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),c=c.sibling;J(P,P.current&Eg|Gg,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=Hg(g),null!==c){if(b.effectTag|=64,f=!0,$h(e,!0),null===e.tail&&"hidden"===e.tailMode){d=c.updateQueue;null!==d&&(b.updateQueue=
d,b.effectTag|=4);b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else sf()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,$h(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(g.sibling=b.child,b.child=g):(d=e.last,null!==d?d.sibling=g:b.child=g,e.last=g)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=sf()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;e.lastEffect=b.lastEffect;d.sibling=null;c=P.current;c=f?c&Eg|Gg:c&Eg;J(P,c,b);b=d;break a}break;case 20:break;
default:throw t(Error(156));}b=null}d=V;if(1===W||1!==d.childExpirationTime){c=0;for(e=d.child;null!==e;)f=e.expirationTime,g=e.childExpirationTime,f>c&&(c=f),g>c&&(c=g),e=e.sibling;d.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&1024)&&(null===a.firstEffect&&(a.firstEffect=V.firstEffect),null!==V.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=V.firstEffect),a.lastEffect=V.lastEffect),1<V.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=V:a.firstEffect=V,
a.lastEffect=V))}else{b=ai(V,W);if(null!==b)return b.effectTag&=1023,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=1024)}b=V.sibling;if(null!==b)return b;V=a}while(null!==V);X===Ei&&(X=Ii);return null}function(){}
function(){}
function(){}function qj(a){if((U&(Ci|Di))!==T)throw t(Error(331));var b=U;U|=Di;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:hi(Pg,Ig,c),hi(Ig,Og,c)}}catch(d){if(null===a)throw t(Error(330));fi(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}U=b;O();return!0}
function(){}function(){}
function(){}function(){}var mj=void 0;
mj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||M.current)Lf=!0;else if(d<c){Lf=!1;switch(b.tag){case 3:Nh(b);Ch();break;case 5:Cg(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:N(b.type)&&Xe(b);break;case 4:Ag(b,b.stateNode.containerInfo);break;case 10:Hf(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Ph(a,b,c);J(P,P.current&
Eg,b);b=Fh(a,b,c);return null!==b?b.sibling:null}J(P,P.current&Eg,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Rh(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);J(P,P.current,b);if(!d)return null}return Fh(a,b,c)}}else Lf=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Se(b,L.current);Kf(b,c);e=dh(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&
null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;ih();if(N(d)){var f=!0;Xe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var h=d.getDerivedStateFromProps;"function"===typeof h&&bg(b,d,h,a);e.updater=fg;b.stateNode=e;e._reactInternalFiber=b;jg(b,d,a,c);b=Mh(null,b,d,!0,f,c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Bf(e);b.type=e;f=b.tag=sj(e);
a=Af(e,a);switch(f){case 0:b=Jh(null,b,e,a,c);break;case 1:b=Lh(null,b,e,a,c);break;case 11:b=Eh(null,b,e,a,c);break;case 14:b=Gh(null,b,e,Af(e.type,a),d,c);break;default:throw t(Error(306),e,"");}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Jh(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Lh(a,b,d,e,c);case 3:Nh(b);d=b.updateQueue;if(null===d)throw t(Error(282));e=b.memoizedState;e=null!==e?e.element:null;Wf(b,d,b.pendingProps,
null,c);d=b.memoizedState.element;if(d===e)Ch(),b=Fh(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)uh=Ne(b.stateNode.containerInfo.firstChild),th=b,e=vh=!0;e?(b.effectTag|=2,b.child=ug(b,null,d,c)):(S(a,b,d,c),Ch());b=b.child}return b;case 5:return Cg(b),null===a&&zh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,h=e.children,Ke(d,e)?h=null:null!==f&&Ke(d,f)&&(b.effectTag|=16),Kh(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):
(S(a,b,h,c),b=b.child),b;case 6:return null===a&&zh(b),null;case 13:return Ph(a,b,c);case 4:return Ag(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=tg(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Eh(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;h=b.memoizedProps;
f=e.value;Hf(b,f);if(null!==h){var g=h.value;f=hd(g,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(g,f):1073741823)|0;if(0===f){if(h.children===e.children&&!M.current){b=Fh(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){var k=g.dependencies;if(null!==k){h=g.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===g.tag&&(l=Qf(c,null),l.tag=2,Sf(g,l));g.expirationTime<c&&(g.expirationTime=c);l=g.alternate;null!==l&&l.expirationTime<
c&&(l.expirationTime=c);Jf(g.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else h=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==h)h.return=g;else for(h=g;null!==h;){if(h===b){h=null;break}g=h.sibling;if(null!==g){g.return=h.return;h=g;break}h=h.return}g=h}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Kf(b,c),e=Mf(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=Af(e,b.pendingProps),
f=Af(e.type,f),Gh(a,b,e,f,d,c);case 15:return Ih(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,N(d)?(a=!0,Xe(b)):a=!1,Kf(b,c),hg(b,d,e,c),jg(b,d,e,c),Mh(null,b,d,!0,a,c);case 19:return Rh(a,b,c)}throw t(Error(156));};var pj=null,ji=null;
function(){}
function(){}function xh(a,b,c,d){return new uj(a,b,c,d)}
function(){}function(){}
function(){}
function(){}function(){}function(){}
function(){}
function(){}function(){}
function(){}function(){}function(){}function Aj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$b,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Db=function(){};
function(){}Bj.prototype.render=function(){};
Bj.prototype.then=function(){};
Bj.prototype.commit=function(){};Bj.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function(){}Cj.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Cj.prototype._onCommit=function(){};function(){}function(){}Ej.prototype.render=Dj.prototype.render=function(){};
Ej.prototype.unmount=Dj.prototype.unmount=function(){};Ej.prototype.createBatch=function(){};
function Hj(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Jb=ej;Kb=fj;Lb=aj;Mb=function(){};function(){}
function(){}function Kj(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Hj(b))throw t(Error(200));return Aj(a,b,null,c)}
var Nj={createPortal:Kj,findDOMNode:function(){},hydrate:function(a,b,c){if(!Hj(b))throw t(Error(200));return Jj(null,a,b,!0,c)},render:function(a,b,c){if(!Hj(b))throw t(Error(200));return Jj(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!Hj(c))throw t(Error(200));
if(null==a||void 0===a._reactInternalFiber)throw t(Error(38));return Jj(a,b,c,!1,d)},unmountComponentAtNode:function(){},unstable_createPortal:function(){return Kj.apply(void 0,arguments)},unstable_batchedUpdates:ej,unstable_interactiveUpdates:function(){},unstable_discreteUpdates:fj,unstable_flushDiscreteUpdates:aj,flushSync:function(a,
b){if((U&(Ci|Di))!==T)throw t(Error(187));var c=U;U|=1;try{return vf(99,a.bind(null,b))}finally{U=c,O()}},unstable_createRoot:Lj,unstable_createSyncRoot:Mj,unstable_flushControlled:function(){},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ca.injectEventPluginsByName,fa,Qa,function(a){ya(a,Pa)},Hb,Ib,Ud,Ba,cj,{current:!1}]}};
function(){}function(){}
(function(){})({findFiberByHostInstance:Ha,bundleType:0,version:"16.9.0",
rendererPackageName:"react-dom"});var Oj={default:Nj},Pj=Oj&&Nj||Oj;module.exports=Pj.default||Pj;


/***/ }),

/***/ 3935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function(){}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(4448);
} else {}


/***/ }),

/***/ 2408:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__(7418),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.suspense_list"):60120,ba=n?Symbol.for("react.memo"):
60115,ca=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");var z="function"===typeof Symbol&&Symbol.iterator;
function(){}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C={};
function(){}D.prototype.isReactComponent={};D.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw A(Error(85));this.updater.enqueueSetState(this,a,b,"setState")};D.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function E(){}E.prototype=D.prototype;function F(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}var G=F.prototype=new E;
G.constructor=F;h(G,D.prototype);G.isPureReactComponent=!0;var H={current:null},I={suspense:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function(){}
function(){}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function(){}
function(){}
function(){}function U(a,b,d){return null==a?0:S(a,"",b,d)}function(){}function ea(a,b){a.func.call(a.context,b,a.count++)}
function(){}function(){}function W(){var a=H.current;if(null===a)throw A(Error(321));return a}
var X={Children:{map:function(){},forEach:function(){},count:function(a){return U(a,function(){return null},null)},toArray:function(){},only:function(a){if(!N(a))throw A(Error(143));return a}},createRef:function(){return{current:null}},Component:D,PureComponent:F,createContext:function(){},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:ca,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:ba,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,unstable_SuspenseList:aa,createElement:M,cloneElement:function(){},createFactory:function(){},isValidElement:N,version:"16.9.0",unstable_withSuspenseConfig:function(){},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:H,ReactCurrentBatchConfig:I,ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),

/***/ 7294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(2408);
} else {}


/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.15.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports, "__esModule", ({value:!0}));var d=void 0,e=void 0,g=void 0,m=void 0,n=void 0;exports.unstable_now=void 0;exports.unstable_forceFrameRate=void 0;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,r=function(){};exports.unstable_now=function(){return Date.now()};d=function(a){null!==p?setTimeout(d,0,a):(p=a,setTimeout(r,0))};e=function(a,b){q=setTimeout(a,b)};g=function(){clearTimeout(q)};m=function(){return!1};n=exports.unstable_forceFrameRate=function(){}}else{var t=window.performance,u=window.Date,v=window.setTimeout,
w=window.clearTimeout,x=window.requestAnimationFrame,y=window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof x&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));exports.unstable_now="object"===typeof t&&
"function"===typeof t.now?function(){return t.now()}:function(){return u.now()};var z=!1,A=null,B=-1,C=-1,D=33.33,E=-1,F=-1,G=0,H=!1;m=function(){return exports.unstable_now()>=G};n=function(){};exports.unstable_forceFrameRate=function(){};var J=function(){},K=new MessageChannel,I=K.port2;K.port1.onmessage=J;var L=function(a){if(null===A)F=E=-1,z=!1;else{z=!0;x(function(a){w(B);L(a)});var b=function(){G=exports.unstable_now()+D/2;J();B=v(b,3*D)};B=v(b,3*D);if(-1!==E&&.1<a-E){var c=a-E;!H&&-1!==F&&c<D&&F<D&&(D=c<F?F:c,8.33>D&&(D=8.33));F=c}E=a;G=a+D;I.postMessage(null)}};d=function(){};e=function(a,b){C=v(function(){a(exports.unstable_now())},b)};g=function(){w(C);
C=-1}}var M=null,N=null,O=null,P=3,Q=!1,R=!1,S=!1;
function(){}function(){}function(){}
function X(a,b){R=!1;S&&(S=!1,g());U(b);Q=!0;try{if(!a)for(;null!==M&&M.expirationTime<=b;)T(M,b),b=exports.unstable_now(),U(b);else if(null!==M){do T(M,b),b=exports.unstable_now(),U(b);while(null!==M&&!m())}if(null!==M)return!0;null!==N&&e(W,N.startTime-b);return!1}finally{Q=!1}}function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}
function(){}var aa=n;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var f=exports.unstable_now();if("object"===typeof c&&null!==c){var l=c.delay;l="number"===typeof l&&0<l?f+l:f;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),l=f;c=l+c;a={callback:b,priorityLevel:a,startTime:l,expirationTime:c,next:null,previous:null};if(l>f){c=l;if(null===N)N=a.next=a.previous=a;else{b=null;var h=N;do{if(c<h.startTime){b=h;break}h=h.next}while(h!==N);null===b?b=N:b===N&&(N=a);c=b.previous;c.next=b.previous=a;a.next=b;a.previous=
c}null===M&&N===a&&(S?g():S=!0,e(W,l-f))}else V(a,c),R||Q||(R=!0,d(X));return a};exports.unstable_cancelCallback=function(){};exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};exports.unstable_getCurrentPriorityLevel=function(){return P};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();U(a);return null!==O&&null!==M&&M.startTime<=a&&M.expirationTime<O.expirationTime||m()};exports.unstable_requestPaint=aa;exports.unstable_continueExecution=function(){R||Q||(R=!0,d(X))};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return M};


/***/ }),

/***/ 3840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 3379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function(){}();

var getTarget = function(){}();

var stylesInDom = [];

function(){}

function(){}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function(){}
/* istanbul ignore next  */


var replaceText = function(){}();

function(){}

function(){}

var singleton = null;
var singletonCounter = 0;

function(){}

module.exports = function(){};

/***/ }),

/***/ 6644:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PGcgZmlsbD0iIzc4Nzg3OCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLjc1NyAyLjE3MkwyLjE3Mi43NTdsNy4wNyA3LjA3MS0xLjQxNCAxLjQxNXoiLz48cGF0aCBkPSJNNy44MjguNzU3bDEuNDE1IDEuNDE1LTcuMDcxIDcuMDdMLjc1NyA3LjgyOXoiLz48L2c+PC9zdmc+"

/***/ }),

/***/ 9310:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3IiBoZWlnaHQ9IjExIj48cGF0aCBmaWxsPSIjODA4QkE0IiBkPSJNNS4zNi4yMzJhMSAxIDAgMDExLjM3MiAxLjQ1bC0uMDkyLjA4Ni00LjA3OCAzLjM5OCA0LjA3OCAzLjRhMSAxIDAgMDEuMjAzIDEuMzA2bC0uMDc1LjEwMmMtLjMyNi4zOTEtLjg4OS40Ny0xLjMwNy4yMDJsLS4xMDEtLjA3NC01LTQuMTY3YTEgMSAwIDAxLS4wOS0xLjQ1MmwuMDktLjA4NSA1LTQuMTY2eiIvPjwvc3ZnPg=="

/***/ }),

/***/ 6127:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzIiIGhlaWdodD0iMjAiPjxnIGZpbGw9IiNDNkNDREUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTc5IDYuMjQ2VjQuNjI5aDcuOTA5djEuNjE3aC0yLjg5MXY4LjgzMmgtMi4xNDJWNi4yNDZINzl6bTEyLjE0IDguOTUyYy0xLjIzMyAwLTIuMjM4LS4zOTItMy4wMTMtMS4xNzYtLjc3NS0uNzgzLTEuMTYzLTEuODE4LTEuMTYzLTMuMTA2IDAtMS4yODcuMzktMi4zMTggMS4xNy0zLjA5MS43OC0uNzc0IDEuNzktMS4xNiAzLjAzLTEuMTYgMS4yMzkgMCAyLjI1Ni4zNzYgMy4wNTEgMS4xMy43OTYuNzUzIDEuMTkzIDEuNzU5IDEuMTkzIDMuMDE2IDAgLjI5LS4wMi41Ni0uMDYuODA5aC02LjE4Yy4wNS41MzkuMjU0Ljk3My42MTEgMS4zMDIuMzU3LjMzLjgxLjQ5NCAxLjM2Mi40OTQuNzQ0IDAgMS4yOTUtLjMgMS42NTItLjg5OGgyLjMyNWMtLjI0NS43ODgtLjcyIDEuNDMyLTEuNDIzIDEuOTMxLS43MDQuNS0xLjU1NS43NDktMi41NTQuNzQ5em0xLjQxNi02LjI1OGMtLjM4My0uMzMtLjg0NC0uNDk0LTEuMzg1LS40OTQtLjU0IDAtLjk5Mi4xNjUtMS4zNTQuNDk0LS4zNjIuMzMtLjU3OC43NjktLjY1IDEuMzE3aDQuMDA4Yy0uMDMtLjU0OC0uMjM3LS45ODgtLjYyLTEuMzE3em02LjcwNy0yLjE1NnYxLjQ2N2MuNTcyLTEuMDU3IDEuMzk4LTEuNTg2IDIuNDc5LTEuNTg2VjguODJoLS41MzZjLS42NDIgMC0xLjEyNy4xNTgtMS40NTMuNDcyLS4zMjYuMzE0LS40OS44NTYtLjQ5IDEuNjI0djQuMTYyaC0yLjE1NlY2Ljc4NGgyLjE1NnptNi4xNjUgMHYxLjI0M2MuNTQtLjkwOCAxLjQxOC0xLjM2MiAyLjYzMS0xLjM2Mi42NDMgMCAxLjIxNy4xNDQgMS43MjEuNDM0LjUwNS4yOS44OTUuNzAzIDEuMTcgMS4yNDJhMy4yNjYgMy4yNjYgMCAwMTEuMjE3LTEuMjI3IDMuMzkgMy4zOSAwIDAxMS43MzYtLjQ1YzEuMDEgMCAxLjgyMy4zMSAyLjQ0LjkyOXMuOTI2IDEuNDg3LjkyNiAyLjYwNXY0Ljg4aC0yLjE0MnYtNC41ODFjMC0uNjQ5LS4xNjgtMS4xNDUtLjUwNS0xLjQ5LS4zMzYtLjM0NC0uNzk1LS41MTYtMS4zNzctLjUxNi0uNTgxIDAtMS4wNDIuMTcyLTEuMzg0LjUxNi0uMzQyLjM0NS0uNTEzLjg0MS0uNTEzIDEuNDl2NC41OGgtMi4xNDF2LTQuNThjMC0uNjQ5LS4xNjgtMS4xNDUtLjUwNS0xLjQ5LS4zMzctLjM0NC0uNzk1LS41MTYtMS4zNzctLjUxNi0uNTgxIDAtMS4wNDMuMTcyLTEuMzg0LjUxNi0uMzQyLjM0NS0uNTEzLjg0MS0uNTEzIDEuNDl2NC41OGgtMi4xNTdWNi43ODVoMi4xNTd6bTE0LjA1OSA4LjI5NFY0aDIuMTU3djExLjA3OGgtMi4xNTd6bTYuNzMtLjE1bC0zLjMxOS04LjE0NGgyLjQxN2wyLjE1NyA1Ljg5OSAyLjI4LTUuODk5SDEzMkwxMjYuNzA3IDE5aC0yLjI0OWwxLjc2LTQuMDcyek02NiAwYzUuNTIzIDAgMTAgNC40NzcgMTAgMTBzLTQuNDc3IDEwLTEwIDEwLTEwLTQuNDc3LTEwLTEwUzYwLjQ3NyAwIDY2IDB6bTQgNS4yNjNoLTZWMTUuNzlsNS44MDItNy44OTRoLTEuNzM2TDcwIDUuMjYyeiIvPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEuMDY5IDEzdi0yLjg1MmgxLjc1OGMuNzU4IDAgMS4zNDctLjE5MiAxLjc2Ny0uNTc4LjQyLS4zODYuNjMtLjkwMy42My0xLjU1IDAtLjYzOC0uMjEtMS4xNTMtLjYzLTEuNTQzLS40Mi0uMzkxLTEuMDA5LS41ODYtMS43NjctLjU4NkguMTA3VjEzaC45NjJ6bTEuNzU4LTMuNjA0SDEuMDY5VjYuNjQ3aDEuNzU4Yy40NzggMCAuODM3LjEzMiAxLjA3Ni4zOTYuMjQuMjY0LjM2LjU5Mi4zNi45ODZzLS4xMi43Mi0uMzU3Ljk4Yy0uMjM4LjI1OC0uNTk4LjM4Ny0xLjA4LjM4N3ptNS42NSAzLjcwN2MuNzI4IDAgMS4zMDQtLjI1MSAxLjcyOC0uNzUyLjQyMy0uNTAyLjYzNC0xLjE0Ni42MzQtMS45MzR2LS4xMDdjMC0uNzg1LS4yMTItMS40My0uNjM3LTEuOTM0LS40MjUtLjUwNS0xLjAwMy0uNzU3LTEuNzM2LS43NTctLjcyNiAwLTEuMy4yNTMtMS43MjMuNzYtLjQyNC41MDYtLjYzNSAxLjE1LS42MzUgMS45M3YuMTA4YzAgLjc4NC4yMTIgMS40MjguNjM3IDEuOTMxLjQyNS41MDMgMS4wMDIuNzU1IDEuNzMxLjc1NXptMC0uNzUyYy0uNDY2IDAtLjgxNy0uMTgzLTEuMDUzLS41NDctLjIzNi0uMzY1LS4zNTQtLjgyNy0uMzU0LTEuMzg3di0uMTA3YzAtLjU1NC4xMTgtMS4wMTQuMzU0LTEuMzgyLjIzNi0uMzY4LjU4My0uNTUyIDEuMDQyLS41NTIuNDYzIDAgLjgxMy4xODQgMS4wNTMuNTUyLjIzOS4zNjguMzU4LjgyOC4zNTggMS4zODJ2LjEwN2MwIC41Ni0uMTE4IDEuMDIyLS4zNTYgMS4zODctLjIzOC4zNjQtLjU4Ni41NDctMS4wNDUuNTQ3em01LjM3LjY0OWwxLjAwNi0zLjIxOC4yMS0uODkzLjAzLS4wMDUuMjE5Ljg5OEwxNi4zMzIgMTNoLjc3N2wxLjUzMy01LjI4M2gtLjk1N2wtLjgzIDMuMzYtLjE0Mi43MTJoLS4wMjlsLS4xNTEtLjcxMy0xLjA2LTMuMzZoLS43NzFsLTEuMDU1IDMuMzYtLjEzNy42NGgtLjAyOWwtLjExMi0uNjQtLjg3NC0zLjM2aC0uOTU3TDEzLjA3IDEzaC43NzZ6bTcuOTMuMTAzYy40NCAwIC44MTQtLjA2MiAxLjEyMy0uMTg2LjMxLS4xMjQuNTU4LS4yNzguNzQ3LS40NjRsLS4zNzYtLjYyNWExLjk3IDEuOTcgMCAwMS0uNjM3LjM4MyAyLjQyIDIuNDIgMCAwMS0uODU3LjE0Yy0uNDQ2IDAtLjc5My0uMTY0LTEuMDQtLjQ5MS0uMjQ4LS4zMjctLjM3Ni0uNzQ1LS4zODYtMS4yNTNsLjAxNS0uMDI0aDMuNDI3di0uNmMwLS43MTctLjE4Mi0xLjI5LS41NDYtMS43Mi0uMzY1LS40MjktLjkwNC0uNjQ0LTEuNjE3LS42NDQtLjYxMiAwLTEuMTQxLjI1LTEuNTg5Ljc1LS40NDguNS0uNjcxIDEuMTI1LS42NzEgMS44Nzd2LjIxNWMwIC43ODEuMjE3IDEuNDE3LjY1MSAxLjkwNy40MzUuNDkgMS4wMi43MzUgMS43NTYuNzM1em0xLjA1NS0zLjI3MmgtMi40MzdsLS4wMS0uMDI0Yy4wNTItLjQxLjE5Mi0uNzUxLjQyLTEuMDIzLjIyOC0uMjcyLjUwMy0uNDA4LjgyNS0uNDA4LjM5OCAwIC42OTcuMTI3Ljg5OS4zOC4yMDIuMjU1LjMwMy41Ny4zMDMuOTQ4di4xMjd6TTI1LjgzNCAxM1Y5LjIyNmExLjE2IDEuMTYgMCAwMS40MDMtLjUwOGMuMTc0LS4xMi4zODgtLjE4LjY0Mi0uMThsLjQ5NC4wMjguMTMxLS44OTNhMS4zNiAxLjM2IDAgMDAtLjM2Ni0uMDU0IDEuMyAxLjMgMCAwMC0uNzYuMjMgMS44MjcgMS44MjcgMCAwMC0uNTUzLjY0bC0uMDkzLS43NzJoLS44NlYxM2guOTYyem00LjY1OS4xMDNjLjQ0IDAgLjgxMy0uMDYyIDEuMTIzLS4xODYuMzA5LS4xMjQuNTU4LS4yNzguNzQ3LS40NjRsLS4zNzYtLjYyNWExLjk3IDEuOTcgMCAwMS0uNjM3LjM4MyAyLjQyIDIuNDIgMCAwMS0uODU3LjE0Yy0uNDQ2IDAtLjc5My0uMTY0LTEuMDQtLjQ5MS0uMjQ4LS4zMjctLjM3Ni0uNzQ1LS4zODYtMS4yNTNsLjAxNS0uMDI0aDMuNDI3di0uNmMwLS43MTctLjE4Mi0xLjI5LS41NDctMS43Mi0uMzY0LS40MjktLjkwMy0uNjQ0LTEuNjE2LS42NDQtLjYxMiAwLTEuMTQyLjI1LTEuNTkuNzUtLjQ0Ny41LS42NyAxLjEyNS0uNjcgMS44Nzd2LjIxNWMwIC43ODEuMjE3IDEuNDE3LjY1MSAxLjkwNy40MzUuNDkgMS4wMi43MzUgMS43NTYuNzM1em0xLjA1NC0zLjI3MmgtMi40MzZsLS4wMS0uMDI0Yy4wNTItLjQxLjE5Mi0uNzUxLjQyLTEuMDIzLjIyOC0uMjcyLjUwMy0uNDA4LjgyNS0uNDA4LjM5NyAwIC42OTcuMTI3Ljg5OS4zOC4yMDEuMjU1LjMwMi41Ny4zMDIuOTQ4di4xMjd6bTMuODgyIDMuMjcyYy4zMzIgMCAuNjI0LS4wNjQuODc0LS4xOS4yNS0uMTI4LjQ2Mi0uMzE1LjYzNS0uNTYybC4xMTIuNjQ5aC43ODZWNS4zODNoLS45NjF2Mi45MDVhMS42ODYgMS42ODYgMCAwMC0uNjEzLS40OTggMS44OTIgMS44OTIgMCAwMC0uODIzLS4xN2MtLjY1NCAwLTEuMTYzLjI2LTEuNTI2Ljc4LS4zNjMuNTIxLS41NDQgMS4yMDYtLjU0NCAyLjA1NnYuMTAzYzAgLjc2MS4xODIgMS4zNzYuNTQ3IDEuODQzLjM2NC40NjcuODY5LjcgMS41MTMuN3ptLjI0NC0uNzgyYy0uNDU5IDAtLjc5Ny0uMTYtMS4wMTUtLjQ4LS4yMTgtLjMyMS0uMzI3LS43NDktLjMyNy0xLjI4MnYtLjEwM2MwLS42MDkuMTEtMS4xMDMuMzMtMS40ODQuMjE5LS4zODEuNTYtLjU3MiAxLjAyMi0uNTcyLjI3NyAwIC41MTQuMDY1LjcxLjE5My4xOTcuMTI5LjM1OC4zMDIuNDgyLjUydjIuNDY2YTEuNDU5IDEuNDU5IDAgMDEtLjQ3OS41NDdjLS4xOTUuMTMtLjQzNi4xOTUtLjcyMy4xOTV6bTguNTM1Ljc4MmMuNjQyIDAgMS4xNDYtLjIzNCAxLjUxMi0uNzAxLjM2Ni0uNDY3LjU0OS0xLjA4Mi41NDktMS44NDN2LS4xMDNjMC0uODUtLjE4Mi0xLjUzNS0uNTQ3LTIuMDU2LS4zNjQtLjUyLS44NzItLjc4LTEuNTIzLS43OGExLjg5IDEuODkgMCAwMC0uODYyLjE4NSAxLjY3IDEuNjcgMCAwMC0uNjE4LjUzN3YtMi45NmgtLjk2MlYxM2guNzg2bC4xMTgtLjY5OGMuMTY5LjI2My4zODIuNDYzLjY0LjU5OC4yNTYuMTM1LjU2LjIwMy45MDcuMjAzem0tLjI0NC0uNzgyYy0uMzA2IDAtLjU1OS0uMDczLS43NTktLjIyLS4yLS4xNDYtLjM2Mi0uMzUtLjQ4Ni0uNjF2LTIuMjljLjEyLS4yNDQuMjgzLS40MzguNDg2LS41ODNhMS4yNiAxLjI2IDAgMDEuNzUtLjIxOGMuNDU1IDAgLjc5NS4xOTIgMS4wMTguNTc0LjIyMy4zODMuMzM0Ljg3Ny4zMzQgMS40ODJ2LjEwM2MwIC41My0uMTEuOTU3LS4zMzIgMS4yNzktLjIyMS4zMjItLjU1OC40ODMtMS4wMS40ODN6bTMuODU4IDIuODEzYy40MjMgMCAuNzYtLjEzMiAxLjAwOC0uMzk2YTIuNzQgMi43NCAwIDAwLjU3NC0uOTI3bDIuMjIxLTYuMDk0aC0xLjA2OWwtMS4yOTkgMy45OWgtLjAyOWwtLjE3LS42NjUtMS4xMTQtMy4zMjVINDYuODdsMS45NjMgNS4xNzYtLjIzLjU1MWEyLjg0IDIuODQgMCAwMS0uMzI3LjYwNi41OTQuNTk0IDAgMDEtLjUwMy4yNzNjLS4wMzYgMC0uMTIxLS4wMDUtLjI1Ni0uMDE0LS4xMzUtLjAxLS4xOTMtLjAxMy0uMTc0LS4wMWwtLjA5Ny43NTdhMy4xMDQgMy4xMDQgMCAwMC41NzYuMDc4eiIvPjwvZz48L3N2Zz4="

/***/ }),

/***/ 9326:
/***/ ((module) => {

function(){}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ 3798:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ 8570:
/***/ ((module) => {

function(){}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ 6446:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ 1975:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(3798);

var iterableToArrayLimit = __webpack_require__(8570);

var unsupportedIterableToArray = __webpack_require__(1297);

var nonIterableRest = __webpack_require__(6446);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ 1297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(9326);

function(){}

module.exports = _unsupportedIterableToArray;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	()();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	()();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	()();
/******/ 	
/************************************************************************/
(() => {
"use strict";

// EXTERNAL MODULE: ./widget/utils/polyfill.js
var polyfill = __webpack_require__(9538);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/jsx.js
var jsx = __webpack_require__(8135);
var jsx_default = /*#__PURE__*/__webpack_require__.n(jsx);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);
;// CONCATENATED MODULE: ./widget/utils/country.js
/* harmony default export */ const country = (function (country) {
  return ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'].indexOf(country) > -1;
});
var getCountryCode = function getCountryCode(country) {
  return country.toLowerCase();
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9713);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
;// CONCATENATED MODULE: ./widget/utils/localStorage.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TERMLY_API_CACHE = 'TERMLY_API_CACHE';
var TERMLY_COOKIE_CONSENT = 'TERMLY_COOKIE_CONSENT';
var TERMLY_STATISTIC = 'TERMLY_STATISTIC';
var getItem = function getItem(key, ttl) {
  if (!localStorage) {
    return null;
  }

  var currentTimestamp = Date.now();
  var cache = localStorage.getItem(TERMLY_API_CACHE);

  if (!cache) {
    return null;
  } else {
    var parsedCache = JSON.parse(cache);
    var item = parsedCache[key];

    if (!item) {
      return null;
    } else {
      if (currentTimestamp - item.createdAt < ttl * 1000 || ttl === 0) {
        return item.value;
      } else {
        return null;
      }
    }
  }
};
var setItem = function setItem(key, value, createdAt) {
  if (localStorage) {
    var cache = localStorage.getItem(TERMLY_API_CACHE);
    var parsedCache = JSON.parse(cache);
    localStorage.setItem(TERMLY_API_CACHE, JSON.stringify(_objectSpread(_objectSpread({}, parsedCache), {}, defineProperty_default()({}, key, {
      value: value,
      createdAt: createdAt
    }))));
  }
};
;// CONCATENATED MODULE: ./widget/utils/url.js

var script = document.currentScript || document.querySelector('script[data-name="termly-embed-banner"]');
var id = script.getAttribute('id');
var customPolicies = {
  terms: script.getAttribute('terms'),
  privacy: script.getAttribute('privacy')
};
var domainName =  false ? 0 : script.getAttribute('src').split('/embed')[0];
var URL = "".concat(domainName, "/api/v1");

var generateRandomUuid = function generateRandomUuid() {
  var s4 = function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  return "".concat(s4()).concat(s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4()).concat(s4()).concat(s4());
};

var getRandomUuid = function getRandomUuid() {
  var randomUuid = getItem('RANDOM_UUID', 3600);

  if (!randomUuid) {
    randomUuid = generateRandomUuid();
    setItem('RANDOM_UUID', randomUuid, Date.now());
  }

  return randomUuid;
}; // /api/v1/snippets/websites/:website_uuid


var website = "".concat(URL, "/snippets/websites/").concat(id); // /api/v1/snippets/websites/:website_uuid/statistics

var statistic = "".concat(website, "/statistics"); // /api/v1/snippets/websites/:website_uuid/ip

var getCountry = function(){}; // /api/v1/snippets/websites/:website_uuid/documents/:document_uuid/cookies


var getCookies = function(){}; // /api/v1/snippets/websites/:website_uuid/cookie_consents


var saveCookieConsent = "".concat(website, "/cookie_consents");

var dashFormat = function dashFormat(name) {
  return name.toLowerCase().split(' ').join('-');
};

var docLink = function docLink(name, uuid) {
  return "".concat(domainName, "/document/").concat(dashFormat(name), "/").concat(uuid);
};

var grayLogo = "".concat(domainName, "/images/gray-icon.svg");
var bannerLogo = "".concat(domainName, "/images/termly-banner-logo.svg");
var modalLogo = "".concat(domainName, "/images/termly-banner-logo2.svg");

var getHost = function getHost(url) {
  return /^(.*:\/\/)(.*)/.exec(url)[2];
};

/* harmony default export */ const url = ({
  id: id,
  domainName: domainName,
  website: website,
  statistic: statistic,
  getCountry: getCountry,
  saveCookieConsent: saveCookieConsent,
  docLink: docLink,
  grayLogo: grayLogo,
  customPolicies: customPolicies,
  getHost: getHost,
  bannerLogo: bannerLogo,
  modalLogo: modalLogo,
  getCookies: getCookies
});
;// CONCATENATED MODULE: ./widget/utils/api.js

var DEFAULT_TTL = 10;

var callApi = function callApi() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var callback = arguments.length > 3 ? arguments[3] : undefined;
  var cache = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var ttl = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : DEFAULT_TTL;
  var apiKey = encodeURI("".concat(url).concat(method).concat(data));
  var response = null;

  if (cache) {
    response = getItem(apiKey, ttl);
  }

  if (response) {
    callback(response);
  } else {
    if (data) {
      data = JSON.stringify(data);
    }

    var client = new XMLHttpRequest();

    client.onreadystatechange = function () {
      if (client.readyState === 4 && client.status >= 200 && client.status < 400 && callback) {
        if (cache) {
          setItem(apiKey, JSON.parse(client.responseText), Date.now());
        }

        callback(JSON.parse(client.responseText));
      }
    };

    client.open(method, url, true); // true for asynchronous 

    client.setRequestHeader('Content-Type', 'application/json');
    client.send(data);
  }
};

/* harmony default export */ const api = (callApi);
;// CONCATENATED MODULE: ./widget/utils/cookie.js


var templateCookie = '__tltpl';
var uuidCookie = '__tluid';
var setCookie = function setCookie(cname, cvalue) {
  setItem(cname, cvalue, Date.now());
};
var getCookie = function getCookie() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : templateCookie;
  return getItem(name, 0);
};
var updateDocDict = function updateDocDict(documents) {
  // all the documents share the same website id
  var websiteId = documents && documents.length > 0 && documents[0].website_id;
  var tluid = genTltplId(websiteId);
  var docDict = getCookie(tluid) || {};
  documents.forEach(function (_ref) {
    var uuid = _ref.uuid,
        document_version = _ref.document_version;
    setDocDict(docDict, uuid, true, document_version, false);
  });
  setCookie(tluid, docDict);
};
var genTltplId = function genTltplId(websiteId) {
  return "".concat(templateCookie, "_").concat(websiteId);
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(3038);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
;// CONCATENATED MODULE: ./widget/utils/dataLayer.js
var defalutConsent = {
  essential: true,
  unclassified: false,
  performance: false,
  analytics: false,
  advertising: false,
  social_networking: false
};

var updateDataLayer = function updateDataLayer(cookieConsent, allowAll) {
  if (window.dataLayer) {
    if (allowAll) {
      window.dataLayer.push({
        'event': 'userPrefUpdate',
        'cookiesAccepted': ['essential', 'performance', 'analytics', 'advertising', 'social_networking', 'unclassified']
      });
    } else {
      var currentSetting = cookieConsent ? {
        essential: cookieConsent.essential,
        unclassified: cookieConsent.unclassified,
        performance: cookieConsent.performance,
        analytics: cookieConsent.analytics,
        advertising: cookieConsent.advertising,
        social_networking: cookieConsent.social_networking
      } : defalutConsent;
      window.dataLayer.push({
        'event': 'userPrefUpdate',
        'cookiesAccepted': Object.keys(currentSetting).filter(function (category) {
          return currentSetting[category];
        })
      });
    }
  }
};

/* harmony default export */ const dataLayer = (updateDataLayer);
;// CONCATENATED MODULE: ./widget/constants/lifeCycle.js
var ON_WIDGET_LOAD_COMPLETE = 'onWidgetLoadComplete';
var ON_COOKIES_CONSENT = 'termlyConsent';
;// CONCATENATED MODULE: ./widget/utils/events.js

var eventConsent = function eventConsent() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return new CustomEvent(ON_COOKIES_CONSENT, {
    'detail': data
  });
};
;// CONCATENATED MODULE: ./widget/utils/updateCookieConsent.js



function updateCookieConsent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function updateCookieConsent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { updateCookieConsent_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { updateCookieConsent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj);
    var i = ownProps.length;
    var resArray = new Array(i); // preallocate the Array

    while (i -= 1) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }

    return resArray;
  };
}

var allowAllCategories = {
  essential: true,
  advertising: true,
  analytics: true,
  performance: true,
  social_networking: true,
  unclassified: true
};
var getWhitelist = function getWhitelist(categories, cookies) {
  var whitelist = categories ? Object.entries(cookies).filter(function (_ref) {
    var _ref2 = slicedToArray_default()(_ref, 1),
        key = _ref2[0];

    return categories[key];
  }).map(function (_ref3) {
    var _ref4 = slicedToArray_default()(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    return value;
  }).reduce(function (acc, val) {
    return acc.concat(val);
  }, []) : cookies.essential;
  return whitelist.map(function(){});
};
var getCategories = function getCategories() {
  var cookieConsent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : allowAllCategories;
  if (!cookieConsent) return ['essential'];
  return Object.entries(cookieConsent).filter(function (_ref6) {
    var _ref7 = slicedToArray_default()(_ref6, 2),
        key = _ref7[0],
        value = _ref7[1];

    return value;
  }).map(function (_ref8) {
    var _ref9 = slicedToArray_default()(_ref8, 1),
        key = _ref9[0];

    return key;
  });
};
var extractCategories = function extractCategories(cookieConsent) {
  return cookieConsent && {
    essential: cookieConsent.essential,
    unclassified: cookieConsent.unclassified,
    performance: cookieConsent.performance,
    analytics: cookieConsent.analytics,
    advertising: cookieConsent.advertising,
    social_networking: cookieConsent.social_networking
  };
};

var removeReplacement = function removeReplacement(categories) {
  var elements = document.querySelectorAll('.termly-blocked-content');
  elements.forEach(function (element) {
    var categoriesOnElement = element.dataset.blockedCategories.split(',');
    var isAllConsent = categoriesOnElement.every(function (category) {
      return categories.indexOf(category.trim()) !== -1;
    });

    if (isAllConsent) {
      element.style.display = 'none';
    }
  });
};

var enableConsentScripts = function enableConsentScripts(data) {
  var allowAllCategory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var elements = document.querySelectorAll('[data-categories]'); // because crawler browser cannot properly use `elements.forEach` function.
  // let elements convert to really array and execute it.

  elements = Array.apply(null, elements);
  elements.forEach(function (element, index) {
    // dataset is a collection of elements with the "data-" attribute
    var dataset = element.dataset;
    var categories = dataset.categories && dataset.categories.split(','); // callbackData contains all the categories the user consented to

    var consentCategories = [];

    if (allowAllCategory) {
      consentCategories = Object.keys(allowAllCategories);
    } else {
      consentCategories = data.categories || [];
    } // Traverse all the nodes within the dataset to confirm its existence within consentCategories


    var isAllConsented = categories.every(function(){}); // If the dataset matches, then replace the data-attribute on the node

    if (isAllConsented) {
      var clonedNode = element.cloneNode(true); // TODO: use Object.entries() instead

      Object.keys(dataset).forEach(function (key) {
        if (key !== 'categories') {
          // Convert the "data-" attribute to its native attribute, except categories
          clonedNode[key] = dataset[key];
          delete dataset[key];
        }
      });

      if (element.tagName === 'SCRIPT') {
        clonedNode.setAttribute('type', 'text/javascript');
      } else if (element.tagName === 'IFRAME') {
        // TODO: it frightens me that we're mucking around with styles
        // on an element level like this...this feels like an open
        // invitation to broken pages and customer complaints.
        clonedNode.style.display = element.dataset.display || 'block';
      }

      element.parentNode.replaceChild(clonedNode, element);
    } // TODO: this event should probably be set to bubble because if
    // the listener is on `window` (as it is in auto-blocker), then
    // this event will not be caught.


    document.dispatchEvent(eventConsent(consentCategories));
  });
  removeReplacement(allowAllCategory ? Object.keys(allowAllCategories) : data.categories);
};
var triggerGetUpdatedCookieWhitelistByTermly = function triggerGetUpdatedCookieWhitelistByTermly(cookies, visitorId, cookieConsent) {
  var userData = {
    cookies: getWhitelist(cookieConsent, cookies),
    uuid: visitorId,
    categories: getCategories(cookieConsent)
  }; // enableConsentScripts is for users don't want to custom their own function

  enableConsentScripts(userData);
  window.getUpdatedCookieWhitelistByTermly(userData);
};

var updateCookieConsent = function updateCookieConsent(cookiePolicy, event_type, cookies) {
  var cookieConsent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : allowAllCategories;
  return function (visitorId) {
    var isDirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (cookiePolicy) {
      var userCookie = visitorId || getCookie(uuidCookie); // POST cookie_consent

      api(url.saveCookieConsent, 'POST', updateCookieConsent_objectSpread(updateCookieConsent_objectSpread({
        event_type: event_type,
        document_version_id: cookiePolicy.published_document_version_id,
        template_version_id: cookiePolicy.accepted_template_version
      }, cookieConsent), !!userCookie && {
        uuid: userCookie
      }), function (response) {
        var uuid = response.visitor.uuid; // workaround: use cookies in window

        cookies = cookies || window.termlyCookies;
        if (!getCookie(uuidCookie)) setCookie(uuidCookie, uuid);

        if (window.termlyActiveConsentByScroll) {
          window.removeEventListener('scroll', window.termlyActiveConsentByScroll);
        }

        setItem(TERMLY_COOKIE_CONSENT, response, Date.now());

        if (isDirty) {
          window.location.reload(true);
        } else {
          // trigger GTM to inject consent code
          dataLayer(cookieConsent); // unblock consent code

          triggerGetUpdatedCookieWhitelistByTermly(cookies, uuid, cookieConsent);
        } // trigger consent cookies event


        document.dispatchEvent(eventConsent(cookieConsent));
      });
    }
  };
};

/* harmony default export */ const utils_updateCookieConsent = (updateCookieConsent);
;// CONCATENATED MODULE: ./widget/utils/index.js





var isCookiePolicy = function isCookiePolicy(name) {
  return name.toLowerCase().indexOf('cookie') > -1;
};
var setDocDict = function setDocDict(docDict, uuid, notify, version, showBanner) {
  docDict[uuid] = {
    notify: notify,
    version: version,
    showBanner: showBanner
  };
};
var scrollAccept = false;
var filterDocs = function filterDocs(documents) {
  var needPreviewList = ['Terms', 'Cookie', 'Privacy'];
  var previewDocs = documents && documents.filter(function (doc) {
    return needPreviewList.indexOf(doc.name.split(' ')[0]) > -1 && doc.total_published_count > 0;
  });
  return previewDocs;
};
var statisticViewApiCall = function statisticViewApiCall(event_types) {
  var analyticsData = {
    website_uuid: url.id,
    event_types: event_types
  };
  api(url.statistic, 'POST', analyticsData);
};
var utils_url = location.href;
var spaUrlMonitor = function spaUrlMonitor() {
  requestAnimationFrame(function () {
    if (utils_url !== location.href) {
      statisticViewApiCall(['unique_user_view', 'page_view']);
      utils_url = location.href;
    }
  });
};
var callAcceptPolicy = function callAcceptPolicy(documents, event_type, callCookieConsent, cookieConsent, consentMode) {
  var userCookie = getCookie(uuidCookie); // update cookie (tluid)

  updateDocDict(documents); // user has consented at least once

  var isDirty = !!cookieConsent || consentMode === 'opt_out'; // POST cookie_consent (utils/updateCookieConsent)

  callCookieConsent && callCookieConsent(userCookie, isDirty);
};
var activeConsentByScroll = function activeConsentByScroll(documents, cookies) {
  return function () {
    var MIN_SCROLL_PX = 0.5 * (document.documentElement.scrollHeight - window.innerHeight);

    if (document.body.scrollTop > MIN_SCROLL_PX || document.documentElement.scrollTop > MIN_SCROLL_PX) {
      var elem = document.getElementById('consent');

      if (elem && !scrollAccept) {
        scrollAccept = true;
        var cookiePolicy = documents.find(function (doc) {
          return doc.name.includes('Cookie');
        });
        callAcceptPolicy(documents, 'scroll', utils_updateCookieConsent(cookiePolicy, 'scroll', cookies));
      }

      elem.parentNode.removeChild(elem);

      if (window.termlyActiveConsentByScroll) {
        window.removeEventListener('scroll', window.termlyActiveConsentByScroll);
      }
    }
  };
};
var statisticUniqueUserViews = function statisticUniqueUserViews(tluid) {
  var currentDate = new Date();
  var currentTimestamp = currentDate.getTime();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear();
  var firstDayOfMonthTimestamp = new Date(currentYear, currentMonth, 1).getTime();
  var ttl = Math.round((currentTimestamp - firstDayOfMonthTimestamp) / 1000);
  var uniqueUserViewItem = getItem(TERMLY_STATISTIC, ttl);

  if (!uniqueUserViewItem) {
    statisticViewApiCall(['unique_user_view', 'page_view']);
    setItem(TERMLY_STATISTIC, tluid, currentTimestamp);
  } else {
    statisticViewApiCall(['page_view']);
  }
};
;// CONCATENATED MODULE: ./widget/constants/domIds.js
var TERMLY_CODE_SNIPPET_SUPPORT = 'termly-code-snippet-support';
;// CONCATENATED MODULE: ./widget/constants/language.js
var ENGLISH = 'en';
var GERMAN = 'de';
var FRENCH = 'fr';
var SPANISH = 'es';
var ITALIAN = 'it';
;// CONCATENATED MODULE: ./widget/utils/selectMessage.js

var selectLanguage = function selectLanguage() {
  /**
   * Choose language from:
   *
   *   navigator.language, for non-IE and IE 11+ browsers.
   *   navigator.userLanguage, for IE 10- browsers.
   *   en, as default.
   */
  var browserLanguage = navigator.language || navigator.userLanguage || ENGLISH;
  var languageSetting = window.TERMLY_LANGUAGE_SETTING || [];
  return languageSetting.find(function(){}) || ENGLISH;
};
/* harmony default export */ const selectMessage = (function (messageMap) {
  return messageMap[selectLanguage().split('-')[0]] || messageMap[ENGLISH];
});
;// CONCATENATED MODULE: ./widget/utils/getBannerCopy.js

/* harmony default export */ const getBannerCopy = (function (websiteApiResponse) {
  var bannerCopies = websiteApiResponse.banner_copies;
  return bannerCopies[selectLanguage()];
});
;// CONCATENATED MODULE: ./widget/utils/time.js
var ONE_YEAR_IN_SECS = 86400 * 365;
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(4575);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(3913);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(2205);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8585);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9754);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
// EXTERNAL MODULE: ./node_modules/hex-rgb/index.js
var hex_rgb = __webpack_require__(531);
var hex_rgb_default = /*#__PURE__*/__webpack_require__.n(hex_rgb);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./widget/components/Button/style.scss
var style = __webpack_require__(6537);
;// CONCATENATED MODULE: ./widget/components/Button/style.scss

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);



/* harmony default export */ const Button_style = (style/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./widget/components/Button/index.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Button = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(Button, _PureComponent);

  var _super = _createSuper(Button);

  function Button() {
    classCallCheck_default()(this, Button);

    return _super.apply(this, arguments);
  }

  createClass_default()(Button, [{
    key: "render",
    value: function render() {
      var _cx;

      var _this$props = this.props,
          type = _this$props.type,
          text = _this$props.text,
          onClick = _this$props.onClick,
          style = _this$props.style,
          className = _this$props.className;
      var btnStyle = classnames_default()((_cx = {}, defineProperty_default()(_cx, Button_style.button, true), defineProperty_default()(_cx, Button_style.accept, text === 'Accept All Cookies'), defineProperty_default()(_cx, Button_style.continue, text === 'Continue'), defineProperty_default()(_cx, Button_style[className], !!className), _cx));
      return /*#__PURE__*/jsx_default()("button", {
        style: style,
        className: btnStyle,
        type: type,
        onClick: onClick
      }, void 0, text);
    }
  }]);

  return Button;
}(react.PureComponent);

defineProperty_default()(Button, "defaultProps", {
  type: 'button',
  text: 'Continue',
  onClick: function onClick() {
    return console.log('onClick');
  },
  style: {},
  className: ''
});


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1506);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./widget/components/Dialog/style.scss
var Dialog_style = __webpack_require__(4990);
;// CONCATENATED MODULE: ./widget/components/Dialog/style.scss

            

var style_options = {};

style_options.insert = "head";
style_options.singleton = false;

var style_update = injectStylesIntoStyleTag_default()(Dialog_style/* default */.Z, style_options);



/* harmony default export */ const components_Dialog_style = (Dialog_style/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./widget/components/Dialog/index.js









function Dialog_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Dialog_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Dialog_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Dialog_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Dialog_createSuper(Derived) { var hasNativeReflectConstruct = Dialog_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Dialog_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Dialog = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(Dialog, _PureComponent);

  var _super = Dialog_createSuper(Dialog);

  function Dialog(props) {
    var _this;

    classCallCheck_default()(this, Dialog);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleBodyScroll", function(){});

    _this.state = {
      show: false,
      backgroundScrollPosition: 0,
      defaultMargin: window.getComputedStyle(document.body).getPropertyValue('margin-top')
    };
    _this.defaultStyle = null;
    _this.timestamp = null;
    return _this;
  }

  createClass_default()(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var computedMargin = parseInt(this.state.defaultMargin) - scrollPosition;

      if (this.props.fixedBody) {
        this.toggleBodyScroll('fixed', "".concat(computedMargin, "px"));
      }

      this.timestamp = setTimeout(function () {
        _this2.setState({
          show: true,
          backgroundScrollPosition: scrollPosition
        });
      }, 500);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.toggleBodyScroll('static', this.state.defaultMargin);
      window.scrollTo(0, this.state.backgroundScrollPosition);
      clearTimeout(this.timestamp);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          modalStyle = _this$props.modalStyle,
          showDialog = _this$props.showDialog;
      var modalContent = {
        'modal-default': {
          margin: '10% auto 50px',
          opacity: '1'
        },
        'modal-xl': {
          margin: '3% auto 20px',
          opacity: '1'
        },
        'modal-md': {
          margin: '3% auto 20px',
          opacity: '1'
        },
        'consent-banner': {
          opacity: '1'
        }
      };

      var backgroundStyle = Dialog_objectSpread({}, this.state.show && modalContent[size]);

      if (modalStyle && modalStyle.background) {
        backgroundStyle.background = modalStyle.background || '#fff';
      }

      var dialogClass = components_Dialog_style["dialog-default"];

      if (showDialog) {
        dialogClass = [dialogClass, components_Dialog_style["show-default"]].join(' ');
      }

      return /*#__PURE__*/jsx_default()("div", {
        className: dialogClass
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        style: backgroundStyle,
        className: components_Dialog_style[size]
      }, void 0, children));
    }
  }]);

  return Dialog;
}(react.PureComponent);

defineProperty_default()(Dialog, "defaultProps", {
  fixedBody: false,
  showDialog: false,
  children: null,
  size: 'modal-default',
  modalStyle: null
});


// EXTERNAL MODULE: ../policy-viewer/node_modules/@babel/runtime/helpers/slicedToArray.js
var helpers_slicedToArray = __webpack_require__(1975);
var helpers_slicedToArray_default = /*#__PURE__*/__webpack_require__.n(helpers_slicedToArray);
;// CONCATENATED MODULE: ../policy-viewer/src/lib/embed/helpers.js

var DEFAULT_HEIGHT = 700;
var currentDomain = function currentDomain() {
  switch ("production") {
    case 'staging':
      return 'https://termly.tarokostaging.io';

    case 'production':
      return 'https://app.termly.io';

    default:
      return 'http://localhost:8005';
  }
};
var getModalHeight = function(){};
var getDialogHeight = function getDialogHeight() {
  return window.innerHeight * 60 / 100; // 60 is taken from 60vh dialog height refer DocumentModal component.
};

var loadPolicyNotFound = function loadPolicyNotFound(id, cb) {
  var iframe = document.getElementById(id);
  iframe.addEventListener('load', function () {
    cb(DEFAULT_HEIGHT);
  });
};

var bindResizeEvent = function bindResizeEvent(_ref) {
  var id = _ref.id,
      type = _ref.type,
      iframe = _ref.iframe,
      cb = _ref.cb;
  // TODO: Split different events into different handlers.
  window.addEventListener('message', function (e) {
    if (e.origin !== currentDomain()) return; // if can't find policy, user 700 as the default height

    if (typeof e.data !== 'string') {
      cb(DEFAULT_HEIGHT);
      return;
    }

    ;

    var _e$data$split = e.data.split(':'),
        _e$data$split2 = helpers_slicedToArray_default()(_e$data$split, 3),
        remoteId = _e$data$split2[0],
        action = _e$data$split2[1],
        value = _e$data$split2[2];

    if (remoteId === id) {
      if (type === 'iframe' && action === 'get_size') {
        cb(value);
      } else if (type === 'modal' && action === 'set_size') {
        cb(getModalHeight());
      } else if (type === 'dialog' && action === 'dialog_set_size') {
        cb(getDialogHeight());
      } else if (action === 'load_error') {
        loadPolicyNotFound(id, cb);
      }
    }
  });

  var refresh = function refresh() {
    if (iframe && iframe.contentWindow) {
      setTimeout(function () {
        iframe.contentWindow.postMessage(type === 'iframe' ? "".concat(id, ":get_size") : type === 'modal' ? "".concat(id, ":set_size:").concat(getModalHeight()) : "".concat(id, ":dialog_set_size:").concat(getDialogHeight()), currentDomain());
      }, 1500);
    }
  };

  window.addEventListener('resize', refresh);

  if (document.readyState === 'complete') {
    refresh();
  } else {
    window.addEventListener('load', refresh);
  }
};
var bindScrollToEvent = function bindScrollToEvent(_ref2) {
  var type = _ref2.type,
      iframe = _ref2.iframe,
      cb = _ref2.cb;
  window.addEventListener('message', function (e) {
    if (e.origin !== currentDomain()) return;
    if (typeof e.data !== 'string') return;

    var _e$data$split3 = e.data.split(':'),
        _e$data$split4 = _slicedToArray(_e$data$split3, 2),
        action = _e$data$split4[0],
        value = _e$data$split4[1];

    if (action === 'scroll_to') {
      cb(value);
    }
  });

  var initScrolling = function initScrolling() {
    if (iframe && iframe.getBoundingClientRect()) {
      var _iframe$getBoundingCl = iframe.getBoundingClientRect(),
          top = _iframe$getBoundingCl.top;

      iframe.contentWindow.postMessage("".concat(type, ":init_scrolling:").concat(top), currentDomain());
    }
  };

  if (document.readyState === 'complete') {
    initScrolling();
  } else {
    window.addEventListener('load', initScrolling);
  }
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./widget/components/DocumentModal/style.scss
var DocumentModal_style = __webpack_require__(8105);
;// CONCATENATED MODULE: ./widget/components/DocumentModal/style.scss

            

var DocumentModal_style_options = {};

DocumentModal_style_options.insert = "head";
DocumentModal_style_options.singleton = false;

var DocumentModal_style_update = injectStylesIntoStyleTag_default()(DocumentModal_style/* default */.Z, DocumentModal_style_options);



/* harmony default export */ const components_DocumentModal_style = (DocumentModal_style/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./widget/components/DocumentModal/index.js









function DocumentModal_createSuper(Derived) { var hasNativeReflectConstruct = DocumentModal_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function DocumentModal_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // TODO: Oh man, this is so gross...I can't believe I'm doing this.





var DocumentModal = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(DocumentModal, _PureComponent);

  var _super = DocumentModal_createSuper(DocumentModal);

  function DocumentModal() {
    var _this;

    classCallCheck_default()(this, DocumentModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "iframeOnLoad", function () {
      _this.iframe.contentWindow.postMessage("".concat(url.id, ":dialog_set_size:").concat(getDialogHeight()), currentDomain());
    });

    return _this;
  }

  createClass_default()(DocumentModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var iframe = this.iframe;
      var id = url.id;
      var type = 'dialog';
      bindResizeEvent({
        id: id,
        type: type,
        iframe: iframe,
        cb: function cb(height) {
          iframe.setAttribute('style', "height: ".concat(height, "px; opacity: 1;"));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          show = _this$props.show,
          docUrl = _this$props.docUrl,
          modalStyle = _this$props.modalStyle,
          children = _this$props.children,
          displayLogo = _this$props.displayLogo;
      return /*#__PURE__*/jsx_default()(Dialog, {
        fixedBody: false,
        showDialog: show,
        modalStyle: modalStyle,
        size: "modal-xl",
        displayLogo: displayLogo
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        className: components_DocumentModal_style["document-modal-container"]
      }, void 0, show && /*#__PURE__*/jsx_default()("div", {
        className: components_DocumentModal_style.container
      }, void 0, /*#__PURE__*/react_default().createElement("iframe", {
        onLoad: this.iframeOnLoad,
        ref: function ref(_ref) {
          return _this2.iframe = _ref;
        },
        width: "100%",
        className: components_DocumentModal_style.iframe,
        style: {
          height: "".concat(getDialogHeight(), "px")
        },
        src: docUrl,
        frameBorder: "0"
      }, /*#__PURE__*/jsx_default()("p", {}, void 0, "Your browser does not support iframes.")))), children);
    }
  }]);

  return DocumentModal;
}(react.PureComponent);

defineProperty_default()(DocumentModal, "defaultProps", {
  show: false,
  modalStyle: {},
  docUrl: null,
  displayLogo: false
});


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(7154);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./widget/stylesheets/accordion.scss
var accordion = __webpack_require__(3676);
;// CONCATENATED MODULE: ./widget/stylesheets/accordion.scss

            

var accordion_options = {};

accordion_options.insert = "head";
accordion_options.singleton = false;

var accordion_update = injectStylesIntoStyleTag_default()(accordion/* default */.Z, accordion_options);



/* harmony default export */ const stylesheets_accordion = (accordion/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./widget/components/AccordionList/messages.js


var _ALWAYS_ACTIVE, _CATEGORY_TITLE_ESSEN;


var ALWAYS_ACTIVE = (_ALWAYS_ACTIVE = {}, defineProperty_default()(_ALWAYS_ACTIVE, ENGLISH, 'Always Active'), defineProperty_default()(_ALWAYS_ACTIVE, GERMAN, 'Immer Aktiv'), defineProperty_default()(_ALWAYS_ACTIVE, FRENCH, 'Toujours actif'), defineProperty_default()(_ALWAYS_ACTIVE, SPANISH, 'Siempre activo'), defineProperty_default()(_ALWAYS_ACTIVE, ITALIAN, 'Sempre attivi'), _ALWAYS_ACTIVE);
var CATEGORY_TITLE_ESSENTIAL = (_CATEGORY_TITLE_ESSEN = {}, defineProperty_default()(_CATEGORY_TITLE_ESSEN, ENGLISH, 'Essential'), defineProperty_default()(_CATEGORY_TITLE_ESSEN, GERMAN, 'Wesentlich'), defineProperty_default()(_CATEGORY_TITLE_ESSEN, FRENCH, 'Essentiels'), defineProperty_default()(_CATEGORY_TITLE_ESSEN, SPANISH, 'Básico'), defineProperty_default()(_CATEGORY_TITLE_ESSEN, ITALIAN, 'Cookie di base'), _CATEGORY_TITLE_ESSEN);
;// CONCATENATED MODULE: ./widget/components/AccordionList/Accordion.js









function Accordion_createSuper(Derived) { var hasNativeReflectConstruct = Accordion_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Accordion_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Accordion = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(Accordion, _PureComponent);

  var _super = Accordion_createSuper(Accordion);

  function Accordion() {
    var _this;

    classCallCheck_default()(this, Accordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleStyle", function (title) {
      return classnames_default()(defineProperty_default()({}, stylesheets_accordion[title], true));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClick", function () {
      _this.props.onToggle();
    });

    return _this;
  }

  createClass_default()(Accordion, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          title = _this$props.title,
          component = _this$props.component,
          index = _this$props.index,
          isActive = _this$props.isActive,
          toggleActive = _this$props.toggleActive,
          isOpen = _this$props.isOpen,
          onClickCookieDetails = _this$props.onClickCookieDetails,
          currentStyle = _this$props.currentStyle;
      return /*#__PURE__*/jsx_default()("div", {}, void 0, /*#__PURE__*/jsx_default()("dt", {
        "data-tracking": "accordion-".concat(index),
        className: this.toggleStyle('title'),
        onClick: this.handleClick,
        style: {
          color: currentStyle.color,
          fontFamily: currentStyle.font_family
        }
      }, void 0, title, /*#__PURE__*/jsx_default()("span", {
        className: stylesheets_accordion["cookie-type-setting"]
      }, void 0, /*#__PURE__*/jsx_default()("span", {
        className: stylesheets_accordion["cookie-details-link"],
        onClick: onClickCookieDetails,
        style: {
          color: currentStyle.color,
          fontFamily: currentStyle.font_family
        }
      }, void 0, "Cookie Details"), title === selectMessage(CATEGORY_TITLE_ESSENTIAL) ? /*#__PURE__*/jsx_default()("span", {
        className: stylesheets_accordion["switch-content"]
      }, void 0, /*#__PURE__*/jsx_default()(Switch, {
        currentStyle: currentStyle,
        name: name,
        checked: isActive,
        toggleStatus: isActive,
        disabled: true
      })) : /*#__PURE__*/jsx_default()("span", {
        className: stylesheets_accordion["switch-content"]
      }, void 0, /*#__PURE__*/jsx_default()(Switch, {
        currentStyle: currentStyle,
        name: name,
        onChange: toggleActive,
        checked: isActive,
        toggleStatus: isActive
      })))), /*#__PURE__*/jsx_default()("dd", {
        className: this.toggleStyle('content')
      }, void 0, !!isOpen && component));
    }
  }]);

  return Accordion;
}(react.PureComponent);

defineProperty_default()(Accordion, "defaultProps", {
  onToggle: function onToggle() {
    return console.log('toggle accordion');
  },
  toggleActive: function toggleActive() {
    return console.log('toggle active');
  },
  onClickCookieDetails: function onClickCookieDetails() {
    return console.log('click cookie details');
  },
  title: '',
  component: null,
  isOpen: 0,
  index: 0,
  isActive: false
});


;// CONCATENATED MODULE: ./widget/components/AccordionList/index.js










function AccordionList_createSuper(Derived) { var hasNativeReflectConstruct = AccordionList_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function AccordionList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var AccordionList = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(AccordionList, _PureComponent);

  var _super = AccordionList_createSuper(AccordionList);

  function AccordionList(props) {
    var _this;

    classCallCheck_default()(this, AccordionList);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "handleToggle", function (toggleIndex) {
      return function () {
        _this.setState(function (state) {
          return {
            activeStatus: state.activeStatus.map(function (active, index) {
              return toggleIndex === index ? !active : false;
            })
          };
        });
      };
    });

    _this.state = {
      activeStatus: [0, 0, 0, 0, 0, 0]
    };
    return _this;
  }

  createClass_default()(AccordionList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          detailList = _this$props.detailList,
          className = _this$props.className;
      return /*#__PURE__*/jsx_default()("dl", {
        className: stylesheets_accordion[className]
      }, void 0, detailList.map(function (detail, index) {
        return /*#__PURE__*/react_default().createElement(Accordion, extends_default()({
          key: index,
          isOpen: _this2.state.activeStatus[index]
        }, detail, {
          onToggle: _this2.handleToggle(index),
          index: index,
          currentStyle: _this2.props.currentStyle
        }));
      }));
    }
  }]);

  return AccordionList;
}(react.PureComponent);

defineProperty_default()(AccordionList, "defaultProps", {
  detailList: [],
  className: 'accordion'
});


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./widget/stylesheets/consent-banner.scss
var consent_banner = __webpack_require__(5064);
;// CONCATENATED MODULE: ./widget/stylesheets/consent-banner.scss

            

var consent_banner_options = {};

consent_banner_options.insert = "head";
consent_banner_options.singleton = false;

var consent_banner_update = injectStylesIntoStyleTag_default()(consent_banner/* default */.Z, consent_banner_options);



/* harmony default export */ const stylesheets_consent_banner = (consent_banner/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./widget/components/PreferenceModal/PreferenceInformation.js








function PreferenceInformation_createSuper(Derived) { var hasNativeReflectConstruct = PreferenceInformation_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function PreferenceInformation_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var PreferenceInformation = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(PreferenceInformation, _PureComponent);

  var _super = PreferenceInformation_createSuper(PreferenceInformation);

  function PreferenceInformation() {
    classCallCheck_default()(this, PreferenceInformation);

    return _super.apply(this, arguments);
  }

  createClass_default()(PreferenceInformation, [{
    key: "render",
    value: function render() {
      var preferenceDescription = this.props.preferenceDescription;
      return /*#__PURE__*/jsx_default()("div", {}, void 0, /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["preference-description"]
      }, void 0, preferenceDescription));
    }
  }]);

  return PreferenceInformation;
}(react.PureComponent);

defineProperty_default()(PreferenceInformation, "defaultProps", {
  preferenceDescription: ''
});


;// CONCATENATED MODULE: ./widget/utils/normalizeCookies.js
/* harmony default export */ const normalizeCookies = (function (cookies) {
  return cookies.reduce(function (acc, cookie) {
    if (!acc[cookie.domain]) {
      acc[cookie.domain] = [];
    }

    acc[cookie.domain].push(cookie);
    return acc;
  }, {});
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./widget/components/CookieDetailsTableList/cookie-details.scss
var cookie_details = __webpack_require__(9249);
;// CONCATENATED MODULE: ./widget/components/CookieDetailsTableList/cookie-details.scss

            

var cookie_details_options = {};

cookie_details_options.insert = "head";
cookie_details_options.singleton = false;

var cookie_details_update = injectStylesIntoStyleTag_default()(cookie_details/* default */.Z, cookie_details_options);



/* harmony default export */ const CookieDetailsTableList_cookie_details = (cookie_details/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./widget/components/CookieDetailsTableList/index.js








function CookieDetailsTableList_createSuper(Derived) { var hasNativeReflectConstruct = CookieDetailsTableList_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function CookieDetailsTableList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var CookieDetailsTableList = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(CookieDetailsTableList, _PureComponent);

  var _super = CookieDetailsTableList_createSuper(CookieDetailsTableList);

  function CookieDetailsTableList() {
    classCallCheck_default()(this, CookieDetailsTableList);

    return _super.apply(this, arguments);
  }

  createClass_default()(CookieDetailsTableList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cookieProviders = _this$props.cookieProviders,
          normalizedCookieDetails = _this$props.normalizedCookieDetails,
          currentStyle = _this$props.currentStyle;
      return /*#__PURE__*/jsx_default()(react.Fragment, {}, void 0, cookieProviders.map(function (provider, pIndex) {
        return /*#__PURE__*/jsx_default()("div", {
          className: CookieDetailsTableList_cookie_details.container
        }, pIndex, /*#__PURE__*/jsx_default()("h3", {
          style: {
            color: currentStyle.color,
            fontFamily: currentStyle.font_family
          }
        }, void 0, "Provider: ", /*#__PURE__*/jsx_default()("span", {
          style: {
            color: currentStyle.color,
            fontFamily: currentStyle.font_family
          }
        }, void 0, provider)), /*#__PURE__*/jsx_default()("table", {
          border: "0",
          cellPadding: "0",
          cellSpacing: "0",
          stylr: {
            border: "1px solid ".concat(currentStyle.btn_background)
          }
        }, void 0, /*#__PURE__*/jsx_default()("thead", {}, void 0, /*#__PURE__*/jsx_default()("tr", {
          style: {
            background: currentStyle.btn_background
          }
        }, void 0, /*#__PURE__*/jsx_default()("th", {
          style: {
            color: currentStyle.btn_text_color,
            fontFamily: currentStyle.font_family
          }
        }, void 0, "Name"), /*#__PURE__*/jsx_default()("th", {
          style: {
            color: currentStyle.btn_text_color,
            fontFamily: currentStyle.font_family
          }
        }, void 0, "Purpose"), /*#__PURE__*/jsx_default()("th", {
          style: {
            color: currentStyle.btn_text_color,
            fontFamily: currentStyle.font_family
          }
        }, void 0, "Type"), /*#__PURE__*/jsx_default()("th", {
          style: {
            color: currentStyle.btn_text_color,
            fontFamily: currentStyle.font_family
          }
        }, void 0, "Expires in"))), /*#__PURE__*/jsx_default()("tbody", {}, void 0, normalizedCookieDetails[provider].map(function (cookie, cIndex) {
          return /*#__PURE__*/jsx_default()("tr", {
            style: {
              background: currentStyle.btn_background
            }
          }, cIndex, /*#__PURE__*/jsx_default()("td", {
            style: {
              color: currentStyle.btn_text_color,
              fontFamily: currentStyle.font_family
            }
          }, void 0, cookie.name), /*#__PURE__*/jsx_default()("td", {
            style: {
              color: currentStyle.btn_text_color,
              fontFamily: currentStyle.font_family
            }
          }, void 0, cookie.en_us), /*#__PURE__*/jsx_default()("td", {
            style: {
              color: currentStyle.btn_text_color,
              fontFamily: currentStyle.font_family
            }
          }, void 0, cookie.tracker_type), /*#__PURE__*/jsx_default()("td", {
            style: {
              color: currentStyle.btn_text_color,
              fontFamily: currentStyle.font_family
            }
          }, void 0, cookie.expire));
        }))));
      }));
    }
  }]);

  return CookieDetailsTableList;
}(react.PureComponent);

defineProperty_default()(CookieDetailsTableList, "defaultProps", {
  cookieProviders: [],
  normalizedCookieDetails: {}
});


;// CONCATENATED MODULE: ./widget/components/PreferenceModal/messages.js


var _PREFERENCE_TITLE, _COOKIE_DESCRIPTION, _COOKIE_POLICY_LINK, _AND, _PRIVACY_POLICY_LINK, _SAVE_MY_PREFERENCE, _DECLINE_ALL, _ALLOW_ALL, _DISCARD_CHANGES, _SAVE_AND_FINISH, messages_CATEGORY_TITLE_ESSEN, _CATEGORY_TITLE_PREFO, _CATEGORY_TITLE_ANALY, _CATEGORY_TITLE_ADVER, _CATEGORY_TITLE_SOCIA, _CATEGORY_TITLE_UNCLA, _CATEGORY_DESCRIPTION, _CATEGORY_DESCRIPTION2, _CATEGORY_DESCRIPTION3, _CATEGORY_DESCRIPTION4, _CATEGORY_DESCRIPTION5, _CATEGORY_DESCRIPTION6, _COOKIE_DETAILS_TITLE, _COOKIE_DETAILS_TITLE2, _COOKIE_DETAILS_TITLE3, _COOKIE_DETAILS_TITLE4, _COOKIE_DETAILS_TITLE5, _COOKIE_DETAILS_TITLE6;


var PREFERENCE_TITLE = (_PREFERENCE_TITLE = {}, defineProperty_default()(_PREFERENCE_TITLE, ENGLISH, 'Your Cookie Preferences'), defineProperty_default()(_PREFERENCE_TITLE, GERMAN, 'Ihre Cookie-Einstellungen'), defineProperty_default()(_PREFERENCE_TITLE, FRENCH, 'Vos préférences en matière de cookies'), defineProperty_default()(_PREFERENCE_TITLE, SPANISH, 'Sus preferencias de cookies'), defineProperty_default()(_PREFERENCE_TITLE, ITALIAN, 'Le tue preferenze sui cookie'), _PREFERENCE_TITLE);
var COOKIE_DESCRIPTION = (_COOKIE_DESCRIPTION = {}, defineProperty_default()(_COOKIE_DESCRIPTION, ENGLISH, 'We use different types of cookies to optimize your experience on our website. Click on the categories below to learn more about their purpose. You may choose which types of cookies to allow and can change your preferences at any time. Remember that disabling cookies may affect your experience on the website. You can learn more about how we use cookies by visiting our '), defineProperty_default()(_COOKIE_DESCRIPTION, GERMAN, 'Wir verwenden verschiedene Arten von Cookies, um Ihr Erlebnis auf unserer Website zu optimieren. Klicken Sie auf die nachfolgenden Kategorien, um mehr über deren Zweck zu erfahren. Sie können auswählen, welche Arten von Cookies zugelassen werden sollen, und Sie können Ihre Einstellungen jederzeit ändern. Denken Sie daran, dass das Deaktivieren von Cookies Ihr Erlebnis auf der Website beeinträchtigen kann. Weitere Informationen darüber, wie wir Cookies verwenden, finden Sie in unserer '), defineProperty_default()(_COOKIE_DESCRIPTION, FRENCH, 'Nous utilisons différents types de cookies pour optimiser votre expérience sur notre site Web. Cliquez sur les catégories ci-dessous pour en savoir plus sur l’objectif qu’ils servent. Vous pouvez choisir les types de cookies à autoriser et modifier vos préférences à tout moment. N\'oubliez pas que désactiver des cookies peut affecter votre expérience sur le site Web. Pour en savoir plus sur la façon dont nous utilisons les cookies, consultez notre Politique en '), defineProperty_default()(_COOKIE_DESCRIPTION, SPANISH, 'Utilizamos diferentes tipos de cookies para optimizar su experiencia en nuestra página web. Haga clic en las categorías a continuación para obtener más información sobre su propósito. Puede elegir qué tipo de cookies permitir y puede cambiar sus preferencias en cualquier momento. Recuerde que deshabilitar las cookies podría afectar a su experiencia en la página web. Puede obtener más información sobre cómo utilizamos las cookies visitando nuestra '), defineProperty_default()(_COOKIE_DESCRIPTION, ITALIAN, 'Utilizziamo diversi tipi di cookie per ottimizzare l’esperienza sul nostro sito web. Cliccare sulle diverse categorie per ulteriori informazioni. È possibile scegliere quali tipi di cookie autorizzare e modificare le proprie preferenze in qualsiasi momento. Disabilitare i cookie può influire sull’esperienza di utilizzo del sito. È possibile scoprire ulteriori informazioni sull’utilizzo dei cookie visitando la nostra '), _COOKIE_DESCRIPTION);
var COOKIE_POLICY_LINK = (_COOKIE_POLICY_LINK = {}, defineProperty_default()(_COOKIE_POLICY_LINK, ENGLISH, 'Cookie Policy'), defineProperty_default()(_COOKIE_POLICY_LINK, GERMAN, 'Cookie-Richtlinie'), defineProperty_default()(_COOKIE_POLICY_LINK, FRENCH, 'Politique en matière de cookies'), defineProperty_default()(_COOKIE_POLICY_LINK, SPANISH, 'Política de cookies'), defineProperty_default()(_COOKIE_POLICY_LINK, ITALIAN, 'Informativa sui cookie'), _COOKIE_POLICY_LINK);
var AND = (_AND = {}, defineProperty_default()(_AND, ENGLISH, ' and '), defineProperty_default()(_AND, GERMAN, ' und '), defineProperty_default()(_AND, FRENCH, ' et '), defineProperty_default()(_AND, SPANISH, ' y '), defineProperty_default()(_AND, ITALIAN, ' e '), _AND);
var PRIVACY_POLICY_LINK = (_PRIVACY_POLICY_LINK = {}, defineProperty_default()(_PRIVACY_POLICY_LINK, ENGLISH, 'Privacy Policy'), defineProperty_default()(_PRIVACY_POLICY_LINK, GERMAN, 'Datenschutzrichtlinien'), defineProperty_default()(_PRIVACY_POLICY_LINK, FRENCH, 'Politique de confidentialité'), defineProperty_default()(_PRIVACY_POLICY_LINK, SPANISH, 'Política de privacidad'), defineProperty_default()(_PRIVACY_POLICY_LINK, ITALIAN, 'Informativa sulla privacy'), _PRIVACY_POLICY_LINK);
var SAVE_MY_PREFERENCE = (_SAVE_MY_PREFERENCE = {}, defineProperty_default()(_SAVE_MY_PREFERENCE, ENGLISH, 'Save My Preferences'), defineProperty_default()(_SAVE_MY_PREFERENCE, GERMAN, 'Meine Einstellungen Speichern'), defineProperty_default()(_SAVE_MY_PREFERENCE, FRENCH, 'Enregistrer mes préférences'), defineProperty_default()(_SAVE_MY_PREFERENCE, SPANISH, 'Guardar mis preferencias'), defineProperty_default()(_SAVE_MY_PREFERENCE, ITALIAN, 'Salva le mie preferenze'), _SAVE_MY_PREFERENCE);
var DECLINE_ALL = (_DECLINE_ALL = {}, defineProperty_default()(_DECLINE_ALL, ENGLISH, 'Decline All'), defineProperty_default()(_DECLINE_ALL, GERMAN, 'Alle ablehnen'), defineProperty_default()(_DECLINE_ALL, FRENCH, 'Refuser tout'), defineProperty_default()(_DECLINE_ALL, SPANISH, 'Rechazar Todo'), defineProperty_default()(_DECLINE_ALL, ITALIAN, 'Rifiuta tutto'), _DECLINE_ALL);
var ALLOW_ALL = (_ALLOW_ALL = {}, defineProperty_default()(_ALLOW_ALL, ENGLISH, 'Allow All'), defineProperty_default()(_ALLOW_ALL, GERMAN, 'Alle Erlauben'), defineProperty_default()(_ALLOW_ALL, FRENCH, 'Autoriser tous'), defineProperty_default()(_ALLOW_ALL, SPANISH, 'Permitir todo'), defineProperty_default()(_ALLOW_ALL, ITALIAN, 'Permetti tutto'), _ALLOW_ALL);
var DISCARD_CHANGES = (_DISCARD_CHANGES = {}, defineProperty_default()(_DISCARD_CHANGES, ENGLISH, 'Discard Changes'), defineProperty_default()(_DISCARD_CHANGES, GERMAN, 'Änderungen verwerfen'), defineProperty_default()(_DISCARD_CHANGES, FRENCH, 'Annuler les modifications'), defineProperty_default()(_DISCARD_CHANGES, SPANISH, 'Descartar Cambios'), defineProperty_default()(_DISCARD_CHANGES, ITALIAN, 'Non salvare le modifiche'), _DISCARD_CHANGES);
var SAVE_AND_FINISH = (_SAVE_AND_FINISH = {}, defineProperty_default()(_SAVE_AND_FINISH, ENGLISH, 'Save and Finish'), defineProperty_default()(_SAVE_AND_FINISH, GERMAN, 'Speichern und beenden'), defineProperty_default()(_SAVE_AND_FINISH, FRENCH, 'Sauvegarder et terminer'), defineProperty_default()(_SAVE_AND_FINISH, SPANISH, 'Guardar y Finalizar'), defineProperty_default()(_SAVE_AND_FINISH, ITALIAN, 'Salva e termina'), _SAVE_AND_FINISH);
var messages_CATEGORY_TITLE_ESSENTIAL = (messages_CATEGORY_TITLE_ESSEN = {}, defineProperty_default()(messages_CATEGORY_TITLE_ESSEN, ENGLISH, 'Essential'), defineProperty_default()(messages_CATEGORY_TITLE_ESSEN, GERMAN, 'Wesentlich'), defineProperty_default()(messages_CATEGORY_TITLE_ESSEN, FRENCH, 'Essentiels'), defineProperty_default()(messages_CATEGORY_TITLE_ESSEN, SPANISH, 'Básico'), defineProperty_default()(messages_CATEGORY_TITLE_ESSEN, ITALIAN, 'Cookie di base'), messages_CATEGORY_TITLE_ESSEN);
var CATEGORY_TITLE_PREFORMANCE = (_CATEGORY_TITLE_PREFO = {}, defineProperty_default()(_CATEGORY_TITLE_PREFO, ENGLISH, 'Performance and functionality'), defineProperty_default()(_CATEGORY_TITLE_PREFO, GERMAN, 'Leistung und Funktionalität'), defineProperty_default()(_CATEGORY_TITLE_PREFO, FRENCH, 'Performance et fonctionnalité'), defineProperty_default()(_CATEGORY_TITLE_PREFO, SPANISH, 'Rendimiento y funcionalidad'), defineProperty_default()(_CATEGORY_TITLE_PREFO, ITALIAN, 'Cookie di prestazioni e funzionalità'), _CATEGORY_TITLE_PREFO);
var CATEGORY_TITLE_ANALYTICS = (_CATEGORY_TITLE_ANALY = {}, defineProperty_default()(_CATEGORY_TITLE_ANALY, ENGLISH, 'Analytics and customization'), defineProperty_default()(_CATEGORY_TITLE_ANALY, GERMAN, 'Analyse und Anpassung'), defineProperty_default()(_CATEGORY_TITLE_ANALY, FRENCH, 'Analyse et personnalisation'), defineProperty_default()(_CATEGORY_TITLE_ANALY, SPANISH, 'Análisis y personalización'), defineProperty_default()(_CATEGORY_TITLE_ANALY, ITALIAN, 'Cookie di analisi e personalizzazione'), _CATEGORY_TITLE_ANALY);
var CATEGORY_TITLE_ADVERTISING = (_CATEGORY_TITLE_ADVER = {}, defineProperty_default()(_CATEGORY_TITLE_ADVER, ENGLISH, 'Advertising'), defineProperty_default()(_CATEGORY_TITLE_ADVER, GERMAN, 'Werbung'), defineProperty_default()(_CATEGORY_TITLE_ADVER, FRENCH, 'Publicité'), defineProperty_default()(_CATEGORY_TITLE_ADVER, SPANISH, 'Anuncios'), defineProperty_default()(_CATEGORY_TITLE_ADVER, ITALIAN, 'Cookie pubblicitari'), _CATEGORY_TITLE_ADVER);
var CATEGORY_TITLE_SOCIAL = (_CATEGORY_TITLE_SOCIA = {}, defineProperty_default()(_CATEGORY_TITLE_SOCIA, ENGLISH, 'Social networking'), defineProperty_default()(_CATEGORY_TITLE_SOCIA, GERMAN, 'Soziale Netzwerke'), defineProperty_default()(_CATEGORY_TITLE_SOCIA, FRENCH, 'Réseaux sociaux'), defineProperty_default()(_CATEGORY_TITLE_SOCIA, SPANISH, 'Redes sociales'), defineProperty_default()(_CATEGORY_TITLE_SOCIA, ITALIAN, 'Cookie di social networking'), _CATEGORY_TITLE_SOCIA);
var CATEGORY_TITLE_UNCLASSIFIED = (_CATEGORY_TITLE_UNCLA = {}, defineProperty_default()(_CATEGORY_TITLE_UNCLA, ENGLISH, 'Unclassified'), defineProperty_default()(_CATEGORY_TITLE_UNCLA, GERMAN, 'Nicht klassifiziert'), defineProperty_default()(_CATEGORY_TITLE_UNCLA, FRENCH, 'Hors classement'), defineProperty_default()(_CATEGORY_TITLE_UNCLA, SPANISH, 'Sin clasificar'), defineProperty_default()(_CATEGORY_TITLE_UNCLA, ITALIAN, 'Cookie non classificati'), _CATEGORY_TITLE_UNCLA);
var CATEGORY_DESCRIPTION_ESSENTIAL = (_CATEGORY_DESCRIPTION = {}, defineProperty_default()(_CATEGORY_DESCRIPTION, ENGLISH, 'These cookies are strictly necessary to provide you with services available through our websites and to use some of its features, such as access to secure areas.'), defineProperty_default()(_CATEGORY_DESCRIPTION, GERMAN, 'Diese Cookies sind unbedingt erforderlich, um Ihnen die auf unseren Websites verfügbaren Dienste bereitzustellen und einige ihrer Funktionen zu nutzen, beispielsweise den Zugriff auf geschützte Bereiche.'), defineProperty_default()(_CATEGORY_DESCRIPTION, FRENCH, 'Ces cookies sont strictement nécessaires pour vous fournir les services disponibles sur nos sites web et pour utiliser certaines de leurs fonctionnalités, telles que l’accès à des zones sécurisées.'), defineProperty_default()(_CATEGORY_DESCRIPTION, SPANISH, 'Estas cookies son estrictamente necesarias para proporcionarle los servicios disponibles a través de nuestras páginas web y para utilizar algunas de sus funciones, como el acceso a áreas seguras.'), defineProperty_default()(_CATEGORY_DESCRIPTION, ITALIAN, 'Questi cookie sono strettamente necessari per fornire i servizi disponibili attraverso i nostri siti web e per utilizzare alcune delle loro funzionalità, come l’accesso alle aree protette.'), _CATEGORY_DESCRIPTION);
var CATEGORY_DESCRIPTION_PREFORMANCE = (_CATEGORY_DESCRIPTION2 = {}, defineProperty_default()(_CATEGORY_DESCRIPTION2, ENGLISH, 'These cookies are used to enhance the performance and functionality of our websites but are non-essential to their use. However, without these cookies, certain functionality(like videos) may become unavailable.'), defineProperty_default()(_CATEGORY_DESCRIPTION2, GERMAN, 'Diese Cookies werden verwendet, um die Leistung und Funktionalität unserer Websites zu verbessern, sind aber für deren Verwendung nicht wesentlich. Jedoch kann es passieren, dass ohne diese Cookies bestimmte Funktionen (wie Videos) nicht verfügbar sind.'), defineProperty_default()(_CATEGORY_DESCRIPTION2, FRENCH, 'Ces cookies sont utilisés pour améliorer la performance et les fonctionnalités de nos sites web mais ne sont pas essentiels à leur utilisation. Cependant, sans ces cookies, certaines fonctionnalités (telles que les vidéos) risquent de ne plus être disponibles.'), defineProperty_default()(_CATEGORY_DESCRIPTION2, SPANISH, 'Estas cookies se utilizan para mejorar el rendimiento y la funcionalidad de nuestras páginas web, pero no son esenciales para su uso. Sin embargo, sin estas cookies, ciertas funciones (como videos) podrían no estar disponibles.'), defineProperty_default()(_CATEGORY_DESCRIPTION2, ITALIAN, 'Questi cookie vengono utilizzati per migliorare le prestazioni e la funzionalità dei nostri siti web, ma non sono essenziali per il loro utilizzo. Tuttavia, senza questi cookie, alcune funzionalità (come i video) potrebbero non essere disponibili.'), _CATEGORY_DESCRIPTION2);
var CATEGORY_DESCRIPTION_ANALYTICS = (_CATEGORY_DESCRIPTION3 = {}, defineProperty_default()(_CATEGORY_DESCRIPTION3, ENGLISH, 'These cookies collect information that is used either in aggregate form to help us understand how our websites are being used or how effective our marketing campaigns are, or to help us customize our websites for you.'), defineProperty_default()(_CATEGORY_DESCRIPTION3, GERMAN, 'Diese Cookies erfassen Informationen, die entweder in zusammengefasster Form verwendet werden, damit wir leichter verstehen können, wie unsere Websites verwendet werden oder wie effektiv unsere Marketingkampagnen sind, oder um uns dabei zu unterstützen, unsere Websites für Sie anzupassen.'), defineProperty_default()(_CATEGORY_DESCRIPTION3, FRENCH, 'Ces cookies collectent des informations qui sont utilisées soit globalement pour nous aider à comprendre comment nos sites web sont utilisés ou à mesurer l\'efficacité de nos campagnes de marketing, soit pour nous aider à personnaliser nos sites web.'), defineProperty_default()(_CATEGORY_DESCRIPTION3, SPANISH, 'Estas cookies recopilan información que se usa en forma agregada para ayudarnos a comprender cómo se utilizan nuestras páginas web o cómo son de efectivas nuestras campañas de marketing, o para ayudarnos a personalizar nuestras páginas web para usted.'), defineProperty_default()(_CATEGORY_DESCRIPTION3, ITALIAN, 'Questi cookie raccolgono informazioni che vengono utilizzate in forma aggregata per aiutarci a capire come vengono utilizzati i nostri siti web o quanto efficaci sono le nostre campagne di marketing o per aiutarci a personalizzare i nostri siti web in base alle esigenze dell’utente.'), _CATEGORY_DESCRIPTION3);
var CATEGORY_DESCRIPTION_ADVERTISING = (_CATEGORY_DESCRIPTION4 = {}, defineProperty_default()(_CATEGORY_DESCRIPTION4, ENGLISH, 'These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.'), defineProperty_default()(_CATEGORY_DESCRIPTION4, GERMAN, 'Diese Cookies werden verwendet, um Werbebotschaften für Sie relevanter zu machen. Sie führen Funktionen aus, welche verhindern, dass dieselbe Anzeige ständig wiederholt wird, stellen sicher, dass Werbeanzeigen für Werbetreibende ordnungsgemäß angezeigt werden, und in einigen Fällen werden Anzeigen ausgewählt, die auf Ihren Interessen basieren.'), defineProperty_default()(_CATEGORY_DESCRIPTION4, FRENCH, 'Ces cookies sont utilisés pour rendre les messages publicitaires plus pertinents pour vous. Ils remplissent des fonctions telles qu’empêcher la même annonce de réapparaître en permanence, de veiller à ce que les annonces soient correctement affichées pour les annonceurs et, dans certains cas, de sélectionner des annonces basées sur vos intérêts.'), defineProperty_default()(_CATEGORY_DESCRIPTION4, SPANISH, 'Estas cookies se utilizan para hacer que los mensajes publicitarios sean más relevantes para usted. Realizan funciones como evitar que el mismo anuncio vuelva a aparecer continuamente, asegurando que los anuncios se muestren correctamente para los anunciantes y, en algunos casos, seleccionando anuncios que se basen en sus intereses.'), defineProperty_default()(_CATEGORY_DESCRIPTION4, ITALIAN, 'Questi cookie vengono utilizzati per rendere i messaggi pubblicitari più adatti all’utente. Questi cookie eseguono funzioni come impedire che lo stesso annuncio venga continuamente riprodotto, assicurando che gli annunci vengano visualizzati correttamente per gli inserzionisti e, in alcuni casi, selezionando annunci pubblicitari basati sugli interessi dell’utente.'), _CATEGORY_DESCRIPTION4);
var CATEGORY_DESCRIPTION_SOCIAL = (_CATEGORY_DESCRIPTION5 = {}, defineProperty_default()(_CATEGORY_DESCRIPTION5, ENGLISH, 'These cookies are used to enable you to share pages and content that you find interesting on our websites through third party social networking and other websites. These cookies may also be used for advertising purposes.'), defineProperty_default()(_CATEGORY_DESCRIPTION5, GERMAN, 'Diese Cookies werden verwendet, um Ihnen das Teilen von Seiten und Inhalten, die Sie auf unseren Websites interessant finden, über soziale Netzwerke Dritter und andere Websites zu ermöglichen. Diese Cookies können auch zu Werbezwecken verwendet werden.'), defineProperty_default()(_CATEGORY_DESCRIPTION5, FRENCH, 'Ces cookies sont utilisés pour vous permettre de partager des pages et du contenu que vous trouvez intéressants sur nos sites web via des réseaux sociaux tiers et d\'autres sites web. Ces cookies peuvent également être utilisés à des fins publicitaires.'), defineProperty_default()(_CATEGORY_DESCRIPTION5, SPANISH, 'Estas cookies se utilizan para permitirle compartir páginas y contenido que encuentre interesante en nuestras páginas web a través de redes sociales de terceros y otras páginas. Estas cookies también pueden utilizarse con fines publicitarios.'), defineProperty_default()(_CATEGORY_DESCRIPTION5, ITALIAN, 'Questi cookie vengono utilizzati per consentire all’utente di condividere pagine e contenuti presenti sui nostri siti web tramite social network di terzi e altri siti web. Questi cookie possono essere utilizzati anche a scopi pubblicitari.'), _CATEGORY_DESCRIPTION5);
var CATEGORY_DESCRIPTION_UNCLASSIFIED = (_CATEGORY_DESCRIPTION6 = {}, defineProperty_default()(_CATEGORY_DESCRIPTION6, ENGLISH, 'These are cookies that have not yet been categorized. We are in the process of classifying these cookies with the help of their providers.'), defineProperty_default()(_CATEGORY_DESCRIPTION6, GERMAN, 'Dies sind Cookies, die noch nicht kategorisiert wurden. Wir klassifizieren diese Cookies gerade mithilfe ihrer Anbieter.'), defineProperty_default()(_CATEGORY_DESCRIPTION6, FRENCH, 'Ce sont des cookies qui n\'ont pas encore été mis dans des catégories. Nous sommes en train de classer ces cookies avec l\'aide de leurs fournisseurs.'), defineProperty_default()(_CATEGORY_DESCRIPTION6, SPANISH, 'Estas son las cookies que aún no han sido categorizadas. Estamos en proceso de clasificar estas cookies con la ayuda de sus proveedores.'), defineProperty_default()(_CATEGORY_DESCRIPTION6, ITALIAN, 'Questi sono cookie non ancora categorizzati. Stiamo procedendo alla classificazione di questi cookie con l\'aiuto dei loro fornitori.'), _CATEGORY_DESCRIPTION6);
var COOKIE_DETAILS_TITLE_ESSENTIAL = (_COOKIE_DETAILS_TITLE = {}, defineProperty_default()(_COOKIE_DETAILS_TITLE, ENGLISH, 'Essential Cookies'), defineProperty_default()(_COOKIE_DETAILS_TITLE, GERMAN, 'Wesentlich'), defineProperty_default()(_COOKIE_DETAILS_TITLE, FRENCH, 'Essentiels'), defineProperty_default()(_COOKIE_DETAILS_TITLE, SPANISH, 'Básico'), defineProperty_default()(_COOKIE_DETAILS_TITLE, ITALIAN, 'Cookie di base'), _COOKIE_DETAILS_TITLE);
var COOKIE_DETAILS_TITLE_PREFORMANCE = (_COOKIE_DETAILS_TITLE2 = {}, defineProperty_default()(_COOKIE_DETAILS_TITLE2, ENGLISH, 'Performance and Functionality Cookies'), defineProperty_default()(_COOKIE_DETAILS_TITLE2, GERMAN, 'Leistung und Funktionalität'), defineProperty_default()(_COOKIE_DETAILS_TITLE2, FRENCH, 'Performance et fonctionnalité'), defineProperty_default()(_COOKIE_DETAILS_TITLE2, SPANISH, 'Rendimiento y funcionalidad'), defineProperty_default()(_COOKIE_DETAILS_TITLE2, ITALIAN, 'Cookie di prestazioni e funzionalità'), _COOKIE_DETAILS_TITLE2);
var COOKIE_DETAILS_TITLE_ANALYTICS = (_COOKIE_DETAILS_TITLE3 = {}, defineProperty_default()(_COOKIE_DETAILS_TITLE3, ENGLISH, 'Analytics and Customization Cookies'), defineProperty_default()(_COOKIE_DETAILS_TITLE3, GERMAN, 'Analyse und Anpassung'), defineProperty_default()(_COOKIE_DETAILS_TITLE3, FRENCH, 'Analyse et personnalisation'), defineProperty_default()(_COOKIE_DETAILS_TITLE3, SPANISH, 'Análisis y personalización'), defineProperty_default()(_COOKIE_DETAILS_TITLE3, ITALIAN, 'Cookie di analisi e personalizzazione'), _COOKIE_DETAILS_TITLE3);
var COOKIE_DETAILS_TITLE_ADVERTISING = (_COOKIE_DETAILS_TITLE4 = {}, defineProperty_default()(_COOKIE_DETAILS_TITLE4, ENGLISH, 'Advertising Cookies'), defineProperty_default()(_COOKIE_DETAILS_TITLE4, GERMAN, 'Werbung'), defineProperty_default()(_COOKIE_DETAILS_TITLE4, FRENCH, 'Publicité'), defineProperty_default()(_COOKIE_DETAILS_TITLE4, SPANISH, 'Anuncios'), defineProperty_default()(_COOKIE_DETAILS_TITLE4, ITALIAN, 'Cookie pubblicitari'), _COOKIE_DETAILS_TITLE4);
var COOKIE_DETAILS_TITLE_SOCIAL = (_COOKIE_DETAILS_TITLE5 = {}, defineProperty_default()(_COOKIE_DETAILS_TITLE5, ENGLISH, 'Social Networking Cookies'), defineProperty_default()(_COOKIE_DETAILS_TITLE5, GERMAN, 'Soziale Netzwerke'), defineProperty_default()(_COOKIE_DETAILS_TITLE5, FRENCH, 'Réseaux sociaux'), defineProperty_default()(_COOKIE_DETAILS_TITLE5, SPANISH, 'Redes sociales'), defineProperty_default()(_COOKIE_DETAILS_TITLE5, ITALIAN, 'Cookie di social networking'), _COOKIE_DETAILS_TITLE5);
var COOKIE_DETAILS_TITLE_UNCLASSIFIED = (_COOKIE_DETAILS_TITLE6 = {}, defineProperty_default()(_COOKIE_DETAILS_TITLE6, ENGLISH, 'Unclassified Cookies'), defineProperty_default()(_COOKIE_DETAILS_TITLE6, GERMAN, 'Nicht klassifiziert'), defineProperty_default()(_COOKIE_DETAILS_TITLE6, FRENCH, 'Hors classement'), defineProperty_default()(_COOKIE_DETAILS_TITLE6, SPANISH, 'Sin clasificar'), defineProperty_default()(_COOKIE_DETAILS_TITLE6, ITALIAN, 'Cookie non classificati'), _COOKIE_DETAILS_TITLE6);
;// CONCATENATED MODULE: ./widget/components/PreferenceModal/index.js









function PreferenceModal_createSuper(Derived) { var hasNativeReflectConstruct = PreferenceModal_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function PreferenceModal_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var PreferenceModal = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(PreferenceModal, _PureComponent);

  var _super = PreferenceModal_createSuper(PreferenceModal);

  function PreferenceModal() {
    var _this;

    classCallCheck_default()(this, PreferenceModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      essential: true,
      unclassified: _this.props.unclassified,
      performance: _this.props.performance,
      analytics: _this.props.analytics,
      advertising: _this.props.advertising,
      social_networking: _this.props.social_networking,
      isChanged: false,
      cookieDetailsTitle: '',
      cookieDetails: null
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "savePreference", function () {
      var _this$props = _this.props,
          acceptPolicy = _this$props.acceptPolicy,
          cookiePolicy = _this$props.cookiePolicy,
          cookies = _this$props.cookies,
          eventType = _this$props.eventType,
          handleToggle = _this$props.handleToggle;
      handleToggle();
      acceptPolicy(utils_updateCookieConsent(cookiePolicy, eventType, cookies, _this.state));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleToggleActive", function (category) {
      return function () {
        _this.setState(function (state) {
          var _ref;

          return _ref = {}, defineProperty_default()(_ref, category, !state[category]), defineProperty_default()(_ref, "isChanged", true), _ref;
        });
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleDiscardChanges", function () {
      _this.setState({
        isChanged: false,
        unclassified: _this.props.unclassified,
        performance: _this.props.performance,
        analytics: _this.props.analytics,
        advertising: _this.props.advertising,
        social_networking: _this.props.social_networking
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleShowCookieDetails", function (cookies, title) {
      return function () {
        _this.setState({
          cookieDetailsTitle: title,
          cookieDetails: cookies
        });
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClickBack", function () {
      _this.setState({
        cookieDetailsTitle: '',
        cookieDetails: null
      });
    });

    return _this;
  }

  createClass_default()(PreferenceModal, [{
    key: "componentWillReceiveProps",
    // TODO: This is generating warnings, and this usage is actually
    // an anti-pattern (https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#anti-pattern-unconditionally-copying-props-to-state). We need to re-evaluate
    // how we're handling state in this component, but that's out of scope
    // for the bug I'm currently working on.
    value: function componentWillReceiveProps(nextProps) {
      var unclassified = nextProps.unclassified,
          performance = nextProps.performance,
          analytics = nextProps.analytics,
          advertising = nextProps.advertising,
          social_networking = nextProps.social_networking;
      this.setState(function(){});
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getCookieSetting();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          currentStyle = _this$props2.currentStyle,
          acceptAll = _this$props2.acceptAll,
          declineAll = _this$props2.declineAll,
          cookies = _this$props2.cookies,
          handleClickPolicy = _this$props2.handleClickPolicy,
          show = _this$props2.show,
          hasPrivacyPolicy = _this$props2.hasPrivacyPolicy,
          handleClickPrivacyPolicy = _this$props2.handleClickPrivacyPolicy,
          handleToggle = _this$props2.handleToggle;
      var _this$state = this.state,
          isChanged = _this$state.isChanged,
          cookieDetailsTitle = _this$state.cookieDetailsTitle,
          cookieDetails = _this$state.cookieDetails;
      var preferenceDescription = {
        essential: selectMessage(CATEGORY_DESCRIPTION_ESSENTIAL),
        performanceAndFunctionality: selectMessage(CATEGORY_DESCRIPTION_PREFORMANCE),
        analyticsAndCustomization: selectMessage(CATEGORY_DESCRIPTION_ANALYTICS),
        advertising: selectMessage(CATEGORY_DESCRIPTION_ADVERTISING),
        socialNetworking: selectMessage(CATEGORY_DESCRIPTION_SOCIAL),
        unclassifiedCookie: selectMessage(CATEGORY_DESCRIPTION_UNCLASSIFIED)
      };
      var detailList = [{
        title: selectMessage(messages_CATEGORY_TITLE_ESSENTIAL),
        component: /*#__PURE__*/jsx_default()(PreferenceInformation, {
          preferenceDescription: preferenceDescription.essential
        }),
        onClickCookieDetails: this.handleShowCookieDetails(cookies.essential, selectMessage(COOKIE_DETAILS_TITLE_ESSENTIAL))
      }, {
        title: selectMessage(CATEGORY_TITLE_PREFORMANCE),
        component: /*#__PURE__*/jsx_default()(PreferenceInformation, {
          preferenceDescription: preferenceDescription.performanceAndFunctionality
        }),
        isActive: this.state.performance,
        toggleActive: this.handleToggleActive('performance'),
        name: 'performance',
        onClickCookieDetails: this.handleShowCookieDetails(cookies.performance, selectMessage(COOKIE_DETAILS_TITLE_PREFORMANCE))
      }, {
        title: selectMessage(CATEGORY_TITLE_ANALYTICS),
        component: /*#__PURE__*/jsx_default()(PreferenceInformation, {
          preferenceDescription: preferenceDescription.analyticsAndCustomization
        }),
        isActive: this.state.analytics,
        toggleActive: this.handleToggleActive('analytics'),
        name: 'analytics',
        onClickCookieDetails: this.handleShowCookieDetails(cookies.analytics, selectMessage(COOKIE_DETAILS_TITLE_ANALYTICS))
      }, {
        title: selectMessage(CATEGORY_TITLE_ADVERTISING),
        component: /*#__PURE__*/jsx_default()(PreferenceInformation, {
          preferenceDescription: preferenceDescription.advertising
        }),
        isActive: this.state.advertising,
        toggleActive: this.handleToggleActive('advertising'),
        name: 'advertising',
        onClickCookieDetails: this.handleShowCookieDetails(cookies.advertising, selectMessage(COOKIE_DETAILS_TITLE_ADVERTISING))
      }, {
        title: selectMessage(CATEGORY_TITLE_SOCIAL),
        component: /*#__PURE__*/jsx_default()(PreferenceInformation, {
          preferenceDescription: preferenceDescription.socialNetworking
        }),
        isActive: this.state.social_networking,
        toggleActive: this.handleToggleActive('social_networking'),
        name: 'social_networking',
        onClickCookieDetails: this.handleShowCookieDetails(cookies.social_networking, selectMessage(COOKIE_DETAILS_TITLE_SOCIAL))
      }, {
        title: selectMessage(CATEGORY_TITLE_UNCLASSIFIED),
        component: /*#__PURE__*/jsx_default()(PreferenceInformation, {
          preferenceDescription: preferenceDescription.unclassifiedCookie
        }),
        isActive: this.state.unclassified,
        toggleActive: this.handleToggleActive('unclassified'),
        name: 'unclassified',
        onClickCookieDetails: this.handleShowCookieDetails(cookies.unclassified, selectMessage(COOKIE_DETAILS_TITLE_UNCLASSIFIED))
      }];
      var normalizedCookieDetails = !!cookieDetails && normalizeCookies(cookieDetails);
      var cookieProviders = Object.keys(normalizedCookieDetails);
      return /*#__PURE__*/jsx_default()(Dialog, {
        fixedBody: true,
        showDialog: show,
        size: "modal-md"
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["preference-modal"],
        style: {
          backgroundColor: currentStyle.background
        }
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["close-tag-container"]
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["close-tag"],
        onClick: handleToggle
      })), !cookieDetails ? /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["preference-container"]
      }, void 0, /*#__PURE__*/jsx_default()("h2", {
        className: stylesheets_consent_banner["preference-title"],
        style: {
          color: currentStyle.color,
          fontFamily: currentStyle.font_family
        }
      }, void 0, selectMessage(PREFERENCE_TITLE)), /*#__PURE__*/jsx_default()("p", {
        className: stylesheets_consent_banner.description,
        style: {
          color: currentStyle.color,
          fontFamily: currentStyle.font_family
        }
      }, void 0, selectMessage(COOKIE_DESCRIPTION), /*#__PURE__*/jsx_default()("span", {
        className: stylesheets_consent_banner["policy-link"],
        onClick: handleClickPolicy,
        style: {
          color: currentStyle.color,
          fontFamily: currentStyle.font_family
        }
      }, void 0, selectMessage(COOKIE_POLICY_LINK)), hasPrivacyPolicy && /*#__PURE__*/jsx_default()(react.Fragment, {}, void 0, selectMessage(AND), /*#__PURE__*/jsx_default()("span", {
        className: stylesheets_consent_banner["policy-link"],
        onClick: handleClickPrivacyPolicy,
        style: {
          color: currentStyle.color,
          fontFamily: currentStyle.font_family
        }
      }, void 0, selectMessage(PRIVACY_POLICY_LINK))), '.'), /*#__PURE__*/jsx_default()(AccordionList, {
        currentStyle: currentStyle,
        detailList: detailList
      })) : /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["preference-container"]
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["back-button"],
        onClick: this.handleClickBack,
        style: {
          color: currentStyle.color,
          fontFamily: currentStyle.font_family,
          borderColor: currentStyle.color
        }
      }, void 0, "Back"), /*#__PURE__*/jsx_default()("h2", {
        className: stylesheets_consent_banner["cookie-details-title"],
        style: {
          color: currentStyle.color,
          fontFamily: currentStyle.font_family
        }
      }, void 0, cookieDetailsTitle), /*#__PURE__*/jsx_default()(CookieDetailsTableList, {
        currentStyle: currentStyle,
        cookieProviders: cookieProviders,
        normalizedCookieDetails: normalizedCookieDetails
      })), isChanged ? /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner.footer
      }, void 0, /*#__PURE__*/jsx_default()(Button, {
        text: selectMessage(DISCARD_CHANGES),
        onClick: this.handleDiscardChanges,
        className: "cookie-preference",
        style: {
          color: currentStyle.btn_text_color,
          fontFamily: currentStyle.font_family,
          background: currentStyle.btn_background
        }
      }), /*#__PURE__*/jsx_default()(Button, {
        text: selectMessage(SAVE_AND_FINISH),
        onClick: this.savePreference,
        className: "cookie-preference",
        style: {
          color: currentStyle.btn_text_color,
          fontFamily: currentStyle.font_family,
          background: currentStyle.btn_background
        }
      })) : /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner.footer
      }, void 0, /*#__PURE__*/jsx_default()(Button, {
        text: selectMessage(DECLINE_ALL),
        onClick: declineAll,
        className: "cookie-preference",
        style: {
          color: currentStyle.btn_text_color,
          fontFamily: currentStyle.font_family,
          background: currentStyle.btn_background
        }
      }), /*#__PURE__*/jsx_default()(Button, {
        text: selectMessage(ALLOW_ALL),
        onClick: acceptAll,
        className: "cookie-preference",
        style: {
          color: currentStyle.btn_text_color,
          fontFamily: currentStyle.font_family,
          background: currentStyle.btn_background
        }
      }))));
    }
  }]);

  return PreferenceModal;
}(react.PureComponent);

defineProperty_default()(PreferenceModal, "defaultProps", {
  acceptAll: function acceptAll() {},
  declineAll: function declineAll() {},
  acceptPolicy: function acceptPolicy() {},
  advertising: false,
  analytics: false,
  cookies: {},
  cookiePolicy: {},
  getCookieSetting: function getCookieSetting() {},
  handleClickPolicy: function handleClickPolicy() {},
  handleToggle: function handleToggle() {},
  performance: false,
  show: false,
  social_networking: false,
  unclassified: false,
  hasPrivacyPolicy: false,
  handleClickPrivacyPolicy: function handleClickPrivacyPolicy() {}
});


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./widget/components/Switch/switch.scss
var Switch_switch = __webpack_require__(2319);
;// CONCATENATED MODULE: ./widget/components/Switch/switch.scss

            

var switch_options = {};

switch_options.insert = "head";
switch_options.singleton = false;

var switch_update = injectStylesIntoStyleTag_default()(Switch_switch/* default */.Z, switch_options);



/* harmony default export */ const components_Switch_switch = (Switch_switch/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./widget/components/Switch/index.js








function Switch_createSuper(Derived) { var hasNativeReflectConstruct = Switch_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Switch_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Switch = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(Switch, _PureComponent);

  var _super = Switch_createSuper(Switch);

  function Switch() {
    classCallCheck_default()(this, Switch);

    return _super.apply(this, arguments);
  }

  createClass_default()(Switch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          checked = _this$props.checked,
          name = _this$props.name,
          dataTracking = _this$props.dataTracking,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          currentStyle = _this$props.currentStyle;
      return /*#__PURE__*/jsx_default()("label", {}, void 0, /*#__PURE__*/jsx_default()("input", {
        type: "checkbox",
        name: name,
        id: name,
        checked: checked,
        onChange: disabled ? null : onChange,
        disabled: disabled,
        className: components_Switch_switch.checkbox,
        "data-tracking": dataTracking
      }), /*#__PURE__*/jsx_default()("label", {
        className: components_Switch_switch.switch,
        htmlFor: name,
        style: {
          background: currentStyle.btn_background
        }
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        className: components_Switch_switch["switch-button"],
        style: {
          background: currentStyle.btn_text_color
        }
      })));
    }
  }]);

  return Switch;
}(react.PureComponent);

defineProperty_default()(Switch, "defaultProps", {
  checked: false,
  name: 'switch',
  dataTracking: 'switch',
  onChange: function onChange() {
    return console.log('on change');
  },
  toggleStatus: false,
  disabled: false
});


;// CONCATENATED MODULE: ./widget/components/index.js







// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(319);
;// CONCATENATED MODULE: ./src/components/DocumentPreview/utils.js



var _defaultStyle;

function utils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function utils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { utils_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { utils_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var BACKGROUND = 'background';
var DOCUMENT_CUSTOMIZE_TITLE = 'documentCustomizeTitle';
var DOCUMENT_CUSTOMIZE_SUBTITLE = 'documentCustomizeSubtitle';
var DOCUMENT_CUSTOMIZE_HEADING_1 = 'documentCustomizeHeading1';
var DOCUMENT_CUSTOMIZE_HEADING_2 = 'documentCustomizeHeading2';
var DOCUMENT_CUSTOMIZE_BODY_TEXT = 'documentCustomizeBodyText';
var DOCUMENT_CUSTOMIZE_LINK = 'documentCustomizeLink';
var CREATE_NEW_THEME = 'Create New Theme';
var cmdKey = 91;
var cKey = 67;
var xKey = 88;
var aKey = 65;
var styleForms = [BACKGROUND, DOCUMENT_CUSTOMIZE_TITLE, DOCUMENT_CUSTOMIZE_SUBTITLE, DOCUMENT_CUSTOMIZE_HEADING_1, DOCUMENT_CUSTOMIZE_HEADING_2, DOCUMENT_CUSTOMIZE_BODY_TEXT, DOCUMENT_CUSTOMIZE_LINK];

var getStyle = function getStyle() {
  var fontColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#000000';
  return {
    'font-family': 'Arial',
    'font-size': '8px',
    color: fontColor
  };
};

var defaultStyle = (_defaultStyle = {}, defineProperty_default()(_defaultStyle, BACKGROUND, {
  background: '#ffffff'
}), defineProperty_default()(_defaultStyle, DOCUMENT_CUSTOMIZE_TITLE, getStyle()), defineProperty_default()(_defaultStyle, DOCUMENT_CUSTOMIZE_SUBTITLE, getStyle('#595959')), defineProperty_default()(_defaultStyle, DOCUMENT_CUSTOMIZE_HEADING_1, getStyle()), defineProperty_default()(_defaultStyle, DOCUMENT_CUSTOMIZE_HEADING_2, getStyle()), defineProperty_default()(_defaultStyle, DOCUMENT_CUSTOMIZE_BODY_TEXT, getStyle('#595959')), defineProperty_default()(_defaultStyle, DOCUMENT_CUSTOMIZE_LINK, getStyle('#3030F1')), _defaultStyle);

var filterByName = function(){};

var filterById = function(){};

var getTheme = function getTheme(filter, themes, f) {
  var theme = themes.customize_themes.find(function (theme) {
    return f(theme, filter);
  });

  if (!theme) {
    return utils_objectSpread(utils_objectSpread({}, themes.default_theme), {}, {
      id: null
    });
  }

  return theme;
};

getTheme.DEFAULT_THEME = 'Sharp (Default)';

var getThemeByName = function getThemeByName(name, themes) {
  return getTheme(name, themes, filterByName);
};

var getThemeById = function getThemeById(id, themes) {
  return getTheme(id, themes, filterById);
};

var getThemesList = function getThemesList() {
  var themes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return [CREATE_NEW_THEME].concat(_toConsumableArray(themes.map(function (theme) {
    return theme.data.name;
  })));
};

var ctrlDown = false;

var copyOnKeyUp = function copyOnKeyUp(e) {
  if (e.keyCode === e.ctrlKey || e.keyCode === cmdKey) {
    ctrlDown = false;
  }
};

var disabledCopy = function disabledCopy(e) {
  if (e.ctrlKey || e.keyCode === cmdKey) {
    ctrlDown = true;
  }

  if (ctrlDown && (e.keyCode === cKey || e.keyCode === xKey || e.keyCode === aKey)) {
    e.preventDefault();
    return false;
  }
};

/* harmony default export */ const utils = ((/* unused pure expression or super */ null && (styleForms)));

;// CONCATENATED MODULE: ./widget/utils/selectors.js


var styleSelector = function styleSelector(_ref) {
  var consent_theme_id = _ref.consent_theme_id,
      consent_themes = _ref.consent_themes,
      default_themes = _ref.default_themes,
      theme_color = _ref.theme_color;

  if (consent_theme_id) {
    var chosenTheme = consent_themes.find(function (theme) {
      return consent_theme_id === theme.id;
    });
    return chosenTheme.data;
  } else {
    return default_themes[theme_color];
  }
};

var backgroundSelector = function backgroundSelector(doc) {
  if (doc.theme_id) {
    var theme = getThemeById(doc.theme_id, doc.themes);
    return theme.data.elements_css[0].style.background;
  }

  return 'white';
};

/* harmony default export */ const selectors = ({
  styleSelector: styleSelector,
  backgroundSelector: backgroundSelector
});
;// CONCATENATED MODULE: ./widget/utils/combineStyle.js
/* harmony default export */ const combineStyle = (function (_ref) {
  var font_family = _ref.font_family,
      font_size = _ref.font_size,
      color = _ref.color,
      background = _ref.background,
      btn_background = _ref.btn_background,
      btn_text_color = _ref.btn_text_color;
  return {
    previewStyle: {
      fontFamily: font_family,
      fontSize: font_size,
      color: color,
      background: background
    },
    btnStyle: {
      background: btn_background,
      color: btn_text_color,
      fontSize: font_size,
      fontFamily: font_family
    },
    textStyle: {
      fontFamily: font_family,
      fontSize: font_size,
      color: color
    }
  };
});
;// CONCATENATED MODULE: ./widget/utils/matchAll.js
/* harmony default export */ const matchAll = (function (string, regExp) {
  var matches = [];
  var match;

  while ((match = regExp.exec(string)) !== null) {
    matches.push(match);
  }

  return matches;
});
;// CONCATENATED MODULE: ./widget/utils/textGenerator/messages.js


var _PRIVACY_POLICY, _TERMS_OF_USE, _COOKIE_POLICY, _COOKIE_PREFERENCE;


var PRIVACY_POLICY = (_PRIVACY_POLICY = {}, defineProperty_default()(_PRIVACY_POLICY, ENGLISH, 'Privacy Policy'), defineProperty_default()(_PRIVACY_POLICY, GERMAN, 'Datenschutzrichtlinien'), defineProperty_default()(_PRIVACY_POLICY, FRENCH, 'Politique de confidentialité'), defineProperty_default()(_PRIVACY_POLICY, SPANISH, 'Política de privacidad'), defineProperty_default()(_PRIVACY_POLICY, ITALIAN, 'Informativa sulla privacy'), _PRIVACY_POLICY);
var TERMS_OF_USE = (_TERMS_OF_USE = {}, defineProperty_default()(_TERMS_OF_USE, ENGLISH, 'Terms and Conditions'), defineProperty_default()(_TERMS_OF_USE, GERMAN, 'Allgemeinen Geschäftsbedingungen'), defineProperty_default()(_TERMS_OF_USE, FRENCH, 'Conditions générales'), defineProperty_default()(_TERMS_OF_USE, SPANISH, 'Términos y condiciones'), defineProperty_default()(_TERMS_OF_USE, ITALIAN, 'Termini e condizioni'), _TERMS_OF_USE);
var COOKIE_POLICY = (_COOKIE_POLICY = {}, defineProperty_default()(_COOKIE_POLICY, ENGLISH, 'Cookie Policy'), defineProperty_default()(_COOKIE_POLICY, GERMAN, 'Cookie-Richtlinie'), defineProperty_default()(_COOKIE_POLICY, FRENCH, 'Politique en matière de cookies'), defineProperty_default()(_COOKIE_POLICY, SPANISH, 'Política de cookies'), defineProperty_default()(_COOKIE_POLICY, ITALIAN, 'Informativa sui cookie'), _COOKIE_POLICY);
var COOKIE_PREFERENCE = (_COOKIE_PREFERENCE = {}, defineProperty_default()(_COOKIE_PREFERENCE, ENGLISH, 'Cookie Preferences.'), defineProperty_default()(_COOKIE_PREFERENCE, GERMAN, 'Cookie-Einstellungen'), defineProperty_default()(_COOKIE_PREFERENCE, FRENCH, 'Préférences relatives aux cookies'), defineProperty_default()(_COOKIE_PREFERENCE, SPANISH, 'Preferencias de cookies'), defineProperty_default()(_COOKIE_PREFERENCE, ITALIAN, 'Preferenze sui cookie.'), _COOKIE_PREFERENCE);
;// CONCATENATED MODULE: ./widget/utils/textGenerator/index.js



function textGenerator_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function textGenerator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { textGenerator_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { textGenerator_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var privacyTemplate = '$PRIVACY';
var termsTemplate = '$TERMS';
var cookieTemplate = '$COOKIE';
var policiesRegex = /\$PRIVACY|\$TERMS|\$COOKIE{.+}/g;
var cookieRegex = /\$COOKIE{(.+)}/g;
var linkStyle = {
  textDecoration: 'underline',
  cursor: 'pointer',
  fontWeight: 'normal'
};

var getDocument = function getDocument(key, documents) {
  var document;

  switch (key) {
    case privacyTemplate:
      document = documents.find(function (doc) {
        return doc.name.includes('Privacy');
      });
      break;

    case termsTemplate:
      document = documents.find(function (doc) {
        return doc.name.includes('Terms');
      });
      break;

    default:
      document = documents.find(function (doc) {
        return doc.name.includes('Cookie');
      });
      break;
  }

  return document;
};

var getPolicyLinkStyle = function getPolicyLinkStyle(key, documents) {
  var hasPolicy = !!getDocument(key, documents);
  return hasPolicy ? linkStyle : {};
};

var getPolicyClickHandler = function getPolicyClickHandler(key, documents, clickHandler) {
  var document = getDocument(key, documents);
  return document ? clickHandler(url.docLink(document.name, document.uuid), selectors.backgroundSelector(document)) : null;
};

var getReplacement = function getReplacement(key) {
  var normalizedKey = key.replace(cookieRegex, cookieTemplate);
  var replacement;

  switch (normalizedKey) {
    case privacyTemplate:
      replacement = selectMessage(PRIVACY_POLICY);
      break;

    case termsTemplate:
      replacement = selectMessage(TERMS_OF_USE);
      break;

    case cookieTemplate:
      replacement = getCookieCopyFromContent(key);
      break;

    default:
      replacement = '';
      break;
  }

  return replacement;
};

var getCookieCopyFromContent = function(){};

var getLinkifyPreferenceText = function getLinkifyPreferenceText(message, handleTogglePreference) {
  var normalMessages = message.split(selectMessage(COOKIE_PREFERENCE));

  if (!!normalMessages && handleTogglePreference) {
    return normalMessages.reduce(function (acc, normalMessage, index) {
      if (index > 0) {
        acc.push( /*#__PURE__*/jsx_default()("span", {
          onClick: handleTogglePreference,
          style: {
            textDecoration: 'underline',
            cursor: 'pointer'
          }
        }, void 0, selectMessage(COOKIE_PREFERENCE)));
      }

      acc.push(normalMessage);
      return acc;
    }, []);
  }

  return '';
};

/* harmony default export */ const textGenerator = (function (clickHandler, documents, message, style) {
  var enablePreferenceButton = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var handleTogglePreference = arguments.length > 5 ? arguments[5] : undefined;
  var links = matchAll(message, policiesRegex);
  var normalMessages = message.split(policiesRegex);
  var messages = [];
  normalMessages.forEach(function (normalMessage, index) {
    if (index > 0) {
      var key = links[index - 1][0];
      messages.push( /*#__PURE__*/jsx_default()("span", {
        style: textGenerator_objectSpread(textGenerator_objectSpread({}, style), getPolicyLinkStyle(key, documents)),
        onClick: getPolicyClickHandler(key, documents, clickHandler)
      }, index * 2 - 1, getReplacement(key)));
    }

    if (index >= normalMessages.length - 1) {
      messages.push( /*#__PURE__*/jsx_default()("span", {
        style: style
      }, index * 2, getLinkifyPreferenceText(normalMessage, handleTogglePreference)));
    } else {
      messages.push( /*#__PURE__*/jsx_default()("span", {
        style: style
      }, index * 2, normalMessage));
    }
  });
  return messages;
});
;// CONCATENATED MODULE: ./widget/hoc/preview.js










function preview_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function preview_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { preview_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { preview_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function preview_createSuper(Derived) { var hasNativeReflectConstruct = preview_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function preview_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var eventMap = {
  modal: 'clickwrap',
  banner: 'browsewrap',
  tooltip: 'tooltip'
};
var timestamp = null;

var getDisplayName = function(){};

var preview = function preview(WrappedComponent) {
  var preview = /*#__PURE__*/function (_PureComponent) {
    inherits_default()(preview, _PureComponent);

    var _super = preview_createSuper(preview);

    function preview() {
      var _this;

      classCallCheck_default()(this, preview);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      defineProperty_default()(assertThisInitialized_default()(_this), "state", {
        cookies: _this.props.cookies,
        cookieConsent: _this.props.cookieConsent,
        showAcceptBlock: false,
        showDoc: false,
        showPreference: false,
        docUrl: null,
        backPreferenceModal: false
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "getCookieSetting", function () {
        var cookiePolicy = _this.getCookiePolicy();

        var cookieConsent = getItem(TERMLY_COOKIE_CONSENT, ONE_YEAR_IN_SECS);

        if (cookiePolicy) {
          api(url.getCookies(cookiePolicy.uuid), 'GET', null, function () {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              cookies: []
            },
                cookies = _ref.cookies;

            _this.setState({
              cookies: cookies,
              cookieConsent: cookieConsent
            });
          });
        }
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "showContinueButton", function () {
        var _this$props = _this.props,
            showContinueBannerOutsideEU = _this$props.showContinueBannerOutsideEU,
            documents = _this$props.documents;
        var hasCookiePolicy = !!documents.find(function (document) {
          return document.name.includes('Cookie');
        });
        return !hasCookiePolicy || hasCookiePolicy && showContinueBannerOutsideEU;
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "textGenerator", function (handleClickLink, style, enablePreferenceButton) {
        var _this$props2 = _this.props,
            documents = _this$props2.documents,
            bannerCopy = _this$props2.bannerCopy;
        return textGenerator(handleClickLink, documents, bannerCopy, style, enablePreferenceButton, _this.handleTogglePreference);
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "acceptPolicy", function (callCookieConsent) {
        var _this$props3 = _this.props,
            documents = _this$props3.documents,
            displayStyle = _this$props3.consentSetting.display_style,
            consentMode = _this$props3.consentMode;
        var cookieConsent = _this.state.cookieConsent;
        callAcceptPolicy(documents, eventMap[displayStyle], callCookieConsent, cookieConsent, consentMode);
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "getCookiePolicy", function () {
        return _this.props.documents.find(function (doc) {
          return doc.name.includes('Cookie');
        });
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "getPrivacyPolicy", function () {
        return _this.props.documents.find(function (doc) {
          return doc.name.includes('Privacy');
        });
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "handleClickLink", function (docUrl, background) {
        return function(){};
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "handleCloseDocModal", function () {
        if (_this.state.backPreferenceModal) {
          _this.setState({
            showDoc: false,
            backPreferenceModal: false,
            showPreference: true
          });
        } else {
          _this.setState({
            showDoc: false
          });
        }
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "handleClickCookiePolicy", function () {
        var cookiePolicy = _this.getCookiePolicy();

        if (cookiePolicy) {
          var docUrl = url.docLink(cookiePolicy.name || '', cookiePolicy.uuid);
          var background = selectors.backgroundSelector(cookiePolicy);

          _this.setState({
            showDoc: true,
            showPreference: false,
            docUrl: docUrl,
            background: background,
            backPreferenceModal: true
          });
        }
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "handleClickPrivacyPolicy", function () {
        var privacyPolicy = _this.getPrivacyPolicy();

        if (privacyPolicy) {
          var docUrl = url.docLink(privacyPolicy.name || '', privacyPolicy.uuid);
          var background = selectors.backgroundSelector(privacyPolicy);

          _this.setState({
            showDoc: true,
            showPreference: false,
            docUrl: docUrl,
            background: background,
            backPreferenceModal: true
          });
        }
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "handleTogglePreference", function () {
        _this.setState(function(){});
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "acceptAll", function () {
        var _this$props4 = _this.props,
            displayStyle = _this$props4.consentSetting.display_style,
            cookies = _this$props4.cookies,
            closePreferenceModal = _this$props4.closePreferenceModal;

        _this.setState({
          showAcceptBlock: false,
          showPreference: false
        });

        closePreferenceModal && closePreferenceModal();

        _this.acceptPolicy(utils_updateCookieConsent(_this.getCookiePolicy(), eventMap[displayStyle], cookies));
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "declineAll", function () {
        var _this$props5 = _this.props,
            displayStyle = _this$props5.consentSetting.display_style,
            cookies = _this$props5.cookies,
            closePreferenceModal = _this$props5.closePreferenceModal;

        _this.setState({
          showAcceptBlock: false,
          showPreference: false
        });

        closePreferenceModal && closePreferenceModal();

        _this.acceptPolicy(utils_updateCookieConsent(_this.getCookiePolicy(), eventMap[displayStyle], cookies, {
          essential: true,
          advertising: false,
          analytics: false,
          performance: false,
          social_networking: false,
          unclassified: false
        }));
      });

      return _this;
    }

    createClass_default()(preview, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        timestamp = setTimeout(function () {
          _this2.setState({
            showAcceptBlock: true
          });
        }, 100);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(timestamp);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props6 = this.props,
            closePreferenceModal = _this$props6.closePreferenceModal,
            displayStyle = _this$props6.consentSetting.display_style,
            hasPrivacyPolicy = _this$props6.hasPrivacyPolicy,
            showLogo = _this$props6.showLogo,
            consentMode = _this$props6.consentMode;

        var _combineStyle = combineStyle(this.props.currentStyle),
            btnStyle = _combineStyle.btnStyle;

        var closeBtnStyle = preview_objectSpread(preview_objectSpread({}, btnStyle), {}, {
          display: 'block',
          margin: '24px auto 0'
        });

        var _this$state = this.state,
            showPreference = _this$state.showPreference,
            cookies = _this$state.cookies,
            cookieConsent = _this$state.cookieConsent,
            showDoc = _this$state.showDoc,
            docUrl = _this$state.docUrl,
            background = _this$state.background,
            backPreferenceModal = _this$state.backPreferenceModal;
        return /*#__PURE__*/jsx_default()("div", {}, void 0, /*#__PURE__*/react_default().createElement(WrappedComponent, extends_default()({}, this.props, this.state, {
          getCookiePolicy: this.getCookiePolicy,
          textGenerator: this.textGenerator,
          handleClickLink: this.handleClickLink,
          handleTogglePreference: this.handleTogglePreference,
          acceptAll: this.acceptAll,
          declineAll: this.declineAll,
          showContinueButton: this.showContinueButton(),
          showLogo: showLogo
        })), showDoc && /*#__PURE__*/jsx_default()(DocumentModal, {
          show: showDoc,
          docUrl: docUrl,
          modalStyle: {
            background: background
          }
        }, void 0, /*#__PURE__*/jsx_default()(Button, {
          style: closeBtnStyle,
          onClick: this.handleCloseDocModal,
          text: backPreferenceModal ? 'Back' : 'Close'
        })), showPreference && /*#__PURE__*/react_default().createElement(PreferenceModal, extends_default()({
          currentStyle: this.props.currentStyle,
          acceptAll: this.acceptAll,
          declineAll: this.declineAll,
          acceptPolicy: this.acceptPolicy,
          hasPrivacyPolicy: hasPrivacyPolicy,
          cookiePolicy: this.getCookiePolicy(),
          cookies: cookies,
          eventType: eventMap[displayStyle],
          getCookieSetting: this.getCookieSetting,
          handleClickPolicy: this.handleClickCookiePolicy,
          handleClickPrivacyPolicy: this.handleClickPrivacyPolicy,
          handleToggle: closePreferenceModal || this.handleTogglePreference,
          show: showPreference,
          showLogo: showLogo,
          visitorId: cookieConsent && cookieConsent.visitor.uuid
        }, cookieConsent ? cookieConsent : consentMode === 'opt_out' ? {
          essential: true,
          advertising: true,
          analytics: true,
          performance: true,
          social_networking: true,
          unclassified: true
        } : {
          essential: true,
          advertising: false,
          analytics: false,
          performance: false,
          social_networking: false,
          unclassified: false
        })));
      }
    }]);

    return preview;
  }(react.PureComponent);

  defineProperty_default()(preview, "defaultProps", {
    documents: [],
    currentStyle: {},
    closePreferenceModal: null,
    showContinueBannerOutsideEU: false
  });

  preview.displayName = "preview(".concat(getDisplayName(WrappedComponent), ")");
  return preview;
};

/* harmony default export */ const hoc_preview = (preview);
;// CONCATENATED MODULE: ./widget/hoc/index.js


;// CONCATENATED MODULE: ./widget/components/Banner/messages.js


var _CONTINUE, _DECLINE, _ACCEPT_COOKIES, _COOKIE_PREFERENCES;


var CONTINUE = (_CONTINUE = {}, defineProperty_default()(_CONTINUE, ENGLISH, 'Continue'), defineProperty_default()(_CONTINUE, GERMAN, 'Weiter'), defineProperty_default()(_CONTINUE, FRENCH, 'Continuer'), defineProperty_default()(_CONTINUE, SPANISH, 'Continuar'), defineProperty_default()(_CONTINUE, ITALIAN, 'Continua'), _CONTINUE);
var DECLINE = (_DECLINE = {}, defineProperty_default()(_DECLINE, ENGLISH, 'Decline'), defineProperty_default()(_DECLINE, GERMAN, 'Ablehnen'), defineProperty_default()(_DECLINE, FRENCH, 'Refuser'), defineProperty_default()(_DECLINE, SPANISH, 'Rechazar'), defineProperty_default()(_DECLINE, ITALIAN, 'Rifiuta'), _DECLINE);
var ACCEPT_COOKIES = (_ACCEPT_COOKIES = {}, defineProperty_default()(_ACCEPT_COOKIES, ENGLISH, 'Accept'), defineProperty_default()(_ACCEPT_COOKIES, GERMAN, 'Annehmen'), defineProperty_default()(_ACCEPT_COOKIES, FRENCH, 'Accepter'), defineProperty_default()(_ACCEPT_COOKIES, SPANISH, 'Aceptar'), defineProperty_default()(_ACCEPT_COOKIES, ITALIAN, 'Accetta'), _ACCEPT_COOKIES);
var COOKIE_PREFERENCES = (_COOKIE_PREFERENCES = {}, defineProperty_default()(_COOKIE_PREFERENCES, ENGLISH, 'Preferences'), defineProperty_default()(_COOKIE_PREFERENCES, GERMAN, 'Einstellungen'), defineProperty_default()(_COOKIE_PREFERENCES, FRENCH, 'Préférences'), defineProperty_default()(_COOKIE_PREFERENCES, SPANISH, 'Preferencias'), defineProperty_default()(_COOKIE_PREFERENCES, ITALIAN, 'Preferiti'), _COOKIE_PREFERENCES);
;// CONCATENATED MODULE: ./widget/utils/hexToRgba.js
/* harmony default export */ const hexToRgba = (function (hex) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var rgbDict = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
  return "rgba(".concat(rgbDict.r, ", ").concat(rgbDict.g, ", ").concat(rgbDict.b).concat((alpha || alpha === 0) && ", ".concat(alpha), ")");
});
;// CONCATENATED MODULE: ./widget/components/Banner/index.js








function Banner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function(){}

function Banner_createSuper(Derived) { var hasNativeReflectConstruct = Banner_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Banner_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var Banner = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(Banner, _PureComponent);

  var _super = Banner_createSuper(Banner);

  function Banner() {
    classCallCheck_default()(this, Banner);

    return _super.apply(this, arguments);
  }

  createClass_default()(Banner, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentStyle = _this$props.currentStyle,
          textGenerator = _this$props.textGenerator,
          consentSetting = _this$props.consentSetting,
          _this$props$consentSe = _this$props.consentSetting,
          display_style = _this$props$consentSe.display_style,
          position = _this$props$consentSe.position,
          showAcceptBlock = _this$props.showAcceptBlock,
          handleClickLink = _this$props.handleClickLink,
          handleTogglePreference = _this$props.handleTogglePreference,
          acceptAll = _this$props.acceptAll,
          declineAll = _this$props.declineAll,
          showLogo = _this$props.showLogo,
          documents = _this$props.documents;

      var _combineStyle = combineStyle(currentStyle),
          textStyle = _combineStyle.textStyle,
          btnStyle = _combineStyle.btnStyle;

      var rgb = hex_rgb_default()(currentStyle.background);

      var previewStyle = Banner_objectSpread(Banner_objectSpread({}, textStyle), {}, {
        background: "rgba(".concat(rgb[0], ", ").concat(rgb[1], ", ").concat(rgb[2], ", 1)")
      }, showAcceptBlock && {
        bottom: '0',
        opacity: '1'
      });

      var bannerClass = [stylesheets_consent_banner["termly-".concat(display_style)], stylesheets_consent_banner[position]].join(' ');
      var hasCookiePolicy = !!documents.find(function (document) {
        return document.name.includes('Cookie');
      });
      return /*#__PURE__*/jsx_default()("div", {
        hidden: !showAcceptBlock,
        className: bannerClass,
        id: "consent",
        style: {
          backgroundColor: previewStyle.background
        }
      }, void 0, showLogo && /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["logo-container"],
        style: previewStyle
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner.logo
      })), /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner.content,
        style: previewStyle
      }, void 0, /*#__PURE__*/jsx_default()("p", {
        style: previewStyle
      }, void 0, /*#__PURE__*/jsx_default()("span", {
        style: previewStyle
      }, void 0, textGenerator(handleClickLink, previewStyle)), /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["btn-container"]
      }, void 0, hasCookiePolicy && consentSetting.enable_cookie_preference_button && display_style === 'banner' && /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["preference-button"]
      }, void 0, /*#__PURE__*/jsx_default()(Button, {
        className: "consent-banner",
        text: selectMessage(COOKIE_PREFERENCES),
        onClick: handleTogglePreference,
        style: Banner_objectSpread(Banner_objectSpread({}, textStyle), {}, {
          background: 'transparent',
          border: "1px solid ".concat(hexToRgba(textStyle.color, 0.5))
        })
      })), consentSetting.enable_decline_button && /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["decline-button-d"]
      }, void 0, /*#__PURE__*/jsx_default()(Button, {
        className: "consent-banner",
        style: btnStyle,
        type: "button",
        onClick: declineAll,
        "data-tracking": "cookieDeclined",
        text: selectMessage(DECLINE)
      })), /*#__PURE__*/jsx_default()(Button, {
        className: "consent-banner",
        style: btnStyle,
        type: "button",
        onClick: acceptAll,
        text: selectMessage(ACCEPT_COOKIES)
      }), consentSetting.enable_decline_button && /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["decline-button-m"]
      }, void 0, /*#__PURE__*/jsx_default()(Button, {
        className: "consent-banner",
        style: btnStyle,
        type: "button",
        onClick: declineAll,
        "data-tracking": "cookieDeclined",
        text: selectMessage(DECLINE)
      }))))));
    }
  }]);

  return Banner;
}(react.PureComponent);

defineProperty_default()(Banner, "defaultProps", {
  documents: [],
  currentStyle: {},
  consentSetting: {},
  textGenerator: function textGenerator() {
    return console.log('textGenerator');
  },
  handleClickLink: function handleClickLink() {
    return console.log('handleClickLink');
  },
  handleTogglePreference: function handleTogglePreference() {
    return console.log('handleTogglePreference');
  },
  acceptAll: function acceptAll() {
    return console.log('acceptAll');
  },
  declineAll: null,
  showLogo: true
});

/* harmony default export */ const components_Banner = (hoc_preview(Banner));
var _private = {
  Banner: Banner
};
;// CONCATENATED MODULE: ./widget/components/CookieManager/index.js






function CookieManager_createSuper(Derived) { var hasNativeReflectConstruct = CookieManager_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function CookieManager_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var CookieManager = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(CookieManager, _PureComponent);

  var _super = CookieManager_createSuper(CookieManager);

  function CookieManager() {
    classCallCheck_default()(this, CookieManager);

    return _super.apply(this, arguments);
  }

  createClass_default()(CookieManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.handleTogglePreference();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return CookieManager;
}(react.PureComponent);

/* harmony default export */ const components_CookieManager = (hoc_preview(CookieManager));
;// CONCATENATED MODULE: ./widget/components/Modal/messages.js


var messages_CONTINUE, messages_DECLINE, messages_ACCEPT_COOKIES, messages_COOKIE_PREFERENCES;


var Modal_messages_CONTINUE = (messages_CONTINUE = {}, defineProperty_default()(messages_CONTINUE, ENGLISH, 'Continue'), defineProperty_default()(messages_CONTINUE, GERMAN, 'Weiter'), defineProperty_default()(messages_CONTINUE, FRENCH, 'Continuer'), defineProperty_default()(messages_CONTINUE, SPANISH, 'Continuar'), defineProperty_default()(messages_CONTINUE, ITALIAN, 'Continua'), messages_CONTINUE);
var Modal_messages_DECLINE = (messages_DECLINE = {}, defineProperty_default()(messages_DECLINE, ENGLISH, 'Decline'), defineProperty_default()(messages_DECLINE, GERMAN, 'Decline'), defineProperty_default()(messages_DECLINE, FRENCH, 'Decline'), defineProperty_default()(messages_DECLINE, SPANISH, 'Decline'), defineProperty_default()(messages_DECLINE, ITALIAN, 'Decline'), messages_DECLINE);
var Modal_messages_ACCEPT_COOKIES = (messages_ACCEPT_COOKIES = {}, defineProperty_default()(messages_ACCEPT_COOKIES, ENGLISH, 'Accept'), defineProperty_default()(messages_ACCEPT_COOKIES, GERMAN, 'Cookies Akzeptieren'), defineProperty_default()(messages_ACCEPT_COOKIES, FRENCH, 'Accepter les Cookies'), defineProperty_default()(messages_ACCEPT_COOKIES, SPANISH, 'Acepto Cookies'), defineProperty_default()(messages_ACCEPT_COOKIES, ITALIAN, 'Accetta i Cookie'), messages_ACCEPT_COOKIES);
var Modal_messages_COOKIE_PREFERENCES = (messages_COOKIE_PREFERENCES = {}, defineProperty_default()(messages_COOKIE_PREFERENCES, ENGLISH, 'Cookie Preferences'), defineProperty_default()(messages_COOKIE_PREFERENCES, GERMAN, 'Cookie-Einstellungen'), defineProperty_default()(messages_COOKIE_PREFERENCES, FRENCH, 'Préférences de cookies'), defineProperty_default()(messages_COOKIE_PREFERENCES, SPANISH, 'Preferencias de cookies'), defineProperty_default()(messages_COOKIE_PREFERENCES, ITALIAN, 'Preferenze sui cookie'), messages_COOKIE_PREFERENCES);
;// CONCATENATED MODULE: ./widget/components/Modal/index.js








function Modal_createSuper(Derived) { var hasNativeReflectConstruct = Modal_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Modal_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var Modal = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(Modal, _PureComponent);

  var _super = Modal_createSuper(Modal);

  function Modal() {
    classCallCheck_default()(this, Modal);

    return _super.apply(this, arguments);
  }

  createClass_default()(Modal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentStyle = _this$props.currentStyle,
          documents = _this$props.documents,
          textGenerator = _this$props.textGenerator,
          consentSetting = _this$props.consentSetting,
          showAcceptBlock = _this$props.showAcceptBlock,
          handleClickLink = _this$props.handleClickLink,
          acceptAll = _this$props.acceptAll,
          declineAll = _this$props.declineAll,
          showLogo = _this$props.showLogo,
          size = _this$props.size;

      var _combineStyle = combineStyle(currentStyle),
          btnStyle = _combineStyle.btnStyle,
          textStyle = _combineStyle.textStyle;

      var displayLogo = documents[0] ? documents[0].display_termly_logo : true;
      return showAcceptBlock && /*#__PURE__*/jsx_default()(Dialog, {
        showDialog: showAcceptBlock,
        displayLogo: displayLogo,
        size: size
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["termly-modal"],
        style: currentStyle
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner.content,
        style: textStyle
      }, void 0, showLogo && /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["logo-container"]
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner.logo
      })), /*#__PURE__*/jsx_default()("span", {
        style: textStyle
      }, void 0, textGenerator(handleClickLink, textStyle, consentSetting.enable_cookie_preference_button)), /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["button-wrapper"]
      }, void 0, consentSetting.enable_decline_button && /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["decline-button-d"]
      }, void 0, /*#__PURE__*/jsx_default()(Button, {
        className: "consent-banner",
        style: btnStyle,
        type: "button",
        onClick: declineAll,
        text: selectMessage(Modal_messages_DECLINE)
      })), /*#__PURE__*/jsx_default()(Button, {
        className: "consent-banner",
        style: btnStyle,
        onClick: acceptAll,
        text: selectMessage(Modal_messages_ACCEPT_COOKIES)
      }), consentSetting.enable_decline_button && /*#__PURE__*/jsx_default()("div", {
        className: stylesheets_consent_banner["decline-button-m"]
      }, void 0, /*#__PURE__*/jsx_default()(Button, {
        className: "consent-banner",
        style: btnStyle,
        type: "button",
        onClick: declineAll,
        text: selectMessage(Modal_messages_DECLINE)
      }))))));
    }
  }]);

  return Modal;
}(react.PureComponent);

defineProperty_default()(Modal, "defaultProps", {
  documents: [],
  currentStyle: {},
  consentSetting: {},
  textGenerator: function textGenerator() {
    return console.log('textGenerator');
  },
  handleClickLink: function handleClickLink() {
    return console.log('handleClickLink');
  },
  acceptAll: function acceptAll() {
    return console.log('acceptAll');
  },
  declineAll: null,
  showLogo: true,
  size: ''
});

/* harmony default export */ const components_Modal = (hoc_preview(Modal));
var Modal_private = {
  Modal: Modal
};
;// CONCATENATED MODULE: ./widget/utils/render.js












var render = function render(app) {
  react_dom_default().render(app, document.getElementById(TERMLY_CODE_SNIPPET_SUPPORT));
};
var renderReminder = function renderReminder(displayList, websiteApiResponse, ipApiResponse, regionSetting) {
  var style = websiteApiResponse.style,
      showLogo = websiteApiResponse.show_logo;
  var currentStyle = style.theme;
  var isEUClient = country(ipApiResponse.country_code2);
  var showContinueBannerOutsideEU = !style.show_cookie_preference && !isEUClient;
  var bannerCopy = getBannerCopy(websiteApiResponse);
  var documents = websiteApiResponse.documents;

  var isCookieConsentExpired = function () {
    var cookieDoc = documents.find(function (document) {
      return document.name.includes('Cookie');
    });
    var consent = getItem(TERMLY_COOKIE_CONSENT, ONE_YEAR_IN_SECS);
    return !!cookieDoc && !consent;
  }();

  var termlyCookieConsentData = getItem(TERMLY_COOKIE_CONSENT, 0);
  var cookiePolicyVersion = termlyCookieConsentData && termlyCookieConsentData.document_version_id || 0;
  var isCookiePolicyVersionUpdated = !!documents.find(function (document) {
    return document.name.includes('Cookie') && document.published_document_version_id > cookiePolicyVersion;
  });
  var hasPrivacyPolicy = !!documents.find(function (doc) {
    return doc.name.includes('Privacy');
  });

  if (isCookieConsentExpired || isCookiePolicyVersionUpdated) {
    if (style.display_style === 'modal') {
      render( /*#__PURE__*/jsx_default()(components_Modal, {
        size: "consent-banner",
        showLogo: showLogo,
        documents: documents,
        currentStyle: currentStyle,
        consentSetting: style,
        isEU: isEUClient,
        showContinueBannerOutsideEU: showContinueBannerOutsideEU,
        bannerCopy: bannerCopy,
        consentMode: regionSetting.consent_mode,
        hasPrivacyPolicy: hasPrivacyPolicy
      }));
    } else {
      render( /*#__PURE__*/jsx_default()(components_Banner, {
        showLogo: showLogo,
        documents: documents,
        currentStyle: currentStyle,
        consentSetting: style,
        isEU: isEUClient,
        showContinueBannerOutsideEU: showContinueBannerOutsideEU,
        bannerCopy: bannerCopy,
        consentMode: regionSetting.consent_mode,
        hasPrivacyPolicy: hasPrivacyPolicy
      }));

      if (style.enable_consent_by_scroll) {
        window.termlyActiveConsentByScroll = activeConsentByScroll(displayList);
        window.addEventListener('scroll', window.termlyActiveConsentByScroll);
      }
    }
  }
};
var defineCookieManager = function defineCookieManager(websiteApiResponse, hasPrivacyPolicy, regionSetting) {
  var style = websiteApiResponse.style,
      showLogo = websiteApiResponse.show_logo;
  var currentStyle = style.theme;

  var closePreferenceModal = function closePreferenceModal() {
    var node = document.getElementById(TERMLY_CODE_SNIPPET_SUPPORT);
    react_dom_default().unmountComponentAtNode(node);
  };

  return function () {
    render( /*#__PURE__*/jsx_default()(components_CookieManager, {
      closePreferenceModal: closePreferenceModal,
      consentSetting: style,
      currentStyle: currentStyle,
      documents: websiteApiResponse.documents,
      showLogo: showLogo,
      hasPrivacyPolicy: hasPrivacyPolicy,
      consentMode: regionSetting.consent_mode
    }));
  };
};
// EXTERNAL MODULE: ./widget/utils/global.js
var global = __webpack_require__(9369);
;// CONCATENATED MODULE: ./widget/components/BlockedContent/messages.js


var _TITLE, _DESCRIPTION, _ACCEPT;


var TITLE = (_TITLE = {}, defineProperty_default()(_TITLE, ENGLISH, 'We need your consent to load this content'), defineProperty_default()(_TITLE, GERMAN, 'We need your consent to load this content'), defineProperty_default()(_TITLE, FRENCH, 'We need your consent to load this content'), defineProperty_default()(_TITLE, SPANISH, 'We need your consent to load this content'), defineProperty_default()(_TITLE, ITALIAN, 'We need your consent to load this content'), _TITLE);
var DESCRIPTION = (_DESCRIPTION = {}, defineProperty_default()(_DESCRIPTION, ENGLISH, 'In order to embed certain media, we use third-party services that may collect data about your online activity. Select “Accept” to view this content.'), defineProperty_default()(_DESCRIPTION, GERMAN, 'In order to embed certain media, we use third-party services that may collect data about your online activity. Select “Accept” to view this content.'), defineProperty_default()(_DESCRIPTION, FRENCH, 'In order to embed certain media, we use third-party services that may collect data about your online activity. Select “Accept” to view this content.'), defineProperty_default()(_DESCRIPTION, SPANISH, 'In order to embed certain media, we use third-party services that may collect data about your online activity. Select “Accept” to view this content.'), defineProperty_default()(_DESCRIPTION, ITALIAN, 'In order to embed certain media, we use third-party services that may collect data about your online activity. Select “Accept” to view this content.'), _DESCRIPTION);
var ACCEPT = (_ACCEPT = {}, defineProperty_default()(_ACCEPT, ENGLISH, 'Accept'), defineProperty_default()(_ACCEPT, GERMAN, 'Accept'), defineProperty_default()(_ACCEPT, FRENCH, 'Accept'), defineProperty_default()(_ACCEPT, SPANISH, 'Accept'), defineProperty_default()(_ACCEPT, ITALIAN, 'Accept'), _ACCEPT);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./widget/components/BlockedContent/style.scss
var BlockedContent_style = __webpack_require__(9020);
;// CONCATENATED MODULE: ./widget/components/BlockedContent/style.scss

            

var BlockedContent_style_options = {};

BlockedContent_style_options.insert = "head";
BlockedContent_style_options.singleton = false;

var BlockedContent_style_update = injectStylesIntoStyleTag_default()(BlockedContent_style/* default */.Z, BlockedContent_style_options);



/* harmony default export */ const components_BlockedContent_style = (BlockedContent_style/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./widget/components/BlockedContent/index.js








function(){}

function(){}







var BlockedContent = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(BlockedContent, _PureComponent);

  var _super = BlockedContent_createSuper(BlockedContent);

  function BlockedContent() {
    classCallCheck_default()(this, BlockedContent);

    return _super.apply(this, arguments);
  }

  createClass_default()(BlockedContent, [{
    key: "render",
    value: function render() {
      var onAcceptClick = this.props.onAcceptClick;
      return /*#__PURE__*/jsx_default()("div", {
        className: components_BlockedContent_style.container
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        className: components_BlockedContent_style.content
      }, void 0, /*#__PURE__*/jsx_default()("div", {
        className: components_BlockedContent_style.title
      }, void 0, selectMessage(TITLE)), /*#__PURE__*/jsx_default()("div", {
        className: components_BlockedContent_style.description
      }, void 0, selectMessage(DESCRIPTION)), /*#__PURE__*/jsx_default()("div", {
        className: components_BlockedContent_style.accept,
        onClick: onAcceptClick
      }, void 0, selectMessage(ACCEPT))));
    }
  }]);

  return BlockedContent;
}(react.PureComponent);

defineProperty_default()(BlockedContent, "defaultProps", {
  onAcceptClick: function onAcceptClick() {}
});


;// CONCATENATED MODULE: ./widget/utils/replaceIframe.js






var isReplaceable = function isReplaceable(referenceNode) {
  return referenceNode.width >= 470 && referenceNode.height >= 270;
};

var createReplacement = function createReplacement(referenceNode) {
  var dom = document.createElement('div');
  dom.style.cssText = referenceNode.style.cssText;
  dom.style.width = "".concat(referenceNode.width, "px");
  dom.style.height = "".concat(referenceNode.height, "px");
  dom.className = 'termly-blocked-content';
  dom.dataset.blockedCategories = referenceNode.dataset.categories;

  var onAcceptClick = function onAcceptClick() {
    var categories = referenceNode.dataset.categories.split(',');
    enableConsentScripts({
      categories: categories
    });
  };

  react_dom_default().render( /*#__PURE__*/jsx_default()(BlockedContent, {
    onAcceptClick: onAcceptClick
  }), dom);
  return dom;
};

/* harmony default export */ const replaceIframe = (function () {
  var elements = document.querySelectorAll('iframe'); // Because crawler splash engine cannot render querySelectorAll `elements.forEach` method.
  // Workaround is using `for loop` syntax.

  for (var i = 0; i < elements.length; i += 1) {
    var element = elements[i];

    if (element.dataset.categories) {
      if (isReplaceable(element)) {
        element.parentNode.insertBefore(createReplacement(element), element);
      }

      element.dataset.display = element.style.display || 'block';
      element.style.display = 'none';
    }
  }

  ;
});
;// CONCATENATED MODULE: ./widget/index.js














 // polyfill forEach for IE

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var insertDoms = function insertDoms() {
  [TERMLY_CODE_SNIPPET_SUPPORT].forEach(function(){});
};

var startProcess = function startProcess() {
  var websiteApiResponse = null,
      ipApiResponse = null;

  var checkApiResults = function checkApiResults() {
    if (!websiteApiResponse || !ipApiResponse) {
      return;
    } else {
      onAllApiRespond(websiteApiResponse, ipApiResponse);
    }
  };

  api(url.website, 'GET', null, function (data) {
    websiteApiResponse = data;
    checkApiResults();
  }, true);
  api(url.getCountry(), 'GET', null, function (data) {
    ipApiResponse = data;
    checkApiResults();
  }, true);
};

var onAllApiRespond = function onAllApiRespond() {
  var websiteApiResponse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ipApiResponse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var documents = websiteApiResponse.documents,
      uuid = websiteApiResponse.uuid,
      overConsentQuota = websiteApiResponse.over_consent_quota,
      _websiteApiResponse$r = websiteApiResponse.region_settings,
      region_settings = _websiteApiResponse$r === void 0 ? [] : _websiteApiResponse$r;
  var _ipApiResponse$state = ipApiResponse.state,
      state = _ipApiResponse$state === void 0 ? '' : _ipApiResponse$state,
      country_code2 = ipApiResponse.country_code2; // BEGIN TODO: Extract function findRegionSetting()
  // I'd really like to do this now, but I'm aiming for a minimal change ATM

  var isEUClient = country(country_code2);
  var isUSClient = country_code2 === 'US';
  var isCAClient = state.toLowerCase() === 'california';
  var regionSetting;

  if (isUSClient || isCAClient) {
    regionSetting = region_settings.find(function(){});
  } else if (isEUClient) {
    regionSetting = region_settings.find(function (setting) {
      return setting.region === 'eu';
    });
  } else {
    regionSetting = region_settings.find(function (setting) {
      return setting.region === 'global';
    });
  }

  if (!regionSetting) {
    regionSetting = {};
  } // END TODO: Extract function


  websiteApiResponse.style = regionSetting;
  window.TERMLY_LANGUAGE_SETTING = regionSetting.language_setting;
  var tluid = genTltplId(uuid);

  var _initDocuments = initDocuments(documents, getCookie(tluid)),
      showPolicyList = _initDocuments.showPolicyList,
      updatedDocDict = _initDocuments.updatedDocDict;

  var cookiePolicy = documents.find(function (doc) {
    return doc.name.includes('Cookie');
  });
  var hasPrivacyPolicy = !!documents.find(function (doc) {
    return doc.name.includes('Privacy');
  });
  var cookieConsent = getItem(TERMLY_COOKIE_CONSENT, ONE_YEAR_IN_SECS); // trigger GTM to inject consent code

  dataLayer(cookieConsent);
  registerEvents();
  statisticUniqueUserViews(tluid);

  if (!overConsentQuota) {
    setCookie(tluid, updatedDocDict);
  } // provide to crawler call and can scan blocked cookies.


  window.termlyUnblockingCookies = function () {
    return enableConsentScripts({}, true);
  }; // unblock cookies if the default consent mode is opt_out


  if (!cookieConsent && regionSetting.consent_mode === 'opt_out') {
    // call function to accept all category, true means allow all categories
    enableConsentScripts({}, true); // trigger GTM to unblock all categories

    dataLayer({}, true);
  }

  if (!overConsentQuota) {
    if (regionSetting.enable_widget) {
      renderReminder(showPolicyList, websiteApiResponse, ipApiResponse, regionSetting);
      console.log("TERMLY_BANNER_RENDER_FINISH:".concat((Date.now() - TERMLY_BANNER_INIT) / 1000, "s"));
    }

    if (cookiePolicy) {
      window.displayPreferenceModal = defineCookieManager(websiteApiResponse, hasPrivacyPolicy, regionSetting);

      var _uuid = getCookie(uuidCookie);

      api(url.getCookies(cookiePolicy.uuid), 'GET', null, function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          cookies: []
        },
            cookies = _ref.cookies;

        // unblock consent code
        triggerGetUpdatedCookieWhitelistByTermly(cookies, _uuid, cookieConsent); // workaround: assign cookies in global namespace

        window.termlyCookies = cookies;
      });
    } else {
      console.warn('No cookie policy was found for this account. Did you create one at http://app.termly.io ?');
    }
  }

  dispatchOnWidgetLoadCompleteEvent();
};

var registerEvents = function registerEvents() {
  document.body.addEventListener('click', function () {
    spaUrlMonitor();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      spaUrlMonitor();
    }
  });
};

var initDocuments = function initDocuments(previewDocs, docDict) {
  var updatedDocDict = {};
  var showPolicyList = [];
  previewDocs.forEach(function (doc) {
    var document_version = doc.document_version,
        uuid = doc.uuid;
    var oldDoc = docDict ? docDict[uuid] : null;
    updatedDocDict[uuid] = oldDoc; // if user old setting is off, we need to set it on

    if (oldDoc && !oldDoc.notify) {
      oldDoc.showBanner = true;
    }

    if (!oldDoc || document_version > oldDoc.version || oldDoc.showBanner) {
      showPolicyList.push(doc);
    }

    if (!oldDoc || document_version > oldDoc.version) {
      setDocDict(updatedDocDict, uuid, true, document_version, true);
    }
  });
  return {
    showPolicyList: showPolicyList,
    updatedDocDict: updatedDocDict
  };
};

var dispatchOnWidgetLoadCompleteEvent = function(){}