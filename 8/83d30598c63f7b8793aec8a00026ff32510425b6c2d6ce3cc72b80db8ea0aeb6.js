!function(){"use strict";var t,e=function(){function t(t){return null==t?String(t):H[$.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function(){}function(){}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function c(t){return t in C?C[t]:C[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function l(t,e){return"number"!=typeof e||O[u(t)]?e:e+"px"}function(){}function(){}function p(t,e,n){for(b in e)n&&(o(e[b])||W(e[b]))?(o(e[b])&&!o(t[b])&&(t[b]={}),W(e[b])&&!W(t[b])&&(t[b]=[]),p(t[b],e[b],n)):e[b]!==w&&(t[b]=e[b])}function d(t,e){return null==e?x(t):x(t).filter(e)}function m(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function(){}function g(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?x.parseJSON(t):t):t}catch(e){return t}}var w,b,x,S,U,T,A=[],_=A.concat,j=A.filter,E=A.slice,P=window.document,k={},C={},O={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},N=/^\s*<(\w+|!)[^>]*>/,I=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,D=/^(?:body|html)$/i,F=/([A-Z])/g,q=["val","css","html","text","data","width","height","offset"],L=P.createElement("table"),B=P.createElement("tr"),J={tr:P.createElement("tbody"),tbody:L,thead:L,tfoot:L,td:B,th:B,"*":P.createElement("div")},z=/complete|loaded|interactive/,V=/^[\w-]*$/,H={},$=H.toString,M={},Z=P.createElement("div"),Q={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},W=Array.isArray||function(t){return t instanceof Array};return M.matches=function(){},U=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},T=function(){},M.fragment=function(){},M.Z=function(t,e){return new h(t,e)},M.isZ=function(t){return t instanceof M.Z},M.init=function(){},(x=function(t,e){return M.init(t,e)}).extend=function(t){var e,n=E.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){p(t,n,e)}),t},M.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=V.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:E.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},x.contains=P.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},x.type=t,x.isFunction=e,x.isWindow=n,x.isArray=W,x.isPlainObject=o,x.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},x.inArray=function(t,e,n){return A.indexOf.call(e,t,n)},x.camelCase=U,x.trim=function(t){return null==t?"":String.prototype.trim.call(t)},x.uuid=0,x.support={},x.expr={},x.noop=function(){},x.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)null!=(n=e(t[r],r))&&o.push(n);else for(i in t)null!=(n=e(t[i],i))&&o.push(n);return s(o)},x.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},x.grep=function(t,e){return j.call(t,e)},window.JSON&&(x.parseJSON=JSON.parse),x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){H["[object "+e+"]"]=e.toLowerCase()}),x.fn={constructor:M.Z,length:0,forEach:A.forEach,reduce:A.reduce,push:A.push,sort:A.sort,splice:A.splice,indexOf:A.indexOf,concat:function(){},map:function(){},slice:function(){return x(E.apply(this,arguments))},ready:function(){},get:function(){},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){},each:function(){},filter:function(){},add:function(){},is:function(){},not:function(){},has:function(){},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){},last:function(){},find:function(){},closest:function(){},parents:function(){},parent:function(){},children:function(){},contents:function(){},siblings:function(){},empty:function(){},pluck:function(){},show:function(){},replaceWith:function(t){return this.before(t).remove()},wrap:function(){},wrapAll:function(){},wrapInner:function(){},unwrap:function(){},clone:function(){},hide:function(){return this.css("display","none")},toggle:function(){},prev:function(t){return x(this.pluck("previousElementSibling")).filter(t||"*")},next:function(){},html:function(){},text:function(){},attr:function(){},removeAttr:function(){},prop:function(){},data:function(){},val:function(){},offset:function(){},css:function(){},index:function(){},hasClass:function(){},addClass:function(){},removeClass:function(){},toggleClass:function(){},scrollTop:function(){},scrollLeft:function(){},position:function(){},offsetParent:function(){}},x.fn.detach=x.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(){});x.fn[t]=function(i){var o,a=this[0];return i===w?n(a)?a["inner"+e]:r(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){(a=x(this)).css(t,m(this,i,e,a[t]()))})}}),["after","prepend","before","append"].forEach(function(e,n){var r=n%2;x.fn[e]=function(){var e,i,o=x.map(arguments,function(){}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=x.contains(P.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return x(t).remove();i.insertBefore(t,e),s&&function t(e,n){n(e);for(var r=0,i=e.childNodes.length;i>r;r++)t(e.childNodes[r],n)}(t,function(){})})})},x.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return x(t)[e](this),this}}),M.Z.prototype=h.prototype=x.fn,M.uniq=T,M.deserializeValue=g,x.zepto=M,x}();!function(t){function e(t){return t._zid||(t._zid=f++)}function(){}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t,e){return t.del&&!v&&t.e in g||!!e}function o(t){return w[t]||v&&g[t]||t}function(){}function s(t,r,a,s,u){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,a,s).forEach(function(e){delete m[c][e.i],"removeEventListener"in t&&t.removeEventListener(o(e.e),e.proxy,i(e,u))})})}function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(U,function(t,r){var i=n[t];e[t]=function(){return this[r]=b,i&&i.apply(n,arguments)},e[r]=x}),(n.defaultPrevented!==l?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function c(t){var e,n={originalEvent:t};for(e in t)S.test(e)||t[e]===l||(n[e]=t[e]);return u(n,t)}var l,f=1,h=Array.prototype.slice,p=t.isFunction,d=function(t){return"string"==typeof t},m={},y={},v="onfocusin"in window,g={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};y.click=y.mousedown=y.mouseup=y.mousemove="MouseEvents",t.event={add:a,remove:s},t.proxy=function(){},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},x=function(){return!1},S=/^([A-Z]|returnValue$|layer[XY]$)/,U={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(){},t.fn.off=function(e,n,r){var i=this;return e&&!d(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(d(n)||p(r)||!1===r||(r=n,n=l),!1===r&&(r=x),i.each(function(){s(this,e,r,n)}))},t.fn.trigger=function(e,n){return(e=d(e)||t.isPlainObject(e)?t.Event(e):u(e))._args=n,this.each(function(){e.type in g&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(){},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){d(t)||(t=(e=t).type);var n=document.createEvent(y[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),u(n)}}(e),function(t){function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function c(){}function(){}function(){}function(){}var p,d,m=0,y=window.document,v=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,g=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,b="application/json",x="text/html",S=/^\s*$/,U=y.createElement("a");U.href=window.location.href,t.active=0,t.ajaxJSONP=function(){},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:b,xml:"application/xml, text/xml",html:x,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i,u=t.extend({},e||{}),h=t.Deferred&&t.Deferred();for(p in t.ajaxSettings)void 0===u[p]&&(u[p]=t.ajaxSettings[p]);r(u),u.crossDomain||((n=y.createElement("a")).href=u.url,n.href=n.href,u.crossDomain=U.protocol+"//"+U.host!=n.protocol+"//"+n.host),u.url||(u.url=window.location.toString()),(i=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,i)),function(){}(u);var m=u.dataType,v=/\?.+=\?/.test(u.url);if(v&&(m="jsonp"),!1!==u.cache&&(e&&!0===e.cache||"script"!=m&&"jsonp"!=m)||(u.url=f(u.url,"_="+Date.now())),"jsonp"==m)return v||(u.url=f(u.url,u.jsonp?u.jsonp+"=?":!1===u.jsonp?"":"callback=?")),t.ajaxJSONP(u,h);var g,w=u.accepts[m],b={},x=function(){},T=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:window.location.protocol,A=u.xhr(),_=A.setRequestHeader;if(h&&h.promise(A),u.crossDomain||x("X-Requested-With","XMLHttpRequest"),x("Accept",w||"*/*"),(w=u.mimeType||w)&&(w.indexOf(",")>-1&&(w=w.split(",",2)[0]),A.overrideMimeType&&A.overrideMimeType(w)),(u.contentType||!1!==u.contentType&&u.data&&"GET"!=u.type.toUpperCase())&&x("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(d in u.headers)x(d,u.headers[d]);if(A.setRequestHeader=x,A.onreadystatechange=function(){},!1===o(A,u))return A.abort(),s(null,"abort",A,u,h),A;if(u.xhrFields)for(d in u.xhrFields)A[d]=u.xhrFields[d];var j=!("async"in u)||u.async;for(d in A.open(u.type,u.url,j,u.username,u.password),b)_.apply(A,b[d]);return u.timeout>0&&(g=setTimeout(function(){},u.timeout)),A.send(u.data?u.data:null),A},t.get=function(){},t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){},t.fn.load=function(){};var T=encodeURIComponent;t.param=function(){}}(e),(t=e).fn.serializeArray=function(){},t.fn.serialize=function(){},t.fn.submit=function(){},function(){try{getComputedStyle(void 0)}catch(e){var t=getComputedStyle;window.getComputedStyle=function(){}}}();var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function i(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})}function(){}var a,s,u=function(){function t(t,e){this.zepto=t,this.credentials=e}return t.prototype.makeRequest=function(t){var e=this,n=r({global:!1,beforeSend:function(t){return e.addAuthorizationHeader(t),!0}},t);return this.zepto.ajax(n)},t.prototype.makeRequestPromise=function(t){var e=this;return new Promise(function(n,i){var o=r({global:!1,beforeSend:function(t){return e.addAuthorizationHeader(t),!0}},t,{success:function(t){return n(t)},error:function(){}});e.zepto.ajax(o)})},t.prototype.addAuthorizationHeader=function(){},t}(),c=function(){function t(){}return t.prototype.trackAnonymousCustomer=function(){},t.prototype.getAnonymousId=function(){return null},t}(),l={emails:["user@email.com","$replace_with_email_of_current_use","replace_with_email_of_current_use","$user_email"],userIds:["some_user_id"],authTokens:["","{YOUR_PROFITWELL_TOKEN_HERE}","YOUR_PROFITWELL_TOKEN_HERE","PUBLIC_API_TOKEN_HERE"]};!function(t){t.anonymousId="__pw-aid",t.testingKey="__pw-test"}(a||(a={})),function(t){t.anonymousId="anonymous_id",t.docReferrer="doc_referrer"}(s||(s={}));var f,h,p=0;function d(t){throw new Error(t)}function m(t){return null==t}function(){}!function(t){t.extendTrial="extend_trial",t.planUpgrade="plan_upgrade",t.reactivation="reactivation",t.reactivationUnsubscribe="reactivation_unsubscribe"}(f||(f={})),function(t){t.accepted="accepted",t.rejected="rejected",t.notOffered="not_offered",t.error="error"}(h||(h={}));var v=function(){function t(t,e,n,r,a,s,u,c,l,f,h,p){var d=this;this.zepto=t,this.urlBuilder=e,this.credentials=n,this.ajax=r,this.customerIdentity=a,this.urlTracker=s,this.anonymousTracker=u,this.urlChangeListener=c,this.widgetService=l,this.customStyles=f,this.notificationFetcher=h,this.messageService=p,this.isAlreadyStarted=!1,this.onPaymentRecoveryCallback=y,this.maybeFetchNotificationAndTrackCurrentUrl=function(){return i(d,void 0,void 0,function(){var t;return o(this,function(e){switch(e.label){case 0:return this.urlTracker.maybeSetCurrentUrlAsTracked()?[4,this._fetchNotificationAndTrackCurrentUrl()]:[2];case 1:return(t=e.sent()).isEmpty||204===t.xhr.status?[2]:(this.widgetService.shouldRenderInIFrame(t.xhr)?this.widgetService.loadSameOriginIFrame(t.data):(this.widgetService.delete(),this.zepto("body").append(t.data)),[2])}})})}}return t.prototype.Zepto=function(){return this.zepto},t.prototype.patch=function(t){t(this)},t.prototype.dump=function(){return{retain_url:this.urlBuilder.getRetainUrl(),sensing_url:this.urlBuilder.getSensingUrl(),is_url_change_tracking_enabled:this.urlChangeListener.isEnabled,is_already_started:this.isAlreadyStarted,auth_token:this.credentials.getAuthToken(),customer_credentials:this.getCustomerAjaxParamsWithAnonymousId()}},t.prototype.auth_token=function(){},t.prototype.pw_url=function(t){this.urlBuilder.setRetainUrl(t),this.urlBuilder.setSensingUrl(t)},t.prototype.user_email=function(t){return this.customerIdentity.setEmail(t),this.urlTracker.reset(),this.triggerUserRequiredActions(),t},t.prototype.user_id=function(t){return this.setUserId(t),t},t.prototype.user_stripe_id=function(t){return this.setUserId(t),t},t.prototype.on_load=function(){},t.prototype.start=function(t){this.checkStartRunsOnce()&&(this.execStartCommands(t),this.shouldTrackCustomerAsAnonymous()&&this.anonymousTracker.trackAnonymousCustomer())},t.prototype.events=function(t){this.onPaymentRecoveryCallback=t.on_payment_recovered},t.prototype.payment_recovered=function(){try{this.onPaymentRecoveryCallback()}catch(t){console.warn("Something went wrong calling the payment recovered event callback")}},t.prototype.send_error=function(t){return this.ajax.makeRequest({url:this.urlBuilder.buildSendErrorUrl(),type:"POST",data:r({error:t},this.getCustomerAjaxParams())})},t.prototype.makeRequest=function(t){return this.ajax.makeRequest(t)},t.prototype.get_param=function(){},t.prototype.cq_get=function(){this.maybeFetchNotificationAndTrackCurrentUrl()},t.prototype.cq_snooze=function(t){return this.postNotificationCommand({action:"snooze",uuid:t})},t.prototype.cq_dismiss=function(){},t.prototype.cq_resolve=function(t,e,n){var i=this;return this.ajax.makeRequest({url:this.urlBuilder.buildNotificationUrl(),type:"POST",data:r({action:"resolve",uuid:t,data:JSON.stringify(e)},this.getCustomerAjaxParams()),success:function(t){return n(t)},error:function(t,e,r){i.sendAjaxError(r);var o=JSON.parse(t.responseText);return n(o.detail)}})},t.prototype.cq_demo=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var i=r({params:e.join(",")},this.customStyles.toAjaxParams());return this.ajax.makeRequest({url:this.urlBuilder.buildNotificationDemoUrl(),type:"GET",data:i,success:function(e){return t.widgetService.loadSameOriginIFrame(e)},error:function(e,n,r){t.sendAjaxError(r);var i=JSON.parse(e.responseText);console.error(i.detail)}})},t.prototype.cq_feedback=function(t,e,n){var r=this;return this.ajax.makeRequest({url:this.urlBuilder.buildNotificationFeedbackUrl(),type:"POST",data:{uuid:t,message:e},success:function(t){return n(t)},error:function(t,e,i){r.sendAjaxError(i);var o=JSON.parse(t.responseText);return n(o.detail)}})},t.prototype.url_tracking=function(){},t.prototype.useFullScreenWidget=function(){this.widgetService.showFullScreen()},t.prototype.useNotificationWidget=function(){},t.prototype.disposeWidget=function(){this.widgetService.hide()},t.prototype.show_cc_form=function(t){var n=this,i=r({},this.getCustomerAjaxParams(),this.customStyles.toAjaxParams());return this.ajax.makeRequest({url:this.urlBuilder.buildCreditCardFormUrl(),type:"GET",data:i,success:function(r,i,o){return n.widgetService.shouldRenderInIFrame(o)?n.widgetService.loadSameOriginIFrame(r,t):(n.widgetService.delete(),e(".__pw_dotjs_content").remove(),e(".__pw-alertify").remove(),e("body").append(r),e(".__pw_dotjs_content").on("__pw-cc-form-callback",t))},error:function(t,e,r){n.sendAjaxError(r);var i=JSON.parse(t.responseText);return console.error(i.detail)}})},t.prototype.submit_cc_form=function(t,e){var n=this;return this.ajax.makeRequest({url:this.urlBuilder.buildCreditCardFormUrl(),type:"POST",data:r({card_token:t},this.getCustomerAjaxParams()),success:function(){},error:function(t,r,i){n.sendAjaxError(i);var o=JSON.parse(t.responseText);e(o.detail,!1)}})},t.prototype.zuora_hmac=function(t,e){var n=this,r=this.urlBuilder.buildZuoraHmacUrl(),i={account_key:t};return this.ajax.makeRequest({url:r,type:"GET",data:i,success:function(t){return e(JSON.parse(t),!0)},error:function(t,r,i){n.sendAjaxError(i);var o=JSON.parse(t.responseText);return e(o.detail,!1)}})},t.prototype.confirmPlanUpgrade=function(t,e,n){return this.confirmPlanUpgradeV2(t,e,n)},t.prototype.confirmPlanUpgradeV2=function(t,e,n){return this.sendConfirmPlanUpgradeRequest(t,e,n)},t.prototype.digestScriptDataAttributes=function(){var t=this.zepto("#profitwell-js");this.digestPatchDataAttribute(t),this.digestAuthDataAttribute(t)},t.prototype.styles=function(t){this.customStyles.setCustomStyles(t)},t.prototype.on_cancellation=function(){return i(this,void 0,void 0,function(){var t,e,n=this;return o(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.ajax.makeRequestPromise({url:this.urlBuilder.buildCreateSalvageOfferUrl(),data:r({},this.getCustomerAjaxParams(),this.customStyles.toAjaxParams()),type:"POST"})];case 1:return"error"===(t=i.sent()).status?[2,{status:h.error,details:"Server error"}]:t.data.has_offer?(e=t.data,[2,new Promise(function(t){n.widgetService.loadSameOriginIFrame(e.rendered_widget),n.messageService.addOneTimeListener("salvageOfferComplete",t)})]):[2,{status:h.notOffered,details:t.data.reason}];case 2:return i.sent(),[2,{status:h.error,details:"Server error"}];case 3:return[2]}})})},t.prototype.sendAjaxError=function(t){},t.prototype.setAuthToken=function(t){this.credentials.setAuthToken(t)&&this.urlTracker.reset()},t.prototype.checkStartRunsOnce=function(){return this.isAlreadyStarted?(console.warn("Discarded second start call: profitwell can't be started twice."),!1):(this.isAlreadyStarted=!0,!0)},t.prototype.execStartCommands=function(t){for(var e=t,n=0,r=Object.keys(e);n<r.length;n++){var i=r[n],o=e[i];this[i](o)}},t.prototype.shouldTrackCustomerAsAnonymous=function(){return this.credentials.isAuthTokenValid()&&!this.hasDunningQueryParam()&&!this.customerIdentity.isValid()&&!this.hasDoNotTrackHeader()},t.prototype.hasDoNotTrackHeader=function(){},t.prototype._fetchNotificationAndTrackCurrentUrl=function(){return i(this,void 0,void 0,function(){var t;return o(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.notificationFetcher.fetchNotificationAndTrackCurrentUrl(r({},this.getCustomerAjaxParamsWithAnonymousId(),this.customStyles.toAjaxParams()))];case 1:return[2,e.sent()];case 2:return t=e.sent(),this.send_error(t.stack),[2,Promise.reject(t)];case 3:return[2]}})})},t.prototype.getCustomerAjaxParamsWithAnonymousId=function(){var t=this.getCustomerAjaxParams(),e=this.anonymousTracker.getAnonymousId();return m(e)?t:r({},t,{anonymous_id:e})},t.prototype.postNotificationCommand=function(t){var e=this;return this.ajax.makeRequest({url:this.urlBuilder.buildNotificationUrl(),type:"POST",data:r({},t,this.getCustomerAjaxParams()),error:function(t,n,r){e.sendAjaxError(r)}})},t.prototype.showDunningForm=function(){var t=this;return this.ajax.makeRequest({url:this.buildDunningFormUrl(),type:"GET",data:this.customStyles.toAjaxParams(),success:function(n,r,i){return t.widgetService.shouldRenderInIFrame(i)?t.widgetService.loadSameOriginIFrame(n):(t.widgetService.delete(),e(".__pw_dotjs_content").remove(),e(".__pw-alertify").remove(),e("body").append(n))},error:function(e,n,r){t.sendAjaxError(r)}})},t.prototype.getCustomerAjaxParams=function(){return this.customerIdentity.toAjaxParams()},t.prototype.triggerUserRequiredActions=function(){var t=this;setTimeout(function(){t.maybeFetchNotificationAndTrackCurrentUrl(),t.urlChangeListener.initialize(function(){return t.urlTracker.maybeTrackCurrentUrl()})},p)},t.prototype.setUserId=function(t){this.customerIdentity.setUserId(t),this.urlTracker.reset(),this.triggerUserRequiredActions()},t.prototype.hasDunningQueryParam=function(){return null!==this.getDunningQueryParam()||this.hasShortActivityQueryParam()},t.prototype.getDunningQueryParam=function(){return this.get_param("__pw_iic")},t.prototype.buildDunningFormUrl=function(){var t=this.getDunningQueryParam(),e=this.getActivityQueryParam();if(null!==t){var n=this.get_param("at")||"";return this.urlBuilder.buildDunningFormUrl(t,n)}if(null!==e)return this.urlBuilder.buildSmsDunningFormUrl(e);throw new Error("Cannot build the dunning form URL without any params")},t.prototype.hasActivityQueryParam=function(){},t.prototype.hasShortActivityQueryParam=function(){var t=this.getActivityQueryParam();return null!==t&&t.length<20},t.prototype.getActivityQueryParam=function(){return this.get_param("__pw")},t.prototype.getActivityOrPreviewPayload=function(){var t=this.getActivityQueryParam();return!this.canParseActivityPayload()||t.length<20?{uuid:"",type:""}:JSON.parse(atob(decodeURIComponent(t)))},t.prototype.canParseActivityPayload=function(){if(!this.hasActivityQueryParam())throw new Error("Cannot parse the activity payload without params");return!!window.atob||(console.warn("This link doesn't work on this browser. Please, try a different one."),!1)},t.prototype.loadActivityOrPreview=function(){var t=this.getActivityOrPreviewPayload();!function(t){return"preview"in t&&!0===t.preview}(t)?this.loadActivity(t):this.loadPreview(t.type)},t.prototype.loadPreview=function(t){this.cq_demo(t)},t.prototype.loadActivity=function(t){var e=t.type,n=t.uuid;switch(e){case f.planUpgrade:return void this.loadPlanUpgrade(n);case f.reactivation:return void this.loadReactivation(n);case f.extendTrial:return void this.loadExtendTrial(n);case f.reactivationUnsubscribe:return void this.loadReactivationUnsubscribe(n)}},t.prototype.loadPlanUpgrade=function(t){var e=this,n=this.customStyles.toString();this.ajax.makeRequest({url:this.urlBuilder.buildPlanUpgradeUrl(t,n),type:"POST",success:function(t){return e.widgetService.loadSameOriginIFrame(t)},error:function(t,n,r){e.sendAjaxError(r)}})},t.prototype.sendConfirmPlanUpgradeRequest=function(t,e,n){var r=this;return this.ajax.makeRequest({url:this.urlBuilder.buildConfirmPlanUpgradeUrl(t),type:"POST",success:e,error:function(){}})},t.prototype.loadReactivation=function(t){var e=this;this.ajax.makeRequest({url:this.urlBuilder.buildReactivationUrl(t),type:"GET",data:this.customStyles.toAjaxParams(),success:function(t){return e.widgetService.loadSameOriginIFrame(t)},error:function(t,n,r){e.sendAjaxError(r)}})},t.prototype.loadReactivationUnsubscribe=function(t){var e=this;this.ajax.makeRequest({url:this.urlBuilder.buildReactivationUnsubscribe(t),type:"POST",data:this.customStyles.toAjaxParams(),success:function(t){return e.widgetService.loadSameOriginIFrame(t)},error:function(t,n,r){e.sendAjaxError(r)}})},t.prototype.loadExtendTrial=function(t){var e=this;this.ajax.makeRequest({url:this.urlBuilder.buildExtendTrialUrl(t),type:"POST",data:this.customStyles.toAjaxParams(),success:function(t){return e.widgetService.loadSameOriginIFrame(t)},error:function(t,n,r){e.sendAjaxError(r)}})},t.prototype.digestAuthDataAttribute=function(t){var e=t.attr("data-pw-auth");e&&this.setAuthToken(e)},t.prototype.digestPatchDataAttribute=function(t){var e=t.attr("data-pw-patch");if(e){var n=window;this.patch(n[e])}},t}(),g=function(){function t(){this.authToken=""}return t.prototype.setAuthToken=function(t){return this.isTokenValid(t)?(this.authToken=t,!0):(console.warn('Invalid token "'+t+'" attempted to be set'),!1)},t.prototype.getAuthToken=function(){return this.authToken},t.prototype.isAuthTokenValid=function(){return this.isTokenValid(this.authToken)},t.prototype.isTokenValid=function(){},t}(),w=function(){function(){}return t.prototype.setEmail=function(){},t.prototype.setUserId=function(t){this.userId=t,this.isUserIdValid=this.validateUserId()},t.prototype.isValid=function(){return this.isEmailValid||this.isUserIdValid},t.prototype.toAjaxParams=function(){},t.prototype.validateEmail=function(){if(!this.email)return!1;var t=this.email.toLowerCase();return l.emails.every(function(e){return e!==t})},t.prototype.validateUserId=function(){if(!this.userId)return!1;var t=String(this.userId).toLowerCase();return l.userIds.every(function(e){return e!==t})},t}(),b=function(){function t(){this.customStyles={}}return t.prototype.setCustomStyles=function(t){this.customStyles=t},t.prototype.getCustomStyles=function(){return this.customStyles},t.prototype.toString=function(){return JSON.stringify(this.customStyles)},t.prototype.toAjaxParams=function(){return{custom_styles:this.toString()}},t}();function x(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=this[t];if("function"==typeof r)return r.apply(this,e)}var S=function(){function t(t){this.window=t}return t.prototype.addOneTimeListener=function(t,e){var n=this,r=function(i){var o=i.data;i.origin!==n.window.origin||m(o)||o.type!==t||(n.window.removeEventListener("message",r),e(o.payload))};this.window.addEventListener("message",r)},t}();var U=function(t){function e(e){var n=t.call(this,e.statusText+" (status: "+e.status+", url: "+e.responseURL+") - "+function(t){try{return JSON.parse(t.responseText).detail}catch(t){return"Detail not available"}}(e)+".")||this;return n.xhr=e,n.name="FetchNotificationError",n.xhr=e,n}return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e}(Error),T=function(){function t(t,e){this.urlBuilder=t,this.ajax=e}return t.prototype.fetchNotificationAndTrackCurrentUrl=function(t){var e=this;return new Promise(function(n,r){e.ajax.makeRequest({url:e.urlBuilder.buildNotificationUrl(),type:"GET",data:t,success:function(t,e,r){n({isEmpty:!1,data:t,xhr:r})},error:function(){}})})},t}(),A=function(){function t(t,e){this.retainUrl=t,this.sensingUrl=e}return t.buildSingleDomain=function(){},t.buildSplitDomains=function(){return new t("https://retain-api.profitwell.com/","https://api.profitwell-events.com/")},t.prototype.setRetainUrl=function(t){this.retainUrl=this.ensureTrailingSlash(t)},t.prototype.setSensingUrl=function(t){this.sensingUrl=this.ensureTrailingSlash(t)},t.prototype.getRetainUrl=function(){return this.retainUrl},t.prototype.getSensingUrl=function(){return this.sensingUrl},t.prototype.buildCreditCardFormUrl=function(){return this.buildDotJsUrl("generic-update-card/")},t.prototype.buildDunningFormUrl=function(t,e){return this.buildDotJsUrl("pw/update-card/"+t)+"/"+("?at="+e+"&custom_url=true")},t.prototype.buildSmsDunningFormUrl=function(t){return this.buildDotJsUrl("pw/update-card-sms/"+t)+"/?custom_url=true"},t.prototype.buildZuoraHmacUrl=function(){return this.buildDotJsUrl("zuora-hmac/")},t.prototype.buildPlanUpgradeUrl=function(t,e){return this.buildDotJsUrl("plan-upgrade/"+t+"/")+"?custom_styles="+e},t.prototype.buildConfirmPlanUpgradeUrl=function(t){return this.buildDotJsUrl("confirm-plan-upgrade/"+t+"/")},t.prototype.buildReactivationUrl=function(t){return this.buildDotJsUrl("reactivation/"+t+"/")},t.prototype.buildReactivationUnsubscribe=function(){},t.prototype.buildExtendTrialUrl=function(t){return this.buildDotJsUrl("extend-trial/"+t+"/")},t.prototype.buildNotificationUrl=function(){return this.buildDotJsV1Url("quests/customer/")},t.prototype.buildHasOpenNotificationsUrl=function(){return this.buildDotJsV1Url("customer/has-notifications/")},t.prototype.buildFetchActiveNotificationUrl=function(){return this.buildDotJsV1Url("customer/active-notification/")},t.prototype.buildTrackingUrl=function(){return this.buildSensingUrl("customer/event/")},t.prototype.buildTrackAnonymousCustomerUrl=function(){return this.buildDotJsV1Url("anonymous/event/")},t.prototype.buildNotificationDemoUrl=function(){return this.buildDotJsV1Url("quests/demo/")},t.prototype.buildNotificationFeedbackUrl=function(){return this.buildDotJsV1Url("quests/feedback/")},t.prototype.buildSendErrorUrl=function(){return this.buildDotJsV1Url("quests/error/")},t.prototype.buildCreateSalvageOfferUrl=function(){return this.buildDotJsUrl("create-salvage-offer/")},t.prototype.ensureTrailingSlash=function(t){return"/"!==t.substr(-1)?t+"/":t},t.prototype.buildDotJsUrl=function(t){return this.retainUrl+"dotjs/"+t},t.prototype.buildDotJsV1Url=function(t){return this.retainUrl+"dotjs/v1/"+t},t.prototype.buildSensingUrl=function(t){return this.sensingUrl+"dotjs/v1/"+t},t}(),_=function(){function t(){this.isEnabled=!1}return t.prototype.initialize=function(){},t.prototype.disable=function(){},t}(),j=function(){function t(t,e,n){this.ajax=t,this.urlBuilder=e,this.customerIdentity=n,this.emptyUrl="",this.trackedUrl=this.emptyUrl}return t.prototype.maybeTrackCurrentUrl=function(){this.maybeSetCurrentUrlAsTracked()&&this.trackCurrentUrl()},t.prototype.maybeSetCurrentUrlAsTracked=function(){var t=window.location.href;return!(!this.customerIdentity.isValid()||this.trackedUrl===t)&&(this.trackedUrl=t,!0)},t.prototype.trackCurrentUrl=function(){var t,e=r(((t={})[s.docReferrer]=document.referrer,t),this.customerIdentity.toAjaxParams());this.ajax.makeRequest({url:this.urlBuilder.buildTrackingUrl(),type:"POST",contentType:"application/json",data:JSON.stringify(e)})},t.prototype.reset=function(){this.trackedUrl=this.emptyUrl},t}(),E=function(){function t(t){this.zepto=t,this.iFrameId="__pw_frame"}return t.prototype.loadSameOriginIFrame=function(t,e){var n,r,i=this,o=this.createContentIFrame().get(0),a=(n=o.contentDocument,r="Error creating Profitwell iframe",m(n)?m(r)?d("Unexpected nil value"):d(r):n);e&&o.addEventListener("load",function(){}),a.open(),a.write(t),a.close()},t.prototype.showFullScreen=function(){},t.prototype.showNotification=function(t){var e={right:0,width:"390px",height:t};this.showIFrame(e)},t.prototype.hide=function(){},t.prototype.delete=function(){var t=this.getContentIFrame();t.size()>0&&t.remove()},t.prototype.shouldRenderInIFrame=function(t){return"iframe"===t.getResponseHeader("render-in")},t.prototype.createContentIFrame=function(){this.delete();var t=e("<iframe />",{id:this.iFrameId});return t.css({border:0,width:0,height:0}),t.appendTo("body"),t},t.prototype.getBaseIFrameCSS=function(){return{zIndex:"2147483647",position:"fixed",top:0,border:0}},t.prototype.getContentIFrame=function(){}