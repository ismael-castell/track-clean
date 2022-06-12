// -------------------------------------------------------------------------------------------
// 
// AVIA Player
// 
// -------------------------------------------------------------------------------------------
(function($)
{ 
	"use strict";
	
	var autostarted = false,
		container = null,
	
		monitorStart = function(){};
	
	$.fn.aviaPlayer = function( options )
	{	
		if( ! this.length ) 
		{
			return;
		} 

		return this.each(function()
		{
			var _self 			= {};
			
			_self.container = $( this );
			_self.stopLoop = false;
			
			_self.container.find('audio').on( 'play', function(){}