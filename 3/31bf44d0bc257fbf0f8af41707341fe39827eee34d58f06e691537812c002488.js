// -------------------------------------------------------------------------------------------
// contact form ajax
// -------------------------------------------------------------------------------------------

(function($)
{
	$.fn.avia_ajax_form = function(variables)
	{	
		var defaults =
		{
			sendPath: 'send.php',
			responseContainer: '.ajaxresponse'
		};

		var options = $.extend(defaults, variables);

		return this.each(function()
		{
			var form = $(this),
				form_sent = false,
				send =
				{
					formElements: form.find('textarea, select, input[type=text], input[type=checkbox], input[type=hidden]'),
					validationError:false,
					button : form.find('input:submit'),
					dataObj : {}
				},

				responseContainer = form.next(options.responseContainer).eq( 0 );

				send.button.on('click', checkElements);
				
				
				//change type of email forms on mobile so the e-mail keyboard with @ sign is used
				if($.avia_utilities.isMobile)
				{
					send.formElements.each(function(){});
				}
			

			function checkElements( e )
			{
				// reset validation var and send data
				send.validationError = false;
				send.datastring = 'ajax=true';

				//	Get in js added element (e.g. from reCAPTCHA)
				send.formElements = form.find('textarea, select, input[type=text], input[type=checkbox], input[type=hidden], input[type=email]');
				
				send.formElements.each(function(i)
				{
					var currentElement = $(this),
						surroundingElement = currentElement.parent(),
						value = currentElement.val(),
						name = currentElement.attr('name'),
					 	classes = currentElement.attr('class'),
					 	nomatch = true;

					 	if(currentElement.is(':checkbox'))
					 	{
					 		if(currentElement.is(':checked')) { value = true; } else { value = ''; }
					 	}
					 	
					 	send.dataObj[name] = encodeURIComponent(value);

					 	if(classes && classes.match(/is_empty/))
						{	
							if(value == '' || value == null)
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}

						if(classes && classes.match(/is_email/))
						{
							if( ! value.match(/^[\w|\.|\-]+@\w[\w|\.|\-]*\.[a-zA-Z]{2,20}$/))
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}
						
						if(classes && classes.match(/is_ext_email/))
						{
							if( ! value.match( /^[\w\.\-ÄÖÜäöü]+@\w[\w\.\-ÄÖÜäöü]*\.[a-zA-Z]{2,20}$/ ) )
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}
						
						if(classes && classes.match(/is_special_email/))
						{
							//  also allowed would be: ! # $ % & ' * + - / = ? ^ _ ` { | } ~  see https://de.wikipedia.org/wiki/E-Mail-Adresse#Der_Lokalteil_(Local_Part)
							if( ! value.match( /^[a-zA-Z0-9.!#$%&'*+\-\/=?^_`{|}~ÄÖÜäöü]+@\w[\w\.\-ÄÖÜäöü]*\.[a-zA-Z]{2,20}$/ ) )
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}
						
						if(classes && classes.match(/is_phone/))
						{
							if( ! value.match(/^(\d|\s|\-|\/|\(|\)|\[|\]|e|x|t|ension|\.|\+|\_|\,|\:|\;){3,}$/))
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}
						
						if(classes && classes.match(/is_number/))
						{
							if( ! value.match( /^-?\s*(0|[1-9]\d*)([\.,]\d+)?$/ ) )
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}

						if(classes && classes.match(/is_positiv_number/))
						{
							if( ! ( avia_isNumeric( value ) ) || value == "" || value < 0 )
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}

						if(classes && classes.match(/captcha/) && ! classes.match(/recaptcha/) )
						{
							var verifier 	= form.find("#" + name + "_verifier").val(),
								lastVer		= verifier.charAt(verifier.length-1),
								finalVer	= verifier.charAt(lastVer);

							if(value != finalVer)
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("error");
								send.validationError = true;
							}
							else
							{
								surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
							}
							nomatch = false;
						}

						if(nomatch && value != '')
						{
							surroundingElement.removeClass("valid error ajax_alert").addClass("valid");
						}
				});

				if(send.validationError == false)
				{
					if(form.data('av-custom-send'))
					{
						mailchimp_send();	
					}
					else
					{
						send_ajax_form();
					}
				}
				
				return false;
			}
			
			
			function(){}
			
			
			function(){}