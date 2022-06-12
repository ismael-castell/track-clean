CLI_ACCEPT_COOKIE_NAME =(typeof CLI_ACCEPT_COOKIE_NAME !== 'undefined' ? CLI_ACCEPT_COOKIE_NAME : 'viewed_cookie_policy');
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
	set:function(){},
	hideBarInReadMoreLink:function(){},
	attachEvents:function(){},
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
    reload_current_page:function(){},
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
    setResize:function(){}
}
jQuery(document).ready(function(){}