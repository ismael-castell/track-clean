function fusionInitPostFlexSlider(){jQuery(".fusion-flexslider.fusion-flexslider-loading, .flexslider.fusion-flexslider-loading:not(.tfs-slider)").not(".woocommerce .images #slider").each(function(){var e="false"!==fusionFlexSliderVars.flex_smoothHeight,i=Boolean(Number(fusionFlexSliderVars.slideshow_autoplay)),s=Number(fusionFlexSliderVars.slideshow_speed),r="fade",n=!0;2>jQuery(this).find(".slides li").length||(e=void 0!==jQuery(this).data("slideshow_smooth_height")?Boolean(Number(jQuery(this).data("slideshow_smooth_height"))):e,i=void 0!==jQuery(this).data("slideshow_autoplay")?Boolean(Number(jQuery(this).data("slideshow_autoplay"))):i,s=void 0!==jQuery(this).data("slideshow_speed")?Number(jQuery(this).data("slideshow_speed")):s,r=void 0!==jQuery(this).data("slideshow_animation")?String(jQuery(this).data("slideshow_animation")):r,n=void 0!==jQuery(this).data("slideshow_control_nav")?Boolean(Number(jQuery(this).data("slideshow_control_nav"))):n,jQuery().isotope&&0<jQuery(this).closest(".fusion-blog-layout-grid").length&&(e=!1),jQuery(this).flexslider({slideshow:i,slideshowSpeed:s,video:!0,smoothHeight:e,pauseOnHover:!1,useCSS:!1,prevText:"&#xf104;",nextText:"&#xf105;",animation:r,controlNav:n,start:function(e){e.removeClass("fusion-flexslider-loading"),jQuery(window).trigger("resize"),void 0!==e.slides&&0!==e.slides.eq(e.currentSlide).find("iframe").length?(Number(fusionFlexSliderVars.pagination_video_slide)?jQuery(e).find(".flex-control-nav").css("bottom","-20px"):jQuery(e).find(".flex-control-nav").hide(),Number(fusionFlexSliderVars.status_yt)&&!0===window.yt_vid_exists&&window.YTReady(function(){new YT.Player(e.slides.eq(e.currentSlide).find("iframe").attr("id"),{events:{onStateChange:onPlayerStateChange(e.slides.eq(e.currentSlide).find("iframe").attr("id"),e)}})})):Number(fusionFlexSliderVars.pagination_video_slide)?jQuery(e).find(".flex-control-nav").css("bottom","0"):jQuery(e).find(".flex-control-nav").show(),jQuery.isFunction(jQuery.fn.initElementAnimations)&&jQuery(window).initElementAnimations()},before:function(){},after:function(){}}),e="false"!==fusionFlexSliderVars.flex_smoothHeight)})}function fusionDestroyPostFlexSlider(){jQuery(".fusion-flexslider").not(".woocommerce .images #slider").flexslider("destroy")}jQuery(window).on("load",function(){var e,i="false"!==fusionFlexSliderVars.flex_smoothHeight;window.fusionVimeoPlayers=[],jQuery().flexslider&&(Number(fusionFlexSliderVars.status_vimeo)&&jQuery(".flexslider").find("iframe").each(function(){var i=jQuery(this).attr("id"),s=jQuery(this).attr("src");i&&-1!==s.indexOf("vimeo")&&(window.fusionVimeoPlayers[i]=new Vimeo.Player(i),e=jQuery("#"+i).parents("li"),window.fusionVimeoPlayers[i].on("play",function(){}),window.fusionVimeoPlayers[i].on("pause",function(){jQuery(e).attr("data-vimeo-paused","true"),"yes"===jQuery(e).attr("data-loop")?jQuery("#"+i).parents("li").parent().parent().flexslider("pause"):jQuery("#"+i).parents("li").parent().parent().flexslider("play")}),window.fusionVimeoPlayers[i].on("ended",function(){"yes"!==jQuery(e).attr("data-loop")&&"true"!==jQuery(e).attr("data-vimeo-paused")&&jQuery("#"+i).parents("li").parent().parent().flexslider("next"),"true"===jQuery(e).attr("data-vimeo-paused","true")&&jQuery(e).attr("data-vimeo-paused","false")}))}),fusionInitPostFlexSlider(),1<=jQuery(".flexslider-attachments").length&&jQuery.each(jQuery(".flexslider-attachments"),function(){}))}),jQuery(window).on("fusion-element-render-fusion_recent_posts fusion-element-render-fusion_postslider",function(){}),jQuery(window).on("fusion-element-render-fusion_slider",function(){}),jQuery(window).on("fusion-element-render-fusion_slide",function(){}