/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
fbq.version="2.9.33";
fbq._releaseSegment = "stable";
fbq.pendingConfigs=["global_config"];
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;var g=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var a=a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"](),g;!(d=(g=a.next()).done);d=!0){c.push(g.value);if(b&&c.length===b)break}}catch(a){e=!0,f=a}finally{try{!d&&a["return"]&&a["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;else if((typeof Symbol==="function"?Symbol.iterator:"@@iterator")in Object(b))return a(b,c);else throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){}(),i=typeof Symbol==="function"&&typeof (typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(a){return typeof a}:function(){};function(){}function(){}function(){}function m(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}else return Array.from(a)}function n(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});f.ensureModuleRegistered("SignalsConvertNodeToHTMLElement",function(){});f.ensureModuleRegistered("SignalsEventValidation",function(){});f.ensureModuleRegistered("SignalsFBEventsBaseEvent",function(){});f.ensureModuleRegistered("SignalsFBEventsBatcher",function(){});f.ensureModuleRegistered("signalsFBEventsCoerceAutomaticMatchingConfig",function(){});f.ensureModuleRegistered("signalsFBEventsCoerceBatchingConfig",function(){});f.ensureModuleRegistered("signalsFBEventsCoerceInferedEventsConfig",function(){});f.ensureModuleRegistered("signalsFBEventsCoerceParameterExtractors",function(){});f.ensureModuleRegistered("signalsFBEventsCoercePixel",function(){});f.ensureModuleRegistered("signalsFBEventsCoercePixelID",function(){});f.ensureModuleRegistered("SignalsFBEventsCoercePrimitives",function(){});f.ensureModuleRegistered("signalsFBEventsCoerceStandardParameter",function(){});f.ensureModuleRegistered("signalsFBEventsCoerceUserData",function(){});f.ensureModuleRegistered("SignalsFBEventsConfigLoadedEvent",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsBaseEvent"),b=f.getFbeventsModules("signalsFBEventsCoercePixelID");function c(a){a=b(a);return a!=null?[a]:null}a=new a(c);k.exports=a})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsConfigStore",function(){return function(g,i,j,k){var l={exports:{}};l.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsQE"),b=f.getFbeventsModules("SignalsFBEventsProhibitedSourcesTypedef"),c=f.getFbeventsModules("SignalsFBEventsMicrodataConfigTypedef"),d=f.getFbeventsModules("SignalsFBEventsUnwantedDataTypedef"),e=f.getFbeventsModules("SignalsFBEventsDataProcessingOptionsConfigTypedef"),g=f.getFbeventsModules("SignalsFBEventsTyped"),i=g.coerce,j=g.Typed;g=f.getFbeventsModules("SignalsFBEventsOpenBridgeConfigTypedef");var k=f.getFbeventsModules("SignalsFBEventsParallelFireConfigTypedef"),m=f.getFbeventsModules("SignalsFBEventsLocalComputationConfigTypedef"),o=f.getFbeventsModules("signalsFBEventsCoercePixelID"),p=f.getFbeventsModules("signalsFBEventsCoerceBatchingConfig"),q=f.getFbeventsModules("signalsFBEventsCoerceAutomaticMatchingConfig"),r=f.getFbeventsModules("signalsFBEventsCoerceInferedEventsConfig"),s=f.getFbeventsModules("SignalsFBEventsLogging"),t=s.logError,u="global",v={automaticMatching:q,openbridge:g,batching:p,inferredEvents:r,microdata:c,prohibitedSources:b,unwantedData:d,dataProcessingOptions:e,parallelfire:k,localcomputation:m};s=function(){function b(){n(this,b),this._configStore={automaticMatching:{},batching:{},inferredEvents:{},microdata:{},prohibitedSources:{},unwantedData:{},dataProcessingOptions:{},openbridge:{},parallelfire:{},localcomputation:{}}}h(b,[{key:"set",value:function(){}},{key:"setExperimental",value:function(){}},{key:"get",value:function(){}},{key:"getWithGlobalFallback",value:function(){}},{key:"getAutomaticMatchingConfig",value:function(a){t(new Error("Calling legacy api getAutomaticMatchingConfig"));return this.get(a,"automaticMatching")}},{key:"getInferredEventsConfig",value:function(){}}]);return b}();l.exports=new s()})();return l.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsDataProcessingOptionsConfigTypedef",function(){});f.ensureModuleRegistered("SignalsFBEventsEvents",function(){});f.ensureModuleRegistered("SignalsFBEventsExperimentNames",function(){});f.ensureModuleRegistered("SignalsFBEventsExperimentsTypedef",function(){});f.ensureModuleRegistered("SignalsFBEventsFBQ",function(){return function(g,i,j,k){var l={exports:{}};l.exports;(function(){"use strict";var a=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},b=f.getFbeventsModules("SignalsEventValidation"),c=f.getFbeventsModules("SignalsFBEventsConfigStore"),d=f.getFbeventsModules("SignalsFBEventsEvents"),e=d.configLoaded,i=f.getFbeventsModules("SignalsFBEventsFireLock"),j=f.getFbeventsModules("SignalsFBEventsJSLoader");d=f.getFbeventsModules("SignalsFBEventsLogging");var k=f.getFbeventsModules("SignalsFBEventsOptIn"),o=f.getFbeventsModules("SignalsFBEventsUtils"),p=f.getFbeventsModules("signalsFBEventsGetIsIosInAppBrowser"),q=f.getFbeventsModules("signalsFBEventsSendEvent"),r=o.each,s=o.keys,t=o.map,u=o.some,v=d.logError,w=d.logUserError,x={AutomaticMatching:!0,AutomaticMatchingForPartnerIntegrations:!0,CommonIncludes:!0,FirstPartyCookies:!0,IWLBootstrapper:!0,IWLParameters:!0,InferredEvents:!0,Microdata:!0,MicrodataJsonLd:!0,OpenBridge:!0,ParallelFire:!0,ProhibitedSources:!0,Timespent:!0,UnwantedData:!0,LocalComputation:!0,IABPCMAEBridge:!0},y={Track:0,TrackCustom:4,TrackSingle:1,TrackSingleCustom:2,TrackSingleSystem:3,TrackSystem:5};o=["InferredEvents","Microdata"];var z={AutomaticSetup:o},A={AutomaticMatching:["inferredevents","identity"],AutomaticMatchingForPartnerIntegrations:["automaticmatchingforpartnerintegrations"],CommonIncludes:["commonincludes"],FirstPartyCookies:["cookie"],IWLBootstrapper:["iwlbootstrapper"],IWLParameters:["iwlparameters","inferredevents"],InferredEvents:["inferredevents","identity"],Microdata:["microdata","identity"],MicrodataJsonLd:["jsonld_microdata"],OpenBridge:["openbridge"],ParallelFire:["parallelfire"],ProhibitedSources:["prohibitedsources"],Timespent:["timespent"],UnwantedData:["unwanteddata"],LocalComputation:["localcomputation"],IABPCMAEBridge:["iabpcmaebridge"]};function(){}var C=function(a,b,c,d){return d==""?j.CONFIG.CDN_BASE_URL+"signals/config/"+a+"?v="+b+"&r="+c:j.CONFIG.CDN_BASE_URL+"signals/config/"+a+"?v="+b+"&r="+c+"&domain="+d};function(){}d=function(){function(){}h(d,[{key:"optIn",value:function(){}},{key:"optOut",value:function(){}},{key:"consent",value:function(){}},{key:"setUserProperties",value:function(){}},{key:"trackSingle",value:function(){}},{key:"trackSingleCustom",value:function(){}},{key:"trackSingleSystem",value:function(){}},{key:"trackSingleGeneric",value:function(){}},{key:"_validateSend",value:function(){}},{key:"_argsHasAnyUserData",value:function(){}},{key:"fire",value:function(a){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;this._validateSend(a,b);if(this._argsHasAnyUserData(a)&&!this.fbq.loadPlugin("identity")||this.locks.isLocked()){g.fbq("fire",a);return this}var c=this.fbq.getEventCustomParameters(this.getPixel(a.pixelId),a.eventName,a.customData),d=a.eventData.eventID;c.append("eid",d);var e=a.customParameters;e&&r(s(e),function(){});q({customData:a.customData,customParams:c,eventName:a.eventName,id:a.pixelId,piiTranslator:null});return this}},{key:"callMethod",value:function(){}},{key:"getDefaultSendData",value:function(){}},{key:"getOptedInPixels",value:function(){}},{key:"getPixel",value:function(a){return this.pixelsByID[a]}},{key:"loadConfig",value:function(a){if(this.fbq.disableConfigLoading===!0||Object.prototype.hasOwnProperty.call(this.configsLoaded,a))return;this.locks.lockConfig(a);(!this.fbq.pendingConfigs||u(this.fbq.pendingConfigs,function(b){return b===a})===!1)&&D(a,this.VERSION,this.RELEASE_SEGMENT!=null?this.RELEASE_SEGMENT:"stable",p()===!0?g.location.origin:"")}},{key:"configLoaded",value:function(){}}]);return d}();l.exports=d})();return l.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsFiredEvent",function(){});f.ensureModuleRegistered("SignalsFBEventsFireLock",function(){});f.ensureModuleRegistered("SignalsFBEventsGetCustomParametersEvent",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsBaseEvent"),b=f.getFbeventsModules("signalsFBEventsCoercePixel");function c(a,c,d){a=b(a);c=c!=null&&typeof c==="string"?c:null;d=d instanceof CustomData?d:null;return a!=null&&c!=null?[a,c,d]:null}a=new a(c);k.exports=a})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("signalsFBEventsGetIsChrome",function(){});f.ensureModuleRegistered("signalsFBEventsGetIsIosInAppBrowser",function(){});f.ensureModuleRegistered("SignalsFBEventsGetIWLParametersEvent",function(){});f.ensureModuleRegistered("signalsFBEventsInjectMethod",function(){});f.ensureModuleRegistered("SignalsFBEventsIWLBootStrapEvent",function(){});f.ensureModuleRegistered("SignalsFBEventsJSLoader",function(){});f.ensureModuleRegistered("SignalsFBEventsLegacyExperimentGroupsTypedef",function(){});f.ensureModuleRegistered("SignalsFBEventsLocalComputationConfigTypedef",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsTyped");a=a.Typed;a=a.objectWithFields({conversionBitMappings:a.arrayOf(a.objectWithFields({eventName:a.allowNull(a.string()),conversionBit:a.number(),eventPriority:a.number(),customConversionId:a.allowNull(a.number()),minValueOptimizationBucket:a.allowNull(a.number()),maxValueOptimizationBucket:a.allowNull(a.number())})),eventRulesMappings:a.arrayOf(a.objectWithFields({ruleGroupId:a.number(),derivedEventName:a.string(),transforms:a.number(),condition:a.string()})),customConversionRulesMappings:a.arrayOf(a.objectWithFields({conversionId:a.number(),conversionRule:a.string()})),currencyRateMappings:a.arrayOf(a.objectWithFields({quoteCurrency:a.string(),rate:a.number()}))});k.exports=a})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsLogging",function(){});f.ensureModuleRegistered("signalsFBEventsMakeSafe",function(){});f.ensureModuleRegistered("SignalsFBEventsMicrodataConfigTypedef",function(){});f.ensureModuleRegistered("SignalsFBEventsMobileAppBridge",function(){});f.ensureModuleRegistered("SignalsFBEventsNetworkConfig",function(){});f.ensureModuleRegistered("SignalsFBEventsOpenBridgeConfigTypedef",function(){});f.ensureModuleRegistered("SignalsFBEventsOptIn",function(){});f.ensureModuleRegistered("SignalsFBEventsParallelFireConfigTypedef",function(){});f.ensureModuleRegistered("SignalsFBEventsPIIAutomatchedEvent",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsBaseEvent"),b=f.getFbeventsModules("signalsFBEventsCoercePixel");function c(a){a=b(a);return a!=null?[a]:null}a=new a(c);k.exports=a})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsPIIConflictingEvent",function(){});f.ensureModuleRegistered("SignalsFBEventsPIIInvalidatedEvent",function(){});f.ensureModuleRegistered("SignalsFBEventsPlugin",function(){});f.ensureModuleRegistered("SignalsFBEventsPluginLoadedEvent",function(){});f.ensureModuleRegistered("SignalsFBEventsPluginManager",function(){});f.ensureModuleRegistered("SignalsFBEventsProhibitedSourcesTypedef",function(){});f.ensureModuleRegistered("SignalsFBEventsQE",function(){});f.ensureModuleRegistered("signalsFBEventsResolveLegacyArguments",function(){});f.ensureModuleRegistered("signalsFBEventsSendBatch",function(){});f.ensureModuleRegistered("signalsFBEventsSendBeacon",function(){});f.ensureModuleRegistered("signalsFBEventsSendEvent",function(){});f.ensureModuleRegistered("signalsFBEventsSendFormPOST",function(){});f.ensureModuleRegistered("signalsFBEventsSendGET",function(){});f.ensureModuleRegistered("signalsFBEventsSendXHR",function(){});f.ensureModuleRegistered("SignalsFBEventsSetEventIDEvent",function(){});f.ensureModuleRegistered("SignalsFBEventsSetIWLExtractorsEvent",function(){});f.ensureModuleRegistered("SignalsFBEventsTelemetry",function(){});f.ensureModuleRegistered("SignalsFBEventsTyped",function(){});f.ensureModuleRegistered("SignalsFBEventsTypeVersioning",function(){});f.ensureModuleRegistered("SignalsFBEventsUnwantedDataTypedef",function(){});f.ensureModuleRegistered("SignalsFBEventsUtils",function(){});f.ensureModuleRegistered("SignalsFBEventsValidateCustomParametersEvent",function(){return function(g,h,i,j){var k={exports:{}};k.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsBaseEvent"),b=f.getFbeventsModules("SignalsFBEventsTyped"),c=b.coerce,d=b.Typed,e=f.getFbeventsModules("signalsFBEventsCoercePixel");b=f.getFbeventsModules("SignalsFBEventsCoercePrimitives");b.coerceString;function g(){for(var a=arguments.length,b=Array(a),f=0;f<a;f++)b[f]=arguments[f];return c(d.tuple([e,d.object(),d.string()]),b)}b=new a(g);k.exports=b})();return k.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsValidateUrlParametersEvent",function(){});f.ensureModuleRegistered("SignalsParamList",function(){});f.ensureModuleRegistered("SignalsFBEvents.plugins.commonincludes",function(){});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.commonincludes");f.registerPlugin&&f.registerPlugin("fbevents.plugins.commonincludes",e.exports);f.ensureModuleRegistered("fbevents.plugins.commonincludes",function(){return e.exports})})()})(window,document,location,history);
(function(){})(window,document,location,history);
(function(){})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;var g=function(){}();function(){}function(){}f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});f.ensureModuleRegistered("SignalsFBEvents",function(){return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var f=a.fbq;f.execStart=a.performance&&typeof a.performance.now==="function"?a.performance.now():null;var j=f.getFbeventsModules("SignalsFBEventsNetworkConfig"),k=f.getFbeventsModules("SignalsFBEventsQE"),l=f.getFbeventsModules("SignalsParamList"),m=f.getFbeventsModules("signalsFBEventsSendEvent"),n=f.getFbeventsModules("SignalsFBEventsUtils"),o=f.getFbeventsModules("SignalsFBEventsLogging"),p=f.getFbeventsModules("SignalsEventValidation"),q=f.getFbeventsModules("SignalsFBEventsFBQ"),r=f.getFbeventsModules("SignalsFBEventsJSLoader"),s=f.getFbeventsModules("SignalsFBEventsFireLock"),t=f.getFbeventsModules("SignalsFBEventsMobileAppBridge"),u=f.getFbeventsModules("signalsFBEventsInjectMethod"),v=f.getFbeventsModules("signalsFBEventsMakeSafe"),w=f.getFbeventsModules("signalsFBEventsResolveLegacyArguments"),x=f.getFbeventsModules("SignalsFBEventsPluginManager"),y=f.getFbeventsModules("signalsFBEventsCoercePixelID"),z=f.getFbeventsModules("SignalsFBEventsEvents"),A=f.getFbeventsModules("SignalsFBEventsTyped"),B=A.coerce,aa=A.Typed,C=n.each;A=n.FBSet;var D=n.isEmptyObject,E=n.isPlainObject,F=n.isNumber,G=n.keys;n=z.execEnd;var H=z.fired,I=z.getCustomParameters,ba=z.iwlBootstrap,J=z.piiInvalidated,ca=z.setIWLExtractors,K=z.validateCustomParameters,L=z.validateUrlParameters,da=o.logError,M=o.logUserError,N=s.global,O=-1,ea=Array.prototype.slice,P=Object.prototype.hasOwnProperty,Q=c.href,R=!1,fa=!1,S=[],T={},ga;b.referrer;var U={PageView:new A(),PixelInitialized:new A()},V=new q(f,T),W=new x(V,N),ha=new A(["eid"]);function(){}function(){}function(){}f._initHandlers=[];f._initsDone={};function(){}function(){}function(){}function(){}function(){}function(){}function(){}function pa(a,b,c){var d=new l(f.piiTranslator);try{d.append("ud",a&&a.userData||{},!0),d.append("udff",a&&a.userDataFormFields||{},!0)}catch(b){J.trigger(a)}d.append("v",f.version);f._releaseSegment&&d.append("r",f._releaseSegment);d.append("a",a&&a.agent?a.agent:f.agent);a&&(d.append("ec",a.eventCount),a.eventCount++);b=I.trigger(a,b,c);C(b,function(){});d.append("it",O);c=a&&a.codeless==="false";d.append("coo",c);b=V.pluginConfig.getWithGlobalFallback(a?a.id:null,"dataProcessingOptions");if(b!=null){c=b.dataProcessingCountry;a=b.dataProcessingOptions;b=b.dataProcessingState;d.append("dpo",a.join(","));d.append("dpoco",c);d.append("dpost",b)}return d}function(){}function(){}N.onUnlocked(function(){qa()});f.pixelId&&(R=!0,Y(f.pixelId));(R&&fa||a.fbq!==a._fbq)&&M({type:"CONFLICTING_VERSIONS"});S.length>1&&M({type:"MULTIPLE_PIXELS"});function(){}H.listenOnce(function(){ra()});function(){}function ta(){return{pixelInitializationTime:O,pixels:S}}function(){}ua(a.fbq);qa();e.exports={doExport:ua};n.trigger()})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents");f.registerPlugin&&f.registerPlugin("fbevents",e.exports);f.ensureModuleRegistered("fbevents",function(){return e.exports})})()})(window,document,location,history);
fbq.registerPlugin("global_config", {__fbEventsPlugin: 1, plugin: function(){}