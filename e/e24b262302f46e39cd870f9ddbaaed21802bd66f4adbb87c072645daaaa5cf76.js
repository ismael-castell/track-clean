!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict";function(){}function(){}function(){}function r(e,t){if(1!==e.nodeType)return[];var n=window.getComputedStyle(e,null);return t?n[t]:n}function o(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function(){}function(){}function(){}function f(e){return null!==e.parentNode?f(e.parentNode):e}function(){}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",r=e.nodeName;if("BODY"===r||"HTML"===r){var o=window.document.documentElement,i=window.document.scrollingElement||o;return i[n]}return e[n]}function(){}function(){}function(){}function h(){var e=window.document.body,t=window.document.documentElement,n=ce()&&window.getComputedStyle(t);return{height:c("Height",e,t,n),width:c("Width",e,t,n)}}function m(e){return ve({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var t={};if(ce())try{t=e.getBoundingClientRect();var n=u(e,"top"),o=u(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}catch(i){}else t=e.getBoundingClientRect();var a={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},s="HTML"===e.nodeName?h():{},f=s.width||e.clientWidth||a.right-a.left,p=s.height||e.clientHeight||a.bottom-a.top,l=e.offsetWidth-f,c=e.offsetHeight-p;if(l||c){var g=r(e);l-=d(g,"x"),c-=d(g,"y"),a.width-=l,a.height-=c}return m(a)}function(){}function(){}function(){}function(){}function O(e){var t=e.width,n=e.height;return t*n}function E(e,t,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=y(n,r,i,o),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},f=Object.keys(s).map(function(e){return ve({key:e},s[e],{area:O(s[e])})}).sort(function(e,t){return t.area-e.area}),p=f.filter(function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight}),u=p.length>0?p[0].key:f[0].key,l=e.split("-")[1];return u+(l?"-"+l:"")}function x(e,t,n){var r=p(t,n);return v(n,r)}function(){}function T(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function(){}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var r=C(e,function(e){return e[t]===n});return e.indexOf(r)}function k(e,t,r){var o=void 0===r?e:e.slice(0,N(e,"name",r));return o.forEach(function(e){e["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var r=e["function"]||e.fn;e.enabled&&n(r)&&(t.offsets.popper=m(t.offsets.popper),t.offsets.reference=m(t.offsets.reference),t=r(t,e))}),t}function(){}function W(e,t){return e.some(function(e){var n=e.name,r=e.enabled;return r&&n===t})}function(){}function B(){return this.state.isDestroyed=!0,W(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[A("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function(){}function(){}function P(){this.state.eventsEnabled||(this.state=H(this.reference,this.options,this.state,this.scheduleUpdate))}function(){}function(){}function F(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function R(e,t){Object.keys(t).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&F(t[n])&&(r="px"),e.style[n]=t[n]+r})}function(){}function(){}function(){}function(){}function(){}function G(e,t){if(!z(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],i=e.offsets,a=i.popper,s=i.reference,f=-1!==["left","right"].indexOf(o),p=f?"height":"width",u=f?"Top":"Left",l=u.toLowerCase(),d=f?"left":"top",c=f?"bottom":"right",h=L(n)[p];s[c]-h<a[l]&&(e.offsets.popper[l]-=a[l]-(s[c]-h)),s[l]+h>a[c]&&(e.offsets.popper[l]+=s[l]+h-a[c]);var g=s[l]+s[p]/2-h/2,v=r(e.instance.popper,"margin"+u).replace("px",""),b=g-m(e.offsets.popper)[l]-v;return b=Math.max(Math.min(a[p]-h,b),0),e.arrowElement=n,e.offsets.arrow={},e.offsets.arrow[l]=Math.round(b),e.offsets.arrow[d]="",e}function V(e){return"end"===e?"start":"start"===e?"end":e}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}for(var oe=["native code","[object MutationObserverConstructor]"],ie=function(){},ae="undefined"!=typeof window,se=["Edge","Trident","Firefox"],fe=0,pe=0;pe<se.length;pe+=1)if(ae&&navigator.userAgent.indexOf(se[pe])>=0){fe=1;break}var ue=ae&&ie(window.MutationObserver),le=ue?e:t,de=void 0,ce=function(){},he=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},me=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ge=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],we=be.slice(3),ye={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},Oe={shift:{order:100,enabled:!0,fn:te},offset:{order:200,enabled:!0,fn:$,offset:0},preventOverflow:{order:300,enabled:!0,fn:ee,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:J},arrow:{order:500,enabled:!0,fn:G,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:X,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:re},hide:{order:800,enabled:!0,fn:ne},computeStyle:{order:850,enabled:!0,fn:K,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:Y,onLoad:q,gpuAcceleration:void 0}},Ee={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Oe},xe=function(){}