/*! E-Gallery v1.2.0 by Elementor */
var EGallery=function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=9)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},function(t,e,i){var n=i(5),s=i(6);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?s(t):e}},function(t,e){function i(e){return t.exports=i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(e)}t.exports=i},function(t,e,i){var n=i(7);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(){},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function i(e,n){return t.exports=i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(e,n)}t.exports=i},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(0),s=i.n(n),r=i(1),a=i.n(r),o=i(2),l=i.n(o),u=i(3),c=i.n(u),h=i(4),y=i.n(h);var g=function(){function t(e){var i=this;s()(this,t),this.settings=jQuery.extend(!0,this.getDefaultSettings(),e),this.$container=jQuery(this.settings.container),this.timeouts=[],this.initElements(),this.prepareGallery();var n=this.runGallery.bind(this);this.runGallery=this.debounce(function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];i.settings.lazyLoad?n.apply(void 0,e):i.allImagesPromise.then(function(){return n.apply(void 0,e)})},300),this.settings.lazyLoad&&(this.handleScroll=this.debounce(function(){return i.lazyLoadImages()},16)),this.bindEvents(),this.runGallery()}return a()(t,[{key:"getDefaultSettings",value:function(){return{}}},{key:"getItemClass",value:function(){}},{key:"initElements",value:function(){}},{key:"bindEvents",value:function(){}},{key:"getNestedObjectData",value:function(){}},{key:"getTemplateArgs",value:function(){}},{key:"getCurrentBreakpoint",value:function(){}},{key:"getCurrentDeviceSetting",value:function(){}},{key:"getActiveItems",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.settings.tags,i=[];if(!e.length)return t?(this.$items.each(function(t){i.push(t)}),i):this.$items;var n=this.$items.filter(function(){});return t?i:n}},{key:"getImageData",value:function(){}},{key:"compileTemplate",value:function(){}},{key:"createOverlay",value:function(){}},{key:"createItem",value:function(){}},{key:"debounce",value:function(){}},{key:"buildGallery",value:function(){}},{key:"loadImages",value:function(){}},{key:"lazyLoadImages",value:function(){var t=this;if(!this.lazyLoadComplete){var e=this.getActiveItems(),i=this.getActiveItems(!0);e.each(function(e,n){var s=t.settings.items[i[e]];if(s.loading||!function(){}(n))return!0;s.loading=!0;var r=jQuery(n),a=new Image;return new Promise(function(t){a.onload=t}).then(function(){r.find(t.settings.selectors.image).css("background-image",'url("'+s.thumbnail+'")').addClass(t.getItemClass(t.settings.classes.imageLoaded)),t.loadedItemsCount++,t.loadedItemsCount===t.settings.items.length&&(t.lazyLoadComplete=!0)}),a.src=s.thumbnail,!0})}}},{key:"calculateImageSize",value:function(){}},{key:"createImagesData",value:function(){}},{key:"makeGalleryFromContent",value:function(){}},{key:"prepareGallery",value:function(){this.settings.items?this.buildGallery():this.makeGalleryFromContent(),this.imagesData=[],this.settings.lazyLoad?(this.loadedItemsCount=0,this.lazyLoadComplete=!1,this.createImagesData()):this.loadImages()}},{key:"runGallery",value:function(){}},{key:"setSettings",value:function(){}},{key:"unbindEvents",value:function(){this.elements.$window.off("resize",this.runGallery)}},{key:"destroy",value:function(){}}]),t}(),f=function(){}(g),m=function(){}(g),d=function(t){function(){}return y()(e,t),a()(e,[{key:"run",value:function(t){var e=this,i=this.getCurrentBreakpoint();if(t||i!==this.currentBreakpoint){this.currentBreakpoint=i;for(var n=[],s=[],r=[],a=this.getCurrentDeviceSetting("columns"),o=this.$container.width(),l=(o-this.getCurrentDeviceSetting("horizontalGap")*(a-1))/a,u=this.getActiveItems(),c=0,h=0;h<a;h++)s[h]=0,n[h]=0;u.each(function(t,i){var o=e.getImageData(t),u=l/o.ratio,h=t%a;c=n[h],jQuery.each(n,function(t,e){e&&c>e+5&&(c=e,h=t)}),r[t]=n[h],n[h]+=u,i.style.setProperty("--item-height",o.height/o.width*100+"%"),i.style.setProperty("--column",h),i.style.setProperty("--items-in-column",s[h]),s[h]++});var y=Math.max.apply(Math,n),g=n.indexOf(y),f=s[g]-1,m=y/o;this.$container[0].style.setProperty("--columns",a),this.$container[0].style.setProperty("--highest-column-gap-count",f),this.$container.css("padding-bottom",100*m+"%"),u.each(function(t,e){var i=r[t]?r[t]/y*100:0;e.style.setProperty("--percent-height",i+"%")})}}}]),e}(g);i(8);i.d(e,"default",function(){return p});var p=function(){function(){}return a()(t,[{key:"getDefaultSettings",value:function(){}},{key:"initGalleriesTypes",value:function(){}