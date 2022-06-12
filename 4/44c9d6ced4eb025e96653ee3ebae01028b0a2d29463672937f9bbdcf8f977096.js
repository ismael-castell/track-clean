/*jslint browser: true, white: true, this: true, long: true */
/*global console,jQuery,megamenu,window,navigator*/

/*! Max Mega Menu jQuery Plugin */
(function ( $ ) {
    "use strict";

    $.maxmegamenu = function(menu, options) {
        var plugin = this;
        var $menu = $(menu);
        var $toggle_bar = $menu.siblings(".mega-menu-toggle");
        var html_body_class_timeout;

        var defaults = {
            event: $menu.attr("data-event"),
            effect: $menu.attr("data-effect"),
            effect_speed: parseInt($menu.attr("data-effect-speed")),
            effect_mobile: $menu.attr("data-effect-mobile"),
            effect_speed_mobile: parseInt($menu.attr("data-effect-speed-mobile")),
            panel_width: $menu.attr("data-panel-width"),
            panel_inner_width: $menu.attr("data-panel-inner-width"),
            mobile_force_width: $menu.attr("data-mobile-force-width"),
            mobile_overlay: $menu.attr("data-mobile-overlay"),
            mobile_state: $menu.attr("data-mobile-state"),
            second_click: $menu.attr("data-second-click"),
            vertical_behaviour: $menu.attr("data-vertical-behaviour"),
            document_click: $menu.attr("data-document-click"),
            breakpoint: $menu.attr("data-breakpoint"),
            unbind_events: $menu.attr("data-unbind"),
            hover_intent_timeout: $menu.attr("data-hover-intent-timeout"),
            hover_intent_interval: $menu.attr("data-hover-intent-interval")
        };

        plugin.settings = {};

        var items_with_submenus = $("li.mega-menu-megamenu.mega-menu-item-has-children," +
                                    "li.mega-menu-flyout.mega-menu-item-has-children," +
                                    "li.mega-menu-tabbed > ul.mega-sub-menu > li.mega-menu-item-has-children," +
                                    "li.mega-menu-flyout li.mega-menu-item-has-children", menu);

        var collapse_children_parents = $("li.mega-menu-megamenu li.mega-menu-item-has-children.mega-collapse-children > a.mega-menu-link", menu);

        plugin.addAnimatingClass = function(){};

        plugin.hideAllPanels = function(){};

        plugin.expandMobileSubMenus = function(){}

        plugin.hideSiblingPanels = function(){};

        plugin.isDesktopView = function(){};

        plugin.isMobileView = function() {
            return !plugin.isDesktopView();
        };

        plugin.showPanel = function(){};
        
        plugin.hidePanel = function(){};

        plugin.calculateDynamicSubmenuWidths = function(){};

        plugin.bindClickEvents = function() {
            var dragging = false;

            $(document).on({
                "touchmove": function(e) { dragging = true; },
                "touchstart": function(e) { dragging = false; }
            });

            $(document).on("click touchend", function(){});

            var clickable_parents = $("> a.mega-menu-link", items_with_submenus).add(collapse_children_parents);

            clickable_parents.on("touchend.megamenu", function(e) {
                plugin.unbindHoverEvents();
                plugin.unbindHoverIntentEvents();
            });

            clickable_parents.not("[data-has-click-event]").on("click.megamenu", function(){});

            collapse_children_parents.each(function() {
                $(this).attr("data-has-click-event", "true");
            });

            if ( plugin.settings.second_click === "disabled" ) {
                clickable_parents.off("click.megamenu");
            }

            $(".mega-close-after-click:not(.mega-menu-item-has-children) > a.mega-menu-link", menu).on("click", function() {
                plugin.hideAllPanels();
                plugin.hideMobileMenu();
            });
        };

        plugin.bindHoverEvents = function(){};

        plugin.bindHoverIntentEvents = function(){};

        plugin.bindKeyboardEvents = function(){};

        plugin.unbindAllEvents = function(){};

        plugin.unbindClickEvents = function(){};

        plugin.unbindHoverEvents = function() {
            items_with_submenus.unbind("mouseenter.megamenu mouseleave.megamenu");
        };

        plugin.unbindHoverIntentEvents = function() {
            items_with_submenus.unbind("mouseenter mouseleave").removeProp("hoverIntent_t").removeProp("hoverIntent_s"); // hoverintent does not allow namespaced events
        };

        plugin.unbindKeyboardEvents = function() {
            $menu.parent().off("keyup.megamenu keydown.megamenu focusout.megamenu");
        };

        plugin.unbindMegaMenuEvents = function(){};

        plugin.bindMegaMenuEvents = function(){};

        plugin.checkWidth = function(){};

        plugin.reverseRightAlignedItems = function() {
            if ( ! $("body").hasClass("rtl") && $menu.hasClass("mega-menu-horizontal") ) {
                $menu.append($menu.children("li.mega-item-align-right").get().reverse());
            }
        };

        plugin.addClearClassesToMobileItems = function(){};

        plugin.initDesktop = function(){};

        plugin.switchToDesktop = function(){};

        plugin.initMobile = function() {
            plugin.switchToMobile();
        };

        plugin.switchToMobile = function(){};

        plugin.initToggleBar = function(){};

        plugin.initIndicators = function(){}

        plugin.hideMobileMenu = function(){};

        plugin.showMobileMenu = function() {
            if ( ! $toggle_bar.is(":visible")) {
                return;
            }

            clearTimeout(html_body_class_timeout);

            $("body").addClass($menu.attr("id") + "-mobile-open");

            plugin.expandMobileSubMenus();

            if ( plugin.settings.effect_mobile === "slide_left" || plugin.settings.effect_mobile === "slide_right" ) {
                $("html").addClass($menu.attr("id") + "-off-canvas-open");
            }

            $(".mega-toggle-label, .mega-toggle-animated", $toggle_bar).attr("aria-expanded", "true");

            plugin.toggleBarForceWidth();

            if (plugin.settings.effect_mobile === "slide") {
                $menu.animate({"height":"show"}, plugin.settings.effect_speed_mobile);
            }

            $toggle_bar.addClass("mega-menu-open");

            $menu.triggerHandler("mmm:showMobileMenu");
        };

        plugin.toggleBarForceWidth = function(){};

        plugin.init = function(){};

        plugin.init();
    };

    $.fn.maxmegamenu = function(){}