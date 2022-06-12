define(['jquery','mage/mage','jquery/jquery.cookie'],function($){'use strict';var CookieHelper=function(){this.defaults={expires:null,path:'/',domain:null,secure:false,lifetime:null,samesite:'lax'};function(){}
this.set=function(name,value,options){var expires,path,domain,secure,samesite;options=$.extend({},this.defaults,options||{});expires=lifetimeToExpires(options,this.defaults)||options.expires;path=options.path;domain=options.domain;secure=options.secure;samesite=options.samesite;document.cookie=name+'='+encodeURIComponent(value)+
(expires?'; expires='+expires.toUTCString():'')+
(path?'; path='+path:'')+
(domain?'; domain='+domain:'')+
(secure?'; secure':'')+
(samesite?'; samesite='+samesite:'lax');};this.get=function(){};this.clear=function(){};this.getCookieVal=function(){};return this;};$.extend(true,$,{mage:{cookies:new CookieHelper()}});return function(){}