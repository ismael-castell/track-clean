/*jslint browser: true, white: true */
/*global console,jQuery,megamenu,window,navigator*/

/**
 * EDD Ajax Cart
 */
(function($) {
    "use strict";

    $(function(){});

    $(".max-mega-menu").on("after_mega_menu_init", function() {
        $('li.mega-menu-megamenu').on('open_panel', function() {
            // reset default
            var placeholder = $(this).closest(".mega-menu-megamenu").find(".widget_maxmegamenu_image_swap img.mega-placeholder");
            var default_src = placeholder.attr('data-default-src');
            placeholder.attr('src', default_src);

            // preload
            $('.mega-sub-menu [data-image-swap-url]', $(this) ).not(['data-preloaded']).each( function(){});
        });

        $('.mega-sub-menu [data-image-swap-url]').hoverIntent({
            over: function(){},
            out: function() {}
        });
    });

})(jQuery);

/**
 * Searchbox jQuery plugin
 */
(function(){})(jQuery);


/**
 * Searchbox jQuery plugin
 */
(function(){})(jQuery);

/**
 * Sticky jQuery Plugin
 */
(function($) {

    "use strict";

    $.maxmegamenu_sticky = function(menu, options) {
        var plugin = this;
        var $menu = $(menu);
        var $wrap = $menu.parent();
        var breakpoint = $menu.attr('data-breakpoint');
        var sticky_on_mobile = $menu.attr('data-sticky-mobile');
        var sticky_on_desktop = $menu.attr('data-sticky-desktop');
        var sticky_expand = $menu.attr('data-sticky-expand');
        var sticky_expand_mobile = $menu.attr('data-sticky-expand-mobile');
        var sticky_offset = isNaN(parseInt($menu.attr('data-sticky-offset'))) ? 0 : parseInt($menu.attr('data-sticky-offset'));
        var sticky_hide_until_scroll_up = $menu.attr('data-sticky-hide');
        var sticky_hide_until_scroll_up_tolerance = isNaN(parseInt($menu.attr('data-sticky-hide-tolerance'))) ? 0 : parseInt($menu.attr('data-sticky-hide-tolerance'));
        var sticky_hide_until_scroll_up_offset = isNaN(parseInt($menu.attr('data-sticky-hide-offset'))) ? 0 : parseInt($menu.attr('data-sticky-hide-offset'));
        var sticky_transition = $menu.attr('data-sticky-transition');
        var sticky_menu_offset_top;
        var sticky_menu_offset_left;
        var sticky_menu_width;
        var sticky_menu_width_round_up;
        var sticky_menu_height;
        var is_stuck = false;
        var admin_bar_height = 0;
        var last_scroll_top = 0;
        var saved_scroll_top = 0;
        var is_vertical = $menu.hasClass('mega-menu-vertical') || $menu.hasClass('mega-menu-accordion');

        plugin.isDesktopView = function() {
            return Math.max(window.outerWidth, $(window).width()) >= breakpoint; // account for scrollbars
        };

        var sticky_hide_until_scroll_up_enabled = function(){}

        var sticky_enabled = function(){};

        plugin.calculate_menu_position = function(){};

        plugin.stick_menu = function() {
            is_stuck = true;

            var total_offset = parseInt(admin_bar_height, 10) + parseInt(sticky_offset, 10);

            if (sticky_offset < 0) {
                total_offset = parseInt(admin_bar_height, 10);
            }

            var placeholder = $("<div />").addClass("mega-sticky-wrapper").css({
                'height' : sticky_menu_height + 'px',
                'position' :'static'
            });

            $wrap.addClass('mega-sticky').wrap(placeholder).css({
                'margin-top' : total_offset + 'px'
            });

            $("body").addClass($menu.attr("id") + "-mega-sticky");

            $menu.css({
                'max-width' : sticky_menu_width_round_up + 'px'
            });

            if (sticky_menu_offset_left > 0) {
                $menu.css({
                    'margin-left' : sticky_menu_offset_left + 'px'
                });
            }

            if (is_vertical || sticky_expand === 'false') {
                $wrap.css({
                    'margin-left' : '0',
                    'margin-right' : '0',
                    'width' : sticky_menu_width_round_up + 'px',
                    'left' : sticky_menu_offset_left + 'px'
                });

                $menu.css({
                    'margin-left' : '0'
                });
            }

            if ( $(window).width() <= breakpoint ) {
                $wrap.css({
                    'width' : sticky_menu_width_round_up + 'px'
                });

                if (sticky_expand_mobile === 'true') {
                   $wrap.css({
                        'margin-left' : '',
                        'margin-right' : '',
                        'width' : '',
                        'left' : ''
                    });

                    $menu.css({
                        'max-width' : '',
                        'margin-left' : '',
                        'width' : '',
                        'left' : ''
                    });
                }
            }

            $wrap.delay(0).queue(function(next){
                $(this).addClass('mega-stuck');
                next();
            });
        };

        plugin.unstick_menu = function(doing_resize) {
            doing_resize = doing_resize || false;
            is_stuck = false;
            
            $wrap.removeClass('mega-sticky').removeClass('mega-hide').css({
                'margin' : '',
                'width' : '',
                'left': ''
            });

            $("body").removeClass($menu.attr("id") + "-mega-sticky");

            if ( ! doing_resize ) { // this class is used for the height transition, do not remove it if we are simply resizing the window
                $wrap.delay(0).queue(function(){});
            }

            $menu.css({
                'margin-left' : '',
                'max-width' : '',
                'left' : '',
                'width' : ''
            });

            if (sticky_transition == 'true' && ! doing_resize ) {
                var delay = 250; // allows the transiton to complete before unwrapping the menu
            } else {
                var delay = 0;
            }

            $wrap.delay(delay).queue(function(){});
        };

        plugin.mega_sticky_on_scroll = function(){};

        var mega_hide_on_scroll_up = function() {
            if (sticky_hide_until_scroll_up_enabled()) {

                if ( $menu.data("view") === "mobile" && $('.mega-menu-toggle', $wrap).hasClass('mega-menu-open') ) {
                    return;
                }

                var scroll_top = $(window).scrollTop();
                
                if ( scroll_top < sticky_hide_until_scroll_up_offset ) {
                    $wrap.removeClass('mega-hide');
                    $("body").removeClass($menu.attr("id") + "-mega-hide");
                }
                
                saved_scroll_top = last_scroll_top;

                if (scroll_top < last_scroll_top) {
                    // scroll up
                    if (saved_scroll_top - scroll_top > sticky_hide_until_scroll_up_tolerance) {
                        $wrap.removeClass('mega-hide');
                        $("body").removeClass($menu.attr("id") + "-mega-hide");
                    }
                } else {
                    // scroll down
                    if (is_stuck && scroll_top - saved_scroll_top > sticky_hide_until_scroll_up_tolerance) {
                        $wrap.addClass('mega-hide');
                        $("body").addClass($menu.attr("id") + "-mega-hide");
                    }
                }

                last_scroll_top = scroll_top;
            }
        }

        plugin.mega_sticky_on_resize = function(){};

        plugin.init = function(){};

        plugin.init();
    };

    $.fn.maxmegamenu_sticky = function(options) {

        return this.each(function() {
            if (undefined === $(this).data('maxmegamenu_sticky')) {
                var plugin = new $.maxmegamenu_sticky(this, options);
                $(this).data('maxmegamenu_sticky', plugin);
            }
        });

    };

    $(window).on('load', function (e) {
        $(".mega-menu[data-sticky-enabled]").maxmegamenu_sticky();
    });

})(jQuery);

/**
 * Handle tabbed functionality
 */
(function($) {
    $(function() {

        var calculate_tabbed_sub_menu_widths = function(){}

        var calculate_tabbed_sub_menu_heights = function(){}

        var $window = $(window);

        var windowWidth = $window.width();

        $window.resize(function(){});

        $('li.mega-menu-tabbed, li.mega-menu-tabbed li.mega-collapse-children').on('open_panel', function() {
            var menu = $(this).parents('.max-mega-menu');
            var menu_item = $(this).closest(".mega-menu-tabbed");

            calculate_tabbed_sub_menu_widths( menu_item );

            $("> ul.mega-sub-menu", $(this)).promise().done(function(){ // wait until slide animation has completed
                calculate_tabbed_sub_menu_heights( menu_item );
            });

            if ( menu.data('view') == 'desktop' ) {
                if ($('> ul.mega-sub-menu > li.mega-menu-item-has-children.mega-toggle-on', menu_item).length == 0 ) {
                    

                    if ( $('> ul.mega-sub-menu > li.mega-current-menu-item:visible', menu_item).length ) {
                        $('> ul.mega-sub-menu > li.mega-current-menu-item:visible', menu_item).first().addClass('mega-toggle-on');
                    } else if ( $('> ul.mega-sub-menu > li.mega-current-menu-ancestor:visible', menu_item).length ) {
                        $('> ul.mega-sub-menu > li.mega-current-menu-ancestor:visible', menu_item).first().addClass('mega-toggle-on');
                    }
                    

                    if ($('> ul.mega-sub-menu > li.mega-toggle-on', menu_item).length == 0 ) {
                        $('> ul.mega-sub-menu > li.mega-menu-item-has-children:visible', menu_item).first().addClass('mega-toggle-on');
                    }
                }

                $('li.mega-menu-tabbed', menu).on('close_panel', function() {
                    $('li.mega-menu-tabbed .mega-toggle-on', menu).removeClass('mega-toggle-on');
                });
            }

            $('li.mega-menu-tabbed li.mega-collapse-children').on('close_panel', function(){}