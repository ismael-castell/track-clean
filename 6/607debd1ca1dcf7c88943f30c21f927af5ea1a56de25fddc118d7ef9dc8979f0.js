/* NUGET: BEGIN LICENSE TEXT
*
* Microsoft grants you the right to use these script files for the sole
* purpose of either: (i) interacting through your browser with the Microsoft
* website or online service, subject to the applicable licensing or use
* terms; or (ii) using the files as included with a Microsoft product subject
* to that product's license terms. Microsoft reserves all other rights to the
* files not expressly granted by Microsoft, whether by implication, estoppel
* or otherwise. Insofar as a script file is dual licensed under GPL,
* Microsoft neither took the code under GPL nor distributes it thereunder but
* under the terms set out in this paragraph. All notices and licenses
* below are for informational purposes only.
*
* NUGET: END LICENSE TEXT */
/*
** Unobtrusive validation support library for jQuery and jQuery Validate
** Copyright (C) Microsoft Corporation. All rights reserved.
*/
(function(a){var d=a.validator,b,e="unobtrusiveValidation";function(){}function j(a){return a.replace(/^\s+|\s+$/g,"").split(/\s*,\s*/g)}function f(a){return a.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g,"\\$1")}function h(a){return a.substr(0,a.lastIndexOf(".")+1)}function(){}function(){}function(){}function(){}function(){}function(){}d.unobtrusive={adapters:[],parseElement:function(){},parse:function(){}};b=d.unobtrusive.adapters;b.add=function(){};b.addBool=function(){};b.addMinMax=function(){};b.addSingleVal=function(a,b,d){return this.add(a,[b||"val"],function(e){c(e,d||a,e.params[b])})};d.addMethod("__dummy__",function(){return true});d.addMethod("regex",function(){});d.addMethod("nonalphamin",function(){});if(d.methods.extension){b.addSingleVal("accept","mimtype");b.addSingleVal("extension","extension")}else b.addSingleVal("extension","extension","accept");b.addSingleVal("regex","pattern");b.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");b.addMinMax("length","minlength","maxlength","rangelength").addMinMax("range","min","max","range");b.add("equalto",["other"],function(){});b.add("required",function(){});b.add("remote",["url","type","additionalfields"],function(){});b.add("password",["min","nonalphamin","regex"],function(){}