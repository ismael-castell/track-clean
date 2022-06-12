// -------------------------------------------------------------------------------------------
// Big Number animation shortcode javascript
// -------------------------------------------------------------------------------------------

(function($)
{
	// options.simple_up = dont prepend leading zeros, options.instant_start = trigger counting instantly, options.start_timer = delay when to start counting
	$.fn.avia_sc_animated_number = function(options) 
	{
		if(!this.length) return;
		if(this.is('.avia_sc_animated_number_active')) return;
		
		this.addClass('avia_sc_animated_number_active');
	
		var simple_upcount 	= (options && options.simple_up) ? true : false,
			start_timer 	= (options && options.start_timer) ? options.start_timer : 300,
			
			format_number = function(){},
				
			start_count = function(){};
	
		return this.each(function()
		{
			var number_container = $(this), 
				elements = number_container.find('.__av-single-number'), 
				countTimer = number_container.data('timer') || 3000;
			
			//prepare elements
			elements.each(function(){}