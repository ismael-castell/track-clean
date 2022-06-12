(function(){/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var c=null,f=window.HTMLImports&&window.HTMLImports.whenReady||null,g;function(){};var k=null,l=null;function m(){this.customStyles=[];this.enqueued=!1;h(function(){window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}function n(a){!a.enqueued&&l&&(a.enqueued=!0,h(l))}m.prototype.c=function(){};m.prototype.b=function(a){if(a.__shadyCSSCachedStyle)return a.__shadyCSSCachedStyle;var b;a.getStyle?b=a.getStyle():b=a;return b};
m.prototype.a=function(){};m.prototype.addCustomStyle=m.prototype.c;m.prototype.getStyleForCustomStyle=m.prototype.b;m.prototype.processStyles=m.prototype.a;
Object.defineProperties(m.prototype,{transformCallback:{get:function(){return k},set:function(a){k=a}},validateCallback:{get:function(){return l},set:function(a){var b=!1;l||(b=!0);l=a;b&&n(this)}}});function(){};var q=!(window.ShadyDOM&&window.ShadyDOM.inUse),r;function(){}var u;window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(u=window.ShadyCSS.cssBuild);var v=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);
window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(t(window.ShadyCSS),window.ShadyCSS=void 0):t(window.WebComponents&&window.WebComponents.flags);var w=r,x=u;var y=new m;window.ShadyCSS||(window.ShadyCSS={prepareTemplate:function(){},prepareTemplateDom:function(){},prepareTemplateStyles:function(){},styleSubtree:function(){},styleElement:function(){y.a()},styleDocument:function(){},getComputedStyleValue:function(){}