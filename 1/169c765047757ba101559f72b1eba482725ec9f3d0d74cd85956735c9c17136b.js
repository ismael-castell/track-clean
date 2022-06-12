define(function(){'use strict';var isTop,testDiv,scrollIntervalId,isBrowser=typeof window!=="undefined"&&window.document,isPageLoaded=!isBrowser,doc=isBrowser?document:null,readyCalls=[];function(){}
function(){}
function(){}
if(isBrowser){if(document.addEventListener){document.addEventListener("DOMContentLoaded",pageLoaded,false);window.addEventListener("load",pageLoaded,false);}else if(window.attachEvent){window.attachEvent("onload",pageLoaded);testDiv=document.createElement('div');try{isTop=window.frameElement===null;}catch(e){}
if(testDiv.doScroll&&isTop&&window.external){scrollIntervalId=setInterval(function(){},30);}}
if(document.readyState!=="loading"){setTimeout(pageLoaded);}}
function(){}
domReady.version='2.0.1';domReady.load=function(){}