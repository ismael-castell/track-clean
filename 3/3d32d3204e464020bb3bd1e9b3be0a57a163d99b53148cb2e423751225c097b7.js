!function(){}(window,function(t){var e=function(){function D(t){return null==t?String(t):j[C.call(t)]||"object"}function $(t){return"function"==D(t)}function k(t){return null!=t&&t==t.window}function F(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function B(t){return"object"==D(t)}function M(t){return B(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function(){}function R(t){return a.call(t,function(t){return null!=t})}function(){}function z(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function I(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||h[z(t)]?e:e+"px"}function _(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function(){}function(){}function X(t,i,r){for(n in i)r&&(M(i[n])||A(i[n]))?(M(i[n])&&!M(t[n])&&(t[n]={}),A(i[n])&&!A(t[n])&&(t[n]=[]),X(t[n],i[n],r)):i[n]!==e&&(t[n]=i[n])}function W(t,e){return null==e?i(t):i(t).filter(e)}function J(t,e,n,i){return $(e)?e.call(t,n,i):e}function Y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function(){}function(){}function(){}var e,n,i,r,N,O,s=[],o=s.concat,a=s.filter,u=s.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],b=["after","prepend","before","append"],x=f.createElement("table"),E=f.createElement("tr"),w={tr:f.createElement("tbody"),tbody:x,thead:x,tfoot:x,td:E,th:E,"*":f.createElement("div")},T=/^[\w-]*$/,j={},C=j.toString,S={},P=f.createElement("div"),L={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return S.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,s=!r;return s&&(r=P).appendChild(t),i=~S.qsa(r,e).indexOf(t),s&&P.removeChild(t),i},N=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},O=function(){},S.fragment=function(){},S.Z=function(t,e){return new U(t,e)},S.isZ=function(t){return t instanceof S.Z},S.init=function(){},i=function(t,e){return S.init(t,e)},i.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){X(t,n,e)}),t},S.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,o=T.test(s);return t.getElementById&&o&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(o&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},i.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},i.type=D,i.isFunction=$,i.isWindow=k,i.isArray=A,i.isPlainObject=M,i.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},i.isNumeric=function(){},i.inArray=function(t,e,n){return s.indexOf.call(e,t,n)},i.camelCase=N,i.trim=function(t){return null==t?"":String.prototype.trim.call(t)},i.uuid=0,i.support={},i.expr={},i.noop=function(){},i.map=function(){},i.each=function(){},i.grep=function(t,e){return a.call(t,e)},t.JSON&&(i.parseJSON=JSON.parse),i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),i.fn={constructor:S.Z,length:0,forEach:s.forEach,reduce:s.reduce,push:s.push,sort:s.sort,splice:s.splice,indexOf:s.indexOf,concat:function(){},map:function(){},slice:function(){return i(u.apply(this,arguments))},ready:function(e){if("complete"===f.readyState||"loading"!==f.readyState&&!f.documentElement.doScroll)setTimeout(function(){e(i)},0);else{var n=function(){f.removeEventListener("DOMContentLoaded",n,!1),t.removeEventListener("load",n,!1),e(i)};f.addEventListener("DOMContentLoaded",n,!1),t.addEventListener("load",n,!1)}return this},get:function(){},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){},each:function(){},filter:function(){},add:function(){},is:function(){},not:function(){},has:function(){},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){},last:function(){},find:function(){},closest:function(){},parents:function(){},parent:function(){},children:function(){},contents:function(){},siblings:function(){},empty:function(){},pluck:function(){},show:function(){},replaceWith:function(t){return this.before(t).remove()},wrap:function(){},wrapAll:function(){},wrapInner:function(){},unwrap:function(){},clone:function(){},hide:function(){return this.css("display","none")},toggle:function(){},prev:function(t){return i(this.pluck("previousElementSibling")).filter(t||"*")},next:function(){},html:function(){},text:function(){},attr:function(){},removeAttr:function(){},prop:function(t,e){return t=L[t]||t,"string"!=typeof t||1 in arguments?this.each(function(){}):this[0]&&this[0][t]},removeProp:function(){},data:function(){},val:function(){},offset:function(){},css:function(){},index:function(){},hasClass:function(){},addClass:function(){},removeClass:function(){},toggleClass:function(){},scrollTop:function(){},scrollLeft:function(){},position:function(){},offsetParent:function(){}},i.fn.detach=i.fn.remove,["width","height"].forEach(function(){}),b.forEach(function(){}),S.Z.prototype=U.prototype=i.fn,S.uniq=O,S.deserializeValue=Q,i.zepto=S,i}();return t.Zepto=e,void 0===t.$&&(t.$=e),void 0===t.jQuery&&(t.jQuery=e),function(e){function h(t){return t._zid||(t._zid=n++)}function(){}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function(){}function b(t,e,n,i,r){var s=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,i).forEach(function(e){delete a[s][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,r))})})}function(){}function C(t){var e,n={originalEvent:t};for(e in t)w.test(e)||t[e]===i||(n[e]=t[e]);return j(n,t)}var i,n=1,r=Array.prototype.slice,s=e.isFunction,o=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:b},e.proxy=function(){},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},E=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(){},e.fn.off=function(){},e.fn.trigger=function(){},e.fn.triggerHandler=function(){},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.fn.hover=function(t,e){return this.mouseenter(t).mouseleave(e||t)},e.Event=function(){}}(e),function(){}(e),function(){}(e),function(){}(),function(t,e){function v(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}function(){}var i,a,u,f,c,l,h,p,d,m,n="",r={Webkit:"webkit",Moz:"",O:"o"},s=document.createElement("div"),o=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,g={};s.style.transform===e&&t.each(r,function(t,r){return s.style[t+"TransitionProperty"]!==e?(n="-"+t.toLowerCase()+"-",i=r,!1):void 0}),a=n+"transform",g[u=n+"transition-property"]=g[f=n+"transition-duration"]=g[l=n+"transition-delay"]=g[c=n+"transition-timing-function"]=g[h=n+"animation-name"]=g[p=n+"animation-duration"]=g[m=n+"animation-delay"]=g[d=n+"animation-timing-function"]="",t.fx={off:i===e&&s.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:n,transitionEnd:y("TransitionEnd"),animationEnd:y("AnimationEnd")},t.fn.animate=function(){},t.fn.anim=function(n,i,r,s,y){var b,E,j,x={},w="",T=this,C=t.fx.transitionEnd,S=!1;if(i===e&&(i=t.fx.speeds._default/1e3),y===e&&(y=0),t.fx.off&&(i=0),"string"==typeof n)x[h]=n,x[p]=i+"s",x[m]=y+"s",x[d]=r||"linear",C=t.fx.animationEnd;else{E=[];for(b in n)o.test(b)?w+=b+"("+n[b]+") ":(x[b]=n[b],E.push(v(b)));w&&(x[a]=w,E.push(a)),i>0&&"object"==typeof n&&(x[u]=E.join(", "),x[f]=i+"s",x[l]=y+"s",x[c]=r||"linear")}return j=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(C,j)}else t(this).unbind(C,j);S=!0,t(this).css(g),s&&s.call(this)},i>0&&(this.bind(C,j),setTimeout(function(){S||j.call(T)},1e3*(i+y)+25)),this.size()&&this.get(0).clientLeft,this.css(x),0>=i&&setTimeout(function(){},0),this},s=null}(e),function(e,n){function(){}function(){}var r=(t.document,e.fn.show),s=e.fn.hide,o=e.fn.toggle;e.fn.show=function(){},e.fn.hide=function(){},e.fn.toggle=function(){},e.fn.fadeTo=function(){},e.fn.fadeIn=function(){},e.fn.fadeOut=function(){},e.fn.fadeToggle=function(){},e.fn.slideDown=function(t){var e=this.css("position");this.show(),this.css({position:"absolute",visibility:"hidden"});var n=this.css("margin-top"),i=this.css("margin-bottom"),r=this.css("padding-top"),s=this.css("padding-bottom"),o=this.css("height");this.css({position:e,visibility:"visible",overflow:"hidden",height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0}),this.animate({height:o,marginTop:n,marginBottom:i,paddingTop:r,paddingBottom:s},t)},e.fn.slideUp=function(t){if(this.height()>0){var e=this,i=(e.css("position"),e.css("height")),r=e.css("margin-top"),s=e.css("margin-bottom"),o=e.css("padding-top"),a=e.css("padding-bottom");this.css({visibility:"visible",overflow:"hidden",height:i,marginTop:r,marginBottom:s,paddingTop:o,paddingBottom:a}),e.animate({height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0},{duration:t,queue:!1,complete:function(){e.hide(),e.css({visibility:"visible",overflow:"hidden",height:i,marginTop:r,marginBottom:s,paddingTop:o,paddingBottom:a})}})}},e.fn.slideToggle=function(t){0==this.height()?this.slideDown():this.slideUp()}}(e),function(t,e){t.fn.outerHeight=function(t){if(0!=this.length){if(!t)return this[0].offsetHeight;var e=this[0].offsetHeight,n=getComputedStyle(this[0]);return e+=parseInt(n.marginTop)+parseInt(n.marginBottom)}},t.fn.outerWidth=function(t){if(0!=this.length){if(!t)return this[0].offsetWidth;var e=this[0].offsetWidth,n=getComputedStyle(this[0]);return e+=parseInt(n.marginLeft)+parseInt(n.marginRight)}}}(e),function(t){function(){}function(){}var e=t.zepto,n=e.qsa,i=e.matches,s=t.expr[":"]={visible:function(){},hidden:function(){},selected:function(){return this.selected?this:void 0},checked:function(){},parent:function(){return this.parentNode},first:function(){},last:function(){},eq:function(){},contains:function(){},has:function(){}},o=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),a=/^\s*>/,u="Zepto"+ +new Date;e.qsa=function(){},e.matches=function(){}