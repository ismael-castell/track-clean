(function($)
{	
    "use strict";
    
    $(document).ready(function()
    {	
		// decreases header size when user scrolls down
        avia_header_size();
    });
    
    
    function(){}
	
	
	function avia_header_size()
	{
		var win				= $(window),
			header          = $('.html_header_top.html_header_sticky #header'),
			unsticktop		= $('.av_header_unstick_top');
            
		if( ! header.length && ! unsticktop.length ) 
		{
			return;
		}
        
		var logo            = $('#header_main .container .logo img, #header_main .container .logo a'),
			elements        = $('#header_main .container:not(#header_main_alternate>.container), #header_main .main_menu ul:first-child > li > a:not(.avia_mega_div a, #header_main_alternate a), #header_main #menu-item-shop .cart_dropdown_link'),
			el_height       = $(elements).first().height(),
			isMobile        = $.avia_utilities.isMobile,
			scroll_top		= $('#scroll-top-link'),
			transparent 	= header.is('.av_header_transparency'),
			shrinking		= header.is('.av_header_shrinking'),
			header_meta		= header.find('#header_meta'),
			topbar_height	= header_meta.length ? header_meta.outerHeight() : 0,
			set_height      = function(){};

		if( $('body').is( '.avia_deactivate_menu_resize' ) ) 
		{
			shrinking = false;
		}

		if( ! transparent && ! shrinking && ! unsticktop.length ) 
		{
			return;
		}

		win.on( 'debouncedresize',  function(){}