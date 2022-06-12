(function($)
{
	"use strict";
// -------------------------------------------------------------------------------------------
// Aviaccordion Slideshow 
// 
// accordion slider script
// -------------------------------------------------------------------------------------------

	$.AviaccordionSlider  =  function(){}

  	$.AviaccordionSlider.prototype =
    {
    	_init: function(){},
    	
    	_kickOff: function()
    	{
    		var _self = this;
    		
    		_self._calcMovement();
    		_self._bindEvents();
    		_self._showImages();
    		_self._autoplay();
    	},
    	
    	_autoplay: function(){},
    	
    	_showImages: function(){},
    	
    	_bindEvents: function(){},
    	
    	_titleHeight: function(){},
    	
    	_calcMovement: function(){},
    	
    	_moveTo: function(){},
    	
    	_move: function(){}
    };


$.fn.aviaccordion = function(){}