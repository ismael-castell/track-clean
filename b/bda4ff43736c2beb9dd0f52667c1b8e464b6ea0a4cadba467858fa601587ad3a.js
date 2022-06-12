// -------------------------------------------------------------------------------------------
// Fullscreen Slideshow 
// 
// extends avia slideshow script with a more sophisticated preloader and fixed size for slider
// -------------------------------------------------------------------------------------------

(function($)
{
    "use strict";

	$.AviaFullscreenSlider  =  function(){}

	$.AviaFullscreenSlider.defaults  = {

		//height of the slider in percent
		height: 100,
		
		//subtract elements from the height
		subtract: '#wpadminbar, #header, #main>.title_container'
		
		
	};

  	$.AviaFullscreenSlider.prototype =
    {
    	_init: function(){},
    	
    	_on_scroll: function(){},
    	
    	
    	_fetch_properties: function(){},
    	
    	_setSize: function(){},
    	
    	_parallax_scroll: function(){}
    };



	$.fn.aviaFullscreenSlider = function(){}