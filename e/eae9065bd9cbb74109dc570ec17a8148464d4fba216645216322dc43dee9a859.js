jQuery.lazyLoadXT.updateEvent = 'load orientationchange resize scroll touchmove focus click customlazyloadxtevent';
jQuery.lazyLoadXT.edgeY = a3_lazyload_extend_params.edgeY;
jQuery.lazyLoadXT.srcsetExtended = false;
if ( typeof a3_lazyload_extend_params.horizontal_container_classnames !== 'undefined' && '' !== a3_lazyload_extend_params.horizontal_container_classnames ) {
	jQuery.lazyLoadXT.scrollContainer = a3_lazyload_extend_params.horizontal_container_classnames;
}

jQuery( document ).ready( function(){});

jQuery(window).on('ajaxComplete', function(){}