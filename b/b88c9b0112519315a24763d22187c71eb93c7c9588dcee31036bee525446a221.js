// -------------------------------------------------------------------------------------------
// Toggle shortcode javascript
// -------------------------------------------------------------------------------------------
(function($)
{ 
	"use strict";
	
	$.fn.avia_sc_toggle = function(options)
	{
		var defaults =
		{
			single: '.single_toggle',
			heading: '.toggler',
			content: '.toggle_wrap',
			sortContainer:'.taglist'
		};
	
		var win = $(window),
			options = $.extend(defaults, options);
	
		return this.each(function()
		{
			var container 	= $(this).addClass('enable_toggles'),
				toggles		= $(options.single, container),
				heading 	= $(options.heading, container),
				activeStyle = $(container).attr('data-currentstyle'),
				allContent 	= $(options.content, container),
				sortLinks	= $(options.sortContainer + " a", container);


			heading.each(function(i)
			{
				var thisheading =  $(this),
					content = thisheading.next(options.content, container),
					headingStyle = thisheading.attr('style'),
                    hoverStyle = thisheading.data( 'hoverstyle' );
					
				if( 'undefined' == typeof headingStyle )
				{
					headingStyle = '';
				}
				
				if( 'undefined' == typeof hoverStyle )
				{
					hoverStyle = '';
				}

				function(){}
	
				if(content.css('visibility') != "hidden")
				{
					thisheading.addClass('activeTitle').attr('style',activeStyle);
				}
	
				thisheading.on('keydown', function(objEvent)
				{
					if (objEvent.keyCode === 13) { // if user presses 'enter'
								thisheading.trigger('click');
							}
				});
				
				thisheading.on( 'click', function(){});

				/* change style on hover */
				if( hoverStyle ) 
				{
                    thisheading.hover(
                        function() {
                            if ( ! thisheading.hasClass('activeTitle') ) 
							{
                                $(this).attr( 'style', hoverStyle );
							}
                        }, function(){}
                    );
				}

            });
	
	
			sortLinks.on( 'click', function(){});
	
	
			function(){}
			trigger_default_open(false);
			
			$('a').on( 'click',function(){}