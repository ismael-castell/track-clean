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
/******/ 	return __webpack_require__(__webpack_require__.s = 446);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(){}),

/***/ 4:
/***/ (function(){}),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

function(){}var W,iframeInit,isVisitorTrackingEnabled,ref,setVisitorTrackingEnabled,slice=[].slice;W=__webpack_require__(3)["default"],ref=W.lib("utilities/trackingConsentApi"),isVisitorTrackingEnabled=ref.isVisitorTrackingEnabled,setVisitorTrackingEnabled=ref.setVisitorTrackingEnabled,iframeInit=function iframeInit(mediaJson,optionsJson){var ampSendEvents,e,embedOptions,frame,i,j,key,len,len1,m,postMessageQueue,receiveMessage,ref1,ref2,setIframeHtmlLanguage,simpleHashForPostMessage,url,val;for(key in url=W.url.parse(location.href),embedOptions=W.extend(optionsJson,url.params),ampSendEvents=!1,embedOptions.pageTitle=document.title,W.obj.castDeep(embedOptions),embedOptions.container="wistia_video",embedOptions.canonicalUrl||(embedOptions.canonicalUrl=embedOptions.pageUrl),embedOptions.canonicalTitle||(embedOptions.canonicalTitle=embedOptions.pageTitle),ref1=embedOptions.plugin||{},ref1)val=ref1[key],embedOptions.plugin[key].outsideIframe&&(embedOptions.plugin[key]=null,delete embedOptions.plugin[key]);for(url.params.popover&&(W.obj.get(url.params,"plugin.requireEmail")?embedOptions.autoPlay=!1:embedOptions.autoPlay=!0),!1!==embedOptions.autoPlay&&embedOptions.autoplay&&(embedOptions.autoPlay=!0),url.params.twitter&&!1!==embedOptions.autoPlay&&(embedOptions.autoPlay=!!embedOptions.autoplay),embedOptions._inIframe=!0,window.wistiaEmbed=W.embed(mediaJson,embedOptions),setIframeHtmlLanguage=function setIframeHtmlLanguage(){var html,language;return html=document.querySelector("html"),language=wistiaEmbed.playerLanguage(),html.setAttribute("lang",language.code)},setIframeHtmlLanguage(),W.timeout(wistiaEmbed.uuid+".fit_later",function(){return window.wistiaEmbed.fit()},100),(W.detect.iphone||W.detect.ipad)&&wistiaEmbed.ready(function(){return setInterval(function(){return wistiaEmbed.elem().style.zoom="",wistiaEmbed.elem().style.zoom=1},3e3)}),receiveMessage=function receiveMessage(event){var args,e,matches,message,method;if("remove"===event.data)return void wistiaEmbed.remove();if(!/^(visitor_key|send_visitor_key|clear_visitor_key)/.test(event.data)){if(/^wistia-iframe-/.test(event.data))return void(0>window._allIframes.join(" ").indexOf(event.data)&&window._allIframes.push(event.data));if("declare-existing-wistia-iframe"===event.data)return void event.source.postMessage("wistia-iframe-"+iframeUuid,"*");if(/^set-visitor-tracking-enabled=/.test(event.data))return matches=event.data.match(/^set-visitor-tracking-enabled=([^\|]+)\|(.*)/),W._visitorTrackingDomain=matches[2],void setVisitorTrackingEnabled(matches[1],matches[2]);if("amp-listening"===event.data)return void(ampSendEvents=!0);if("amp-play"===event.data)return void wistiaEmbed.play();if("amp-pause"===event.data)return void wistiaEmbed.pause();if("amp-mute"===event.data)return void wistiaEmbed.mute();if("amp-unmute"===event.data)return void wistiaEmbed.unmute();if("string"==typeof event.data)try{message=JSON.parse(event.data)}catch(error){e=error,W.notice("inside_iframe","receiveMessage","Could not parse message from "+event.origin),W.notice("inside_iframe","receiveMessage",event.data),message={}}else message=event.data;return method=message.method,args=message.args,event.source===parent?"startIframeHandshake"===method?(window.apiSignature=args[0],!window.wistiaEmbed)?void 0:(wistiaEmbed.postMessage("relay.trigger","iframebound"),wistiaEmbed.postMessage("updateProperties",{options:simpleHashForPostMessage(wistiaEmbed.options),params:simpleHashForPostMessage(wistiaEmbed.params),_embedType:wistiaEmbed.embedType,_hashedId:wistiaEmbed.hashedId(),_width:wistiaEmbed.width(),_height:wistiaEmbed.height(),_videoWidth:wistiaEmbed.videoWidth(),_videoHeight:wistiaEmbed.videoHeight()}),wistiaEmbed._hasImpl(function(){return wistiaEmbed.postMessage("_hasImpl",!0)}),wistiaEmbed.hasData(function(){return wistiaEmbed.postMessage("updateProperties",{_embedType:wistiaEmbed.embedType,options:simpleHashForPostMessage(wistiaEmbed.options),params:simpleHashForPostMessage(wistiaEmbed.params),_name:wistiaEmbed.name(),_duration:wistiaEmbed.duration(),_videoWidth:wistiaEmbed.videoWidth(),_videoHeight:wistiaEmbed.videoHeight(),_mediaData:wistiaEmbed._mediaData}),wistiaEmbed.postMessage("hasData",!0)}),wistiaEmbed.embedded(function(){return wistiaEmbed.postMessage("updateProperties",{_embedType:wistiaEmbed.embedType,options:simpleHashForPostMessage(wistiaEmbed.options),params:simpleHashForPostMessage(wistiaEmbed.params),origAspectRatio:wistiaEmbed.aspect(),origVideoHeight:wistiaEmbed.videoHeight(),origVideoWidth:wistiaEmbed.videoWidth(),origHeight:wistiaEmbed.height(),origWidth:wistiaEmbed.width(),origPluginWidth:wistiaEmbed.extraWidth(),origPluginHeight:wistiaEmbed.extraHeight(),_videoWidth:wistiaEmbed.videoWidth(),_videoHeight:wistiaEmbed.videoHeight(),_width:wistiaEmbed.width(),_height:wistiaEmbed.height(),_playerLanguage:wistiaEmbed.playerLanguage()}),wistiaEmbed.postMessage("embedded",!0)}),wistiaEmbed.ready(function(){return wistiaEmbed.postMessage("updateProperties",{options:simpleHashForPostMessage(wistiaEmbed.options),params:simpleHashForPostMessage(wistiaEmbed.params),_embedType:wistiaEmbed.embedType,_visitorKey:wistiaEmbed.visitorKey(),_eventKey:wistiaEmbed.eventKey(),_width:wistiaEmbed.width(),_height:wistiaEmbed.height(),_videoWidth:wistiaEmbed.videoWidth(),_videoHeight:wistiaEmbed.videoHeight(),_state:wistiaEmbed.state(),_time:wistiaEmbed.time(),_isMuted:wistiaEmbed.isMuted(),_volume:wistiaEmbed.volume(),_playerLanguage:wistiaEmbed.playerLanguage()}),wistiaEmbed.postMessage("relay.trigger","videoready"),W.visitorKey.ready(function(){return wistiaEmbed.postMessage("updateProperties",{_visitorKey:wistiaEmbed.visitorKey()})})})):method?"undefined"!=typeof wistiaEmbed&&null!==wistiaEmbed?wistiaEmbed[method].apply(wistiaEmbed,args):void 0:void 0:void 0}},simpleHashForPostMessage=function simpleHashForPostMessage(h){var result;return result={},Wistia.obj.eachLeaf(h,function(obj,path){if(/^string|number|boolean$/i.test(_typeof(obj)))return W.obj.set(result,path,obj)}),result},window.apiSignature=null,window.iframeUuid=Math.random().toString(36).replace(/[^a-z0-9]+/g,""),window._allIframes=["wistia-iframe-"+iframeUuid],wistiaEmbed.postMessage=function(){var args,message,method;if(method=arguments[0],args=2<=arguments.length?slice.call(arguments,1):[],parent!==self)return message={method:method,args:args},apiSignature&&(message.signature=apiSignature),message=JSON.stringify(message),parent.postMessage(message,"*")},wistiaEmbed.ping=function(){var args;return args=1<=arguments.length?slice.call(arguments,0):[],wistiaEmbed.postMessage.apply(wistiaEmbed,["pong"].concat(slice.call(args)))},wistiaEmbed.updateProperties=function(props){for(key in props)val=props[key],this[key]=W.obj.isObject(val)?W.obj.merge({},this[key],val):val;return this.postMessage("updateProperties",simpleHashForPostMessage(props))},postMessageQueue=window.wistiaPostMessageQueue||[],(i=0,len=postMessageQueue.length);i<len;i++){m=postMessageQueue[i];try{receiveMessage(m)}catch(error){e=error,W.error(e)}}if(window.wistiaPostMessageQueue=[],!W.detect.browser.ltie8){if(parent===self)return;if(parent.postMessage("new-wistia-iframe","*"),25>=W.util.parentFramesLength())for(ref2=parent.frames,j=0,len1=ref2.length;j<len1;j++)frame=ref2[j],frame!==self&&frame!==parent&&(frame.postMessage("wistia-iframe-"+iframeUuid,"*"),frame.postMessage("declare-existing-wistia-iframe","*"));return wistiaEmbed.bind("down",function(){return wistiaEmbed.postMessage("updateProperties",{_down:!0})}),wistiaEmbed.bind("up",function(){}),wistiaEmbed.bind("volumechange",function(){}),wistiaEmbed.bind("emailchange",function(v){return wistiaEmbed.postMessage("updateProperties",{_email:v,params:{trackEmail:v}})}),wistiaEmbed.bind("playpending",function(e){return wistiaEmbed.postMessage("updateProperties",{_lastPlayInfo:wistiaEmbed.lastPlayInfo()})}),wistiaEmbed.bind("play",function(e){return wistiaEmbed.postMessage("updateProperties",{_lastPlayInfo:wistiaEmbed.lastPlayInfo()})}),wistiaEmbed.bind("playrejected",function(){}),wistiaEmbed.bind("timechange",function(t){return wistiaEmbed.postMessage("updateProperties",{_time:t})}),wistiaEmbed.bind("statechange",function(s){return wistiaEmbed.postMessage("updateProperties",{_state:s})}),wistiaEmbed.bind("mutechange",function(){}