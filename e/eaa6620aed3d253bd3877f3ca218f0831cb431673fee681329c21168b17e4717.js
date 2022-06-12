/*! header - v1.2.7 - 'production build' */!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=7)}([function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return a})),r.d(t,"b",(function(){return s})),r.d(t,"d",(function(){return c})),r.d(t,"f",(function(){return u}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function(){}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function s(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}function(){}Object.create;function(){}Object.create},function(e,t,r){"use strict";(function(e,n){r.d(t,"a",(function(){return d}));var o,i=r(0),a=void 0!==e&&"[object process]"===e.toString(),s="undefined"!=typeof window,c={},u={url:"about:blank"},l=function(e){void 0===e&&(e={});var t,r,o=n,a=(o.JSDOM?new o.JSDOM("<!doctype html><html><body></body></html>",e):o.window).window;return a.Object=Object,a.Math=Math,a.Promise=Promise,a.ffte={},a.ffte.site="techradar",o.window=a,o.document=a.document,o.navigator=Object(i.a)(Object(i.a)({},o.navigator),{userAgent:"node.js"}),o.requestAnimationFrame=function(e){return setTimeout(e,0)},o.cancelAnimationFrame=function(e){clearTimeout(e)},Object.defineProperty(a,"localStorage",{value:o.localStorage}),t=a,r=o,Object.defineProperties(r,Object(i.a)(Object(i.a)({},Object.getOwnPropertyDescriptors(t)),Object.getOwnPropertyDescriptors(r))),a},d=function(){};a&&(o=function(e){if(void 0===e&&(e={}),!a)throw new Error("You should not create a new mock environment outside of unit tests.");var t=0===Object.entries(e).length;return o=l(t?u:e),d()}())}).call(this,r(2),r(5))},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=s(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new h(e,t)),1!==u.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(){},function(){},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(){},function(e,t,r){"use strict";r.r(t);var n=r(1),o="background: #800020; color: #ffffff",i=Object(n.a)(),a=0,s=[],c={all:0,info:0,warn:0,error:0},u={all:[],info:[],warn:[],error:[]},l=function(e){return u.error.push(e)},d=function(e){return function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var l=Array.prototype.slice.call(r),d={id:a,timestamp:Date.now(),level:e,args:l};a+=1,c.all+=1,c[e]+=1,s.push(d),u.all.forEach((function(){})),u[e].forEach((function(t){t({type:"log-"+e,logItem:d})}));var f={info:"log",warn:"warn",error:"error"},p=f[e],h=Array.prototype.slice.call(r);h.unshift(o),h.unshift("%c CHAMPAGNE "),(t=i.console)[p].apply(t,h)}},f={info:d("info"),warn:d("warn"),error:d("error")},p=r(0);function h(e,t){var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0,i=r;o<i.length;o++){var a=i[o];if(!(a in t))return!1;if(e[a]!==t[a])return!1}return!0}function v(e,t,r){void 0===r&&(r="le");var n="",o=function(e){if(void 0===e.labels)return"";var t=Object.entries(e.labels).map((function(e){return e[0]+'="'+e[1]+'"'}));return 0===t.length?"":""+t.join(",")}(t);return o.length>0?(n+=e+"_count{"+o+"} "+t.value.count+"\n",n+=e+"_sum{"+o+"} "+t.value.sum+"\n"):(n+=e+"_count "+t.value.count+"\n",n+=e+"_sum "+t.value.sum+"\n"),Object.entries(t.value.entries).reduce((function(t,n){return o.length>0?t+=e+"_bucket{"+r+'="'+n[0]+'",'+o+"} "+n[1]+"\n":t+=e+"_bucket{"+r+'="'+n[0]+'"} '+n[1]+"\n",t}),n)}function m(e,t){return void 0===t&&(t=[]),e?t.find((function(t){return void 0!==t.labels&&h(t.labels,e)})):t[0]}var g=function(){function e(){this.data=[]}return e.prototype.get=function(e){return m(e,this.data)},e.prototype.set=function(e,t){var r=m(t,this.data);return r?r.value=e:this.data.push({labels:t,value:e}),this},e.prototype.collect=function(e){return null==e?this.data:this.data.filter((function(t){return h(e,t.labels||{})}))},e.prototype.resetAll=function(){var e=this;return this.data.forEach((function(t){e.reset(t.labels)})),this},e}(),b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(p.c)(t,e),t.prototype.inc=function(e){return this.add(1,e),this},t.prototype.add=function(e,t){if(e<0)throw new Error("Expected increment amount to be greater than -1. Received: "+e);var r=this.get(t);return this.set(r?r.value+e:e,t),this},t.prototype.reset=function(e){this.set(0,e)},t}(g),w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(p.c)(t,e),t.prototype.dec=function(e){var t=this.get(e);return this.set(t?t.value-1:0,e),this},t.prototype.sub=function(e,t){var r=this.get(t);return this.set(r?r.value-e:0,t),this},t}(b);function y(e){return{entries:e.reduce((function(){}),{"+Inf":0}),sum:0,count:0,raw:[]}}var O=function(e){function t(t){void 0===t&&(t=[]);var r=e.call(this)||this;return r.buckets=t.sort((function(){})),r.set(y(r.buckets)),r.observe=r.observe.bind(r),r}return Object(p.c)(t,e),t.prototype.observe=function(e,t){var r=this.get(t);null==r&&(r=this.set(y(this.buckets),t).get(t)),r.value.raw.push(e),r.value.entries["+Inf"]+=1;var n=function(e,t){if(t<e[e.length-1])for(var r=0;r<e.length;r+=1)if(t<=e[r])return r}(this.buckets,e);if(null!=n)for(var o=n;o<this.buckets.length;o+=1){var i=r.value.entries[this.buckets[o].toString()];r.value.entries[this.buckets[o].toString()]=i+1}return r.value.sum=r.value.raw.reduce((function(e,t){return e+t})),r.value.count+=1,this},t.prototype.reset=function(e){this.set(y(this.buckets),e)},t}(g),j=function(){function e(){this.data={counter:{},gauge:{},histogram:{}}}return e.prototype.validateInput=function(e,t,r,n){if(""===String(t))throw new Error("Metric name cannot be empty");if(-1===["counter","gauge","histogram"].indexOf(e))throw new Error("Unknown metric type "+e);if("string"!=typeof r&&null!=r)throw new Error("help must be string or undefined/null");if(e in this.data&&t in this.data[e])throw new Error("A metric with the name '"+t+"' already exists for type '"+e+"'");if(!Array.isArray(n)&&null!=n)throw new Error("buckets must be array or undefined/null")},e.prototype.create=function(e,t,r,n){var o;return void 0===r&&(r=""),void 0===n&&(n=[]),this.validateInput(e,t,r,n),"counter"===e?(o=new b,this.data.counter[t]={help:r,instance:o,type:e}):"gauge"===e?(o=new w,this.data.gauge[t]={help:r,instance:o,type:e}):(o=new O(n),this.data.histogram[t]={help:r,instance:o,type:e}),o},e.prototype.metrics=function(){return Object.values(this.data).reduce((function(e,t){return e+Object.entries(t).reduce((function(e,t){var r=t[0],n=t[1];return n.help.length>0&&(e+="# HELP "+r+" "+n.help+"\n"),e+="# TYPE "+r+" "+n.type+"\n",e+=Object.values(n.instance.data).reduce((function(e,t){var o,i,a;return e+("histogram"===n.type?v(r,t):(o=r,a=" "+(i=t).value.toString(),null==i.labels||0===Object.keys(i.labels).length?""+o+a+"\n":o+"{"+Object.entries(i.labels).map((function(){})).join(",")+"}"+a+"\n"))}),"")}),"")}),"")},e.prototype.reset=function(){return Object.values(this.data).forEach((function(){})),this},e.prototype.clear=function(){return this.data={counter:{},gauge:{},histogram:{}},this},e.prototype.get=function(e,t){var r=(null!=e?[this.data[e]]:Object.values(this.data)).find((function(e){return t in e}));return null!=r?r[t].instance:void 0},e}(),S=Object(n.a)(),x=function(e){return void 0===e&&(e=S.location.search),new URLSearchParams(e)},E=Object(n.a)().document.URL,P=Boolean(["local.fte","local.responsive","local.progressive","dev.fte","stage.fte","futureplc.engineering"].find((function(e){return E.indexOf(e)>-1}))),_="1.2.7".includes("Dev"),A=P||_,k=Object(n.a)(),T=function(e,t){var r="string"==typeof t?t:JSON.stringify(t);return k.navigator.sendBeacon(e,r)},N=function(){var e=Object(n.a)();return e.document.documentElement.clientWidth||e.document.body.clientWidth||e.innerWidth},C=function(){try{var e={width:N(),height:(r=Object(n.a)(),r.document.documentElement.clientHeight||r.document.body.clientHeight||r.innerHeight)},t=e.height;return{width:String(e.width),height:String(t)}}catch(e){return f.error(e),{width:"",height:""}}var r},M=function(){var e=N();return e>=700&&e<1e3?"tablet":e>=1e3?"desktop":"mobile"},I=r(3),D={ie:!0,edge:!0,safari:!0,chrome:!0,firefox:!0,"edge-chromium":"chrome",crios:"chrome","chromium-webview":"chrome",fxios:"firefox",ios:"safari","ios-webview":"safari"},W=["ie","edge","safari","firefox","chrome"],L=Object(n.a)(),U={env:"",device:"",browser:"",version:"1.2.7"},B=!1,F=!1;var R,z,V=!1,q=new j,$=q.create("counter","request","Request counter"),J=q.create("counter","load","Load counter"),G=q.create("counter","unload","Unload counter"),Y=q.create("counter","error","Error counter"),H=q.create("counter","amazon_error","Amazon error counter"),K=q.create("counter","adserver_error","AdServer error counter"),X=q.create("counter","jwplayer_error","JWPlayer error counter"),Q=function(){if(B&&F){var e=q.metrics();T("https://champagne-gateway.futureplc.com/push_metrics/",e)?(B=!1,q.reset()):f.error("Error pushing Champagne metrics data.")}},Z=function(){if(!V){var e=Object(p.a)({target:"champagne"},U);B=!0,G.inc(e)}Q()},ee=function(){var e=Object(p.a)({target:"champagne"},U);B=!0,$.inc(e)},te=function(){var e=Object(p.a)({target:"champagne"},U);V=!0,B=!0,J.inc(e)},re=function(){var e=Object(p.a)({target:"api"},U);B=!0,$.inc(e)},ne=function(){var e=Object(p.a)({target:"api"},U);B=!0,Y.inc(e)},oe=function(){var e=Object(p.a)({target:"demand"},U);B=!0,$.inc(e)},ie=function(){var e=Object(p.a)({target:"demand"},U);B=!0,Y.inc(e)},ae=function(){var e=Object(p.a)({target:"demand"},U);B=!0,K.inc(e)},se=function(){var e=Object(p.a)({target:"demand"},U);B=!0,H.inc(e)},ce=function(){var e=Object(p.a)({target:"demand"},U);B=!0,J.inc(e)},ue=function(){var e=Object(p.a)({target:"player"},U);B=!0,$.inc(e)},le=function(){var e=Object(p.a)({target:"player"},U);B=!0,Y.inc(e)},de=function(){var e=Object(p.a)({target:"player"},U);B=!0,X.inc(e)},fe=function(){var e=Object(p.a)({target:"player"},U);B=!0,J.inc(e)},pe=function(){U.env=A?"dev":"prod",U.device=M(),U.browser=function(e){var t=e.toLowerCase();return-1===W.indexOf(t)?"unknown browser":t}(function(){var e=Object(I.detect)(),t="other";if(null!==e){var r=e.name;if(r in D){var n=D[r];t=!0===n?r:n}}return t}())},he=((R=function(){var e,t;return pe(),e=Math.random()<.01,t=x().has("force_metrics"),F=e||t,L.setInterval(Q,1e4),L.addEventListener("pagehide",Z),L.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&Q()})),{recordFrameworkRequest:ee,recordFrameworkLoad:te,recordDemandAPIRequest:re,recordDemandAPIError:ne,recordDemandRequest:oe,recordAdServerDemandError:ae,recordAmazonDemandError:se,recordDemandError:ie,recordDemandSuccess:ce,recordPlayerRequest:ue,recordPlayerError:le,recordJWPlayerError:de,recordPlayerSuccess:fe}}()).recordFrameworkRequest(),Object(p.a)({},R)),ve=r(4),me=r.n(ve),ge=Object(n.a)(),be={Info:"info"},we={platform:"javascript",sdk:{name:"sentry.javascript.browser",packages:[{name:"future:sentry/minimal",version:"0.0.1"}],version:"5.20.1",integrations:["InboundFilters","FunctionToString","TryCatch","Breadcrumbs","UserAgent"]},request:{url:ge.location.href,headers:{"User-Agent":ge.navigator.userAgent}},extra:{arguments:[]}},ye=function(e){var t=new URL(e);return t.origin+"/api"+t.pathname+"/store/?sentry_key="+t.username+"&sentry_version=7"},Oe=function(){return(e=16,Math.floor(Math.random()*Math.floor(e))).toString(16);var e},je=function(){return"performance"in ge?(ge.performance.timing.navigationStart+ge.performance.now())/1e3:Date.now()/1e3},Se=function(e){return Boolean(null==z?void 0:z.denyUrls.find((function(t){return e.filename.match(t)})))},xe=function(e){var t;return Boolean(null===(t=null==z?void 0:z.allowUrls)||void 0===t?void 0:t.find((function(t){return e.filename.match(t)})))},Ee=function(e){void 0!==z?T(z.apiURL,e)||f.error("Sentry send failed"):f.warn("Error ignored because Sentry is not yet configured")},Pe={environment:"production",ignoreErrors:[],denyUrls:[],debug:!1},_e=!1,Ae=function(e){if(!("dsn"in e))throw new Error("You must provide a DSN to the Sentry init");if(!("release"in e))throw new Error("You must provide a release version to the Sentry init");var t,r;z=Object(p.a)(Object(p.a)(Object(p.a)({},Pe),e),{apiURL:ye(e.dsn)}),t=Math.random()<.01,r=x().has("force_sentry"),_e=t||r},ke={},Te=[],Ne=function(e){Te.push(Object(p.a)({timestamp:je()},e))},Ce=function(e){return{colno:e.columnNumber,filename:e.fileName,function:"undefined"===e.functionName?"?":e.functionName,lineno:e.lineNumber,in_app:!0}},Me=function(e){if(void 0!==z)if(_e){var t="string"==typeof e?e:e.message;if(z.ignoreErrors.find((function(e){return t.includes(e)})))f.warn("Error ignored because it appears in ignore error list");else{var r=function(e){var t,r;"string"==typeof e?(t=e,r=[]):(t=e.message,r=me.a.parse(e).map(Ce).reverse());return{type:"Error",value:t,stacktrace:{frames:r},mechanism:{handled:!0,type:"generic"}}}(e);if(r.stacktrace.frames.find(Se))f.warn("Error ignored because its URL is denied");else if(z.allowUrls&&r.stacktrace.frames.length>0&&!r.stacktrace.frames.find(xe))f.warn("Error ignored because its URL is not allowed");else{var n=Object(p.a)(Object(p.a)({level:"error"},we),{event_id:Array(32).fill(0).map(Oe).join(""),timestamp:je(),environment:z.environment,release:z.release,tags:ke,breadcrumbs:Te,exception:{values:[r]}});if(z.beforeSend){var o=z.beforeSend(n);if(!o)return void f.warn("Error ignored because beforeSend returned null");Ee(o)}else Ee(n)}}}else f.warn("Error ignored because of sample rate");else f.warn("Error ignored because Sentry is not yet configured")},Ie=["LinkedErrors","GlobalHandlers"],De=function(e){var t=e.type,r=e.stacktrace;return"error"===t.toLowerCase()&&r&&0!==r.length};Ae({dsn:"https://d0c0b062da6e4af4b3841ca1f4a75b81@o362810.ingest.sentry.io/5804785",environment:"production",debug:!1,release:"champagne@1.2.7",denyUrls:Object(p.f)([],[/graph\.facebook\.com/i,/connect\.facebook\.net\/en_US\/all\.js/i,/eatdifferent\.com\.woopra-ns\.com/i,/static\.woopra\.com\/js\/woopra\.js/i,/extensions\//i,/^chrome:\/\//i,/127\.0\.0\.1:4001\/isrunning/i,/webappstoolbarba\.texthelp\.com\//i,/metrics\.itunes\.apple\.com\.edgesuite\.net\//i]),allowUrls:Object(p.f)(Object(p.f)([],[/^https?:\/\/localhost:[0-9]+\/header\.dev\.js/,/^https?:\/\/vanilla\.futurecdn\.net\/pcgamer\/[0-9]+\/media\/js\/header\/header\.js/,/^https?:\/\/[^/]+\.dev\.fte[^/]+\/media\/js\/header\/header\.js/,/^https?:\/\/champagne\.futurenet\.com\/champagne\.js/,/^https?:\/\/champagne\.futurecdn\.net\/champagne\.js/]),[/^https?:\/\/c\.amazon-adsystem\.com\/aax2\/apstag\.js/,/^https?:\/\/securepubads\.g\.doubleclick.net\/tag\/js\/gpt\.js/,/^https?:\/\/cdn\.adsafeprotected\.com\/iasPET\.1\.js/,/^https?:\/\/js-sec\.indexww\.com\/ht\/p/]),beforeSend:function(e){if(!e.exception.values.find(De))return null;e.user;return Object(p.e)(e,["user"])},integrations:function(e){return e.filter((function(){}))}});var We,Le=function(e){Me(e)},Ue=function(e){var t=e.message,r=e.category,n=void 0===r?"ui":r,o=e.level;void 0!==t?Ne({category:n,message:t,level:void 0===o?be.Info:o}):f.error("You must provide a message to a Sentry breadcrumb")},Be=function(){Object(n.a)().__tcfapi=function(e,t,r){var n={cmpId:10,cmpVersion:23,gdprApplies:!0,tcfPolicyVersion:t,eventStatus:"tcloaded",cmpStatus:"loaded",tcString:"",isServiceSpecific:!0,useNonStandardStacks:!1,purposeOneTreatment:!1,publisherCC:"GB",outOfBand:{allowedVendors:{},disclosedVendors:{}},purpose:{consents:{},legitimateInterests:{}},vendor:{consents:{},legitimateInterests:{}},specialFeatureOptins:{},publisher:{consents:{},legitimateInterests:{},customPurpose:{consents:{},legitimateInterests:{}},restrictions:{}}};switch(e){case"addEventListener":case"getTCData":r(n,!0)}},Object(n.a)().__uspapi=function(e,t,r){switch(e){case"uspPing":r({mode:["GDPR","USP"],jurisdiction:["US"],location:"US",cmpLoaded:!0},!0);break;case"setUspDftData":case"getUSPData":r({version:t,uspString:"1YYY"},!0)}}},Fe=function(e){var t=Object(n.a)(),r=t.top,o=t;do{try{if(e in o)break}catch(e){}o=o.parent}while(o&&o!==r);return Boolean(o)&&e in o&&o[e]},Re=function(e,t,r){var o=new Promise((function(n,o){var i=Fe("__uspapi");i?i(e,t,(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n(),r.apply(void 0,e)})):o(new Error("__uspapi does not exist"))})),i=new Promise((function(e,t){Object(n.a)().setTimeout((function(){return t(new Error("CMP __uspapi timeout after 5000ms"))}),5e3)}));Promise.race([o,i]).catch((function(n){f.error(n),Be();var o=Fe("__uspapi");o&&o(e,t,r)}))},ze=function(){return new Promise((function(e){var t,r,o,i,a;t="addEventListener",r=2,o=function(){},i=new Promise((function(e,n){var i=Fe("__tcfapi");i?i(t,r,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];e(),o.apply(void 0,t)})):n(new Error("__tcfapi does not exist"))})),a=new Promise((function(e,t){Object(n.a)().setTimeout((function(){return t(new Error("CMP __tcfapi timeout after 5000ms"))}),5e3)})),Promise.race([i,a]).catch((function(e){f.error(e),Be();var n=Fe("__tcfapi");n&&n(t,r,o)}))}))},Ve=function(){return new Promise((function(){}))},qe=function(){return new Promise((function(e,t){Re("getUSPData",1,(function(r,n){r&&n&&Object.keys(r).includes("uspString")?e(r):t(new Error("Failed to get USP data, __uspapi getUSPData request failed"))}))}))},$e=function(e){return e&&function(e){if(Array.isArray(e))return e.includes("USP");return 2==(2&e)}(e.mode)&&e.jurisdiction&&e.jurisdiction.length>0&&e.location===e.jurisdiction[0]},Je=function(){return new Promise((function(e,t){new Promise((function(e,t){Re("uspPing",1,(function(){}))})).then((function(t){$e(t)?qe().catch((function(){})).then((function(e){return e.uspString?e:Ve().then(qe)})).then((function(t){e({askedForConsent:!0,consent:t.uspString,ccpaApplies:!0})})):e({askedForConsent:!0,consent:null,ccpaApplies:!1})})).catch((function(r){"__uspapi does not exist"===r.message?e({askedForConsent:!1,consent:null,ccpaApplies:!1}):t(r)}))}))},Ge={askedForConsent:!0,consent:{gdprApplies:!0,tcString:"AAAAAAA",tcfPolicyVersion:2,eventStatus:"tcloaded",cmpStatus:"stub",isServiceSpecific:!1,useNonStandardStacks:!1,publisherCC:"",purposeOneTreatment:!1,outOfBand:{allowedVendors:{},disclosedVendors:{}},purpose:{consents:{},legitimateInterests:{}},vendor:{consents:{},legitimateInterests:{}},specialFeatureOptins:{},publisher:{consents:{},legitimateInterests:{},customPurpose:{consents:{},legitimateInterests:{}},restrictions:{}}}},Ye=function(){return new Promise((function(e,t){x().has("mock_consent")?e(Ge):ze().then((function(){})).catch((function(r){"__tcfapi does not exist"===r.message?e({askedForConsent:!1,consent:null}):t(r)}))}))},He=function(){var e=Object(n.a)(),t=e.localStorage.getItem("chmp-uuid");if(null!==t)return t;var r="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=Math.floor(16*Math.random());return("x"===e?t:3&t|8).toString(16)}));return e.localStorage.setItem("chmp-uuid",r),r},Ke=function(e){var t={};return e.account&&(t.s=e.account),e.sizes&&(t.z=e.sizes),e.div&&(t.d=e.div),e.targeting?t.g=e.targeting:t.g={},e.refresh&&(t.refresh=e.refresh),t},Xe=function(){function e(){this.placement=null,this.refreshMode=null,this.location=null,this.pageTitle=null,this.personalizedAdsMode="allowed",this.gdprConsent=null,this.uspConsent=null,this.targeting=[],this.discovery=null,this.adunits=[],this.isVideo=!1}return e.prototype.setPlacement=function(e){return this.placement=e,this},e.prototype.setRefreshMode=function(){},e.prototype.setLocation=function(e){return this.location=e,this},e.prototype.setPageTitle=function(e){return this.pageTitle=e,this},e.prototype.setPersonalizedAdsMode=function(e){return["allowed","managed","blocked"].includes(e)&&(this.personalizedAdsMode=e),this},e.prototype.setGdprConsent=function(e){return this.gdprConsent=e,this},e.prototype.setUSPConsent=function(e){return this.uspConsent=e,this},e.prototype.setTargeting=function(e){return this.targeting=e,this},e.prototype.setDiscovery=function(e){return this.discovery=e,this},e.prototype.setAdunits=function(){},e.prototype.setIsVideo=function(e){return this.isVideo=e,this},e.prototype.execute=function(){return Object(p.b)(this,void 0,void 0,(function(){var e,t,r;return Object(p.d)(this,(function(n){return e=[["r",Math.round(1e3*Math.random())],["o",JSON.stringify(this.getState())],["uuid",He()]],null!=this.discovery&&e.push(["discovery",this.discovery]),this.isVideo&&e.push(["at","v"]),t=e.map((function(e){return e.join("=")})).join("&"),r="https://ads.servebom.com/ramp?"+t,[2,Promise.race([fetch(r,{credentials:"include"}).then((function(){})),new Promise((function(){}))])]}))}))},e.prototype.getState=function(){return{f:this.refreshMode?1:"",p:this.placement,l:this.location,tt:this.pageTitle,fs:0,t:(t=function(){},r=new Date,r.getFullYear()+"-"+t(r.getMonth()+1)+"-"+t(r.getDate())+" "+t(r.getHours())+":"+t(r.getMinutes())+":"+t(r.getSeconds())),tz:(new Date).getTimezoneOffset(),r:(e=C(),""===e.width?"":e.width+"x"+e.height),pam:this.personalizedAdsMode,gdprConsent:this.gdprConsent,ccpa:this.uspConsent,g:this.targeting,a:this.adunits,ex:[],identities:void 0};var e,t,r},e}(),Qe=function(e){var t=e.split("/");if(t.length>1)return t[t.length-2]+"/"+t[t.length-1]},Ze=function(e){return Object(p.b)(void 0,void 0,void 0,(function(){var t,r,o,i,a,s,c,u,l,d,f,h,v,m;return Object(p.d)(this,(function(g){switch(g.label){case 0:if(!(t=new URL(e).searchParams).has("iu"))throw new Error("Account is not defined in the ad tag");if(!(r=t.get("iu")))throw new Error("Account is empty in the ad tag");return o="video_content_"+Math.ceil(1e3*Math.random()),i={account:r,div:o,sizes:[540,304],targeting:{},refresh:1},[4,Promise.all([Ye(),Je()])];case 1:return a=g.sent(),s=a[0].consent,c=a[1],u=c.consent,l=c.ccpaApplies,d=!s||s.gdprApplies,f=(null==s?void 0:s.tcString)||null,h=(new Xe).setIsVideo(!0).setRefreshMode(!0).setLocation(encodeURIComponent(function(){var e=Object(n.a)();try{return e.context&&e.context.location&&e.context.location.href?e.context.location.href:e.top.document.location.href}catch(t){return e.document.referrer}}().replace("%",""))).setPageTitle(encodeURIComponent(document.title)).setPersonalizedAdsMode(d?"managed":"allowed").setTargeting([]).setAdunits([i]).setGdprConsent(f),l&&h.setUSPConsent(u),[4,h.execute()];case 2:return v=g.sent(),(m=(v.bids||[]).find((function(e){return e.divid===o})))?[2,Object(p.a)(Object(p.a)(Object(p.a)(Object(p.a)(Object(p.a)({},v.targeting||{}),m.adtargets||{}),{_vrg:m.ad_region,_cp:m.price,_pl:m.price_level,adunit:m.divid,_bd:m.type,_br:m.bidder.reportid,_wb:m.id,pos:"preroll"}),m.ad_url?{_vst:Qe(m.ad_url)}:{}),m.partner_uid_source?{_puids:m.partner_uid_source}:{})]:[2,{}]}}))}))},et=function(){return Object(p.b)(void 0,void 0,void 0,(function(){var e;return Object(p.d)(this,(function(t){switch(t.label){case 0:return[4,(r="793",Object(p.b)(void 0,void 0,void 0,(function(){var e,t,n;return Object(p.d)(this,(function(o){switch(o.label){case 0:return[4,ze()];case 1:return e=o.sent(),t=e.gdprApplies,n=e.vendor,[2,!1===t||r&&n&&n.consents&&n.consents[r]]}}))})))];case 1:if(!t.sent())throw new Error("Vendor not consented to");return[4,Object(p.b)(void 0,void 0,void 0,(function(){var e,t,r,o;return Object(p.d)(this,(function(i){return e=Object(n.a)(),(t=e.document.createElement("script")).id="amazon-script",t.src="//c.amazon-adsystem.com/aax2/apstag.js",r=function(t,r){(e.apstag||o).queue.push([t,r])},o={init:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];r("i",e)},fetchBids:function(){},setDisplayBids:function(){},targetingKeys:function(){return[]},queue:[]},e.apstag=o,[2,new Promise((function(r,n){t.onload=function(){r("success")},t.onerror=function(e){return n(e)},e.document.body.appendChild(t)}))]}))}))];case 2:if(t.sent(),void 0===(e=Object(n.a)()).apstag||null===e.apstag)throw new Error("window.apstag does not exist");return e.apstag.init({pubID:"3032",adServer:"googletag",deals:!0}),[2]}var r}))}))},tt=function(e){return Object(p.b)(void 0,void 0,void 0,(function(){var t,r,o,i,a,s,c,u,l,d;return Object(p.d)(this,(function(f){switch(f.label){case 0:if(!(t=new URL(e).searchParams).has("sz"))throw new Error("Sizes are not defined in the ad tag");if(!(r=t.get("sz")))throw new Error("Sizes are empty in the ad tag");return o=r.split("|").map((function(e){return e.split("x").map(Number)})),i=Object(n.a)(),c=5e3,u={slotID:a="videoSlot",mediaType:s="video",sizes:o},i.apstag?[3,2]:[4,et()];case 1:f.sent(),f.label=2;case 2:return l=new Promise((function(){})),d=new Promise((function(e,t){var r=Object(n.a)();r.apstag?r.apstag.fetchBids({slots:[u],timeout:c},(function(t){if(0!==t.length){var r=t.filter((function(e){return e.slotID===a&&e.mediaType===s})).reduce((function(){}),{});e(r)}else e({})})):t(new Error("window.apstag does not exist"))})),[2,Promise.race([l,d])]}}))}))},rt=Object(n.a)(),nt=function(e,t){return void 0===t&&(t={}),Object(p.b)(void 0,void 0,void 0,(function(){var r,n,o,i,a,s,c;return Object(p.d)(this,(function(u){switch(u.label){case 0:he.recordDemandRequest();try{r=new URL(e)}catch(t){return f.error('Given adTag cannot be parsed. Error: "'+t.message+'"'),he.recordDemandError(),[2,e]}return[4,Promise.all([Ze(e).catch((function(e){return f.error('Error retrieving AdServer demand. Error: "'+e.message+'"'),he.recordAdServerDemandError(),{}})),tt(e).catch((function(e){return f.error('Error retrieving Amazon demand. Error: "'+e.message+'"'),he.recordAmazonDemandError(),{}})),Object(p.b)(void 0,void 0,void 0,(function(){return Object(p.d)(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e,t){try{e(JSON.parse(rt.localStorage._pdfps||"[]").slice(0,250))}catch(e){t(new Error("Champagne failed to parse Permutive segments "+e))}}))];case 1:return[2,{permutive:e.sent().slice(0,250)}]}}))})).catch((function(e){return f.warn('Error retrieving Permutive segments. Error: "'+e.message+'"'),{}}))])];case 1:return n=u.sent(),o=r.searchParams.get("cust_params"),i=o?o.split("&").map((function(e){return e.split("=")})).reduce((function(e,t){var r,n=t[0],o=t[1];return Object(p.a)(Object(p.a)({},e),((r={})[n]=o,r))}),{}):{},a=n.reduce((function(){}),{}),s=Object.entries(Object(p.a)(Object(p.a)(Object(p.a)({},i),a),t)).filter((function(){})).map((function(){})),r.searchParams.set("cust_params",s.join("&")),c=r.toString(),he.recordDemandSuccess(),[2,c]}}))}))},ot=function(e){return new Promise((function(t,r){var o=Object(n.a)(),i=o.document.createElement("script");i.setAttribute("src",e),i.setAttribute("async",""),i.onload=function(){return t(o.jwplayer)},i.onerror=function(e){return r(e)},o.document.head.appendChild(i)}))},it=function(e){return function(t){return Object(p.b)(void 0,void 0,void 0,(function(){var r;return Object(p.d)(this,(function(n){switch(n.label){case 0:if(!t.tag)return[2,t];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,nt(t.tag,e)];case 2:return r=n.sent(),[2,Object(p.a)(Object(p.a)({},t),{tag:r})];case 3:return n.sent(),[2,t];case 4:return[2]}}))}))}},at=Object(n.a)();at.champagne={cmd:(null===(We=at.champagne)||void 0===We?void 0:We.cmd)||[],retrieveDemand:function(e,t){return void 0===t&&(t={}),he.recordDemandAPIRequest(),"string"!=typeof e?(f.error("Ad tag must be a string, "+typeof e+" given."),he.recordDemandAPIError(),Promise.resolve(e)):e.match(/^https?:\/\//)?e.match(/\?[;&a-z\d%_.~+=-]+/i)?nt(e,t):(f.error("Ad tag must have at least one parameter already defined."),he.recordDemandAPIError(),Promise.resolve(e)):(f.error("Ad tag must be a valid URL."),he.recordDemandAPIError(),Promise.resolve(e))},metrics:he,addJWPlayer:function(e,t,r,n,o){return void 0===n&&(n={}),void 0===o&&(o={}),function(e,t,r,n,o){return void 0===n&&(n={}),void 0===o&&(o={}),Object(p.b)(void 0,void 0,void 0,(function(){var i,a,s;return Object(p.d)(this,(function(c){switch(c.label){case 0:return he.recordPlayerRequest(),[4,ot(t)];case 1:if(!(i=c.sent()))throw he.recordJWPlayerError(),new Error("JWPlayer does not exist on the page");if(!(a=i(e)))throw he.recordJWPlayerError(),new Error("JWPlayer did not get setup in the given div");if(a.setup(Object(p.a)({playlist:r},n)),void 0===(s=a.getConfig()).advertising||void 0===s.advertising.schedule)throw he.recordPlayerError(),new Error("No ad schedule for Champagne video setup");return a.setPlaylistItemCallback((function(e){return Object(p.b)(void 0,void 0,void 0,(function(){var t,r,n,i;return Object(p.d)(this,(function(a){switch(a.label){case 0:return t=[Object(p.a)({},e)],n={},(null===(i=s.advertising)||void 0===i?void 0:i.schedule)?[4,Promise.all(s.advertising.schedule.map(it(o)))]:[3,2];case 1:return r=a.sent(),[3,3];case 2:r=[],a.label=3;case 3:return[2,p.a.apply(void 0,t.concat([(n.adschedule=r,n)]))]}}))}))})),he.recordPlayerSuccess(),[2,a]}}))}))}(e,t,r,n,o).catch((function(e){f.error("Adding JWPlayer failed: "+e.message)}))}},function(e,t){if(Array.isArray(e))if("function"==typeof t){var r=function(e){return"function"!=typeof e?(f.error("Command queue will only accept a function callback command, '"+typeof e+"' given."),0):(e(),0)};t((function(){e.forEach((function(e){e()})),e.push=r}))}else f.error("Command queue initialiseCallback is not a function.");else f.error("Command queue commands is not an array")}(at.champagne.cmd,(function(e){return e()})),Ue({category:"script",message:"Champagne framework loaded"}),l((function(){}