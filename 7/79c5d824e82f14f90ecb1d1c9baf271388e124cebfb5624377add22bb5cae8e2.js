(function($)
{ 
	"use strict";

    $(window).on('load', function (e) {
		$('.avia-icongrid-flipbox').avia_sc_icongrid();
    });
	
	// -------------------------------------------------------------------------------------------
	// Icongrid shortcode javascript
	// -------------------------------------------------------------------------------------------
	
	$.fn.avia_sc_icongrid = function(options)
	{
		$('.avia-icongrid-flipbox li').on('touchend', function(){});	
	
		return this.each(function()
		{
			var container = $(this),
                icongrid_id = '#' + $(this).attr('id'),
                methods;

            methods =
			{
				buildIconGrid: function(){},

				setMinHeight: function (els) {

					if (els.length < 2) return;

					var elsHeights = new Array();
					els.css('min-height', '0').each(function(){});

					var largest = Math.max.apply(null, elsHeights);
					els.css('min-height', largest);


				},

				createFlipBackground: function(){}