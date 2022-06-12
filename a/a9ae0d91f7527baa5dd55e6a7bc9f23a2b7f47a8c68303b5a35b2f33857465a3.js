define(['underscore','domReady!'],function(_){'use strict';var context=require.s.contexts._,execCb=context.execCb,registry=context.registry,callbacks=[],retries=10,updateDelay=1,ready,update;function(){}
function(){}
function isPathFallback(module){return registry[module.id]&&registry[module.id].events.error;}
function isPending(module){if(!module.depCount){return false;}
return module.depCount>_.filter(module.depMaps,isRejected).length+_.filter(module.depMaps,isPathFallback).length;}
function hasPending(){return _.some(registry,isPending);}
function(){}
function invoke(callback){callback.handler.call(callback.ctx);}
function(){}
function(){}
function(){}
update=_.debounce(function(){},updateDelay);context.execCb=function(){}