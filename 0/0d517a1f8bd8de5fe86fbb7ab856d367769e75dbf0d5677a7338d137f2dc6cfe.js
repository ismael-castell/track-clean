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
/******/ 	return __webpack_require__(__webpack_require__.s = 574);
/******/ })
/************************************************************************/
/******/ ({

/***/ 117:
/***/ (function(){}),

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

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _vulcanV2Player_video_controls_VideoThumbnailControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}var _W$lib=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("player/lib/timeout-utils"),doTimeout=_W$lib.doTimeout,_W$lib2=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("utilities/bindify"),bindify=_W$lib2.bindify,VideoThumbnail=/*#__PURE__*/function(){function VideoThumbnail(video,options){_classCallCheck(this,VideoThumbnail),this.video=video,this._hashedId=options.hashedId,this._trimStart=options.trimStart,this._trimEnd=options.trimEnd,this._shouldShowClickToPlayButton=!1!==options.clickToPlayButton,this._fitStrategy=options.fitStrategy,this.video.setControlEnabled("thumbnail",!1),doTimeout("".concat(video.uuid,".enable_video_thumbnail"),function(){video.setControlEnabled("videoThumbnail",!0)},1)}return _createClass(VideoThumbnail,[{key:"customizePreview",value:function customizePreview(changeSet){var videoThumbnailChanged=changeSet.changed("plugin[videoThumbnail]");if(videoThumbnailChanged){var newOptions=changeSet.currentValue("plugin[videoThumbnail]");newOptions&&!1===newOptions.on||this.updateVideoThumbnail(newOptions)}}},{key:"updateVideoThumbnail",value:function updateVideoThumbnail(options){var _this=this;this._hashedId=options.hashedId,this._trimStart=options.trimStart,this._trimEnd=options.trimEnd,this.video.whenControlMounted("videoThumbnail").then(function(){_this.video.controls.videoThumbnail.updateVideoThumbnail()})}},{key:"getHashedId",value:function getHashedId(){return this._hashedId}},{key:"getTrimStart",value:function getTrimStart(){return this._trimStart}},{key:"getTrimEnd",value:function getTrimEnd(){return this._trimEnd}},{key:"shouldShowClickToPlay",value:function shouldShowClickToPlay(){return this._shouldShowClickToPlayButton}},{key:"getFitStrategy",value:function getFitStrategy(){return this._fitStrategy}},{key:"remove",value:function remove(){this.video.setControlEnabled("videoThumbnail",!1),this.video.setControlEnabled("thumbnail",!0)}}]),VideoThumbnail}();bindify(VideoThumbnail.prototype),wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].plugin("videoThumbnail",function(video,options){return new VideoThumbnail(video,options)});

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _shared_controls_Control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117);
/* harmony import */ var player_lib_control_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(120);
function(){}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function(){}function(){}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function(){}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function(){}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Promise=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("promiscuous"),Obj=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("utilities/obj"),_W$lib=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("player/lib/media_data"),fetchMedia=_W$lib.fetchMedia,_W$lib2=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("player/lib/elem"),elemAppend=_W$lib2.elemAppend,elemFromObject=_W$lib2.elemFromObject,elemStyle=_W$lib2.elemStyle,_W$lib3=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("utilities/url"),Url=_W$lib3.Url,_W$lib4=wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].lib("player/lib/media-data-transforms"),mediaDataTransforms=_W$lib4.mediaDataTransforms,VideoThumbnailControl=/*#__PURE__*/function(_Control){function VideoThumbnailControl(video){var _this;return _classCallCheck(this,VideoThumbnailControl),_this=_super.call(this,video),_defineProperty(_assertThisInitialized(_this),"updateVideoThumbnail",function(){var clickForSoundButton=_this.video.controls.clickForSoundButton;if(_this.shouldShow())_this.rootElem.style.display="block",_this.initializedEngine.then(function(engine){engine.setAttributes({trimStart:_this.plugin().getTrimStart(),trimEnd:_this.plugin().getTrimEnd()}),_this.engine=engine,engine.play()}),_this.plugin()&&_this.plugin().shouldShowClickToPlay()&&(clickForSoundButton.setIsVisible(!0),clickForSoundButton.setSilentAutoPlayBackdropEnabled(!1),clickForSoundButton.on("click",function(){_this.video.play()}));else{_this.engine&&_this.engine.pause(),_this.rootElem&&(_this.rootElem.style.display="none"),clickForSoundButton&&(clickForSoundButton.setButtonText(null),clickForSoundButton.setIsVisible(null));var timeSincePlay=Date.now()-_this.video.lastPlayInfo().issuedAt;_this.video.up()&&"beforeplay"===_this.video.state()&&!isNaN(timeSincePlay)&&2e3>timeSincePlay&&setTimeout(function(){_this.updateVideoThumbnail()},2e3-timeSincePlay+1)}}),_this.unbinds.push(video.on("play",function(){_this._hasPlayed=!0,_this.updateVideoThumbnail()}),video.on("playrejected",_this.updateVideoThumbnail),video.on("playpending",_this.updateVideoThumbnail),video.on("end",_this.updateVideoThumbnail)),_this}_inherits(VideoThumbnailControl,_Control);var _super=_createSuper(VideoThumbnailControl);return _createClass(VideoThumbnailControl,[{key:"destroy",value:function destroy(){var clickForSoundButton=this.video.controls.clickForSoundButton;clickForSoundButton&&!clickForSoundButton.__destroyed&&(clickForSoundButton.setButtonText(null),clickForSoundButton.setIsVisible(null)),Object(player_lib_control_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__["destroyControl"])(this)}},{key:"mount",value:function mount(rootElem){var _this2=this;this.rootElem=rootElem;var coverStyles={height:"100%",left:0,position:"absolute",top:0,width:"100%"};return elemStyle(rootElem,Obj.merge({clip:"rect(0,0,0,0)"},coverStyles)),this.videoWrapper=elemFromObject({style:coverStyles}),this.thumbnailClickBlocker=elemFromObject({style:coverStyles}),elemAppend(rootElem,this.videoWrapper),elemAppend(rootElem,this.thumbnailClickBlocker),this.initializedEngine=new Promise(function(resolve){var _this2$video$embedOpt=_this2.video.embedOptions(),embedHost=_this2$video$embedOpt.embedHost;fetchMedia(_this2.plugin().getHashedId(),function(mediaData){mediaDataTransforms(mediaData,_this2.video.embedOptions());var bustParamName="".concat(_this2.video.container.id,"-").concat(_this2.plugin().getHashedId(),"-video-thumbnail");mediaData.assets.forEach(function(asset){var url=new Url(asset.url);url.params[bustParamName]=1,asset.url=url.absolute()}),resolve(wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].embedEngine(_this2.videoWrapper,mediaData,{height:_this2.video.videoHeight(),loop:!0,muted:!0,playsinline:!0,trimStart:_this2.plugin().getTrimStart(),trimEnd:_this2.plugin().getTrimEnd(),webkitAirplay:!1,width:_this2.video.videoWidth(),maxMaxBufferLength:6,fitStrategy:_this2.plugin().getFitStrategy()}))},{embedHost:embedHost})}),new Promise(function(resolve){_this2.initializedEngine.then(function(engine){_this2.engine=engine,engine.onReady().then(function(){return _this2.unbinds.push(engine.bind("timeupdate",function(){})),_this2.shouldShow()?engine.play():Promise.resolve()}).then(resolve).then(function(){return _this2.updateVideoThumbnail()})}),setTimeout(resolve,2e3)}).then(function(){})}},{key:"onControlPropsUpdated",value:function onControlPropsUpdated(prevProps){var _this3=this,props=this.props;this.mounted.then(this.initializedEngine).then(function(){prevProps.videoWidth!==props.videoWidth&&_this3.engine.onWidthChange(props.videoWidth),prevProps.videoHeight!==props.videoHeight&&_this3.engine.onHeightChange(props.videoHeight)})}},{key:"shouldShow",value:function(){}},{key:"plugin",value:function plugin(){return this.video.plugin.videoThumbnail}}]),VideoThumbnailControl}(_shared_controls_Control_js__WEBPACK_IMPORTED_MODULE_1__["default"]);VideoThumbnailControl.shouldMount=function(video){var isOffscreenPopover=video.popover&&!video.popover.isVisible();return video.plugin.videoThumbnail&&!isOffscreenPopover},VideoThumbnailControl.handle="videoThumbnail",VideoThumbnailControl.type="background",VideoThumbnailControl.sortValue=2e3,wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"].defineControl(VideoThumbnailControl);/* harmony default export */ __webpack_exports__["default"] = (VideoThumbnailControl);

/***/ }),

/***/ 7:
/***/ (function(){}