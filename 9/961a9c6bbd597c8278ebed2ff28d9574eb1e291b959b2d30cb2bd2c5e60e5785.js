define(['underscore','mage/utils/objects'],function(_,utils){'use strict';var result=[];function equalArrays(keepOrder,target){var args=_.toArray(arguments),arrays;if(!Array.isArray(keepOrder)){arrays=args.slice(2);}else{target=keepOrder;keepOrder=false;arrays=args.slice(1);}
if(!arrays.length){return true;}
return arrays.every(function(array){if(array===target){return true;}else if(array.length!==target.length){return false;}else if(!keepOrder){return!_.difference(target,array).length;}
return array.every(function(value,index){return target[index]===value;});});}
function(){}
function(){}
function hasOwn(obj,key){return Object.prototype.hasOwnProperty.call(obj,key);}
function(){}
function(){}
function(){}
function(){}
return{compare:function(){}