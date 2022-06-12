window._g=window._g||{};_g.shared={};void 0===window.console&&(window.console={log:function(b){}});
_g.shared.HTTP=new function(){};_g.HTTP=_g.shared.HTTP;
_g.shared.Util=new function(){};_g.Util=_g.shared.Util;
_g.shared.Sling=function(){}();_g.Sling=_g.shared.Sling;
_g.shared.XSS=new function(){};_g.XSS=_g.shared.XSS;_g.XSS.KEY_SUFFIX="_xss";_g.XSS.KEY_REGEXP=new RegExp(_g.XSS.KEY_SUFFIX+"$");
_g.shared.I18n=Granite.I18n;_g.I18n=_g.shared.I18n;_g.shared.I18n.getMessage=Granite.I18n.get;_g.shared.I18n.getVarMessage=Granite.I18n.getVar;
_g.shared.String=new function(){};_g.String=_g.shared.String;
_g.shared.ClientSidePersistence=function(){};
_g.shared.ClientSidePersistence.EVENT_NAME="ClientSidePersistence";_g.shared.ClientSidePersistence.MODE_SESSION={name:"session",read:function(b){return b.getWindow().sessionStorage.getItem(b.PERSISTENCE_NAME)},write:function(b,c){if(!Granite.OptOutUtil.isOptedOut())try{b.getWindow().sessionStorage.setItem(b.PERSISTENCE_NAME,c)}catch(a){}}};
_g.shared.ClientSidePersistence.MODE_LOCAL={name:"local",read:function(){},write:function(){}};_g.shared.ClientSidePersistence.decoratePersistenceName=function(b){return b};
_g.shared.ClientSidePersistence.MODE_WINDOW={name:"window",read:function(b){return b.getWindow().name},write:function(){}};
_g.shared.ClientSidePersistence.MODE_COOKIE={COOKIE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("SessionPersistence"),name:"cookie",read:function(){},write:function(){}};
_g.shared.ClientSidePersistence.getDefaultConfig=function(){};
_g.shared.ClientSidePersistence.CookieHelper={set:function(){},read:function(){},erase:function(b){_g.shared.ClientSidePersistence.CookieHelper.set(b,
"",-1)}};_g.shared.ClientSidePersistence.clearAllMaps=function(){};_g.I18n.init();window.CQ=window.CQ||{};CQ.shared=_g.shared;CQ.Sling=CQ.shared.Sling;CQ.I18n=CQ.shared.I18n;G_XHR_HOOK="undefined"!=typeof CQ_XHR_HOOK?CQ_XHR_HOOK:void 0;
G_RELOAD_HOOK="undefined"!=typeof CQ_RELOAD_HOOK?CQ_RELOAD_HOOK:void 0;G_IS_HOOKED="undefined"!=typeof CQ_IS_HOOKED?CQ_IS_HOOKED:void 0;G_CONTENT_PATH="undefined"!=typeof CQ_CONTENT_PATH?CQ_CONTENT_PATH:void 0;
CQ.shared.Form=function(){}();
CQ.shared.User=function(){}();CQ.shared.User.PROXY_URI=CQ.shared.HTTP.externalize("/libs/cq/security/userinfo"+CQ.shared.HTTP.EXTENSION_JSON);CQ.shared.User.lazyInit();
CQ.shared.I18n.init({locale:function(){}