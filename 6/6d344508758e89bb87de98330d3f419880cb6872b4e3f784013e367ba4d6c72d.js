!function(e){var t;if("function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),!t){var n=window.Cookies,i=window.Cookies=e();i.noConflict=function(){return window.Cookies=n,i}}}(function(){}),function(){}(jQuery,window,document);var originalLeave=$.fn.popover.Constructor.prototype.leave;$.fn.popover.Constructor.prototype.leave=function(){},function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),i=function(e){var t,i,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=n.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,i=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=i}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)i(t[e])},s=function(){clearTimeout(t),t=setTimeout(r,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),s}())}(window),function(){}(window,document),function(e,t){var n=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",n,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):e.lazySizes?n():e.addEventListener("lazyunveilread",n,!0)}(window,function(){}),function(e,t){var n=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",n,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):e.lazySizes?n():e.addEventListener("lazyunveilread",n,!0)}(window,function(){}),function(){}(window,function(){}),function(e,t){var n=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",n,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):e.lazySizes?n():e.addEventListener("lazyunveilread",n,!0)}(window,function(e,t,n){"use strict";var i,r,s,a;e.addEventListener&&(i=n&&n.cfg||e.lazySizesConfig||{},r=i.lazyClass||"lazyload",s=function(){var e,i;if("string"==typeof r&&(r=t.getElementsByClassName(r)),n)for(e=0,i=r.length;i>e;e++)n.loader.unveil(r[e])},addEventListener("beforeprint",s,!1),!("onbeforeprint"in e)&&e.matchMedia&&(a=matchMedia("print"))&&a.addListener&&a.addListener(function(){a.matches&&s()}))}),function(e,t){var n=function(e,t){"use strict";if(t.getElementsByClassName){var n,i,r=t.documentElement,s=e.Date,a=e.HTMLPictureElement,o="addEventListener",c="getAttribute",l=e[o],u=e.setTimeout,d=e.requestAnimationFrame||u,f=e.requestIdleCallback,p=/^picture$/i,g=["load","error","lazyincluded","_lazyloaded"],m={},h=Array.prototype.forEach,v=function(e,t){return m[t]||(m[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),m[t].test(e[c]("class")||"")&&m[t]},A=function(e,t){v(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t)},y=function(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "))},z=function(e,t,n){var i=n?o:"removeEventListener";n&&z(e,t),g.forEach(function(n){e[i](n,t)})},b=function(e,i,r,s,a){var o=t.createEvent("CustomEvent");return r||(r={}),r.instance=n,o.initCustomEvent(i,!s,!a,r),e.dispatchEvent(o),o},w=function(t,n){var r;!a&&(r=e.picturefill||i.pf)?(n&&n.src&&!t[c]("srcset")&&t.setAttribute("srcset",n.src),r({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},C=function(e,t){return(getComputedStyle(e,null)||{})[t]},S=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},E=function(){var e,n,i=[],r=[],s=i,a=function(){var t=s;for(s=i.length?r:i,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(i,r){e&&!r?i.apply(this,arguments):(s.push(i),n||(n=!0,(t.hidden?u:d)(a)))};return o._lsFlush=a,o}(),x=function(e,t){return t?function(){E(e)}:function(){var t=this,n=arguments;E(function(){e.apply(t,n)})}},T=function(){},L=function(){};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};i=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in i||(i[t]=n[t]);e.lazySizesConfig=i,u(function(){i.init&&_()})}();var k=function(){var a,d,f,g,m,S,k,_,M,R,j,N,F,I,B=/^img$/i,D=/^iframe$/i,W="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),$=0,O=0,H=-1,U=function(e){O--,e&&e.target&&z(e.target,U),(!e||0>O||!e.target)&&(O=0)},Q=function(){},q=function(){},G=T(q),J=function(e){A(e.target,i.loadedClass),y(e.target,i.loadingClass),z(e.target,K),b(e.target,"lazyloaded")},V=x(J),K=function(e){V({target:e.target})},X=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},Z=function(e){var t,n=e[c](i.srcsetAttr);(t=i.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Y=x(function(e,t,n,r,s){var a,o,l,d,g,m;(g=b(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?A(e,i.autosizesClass):e.setAttribute("sizes",r)),o=e[c](i.srcsetAttr),a=e[c](i.srcAttr),s&&(l=e.parentNode,d=l&&p.test(l.nodeName||"")),m=t.firesLoad||"src"in e&&(o||a||d),g={target:e},m&&(z(e,U,!0),clearTimeout(f),f=u(U,2500),A(e,i.loadingClass),z(e,K,!0)),d&&h.call(l.getElementsByTagName("source"),Z),o?e.setAttribute("srcset",o):a&&!d&&(D.test(e.nodeName)?X(e,a):e.src=a),s&&(o||d)&&w(e,{src:a})),e._lazyRace&&delete e._lazyRace,y(e,i.lazyClass),E(function(){(!m||e.complete&&e.naturalWidth>1)&&(m?U(g):O--,J(g))},!0)}),ee=function(e){var t,n=B.test(e.nodeName),r=n&&(e[c](i.sizesAttr)||e[c]("sizes")),s="auto"==r;(!s&&d||!n||!e[c]("src")&&!e.srcset||e.complete||v(e,i.errorClass)||!v(e,i.lazyClass))&&(t=b(e,"lazyunveilread").detail,s&&P.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,O++,Y(e,t,s,r,n))},te=function(){if(!d){if(s.now()-m<999)return void u(te,999);var e=L(function(){i.loadMode=3,G()});d=!0,i.loadMode=3,G(),l("scroll",function(){3==i.loadMode&&(i.loadMode=2),e()},!0)}};return{_:function(){m=s.now(),n.elements=t.getElementsByClassName(i.lazyClass),a=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),I=i.hFac,l("scroll",G,!0),l("resize",G,!0),e.MutationObserver?new MutationObserver(G).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r[o]("DOMNodeInserted",G,!0),r[o]("DOMAttrModified",G,!0),setInterval(G,999)),l("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[o](e,G,!0)}),/d$|^c/.test(t.readyState)?te():(l("load",te),t[o]("DOMContentLoaded",G),u(te,2e4)),n.elements.length?(q(),E._lsFlush()):G()},checkElems:G,unveil:ee}}(),P=function(){}(),_=function(){_.i||(_.i=!0,P._(),k._())};return n={cfg:i,autoSizer:P,loader:k,init:_,uP:w,aC:A,rC:y,hC:v,fire:b,gW:S,rAF:E}}}(e,e.document);e.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}(window);var objectFitImages=function(){}