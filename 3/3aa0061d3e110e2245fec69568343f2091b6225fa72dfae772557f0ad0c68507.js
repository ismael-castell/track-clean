// -------------------------------------------------------------------------------------------
// Masonry
// -------------------------------------------------------------------------------------------

(function($)
{ 
	"use strict";

	$.fn.avia_masonry = function(options)
	{
		//return if we didnt find anything
		if(!this.length) return this;
		
		var the_body = $('body'),
			the_win	 = $(window),
			isMobile = $.avia_utilities.isMobile,
			loading = false,
			methods = {
		
			
			masonry_filter: function()
			{
				var current		= $(this),
					linktext	= current.html(),
			  		selector	= current.data('filter'),
			  		masonry 	= current.parents('.av-masonry').eq( 0 ),
			  		container 	= masonry.find('.av-masonry-container').eq( 0 ),
			  		links		= masonry.find('.av-masonry-sort a'),
			  		activeCat	= masonry.find('.av-current-sort-title');
					
					links.removeClass('active_sort');
					current.addClass('active_sort');
					container.attr('id', 'masonry_id_'+selector);
					
					if(activeCat.length) activeCat.html(linktext);
					
					methods.applyMasonry(container, selector, function()
					{
						container.css({overflow:'visible'});
					});
				
					setTimeout(function() { the_win.trigger('debouncedresize'); }, 500);
					
					return false;
			},
			
			applyMasonry: function(){},
			
			show_bricks: function(){},
			
			loadMore: function(e)
			{
				e.preventDefault();
				
				if(loading) return false;
				
				loading = true;
			
				var current		= $(this),
			  		data		= current.data(),
			  		masonry 	= current.parents('.av-masonry').eq( 0 ),
			  		container	= masonry.find('.av-masonry-container'),
			  		items		= masonry.find('.av-masonry-entry'),
			  		loader		= $.avia_utilities.loading(),
			  		finished	= function(){};
			  			  	
			  	//calculate a new offset	
			  	if(!data.offset){ data.offset = 0; }	
			  	data.offset += data.items;
			  	data.action = 'avia_ajax_masonry_more';
			  	data.loaded = []; //prevents duplicate entries from beeing loaded when randomized is active
			  	
			  	items.each(function(){});
			  	
			  	 $.ajax({
					url: avia_framework_globals.ajaxurl,
					type: "POST",
					data:data,
					beforeSend: function()
					{
						loader.show();
					},
					success: function(response)
					{
						if(response.indexOf("{av-masonry-loaded}") !== -1)
						{
							//fetch the response. if any php warnings were displayed before rendering of the items the are removed by the string split
							var response  = response.split('{av-masonry-loaded}'),
								new_items = $(response.pop()).filter('.isotope-item');
								
								//check if we got more items than we need. if not we have reached the end of items
								if(new_items.length > data.items)
								{
									new_items = new_items.not( new_items.last() );
								}
								else
								{
									current.addClass('av-masonry-no-more-items');
								}
								
								var load_container = $('<div class="loadcontainer"></div>').append(new_items);
								
								
								
								$.avia_utilities.preload({container: load_container, single_callback:  function(){}
							});
						}
						else
						{
							finished();
						}
					},
					error: finished,
					complete: function()
					{
					    setTimeout(function() { the_win.trigger('debouncedresize'); }, 500);
					}
				});
			}
	
		};
	
		return this.each(function(){}