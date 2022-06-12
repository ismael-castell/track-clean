/*-------------------------------------------------------------------------

	1.	Plugin Init
	2.	Helper Functions
	3.	Shortcode Stuff
	4.	Header + Search
	5.	Page Specific
	6.  Scroll to top 
	7.	Cross Browser Fixes


-------------------------------------------------------------------------*/






/*-------------------------------------------------------------------------*/
/*	1.	Plugin Init
/*-------------------------------------------------------------------------*/


/*!
Waypoints - 4.0.1
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

//visible
!function(){}(jQuery);


/*
* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*/
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})


/*anime*/
/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(){};
$jscomp.initSymbolIterator=function(){};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(){};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(){};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(){},"es6-impl","es3");var $jscomp$this=this;
(function(){})(this,function(){});


/*! Mousewheel by Brandon Aaron (http://brandon.aaron.sh) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

(function($, window, document) {



jQuery(document).ready(function($){
	
	
	
  // ========================= smartresize ===============================

  /*
   * smartresize: debounced resize event for jQuery
   *
   * latest version and complete README available on Github:
   * https://github.com/louisremi/jquery.smartresize.js
   *
   * Copyright 2011 @louis_remi
   * Licensed under the MIT license.
   */

  var $event = $.event,
      dispatchMethod = $.event.handle ? 'handle' : 'dispatch',
      resizeTimeout;

  $event.special.smartresize = {
    setup: function() {
      $(this).on( "resize", $event.special.smartresize.handler );
    },
    teardown: function() {
      $(this).off( "resize", $event.special.smartresize.handler );
    },
    handler: function(){}
  };

  $.fn.smartresize = function( fn ) {
    return fn ? this.on( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
  };



	/*!
	 * jQuery Transit - CSS3 transitions and transformations
	 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
	 * MIT Licensed.
	 *
	 * http://ricostacruz.com/jquery.transit
	 * http://github.com/rstacruz/jquery.transit
	 */
	(function(){})(jQuery);
	



	
/****************** Nectar ******************/	

// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
|| window.mozRequestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame
|| function(f){setTimeout(f, 1000/60)}
	 
var nectarDOMInfo = {
	
	usingMobileBrowser: (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) ? true : false,
	
	usingFrontEndEditor: (typeof window.vc_iframe === 'undefined') ? false : true,
	
	getWindowSize: function(){},

	scrollPosMouse: function() {
		return $(window).scrollTop();
	},
	
	scrollPosRAF: function(){},
	

	bindEvents: function(){}

}

nectarDOMInfo.getWindowSize();
nectarDOMInfo.scrollTop = nectarDOMInfo.scrollPosMouse();

if(nectarDOMInfo.usingMobileBrowser) { requestAnimationFrame(nectarDOMInfo.scrollPosRAF); } 

nectarDOMInfo.bindEvents();


//set row sizes
fullWidthSections();
fwsClasses();








/***************** VC FRONTEND  ******************/

function(){} //addRowCtrl end
	
	
	function(){} //convertFrontEndPadding end
 
 
 setTimeout(function(){},200);
 
 

 
 var $fp_section_length = 0, $fp_section_prev_length = 0;
 
 
 $(window).on( 'vc_reload', function(){});





/***************** Lightbox Init ******************/
	
	function(){}
	
	
	function(){}

	function(){}

	lightBoxInit();
	//check for late links
	setTimeout(lightBoxInit,500);
	



/*nectar liquid*/

function(){}

NectarLiquid.prototype.initialize = function(){}

NectarLiquid.prototype.animateProps = function(){}

NectarLiquid.prototype.resize = function(){}

NectarLiquid.prototype.createFilters = function(){}

	
NectarLiquid.prototype.buildStage = function(){}


NectarLiquid.prototype.animateFilters = function(){} 

function(){}





/***************** Global vars ******************/
var $standAnimatedColTimeout = [];
var $animatedSVGIconTimeout = [];
var $svg_icons = [];
var $nectarCustomSliderRotate = [];
var $flickitySliders = [];
var $wooFlickityCarousels = [];
var $liquidBG_EL = [];

/***************** Smooth Scrolling ******************/

	function niceScrollInit(){
		//removed since 9.0.
	}

	var $smoothActive = 0; 
	var $smoothCache = false;
	
	
	//chrome ss
	if($smoothCache == false && $('body.material').length == 0 && navigator.platform.toUpperCase().indexOf('MAC') === -1 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && $(window).width() > 690 && $('#nectar_fullscreen_rows').length == 0) {
		!function(){}();
	}


/***************** Sliders ******************/

	//gallery
	function(){}
	flexsliderInit();

  


	function(){}
	
	
	setTimeout(flickityInit,100);
	
	
	//nectar carousel flickity equal height
	
	////loop
	function(){}
	
	function(){}
	
	


	function(){}
/****************twenty twenty******************/
function(){}
twentytwentyInit();

/****************split line text******************/
if($('.nectar-recent-posts-single_featured.multiple_featured').length > 0) {
  splitLineText();
}
	
/****************full page******************/
var $frontEndEditorFPRDiv = '';
var $usingFullScreenRows = false;
var $fullscreenSelector = '';
var $disableFPonMobile = ($('#nectar_fullscreen_rows[data-mobile-disable]').length > 0) ? $('#nectar_fullscreen_rows').attr('data-mobile-disable') : 'off';
var $onMobileBrowser = navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/);

if(!$onMobileBrowser) {
	$disableFPonMobile = 'off';
}

//change anchor link IDs for when disabled on mobile
if($disableFPonMobile == 'on' && $('#nectar_fullscreen_rows').length > 0) {
	$('#nectar_fullscreen_rows > .wpb_row[data-fullscreen-anchor-id]').each(function(){});


	//remove main content row padding
	$('.container-wrap .main-content > .row').css({'padding-bottom':'0'});

	//extra padding for first row is using transparent header
	if( $('#nectar_fullscreen_rows > .wpb_row:nth-child(1)').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0 && !$('#nectar_fullscreen_rows > .wpb_row:nth-child(1)').hasClass('full-width-content') ) {
		$('#nectar_fullscreen_rows > .wpb_row:nth-child(1)').addClass('extra-top-padding');
	}
}

if($('#nectar_fullscreen_rows').length > 0 && $disableFPonMobile != 'on' || $().fullpage && $disableFPonMobile != 'on') {

	function(){}
	
	

	var $anchors = [];
	var $names = [];
	
	function(){}
	setFPNames();

	function(){}	

	if($('#nectar_fullscreen_rows').length > 0)
		initFullPageFooter();

	//fullscreen row logic
	function(){}

	fullscreenRowLogic();

	function(){}

	function(){}


	//kenburns first slide fix
	$('#nectar_fullscreen_rows[data-row-bg-animation="ken_burns"] > .wpb_row:first-child .row-bg.using-image').addClass('kenburns');
	setTimeout(function(){
		//ken burns first slide fix
		$('#nectar_fullscreen_rows[data-row-bg-animation="ken_burns"] > .wpb_row:first-child .row-bg.using-image').removeClass('kenburns');
	},500);

	//remove kenburns from safari
	if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) $('#nectar_fullscreen_rows[data-row-bg-animation="ken_burns"]').attr('data-row-bg-animation','none');

	var overallHeight = $(window).height();
	var overallWidth = $(window).width();
	var $fpAnimation = $('#nectar_fullscreen_rows').attr('data-animation');
	var $fpAnimationSpeed;
	var $svgResizeTimeout;
	
	switch($('#nectar_fullscreen_rows').attr('data-animation-speed')) {
		case 'slow':
			$fpAnimationSpeed = 1150;
			break;
		case 'medium':
			$fpAnimationSpeed = 850;
			break;
		case 'fast':
			$fpAnimationSpeed = 650;
			break;
		default:
			$fpAnimationSpeed = 850;
	}
	
	function(){}

	
	function(){}
	
	if(window.vc_iframe) {
		
		//do nothing
	
	}	 else {
		if($('#nectar_fullscreen_rows').length > 0)
			initNectarFP();
	}


	$(window).smartresize(function(){});

	function(){}



	function(){}

	function(){}

	if($('#nectar_fullscreen_rows').length > 0) {
		
		if(window.vc_iframe) { 
			setTimeout(function(){
				setFPNavColoring(1,'na'); 
			},500);
		}
		else {
			setFPNavColoring(1,'na');
		}
		
		fullscreenElementSizing();
		
		//slide out right OCM material nav compat
		if($('body[data-slide-out-widget-area-style="slide-out-from-right"].material').length > 0) {
			$('#slide-out-widget-area .off-canvas-menu-container').find("a[href*='#']").on('click',function(){}); //click
		}
		
		
	}
	
	function(){}

	function(){}

	

} else if($('#nectar_fullscreen_rows').length > 0 && $disableFPonMobile == 'on' || $().fullpage && $disableFPonMobile == 'on') {

	//remove markup
	$('html,body').css({'height':'auto','overflow-y':'auto'});
}


function(){}


/***************** Superfish ******************/
	
	function(){}

	
	function(){}
	
	var $navLeave;
	
	function(){}

	function(){}
	
	addOrRemoveSF();
	initSF();
	
	$(window).resize(addOrRemoveSF);

	
	function(){}
	
	SFArrows();
	

	//deactivate hhun on phone
	if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/))
		$('body').attr('data-hhun','0');


/***************** Caroufredsel ******************/
	
	function(){}
    if($('.carousel').length > 0) standardCarouselInit();


    function(){}



	function(){}




    function(){}
		
    if($('.products-carousel').length > 0 || $('.nectar-woo-flickity').length > 0) { productCarouselInit(); }




    
    //fullwidth carousel swipe link fix
    function(){}
	fwCarouselLinkFix();
    
     
	function(){}


	function(){}
   if($('.carousel').length > 0)  clientsCarouselInit();
    

    function(){}


    //carousel grabbing class
    function(){}
	carouselfGrabbingClass();
	    

	//ascend arrow hover class
	$('body.ascend, body.material').on('mouseover','.carousel-next',function(){
		$(this).parent().find('.carousel-prev, .item-count').addClass('next-hovered');
	});
	$('body.ascend, body.material').on('mouseleave','.carousel-next',function(){
		$(this).parent().find('.carousel-prev, .item-count').removeClass('next-hovered');
	});

	//fadein for clients / carousels
	function(){}
	 
	//if($('.nectar-box-roll').length == 0) clientsFadeIn();
	
	
/*-------------------------------------------------------------------------*/
/*	2.	Helper Functions
/*-------------------------------------------------------------------------*/

	jQuery.fn.setCursorPosition = function(){}
	
	jQuery.fn.setSelection = function(){}
	
	

	$.extend($.expr[':'], {
	    transparent: function(){}
	});
	

	function(){}

	var $_GET = getQueryParams(document.location.search);

	
	//count
	var CountUp = function(){};
	
var easeOutCubic = function(t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
};	
	
	
/*-------------------------------------------------------------------------*/
/*	3.	Shortcode Stuff
/*-------------------------------------------------------------------------*/


function(){}
			 

/***************** Milestone Counter ******************/
	
	function(){}

	function(){}

	var $animationOnScrollTimeOut = ($('.nectar-box-roll').length > 0) ? 850: 125;	

	
/***************** Tabbed ******************/
	
	var $tabbedClickCount = 0;
	$('body').on('click','.tabbed > ul li:not(.cta-button) a',function(){});


	function(){}
	
	
	function(){}
	setTimeout(tabbedInit,60);

	//deep linking
	function(){}
	tabbbedDeepLinking();

/***************** Toggle ******************/
	
	//toggles
	$('body').on('click','.toggle h3 a', function(){});
	
	//accordion
	$('body').on('click','.accordion .toggle h3 a', function(){});
	
	//accordion start open
	function(){}
	accordionInit();

	//deep linking
	function(){}
	accordionDeepLinking();

/***************** Button ******************/
	
	$.cssHooks.color = {
	    get: function(elem) {
	        if (elem.currentStyle)
	            var color = elem.currentStyle["color"];
	        else if (window.getComputedStyle)
	            var color = document.defaultView.getComputedStyle(elem,
	                null).getPropertyValue("color");
	        if (color.search("rgb") == -1)
	            return color;
	        else {
	            color = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	            function(){}
	            if(color) {
	            	return "#" + hex(color[1]) + hex(color[2]) + hex(color[3]);
	            }
	        }
	    }
	}

	$.cssHooks.backgroundColor = {
	    get: function(){}
	}
	
	function(){}

	//color
	function(){}	

	coloredButtons();


	//large icon hover
	function(){}
	largeIconHover();


/***************** Team Member ******************/
function(){}

function(){}

function fullscreenBioScrolling(){ 
	$('.nectar_team_member_overlay .inner-wrap').mousewheel(function(event, delta) {

	     this.scrollTop -= (delta * 30);
	     event.preventDefault();

	});

}

function(){}

if($('.team-member').length > 0) {
	teamMemberFullscreen();
}

/***************** Column Hover BG ******************/

function(){}
columnBGColors();






/***************** morphing button ******************/

function(){}

setTimeout(morphingOutlines,100); 
setTimeout(fullWidthContentColumns,126);


/***************** svg icons *******************/

var $svg_icons = [];
function(){}
//svg in equal height column resize
if($('.vc_row-o-equal-height .svg-icon-holder[data-animation="true"]').length > 0 && $('#nectar_fullscreen_rows').length == 0) {
	 $(window).on('smartresize', function(){});
}


/***************** fancy ul ******************/

	function(){}


	

/***************** flip box min heights ******************/
//if content height exceeds min height change it
function(){}
flipBoxHeights();

if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/)){
	$('body').on('click','.nectar-flip-box', function(){
		$(this).toggleClass('flipped');
	});
}

/***************** PARALLAX SECTIONS ******************/
	
	var $window = $(window);
	var windowHeight = $window.height();

		
	$window.off('scroll.parallaxSections').off('resize.parallaxSections');
	$window.unbind('resize.parallaxSectionsUpdateHeight');
	$window.unbind('load.parallaxSectionsOffsetL');
	$window.unbind('resize.parallaxSectionsOffsetR');

	$window.on('resize.parallaxSectionsUpdateHeight',psUpdateWindowHeight);

	function psUpdateWindowHeight() {
		windowHeight = $window.height();
	}

	function(){}
	
	var firstTop;
	
	$.fn.parallaxScroll = function(){};

 

	
/***************** Full Width Section ******************/

	//nectar slider in container but fullwidth fix
	$('.wpb_row .vc_col-sm-12 .nectar-slider-wrap[data-full-width="true"]').each(function(){});

	function(){}
	
	var $contentElementsNum = ($('#portfolio-extra').length == 0) ? $('.main-content > .row > *').length : $('.main-content > .row #portfolio-extra > *').length ;

	function(){}

	function(){}
	
	
	
	//add first class for rows for page header trans effect (zoom only as of now)
	$('.full-width-section.wpb_row, .full-width-content.wpb_row').each(function(){});	
	
	
	

	parallaxScrollInit();
	parallaxRowsBGCals();

	function(){}
	
	//if fullwidth section is first or last, remove the margins so it fits flush against header/footer
	function(){}
	

	//sizing for fullwidth sections that are image only

	function(){}

	function(){}

	fullwidthImgOnlySizingInit();
	fullwidthImgOnlySizing();
	
	
	
	//change % padding on rows to be relative to screen
	function(){}

	function(){}
	if(nectarDOMInfo.usingMobileBrowser) {
		fullWidthRowPaddingAdjustCalc();
	}

	
	//full width content column sizing
	function(){}
	
	fullWidthContentColumns();
	if($('.owl-carousel').length > 0) owlCarouselInit();


var $mouseParallaxScenes = [];
function(){}
mouseParallaxInit();


	
/***************** Checkmarks ******************/

function(){}
ulChecks();



function rowBGAnimations() {
	var $rowBGAnimationsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '93%';
	
	$($fullscreenSelector+'.row-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]):not([data-bg-animation*="displace-filter"]) .row-bg.using-image').each(function() {
		
		var $that = $(this);
		var $animationEasing = ($('body[data-cae]').length > 0) ? $('body').attr('data-cae') : 'easeOutSine';
		var $animationDuration = ($('body[data-cad]').length > 0) ? $('body').attr('data-cad') : '650';
		
		var waypoint = new Waypoint({
			 element: $that.parents('.row-bg-wrap'),
			 handler: function(direction) {
				 
				 if($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) { 
						waypoint.destroy();
					 return;
				 }
				 
					$that.parents('.inner-wrap').addClass('animated-in');
				 
				 waypoint.destroy();
			 },
			 offset: $rowBGAnimationsOffsetPos
		});
		
	});
	
}

function(){}

/***************** Image with Animation / Col Animation *******************/


	
function(){}



function(){}

if($('.nectar_cascading_images').length > 0) {
	imagesLoaded($('.nectar_cascading_images'),function(instance){
		cascadingImageBGSizing();
	});
}

function(){}

	
/***************** Custom tablet default column widths  ******************/
	
	//add one-fourth class
	function(){}
	oneFourthClasses();
	
/***************** Bar Graph ******************/
function(){}


/***************** Column Borders ******************/
function(){}

/***************** Food Menu Item ******************/
function(){}


/***************** Dividers ******************/
function(){}



/***************** Icon List ******************/
function(){}

//bg color match 

function(){}

var nectarMatchingBGCss = '';

function(){}
nectarIconMatchColoring();


/***************** Hotspot ******************/
//add pulse animation
$('.nectar_image_with_hotspots[data-hotspot-icon="numerical"]').each(function(){});



function(){}

hotSpotHoverBind();

function(){}
responsiveTooltips();

function(){}
imageWithHotspotClickEvents();

function(){}


/***************** Animated Title ******************/
function(){}


/***************** Highlighted Text ******************/
function(){}



/***************** Pricing Tables ******************/


var $tallestCol;

function(){}

pricingTableHeight();

 
/***************** Testimonial Slider ******************/

//testimonial slider controls

//non minimal
$('body').on('click','.testimonial_slider:not([data-style*="multiple_visible"]):not([data-style="minimal"]) .controls li', function(){});

//minimal
$('body').on('click','.testimonial_slider[data-style="minimal"] .testimonial-next-prev a', function(){});


var $tallestQuote;

var $testimonialSlider = [];

//create controls
function(){}
createTestimonialControls();

function(){}

function(){}


function(){}

function(){}

if($('.testimonial_slider.disable-height-animation:not([data-style*="multiple_visible"])').length > 0) {
	testimonialSliderHeight(); 
	setTimeout(testimonialSliderHeight,500);
}

if($('.testimonial_slider[data-style="multiple_visible_minimal"]').length > 0) {
	testimonialSliderHeightMinimalMult();
	setTimeout(testimonialSliderHeightMinimalMult,500);
}


/***************** WP Media Embed / External Embed ******************/

//this isn't the for the video shortcode* This is to help any external iframe embed fit & resize correctly 
function(){}

function(){}


function videoshortcodeSize(){
	//removed in 9.0.
}

responsiveVideoIframesInit();
responsiveVideoIframes();


//unwrap post and protfolio videos
$('.video-wrap iframe').unwrap();
$('#sidebar iframe[src]').unwrap();

$('audio').attr('width','100%');
$('audio').attr('height','100%');

$('audio').css('visibility','visible');

if($('body').hasClass('mobile')){
	$('video').css('visibility','hidden');
} else {
	$('video').css('visibility','visible');
}


$('.wp-video').each(function(){});

//webkit video back button fix 
$('.main-content iframe[src]').each(function(){
	$(this).css({'opacity':'1', 'visibility':'visible'});
});


/***************** Nectar Video BG ******************/

	$('.wpb_row:has(".nectar-video-wrap"):not(.fp-section)').each(function(i){
		$(this).css('z-index',100 + i);
	});

	var min_w = 1200; // minimum video width allowed
	var vid_w_orig;  // original video dimensions
	var vid_h_orig;
	
    vid_w_orig = 1280;
    vid_h_orig = 720;
 
	function(){}
    
    //init
    function(){}

	if($('.nectar-video-wrap').length > 0 || $('.nectar-youtube-bg').length > 0) {
		videoBGInit();
	}


/*-------------------------------------------------------------------------*/
/*	4.	Header + Search
/*-------------------------------------------------------------------------*/	 

////mobile megamenus without titles / nested groupings
var $mobileNavSelector = ($('.off-canvas-menu-container.mobile-only').length > 0) ? '.off-canvas-menu-container.mobile-only ': '#mobile-menu .container ';
$($mobileNavSelector+'.megamenu > ul > li > a').each(function(){});

/***************** Slide Out Widget Area **********/

var $bodyBorderHeaderColorMatch = ($('.body-border-top').css('background-color') == '#ffffff' && $('body').attr('data-header-color') == 'light' || $('.body-border-top').css('background-color') == $('#header-outer').attr('data-user-set-bg')) ? true : false;
var $bodyBorderWidth = ($('.body-border-right').length > 0) ? $('.body-border-right').width() : 0;
var $resetHeader;


function(){}

//icon effect html creation
if($('#slide-out-widget-area.slide-out-from-right-hover').length > 0) {

	if($('#ajax-content-wrap > .slide-out-widget-area-toggle').length == 0) {
		$('<div class="slide-out-widget-area-toggle slide-out-hover-icon-effect" data-icon-animation="simple-transform"><div> <a href="#sidewidgetarea" class="closed"> <span> <i class="lines-button x2"> <i class="lines"></i> </i> </span> </a> </div> </div>').insertAfter('#slide-out-widget-area');
		if($('#header-outer[data-has-menu="true"]').length > 0 || $('body[data-header-search="true"]').length > 0) $('#ajax-content-wrap > .slide-out-widget-area-toggle').addClass('small');
	}


	function(){}

	function(){}

	function(){}

	function(){}

	//hover triggered
	if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
		$('body').on('mouseenter','#header-outer .slide-out-widget-area-toggle:not(.std-menu) a',openRightHoverNav);
	}
	else {
		$('body').on('click','.slide-out-widget-area-toggle:not(.std-menu) a',openRightHoverNav);
	}

	$(window).on('smartresize',calculateHoverNavMinHeight);

}



function(){}

if($('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0) {
	setMaterialWidth();
}

//icon hover effect
if($('body.material').length > 0 && $('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length == 0) {

	if($('body[data-slide-out-widget-area-style*="fullscreen"]').length == 0) {
		var $menuIconClone = $('header#top nav ul .slide-out-widget-area-toggle a > span > i').clone();
		$menuIconClone.addClass('hover-effect');
		$('header#top nav ul .slide-out-widget-area-toggle a > span').append($menuIconClone);

		var $menuIconClone2 = $('header#top .slide-out-widget-area-toggle.mobile-icon a > span > i').clone();
		$menuIconClone2.addClass('hover-effect');
		$('header#top .slide-out-widget-area-toggle.mobile-icon a > span').append($menuIconClone2);
	}

	$('body:not([data-slide-out-widget-area-style="slide-out-from-right"]) header#top .slide-out-widget-area-toggle a > span').append($('<span class="close-wrap"> <span class="close-line close-line1"></span> <span class="close-line close-line2"></span> </span>'));
}

if($('body.material #boxed').length > 0 && $('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length > 0) {
	$('#ajax-content-wrap > .slide-out-widget-area-toggle.slide-out-hover-icon-effect.small').insertAfter('.ocm-effect-wrap');
}

//move material skin default ocm
if($('body.material').length > 0 && $('body[data-slide-out-widget-area-style*="fullscreen"]').length == 0) {
	$('body.material #slide-out-widget-area.slide-out-from-right .slide_out_area_close').insertAfter('.ocm-effect-wrap');
	$('#slide-out-widget-area-bg').insertAfter('.ocm-effect-wrap');
	$('#slide-out-widget-area').insertAfter('.ocm-effect-wrap');
	
}

//remove trans on material search/ocm when resizing 
if($('body.material[data-header-search="true"]').length > 0 || $('body.material .ocm-effect-wrap').length > 0 ) {
		
	var materialTransTO;

	$(window).resize(function(){});
}


function(){}
$(window).resize(materialOCM_Size);


function(){}

OCM_dropdown_function();

//click triggered
$('body').on('click','.slide-out-widget-area-toggle:not(.std-menu) a.closed:not(.animating)',function(){});

$('body').on('click','.slide-out-widget-area-toggle:not(.std-menu) a.open:not(.animating), #slide-out-widget-area .slide_out_area_close,  > .slide_out_area_close, #slide-out-widget-area-bg.slide-out-from-right, .material-ocm-open #ajax-content-wrap',function(){});

function(){}


function(){}
OCM_Dropdown_Icon_Pos();


function(){}

//slide out widget area scrolling 
function(){}
setTimeout(slideOutWidgetAreaScrolling,500);


//handle mobile scrolling
if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
	$('#slide-out-widget-area').addClass('mobile');
}


function(){}


//left header
function(){}

if($('#header-outer[data-format="left-header"]').length > 0 || $('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length > 0 || $('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length > 0) {
	leftHeaderSubmenus();
}


//fullscreen submenu
;( function(){} )( jQuery, window );

function(){}

if($('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length == 0 && $('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length == 0 ) {
	fullscreenMenuInit();
} else if($('body.using-mobile-browser[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length > 0){
	
	//close OCM on mobile when clicking anchor on same page 
	$('body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]').on('click',function(){});
	
} 



//submenu link hover fix
$('body').on('mouseover','#slide-out-widget-area .off-canvas-menu-container .menuwrapper > .sub-menu li > a',function(){});
$('body').on('mouseover','.off-canvas-menu-container .menuwrapper .menu li > a',function(){
	$('.off-canvas-menu-container .menuwrapper .menu li > a').removeClass('hovered');
});



/***************** Page Headers ******************/

var pageHeaderHeight;
var pageHeaderHeightCopy;
var pageHeadingHeight;
var extraSpaceFromResize = ($('#header-outer[data-header-resize="1"]').length > 0 && $('.nectar-box-roll').length == 0) ? 0 : 1;
var $headerRemoveStickyness = ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length > 0) ? 1 : 0;

if($('body.material').length > 0 ) { extraSpaceFromResize = 0; }

//full screen header
function(){}

fullScreenHeaderInit();

function(){}

var $pt_timeout = ($('body[data-ajax-transitions="true"]').length > 0 && $('#page-header-bg[data-animate-in-effect="slide-down"]').length > 0) ? 350 : 0; 

if($('#page-header-bg').length > 0) { 
	setTimeout(function(){ pageHeader(); },$pt_timeout);
}


if($('#header-outer').attr('data-header-resize') == '' || $('#header-outer').attr('data-header-resize') == '0'){
	$('#page-header-wrap').css('margin-top','0');
}


function extractUrl(input) {
	return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
}
 
/***************** Parallax Page Headers ******************/
if($('#page-header-bg[data-parallax="1"]').length > 0) {

	//fadeIn

	var img = new Image();
	
	var imgX, imgY, aspectRatio;
	var diffX, diffY;
	var pageHeadingHeight = $('#page-header-bg .col.span_6').height();
	var pageHeaderHeight = parseInt($('#page-header-bg').height());
	var headerPadding2 = parseInt($('#header-outer').attr('data-padding'))*2;
	var wooCommerceHeader = ($('.demo_store').length > 0) ? 32 : 0 ;
	
	
	var $initialImgCheck = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
	
	if ($initialImgCheck && $initialImgCheck.indexOf('.') !== -1) {    
		img.onload = function() {
		   pageHeaderInit(); 
		}
		
		img.src = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
		
	} else {
		 pageHeaderInit();
	}

	
	
	var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0; //admin bar


	 if($('body[data-hhun="1"]').length > 0 && !$('#header-outer[data-remove-fixed="1"]').length > 0)  $('#header-outer').addClass('parallax-contained');

	 window.addEventListener('scroll', function(){ 
        window.requestAnimationFrame(bindHeaderParallax);
    }, false);

}

					
function(){}

if($('#page-header-bg').length > 0) {
	var $initialImgCheckAscend = extractUrl($('#page-header-bg').css('background-image'));
	if ($initialImgCheckAscend && $initialImgCheckAscend.indexOf('.') !== -1) {    
		   $('#page-header-bg').addClass('has-bg');
	}
}


function(){}




function(){}

if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)){
	window.onunload = function(){ nectarPageHeader(); };
}


/***************** header text effects *****************/

// rotate in
function(){}
function(){}
var $effectTimeout = ($('#ajax-loading-screen').length > 0) ? 800 : 0;

pageHeaderTextEffectInit();

if($('#page-header-bg .nectar-video-wrap video').length == 0) { setTimeout(pageHeaderTextEffect,$effectTimeout); }




 //submenu fix
  if($('header#top nav > ul.sf-menu ul').length > 0) {

  	var $midnightSubmenuTimeout;
  	$('body').on('mouseover','#header-outer .midnightHeader .sf-with-ul, #header-outer .midnightHeader .cart-menu',function(){});
  	$('body').on('mouseleave','#header-outer .midnightHeader',function(){});
  }

  function(){} 



//box roll
function(){}


function(){}
if($('.nectar-box-roll').length > 0) { 
	boxRollInit();
}

function(){}

if($('.nectar-box-roll').length > 0) $(window).on('resize',nectarBoxRollContentHeight);


var perspect = 'not-rolled';
var animating = 'false';
function(){}

function(){}

function(){}

if($('.nectar-box-roll').length > 0) {
	boxRollMouseWheelInit();
}

$('body').on('click','.nectar-box-roll .section-down-arrow',function(){});



function(){}

function pauseVideoBG() {
	if($('.nectar-box-roll video').length > 0 && !nectarDOMInfo.usingMobileBrowser) { $('.nectar-box-roll video')[0].pause(); }
}
function(){}

//touch 
if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) && $('.nectar-box-roll').length > 0) {
	$('body').swipe({
		tap: function(){},
		swipeStatus: function(){}
	});

}

function(){}
//called after box roll
var $waypointsBound = false;
function(){}



/***************** WooCommerce Cart *****************/
var timeout;
var productToAdd;
var $dropdownStyle = ($('body[data-dropdown-style="minimal"]').length > 0)  ? 'minimal' : 'default';
//notification
$('body').on('click','.product .add_to_cart_button', function(){});

//notification hover
$('body').on('mouseenter','#header-outer .cart-notification',function(){});

//cart dropdown
var $headerCartSelector = ($('body.material').length > 0) ? '#header-outer .nectar-woo-cart' : '#header-outer  div.cart-outer';

if($($headerCartSelector).length > 0) {
	$($headerCartSelector).hoverIntent(function(){});
}


$('body').on('mouseleave',$headerCartSelector,function(){});

if($('#header-outer[data-cart="false"]').length == 0) {
	$('body').on('added_to_cart', shopping_cart_dropdown_show);
	$('body').on('added_to_cart', shopping_cart_dropdown);
	
	//update header cart markup after ajax remove
	$('body').on('removed_from_cart', wooCartImgPos);
}

function(){}


function(){}

function(){}

function(){}

function(){}

if($('#header-outer[data-cart="false"]').length == 0) {
	checkForWooItems();
}

function(){}

nectarAccountPageTabs();

var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0; //admin bar
var secondaryHeader = ($('#header-outer').attr('data-using-secondary') == '1') ? 32 : 0 ;
function(){}



//text on hover effect
$('body').on('mouseover','.text_on_hover .product-wrap',function(){
	$(this).parent().addClass('hovered');
});
$('body').on('mouseover','.text_on_hover > a:first-child',function(){
	$(this).parent().addClass('hovered');
});

$('body').on('mouseout','.text_on_hover .product-wrap',function(){
	$(this).parent().removeClass('hovered');
});
$('body').on('mouseout','.text_on_hover > a:first-child',function(){
	$(this).parent().removeClass('hovered');
});


//material/fancy parallax hover effect zindex
if($('.material.product').length > 0 || $('.minimal.product').length > 0 || $('.nectar-fancy-box[data-style="parallax_hover"]').length > 0 || $('.nectar-category-grid[data-shadow-hover="yes"]').length > 0){

	var $productZindex = 101;
	
	$('body').on('mouseenter','.material.product, .minimal.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item',function(){});
	$('body').on('mouseleave','.material.product, .minimal.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item',function(){});

	//reset to stop zindex from getting too high
	setInterval(function(){},10000);

}

function(){}

function(){}

minimalProductHover();




//mobile widget filters
////skip widgets without any titles
$('.woocommerce #sidebar .widget.woocommerce').each(function(){
	if($(this).find('> h4').length == 0) {
		$(this).addClass('no-widget-title');
	}
});

$('body').on('click','#sidebar .widget.woocommerce:not(.widget_price_filter) h4',function(){});

	//slide in cart
	$('body').on('mouseenter','#header-outer [data-cart-style="slide_in"] .cart-menu-wrap',openRightCart);

	function(){}

	function(){}





/***************** Search ******************/
	var $placeholder = ($('#search-outer #search input[type=text][data-placeholder]').length > 0) ? $('#search-outer #search input[type=text]').attr('data-placeholder') : '';
	var logoHeight = parseInt($('#header-outer').attr('data-logo-height'));
	

	if($('body').hasClass('material') && $('#header-outer .bg-color-stripe').length == 0) {
		$('#header-outer').append('<div class="bg-color-stripe" />');
	} 

	////search box event
	$('body').on('click', '#search-btn a', function(){ return false; });
	$('body').on('mouseup', '#search-btn a:not(.inactive), #header-outer .mobile-search', function(){});
	
	$('body:not(.material)').on('keydown','#search input[type=text]',function(){});
	
	$('body:not(.material)').on('keyup','#search input[type=text]',function(){});
	
	
	////close search btn event
	$('body').on('click','#close',function(){});

	//close material when clicking off the search
	$('body.material').on('click', '#ajax-content-wrap', function(){});

	//material gets esc
	if($('body.material').length > 0) {
		$(document).keyup(function(){});
	}

	//if user clicks away from the search close it
	$('body:not(.material)').on('blur','#search-box input[type=text]',function(){});

	
	function(){}
	
	
	//mobile search
	$('body').on('click', '#mobile-menu #mobile-search .container a#show-search',function(){
		$('#mobile-menu .container > ul').slideUp(500);
		return false;
	});
	
/***************** Nav ******************/
	

	function(){}
	
	

function(){}


	
	if($('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0) {
		centeredNavBottomBarReposition();
		
		condenseHeaderMobileOverride();
		$(window).smartresize(condenseHeaderMobileOverride);
	}
	
	
	function(){}
	
	var logoHeight = parseInt($('#header-outer').attr('data-logo-height'));
	var headerPadding = parseInt($('#header-outer').attr('data-padding'));
	var usingLogoImage = $('#header-outer').attr('data-using-logo');
	
	if( isNaN(headerPadding) || headerPadding.length == 0 ) { headerPadding = 28; }
	if( isNaN(logoHeight) || usingLogoImage.length == 0 ) { usingLogoImage = false; logoHeight = 30;}
	
	if($('header#top nav > ul li#search-btn a').length > 0) {
		var $searchBtnHeight = $('header#top nav > ul li#search-btn a').height();
	} else {
		var $searchBtnHeight = 24;
	}

	//inital calculations
	function(){}

	
	//is header resize on scroll enabled?
	var headerResize = $('#header-outer').attr('data-header-resize');
	var headerHideUntilNeeded = $('body').attr('data-hhun');

	//transparent fix

	if($('#header-outer[data-remove-fixed="1"]').length == 0) {
		if($(window).scrollTop() != 0 && $('#header-outer.transparent[data-permanent-transparent="false"]').length == 1) $('#header-outer').removeClass('transparent');
	}

	if( headerResize == 1 && headerHideUntilNeeded != '1'){
		
		headerInit();

		$(window).off('scroll.headerResizeEffect');

		if($('#nectar_fullscreen_rows').length == 0) {
			$(window).on('scroll.headerResizeEffect',smallNav);
		}
		else if($('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) ) {
			$(window).on('scroll.headerResizeEffect',smallNav);
		}

	} else if(headerHideUntilNeeded != '1') {
		headerInit();
		$(window).off('scroll.headerResizeEffectOpaque');
		$(window).on('scroll.headerResizeEffectOpaque',opaqueCheck);
		
	} else if(headerHideUntilNeeded == '1') {

		headerInit();

		if($('.nectar-box-roll').length > 0) $('#header-outer').addClass('at-top-before-box');

		var previousScroll = 0, // previous scroll position
        menuOffset = $('#header-space').height()*2, // height of menu (once scroll passed it, menu is hidden)
        detachPoint = ($('body.mobile').length > 0) ? 150 : 600, // point of detach (after scroll passed it, menu is fixed)
        hideShowOffset = 6; // scrolling value after which triggers hide/show menu

	    // on scroll hide/show menu
	    function(){}

	    //don't trigger for header remove stickiness
	    if($('#header-outer[data-remove-fixed="1"]').length == 0) {
		    hhunCalcs();
		    $(window).scroll(hhunCalcs);
		}


	}//end if hhun
	
	if($('#nectar_fullscreen_rows').length == 0 && $('.nectar-box-roll').length == 0) { midnightInit(); }	
	
	if($('#nectar_fullscreen_rows').length > 0 ) { ($('#header-outer').attr('data-permanent-transparent','false')) }

	var shrinkNum = 6;
	var extraHeight = ($('#wpadminbar').length > 0) ? $('#wpadminbar').height() : 0; //admin bar
	var $bodyBorderHeaderColorMatch = ($('.body-border-top').css('background-color') == '#ffffff' && $('body').attr('data-header-color') == 'light' || $('.body-border-top').css('background-color') == $('#header-outer').attr('data-user-set-bg')) ? true : false;
	var $scrollTriggerOffset = ( $('body.material').length > 0 ) ? 150 : 0;

	if($('#header-outer[data-shrink-num]').length > 0 ) shrinkNum = $('#header-outer').attr('data-shrink-num');

	function(){}
	
	function(){}
	
	
	function(){}

	//call immediately on mobile to make sure there's no gap with fixed setups
	if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/) && $('#header-outer[data-mobile-fixed="1"]').length > 0 && $('#header-outer[data-permanent-transparent="false"]').length > 0) {
		$('#header-space').css('height', $('#header-outer').outerHeight());
	}


	var lastPosition = -1;
	var $headerScrollTop = nectarDOMInfo.scrollTop;

	function(){}
	var condenseHeaderLayout = $('#header-outer[data-condense="true"]').length > 0 ? true : false;
	var headerOuterCached = $('#header-outer');
	
	function(){}

	if($('#header-outer[data-mobile-fixed="1"]').length > 0 && $('#wpadminbar').length > 0 || $('#header-outer[data-mobile-fixed="1"]').length > 0 && $('#header-secondary-outer').length > 0) {
		if($('#nectar_fullscreen_rows').length == 0) { requestAnimationFrame(headerOffsetAdjust); }
		else if($('#nectar_fullscreen_rows').length > 0 && $onMobileBrowser) {
			requestAnimationFrame(headerOffsetAdjust);
		}
		$(window).smartresize(headerOffsetAdjustCalc);
	}
		

	function(){}
	if($('body[data-footer-reveal="1"]').length > 0 || $('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0) { 
		setTimeout(function(){
			footerRevealCalcs();
		},60);
		footerRevealCalcs();
		//set shadow to match BG color if applicable
		if($('bodybody[data-footer-reveal="1"][data-footer-reveal-shadow="large_2"]').length > 0) $('.container-wrap').css({ boxShadow: '0 70px 110px -30px '+$('#footer-outer').css('backgroundColor') });
	}
	
	
	function(){}
	
	
	function(){}
	

	
	
	//header inherit row color effect
	function(){}



/****************sticky page submenu******************/
	if($('.page-submenu[data-sticky="true"]').length > 0 && $('#nectar_fullscreen_rows').length == 0) {

		(function(){}())
		;

		//remove outside of column setups 
		if($('.page-submenu').parents('.span_12').find('> .wpb_column').length > 1){
			var pageMenu = $('.page-submenu').clone();
			var pageMenuParentRow = $('.page-submenu').parents('.wpb_row');
			$('.page-submenu').remove();
			pageMenuParentRow.before(pageMenu);
		}

		var sticky = new Waypoint.Sticky({
		  element: $('.page-submenu[data-sticky="true"]')[0]
		});


	}

	if($('#nectar_fullscreen_rows').length == 0)
		$('.page-submenu').parents('.wpb_row').css('z-index',10000);

	$('.page-submenu .mobile-menu-link').on('click',function(){});

	$('.page-submenu ul li a').on('click',function(){});


	//responsive nav
	$('body').on('click','#toggle-nav',function(){});
	
	
	//add wpml to mobile menu
	if($('header#top nav > ul > li.menu-item-language').length > 0 && $('#header-secondary-outer ul > li.menu-item-language').length == 0){
		var $langSelector = $('header#top nav > ul > li.menu-item-language').clone();
		$langSelector.insertBefore('#mobile-menu ul #mobile-search');
	}
	
	////append dropdown indicators / give classes
	$('#mobile-menu .container ul li').each(function(){});
	
	////events
	$('#mobile-menu .container ul li:has(">ul") > a .sf-sub-indicator').on('click',function(){});
	


/*-------------------------------------------------------------------------*/
/*	5.	Page Specific
/*-------------------------------------------------------------------------*/	
	
	function(){}
    function(){}
    fixIeFlexbox();

    vcFullHeightRow();
		
		if(!nectarDOMInfo.usingFrontEndEditor) {
			nectarLiquidBGs();
		}

	//recent work
	function(){}
	
	
	//ie8 width fix
	function(){}
	
	if( $(window).width() >= 1300 && $('html').hasClass('no-video')) { $('.container').css('max-width','1100px'); $(window).resize(ie8Width); };
	


	function(){}

  $(window).off('smartresize.srInit'); 
	$(window).on('smartresize.srInit', smartResizeInit); 
	
	
	var $usingNectarCarouselFlk = ($('.nectar-carousel.nectar-flickity:not(.masonry)').length > 0) ? true : false;
	
	function(){}

	$(window).off('resize.srInit'); 
	$(window).on('resize.srInit', resizeInit); 
	
	
	$(window).load(function(){});


	$(window).on("orientationchange",function(){
	  setTimeout(clientsCarouselHeightRecalc,200);
	});
	
	//blog next post button
	function(){}

	function(){}
	
	postNextButtonEffect();


	function(){}
	recentPostHeight();


	//recent post slider
	function(){}
	
	recentPostsFlickityInit();

	if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/)) {
		if($('.nectar-recent-posts-slider').length > 0 && ! nectarDOMInfo.usingFrontEndEditor) {
			window.requestAnimationFrame(recentPostSliderParallax);
		}
	}
	
	function(){}

	function(){}

	if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|BlackBerry|Opera Mini)/) && ! nectarDOMInfo.usingFrontEndEditor) {
		recentPostSliderParallaxMargins();
	}

	//portfolio item hover effect
	
	////desktop event 
	function(){}

	portfolioHoverEffects();

	function(){}

	style6Img();

	function(){}
	
	
	//portfolio fullscreen zoom slider

	//remove outside of column setups 
	$('.nectar_fullscreen_zoom_recent_projects').each(function(){});

	 $.fn.lines = function(){};

	function(){}

	function(){}

				
	function(){}
	
	function(){}


	if($('.nectar_fullscreen_zoom_recent_projects').length > 0){
		portfolioFullScreenSliderCalcs();
		splitLineText();
		$(window).resize(splitLineText);
		$(window).resize(portfolioFullScreenSliderCalcs);
	}
	
	
	function(){}
	fsProjectSliderInit();
 	

	//portfolio accent color
	function(){}
	portfolioAccentColor();
	
	//portfolio sort
	$('body').on('mouseenter','.portfolio-filters',function(){});

	$('body').on('mouseleave','.portfolio-filters',function(){});
	
	//portfolio selected category
	$('body').on('click','.portfolio-filters ul li a', function(){});
	
	//portfolio prevent jump on parent dropdown click
	$('body').on('click','.portfolio-filters > a#sort-portfolio', function(){
		return false;
	});
	
	//inline portfolio selected category
	$('body').on('click','.portfolio-filters-inline ul li a',function(){});
	
	var portfolioFiltersOnMobile = false;
	
	function(){}

	portfolioFiltersInit();

	
	//blog love center
	function(){}
	
	$('.nectar-love').on('click',function(){
		centerLove();
	});
	
	centerLove();	
	

	//portfolio single comment order
	function(){}

	portfolioCommentOrder();
	 
	
	//portfolio sidebar follow
	var sidebarFollow = $('.single-portfolio #sidebar').attr('data-follow-on-scroll');
	
	function(){} // end  portfolioSidebarFollow function
	

	
	
	
	//remove the portfolio filters that are not found in the current page
	function(){}
	
	isotopeCatSelection();
	
	
	//sharing buttons

	var completed = 0;
	var windowLocation = window.location.href.replace(window.location.hash, '');

	function facebookShare(){
		windowLocation = window.location.href.replace(window.location.hash, '');
		window.open( 'https://www.facebook.com/sharer/sharer.php?u='+windowLocation, "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ) 
		return false;
	}

	function(){}

	function(){}

	function(){}

	function(){}

	function(){}

	function(){}
	
	function(){}


	function(){}

	$('body').on('click','#single-below-header .nectar-social a', function(){ return false; });

	$('body').on('click','.facebook-share:not(.inactive)', facebookShare);
	$('body').on('click','.google-plus-share:not(.inactive)', googlePlusShare);
	$('body').on('click','.nectar-social:not(".woo") .twitter-share:not(.inactive)', twitterShare);
	$('body').on('click','.nectar-social.woo .twitter-share', wooTwitterShare);
	$('body').on('click','.nectar-social:not(".woo") .linkedin-share:not(.inactive)', linkedInShare);
	$('body').on('click','.nectar-social.woo .linkedin-share', woolinkedInShare);
	$('body').on('click','.nectar-social:not(".woo") .pinterest-share:not(.inactive)', pinterestShare);
	$('body').on('click','.nectar-social.woo .pinterest-share', wooPinterestShare);
	$('body').on('click','.nectar-social-sharing-fixed > a', function(){ return false; });

	function(){}
	
	socialSharingInit();


	if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {

		var $socialTimeout;
		$('body').on('mouseenter','#single-meta .meta-share-count, #project-meta .meta-share-count', function(){});

	
		$('body').on('mouseleave','#single-meta .meta-share-count, #project-meta .meta-share-count', function(){});
	} else {
		var $socialTimeout;
		$('body').on('click','#single-meta .meta-share-count, #project-meta .meta-share-count', function(){});

	}

	$('body').on('mouseenter','.fullscreen-header  .meta-share-count', function(){});

	if(!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) {
		$('body').on('mouseleave','.fullscreen-header  .meta-share-count', function(){});
	}

	//full width love center
	function(){}
	
	nectarLoveFWCenter();
	

	//-----------------------------------------------------------------
	// NectarLove
	//-----------------------------------------------------------------
	
	////love iwth txt
	$('.fullscreen-header .nectar-love').each(function(){});

	$('body').on('click','.nectar-love', function(){});


	
	//infinite scroll
	function(){}

infiniteScrollInit();

function destroyInfiniteScroll(){
	$('.post-area.infinite_scroll .posts-container').infinitescroll('destroy');
	$('.portfolio-items.infinite_scroll').infinitescroll('destroy');
}
	
/*-------------------------------------------------------------------------*/
/*	6.	Scroll to top
/*-------------------------------------------------------------------------*/	

var $scrollTop = $(window).scrollTop();

//starting bind
function(){}

if($('.nectar-social-sharing-fixed').length == 0) {
	toTopBind();
} else {
	if($(window).width() < 1000 && $('body.single').length > 0) {
		if($scrollTop > 150){
			$(window).on('scroll',hideFixedSharing);
		}
		else {
			$(window).on('scroll',showFixedSharing);
		}
	}

	$(window).smartresize(function(){});
}

function(){}

function(){}



function(){}

function(){}


//to top color
if( $('#to-top').length > 0 ) {
	
	var $windowHeight, $pageHeight, $footerHeight, $ctaHeight;
	
	function(){}
	
	if(!nectarDOMInfo.usingMobileBrowser) {
		//calc on scroll
		$(window).scroll(calcToTopColor);
		
		//calc on resize
		$(window).resize(calcToTopColor);
	}

}

//alt style
if($('body[data-button-style*="rounded"]').length > 0){
	var $clone = $('#to-top .fa-angle-up').clone();
	$clone.addClass('top-icon');
	$('#to-top').prepend($clone)
}

//scroll up event
$('body').on('click','#to-top, a[href="#top"]',function(){});


/* one page scrolling */
function(){}


/*helper function to scroll the page in an animated manner*/
function(){}


function(){}

if($('body[data-animated-anchors="true"]').length > 0 || $('.single-product [data-gallery-style="left_thumb_sticky"]').length > 0) { 


+ function(){}(jQuery);


var shrinkNum = 6;	
if($('#header-outer[data-shrink-num]').length > 0 ) shrinkNum = $('#header-outer').attr('data-shrink-num');
headerPadding2 = headerPadding - headerPadding/1.8;

setTimeout(scrollSpyInit,200);

var $animatedScrollingTimeout;

$('body').on('click','#header-outer nav .sf-menu a, #footer-outer .nectar-button, .container-wrap a:not(.wpb_tabs_nav a):not(.magnific):not([data-fancybox]):not(.woocommerce-tabs a):not(.testimonial-next-prev a), .swiper-slide .button a, #slide-out-widget-area a, #mobile-menu .container ul li a, #slide-out-widget-area .inner div a',function(){});



}




function(){}

if($('body.search-results').length > 0 && $('#search-results article').length > 0 && $('#search-results[data-layout="list-no-sidebar"]').length == 0) { searchResultMasonry(); }



	//portfolio colors
	if($('.portfolio-items .col .style-3-alt').length > 0 || $('.portfolio-items .col .style-3').length > 0 || $('.portfolio-items .col .style-2').length > 0 || $('.portfolio-items .col .style-5').length > 0 ) {
		var portfolioColorCss = '';
		$('.portfolio-items .col').each(function(){});


		var head = document.head || document.getElementsByTagName('head')[0];
		var style = document.createElement('style');

			style.type = 'text/css';
		if (style.styleSheet){
		  style.styleSheet.cssText = portfolioColorCss;
		} else {
		  style.appendChild(document.createTextNode(portfolioColorCss));
		}

		head.appendChild(style);
	}

	//bottom controls 2
	$('body').on('mouseleave','.container-wrap[data-nav-pos="after_project_2"] #portfolio-nav ul li, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul li',function(){
		$(this).addClass('mouse-leaving');
	});	

	// masonryPortfolio

	var $portfolio_containers = [];

	$('.portfolio-items:not(.carousel)').each(function(i){
		$portfolio_containers[i] = $(this);
	});

	function(){}

	masonryPortfolioInit();

	function(){}


	//perspective load in
	if($('.portfolio-items .inner-wrap[data-animation="perspective"]').length > 0 || $('.posts-container[data-load-animation="perspective"]').length > 0) {

		var lastScrollTop = $(window).scrollTop();

		$('.portfolio-items, .posts-container[data-load-animation="perspective"]').css('perspective-origin','50% '+ (lastScrollTop + $(window).height()) + 'px');

		requestAnimationFrame(updatePerspectiveOrigin);
		
		function(){}

	}

	var mediaQuerySize;
	function(){}

	function(){}

	//z-index for masonry
	function(){}

	function(){}
	
	function(){}
	
	function(){}

    //// filter items when filter link is clicked
	var clearIsoAnimation = null;
	var $checkForScrollBar = null;


	//number portfolios so multiple sortable ones can work easily on same page
	$('.portfolio-items:not(".carousel")').each(function(){});

    function(){}

	////filter event
	$('body').on('click','.portfolio-filters ul li a, .portfolio-filters-inline ul li a', isoClickFilter);


	function(){}

	function(){}



	var $blog_containers = [];

	$('.posts-container').each(function(i){
		$blog_containers[i] = $(this);
	});

  function(){}
	
	masonryBlogInit();

	function(){}

	function(){}

	function(){}


	function(){}

	if( $().theiaStickySidebar ) {
		blogStickySS();
	}

	var blogMediaQuerySize;
	function(){}


var shrinkNum = 6;
		
if($('#header-outer[data-shrink-num]').length > 0 ) shrinkNum = $('#header-outer').attr('data-shrink-num');

headerPadding2 = headerPadding - headerPadding/1.8;

$('body').on('click','.section-down-arrow',function(){});


$('body').on('mouseover','.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a',function(){
	$(this).parents('.grav-wrap').find('img').addClass('hovered');
});
$('body').on('mouseleave','.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a',function(){
	$(this).parents('.grav-wrap').find('img').removeClass('hovered');
});  



/*-------------------------------------------------------------------------*/
/*	7.	Cross Browser Fixes
/*-------------------------------------------------------------------------*/	
	 
	 function(){};

	crossBrowserFixes();



	jQuery( document.body ).on( 'updated_cart_totals', function(){});

	// Quantity buttons
	if($('.plus').length == 0) {
		$( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' ).addClass( 'buttons_added' ).append( '<input type="button" value="+" class="plus" />' ).prepend( '<input type="button" value="-" class="minus" />' );

		$( document ).on( 'click', '.plus, .minus', function(){});
	}

	function(){}
	

//vc col mobile fixes
function(){}

if( $('[class*="vc_col-xs-"], [class*="vc_col-md-"], [class*="vc_col-lg-"]').length > 0) { vcMobileColumns(); }


/*-------------------------------------------------------------------------*/
/*	8.	Form Styling
/*-------------------------------------------------------------------------*/	


if($('body[data-fancy-form-rcs="1"]').length > 0) {


    //select only as of v9
    $('select:not(.comment-form-rating #rating)').each(function(){});
	
	function(){}
   
	select2Init();

}
	


//Back/forward cache OCM close
if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)){
	
	window.onpageshow = function(){} //onpage show
		
} // only used on Safari or mobile
	
	
/*-------------------------------------------------------------------------*/
/*	10.	Page transitions
/*-------------------------------------------------------------------------*/	

	if($('body[data-ajax-transitions="true"]').length > 0 && $('#ajax-loading-screen[data-method="ajax"]').length > 0 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) && $(window).width() > 690 ) {

		$('#ajax-content-wrap').ajaxify({
			'selector':'#ajax-content-wrap a:not(.no-ajaxy):not([target="_blank"]):not([href^="#"]):not(.comment-edit-link):not(#cancel-comment-reply-link):not(.comment-reply-link):not(#toggle-nav):not(.cart_list a):not(.logged-in-as a):not(.no-widget-added a):not(.add_to_cart_button):not(.product-wrap a):not(.section-down-arrow):not([data-filter]):not([data-fancybox]):not(.product_list_widget a):not(.magnific):not(.pp):not([rel^="prettyPhoto"]):not(.pretty_photo), #header-outer li:not(.no-ajaxy) > a:not(.no-ajaxy), #header-outer #logo',
			'verbosity': 0, 
			requestDelay: 400,
			previewoff : true,
			memoryoff: true,
			turbo : false
		});

		$(window).on("pronto.render", initPage)
		.on("pronto.load", destroyPage)
		.on("pronto.request", transitionPage);

		if($('.nectar-box-roll').length == 0 && $('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0) setTimeout(function() { waypoints(); }, 750);
		else if($('.nectar-box-roll').length == 0) setTimeout(function() { waypoints(); },300);

		if($('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0) {
			setTimeout(function(){ 
				$('#ajax-loading-screen').addClass('loaded');
			},30);
		}

		initPage();

	} else if($('body[data-ajax-transitions="true"]').length > 0 && $('#ajax-loading-screen[data-method="standard"]').length > 0 ) {
		
		//chrome white BG flash fix
		$('html').addClass('page-trans-loaded');

		//fadeout loading animation
		if($('#ajax-loading-screen[data-effect="standard"]').length > 0) {

			if($('.nectar-particles').length == 0) {

					$('#ajax-loading-screen').transition({'opacity':0},500,function(){ 
						$(this).css({'display':'none'}); 
					}); 
					$('#ajax-loading-screen .loading-icon').transition({'opacity':0},500) 
				
			}

			//bind waypoints after loading screen has left
			if($('.nectar-box-roll').length == 0) setTimeout(function() { waypoints(); },550);

			//safari back/prev fix
			if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)){
				window.onunload = function(){ $('#ajax-loading-screen').stop().transition({'opacity':0},800,function(){ $(this).css({'display':'none'}); }); $('#ajax-loading-screen .loading-icon').transition({'opacity':0},600) };
				window.onpageshow = function(){}
					
			} else if(navigator.userAgent.indexOf('Firefox') != -1) {
				window.onunload = function(){};
			}

	    		
	    	
			
		} else {

			//for swipe trans add loaded immediately
			if($('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0) {
				setTimeout(function(){ 
					$('#ajax-loading-screen').addClass('loaded');
				},60);
			}

			if($('#page-header-wrap #page-header-bg[data-animate-in-effect="zoom-out"] .nectar-video-wrap').length == 0 && $('.first-nectar-slider').length == 0) {
				setTimeout(function(){},150);
			}

			//safari back/prev fix
			if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)){
				window.onunload = function(){};
				window.onpageshow = function(event) {
		    		if (event.persisted) { 
		    			$('#ajax-loading-screen').stop().transition({'opacity':0},800,function(){ 
		    				$(this).css({'display':'none'}); 
		    			}); 
		    			$('#ajax-loading-screen .loading-icon').transition({'opacity':0},600);
		    		}
		    	}
			} else if(navigator.userAgent.indexOf('Firefox') != -1) {
				window.onunload = function(){};
			}
			
			//bind waypoints after loading screen has left
			if($('.nectar-box-roll').length == 0 && $('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0) { setTimeout(function() { waypoints(); }, 750); }
			else if($('.nectar-box-roll').length == 0) setTimeout(function() { waypoints(); },350);

		}

		//remove excess loading images now
		$('.portfolio-loading, .nectar-slider-loading .loading-icon').remove();


		if($('#ajax-loading-screen[data-disable-fade-on-click="1"]').length == 0) {
				
				if( $('body.using-mobile-browser #ajax-loading-screen[data-method="standard"][data-disable-mobile="1"]').length == 0) {
					
					var ignore_onbeforeunload = false;
					$('a[href^="mailto"], a[href^="tel"]').on('click',function(){
			        ignore_onbeforeunload = true;
			    });
					window.addEventListener('beforeunload', function(){});
				}

		} // if disable fade out is not on
		
		
	} else {	
		//bind waypoints regularly
		if($('.nectar-box-roll').length == 0 && !nectarDOMInfo.usingFrontEndEditor) setTimeout(function() { waypoints(); },100);
	}


	function(){}

	function(){}

	function(){}

	function(){} 



(function(){})(jQuery);	
	
	
	
	
});


 }(window.jQuery, window, document));


function(){}



/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */
!function(factory){"use strict";"function"==typeof define&&define.amd?define(["jquery"],factory):jQuery&&!jQuery.fn.hoverIntent&&factory(jQuery)}(function(){}