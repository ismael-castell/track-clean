(function($){
	$(document).ready(function() {
		var all_networks_opened = 0;

		// fix the "on media" wrapper inside the Divi Gallery grid
		et_pb_fix_gallery_wrapper();

		$( 'body' ).on( 'click', '.et_social_share', function(){});

		$( '.et_social_follow' ).click( function(){});

		$( 'body' ).on( 'click', '.et_social_share_pinterest', function(){});

		function(){}

		function(){}

		function(){}

		function(){}

		function(){}

		function(){}

		if ( $( '.et_social_display_follow_counts' ).length ) {
			$( '.et_social_display_follow_counts' ).each( function(){
				append_follow_counts( $( this) );
			});
		}

		if ( $( '.et_social_follow_total' ).length ) {
			$( '.et_social_follow_total' ).each( function(){
				append_total_follows( $( this) );
			});
		}


		if ( $( '.et_social_total_share' ).length ) {
			$( '.et_social_total_share' ).each( function(){
				append_total_shares( $( this) );
			});
		}

		if ( $( '.et_social_display_count' ).length ) {
			$( '.et_social_display_count' ).each( function(){
				append_share_counts( $( this) );
			});
		}

		if ( $( '.et_social_media_wrapper' ).length && $( '.et_social_media_wrapper .et_social_totalcount' ).length ) {

			$( '.et_social_media_wrapper' ).each( function() {
				 update_total_media_shares( $( this ) );
			});
		}

		if ( $( '.et_social_media_wrapper' ).length && $( '.et_social_media_wrapper .et_social_withcounts' ).length ) {

				$( '.et_social_media_wrapper .et_social_share' ).each( function(){});
		}

		function(){}

		function(){}

		function(){}

		function(){}

		function(){}

		function(){}

		//separate function for the setTimeout to make it work properly within the loop.
		function(){}

		function(){}

		if ( 'true' == get_url_parameter( 'et_monarch_popup' ) ) {
			$( '.et_social_after_comment' ).each( function(){});
		}

		 if( $( '.et_social_auto_popup' ).length ) {
			$( '.et_social_auto_popup' ).each( function(){});
		 }

		$( '.et_social_pinterest_window .et_social_close' ).on( 'click', function(){
			$( '.et_social_pin_images_outer' ).fadeToggle( 400 );
		});

		$ ( 'body' ).on( 'click', '.et_social_icon_cancel', function(){});

		if ( $( '.et_monarch_after_order' ).length ) {
			$( '.et_social_after_purchase' ).each( function(){} );
		}

		if( $( '.et_social_trigger_bottom' ).length ) {

			$( '.et_social_trigger_bottom' ).each(function(){
				scroll_trigger( $( this ), true );
			});

		}

		if( $( '.et_social_scroll' ).length ) {

			$( '.et_social_scroll' ).each(function(){
				scroll_trigger( $( this ), false );
			});

		}

		function(){}

		if( $( '.et_social_trigger_idle' ).length ) {
			$( '.et_social_trigger_idle' ).each( function(){});
		}

		// open close the mobile sideabr on header click
		$( '.et_social_heading, .et_social_mobile_button' ).click( function(){});

		//if close button clicked - hide the mobile sidebar from screen
		$( '.et_social_mobile .et_social_close' ).click( function(){});

		// Move inline icons into appropriate sections in Divi theme
		if( $( '.et_social_inline' ).length ) {
			if ( $( 'body' ).hasClass( 'et_pb_pagebuilder_layout' ) ) {
				var top_inline = $( '.et_social_inline_top' ),
					bottom_inline = $( '.et_social_inline_bottom' ),
					divi_container = '<div class="et_pb_row"><div class="et_pb_column et_pb_column_4_4"></div></div>';

				if ($('.et-l--post:first').length > 0) {
					var $sections = $('.et-l--post .et_pb_section').not('.et_pb_fullwidth_section');
				} else {
					// Backwards compatibility before .et-l was introduced.
					var $sections = $('.et_pb_section:not(.et-l .et_pb_section)').not('.et_pb_fullwidth_section');
				}

				if ($sections.length > 0 && top_inline.length) {
					$sections.first().prepend(divi_container).find('.et_pb_row').first().find('.et_pb_column').append(top_inline);
				}

				if ($sections.length > 0 && bottom_inline.length) {
					$sections.last().append(divi_container).find('.et_pb_row').last().find('.et_pb_column').append(bottom_inline);
				}
			}
		}

		function(){}

		function(){}

		function(){}

		function(){}

		function(){}

		function(){}

		$ ( 'body' ).on( 'click', '.et_social_open_all', function(){});

		set_mobile_sidebar_height();

		set_sidebar_position();

		$( window ).resize( function(){});

		$( '.et_social_hide_sidebar' ).click( function(){
			$( '.et_social_hide_sidebar' ).toggleClass( 'et_social_hidden_sidebar' );
			$( '.et_social_sidebar_networks' ).toggleClass( 'et_social_hidden_sidebar et_social_visible_sidebar' );
		});

		$( window ).load( function(){}