!function(){"use strict";var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(t,e)};function t(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var e=function(){return(e=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)};function r(n,t){var e="function"==typeof Symbol&&n[Symbol.iterator];if(!e)return n;var r,o,i=e.call(n),u=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(n){o={error:n}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function o(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(r(arguments[t]));return n}var i={keys:function(n){if(a(u.keys))return u.keys(n);return function(){}(n)},randomNumber:g},u=Object;function s(n,t){if(function(n){if(a(Array.isArray))return Array.isArray(n);return f(n)&&"[object Array]"===n.toString()}(n))for(var e=n.length,r=0;r<e;r++)t(n[r],r);else{var o=void 0;for(o in n)n.hasOwnProperty(o)&&t(n[o],o)}}function(){}function a(n){return"function"==typeof n}function f(n){return null!==n&&"object"==typeof n}function l(n){return null!==n&&"object"==typeof n}function p(n){return"string"==typeof n}function(){}function d(n){if(a(n))try{n()}catch(n){}}function v(n,t){if(a(n.bind))return n.bind(t);return function(){return n.apply(t,arguments)}}function y(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return a(u.assign)?u.assign.apply(u,arguments):m.apply(void 0,o([n],t))}function m(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];for(var r=Object(n),o=arguments.length,i=1;i<o;i++){var s=arguments[i];if(null!==s)for(var c in s)u.prototype.hasOwnProperty.call(s,c)&&(r[c]=s[c])}return r}function _(n){return function(n,t,e){var r;return e&&(r=setTimeout((function(){}),e)),function(){if(0==--n)return r&&clearTimeout(r),t.apply(this,arguments)}}(1,n)}function g(){return Math.random()}var w=window,b=w.document,k=w.location,S=null==k?void 0:k.href;function A(n,t,e,r){void 0===r&&(r=!1),n.addEventListener(t,e,r)}function P(n){if("complete"===b.readyState||"loading"!==b.readyState&&!b.documentElement.doScroll)n();else{var t=_(n);A(b,"DOMContentLoaded",t),A(w,"load",t)}}function j(){return b.referrer}function(){}function(){}function O(n){return"https://"+(n?n+".":"")+"scroll.com"}var C=O(),E=O("connect");var x=E+"/html/scrollbar/scrolltab",T="p3",z="sc";function M(n){var t,e=b.cookie.split("; "),r=e.length;for(t=0;t<r;t++){var o=e[t].split("=");if(o[0]===n)return o[1]}return null}function q(n){b.cookie=n}var H=new RegExp("(https?|ftp)://(-\\.)?([^\\s/?\\.#-]+\\.?)+(/[^\\s]*)?$","i"),L=w.history,I=w.location;function U(n,t){var e=n.indexOf("?")>-1?"&":"?",r=n.indexOf("#"),o=""+e+t;return-1===r?""+n+o:""+n.substring(0,r)+o+n.substring(r)}function F(n,t){return U(n,D(t))}function D(n){var t=[];return s(n,(function(n,e){null!=n&&t.push(e+"="+encodeURIComponent(n))})),t.join("&")}function J(n,t){if(!h(n,"?"))return n;var e=n.split("?");t=t.indexOf("=")>-1?t:t+"=";var r=c(e[1].split("&"),(function(n){return!h(n,t)})).join("&");return r?e[0]+"?"+r:e[0]}function B(n){I.href=n}function W(n){var t=I.href,e=n(t);e!==t&&L.replaceState(L.state,b.title,e)}function G(n,t){var e=new RegExp("[?&]"+t+"=([^&#]*)").exec(n);return!e||e.length<2||0===e[1].length?null:decodeURIComponent(e[1])}function K(){return I.hostname}function $(n){return H.test(n)}function X(n){var t="";return s(n,(function(n,e){t+=e+":"+n+";"})),t}function Q(n){return n+"px"}function V(n){return Array.prototype.slice.call(n)}function Y(n){return V(b.getElementsByTagName(n))}function Z(n){return b.createElement(n)}function nn(n,t,e){n.setAttribute(t,e)}function tn(n,t){(t||b.body).appendChild(n)}function en(n,t){var e,r=function(n){return V(b.querySelectorAll(n))}(n)[0],o=r&&r.getAttribute(t);return o&&((e=o).trim?e.trim():function(n){return n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}(e))}function rn(){return I.href&&encodeURI(I.href)}function on(){var n,t=en('link[rel="canonical"]',"href");if(t&&$(t)&&(n=t,"URL"in w&&a(w.URL)?new w.URL(n).hostname===K():h(n,K())))return t;var e=en('meta[property="og:url"]',"content");return e&&$(e)?e:null}function un(){var n;return(n={}).o=rn(),n.c=on(),n}function sn(n,t){void 0===t&&(t={});var r=e({status:n},t);I.href=F(C+"/debug/",r)}function cn(){if(h(rn(),"scrollrequestdebug=1")){var n=M("scroll2")?1:0,t=J(I.href,"scrollrequestdebug=1");return sn(T,{cookie:n,url:t}),!0}return!1}function an(){return!!h(rn(),"scrollremovesnooze=1")&&(q("scroll2"+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"),sn(z),!0)}var fn="Scroll";function ln(){return window[fn]||(window[fn]={})}function pn(){var n=ln();return n.config||(n.config={})}function hn(n,t){var e=pn();void 0===e[n]&&(e[n]=t)}function dn(n){var t=ln();return!!t._i||(y(t,n),hn("detected",null),hn("autopage",!1),function(){if(window[fn]){var n=window[fn];if(n){for(var t,e=n._q||[];t=e.shift();)d(t);n.do=function(n){d(n)}}}}(),t._i=!0,!1)}function(){}function yn(n,t){var e,r,o=function(n){var t=ln().m=ln().m||{};return t[n]=t[n]||{onLoad:[]}}(n);o.loaded?t(o.loaded):(o.onLoad.push(t),e="https://static.scroll.com/js/scrolljsmin/scrolljs-20201130.2117/"+n,(r=Z("script")).async=!0,r.src=e,tn(r,b.head||Y("head")[0]))}var mn=null,_n=w.localStorage;function gn(){if(null===mn){mn=!1;try{var n="__scroll_test";_n.setItem(n,n),_n.getItem(n)===n&&(_n.removeItem(n),mn=!0)}catch(n){}}return mn}function wn(){return n="scroll1",(gn()?_n.getItem(n):null)||M("scroll1");var n}function bn(){var n;return(n={}).t=wn(),n.ls=gn(),n}function kn(n){var t,e=n.cj;e&&("0"===e?(t="scroll1",gn()&&_n.removeItem(t)):function(){}("scroll1",e));var r=n.t;r&&q(r)}function Sn(n,t,e){return new Promise((function(r,o){var i=new XMLHttpRequest;i.withCredentials=!0,i.onreadystatechange=function(){if(4===i.readyState){var n=i.status;if(1223===n&&(n=204),!(200===n||204===n)){var t=new Error(String(n));t.statusCode=n,o(t)}else r(function(n){var t;try{t=JSON.parse(n)}catch(n){}return f(t)?t:{}}(i.responseText))}};var u=""+E+n,s=e?""+D(e):"";"GET"===t?(i.open(t,u+(s?"?"+s:"")),i.send()):(i.open(t,u),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.send(s))}))}function(){}function Pn(){return M("scroll0")||G(S,"scroll0")}function jn(){var n;return y(un(),((n={}).e=Pn(),n))}function Nn(n){var t=n.c;t&&q(t),W((function(n){return J(n,"scroll0")}))}function Rn(){var n,t;return y(function(){var n;return y(((n={}).r=j(),n.vr="scrolljs-20201130.2117",n),jn())}(),((n={}).d=vn(),n),bn(),((t={}).ct=G(S,"scrolltoken"),t))}function On(n){return function(n){return An("/embed/check",n).catch((function(t){if(502!==t.statusCode)throw t;return An("/embed/check",n)})).then((function(n){return Nn(n),n}))}(n).then((function(n){return kn(n),n}))}!function(n){function e(){return null!==n&&n.apply(this,arguments)||this}t(e,n),e.request=function(n){return new e(n).response()},e.refresh=function(){if(!N()&&!R()){var n=S;B(n=U(n=J(n,"scrolltoken"),"scrollnorefresh=1"))}},e.removeNoRefreshParamFromUrl=function(){W((function(n){return J(n,"scrollnorefresh=1")}))},e.prototype.handleCheckResponse=function(t){return kn(t),n.prototype.handleCheckResponse.call(this,t)}}(function(){function n(n){this._handleCheckResponse=v(this.handleCheckResponse,this),this._retryHandler=v(this.retryHandler,this),this.params_=n,this.request_=An("/embed/check",this.params_).then(this._handleCheckResponse,this._retryHandler)}return n.request=function(t){return new n(t).response()},n.prototype.response=function(){return this.request_},n.prototype.handleCheckResponse=function(){}