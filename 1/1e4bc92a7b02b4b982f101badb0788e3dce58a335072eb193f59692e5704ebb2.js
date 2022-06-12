/* 
	this prevents dom flickering for elements hidden with js, needs to be outside of dom.ready event.also adds several extra classes for better browser support 
	this is a separate file that needs to be loaded at the top of the page. other js functions are loaded before the closing body tag to make the site render faster
*/
"use strict"

var avia_is_mobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 'ontouchstart' in document.documentElement)
{
	avia_is_mobile = true;
	document.documentElement.className += ' avia_mobile ';
}
else
{
	document.documentElement.className += ' avia_desktop ';
}
document.documentElement.className += ' js_active ';

(function(){}