/**
 * Process ads with cache busting 'On'
 */
var advanced_ads_layer_cache_busting;
if ( ! advanced_ads_layer_cache_busting ) {
	advanced_ads_layer_cache_busting = {
        doc_loaded: false,
        bufferedAds: [],

        flush: function(){},

        _process_item: function( banner ) {
            var banner_id = banner.attr('id');

            advads_items.conditions[banner_id] = advads_items.conditions[banner_id] || {};

            advads_layer_center_if_not_sticky ( banner )

            if (banner.hasClass('advads-effect') ) {
                advads_layer_gather_effects(banner_id);
            }

            if ( ! banner.hasClass( 'use-fancybox' ) ) {
                advads_layer_gather_background( banner_id );
            }

            advads_layer_gather_auto_close( banner );

            // display onload ad right away
            if (banner.hasClass(advanced_ads_layer_settings.layer_class + '-onload')) {
                advads_items.conditions[banner_id].scrolloffset = true;
                advads_check_item_conditions(banner_id);
            // exit popup (if the user leaves the page) 
            } else if (banner.hasClass(advanced_ads_layer_settings.layer_class + '-exit')) {
                    ouibounce(banner[0], {
                    // the modal will fire any time the page is reloaded, for the same user
                    aggressive: true,
                    // amount of time that firing is surpressed for
                    timer: 0,
                    callback: function(){}
                });
            // display after delay of n seconds
            } else if ( banner.hasClass( advanced_ads_layer_settings.layer_class + '-delay' ) ) {
                var delay = ( parseInt( banner.attr( 'data-advads-layer-delay' ), 10 ) ) || 0;
                setTimeout( function(){}, delay );
            // ad depends on scrolling
            }  else {
                // calculate scroll length (document height - window height)
                var advads_scrollhalf = (jQuery(document).height() - jQuery(window).height()) / 2;

                var scroll_handler = function ( event ) {
                    if ( jQuery.inArray( banner_id, advads_items.showed ) !== -1 ) {
                        //console.log( 'off scroll event' )
                        jQuery( window ).off( 'scroll', scroll_handler );
                        return;
                    }

                    // display scroll ads right after scrolling stopped
                    if ( banner.hasClass( advanced_ads_layer_settings.layer_class + '-stop' ) ) {
                        advads_items.conditions[banner_id].scrolloffset = true;
                        advads_check_item_conditions( banner_id );
                    }

                    // display ads after half the page was scrolled
                    if ( jQuery( document ).scrollTop() >= advads_scrollhalf) {
                        if ( banner.hasClass( advanced_ads_layer_settings.layer_class + '-half' ) ) {
                            advads_items.conditions[banner_id].scrolloffset = true;
                            advads_check_item_conditions(banner_id);
                        }
                    }

                    // display ads after custom scroll offset
                    if ( banner.hasClass( advanced_ads_layer_settings.layer_class + '-offset' ) ) {
                        var custom_offset = advads_extract_custom_offset_from_class( '#' + banner_id );
                        if ( jQuery( document ).scrollTop() >= custom_offset ) {
                            advads_items.conditions[banner_id].scrolloffset = true;
                            advads_check_item_conditions( banner_id );
                        }
                    }
                }


                jQuery( window ).onEnd( 'scroll', scroll_handler, 100);
            }

        },

        observe: function(){},
	}
}

// Advanced Ads Pro is enabled
if ( typeof advanced_ads_pro === 'object' && advanced_ads_pro !== null ) {
	// observe cache busting done event
    advanced_ads_pro.postscribeObservers.add( advanced_ads_layer_cache_busting.observe );
}

/**
 * Process ads with cache busting 'Off'
 */
var layers = function() {
    advanced_ads_layer_cache_busting.doc_loaded = true;

    jQuery('.' + advanced_ads_layer_settings.layer_class).each(function () {
        advanced_ads_layer_cache_busting.bufferedAds.push(jQuery(this));
    });

    advanced_ads_layer_cache_busting.flush();
};

if (typeof advads !== 'undefined' && typeof advads.privacy.dispatch_event !== 'undefined') {
    document.addEventListener('advanced_ads_privacy', function (event) {
        if (
            event.detail.previousState === 'unknown'
            && (event.detail.state === 'accepted' || event.detail.state === 'not_needed')
            && window.advanced_ads_layer_settings.placements !== null
        ) {
            window.advanced_ads_layer_settings.placements.forEach(function(){});
        }

        layers();
    });
} else {
    ( window.advanced_ads_ready || jQuery( document ).ready ).call( null, function() {
        layers();
    });
}

/**
 * adjust position for centered layer banner if not added by the sticky plugin
 * @param {string} $ad jQuery object (wrapped set)
 */
function advads_layer_center_if_not_sticky( $ad ) {
	if ($ad.hasClass('is-sticky')) {
		return;
	}
	/*
	var left = ( jQuery( window ).width() - ad.width() ) / 2;
	var top = ( jQuery( window ).height() - ad.height() ) / 2;
	ad.css('left', left);
	ad.css('top', top);
	ad.css('position', 'fixed'); 
	*/

	var width = parseInt($ad.attr('data-width'), 10);
	var height = parseInt($ad.attr('data-height'), 10);


	var is_transform_supported = getSupportedTransform();

	var transform_property = '';
	if (!height) {
		if (is_transform_supported) {
			transform_property += 'translateY(50%) ';
		} else {
			jQuery($ad).css({'top': '0', 'bottom': 'auto'});
		}
	}
	if (!width) {
		if (is_transform_supported) {
			transform_property += 'translateX(-50%) ';
		} else {
			jQuery($ad).css({'left': '0', 'right': 'auto'});
		}

	}
	if (transform_property) {
		set_ad_transform($ad, transform_property);
	}
}

/**
 * gather information about display effects and duration
 * @param {string} id of the ad, without #
 */
function(){}

/**
 * gather information about background
 * @param {string} id of the ad, without #
 */
function(){}

/**
 * Gather auto close info and schedule auto close.
 *
 * @param {obj} $banner A jQuery object representing the banner wrapper.
 */
function(){}

/**
 * check if background can be removed
 *
 * @param {string} id id of the ad, without #
 * @returns {bool} true, if background can be removed
 */
function(){}

/**
 * check item conditions and display the ad if all conditions are true
 *
 * @param {string} id id of the ad, without #
 * @returns {bool} true, if item can be displayed
 */
function advads_check_item_conditions(id) {
    var item = jQuery('#' + id);
    if (item.length == 0) {
        return;
    }

    var display = true;
    jQuery.each(advads_items.conditions[id], function(){});

    if ( display ) {
        advads_items.showed.push(id);
		
		item.trigger( advanced_ads_layer_settings.layer_class + '-trigger' );
		
        if ( item.hasClass('use-fancybox') ) {
            fancybox_display (id);
        } else {
            var ad = jQuery('#' + id);

            var position = jQuery(ad).attr('data-position');
            var width = parseInt( ad.attr( 'data-width' ), 10 );
            var height = parseInt( ad.attr( 'data-height' ), 10 );
            var is_transform_supported = getSupportedTransform();


            switch ( position ) {
                case 'topcenter': 
                    if ( ! width ) {
                        if ( is_transform_supported ) {
                            set_ad_transform(ad, 'translateX(-50%)');
                        } else {
                            jQuery( ad ).css({ 'left':'0', 'right':'auto', 'top':'0', 'bottom':'auto' });                              
                        }
                    }
                    break; 
                case 'centerleft': 
                    if ( ! height ) {
                        if ( is_transform_supported ) {
                            set_ad_transform(ad, 'translateY(50%)');                            
                        } else {
                            jQuery( ad ).css({ 'left':'0', 'right':'auto', 'top':'0', 'bottom':'auto' });                               
                        }
                    }
                    break;  
                case 'center': 
                    var transform_property = '';
                    if ( ! height ) {
                        if ( is_transform_supported ) {
                            transform_property += 'translateY(50%) ';
                        } else {
                            jQuery( ad ).css({ 'top':'0', 'bottom':'auto' });                              
                        }
                    }
                    if ( ! width ) {
                        if ( is_transform_supported ) {
                            transform_property += 'translateX(-50%) ';
                        } else {
                            jQuery( ad ).css({ 'left':'0', 'right':'auto' });                              
                        }

                    }
                    if (transform_property) {
                        set_ad_transform(ad, transform_property);   
                    }
                    break;
                case 'centerright': 
                    if ( ! height ) {
                        if ( is_transform_supported ) {
                            set_ad_transform(ad, 'translateY(50%)');
                        } else {
                            jQuery( ad ).css({ 'left':'0', 'right':'auto', 'top':'0', 'bottom':'auto' });                              
                        }

                    }
                    break; 
                case 'bottomcenter': 
                    if ( ! width ) {
                        if ( is_transform_supported ) {
                            set_ad_transform(ad, 'translateX(-50%)');
                        } else {
                            jQuery( ad ).css({ 'left':'0', 'right':'auto', 'top':'0', 'bottom':'auto' });                              
                        }

                    }
                    break;
            }

            advads_layer_call_display_callbacks( id );

            if (advads_items.display_effect_callbacks[id] == undefined) {
                ad.show();
            } else {
                var callback = window[advads_items.display_effect_callbacks[id]];
                callback(id);
            }         
        }       
    }
}

/**
 * shows the ad using fancybox plugin
 *
 * @param {string} id id of the ad, without #
 */
function fancybox_display(id) {
    var banner = jQuery('#' + id);

    var settings = {
        'speedIn'            : 0,
        'speedOut'           : 0,
        'showCloseButton'    : true,
        'hideOnOverlayClick' : banner.hasClass( 'advads-background-click-close' ),
        'centerOnScroll'      : true,
        //'autoScale' : false,
        //'autoDimensions' : false,
        'margin' : 20,
        'padding' : 10,
        'onClosed': function(){},        
		// Once the content is displayed.
		'onComplete': function() {
			advads_layer_call_display_callbacks( id );
		},
    }

    if (advads_items.display_effect_callbacks[id] == undefined) {
        settings['transitionIn'] = 'none';
    } else {
        var callback = advads_items.display_effect_callbacks[id];
        switch ( callback ) {
            case 'advads_display_effect_fadein': 
                settings['transitionIn'] = 'fade'; 
                break;
            case 'advads_display_effect_show': 
                settings['transitionIn'] = 'elastic'; 
                break;            
            default: 
                settings['transitionIn'] = 'none';
        }
    }

    if ( ! banner.hasClass('advads-has-background') ) {
        settings['overlayShow'] = false;
    }

    if ( ! banner.hasClass('advads-close') ) {
        settings['showCloseButton'] = false;
    }    
    // extract duration of the transitionIn effect
    var speedIn = advads_extract_duration_from_class(banner);
    settings['speedIn'] = ( speedIn ) ? speedIn : 0;

    var position = jQuery(banner).attr('data-position');
    // css for Fancybox
    var output_css = '#fancybox-close { right: -15px; }';
    output_css += '#fancybox-loading, #fancybox-loading div, #fancybox-overlay, #fancybox-wrap, #fancybox-wrap div {';
    output_css += '-webkit-box-sizing: content-box !important; -moz-box-sizing: content-box !important; box-sizing: content-box !important; }';    

    switch ( position ) {
        case 'topleft': 
            output_css += '#fancybox-wrap { position: fixed; bottom: auto !important; top: 0px !important; right: auto !important; left: 0px !important; }';
            break;  
        case 'topcenter': 
            output_css += '#fancybox-wrap { position: fixed; bottom: auto !important; top: 0px !important; }';
            break; 
        case 'topright': 
            output_css += '#fancybox-wrap { position: fixed; bottom: auto !important; top: 0px !important; right: 0px !important; left: auto !important; }';
            break;
        case 'centerleft': 
            output_css += '#fancybox-wrap { left: 0px !important; right: auto !important; }';
            break;    
        case 'center': 
            break;  
        case 'centerright': 
            output_css += '#fancybox-wrap { right: 0px !important; left: auto !important; }';
            break;    
        case 'bottomleft': 
            output_css += '#fancybox-wrap { position: fixed; bottom: 0px !important; top: auto !important; right: auto !important; left: 0px !important; }';
            break;                                                                                   
        case 'bottomcenter': 
            output_css += '#fancybox-wrap { position: fixed; bottom: 0px !important; top: auto !important; }';
            break;
        case 'bottomright': 
            output_css += '#fancybox-wrap { position: fixed; bottom: 0px !important; top: auto !important; right: 0px !important; left: auto !important; }';
            break;
    }  
        

    jQuery('#' + advanced_ads_layer_settings.layer_class + '-custom-css').html(output_css);

    // show fancybox
    if ( typeof jQuery.fancybox == 'function' ) {
        banner.waitForImages( function(){});
    }
}

/**
 * Call display callbacks.
 *
 * @param {string} banner_id id of the banner, without #
 */
function(){}

/**
 * return a custom offset extracted from a class name
 * @param {str} field
 * @returns {int} offset
 */
function advads_extract_custom_offset_from_class(field) {
    var offset = 0;
    var classes = jQuery(field).attr('class');
    if (classes !== undefined) {
        // create class array
        classes = classes.split(/\s+/);
        jQuery.each(classes, function (key, value) {
            if (value === '')
                return false;
            // get information about the solution from a class
            var pattern = new RegExp(advanced_ads_layer_settings.layer_class + '-offset-', 'gi');
            if (value.match(pattern)) {
                infos = value.split('-');
                offset = parseInt(infos[3])
                return false;
            }
        });
    }

    return offset;
};

/**
 * return a duration extracted from a class name
 * @param {str} field
 * @returns {int} offset
 */
function(){};

/**
 * callback function in case a layer ad is displayed with a background
 * @param {type} ad object
 */
function(){}

/**
 * callback for display effect fadeIn
 * @param {obj} ad container
 */
function(){}

/**
 * callback for display effect show
 * @param {obj} ad container
 */
function advads_display_effect_show(id) {
    var banner = jQuery('#' + id);
    var duration = parseInt(advads_items.effect_durations[id]);
    banner.show(duration);
}

/**
 * callback for display effect slideDown
 * @link http://api.jquery.com/slideDown/
 * @param {obj} ad container
 */
function advads_display_effect_slide(id) {
    var banner = jQuery('#' + id);
    var duration = parseInt(advads_items.effect_durations[id]);
    banner.slideDown(duration);
}

/**
 * check, if css transform is supported by user's browser
 * 
 * [http://stackoverflow.com/a/12625986]
 */
function(){}

/**
 * set css transform property for the ad
 * @param {string} jQuery object (wrapped set)
 * @param {string} values of property
 */
function(){}

/**
 * Close item (when user clicks on the close button/background or automatically after n sec.).
 *
 * @param {string} item_id Id of the item.
 */
function(){}

/**
 * Close all items.
 */
function(){}

//https://github.com/tonai/jquery-onend
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(){});

/*!
 * Ouibounce
 * https://github.com/carlsednaoui/ouibounce
 *
 * Copyright (c) 2014 Carl Sednaoui
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 **/
!function(e,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):e.ouibounce=n()}(this,function(){});

/*! waitForImages jQuery Plugin 2015-06-02 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(){}