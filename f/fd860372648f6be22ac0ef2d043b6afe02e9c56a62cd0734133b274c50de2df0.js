if(typeof jQuery!="undefined"){(function($){"use strict";$(function(){var LSOW_Frontend={init:function(){this.output_custom_css();this.carousel();this.setup_parallax();this.setup_ytp();this.setup_animations()},setup_animations:function(){},output_custom_css:function(){var custom_css=lsow_settings["custom_css"];if(custom_css!==undefined&&custom_css!=""){custom_css='<style type="text/css">'+custom_css+"</style>";$("head").append(custom_css)}},isMobile:function(){},vendor_prefix:function(){}