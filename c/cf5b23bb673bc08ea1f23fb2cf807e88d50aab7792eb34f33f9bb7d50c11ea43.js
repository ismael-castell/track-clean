(function($)
{ 
	"use strict";

	$(window).on( 'load', function (e) 
	{
		$('.avia-icongrid-flipbox').avia_sc_icongrid();
	});

	// -------------------------------------------------------------------------------------------
	// Icongrid shortcode javascript
	// -------------------------------------------------------------------------------------------

	$.fn.avia_sc_icongrid = function(options)
	{
		return this.each( function()
		{
			var flipbox = $(this),
				icongrid_id = '#' + $(this).attr('id'),
				methods = {},
				flipbox_cards = $('.avia-icongrid-flipbox li');
				
			flipbox_cards.on( 'touchend', function( e ) 
			{
				var current = $(this),
					container = current.closest('.avia-icongrid-flipbox');
					
				if( current.hasClass('avia-hover') )
				{
					container.find('li').removeClass( 'avia-hover' );
				}
				else
				{
					container.find('li').removeClass( 'avia-hover' );
					current.addClass( 'avia-hover' );
				}
				
				var links = current.find( 'a' );
				
				if( links.length > 0 )
				{
					links.off( 'touchend.aviaIconGridLink' ).on( 'touchend.aviaIconGridLink', function( e ) 
					{
						e.preventDefault();
						e.stopImmediatePropagation();
						
						var link = $( this );
						
						link.css( 'opacity', 0.5 );
				
						window.location.href = link.attr( "href" );
					});
				}
				
				e.preventDefault();
				e.stopImmediatePropagation();
				
			});
			
			if( flipbox.hasClass( 'avia_flip_force_close' ) )
			{
				$( 'body' ).on( 'touchend', function( e ) 
				{
					var flipboxes = $('.avia-icongrid-flipbox.avia_flip_force_close');
					flipboxes.each( function(){});
				});
			}
			
			methods =
			{
				buildIconGrid: function(){},

				setMinHeight: function (els) 
				{
					if( els.length < 2 ) 
					{
						return;
					}

					var elsHeights = new Array();
					els.css('min-height', '0').each( function(){});

					var largest = Math.max.apply( null, elsHeights );
					els.css( 'min-height', largest );
				},

				createFlipBackground: function(){}