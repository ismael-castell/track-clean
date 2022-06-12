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
/******/ 	return __webpack_require__(__webpack_require__.s = 445);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(){}),

/***/ 17:
/***/ (function(){}),

/***/ 18:
/***/ (function(){}),

/***/ 3:
/***/ (function(){}),

/***/ 4:
/***/ (function(){}),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

var IframeApi,PlaylistIframeAPI,W,getIframeForEvent,globalTrigger,isBound,isVisitorTrackingEnabled,oldTrigger,startHandshake,slice=[].slice,extend=function(){},hasProp={}.hasOwnProperty;W=__webpack_require__(3)["default"],isVisitorTrackingEnabled=__webpack_require__(46).isVisitorTrackingEnabled,globalTrigger=W.lib("utilities/globalBindAndTrigger").globalTrigger,IframeApi=function(){function IframeApi(iframe1,options){this.iframe=iframe1,null==options&&(options={}),this._bindings={},this.on("problem",function(){}(this)),this.enableFullscreen(),this._injectedPlugins={},this._firedPlayCount=0,this.options=this.params=options,this.plugin||(this.plugin={}),this.container=this.iframe,this.relay=W.obj.clone(W.bindable),this.ready=new W.StopGo,this.bound=new W.StopGo,this.hasData=new W.StopGo,this._hasImpl=new W.StopGo,this.embedded=new W.StopGo,this.down=new W.StopGo,this.down(!1),this.up=new W.StopGo,this.up(!0),this.uuid=this.uuid||options.uuid||""+(this.iframe.id||W.seqId()),this.signature=options.signature||"wistia-iframe-"+this.uuid.replace(/"/g,"__QUOTE__").replace(/\n/g,"__NEWLINE__"),this.inferParamsFromSrc(),this.monitor(),W.detect.browser.ltie8&&W.timeout(this.uuid+".ie8_ready",function(){}(this))}return IframeApi.prototype.inferParamsFromSrc=function(){var ref,ref1;if(this.src=this.iframe.src,this.parsedSrc=W.url.parse(this.src),this.origWidth=parseInt(this.iframe.width||W.elem.width(this.iframe),10),this.origHeight=parseInt(this.iframe.height||W.elem.height(this.iframe),10),this.origVideoWidth=parseInt(this.parsedSrc.params.videoWidth||(null==(ref=this.parsedSrc.params.videoOptions)?void 0:ref.videoWidth)||this.origWidth,10),this.origVideoHeight=parseInt(this.parsedSrc.params.videoHeight||(null==(ref1=this.parsedSrc.params.videoOptions)?void 0:ref1.videoHeight)||this.origHeight,10),this.origPluginWidth=this.origWidth-this.origVideoWidth,this.origPluginHeight=this.origHeight-this.origVideoHeight,this.origAspectRatio=this.origVideoHeight?this.origVideoWidth/this.origVideoHeight:1.333,this.parsedSrc.params.videoFoam)return this._videoFoam=W.obj.cast(this.parsedSrc.params.videoFoam)},IframeApi.prototype.init=function(){var key,ref,ref1,val;if(W.detect.browser.ltie8)return this;for(key in this.inferParamsFromSrc(),this.relay.bind("iframebound",function(_this){return function(){return W.info("startIframeHandshake: received iframebound"),_this._postDownVisitorTrackingEnabled(),_this.postMessage("updateProperties",{_attrs:{pageUrl:location.href}}),_this.bound(!0)}}(this)),this.relay.bind("videoready",function(_this){return function(){return _this.bound(function(){if(!_this.looksDown())return _this.ready(!0)})}}(this)),/w_disableHandshakeOnLoad=true/.test(location.href)||W.elem.bind(this.iframe,"load",function(){}(this)),W.info("startIframeHandshake: init"),this.startIframeHandshake(),/w_disableHandshakeHack=true/.test(location.href)||(W.timeout(this.uuid+".iframe_handshake_500",function(_this){return function(){if(!_this.bound())return W.info("startIframeHandshake: timeout 500"),_this.startIframeHandshake()}}(this),500),W.timeout(this.uuid+".iframe_handshake_1000",function(_this){return function(){if(!_this.bound())return W.info("startIframeHandshake: timeout 1000"),_this.startIframeHandshake()}}(this),1e3),W.timeout(this.uuid+".iframe_handshake_3000",function(_this){return function(){if(!_this.bound())return W.info("startIframeHandshake: timeout 3000"),_this.startIframeHandshake()}}(this),3e3),W.timeout(this.uuid+".iframe_handshake_5000",function(_this){return function(){if(!_this.bound())return W.info("startIframeHandshake: timeout 5000"),_this.startIframeHandshake()}}(this),5e3),W.timeout(this.uuid+".iframe_handshake_10000",function(_this){return function(){if(!_this.bound())return W.info("startIframeHandshake: timeout 10000"),_this.startIframeHandshake()}}(this),1e4)),this.bind("sphericaltap",function(location){return window.location=location}),this.ready(function(_this){return function(){if("playing"===_this.state())return _this._firedSyntheticPlay=!0,_this.trigger("play")}}(this)),ref=this.parsedSrc.params.plugin||{},ref)val=ref[key],"true"===(null==(ref1=val.outsideIframe)?void 0:ref1.toString())&&this.addPlugin(key,val);return this.monitor(),this.ready(function(_this){return function(){}}(this)),this},IframeApi.prototype._postDownVisitorTrackingEnabled=function(){var e,ref,val;val=null==(null==(ref=W._visitorTracking)?void 0:ref[W._visitorTrackingDomain])?"default":isVisitorTrackingEnabled();try{return this.iframe.contentWindow.postMessage("set-visitor-tracking-enabled="+val+"|"+W._visitorTrackingDomain,"*")}catch(error){e=error}},IframeApi.prototype._wvideoInUrl=function(){var url;return url=W.url.parse(location.href),url.params.wvideo===this.hashedId()},IframeApi.prototype._scrollToContainer=function(){},IframeApi.prototype.rebuild=function(){var _finishRebuild,_startRebuild,oldSrc,par,placeholder;return(par=this.iframe.parentNode)&&(this.bound(!1),this.ready(!1),placeholder=document.createElement("span"),placeholder.style.display="none",oldSrc=null,_startRebuild=function(_this){return function(){return _this.trigger("beforerebuild"),oldSrc=_this.iframe.src,par.insertBefore(placeholder,_this.iframe),par.removeChild(_this.iframe),_this.iframe.src="javascript:return false;"}}(this),_finishRebuild=function(_this){return function(){return _this.iframe.src=oldSrc,par.insertBefore(_this.iframe,placeholder.nextSibling),par.removeChild(placeholder),placeholder=null,_this._state="beforeplay",_this.trigger("afterrebuild")}}(this),W.detect.browser.msie&&9>W.detect.browser.version?(_startRebuild(),W.timeout(this.uuid+".rebuild_delay",_finishRebuild,50)):(_startRebuild(),_finishRebuild())),this},IframeApi.prototype.remove=function(){return this._hasImpl(!1),this.hasData(!1),this.ready(!1),this.embedded(!1),W.eventLoop.remove(this.uuid),W.clearTimeouts(this.uuid),this.bound(function(_this){return function(){var finishRemoving;return finishRemoving=function finishRemoving(){var par;return W.elem.remove(_this._foamDummyElem),_this.iframe&&(par=_this.iframe.parentNode)&&(_this.iframe.wistiaApi=null,_this.iframe.wistiaIframeApiProxy=null,par.removeChild(_this.iframe),_this.iframe.src="javascript:return false;",_this.iframe=_this.container=null),_this.trigger("down"),W.clearTimeouts(_this.uuid),W.eventLoop.remove(_this.uuid),_this.ready.setQueue([]),_this.hasData.setQueue([]),_this._hasImpl.setQueue([]),_this.trigger("afterremove"),_this._bindings={},W.removeData("iframe_api."+_this.signature),_this.unbind},_this.relay.bind("_afterremove",finishRemoving),_this.postMessage("remove")}}(this))},IframeApi.prototype.reinitializePlugins=function(){return this.postMessage("reinitializePlugins")},IframeApi.prototype.monitor=function(){var didFoam,lastHeight,lastParentWidth,lastWidth;return lastParentWidth=this.width(),lastWidth=W.elem.width(this.iframe),lastHeight=W.elem.height(this.iframe),didFoam=!1,this.embedded(function(_this){return function(){return W.eventLoop.add(_this.uuid+".monitor",500,function(){var e,heightNow,newHeight,newVideoHeight,newVideoWidth,newWidth,parentWidthNow,ref,ref1,ref2,ref3,widthNow;if(_this.up()&&_this.looksDown()){if(_this._stateBeforeDown=_this._state,"flash"===_this.embedType())try{_this.rebuild()}catch(error){e=error}else _this.pause();_this.ready(!1),_this.down(!0),_this.up(!1),_this.trigger("down")}else _this.down()&&_this.looksUp()&&(_this.down(!1),_this.up(!0),"flash"===_this.embedType()?_this.rebuild():(_this.ready(!0),"playing"===_this._stateBeforeDown&&_this.play(),null==_this._stateBeforeDown&&(widthNow=_this.width(),heightNow=_this.height(),_this.width(widthNow+1),_this.height(heightNow+1),_this.width(widthNow),_this.height(heightNow))),_this.trigger("up"));return(_this.hasVideoFoam()&&_this.up()&&_this.looksUp()&&(null==_this._parentBoxSizing&&(_this._parentBoxSizing=W.elem.style(_this.iframe.parentNode,"box-sizing")),"border-box"===_this._parentBoxSizing||W.detect.browser.msie&&9>W.detect.browser.version?(!_this._foamDummyElem&&(_this._foamDummyElem=W.elem.fromObject({class:"wistia_video_foam_dummy","data-source-container-id":_this.container.id,style:{border:0,display:"block",height:0,margin:0,padding:0,position:"static",visibility:"hidden",width:"auto"}}),W.elem.before(_this.iframe,_this._foamDummyElem)),parentWidthNow=W.elem.width(_this._foamDummyElem)):parentWidthNow=W.elem.width(_this.iframe.parentNode),(lastParentWidth!==parentWidthNow||!didFoam)&&(didFoam=!0,newWidth=parentWidthNow,newVideoWidth=newWidth-_this.extraWidth(),newVideoHeight=_this.heightForWidth(newVideoWidth),newHeight=newVideoHeight+_this.extraHeight(),(null==(ref=_this.videoFoam())?void 0:ref.maxHeight)&&newHeight>_this.videoFoam().maxHeight&&(newHeight=_this.videoFoam().maxHeight,newVideoHeight=newHeight-_this.extraHeight(),newVideoWidth=_this.widthForHeight(newVideoHeight),newWidth=newVideoWidth+_this.extraWidth()),(null==(ref1=_this.videoFoam())?void 0:ref1.maxWidth)&&newWidth>_this.videoFoam().maxWidth&&(newWidth=_this.videoFoam().maxWidth,newVideoWidth=newWidth-_this.extraWidth(),newVideoHeight=_this.heightForWidth(newVideoWidth),newHeight=newVideoHeight+_this.extraHeight()),(null==(ref2=_this.videoFoam())?void 0:ref2.minHeight)&&newHeight<_this.videoFoam().minHeight&&(newHeight=_this.videoFoam().minHeight,newVideoHeight=newHeight-_this.extraHeight(),newVideoWidth=_this.widthForHeight(newVideoHeight),newWidth=newVideoWidth+_this.extraWidth()),(null==(ref3=_this.videoFoam())?void 0:ref3.minWidth)&&newWidth<_this.videoFoam().minWidth&&(newWidth=_this.videoFoam().minWidth,newVideoWidth=newWidth-_this.extraWidth(),newVideoHeight=_this.heightForWidth(newVideoWidth),newHeight=newVideoHeight+_this.extraHeight()),_this.width(newWidth).height(newHeight),W.timeout(_this.uuid+".delayed_resize",function(){},1e3),lastParentWidth=parentWidthNow)),W.detect.browser.ltie8&&(widthNow=W.elem.width(_this.iframe),heightNow=W.elem.height(_this.iframe),widthNow!==lastWidth&&(_this.trigger("widthchange",widthNow,lastWidth),lastWidth=widthNow),heightNow!==lastWidth))?(_this.trigger("heightchange",heightNow,lastHeight),lastHeight=heightNow):void 0})}}(this))},IframeApi.prototype.hasVideoFoam=function(){return null==this.videoFoam()?/videoFoam=true/.test(this.src):this.videoFoam()},IframeApi.prototype.stopMonitoring=function(){},IframeApi.prototype.looksDown=function(){},IframeApi.prototype.looksUp=function(){return!this.looksDown()},IframeApi.prototype._trigger=function(){var args,event;return event=arguments[0],args=2<=arguments.length?slice.call(arguments,1):[],"play"===event&&(this._firedPlayCount+=1,"flash"===this.embedType()&&this.params.autoPlay&&1===this._firedPlayCount&&this._firedSyntheticPlay)?void 0:W.timeout(this.uuid+".trigger."+event,function(_this){return function(){}}(this))},IframeApi.prototype.play=function(){return this.ready(function(_this){return function(){return _this.postMessage("play")}}(this)),this},IframeApi.prototype.playerLanguage=function(l){return null==l?W.getLanguage(this._playerLanguage.code)||W.getLanguage("en-US"):this.embedded(function(_this){return function(){if(l!==_this._playerLanguage.code)return _this.ready(function(){return _this.postMessage("playerLanguage",l)}),_this}}(this))},IframeApi.prototype.pause=function(){return this.ready(function(_this){return function(){return _this.postMessage("pause")}}(this)),this},IframeApi.prototype.time=function(t){return null==t?this._time||0:(this.ready(function(_this){return function(){return _this.postMessage("time",t)}}(this)),this)},IframeApi.prototype.volume=function(v){return null==v?this._volume||0:(this.ready(function(_this){return function(){return _this.postMessage("volume",v)}}(this)),this)},IframeApi.prototype.isMuted=function(){return!!this._isMuted},IframeApi.prototype.mute=function(){return this.ready(function(_this){return function(){return _this.postMessage("mute")}}(this)),this},IframeApi.prototype.unmute=function(){return this.ready(function(){}(this)),this},IframeApi.prototype.setEmail=function(e){return this.email(e)},IframeApi.prototype.email=function(e){var ref;return void 0===e?this._email||(null==(ref=this.params)?void 0:ref.trackEmail)||null:(this.bound(function(_this){return function(){return _this.postMessage("email",e)}}(this)),this._email=e)},IframeApi.prototype.foreignData=function(fd){if(W.detect.json){if(void 0===fd)return this._foreignData||null;if(null===fd)return this.bound(function(){}(this)),this._foreignData=null;if(!W.obj.isObject(fd))throw"foreignData can only be an Object";return fd=W.obj.clone(fd),this.bound(function(_this){return function(){return _this.postMessage("foreignData",fd)}}(this)),this._foreignData=fd}},IframeApi.prototype.height=function(h){return null==h?W.elem.isHidden(this.iframe)?null==this.iframe.style.height?parseInt(this.iframe.height,10):parseInt(this.iframe.style.height,10):W.elem.height(this.iframe):(h=parseInt(h,10),this.bound(function(_this){return function(){return _this.postMessage("height",h)}}(this)),this.iframe.style.height=h+"px",this.iframe.height=h,this)},IframeApi.prototype.width=function(w){return null==w?W.elem.isHidden(this.iframe)?null==this.iframe.style.width?parseInt(this.iframe.width,10):parseInt(this.iframe.style.width,10):W.elem.width(this.iframe):(w=parseInt(w,10),this.bound(function(_this){return function(){return _this.postMessage("width",w)}}(this)),this.iframe.style.width=w+"px",this.iframe.width=w,this)},IframeApi.prototype.videoHeight=function(h){var match;return null==h?0<this._videoHeight?this._videoHeight:(match=this.src.match(/videoHeight=(\d+)/))?parseInt(match[1],10):W.elem.height(this.iframe):(h=parseInt(h,10),this.bound(function(_this){return function(){return _this.postMessage("videoHeight",h)}}(this)),this.embedded(function(_this){return function(){var newHeight;if(newHeight=null==_this._height?h+_this.origPluginHeight:h+_this._height-_this._videoHeight,_this.iframe.style.height=newHeight+"px",_this.iframe.height=newHeight,W.detect.browser.ltie8)return _this._videoHeight=h}}(this)),this)},IframeApi.prototype.videoWidth=function(w){var match;return null==w?0<this._videoWidth?this._videoWidth:(match=this.src.match(/videoWidth=(\d+)/))?parseInt(match[1],10):W.elem.width(this.iframe):(w=parseInt(w,10),this.bound(function(_this){return function(){return _this.postMessage("videoWidth",w)}}(this)),this.embedded(function(_this){return function(){var newWidth;if(newWidth=null==_this._width?w+_this.origPluginWidth:w+_this._width-_this._videoWidth,_this.iframe.style.width=newWidth+"px",_this.iframe.width=newWidth,W.detect.browser.ltie8)return _this._videoWidth=w}}(this)),this)},IframeApi.prototype.extraHeight=function(){return this.origPluginHeight?this.origPluginHeight:this._height?this._height-this._videoHeight:0},IframeApi.prototype.extraWidth=function(){return this.origPluginWidth?this.origPluginWidth:this._width?this._width-this._videoWidth:0},IframeApi.prototype.heightForWidth=function(){},IframeApi.prototype.widthForHeight=function(){},IframeApi.prototype.aspect=function(){return this.origAspectRatio||1.333},IframeApi.prototype.addPlugin=function(name,options){var parsed;return null==options&&(options={}),!1===options.on||this.injectedPlugin(name)||(options.outsideIframe?W.plugin._inject(this,name,options):W.detect.browser.msie?(parsed=W.url.parse(this.iframe.src),W.obj.set(parsed.params,["plugin",name],options),this.iframe.src=parsed.absolute()):this.bound(function(_this){return function(){return _this.postMessage("addPlugin",name,options)}}(this)),this._injectedPlugins[name]=!0),this},IframeApi.prototype.videoFoam=function(forReal){return null==forReal?this._videoFoam:this._videoFoam=forReal},IframeApi.prototype.hasPlugin=function(name){var ref;return!!(this._injectedPlugins[name]||(null==(ref=this.parsedSrc.params.plugin)?void 0:ref[name]))},IframeApi.prototype.injectedPlugin=function(name){return!!this._injectedPlugins[name]},IframeApi.prototype.duration=function(){return this._duration||null},IframeApi.prototype.state=function(){return this._state||"beforeplay"},IframeApi.prototype.name=function(){return this._name||""},IframeApi.prototype.lastPlayInfo=function(){return this._lastPlayInfo||{}},IframeApi.prototype.hashedId=function(){return this._hashedId||this.parsedSrc.path[this.parsedSrc.path.length-1]},IframeApi.prototype.embedType=function(){return this._embedType},IframeApi.prototype.eventKey=function(){return this._eventKey||null},IframeApi.prototype.visitorKey=function(){return this._visitorKey||null},IframeApi.prototype.percentWatched=function(){return this._percentWatched||0},IframeApi.prototype.getEventKey=function(){return this.eventKey()},IframeApi.prototype.getVisitorKey=function(){return this.visitorKey()},IframeApi.prototype.startIframeHandshake=function(){},IframeApi.prototype.postMessage=function(){var args,e,message,method;if(method=arguments[0],args=2<=arguments.length?slice.call(arguments,1):[],!W.detect.browser.ltie8){try{if(!this.iframe.contentWindow.postMessage)return}catch(error){return void(e=error)}return message={signature:this.signature,method:method,args:args},message=JSON.stringify(message),this.iframe.contentWindow.postMessage(message,"*")}},IframeApi.prototype.updateProperties=function(props){var key,results,val;for(key in results=[],props)val=props[key],W.obj.isObject(val)?results.push(this[key]=W.obj.merge({},this[key],val)):results.push(this[key]=val);return results},IframeApi.prototype.enableFullscreen=function(){var attr,i,len,ref,ref1,results;for(ref=["allowfullscreen","mozallowfullscreen","webkitallowfullscreen","oallowfullscreen","msallowfullscreen"],results=[],(i=0,len=ref.length);i<len;i++)attr=ref[i],results.push(null==(ref1=this.iframe)?void 0:ref1.setAttribute(attr,attr));return results},IframeApi}(),W.mixin(IframeApi.prototype,W.bindable),oldTrigger=IframeApi.prototype.trigger,IframeApi.prototype.trigger=function(){},W.mixin(IframeApi.prototype,W.logHelpers),IframeApi.prototype._logPrefix=function(){},W.IframeApi=IframeApi,PlaylistIframeAPI=function(superClass){function PlaylistIframeAPI(){PlaylistIframeAPI.__super__.constructor.apply(this,arguments),this.relay.bind("boundcurrentvideo",function(_this){return function(){return _this._currentVideo=new IframeApi(_this.iframe,{uuid:_this.uuid+"-current-video",signature:_this.signature+"-current-video"}).init()}}(this))}return extend(PlaylistIframeAPI,superClass),PlaylistIframeAPI.prototype.embed=function(sectionIndex,videoIndex){return this.ready(function(_this){return function(){}}(this))},PlaylistIframeAPI.prototype.play=function(sectionIndex,videoIndex){return this.ready(function(){}(this))},PlaylistIframeAPI.prototype.currentVideo=function(){return this._currentVideo},PlaylistIframeAPI}(IframeApi),W.PlaylistIframeAPI=PlaylistIframeAPI,window.wistiaBindIframes||(window.wistiaBindIframes=function(){var handle,i,iframe,iframes,j,len,len1,newHandles,ref,results;for(iframes=document.getElementsByTagName("iframe"),newHandles=[],(i=0,len=iframes.length);i<len;i++)iframe=iframes[i],(!iframe.wistiaApi||iframe.wistiaApi instanceof W.IframeApiProxy)&&(/wistia_embed/.test(iframe.className)||"wistia_embed"===iframe.name)?(iframe.wistiaApi=new IframeApi(iframe),W.data("iframe_api."+iframe.wistiaApi.signature,iframe.wistiaApi),iframe.wistiaApi.init(),newHandles.push(iframe.wistiaApi),window.wistiaApi=iframe.wistiaApi):(!iframe.wistiaApi||iframe.wistiaApi instanceof W.IframeApiProxy)&&(/wistia_playlist/.test(iframe.className)||"wistia_playlist"===iframe.name)&&(iframe.wistiaApi=new PlaylistIframeAPI(iframe),W.data("iframe_api."+iframe.wistiaApi.signature,iframe.wistiaApi),iframe.wistiaApi.init(),newHandles.push(iframe.wistiaApi),window.wistiaApi=iframe.wistiaApi);for(null!=(ref=window.wistiaEmbeds)&&ref.bindHandles(),results=[],(j=0,len1=newHandles.length);j<len1;j++)handle=newHandles[j],results.push(handle.trigger("initembed"));return results}),wistiaBindIframes(),getIframeForEvent=function getIframeForEvent(event){var i,iframe,iframes,len;for(iframes=document.getElementsByTagName("iframe"),i=0,len=iframes.length;i<len;i++)if(iframe=iframes[i],event&&event.source===iframe.contentWindow)return iframe;return null},isBound=function isBound(iframe){var ref,ref1,ref2;return(null==(ref=iframe.wistiaApi)?void 0:"function"==typeof ref.bound?ref.bound():void 0)||(null==(ref1=iframe.wistiaApi)||null==(ref2=ref1._currentVideo)?void 0:"function"==typeof ref2.bound?ref2.bound():void 0)},startHandshake=function startHandshake(iframe){var iframeApi,ref;return iframeApi=(null==(ref=iframe.wistiaApi)?void 0:ref._currentVideo)||iframe.wistiaApi,"function"==typeof iframeApi.startIframeHandshake?iframeApi.startIframeHandshake():void 0},window._inWistiaIframe||window.wistiaDispatch||window._wistiaIframeShim||(null==window.wistiaDispatch&&(window.wistiaDispatch=function(event){var handle,iframe,message;if("new-wistia-iframe"===event.data){if(wistiaBindIframes(),(iframe=getIframeForEvent(event))&&iframe.wistiaApi&&!isBound(iframe))return W.info("startIframeHandshake: from new-wistia-iframe"),startHandshake(iframe);}else if(message="string"==typeof event.data&&/wistia-iframe-/.test(event.data)?JSON.parse(event.data):event.data,/wistia-iframe-/.test(message.signature))if(handle=W.data("iframe_api")[message.signature]){if(!handle.iframe||event.source!==window&&event.source!==handle.iframe.contentWindow)return;if("relay.trigger"===message.method)return handle.relay.trigger.apply(handle.relay,message.args);if("play"===message.method&&(W.detect.iphone||W.detect.ipad||W.detect.android));else if("addPlugin"===message.method&&event.source!==window);else return IframeApi.prototype.hasOwnProperty(message.method)||handle.hasOwnProperty(message.method)?handle[message.method].apply(handle,message.args):"undefined"!=typeof console&&null!==console?console.log("Ignored "+message.method+" call; not owner of property."):void 0}else return"undefined"!=typeof console&&null!==console?console.log("Ignored "+message.method+" call, no handle for "+message.signature):void 0}),W.elem.bind(window,"message",wistiaDispatch)),W._initializers.initIframeApi=function(){if(wistiaBindIframes(),!window._inWistiaIframe&&!window.wistiaDispatch&&!window._wistiaIframeShim)return null==window.wistiaDispatch&&(window.wistiaDispatch=function(event){var handle,message;if("new-wistia-iframe"===event.data)return wistiaBindIframes();if(message="string"==typeof event.data&&/wistia-iframe-/.test(event.data)?JSON.parse(event.data):event.data,/wistia-iframe-/.test(message.signature))if(handle=W.data("iframe_api")[message.signature]){if("relay.trigger"===message.method)return W.obj.get(handle,message.method).apply(handle.relay,message.args);if("play"===message.method&&(W.detect.iphone||W.detect.ipad||W.detect.android));else return W.obj.get(handle,message.method).apply(handle,message.args)}else return"undefined"!=typeof console&&null!==console?console.log("Ignored "+message.method+" call, no handle for "+message.signature):void 0}),W.elem.bind(window,"message",wistiaDispatch)},W._destructors.destroyIframeApi=function(){return window.wistiaDispatch&&W.elem.unbind(window,"message",window.wistiaDispatch),window.wistiaDispatch=null},W._initializers.initIframeApi(),W.bind("ev1initend",W._initializers.initIframeApi),W.bind("ev1destroystart",W._destructors.destroyIframeApi),W.define("iframeApi.js",IframeApi);

/***/ }),

/***/ 46:
/***/ (function(){}),

/***/ 47:
/***/ (function(){}),

/***/ 48:
/***/ (function(){}