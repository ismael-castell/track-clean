window.IBEUGDPR={},window.IBEUGDPR.displayBanner=function(e){function l(e,t,n){var o,r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),o="expires="+r.toUTCString(),document.cookie=e+"="+t+"; "+o+"; path=/"}function u(e){console&&console.log&&"function"==typeof console.log&&console.log("IBEUGDPR: "+e)}function p(e){var t,n=document.createElement("style"),o=0;for(t in n.appendChild(document.createTextNode("")),document.head.appendChild(n),e)void 0!==e[t].selector&&("insertRule"in n.sheet?n.sheet.insertRule(e[t].selector+"{"+e[t].rules+"}",o):"addRule"in n.sheet&&n.sheet.addRule(e[t].selector,e[t].rules,o),++o)}function b(){switch(v.bannerPosition){case"top":case"center":case"bottom":case"cover":return"ibeugdpr--"+v.bannerPosition}return""}function f(e,t){void 0!==e&&(void 0!==e.classList?e.classList.add(t):e.className+=" "+t)}function m(e,t){void 0!==e&&(void 0!==e.classList?e.classList.remove(t):e.className=e.className.replace(t,""))}function g(e){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);h=Math.max(document.documentElement.clientHeight,window.innerHeight||0),t&&t<=415||h&&h<=415||t&&h&&t<=650&&h<=650?(m(e,"ibeugdpr--top"),m(e,"ibeugdpr--center"),m(e,"ibeugdpr--bottom"),f(e,"ibeugdpr--cover")):(m(e,"ibeugdpr--cover"),f(e,b()))}function t(){function t(e){var t,n,o,r=e.target||e.srcElement||null,a=!1;for(r&&3==r.nodeType&&r.parentNode&&(r=r.parentNode),t=0;t<10;++t){if(n=r,o=v.bannerClass,void 0!==n&&(void 0!==n.classList?n.classList.contains(o):-1<(" "+n.className+" ").replace(/\s+/g," ").indexOf(" "+o+" "))){a=!0;break}r&&r.parentNode&&(r=r.parentNode)}if(!a)try{e.preventDefault()}catch(e){}}function o(e){if(e)try{document.addEventListener("touchmove",t,{capture:!0,passive:!1})}catch(e){}else try{document.removeEventListener("touchmove",t,{capture:!0,passive:!1})}catch(e){}}var n,r,a,s=(n=function(e){g(document.querySelector("."+v.bannerClass))},r=100,function(){}