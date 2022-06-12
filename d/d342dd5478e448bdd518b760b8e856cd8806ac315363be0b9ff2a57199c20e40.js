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
(function(a){var b=0,c=0,d=0,e=0,f="ontouchstart"in window||0<navigator.msMaxTouchPoints,l="onorientationchange"in window,g=!1,n=!1,u=!1,G=!1,v=!1,A="pointer",O="pointer",X=[],U=[],oa=[],Y=[],D=[],ba=[],E=[],q=[],z=[],ca=[],ja=[],m={showScrollbar:function(){},hideScrollbar:function(){},hideScrollbarInterval:function(){},slowScrollHorizontalInterval:function(){},slowScrollHorizontal:function(){},onSlideComplete:function(){},getSliderOffset:function(){},setSliderOffset:function(){},setBrowserInfo:function(){},has3DTransform:function(){},
getSlideNumber:function(){},calcActiveOffset:function(){},changeSlide:function(){},changeOffset:function(){},autoSlide:function(){},autoSlidePause:function(a){clearTimeout(X[a])},isUnselectable:function(){},slowScrollHorizontalIntervalTimer:function(){},onSlideCompleteTimer:function(){},hideScrollbarIntervalTimer:function(){},updateBackfaceVisibilityTimer:function(){},updateBackfaceVisibility:function(){},mod:function(){},args:function(){},preventDrag:function(a){a.preventDefault()},preventClick:function(){},enableClick:function(){return!0}};m.setBrowserInfo();var da={init:function(L,w){g=m.has3DTransform();var h=
a.extend(!0,{elasticPullResistance:.6,frictionCoefficient:.92,elasticFrictionCoefficient:.6,snapFrictionCoefficient:.92,snapToChildren:!1,snapSlideCenter:!1,startAtSlide:1,scrollbar:!1,scrollbarDrag:!1,scrollbarHide:!0,scrollbarPaging:!1,scrollbarLocation:"top",scrollbarContainer:"",scrollbarOpacity:.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",scrollbarElasticPullResistance:.9,desktopClickDrag:!1,
keyboardControls:!1,tabToAdvance:!1,responsiveSlideContainer:!0,responsiveSlides:!0,navSlideSelector:"",navPrevSelector:"",navNextSelector:"",autoSlideToggleSelector:"",autoSlide:!1,autoSlideTimer:5E3,autoSlideTransTimer:750,autoSlideHoverPause:!0,infiniteSlider:!1,snapVelocityThreshold:5,slideStartVelocityThreshold:0,horizontalSlideLockThreshold:5,verticalSlideLockThreshold:3,hardwareAccelBuffer:5,stageCSS:{position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1},unselectableSelector:"",
onSliderLoaded:"",onSliderUpdate:"",onSliderResize:"",onSlideStart:"",onSlideChange:"",onSlideComplete:""},L);void 0==w&&(w=this);return a(w).each(function(g){function(){}b++;var k=b,w=[];U[k]=a.extend({},h);q[k]=0;z[k]=0;var L=[0,0],v=[0,0],S="scrollbarBlock"+b,I="scrollbar"+b,M,P,t,B,r,X,p=0,F=a(this),J,Q,T,W,Ba,va=!0;g=-1;var y,Z=[],wa=0,ka=0,Fa=0,K=a(this).children(":first-child"),
H,na,R,N=a(K).children().not("script").length,ia=!1,Da=0,ya=!1,sa=void 0,aa;E[k]=0;var ha=!1,pa=!1;oa[k]=!1;var la,ta=!1,qa=!1,ea="touchstart.iosSliderEvent click.iosSliderEvent",fa,xa,Ca,ra;ja[k]=!1;Y[k]=[];h.scrollbarDrag&&(h.scrollbar=!0,h.scrollbarHide=!1);var Ea=a(this);if(void 0!=Ea.data("iosslider"))return!0;14.2<=parseInt(a().jquery.split(".").join(""),10)?a(this).delegate("img","dragstart.iosSliderEvent",function(a){a.preventDefault()}):a(this).find("img").bind("dragstart.iosSliderEvent",
function(a){a.preventDefault()});h.infiniteSlider&&(h.scrollbar=!1);h.infiniteSlider&&1==N&&(h.infiniteSlider=!1);h.scrollbar&&(""!=h.scrollbarContainer?a(h.scrollbarContainer).append("<div class = '"+S+"'><div class = '"+I+"'></div></div>"):a(K).parent().append("<div class = '"+S+"'><div class = '"+I+"'></div></div>"));if(!C())return!0;a(this).find("a").bind("mousedown",m.preventDrag);a(this).find("[onclick]").bind("click",m.preventDrag).each(function(){a(this).data("onclick",this.onclick)});g=m.calcActiveOffset(h,
m.getSliderOffset(a(K),"x"),y,J,E[k],N,void 0,k);g=(g+E[k]+N)%N;g=new m.args("load",h,K,a(K).children(":eq("+g+")"),g,g);a(F).data("args",g);if(""!=h.onSliderLoaded)h.onSliderLoaded(g);h.scrollbarPaging&&h.scrollbar&&!ha&&(a(P).css("cursor","pointer"),a(P).bind("click.iosSliderEvent",function(){}));if(U[k].responsiveSlides||U[k].responsiveSlideContainer)g=l?"orientationchange":"resize",a(window).bind(g+".iosSliderEvent-"+k,
function(){});!h.keyboardControls&&!h.tabToAdvance||ha||a(document).bind("keydown.iosSliderEvent",function(a){n||u||(a=a.originalEvent);if("INPUT"==a.target.nodeName||"TEXTAREA"==a.target.nodeName||ja[k])return!0;if(37==a.keyCode&&h.keyboardControls)a.preventDefault(),a=(D[k]+E[k]+N)%N,(0<a||h.infiniteSlider)&&m.changeSlide(a-1,K,H,w,I,B,J,t,T,W,Z,y,R,k,aa,N,p,h);else if(39==a.keyCode&&h.keyboardControls||9==a.keyCode&&
h.tabToAdvance)a.preventDefault(),a=(D[k]+E[k]+N)%N,(a<y.length-1||h.infiniteSlider)&&m.changeSlide(a+1,K,H,w,I,B,J,t,T,W,Z,y,R,k,aa,N,p,h)});if(f||h.desktopClickDrag){var ma=!1,za=!1;g=a(K);var ua=a(K),Aa=!1;h.scrollbarDrag&&(g=g.add(M),ua=ua.add(P));a(g).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent",function(){});a(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent",
function(){});var Ga=a(window);if(u||n)Ga=a(document);a(g).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent",
function(){});a(Ga).bind("mouseup.iosSliderEvent-"+k,function(){})}})},destroy:function(){},update:function(){},addSlide:function(){},removeSlide:function(){},goToSlide:function(){},prevSlide:function(){},nextSlide:function(){},prevPage:function(){},nextPage:function(){},lock:function(){},unlock:function(){},getData:function(){},autoSlidePause:function(){},autoSlidePlay:function(){}};a.fn.iosSlider=function(){}})(jQuery);
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
jQuery(".td-scroll-up").click(function(){});jQuery(".td-read-down a").click(function(a){a.preventDefault();tdUtil.scrollToPosition(jQuery(".td-full-screen-header-image-wrap").height(),1200)});
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
(function(){tdLogin={email_pattern:/^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/,handlerLogin:function(){},handlerRegister:function(){var a=
jQuery("#register_email"),b=jQuery("#register_user");a.length&&b.length&&(a=a.val().trim(),b=b.val().trim(),tdLogin.email_pattern.test(a)&&b?(tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLogin.showHideMsg(td_please_wait),tdLogin.doAction("td_mod_register",a,b,"")):tdLogin.showHideMsg(td_email_user_incorrect))},handlerForgotPass:function(){var a=jQuery("#forgot_email");a.length&&(a=a.val().trim(),tdLogin.email_pattern.test(a)?(tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),
tdLogin.showHideMsg(td_please_wait),tdLogin.doAction("td_mod_remember_pass",a,"","")):tdLogin.showHideMsg(td_email_incorrect))},showHideElements:function(a){if(a.constructor===Array)for(var b=a.length,c=0;c<b;c++)if(a[c].constructor===Array&&2===a[c].length){var d=jQuery(a[c][0]);d.length&&(1===a[c][1]?d.removeClass("td-display-none").addClass("td-display-block"):d.removeClass("td-display-block").addClass("td-display-none"))}},showHideElementsMobile:function(a){if(a.constructor===Array)for(var b=
a.length,c=0;c<b;c++)if(a[c].constructor===Array&&2===a[c].length){var d=jQuery(a[c][0]);d.length&&(1===a[c][1]?d.removeClass("td-login-hide").addClass("td-login-show"):d.removeClass("td-login-show").addClass("td-login-hide"))}},showTabs:function(){},addRemoveClass:function(a){if(a.constructor===
Array&&3===a.length){var b=jQuery(a[0]);b.length&&(1===a[1]?b.addClass(a[2]):b.removeClass(a[2]))}},showHideMsg:function(a){var b=jQuery(".td_display_err");b.length&&(void 0!==a&&a.constructor===String&&0<a.length?(b.show(),b.html(a)):(b.hide(),b.html("")))},clearFields:function(){jQuery("#login_email").val("");jQuery("#login_pass").val("");jQuery("#register_email").val("");jQuery("#register_user").val("");jQuery("#forgot_email").val("")},doAction:function(a,b,c,d){jQuery.ajax({type:"POST",url:td_ajax_url,
data:{action:a,email:b,user:c,pass:d},success:function(a,b,c){a=jQuery.parseJSON(a);switch(a[0]){case "login":1===a[1]?location.reload(!0):(tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.showHideMsg(a[2]));break;case "register":1===a[1]?tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]):tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]);tdLogin.showHideMsg(a[2]);break;case "remember_pass":1===a[1]?tdLogin.addRemoveClass([".td_display_err",1,
"td_display_msg_ok"]):tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.showHideMsg(a[2])}},error:function(a,b,c){}})},doCustomAction:function(a,b,c,d){jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:a,email:b,user:c,pass:d},success:function(a,b,c){a=jQuery.parseJSON(a);switch(a[0]){case "login":1===a[1]?location.reload(!0):(tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.showHideMsg(a[2]));break;case "register":1===a[1]?(tdLogin.addRemoveClass([".td_display_err",
1,"td_display_msg_ok"]),b=new URLSearchParams(window.location.href),b.has("next_url")&&(b=window.atob(b.get("next_url").replace("=","")),"undefined"!==typeof b&&window.confirm("We have created your account."+a[2])&&(window.location=b))):tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]);tdLogin.showHideMsg(a[2]);break;case "remember_pass":1===a[1]?tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]):tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.showHideMsg(a[2])}},
error:function(a,b,c){}})}}})();
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
(function(){tdYoutubePlayers={tdPlayerContainer:"player_youtube",players:[],init:function(){for(var a=jQuery(".td_wrapper_playlist_player_youtube"),b=0;b<a.length;b++){var c=jQuery(a[b]),d=tdYoutubePlayers.addPlayer(c),e=d.tdPlayerContainer;c.parent().find(".td_youtube_control").data("player-id",e);for(var f=c.parent().find(".td_click_video_youtube"),l=0;l<f.length;l++)jQuery(f[l]).data("player-id",e),l+1<f.length?jQuery(f[l]).data("next-video-id",jQuery(f[l+1]).data("video-id")):jQuery(f[l]).data("next-video-id",
jQuery(f[0]).data("video-id"));"1"==c.data("autoplay")&&(d.autoplay=1,d.mute=1);c=c.data("first-video");""!==c&&(d.tdPlaylistIdYoutubeVideoRunning=c,d.playVideo(c))}jQuery(".td_click_video_youtube").on("click",function(){var a=jQuery(this).data("video-id"),b=jQuery(this).data("player-id");void 0!==b&&""!==b&&void 0!==a&&""!==a&&tdYoutubePlayers.operatePlayer(b,"play",a)});jQuery(".td_youtube_control").on("click",function(){var a=jQuery(this).data("player-id");void 0!==a&&""!==a&&(jQuery(this).hasClass("td-sp-video-play")?
tdYoutubePlayers.operatePlayer(a,"play"):tdYoutubePlayers.operatePlayer(a,"pause"))})},addPlayer:function(){},operatePlayer:function(a,b,c){for(var d=0;d<tdYoutubePlayers.players.length;d++)if(tdYoutubePlayers.players[d].tdPlayerContainer==a){a=tdYoutubePlayers.players[d];a.playStatus();"play"===b?(a.autoplay=1,a.mute=0,void 0===c?a.playerPlay():a.playVideo(c)):
"pause"==b&&tdYoutubePlayers.players[d].playerPause();break}},createPlayer:function(a,b){var c={tdYtPlayer:"",tdPlayerContainer:a,autoplay:0,mute:0,tdPlaylistIdYoutubeVideoRunning:"",jqTDWrapperVideoPlaylist:b.closest(".td_wrapper_video_playlist"),jqPlayerWrapper:b,jqControlPlayer:"",_videoId:"",playVideo:function(){},loadPlayer:function(a){var b=c._videoId;void 0!==a&&(b=a);if(void 0!==b){c.tdPlaylistIdYoutubeVideoRunning=b;a=window.td_youtube_list_ids["td_"+c.tdPlaylistIdYoutubeVideoRunning].title;var d=window.td_youtube_list_ids["td_"+c.tdPlaylistIdYoutubeVideoRunning].time;c.jqTDWrapperVideoPlaylist.find(".td_click_video_youtube").removeClass("td_video_currently_playing");c.jqTDWrapperVideoPlaylist.find(".td_"+b).addClass("td_video_currently_playing");
c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_title_youtube").html(a);c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_time_youtube").html(d);c.jqPlayerWrapper.html("<div id="+c.tdPlayerContainer+' class="td-youtube-player"></div>');c.jqControlPlayer=c.jqTDWrapperVideoPlaylist.find(".td_youtube_control");c.tdYtPlayer=new YT.Player(c.tdPlayerContainer,{playerVars:{autoplay:c.autoplay,mute:c.mute},height:"100%",width:"100%",videoId:b,events:{onReady:c.onPlayerReady,onStateChange:c.onPlayerStateChange}})}},
onPlayerReady:function(){},onPlayerStateChange:function(a){if(a.data===YT.PlayerState.PLAYING)c.pauseStatus();else if(a.data===YT.PlayerState.ENDED){c.playStatus();c.autoplay=1;c.mute=0;var b="",d=c.jqTDWrapperVideoPlaylist.find(".td_video_currently_playing");d.length&&(d=jQuery(d).next(".td_click_video_youtube"),d.length&&(b=jQuery(d).data("video-id")));""!==b&&c.playVideo(b)}else YT.PlayerState.PAUSED&&c.playStatus();if("undefined"!==
typeof tdShowVideo)tdShowVideo.onYoutubeStateChangeEvent(a)},playerPlay:function(){c.tdYtPlayer.playVideo()},playerPause:function(){c.tdYtPlayer.pauseVideo()},playStatus:function(){c.jqControlPlayer.removeClass("td-sp-video-pause").addClass("td-sp-video-play")},pauseStatus:function(){c.jqControlPlayer.removeClass("td-sp-video-play").addClass("td-sp-video-pause")}};return c}};tdVimeoPlayers={tdPlayerContainer:"player_vimeo",players:[],existingAutoplay:!1,init:function(){},addPlayer:function(){},operatePlayer:function(){},createPlayer:function(){}}})();"use strict";jQuery(window).on("load",function(){td_resize_smartlist_sliders_and_update()});jQuery().ready(function(){td_resize_smartlist_sliders_and_update()});
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
(function(){tdAnimationStack={_animation_css_class1:"",_animation_css_class2:"",_animation_default_effect:"type0",activated:!1,_ready_for_initialization:!0,_ready_init_timeout:void 0,max_waiting_for_init:3E3,_specific_selectors:"",_general_selectors:"",live_load_items:!1,is_ready_init:!1,ready_init:function(){},_ITEM_TO_VIEW_PORT:{ITEM_ABOVE_VIEW_PORT:0,ITEM_IN_VIEW_PORT:1,ITEM_UNDER_VIEW_PORT:2},SORTED_METHOD:{sort_left_to_right:function(){},sort_right_to_left:function(){}},_order:0,interval:70,min_interval:17,max_interval:40,_current_interval:void 0,_items_in_view_port:[],_items_above_view_port:[],items:[],item:function(){},_initialize_item:function(){},check_for_new_items:function(){},_precompute_items:function(){},
init:function(){},reinit:function(){},compute_items:function(){},_to_timer:function(){},_get_item_from_view_port:function(){return tdAnimationStack._items_in_view_port.shift()},_get_right_interval:function(){},_item_to_view_port:function(a){tdAnimationStack.log("position item relative to the view port >> yOffset "+tdEvents.window_pageYOffset+" | xOffset "+tdEvents.window_innerHeight+
" : "+a.offset_top);return tdEvents.window_pageYOffset+tdEvents.window_innerHeight+200<a.offset_top?tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_UNDER_VIEW_PORT:tdEvents.window_pageYOffset+tdEvents.window_innerHeight+200>=a.offset_top&&tdEvents.window_pageYOffset<=a.offset_bottom_to_top?tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_IN_VIEW_PORT:tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_ABOVE_VIEW_PORT},_separate_items:function(){},_load_item:function(){},td_events_scroll:function(){tdAnimationStack.compute_items(!0)},td_events_resize:function(){clearInterval(tdAnimationStack._current_interval);tdAnimationStack.reinit()},log:function(a,b){},_isHighDensity:function(){},_isRetina:function(){}}})();"use strict";tdAffix.init({menu_selector:".td-header-menu-wrap",menu_wrap_selector:".td-header-menu-wrap-full",tds_snap_menu:tdUtil.getBackendVar("tds_snap_menu"),tds_snap_menu_logo:tdUtil.getBackendVar("tds_logo_on_sticky"),menu_affix_height:48,menu_affix_height_on_mobile:54});
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