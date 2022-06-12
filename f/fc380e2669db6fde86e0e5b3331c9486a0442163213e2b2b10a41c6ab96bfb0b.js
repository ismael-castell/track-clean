CLI_ACCEPT_COOKIE_NAME =(typeof CLI_ACCEPT_COOKIE_NAME !== 'undefined' ? CLI_ACCEPT_COOKIE_NAME : 'viewed_cookie_policy');
CLI_PREFERNCE_COOKIE =(typeof CLI_PREFERNCE_COOKIE !== 'undefined' ? CLI_PREFERNCE_COOKIE : 'CookieLawInfoConsent');
CLI_ACCEPT_COOKIE_EXPIRE =(typeof CLI_ACCEPT_COOKIE_EXPIRE !== 'undefined' ? CLI_ACCEPT_COOKIE_EXPIRE : 365);
CLI_COOKIEBAR_AS_POPUP=(typeof CLI_COOKIEBAR_AS_POPUP !== 'undefined' ? CLI_COOKIEBAR_AS_POPUP : false);
var CLI_Cookie={
	set: function (name, value, days) {
		var secure = "";
		if ( true === Boolean( Cli_Data.secure_cookies ) ) secure = ";secure";
		var domain = ( Cli_Data.cookieDomain !== '' ? ";domain=" + Cli_Data.cookieDomain : '' );
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = ";expires=" + date.toGMTString();
		if( days < 1 ){
			this.eraseCookie(name,expires);
		} else {
			document.cookie = name + "=" + value + secure + expires + domain + ";path=/";
		}
    },
    read: function(){},
    erase: function (name) {
        this.set(name, "", -10);
	},
	eraseCookie: function(){},
    exists: function(){},
    getallcookies:function(){},
	cookieExist: function(){}
}
var CLI=
{
	bar_config:{},
  	consent:{},
	allowedCategories:[],
	showagain_config:{},
	set:function(){},
	hideBarInReadMoreLink:function(){},
	settingsPopUp:function(){},
	settingsTabbedAccordion:function(){},
	settingsPopUpClose:function(){},
	toggleUserPreferenceCheckBox:function(){},
	attachEvents:function(){},
	saveLog:function(){},
	attachDelete:function(){},
	configButtons:function(){},
	toggleBar:function(){},
	configShowAgain:function(){},
	configBar:function(){},
	l1hs:function(){},
	close_header:function(){},
	accept_close:function() 
    {   
		
			this.hidePopupOverlay();
			CLI_Cookie.set(CLI_ACCEPT_COOKIE_NAME,'yes',CLI_ACCEPT_COOKIE_EXPIRE);
			if(this.settings.notify_animate_hide) 
			{
				this.bar_elm.slideUp(this.settings.animate_speed_hide,cliBlocker.runScripts);
			}else 
			{
				this.bar_elm.hide(0,cliBlocker.runScripts);
			}
			if(this.settings.showagain_tab) 
			{
				this.showagain_elm.slideDown(this.settings.animate_speed_show);
			}
			this.generate_user_preference_cookie();
			this.generateConsent();
			CLI.cookieLawInfoRunCallBacks();
			if(this.settings.accept_close_reload === true) 
			{
				this.reload_current_page();
			}	
        
        return false;
    },
	reject_close:function() 
    {	
        this.hidePopupOverlay();
        for(var k in Cli_Data.nn_cookie_ids) 
        {
            CLI_Cookie.erase(Cli_Data.nn_cookie_ids[k]);
        }
        CLI_Cookie.set(CLI_ACCEPT_COOKIE_NAME,'no',CLI_ACCEPT_COOKIE_EXPIRE);
        if(this.settings.notify_animate_hide) 
        {
            this.bar_elm.slideUp(this.settings.animate_speed_hide,cliBlocker.runScripts);
        }else 
        {
            this.bar_elm.hide(0,cliBlocker.runScripts);
        }
        if(this.settings.showagain_tab) 
        {
			this.showagain_elm.slideDown(this.settings.animate_speed_show);
        }
		this.generate_user_preference_cookie();
		CLI.generateConsent();
        if(this.settings.reject_close_reload === true) 
        {
            this.reload_current_page();
        }
        return false;
    },
    generate_user_preference_cookie:function(){},
	isBase64:function(){},
	generateConsent:function(){},
	cliRenewConsent:function(){},
    reload_current_page:function()
    {	
		window.location.reload();
    },
    add_clear_cache_url_query:function(){},
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
	isValidHex:function(){},
	ColorLuminance:function(){},
	rgb2hex:function(){},
	lightOrDark:function(){},
	barPopupStyle:function(){},
	enableAllCookies:function(){},
	disableAllCookies:function(){},
	privacyReadmore:function(){},
  	checkCategories:function(){},
	cookieLawInfoRunCallBacks:function(){},
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
	acceptPageNavigation: function(){},
	refocusElement: function(){}
}
var cliBlocker = 
{   
	blockingStatus: true,
	geoIP: false,
	scriptsLoaded: false,
	ccpaEnabled : false,
	ccpaRegionBased : false,
	ccpaApplicable : false,
	ccpaBarEnabled: false,
	cliShowBar: true ,
	isBypassEnabled: CLI.getParameterByName('cli_bypass'),
    checkPluginStatus:function(){},
	tryCustomGeoLocationService: function(){},
	geolocationHandler:function(){},
	cookieBar: function(){},
	removeAllPreferenceCookies : function(){},
	removeCookieByCategory : function(){},
    runScripts:function(){},
	ccpaOptedOut: function(){}
}
jQuery(document).ready(function(){}