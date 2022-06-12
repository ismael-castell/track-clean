(function($) {

	if (typeof _wpcf7 == 'undefined' || _wpcf7 === null)
		_wpcf7 = {};

	_wpcf7 = $.extend({ cached: 0 }, _wpcf7);

	$(function(){});

	$.fn.wpcf7InitForm = function(){};

	$.wpcf7AjaxSuccess = function(){}

	$.fn.wpcf7ExclusiveCheckbox = function(){};

	$.fn.wpcf7Placeholder = function(){};

	$.fn.wpcf7AjaxLoader = function(){};

	$.fn.wpcf7ToggleSubmit = function(){};

	$.fn.wpcf7ToggleCheckboxFreetext = function(){};

	$.fn.wpcf7NotValidTip = function(message) {
		return this.each(function() {
			var $into = $(this);
			$into.hide().append('<span role="alert" class="wpcf7-not-valid-tip">' + message + '</span>').slideDown('fast');

			if ($into.is('.use-floating-validation-tip *')) {
				$('.wpcf7-not-valid-tip', $into).mouseover(function() {
					$(this).wpcf7FadeOut();
				});

				$(':input', $into).focus(function(){});
			}
		});
	};

	$.fn.wpcf7FadeOut = function(){};

	$.fn.wpcf7OnloadRefill = function(){};

	$.fn.wpcf7RefillCaptcha = function(){};

	$.fn.wpcf7RefillQuiz = function(){};

	$.fn.wpcf7ClearResponseOutput = function(){};

	$.wpcf7UpdateScreenReaderResponse = function(){}