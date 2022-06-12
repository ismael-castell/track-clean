/*!
 * Bootstrap-submenu v2.0.4 (https://vsn4ik.github.io/bootstrap-submenu/)
 * Copyright 2014-2016 Vasily A. (https://github.com/vsn4ik)
 * Licensed under the MIT license
 */

"use strict";!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function(){}function(){}function(){}b.prototype={init:function(){},close:function(){this.$main.removeClass("open"),this.$items.trigger("hide.bs.submenu")},keydown:function(){}},a.extend(c.prototype,b.prototype,{init:function(){},click:function(){},hide:function(a){a.stopPropagation(),this.close()},open:function(){this.$main.addClass("open"),this.$subs.trigger("hide.bs.submenu")},toggle:function(){},keydown:function(){}}),d.prototype={init:function(){},hidden:function(){this.$items.trigger("hide.bs.submenu")},itemKeydown:function(){}};var e=a.fn.submenupicker;return a.fn.submenupicker=function(){}