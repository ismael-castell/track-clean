function(){}window.avadaLightBox={},void 0===window.$ilInstances&&(window.$ilInstances={}),window.avadaLightBox.initialize_lightbox=function(){},window.avadaLightBox.activate_lightbox=function(){},window.avadaLightBox.set_title_and_caption=function(){},window.avadaLightBox.prepare_options=function(t,i){"use strict";var e,o,a=!0;return void 0===i&&(i=fusionLightboxVars.lightbox_gallery,a=!(!0===fusionLightboxVars.lightbox_autoplay||"true"===fusionLightboxVars.lightbox_autoplay||1===fusionLightboxVars.lightbox_autoplay||"1"===fusionLightboxVars.lightbox_autoplay)),e={fast:100,slow:800,normal:400},o={skin:fusionLightboxVars.lightbox_skin,smartRecognition:!1,minScale:.075,show:{title:fusionLightboxVars.lightbox_title,speed:e[fusionLightboxVars.lightbox_animation_speed.toLowerCase()]},path:fusionLightboxVars.lightbox_path,controls:{slideshow:i,arrows:fusionLightboxVars.lightbox_arrows},slideshow:{pauseTime:fusionLightboxVars.lightbox_slideshow_speed,pauseOnHover:!1,startPaused:a},overlay:{opacity:fusionLightboxVars.lightbox_opacity},caption:{start:fusionLightboxVars.lightbox_desc,show:"",hide:""},isMobile:!0,callback:{onShow:function(){},onAfterChange:function(){},onHide:function(t){jQuery(document).off(".fusionLightbox")}}},fusionLightboxVars.lightbox_social&&(o.social={buttons:fusionLightboxVars.lightbox_social_links}),Number(fusionLightboxVars.lightbox_deeplinking)&&(o.linkId=t),o.text=window.fusionLightboxVars.l10n,o},window.avadaLightBox.refresh_lightbox=function(){},void 0===window.$ilInstances&&(window.$ilInstances={}),jQuery(document).ajaxComplete(function(){}),jQuery(window).on("load",function(){}),jQuery.fn.trapFocus=function(){}