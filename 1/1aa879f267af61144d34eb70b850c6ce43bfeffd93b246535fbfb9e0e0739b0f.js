/********************************************
 * REVOLUTION 5.2 EXTENSION - NAVIGATION
 * @version: 1.3.3 (14.02.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(a){"use strict";var b=jQuery.fn.revolution,c=b.is_mobile(),d={alias:"Navigation Min JS",name:"revolution.extensions.navigation.min.js",min_core:"5.4.0",version:"1.3.3"};jQuery.extend(!0,b,{hideUnHideNav:function(){},resizeThumbsTabs:function(){},updateNavIndexes:function(){},manageNavigation:function(){},createNavigation:function(a,f){if("stop"===b.compare_version(d).check)return!1;var g=a.parent(),j=f.navigation.arrows,n=f.navigation.bullets,r=f.navigation.thumbnails,s=f.navigation.tabs,t=m(j),v=m(n),x=m(r),y=m(s);h(a,f),i(a,f),t&&q(a,j,f),f.li.each(function(){}),a.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(){}),l(j),l(n),l(r),l(s),g.on("mouseenter mousemove",function(){}),g.on("mouseleave",function(){}),t&&j.hide_onleave&&p(g.find(".tparrows"),j,"hide",0),v&&n.hide_onleave&&p(g.find(".tp-bullets"),n,"hide",0),x&&r.hide_onleave&&p(g.find(".tp-thumbs"),r,"hide",0),y&&s.hide_onleave&&p(g.find(".tp-tabs"),s,"hide",0),x&&k(g.find(".tp-thumbs"),f),y&&k(g.find(".tp-tabs"),f),"carousel"===f.sliderType&&k(a,f,!0),("on"===f.navigation.touch.touchOnDesktop||"on"==f.navigation.touch.touchenabled&&c)&&k(a,f,"swipebased")}});var e=function(){},f=function(){},g=function(){},h=function(){},i=function(){},j=function(){},k=function(){},l=function(){},m=function(a){return a&&a.enable},n=function(){},o=function(){},p=function(){},q=function(){},r=function(){},s=function(){},t=function(){},u=function(){},w=function(){},x=function(){},y=function(){}