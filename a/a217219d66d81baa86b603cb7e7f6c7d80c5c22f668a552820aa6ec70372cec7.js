/* 
 * Implements the hamburger menu behaviour
 * 
 * 
 * @since 4.8		moved from avia.js to own file as some user request to customize this feature
 */
(function($)
{	
    "use strict";
	
    $(document).ready( function()
    {	    
		$.avia_utilities = $.avia_utilities || {};
		
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 'ontouchstart' in document.documentElement )
    	{
    		$.avia_utilities.isMobile =  true;
    	}
    	else
    	{
    		$.avia_utilities.isMobile =  false;
    	}
		
		//activates the hamburger mobile menu
		avia_hamburger_menu();
		
	});
		
	$.avia_utilities = $.avia_utilities || {};
			
	function avia_hamburger_menu()
	{
		var header		= $('#header'),
			header_main	= $('#main .av-logo-container'), //check if we got a top menu that is above the header
			menu		= $('#avia-menu'),
			burger_wrap = $('.av-burger-menu-main a'),
			htmlEL  	= $('html').eq(0),
			overlay		= $('<div class="av-burger-overlay"></div>'),
			overlay_scroll	= $('<div class="av-burger-overlay-scroll"></div>').appendTo(overlay),
			inner_overlay 	= $('<div class="av-burger-overlay-inner"></div>').appendTo(overlay_scroll),
			bgColor 	  	= $('<div class="av-burger-overlay-bg"></div>').appendTo(overlay),
			animating 	  	= false,
			first_level	  	= {},
			logo_container	= $('.av-logo-container .inner-container'),
			menu_in_logo_container = logo_container.find('.main_menu'),
			cloneFirst		= htmlEL.is('.html_av-submenu-display-click.html_av-submenu-clone, .html_av-submenu-display-hover.html_av-submenu-clone'),
			menu_generated 	= false,
			cloned_menu_cnt = 0;
	
		/**
		 * Check for alternate mobile menu
		 */
		var alternate = $('#avia_alternate_menu');
		if( alternate.length > 0 )
		{
			menu = alternate;
		}
	
		var	set_list_container_height = function(){},
			create_list = function(){};
		
		var burger_ul, burger;
		
		//prevent scrolling of outer window when scrolling inside
		$('body').on( 'mousewheel DOMMouseScroll touchmove', '.av-burger-overlay-scroll', function(){});
		
		//prevent scrolling for the rest of the screen
		$(document).on( 'mousewheel DOMMouseScroll touchmove', '.av-burger-overlay-bg, .av-burger-overlay-active .av-burger-menu-main', function (e) 
		{ 
				e.preventDefault();
		});
		
		//prevent scrolling on mobile devices
		var touchPos = {};
		
		$(document).on('touchstart', '.av-burger-overlay-scroll', function(){});

		$(document).on('touchend', '.av-burger-overlay-scroll', function(e)
		{
			touchPos = {};
		});
		
		//prevent rubberband scrolling http://blog.christoffer.me/six-things-i-learnt-about-ios-safaris-rubber-band-scrolling/
		$(document).on( 'touchmove', '.av-burger-overlay-scroll', function(){});
		
		$(window).on( 'debouncedresize', function(){});
			
		//close overlay on overlay click
		$('.html_av-overlay-side').on( 'click', '.av-burger-overlay-bg', function(){});
		
		 //close overlay when smooth scrollign begins
		$(window).on('avia_smooth_scroll_start', function(){});
		 
		
		//toogle hide/show for submenu items
		$('.html_av-submenu-display-hover').on( 'mouseenter', '.av-width-submenu', function (e) 
		{ 
			$(this).children("ul.sub-menu").slideDown('fast');	
		});
		
		$('.html_av-submenu-display-hover').on( 'mouseleave', '.av-width-submenu', function (e) 
		{ 
			$(this).children("ul.sub-menu").slideUp('fast');	
		});
		
		$('.html_av-submenu-display-hover').on( 'click', '.av-width-submenu > a', function (e) 
		{ 
			e.preventDefault();
			e.stopImmediatePropagation();
		});
		
			//	for mobile we use same behaviour as submenu-display-click
		$('.html_av-submenu-display-hover').on( 'touchstart', '.av-width-submenu > a', function (e) 
		{ 
			var menu = $(this);
			toggle_submenu( menu, e );
		});
		
		
		//toogle hide/show for submenu items
		$('.html_av-submenu-display-click').on( 'click', '.av-width-submenu > a', function(){});
		
		
		//	close mobile menu if click on active menu item
		$('.html_av-submenu-display-click').on( 'click', '.av-burger-overlay a', function(){});		
		
		
		function(){};
		
		 
		(function(){}());
		
			
			
		burger_wrap.on('click', function(){}