// Source: wp-includes/js/twemoji.min.js
var twemoji=function(){"use strict";var e={base:"https://twemoji.maxcdn.com/2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(){},toCodePoint:b},onerror:function(){},parse:function(d,u){u&&"function"!=typeof u||(u={callback:u});return("string"==typeof d?function(){}:function(d,u){var e,f,c,a,t,n,r,o,i,b,s,l=function d(u,e){var f,c,a=u.childNodes,t=a.length;for(;t--;)f=a[t],3===(c=f.nodeType)?e.push(f):1!==c||g.test(f.nodeName)||d(f,e);return e}(d,[]),p=l.length;for(;p--;){for(c=!1,a=document.createDocumentFragment(),t=l[p],n=t.nodeValue,r=0;b=h.exec(n);){if((s=b.index)!==r&&a.appendChild(m(n.slice(r,s))),i=b[0],b=x(i),r=s+i.length,s=u.callback(b,u)){for(f in(o=new Image).onerror=u.onerror,o.setAttribute("draggable","false"),e=u.attributes(i,b))e.hasOwnProperty(f)&&0!==f.indexOf("on")&&!o.hasAttribute(f)&&o.setAttribute(f,e[f]);o.className=u.className,o.alt=i,o.src=s,c=!0,a.appendChild(o)}o||a.appendChild(m(i)),o=null}c&&(r<n.length&&a.appendChild(m(n.slice(r))),t.parentNode.replaceChild(a,t))}return d})(d,{callback:u.callback||t,attributes:"function"==typeof u.attributes?u.attributes:o,base:("string"==typeof u.base?u:e).base,ext:u.ext||e.ext,size:u.folder||function(){}(u.size||e.size),className:u.className||e.className,onerror:u.onerror||e.onerror})},replace:i,test:function(){}},u={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},h=/\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc41\u200d\ud83d\udde8|(?:[\u0023\u002a\u0030-\u0039])\ufe0f?\u20e3|(?:(?:[\u261d\u270c])(?:\ufe0f|(?!\ufe0e))|\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca\udfcb]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd75\udd90\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0]|\ud83e\udd18|[\u26f9\u270a\u270b\u270d])(?:\ud83c[\udffb-\udfff]|)|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf21\udf24-\udf84\udf86-\udf93\udf96\udf97\udf99-\udf9b\udf9e-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcc-\udff0\udff3-\udff5\udff7-\udfff]|\ud83d[\udc00-\udc41\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfd\udcff-\udd3d\udd49-\udd4e\udd50-\udd67\udd6f\udd70\udd73\udd74\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\udecb-\uded0\udee0-\udee5\udee9\udeeb\udeec\udef0\udef3]|\ud83e[\udd10-\udd17\udd80-\udd84\uddc0]|[\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\u2602-\u2604\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638\u2692\u2694\u2696\u2697\u2699\u269b\u269c\u26b0\u26b1\u26c8\u26ce\u26cf\u26d1\u26d3\u26e9\u26f0\u26f1\u26f4\u26f7\u26f8\u2705\u271d\u2721\u2728\u274c\u274e\u2753-\u2755\u2763\u2795-\u2797\u27b0\u27bf\ue50a]|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37]|[\u00a9\u00ae\u203c\u2049\u2122\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600\u2601\u260e\u2611\u2614\u2615\u2639\u263a\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2693\u26a0\u26a1\u26aa\u26ab\u26bd\u26be\u26c4\u26c5\u26d4\u26ea\u26f2\u26f3\u26f5\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u2733\u2734\u2744\u2747\u2757\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))/g,f=/\uFE0F/g,c=String.fromCharCode(8205),n=/[&<>'"]/g,g=/IFRAME|NOFRAMES|NOSCRIPT|SCRIPT|SELECT|STYLE|TEXTAREA|[a-z]/,a=String.fromCharCode;return e;function m(d){return document.createTextNode(d)}function(){}function(){}function r(d){return u[d]}function o(){return null}function(){}function(){}}();
// Source: wp-includes/js/wp-emoji.min.js
!function(s,c){s.wp=s.wp||{},s.wp.emoji=new function(){var n,u,e=s.MutationObserver||s.WebKitMutationObserver||s.MozMutationObserver,t=!1,a=0,r=0<s.navigator.userAgent.indexOf("Trident/7.0");function(){}function(){}function d(u,e){var t;return!c.supports.everything&&n&&u&&("string"==typeof u||u.childNodes&&u.childNodes.length)?(e=e||{},t={base:c.baseUrl,ext:c.ext,className:e.className||"emoji",callback:function(u,e){switch(u){case"a9":case"ae":case"2122":case"2194":case"2660":case"2663":case"2665":case"2666":return!1}return!(c.supports.everythingExceptFlag&&!/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(u))&&"".concat(e.base,u,e.ext)},onerror:function(){}