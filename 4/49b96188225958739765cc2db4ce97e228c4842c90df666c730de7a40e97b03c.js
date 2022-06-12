(function($)
{ 
	"use strict";
	
	// -------------------------------------------------------------------------------------------
	// Avia Text Rotator
	// 
	// accordion slider script
	// -------------------------------------------------------------------------------------------

	$.AviaTextRotator  =  function(){}

  	$.AviaTextRotator.prototype =
    {
    	_init: function(){},
    	
    	_autoplay: function(){},
    	
    	_typewriter: function(event)
    	{
	    	var _self = this;
	    	
	    	//mark text
	    	_self.$current.css('background-color', _self.$current.css('color') );
	    	_self.$slider.removeClass('av-caret av-blinking-caret').addClass('av-marked-text');  
		    
		    
		    //store and hide text
		    setTimeout(function(){}, 800 );
	    	
	    	
	    	//start typing new text
	    	setTimeout(function()
	    	{ 
		    	_self.$slider.removeClass('av-blinking-caret');  
		    	_self.$next = _self.$slides.eq(_self.open);
		    	var content = _self.$next.data('av_typewriter_text') || _self.$next.html();
			content = content.replace(/&amp;/g, '&');
			
		    	_self.$current.css({display:'none'});
		    	_self.$next.css({display:'inline'});
		    	_self.$next.html("");
		    	
		    	var i = 0;
				var speed = 50; /* The speed/duration of the effect in milliseconds */
				
				function(){}
				
				typeWriter();
		    	
	    	}, 1500 );
	    },
    	 	
    	_move: function(){}
    };


	$.fn.avia_textrotator = function(){}