function vc_js() {
  /* nectar addition */ 
   /*
    vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_googleplus(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), 
    vc_google_fonts(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500) */
     /* nectar addition end */ 
}
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function(){}), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
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
    }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function(){}), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function(){}), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function(){}), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function(){}), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function(){}), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function(){}), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function(){}), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function(){}), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function(){}), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
        return !1
    }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function(){}), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
        jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
    }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
        for (var find = !1, i = 1; !1 === find;) {
            if (el.hasClass("columns_count_" + i)) return find = !0, i;
            i++
        }
    });
var screen_size = getSizeName();

function(){}

function(){}

function(){}

function(){}

function(){}

function(){}

function(){}

function(){}

function(){}
if ("function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
        var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
            $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
            $round_charts = panel.find(".vc_round-chart"),
            $line_charts = panel.find(".vc_line-chart"),
            $carousel = panel.find('[data-ride="vc_carousel"]');
        if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                reload: !1
            }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
            var $frame = $google_maps.find("iframe");
            $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
        }
        panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
            jQuery(this).isotope("layout")
        })
    }), "function" != typeof window.vc_googleMapsPointer)
function(){}

function(){}

function(){}

function(){}