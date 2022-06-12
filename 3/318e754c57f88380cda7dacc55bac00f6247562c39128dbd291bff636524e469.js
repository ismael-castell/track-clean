CLI_ACCEPT_COOKIE_NAME =(typeof CLI_ACCEPT_COOKIE_NAME !== 'undefined' ? CLI_ACCEPT_COOKIE_NAME : 'viewed_cookie_policy');
CLI_PREFERNCE_COOKIE =(typeof CLI_PREFERNCE_COOKIE !== 'undefined' ? CLI_PREFERNCE_COOKIE : 'CookieLawInfoConsent');
CLI_ACCEPT_COOKIE_EXPIRE =(typeof CLI_ACCEPT_COOKIE_EXPIRE !== 'undefined' ? CLI_ACCEPT_COOKIE_EXPIRE : 365);
CLI_COOKIEBAR_AS_POPUP=(typeof CLI_COOKIEBAR_AS_POPUP !== 'undefined' ? CLI_COOKIEBAR_AS_POPUP : false);
var CLI_Cookie={
	set: function(){},
    read: function(){},
    erase: function (name) {
        this.set(name, "", -10);
    },
    exists: function(){},
    getallcookies:function(){}
}
var CLI=
{
	bar_config:{},
	showagain_config:{},
	allowedCategories:[],
	js_blocking_enabled: false,
	set:function(){},
	hideBarInReadMoreLink:function(){},
	attachEvents:function()
	{	
		jQuery(document).on('click','.wt-cli-privacy-btn',function(e){
			e.preventDefault();
			CLI.accept_close();
			CLI.settingsPopUpClose();
		});

		jQuery('.cli_action_button').on("click", function(e) {
			e.preventDefault();
			var elm=jQuery(this);
			var button_action=elm.attr('data-cli_action');
			var open_link=elm[0].hasAttribute("href") && elm.attr("href") != '#' ? true : false;
			var new_window=false;
			if(button_action=='accept')
			{
				CLI.accept_close();
				new_window= Boolean( CLI.settings.button_1_new_win ) ? true : false;

			}
			else if( button_action == 'accept_all') {
				CLI.enableAllCookies();
				CLI.accept_close();
				new_window=CLI.settings.button_7_new_win ? true : false;
			}
			else if(button_action=='reject')
			{	
				CLI.disableAllCookies();
				CLI.reject_close();
				new_window= Boolean( CLI.settings.button_3_new_win ) ? true : false;
			}
			if(open_link)
			{
                if(new_window)
                {
                    window.open(elm.attr("href"),'_blank');
                }else
                {
                    window.location.href =elm.attr("href");
                }  
            }
		});
		this.settingsPopUp();
		this.settingsTabbedAccordion();
		this.toggleUserPreferenceCheckBox();
		this.hideCookieBarOnClose();
		this.cookieLawInfoRunCallBacks();

	},
	toggleUserPreferenceCheckBox:function(){},
	settingsPopUp:function(){},
	settingsTabbedAccordion:function(){},
	settingsPopUpClose:function(){},
	privacyReadmore:function(){},
	attachDelete:function(){},
	configButtons:function(){},
	toggleBar:function(){},
	configShowAgain:function(){},
	configBar:function(){},
	l1hs:function(){},
	close_header:function(){},
	accept_close:function(){},
	reject_close:function(){},
    reload_current_page:function()
    {	
		
    	window.location.reload(true);
    },
	closeOnScroll:function(){},
    displayHeader:function(){},
    hideHeader:function(){},
    hidePopupOverlay:function() 
    {
        jQuery('body').removeClass("cli-barmodal-open");
        jQuery(".cli-popupbar-overlay").removeClass("cli-show");
    },
    showPopupOverlay:function(){},
    barAsWidget:function(){},
    barAsPopUp:function(){},
    setResize:function(){},
	enableAllCookies:function(){},
	disableAllCookies:function(){},
	hideCookieBarOnClose: function(){},
	checkCategories:function(){},
	cookieLawInfoRunCallBacks:function(){},
	generateConsent:function(){},
	addStyleAttribute:function(){},
	getParameterByName: function( name, url ) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	},
	CookieLawInfo_Callback: function(){},
	checkifStyleAttributeExist: function(){},
	reviewConsent : function(){}
}
var cliBlocker = 
{   
	blockingStatus: true,
	scriptsLoaded: false,
	ccpaEnabled : false,
	ccpaRegionBased : false,
	ccpaApplicable : false,
	ccpaBarEnabled: false,
	cliShowBar: true ,
	isBypassEnabled: CLI.getParameterByName('cli_bypass'),
	checkPluginStatus: function(){},
	cookieBar: function(){},
	removeCookieByCategory : function(){},
    runScripts:function(){},
	ccpaOptedOut : function(){}
}
jQuery(document).ready(function(){}