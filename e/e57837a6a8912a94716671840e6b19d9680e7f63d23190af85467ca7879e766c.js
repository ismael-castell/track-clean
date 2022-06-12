﻿Type.registerNamespace("Sys.Extended.UI"),Sys.Extended.UI.BoxSide=function(){},Sys.Extended.UI.BoxSide.prototype={Top:0,Right:1,Bottom:2,Left:3},Sys.Extended.UI.BoxSide.registerEnum("Sys.Extended.UI.BoxSide",!1),Sys.Extended.UI._CommonToolkitScripts=function(){},Sys.Extended.UI._CommonToolkitScripts.prototype={_borderStyleNames:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"],_borderWidthNames:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],_paddingWidthNames:["paddingTop","paddingRight","paddingBottom","paddingLeft"],_marginWidthNames:["marginTop","marginRight","marginBottom","marginLeft"],getCurrentStyle:function(e,t,n){var r=null;if(e){if(e.currentStyle)r=e.currentStyle[t];else if(document.defaultView&&document.defaultView.getComputedStyle){var i=document.defaultView.getComputedStyle(e,null);i&&(r=i[t])}!r&&e.style.getPropertyValue?r=e.style.getPropertyValue(t):!r&&e.style.getAttribute&&(r=e.style.getAttribute(t))}return r&&""!=r&&"undefined"!=typeof r||(r="undefined"!=typeof n?n:null),r},getInheritedBackgroundColor:function(){},getLocation:function(e){return Sys.UI.DomElement.getLocation(e)},setLocation:function(){},getContentSize:function(){},getSize:function(){},setContentSize:function(e,t){if(!e)throw Error.argumentNull("element");if(!t)throw Error.argumentNull("size");if("border-box"==this.getCurrentStyle(e,"MozBoxSizing")||"border-box"==this.getCurrentStyle(e,"BoxSizing")){var n=this.getBorderBox(e),r=this.getPaddingBox(e);t={width:t.width+n.horizontal+r.horizontal,height:t.height+n.vertical+r.vertical}}e.style.width=t.width.toString()+"px",e.style.height=t.height.toString()+"px"},setSize:function(){},getBounds:function(e){return Sys.UI.DomElement.getBounds(e)},setBounds:function(e,t){if(!e)throw Error.argumentNull("element");if(!t)throw Error.argumentNull("bounds");this.setSize(e,t),$common.setLocation(e,t)},getClientBounds:function(){},getMarginBox:function(e){if(!e)throw Error.argumentNull("element");var t={top:this.getMargin(e,Sys.Extended.UI.BoxSide.Top),right:this.getMargin(e,Sys.Extended.UI.BoxSide.Right),bottom:this.getMargin(e,Sys.Extended.UI.BoxSide.Bottom),left:this.getMargin(e,Sys.Extended.UI.BoxSide.Left)};return t.horizontal=t.left+t.right,t.vertical=t.top+t.bottom,t},getBorderBox:function(){},getPaddingBox:function(e){if(!e)throw Error.argumentNull("element");var t={top:this.getPadding(e,Sys.Extended.UI.BoxSide.Top),right:this.getPadding(e,Sys.Extended.UI.BoxSide.Right),bottom:this.getPadding(e,Sys.Extended.UI.BoxSide.Bottom),left:this.getPadding(e,Sys.Extended.UI.BoxSide.Left)};return t.horizontal=t.left+t.right,t.vertical=t.top+t.bottom,t},isBorderVisible:function(){},getMargin:function(){},getBorderWidth:function(){},getPadding:function(){},parseBorderWidth:function(e){if(!this._borderThicknesses){var t={},n=document.createElement("div");n.style.visibility="hidden",n.style.position="absolute",n.style.fontSize="1px",document.body.appendChild(n);var r=document.createElement("div");r.style.height="0px",r.style.overflow="hidden",n.appendChild(r);var i=n.offsetHeight;r.style.borderTop="solid black",r.style.borderTopWidth="thin",t.thin=n.offsetHeight-i,r.style.borderTopWidth="medium",t.medium=n.offsetHeight-i,r.style.borderTopWidth="thick",t.thick=n.offsetHeight-i,n.removeChild(r),document.body.removeChild(n),this._borderThicknesses=t}if(e){switch(e){case"thin":case"medium":case"thick":return this._borderThicknesses[e];case"inherit":return 0}var o=this.parseUnit(e);return Sys.Debug.assert("px"==o.type,String.format(Sys.Extended.UI.Resources.Common_InvalidBorderWidthUnit,o.type)),o.size}return 0},parsePadding:function(){},parseUnit:function(e){if(!e)throw Error.argumentNull("value");e=e.trim().toLowerCase();for(var t=e.length,n=-1,r=0;r<t;r++){var i=e.substr(r,1);if((i<"0"||i>"9")&&"-"!=i&&"."!=i&&","!=i)break;n=r}if(n==-1)throw Error.create(Sys.Extended.UI.Resources.Common_UnitHasNoDigits);var o,s;return o=n<t-1?e.substring(n+1).trim():"px",s=parseFloat(e.substr(0,n+1)),"px"==o&&(s=Math.floor(s)),{size:s,type:o}},getElementOpacity:function(e){if(!e)throw Error.argumentNull("element");var t,n=!1;if(e.filters){var r=e.filters;if(0!==r.length){var i=r["DXImageTransform.Microsoft.Alpha"];i&&(t=i.opacity/100,n=!0)}}else t=this.getCurrentStyle(e,"opacity",1),n=!0;return n===!1?1:parseFloat(t)},setElementOpacity:function(e,t){if(!e)throw Error.argumentNull("element");if(e.filters){var n=e.filters,r=!0;if(0!==n.length){var i=n["DXImageTransform.Microsoft.Alpha"];i&&(r=!1,i.opacity=100*t)}r&&(e.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+100*t+")")}else e.style.opacity=t},getVisible:function(){},setVisible:function(){},resolveFunction:function(value){if(value){if(value instanceof Function)return value;if(String.isInstanceOfType(value)&&value.length>0){var func;if((func=window[value])instanceof Function)return func;if((func=eval(value))instanceof Function)return func}}return null},addCssClasses:function(e,t){for(var n=0;n<t.length;n++)Sys.UI.DomElement.addCssClass(e,t[n])},removeCssClasses:function(){},setStyle:function(e,t){$common.applyProperties(e.style,t)},removeHandlers:function(){},overlaps:function(){},containsPoint:function(){},isKeyDigit:function(e){return 48<=e&&e<=57},isKeyNavigation:function(){},padLeft:function(){},padRight:function(e,t,n,r){return $common._pad(e,t||2,n||" ","r",r||!1)},_pad:function(e,t,n,r,i){e=e.toString();var o=e.length,s=new Sys.StringBuilder;for("r"==r&&s.append(e);o<t;)s.append(n),o++;"l"==r&&s.append(e);var d=s.toString();return i&&d.length>t&&(d="l"==r?d.substr(d.length-t,t):d.substr(0,t)),d},__DOMEvents:{focusin:{eventGroup:"UIEvents",init:function(e,t){e.initUIEvent("focusin",!0,!1,window,1)}},focusout:{eventGroup:"UIEvents",init:function(e,t){e.initUIEvent("focusout",!0,!1,window,1)}},activate:{eventGroup:"UIEvents",init:function(e,t){e.initUIEvent("activate",!0,!0,window,1)}},focus:{eventGroup:"UIEvents",init:function(e,t){e.initUIEvent("focus",!1,!1,window,1)}},blur:{eventGroup:"UIEvents",init:function(e,t){e.initUIEvent("blur",!1,!1,window,1)}},click:{eventGroup:"MouseEvents",init:function(e,t){e.initMouseEvent("click",!0,!0,window,1,t.screenX||0,t.screenY||0,t.clientX||0,t.clientY||0,t.ctrlKey||!1,t.altKey||!1,t.shiftKey||!1,t.metaKey||!1,t.button||0,t.relatedTarget||null)}},dblclick:{eventGroup:"MouseEvents",init:function(e,t){e.initMouseEvent("click",!0,!0,window,2,t.screenX||0,t.screenY||0,t.clientX||0,t.clientY||0,t.ctrlKey||!1,t.altKey||!1,t.shiftKey||!1,t.metaKey||!1,t.button||0,t.relatedTarget||null)}},mousedown:{eventGroup:"MouseEvents",init:function(e,t){e.initMouseEvent("mousedown",!0,!0,window,1,t.screenX||0,t.screenY||0,t.clientX||0,t.clientY||0,t.ctrlKey||!1,t.altKey||!1,t.shiftKey||!1,t.metaKey||!1,t.button||0,t.relatedTarget||null)}},mouseup:{eventGroup:"MouseEvents",init:function(e,t){e.initMouseEvent("mouseup",!0,!0,window,1,t.screenX||0,t.screenY||0,t.clientX||0,t.clientY||0,t.ctrlKey||!1,t.altKey||!1,t.shiftKey||!1,t.metaKey||!1,t.button||0,t.relatedTarget||null)}},mouseover:{eventGroup:"MouseEvents",init:function(){}},mousemove:{eventGroup:"MouseEvents",init:function(e,t){e.initMouseEvent("mousemove",!0,!0,window,1,t.screenX||0,t.screenY||0,t.clientX||0,t.clientY||0,t.ctrlKey||!1,t.altKey||!1,t.shiftKey||!1,t.metaKey||!1,t.button||0,t.relatedTarget||null)}},mouseout:{eventGroup:"MouseEvents",init:function(e,t){e.initMouseEvent("mousemove",!0,!0,window,1,t.screenX||0,t.screenY||0,t.clientX||0,t.clientY||0,t.ctrlKey||!1,t.altKey||!1,t.shiftKey||!1,t.metaKey||!1,t.button||0,t.relatedTarget||null)}},load:{eventGroup:"HTMLEvents",init:function(e,t){e.initEvent("load",!1,!1)}},unload:{eventGroup:"HTMLEvents",init:function(e,t){e.initEvent("unload",!1,!1)}},select:{eventGroup:"HTMLEvents",init:function(e,t){e.initEvent("select",!0,!1)}},change:{eventGroup:"HTMLEvents",init:function(e,t){e.initEvent("change",!0,!1)}},submit:{eventGroup:"HTMLEvents",init:function(e,t){e.initEvent("submit",!0,!0)}},reset:{eventGroup:"HTMLEvents",init:function(e,t){e.initEvent("reset",!0,!1)}},resize:{eventGroup:"HTMLEvents",init:function(e,t){e.initEvent("resize",!0,!1)}},scroll:{eventGroup:"HTMLEvents",init:function(e,t){e.initEvent("scroll",!0,!1)}}},tryFireRawEvent:function(){},tryFireEvent:function(e,t,n){try{if(document.createEventObject){var r=document.createEventObject();return $common.applyProperties(r,n||{}),e.fireEvent("on"+t,r),!0}if(document.createEvent){var i=$common.__DOMEvents[t];if(i){var r=document.createEvent(i.eventGroup);return i.init(r,n||{}),e.dispatchEvent(r),!0}}}catch(e){}return!1},wrapElement:function(e,t,n){var r=e.parentNode;r.replaceChild(t,e),(n||t).appendChild(e)},unwrapElement:function(){},removeElement:function(){},applyProperties:function(e,t){for(var n in t){var r=t[n];if(null!=r&&Object.getType(r)===Object){var i=e[n];$common.applyProperties(i,r)}else e[n]=r}},createElementFromTemplate:function(e,t,n){if("undefined"!=typeof e.nameTable){var r=e.nameTable;String.isInstanceOfType(r)&&(r=n[r]),null!=r&&(n=r)}var i=null;"undefined"!=typeof e.name&&(i=e.name);var o=document.createElement(e.nodeName);if("undefined"!=typeof e.name&&n&&(n[e.name]=o),"undefined"!=typeof e.parent&&null==t){var s=e.parent;String.isInstanceOfType(s)&&(s=n[s]),null!=s&&(t=s)}if("undefined"!=typeof e.properties&&null!=e.properties&&$common.applyProperties(o,e.properties),"undefined"!=typeof e.cssClasses&&null!=e.cssClasses&&$common.addCssClasses(o,e.cssClasses),"undefined"!=typeof e.events&&null!=e.events&&$addHandlers(o,e.events),"undefined"!=typeof e.visible&&null!=e.visible&&this.setVisible(o,e.visible),t&&t.appendChild(o),"undefined"!=typeof e.opacity&&null!=e.opacity&&$common.setElementOpacity(o,e.opacity),"undefined"!=typeof e.children&&null!=e.children)for(var d=0;d<e.children.length;d++){var a=e.children[d];$common.createElementFromTemplate(a,o,n)}var u=o;if("undefined"!=typeof e.contentPresenter&&null!=e.contentPresenter&&(u=n[u]),"undefined"!=typeof e.content&&null!=e.content){var l=e.content;String.isInstanceOfType(l)&&(l=n[l]),l.parentNode?$common.wrapElement(l,o,u):u.appendChild(l)}return o},prepareHiddenElementForATDeviceUpdate:function(){var e=document.getElementById("hiddenInputToUpdateATBuffer_CommonToolkitScripts");if(!e){var e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("value","1"),e.setAttribute("id","hiddenInputToUpdateATBuffer_CommonToolkitScripts"),e.setAttribute("name","hiddenInputToUpdateATBuffer_CommonToolkitScripts"),document.forms[0]&&document.forms[0].appendChild(e)}},updateFormToRefreshATDeviceBuffer:function(){},appendElementToFormOrBody:function(){},setText:function(){}},CommonToolkitScripts=Sys.Extended.UI.CommonToolkitScripts=new Sys.Extended.UI._CommonToolkitScripts,$common=CommonToolkitScripts,Sys.UI.DomElement.getVisible=$common.getVisible,Sys.UI.DomElement.setVisible=$common.setVisible,Sys.UI.Control.overlaps=$common.overlaps,Sys.Extended.UI._DomUtility=function(){},Sys.Extended.UI._DomUtility.prototype={isDescendant:function(){},isDescendantOrSelf:function(e,t){return e===t||Sys.Extended.UI.DomUtility.isDescendant(e,t)},isAncestor:function(){},isAncestorOrSelf:function(){},isSibling:function(){}},Sys.Extended.UI._DomUtility.registerClass("Sys.Extended.UI._DomUtility"),Sys.Extended.UI.DomUtility=new Sys.Extended.UI._DomUtility,Sys.Extended.UI.TextBoxWrapper=function(e){Sys.Extended.UI.TextBoxWrapper.initializeBase(this,[e]),this._current=e.value,this._watermark=null,this._isWatermarked=!1},Sys.Extended.UI.TextBoxWrapper.prototype={dispose:function(){this.get_element().TextBoxWrapper=null,Sys.Extended.UI.TextBoxWrapper.callBaseMethod(this,"dispose")},get_Current:function(){},set_Current:function(e){this._current=e,this._updateElement()},get_Value:function(){},set_Value:function(e){this.set_Current(e),e&&0!=e.length?this.set_IsWatermarked(!1):null!=this._watermark&&this.set_IsWatermarked(!0)},get_Watermark:function(){return this._watermark},set_Watermark:function(e){this._watermark=e,this._updateElement()},get_IsWatermarked:function(){return this._isWatermarked},set_IsWatermarked:function(){},_updateElement:function(){},add_WatermarkChanged:function(e){this.get_events().addHandler("WatermarkChanged",e)},remove_WatermarkChanged:function(e){this.get_events().removeHandler("WatermarkChanged",e)},_raiseWatermarkChanged:function(){}},Sys.Extended.UI.TextBoxWrapper.get_Wrapper=function(){},Sys.Extended.UI.TextBoxWrapper.registerClass("Sys.Extended.UI.TextBoxWrapper",Sys.UI.Behavior),Sys.Extended.UI.TextBoxWrapper.validatorGetValue=function(){},"function"==typeof ValidatorGetValue&&(Sys.Extended.UI.TextBoxWrapper._originalValidatorGetValue=ValidatorGetValue,ValidatorGetValue=Sys.Extended.UI.TextBoxWrapper.validatorGetValue),Sys.CultureInfo&&Sys.CultureInfo.prototype._getAbbrMonthIndex&&(Sys.CultureInfo.prototype._getAbbrMonthIndex=function(){}