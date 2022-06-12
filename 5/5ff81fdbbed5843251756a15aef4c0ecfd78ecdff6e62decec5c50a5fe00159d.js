/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2021 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

!function($){"use strict";var Tabs,old,clickHandler,changeHandler;function(){}(Tabs=function(){}).prototype.isCacheUsed=function(){var that=this;return void 0===this.useCacheFlag&&(this.useCacheFlag=function(){}()),this.useCacheFlag},Tabs.prototype.getContainer=function(){},Tabs.prototype.findContainer=function(){},Tabs.prototype.getContainerAccordion=function(){return this.getContainer().find("[data-vc-accordion]")},Tabs.prototype.getSelector=function(){},Tabs.prototype.getTarget=function(){},Tabs.prototype.getRelatedAccordion=function(){},Tabs.prototype.triggerEvent=function(){},Tabs.prototype.getTargetTab=function(){},Tabs.prototype.tabClick=function(){this.getRelatedAccordion().trigger("click")},Tabs.prototype.show=function(){},Tabs.prototype.hide=function(){},old=$.fn.vcTabs,$.fn.vcTabs=Plugin,$.fn.vcTabs.Constructor=Tabs,$.fn.vcTabs.noConflict=function(){return $.fn.vcTabs=old,this},clickHandler=function(){},changeHandler=function(){}