/*0000000000000000*/"init"===window._uSocialTool||void 0===window._uSocialTool&&(window._uSocialTool="init",usclUtility={tool:{checkIE:function(){return Boolean(document.all&&(!document.documentMode||document.documentMode&&document.documentMode<10))},hasObj:function(t,n){return void 0!==t&&null!=t&&(null==n||n in t)},closestParent:function(t,n){if(!t.classList.contains(n))for(;(t=t.parentElement)&&!t.classList.contains(n););return t},checkInObject:function(t,n){var i,e=null;for(i in t)if(t.hasOwnProperty(i)){if(i===n){e=t[i];break}if(t[i]&&"object"==typeof t[i]){var o=this.checkInObject(t[i],n);if(o){e=o;break}}}return e},bitShiftByKey:function(t,n){for(var i="",e=0;e<t.length;e++){var o=n.substr(-1);i+=String.fromCharCode(t[e].charCodeAt(0)^o.charCodeAt(0)),n=o+n.substr(0,n.length-1)}return i},getVersion:function(t){var n="";return n=void 0!==t?String("?v="+t):n},randomString:function(){},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}}});var usclHost=function(){function o(t){t=t?t.getAttribute("src").split("/"):null;return[].concat(t[0],t[1],t[2]).join("/")}return{init:function(){var t=document.querySelector("script[data-script=usocial]")||!1,n=document.querySelector("[data-uscl-host]")||!1,i=t?o(t):n?(i=n)?i.getAttribute("data-uscl-host"):"":function(){for(var t,n=document.querySelectorAll("script[src]")||[],i=n.length-1;0<=i;i--){var e=n[i].getAttribute("src")||"";/usocial\./.test(e)&&(t=o(n[i]),n[i].dataScript="usocial")}return t}();return i}}}(),checkDevice={device:{userAgent:window.navigator.userAgent.toLowerCase(),ios:function(){return this.iphone()||this.ipod()||this.ipad()},mobileSafari:function(){return/safari/.test(navigator.userAgent.toLowerCase())&&!/chrome/.test(navigator.userAgent.toLowerCase())},mobileChrome:function(){},iphone:function(){return this.find("iphone")},ipod:function(){return this.find("ipod")},ipad:function(){return this.find("ipad")},android:function(){return this.find("android")},androidVersion:function(){return navigator.userAgent.toLowerCase().match(/android (\d+(?:\.\d+)?)/)[0].replace("android ","")},androidPhone:function(){return this.android()&&this.find("mobile")},androidTablet:function(){},blackberry:function(){},blackberryPhone:function(){return this.blackberry()&&!this.find("tablet")},blackberryTablet:function(){return this.blackberry()&&this.find("tablet")},windows:function(){return this.find("windows")},windowsPhone:function(){return this.windows()&&this.find("phone")},windowsTablet:function(){return this.windows()&&this.find("touch")},fxos:function(){},fxosPhone:function(){return this.fxos()&&this.find("mobile")},fxosTablet:function(){},mobile:function(){},tablet:function(){},portrait:function(){},landscape:function(){},find:function(t){return-1!==this.userAgent.indexOf(t)}}},scrollToTop=function(){function i(t,n){var i,e=document.documentElement;0===e.scrollTop&&(i=e.scrollTop,++e.scrollTop,e=i+1===e.scrollTop--?e:document.body),e=(i=e).scrollTop,t=t,(n=n)<0||("object"==typeof e&&(e=e.offsetTop),"object"==typeof t&&(t=t.offsetTop),function t(n,i,e,o,r,u,c){if(o<0||1<o||r<=0)return;n.scrollTop=i-(i-e)*c(o);o+=r*u;setTimeout(function(){t(n,i,e,o,r,u,c)},u)}(i,e,t,0,1/n,20,o))}function(){}return{init:function(t,n){i(t,n)}}}(),sendEventRequest={init:function(t,n,i){var e;e=t,t=n,n=new("onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest),void 0===t.url&&(t.url=document.URL),t.type=e,n.open("POST",usclHost.init()+"/logs/event-handler",!0),n.onload=function(){},n.onerror=function(){},n.send(JSON.stringify(t))}},uSocial=function(t){var n,i,e,o=0,r=!1;function u(t,n,i){var e=document.createElement("script"),o=document.getElementsByTagName("body")[0],r=document.getElementsByTagName("head")[0];e.async=!0,e.type="text/javascript",e.charset="UTF-8",e.src=usclHost.init()+t+"?js="+n,(void 0===o?r:o).appendChild(e),e.onload=function(){i()}}function c(){n=0<document.querySelectorAll('[data-social][data-options][data-type="share"]').length,i=0<document.getElementsByClassName("uSocial-Like").length,e=setTimeout(function(){if(n||i)"init"===window.uSocialShareInit||void 0===window.uSocialShareInit&&n&&(window.uSocialShareInit="init",u("/usocial/usocial.share.js",t,function(){uSocialShare.init(r)})),"init"===window.uSocialLikeInit||void 0===window.uSocialLikeInit&&i&&(window.uSocialLikeInit="init",u("/usocial/usocial.like.js",t,function(){uSocialLike.init(r)}));else{if(1500===o)return clearTimeout(e),!1;o+=50,c()}},o)}return{init:function(){usclUtility.tool.checkIE()?document.onreadystatechange=function(){}