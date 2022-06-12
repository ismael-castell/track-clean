function(){}
function(){}
var __pendingCallbacks = new Array();
var __synchronousCallBackIndex = -1;
function(){}
function(){}
function(){}
function(){}
var __nonMSDOMBrowser = (window.navigator.appName.toLowerCase().indexOf('explorer') == -1);
var __theFormPostData = "";
var __theFormPostCollection = new Array();
var __callbackTextTypes = /^(text|password|hidden|search|tel|url|email|number|range|color|datetime|date|month|week|time|datetime-local)$/i;
function(){}
function(){}
function(){}
var __disabledControlArray = new Array();
function(){}
function(){}
function(){}
function(){}
function(){}
function WebForm_GetScrollY() {
    if (__nonMSDOMBrowser) {
        return window.pageYOffset;
    }
    else {
        if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
        }
        else if (document.body) {
            return document.body.scrollTop;
        }
    }
    return 0;
}
function(){}
function(){}
function(){}
function(){}
function WebForm_TrimString(value) {
    return value.replace(/^\s+|\s+$/g, '')
}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function WebForm_SetElementHeight(element, height) {
    if (element && element.style) {
        element.style.height = height + "px";
    }
}
function WebForm_SetElementWidth(element, width) {
    if (element && element.style) {
        element.style.width = width + "px";
    }
}
function WebForm_SetElementX(element, x) {
    if (element && element.style) {
        element.style.left = x + "px";
    }
}
function(){}