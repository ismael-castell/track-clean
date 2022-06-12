define(['ko','jquery','underscore'],function(ko,$,_){'use strict';var primitives=['undefined','boolean','number','string'];function(){}
function(){}
function(){}
return{nested:function(){},nestedRemove:function(){},flatten:function(data,separator,parent,result){separator=separator||'.';result=result||{};if(!data){return result;}
_.each(Object.keys(data),function(name){var node=data[name];if({}.toString.call(node)==='[object Function]'){return;}
if(parent){name=parent+separator+name;}
typeof node==='object'?this.flatten(node,separator,name,result):result[name]=node;},this);return result;},unflatten:function(){},serialize:function(){},extend:function(){},copy:function(){},hardCopy:function(){},omit:function(){},isObject:function(){},isPrimitive:function(){},forEachRecursive:function(){},mapRecursive:function(){},removeEmptyValues:function(){},isEmptyObj:function(){}