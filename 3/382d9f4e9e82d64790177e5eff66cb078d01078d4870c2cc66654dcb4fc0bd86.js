/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";function _(){}_.version="2.0.8","undefined"!=typeof window&&window.addEventListener("mousewheel",void 0);var P="data-scrollmagic-pin-spacer";_.Controller=function(e){function(){}function(){}var n,o,i="REVERSE",s="PAUSED",a=z.defaults,l=this,c=R.extend({},a,e),f=[],u=!1,d=0,h=s,p=!0,g=0,v=!0,m=function(){},w=function(){return c.vertical?R.get.scrollTop(c.container):R.get.scrollLeft(c.container)},y=function(){return c.vertical?R.get.height(c.container):R.get.width(c.container)},S=this._setScrollPos=function(e){c.vertical?p?window.scrollTo(R.get.scrollLeft(),e):c.container.scrollTop=e:p?window.scrollTo(e,R.get.scrollTop()):c.container.scrollLeft=e},b=function(){},E=function(){};this._options=c;function(){}return this.addScene=function(){},this.removeScene=function(){},this.updateScene=function(){},this.update=function(e){return b({type:"resize"}),e&&t(),l},this.scrollTo=function(){},this.scrollPos=function(){},this.info=function(){},this.loglevel=function(e){return l},this.enabled=function(e){return arguments.length?(v!=e&&(v=!!e,l.updateScene(f,!0)),l):v},this.destroy=function(){},function(){}(),l};var z={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};_.Controller.addOption=function(e,t){z.defaults[e]=t},_.Controller.extend=function(e){var t=this;_.Controller=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Controller,t),_.Controller.prototype=t.prototype,_.Controller.prototype.constructor=_.Controller},_.Scene=function(e){var n,l,c="BEFORE",f="DURING",u="AFTER",r=D.defaults,d=this,h=R.extend({},r,e),p=c,g=0,a={start:0,end:0},v=0,o=!0,s={};this.on=function(){},this.off=function(){},this.trigger=function(){},d.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?y():"reverse"===e.what&&d.update())}).on("shift.internal",function(e){t(),d.update()}),this.addTo=function(){},this.enabled=function(e){return arguments.length?(o!=e&&(o=!!e,d.update(!0)),d):o},this.remove=function(){},this.destroy=function(){},this.update=function(){},this.refresh=function(){return i(),y(),d},this.progress=function(e){if(arguments.length){var t,n,r,o=!1,i=p,s=l?l.info("scrollDirection"):"PAUSED",a=h.reverse||g<=e;return 0===h.duration?(o=g!=e,p=0===(g=e<1&&a?0:1)?c:f):e<0&&p!==c&&a?(p=c,o=!(g=0)):0<=e&&e<1&&a?(g=e,p=f,o=!0):1<=e&&p!==u?(g=1,p=u,o=!0):p!==f||a||T(),o&&(t={progress:g,state:p,scrollDirection:s},r=function(e){d.trigger(e,t)},(n=p!=i)&&i!==f&&(r("enter"),r(i===c?"start":"end")),r("progress"),n&&p!==f&&(r(p===c?"start":"end"),r("leave"))),d}return g};var m,w,t=function(){a={start:v+h.offset},l&&h.triggerElement&&(a.start-=l.info("size")*h.triggerHook),a.end=a.start+h.duration},i=function(){},y=function(){},S=function(){},b=R.extend(D.validate,{duration:function(){}}),E=function(){},x=function(e,t){var n=!1,r=h[e];return h[e]!=t&&(h[e]=t,E(e),n=r!=h[e]),n},z=function(){};this.controller=function(){return l},this.state=function(){return p},this.scrollOffset=function(){return a.start},this.triggerPosition=function(){},d.on("shift.internal",function(){}).on("progress.internal",function(e){T()}).on("add.internal",function(e){A()}).on("destroy.internal",function(e){d.removePin(e.reset)});function(){}function(){}function(){}var T=function(){},A=function(){};this.setPin=function(){},this.removePin=function(){};var N,O=[];return d.on("destroy.internal",function(e){d.removeClassToggle(e.reset)}),this.setClassToggle=function(){},this.removeClassToggle=function(){},function(){}(),d};var D={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(){},triggerElement:function(){},triggerHook:function(){},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};_.Scene.addOption=function(){},_.Scene.extend=function(e){var t=this;_.Scene=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Scene,t),_.Scene.prototype=t.prototype,_.Scene.prototype.constructor=_.Scene},_.Event=function(){};var R=_._util=function(s){function a(e){return parseFloat(e)||0}function(){}function(){}function(){}var e={};e.extend=function(e){for(e=e||{},f=1;f<arguments.length;f++)if(arguments[f])for(var t in arguments[f])arguments[f].hasOwnProperty(t)&&(e[t]=arguments[f][t]);return e},e.isMarginCollapseType=function(){};for(var o=0,t=["ms","moz","webkit","o"],n=s.requestAnimationFrame,i=s.cancelAnimationFrame,f=0;!n&&f<4;++f)n=s[t[f]+"RequestAnimationFrame"],i=s[t[f]+"CancelAnimationFrame"]||s[t[f]+"CancelRequestAnimationFrame"];n=n||function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-o)),r=s.setTimeout(function(){e(t+n)},n);return o=t+n,r},i=i||function(e){s.clearTimeout(e)},e.rAF=n.bind(s),e.cAF=i.bind(s);var u=e.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(){},u.DomElement=function(){};var d=e.get={};return d.elements=function(){},d.scrollTop=function(e){return e&&"number"==typeof e.scrollTop?e.scrollTop:s.pageYOffset||0},d.scrollLeft=function(e){return e&&"number"==typeof e.scrollLeft?e.scrollLeft:s.pageXOffset||0},d.width=function(e,t,n){return r("width",e,t,n)},d.height=function(e,t,n){return r("height",e,t,n)},d.offset=function(){},e.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},e.removeClass=function(){},e.css=function(){}