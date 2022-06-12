(function($)
{ 
	"use strict";
	$.avia_utilities = $.avia_utilities || {};
	
	$(document).ready(function(){});
	
	
	$.avia_utilities.avia_sticky_submenu = function()
	{
		var win 		= $(window),
			html 		= $('html').first(),
			header  	= $('.html_header_top.html_header_sticky #header'),
			html_margin = parseInt( $('html').first().css('margin-top'), 10),
			setWitdth	= $('.html_header_sidebar #main, .boxed #main'),
			menus		= $('.av-submenu-container'),
			bordermod	= html.is('.html_minimal_header') ? 0 : 1,
			fixed_frame	= $('.av-frame-top').height(),
			burger_menu	= $('.av-burger-menu-main'),
			calc_margin	= function(){},
			calc_values	= function(){},
			check 		= function(){},
			toggle = function(){};
		
		win.on("debouncedresize av-height-change",  calc_margin ); calc_margin();
			
		if(setWitdth.length)
		{
			win.on("debouncedresize av-height-change",  calc_values );
			calc_values();
		}
		
		
		menus.each(function(){});
		
		
		html.on('click', '.av-submenu-hidden .av-open-submenu li a', function(){});
		
		$('.avia_mobile').on('click', '.av-menu-mobile-disabled li a', function(){}