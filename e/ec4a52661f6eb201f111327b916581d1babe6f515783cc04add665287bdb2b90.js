define(['underscore','jquery','mageUtils','uiRegistry','./types','../../lib/logger/console-logger'],function(_,$,utils,registry,types,consoleLogger){'use strict';var templates=registry.create(),layout={},cachedConfig={};function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
_.extend(layout,{iterator:function(){},process:function(){},build:function(){},filterDisabledChildren:function(){},initComponent:function(){}});_.extend(layout,{waitTemplate:function(){},waitParent:function(){},applyTemplate:function(){}});_.extend(layout,{manipulate:function(){},insert:function(){},insertTo:function(){},addChild:function(){},merge:function(components){var cachedKey=_.keys(components)[0],compared=utils.compare(cachedConfig[cachedKey],components),remove=this.filterComponents(this.getByProperty(compared.changes,'type','remove'),true),update=this.getByProperty(compared.changes,'type','update'),dataSources=this.getDataSources(components),names,index,name,component;_.each(dataSources,function(){},this);_.each(remove,function(val){component=registry.get(val.path);if(component){component.destroy();}});update=_.compact(_.filter(update,function(){}));_.each(update,function(){},this);run(components,undefined,true);},getDataSources:function(){},getFullConfig:function(){},getByProperty:function(){},filterComponents:function(){}