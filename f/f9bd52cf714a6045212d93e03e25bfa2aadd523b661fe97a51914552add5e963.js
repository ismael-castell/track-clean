"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mailmunchGetMethodChain(e,t){return _mailmunchInstances.filter(function(){})[0]}function mailmunchGetOrCreateMethodChain(e,t){var i=mailmunchGetMethodChain(e,t);return i||(i=new MailmunchMethodChain(e,t),_mailmunchInstances.push(i)),i}function MailMunchBaseForm(e){this.options=e,this.prepared=!1,this.readied=!1,this.dont_show=!1,this.subscribed=!1,this.iframeReady=!1,this.iframeInterval=null,this.viewId=MailMunchHelpers.generateID(),this.formVisible=!1,this.firstResize=!1,this.originalScroll=0,this.firedPixels=[],this.testWidgetIds=[],this.loadedHtml=null,this.retriesEmbedInterval=null,this.retriesEmbed=0,this.retriesTrigger=0,void 0!==_mmunch&&MailMunchHelpers.extendObject(this.options,_mmunch||{})}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),_mailmunchInstances=[],MailmunchMethodChain=function(){function e(t,i){var n=this;_classCallCheck(this,e),this.context=t,this.methodName=i,this.isTask=/Task$/.test(i),this.originalMethodReference=this.isTask?t.get(i):t[i],this.methodChain=[],this.boundMethodChain=[],this.wrappedMethod=function(){return n.boundMethodChain[n.boundMethodChain.length-1].apply(undefined,arguments)},this.isTask?t.set(i,this.wrappedMethod):t[i]=this.wrappedMethod}return _createClass(e,null,[{key:"add",value:function(){}},{key:"remove",value:function(){}}]),_createClass(e,[{key:"add",value:function(e){this.methodChain.push(e),this.rebindMethodChain()}},{key:"remove",value:function(){}},{key:"rebindMethodChain",value:function(){this.boundMethodChain=[];for(var e=undefined,t=0;e=this.methodChain[t];t++){var i=this.boundMethodChain[t-1]||this.originalMethodReference.bind(this.context);this.boundMethodChain.push(e(i))}}},{key:"destroy",value:function(){}}]),e}(),MailmunchUrlChangeTracker=function(){function e(t){_classCallCheck(this,e),history.pushState&&window.addEventListener&&(this.path=this.getPath(),this.callback=t,this.pushStateOverride=this.pushStateOverride.bind(this),this.replaceStateOverride=this.replaceStateOverride.bind(this),this.handlePopState=this.handlePopState.bind(this),MailmunchMethodChain.add(history,"pushState",this.pushStateOverride),MailmunchMethodChain.add(history,"replaceState",this.replaceStateOverride),window.addEventListener("popstate",this.handlePopState))}return _createClass(e,[{key:"getPath",value:function(){}},{key:"pushStateOverride",value:function(e){var t=this;return function(){e.apply(undefined,arguments),t.handleUrlChange(!0)}}},{key:"replaceStateOverride",value:function(e){var t=this;return function(){}}},{key:"handlePopState",value:function(){this.handleUrlChange(!0)}},{key:"handleUrlChange",value:function(){var e=this;setTimeout(function(){var t=e.path,i=e.getPath();t!=i&&e.shouldTrackUrlChange(i,t)&&(e.path=i,e.handlePageview())},0)}},{key:"handlePageview",value:function(){this.callback()}},{key:"shouldTrackUrlChange",value:function(){}},{key:"remove",value:function(){}}]),e}();window.mailmunch={},window.MailMunchWidgets,window.MailMunchWidgets=[],"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),Array.prototype.indexOf||(Array.prototype.indexOf=function(){});var MailMunchDeviceDetect={detect:function(e){return e===undefined&&(e={}),this.mm=window.matchMedia,this.mm&&!e.useUA?(this.method="media queries",this.type=this.mq()):(this.method="user agent strings",this.type=this.ua()),e.verbose?[this.type,this.method]:this.type},mq:function(){return this.minMatch(320)&&this.maxMatch(480)?"smartphone":this.minMatch(768)&&this.maxMatch(1024)?"tablet":"desktop"},match:function(){},minMatch:function(e){return this.match("min",e)},maxMatch:function(e){return this.match("max",e)},ua:function(){}},MailMunchAjax={createCORSRequest:function(){},send:function(e,t){var i=MailMunchAjax.createCORSRequest("GET",e);i.onload=function(){},i.onerror=function(){t("[]",i)},i.send()}};MailMunchBaseForm.prototype.getHTML=function(){var e=this;if(this.loadedHtml)this.loadHTML(this.loadedHtml);else{if(this.options.widgetUpdatedAt)var t="//a.mailmunch.co/forms-cache/"+this.options.siteID+"/"+this.options.widgetID+"/index-"+this.options.widgetUpdatedAt+".html";else t="//forms.mailmunch.co/form/"+this.options.siteID+"/"+this.options.widgetID;MailMunchAjax.send(t,function(t){e.loadedHtml=t,e.loadHTML(t)},"GET",{},!0)}},MailMunchBaseForm.prototype._loadHTML=function(e,t){(e=e.contentWindow?e.contentWindow:e.contentDocument.document?e.contentDocument.document:e.contentDocument).document.open(),e.document.write(t),e.document.close()},MailMunchBaseForm.prototype.getWidgetId=function(){return this.options.widgetID},MailMunchBaseForm.prototype.inputFocus=function(){},MailMunchBaseForm.prototype.inputBlur=function(){},MailMunchBaseForm.prototype._scrollTo=function(e,t){var i=document.documentElement;this.originalScroll=(window.pageYOffset||i.scrollTop)-(i.clientTop||0),window.scrollTo(e,t)},MailMunchBaseForm.prototype.prepare=function(){},MailMunchBaseForm.prototype._afterPrepare=function(){this.prepared=!0,this.getHTML(),this.options.debug&&MailMunchHelpers.infoLog("Prepared >> "+this.viewId)},MailMunchBaseForm.prototype._fireEvent=function(e){var t="//analytics.mailmunch.co/event/?site_id="+this.options.siteID+"&widget_id="+this.options.widgetID+"&event_name="+e+"&cache="+(new Date).getTime();document.location.href&&(t+="&referrer="+encodeURIComponent(document.location.href)),this.options.visitorId&&(t+="&visitor_id="+this.options.visitorId),MailMunchHelpers.appendImage(t,1,1),this.options.debug&&MailMunchHelpers.infoLog("Fire Event >> "+this.viewId+" >> "+e)},MailMunchBaseForm.prototype._firePixel=function(pixel_code){if(pixel_code&&!(this.firedPixels.indexOf(pixel_code)>=0)){this.firedPixels.push(pixel_code);var divId="mailmunch-pixel-"+MailMunchHelpers.generateID(),div=document.createElement("div");div.id=divId,div.style.display="none",div.innerHTML=pixel_code,document.body.appendChild(div);for(var codes=div.getElementsByTagName("script"),i=0;i<codes.length;i++)eval(codes[i].text);this.options.debug&&MailMunchHelpers.infoLog("Fire Pixel >> "+this.viewId+" >> "+pixel_code)}},MailMunchBaseForm.prototype._beforeShow=function(e){var t=this;return!(!e&&(this.dont_show||this.subscribed))&&(this.prepared||this.prepare(),this.iframeReady?(clearInterval(this.iframeInterval),this._fireEvent("views"),this.options.viewPixel&&this._firePixel(this.options.viewPixel),this.options.debug&&MailMunchHelpers.infoLog("Show >> "+this.viewId),!0):(clearInterval(this.iframeInterval),this.iframeInterval=setInterval(function(){t.show(e)},500),!1))},MailMunchBaseForm.prototype.show=function(){},MailMunchBaseForm.prototype.hide=function(){},MailMunchBaseForm.prototype.remove=function(){},MailMunchBaseForm.prototype._beforePreview=function(){var e=this;return this.prepared||this.prepare(),this.iframeReady?(clearInterval(this.iframeInterval),!0):(clearInterval(this.iframeInterval),this.iframeInterval=setInterval(function(){e.preview()},500),!1)},MailMunchBaseForm.prototype.iframeLoaded=function(e,t){this.resizeWidget(e,t),this.iframeReady=!0,this.options.debug&&MailMunchHelpers.infoLog("Iframe Loaded >> "+this.viewId+" width: "+e+" height: "+t)},MailMunchBaseForm.prototype._beforeResize=function(e,t){this.options.iframeWidth=e,this.options.iframeHeight=t,this.options.debug&&MailMunchHelpers.infoLog("Iframe Resized >> "+this.viewId+" width: "+e+" height: "+t)},MailMunchBaseForm.prototype.resizeWidget=function(){},MailMunchBaseForm.prototype.reposition=function(){},MailMunchBaseForm.prototype.userSubscribed=function(e){if(this.subscribed=!0,MailMunchHelpers.setCookie("mailmunch_subscribed_"+this.options.listID,"true",365),this.options.subscribePixel){var t=this.options.subscribePixel;e&&Object.keys(e).map(function(i){e[i]&&(t=t.replace(new RegExp("\\{{"+i+"\\}}","gi"),e[i]&&e[i].value||e[i]))}),e&&e.email&&(t=t.replace(new RegExp("\\[EMAIL\\]","gi"),e.email.value||e.email)),this._firePixel(t)}if(this.options.subscribeRedirect&&this.options.redirectURL){var i=this.options.redirectURL,n=this.options.redirectDelay||0;e&&Object.keys(e).map(function(t){e[t]&&(i=i.replace(new RegExp("\\{{"+t+"\\}}","gi"),e[t]&&e[t].value||e[t]))}),i=i.replace(new RegExp("\\[EMAIL\\]","gi"),e.email.value||e.email),setTimeout(function(){document.location.href=i},n)}},MailMunchBaseForm.prototype.init=function(){};var MailMunchHelpers={generateID:function(){},inheritPrototype:function(){},addEvent:function(){},hasClass:function(){},addClass:function(){},removeClass:function(){},setCookie:function(e,t,i){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3);var o="expires="+n.toGMTString(),a={expiry:n.toGMTString(),value:t};try{localStorage.setItem(e,JSON.stringify(a))}catch(s){document.cookie=e+"="+t+"; "+o+"; path=/"}},getScale:function(e){var t=this.getZoomFactor();return this.getWindowWidth()*t/(e.getBoundingClientRect().width*t)},getCookie:function(e){try{var t=JSON.parse(localStorage.getItem(e));if(t&&t.expiry&&new Date(t.expiry)>=new Date)return t.value}catch(s){for(var i=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var a=n[o];" "==a.charAt(0);)a=a.substring(1);if(-1!=a.indexOf(i))return a.substring(i.length,a.length)}return""}return""},getParameterByName:function(){},getWindowWidth:function(){var e=0;if("number"==typeof window.innerWidth)e=window.innerWidth;else{var t=document.documentElement.clientHeight,i=document.body.clientHeight;e=t>0?t:i}return e},getWindowHeight:function(){var e=0;if("number"==typeof window.innerHeight)e=window.innerHeight;else{var t=document.documentElement.clientHeight,i=document.body.clientHeight;e=t>0?t:i}return e},getDocumentHeight:function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)},getDocumentWidth:function(){},getZoomFactor:function(){var e=90==Math.abs(window.orientation);return(320==window.screen.width?e?480:320:window.screen[e?"height":"width"])/window.innerWidth},getScrollTop:function(){},getScrollYPercent:function(){},searchPosts:function(){},searchCategories:function(e){for(var t=_mmunch.postCategories.length,i=0;i<t;i++){if(_mmunch.postCategories[i].name.toString().toLowerCase()==e.toString().toLowerCase())return!0;if(_mmunch.postCategories[i].slug.toString().toLowerCase()==e.toString().toLowerCase())return!0;if(_mmunch.postCategories[i].cat_ID.toString().toLowerCase()==e.toString().toLowerCase())return!0}return!1},isPhone:function(){return"smartphone"==MailMunchDeviceDetect.detect()},isTablet:function(){return"tablet"==MailMunchDeviceDetect.detect()},isDesktop:function(){},extendObject:function(e,t){for(var i in t)e[i]=t[i];return e},contains:function(){},appendImage:function(){},loadCss:function(e){if(document.createStyleSheet)document.createStyleSheet(e);else{var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",e),document.getElementsByTagName("head")[0].appendChild(t)}},getElementsByClassName:function(e,t){if(document.getElementsByClassName)return e&&e.getElementsByClassName?e.getElementsByClassName(t):document.getElementsByClassName(t);for(var i=[],n=new RegExp("(^| )"+t+"( |$)"),o=e.getElementsByTagName("*"),a=0,s=o.length;a<s;a++)n.test(o[a].className)&&i.push(o[a]);return i},forEach:function(){},registerLoadEvent:function(e){var t=this;"complete"!==document.readyState&&"loaded"!=document.readyState&&"interactive"!=document.readyState?document.addEventListener?(document.addEventListener("DOMContentLoaded",function(){},!1),window.addEventListener("load",function(){t.registerLoadEvent(e)},!1)):(document.attachEvent&&(document.attachEvent("onreadystatechange",function(){}),document.documentElement.doScroll&&window==window.top&&function(){}()),window.addEventListener?window.addEventListener("onload",e,!1):window.attachEvent("onload",e)):e()},infoLog:function(e){e="MailMunch Info: "+e,"undefined"!=typeof console&&"function"==typeof console.log?console.log(e,""):alert(e)},errorLog:function(e){e="MailMunch Error: "+e,"undefined"!=typeof console&&"function"==typeof console.error?console.error(e,""):alert(e)},firePixels:function(e){""==this.getCookie("_mailmunch_seen_month")&&(this.setCookie("_mailmunch_seen_month","true",30),this.registerLoadEvent(function(){var t;e.indexOf("ce")>-1&&((t=document.createElement("iframe")).setAttribute("src","//s.thebrighttag.com/tag?site=yri1Ute&mode=iframe"),t.setAttribute("width","1"),t.setAttribute("height","1"),t.style.visibility="hidden",t.style.display="none",document.body.appendChild(t)),e.indexOf("pe")>-1&&((t=document.createElement("iframe")).setAttribute("src","https://pixel.voltn.com/iframe?vcp=M411MCH0"),t.setAttribute("width","1"),t.setAttribute("height","1"),t.style.visibility="hidden",t.style.display="none",document.body.appendChild(t))}))}};if(void 0===_mmunch)var _mmunch={};!function(e,t,i,n){var o,a,s=!1;if(!(o=e.jQuery)||i!=o.fn.jquery||n(o,s)){var r=t.createElement("script");r.type="text/javascript",r.src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",r.onload=r.onreadystatechange=function(){},(t.getElementsByTagName("head")[0]||t.documentElement).appendChild(r)}}(window,document,"1.11.3",function($,jquery_loaded){window._mJquery=$||jQuery,_mmunch.isSecondPageview=MailMunchHelpers.getCookie("mailmunch_second_pageview"),MailMunchHelpers.setCookie("mailmunch_second_pageview","true",365),_mmunch.visitorId=MailMunchHelpers.getCookie("_mailmunch_visitor_id");try{"undefined"!=typeof _mmunch.postCategories&&"string"==typeof _mmunch.postCategories&&(_mmunch.postCategories=$.parseJSON(_mmunch.postCategories)),"undefined"!=typeof _mmunch.postData&&"string"==typeof _mmunch.postData&&(_mmunch.postData=$.parseJSON(_mmunch.postData)),"undefined"!=typeof _mmunch.categoryData&&"string"==typeof _mmunch.categoryData&&(_mmunch.categoryData=$.parseJSON(_mmunch.categoryData))}catch(e){}$(window).on("message",function(e){var t;void 0===(t=e.originalEvent.data)||"undefined"==typeof t.indexOf||t.indexOf("mailmunch-iframe")<0||"undefined"!=typeof(t=$.parseJSON(t)).widget_id&&"undefined"!=typeof t.type&&$.each(MailMunchWidgets,function(e,i){if(i.getWidgetId()!=t.widget_id)return!0;"loaded"==t.type?i.iframeLoaded(t.width,t.height):"close"==t.type?i.hide():"subscribed"==t.type?i.userSubscribed(t.fields):"resize"==t.type?i.resizeWidget(t.width,t.height):"input-focus"==t.type?i.inputFocus(t.posTop):"input-blur"==t.type&&i.inputBlur(t.posTop)})});var WidgetLoader={init:function(){this.ready=!1,this.widgets=[],this.chosenVariations=[],this.testWidgetIds={},this.siteSettings=[],this.siteId=this.getSiteId(),this._settingsUrl="",this._tracking=!1,this._trackingFlags="",this.siteId&&this.initSite()},pageview:function(){this.ready&&(this.widgets=[],this.chosenVariations=[],this.testWidgetIds={},$.each(MailMunchWidgets,function(e,t){t.remove()}),MailMunchWidgets=[],this.prepareWidgets())},getScripts:function(e,t){var i=0;if(i!=e.length)for(var n=function(){},o=0;o<e.length;o++)$.ajax({type:"GET",url:e[o],success:n,dataType:"script",cache:!0});else t()},getSiteId:function(){var e=$("#mailmunch-script");return e.length>0?e.attr("data-mailmunch-site-id"):!!window._mailmunchSiteId&&window._mailmunchSiteId},initSite:function(){var e=this,t="//forms.mailmunch.co/sites/"+this.siteId;_mmunch.visitorId&&(t+="?visitor_id="+_mmunch.visitorId),MailMunchAjax.send(t,function(t,i){t=$.parseJSON(t);e._settingsUrl=t.timestamp?"//a.mailmunch.co/forms-cache/"+e.siteId+"/settings-"+t.timestamp+".json":"//a.mailmunch.co/forms-cache/"+e.siteId+"/settings.json","function"==typeof i.getResponseHeader&&(e._tracking=!!i.getResponseHeader("X-MM-T"),e._trackingFlags=i.getResponseHeader("X-MM-T")),!_mmunch.visitorId&&t.visitorId&&(MailMunchHelpers.setCookie("_mailmunch_visitor_id",t.visitorId,365),_mmunch.visitorId=t.visitorId),t.load&&e.loadSiteSettings()})},loadSiteSettings:function(){var e=this;MailMunchAjax.send(e._settingsUrl,function(t){t=$.parseJSON(t);e.siteSettings=t.widgets,e.prepareWidgets(),e._tracking&&!t.premium&&MailMunchHelpers.firePixels(e._trackingFlags),t.autoTrackUrlChanges&&void 0!==MailmunchUrlChangeTracker&&new MailmunchUrlChangeTracker(function(){e.pageview()})})},prepareWidgets:function(){var e=this,t=this.siteSettings;if(t.length>0&&($.each(t,function(t,i){if(!e.shouldLoadWidget(i))return!0;e.widgets.push(i)}),e.widgets.length>0))return e.chooseVariations(),e.loadWidgetTypes(),void e.loadRecaptcha();this.ready=!0},shouldLoadWidget:function(e){var t=!0;return this.isEnabledOnDevice(e)||(t=!1),this.isEnabledOnPage(e)||(t=!1),t},loadWidgetTypes:function(){var e=this,t=!1,i=$.map(this.widgets,function(e){return e.settings&&e.settings.floatingButton&&e.settings.floatingButton.enabled&&(t=!0),e.type}),n=$.grep(i,function(e,t){return null!=e&&t===$.inArray(e,i)});if(0!=n.length){var o=$.map(n,function(e){return"undefined"!=typeof window["MailMunch"+e]?null:"//a.mailmunch.co/app/v1/"+e.toLowerCase()+".js"});t&&o.push("//a.mailmunch.co/app/v1/floating_button.js"),this.getScripts(o,function(){e.loadWidgets()})}else this.ready=!0},loadWidgets:function(){},loadWidget:function(e){var t=this;if(this.isBeingUsed(e)){var i=!0;$.inArray(e.id,t.chosenVariations)>-1&&(i=!1);var n=this.testWidgetIds[e.widget_test_id],o=new window["MailMunch"+e.type](e.settings);i&&(o.dont_show=!0),MailMunchHelpers.registerLoadEvent(function(){MailMunchWidgets.push(o),n&&(o.testWidgetIds=n),t.loadFloatingButton(e),o.init()})}},loadFloatingButton:function(e){var t=e.settings.floatingButton;t&&t.enabled&&"undefined"!=typeof MMFloating&&new MMFloating(document.body,e.id,t)},chooseVariations:function(){var e=this,t=$.grep(this.widgets,function(e){return null==e.widget_test_id});this.chosenVariations=$.map(t,function(e){return e.id});var i=$.map(this.widgets,function(e){return e.widget_test_id}),n=$.grep(i,function(e,t){return null!=e&&t===$.inArray(e,i)});$.each(n,function(t,i){var n=$.grep(e.widgets,function(e){return e.widget_test_id==i}),o=$.map(n,function(e){return e.id}),a=n[Math.floor(Math.random()*n.length)];e.chosenVariations.push(a.id),e.testWidgetIds[i]=$.grep(o,function(){}