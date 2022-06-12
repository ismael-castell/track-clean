(function($)
{ 
	"use strict";
	
	// -------------------------------------------------------------------------------------------
	// Tab Section
	// -------------------------------------------------------------------------------------------
	
	$.fn.avia_sc_tab_section = function()
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
				arrows_wrap		= container.find('.av-tabsection-arrow'),
				arrows			= arrows_wrap.find('.av-tab-section-slide'),
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
						
					var new_pos = ( ( parseInt( tab_nr, 10 ) - 1 ) * -100 );
					    
					if( $('body').hasClass('rtl') ) 
					{
						new_pos = ( ( parseInt( tab_nr,10 ) - 1 ) * 100 );
					}
					
					if( cssActive )
					{
						//move the slides
						new_pos = new_pos / tabs.length;
						transition['transform'] = transform3d ? "translate3d(" + new_pos  + "%, 0, 0)" : "translate(" + new_pos + "%,0)"; //3d or 2d transform?
						transition['left'] = "0%";
						content_wrap.css(transition);
					}
					else
					{
						content_wrap.css('left',  new_pos + "%");
					}
					
					set_tab_title_pos();
					set_slide_height();
					
					if( ! prevent_hash ) 
					{
						location.hash = current_tab.attr('href');
					}
					
					setTimeout( function(){}, 600);	
					
				},
				set_min_width = function(){},
				
				set_slide_height = function(){},
				
				set_tab_title_pos = function()
				{
					//	scroll the tabs if there is not enough room to display them all - rtl allign right to left !!
					var current_tab = container.find('.av-active-tab-title'),
						viewport = container.width(),
						left_pos = ( current_tab.position().left * - 1 ) - ( current_tab.outerWidth() / 2 ) + ( viewport / 2 );
				
					if( ! $('body').hasClass('rtl') )
					{
						if( viewport >= min_width )
						{
							left_pos = 0;
						}
						
						if( left_pos + min_width < viewport ) 
						{
							left_pos = ( min_width - viewport ) * -1;
						}
						
						if( left_pos > 0 ) 
						{
							left_pos = 0;
						}
					
						tab_wrap.css( 'left', left_pos );
						
						var show_prev = left_pos !== 0;
						var show_next = left_pos + min_width > viewport;
						
						set_arrows_visibility( show_prev, show_next );
					}
					else
					{
						var right_pos = 0;
						
						if( viewport < min_width )
						{
							if( left_pos + min_width > viewport )
							{
								if( left_pos > 0 ) 
								{
									left_pos = 0;
								}
								
								right_pos = ( left_pos + min_width - viewport ) * -1;
							}
						}
						
						tab_wrap.css( 'left', 'auto' );
						tab_wrap.css( 'right', right_pos );
						
						var show_prev = right_pos + min_width > viewport;
						var show_next = right_pos !== 0;
						
						set_arrows_visibility( show_prev, show_next );
					}
				},
				
				set_arrows_visibility = function( show_prev, show_next )
				{
					if( show_prev )
					{
						arrows_wrap.addClass( 'av-visible-prev' );
					}
					else
					{
						arrows_wrap.removeClass( 'av-visible-prev' );
					}
					
					if( show_next )
					{
						arrows_wrap.addClass( 'av-visible-next' );
					}
					else
					{
						arrows_wrap.removeClass( 'av-visible-next' );
					}
				},
				
				swipe_to_next_prev = function(){},
				
				switch_to_next_prev = function( e )
				{
					e.preventDefault();
					
					var clicked = $( e.currentTarget ),
						current_tab = container.find('.av-active-tab-title');
						
					if( clicked.is('.av_prev_tab_section') )
					{
						if( ! $('body').hasClass('rtl') )
						{
							current_tab.prev('.av-section-tab-title').trigger('click');
						}
						else
						{
							current_tab.next('.av-section-tab-title').trigger('click');
						}
					}
					else
					{
						if( ! $('body').hasClass('rtl') )
						{
							current_tab.next('.av-section-tab-title').trigger('click');
						}
						else
						{
							current_tab.prev('.av-section-tab-title').trigger('click');
						}
					}
				},
				
				get_init_open = function(){}