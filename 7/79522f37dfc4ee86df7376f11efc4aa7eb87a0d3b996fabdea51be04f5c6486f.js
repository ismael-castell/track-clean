!function(){function e(t,n,i){return t.call.apply(t.bind,arguments)}function o(n,i,t){if(!n)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,e),n.apply(i,t)}}return function(){return n.apply(i,arguments)}}function d(t,n,i){return(d=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?e:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function n(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var f=!!window.FontFace;function c(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function h(t,n,i){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<e.length;s+=1)if(n[o]===e[s]){a=!0;break}a||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function a(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function(){}function u(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var a=c(t,"script",{src:n}),s=!1;return a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,i&&i(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout(function(){s||(s=!0,i&&i(Error("Script load timeout")))},e||5e3),a}return null}function p(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,s(t)}}function w(t,n){t.c=n,s(t)}function s(t){0==t.a&&t.c&&(t.c(),t.c=null)}function m(t){this.a=t||"-"}function y(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function b(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function x(t){return t.a+t.f}function j(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function _(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new m("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function k(t){if(t.g){var n=a(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),g(t.f,i,e)}T(t,"inactive")}function T(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,x(i)):t.h[n]())}function S(){this.c={}}function C(t,n){this.c=t,this.f=n,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function A(t){h(t.c,"body",t.a)}function N(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b(t.c)+";font-style:"+j(t)+";font-weight:"+t.f+"00;"}function E(t,n,i,e,o,a){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=a||void 0}function W(t,n,i,e,o,a,s){this.v=t,this.B=n,this.c=i,this.a=e,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new C(this.c,this.s),this.h=new C(this.c,this.s),this.j=new C(this.c,this.s),this.m=new C(this.c,this.s),t=N(t=new y(this.a.c+",serif",x(this.a))),this.g.a.style.cssText=t,t=N(t=new y(this.a.c+",sans-serif",x(this.a))),this.h.a.style.cssText=t,t=N(t=new y("serif",x(this.a))),this.j.a.style.cssText=t,t=N(t=new y("sans-serif",x(this.a))),this.m.a.style.cssText=t,A(this.g),A(this.h),A(this.j),A(this.m)}m.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},E.prototype.start=function(){};var F={D:"serif",C:"sans-serif"},I=null;function(){}function P(t,n,i){for(var e in F)if(F.hasOwnProperty(e)&&n===t.f[F[e]]&&i===t.f[F[e]])return!0;return!1}function(){}function L(t,n){setTimeout(d(function(){i(this.g.a),i(this.h.a),i(this.j.a),i(this.m.a),n(this.a)},t),0)}function D(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}W.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),B(this)};var $=null;function q(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&g(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),T(t,"active")):k(t.a))}function t(t){this.j=t,this.a=new S,this.h=0,this.f=this.g=!0}function H(t,n){this.c=t,this.a=n}function M(t,n){this.c=t,this.a=n}function(){}D.prototype.g=function(t){var n=this.a;n.g&&g(n.f,[n.a.c("wf",t.c,x(t).toString(),"active")],[n.a.c("wf",t.c,x(t).toString(),"loading"),n.a.c("wf",t.c,x(t).toString(),"inactive")]),T(n,"fontactive",t),this.m=!0,q(this)},D.prototype.h=function(t){var n=this.a;if(n.g){var i=a(n.f,n.a.c("wf",t.c,x(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,x(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,x(t).toString(),"inactive")),g(n.f,e,o)}T(n,"fontinactive",t),q(this)},t.prototype.load=function(){},H.prototype.load=function(){},M.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new p;for(n=0,i=e.length;n<i;n++)l(this.c,e[n],v(s));var r=[];for(n=0,i=o.length;n<i;n++)if((e=o[n].split(":"))[1])for(var f=e[1].split(","),c=0;c<f.length;c+=1)r.push(new y(e[0],f[c]));else r.push(new y(e[0]));w(s,function(){t(r,a)})};function G(t){this.f=t,this.a=[],this.c={}}var K={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},R={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},U={i:"i",italic:"i",n:"n",normal:"n"},V=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function X(t,n){this.c=t,this.a=n}var J={Arimo:!0,Cousine:!0,Tinos:!0};function Q(t,n){this.c=t,this.a=n}function Y(t,n){this.c=t,this.f=n,this.a=[]}X.prototype.load=function(){},Q.prototype.load=function(s){var t=this.a.id,r=this.c.o;t?u(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",function(t){if(t)s([]);else if(r.Typekit&&r.Typekit.config&&r.Typekit.config.fn){t=r.Typekit.config.fn;for(var n=[],i=0;i<t.length;i+=2)for(var e=t[i],o=t[i+1],a=0;a<o.length;a++)n.push(new y(e,o[a]));try{r.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}s(n)}},2e3):s([])},Y.prototype.load=function(){}