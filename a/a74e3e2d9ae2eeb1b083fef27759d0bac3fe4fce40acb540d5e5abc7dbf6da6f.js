/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(o){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=o,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([,,function(){},,function(){},function(){},function(e,t,o){e.exports=o(7)},function(){},function(e,t,o){"use strict";e.exports=o(9)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function i(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),e}}();function i(){this._done=[],this._fail=[]}i.prototype={execute:function(){},resolve:function(){this.execute(this._done,arguments)},reject:function(){this.execute(this._fail,arguments)},done:function(e){this._done.push(e)},fail:function(e){this._fail.push(e)}};var r=0,l=0,u=0,p=0,d=0,s=new i,y=new i,c=function(){function(){}return a(i,[{key:"extend",value:function(){}},{key:"parseURL",value:function(){}},{key:"isValid",value:function(){return!!this.videoID}},{key:"on",value:function(){}},{key:"off",value:function(){}},{key:"fire",value:function(){}},{key:"play",value:function(){}},{key:"pause",value:function(){}},{key:"mute",value:function(){}},{key:"unmute",value:function(){}},{key:"setVolume",value:function(){}},{key:"getVolume",value:function(){}},{key:"getMuted",value:function(){}},{key:"getImageURL",value:function(){}},{key:"getIframe",value:function(e){this.getVideo(e)}},{key:"getVideo",value:function(u){var p=this;p.$video?u(p.$video):p.onAPIready(function(){var e=void 0;if(p.$video||((e=document.createElement("div")).style.display="none"),"youtube"===p.type){p.playerOptions={},p.playerOptions.videoId=p.videoID,p.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,playsinline:1},p.options.showContols||(p.playerOptions.playerVars.iv_load_policy=3,p.playerOptions.playerVars.modestbranding=1,p.playerOptions.playerVars.controls=0,p.playerOptions.playerVars.showinfo=0,p.playerOptions.playerVars.disablekb=1);var t=void 0,o=void 0;p.playerOptions.events={onReady:function(){},onStateChange:function(){}};var i=!p.$video;if(i){var n=document.createElement("div");n.setAttribute("id",p.playerID),e.appendChild(n),document.body.appendChild(e)}p.player=p.player||new window.YT.Player(p.playerID,p.playerOptions),i&&(p.$video=document.getElementById(p.playerID),p.videoWidth=parseInt(p.$video.getAttribute("width"),10)||1280,p.videoHeight=parseInt(p.$video.getAttribute("height"),10)||720)}if("vimeo"===p.type){if(p.playerOptions={id:p.videoID,autopause:0,transparent:0,autoplay:p.options.autoplay?1:0,loop:p.options.loop?1:0,muted:p.options.mute?1:0},p.options.volume&&(p.playerOptions.volume=p.options.volume),p.options.showContols||(p.playerOptions.badge=0,p.playerOptions.byline=0,p.playerOptions.portrait=0,p.playerOptions.title=0),!p.$video){var a="";Object.keys(p.playerOptions).forEach(function(){}),p.$video=document.createElement("iframe"),p.$video.setAttribute("id",p.playerID),p.$video.setAttribute("src","https://player.vimeo.com/video/"+p.videoID+"?"+a),p.$video.setAttribute("frameborder","0"),p.$video.setAttribute("mozallowfullscreen",""),p.$video.setAttribute("allowfullscreen",""),e.appendChild(p.$video),document.body.appendChild(e)}p.player=p.player||new Vimeo.Player(p.$video,p.playerOptions),p.options.startTime&&p.options.autoplay&&p.player.setCurrentTime(p.options.startTime),p.player.getVideoWidth().then(function(e){p.videoWidth=e||1280}),p.player.getVideoHeight().then(function(e){p.videoHeight=e||720});var r=void 0;p.player.on("timeupdate",function(){}),p.player.on("play",function(){}),p.player.on("pause",function(e){p.fire("pause",e)}),p.player.on("ended",function(e){p.fire("ended",e)}),p.player.on("loaded",function(e){p.fire("ready",e)}),p.player.on("volumechange",function(e){p.fire("volumechange",e)})}if("local"===p.type){p.$video||(p.$video=document.createElement("video"),p.options.showContols&&(p.$video.controls=!0),p.options.mute?p.$video.muted=!0:p.$video.volume&&(p.$video.volume=p.options.volume/100),p.options.loop&&(p.$video.loop=!0),p.$video.setAttribute("playsinline",""),p.$video.setAttribute("webkit-playsinline",""),p.$video.setAttribute("id",p.playerID),e.appendChild(p.$video),document.body.appendChild(e),Object.keys(p.videoID).forEach(function(){})),p.player=p.player||p.$video;var l=void 0;p.player.addEventListener("playing",function(){}),p.player.addEventListener("timeupdate",function(){}),p.player.addEventListener("play",function(e){p.fire("play",e)}),p.player.addEventListener("pause",function(e){p.fire("pause",e)}),p.player.addEventListener("ended",function(e){p.fire("ended",e)}),p.player.addEventListener("loadedmetadata",function(){}),p.player.addEventListener("volumechange",function(){})}u(p.$video)})}},{key:"init",value:function(){}},{key:"loadAPI",value:function(){}},{key:"onAPIready",value:function(){}}]),i}();t.default=c},function(){}