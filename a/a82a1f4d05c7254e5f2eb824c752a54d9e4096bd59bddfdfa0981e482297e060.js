jQuery(function($) {

	 //add specific class if on device for better tablet tracking
	 var using_mobile_browser = false;
	 if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) { using_mobile_browser = true; }
	 
	 var nectarPageHeader;
	 
	 function(){}
	 
	 if(using_mobile_browser && $('#page-header-bg.fullscreen-header').length > 0) {
		 
		 nectarPageHeader = $('#page-header-bg');
		 
		 fullscreenHeightCalc();
		 
		 var $windowDOMWidth = window.innerWidth, $windowDOMHeight = window.innerHeight;
		 
		 $(window).resize(function(){});
		 
	 }
	 
	 function(){}
	
	if(using_mobile_browser && $('.nectar_fullscreen_zoom_recent_projects').length > 0) { portfolioFullScreenSliderCalcs(); }
	
	
		function(){}
	
		if($('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0) {
			centeredNavBottomBarReposition();
		}
	
	
		//add loaded class for zoom out page header
		$('#page-header-bg[data-animate-in-effect="zoom-out"]').addClass('loaded');
	
		function(){}
		sliderFontOverrides();
	
	
	
		function(){}
	
		var usingLogoImage = ($('#header-outer[data-using-logo="1"]').length > 0) ? true : false;
	
	
		//logo centered between menu
		if(!usingLogoImage) {
			centeredLogoMargins();
		}
		else if(usingLogoImage && $('#header-outer[data-format="centered-logo-between-menu"]').length > 0 && $('header#top #logo img:first[src]').length > 0) {
			
			//fadein img on load
			var tempLogoImg = new Image();
			tempLogoImg.src = $('header#top #logo img:first').attr('src');
	
				tempLogoImg.onload = function() {
					 centeredLogoMargins();
				};
			
		}
		
		
		
		
	function(){}