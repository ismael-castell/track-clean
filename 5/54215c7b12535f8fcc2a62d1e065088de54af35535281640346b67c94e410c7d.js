!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(O){"use strict";var b={};b.fileapi=void 0!==O("<input type='file'/>").get(0).files,b.formdata=void 0!==window.FormData;var t=!!O.fn.prop;function r(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),O(e.target).ajaxSubmit(t))}function(){}function X(){if(O.fn.ajaxSubmit.debug){var e="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e)}}O.fn.attr2=function(){if(!t)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},O.fn.ajaxSubmit=function(L){if(!this.length)return X("ajaxSubmit: skipping submit process - no element selected"),this;var E,e,t,M=this;"function"==typeof L?L={success:L}:void 0===L&&(L={}),E=L.type||this.attr2("method"),(t=(t="string"==typeof(e=L.url||this.attr2("action"))?O.trim(e):"")||window.location.href||"")&&(t=(t.match(/^([^#]+)/)||[])[1]),L=O.extend(!0,{url:t,success:O.ajaxSettings.success,type:E||O.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},L);var r={};if(this.trigger("form-pre-serialize",[this,L,r]),r.veto)return X("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(L.beforeSerialize&&!1===L.beforeSerialize(this,L))return X("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var a=L.traditional;void 0===a&&(a=O.ajaxSettings.traditional);var n,F=[],i=this.formToArray(L.semantic,F);if(L.data&&(L.extraData=L.data,n=O.param(L.data,a)),L.beforeSubmit&&!1===L.beforeSubmit(i,this,L))return X("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[i,this,L,r]),r.veto)return X("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var o=O.param(i,a);n&&(o=o?o+"&"+n:n),"GET"==L.type.toUpperCase()?(L.url+=(0<=L.url.indexOf("?")?"&":"?")+o,L.data=null):L.data=o;var s=[];if(L.resetForm&&s.push(function(){M.resetForm()}),L.clearForm&&s.push(function(){M.clearForm(L.includeHidden)}),!L.dataType&&L.target){var u=L.success||function(){};s.push(function(e){var t=L.replaceTarget?"replaceWith":"html";O(L.target)[t](e).each(u,arguments)})}else L.success&&s.push(L.success);if(L.success=function(e,t,r){for(var a=L.context||this,n=0,i=s.length;n<i;n++)s[n].apply(a,[e,t,r||M,M])},L.error){var c=L.error;L.error=function(e,t,r){var a=L.context||this;c.apply(a,[e,t,r,M])}}if(L.complete){var l=L.complete;L.complete=function(e,t){var r=L.context||this;l.apply(r,[e,t,M])}}var f=0<O("input[type=file]:enabled",this).filter(function(){return""!==O(this).val()}).length,m="multipart/form-data",p=M.attr("enctype")==m||M.attr("encoding")==m,d=b.fileapi&&b.formdata;X("fileAPI :"+d);var h,v=(f||p)&&!d;!1!==L.iframe&&(L.iframe||v)?L.closeKeepAlive?O.get(L.closeKeepAlive,function(){h=x(i)}):h=x(i):h=(f||p)&&d?function(){}(i):O.ajax(L),M.removeData("jqxhr").data("jqxhr",h);for(var g=0;g<F.length;g++)F[g]=null;return this.trigger("form-submit-notify",[this,L]),this;function x(e){var t,l,f,i,m,p,d,r,a,h,v,o=M[0],g=O.Deferred();if(g.abort=function(e){d.abort(e)},e)for(t=0;t<F.length;t++)O(F[t]).prop("disabled",!1);if((l=O.extend(!0,{},O.ajaxSettings,L)).context=l.context||l,i="jqFormIO"+(new Date).getTime(),l.iframeTarget?(a=(m=O(l.iframeTarget)).attr2("name"))?i=a:m.attr2("name",i):(m=O('<iframe name="'+i+'" src="'+l.iframeSrc+'" />')).css({position:"absolute",top:"-1000px",left:"-1000px"}),p=m[0],d={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";X("aborting upload... "+t),this.aborted=1;try{p.contentWindow.document.execCommand&&p.contentWindow.document.execCommand("Stop")}catch(e){}m.attr("src",l.iframeSrc),d.error=t,l.error&&l.error.call(l.context,d,t,e),f&&O.event.trigger("ajaxError",[d,l,t]),l.complete&&l.complete.call(l.context,d,t)}},(f=l.global)&&0==O.active++&&O.event.trigger("ajaxStart"),f&&O.event.trigger("ajaxSend",[d,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,d,l))return l.global&&O.active--,g.reject(),g;if(d.aborted)return g.reject(),g;(r=o.clk)&&(a=r.name)&&!r.disabled&&(l.extraData=l.extraData||{},l.extraData[a]=r.value,"image"==r.type&&(l.extraData[a+".x"]=o.clk_x,l.extraData[a+".y"]=o.clk_y));var x=1,b=2;function y(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){X("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){X("cannot get iframe.contentDocument: "+e),r=t.document}return r}var n=O("meta[name=csrf-token]").attr("content"),s=O("meta[name=csrf-param]").attr("content");function(){}s&&n&&(l.extraData=l.extraData||{},l.extraData[s]=n),l.forceSync?u():setTimeout(u,10);var T,j,w,S=50;function(){}var k=O.parseXML||function(){},c=O.parseJSON||function(e){return window.eval("("+e+")")},A=function(){};return g}},O.fn.ajaxForm=function(){},O.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},O.fn.formToArray=function(){},O.fn.formSerialize=function(e){return O.param(this.formToArray(e))},O.fn.fieldSerialize=function(){},O.fn.fieldValue=function(){},O.fieldValue=function(){},O.fn.clearForm=function(e){return this.each(function(){O("input,select,textarea",this).clearFields(e)})},O.fn.clearFields=O.fn.clearInputs=function(){}