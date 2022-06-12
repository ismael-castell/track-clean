/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utilities_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
null==utilities_root__WEBPACK_IMPORTED_MODULE_0__.default.Wistia&&(utilities_root__WEBPACK_IMPORTED_MODULE_0__.default.Wistia={});var W=utilities_root__WEBPACK_IMPORTED_MODULE_0__.default.Wistia;null==W._initializers&&(W._initializers={}),null==W._destructors&&(W._destructors={}),null==W.mixin&&(W.mixin=function(klass,obj){for(var k in obj)obj.hasOwnProperty(k)&&(klass[k]=obj[k])});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utilities_root__WEBPACK_IMPORTED_MODULE_0__.default.Wistia);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}/* global globalThis */var root;try{root=self,root.self!==root&&_typeof(root.self)!==void 0&&"undefined"!=typeof window&&(root=window)}catch(err){root="undefined"==typeof globalThis?window:globalThis}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function(){}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	()();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	()();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	()();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function(){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function(){}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function(){}function(){}function(){}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function(){}var _W$lib=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib("preact"),h=_W$lib.h,render=_W$lib.render,_W$lib2=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib("utilities/seqid"),seqId=_W$lib2.seqId,PLUGIN_NAME="midrollLink-v2",MidrollLinkPlugin=/*#__PURE__*/function(_W$Plugin$Base){function MidrollLinkPlugin(video,options){var _this;return _classCallCheck(this,MidrollLinkPlugin),_this=_super.call(this,video,options),_this.pluginName=PLUGIN_NAME,_this.video=video,_this.options=options,_this.unbinds=[],_this._conversionOpportunityType="link",_this.annotations={},_this.updateFromOptions(_this.options),_this.addBindingsToAnnotation(),_this.legacyName=null,_this.unbinds.push(_this.video.on("afterrebuild",function(){for(var annotationName in _this.annotations){var currentAnnotation=_this.annotations[annotationName];currentAnnotation.visible=!1}})),_this}//
// legacy midrollLink-v1 methods that we have docs and some people use
//
_inherits(MidrollLinkPlugin,_W$Plugin$Base);var _super=_createSuper(MidrollLinkPlugin);return _createClass(MidrollLinkPlugin,[{key:"showLinkLegacy",value:function showLinkLegacy(options){if(options){var name=seqId("annotation_");options.name||(options.name=name),this.video.defineOverlay(name,_objectSpread(_objectSpread({},options),{},{type:"annotation"})),this.video.requestOverlay(name),this.legacyName=name}}},{key:"hideLinkLegacy",value:function hideLinkLegacy(){this.legacyName&&(this.video.cancelOverlay(this.legacyName),this.video.undefineOverlay(this.legacyName))}},{key:"addLinkLegacy",value:function addLinkLegacy(options){this.updateFromOptions({links:[options]})}},{key:"getLinksLegacy",value:function getLinksLegacy(){var links=[];for(var annotationName in this.annotations){var annotation=this.annotations[annotationName];links.push(annotation)}return links}},{key:"setLinksLegacy",value:function setLinksLegacy(arrOfAnnotations){var _this2=this;arrOfAnnotations.forEach(function(annotation){annotation.name&&_this2.annotations[annotation]||_this2.addLinkLegacy(annotation)})}//
// Plugin Methods from midrollLink-v1 used in _link.coffee
//
// fully remove an annotation if it passes the 'func' test
},{key:"removeLinkWhere",value:function removeLinkWhere(func){for(var annotationName in this.annotations)if(func(this.annotations[annotationName])){var annotation=this.annotations[annotationName];return this.hideAnnotation(annotationName),this.removeAnnotation(annotationName),annotation}}// we go through each annotation and if it passes the given function "func"
// we upadate the annotation
},{key:"replaceLinkWhere",value:function replaceLinkWhere(func,newAnnotation){for(var annotationName in this.annotations){var currentAnnotation=this.annotations[annotationName];if(func(this.annotations[annotationName]))return this.annotations[annotationName]=_objectSpread(_objectSpread({},newAnnotation),{},{name:annotationName,visible:currentAnnotation.visible}),this.updateAnnotationControl(annotationName),!0}}// create a new annotation
// optionally seek to the time of the newAnnotation
},{key:"addLink",value:function addLink(newAnnotation,opts){var name=newAnnotation.name;this.annotations[name]=newAnnotation,this.defineAnnotationOverlay(name),opts.shouldSeekToTime&&this.video.time(newAnnotation.time)}//
// end of plugin methods used in _link
//
// delete an annotationOverlay entirely
},{key:"removeAnnotation",value:function removeAnnotation(annotationName){delete this.annotations[annotationName],this.video.cancelOverlay(annotationName),this.video.undefineOverlay(annotationName)}},{key:"removeAllAnnotations",value:function(){}},{key:"updateAnnotationControl",value:function updateAnnotationControl(name){var annotation=this.annotations[name];this.video.controls.annotationOverlay&&this.video.controls.annotationOverlay.updateFromOptions(annotation)}},{key:"defineAnnotationOverlay",value:function defineAnnotationOverlay(name){var annotation=this.annotations[name];this.video.defineOverlay(name,_objectSpread(_objectSpread({},annotation),{},{type:"annotation"}))}},{key:"addBindingsToAnnotation",value:function addBindingsToAnnotation(){var _this3=this;this.unbinds.push(// make sure that midrollLink-v2 is up and ready before setting the legacy and bindiings
this.video.on("plugininitialized",function(pluginName){"midrollLink-v2"!==pluginName||(_this3.video.addPlugin("midrollLink-v1",{legacy:!0}),_this3.unbinds.push(_this3.video.on("timechange",function(){_this3.showOrHideAnnotationAtTime()})))}))}},{key:"showOrHideAnnotationAtTime",value:function showOrHideAnnotationAtTime(){var currentTime=this.video.time();if(!(isNaN(currentTime)||0>currentTime))for(var annotationName in this.annotations){var currentAnnotation=this.annotations[annotationName],duration=currentAnnotation.duration,time=currentAnnotation.time,endTime=time+duration;currentTime>=time&&currentTime<endTime?!0!==currentAnnotation.visible&&this.showAnnotation(annotationName):!0===currentAnnotation.visible&&this.hideAnnotation(annotationName)}}// we use a set of timeouts here to make sure that if one annotations leaves and another enters as the same time
// we have smooth transitions between the two
},{key:"showAnnotation",value:function showAnnotation(annotationName){var _this4=this;// if two annotations are right next to each other, we might actually call requestOverlay before we called cancelOverlay
// so we wait about 10ms just to ensure we've had the chance to properly set _animatingAnnotationOut if something
// is animating out
setTimeout(function(){_this4._animatingAnnotationOut?setTimeout(function(){!0!==_this4.annotations[annotationName].visible&&(_this4.annotations[annotationName].visible=!0,_this4.logConversionOpportunity(annotationName),_this4.video.requestOverlay(annotationName))},290):_this4.annotations[annotationName]&&!0!==_this4.annotations[annotationName].visible&&(_this4.annotations[annotationName].visible=!0,_this4.logConversionOpportunity(annotationName),_this4.video.requestOverlay(annotationName))},10)}},{key:"hideAnnotation",value:function hideAnnotation(annotationName){var _this5=this;this.annotations[annotationName].visible=!1,this._animatingAnnotationOut=!0,this.video.cancelOverlay(annotationName),setTimeout(function(){_this5._animatingAnnotationOut=!1},250)}// log impression of the link -- _not_ that it was clicked
},{key:"logConversionOpportunity",value:function logConversionOpportunity(annotationName){var currentAnnotation=this.annotations[annotationName];this.video._tracker.logConversionOpportunity({co_key:currentAnnotation.conversionOpportunityKey||null,co_type:this._conversionOpportunityType,time:this.video.time()})}},{key:"updateFromOptions",value:function updateFromOptions(options){var _this6=this;options.links&&options.links.forEach(function(link){link.name||(link.name=seqId("annotation_")),_this6.annotations[link.name]=_this6.annotations[link.name]?_objectSpread(_objectSpread({},_this6.annotations[link.name]),link):link,_this6.defineAnnotationOverlay(link.name)})}},{key:"customizePreview",value:function customizePreview(changeSet){if(changeSet.currentValue("ephemeral[ui][annotations][isOpen]")){var midRollChanged=changeSet.anyChanged(["plugin[midrollLink-v2]","plugin[midrollLink-v1]","ephemeral[ui][annotations]"]);if(midRollChanged){var midRoll=changeSet.currentValue("plugin[midrollLink-v2]")||changeSet.currentValue("plugin[midrollLink-v1]")||{on:!1,links:[]};if(!1===midRoll.on)return void this.remove();this.updateFromOptions(midRoll);var activeAnnotation,activeAnnotationName=changeSet.currentValue("ephemeral[annotation][name]");if(activeAnnotationName){for(var i=0;i<(midRoll.links||[]).length;i++)if(midRoll.links[i].name===activeAnnotationName){activeAnnotation=midRoll.links[i];break}activeAnnotation&&(this.video.time(this.annotations[activeAnnotation.name].time),this.showOrHideAnnotationAtTime(),this.updateAnnotationControl(activeAnnotation.name))}// this ephemeral property is used to delete an annotation from the plugin if
// it was deleted from customize
var annotation=changeSet.currentValue("ephemeral[annotation]");if(annotation){var annotationName=annotation.name;// delete annotation if shouldDelete flag is set and the annotation exists
!0===annotation.shouldDelete&&this.annotations[annotationName]&&(this.hideAnnotation(annotationName),this.removeAnnotation(annotationName))}}}}},{key:"remove",value:function remove(){this.video.removePlugin("midrollLink-v1"),this.removeAllAnnotations(),this.unbinds.map(function(e){return e()})}}]),MidrollLinkPlugin}(wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.Plugin.Base);// Legacy support for usage like video.plugin['midrollLink-v1'].showLink(), etc.
wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.plugin("midrollLink-v2",function(video,options){return new MidrollLinkPlugin(video,options)}),wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.plugin("midrollLink-v1",function(video,options){return{addLink:function addLink(options){video.plugin["midrollLink-v2"].addLinkLegacy(options)},getLinks:function(){},setLinks:function setLinks(arrOfAnnotations){video.plugin["midrollLink-v2"].setLinksLegacy(arrOfAnnotations)},showLink:function showLink(options){video.plugin["midrollLink-v2"].showLinkLegacy(options)},hideLink:function(){}