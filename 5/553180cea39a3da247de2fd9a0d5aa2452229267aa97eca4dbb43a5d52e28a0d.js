!function(r,i){"use strict";var e,o=r.location,s=r.document,t=s.querySelector('[src*="'+i+'"]'),l=t&&t.getAttribute("data-domain"),p=r.localStorage.plausible_ignore;function c(e){console.warn("Ignoring Event: "+e)}function(){}function(){}try{var u,h=r.history;h.pushState&&(u=h.pushState,h.pushState=function(){},r.addEventListener("popstate",n));var g=r.plausible&&r.plausible.q||[];r.plausible=a;for(var f=0;f<g.length;f++)a.apply(this,g[f]);"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){}