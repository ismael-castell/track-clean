var swfobject=function(){function(){}function(){}function(){}function(){}function r(){var e=I.getElementsByTagName("body")[0],t=g(T);t.setAttribute("type",M);var i=e.appendChild(t);if(i){var n=0;(function(){if(typeof i.GetVariable!=k){var r=i.GetVariable("$version");r&&(r=r.split(" ")[1].split(","),W.pv=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)])}else if(10>n)return n++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),i=null,s()})()}else s()}function s(){var e=j.length;if(e>0)for(var t=0;e>t;t++){var i=j[t].id,n=j[t].callbackFn,r={success:!1,id:i};if(W.pv[0]>0){var s=m(i);if(s)if(!v(j[t].swfVersion)||W.wk&&312>W.wk)if(j[t].expressInstall&&a()){var c={};c.data=j[t].expressInstall,c.width=s.getAttribute("width")||"0",c.height=s.getAttribute("height")||"0",s.getAttribute("class")&&(c.styleclass=s.getAttribute("class")),s.getAttribute("align")&&(c.align=s.getAttribute("align"));for(var u={},d=s.getElementsByTagName("param"),p=d.length,f=0;p>f;f++)"movie"!=d[f].getAttribute("name").toLowerCase()&&(u[d[f].getAttribute("name")]=d[f].getAttribute("value"));l(c,u,i,n)}else h(s),n&&n(r);else L(i,!0),n&&(r.success=!0,r.ref=o(i),n(r))}else if(L(i,!0),n){var g=o(i);g&&typeof g.SetVariable!=k&&(r.success=!0,r.ref=g),n(r)}}}function(){}function(){}function l(e,t,i,n){U=!0,S=n||null,O={success:!1,id:i};var r=m(i);if(r){"OBJECT"==r.nodeName?(w=c(r),C=null):(w=r,C=i),e.id=N,(typeof e.width==k||!/%$/.test(e.width)&&310>parseInt(e.width,10))&&(e.width="310"),(typeof e.height==k||!/%$/.test(e.height)&&137>parseInt(e.height,10))&&(e.height="137"),I.title=I.title.slice(0,47)+" - Flash Player Installation";var s=W.ie&&W.win?"ActiveX":"PlugIn",o="MMredirectURL="+(""+D.location).replace(/&/g,"%26")+"&MMplayerType="+s+"&MMdoctitle="+I.title;if(typeof t.flashvars!=k?t.flashvars+="&"+o:t.flashvars=o,W.ie&&W.win&&4!=r.readyState){var a=g("div");i+="SWFObjectNew",a.setAttribute("id",i),r.parentNode.insertBefore(a,r),r.style.display="none",function(){4==r.readyState?r.parentNode.removeChild(r):setTimeout(arguments.callee,10)}()}u(e,t,i)}}function(){}function(){}function u(e,t,i){var n,r=m(i);if(W.wk&&312>W.wk)return n;if(r)if(typeof e.id==k&&(e.id=i),W.ie&&W.win){var s="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?s+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(s+=" "+o+'="'+e[o]+'"'));var a="";for(var l in t)t[l]!=Object.prototype[l]&&(a+='<param name="'+l+'" value="'+t[l]+'" />');r.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+s+">"+a+"</object>",X[X.length]=e.id,n=m(e.id)}else{var h=g(T);h.setAttribute("type",M);for(var c in e)e[c]!=Object.prototype[c]&&("styleclass"==c.toLowerCase()?h.setAttribute("class",e[c]):"classid"!=c.toLowerCase()&&h.setAttribute(c,e[c]));for(var u in t)t[u]!=Object.prototype[u]&&"movie"!=u.toLowerCase()&&d(h,u,t[u]);r.parentNode.replaceChild(h,r),n=h}return n}function(){}function(){}function(){}function m(e){var t=null;try{t=I.getElementById(e)}catch(i){}return t}function g(e){return I.createElement(e)}function(){}function(){}function(){}function(){}function(){}var w,C,S,O,_,E,k="undefined",T="object",P="Shockwave Flash",A="ShockwaveFlash.ShockwaveFlash",M="application/x-shockwave-flash",N="SWFObjectExprInst",R="onreadystatechange",D=window,I=document,F=navigator,G=!1,B=[n],j=[],X=[],z=[],J=!1,U=!1,H=!0,W=function(){}();return function(){W.w3&&((typeof I.readyState!=k&&"complete"==I.readyState||typeof I.readyState==k&&(I.getElementsByTagName("body")[0]||I.body))&&e(),J||(typeof I.addEventListener!=k&&I.addEventListener("DOMContentLoaded",e,!1),W.ie&&W.win&&(I.attachEvent(R,function(){}),D==top&&function(){if(!J){try{I.documentElement.doScroll("left")}catch(t){return setTimeout(arguments.callee,0),void 0}e()}}()),W.wk&&function(){return J?void 0:/loaded|complete/.test(I.readyState)?(e(),void 0):(setTimeout(arguments.callee,0),void 0)}(),i(e)))}(),function(){}(),{registerObject:function(){},getObjectById:function(){},embedSWF:function(e,i,n,r,s,o,h,c,d,p){var f={success:!1,id:i};W.w3&&!(W.wk&&312>W.wk)&&e&&i&&n&&r&&s?(L(i,!1),t(function(){n+="",r+="";var t={};if(d&&typeof d===T)for(var m in d)t[m]=d[m];t.data=e,t.width=n,t.height=r;var g={};if(c&&typeof c===T)for(var y in c)g[y]=c[y];if(h&&typeof h===T)for(var b in h)typeof g.flashvars!=k?g.flashvars+="&"+b+"="+h[b]:g.flashvars=b+"="+h[b];if(v(s)){var x=u(t,g,i);t.id==i&&L(i,!0),f.success=!0,f.ref=x}else{if(o&&a())return t.data=o,l(t,g,i,p),void 0;L(i,!0)}p&&p(f)})):p&&p(f)},switchOffAutoHideShow:function(){H=!1},ua:W,getFlashPlayerVersion:function(){return{major:W.pv[0],minor:W.pv[1],release:W.pv[2]}},hasFlashPlayerVersion:v,createSWF:function(){},showExpressInstall:function(){},removeSWF:function(e){W.w3&&p(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:i,getQueryParamValue:function(e){var t=I.location.search||I.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return x(t);for(var i=t.split("&"),n=0;i.length>n;n++)if(i[n].substring(0,i[n].indexOf("="))==e)return x(i[n].substring(i[n].indexOf("=")+1))}return""},expressInstallCallback:function(){}