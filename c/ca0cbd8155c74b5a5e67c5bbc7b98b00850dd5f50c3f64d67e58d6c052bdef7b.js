/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.i18n=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="Vhyj")}({"4Z/T":function(){},"4eJC":function(){},Vhyj:function(t,e,n){"use strict";n.r(e),n.d(e,"sprintf",(function(){return u})),n.d(e,"createI18n",(function(){return _})),n.d(e,"defaultI18n",(function(){return w})),n.d(e,"setLocaleData",(function(){return F})),n.d(e,"resetLocaleData",(function(){return S})),n.d(e,"getLocaleData",(function(){return k})),n.d(e,"subscribe",(function(){return j})),n.d(e,"__",(function(){return T})),n.d(e,"_x",(function(){return O})),n.d(e,"_n",(function(){return L})),n.d(e,"_nx",(function(){return D})),n.d(e,"isRTL",(function(){return P})),n.d(e,"hasTranslation",(function(){return I}));var r=n("4eJC"),i=n.n(r),o=n("4Z/T"),a=n.n(o);const s=i()(console.error);function u(t,...e){try{return a.a.sprintf(t,...e)}catch(e){return s("sprintf error: \n\n"+e.toString()),t}}var l,c,p,f;l={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},c=["(","?"],p={")":["("],":":["?","?:"]},f=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var d={"!":function(t){return!t},"*":function(t,e){return t*e},"/":function(t,e){return t/e},"%":function(t,e){return t%e},"+":function(t,e){return t+e},"-":function(t,e){return t-e},"<":function(t,e){return t<e},"<=":function(t,e){return t<=e},">":function(t,e){return t>e},">=":function(t,e){return t>=e},"==":function(t,e){return t===e},"!=":function(t,e){return t!==e},"&&":function(t,e){return t&&e},"||":function(t,e){return t||e},"?:":function(){}};function(){}var g={contextDelimiter:"",onMissingKey:null};function(){}x.prototype.getPluralForm=function(){},x.prototype.dcnpgettext=function(){};const y={"":{plural_forms:}},b=/^i18n\.(n?gettext|has_translation)(_|$)/,_=(t,e,n)=>{const r=new x({}),i=new Set,o=,a=(t,e="default")=>{r.data[e]={...y,...r.data[e],...t},r.data[e][""]={...y[""],...r.data[e][""]}},s=,u=(t="default",e,n,i,o)=>(r.data[t]||a(void 0,t),r.dcnpgettext(t,e,n,i,o)),l=,c=(t,e,r)=>{let i=u(r,e,t);return n?(i=n.applyFilters("i18n.gettext_with_context",i,t,e,r),n.applyFilters("i18n.gettext_with_context_"+l(r),i,t,e,r)):i};if(t&&s(t,e),n){const t=t=>{b.test(t)&&o()};n.addAction("hookAdded","core/i18n",t),n.addAction("hookRemoved","core/i18n",t)}return{getLocaleData:(t="default")=>r.data[t],setLocaleData:s,resetLocaleData:(t,e)=>{r.data={},r.pluralForms={},s(t,e)},subscribe: