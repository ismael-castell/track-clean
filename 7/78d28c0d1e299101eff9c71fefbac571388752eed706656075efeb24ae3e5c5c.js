/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

!function($){"use strict";var Tabs,old,clickHandler,changeHandler;function(){}(Tabs=function(){}).prototype.isCacheUsed=function(){},Tabs.prototype.getContainer=function(){},Tabs.prototype.findContainer=function(){},Tabs.prototype.getContainerAccordion=function(){return this.getContainer().find("[data-vc-accordion]")},Tabs.prototype.getSelector=function(){},Tabs.prototype.getTarget=function(){},Tabs.prototype.getRelatedAccordion=function(){},Tabs.prototype.triggerEvent=function(){},Tabs.prototype.getTargetTab=function(){},Tabs.prototype.tabClick=function(){this.getRelatedAccordion().trigger("click")},Tabs.prototype.show=function(){},Tabs.prototype.hide=function(){},old=$.fn.vcTabs,$.fn.vcTabs=Plugin,$.fn.vcTabs.Constructor=Tabs,$.fn.vcTabs.noConflict=function(){return $.fn.vcTabs=old,this},clickHandler=function(){},changeHandler=function(e){var caller;void 0===(caller=$(e.target).data("vc.accordion")).getRelatedTab&&(caller.getRelatedTab=function(){}