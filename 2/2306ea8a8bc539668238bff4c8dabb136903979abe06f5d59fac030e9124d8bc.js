!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}(function(A){var a,e=navigator.userAgent,R=/iphone/i.test(e),S=/chrome/i.test(e),T=/android/i.test(e);A.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},A.fn.extend({caret:function(){},unmask:function(){return this.trigger("unmask")},mask:function(t,p){var n,v,b,k,y,x,j;if(!t&&0<this.length){var e=A(this[0]).data(A.mask.dataName);return e?e():void 0}return p=A.extend({autoclear:A.mask.autoclear,placeholder:A.mask.placeholder,completed:null},p),n=A.mask.definitions,v=[],b=x=t.length,k=null,t=String(t),A.each(t.split(""),function(){}),this.trigger("unmask").each(function(){var o=A(this),c=A.map(t.split(""),function(){}),l=c.join(""),i=o.val();function(){}function(){}function s(e){for(;++e<x&&!v[e];);return e}function(){}function(){}function(){}function m(){o.val(c.join(""))}function(){}o.data(A.mask.dataName,function(){return A.map(c,function(e,t){return v[t]&&e!=u(t)?e:null}).join("")}),o.one("unmask",function(){o.off(".mask").removeData(A.mask.dataName)}).on("focus.mask",function(){}).on("blur.mask",h).on("keydown.mask",function(){}).on("keypress.mask",function(e){var t,n,a,i;o.prop("readonly")||(i=e.which||e.keyCode,t=o.caret(),e.ctrlKey||e.altKey||e.metaKey||i<32||i&&13!==i&&(t.end-t.begin!=0&&(g(t.begin,t.end),f(t.begin,t.end-1)),(n=s(t.begin-1))<x&&(i=String.fromCharCode(i),v[n].test(i)&&(function(){}(n),c[n]=i,m(),a=s(n),T?setTimeout(function(){A.proxy(A.fn.caret,o,a)()},0):o.caret(a),t.begin<=y&&r())),e.preventDefault()))}).on("input.mask paste.mask",function(){o.prop("readonly")||setTimeout(function(){var e=d(!0);o.caret(e),r()},0)}),S&&T&&o.off("input.mask").on("input.mask",function(){}