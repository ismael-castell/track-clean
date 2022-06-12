/*! selectize.js - v0.12.2 | https://github.com/selectize/selectize.js | Apache License (v2) */
!function(a,b){"function"==typeof define&&define.amd?define("sifter",b):"object"==typeof exports?module.exports=b():a.Sifter=b()}(this,function(){}),function(){}(this,function(){}),function(){}(this,function(a,b,c){"use strict";var d=function(){},e=function(){};e.prototype={on:function(a,b){this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(b)},off:function(){},trigger:function(){}},e.mixin=function(){};var f=/Mac/.test(navigator.userAgent),g=65,h=13,i=27,j=37,k=38,l=80,m=39,n=40,o=78,p=8,q=46,r=16,s=f?91:17,t=f?18:17,u=9,v=1,w=2,x=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("form").validity,y=function(a){return"undefined"!=typeof a},z=function(){},A=function(){},B={};B.before=function(){},B.after=function(){};var C=function(){},D=function(a,b){var c;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}},E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){},L=function(){};return e.mixin(L),c.mixin(L),a.extend(L.prototype,{setup:function(){},setupTemplates:function(){},setupCallbacks:function(){},onClick:function(){},onMouseDown:function(){},onChange:function(){this.$input.trigger("change")},onPaste:function(){},onKeyPress:function(){},onKeyDown:function(){},onKeyUp:function(){},onSearchChange:function(){},onFocus:function(){},onBlur:function(){},onOptionHover:function(){},onOptionSelect:function(){},onItemSelect:function(){},load:function(){},setTextboxValue:function(){},getValue:function(){},setValue:function(){},setActiveItem:function(){},setActiveOption:function(){},selectAll:function(){},hideInput:function(){},showInput:function(){},focus:function(){},blur:function(){},getScoreFunction:function(){},getSearchOptions:function(){},search:function(){},refreshOptions:function(b){var c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;"undefined"==typeof b&&(b=!0);var t=this,u=a.trim(t.$control_input.val()),v=t.search(u),w=t.$dropdown_content,x=t.$activeOption&&z(t.$activeOption.attr("data-value"));for(g=v.items.length,"number"==typeof t.settings.maxOptions&&(g=Math.min(g,t.settings.maxOptions)),h={},i=[],c=0;c<g;c++)for(j=t.options[v.items[c].id],k=t.render("option",j),l=j[t.settings.optgroupField]||"",m=a.isArray(l)?l:[l],e=0,f=m&&m.length;e<f;e++)l=m[e],t.optgroups.hasOwnProperty(l)||(l=""),h.hasOwnProperty(l)||(h[l]=document.createDocumentFragment(),i.push(l)),h[l].appendChild(k);for(this.settings.lockOptgroupOrder&&i.sort(function(){}),n=document.createDocumentFragment(),c=0,g=i.length;c<g;c++)l=i[c],t.optgroups.hasOwnProperty(l)&&h[l].childNodes.length?(o=document.createDocumentFragment(),o.appendChild(t.render("optgroup_header",t.optgroups[l])),o.appendChild(h[l]),n.appendChild(t.render("optgroup",a.extend({},t.optgroups[l],{html:K(o),dom:o})))):n.appendChild(h[l]);if(w.html(n),t.settings.highlight&&v.query.length&&v.tokens.length)for(c=0,g=v.tokens.length;c<g;c++)d(w,v.tokens[c].regex);if(!t.settings.hideSelected)for(c=0,g=t.items.length;c<g;c++)t.getOption(t.items[c]).addClass("selected");p=t.canCreate(u),p&&(w.prepend(t.render("option_create",{input:u})),s=a(w[0].childNodes[0])),t.hasOptions=v.items.length>0||p,t.hasOptions?(v.items.length>0?(r=x&&t.getOption(x),r&&r.length?q=r:"single"===t.settings.mode&&t.items.length&&(q=t.getOption(t.items[0])),q&&q.length||(q=s&&!t.settings.addPrecedence?t.getAdjacentOption(s,1):w.find("[data-selectable]:first"))):q=s,t.setActiveOption(q),b&&!t.isOpen&&t.open()):(t.setActiveOption(null),b&&t.isOpen&&t.close())},addOption:function(){},registerOption:function(){},registerOptionGroup:function(){},addOptionGroup:function(){},removeOptionGroup:function(){},clearOptionGroups:function(){},updateOption:function(){},removeOption:function(){},clearOptions:function(){},getOption:function(){},getAdjacentOption:function(){},getElementWithValue:function(){},getItem:function(){},addItems:function(){},addItem:function(){},removeItem:function(){},createItem:function(){},refreshItems:function(){},refreshState:function(){},refreshClasses:function(){},isFull:function(){},updateOriginalInput:function(){},updatePlaceholder:function(){},open:function(){},close:function(){},positionDropdown:function(){},clear:function(){},insertAtCaret:function(){},deleteSelection:function(){},advanceSelection:function(){},advanceCaret:function(){},setCaret:function(){},lock:function(){},unlock:function(){this.isLocked=!1,this.refreshState()},disable:function(){},enable:function(){},destroy:function(){},render:function(){},clearCache:function(){},canCreate:function(){}}),L.count=0,L.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1e3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}},a.fn.selectize=function(){},a.fn.selectize.defaults=L.defaults,a.fn.selectize.support={validity:x},L.define("drag_drop",function(){}),L.define("dropdown_header",function(){}),L.define("optgroup_columns",function(){}),L.define("remove_button",function(){}),L.define("restore_on_backspace",function(){}