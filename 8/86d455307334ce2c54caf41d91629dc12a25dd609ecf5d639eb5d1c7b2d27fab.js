!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,n,i,s,o,a,r="ytc-mfp",c="."+r,l=function(){},p=!!window.jQuery,d=e(window),f=function(e,n){t.ev.on(r+e+c,n)},u=function(t,n,i,s){var o=document.createElement("div");return o.className="ytc-mfp-"+t,i&&(o.innerHTML=i),s?n&&n.appendChild(o):(o=e(o),n&&o.appendTo(n)),o},m=function(n,i){t.ev.triggerHandler(r+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},h=function(n){return n===a&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),a=n),t.currTemplate.closeBtn},y=function(){e.magnificPopupAU.instance||((t=new l).init(),e.magnificPopupAU.instance=t)};l.prototype={constructor:l,init:function(){},open:function(){},close:function(){t.isOpen&&(m("BeforeClose"),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP("ytc-mfp-removing"),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){m("Close");var n="ytc-mfp-removing ytc-mfp-ready ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var s={marginRight:""};t.isIE7?e("body, html").css("overflow",""):s.overflow="",e("html").css(s)}i.off("keyup.ytc-mfp focusin.ytc-mfp"),t.ev.off(c),t.wrap.attr("class","ytc-mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","ytc-mfp-bg"),t.container.attr("class","ytc-mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,m("AfterClose")},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||d.height();t.fixedContentPos||t.wrap.css("height",t.wH),m("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(m("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=!!t.st[i]&&t.st[i].markup;m("FirstMarkupParse",o),t.currTemplate[i]=!o||e(o)}s&&s!==n.type&&t.container.removeClass("ytc-mfp-"+s+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,m("Change",n),s=n.type,t.container.prepend(t.contentContainer),m("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[n]?t.content.find(".ytc-mfp-close").length||t.content.append(h()):t.content=e:t.content="",m("BeforeAppend"),t.container.addClass("ytc-mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,s=t.items[n];if(s.tagName?s={el:e(s)}:(i=s.type,s={data:s,src:s.src}),s.el){for(var o=t.types,a=0;a<o.length;a++)if(s.el.hasClass("ytc-mfp-"+o[a])){i=o[a];break}s.src=s.el.attr("data-ytc-mfp-src"),s.src||(s.src=s.el.attr("href"))}return s.type=i||t.st.type||"inline",s.index=n,s.parsed=!0,t.items[n]=s,m("ElementParse",s),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var s="click.magnificPopupAU";n.mainEl=e,n.items?(n.isObj=!0,e.off(s).on(s,i)):(n.isObj=!1,n.delegate?e.off(s).on(s,n.delegate,i):(n.items=e,e.off(s).on(s,i)))},_openClick:function(n,i,s){if((void 0!==s.midClick?s.midClick:e.magnificPopupAU.defaults.midClick)||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var o=void 0!==s.disableOn?s.disableOn:e.magnificPopupAU.defaults.disableOn;if(o)if(e.isFunction(o)){if(!o.call(t))return!0}else if(d.width()<o)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),s.el=e(n.mfpEl),s.delegate&&(s.items=i.find(s.delegate)),t.open(s)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("ytc-mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var s={status:e,text:i};m("UpdateStatus",s),e=s.status,i=s.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("ytc-mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass("ytc-mfp-prevent-close")){var i=t.st.closeOnContentClick,s=t.st.closeOnBgClick;if(i&&s)return!0;if(!t.content||e(n).hasClass("ytc-mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(s&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||d.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){if(n.target!==t.wrap[0]&&!e.contains(t.wrap[0],n.target))return t._setFocus(),!1},_parseMarkup:function(){}