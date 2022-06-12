jQuery( function( $ ) {
	var hash = window.location.hash;

	learndashFocusModeSidebarAutoScroll();

	initLoginModal();
	if ( '#login' == hash ) {
		openLoginModal();
	}

	if ( 'undefined' !== typeof ldGetUrlVars().login ) {
		var loginStatus = ldGetUrlVars().login;

		if ( 'failed' == loginStatus ) {
			openLoginModal();
		}
	}

	if ( 'undefined' !== typeof ldGetUrlVars()['ld-topic-page'] ) {
		var topicPage = ldGetUrlVars()['ld-topic-page'];
		var topicIds = topicPage.split( '-' );
		var topicId = Object.values( topicIds )[0];

		var lesson = $( '#ld-expand-' + topicId );
		var button = $( lesson ).find( '.ld-expand-button' );

		ld_expand_element( button );

		$( 'html, body' ).animate( {
			scrollTop: ( $( lesson ).offset().top ),
		}, 500 );
	}

	$( 'body' ).on( 'click', 'a[href="#login"]', function( e ) {
		e.preventDefault();
		openLoginModal();
	} );

	$( 'body' ).on( 'click', '.ld-modal-closer', function( e ) {
		e.preventDefault();
		closeLoginModal();
	} );

	$( 'body' ).on( 'click', '#ld-comments-post-button', function(){} );

	// Close modal if clicking away
	/*
	$('body').on('click', function(e) {
		if ($('.learndash-wrapper').hasClass('ld-modal-open')) {
			if ( ! $(e.target).parents('.ld-modal').length && (! $(e.target).is('a'))) {
				closeLoginModal();
			}
		}
	});
	*/

	// Close modal on Esc key
	$( document ).on( 'keyup', function(){} );

	$( '.learndash-wrapper' ).on( 'click', 'a.user_statistic', learndash_ld30_show_user_statistic );

	focusMobileCheck();

	$( 'body' ).on( 'click', '.ld-focus-sidebar-trigger', function(){} );

	$( 'body' ).on( 'click', '.ld-mobile-nav a', function(){} );

	$( '.ld-js-register-account' ).on( 'click', function(){} );

	var windowWidth = $( window ).width();

	$( window ).on( 'orientationchange', function() {
		windowWidth = $( window ).width();
	} );

	$( window ).on( 'resize', function() {
		if ( $( this ).width() !== windowWidth && 1024 >= $( this ).width() ) {
			setTimeout( function() {
				focusMobileResizeCheck();
			}, 50 );
		}
	} );

	if ( $( '.ld-course-status-content' ).length ) {
		var tallest = 0;

		$( '.ld-course-status-content' ).each( function() {
			if ( $( this ).height() > tallest ) {
				tallest = $( this ).height();
			}
		} );

		$( '.ld-course-status-content' ).height( tallest );
	}

	function(){}

	function(){}

	function focusMobileHandleOrientationChange( e ) {
		if ( e.matches ) {
			if ( 1024 <= $( window ).width() &&
			! $( '.ld-focus' ).hasClass( 'ld-focus-sidebar-filtered' ) &&
			$( '.ld-focus' ).hasClass( 'ld-focus-sidebar-collapsed' ) ) {
				openFocusSidebar();
			}
		}
	}
	window.matchMedia( '(orientation: landscape)' ).addListener( focusMobileHandleOrientationChange );

	function(){}

	function closeFocusSidebar() {
		$( '.ld-focus' ).addClass( 'ld-focus-sidebar-collapsed' );
		$( '.ld-mobile-nav' ).removeClass( 'expanded' );

		if ( $( '.ld-focus-sidebar-trigger .ld-icon' ).hasClass( 'ld-icon-arrow-left' ) ) {
			$( '.ld-focus-sidebar-trigger .ld-icon' ).removeClass( 'ld-icon-arrow-left' );
			$( '.ld-focus-sidebar-trigger .ld-icon' ).addClass( 'ld-icon-arrow-right' );
		} else if ( $( '.ld-focus-sidebar-trigger .ld-icon' ).hasClass( 'ld-icon-arrow-right' ) ) {
			$( '.ld-focus-sidebar-trigger .ld-icon' ).removeClass( 'ld-icon-arrow-right' );
			$( '.ld-focus-sidebar-trigger .ld-icon' ).addClass( 'ld-icon-arrow-left' );
		}

		positionTooltips();
	}

	function(){}

	$( '.ld-file-input' ).each( function() {
		var $input	 = $( this ),
			$label	 = $input.next( 'label' ),
			labelVal = $label.html();

		$input.on( 'change', function(){} );

		$( '#uploadfile_form' ).on( 'submit', function(){} );

		// Firefox bug fix
		$input
			.on( 'focus', function() {
				$input.addClass( 'has-focus' );
			} )
			.on( 'blur', function() {
				$input.removeClass( 'has-focus' );
			} );
	} );

	$( 'body' ).on( 'click', '.ld-expand-button', function(){} );

	$( 'body' ).on( 'click', '.ld-search-prompt', function(){} );

	function(){}

	function(){}

	function(){}

	function(){}

	$( 'body' ).on( 'click', '.ld-closer', function(){} );

	$( 'body' ).on( 'click', '.ld-tabs-navigation .ld-tab', function(){} );

	var $tooltips = $( '*[data-ld-tooltip]' );

	initTooltips();

	function initTooltips() {
		// Clear out old tooltips

		if ( $( '#learndash-tooltips' ).length ) {
			$( '#learndash-tooltips' ).remove();
			$tooltips = $( '*[data-ld-tooltip]' );
		}

		if ( $tooltips.length ) {
			$( 'body' ).prepend( '<div id="learndash-tooltips"></div>' );
			var $ctr = 1;
			$tooltips.each( function() {
				var anchor = $( this );
				if ( anchor.hasClass( 'ld-item-list-item' ) ) {
					anchor = anchor.find( '.ld-item-title' );
				}
				var elementOffsets = {
					top: anchor.offset().top,
					left: anchor.offset().left + ( anchor.outerWidth() / 2 ),
				};
				var $content = $( this ).attr( 'data-ld-tooltip' );
				var $rel_id = Math.floor( ( Math.random() * 99999 ) );

				//var $tooltip = '<span id="ld-tooltip-' + $rel_id + '" class="ld-tooltip" style="top:' + elementOffsets.top + 'px; left:' + elementOffsets.left + 'px;">' + $content + '</span>';
				var $tooltip = '<span id="ld-tooltip-' + $rel_id + '" class="ld-tooltip">' + $content + '</span>';
				$( this ).attr( 'data-ld-tooltip-id', $rel_id );
				$( '#learndash-tooltips' ).append( $tooltip );
				$ctr++;
				var $tooltip = $( '#ld-tooltip-' + $rel_id );
				$( this ).on( 'mouseenter', function() {
					$tooltip.addClass( 'ld-visible' );
				} ).on( 'mouseleave', function() {
					$tooltip.removeClass( 'ld-visible' );
				} );
			} );

			$( window ).on( 'resize', function() {
				// Reposition tooltips after resizing
				positionTooltips();
			} );

			$( window ).add( '.ld-focus-sidebar-wrapper' ).on( 'scroll', function() {
				// Hide tooltips so they don't persist while scrolling
				$( '.ld-visible.ld-tooltip' ).removeClass( 'ld-visible' );

				// Reposition tooltips after scrolling
				positionTooltips();
			} );

			positionTooltips();
		}
	}

	function(){}

	function(){}

	function(){}

	function(){}

	$( 'body' ).on( 'click', '#ld-profile .ld-reset-button', function( e ) {
		e.preventDefault();

		$( '#ld-profile #course_name_field' ).val('');

		var searchVars = {
			shortcode_instance: $( '#ld-profile' ).data( 'shortcode_instance' ),
		};

		searchVars['ld-profile-search'] = $( this ).parents( '.ld-item-search-wrapper' ).find( '#course_name_field' ).val();
		searchVars['ld-profile-search-nonce'] = $( this ).parents( '.ld-item-search-wrapper' ).find( 'form.ld-item-search-fields' ).data( 'nonce' );

		$( '#ld-profile #ld-main-course-list' ).addClass( 'ld-loading' );

		$.ajax( {
			type: 'GET',
			url: ldVars.ajaxurl + '?action=ld30_ajax_profile_search',
			data: searchVars,
			success: function( response ) {
				if ( 'undefined' !== typeof response.data.markup ) {
					$( '#ld-profile' ).html( response.data.markup );
					ld_expand_element( '#ld-profile .ld-search-prompt', false );
				}
			},
		} );
	} );

	$( 'body' ).on( 'submit', '.ld-item-search-fields', function( e ) {
		e.preventDefault();

		var searchVars = {
			shortcode_instance: $( '#ld-profile' ).data( 'shortcode_instance' ),
		};

		searchVars['ld-profile-search'] = $( this ).parents( '.ld-item-search-wrapper' ).find( '#course_name_field' ).val();
		searchVars['ld-profile-search-nonce'] = $( this ).parents( '.ld-item-search-wrapper' ).find( 'form.ld-item-search-fields' ).data( 'nonce' );

		$( '#ld-profile #ld-main-course-list' ).addClass( 'ld-loading' );

		$.ajax( {
			type: 'GET',
			url: ldVars.ajaxurl + '?action=ld30_ajax_profile_search',
			data: searchVars,
			success: function( response ) {
				if ( 'undefined' !== typeof response.data.markup ) {
					$( '#ld-profile' ).html( response.data.markup );
					ld_expand_element( '#ld-profile .ld-search-prompt', false );
				}
			},
		} );
	} );

	$( 'body' ).on( 'click', '.ld-pagination a', function(){} );

	if ( $( '#learndash_timer' ).length ) {
		var timer_el 		= jQuery( '#learndash_timer' );
		var timer_seconds 	= timer_el.attr( 'data-timer-seconds' );
		var timer_button_el = jQuery( timer_el.attr( 'data-button' ) );

		var cookie_key = timer_el.attr( 'data-cookie-key' );

		if ( 'undefined' !== typeof cookie_key ) {
			var cookie_name = 'learndash_timer_cookie_' + cookie_key;
		} else {
			var cookie_name = 'learndash_timer_cookie';
		}

		cookie_timer_seconds = jQuery.cookie( cookie_name );

		if ( 'undefined' !== typeof cookie_timer_seconds ) {
			timer_seconds = parseInt( cookie_timer_seconds );
		}

		if ( 0 == timer_seconds ) {
			$( timer_el ).hide();
		}

		$( timer_button_el ).on( 'learndash-time-finished', function() {
			$( timer_el ).hide();
		} );
	}

	$( document ).on( 'learndash_video_disable_assets', function( event, status ) {
		if ( 'undefined' === typeof learndash_video_data ) {
			return false;
		}

		if ( 'BEFORE' == learndash_video_data.videos_shown ) {
			if ( true == status ) {
				$( '.ld-lesson-topic-list' ).hide();
				$( '.ld-lesson-navigation' ).find( '#ld-nav-content-list-' + ldVars.postID ).addClass( 'user_has_no_access' );
				$( '.ld-quiz-list' ).hide();
			} else {
				$( '.ld-lesson-topic-list' ).slideDown();
				$( '.ld-quiz-list' ).slideDown();
				$( '.ld-lesson-navigation' ).find( '#ld-nav-content-list-' + ldVars.postID ).removeClass( 'user_has_no_access' );
			}
		}
	} );

	$( '.learndash-wrapper' ).on( 'click', '.wpProQuiz_questionListItem input[type="radio"]', function(){} );

	$( '.learndash-wrapper' ).on( 'click', '.wpProQuiz_questionListItem input[type="checkbox"]', function(){} );

	function learndash_ld30_show_user_statistic( e ) {
		e.preventDefault();

		var refId 				= 	jQuery( this ).data( 'ref-id' );
		var quizId 				= 	jQuery( this ).data( 'quiz-id' );
		var userId 				= 	jQuery( this ).data( 'user-id' );
		var statistic_nonce 	= 	jQuery( this ).data( 'statistic-nonce' );
		var post_data = {
			action: 'wp_pro_quiz_admin_ajax_statistic_load_user',
			func: 'statisticLoadUser',
			data: {
				quizId: quizId,
				userId: userId,
				refId: refId,
				statistic_nonce: statistic_nonce,
				avg: 0,
			},
		};

		jQuery( '#wpProQuiz_user_overlay, #wpProQuiz_loadUserData' ).show();
		var content = jQuery( '#wpProQuiz_user_content' ).hide();

		//console.log('- learndash.js');

		jQuery.ajax( {
			type: 'POST',
			url: ldVars.ajaxurl,
			dataType: 'json',
			cache: false,
			data: post_data,
			error: function( jqXHR, textStatus, errorThrown ) {
			},
			success: function( reply_data ) {
				if ( 'undefined' !== typeof reply_data.html ) {
					content.html( reply_data.html );
					jQuery( '#wpProQuiz_user_content' ).show();

					//console.log('trigger event change - learndash.js');
					jQuery( 'body' ).trigger( 'learndash-statistics-contentchanged' );

					jQuery( '#wpProQuiz_loadUserData' ).hide();

					content.find( '.statistic_data' ).on( 'click', function(){} );
				}
			},
		} );

		jQuery( '#wpProQuiz_overlay_close' ).on( 'click', function() {
			jQuery( '#wpProQuiz_user_overlay' ).hide();
		} );
	}

	function(){}

	/**
	 * Will scroll the position of the Focus Mode sidebar
	 * to the active step.
	 */
	function(){}
} );

function(){}