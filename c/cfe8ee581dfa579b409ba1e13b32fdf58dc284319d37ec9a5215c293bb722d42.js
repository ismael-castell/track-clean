define(['underscore','jquery','./scripts'],function(_,$,processScripts){'use strict';var dataAttr='data-mage-init',nodeSelector='['+dataAttr+']';function init(el,config,component){require([component],function(fn){var $el;if(typeof fn==='object'){fn=fn[component].bind(fn);}
if(_.isFunction(fn)){fn=fn.bind(null,config,el);}else{$el=$(el);if($el[component]){fn=$el[component].bind($el,config);}}
setTimeout(fn);},function(){});}
function(){}
return{apply:function(){}