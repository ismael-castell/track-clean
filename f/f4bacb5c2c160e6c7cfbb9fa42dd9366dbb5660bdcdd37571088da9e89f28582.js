define(['underscore','uiRegistry','mageUtils','uiEvents'],function(_,registry,utils,EventsBus){'use strict';var root='appData',localStorage,hasSupport,storage;hasSupport=(function(){var key='_storageSupported';try{localStorage=window.localStorage;localStorage.setItem(key,'true');if(localStorage.getItem(key)==='true'){localStorage.removeItem(key);return true;}
return false;}catch(e){return false;}})();if(!hasSupport){localStorage={_data:{},setItem:function(){},getItem:function(key){return this._data[key];},removeItem:function(key){delete this._data[key];},clear:function(){this._data={};}};}
function(){}
function(){}
storage=_.extend({get:function(){},set:function(){},remove:function(){}