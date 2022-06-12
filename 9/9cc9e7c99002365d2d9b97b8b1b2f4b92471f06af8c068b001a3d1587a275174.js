(function($)
{ 
	"use strict";
	
	// -------------------------------------------------------------------------------------------
	// Tab Section
	// -------------------------------------------------------------------------------------------
	
	$.fn.avia_sc_tab_section= function()
	{
		var win 			= $(window),
			browserPrefix 	= $.avia_utilities.supports('transition'),
			cssActive 		= this.browserPrefix !== false ? true : false,
			isMobile 		= $.avia_utilities.isMobile,
			transform3d		= document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false,
			transition		= {};
			
		return this.each(function()
		{
			var container 		= $(this),
				tabs			= container.find('.av-section-tab-title'),
			    tab_outer		= container.find('.av-tab-section-outer-container'),
				tab_wrap		= container.find('.av-tab-section-tab-title-container'),
				tab_nav			= container.find('.av_tab_navigation'), 
				content_wrap	= container.find('.av-tab-section-inner-container'),
				single_tabs		= container.find('.av-animation-delay-container'), //for elements inside the tab that receive waypoint animation
				inner_content	= container.find('.av-layout-tab-inner'),
				sliding_active  = container.is('.av-tab-slide-transition'),
				flexible    	= container.is('.av-tab-content-auto'),
				current_content = container.find('.__av_init_open'),
				min_width		= 0,
				change_tab 		= function(e, prevent_hash)
				{
					e.preventDefault();
					
					var current_tab 	= $(e.currentTarget),
						current_arrow	= current_tab.find('.av-tab-arrow-container span'),
						tab_nr			= current_tab.data('av-tab-section-title');
					
					//	reset global scope !!
					current_content = container.find('[data-av-tab-section-content="'+tab_nr+'"]');
					
					var new_bg			= current_content.data('av-tab-bg-color'),
						new_font		= current_content.data('av-tab-color'),
						prev_container 	= container.find('.av-active-tab-content').not('[data-av-tab-section-content="'+tab_nr+'"]');
	
					tabs.attr('style','').removeClass('av-active-tab-title');
					current_tab.removeClass('no-scroll');
					current_tab.addClass('av-active-tab-title');
					current_content.addClass("av-active-tab-content");
					
					if( new_bg !== "" ) 
					{
						current_arrow.css('background-color', new_bg);
					}
					
					if( new_font !== "" ) 
					{
						current_tab.css('color', new_font);
					}
						
					var new_pos = ( (parseInt( tab_nr,10 ) - 1 ) * -100 );
					    
					if( $('body').hasClass('rtl') ) 
					{
						new_pos = ( ( parseInt( tab_nr,10 ) - 1 ) * 100 );
					}
					
					if( cssActive )
					{
						//move the slides
						new_pos = new_pos / tabs.length;
						transition['transform']  = transform3d ? "translate3d(" + new_pos  + "%, 0, 0)" : "translate(" + new_pos + "%,0)"; //3d or 2d transform?
						transition['left'] = "0%";
						content_wrap.css(transition);
					}
					else
					{
						content_wrap.css('left',  new_pos + "%");
					}
					
					set_tab_titlte_pos();
					set_slide_height();
					
					if( ! prevent_hash ) 
					{
						location.hash = current_tab.attr('href');
					}
					
					setTimeout(function(){}, 600);	
					
				},
				set_min_width = function(){},
				
				set_slide_height = function(){},
				
				set_tab_titlte_pos = function(){},
				switch_to_next_prev = function(){},
				
				get_init_open = function(){};
					
			$.avia_utilities.preload({
				
				container: current_content , 
				single_callback:  function(){}