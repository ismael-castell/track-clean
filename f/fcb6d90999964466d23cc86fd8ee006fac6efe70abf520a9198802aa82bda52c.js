// (c) 2010 CodePlex Foundation
(function(g,b){var o="object",t="set_",l="#",n="$",k="string",j=".",h=" ",s="onreadystatechange",m="load",y="_readyQueue",x="_domReadyQueue",r="error",d=false,q="on",a=null,c=true,e="undefined",f="function",i="number",A=function(){},v=function(){},p=function(a,g,h){var d;if(a){a=a instanceof Array||typeof a.length===i&&(typeof a.callee===f||a.item&&typeof a.nodeType===e&&!a.addEventListener&&!a.attachEvent)?a:[a];for(var b=h||0,j=a.length;b<j;b++)if(g(a[b],b)){d=c;break}}return!d},u=function(){};if(!b||!b.loader){function(){}var z=!!document.attachEvent;function(){}function(){}function(){}function(){}function(){}function J(a){return document.createElement(a)}function(){}function(){}function(){}g.Sys=b=M(b,{version:[3,0,31106,0],__namespace:c,debug:d,scripts:{},activateDom:c,composites:{},components:{},plugins:{},create:{},converters:{},_domLoaded:function(){},_getById:function(){},_getByClass:function(){},query:function(a,c){return new b.ElementSet(a,c)},"get":function(){},_find:function(){},onDomReady:function(a){G(this,x,a);E()},onReady:function(){},_set:function(){}});b._getComponent=b._getComponent||function(){};b._2Pass=b._2Pass||function(){};var w;if(!b.ElementSet){w=b.ElementSet=function(){};w.prototype={__class:c,components:function(){},component:function(){},each:function(){},"get":function(){},find:function(){},filter:function(){}}}if(!b.ComponentSet){w=b.ComponentSet=function(){};w.prototype={__class:c,setProperties:function(a){return this.each(function(){b._set(this,a)})},"get":function(){},each:function(){},elements:function(){return this._elementSet},_execute:function(){}}}w=a}var L=function(){};b._getCreate=L;function(){}