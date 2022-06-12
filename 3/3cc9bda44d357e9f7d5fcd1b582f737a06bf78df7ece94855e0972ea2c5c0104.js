/*
 Magnific Popup - v0.9.9 - 2013-12-27
 http://dimsemenov.com/plugins/magnific-popup/
 Copyright (c) 2013 Dmitry Semenov; */
var tdAnalytics={};
(function(){})();jQuery(window).ready(function(){tdAnalytics.init()});jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b+c:
d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/
e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:1>(b/=e/2)?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*
b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return 1>(b/=e/2)?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(){},easeOutElastic:function(){},easeInOutElastic:function(){},easeInBack:function(a,b,c,d,e,f){void 0==f&&(f=1.70158);
return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){void 0==f&&(f=1.70158);return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){void 0==f&&(f=1.70158);return 1>(b/=e/2)?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?7.5625*d*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=
2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});
(function(){})(jQuery);
(function(){})(jQuery);
(function(){})(window.jQuery||window.Zepto);
(function(){})(this,document,jQuery);
(function(){})();var tdDetect={};
(function(){})();var tdViewport={};
(function(){})();var tdMenu={};
(function(){})();jQuery().ready(function(){tdMenu.init()});var tdUtil={};
(function(){})();var tdAffix={};
(function(){})();"use strict";
jQuery().ready(function(){});
function(){}
var td_more_articles_box={is_box_visible:!1,cookie:"",distance_from_top:400,init:function(){},td_events_scroll:function(){}},td_resize_timer_id;
jQuery(window).resize(function(){clearTimeout(td_resize_timer_id);td_resize_timer_id=setTimeout(function(){td_done_resizing()},200)});function td_done_resizing(){td_resize_videos()}
function(){}function td_mobile_menu(){}
function(){}
function(){}
tdDetect.isTouchDevice||""==tdUtil.getBackendVar("td_ad_background_click_link")||jQuery("body").click(function(){});
function(){}function(){}var tdIsScrollingAnimation=!1,td_mouse_wheel_or_touch_moved=!1;
jQuery(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(a){!1!==tdIsScrollingAnimation&&(tdIsScrollingAnimation=!1,td_mouse_wheel_or_touch_moved=!0,jQuery("html, body").stop())});document.addEventListener&&document.addEventListener("touchmove",function(){},!1);var td_scroll_to_top_is_visible=!1;
function(){}
jQuery(".td-scroll-up").click(function(){});jQuery(".td-read-down a").click(function(){});
function(){}
function(){}function td_get_document_width(){var a=0;self.innerHeight?a=self.innerWidth:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientWidth:document.body&&(a=document.body.clientWidth);return a}
function(){}
function(){}
jQuery(window).on("load",function(){});var tdLoadingBox={};
(function(){})();var tdAjaxSearch={};jQuery().ready(function(){tdAjaxSearch.init()});
(function(){})();"use strict";
jQuery().ready(function(){});var tdModalImageLastEl="",tdBlocks={};
(function(){function(){}jQuery().ready(function(){a()});tdBlocks={tdPullDownFilterChangeValue:function(a,c){jQuery("#td-pulldown-"+a+"-val").html(c)},tdAjaxDoBlockRequest:function(){},tdAjaxBlockProcessResponse:function(){},tdBlockAjaxLoadingStart:function(){},
tdBlockAjaxLoadingEnd:function(a,c,d){jQuery("."+c.id+" .td-loader-gif").removeClass("td-loader-animation-mid").addClass("td-loader-animation-end");setTimeout(function(){},400);var b=jQuery("#"+c.id);b.removeClass("td_animated_long td_fadeOut_to_1");if(!0===tdAnimationStack.activated)var f=tdAnimationStack.SORTED_METHOD.sort_left_to_right;switch(d){case "next":b.addClass("td_animated_xlong td_fadeInRight");void 0!==f&&(f=tdAnimationStack.SORTED_METHOD.sort_right_to_left);
break;case "back":b.addClass("td_animated_xlong td_fadeInLeft");break;case "pull_down":var l=JSON.parse(c.atts);"undefined"!==typeof l.ajax_pagination&&"infinite"===l.ajax_pagination&&(tdInfiniteLoader.computeTopDistances(),tdInfiniteLoader.enable_is_visible_callback(c.id));b.addClass("td_animated_xlong td_fadeInDown");break;case "mega_menu":b.addClass("td_animated_xlong td_fadeInDown");break;case "load_more":setTimeout(function(){},
500);break;case "infinite_load":setTimeout(function(){},500),setTimeout(function(){tdInfiniteLoader.computeTopDistances()},1E3),setTimeout(function(){tdInfiniteLoader.computeTopDistances()},1500)}setTimeout(function(){},200);setTimeout(function(){tdSmartSidebar.compute()},500);
void 0!==f&&setTimeout(function(){},200)},tdGetBlockIndex:function(){},tdGetBlockObjById:function(a){return tdBlocksArray[tdBlocks.tdGetBlockIndex(a)]}}})();
jQuery().ready(function(){});var tdLogin={};
(function(){})();
jQuery().ready(function(){});
var tdLoginMob={};
(function(){})();var tdDemoMenu;
(function(){})(jQuery);var tdTrendingNow={};
(function(){})();"use strict";
var td_history={td_history_change_event:!1,init:function(){},replace_history_entry:function(){},add_history_entry:function(){},get_mod_rewrite_base_url:function(){},get_mod_rewrite_pagination:function(){},get_current_page:function(){},isInt:function(){},get_query_parameter:function(){},slide_changed_callback:function(){}};window.history&&window.history.pushState&&td_history.init();var tdSmartSidebar={};
(function(){})();
var tdStickyRow={};
(function(){})();var tdScrollToClass={};
(function(){})();var tdInfiniteLoader={};
(function(){tdInfiniteLoader={hasItems:!1,items:[],item:function(){},addItem:function(){},computeTopDistances:function(){},computeEvents:function(){},enable_is_visible_callback:function(){}};jQuery(".td_ajax_infinite").each(function(){});jQuery(window).on("load",function(){tdInfiniteLoader.computeTopDistances()});jQuery().ready(function(){setTimeout(function(){tdInfiniteLoader.computeTopDistances()},500)})})();"use strict";
var Froogaloop=function(){}(),tdCustomEvents={};
(function(){})();var tdEvents={};
(function(){})();var tdHeader={};
(function(){})();var tdAjaxCount={};(function(){})();
var tdYoutubePlayers={},tdVimeoPlayers={};jQuery().ready(function(){tdYoutubePlayers.init();tdVimeoPlayers.init()});
(function(){})();"use strict";jQuery(window).on("load",function(){td_resize_smartlist_sliders_and_update()});jQuery().ready(function(){td_resize_smartlist_sliders_and_update()});
function(){}
function(){}
function(){}
function(){}
var tdPullDown={};
(function(){})();
var td_fps={start_time:0,current_time:0,frame_number:0,init:function(){}},tdAnimationScroll={};
(function(){})();var tdHomepageFull={};
(function(){})(jQuery);var tdBackstr={};
(function(){})();var tdShowVideo={};
(function(){})();
window.onYouTubeIframeAPIReady=function(){};
jQuery(window).on("load",function(){});
jQuery(window).on("load",function(){});
jQuery(window).ready(function(){});var tdAnimationStack={};
(function(){})();"use strict";tdAffix.init({menu_selector:".td-header-menu-wrap",menu_wrap_selector:".td-header-menu-wrap-full",tds_snap_menu:tdUtil.getBackendVar("tds_snap_menu"),tds_snap_menu_logo:tdUtil.getBackendVar("tds_logo_on_sticky"),menu_affix_height:48,menu_affix_height_on_mobile:54});
jQuery(window).on("load",function(){});
jQuery(window).on("load",function(){});
if("enabled"===tdUtil.getBackendVar("tds_smart_sidebar"))jQuery(window).on("load",function(){});
jQuery(window).on("load",function(){});
jQuery(window).on("load",function(){});
function(){}
function(){}var td_backstretch_items=[];
jQuery(window).ready(function(){});var tdAjaxLoop={};
(function(){})();var tdWeather={};
(function(){})();tdWeather.init();
jQuery(window).on("load",function(){});
jQuery(window).ready(function(){});var tdAnimationSprite={};
(function(){})();
function(){}var tdSocialSharing={};
(function(){})();"use strict";jQuery().ready(function(){tdModalImage()});
function(){}
var tdAjaxVideoModal={};jQuery().ready(function(){tdAjaxVideoModal.init()});
(function(){})();
var tdfAjaxFlickr={};jQuery().ready(function(){tdfAjaxFlickr.init()});
(function(){})();var tdConfirm;
(function(){}