/*!
 * clipboard.js v1.5.13
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function r(c,a){if(!n[c]){if(!e[c]){var l="function"==typeof require&&require;if(!a&&l)return l(c,!0);if(i)return i(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[c]={exports:{}};e[c][0].call(u.exports,function(t){var n=e[c][1][t];return r(n?n:t)},u,u.exports,t,e,n,o)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(t,e,n){function o(t,e,n){for(n=n||document.documentElement;t&&t!==n;){if(r(t,e))return t;t=t.parentNode}return r(t,e)?t:null}try{var r=t("matches-selector")}catch(e){var r=t("component-matches-selector")}e.exports=o},{"component-matches-selector":2,"matches-selector":2}],2:[function(t,e,n){function(){}try{var r=t("query")}catch(e){var r=t("component-query")}var i=Element.prototype,c=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=o},{"component-query":3,query:3}],3:[function(t,e,n){function o(t,e){return e.querySelector(t)}n=e.exports=function(){},n.all=function(){},n.engine=function(){}},{}],4:[function(){},{"component-closest":1}],5:[function(){},{}],6:[function(){},{"./is":5,delegate:4}],7:[function(){},{}],8:[function(){},{}],9:[function(e,n,o){!function(){}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=n(e),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function(){},t.prototype.initSelection=function(){},t.prototype.selectFake=function(){},t.prototype.removeFake=function(){},t.prototype.selectTarget=function(){},t.prototype.copyText=function(){},t.prototype.handleResult=function(){},t.prototype.clearSelection=function(){},t.prototype.destroy=function t(){this.removeFake()},c(t,[{key:"action",set:function(){},get:function t(){return this._action}},{key:"target",set:function(){},get:function t(){return this._target}}]),t}();t.exports=a})},{select:7}],10:[function(e,n,o){!function(){}(this,function(t,e,n,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var s=r(e),u=r(n),f=r(o),d=function(t){function(){}return a(e,t),e.prototype.resolveOptions=function(){},e.prototype.listenClick=function(){},e.prototype.onClick=function(){},e.prototype.defaultAction=function t(e){return l("action",e)},e.prototype.defaultTarget=function(){},e.prototype.defaultText=function(){},e.prototype.destroy=function(){}