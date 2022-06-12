(function(){}).call(this);(function(){})(this,function(){});!function(){}(this,function(e){"use strict";var t="function"==typeof e,n=!!window.addEventListener,a=window.document,i=window.setTimeout,s=function(e,t,a,i){n?e.addEventListener(t,a,!!i):e.attachEvent("on"+t,a)},o=function(){},r=function(){},l=function(){},h=function(){},d=function(e){return/Array/.test(Object.prototype.toString.call(e))},u=function(){},c=function(){},f=function(e){return e%4==0&&e%100!=0||e%400==0},g=function(){},m=function(){},p=function(e,t){return e.getTime()===t.getTime()},y=function(){},D=function(){},b=function(){},v={field:null,bound:void 0,ariaLabel:"Use the arrow keys to pick a date",position:"bottom left",reposition:!0,format:"YYYY-MM-DD",toString:null,parse:null,defaultDate:null,setDefaultDate:!1,firstDay:0,formatStrict:!1,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,pickWholeWeek:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,enableSelectionDaysInNextAndPreviousMonths:!1,numberOfMonths:1,mainCalendar:"left",container:void 0,blurFieldOnSelect:!0,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null,keyboardInput:!0},_=function(){},w=function(){},k=function(n,a,i){var s=new Date(i,a,n);return'<td class="pika-week">'+(t?e(s).isoWeek():function(e){e.setHours(0,0,0,0);var t=e.getDate(),n=e.getDay(),a=function(){};e.setDate(t+3-a(n));var i=new Date(e.getFullYear(),0,4),s=(e.getTime()-i.getTime())/864e5;return 1+Math.round((s-3+a(i.getDay()))/7)}(s))+"</td>"},M=function(){},x=function(){},R=function(){},N=function(o){var l=this,h=l.config(o);l._onMouseDown=function(){},l._onChange=function(){},l._onKeyChange=function(e){if(e=e||window.event,l.isVisible())switch(e.keyCode){case 13:case 27:h.field&&h.field.blur();break;case 37:l.adjustDate("subtract",1);break;case 38:l.adjustDate("subtract",7);break;case 39:l.adjustDate("add",1);break;case 40:l.adjustDate("add",7)}},l._parseFieldValue=function(){},l._onInputChange=function(){},l._onInputFocus=function(){l.show()},l._onInputClick=function(){l.show()},l._onInputBlur=function(){},l._onClick=function(){},l.el=a.createElement("div"),l.el.className="pika-single"+(h.isRTL?" is-rtl":"")+(h.theme?" "+h.theme:""),s(l.el,"mousedown",l._onMouseDown,!0),s(l.el,"touchend",l._onMouseDown,!0),s(l.el,"change",l._onChange),h.keyboardInput&&s(a,"keydown",l._onKeyChange),h.field&&(h.container?h.container.appendChild(l.el):h.bound?a.body.appendChild(l.el):h.field.parentNode.insertBefore(l.el,h.field.nextSibling),s(h.field,"change",l._onInputChange),h.defaultDate||(h.defaultDate=l._parseFieldValue(),h.setDefaultDate=!0));var d=h.defaultDate;u(d)?h.setDefaultDate?l.setDate(d,!0):l.gotoDate(d):l.gotoDate(new Date),h.bound?(this.hide(),l.el.className+=" is-bound",s(h.trigger,"click",l._onInputClick),s(h.trigger,"focus",l._onInputFocus),s(h.trigger,"blur",l._onInputBlur)):this.show()};return N.prototype={config:function(){},toString:function(){},getMoment:function(){},setMoment:function(){},getDate:function(){},setDate:function(){},clear:function(){this.setDate(null)},gotoDate:function(){},adjustDate:function(){},adjustCalendars:function(){},gotoToday:function(){},gotoMonth:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())},nextMonth:function(){},prevMonth:function(){},gotoYear:function(){},setMinDate:function(e){e instanceof Date?(m(e),this._o.minDate=e,this._o.minYear=e.getFullYear(),this._o.minMonth=e.getMonth()):(this._o.minDate=v.minDate,this._o.minYear=v.minYear,this._o.minMonth=v.minMonth,this._o.startRange=v.startRange),this.draw()},setMaxDate:function(){},setStartRange:function(e){this._o.startRange=e},setEndRange:function(e){this._o.endRange=e},draw:function(){},adjustPosition:function(){},render:function(e,t,n){var a=this._o,i=new Date,s=g(e,t),o=new Date(e,t,1).getDay(),r=[],l=[];m(i),a.firstDay>0&&(o-=a.firstDay)<0&&(o+=7);for(var h=0===t?11:t-1,d=11===t?0:t+1,f=0===t?e-1:e,y=11===t?e+1:e,D=g(f,h),b=s+o,v=b;v>7;)v-=7;b+=7-v;for(var _=!1,x=0,N=0;x<b;x++){var S=new Date(e,t,x-o+1),C=!!u(this._d)&&p(S,this._d),I=p(S,i),T=-1!==a.events.indexOf(S.toDateString()),Y=x<o||x>=s+o,E=x-o+1,O=t,j=e,F=a.startRange&&p(a.startRange,S),W=a.endRange&&p(a.endRange,S),A=a.startRange&&a.endRange&&a.startRange<S&&S<a.endRange;Y&&(x<o?(E=D+E,O=h,j=f):(E-=s,O=d,j=y));var L={day:E,month:O,year:j,hasEvent:T,isSelected:C,isToday:I,isDisabled:a.minDate&&S<a.minDate||a.maxDate&&S>a.maxDate||a.disableWeekends&&c(S)||a.disableDayFn&&a.disableDayFn(S),isEmpty:Y,isStartRange:F,isEndRange:W,isInRange:A,showDaysInNextAndPreviousMonths:a.showDaysInNextAndPreviousMonths,enableSelectionDaysInNextAndPreviousMonths:a.enableSelectionDaysInNextAndPreviousMonths};a.pickWholeWeek&&C&&(_=!0),l.push(w(L)),7==++N&&(a.showWeekNumber&&l.unshift(k(x-o,t,e)),r.push(M(l,a.isRTL,a.pickWholeWeek,_)),l=[],N=0,_=!1)}return R(a,r,n)},isVisible:function(){return this._v},show:function(){},hide:function(){},destroy:function(){}},N});(function(){})(this,function(){});/*!
autosize 4.0.2
license: MIT
http://www.jacklmoore.com/autosize
*/!function(){}(this,function(){});!function(){}(jQuery);/*!
SerializeJSON jQuery plugin.
https://github.com/marioizquierdo/jquery.serializeJSON
version 2.8.1 (Dec, 2016)
Copyright (c) 2012, 2017 Mario Izquierdo
Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/!function(){}(function(){});/*!
* clipboard.js v1.7.1
* https://zenorocha.github.io/clipboard.js
*
* Licensed MIT © Zeno Rocha
*/!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){});/*!
* jQuery Mobile Events
* by Ben Major
*
* Copyright 2011-2017, Ben Major
* Licensed under the MIT License:
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*
*/"use strict";!function(){}