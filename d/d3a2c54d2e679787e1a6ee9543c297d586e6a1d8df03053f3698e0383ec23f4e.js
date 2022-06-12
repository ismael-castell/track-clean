!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.amplitude=t()}(this,function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}function(){}function(){}function o(e){try{return decodeURIComponent(e)}catch(t){A("error `decode(%o)` - %o",e,t)}}function i(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function a(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function u(e){var t=this.__data__=new le(e);this.size=t.size}function(){}function p(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function(){}function(){}function d(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}function(){}var g,v="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},y=(e(function(){}),{DEFAULT_INSTANCE:"$default_instance",API_VERSION:2,MAX_STRING_LENGTH:4096,MAX_PROPERTY_KEYS:1e3,IDENTIFY_EVENT:"$identify",LAST_EVENT_ID:"amplitude_lastEventId",LAST_EVENT_TIME:"amplitude_lastEventTime",LAST_IDENTIFY_ID:"amplitude_lastIdentifyId",LAST_SEQUENCE_NUMBER:"amplitude_lastSequenceNumber",SESSION_ID:"amplitude_sessionId",DEVICE_ID:"amplitude_deviceId",OPT_OUT:"amplitude_optOut",USER_ID:"amplitude_userId",COOKIE_TEST:"amplitude_cookie_test",REVENUE_EVENT:"revenue_amount",REVENUE_PRODUCT_ID:"$productId",REVENUE_QUANTITY:"$quantity",REVENUE_PRICE:"$price",REVENUE_REVENUE_TYPE:"$revenueType",AMP_DEVICE_ID_PARAM:"amp_device_id"}),m={encode:function(){},decode:function(){}},_={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(){},_encode:function(){},decode:function(){},_decode:function(){}},b=e(function(){}),w=1e3,I=60*w,E=60*I,S=24*E,C=365.25*S,O=function(){},N=e(function(e,t){function n(e){function(){}var o;return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),n.destroy=r,"function"==typeof t.init&&t.init(n),t.instances.push(n),n}function(){}(t=e.exports=n.debug=n.default=n).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(){},t.enabled=function(){},t.humanize=O,t.instances=[],t.names=[],t.skips=[],t.formatters={}}),A=e(function(){})("cookie"),T=function(){},j=e(function(){}),x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=Object.prototype.toString,P=function(e){switch(k.call(e)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===e?"null":void 0===e?"undefined":e!=e?"nan":e&&1===e.nodeType?"element":"undefined"!=typeof Buffer&&Buffer.isBuffer(e)?"buffer":void 0===(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e))?"undefined":x(e)},R="WARN",F={DISABLE:0,ERROR:1,WARN:2,INFO:3},U={error:function(e){R>=F.ERROR&&D(e)},warn:function(e){R>=F.WARN&&D(e)},info:function(){}},D=function(){},q=function(){},M=function(){},L=["null","nan","undefined","function","arguments","regexp","element"],V=function(){},z=function(){},G={setLogLevel:function(e){R=F[e]||R},getLogLevel:function(){return R},log:U,isEmptyString:function(e){return!e||0===e.length},getQueryParam:function(){},sessionStorageEnabled:function(){},truncate:function(){},validateGroups:function(){},validateInput:function(){},validateProperties:M},B={expirationDays:void 0,domain:void 0},K=function(){},J=function(){},$=function(){},W=function(){},Y=function(){},Q={reset:function(){},options:function(){},get:J,set:$,remove:Y};if(function(){}())g=window.localStorage;else if(window.globalStorage)try{g=window.globalStorage[window.location.hostname]}catch(e){}else{var X=document.createElement("div"),H="localStorage";X.style.display="none",document.getElementsByTagName("head")[0].appendChild(X),X.addBehavior&&(X.addBehavior("#default#userdata"),g={length:0,setItem:function(){},getItem:function(){},removeItem:function(){},clear:function(){},key:function(){}},X.load(H),g.length=X.XMLDocument.documentElement.attributes.length)}g||(g={length:0,setItem:function(e,t){},getItem:function(e){},removeItem:function(e){},clear:function(){},key:function(e){}});var Z=g,ee=function(){this.storage=null};ee.prototype._cookiesEnabled=function(){},ee.prototype.getStorage=function(){};var te=function(){this.userPropertiesOperations={},this.properties=[]};te.prototype.add=function(){},te.prototype.append=function(e,t){return this._addOperation("$append",e,t),this},te.prototype.clearAll=function(){},te.prototype.prepend=function(e,t){return this._addOperation("$prepend",e,t),this},te.prototype.set=function(e,t){return this._addOperation("$set",e,t),this},te.prototype.setOnce=function(){},te.prototype.unset=function(){},te.prototype._addOperation=function(){};var ne=e(function(e){!function(t){function n(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function(){}function o(e,t,n,o,i,s,a){return r(t&n|~t&o,e,t,i,s,a)}function i(e,t,n,o,i,s,a){return r(t&o|n&~o,e,t,i,s,a)}function s(e,t,n,o,i,s,a){return r(t^n^o,e,t,i,s,a)}function a(e,t,n,o,i,s,a){return r(n^(t|~o),e,t,i,s,a)}function(){}function c(e){var t,n="",r=32*e.length;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function p(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=8*e.length;for(t=0;t<r;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function l(e){var t,n,r="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),r+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return r}function f(e){return unescape(encodeURIComponent(e))}function d(e){return function(e){return c(u(p(e),8*e.length))}(f(e))}function h(e,t){return function(e,t){var n,r,o=p(e),i=[],s=[];for(i[15]=s[15]=void 0,o.length>16&&(o=u(o,8*e.length)),n=0;n<16;n+=1)i[n]=909522486^o[n],s[n]=1549556828^o[n];return r=u(i.concat(p(t)),512+8*t.length),c(u(s.concat(r),640))}(f(e),f(t))}function(){}e.exports?e.exports=g:t.md5=g}(v)}),re=function(){this.__data__=[],this.size=0},oe=function(e,t){return e===t||e!=e&&t!=t},ie=function(e,t){for(var n=e.length;n--;)if(oe(e[n][0],t))return n;return-1},se=Array.prototype.splice,ae=function(e){var t=this.__data__,n=ie(t,e);return!(n<0||(n==t.length-1?t.pop():se.call(t,n,1),--this.size,0))},ue=function(e){var t=this.__data__,n=ie(t,e);return n<0?void 0:t[n][1]},ce=function(e){return ie(this.__data__,e)>-1},pe=function(e,t){var n=this.__data__,r=ie(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};i.prototype.clear=re,i.prototype.delete=ae,i.prototype.get=ue,i.prototype.has=ce,i.prototype.set=pe;var le=i,fe=function(){this.__data__=new le,this.size=0},de=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},he=function(e){return this.__data__.get(e)},ge=function(e){return this.__data__.has(e)},ve="object"==typeof v&&v&&v.Object===Object&&v,ye="object"==typeof self&&self&&self.Object===Object&&self,me=ve||ye||Function("return this")(),_e=me.Symbol,be=Object.prototype,we=be.hasOwnProperty,Ie=be.toString,Ee=_e?_e.toStringTag:void 0,Se=function(e){var t=we.call(e,Ee),n=e[Ee];try{e[Ee]=void 0;var r=!0}catch(e){}var o=Ie.call(e);return r&&(t?e[Ee]=n:delete e[Ee]),o},Ce=Object.prototype.toString,Oe=function(e){return Ce.call(e)},Ne="[object Null]",Ae="[object Undefined]",Te=_e?_e.toStringTag:void 0,je=function(e){return null==e?void 0===e?Ae:Ne:Te&&Te in Object(e)?Se(e):Oe(e)},xe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ke="[object AsyncFunction]",Pe="[object Function]",Re="[object GeneratorFunction]",Fe="[object Proxy]",Ue=function(e){if(!xe(e))return!1;var t=je(e);return t==Pe||t==Re||t==ke||t==Fe},De=me["__core-js_shared__"],qe=function(){var e=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Me=function(e){return!!qe&&qe in e},Le=Function.prototype.toString,Ve=function(e){if(null!=e){try{return Le.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ze=/^\[object .+?Constructor\]$/,Ge=Function.prototype,Be=Object.prototype,Ke=Ge.toString,Je=Be.hasOwnProperty,$e=RegExp("^"+Ke.call(Je).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=function(e){return!(!xe(e)||Me(e))&&(Ue(e)?$e:ze).test(Ve(e))},Ye=function(e,t){return null==e?void 0:e[t]},Qe=function(e,t){var n=Ye(e,t);return We(n)?n:void 0},Xe=Qe(me,"Map"),He=Qe(Object,"create"),Ze=function(){this.__data__=He?He(null):{},this.size=0},et=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},tt="__lodash_hash_undefined__",nt=Object.prototype.hasOwnProperty,rt=function(e){var t=this.__data__;if(He){var n=t[e];return n===tt?void 0:n}return nt.call(t,e)?t[e]:void 0},ot=Object.prototype.hasOwnProperty,it=function(e){var t=this.__data__;return He?void 0!==t[e]:ot.call(t,e)},st="__lodash_hash_undefined__",at=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=He&&void 0===t?st:t,this};s.prototype.clear=Ze,s.prototype.delete=et,s.prototype.get=rt,s.prototype.has=it,s.prototype.set=at;var ut=s,ct=function(){this.size=0,this.__data__={hash:new ut,map:new(Xe||le),string:new ut}},pt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},lt=function(e,t){var n=e.__data__;return pt(t)?n["string"==typeof t?"string":"hash"]:n.map},ft=function(e){var t=lt(this,e).delete(e);return this.size-=t?1:0,t},dt=function(e){return lt(this,e).get(e)},ht=function(e){return lt(this,e).has(e)},gt=function(e,t){var n=lt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};a.prototype.clear=ct,a.prototype.delete=ft,a.prototype.get=dt,a.prototype.has=ht,a.prototype.set=gt;var vt=a,yt=200,mt=function(e,t){var n=this.__data__;if(n instanceof le){var r=n.__data__;if(!Xe||r.length<yt-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new vt(r)}return n.set(e,t),this.size=n.size,this};u.prototype.clear=fe,u.prototype.delete=de,u.prototype.get=he,u.prototype.has=ge,u.prototype.set=mt;var _t=u,bt=function(){try{var e=Qe(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),wt=function(e,t,n){"__proto__"==t&&bt?bt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},It=function(e,t,n){(void 0===n||oe(e[t],n))&&(void 0!==n||t in e)||wt(e,t,n)},Et=function(e){return function(t,n,r){for(var o=-1,i=Object(t),s=r(t),a=s.length;a--;){var u=s[e?a:++o];if(!1===n(i[u],u,i))break}return t}}(),St=e(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n?me.Buffer:void 0,i=o?o.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=i?i(n):new e.constructor(n);return e.copy(r),r}}),Ct=me.Uint8Array,Ot=function(e){var t=new e.constructor(e.byteLength);return new Ct(t).set(new Ct(e)),t},Nt=function(e,t){var n=t?Ot(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)},At=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t},Tt=Object.create,jt=function(){function e(){}return function(t){if(!xe(t))return{};if(Tt)return Tt(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),xt=function(e,t){return function(n){return e(t(n))}},kt=xt(Object.getPrototypeOf,Object),Pt=Object.prototype,Rt=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Pt)},Ft=function(e){return"function"!=typeof e.constructor||Rt(e)?{}:jt(kt(e))},Ut=function(e){return null!=e&&"object"==typeof e},Dt="[object Arguments]",qt=function(e){return Ut(e)&&je(e)==Dt},Mt=Object.prototype,Lt=Mt.hasOwnProperty,Vt=Mt.propertyIsEnumerable,zt=qt(function(){return arguments}())?qt:function(e){return Ut(e)&&Lt.call(e,"callee")&&!Vt.call(e,"callee")},Gt=Array.isArray,Bt=9007199254740991,Kt=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Bt},Jt=function(e){return null!=e&&Kt(e.length)&&!Ue(e)},$t=function(e){return Ut(e)&&Jt(e)},Wt=function(){return!1},Yt=e(function(){}),Qt="[object Object]",Xt=Function.prototype,Ht=Object.prototype,Zt=Xt.toString,en=Ht.hasOwnProperty,tn=Zt.call(Object),nn=function(e){if(!Ut(e)||je(e)!=Qt)return!1;var t=kt(e);if(null===t)return!0;var n=en.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Zt.call(n)==tn},rn={};rn["[object Float32Array]"]=rn["[object Float64Array]"]=rn["[object Int8Array]"]=rn["[object Int16Array]"]=rn["[object Int32Array]"]=rn["[object Uint8Array]"]=rn["[object Uint8ClampedArray]"]=rn["[object Uint16Array]"]=rn["[object Uint32Array]"]=!0,rn["[object Arguments]"]=rn["[object Array]"]=rn["[object ArrayBuffer]"]=rn["[object Boolean]"]=rn["[object DataView]"]=rn["[object Date]"]=rn["[object Error]"]=rn["[object Function]"]=rn["[object Map]"]=rn["[object Number]"]=rn["[object Object]"]=rn["[object RegExp]"]=rn["[object Set]"]=rn["[object String]"]=rn["[object WeakMap]"]=!1;var on=function(e){return Ut(e)&&Kt(e.length)&&!!rn[je(e)]},sn=function(e){return function(t){return e(t)}},an=e(function(){}),un=an&&an.isTypedArray,cn=un?sn(un):on,pn=Object.prototype.hasOwnProperty,ln=function(e,t,n){var r=e[t];pn.call(e,t)&&oe(r,n)&&(void 0!==n||t in e)||wt(e,t,n)},fn=function(e,t,n,r){var o=!n;n||(n={});for(var i=-1,s=t.length;++i<s;){var a=t[i],u=r?r(n[a],e[a],a,n,e):void 0;void 0===u&&(u=e[a]),o?wt(n,a,u):ln(n,a,u)}return n},dn=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},hn=9007199254740991,gn=/^(?:0|[1-9]\d*)$/,vn=function(){},yn=Object.prototype.hasOwnProperty,mn=function(e,t){var n=Gt(e),r=!n&&zt(e),o=!n&&!r&&Yt(e),i=!n&&!r&&!o&&cn(e),s=n||r||o||i,a=s?dn(e.length,String):[],u=a.length;for(var c in e)!t&&!yn.call(e,c)||s&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||vn(c,u))||a.push(c);return a},_n=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},bn=Object.prototype.hasOwnProperty,wn=function(e){if(!xe(e))return _n(e);var t=Rt(e),n=[];for(var r in e)("constructor"!=r||!t&&bn.call(e,r))&&n.push(r);return n},In=function(e){return Jt(e)?mn(e,!0):wn(e)},En=function(e){return fn(e,In(e))},Sn=function(){},Cn=c,On=function(e){return e},Nn=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)},An=Math.max,Tn=function(e,t,n){return t=An(void 0===t?e.length-1:t,0),function(){for(var r=arguments,o=-1,i=An(r.length-t,0),s=Array(i);++o<i;)s[o]=r[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=r[o];return a[t]=n(s),Nn(e,this,a)}},jn=function(e){return function(){return e}},xn=bt?function(e,t){return bt(e,"toString",{configurable:!0,enumerable:!1,value:jn(t),writable:!0})}:On,kn=800,Pn=16,Rn=Date.now,Fn=function(e){var t=0,n=0;return function(){var r=Rn(),o=Pn-(r-n);if(n=r,o>0){if(++t>=kn)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(xn),Un=function(e,t){return Fn(Tn(e,t,On),e+"")},Dn=function(e,t,n){if(!xe(n))return!1;var r=typeof t;return!!("number"==r?Jt(n)&&vn(t,n.length):"string"==r&&t in n)&&oe(n[t],e)},qn=function(e){return Un(function(t,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(i=e.length>3&&"function"==typeof i?(o--,i):void 0,s&&Dn(n[0],n[1],s)&&(i=o<3?void 0:i,o=1),t=Object(t);++r<o;){var a=n[r];a&&e(t,a,r,i)}return t})},Mn=qn(function(e,t,n){Cn(e,t,n)}),Ln=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Vn=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},zn={encode:f,stringify:f,decode:h,parse:h},Gn=function(){};Gn.prototype.send=function(){};var Bn=function(){this._price=null,this._productId=null,this._quantity=1,this._revenueType=null,this._properties=null};Bn.prototype.setProductId=function(){},Bn.prototype.setQuantity=function(){},Bn.prototype.setPrice=function(e){return"number"!==P(e)?G.log.error("Unsupported type for price: "+P(e)+", expecting number"):this._price=e,this},Bn.prototype.setRevenueType=function(){},Bn.prototype.setEventProperties=function(){},Bn.prototype._isValidRevenue=function(){},Bn.prototype._toJSONObject=function(){};var Kn=e(function(){}),Jn=function(){},$n={apiEndpoint:"api.amplitude.com",batchEvents:!1,cookieExpiration:3650,cookieName:"amplitude_id",deviceIdFromUrlParam:!1,domain:"",eventUploadPeriodMillis:3e4,eventUploadThreshold:30,forceHttps:!0,includeGclid:!1,includeReferrer:!1,includeUtm:!1,language:{language:navigator&&(navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage)||void 0}.language,logLevel:"WARN",optOut:!1,platform:"Web",savedMaxCount:1e3,saveEvents:!0,saveParamsReferrerOncePerSession:!0,sessionTimeout:18e5,trackingOptions:{city:!0,country:!0,device_model:!0,dma:!0,ip_address:!0,language:!0,os_name:!0,os_version:!0,platform:!0,region:!0,version_name:!0},unsentKey:"amplitude_unsent",unsentIdentifyKey:"amplitude_unsent_identify",uploadBatchSize:100},Wn=function(){};Wn.prototype.Identify=te,Wn.prototype.Revenue=Bn,Wn.prototype.init=function(e,t,n,r){if("string"!==P(e)||G.isEmptyString(e))G.log.error("Invalid apiKey. Please re-initialize with a valid apiKey");else try{this.options.apiKey=e,this._storageSuffix="_"+e+this._legacyStorageSuffix,Yn(this.options,n);var o=rr(this);if(this._apiPropertiesTrackingOptions=Object.keys(o).length>0?{tracking_options:o}:{},this.cookieStorage.options({expirationDays:this.options.cookieExpiration,domain:this.options.domain}),this.options.domain=this.cookieStorage.options().domain,this._instanceName===y.DEFAULT_INSTANCE&&Qn(this),Xn(this),this.options.deviceId="object"===P(n)&&"string"===P(n.deviceId)&&!G.isEmptyString(n.deviceId)&&n.deviceId||this.options.deviceIdFromUrlParam&&this._getDeviceIdFromUrlParam(this._getUrlParams())||this.options.deviceId||Jn()+"R",this.options.userId="string"===P(t)&&!G.isEmptyString(t)&&t||"number"===P(t)&&t.toString()||this.options.userId||null,this.options.saveEvents){this._unsentEvents=this._loadSavedUnsentEvents(this.options.unsentKey),this._unsentIdentifys=this._loadSavedUnsentEvents(this.options.unsentIdentifyKey);for(var i=0;i<this._unsentEvents.length;i++){var s=this._unsentEvents[i].event_properties,a=this._unsentEvents[i].groups;this._unsentEvents[i].event_properties=G.validateProperties(s),this._unsentEvents[i].groups=G.validateGroups(a)}for(var u=0;u<this._unsentIdentifys.length;u++){var c=this._unsentIdentifys[u].user_properties,p=this._unsentIdentifys[u].groups;this._unsentIdentifys[u].user_properties=G.validateProperties(c),this._unsentIdentifys[u].groups=G.validateGroups(p)}}var l=(new Date).getTime();(!this._sessionId||!this._lastEventTime||l-this._lastEventTime>this.options.sessionTimeout)&&(this._newSession=!0,this._sessionId=l,this.options.saveParamsReferrerOncePerSession&&this._trackParamsAndReferrer()),this.options.saveParamsReferrerOncePerSession||this._trackParamsAndReferrer(),this._lastEventTime=l,Zn(this),this._sendEventsIfReady()}catch(e){G.log.error(e)}finally{"function"===P(r)&&r(this)}},Wn.prototype._trackParamsAndReferrer=function(){};var Yn=function(){};Wn.prototype.runQueuedFunctions=function(){},Wn.prototype._apiKeySet=function(){},Wn.prototype._loadSavedUnsentEvents=function(){},Wn.prototype._removeFromLegacyStorage=function(){},Wn.prototype._parseSavedUnsentEventsString=function(){},Wn.prototype.isNewSession=function(){return this._newSession},Wn.prototype.getSessionId=function(){return this._sessionId},Wn.prototype.nextEventId=function(){return this._eventId++,this._eventId},Wn.prototype.nextIdentifyId=function(){return this._identifyId++,this._identifyId},Wn.prototype.nextSequenceNumber=function(){},Wn.prototype._unsentCount=function(){return this._unsentEvents.length+this._unsentIdentifys.length},Wn.prototype._sendEventsIfReady=function(){},Wn.prototype._getFromStorage=function(e,t){return e.getItem(t+this._storageSuffix)},Wn.prototype._getFromStorageLegacy=function(){},Wn.prototype._setInStorage=function(){};var Qn=function(){},Xn=function(){},Hn=function(){},Zn=function(){};Wn.prototype._initUtmData=function(e,t){e=e||this._getUrlParams();var n=function(){}(t=t||this.cookieStorage.get("__utmz"),e);er(this,n)};var er=function(){};Wn.prototype._getReferrer=function(){return document.referrer},Wn.prototype._getUrlParams=function(){return location.search},Wn.prototype._saveGclid=function(){},Wn.prototype._getDeviceIdFromUrlParam=function(e){return G.getQueryParam(y.AMP_DEVICE_ID_PARAM,e)},Wn.prototype._getReferringDomain=function(){},Wn.prototype._saveReferrer=function(){},Wn.prototype.saveEvents=function(){},Wn.prototype.setDomain=function(){},Wn.prototype.setUserId=function(){},Wn.prototype.setGroup=function(e,t){if(this._apiKeySet("setGroup()")&&G.validateInput(e,"groupType","string")&&!G.isEmptyString(e)){var n={};n[e]=t;var r=(new te).set(e,t);this._logEvent(y.IDENTIFY_EVENT,null,null,r.userPropertiesOperations,n,null,null)}},Wn.prototype.setOptOut=function(){},Wn.prototype.setSessionId=function(){},Wn.prototype.resetSessionId=function(){},Wn.prototype.regenerateDeviceId=function(){},Wn.prototype.setDeviceId=function(){},Wn.prototype.setUserProperties=function(){},Wn.prototype.clearUserProperties=function(){};var tr=function(){};Wn.prototype.identify=function(e,t){if(this._apiKeySet("identify()"))if("object"===P(e)&&e.hasOwnProperty("_q")&&(e=tr(new te,e)),e instanceof te){if(Object.keys(e.userPropertiesOperations).length>0)return this._logEvent(y.IDENTIFY_EVENT,null,null,e.userPropertiesOperations,null,null,t);"function"===P(t)&&t(0,"No request sent",{reason:"No user property operations"})}else G.log.error("Invalid identify input type. Expected Identify object but saw "+P(e)),"function"===P(t)&&t(0,"No request sent",{reason:"Invalid identify input type"});else"function"===P(t)&&t(0,"No request sent",{reason:"API key is not set"})},Wn.prototype.setVersionName=function(){},Wn.prototype._logEvent=function(e,t,n,r,o,i,s){if(Xn(this),e)if(this.options.optOut)"function"===P(s)&&s(0,"No request sent",{reason:"optOut is set to true"});else try{var a;a=e===y.IDENTIFY_EVENT?this.nextIdentifyId():this.nextEventId();var u=this.nextSequenceNumber(),c="number"===P(i)?i:(new Date).getTime();(!this._sessionId||!this._lastEventTime||c-this._lastEventTime>this.options.sessionTimeout)&&(this._sessionId=c),this._lastEventTime=c,Zn(this),r=r||{};var p=Mn({},this._apiPropertiesTrackingOptions);n=Mn(p,n||{}),t=t||{},o=o||{};var l={device_id:this.options.deviceId,user_id:this.options.userId,timestamp:c,event_id:a,session_id:this._sessionId||-1,event_type:e,version_name:nr(this,"version_name")?this.options.versionName||null:null,platform:nr(this,"platform")?this.options.platform:null,os_name:nr(this,"os_name")?this._ua.browser.name||null:null,os_version:nr(this,"os_version")?this._ua.browser.major||null:null,device_model:nr(this,"device_model")?this._ua.os.name||null:null,language:nr(this,"language")?this.options.language:null,api_properties:n,event_properties:G.truncate(G.validateProperties(t)),user_properties:G.truncate(G.validateProperties(r)),uuid:Jn(),library:{name:"amplitude-js",version:"4.4.0"},sequence_number:u,groups:G.truncate(G.validateGroups(o)),user_agent:this._userAgent};return e===y.IDENTIFY_EVENT?(this._unsentIdentifys.push(l),this._limitEventsQueued(this._unsentIdentifys)):(this._unsentEvents.push(l),this._limitEventsQueued(this._unsentEvents)),this.options.saveEvents&&this.saveEvents(),this._sendEventsIfReady(s)||"function"!==P(s)||s(0,"No request sent",{reason:"No events to send or upload queued"}),a}catch(e){G.log.error(e)}else"function"===P(s)&&s(0,"No request sent",{reason:"Missing eventType"})};var nr=function(){},rr=function(){};Wn.prototype._limitEventsQueued=function(){},Wn.prototype.logEvent=function(){},Wn.prototype.logEventWithTimestamp=function(e,t,n,r){return this._apiKeySet("logEvent()")?G.validateInput(e,"eventType","string")?G.isEmptyString(e)?("function"===P(r)&&r(0,"No request sent",{reason:"Missing eventType"}),-1):this._logEvent(e,t,null,null,null,n,r):("function"===P(r)&&r(0,"No request sent",{reason:"Invalid type for eventType"}),-1):("function"===P(r)&&r(0,"No request sent",{reason:"API key not set"}),-1)},Wn.prototype.logEventWithGroups=function(e,t,n,r){return this._apiKeySet("logEventWithGroups()")?G.validateInput(e,"eventType","string")?this._logEvent(e,t,null,null,n,null,r):("function"===P(r)&&r(0,"No request sent",{reason:"Invalid type for eventType"}),-1):("function"===P(r)&&r(0,"No request sent",{reason:"API key not set"}),-1)};var or=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};Wn.prototype.logRevenueV2=function(){},Wn.prototype.logRevenue=function(e,t,n){return this._apiKeySet("logRevenue()")&&or(e)&&(void 0===t||or(t))?this._logEvent(y.REVENUE_EVENT,{},{productId:n,special:"revenue_amount",quantity:t||1,price:e},null,null,null,null):-1},Wn.prototype.removeEvents=function(){};var ir=function(){};Wn.prototype.sendEvents=function(e){if(this._apiKeySet("sendEvents()"))if(this.options.optOut)"function"===P(e)&&e(0,"No request sent",{reason:"optOut is set to true"});else if(0!==this._unsentCount())if(this._sending)"function"===P(e)&&e(0,"No request sent",{reason:"Request already in progress"});else{this._sending=!0;var t=(this.options.forceHttps?"https":"https:"===window.location.protocol?"https":"http")+"://"+this.options.apiEndpoint+"/",n=Math.min(this._unsentCount(),this.options.uploadBatchSize),r=this._mergeEventsAndIdentifys(n),o=r.maxEventId,i=r.maxIdentifyId,s=JSON.stringify(r.eventsToSend),a=(new Date).getTime(),u={client:this.options.apiKey,e:s,v:y.API_VERSION,upload_time:a,checksum:ne(y.API_VERSION+this.options.apiKey+s+a)},c=this;new Gn(t,u).send(function(){})}else"function"===P(e)&&e(0,"No request sent",{reason:"No events to send"});else"function"===P(e)&&e(0,"No request sent",{reason:"API key not set"})},Wn.prototype._mergeEventsAndIdentifys=function(){},Wn.prototype.setGlobalUserProperties=function(e){this.setUserProperties(e)},Wn.prototype.__VERSION__="4.4.0";var sr=xt(Object.keys,Object),ar=Object.prototype.hasOwnProperty,ur=function(e){if(!Rt(e))return sr(e);var t=[];for(var n in Object(e))ar.call(e,n)&&"constructor"!=n&&t.push(n);return t},cr=function(e){return Jt(e)?mn(e):ur(e)},pr=Object.prototype.hasOwnProperty,lr=qn(function(e,t){if(Rt(t)||Jt(t))fn(t,cr(t),e);else for(var n in t)pr.call(t,n)&&ln(e,n,t[n])}),fr=function(){};fr.prototype.Identify=te,fr.prototype.Revenue=Bn,fr.prototype.getInstance=function(){},fr.prototype.init=function(){},fr.prototype.runQueuedFunctions=function(){},fr.prototype.isNewSession=function(){return this.getInstance().isNewSession()},fr.prototype.getSessionId=function(){return this.getInstance().getSessionId()},fr.prototype.nextEventId=function(){return this.getInstance().nextEventId()},fr.prototype.nextIdentifyId=function(){return this.getInstance().nextIdentifyId()},fr.prototype.nextSequenceNumber=function(){return this.getInstance().nextSequenceNumber()},fr.prototype.saveEvents=function(){this.getInstance().saveEvents()},fr.prototype.setDomain=function(e){this.getInstance().setDomain(e)},fr.prototype.setUserId=function(e){this.getInstance().setUserId(e)},fr.prototype.setGroup=function(e,t){this.getInstance().setGroup(e,t)},fr.prototype.setOptOut=function(e){this.getInstance().setOptOut(e)},fr.prototype.regenerateDeviceId=function(){this.getInstance().regenerateDeviceId()},fr.prototype.setDeviceId=function(e){this.getInstance().setDeviceId(e)},fr.prototype.setUserProperties=function(e){this.getInstance().setUserProperties(e)},fr.prototype.clearUserProperties=function(){this.getInstance().clearUserProperties()},fr.prototype.identify=function(e,t){this.getInstance().identify(e,t)},fr.prototype.setVersionName=function(e){this.getInstance().setVersionName(e)},fr.prototype.logEvent=function(e,t,n){return this.getInstance().logEvent(e,t,n)},fr.prototype.logEventWithGroups=function(e,t,n,r){return this.getInstance().logEventWithGroups(e,t,n,r)},fr.prototype.logRevenueV2=function(e){return this.getInstance().logRevenueV2(e)},fr.prototype.logRevenue=function(e,t,n){return this.getInstance().logRevenue(e,t,n)},fr.prototype.removeEvents=function(){}