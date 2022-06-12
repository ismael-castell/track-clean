/*
 * Swiper 2.7.0
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: August 30, 2014
*/
var Swiper=function(){};Swiper.prototype={plugins:{},wrapperTransitionEnd:function(){},getWrapperTranslate:function(){},setWrapperTranslate:function(){},setWrapperTransition:function(){},h:{getWidth:function(){},getHeight:function(){},getOffset:function(){},windowWidth:function(){"use strict";return window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:void 0},windowHeight:function(){},windowScroll:function(){},addEventListener:function(){},removeEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)}},setTransform:function(){},setTranslate:function(){},setTransition:function(){},support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){}(),transforms:window.Modernizr&&Modernizr.csstransforms===!0||function(){}(),transitions:window.Modernizr&&Modernizr.csstransitions===!0||function(){"use strict";var a=document.createElement("div").style;return"transition"in a||"WebkitTransition"in a||"MozTransition"in a||"msTransition"in a||"MsTransition"in a||"OTransition"in a}(),classList:function(){}()},browser:{ie8:function(){}(),ie10:window.navigator.msPointerEnabled,ie11:window.navigator.pointerEnabled}},(window.jQuery||window.Zepto)&&!function(){}