function vc_js() {
  /* nectar addition */ 
/*
vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_googleplus(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_google_fonts(), vc_gridBehaviour(), vc_rowBehaviour(), vc_googleMapsPointer(), vc_ttaActivation();
jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)*/
 /* nectar addition end */ 

}

function(){}

function(){}

function(){}

function(){}

function(){}

function(){}

function(){}

function(){}

function(){}

function(){}

function(){}

function(){}

function(){}
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function(){}), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
        0 < jQuery(".wpb_googleplus").length && function() {
            var po = document.createElement("script");
            po.type = "text/javascript", po.async = !0, po.src = "//apis.google.com/js/plusone.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s)
        }()
    }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
        0 < jQuery(".wpb_pinterest").length && function() {
            var po = document.createElement("script");
            po.type = "text/javascript", po.async = !0, po.src = "//assets.pinterest.com/js/pinit.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s)
        }()
    }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function(){}), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function(){}), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function(){}), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function(){}), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function(){}), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function(){}), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function(){}), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function(){}), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function(){}), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
        return !1
    }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function(){}