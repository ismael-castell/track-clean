!function(e){"use strict";e.fn.fusion_scroll_to_anchor_target=function(t){var o,n,i,s,a,r,l,c=void 0!==e(this).attr("href")?e(this).attr("href"):e(this).data("link"),u=c.substr(c.indexOf("#")).slice(1),f=e("#"+u),h=e("html").hasClass("ua-edge")||e("html").hasClass("ua-safari-12")||e("html").hasClass("ua-safari-11")||e("html").hasClass("ua-safari-10")?"body":"html",d=e(".fusion-tb-header").length,p=!1,g=!1;if(t=void 0!==t?t:0,f.length&&""!==u){if((f.parents(".hundred-percent-height-scrolling").length||f.find(".hundred-percent-height-scrolling").length)&&(0!=fusionScrollToAnchorVars.container_hundred_percent_height_mobile||!Modernizr.mq("only screen and (max-width: "+fusionScrollToAnchorVars.content_break_point+"px)"))){if((l=f.hasClass("fusion-scroll-section-element")?f:f.parents(".fusion-scroll-section-element")).hasClass("active")&&l.offset().top>=e(window).scrollTop()&&l.offset().top<e(window).scrollTop()+e(window).height())return!1;if(location.hash&&"#_"===location.hash.substring(0,2)&&e(".fusion-page-load-link").addClass("fusion-page.load-scroll-section-link"),f.parents(".fusion-scroll-section").length)return f.parents(".fusion-scroll-section").hasClass("active")?f.parents(".fusion-scroll-section").find(".fusion-scroll-section-nav").find(".fusion-scroll-section-link[data-element="+l.data("element")+"]").trigger("click"):(r=Math.ceil(f.parents(".fusion-scroll-section").offset().top),e(h).animate({scrollTop:r},{duration:400,easing:"easeInExpo",complete:function(){}})),!1}return o=fusion.getAdminbarHeight(),i=e(document).scrollTop(),d?(e("body").addClass("fusion-scrolling-active"),(p=fusionGetStickyOffset())||(p=o),s=f.offset().top-p-t):(n="function"==typeof getStickyHeaderHeight?getStickyHeaderHeight():0,s=f.offset().top-o-n-t),a=Math.abs(i-s)/2,r=i>s?i-a:i+a,e(h).animate({scrollTop:r},{duration:400,easing:"easeInExpo",complete:function(){o=fusion.getAdminbarHeight(),d?((p=fusionGetStickyOffset())||(p=o),s=f.offset().top-p-t):(n="function"==typeof getStickyHeaderHeight?getStickyHeaderHeight():0,s=f.offset().top-o-n-t),e(h).animate({scrollTop:s},450,"easeOutExpo",function(){})}}),(f.hasClass("tab-pane")||f.hasClass("tab-link"))&&"function"==typeof e.fn.fusionSwitchTabOnLinkClick&&setTimeout(function(){f.parents(".fusion-tabs").fusionSwitchTabOnLinkClick()},100),!1}}}(jQuery),jQuery(document).ready(function(){}),location.hash&&"#_"===location.hash.substring(0,2)&&(jQuery(".fusion-page-load-link").attr("href",decodeURIComponent("#"+location.hash.substring(2))),jQuery(window).on("load",function(){}