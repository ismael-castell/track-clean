function SplashModalRender() {
	SplashModalRender.prototype.triggerRender = function(filter){		
		
		var self = this;
		
		this._bindModalClicks();

		$.ajax({
			url: '/api/v1/SplashModal/Get?targetId=' + filter.targetId + '&targetType=' + filter.targetType + '&allowScheduling=' + filter.allowScheduling + '&requestMode=0',			
			type: 'GET',
			cache: false,
			async: false,
			success: function (response) {
				self._setSplashContent(response);
			},
			error: function(){},
			beforeSend: function () {
				ajaxPostBackStart('Loading');
			},
			complete: function () {
				ajaxPostBackEnd();
			}
		});				
	};
	
	SplashModalRender.prototype._bindModalClicks = function () {
		$('.cp-Splash-Btn--Close, .cp-Splash-close').click(function () {
			$('#SplashMessageWrapper').remove();
		});

		$('.cp-Splash-Btn--Close').focusout(function(){
			$('#SplashMessage').focus();
		});

		$('.cp-Splash-Btn--NoShow').click(function(){});

		$(document).keydown(function(){}