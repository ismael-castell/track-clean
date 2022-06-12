/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(){})(jQuery,this);
/*
 * jQuery hashchange event - v1.3 - 2/11/2010 + FIX - 2014 - (Remove use of $.browser (removed in jQuery 1.9) and use regex)
 * ORIGINAL : http://benalman.com/projects/jquery-hashchange-plugin/
 * FIX : https://github.com/Krinkle/jquery-hashchange/blob/8d51dae59c4674a97b6c825ef2e1ac8f606e589c/jquery.ba-hashchange.js
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
!function(t,n,e){var o,i="hashchange",r=document,c=t.event.special,a=r.documentMode,u="on"+i in n&&(void 0===a||a>7);function f(t){return"#"+(t=t||location.href).replace(/^[^#]*#?(.*)$/,"$1")}t.fn[i]=function(t){return t?this.bind(i,t):this.trigger(i)},t.fn[i].delay=50,c[i]=t.extend(c[i],{setup:function(){if(u)return!1;t(o.start)},teardown:function(){if(u)return!1;t(o.stop)}}),o=function(){var e,o,c,a={},s=f(),d=function(t){return t},l=d,p=d;function(){}