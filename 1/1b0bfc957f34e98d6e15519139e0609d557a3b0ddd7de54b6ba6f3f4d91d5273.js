/*!
 * jQuery Form Plugin
 * version: 3.32.0-2013.04.09
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
(function(f){var c={};c.fileapi=f("<input type='file'/>").get(0).files!==undefined;c.formdata=window.FormData!==undefined;var e=!!f.fn.prop;f.fn.attr2=function(){};f.fn.ajaxSubmit=function(i){if(!this.length){d("ajaxSubmit: skipping submit process - no element selected");return this}var h,z,l,n=this;if(typeof i=="function"){i={success:i}}h=this.attr2("method");z=this.attr2("action");l=(typeof z==="string")?f.trim(z):"";l=l||window.location.href||"";if(l){l=(l.match(/^([^#]+)/)||[])[1]}i=f.extend(true,{url:l,success:f.ajaxSettings.success,type:h||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},i);var t={};this.trigger("form-pre-serialize",[this,i,t]);if(t.veto){d("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(i.beforeSerialize&&i.beforeSerialize(this,i)===false){d("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var m=i.traditional;if(m===undefined){m=f.ajaxSettings.traditional}var r=[];var C,D=this.formToArray(i.semantic,r);if(i.data){i.extraData=i.data;C=f.param(i.data,m)}if(i.beforeSubmit&&i.beforeSubmit(D,this,i)===false){d("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[D,this,i,t]);if(t.veto){d("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var x=f.param(D,m);if(C){x=(x?(x+"&"+C):C)}if(i.type.toUpperCase()=="GET"){i.url+=(i.url.indexOf("?")>=0?"&":"?")+x;i.data=null}else{i.data=x}var F=[];if(i.resetForm){F.push(function(){n.resetForm()})}if(i.clearForm){F.push(function(){n.clearForm(i.includeHidden)})}if(!i.dataType&&i.target){var j=i.success||function(){};F.push(function(q){var k=i.replaceTarget?"replaceWith":"html";f(i.target)[k](q).each(j,arguments)})}else{if(i.success){F.push(i.success)}}i.success=function(){};var B=f('input[type=file]:enabled[value!=""]',this);var o=B.length>0;var A="multipart/form-data";var w=(n.attr("enctype")==A||n.attr("encoding")==A);var v=c.fileapi&&c.formdata;d("fileAPI :"+v);var p=(o||w)&&!v;var u;if(i.iframe!==false&&(i.iframe||p)){if(i.closeKeepAlive){f.get(i.closeKeepAlive,function(){u=E(D)})}else{u=E(D)}}else{if((o||w)&&v){u=s(D)}else{u=f.ajax(i)}}n.removeData("jqxhr").data("jqxhr",u);for(var y=0;y<r.length;y++){r[y]=null}this.trigger("form-submit-notify",[this,i]);return this;function(){}function(){}function E(ad){var J=n[0],I,Z,T,ab,W,L,O,M,N,X,aa,R;var ag=f.Deferred();if(ad){for(Z=0;Z<r.length;Z++){I=f(r[Z]);if(e){I.prop("disabled",false)}else{I.removeAttr("disabled")}}}T=f.extend(true,{},f.ajaxSettings,i);T.context=T.context||T;W="jqFormIO"+(new Date().getTime());if(T.iframeTarget){L=f(T.iframeTarget);X=L.attr2("name");if(!X){L.attr2("name",W)}else{W=X}}else{L=f('<iframe name="'+W+'" src="'+T.iframeSrc+'" />');L.css({position:"absolute",top:"-1000px",left:"-1000px"})}O=L[0];M={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){}};ab=T.global;if(ab&&0===f.active++){f.event.trigger("ajaxStart")}if(ab){f.event.trigger("ajaxSend",[M,T])}if(T.beforeSend&&T.beforeSend.call(T.context,M,T)===false){if(T.global){f.active--}ag.reject();return ag}if(M.aborted){ag.reject();return ag}N=J.clk;if(N){X=N.name;if(X&&!N.disabled){T.extraData=T.extraData||{};T.extraData[X]=N.value;if(N.type=="image"){T.extraData[X+".x"]=J.clk_x;T.extraData[X+".y"]=J.clk_y}}}var S=1;var P=2;function(){}var H=f("meta[name=csrf-token]").attr("content");var G=f("meta[name=csrf-param]").attr("content");if(G&&H){T.extraData=T.extraData||{};T.extraData[G]=H}function(){}if(T.forceSync){Y()}else{setTimeout(Y,10)}var ae,af,ac=50,K;function V(an){if(M.aborted||K){return}af=Q(O);if(!af){d("cannot access response document");an=P}if(an===S&&M){M.abort("timeout");ag.reject(M,"timeout");return}else{if(an==P&&M){M.abort("server abort");ag.reject(M,"error","server abort");return}}if(!af||af.location.href==T.iframeSrc){if(!aa){return}}if(O.detachEvent){O.detachEvent("onload",V)}else{O.removeEventListener("load",V,false)}var al="success",ap;try{if(aa){throw"timeout"}var ak=T.dataType=="xml"||af.XMLDocument||f.isXMLDoc(af);d("isXml="+ak);if(!ak&&window.opera&&(af.body===null||!af.body.innerHTML)){if(--ac){d("requeing onLoad callback, DOM not available");setTimeout(V,250);return}}var aq=af.body?af.body:af.documentElement;M.responseText=aq?aq.innerHTML:null;M.responseXML=af.XMLDocument?af.XMLDocument:af;if(ak){T.dataType="xml"}M.getResponseHeader=function(au){var at={"content-type":T.dataType};return at[au]};if(aq){M.status=Number(aq.getAttribute("status"))||M.status;M.statusText=aq.getAttribute("statusText")||M.statusText}var ah=(T.dataType||"").toLowerCase();var ao=/(json|script|text)/.test(ah);if(ao||T.textarea){var am=af.getElementsByTagName("textarea")[0];if(am){M.responseText=am.value;M.status=Number(am.getAttribute("status"))||M.status;M.statusText=am.getAttribute("statusText")||M.statusText}else{if(ao){var ai=af.getElementsByTagName("pre")[0];var ar=af.getElementsByTagName("body")[0];if(ai){M.responseText=ai.textContent?ai.textContent:ai.innerText}else{if(ar){M.responseText=ar.textContent?ar.textContent:ar.innerText}}}}}else{if(ah=="xml"&&!M.responseXML&&M.responseText){M.responseXML=U(M.responseText)}}try{ae=k(M,ah,T)}catch(aj){al="parsererror";M.error=ap=(aj||al)}}catch(aj){d("error caught: ",aj);al="error";M.error=ap=(aj||al)}if(M.aborted){d("upload aborted");al=null}if(M.status){al=(M.status>=200&&M.status<300||M.status===304)?"success":"error"}if(al==="success"){if(T.success){T.success.call(T.context,ae,"success",M)}ag.resolve(M.responseText,"success",M);if(ab){f.event.trigger("ajaxSuccess",[M,T])}}else{if(al){if(ap===undefined){ap=M.statusText}if(T.error){T.error.call(T.context,M,al,ap)}ag.reject(M,"error",ap);if(ab){f.event.trigger("ajaxError",[M,T,ap])}}}if(ab){f.event.trigger("ajaxComplete",[M,T])}if(ab&&!--f.active){f.event.trigger("ajaxStop")}if(T.complete){T.complete.call(T.context,M,al)}K=true;if(T.timeout){clearTimeout(R)}setTimeout(function(){},100)}var U=f.parseXML||function(ah,ai){if(window.ActiveXObject){ai=new ActiveXObject("Microsoft.XMLDOM");ai.async="false";ai.loadXML(ah)}else{ai=(new DOMParser()).parseFromString(ah,"text/xml")}return(ai&&ai.documentElement&&ai.documentElement.nodeName!="parsererror")?ai:null};var q=f.parseJSON||function(ah){return window["eval"]("("+ah+")")};var k=function(){};return ag}};f.fn.ajaxForm=function(){};function(){}function(){}f.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};f.fn.formToArray=function(){};f.fn.formSerialize=function(g){return f.param(this.formToArray(g))};f.fn.fieldSerialize=function(){};f.fn.fieldValue=function(){};f.fieldValue=function(){};f.fn.clearForm=function(g){return this.each(function(){f("input,select,textarea",this).clearFields(g)})};f.fn.clearFields=f.fn.clearInputs=function(){};f.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()}})};f.fn.enable=function(g){if(g===undefined){g=true}return this.each(function(){this.disabled=!g})};f.fn.selected=function(){};f.fn.ajaxSubmit.debug=false;function(){}