// -------------------------------------------------------------------------------------------
// Tab Shortcode
// -------------------------------------------------------------------------------------------

(function($)
{ 
	"use strict";

	$.fn.avia_sc_tabs= function(options)
	{
		var defaults =
		{
			heading: '.tab',
			content:'.tab_content',
			active:'active_tab',
			sidebar: false
		};
	
		var win = $(window),
			options = $.extend(defaults, options);
	
		return this.each(function()
		{
			var container 	= $(this),
				tab_titles 	= $('<div class="tab_titles"></div>').prependTo(container),
				tabs 		= $(options.heading, container),
				content 	= $(options.content, container),
				newtabs 	= false,
				oldtabs 	= false;
	
			newtabs = tabs.clone();
			oldtabs = tabs.addClass('fullsize-tab').attr('aria-hidden', true );
			tabs = newtabs;
	
			tabs.prependTo(tab_titles).each(function(){});
	
			set_size();
			trigger_default_open(false);
			win.on("debouncedresize", set_size);
			
	        $('a').on('click',function(){});
	
			function(){}
	
			function open_content(tab, i, alternate_tab)
			{
				if(!tab.is('.'+options.active))
				{
					$('.'+options.active, container).removeClass(options.active);
					$('.'+options.active+'_content', container).attr('aria-hidden', true).removeClass(options.active+'_content');
	
					tab.addClass(options.active);
	
					var new_loc = tab.data('fake-id');
					if( typeof new_loc == 'string' ) 
					{
						window.location.replace( new_loc );
					}
	
					if( alternate_tab ) 
					{
						alternate_tab.addClass(options.active);
					}
					
					var active_c = content.filter(':eq('+i+')').addClass(options.active+'_content').attr('aria-hidden', false);
	
					if(typeof click_container != 'undefined' && click_container.length)
					{
						sidebar_shadow.height(active_c.outerHeight());
					}
					
					//check if tab title is in viewport. if not scroll up
					var el_offset = active_c.offset().top,
						scoll_target = el_offset - 50 - parseInt($('html').css('margin-top'),10);
					
					if(win.scrollTop() > el_offset)
					{
						$('html:not(:animated),body:not(:animated)').scrollTop(scoll_target);
					}
				}
				
				win.trigger( 'av-content-el-height-changed', tab );
			}
	
			function(){}