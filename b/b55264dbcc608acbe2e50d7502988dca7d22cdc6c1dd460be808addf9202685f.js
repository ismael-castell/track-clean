(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function(){}var p=ca(this);function(){}
q("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+e++,g)}function c(g,f){this.g=g;ba(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
q("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=p[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});q("Symbol.asyncIterator",function(){});
function(){}function(){}function(){}
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ha=function(){function a(){function c(){}new c;Reflect.construct(c,[],function(){});return new c instanceof c}if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,
e,d)||e}}(),ia;if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=ia;
function(){}q("Reflect",function(a){return a?a:{}});q("Reflect.construct",function(){return ha});q("Reflect.setPrototypeOf",function(){});
function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
q("WeakMap",function(){});
q("Map",function(){});function(){}
q("String.prototype.endsWith",function(){});function(){}q("Array.prototype.find",function(a){return a?a:function(b,c){return na(this,b,c).X}});
q("String.prototype.startsWith",function(){});q("String.prototype.repeat",function(a){return a?a:function(b){var c=v(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
function(){}q("Array.prototype.keys",function(a){return a?a:function(){return oa(this,function(b){return b})}});
q("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};var e=[],g="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof g){b=g.call(b);for(var f=0;!(g=b.next()).done;)e.push(c.call(d,g.value,f++))}else for(g=b.length,f=0;f<g;f++)e.push(c.call(d,b[f],f));return e}});q("Array.prototype.values",function(a){return a?a:function(){return oa(this,function(b,c){return c})}});
q("String.prototype.trimLeft",function(a){function b(){return this.replace(/^[\s\xa0]+/,"")}return a||b});q("String.prototype.trimStart",function(a){return a||String.prototype.trimLeft});q("Object.setPrototypeOf",function(a){return a||t});var pa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)u(d,e)&&(a[e]=d[e])}return a};q("Object.assign",function(a){return a||pa});
q("Promise",function(){});
q("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});q("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});q("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==v(this,b,"includes").indexOf(b,c||0)}});
q("Array.prototype.copyWithin",function(){});
q("Array.prototype.entries",function(a){return a?a:function(){return oa(this,function(b,c){return[b,c]})}});q("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});q("Array.prototype.findIndex",function(){});
q("Array.prototype.flat",function(a){return a?a:function(b){b=void 0===b?1:b;for(var c=[],d=0;d<this.length;d++){var e=this[d];Array.isArray(e)&&0<b?(e=Array.prototype.flat.call(e,b-1),c.push.apply(c,e)):c.push(e)}return c}});q("Array.prototype.flatMap",function(){});q("Array.of",function(){});
q("globalThis",function(a){return a||p});q("Math.acosh",function(){});q("Math.asinh",function(){});q("Math.log1p",function(a){return a?a:function(b){b=Number(b);if(.25>b&&-.25<b){for(var c=b,d=1,e=b,g=0,f=1;g!=e;)c*=b,f*=-1,e=(g=e)+f*c/++d;return e}return Math.log(1+b)}});
q("Math.atanh",function(){});q("Math.cbrt",function(){});q("Math.clz32",function(){});
q("Math.cosh",function(a){if(a)return a;var b=Math.exp;return function(){}});q("Math.expm1",function(a){return a?a:function(b){b=Number(b);if(.25>b&&-.25<b){for(var c=b,d=1,e=b,g=0;g!=e;)c*=b/++d,e=(g=e)+c;return e}return Math.exp(b)-1}});q("Math.fround",function(){});
q("Math.hypot",function(a){return a?a:function(b){if(2>arguments.length)return arguments.length?Math.abs(arguments[0]):0;var c,d,e;for(c=e=0;c<arguments.length;c++)e=Math.max(e,Math.abs(arguments[c]));if(1E100<e||1E-100>e){if(!e)return e;for(c=d=0;c<arguments.length;c++){var g=Number(arguments[c])/e;d+=g*g}return Math.sqrt(d)*e}for(c=d=0;c<arguments.length;c++)g=Number(arguments[c]),d+=g*g;return Math.sqrt(d)}});
q("Math.imul",function(){});q("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});q("Math.log2",function(a){return a?a:function(b){return Math.log(b)/Math.LN2}});q("Math.sign",function(a){return a?a:function(b){b=Number(b);return 0===b||isNaN(b)?b:0<b?1:-1}});
q("Math.sinh",function(){});q("Math.tanh",function(a){return a?a:function(b){b=Number(b);if(0===b)return b;var c=Math.exp(-2*Math.abs(b));c=(1-c)/(1+c);return 0>b?-c:c}});q("Math.trunc",function(){});q("Number.EPSILON",function(){});
q("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});q("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});q("Number.isFinite",function(){});q("Number.isInteger",function(){});q("Number.isNaN",function(){});
q("Number.isSafeInteger",function(){});q("Number.parseFloat",function(a){return a||parseFloat});q("Number.parseInt",function(a){return a||parseInt});q("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)u(b,d)&&c.push([d,b[d]]);return c}});
q("Object.fromEntries",function(){});q("Object.getOwnPropertySymbols",function(){});
q("Reflect.ownKeys",function(){});q("Object.getOwnPropertyDescriptors",function(){});
q("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)u(b,d)&&c.push(b[d]);return c}});q("Promise.allSettled",function(){});
q("Promise.prototype.finally",function(){});q("AggregateError",function(a){function b(c,d){d=Error(d);"stack"in d&&(this.stack=d.stack);this.errors=c;this.message=d.message}if(a)return a;ma(b,Error);b.prototype.name="AggregateError";return b});
q("Promise.any",function(a){return a?a:function(b){b=b instanceof Array?b:Array.from(b);return Promise.all(b.map(function(c){return Promise.resolve(c).then(function(d){throw d;},function(d){return d})})).then(function(c){throw new AggregateError(c,"All promises were rejected");},function(c){return c})}});q("Reflect.apply",function(){});
q("Reflect.defineProperty",function(){});q("Reflect.deleteProperty",function(a){return a?a:function(){}});
q("Reflect.getOwnPropertyDescriptor",function(a){return a||Object.getOwnPropertyDescriptor});q("Reflect.getPrototypeOf",function(a){return a||Object.getPrototypeOf});function(){}q("Reflect.get",function(a){return a?a:function(b,c,d){if(2>=arguments.length)return b[c];var e=qa(b,c);if(e)return e.get?e.get.call(d):e.value}});q("Reflect.has",function(){});
q("Reflect.isExtensible",function(){});q("Reflect.preventExtensions",function(a){return a?a:"function"!=typeof Object.preventExtensions?function(){return!1}:function(){}});
q("Reflect.set",function(a){return a?a:function(b,c,d,e){var g=qa(b,c);return g?g.set?(g.set.call(3<arguments.length?e:b,d),!0):g.writable&&!Object.isFrozen(b)?(b[c]=d,!0):!1:Reflect.isExtensible(b)?(b[c]=d,!0):!1}});
q("Set",function(){});q("String.prototype.codePointAt",function(){});
q("String.fromCodePoint",function(){});
q("String.prototype.matchAll",function(){});
function(){}q("String.prototype.padEnd",function(){});q("String.prototype.padStart",function(){});
q("String.prototype.replaceAll",function(a){return a?a:function(b,c){if(b instanceof RegExp&&!b.global)throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");return b instanceof RegExp?this.replace(b,c):this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c)}});q("String.prototype.trimRight",function(){});
q("String.prototype.trimEnd",function(){});function x(a){return a?a:Array.prototype.copyWithin}q("Int8Array.prototype.copyWithin",x);q("Uint8Array.prototype.copyWithin",x);q("Uint8ClampedArray.prototype.copyWithin",x);q("Int16Array.prototype.copyWithin",x);q("Uint16Array.prototype.copyWithin",x);q("Int32Array.prototype.copyWithin",x);q("Uint32Array.prototype.copyWithin",x);q("Float32Array.prototype.copyWithin",x);q("Float64Array.prototype.copyWithin",x);
function(){}q("Int8Array.prototype.fill",y);q("Uint8Array.prototype.fill",y);q("Uint8ClampedArray.prototype.fill",y);q("Int16Array.prototype.fill",y);q("Uint16Array.prototype.fill",y);q("Int32Array.prototype.fill",y);q("Uint32Array.prototype.fill",y);q("Float32Array.prototype.fill",y);q("Float64Array.prototype.fill",y);
q("WeakSet",function(){});
var A=this||self;function(){}function C(){}function sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ta(a,b,c){return a.call.apply(a.bind,arguments)}
function ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function(){}
function(){}function(){}function wa(a){return a};function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}va(F,Error);F.prototype.name="CustomError";function(){}G.prototype.T=!0;G.prototype.R=function(){return this.g};function(){}function H(a){return new G(xa,a)}var ya={},xa={};var J={m:{}};
J.m.N={ia:{"gstatic.com":{loader:H("https://www.gstatic.com/charts/%{version}/loader.js"),debug:H("https://www.gstatic.com/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"),debug_i18n:H("https://www.gstatic.com/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),compiled:H("https://www.gstatic.com/charts/%{version}/js/jsapi_compiled_%{package}_module.js"),compiled_i18n:H("https://www.gstatic.com/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),css:H("https://www.gstatic.com/charts/%{version}/css/%{subdir}/%{filename}"),
css2:H("https://www.gstatic.com/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"),third_party:H("https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}"),third_party2:H("https://www.gstatic.com/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"),third_party_gen:H("https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}")},"gstatic.cn":{loader:H("https://www.gstatic.cn/charts/%{version}/loader.js"),debug:H("https://www.gstatic.cn/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"),
debug_i18n:H("https://www.gstatic.cn/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),compiled:H("https://www.gstatic.cn/charts/%{version}/js/jsapi_compiled_%{package}_module.js"),compiled_i18n:H("https://www.gstatic.cn/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),css:H("https://www.gstatic.cn/charts/%{version}/css/%{subdir}/%{filename}"),css2:H("https://www.gstatic.cn/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"),third_party:H("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}"),
third_party2:H("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"),third_party_gen:H("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}")}},ea:["default"],qa:{"default":[],graphics:["default"],ui:["graphics"],ui_base:["graphics"],flashui:["ui"],fw:["ui"],geo:["ui"],annotatedtimeline:["annotationchart"],annotationchart:["ui","controls","corechart","table"],areachart:"browserchart",bar:["fw","dygraph","webfontloader"],barchart:"browserchart",
browserchart:["ui"],bubbles:["fw","d3"],calendar:["fw"],charteditor:"ui corechart imagechart annotatedtimeline gauge geochart motionchart orgchart table".split(" "),charteditor_base:"ui_base corechart imagechart annotatedtimeline gauge geochart motionchart orgchart table_base".split(" "),circles:["fw","d3"],clusterchart:["corechart","d3"],columnchart:"browserchart",controls:["ui"],controls_base:["ui_base"],corechart:["ui"],gantt:["fw","dygraph"],gauge:["ui"],geochart:["geo"],geomap:["flashui","geo"],
geomap_base:["ui_base"],helloworld:["fw"],imagechart:["ui"],imageareachart:"imagechart",imagebarchart:"imagechart",imagelinechart:"imagechart",imagepiechart:"imagechart",imagesparkline:"imagechart",line:["fw","dygraph","webfontloader"],linechart:"browserchart",map:["geo"],matrix:["vegachart"],motionchart:["flashui"],orgchart:["ui"],overtimecharts:["ui","corechart"],piechart:"browserchart",sankey:["fw","d3","d3.sankey"],scatter:["fw","dygraph","webfontloader"],scatterchart:"browserchart",sunburst:["fw",
"d3"],streamgraph:["fw","d3"],table:["ui"],table_base:["ui_base"],timeline:["fw","ui","dygraph"],treemap:["ui"],vegachart:["graphics"],wordtree:["ui"]},Ba:{d3:{subdir1:"d3",subdir2:"v5",filename:"d3.js"},"d3.sankey":{subdir1:"d3_sankey",subdir2:"v4",filename:"d3.sankey.js"},webfontloader:{subdir:"webfontloader",filename:"webfont.js"}},Aa:{dygraph:{subdir:"dygraphs",filename:"dygraph-tickers-combined.js"}},pa:{"default":[{subdir:"core",filename:"tooltip.css"}],annotationchart:[{subdir:"annotationchart",
filename:"annotationchart.css"}],charteditor:[{subdir:"charteditor",filename:"charteditor.css"}],charteditor_base:[{subdir:"charteditor_base",filename:"charteditor_base.css"}],controls:[{subdir:"controls",filename:"controls.css"}],imagesparkline:[{subdir:"imagechart",filename:"imagesparkline.css"}],orgchart:[{subdir:"orgchart",filename:"orgchart.css"}],table:[{subdir:"table",filename:"table.css"},{subdir:"util",filename:"format.css"}],table_base:[{subdir:"util",filename:"format.css"},{subdir:"table",
filename:"table_base.css"}],ui:[{subdir:"util",filename:"util.css"}],ui_base:[{subdir:"util",filename:"util_base.css"}]}};J.m.$={ga:{"chrome-frame":{versions:{"1.0.0":{uncompressed:"CFInstall.js",compressed:"CFInstall.min.js"},"1.0.1":{uncompressed:"CFInstall.js",compressed:"CFInstall.min.js"},"1.0.2":{uncompressed:"CFInstall.js",compressed:"CFInstall.min.js"}},aliases:{1:"1.0.2","1.0":"1.0.2"}},swfobject:{versions:{"2.1":{uncompressed:"swfobject_src.js",compressed:"swfobject.js"},"2.2":{uncompressed:"swfobject_src.js",compressed:"swfobject.js"}},aliases:{2:"2.2"}},"ext-core":{versions:{"3.1.0":{uncompressed:"ext-core-debug.js",
compressed:"ext-core.js"},"3.0.0":{uncompressed:"ext-core-debug.js",compressed:"ext-core.js"}},aliases:{3:"3.1.0","3.0":"3.0.0","3.1":"3.1.0"}},scriptaculous:{versions:{"1.8.3":{uncompressed:"scriptaculous.js",compressed:"scriptaculous.js"},"1.9.0":{uncompressed:"scriptaculous.js",compressed:"scriptaculous.js"},"1.8.1":{uncompressed:"scriptaculous.js",compressed:"scriptaculous.js"},"1.8.2":{uncompressed:"scriptaculous.js",compressed:"scriptaculous.js"}},aliases:{1:"1.9.0","1.8":"1.8.3","1.9":"1.9.0"}},
webfont:{versions:{"1.0.12":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.13":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.14":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.15":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.10":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.11":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.27":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.28":{uncompressed:"webfont_debug.js",
compressed:"webfont.js"},"1.0.29":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.23":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.24":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.25":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.26":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.21":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.22":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.3":{uncompressed:"webfont_debug.js",
compressed:"webfont.js"},"1.0.4":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.5":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.6":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.9":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.16":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.17":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.0":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.18":{uncompressed:"webfont_debug.js",
compressed:"webfont.js"},"1.0.1":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.19":{uncompressed:"webfont_debug.js",compressed:"webfont.js"},"1.0.2":{uncompressed:"webfont_debug.js",compressed:"webfont.js"}},aliases:{1:"1.0.29","1.0":"1.0.29"}},jqueryui:{versions:{"1.8.17":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.16":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.15":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.14":{uncompressed:"jquery-ui.js",
compressed:"jquery-ui.min.js"},"1.8.4":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.13":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.5":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.12":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.6":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.11":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.7":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},
"1.8.10":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.8":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.9":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.6.0":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.7.0":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.5.2":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.0":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.7.1":{uncompressed:"jquery-ui.js",
compressed:"jquery-ui.min.js"},"1.5.3":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.1":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.7.2":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.8.2":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"},"1.7.3":{uncompressed:"jquery-ui.js",compressed:"jquery-ui.min.js"}},aliases:{1:"1.8.17","1.5":"1.5.3","1.6":"1.6.0","1.7":"1.7.3","1.8":"1.8.17","1.8.3":"1.8.4"}},mootools:{versions:{"1.3.0":{uncompressed:"mootools.js",
compressed:"mootools-yui-compressed.js"},"1.2.1":{uncompressed:"mootools.js",compressed:"mootools-yui-compressed.js"},"1.1.2":{uncompressed:"mootools.js",compressed:"mootools-yui-compressed.js"},"1.4.0":{uncompressed:"mootools.js",compressed:"mootools-yui-compressed.js"},"1.3.1":{uncompressed:"mootools.js",compressed:"mootools-yui-compressed.js"},"1.2.2":{uncompressed:"mootools.js",compressed:"mootools-yui-compressed.js"},"1.4.1":{uncompressed:"mootools.js",compressed:"mootools-yui-compressed.js"},
"1.3.2":{uncompressed:"mootools.js",compressed:"mootools-yui-compressed.js"},"1.2.3":{uncompressed:"mootools.js",compressed:"mootools-yui-compressed.js"},"1.4.2":{uncompressed:"mootools.js",compressed:"mootools-yui-compressed.js"},"1.2.4":{uncompressed:"mootools.js",compressed:"mootools-yui-compressed.js"},"1.2.5":{uncompressed:"mootools.js",compressed:"mootools-yui-compressed.js"},"1.1.1":{uncompressed:"mootools.js",compressed:"mootools-yui-compressed.js"}},aliases:{1:"1.1.2","1.1":"1.1.2","1.2":"1.2.5",
"1.3":"1.3.2","1.4":"1.4.2","1.11":"1.1.1"}},yui:{versions:{"2.8.0r4":{uncompressed:"build/yuiloader/yuiloader.js",compressed:"build/yuiloader/yuiloader-min.js"},"2.9.0":{uncompressed:"build/yuiloader/yuiloader.js",compressed:"build/yuiloader/yuiloader-min.js"},"2.8.1":{uncompressed:"build/yuiloader/yuiloader.js",compressed:"build/yuiloader/yuiloader-min.js"},"2.6.0":{uncompressed:"build/yuiloader/yuiloader.js",compressed:"build/yuiloader/yuiloader-min.js"},"2.7.0":{uncompressed:"build/yuiloader/yuiloader.js",
compressed:"build/yuiloader/yuiloader-min.js"},"3.3.0":{uncompressed:"build/yui/yui.js",compressed:"build/yui/yui-min.js"},"2.8.2r1":{uncompressed:"build/yuiloader/yuiloader.js",compressed:"build/yuiloader/yuiloader-min.js"}},aliases:{2:"2.9.0","2.6":"2.6.0","2.7":"2.7.0","2.8":"2.8.2r1","2.8.0":"2.8.0r4","2.8.2":"2.8.2r1","2.9":"2.9.0",3:"3.3.0","3.3":"3.3.0"}},prototype:{versions:{"1.6.1.0":{uncompressed:"prototype.js",compressed:"prototype.js"},"1.6.0.2":{uncompressed:"prototype.js",compressed:"prototype.js"},
"1.7.0.0":{uncompressed:"prototype.js",compressed:"prototype.js"},"1.6.0.3":{uncompressed:"prototype.js",compressed:"prototype.js"}},aliases:{1:"1.7.0.0","1.6":"1.6.1.0","1.6.0":"1.6.0.3","1.6.1":"1.6.1.0","1.7":"1.7.0.0","1.7.0":"1.7.0.0"}},jquery:{versions:{"1.2.3":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.2.6":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.3.0":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.3.1":{uncompressed:"jquery.js",compressed:"jquery.min.js"},
"1.3.2":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.4.0":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.4.1":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.4.2":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.4.3":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.4.4":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.5.0":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.5.1":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.5.2":{uncompressed:"jquery.js",
compressed:"jquery.min.js"},"1.6.0":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.6.1":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.6.2":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.6.3":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.6.4":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.7.0":{uncompressed:"jquery.js",compressed:"jquery.min.js"},"1.7.1":{uncompressed:"jquery.js",compressed:"jquery.min.js"}},aliases:{1:"1.7.1","1.2":"1.2.6","1.3":"1.3.2",
"1.4":"1.4.4","1.5":"1.5.2","1.6":"1.6.4","1.7":"1.7.1"}},dojo:{versions:{"1.3.0":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"},"1.4.0":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"},"1.3.1":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"},"1.5.0":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"},"1.4.1":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"},
"1.3.2":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"},"1.2.3":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"},"1.6.0":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"},"1.5.1":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"},"1.7.0":{uncompressed:"dojo/dojo.js.uncompressed.js",compressed:"dojo/dojo.js"},"1.6.1":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"},
"1.4.3":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"},"1.7.1":{uncompressed:"dojo/dojo.js.uncompressed.js",compressed:"dojo/dojo.js"},"1.7.2":{uncompressed:"dojo/dojo.js.uncompressed.js",compressed:"dojo/dojo.js"},"1.2.0":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"},"1.1.1":{uncompressed:"dojo/dojo.xd.js.uncompressed.js",compressed:"dojo/dojo.xd.js"}},aliases:{1:"1.6.1","1.1":"1.1.1","1.2":"1.2.3","1.3":"1.3.2","1.4":"1.4.3","1.5":"1.5.1",
"1.6":"1.6.1","1.7":"1.7.2"}}}};J.m.aa={af:!0,am:!0,az:!0,ar:!0,arb:"ar",bg:!0,bn:!0,ca:!0,cs:!0,cmn:"zh",da:!0,de:!0,el:!0,en:!0,en_gb:!0,es:!0,es_419:!0,et:!0,eu:!0,fa:!0,fi:!0,fil:!0,fr:!0,fr_ca:!0,gl:!0,ka:!0,gu:!0,he:"iw",hi:!0,hr:!0,hu:!0,hy:!0,id:!0,"in":"id",is:!0,it:!0,iw:!0,ja:!0,ji:"yi",jv:!1,jw:"jv",km:!0,kn:!0,ko:!0,lo:!0,lt:!0,lv:!0,ml:!0,mn:!0,mo:"ro",mr:!0,ms:!0,nb:"no",ne:!0,nl:!0,no:!0,pl:!0,pt:"pt_br",pt_br:!0,pt_pt:!0,ro:!0,ru:!0,si:!0,sk:!0,sl:!0,sr:!0,sv:!0,sw:!0,swh:"sw",ta:!0,te:!0,th:!0,tl:"fil",tr:!0,uk:!0,
ur:!0,vi:!0,yi:!1,zh:"zh_cn",zh_cn:!0,zh_hk:!0,zh_tw:!0,zsm:"ms",zu:!0};J.m.M={};J.m.M.O={1:"1.0","1.0":"current","1.1":"upcoming","1.2":"testing",41:"pre-45",42:"pre-45",43:"pre-45",44:"pre-45",46:"46.1","46.1":"46.2",48:"48.1",current:"51",upcoming:"51"};var Aa;function(){}K.prototype.T=!0;K.prototype.R=function(){return this.g.toString()};K.prototype.toString=function(){return this.g+""};function(){}
function(){}var Ha=/%{(\w+)}/g,Ga=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,Ja=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
function Ka(a,b,c){a=Fa(a,b);a=Ja.exec(Ca(a).toString());b=a[3]||"";return Ia(a[1]+La("?",a[2]||"",c)+La("#",b,void 0))}var Ba={};function(){}
function(){};var Ma=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};function(){}var Oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function(){};var L;a:{var Qa=A.navigator;if(Qa){var Ra=Qa.userAgent;if(Ra){L=Ra;break a}}L=""};function Sa(a){a:{var b=(a.ownerDocument&&a.ownerDocument.defaultView||A).document;if(b.querySelector&&(b=b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&Ta.test(b))break a;b=""}b&&a.setAttribute("nonce",b)}var Ta=/^[\w+/_-]+[=]{0,2}$/;function(){}Ua.prototype[Symbol.iterator]=function(){return this};Ua.prototype.next=function(){};function Va(a,b){return new Ua(a,b)};var Wa="StopIteration"in A?A.StopIteration:{message:"StopIteration",stack:""};function M(){}M.prototype.next=function(){return M.prototype.g.call(this)};M.prototype.g=function(){throw Wa;};M.prototype.F=function(){return this};function Xa(a){if(a instanceof N||a instanceof O||a instanceof P)return a;if("function"==typeof a.next)return new N(function(){return Ya(a)});if("function"==typeof a[Symbol.iterator])return new N(function(){});if("function"==typeof a.F)return new N(function(){return Ya(a.F())});throw Error("Not an iterator or iterable.");}
function(){}function N(a){this.g=a}N.prototype.F=function(){return new O(this.g())};N.prototype[Symbol.iterator]=function(){return new P(this.g())};N.prototype.i=function(){return new P(this.g())};function O(a){this.h=a}ma(O,M);O.prototype.g=function(){};O.prototype.next=function(){return O.prototype.g.call(this)};
O.prototype[Symbol.iterator]=function(){return new P(this.h)};O.prototype.i=function(){return new P(this.h)};function(){}ma(P,N);P.prototype.next=function(){return this.h.next()};function(){}l=Za.prototype;l.H=function(){$a(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.h[this.g[b]]);return a};l.G=function(){};
l.has=function(a){return Q(this.h,a)};function(){}l.get=function(a,b){return Q(this.h,a)?this.h[a]:b};l.set=function(){};
l.forEach=function(a,b){for(var c=this.G(),d=0;d<c.length;d++){var e=c[d],g=this.get(e);a.call(b,g,e,this)}};l.keys=function(){return Xa(this.F(!0)).i()};l.values=function(){};l.entries=function(){};
l.F=function(a){$a(this);var b=0,c=this.i,d=this,e=new M;e.g=function(){};e.next=e.g.bind(e);return e};function Q(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ab=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function(){};function(){}
cb.prototype.toString=function(){};
cb.prototype.resolve=function(){};function(){}function(){}function(){}
function(){}function(){}function(){}var jb=/[#\/\?@]/g,lb=/[#\?:]/g,kb=/[#\?]/g,ob=/[#\?@]/g,mb=/#/g;function(){}
function(){}l=R.prototype;l.add=function(){};function qb(a,b){S(a);b=T(a,b);a.g.has(b)&&(a.i=null,a.h-=a.g.get(b).length,a=a.g,Q(a.h,b)&&(delete a.h[b],--a.size,a.i++,a.g.length>2*a.size&&$a(a)))}function(){}
l.forEach=function(){};l.G=function(){S(this);for(var a=this.g.H(),b=this.g.G(),c=[],d=0;d<b.length;d++)for(var e=a[d],g=0;g<e.length;g++)c.push(b[d]);return c};l.H=function(){};
l.set=function(){};l.get=function(){};l.toString=function(){};
function(){}function(){}function nb(a,b){b&&!a.j&&(S(a),a.i=null,a.g.forEach(function(){},a));a.j=b};function(){}
var tb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function(){}function(){};function(){}wb.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};function(){};var yb;
function zb(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==L.indexOf("Presto")&&(a=function(){});if("undefined"!==typeof a&&-1==L.indexOf("Trident")&&-1==L.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.P;c.P=null;e()}};return function(e){d.next={P:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}};function Ab(a){A.setTimeout(function(){throw a;},0)};function Bb(){this.h=this.g=null}Bb.prototype.add=function(a,b){var c=Cb.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};function(){}var Cb=new wb(function(){return new Fb},function(a){return a.reset()});function Fb(){this.next=this.g=this.h=null}Fb.prototype.set=function(a,b){this.h=a;this.g=b;this.next=null};Fb.prototype.reset=function(){this.next=this.g=this.h=null};function(){}var Hb;function Ib(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);Hb=function(){a.then(Kb)}}else Hb=function(){var b=Kb;"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&-1==L.indexOf("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(yb||(yb=zb()),yb(b)):A.setImmediate(b)}}var Jb=!1,Eb=new Bb;function(){};function(){};function(){}function(){}Mb.prototype.reset=function(){this.i=this.h=this.j=this.g=null;this.l=!1};var Nb=new wb(function(){return new Mb},function(a){a.reset()});function(){}
U.prototype.then=function(a,b,c){return Pb(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};U.prototype.$goog_Thenable=!0;U.prototype.cancel=function(){};function(){}
function(){}function(){}U.prototype.C=function(a){this.g=0;V(this,2,a)};U.prototype.D=function(a){this.g=0;V(this,3,a)};
function(){}
function(){}function(){}function(){}U.prototype.v=function(){for(var a;a=Sb(this);)Tb(this,a,this.g,this.s);this.o=!1};
function(){}function(){}function(){}var Zb=Ab;function Qb(a){F.call(this,a)}va(Qb,F);Qb.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function(){}W.prototype.cancel=function(){};W.prototype.D=function(){};function(){}
function(){}function(){}W.prototype.then=function(){};W.prototype.$goog_Thenable=!0;function(){}
function(){}function ec(){F.call(this)}va(ec,F);ec.prototype.message="Deferred has already fired";ec.prototype.name="AlreadyCalledError";function ac(){F.call(this)}va(ac,F);ac.prototype.message="Deferred was canceled";ac.prototype.name="CanceledError";function(){}ic.prototype.i=function(){};var hc={};function jc(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!==b.length?b[0]:a.documentElement}function(){}function(){}function(){}va(lc,F);/*

 Copyright 2021 Google LLC
 This code is released under the MIT license.
 SPDX-License-Identifier: MIT
*/
function(){}
function nc(a){var b={timeout:3E4,attributes:{async:!1,defer:!1}},c=b.document||document,d=Ca(a).toString(),e=ub((new vb(c)).g,"SCRIPT"),g={U:e,W:void 0},f=new W(g),h=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(h=window.setTimeout(function(){},k),g.W=h);e.onload=e.onreadystatechange=function(){};e.onerror=function(){};g=b.attributes||{};Pa(g,{type:"text/javascript",charset:"UTF-8"});sb(e,g);e.src=Ca(a);Sa(e);jc(c).appendChild(e);return f}function oc(a,b,c){c=c||{};a=Ka(a,b,c);var d=nc(a);return new Promise(function(){})};/*

 Copyright 2021 Google LLC
 This code is released under the MIT license.
 SPDX-License-Identifier: MIT

*/
function pc(){return new Promise(function(a){"undefined"===typeof window||"complete"===document.readyState?a():window.addEventListener?(document.addEventListener("DOMContentLoaded",a,!0),window.addEventListener("load",a,!0)):window.attachEvent?window.attachEvent("onload",a):"function"!==typeof window.onload?window.onload=a:window.onload=function(b){if(window.onload)window.onload(b);a()}})};J.m.B={};var X="",Y="",qc,Z,rc=null,sc;function tc(){Y=X="";rc=Z=qc=null;B("google.load")||(E("google.load",uc),E("google.setOnLoadCallback",J.V));var a=document.getElementsByTagName("script");a=(document.currentScript||a[a.length-1]).getAttribute("src");a=new cb(a);var b=a.g;sc=b=b.match(/^www\.gstatic\.cn/)?"gstatic.cn":"gstatic.com";vc(a)}
function vc(a){a=new R(a.i.toString());var b=a.get("callback");"string"===typeof b&&(b=wc(b),pc().then(b));a=a.get("autoload");if("string"===typeof a)try{if(""!==a){var c=JSON.parse(a).modules;for(a=0;a<c.length;a++){var d=c[a];uc(d.name,d.version,d)}}}catch(e){throw Error("Autoload failed with: "+e);}}
function xc(a){var b=a,c,d=a.match(/^testing-/);d&&(b=b.replace(/^testing-/,""));a=b;do{if(b===J.m.M.O[b])throw Error("Infinite loop in version mapping: "+b);(c=J.m.M.O[b])&&(b=c)}while(c);c=(d?"testing-":"")+b;return{version:"pre-45"==b?a:c,ha:c}}
function yc(a){var b=J.m.N.ia[sc].loader,c=xc(a);return oc(b,{version:c.ha}).then(function(){var d=B("google.charts.loader.VersionSpecific.load")||B("google.charts.loader.publicLoad")||B("google.charts.versionSpecific.load");if(!d)throw Error("Bad version: "+a);rc=function(e){e=d(c.version,e);if(null==e||null==e.then){var g=B("google.charts.loader.publicSetOnLoadCallback")||B("google.charts.versionSpecific.setOnLoadCallback");e=new Promise(function(f){g(f)});e.then=g}return e}})}
function zc(a){"string"===typeof a&&(a=[a]);Array.isArray(a)&&0!==a.length||(a=J.m.N.ea);var b=[];a.forEach(function(c){c=c.toLowerCase();b=b.concat(c.split(/[\s,]+\s*/))});return b}function Ac(a){a=a||"";for(var b=a.replace(/-/g,"_").toLowerCase();"string"===typeof b;)a=b,b=J.m.aa[b],b===a&&(b=!1);b||(a.match(/_[^_]+$/)?(a=a.replace(/_[^_]+$/,""),a=Ac(a)):a="en");return a}
function Bc(a){a=a||"";""!==X&&X!==a&&(console.warn(" Attempting to load version '"+a+"' of Google Charts, but the previously loaded '"+(X+"' will be used instead.")),a=X);return X=a||""}function Cc(a){a=a||"";""!==Y&&Y!==a&&(console.warn(" Attempting to load Google Charts for language '"+a+"', but the previously loaded '"+(Y+"' will be used instead.")),a=Y);"en"===a&&(a="");return Y=a||""}function(){}
function Ec(a,b){b=Dc(b);b.domain=sc;b.callback=wc(b.callback);a=Bc(a);var c=b.language;c=Cc(Ac(c));b.language=c;if(!qc){if(b.enableUrlSettings&&window.URLSearchParams)try{a=(new URLSearchParams(top.location.search)).get("charts-version")||a}catch(d){console.info("Failed to get charts-version from top URL",d)}qc=yc(a)}b.packages=zc(b.packages);return Z=qc.then(function(){return rc(b)})}J.la=function(){};E("google.charts.safeLoad",J.la);
J.load=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];c=0;"visualization"===b[c]&&c++;var d="current";if("string"===typeof b[c]||"number"===typeof b[c])d=String(b[c]),c++;var e={};sa(b[c])&&(e=b[c]);return Ec(d,e)};E("google.charts.load",J.load);J.V=function(){};E("google.charts.setOnLoadCallback",J.V);
var Fc=H("https://maps.googleapis.com/maps/api/js?jsapiRedirect=true"),Gc=H("https://maps-api-ssl.google.com/maps?jsapiRedirect=true&file=googleapi");
function Hc(a,b,c){console.warn("Loading Maps API with the jsapi loader is deprecated.");c=c||{};a=c.key||c.client;var d=c.libraries,e=function(){}(c.other_params?c.other_params.split("&").map(function(h){return h.split("=")}):[]),g=Object.assign({},{key:a,ua:d},e),f="2"===b?Gc:Fc;Z=new Promise(function(h){var k=wc(c&&c.callback);oc(f,{},g).then(k).then(h)})}var Ic=H("https://www.gstatic.com/inputtools/js/ita/inputtools_3.js");
function Jc(a,b,c){sa(c)&&c.packages?(Array.isArray(c.packages)?c.packages:[c.packages]).includes("inputtools")?(console.warn('Loading "elements" with the jsapi loader is deprecated.\nPlease load '+(Ic+" directly.")),Z=new Promise(function(d){var e=wc(c&&c.callback);oc(Ic,{},{}).then(e).then(d)})):console.error('Loading "elements" other than "inputtools" is unsupported.'):console.error("google.load of elements was invoked without specifying packages")}var Kc=H("https://ajax.googleapis.com/ajax/libs/%{module}/%{version}/%{file}");
function(){}
function Mc(a,b,c){var d=J.m.$.ga[a];if(d){b=Lc(b,d.aliases);d=d.versions[b];if(!d)throw Error("Unknown version, "+b+", of "+a+".");var e={module:a,version:b||"",file:d.compressed};b=Ca(mc({format:Kc,ba:e})).toString();console.warn("Loading modules with the jsapi loader is deprecated.\nPlease load "+(a+" directly from "+b+"."));Z=new Promise(function(g){var f=wc(c&&c.callback);oc(Kc,e).then(f).then(g)})}else setTimeout(function(){},0)}
function wc(a){return function(){if("function"===typeof a)a();else if("string"===typeof a&&""!==a)try{var b=B(a);if("function"!==typeof b)throw Error("Type of '"+a+"' is "+typeof b+".");b()}catch(c){throw Error("Callback of "+a+" failed with: "+c);}}}function(){}