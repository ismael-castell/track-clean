"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};window.console=window.console||function(){}(),String.prototype.m7trim=function(){return void 0===this?"":this.replace(/^\s*/g,"").replace(/\s*$/g,"")};var hostUrl="/",moor7Source="";if(document.currentScript)hostUrl=(moor7Source=document.currentScript.src).split("javascripts")[0];else for(var m7script=document.getElementsByTagName("script"),i=0;i<=m7script.length;i++){var m7scriptSrc=m7script[i].src;if(-1<m7scriptSrc.indexOf("javascripts/7moorInit.js")){hostUrl=moor7Source=m7scriptSrc.split("javascripts")[0];break}}!function(){var ie=!(!window.attachEvent||window.opera),wk=/webkit\/(\d+)/i.test(navigator.userAgent)&&RegExp.$1<525,fn=[],run=function(){},d=document;d.ready=function(f){if(!ie&&!wk&&d.addEventListener)return d.addEventListener("DOMContentLoaded",f,!1);if(!(1<fn.push(f)))if(ie)!function(){try{d.documentElement.doScroll("left"),run()}catch(err){setTimeout(arguments.callee,0)}}();else if(wk)var t=setInterval(function(){}