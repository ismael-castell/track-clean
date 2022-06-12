// -------------------------------------------------------------------------------------------
// Message Box
// -------------------------------------------------------------------------------------------

(function($)
{
	"use strict";

	$.fn.avia_sc_messagebox = function (options) {

		"use strict";

		return this.each(function () 
		{
			var container = $(this),
				close_btn = container.find('.av_message_close'),
				mbox_ID = container.attr('id'),

				aviaSetCookie = function(){},

				aviaGetCookie = function(){}