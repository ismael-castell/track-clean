/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2021 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function($) {
        "function" != typeof window.vc_js && (window.vc_js = function() {
            /* nectar addition */
        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function(){}), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
            0 < jQuery(".wpb_googleplus").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
            0 < jQuery(".wpb_pinterest").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function(){}), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function(){}), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function(){}), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function(){}), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function(){}), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function(){}), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function(){}), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function(){}), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function(){}), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function(){}), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function(){}), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
        }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        });
        var screen_size = getSizeName();

        function(){}
        "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(){}), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function(){}), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function(){}), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function(){}), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function(){}), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function(){}), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function(){}), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function(){}), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function(){}), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function(){}), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function(){}), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function(){}