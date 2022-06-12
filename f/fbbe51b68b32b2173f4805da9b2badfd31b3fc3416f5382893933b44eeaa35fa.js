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
/******/ 	return __webpack_require__(__webpack_require__.s = 540);
/******/ })
/************************************************************************/
/******/ ({

/***/ 117:
/***/ (function(){}),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standardSvgAttrs", function() { return standardSvgAttrs; });
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function(){}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var standardSvgAttrs=function standardSvgAttrs(width,height){var styleOverride=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};return{x:"0px",y:"0px",viewBox:"0 0 ".concat(width," ").concat(height),"enable-background":"new 0 0 ".concat(width," ").concat(height),style:_objectSpread({fill:"#ffffff",height:"100%",left:0,strokeWidth:0,top:0,width:"100%"},styleOverride),// specifically for IE11, we add the focusable attribute to svgs
// to prevent them from being focusable since tabindex on svgs is
// not supported in IE
focusable:"false"}};wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].define("vulcanV2Player/shared/ui_components/svg_boilerplate.js",{standardSvgAttrs:standardSvgAttrs});

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callUnbinds", function() { return callUnbinds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyControl", function() { return destroyControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDestroyControls", function() { return maybeDestroyControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeInitializeControls", function() { return maybeInitializeControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountControls", function() { return mountControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setControlProps", function() { return setControlProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRootElem", function() { return removeRootElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runOnControlPropsUpdated", function() { return runOnControlPropsUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedControlsByType", function() { return getSortedControlsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickControlDefinitionsWithTypes", function() { return pickControlDefinitionsWithTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountReactMounts", function() { return unmountReactMounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetObjectProperties", function() { return unsetObjectProperties; });
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var promiscuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var promiscuous__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(promiscuous__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utilities_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var player_control_definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
var _W$lib=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("utilities/detect"),cachedDetect=_W$lib.cachedDetect,_W$lib2=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("player/lib/timeout-utils"),doTimeout=_W$lib2.doTimeout,clearTimeouts=_W$lib2.clearTimeouts,_W$lib3=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("player/lib/elem"),elemBind=_W$lib3.elemBind,elemRemove=_W$lib3.elemRemove,elemUnbind=_W$lib3.elemUnbind,_W$lib4=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("preact"),h=_W$lib4.h,render=_W$lib4.render,seqId=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("utilities/seqid"),detect=cachedDetect();// Call functions that we've pushed into control.unbinds.
var callUnbinds=function(){};var destroyControl=function(){};var maybeDestroyControls=function(){};var maybeInitializeControls=function(){};var mountControl=function(){},renderHourglassLoader=function(){};var mountControls=function(){};var setControlProps=function(){};var removeRootElem=function(){};var renderNothingForReactMount=function(){};var runOnControlPropsUpdated=function(){};var startsWithDoubleUnderscore=function(){};var getSortedControlsByType=function(){};var pickControlDefinitionsWithTypes=function(){};var unmountReactMounts=function(){};var unsetObjectProperties=function(){};

/***/ }),

/***/ 22:
/***/ (function(){}),

/***/ 3:
/***/ (function(){}),

/***/ 32:
/***/ (function(){}),

/***/ 4:
/***/ (function(){}),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _vulcanV2Player_video_controls_ShareControl_ShareControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(541);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function(){}function(){}function _createSuper(Derived){return function(){var result,Super=_getPrototypeOf(Derived);if(_isNativeReflectConstruct()){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return call&&("object"===_typeof(call)||"function"==typeof call)?call:_assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}var _W$lib=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("player/lib/timeout-utils"),doTimeout=_W$lib.doTimeout,Obj=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("utilities/obj"),SharePlugin=/*#__PURE__*/function(_W$Plugin$Base){function SharePlugin(video,options){var _this;return _classCallCheck(this,SharePlugin),_this=_super.call(this,video,options),_this.pluginName="share-v2",_this.video=video,_this.options=options,_this._isEnabled=!1!==options.on,_this._origImpl=video._impl,doTimeout("".concat(video.uuid,".enable_or_disable_share_controls"),function(){_this._isEnabled&&_this.options.channels?_this.enable():_this.disable()},1),_this}_inherits(SharePlugin,_W$Plugin$Base);var _super=_createSuper(SharePlugin);return _createClass(SharePlugin,[{key:"enable",value:function enable(){return this.video._impl.setControlEnabled("shareButton",!0)}},{key:"disable",value:function(){}},{key:"update",value:function update(newOptions,shouldShowDialog){var _this2=this;if(!1===newOptions.on)return void this.disable();if(newOptions.channels){var enablePromise=this.enable().then(function(){shouldShowDialog&&_this2.video.controls.shareButton.dialog.open(),_this2.video.controls.shareButton.updateFromOptionsAndRender(newOptions)});return this.video.requestControls("changed_share",4e3),clearTimeout(this._closeShareTimeout),this._closeShareTimeout=setTimeout(function(){_this2.video.controls.shareButton&&_this2.video.controls.shareButton.dialog&&_this2.video.controls.shareButton.dialog.close()},4e3),enablePromise}return this.disable()}},{key:"customizePreview",value:function customizePreview(changeSet){if(changeSet.anyChanged(["plugin[share-v2]","plugin[share]"])){var isShareOpen=changeSet.currentValue("ephemeral[ui][share][isOpen]"),shareOptions=changeSet.currentValue("plugin[share-v2]")||changeSet.currentValue("plugin[share]")||{on:!1};return this.update(shareOptions,isShareOpen)}}},{key:"remove",value:function remove(){this.video._impl===this._origImpl&&this.disable(),_get(_getPrototypeOf(SharePlugin.prototype),"remove",this).call(this)}}]),SharePlugin}(wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].Plugin.Base);wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].plugin("share-v2",function(video,options){return new SharePlugin(video,options)});

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _shared_controls_Control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117);
/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(542);
/* harmony import */ var player_lib_control_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(120);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function(){}function(){}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _createSuper(Derived){return function(){var result,Super=_getPrototypeOf(Derived);if(_isNativeReflectConstruct()){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return call&&("object"===_typeof(call)||"function"==typeof call)?call:_assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var _W$lib=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("preact"),h=_W$lib.h,render=_W$lib.render,_W$lib2=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("player/translations"),getTranslation=_W$lib2.getTranslation,defineTranslations=_W$lib2.defineTranslations,Obj=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("utilities/obj"),Promise=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("promiscuous");defineTranslations("en-US",{SHARE_CONTROL_CLOSE:"Close sharing menu",SHARE_CONTROL_OPEN:"Open sharing menu"});var ShareControl=/*#__PURE__*/function(_Control){function ShareControl(video){var _this;return _classCallCheck(this,ShareControl),_this=_super.call(this,video),_defineProperty(_assertThisInitialized(_this),"loadMenuCode",function(){return wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].asyncRequire(["interFontFace.js","vulcanV2Player/video/controls/ShareControl/dialog.js"]).then(function(_ref){var _ref2=_slicedToArray(_ref,2),_=_ref2[0],imports=_ref2[1];_this.renderMenuImpl||(_this.renderMenuImpl=imports.renderMenu.bind(_assertThisInitialized(_this)))})}),_defineProperty(_assertThisInitialized(_this),"onMouseEnterButton",function(){_this.loadMenuCode()}),_defineProperty(_assertThisInitialized(_this),"onClickButton",function(){}),_this.options=Obj.get(_this.video.plugin,"share.options")||Obj.get(_this.video._opts,"plugin.share")||{},_this.updateFromOptions(_this.options),_this}_inherits(ShareControl,_Control);var _super=_createSuper(ShareControl);return _createClass(ShareControl,[{key:"destroy",value:function(){}},{key:"mountButton",value:function(){}},{key:"renderButton",value:function renderButton(){if(this.buttonElem){var translationKey=this._isDialogOpen?"CLOSE":"OPEN",translation=getTranslation(this.props.playerLanguage.code,"SHARE_CONTROL_".concat(translationKey));this.setButtonLabel(translation),render(h(_ShareButton__WEBPACK_IMPORTED_MODULE_2__["default"],{onMouseEnter:this.onMouseEnterButton}),this.buttonElem),this.reactMounts.button=[this.buttonElem]}}},{key:"mountDialog",value:function mountDialog(dialogRoot){return this.dialogRoot=dialogRoot,this.renderMenu()}},{key:"renderMenu",value:function renderMenu(){var _this2=this;if(this.dialog.isOpen()){var loadMenuCode=this.loadMenuCode().then(function(){_this2.renderMenuImpl()});return this.loading(new Promise(function(resolve){loadMenuCode.then(resolve)})),loadMenuCode}}},{key:"updateFromOptions",value:function updateFromOptions(options){this._channels=options.channels||"",this._downloadType=options.downloadType,this._pageUrl=options.pageUrl,this._pageTitle=options.pageTitle,this._tweetText=options.tweetText||"",this._overrideUrl=null===options.overrideUrl||void 0===options.overrideUrl||options.overrideUrl,this.shareOptions={overrideUrl:this._overrideUrl,pageTitle:this._pageTitle,pageUrl:this._pageUrl,tweetText:this._tweetText}}},{key:"updateFromOptionsAndRender",value:function updateFromOptionsAndRender(options){var _this3=this;return this.updateFromOptions(options),this.loadMenuCode().then(function(){})}},{key:"onControlPropsUpdated",value:function onControlPropsUpdated(prevProps){this.dialog&&this.dialog.isOpen()&&this.renderMenu(),prevProps.playerLanguage&&this.props.playerLanguage.code!==prevProps.playerLanguage.code&&this.renderButton()}}]),ShareControl}(_shared_controls_Control_js__WEBPACK_IMPORTED_MODULE_1__["default"]);ShareControl.shouldMount=function(video){return video.plugin["share-v2"]},ShareControl.handle="shareButton",ShareControl.type="control-bar-right",ShareControl.sortValue=300,ShareControl.isVideoChrome=!0,wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].defineControl(ShareControl);/* harmony default export */ __webpack_exports__["default"] = (ShareControl);

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_ui_components_svg_boilerplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
function(){}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function(){}function(){}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function(){}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function(){}var _W$lib=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_1__["default"].lib("preact"),h=_W$lib.h,render=_W$lib.render,Component=_W$lib.Component,ShareButton=/*#__PURE__*/function(_Component){function ShareButton(){return _classCallCheck(this,ShareButton),_super.apply(this,arguments)}_inherits(ShareButton,_Component);var _super=_createSuper(ShareButton);return _createClass(ShareButton,[{key:"shouldComponentUpdate",value:function shouldComponentUpdate(){return!1}},{key:"render",value:function render(){var sharedLineAttrs={fill:"none",stroke:"#ffffff","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":10};return h("svg",Object(_shared_ui_components_svg_boilerplate_js__WEBPACK_IMPORTED_MODULE_0__["standardSvgAttrs"])(40,34),h("g",sharedLineAttrs,h("polyline",{points:"18,11.7 9.6,11.7 9.6,25 30.1,25 30.1,17.1"}),h("polyline",{points:"27.8,14 30.6,8.4 25,6.5"}),h("path",{d:"M30.3,8.7c-6.7,1.9-10.9,5.9-10.9,11.6"})))}}]),ShareButton}(Component);/* harmony default export */ __webpack_exports__["default"] = (ShareButton);

/***/ }),

/***/ 7:
/***/ (function(){}