(function($){
	$( function () {
		var all_networks_opened = 0;

		// fix the "on media" wrapper inside the Divi Gallery grid
		et_pb_fix_gallery_wrapper();

		$( 'body' ).on( 'click', '.et_social_share', function(){});

		$( '.et_social_follow' ).on('click', function(){});

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

		function scroll_trigger( this_el, is_bottom_trigger ) {
			var current_popup_bottom = this_el;
				if ( ! current_popup_bottom.hasClass( 'et_social_animated' ) ) {
					var	cookies_expire_bottom = current_popup_bottom.data( 'cookie_duration' ) ? current_popup_bottom.data( 'cookie_duration' ) : false;

					if ( true == is_bottom_trigger ) {
						var scroll_trigger = $( '.et_social_bottom_trigger' ).length ? $( '.et_social_bottom_trigger' ).offset().top : $( document ).height() - 500;
					} else {
						var scroll_pos = this_el.data( 'scroll_pos' ) > 100 ? 100 : this_el.data( 'scroll_pos' ),
							scroll_trigger = 100 == scroll_pos ? $( document ).height() - 10 : $( document ).height() * scroll_pos / 100;
					}

					$( window ).on('scroll', function(){});
				}
		}

		if( $( '.et_social_trigger_idle' ).length ) {
			$( '.et_social_trigger_idle' ).each( function(){});
		}

		// open close the mobile sideabr on header click
		$( '.et_social_heading, .et_social_mobile_button' ).on('click', function(){});

		//if close button clicked - hide the mobile sidebar from screen
		$( '.et_social_mobile .et_social_close' ).on('click', function(){});

		// Move inline icons into appropriate sections in Divi theme
		if( $( '.et_social_inline' ).length ) {
			if ( $( 'body' ).hasClass( 'et_pb_pagebuilder_layout' ) ) {
				var top_inline = $( '.et_social_inline_top' ),
					bottom_inline = $( '.et_social_inline_bottom' ),
					divi_container = '<div class="et_pb_row"><div class="et_pb_column et_pb_column_4_4"></div></div>';

				if ($('.et-l--post').first().length > 0) {
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

		function define_popup_position( $this_popup ) {
			setTimeout( function() { // make sure all css transitions are finished to calculate the heights correctly
				var this_popup = $this_popup,
					networks_div = this_popup.find( '.et_social_networks' ),
					header_height = this_popup.find( '.et_social_header' ).outerHeight() || 0,
					total_count_height = this_popup.find( '.et_social_totalcount' ).height(),
					extra_height = 0 < total_count_height ? 20 : 0;

				this_popup.height( this_popup.find( '.et_social_icons_container' ).innerHeight() + header_height + total_count_height + 20 + extra_height );

				var	popup_max_height = this_popup.hasClass( 'et_social_popup_content' ) ? $( window ).height() : $( window ).height() - 60;

				if ( this_popup.hasClass( 'et_social_popup_content' ) && 768 < $( window ).width() ) {
					popup_max_height = popup_max_height - 50;
				}

				this_popup.css( { 'max-height' : popup_max_height + 'px' } );

				if( this_popup.hasClass( 'et_social_popup_content' ) ) {
					var top_position = $( window ).height() / 2 - this_popup.innerHeight() / 2;
					this_popup.css( { 'top' : top_position + 'px' } );
				}

				var networks_div_height = this_popup.height() - header_height + total_count_height - extra_height;
				networks_div.height( networks_div_height );
			}, 400 );
		}

		function set_mobile_sidebar_height() {
			setTimeout( function() { // make sure all css transitions are finished to calculate the heights correctly
				var	mobile_div = $( '.et_social_mobile' );

				if ( !mobile_div.hasClass( 'et_social_opened' ) ){
					$('.et_social_mobile .et_social_networks').css({'display' : 'block'});
				}
				if( $('.et_social_active_button').length ) {
					mobile_div.css({'display' : 'block'});
				}

				var inner_contatiner_height = mobile_div.find( '.et_social_icons_container' ).innerHeight() + 45;

				if ( !mobile_div.hasClass( 'et_social_opened' ) ){
					$('.et_social_mobile .et_social_networks').css({'display' : 'none'});
				}
				if( $('.et_social_active_button').length ) {
					mobile_div.css({'display' : 'none'});
				}

				mobile_div.find( '.et_social_networks' ).css( { 'max-height' : inner_contatiner_height + 'px', 'height' : inner_contatiner_height + 'px' } );
				if ( $( window ).height() < inner_contatiner_height ) {
					var inner_height = $( window ).height() - mobile_div.find( '.et_social_heading' ).innerHeight() + 10;
					mobile_div.find( '.et_social_networks' ).css({ 'height' : inner_height + 'px' });
				}
			}, 400 );
		}

		function(){}

		function set_media_wrapper_size() {
			if ( $( '.et_social_media_wrapper' ).length ) {
				$( '.et_social_media_wrapper' ).each( function(){
					var this_wrapper = $( this ),
						this_wrapper_media = this_wrapper.find( '.et_social_media' ),
						this_image = this_wrapper.find( 'img' ),
						image_position = this_image.position(),
						image_left_offset = typeof image_position !== 'undefined' ? image_position.left : 0,
						this_image_height = this_image.height(),
						this_image_width = this_image.width(),
						this_wrapper_networks_height = this_wrapper.find( '.et_social_networks' ).innerHeight();

					this_wrapper.addClass( this_image.attr( 'class' ) );
					this_wrapper_media.css( { 'max-height' : this_image_height + 'px' } );
					this_wrapper_media.css( { 'height' : ( this_wrapper_networks_height + 50 ) + 'px' } );
					this_wrapper_media.width( this_image_width - 80 );

					// adjust the icons position based on image alignement
					if ( 0 !== image_left_offset ) {
						this_wrapper_media.css( { 'left' : ( image_left_offset + 20 ) + 'px' } );
					}
				});

				// fix the media wrapper sizes in Divi Gallery Slider if needed
				et_pb_fix_gallery_slider_icons_size();
			}
		}

		function(){}

		function et_pb_fix_gallery_slider_icons_size() {
			var $gallery_slider_icons = $( '.et_pb_gallery_fullwidth .et_social_media_wrapper' );

			if ( 0 > $gallery_slider_icons.length ) {
				return;
			}

			var $all_galleries = $( '.et_pb_gallery_fullwidth' );

			$all_galleries.each( function() {
				var $this_gallery = $( this );
				var $this_gallery_media = $this_gallery.find( '.et_social_media_wrapper .et_social_media' );

				if ( 0 > $this_gallery_media.length ) {
					return;
				}

				var $first_icon_wrapper = $this_gallery_media.first();
				var icons_width = $first_icon_wrapper.width();
				var icons_height = $first_icon_wrapper.css( 'height' );
				var icons_max_height = $first_icon_wrapper.css( 'max-height' );

				// use the dimensions from first slide and apply it to all the media icons in the slider
				$this_gallery_media.width( icons_width - 80 );
				$this_gallery_media.height( icons_height );
				$this_gallery_media.css( { 'max-height' : icons_max_height + 'px' } );
			});
		}

		$ ( 'body' ).on( 'click', '.et_social_open_all', function(){});

		set_mobile_sidebar_height();

		set_sidebar_position();

		$( window ).on( 'resize', () => {
			if ( $( '.et_social_resize' ).length ) {
				$( '.et_social_resize' ).each( function() {
					define_popup_position( $( this ) );
				});
			}
			if ( $('.et_social_mobile') ) {
				set_mobile_sidebar_height();
			}
			if( $( '.et_social_sidebar_networks' ).length ){
				set_sidebar_position();
			}

			set_media_wrapper_size();
		});

		$( '.et_social_hide_sidebar' ).on('click', function(){
			$( '.et_social_hide_sidebar' ).toggleClass( 'et_social_hidden_sidebar' );
			$( '.et_social_sidebar_networks' ).toggleClass( 'et_social_hidden_sidebar et_social_visible_sidebar' );
		});

		$( window ).on('load', function(){}