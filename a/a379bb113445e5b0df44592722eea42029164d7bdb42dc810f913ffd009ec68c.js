var dnnJscriptVersion="6.0.0";if(typeof(Sys.Browser.Chrome)=="undefined"){Sys.Browser.Chrome={};if(navigator.userAgent.indexOf(" Chrome/")>-1){Sys.Browser.agent=Sys.Browser.Chrome;Sys.Browser.version=parseFloat(navigator.userAgent.match(/Chrome\/(\d+\.\d+)/)[1]);Sys.Browser.name="Chrome";Sys.Browser.hasDebuggerStatement=true}}else{if(Sys.Browser.agent===Sys.Browser.InternetExplorer&&Sys.Browser.version>10){HTMLAnchorElement.prototype.attachEvent=function(a,b){if(a.substr(0,2)=="on"){a=a.substr(2)}this.addEventListener(a,b,false)};HTMLAnchorElement.prototype.detachEvent=function(){}}}if($&&$.ui&&$.ui.dialog){$.extend($.ui.dialog.prototype.options,{open:function(){},beforeClose:function(){}})}var DNN_HIGHLIGHT_COLOR="#9999FF";var COL_DELIMITER=String.fromCharCode(18);var ROW_DELIMITER=String.fromCharCode(17);var QUOTE_REPLACEMENT=String.fromCharCode(19);var KEY_LEFT_ARROW=37;var KEY_UP_ARROW=38;var KEY_RIGHT_ARROW=39;var KEY_DOWN_ARROW=40;var KEY_RETURN=13;var KEY_ESCAPE=27;Type.registerNamespace("dnn");dnn.extend=function(){};dnn.extend(dnn,{apiversion:new Number("04.02"),pns:"",ns:"dnn",diagnostics:null,vars:null,dependencies:new Array(),isLoaded:false,delay:[],_delayedSet:null,getVars:function(){},getVar:function(){},setVar:function(){},callPostBack:function(){},createDelegate:function(a,b){return Function.createDelegate(a,b)},doDelay:function(){},cancelDelay:function(){},decodeHTML:function(){},encode:function(){},encodeHTML:function(a){return a.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&apos;").replace(/\"/g,"&quot;")},encodeJSON:function(){},evalJSON:function(a){return Sys.Serialization.JavaScriptSerializer.deserialize(a)},escapeForEval:function(a){return a.replace(/\\/g,"\\\\").replace(/\'/g,"\\'").replace(/\r/g,"").replace(/\n/g,"\\n").replace(/\./,"\\.")},getEnumByValue:function(){},_onload:function(){},addIframeMask:function(){},removeIframeMask:function(){}});dnn.delayObject=function(){};dnn.delayObject.prototype={complete:function(){}};dnn.delayObject.registerClass("dnn.delayObject");dnn.ScriptRequest=function(){};dnn.ScriptRequest.prototype={load:function(){},xmlhttpStatusChange:function(){},statusChange:function(){},reload:function(){},complete:function(){},dispose:function(){}};dnn.ScriptRequest.registerClass("dnn.ScriptRequest");Type.registerNamespace("dnn.dom");dnn.extend(dnn.dom,{pns:"dnn",ns:"dom",browser:null,__leakEvts:[],scripts:[],scriptElements:[],tweens:[],attachEvent:function(){},cursorPos:function(){},cancelCollapseElement:function(){},collapseElement:function(){},__collapseElement:function(){},cancelExpandElement:function(){},disableTextSelect:function(){},expandElement:function(){},__expandElement:function(){},deleteCookie:function(){},getAttr:function(){},getById:function(b,a){return $get(b,a)},getByTagName:function(){},getParentByTagName:function(){},getCookie:function(){},getNonTextNode:function(){},addSafeHandler:function(){},destroyHandlers:function(){},getObjMethRef:function(){},getSibling:function(){},isNonTextNode:function(){},getScript:function(){},getScriptSrc:function(){},getScriptPath:function(){},scriptFile:function(){},loadScript:function(){},loadScripts:function(){},scriptStatus:function(){},setScriptLoaded:function(){},navigate:function(){},setCookie:function(){},getCurrentStyle:function(){},getFormPostString:function(){},getElementPostString:function(){},appendChild:function(b,a){return b.appendChild(a)},removeChild:function(a){return a.parentNode.removeChild(a)},createElement:function(a){return document.createElement(a.toLowerCase())}});dnn.dom.leakEvt=function(c,a,b){this.name=c;this.ctl=a;this.ptr=b};dnn.dom.leakEvt.registerClass("dnn.dom.leakEvt");dnn.dom.eventObject=function(b,a){this.object=b;this.srcElement=a};dnn.dom.eventObject.registerClass("dnn.dom.eventObject");dnn.dom.browserObject=function(){};dnn.dom.browserObject.prototype={toString:function(){return this.type+" "+this.version},isType:function(){}