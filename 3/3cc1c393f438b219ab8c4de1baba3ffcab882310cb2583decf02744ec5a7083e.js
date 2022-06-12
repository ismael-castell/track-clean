/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 880);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(){}),

/***/ 141:
/***/ (function(module, exports) {

function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var g;// This works in non-strict mode
g=function(){return this}();try{// This works if eval is allowed (see CSP)
g=g||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;

/***/ }),

/***/ 15:
/***/ (function(){}),

/***/ 16:
/***/ (function(){}),

/***/ 17:
/***/ (function(){}),

/***/ 18:
/***/ (function(){}),

/***/ 19:
/***/ (function(){}),

/***/ 20:
/***/ (function(){}),

/***/ 21:
/***/ (function(){}),

/***/ 22:
/***/ (function(){}),

/***/ 25:
/***/ (function(){}),

/***/ 3:
/***/ (function(){}),

/***/ 314:
/***/ (function(module, exports) {

module.exports=function(module){return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],!module.children&&(module.children=[]),Object.defineProperty(module,"loaded",{enumerable:!0,get:function get(){return module.l}}),Object.defineProperty(module,"id",{enumerable:!0,get:function get(){return module.i}}),module.webpackPolyfill=1),module};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemHtml", function() { return elemHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssTags", function() { return getCssTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execCssTags", function() { return execCssTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCssTags", function() { return removeCssTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInlineCss", function() { return addInlineCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemFromObject", function() { return elemFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemToObject", function() { return elemToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemClone", function() { return elemClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemAppend", function() { return elemAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemPrepend", function() { return elemPrepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemBefore", function() { return elemBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemAfter", function() { return elemAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemRemove", function() { return elemRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemRemoveClass", function() { return elemRemoveClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemAddClass", function() { return elemAddClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemHasClass", function() { return elemHasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemClasses", function() { return elemClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemStyle", function() { return elemStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propsWithVendorPrefixes", function() { return propsWithVendorPrefixes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemWidth", function() { return elemWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemHeight", function() { return elemHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemContainsOffset", function() { return elemContainsOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemScrollOffset", function() { return elemScrollOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemIsHidden", function() { return elemIsHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemInDom", function() { return elemInDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemIsDescendantOf", function() { return elemIsDescendantOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemAncestorWithClass", function() { return elemAncestorWithClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemAncestorHasClass", function() { return elemAncestorHasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemAncestors", function() { return elemAncestors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemIsInside", function() { return elemIsInside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemAnimate", function() { return elemAnimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemBind", function() { return elemBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemUnbind", function() { return elemUnbind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemUnbindAll", function() { return elemUnbindAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemUnbindAllInside", function() { return elemUnbindAllInside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemBindKey", function() { return elemBindKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemRebind", function() { return elemRebind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemBindOnce", function() { return elemBindOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemTrigger", function() { return elemTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullscreenElement", function() { return fullscreenElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemRequestFullscreen", function() { return elemRequestFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemCancelFullscreen", function() { return elemCancelFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemStripEventAttributes", function() { return elemStripEventAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemMutationObserver", function() { return elemMutationObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docScrollTop", function() { return docScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docScrollLeft", function() { return docScrollLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeRequestAnimationFrame", function() { return safeRequestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formInputIsFocused", function() { return formInputIsFocused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inUserEventContext", function() { return inUserEventContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastActiveEventAt", function() { return getLastActiveEventAt; });
/* harmony import */ var utilities_obj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var utilities_docReady_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDocReady", function() { return utilities_docReady_js__WEBPACK_IMPORTED_MODULE_1__["isDocReady"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDocReady", function() { return utilities_docReady_js__WEBPACK_IMPORTED_MODULE_1__["onDocReady"]; });

/* harmony import */ var utilities_pageLoaded_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageLoaded", function() { return utilities_pageLoaded_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var utilities_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var utilities_wlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var player_lib_elemOffset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elemOffset", function() { return player_lib_elemOffset_js__WEBPACK_IMPORTED_MODULE_5__["elemOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elemZoom", function() { return player_lib_elemOffset_js__WEBPACK_IMPORTED_MODULE_5__["elemZoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoxModel", function() { return player_lib_elemOffset_js__WEBPACK_IMPORTED_MODULE_5__["isBoxModel"]; });

/* harmony import */ var player_lib_script_tags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execScriptTags", function() { return player_lib_script_tags_js__WEBPACK_IMPORTED_MODULE_6__["execScriptTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScriptTags", function() { return player_lib_script_tags_js__WEBPACK_IMPORTED_MODULE_6__["getScriptTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeScriptTags", function() { return player_lib_script_tags_js__WEBPACK_IMPORTED_MODULE_6__["removeScriptTags"]; });

/* harmony import */ var utilities_seqid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var wistia_namespace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
var W=wistia_namespace__WEBPACK_IMPORTED_MODULE_8__["default"],detect=Object(utilities_detect__WEBPACK_IMPORTED_MODULE_3__["cachedDetect"])();var elemHtml=function elemHtml(elem,content){var cssTags=getCssTags(content),scriptTags=Object(player_lib_script_tags_js__WEBPACK_IMPORTED_MODULE_6__["getScriptTags"])(content);// these script tags will be removed in short order as part of the script
// loader
return content=removeCssTags(content),content=Object(player_lib_script_tags_js__WEBPACK_IMPORTED_MODULE_6__["removeScriptTags"])(content),elem.innerHTML=content,execCssTags(cssTags,elem),Object(player_lib_script_tags_js__WEBPACK_IMPORTED_MODULE_6__["execScriptTags"])(scriptTags)};var getCssTags=function getCssTags(htmlStr){return htmlStr.match(/<link.*?rel=['"]stylesheet['"][^>]*>|<style>[\s\S]+?<\/style>/gi)||[]};var execCssTags=function execCssTags(cssTags,parentElem){if(!cssTags)return null;Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isArray"])(cssTags)||(cssTags=getCssTags(cssTags));for(var cssTag,inserted=[],i=0;i<cssTags.length;i++)if(cssTag=cssTags[i],/<link.*?rel=['"]stylesheet['"][^>]*>/.test(cssTag)){var matches=cssTag.match(/href=['"](.*?)['"]/i);if(matches){var link=document.createElement("link");link.setAttribute("rel","stylesheet"),link.setAttribute("href",matches[1]),link.className="wistia_injected_style",(parentElem||document.body||document.head).appendChild(link),inserted.push(link)}}else if(/<style>[\s\S]+?<\/style>/gi.test(cssTag)){var _matches=cssTag.match(/<style>([\s\S]+?)<\/style>/i);if(_matches){var style=addInlineCss(parentElem||document.body||document.head,_matches[1]);inserted.push(style)}}return inserted};var removeCssTags=function removeCssTags(htmlStr){return htmlStr.replace(/<link.*?rel=['"]stylesheet['"][^>]*>|<style>[\s\S]+?<\/style>/gi,"")};var addInlineCss=function(){};var elemFromObject=function elemFromObject(obj){if(Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj)){for(var result=[],i=0;i<obj.length;i++)result.push(elemFromObject(obj[i]));return result}var tagName=obj.tagName||"div",childNodes=obj.childNodes||[];Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isArray"])(childNodes)||(childNodes=[childNodes]);var elem=document.createElement(tagName);for(var key in obj){var val=obj[key];if("childNodes"!=key&&"tagName"!==key&&"ref"!==key){var dashedKey=key.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if("style"==key){if(Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isObject"])(val))for(var p in val)elem.style[p]=val[p];else// setAttribute('style', ...) only works in IE8+, so parse inline
// styles if it's passed in as a string.
for(var styles=val.split(";"),_i=0;_i<styles.length;_i++){var pair=styles[_i].split(/\s*:\s*/),_p=pair[0],v=pair[1];_p&&v&&(elem.style[_p]=v)}}else if("events"===key)for(var evt in val){var callback=val[evt];elemBind(elem,evt,callback)}else"className"===key||"class"===key?elem.className=val:"innerHTML"===key?elem.innerHTML=val:"innerText"===key?elem.innerText=val:null!=val&&"function"==typeof val.toString&&elem.setAttribute(dashedKey,val.toString())}}for(var childObj,_i2=0;_i2<childNodes.length;_i2++)if(childObj=childNodes[_i2],Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isObject"])(childObj)){var child=elemFromObject(childObj);elemAppend(elem,child)}else{var _child=document.createTextNode(childObj.toString());elemAppend(elem,_child)}return"function"==typeof obj.ref&&obj.ref(elem),elem};var elemToObject=function elemToObject(elem){if(Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elem))for(var _result=[],i=0;i<elem.length;i++)_result.push(elemToObject(elem[i]));for(var attr,result={tagName:elem.tagName.toLowerCase()},elemKeys=Object.keys(elem),_i3=0;_i3<elemKeys.length;_i3++)if(attr=elemKeys[_i3],"tagName"===attr||"childNodes"===attr||"nodeType"===attr||"nodeValue"===attr)continue;else if("style"===attr){result.style={};for(var styleKeys=Object.keys(elem.style),j=0;j<styleKeys.length;j++){var prop=styleKeys[j],val=elem.style[prop];val&&!/^\d/.test(prop)&&"length"!==prop&&(result.style[prop]=val)}}else{var value=elem.getAttribute(attr);null!=value&&(result[attr]=value)}for(var child,children=[],_i4=0;_i4<elem.childNodes.length;_i4++)child=elem.childNodes[_i4],1===child.nodeType?children.push(elemToObject(child)):3===child.nodeType&&children.push(child.nodeValue);return 0<children.length&&(result.childNodes=children),result};var elemClone=function(){};var elemAppend=function elemAppend(par,elem){if(Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elem)){for(var i=0;i<elem.length;i++)elemAppend(par,elem[i]);return}par.appendChild(elem)};var elemPrepend=function elemPrepend(par,elem){if(Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elem)){for(var i=0;i<elem.length;i++)elemPrepend(par,elem[i]);return}return 0===par.childNodes.length?elemAppend(par,elem):par.insertBefore(elem,par.childNodes[0])};var elemBefore=function elemBefore(sibling,elem){if(Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elem)){elem=elem.reverse();for(var i=0;i<elem.length;i++)elemBefore(sibling,elem[i]);return}return sibling.parentNode.insertBefore(elem,sibling)};var elemAfter=function elemAfter(sibling,elem){if(Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elem)){elem=elem.reverse();for(var i=0;i<elem.length;i++)elemAfter(sibling,elem[i]);return}return sibling.parentNode.insertBefore(elem,sibling.nextSibling)};var elemRemove=function elemRemove(elem){if(Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elem)||window.NodeList&&elem instanceof NodeList){for(var i=0;i<elem.length;i++)elemRemove(elem[i]);return}var par;null!=elem&&(1===elem.nodeType||3===elem.nodeType)&&(par=elem.parentNode)&&(par.removeChild(elem),elem=null)};var elemRemoveClass=function elemRemoveClass(elem,klass){if(Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elem)||window.NodeList&&elem instanceof NodeList){for(var i=0;i<elem.length;i++)elemRemoveClass(elem[i],klass);return}if(elemHasClass(elem,klass)){var className=elem.getAttribute("class");if(className){var regexp=new RegExp("\\b".concat(klass,"\\b"),"g"),newClassString=normalizeClassName(className.replace(regexp,""));elem.setAttribute("class",newClassString)}}};var elemAddClass=function elemAddClass(elem,klass){if(Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elem)||window.NodeList&&elem instanceof NodeList){for(var i=0;i<elem.length;i++)elemAddClass(elem[i],klass);return}if(!elemHasClass(elem,klass)){var newClassString,className=elem.getAttribute("class");className?(elemRemoveClass(elem,klass),newClassString=normalizeClassName("".concat(className," ").concat(klass))):newClassString=klass,elem.setAttribute("class",newClassString)}};// Longer than ` ${elem.className} `.indexOf(` ${klass} `) >= 0, but doesn't
// cause JIT code deoptimization in Chrome.
var elemHasClass=function(){};var BREAK_IDENTIFIER={},eachIndexOf=function(){};var elemClasses=function(){};var normalizeClassName=function(){};var elemStyle=function elemStyle(elem){for(var _len=arguments.length,args=Array(1<_len?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];if(Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elem)||window.NodeList&&elem instanceof NodeList){for(var node,result=[],i=0;i<elem.length;i++)node=elem[i],1===node.nodeType&&result.push(elemStyle.apply(void 0,[node].concat(args)));return result}if(2===args.length){var prop=args[0],val=args[1];elem.style[prop]=val}else if(1!==args.length)utilities_wlog__WEBPACK_IMPORTED_MODULE_4__["wlog"].apply(void 0,["Unexpected args",elem].concat(args));else if("string"==typeof args[0]){var _prop=args[0];try{return elem.currentStyle?elem.currentStyle[_prop]:window.getComputedStyle?window.getComputedStyle(elem,null).getPropertyValue(_prop):null}catch(e){utilities_wlog__WEBPACK_IMPORTED_MODULE_4__["wlog"].notice(e)}}else{var props=propsWithVendorPrefixes(args[0]);for(var _prop2 in props){var _val=props[_prop2];elem.style[_prop2]=_val}}};var VENDORED_PROPERTIES={borderImage:!0,mixBlendMode:!0,transform:!0,transition:!0,transitionDuration:!0},VENDOR_PREFIXES=["webkit","moz","o","ms"];var propsWithVendorPrefixes=function(){};var getComputedStyle=function(){};var elemWidth=function elemWidth(elem){if(elem===window)return window.innerWidth?window.innerWidth:document.documentElement?document.documentElement.offsetWidth:document.body.offsetWidth;if(elem===document){var body=document.body,html=document.documentElement;return Math.max(body.scrollWidth,body.offsetWidth,html.clientWidth,html.scrollWidth,html.offsetWidth)}var val;return detect.browser.quirks?parseInt(elem.offsetWidth,10):(val=getComputedStyle(elem,"width"))&&null!=val?parseFloat(val):elem.currentStyle?elem.offsetWidth:-1};var elemHeight=function(){};var elemContainsOffset=function elemContainsOffset(elem,left,top){var offset=Object(player_lib_elemOffset_js__WEBPACK_IMPORTED_MODULE_5__["elemOffset"])(elem);return offset.right=offset.left+elemWidth(elem),offset.bottom=offset.top+elemHeight(elem),offset.left<=left&&left<offset.right&&offset.top<=top&&top<offset.bottom};var elemScrollOffset=function(){};var elemIsHidden=function(){};var elemInDom=function(){};var elemIsDescendantOf=function(){};var elemAncestorWithClass=function(){};var elemAncestorHasClass=function(){};var elemAncestors=function(){};var elemIsInside=function(){};var getTransitionProp=function(){};var elemAnimate=function elemAnimate(elem){var props=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},options=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};options=Object(utilities_obj__WEBPACK_IMPORTED_MODULE_0__["merge"])({time:400,easing:"ease"},options);var transitions=getTransitionProp(props,options.time,options.easing);elemStyle(elem,{transition:transitions}),safeRequestAnimationFrame(function(){})};var elemBind=function(){};var elemUnbind=function(){};var elemUnbindAll=function(){};var elemUnbindAllInside=function(){};var elemBindKey=function(){};var elemRebind=function(){};var elemBindOnce=function(){};var elemTrigger=function elemTrigger(elem,event){for(var _len4=arguments.length,customArguments=Array(2<_len4?_len4-2:0),_key4=2;_key4<_len4;_key4++)customArguments[_key4-2]=arguments[_key4];if(elem.dispatchEvent){var eventObj=document.createEvent("Events");return eventObj.initEvent(event,!0,!1),"click"===event||"doubleclick"===event?eventObj.which=1:"rightclick"===event&&(eventObj.which=2),eventObj.customArguments=customArguments,elem.dispatchEvent(eventObj)}if(elem.fireEvent){var _eventObj={customArguments:customArguments};return elem.fireEvent("on"+event,_eventObj)}utilities_wlog__WEBPACK_IMPORTED_MODULE_4__["wlog"].error("neither dispatchEvent nor fireEvent is defined for",elem,event)};var fullscreenElement=function(){};var elemRequestFullscreen=function elemRequestFullscreen(elem){return elem.requestFullscreen?elem.requestFullscreen():elem.mozRequestFullScreen?elem.mozRequestFullScreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):elem.msRequestFullscreen?elem.msRequestFullscreen():elem.webkitEnterFullscreen?elem.webkitEnterFullscreen():(utilities_wlog__WEBPACK_IMPORTED_MODULE_4__["wlog"].notice("no requestFullscreen functionality detected"),null)};var elemCancelFullscreen=function elemCancelFullscreen(elem){return document.cancelFullscreen?document.cancelFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():elem&&elem.webkitExitFullscreen?elem.webkitExitFullscreen():(utilities_wlog__WEBPACK_IMPORTED_MODULE_4__["wlog"].notice("no cancelFullscreen functionality detected"),null)};var elemStripEventAttributes=function elemStripEventAttributes(elem){var attributes=elem&&elem.attributes||[];try{for(var attr,i=0;i<attributes.length;i++)attr=attributes[i],/^on.+/i.test(attr.name)&&(elem[attr.name]=null,elem.removeAttribute(attr.name))}catch(e){utilities_wlog__WEBPACK_IMPORTED_MODULE_4__["wlog"].error(e)}if(elem.childNodes)for(var child,_i5=0;_i5<elem.childNodes.length;_i5++)child=elem.childNodes[_i5],1===child.nodeType&&elemStripEventAttributes(child)};var elemMutationObserver=function(){};var docScrollTop=function docScrollTop(t){var docBody=document.body,docElem=document.documentElement;return null==t?docElem&&docElem.scrollTop||docBody&&docBody.scrollTop||0:void(docBody&&(docBody.scrollTop=t),docElem&&(docElem.scrollTop=t))};var docScrollLeft=function(){};var safeRequestAnimationFrame=function(){};var formInputIsFocused=function(){};var inUserEventContext=function inUserEventContext(){return!!activeDOMEvent};var getLastActiveEventAt=function getLastActiveEventAt(){return lastActiveEventAt};var activeDOMEvent,lastActiveEventAt=-1,userEventsThatShowIntent=["auxclick","click","contextmenu","dblclick","focus","keydown","keypress","keyup","mousedown","mouseup","reset","submit","touchend","touchstart"];userEventsThatShowIntent.forEach(function(){});

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDocReady", function() { return isDocReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDocReady", function() { return onDocReady; });
/* harmony import */ var utilities_poll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
var isDocReady=function isDocReady(){return /loaded|complete/.test(document.readyState)};var onDocReady=function(){};/* harmony default export */ __webpack_exports__["default"] = (onDocReady);

/***/ }),

/***/ 36:
/***/ (function(){}),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxModel", function() { return isBoxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemOffset", function() { return elemOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elemZoom", function() { return elemZoom; });
// This is called very very frequently; creating and removing an element to
// test constantly is not ideal. So this method exists as an abstraction to
// cache the result.
var _isBoxModel;var isBoxModel=function(){};var elemOffset=function(){};var elemZoom=function(){};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScriptTags", function() { return getScriptTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scriptTagsToRunScriptsInput", function() { return scriptTagsToRunScriptsInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execScriptTags", function() { return execScriptTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScriptTags", function() { return removeScriptTags; });
/* harmony import */ var player_lib_script_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
var getScriptTags=function(){};var scriptTagsToRunScriptsInput=function(){};var execScriptTags=function execScriptTags(scriptTags,callback){if(!scriptTags)return null;var hashes=scriptTagsToRunScriptsInput(scriptTags);return Object(player_lib_script_utils__WEBPACK_IMPORTED_MODULE_0__["runScripts"])(hashes,callback)};var removeScriptTags=function removeScriptTags(htmlStr){return htmlStr.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g,"")};

/***/ }),

/***/ 4:
/***/ (function(){}),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlDimensionsForVideo", function() { return controlDimensionsForVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalingOptionsFromVideo", function() { return scalingOptionsFromVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlDimensions", function() { return controlDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bigPlayButtonDimensions", function() { return bigPlayButtonDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeMultiplier", function() { return fontSizeMultiplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowBigControls", function() { return allowBigControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxMultiplierForVideo", function() { return maxMultiplierForVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minMultiplierForVideo", function() { return minMultiplierForVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoomMultiplier", function() { return getZoomMultiplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeviceMultiplier", function() { return getDeviceMultiplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlMultiplierForVideo", function() { return controlMultiplierForVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlMultiplier", function() { return controlMultiplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuMultiplier", function() { return menuMultiplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitControl", function() { return fitControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tapIcon", function() { return tapIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMetaViewport", function() { return parseMetaViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlMultiplierBasedOnVideo", function() { return controlMultiplierBasedOnVideo; });
/* harmony import */ var player_lib_elem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var player_lib_timeout_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var utilities_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var utilities_obj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function(){}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var detect=Object(utilities_detect__WEBPACK_IMPORTED_MODULE_2__["cachedDetect"])();var controlDimensionsForVideo=function(){};var scalingOptionsFromVideo=function scalingOptionsFromVideo(video,options){return utilities_obj__WEBPACK_IMPORTED_MODULE_3__["merge"]({videoWidth:video.videoWidth(),videoHeight:video.videoHeight(),isInFullscreen:video.inFullscreen(),controlScaling:video.controlScaling()},options)};var controlDimensions=function controlDimensions(){var options=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},baseWidth=1<arguments.length&&arguments[1]!==void 0?arguments[1]:40,baseHeight=2<arguments.length&&arguments[2]!==void 0?arguments[2]:34;options=utilities_obj__WEBPACK_IMPORTED_MODULE_3__["merge"]({videoWidth:640,videoHeight:360,isInFullscreen:!1,baseWidth:null==baseWidth?40:baseWidth,baseHeight:null==baseHeight?34:baseHeight},options);var multiplier=controlMultiplier(options);return{width:multiplier*options.baseWidth,height:multiplier*options.baseHeight}};var bigPlayButtonDimensions=function(){};// abstracted so this can easily be changed if we wanted.
var fontSizeMultiplier=function fontSizeMultiplier(options){return controlMultiplier(options)};var allowBigControls=function(){};var maxMultiplierForVideo=function maxMultiplierForVideo(options){return"auto"==options.controlScaling?allowBigControls(options)?3.5:1.4:options.controlScaling};var minMultiplierForVideo=function(){};var getZoomMultiplier=function(){};var getDeviceMultiplier=function(){};var controlMultiplierForVideo=function(){};var controlMultiplier=function(){};// abstracted so this can easily be changed if we wanted.
var menuMultiplier=function(){};var fitControl=function fitControl(options){var _options=options,controlId=_options.controlId,video=_options.video,controlElem=_options.controlElem;options=utilities_obj__WEBPACK_IMPORTED_MODULE_3__["merge"]({videoWidth:video.videoWidth(),videoHeight:video.videoHeight(),controlScaling:video.controlScaling(),isInFullscreen:video.inFullscreen()},options);var _controlDimensions=controlDimensions(options),width=_controlDimensions.width,height=_controlDimensions.height;return Object(player_lib_elem__WEBPACK_IMPORTED_MODULE_0__["elemStyle"])(controlElem,{height:"".concat(height,"px"),width:"".concat(width,"px")}),tapIcon("".concat(video.uuid,".").concat(controlId),controlElem),{width:width,height:height}};// Often the svg size changes don't visually change the vertical position of
// the icon. "tapping" it by forcing it to reevaluate the stack is one way to
// fix that.
var tapIcon=function tapIcon(timeoutPrefix,controlElem){for(var svgs=controlElem.getElementsByTagName("svg"),i=0;i<svgs.length;i++)(function(svg){Object(player_lib_timeout_utils__WEBPACK_IMPORTED_MODULE_1__["doTimeout"])("".concat(timeoutPrefix,".tap_icon"),function(){Object(player_lib_elem__WEBPACK_IMPORTED_MODULE_0__["elemStyle"])(svg,{position:"relative"}),Object(player_lib_timeout_utils__WEBPACK_IMPORTED_MODULE_1__["doTimeout"])("#{timeoutPrefix}.tap_icon",function(){Object(player_lib_elem__WEBPACK_IMPORTED_MODULE_0__["elemStyle"])(svg,{position:""})},30)},30)})(svgs[i])};var parseMetaViewport=function parseMetaViewport(){var metaTag=document.querySelector("meta[name=viewport]"),content=metaTag&&metaTag.getAttribute("content"),result={};if(content){var pairs=content.split(/[\s,]+/);pairs.forEach(function(pair){var keyAndVal=pair.split("=");2===keyAndVal.length&&(result[keyAndVal[0]]=utilities_obj__WEBPACK_IMPORTED_MODULE_3__["cast"](keyAndVal[1]))})}return result};var normalScaleWidthRange=function normalScaleWidthRange(media){var onMobile=detect.iphone||detect.ipad||detect.android;if(!onMobile)return[640,960];if(null===media||void 0===media?void 0:media.isAudio())return[500,960];var screenWidth,viewport=parseMetaViewport();if(viewport.width){screenWidth="number"==typeof viewport.width?0+viewport.width:screen.width||window.innerWidth;// This doesn't capture any scaling the user does after the initial
// render, but the page designer would expect the video to render at the
// scale they set.
var scale=Math.max(viewport["minimum-scale"]||0,Math.min(viewport["maximum-scale"]||10,viewport["initial-scale"]||1));1>scale&&(screenWidth/=scale)}else// Initial render will use the width of the document to determine its
// size, then zoom out to show the whole page.
screenWidth=window.innerWidth;return[screenWidth,2*screenWidth/3]};var controlMultiplierBasedOnVideo=function(){};

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doTimeout", function() { return doTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTimeouts", function() { return clearTimeouts; });
/* harmony import */ var wistia_namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var utilities_obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
var W=wistia_namespace__WEBPACK_IMPORTED_MODULE_0__["default"];null==W._timeouts&&(W._timeouts={});// Improved timeouts!
// allows us to
//   1. auto-debounce if an identical key is replaced
//   2. associate timeouts with a specific context, but access them globally
//   3. Clear all timeouts in a specific context
//   4. Do nextTick by not specifying the time argument
// e.g. Wistia.timeout("video1234", function() { ... });
//
// In our implementation, we treat the first dot-delimited value in the key
// as a namespace. This is an optimization since most of our videos prefix
// their timeouts with a uuid. By keeping them in a namespace, it means
// W.clearTimeouts doesn't need to iterate through _all_ timeouts globally,
// which makes W.timeout itself faster (since it calls W.clearTimeouts internally).
//
// Returns the timeoutId.
var doTimeout=function doTimeout(key,fn){var time=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;Object(utilities_obj__WEBPACK_IMPORTED_MODULE_1__["isArray"])(key)&&(key=key.join("."));var namespace=timeoutNamespace(key);if(clearTimeouts(key,namespace),fn){var timeouts=W._timeouts[namespace];null==timeouts&&(timeouts=W._timeouts[namespace]={});var timeoutId=setTimeout(function(){},time);return timeouts[key]=timeoutId,timeoutId}return W._timeouts[namespace][key]};// This will clear timeouts matching the key. Key is dot-delimited list
// like:
//
// mynamespace.more_specific.
// mynamespace.anothernamespace.more_specific
//
// We allow passing in namespace as an optimization for W.timeout.
var clearTimeouts=function clearTimeouts(key){var namespace=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;Object(utilities_obj__WEBPACK_IMPORTED_MODULE_1__["isArray"])(key)&&(key=key.join(".")),namespace=namespace||timeoutNamespace(key);// If there's no namespacing on the input key, then we should treat the
// input as both a namespace _and_ a key. This handles the namespace case.
// We handle the key case with our normal logic.
var timeouts;if("__global__"===namespace&&(timeouts=W._timeouts[key],timeouts))for(var k in timeouts){var v=timeouts[k];clearTimeout(v),delete timeouts[k]}if(timeouts=W._timeouts[namespace],timeouts)for(var _k in timeouts){var _v=timeouts[_k];_k.indexOf&&0===_k.indexOf(key)&&(_k.length===key.length||"."===_k.charAt(key.length))&&(clearTimeout(_v),delete timeouts[_k])}// Cleaning out namespaces is not particularly efficient, and isn't
// particularly helpful, so let's only do it once every 5 seconds.
W.blockSweepTimeouts||(W.blockSweepTimeouts=!0,setTimeout(sweepTimeouts,0),setTimeout(function(){W.blockSweepTimeouts=!1},5e3))};// Clear out any namespaces that are no longer active
var sweepTimeouts=function sweepTimeouts(){for(var namespace in W._timeouts){var timeouts=W._timeouts[namespace];Object(utilities_obj__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(timeouts)&&delete W._timeouts[namespace]}},timeoutNamespace=function(){};

/***/ }),

/***/ 6:
/***/ (function(){}),

/***/ 7:
/***/ (function(){}),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(704);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _createStore__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(718);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return _combineReducers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(720);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(721);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(722);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(719);
/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/function isCrushed(){} false&&false;

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(705);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(715);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(symbol_observable__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */var ActionTypes={INIT:"@@redux/INIT"/**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */};function createStore(reducer,preloadedState,enhancer){function ensureCanMutateNextListeners(){nextListeners===currentListeners&&(nextListeners=currentListeners.slice())}/**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */function getState(){return currentState}/**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */function subscribe(listener){if("function"!=typeof listener)throw new Error("Expected listener to be a function.");var isSubscribed=!0;return ensureCanMutateNextListeners(),nextListeners.push(listener),function(){}}/**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */function dispatch(action){if(!Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(action))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof action.type)throw new Error("Actions may not have an undefined \"type\" property. Have you misspelled a constant?");if(isDispatching)throw new Error("Reducers may not dispatch actions.");try{isDispatching=!0,currentState=currentReducer(currentState,action)}finally{isDispatching=!1}for(var listener,listeners=currentListeners=nextListeners,i=0;i<listeners.length;i++)listener=listeners[i],listener();return action}/**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */function replaceReducer(nextReducer){if("function"!=typeof nextReducer)throw new Error("Expected the nextReducer to be a function.");currentReducer=nextReducer,dispatch({type:ActionTypes.INIT})}/**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */function observable(){var _ref,outerSubscribe=subscribe;return _ref={/**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */subscribe:function subscribe(observer){function observeState(){observer.next&&observer.next(getState())}if("object"!==_typeof(observer))throw new TypeError("Expected the observer to be an object.");observeState();var unsubscribe=outerSubscribe(observeState);return{unsubscribe:unsubscribe}}},_ref[symbol_observable__WEBPACK_IMPORTED_MODULE_1___default.a]=function(){return this},_ref}// When a store is created, an "INIT" action is dispatched so that every
// reducer returns their initial state. This effectively populates
// the initial state tree.
var _ref2;if("function"==typeof preloadedState&&"undefined"==typeof enhancer&&(enhancer=preloadedState,preloadedState=void 0),"undefined"!=typeof enhancer){if("function"!=typeof enhancer)throw new Error("Expected the enhancer to be a function.");return enhancer(createStore)(reducer,preloadedState)}if("function"!=typeof reducer)throw new Error("Expected the reducer to be a function.");var currentReducer=reducer,currentState=preloadedState,currentListeners=[],nextListeners=currentListeners,isDispatching=!1;return dispatch({type:ActionTypes.INIT}),_ref2={dispatch:dispatch,subscribe:subscribe,getState:getState,replaceReducer:replaceReducer},_ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_1___default.a]=observable,_ref2}

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(706);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(712);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(714);
/** `Object#toString` result references. */var objectTag="[object Object]",funcProto=Function.prototype,objectProto=Object.prototype,funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,objectCtorString=funcToString.call(Object);/** Used for built-in method references. */ /**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */function isPlainObject(value){if(!Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)||Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)!=objectTag)return!1;var proto=Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);if(null===proto)return!0;var Ctor=hasOwnProperty.call(proto,"constructor")&&proto.constructor;return"function"==typeof Ctor&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString}/* harmony default export */ __webpack_exports__["default"] = (isPlainObject);

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(707);
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(710);
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(711);
/** `Object#toString` result references. */var nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=_Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"]?_Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag:void 0;/** Built-in value references. */ /**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){return null==value?void 0===value?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(value)?Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value):Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)}/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);

/***/ }),

/***/ 707:
/***/ (function(){}),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(709);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}/** Detect free variable `self`. */var freeSelf="object"==("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,root=_freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"]||freeSelf||Function("return this")();/** Used as a reference to the global object. *//* harmony default export */ __webpack_exports__["default"] = (root);

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}/** Detect free variable `global` from Node.js. */var freeGlobal="object"==("undefined"==typeof global?"undefined":_typeof(global))&&global&&global.Object===Object&&global;/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(141)))

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(707);
/** Used for built-in method references. */var objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=_Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"]?_Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag:void 0;/** Used to check objects for own properties. */ /**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=void 0;var unmasked=!0}catch(e){}var result=nativeObjectToString.call(value);return unmasked&&(isOwn?value[symToStringTag]=tag:delete value[symToStringTag]),result}/* harmony default export */ __webpack_exports__["default"] = (getRawTag);

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */var objectProto=Object.prototype,nativeObjectToString=objectProto.toString;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ /**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value)}/* harmony default export */ __webpack_exports__["default"] = (objectToString);

/***/ }),

/***/ 712:
/***/ (function(){}),

/***/ 713:
/***/ (function(){}),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function(){}/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__(716);

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {Object.defineProperty(exports,"__esModule",{value:!0});var _ponyfill=__webpack_require__(717),_ponyfill2=_interopRequireDefault(_ponyfill);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var root;/* global window */root="undefined"==typeof self?"undefined"==typeof window?"undefined"==typeof global? false?undefined:module:global:window:self;var result=(0,_ponyfill2["default"])(root);exports["default"]=result;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(141), __webpack_require__(314)(module)))

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=symbolObservablePonyfill;function symbolObservablePonyfill(root){var result,_Symbol=root.Symbol;return"function"==typeof _Symbol?_Symbol.observable?result=_Symbol.observable:(result=_Symbol("observable"),_Symbol.observable=result):result="@@observable",result};

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return combineReducers; });
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(704);
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(705);
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
function(){}function getUnexpectedStateShapeWarningMessage(inputState,reducers,action,unexpectedKeyCache){var reducerKeys=Object.keys(reducers),argumentName=action&&action.type===_createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===reducerKeys.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(inputState))return"The "+argumentName+" has unexpected type of \""+{}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1]+"\". Expected argument to be an object with the following "+("keys: \""+reducerKeys.join("\", \"")+"\"");var unexpectedKeys=Object.keys(inputState).filter(function(){});if(unexpectedKeys.forEach(function(key){unexpectedKeyCache[key]=!0}),0<unexpectedKeys.length)return"Unexpected "+(1<unexpectedKeys.length?"keys":"key")+" "+("\""+unexpectedKeys.join("\", \"")+"\" found in "+argumentName+". Expected to find one of the known reducer keys instead: ")+("\""+reducerKeys.join("\", \"")+"\". Unexpected keys will be ignored.")}function assertReducerShape(reducers){Object.keys(reducers).forEach(function(key){var reducer=reducers[key],initialState=reducer(void 0,{type:_createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT});if("undefined"==typeof initialState)throw new Error("Reducer \""+key+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");var type="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof reducer(void 0,{type:type}))throw new Error("Reducer \""+key+"\" returned undefined when probed with a random type. "+("Don't try to handle "+_createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT+" or other actions in \"redux/*\" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null."))})}/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */function combineReducers(reducers){for(var key,reducerKeys=Object.keys(reducers),finalReducers={},i=0;i<reducerKeys.length;i++)key=reducerKeys[i], false&&false,"function"==typeof reducers[key]&&(finalReducers[key]=reducers[key]);var finalReducerKeys=Object.keys(finalReducers),unexpectedKeyCache=void 0; false&&(false);var shapeAssertionError;try{assertReducerShape(finalReducers)}catch(e){shapeAssertionError=e}return function combination(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},action=arguments[1];if(shapeAssertionError)throw shapeAssertionError;if(false){ var warningMessage; }for(var hasChanged=!1,nextState={},_i=0;_i<finalReducerKeys.length;_i++){var _key=finalReducerKeys[_i],reducer=finalReducers[_key],previousStateForKey=state[_key],nextStateForKey=reducer(previousStateForKey,action);if("undefined"==typeof nextStateForKey){var errorMessage=getUndefinedStateErrorMessage(_key,action);throw new Error(errorMessage)}nextState[_key]=nextStateForKey,hasChanged=hasChanged||nextStateForKey!==previousStateForKey}return hasChanged?nextState:state}}

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */function(){}

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindActionCreators; });
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function bindActionCreator(actionCreator,dispatch){return function(){return dispatch(actionCreator.apply(void 0,arguments))}}/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */function(){}

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyMiddleware; });
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(722);
var _extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i],source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target};/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */function applyMiddleware(){for(var _len=arguments.length,middlewares=Array(_len),_key=0;_key<_len;_key++)middlewares[_key]=arguments[_key];return function(createStore){return function(reducer,preloadedState,enhancer){var store=createStore(reducer,preloadedState,enhancer),_dispatch=store.dispatch,chain=[],middlewareAPI={getState:store.getState,dispatch:function dispatch(action){return _dispatch(action)}};return chain=middlewares.map(function(middleware){return middleware(middlewareAPI)}),_dispatch=_compose__WEBPACK_IMPORTED_MODULE_0__["default"].apply(void 0,chain)(store.dispatch),_extends({},store,{dispatch:_dispatch})}}}

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */function compose(){for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++)funcs[_key]=arguments[_key];return 0===funcs.length?function(arg){return arg}:1===funcs.length?funcs[0]:funcs.reduce(function(a,b){return function(){return a(b.apply(void 0,arguments))}})}

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectAsyncReducer", function() { return injectAsyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreForPlayerInstance", function() { return getStoreForPlayerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStores", function() { return clearStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(757);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(783);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(784);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
var shouldLog=function shouldLog(options){return!1;return false&&false},configureStore=function configureStore(){var options=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},store=Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(_root_reducer__WEBPACK_IMPORTED_MODULE_1__["default"])(),Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a),Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(Object(redux_logger__WEBPACK_IMPORTED_MODULE_3__["createLogger"])({predicate:function(){}})));// Cache the store instance on the window so we can load
// files with store dependencies into multiple bundles
// without creating multiple instances. This allows us to
// import accessors and actions in asynchronously loaded
// plugin bundles.
return store.asyncReducers={},store};var injectAsyncReducer=function injectAsyncReducer(store,name,asyncReducer){return store.asyncReducers[name]=reducer,store.replaceReducer(Object(_root_reducer__WEBPACK_IMPORTED_MODULE_1__["default"])(store.asyncReducers))};var getStoreForPlayerInstance=function getStoreForPlayerInstance(id){return null==window.__wistiaStores&&(window.__wistiaStores={}),null==window.__wistiaStores[id]&&(window.__wistiaStores[id]=configureStore()),window.__wistiaStores[id]};var clearStores=function(){};var store=getStoreForPlayerInstance(1);

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(758);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var player_modules_branding_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(759);
/* harmony import */ var player_modules_reportAProblem_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(761);
/* harmony import */ var player_modules_captions_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(763);
/* harmony import */ var player_modules_captions_reducer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(player_modules_captions_reducer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var player_modules_chapters_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(765);
/* harmony import */ var player_modules_settings_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(768);
/* harmony import */ var player_modules_share_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(770);
/* harmony import */ var player_modules_statusBar_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(772);
/* harmony import */ var player_modules_playbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(774);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(779);
/* harmony import */ var player_modules_passwordProtect_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(781);
/* harmony default export */ __webpack_exports__["default"] = (function(){var asyncReducers=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},syncReducers={branding:player_modules_branding_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],captions:player_modules_captions_reducer__WEBPACK_IMPORTED_MODULE_4___default.a,chapters:player_modules_chapters_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],settings:player_modules_settings_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],shareMenu:player_modules_share_reducer__WEBPACK_IMPORTED_MODULE_7__["default"],statusBar:player_modules_statusBar_reducer__WEBPACK_IMPORTED_MODULE_8__["default"],playbar:player_modules_playbar__WEBPACK_IMPORTED_MODULE_9__["default"].reducer,vulcan:_reducer__WEBPACK_IMPORTED_MODULE_10__["default"],passwordProtect:player_modules_passwordProtect_reducer__WEBPACK_IMPORTED_MODULE_11__["default"],reportAProblem:player_modules_reportAProblem_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]};return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(object_assign__WEBPACK_IMPORTED_MODULE_1___default()({},syncReducers,asyncReducers))});

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*//* eslint-disable no-unused-vars */var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(null===val||val===void 0)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(val)}function shouldUseNative(){try{if(!Object.assign)return!1;// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var test1=new String("abc");// eslint-disable-line no-new-wrappers
if(test1[5]="de","5"===Object.getOwnPropertyNames(test1)[0])return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
for(var test2={},i=0;10>i;i++)test2["_"+String.fromCharCode(i)]=i;var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n]});if("0123456789"!==order2.join(""))return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test3={};return["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"].forEach(function(letter){test3[letter]=letter}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},test3)).join("")}catch(err){// We don't expect any of the above to throw, but better to be safe.
return!1}}module.exports=shouldUseNative()?Object.assign:function(){};

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(760);
var initialState={isMenuOpen:!1},reducer=function reducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsMenuOpen:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{isMenuOpen:action.payload});default:return state;}};/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefix="BRANDING__";/* harmony default export */ __webpack_exports__["default"] = ({setIsMenuOpen:"BRANDING__SET_IS_MENU_OPEN"});

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(762);
var _W$lib=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("utilities/obj"),assign=_W$lib.assign,pick=_W$lib.pick;var initialState={isOpen:!1,isHidden:!0,submitFormDataPhase:"not-submitting",formFeedbackType:"blank",formFeedbackText:"",description:"",category:""};var reducer=function reducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case _types__WEBPACK_IMPORTED_MODULE_1__["default"].REPORT_A_PROBLEM__SET_IS_OPEN:return assign(state,{isOpen:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].REPORT_A_PROBLEM__SET_IS_HIDDEN:return assign(state,{isHidden:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].REPORT_A_PROBLEM__SET_FORM_FEEDBACK:return assign(state,pick(action.payload,["formFeedbackType","formFeedbackText"]));case _types__WEBPACK_IMPORTED_MODULE_1__["default"].REPORT_A_PROBLEM__SUBMIT_FORM_DATA_PHASE:return assign(state,{submitFormDataPhase:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].REPORT_A_PROBLEM__SET_CATEGORY:return assign(state,{category:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].REPORT_A_PROBLEM__SET_DESCRIPTION:return assign(state,{description:action.payload});default:return state;}};/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefix="REPORT_A_PROBLEM__",types=["REPORT_A_PROBLEM__SET_IS_OPEN","REPORT_A_PROBLEM__SET_IS_HIDDEN","REPORT_A_PROBLEM__SET_FORM_FEEDBACK","REPORT_A_PROBLEM__SUBMIT_FORM_DATA_PHASE","REPORT_A_PROBLEM__SET_DESCRIPTION","REPORT_A_PROBLEM__SET_CATEGORY"].reduce(function(types,type){return types[type]=type,types},{});/* harmony default export */ __webpack_exports__["default"] = (types);

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

var Types,W,assign,filter,initialState,maybeAddOffCaption,maybeUpdateCaptions,offCaptionOption,reducer,ref;W=__webpack_require__(3)["default"],Types=__webpack_require__(764),ref=W.lib("utilities/obj"),assign=ref.assign,filter=ref.filter,offCaptionOption={id:0,english_name:"Off",native_name:"Off",language:"off",key:"off"},initialState={isMenuOpen:!1,captions:[offCaptionOption],currentLanguage:0},maybeAddOffCaption=function maybeAddOffCaption(captions){var offCaption,offCaptionId;return(offCaptionId=0,offCaption=filter(captions,function(caption){return caption.id===offCaptionId})[0],offCaption)?captions:(captions.unshift(offCaptionOption),captions)},maybeUpdateCaptions=function(){},reducer=function reducer(state,action){var payload;switch(null==state&&(state=initialState),action.type){case Types.setMultipleProperties:return payload=maybeUpdateCaptions(action.payload),assign({},state,action.payload);case Types.setIsMenuOpen:return assign({},state,{isMenuOpen:action.payload});case Types.setCurrentLanguage:return assign({},state,{currentLanguage:action.payload});default:return state;}},module.exports=reducer;

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

var prefix;prefix="CAPTIONS__",module.exports={setIsMenuOpen:prefix+"SET_IS_MENU_OPEN",setMultipleProperties:prefix+"SET_MULTIPLE_PROPERTIES",setCurrentLanguage:prefix+"SET_CURRENT_LANGUAGE"};

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(766);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(767);
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _W$lib=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("utilities/obj"),assign=_W$lib.assign,filter=_W$lib.filter,initialState={isVisible:!1,isVisibleOnLoad:!1,isMenuOpen:!1,menuWidth:null,chapters:[],lastChapterActivated:null,currentlyHoveredChapter:null,chapterTitleLeftOffset:0,hasControlBeenClicked:!1},addChapter=function addChapter(list,chapter){var chapterWithId=Object(_utils__WEBPACK_IMPORTED_MODULE_2__["ensureChapterId"])(chapter,list),chapterList=removeChapter(list,chapterWithId.id);return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatList"])([].concat(_toConsumableArray(chapterList),[chapterWithId]))},removeChapter=function removeChapter(list,chapterId){var chapter=getChapter(list,chapterId);return chapter?Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatList"])(filter(list,function(){})):list},getChapter=function getChapter(list,id){return filter(list,function(item){return item.id==id})[0]},reducer=function reducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsVisible:return assign({},state,{isVisible:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsMenuOpen:return assign({},state,{isMenuOpen:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].addChapter:return assign({},state,{chapters:addChapter(state.chapters,action.payload)});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].removeChapter:return assign({},state,{chapters:removeChapter(state.chapters,action.payload)});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setChapters:return assign({},state,{chapters:Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatList"])(action.payload)});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setLastChapterActivated:return assign({},state,{lastChapterActivated:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentlyHoveredChapter:return assign({},state,{currentlyHoveredChapter:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setChapterTitleLeftOffset:return assign({},state,{chapterTitleLeftOffset:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setMenuWidth:return assign({},state,{menuWidth:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsVisibleOnLoad:return assign({},state,{isVisibleOnLoad:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setHasControlBeenClicked:return assign({},state,{hasControlBeenClicked:action.payload});default:return state;}};/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefix="CHAPTERS_";/* harmony default export */ __webpack_exports__["default"] = ({setIsVisible:"CHAPTERS_SET_IS_VISIBLE",setIsVisibleOnLoad:"CHAPTERS_SET_IS_VISIBLE_ON_LOAD",setIsMenuOpen:"CHAPTERS_SET_IS_MENU_OPEN",addChapter:"CHAPTERS_ADD_CHAPTER",removeChapter:"CHAPTERS_REMOVE_CHAPTER",setChapters:"CHAPTERS_SET_CHAPTERS",setLastChapterActivated:"CHAPTERS_SET_LAST_ACTIVE_CHAPTER",setCurrentlyHoveredChapter:"CHAPTERS_SET_CURRENTLY_HOVERED_CHAPTER",setChapterTitleLeftOffset:"CHAPTERS_SET_CHAPTER_TITLE_LEFT_OFFSET",setMenuWidth:"CHAPTERS_SET_MENU_WIDTH",setHasControlBeenClicked:"CHAPTERS_SET_HAS_CONTROL_BEEN_CLICKED"});

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureChapterId", function() { return ensureChapterId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapterConversionData", function() { return chapterConversionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatList", function() { return formatList; });
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function(){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function(){}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var castTimeToFloat=function castTimeToFloat(chapterObj){var time=chapterObj.time;return _objectSpread({},chapterObj,{time:parseFloat(time)})},ensureList=function ensureList(list){return list?list:[]},ensureIds=function ensureIds(list){return list.reduce(function(memo,item){var completeList=list.concat(memo);return memo.push(ensureChapterId(item,completeList)),memo},[])},castListToFloat=function(){},sortByTime=function sortByTime(list){return _toConsumableArray(list).sort(function(a,b){return a.time-b.time})},filterDeletedItems=function filterDeletedItems(list){return list.filter(function(chapter){return"true"!==chapter.deleted&&!0!==chapter.deleted})};var ensureChapterId=function ensureChapterId(chapter,list){return null==chapter.id?_objectSpread({},chapter,{id:nextId(list)}):chapter};var nextId=function nextId(list){var ids=list.map(function(obj){return obj.id}),cleanIds=ids.filter(function(id){return id!=null});return cleanIds.length?Math.max.apply(Math,_toConsumableArray(cleanIds))+1:0};var chapterConversionData=function(){};var formatList=function formatList(list){return sortByTime(castListToFloat(filterDeletedItems(ensureIds(ensureList(list)))))};

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(769);
var initialState={isVisible:!1,isMenuOpen:!1,playbackRate:{value:"1",isOpen:!1},videoQuality:{value:"default",isOpen:!1},selectedVideoQuality:{value:"default"},videoQualityOptions:{default:""},playbackRateOptions:{0.5:"0.5x",1:"1x",1.25:"1.25x",1.5:"1.5x",1.75:"1.75x",2:"2x"}},reducer=function reducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsMenuOpen:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{isMenuOpen:action.payload});break;case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsVisible:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{isVisible:action.payload});break;case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setVideoQualityOptions:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{videoQualityOptions:action.payload});break;case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsOpenFor:var _action$payload=action.payload,key=_action$payload.key,isOpen=_action$payload.isOpen,obj={};return obj[key]=object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state[key],{isOpen:isOpen}),object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,obj);break;case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setValueFor:var _action$payload2=action.payload,key=_action$payload2.key,value=_action$payload2.value,obj={};return obj[key]=object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state[key],{value:value}),object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,obj);break;default:return state;}};/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefix="SETTINGS__";/* harmony default export */ __webpack_exports__["default"] = ({setIsMenuOpen:"SETTINGS__SET_IS_MENU_OPEN",setIsVisible:"SETTINGS__SET_IS_VISIBLE",setIsOpenFor:"SETTINGS__SET_IS_OPEN_FOR",setValueFor:"SETTINGS__SET_VALUE_FOR",setVideoQualityOptions:"SETTINGS__SET_VIDEO_QUALITY"});

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(771);
var initialAssets={sd_mp4:{url:"",ext:""},hd_mp4:{url:"",ext:""},original:{url:"",ext:""}},initialState={isVisible:!1,isMenuOpen:!1,isEmbedCodeCopierOpen:!1,activeChannels:"googlePlus-email-facebook-linkedIn-twitter-download-embed",pageTitle:"pagetitle",pageUrl:"pageurl",overrideUrl:!1,videoName:"vidname",ignoreQueryParams:!0,includeLinkback:!1,downloadType:"original",tweetText:"tweetText",assets:initialAssets,conversionOpportunityKey:null,conversionOpportunity:{},currentTime:0},assetHashReducer=function assetHashReducer(state,type,payload){switch(type){case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setAsset:var obj={};return obj[payload.quality]=payload.assetHash,object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,obj);default:return state;}},reducer=function reducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setMultipleProperties:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,action.payload);case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setVisibility:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{isVisible:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsMenuOpen:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{isMenuOpen:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsEmbedCodeCopierOpen:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{isEmbedCodeCopierOpen:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setActiveChannels:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{activeChannels:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setPageTitle:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{pageTitle:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setPageUrl:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{pageUrl:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setVideoName:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{videoName:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIgnoreQueryParams:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{ignoreQueryParams:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setTweetText:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{tweetText:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setDownloadType:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{downloadType:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setAsset:var assetState=assetHashReducer(state.assets,action.type,action.payload);return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{assets:assetState});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setConversionOpportunity:if(!state.conversionOpportunityKey)return state;var conversionOpportunity=object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},{co_key:state.conversionOpportunityKey,co_type:"share",time:state.currentTime},action.payload);return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{conversionOpportunity:conversionOpportunity});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setConversionOpportunityKey:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{conversionOpportunityKey:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentTime:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{currentTime:action.payload});default:return state;}};/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefix="SHARE__";/* harmony default export */ __webpack_exports__["default"] = ({setMultipleProperties:"SHARE__SET_MULTIPLE_PROPERTIES",setVisibility:"SHARE__SET_VISIBILITY",setIsMenuOpen:"SHARE__SET_IS_MENU_OPEN",setIsEmbedCodeCopierOpen:"SHARE__SET_IS_EMBED_CODE_COPIER_OPEN",setActiveChannels:"SHARE__SET_ACTIVE_CHANNELS",setPageTitle:"SHARE__SET_PAGE_TITLE",setPageUrl:"SHARE__SET_PAGE_URL",setVideoName:"SHARE__SET_VIDEO_NAME",setIgnoreQueryParams:"SHARE__SET_IGNORE_QUERY_PARAMS",setTweetText:"SHARE__SET_TWEET_TEXT",setDownloadType:"SHARE__SET_DOWNLOAD_TYPE",setAsset:"SHARE__SET_ASSET",setConversionOpportunityKey:"SHARE__SET_CONVERSION_OPPORTUNITY_KEY",setConversionOpportunity:"SHARE__SET_CONVERSION_OPPORTUNITY",setCurrentTime:"SHARE__SET_CURRENT_TIME"});

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(773);
var initialState={isVisible:!1,message:"message"},reducer=function reducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setMessage:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{message:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setVisibility:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{isVisible:action.payload});default:return state;}};/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefix="STATUSBAR__";/* harmony default export */ __webpack_exports__["default"] = ({setMessage:"STATUSBAR__SET_MESSAGE",setVisibility:"STATUSBAR__SET_VISIBILITY"});

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accessors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(775);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(776);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(778);
/* harmony default export */ __webpack_exports__["default"] = ({accessors:_accessors__WEBPACK_IMPORTED_MODULE_0__,actions:_actions__WEBPACK_IMPORTED_MODULE_1__,reducer:_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]});

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidth", function() { return getWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsDragging", function() { return getIsDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaybarPositionPercentage", function() { return getPlaybarPositionPercentage; });
var stateBranch=function stateBranch(state){return state.playbar};var getWidth=function getWidth(state){return stateBranch(state).width};var getIsDragging=function getIsDragging(state){return stateBranch(state).isDragging};var getPlaybarPositionPercentage=function getPlaybarPositionPercentage(state){return stateBranch(state).playbarPositionPercentage};

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWidth", function() { return setWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsDragging", function() { return setIsDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPlaybarPositionPercentage", function() { return setPlaybarPositionPercentage; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
var setWidth=function setWidth(width){return{type:_types__WEBPACK_IMPORTED_MODULE_0__["default"].setWidth,payload:width}};var setIsDragging=function setIsDragging(isDragging){return{type:_types__WEBPACK_IMPORTED_MODULE_0__["default"].setIsDragging,payload:isDragging}};var setPlaybarPositionPercentage=function(){};

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefix="PLAYBAR__";/* harmony default export */ __webpack_exports__["default"] = ({setWidth:"PLAYBAR__SET_WIDTH",setIsDragging:"PLAYBAR__SET_IS_DRAGGING",setPlaybarPositionPercentage:"PLAYBAR__SET_PLAYBAR_POSITION_PERCENTAGE"});

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(777);
var initialState={width:0,isDragging:!1,playbarPositionPercentage:0};/* harmony default export */ __webpack_exports__["default"] = (function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setWidth:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{width:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsDragging:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{isDragging:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setPlaybarPositionPercentage:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{playbarPositionPercentage:action.payload});default:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state);}});

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(780);
var _W$lib=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("utilities/obj"),assign=_W$lib.assign;var initialState={uuid:"initial",embedHeight:0,embedWidth:0,embedAspectRatio:0,videoHeight:0,videoWidth:0,videoLength:0,videoName:"",videoProgress:0,isPlayInitiated:!1,hashedId:"gtgmjh6xbc",host:"fast.wistia.dev",isEmbeddedInCustomize:!1,isKeyboardFocus:!1,isUIReady:!1,playerColor:"#000000",playerLanguage:"en-US",customerLogoImageUrl:"",customerLogoTargetUrl:"",hasBeenClicked:!1,controlScaling:"auto",embedOptions:{hasBranding:!1,isChromeless:!1,settingsControl:!1,playbackRateControl:!1,qualityControl:!1,bigPlayButtonControl:!1,autoPlay:!1,hasBigPlayButtonTime:!1,endVideoBehavior:null,showCustomerLogo:!1},mediaData:{hasBranding:!1,enableCustomerLogo:!1}};var reducer=function reducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsKeyboardFocus:return assign({},state,{isKeyboardFocus:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setEmbedOptionsFor:var embedOptionsState=assign({},state.embedOptions,action.payload);return assign({},state,{embedOptions:embedOptionsState});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setMediaDataFor:var mediaDataState=assign({},state.mediaData,action.payload);return assign({},state,{mediaData:mediaDataState});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setHashedId:return assign({},state,{hashedId:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setHost:return assign({},state,{host:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setEmbedHeight:return assign({},state,{embedHeight:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setEmbedWidth:return assign({},state,{embedWidth:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setEmbedAspectRatio:return assign({},state,{embedAspectRatio:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setVideoHeight:return assign({},state,{videoHeight:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setVideoWidth:return assign({},state,{videoWidth:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsUIReady:return assign({},state,{isUIReady:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setVideoLength:return assign({},state,{videoLength:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setVideoName:return assign({},state,{videoName:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setVideoProgress:return assign({},state,{videoProgress:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsPlayInitiated:return assign({},state,{isPlayInitiated:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setPlayerColor:return assign({},state,{playerColor:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setPlayerLanguage:return assign({},state,{playerLanguage:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setCustomerLogoImageUrl:return assign({},state,{customerLogoImageUrl:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setCustomerLogoTargetUrl:return assign({},state,{customerLogoTargetUrl:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setUUID:return assign({},state,{uuid:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsEmbeddedInCustomize:return assign({},state,{isEmbeddedInCustomize:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setHasBeenClicked:return assign({},state,{hasBeenClicked:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setIsInFullscreen:return assign({},state,{isInFullscreen:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setAreControlsVisible:return assign({},state,{areControlsVisible:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setControlScaling:return assign({},state,{controlScaling:action.payload});default:return state;}};/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefix="VULCAN__";/* harmony default export */ __webpack_exports__["default"] = ({setIsKeyboardFocus:"VULCAN__SET_KEYBOARD_FOCUS",setEmbedOptionsFor:"VULCAN__SET_EMBED_OPTION_FOR",setMediaDataFor:"VULCAN__SET_MEDIA_DATA_FOR",setHashedId:"VULCAN__SET_HASHED_ID",setHost:"VULCAN__SET_HOST",setIsEmbeddedInCustomize:"VULCAN__SET_IS_EMBEDDED_IN_CUSTOMIZE",setEmbedHeight:"VULCAN__SET_EMBED_HEIGHT",setEmbedWidth:"VULCAN__SET_EMBED_WIDTH",setEmbedAspectRatio:"VULCAN__SET_EMBED_ASPECT_RATIO",setVideoHeight:"VULCAN__SET_VIDEO_HEIGHT",setVideoWidth:"VULCAN__SET_VIDEO_WIDTH",setVideoName:"VULCAN__SET_VIDEO_NAME",setIsUIReady:"VULCAN__SET_IS_UI_READY",setVideoLength:"VULCAN__SET_VIDEO_LENGTH",setVideoProgress:"VULCAN__SET_VIDEO_PROGRESS",setIsPlayInitiated:"VULCAN__SET_IS_PLAY_INITIATED",setPlayerColor:"VULCAN__SET_PLAYER_COLOR",setPlayerLanguage:"VULCAN__SET_PLAYER_LANGUAGE",setCustomerLogoImageUrl:"VULCAN__SET_CUSTOMER_LOGO_IMAGE_URL",setCustomerLogoTargetUrl:"VULCAN__SET_CUSTOMER_LOGO_TARGET_URL",setUUID:"VULCAN__SET_UUID",setHasBeenClicked:"VULCAN__SET_HAS_BEEN_CLICKED",setIsInFullscreen:"VULCAN__SET_IS_IN_FULLSCREEN",setAreControlsVisible:"VULCAN__SET_ARE_CONTROLS_VISIBLE",setControlScaling:"VULCAN__SET_CONTROL_SCALING"});

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(782);
var initialState={isVisible:!1,challenge:"",password:"",tempPassword:"",errorMessage:"",isErrorShowing:!1,passwordSubmitted:""},reducer=function reducer(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setVisibility:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{isVisible:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setChallenge:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{challenge:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setPassword:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{password:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].setTempPassword:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{tempPassword:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].showError:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{isErrorShowing:!0,errorMessage:action.payload});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].removeError:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{isErrorShowing:!1,errorMessage:""});case _types__WEBPACK_IMPORTED_MODULE_1__["default"].passwordSubmitted:return object_assign__WEBPACK_IMPORTED_MODULE_0___default()({},state,{passwordSubmitted:action.payload});default:return state;}};/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefix="PASSWORD_PROTECT__";/* harmony default export */ __webpack_exports__["default"] = ({setVisibility:"PASSWORD_PROTECT__SET_VISIBILITY",setChallenge:"PASSWORD_PROTECT__SET_CHALLENGE",setPassword:"PASSWORD_PROTECT__SET_PASSWORD",setTempPassword:"PASSWORD_PROTECT__SET_TEMP_PASSWORD",removeError:"PASSWORD_PROTECT__REMOVE_ERROR",showError:"PASSWORD_PROTECT__SHOW_ERROR",passwordSubmitted:"PASSWORD_PROTECT__PASSWORD_SUBMITTED"});

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=!0;function createThunkMiddleware(extraArgument){return function(_ref){var dispatch=_ref.dispatch,getState=_ref.getState;return function(next){return function(action){return"function"==typeof action?action(dispatch,getState,extraArgument):next(action)}}}}var thunk=createThunkMiddleware();thunk.withExtraArgument=createThunkMiddleware,exports["default"]=thunk;

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function(){}!function(e,t){"object"==( false?undefined:_typeof(exports))&&"undefined"!=typeof module?t(exports): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(e){"use strict";function(){}function(){}function(){}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function(){}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=0>t?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"===t?e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object":t}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&0!=e-t)r(new n(g,e,t));else if(!("object"===y&&null!==e&&null!==t))e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)));else if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);0<=i?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(){})}--p.length}}function(){}function(){}function(){}function(){}function(){}function h(e,t,r){if(e&&t){var n=function n(_n){r&&!r(e,t,_n)||d(e,t,_n)};l(e,t,n)}}function(){}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;return"E"===t?[r.join("."),n,"\u2192",o]:"N"===t?[r.join("."),o]:"D"===t?[r.join(".")]:"A"===t?[r.join(".")+"["+i+"]",a]:[]}function(){}function(){}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+(e.type+"")),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function(){}function S(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function E(e,t){return Array(t+1).join(e)},A=function(){},D=function(){},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e)},P=function(){},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"==typeof window?{}:window,j=k.DeepDiff,j&&C.push(function(){}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function value(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function value(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function stateTransformer(e){return e},actionTransformer:function actionTransformer(e){return e},errorTransformer:function errorTransformer(e){return e},colors:{title:function title(){return"inherit"},prevState:function prevState(){return"#9E9E9E"},action:function action(){return"#03A9F4"},nextState:function nextState(){return"#4CAF50"},error:function error(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function T(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(141)))

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusHelper", function() { return FocusHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classListToString", function() { return classListToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionsToStore", function() { return bindActionsToStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindAccessorsToStore", function() { return bindAccessorsToStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftValueToKeepMenuInsideVideo", function() { return leftValueToKeepMenuInsideVideo; });
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(703);
/* harmony import */ var player_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(756);
/* harmony import */ var player_lib_elem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _bindListenersToStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(796);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}var _W$lib=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("utilities/obj"),assign=_W$lib.assign,filter=_W$lib.filter,isObject=_W$lib.isObject,isParentOf=function isParentOf(parentNode,childNode){return!!parentNode&&("contains"in parentNode?parentNode.contains(childNode):parentNode.compareDocumentPosition(childNode)%16)},defaultOptions={parentSelector:function parentSelector(){return document.body},onFocus:function onFocus(){},onBlur:function onBlur(){}};var FocusHelper=/*#__PURE__*/function(){function FocusHelper(options){_classCallCheck(this,FocusHelper),this.options=assign({},defaultOptions,options),this._hadActiveChild=!1,document.addEventListener("focus",this._onDocumentFocusBlur.bind(this),!0)}return _createClass(FocusHelper,[{key:"destroy",value:function destroy(){document.removeEventListener("focus",this._onDocumentFocusBlur.bind(this),!0)}},{key:"_fireCallbacks",value:function _fireCallbacks(){var parent=this.options.parentEl(),hasActiveChild=isParentOf(parent,document.activeElement);hasActiveChild==this._hadActiveChild||(hasActiveChild?this.options.onFocus():this.options.onBlur(),this._hadActiveChild=hasActiveChild)}},{key:"_onDocumentFocusBlur",value:function(){}}]),FocusHelper}();var classListToString=function classListToString(classList){return filter(classList,function(classname){return""!=classname}).join(" ")};/**
 * Turns a group of action objects into a group
 * of action functions that are bound to a particular
 * store.
 *
 * @param {Number} instanceId
 * @param {Object} actionsObject
 * @return {Object} boundActionObject
 *
 */var bindActionsToStore=function bindActionsToStore(instanceId){var actionsObject=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},store=getStoreFromOptions(instanceId);return Object.keys(actionsObject).reduce(function(memo,actionNamespace){return memo[actionNamespace]=Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(actionsObject[actionNamespace],store.dispatch),memo},{})};var getStoreFromOptions=function getStoreFromOptions(instanceId){return isObject(instanceId)?instanceId:Object(player_store__WEBPACK_IMPORTED_MODULE_2__["getStoreForPlayerInstance"])(instanceId)},wrapAccessors=function wrapAccessors(accessors,store){return Object.keys(accessors).reduce(function(memo,accessor){return memo[accessor]=function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return accessors[accessor].apply(accessors,[store.getState()].concat(args))},memo},{})};var bindAccessorsToStore=function bindAccessorsToStore(instanceId){var accessorsObject=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},store=getStoreFromOptions(instanceId);return Object.keys(accessorsObject).reduce(function(){},{})};var leftValueToKeepMenuInsideVideo=function leftValueToKeepMenuInsideVideo(vidWidth,menuElem){var menuWidth=2<arguments.length&&arguments[2]!==void 0?arguments[2]:120;if(!menuElem)return 0;var chrome=Object(player_lib_elem__WEBPACK_IMPORTED_MODULE_3__["elemAncestorWithClass"])(menuElem,"w-chrome");if(!chrome)return 0;var vidLeft=Object(player_lib_elem__WEBPACK_IMPORTED_MODULE_3__["elemOffset"])(chrome).left,currentLeftStyle=parseInt(menuElem.style.left)||0,menuLeft=Object(player_lib_elem__WEBPACK_IMPORTED_MODULE_3__["elemOffset"])(menuElem).left-currentLeftStyle,rightMenuEdge=menuLeft+menuWidth,rightVideoEdge=vidLeft+vidWidth,leftValue=Math.min(rightVideoEdge-rightMenuEdge,0);return leftValue};

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreChangeAdapter", function() { return StoreChangeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindListenersToStore; });
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var player_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(756);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}var _W$lib=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("utilities/obj"),isObject=_W$lib.isObject;var StoreChangeAdapter=/*#__PURE__*/function(){function StoreChangeAdapter(storeId,listeners){_classCallCheck(this,StoreChangeAdapter),this.store=isObject(storeId)?storeId:Object(player_store__WEBPACK_IMPORTED_MODULE_1__["getStoreForPlayerInstance"])(storeId),this.previousState=this.store.getState(),this.listeners=listeners,this.unsubscribe=this.store.subscribe(this.onStoreChange.bind(this))}return _createClass(StoreChangeAdapter,[{key:"onStoreChange",value:function onStoreChange(){var newState=this.store.getState();this.fireCallbacksIfChanged(this.listeners,newState),this.recordPreviousState()}},{key:"fireCallbacksIfChanged",value:function fireCallbacksIfChanged(listeners,newState){var _this=this;Object.keys(listeners).forEach(function(key){var accessor=listeners[key].accessor;_this.propHasChanged(accessor,newState)&&listeners[key].callback(accessor(newState))})}},{key:"recordPreviousState",value:function(){}},{key:"propHasChanged",value:function propHasChanged(accessor,newState){return accessor(this.previousState)!=accessor(newState)}},{key:"destroy",value:function destroy(){this.unsubscribe(),this.listeners=null,this.previousState=null,this.store=null}}]),StoreChangeAdapter}();function bindListenersToStore(storeId,listeners){var adapter=new StoreChangeAdapter(storeId,listeners);return function(){adapter.destroy()}}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
var seqId=function seqId(){var prefix=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"wistia_",suffix=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",currentVal=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"]._sequenceVal||1,result=""+prefix+currentVal+suffix;return wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"]._sequenceVal=currentVal+1,result};/* harmony default export */ __webpack_exports__["default"] = (seqId);

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var player_lib_fit_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
var stateBranch=function stateBranch(state){return state.vulcan};/* harmony default export */ __webpack_exports__["default"] = ({getBranch:function getBranch(state){return stateBranch(state)},getIsKeyboardFocus:function getIsKeyboardFocus(state){return stateBranch(state).isKeyboardFocus},getHasBranding:function getHasBranding(state){var branch=stateBranch(state),embedOptions=branch.embedOptions,mediaData=branch.mediaData;return embedOptions.hasBranding||mediaData.hasBranding},getHasSettingsControl:function getHasSettingsControl(state){return stateBranch(state).embedOptions.settingsControl},getHasQualityControl:function getHasQualityControl(state){return stateBranch(state).embedOptions.qualityControl},getHasPlaybackRateControl:function(){},getHasBigPlayButton:function getHasBigPlayButton(state){var branch=stateBranch(state),embedOptions=branch.embedOptions;return embedOptions.bigPlayButtonControl&&!embedOptions.isAutoPlay&&!embedOptions.isChromeless&&branch.isUIReady&&!branch.isPlayInitiated},getHasBeenClicked:function getHasBeenClicked(state){return stateBranch(state).hasBeenClicked},getHashedId:function getHashedId(state){return stateBranch(state).hashedId},getHost:function getHost(state){return stateBranch(state).host},getEmbedHeight:function getEmbedHeight(state){return stateBranch(state).embedHeight},getEmbedWidth:function getEmbedWidth(state){return stateBranch(state).embedWidth},getEmbedAspectRatio:function getEmbedAspectRatio(state){return stateBranch(state).embedAspectRatio},getVideoHeight:function getVideoHeight(state){return stateBranch(state).videoHeight},getVideoWidth:function getVideoWidth(state){return stateBranch(state).videoWidth},getResponsiveClassNames:function getResponsiveClassNames(state){var multiplierOptions=stateBranch(state),videoWidth=multiplierOptions.videoWidth,multiplier=Object(player_lib_fit_control__WEBPACK_IMPORTED_MODULE_0__["controlMultiplier"])(multiplierOptions),effectiveWidth=videoWidth/multiplier,responsiveClass="bp-325";return 450<=effectiveWidth&&(responsiveClass+=" bp-450"),640<=effectiveWidth&&(responsiveClass+=" bp-640"),750<=effectiveWidth&&(responsiveClass+=" bp-750"),responsiveClass},getIsUIReady:function getIsUIReady(state){return stateBranch(state).isUIReady},getVideoLength:function getVideoLength(state){return stateBranch(state).videoLength},getVideoProgress:function getVideoProgress(state){return stateBranch(state).videoProgress},getIsPlayInitiated:function getIsPlayInitiated(state){return stateBranch(state).isPlayInitiated},getPlayerColor:function getPlayerColor(state){return stateBranch(state).playerColor},getPlayerLanguage:function getPlayerLanguage(state){return stateBranch(state).playerLanguage},getVideoName:function getVideoName(state){return stateBranch(state).videoName},getCustomerLogoImageUrl:function getCustomerLogoImageUrl(state){return stateBranch(state).customerLogoImageUrl},getCustomerLogoTargetUrl:function getCustomerLogoTargetUrl(state){return stateBranch(state).customerLogoTargetUrl},getShowCustomerLogo:function getShowCustomerLogo(state){var _stateBranch=stateBranch(state),mediaData=_stateBranch.mediaData,embedOptions=_stateBranch.embedOptions;return mediaData.enableCustomerLogo&&embedOptions.showCustomerLogo},getEmbedOption:function getEmbedOption(option,state){return stateBranch(state).embedOptions[option]},getUUID:function getUUID(state){return stateBranch(state).uuid},getIsEmbeddedInCustomize:function getIsEmbeddedInCustomize(state){return stateBranch(state).isEmbeddedInCustomize},getIsInFullscreen:function(){},getAreControlsVisible:function getAreControlsVisible(state){return stateBranch(state).areControlsVisible},getControlScaling:function getControlScaling(state){return stateBranch(state).controlScaling}});

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBranch", function() { return getBranch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsVisible", function() { return getIsVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsVisibleOnLoad", function() { return getIsVisibleOnLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsMenuOpen", function() { return getIsMenuOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChapters", function() { return getChapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastChapterActivated", function() { return getLastChapterActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChapterById", function() { return getChapterById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentlyHoveredChapterId", function() { return getCurrentlyHoveredChapterId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentlyHoveredChapter", function() { return getCurrentlyHoveredChapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChapterTitleLeftOffset", function() { return getChapterTitleLeftOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuWidth", function() { return getMenuWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHasControlBeenClicked", function() { return getHasControlBeenClicked; });
var stateBranch=function stateBranch(state){return state.chapters};var getBranch=function getBranch(state){return stateBranch(state)};var getIsVisible=function getIsVisible(state){return stateBranch(state).isVisible};var getIsVisibleOnLoad=function getIsVisibleOnLoad(state){return stateBranch(state).isVisibleOnLoad};var getIsMenuOpen=function getIsMenuOpen(state){return stateBranch(state).isMenuOpen};var getChapters=function getChapters(state){return stateBranch(state).chapters};var getLastChapterActivated=function getLastChapterActivated(state){return stateBranch(state).lastChapterActivated};var getChapterById=function getChapterById(state,id){var chapters=stateBranch(state).chapters,match=chapters.filter(function(chapter){return chapter.id==id})[0];return match};var getCurrentlyHoveredChapterId=function getCurrentlyHoveredChapterId(state){return stateBranch(state).currentlyHoveredChapter};var getCurrentlyHoveredChapter=function getCurrentlyHoveredChapter(state){var chapterId=stateBranch(state).currentlyHoveredChapter;return getChapterById(state,chapterId)};var getChapterTitleLeftOffset=function getChapterTitleLeftOffset(state){return stateBranch(state).chapterTitleLeftOffset};var getMenuWidth=function getMenuWidth(state){return stateBranch(state).menuWidth};var getHasControlBeenClicked=function getHasControlBeenClicked(state){return stateBranch(state).hasControlBeenClicked};

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

var bind=function(){};(function(W){var Link,bindAccessorsToStore,bindListenersToStore,eV1Host,eV1Protocol,eV1Url,getIsMenuOpen,getMenuWidth,playerAccessors,ref,ref1,ref2;return bindAccessorsToStore=__webpack_require__(795).bindAccessorsToStore,bindListenersToStore=__webpack_require__(796)["default"],playerAccessors=__webpack_require__(800)["default"],ref=__webpack_require__(834),getMenuWidth=ref.getMenuWidth,getIsMenuOpen=ref.getIsMenuOpen,ref1=W.lib("player/lib/hosts"),eV1Protocol=ref1.eV1Protocol,eV1Host=ref1.eV1Host,eV1Url=ref1.eV1Url,null==(null==(ref2=W.Plugin)?void 0:ref2.MidrollLinkV1)&&(Link=function(){function Link(arg){this.time=arg.time,this.duration=arg.duration,this.text=arg.text,this.url=arg.url,this.conversionOpportunityKey=arg.conversionOpportunityKey,this.userData=arg.userData,"string"==typeof this.url&&""!==this.url||(this.url=null),this.text=this.text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),this.conversionOpportunityKey||(this.conversionOpportunityKey=null),"number"!=typeof this.time&&(this.time=parseFloat(this.time)),"number"!=typeof this.duration&&(this.duration=parseFloat(this.duration)),this.throwUnlessValid()}return Link.prototype.conversionOpportunityType="link",Link.prototype.throwUnlessValid=function(){var assert;return assert=function assert(cond,message){if(!cond)throw new Error(message)},assert("number"==typeof this.time&&this.time===this.time,"time must be a number"),assert("number"==typeof this.duration&&this.duration===this.duration,"duration must be a number"),assert("string"==typeof this.text,"text must be a string"),assert("string"==typeof this.url||null===this.url,"url must be a string, or null"),assert("string"==typeof this.conversionOpportunityKey||null===this.conversionOpportunityKey,"conversionOpportunityKey must be a string, or null")},Link}(),W.Plugin.MidrollLinkV1=function(){function MidrollLinkV1(video1,pluginOptions){var defaults;this.video=video1,this.refreshLinkCss=bind(this.refreshLinkCss,this),this.onConversion=bind(this.onConversion,this),this.forceSync=bind(this.forceSync,this),this.sync=bind(this.sync,this),this.remove=bind(this.remove,this),this.pluginName="midrollLink-v1",defaults={uuid:W.seqId("wistia_","_midrollLink"),links:[]},this.params=W.extend(defaults,pluginOptions),this.setLinks(pluginOptions.links||[]),this.accessors=bindAccessorsToStore(this.video._impl.uuid,{player:playerAccessors,chapter:{menuWidth:getMenuWidth,isMenuOpen:getIsMenuOpen}}),this.listeners=bindListenersToStore(this.video._impl.uuid,{getIsMenuOpen:{accessor:getIsMenuOpen,callback:this.refreshLinkCss}}),this.video.hasData(function(_this){return function(){return _this.video.data.media.branding=!1}}(this)),this.video.ready(function(_this){return function(){return _this.video.trigger("midroll-link-v1-remove"),_this.refreshFontFaceCss(),_this.injectHtmlIfNecessary(),_this.injectCssIfNecessary(),_this.registerForEvents(),_this.sync()}}(this))}return MidrollLinkV1.prototype.publicApi=function(){return{Link:Link,getLinks:function(_this){return function(){return _this.getLinks()}}(this),setLinks:function(_this){return function(){return _this.setLinks.apply(_this,arguments),_this.forceSync(),_this}}(this),addLink:function(_this){return function(){return _this.addLink.apply(_this,arguments),_this.forceSync(),_this}}(this),removeLinkWhere:function(_this){return function(){var ret;return ret=_this.removeLinkWhere.apply(_this,arguments),_this.forceSync(),ret}}(this),replaceLinkWhere:function(_this){return function(){var ret;return ret=_this.replaceLinkWhere.apply(_this,arguments),_this.forceSync(),ret}}(this),showLink:function(_this){return function(){return _this.showLink.apply(_this,arguments),_this}}(this),hideLink:function(_this){return function(){}}(this),sync:function(_this){return function(){return _this.forceSync(),_this}}(this),remove:function(_this){return function(){return _this.remove()}}(this)}},MidrollLinkV1.prototype.getLinks=function(){var ref3;return null==(ref3=this.params.links)?void 0:ref3.slice()},MidrollLinkV1.prototype.setLinks=function(newLinks){var j,len,linkSpec,ref3,results;for(this.params.links=[],ref3=newLinks||[],results=[],(j=0,len=ref3.length);j<len;j++)linkSpec=ref3[j],results.push(this.addLink(linkSpec));return results},MidrollLinkV1.prototype.addLink=function(){},MidrollLinkV1.prototype.removeLinkWhere=function(pred){var i,l,ref3;for(i in ref3=this.params.links,ref3)if(l=ref3[i],pred(l))return this.params.links.splice(i,1);return null},MidrollLinkV1.prototype.replaceLinkWhere=function(pred,newLinkSpec){var i,l,newLink,ref3;for(i in newLink=this.makeLink(newLinkSpec),ref3=this.params.links,ref3)if(l=ref3[i],pred(l))return this.params.links.splice(i,1,newLink);return null},MidrollLinkV1.prototype.remove=function(){return this.unregisterForEvents(),null!=this.rootElem&&(W.elem.remove(this.rootElem),this.rootElem=null,this.linkElem=null),null!=this.styleElem&&(W.elem.remove(this.styleElem),this.styleElem=null),this.params.links=null,W.Plugin.Base.prototype.remove.call(this,{dontFit:!0})},MidrollLinkV1.prototype.inManualMode=function(){var ref3;return 0<(null==(ref3=this.params.links)||!ref3.length)},MidrollLinkV1.prototype.sync=function(){},MidrollLinkV1.prototype.forceSync=function(){var link;if(link=this.getLinkAtTime(this.video.time()),link===this.currentShownLink);else return null==link?this.hideLink():this.showLink(link)},MidrollLinkV1.prototype.ANCHOR_LINK_REGEXP=/^#/,MidrollLinkV1.prototype.showLink=function(link){if(this.injectHtmlIfNecessary(),null!=this.rootElem&&null!=this.linkElem&&null!=this.textElem)return(this.refreshLinkCss(),!(0>=this.video.time()||"ended"===this.video.state()))?("string"==typeof this.textElem.innerText?this.textElem.innerText=W.util.unescapeHtml(link.text):this.textElem.textContent=W.util.unescapeHtml(W.util.removeScriptTags(link.text)),"string"==typeof link.url?(this.linkElem.href=this.sanitizeUrl(link.url),this.linkElem.className="has-url",this.linkElem.onclick=this.onConversion,this.ANCHOR_LINK_REGEXP.test(link.url)||"tel"===link.url.substring(0,3)?this.linkElem.removeAttribute("target"):this.linkElem.target="_blank",W.EmbedLink.setupAll(this.rootElem)):(this.linkElem.removeAttribute("href"),this.linkElem.removeAttribute("target"),this.linkElem.className="",this.linkElem.onclick=null,W.EmbedLink.destroyAll(this.rootElem)),this.rootElem.className="",this.currentShownLink=link,this.video._tracker.logConversionOpportunity(this._conversionOpportunityData())):void 0},MidrollLinkV1.prototype.hideLink=function(){return null!=this.rootElem&&(this.rootElem.className="hidden"),this.currentShownLink=null},MidrollLinkV1.prototype.sanitizeUrl=function(url){var j,len,string,whitelist;for(url=W.util.unescapeHtml(url),whitelist=["http","mailto","ftp","/","#","fusion360","tel"],(j=0,len=whitelist.length);j<len;j++)if(string=whitelist[j],url.substring(0,string.length)===string)return url;return"http://"+url},MidrollLinkV1.prototype.getLinkAtTime=function(currentTime){var endTime,j,len,link,ref3,startTime;if(currentTime!==currentTime)return null;if(0>=currentTime)return null;for(ref3=this.params.links,j=0,len=ref3.length;j<len;j++)if(link=ref3[j],startTime=link.time,endTime=link.time+link.duration,currentTime>=startTime&&currentTime<endTime)return link;return null},MidrollLinkV1.prototype.makeLink=function(newLinkSpec){var e,newLink;try{newLink=new Link(newLinkSpec)}catch(error){throw e=error,{message:"Invalid link specification: "+e.message,linkSpec:newLinkSpec}}return newLink},MidrollLinkV1.prototype.registerForEvents=function(){return this.unregisterForEvents(),this.video.bind("timechange",this.sync),this.video.bind("end",this.sync),this.video.bind("midroll-link-v1-remove",this.remove)},MidrollLinkV1.prototype.unregisterForEvents=function(){return this.video.unbind("timechange",this.sync),this.video.unbind("end",this.sync),this.video.unbind("midroll-link-v1-remove",this.remove)},MidrollLinkV1.prototype.onConversion=function(){var conversion;return conversion=W.obj.merge({converted:!0,link:this.currentShownLink.url},this._conversionOpportunityData()),this.video.trigger("conversion-link",conversion),this.video._tracker.logConversionOpportunity(conversion),this.video.pause()},MidrollLinkV1.prototype._conversionOpportunityData=function(){return{co_key:this.currentShownLink.conversionOpportunityKey,co_type:this.currentShownLink.conversionOpportunityType,time:this.video.time()}},MidrollLinkV1.prototype.injectHtmlIfNecessary=function(){}