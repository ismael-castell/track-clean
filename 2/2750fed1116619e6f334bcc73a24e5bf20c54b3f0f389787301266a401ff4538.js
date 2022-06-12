( function( $, elementorFrontend ) {

	'use strict';

	var JetPopup = {

		init: function(){},

		elementorWidget: function(){},

		widgetPopupActionButton: function( $scope ) {
			var $button    = $( '.jet-popup-action-button__instance', $scope ),
				settings   = $button.data( 'settings' ),
				actionType = settings['action-type'];

			switch ( actionType ) {

				case 'link':

					$button.on( 'click.JetPopup', function( event ) {
						event.preventDefault();

						var $currentPopup = $button.closest( '.jet-popup ' ),
							link          = $( this ).attr( 'href' ),
							target        = $( this ).attr( 'target' ),
							popupId       = $currentPopup.attr( 'id' );

						$( window ).trigger( {
							type: 'jet-popup-close-trigger',
							popupData: {
								popupId: popupId,
								constantly: false
							}
						} );

						if ( '_blank' === target  ) {
							window.open( link, '_blank' );
						} else {
							window.open( link );
						}

						return false;
					} );
				break;

				case 'leave':
					$button.on( 'click.JetPopup', function( event ) {
						event.preventDefault();

						window.history.back();
					} );
				break;

				case 'close-popup':
					$button.on( 'click.JetPopup', function( event ) {
						event.preventDefault();

						var $currentPopup = $button.closest( '.jet-popup ' ),
							popupId = $currentPopup.attr( 'id' );

						$( window ).trigger( {
							type: 'jet-popup-close-trigger',
							popupData: {
								popupId: popupId,
								constantly: false
							}
						} );
					} );
				break;

				case 'close-all-popups':
					$button.on( 'click.JetPopup', function( event ) {
						event.preventDefault();

						var $popups = $( '.jet-popup' );

						if ( $popups[0] ) {
							$popups.each( function( index ) {
								var $popup  = $( this ),
									popupId = $popup.attr( 'id' );

								$( window ).trigger( {
									type: 'jet-popup-close-trigger',
									popupData: {
										popupId: popupId,
										constantly: false
									}
								} );
							} );
						}
					} );
				break;

				case 'close-constantly':
					$button.on( 'click.JetPopup', function(){} );
				break;

				case 'close-all-constantly':
					$button.on( 'click.JetPopup', function(){} );
				break;
			}
		},

		widgetPopupMailchimp: function(){}
	};

	/**
	 * [jetPopup description]
	 * @param  {[type]} $popup   [description]
	 * @param  {[type]} settings [description]
	 * @return {[type]}          [description]
	 */
	window.jetPopup = function( $popup, settings ) {
		var self                   = this,
			$window                = $( window ),
			$document              = $( document ),
			popupSettings          = settings,
			id                     = popupSettings['id'],
			popupId                = popupSettings['jet-popup-id'],
			popupsLocalStorageData = {},
			editMode               = Boolean( elementorFrontend.isEditMode() ),
			isAnimation            = false,
			isOpen                 = false,
			ajaxGetContentHanler   = null,
			ajaxContentLoaded      = false;

		self.init = function() {

			var popupAvailable = self.popupAvailableCheck();

			if ( ! popupAvailable || editMode ) {
				return false;
			}

			self.setLocalStorageData( popupId, 'enable' );

			self.initCompatibilityHandler();

			self.initOpenEvent();

			self.initCloseEvent();

			$window.trigger( 'jet-popup/init/after', {
				self: self,
				settings: popupSettings
			} );
		};

		/**
		 * [popupAvailableCheck description]
		 * @return {[type]} [description]
		 */
		self.popupAvailableCheck = function(){};

		/**
		 * [initOpenEvent description]
		 * @return {[type]} [description]
		 */
		self.initOpenEvent = function() {

			$window.trigger( 'jet-popup/init-events/before', {
				self: self,
				settings: popupSettings
			} );

			switch ( popupSettings['open-trigger'] ) {
				case 'page-load':
					self.pageLoadEvent( popupSettings['page-load-delay'] );
				break;

				case 'user-inactive':
					self.userInactiveEvent( popupSettings['user-inactivity-time'] );
				break;

				case 'scroll-trigger':
					self.scrollPageEvent( popupSettings['scrolled-to'] );
				break;

				case 'try-exit-trigger':
					self.tryExitEvent();
				break;

				case 'on-date':
					self.onDateEvent( popupSettings['on-date'] );
				break;

				case 'on-time':
					self.onTimeEvent( popupSettings['on-time-start'], popupSettings['on-time-end'] );
				break;

				case 'custom-selector':
					self.onCustomSelector( popupSettings['custom-selector'] );
				break;
			}

			$window.on( 'jet-popup-open-trigger', function(){});

			$window.on( 'jet-popup-close-trigger', function(){});

			$window.trigger( 'jet-popup/init-events/after', {
				self: self,
				settings: popupSettings
			} );
		};

		/**
		 * [initCloseEvent description]
		 * @return {[type]} [description]
		 */
		self.initCloseEvent = function(){};

		/**
		 * [initCompatibilityHandler description]
		 * @return {[type]} [description]
		 */
		self.initCompatibilityHandler = function(){};

		/**
		 * Page on load event
		 *
		 * @param  {int} openDelay Open delay time.
		 * @return {void}
		 */
		self.pageLoadEvent = function(){};

		/**
		 * User Inactivity event
		 *
		 * @param  {int} inactiveDelay [description]
		 * @return {void}
		 */
		self.userInactiveEvent = function(){};

		/**
		 * Scrolling Page Event
		 *
		 * @param  {int} scrollingValue Scrolling porgress value
		 * @return {void}
		 */
		self.scrollPageEvent = function(){};

		/**
		 * Viewport leave event
		 *
		 * @return {void}
		 */
		self.tryExitEvent = function(){};

		/**
		 * onDateEvent Event
		 *
		 * @return {void}
		 */
		self.onDateEvent = function(){}

		self.onTimeEvent = function(){}

		/**
		 * [onCustomSelector description]
		 * @param  {[type]} selector [description]
		 * @return {[type]}          [description]
		 */
		self.onCustomSelector = function( selector ) {
			let $selector = $( selector );

			if ( $selector[0] ) {
				$( 'body' ).on( 'click', selector, function( event ) {
					event.preventDefault();

					self.showPopup();
				} );
			}
		}

		/**
		 * Show Popup
		 *
		 * @return {void}
		 */
		self.showPopup = function( data ) {
			var popupData              = data || {},
				animeOverlay           = null,
				animeContainer         = null,
				animeOverlaySettings   = jQuery.extend(
					{
						targets: $( '.jet-popup__overlay', $popup )[0]
					},
					self.avaliableEffects[ 'fade' ][ 'show' ]
				);

			if ( ! self.popupAvailableCheck() || editMode ) {
				return false;
			}

			animeOverlay = anime( animeOverlaySettings );

			$popup.toggleClass( 'jet-popup--hide-state jet-popup--show-state' );

			if ( popupSettings['prevent-scrolling'] ) {
				$( 'body' ).addClass( 'jet-popup-prevent-scroll' );
			}

			self.showContainer( popupData );
		};

		/**
		 * [showContainer description]
		 * @return {[type]} [description]
		 */
		self.showContainer = function( data ) {
			var popupData        = data || {},
				popupDefaultData = {
					forceLoad: popupSettings['force-ajax'] || false, // Trigger Ajax Every Time
					customContent: '' // Show Popup with Custom Content
				},
				animeContainerInstance   = null,
				$popupContainer  = $( '.jet-popup__container', $popup ),
				$content         = $( '.jet-popup__container-content', $popup ),
				animeContainer   = jQuery.extend(
					{
						targets: $( '.jet-popup__container', $popup )[0],
						begin: function( anime ) {
							isAnimation = true;

							$window.trigger( 'jet-popup/show-event/before-show', {
								self: self,
								data: popupData,
								anime: anime
							} );
						},
						complete: function(){}
					},
					self.avaliableEffects[ popupSettings['animation'] ][ 'show' ]
				);

			popupData = jQuery.extend( popupDefaultData, popupData );

			// init Custom popup content
			if ( '' !== popupData.customContent ) {
				$content.html( popupData.customContent );
				self.elementorFrontendInit();

				// Show Popup Container
				animeContainerInstance = anime( animeContainer );

				$window.trigger( 'jet-popup/render-content/render-custom-content', {
					self: self,
					popup_id: id,
					data: popupData,
				} );

				return false;
			}

			if ( ! popupSettings['use-ajax'] ) {
				// Show Popup Container
				animeContainerInstance = anime( animeContainer );

				$window.trigger( 'jet-popup/render-content/render-custom-content', {
					self: self,
					popup_id: id,
					data: popupData,
				} );

				return false;
			}

			if ( popupData.forceLoad ) {
				ajaxContentLoaded = false;
			}

			if ( ajaxContentLoaded ) {

				// Show Popup Container
				animeContainerInstance = anime( animeContainer );

				$window.trigger( 'jet-popup/render-content/show-content', {
					self: self,
					popup_id: id,
					data: popupData,
				} );

				return false;
			}

			popupData = jQuery.extend( popupData, {
				'popup_id': id
			} );

			ajaxGetContentHanler = jQuery.ajax( {
				type: 'POST',
				url: window.jetPopupData.ajax_url,
				data: {
					'action': 'jet_popup_get_content',
					'data': popupData
				},
				beforeSend: function(){},
				error: function( jqXHR, ajaxSettings ) {},
				success: function(){}
			} );
		};

		/**
		 * Hide Popup
		 *
		 * @return {void}
		 */
		self.hidePopup = function ( data ) {
			var popupData              = data || {},
				$content               = $( '.jet-popup__container-content', $popup ),
				constantly             = popupData.constantly || false,
				animeOverlay           = null,
				animeContainer         = null,
				animeOverlaySettings   = jQuery.extend( { targets: $( '.jet-popup__overlay', $popup )[0] }, self.avaliableEffects[ 'fade' ][ 'hide' ] ),
				animeContainerSettings = jQuery.extend(
					{
						targets: $( '.jet-popup__container', $popup )[0],
						begin: function(){},
						complete: function( anime ) {
							isAnimation = false;
							isOpen = false;
							$popup.toggleClass( 'jet-popup--show-state jet-popup--hide-state' );

							if ( popupSettings['use-ajax'] && popupSettings['force-ajax'] ) {
								$content.html( '' );
							}

							if ( popupSettings['prevent-scrolling'] && !$( '.jet-popup--show-state' )[0] ) {
								$( 'body' ).removeClass( 'jet-popup-prevent-scroll' );
							}

							// After Popup Hide Action
							$window.trigger( 'jet-popup/hide-event/after-hide', {
								self: self,
								data: popupData,
								anime: anime
							} );
						}
					},
					self.avaliableEffects[ popupSettings['animation'] ][ 'hide' ]
				);

			if ( constantly ) {
				self.setLocalStorageData( popupId, 'disable' );
			}

			if ( isAnimation ){
				return false;
			}

			if ( $popup.hasClass('jet-popup--show-state') ) {
				animeOverlay = anime( animeOverlaySettings );
				animeContainer = anime( animeContainerSettings );
			}

			// On Hide Handler
			self.onHidePopupAction();

			// Before Popup Hide Action
			$window.trigger( 'jet-popup/close-hide-event/before-hide', {
				self: self,
				data: popupData
			} );
		};

		/**
		 * [elementorFrontendInit description]
		 * @return {[type]} [description]
		 */
		self.elementorFrontendInit = function(){}

		/**
		 * [onShowPopupAction description]
		 * @return {[type]} [description]
		 */
		self.onShowPopupAction = function() {};

		/**
		 * [onHidePopupAction description]
		 * @return {[type]} [description]
		 */
		self.onHidePopupAction = function() {};

		/**
		 * Avaliable Effects
		 */
		self.avaliableEffects = {
			'fade' : {
				'show': {
					opacity: {
						value: [ 0, 1 ],
						duration: 600,
						easing: 'easeOutQuart',
					},
				},
				'hide': {
					easing: 'easeOutQuart',
					opacity: {
						value: [ 1, 0 ],
						easing: 'easeOutQuart',
						duration: 400,
					},
				}
			},

			'zoom-in' : {
				'show': {
					duration: 500,
					easing: 'easeOutQuart',
					opacity: {
						value: [ 0, 1 ],

					},
					scale: {
						value: [ 0.75, 1 ],
					}
				},
				'hide': {
					duration: 400,
					easing: 'easeOutQuart',
					opacity: {
						value: [ 1, 0 ],
					},
					scale: {
						value: [ 1, 0.75 ],
					}
				}
			},

			'zoom-out' : {
				'show': {
					duration: 500,
					easing: 'easeOutQuart',
					opacity: {
						value: [ 0, 1 ],

					},
					scale: {
						value: [ 1.25, 1 ],
					}
				},
				'hide': {
					duration: 400,
					easing: 'easeOutQuart',
					opacity: {
						value: [ 1, 0 ],
					},
					scale: {
						value: [ 1, 1.25 ],
					}
				}
			},

			'rotate' : {
				'show': {
					duration: 500,
					easing: 'easeOutQuart',
					opacity: {
						value: [ 0, 1 ],

					},
					scale: {
						value: [ 0.75, 1 ],
					},
					rotate: {
						value: [ -65, 0 ],
					}
				},
				'hide': {
					duration: 400,
					easing: 'easeOutQuart',
					opacity: {
						value: [ 1, 0 ],
					},
					scale: {
						value: [ 1, 0.9 ],
					},
				}
			},

			'move-up' : {
				'show': {
					duration: 500,
					easing: 'easeOutExpo',
					opacity: {
						value: [ 0, 1 ],

					},
					translateY: {
						value: [ 50, 1 ],
					}
				},
				'hide': {
					duration: 400,
					easing: 'easeOutQuart',
					opacity: {
						value: [ 1, 0 ],
					},
					translateY: {
						value: [ 1, 50 ],
					}
				}
			},

			'flip-x' : {
				'show': {
					duration: 500,
					easing: 'easeOutExpo',
					opacity: {
						value: [ 0, 1 ],

					},
					rotateX: {
						value: [ 65, 0 ],
					}
				},
				'hide': {
					duration: 400,
					easing: 'easeOutQuart',
					opacity: {
						value: [ 1, 0 ],
					}
				}
			},

			'flip-y' : {
				'show': {
					duration: 500,
					easing: 'easeOutExpo',
					opacity: {
						value: [ 0, 1 ],

					},
					rotateY: {
						value: [ 65, 0 ],
					}
				},
				'hide': {
					duration: 400,
					easing: 'easeOutQuart',
					opacity: {
						value: [ 1, 0 ],
					}
				}
			},

			'bounce-in' : {
				'show': {
					opacity: {
						value: [ 0, 1 ],
						duration: 500,
						easing: 'easeOutQuart',
					},
					scale: {
						value: [ 0.2, 1 ],
						duration: 800,
						elasticity: function(el, i, l) {
							return (400 + i * 200);
						},
					}
				},
				'hide': {
					duration: 400,
					easing: 'easeOutQuart',
					opacity: {
						value: [ 1, 0 ],
					},
					scale: {
						value: [ 1, 0.8 ],
					}
				}
			},

			'bounce-out' : {
				'show': {
					opacity: {
						value: [ 0, 1 ],
						duration: 500,
						easing: 'easeOutQuart',
					},
					scale: {
						value: [ 1.8, 1 ],
						duration: 800,
						elasticity: function(){},
					}
				},
				'hide': {
					duration: 400,
					easing: 'easeOutQuart',
					opacity: {
						value: [ 1, 0 ],
					},
					scale: {
						value: [ 1, 1.5 ],
					}
				}
			},

			'slide-in-up' : {
				'show': {
					opacity: {
						value: [ 0, 1 ],
						duration: 400,
						easing: 'easeOutQuart',
					},
					translateY: {
						value: ['100vh', 0],
						duration: 750,
						easing: 'easeOutQuart',
					}
				},
				'hide': {
					duration: 400,
					easing: 'easeInQuart',
					opacity: {
						value: [ 1, 0 ],
					},
					translateY: {
						value: [0,'100vh'],
					}
				}
			},

			'slide-in-right' : {
				'show': {
					opacity: {
						value: [ 0, 1 ],
						duration: 400,
						easing: 'easeOutQuart',
					},
					translateX: {
						value: ['100vw', 0],
						duration: 750,
						easing: 'easeOutQuart',
					}
				},
				'hide': {
					duration: 400,
					easing: 'easeInQuart',
					opacity: {
						value: [ 1, 0 ],
					},
					translateX: {
						value: [0,'100vw'],
					}
				}
			},

			'slide-in-down' : {
				'show': {
					opacity: {
						value: [ 0, 1 ],
						duration: 400,
						easing: 'easeOutQuart',
					},
					translateY: {
						value: ['-100vh', 0],
						duration: 750,
						easing: 'easeOutQuart',
					}
				},
				'hide': {
					duration: 400,
					easing: 'easeInQuart',
					opacity: {
						value: [ 1, 0 ],
					},
					translateY: {
						value: [0,'-100vh'],
					}
				}
			},

			'slide-in-left' : {
				'show': {
					opacity: {
						value: [ 0, 1 ],
						duration: 400,
						easing: 'easeOutQuart',
					},
					translateX: {
						value: ['-100vw', 0],
						duration: 750,
						easing: 'easeOutQuart',
					}
				},
				'hide': {
					duration: 400,
					easing: 'easeInQuart',
					opacity: {
						value: [ 1, 0 ],
					},
					translateX: {
						value: [0,'-100vw'],
					}
				}
			}

		};

		/**
		 * Get localStorage data.
		 *
		 * @return {object|boolean}
		 */
		self.getLocalStorageData = function(){};

		/**
		 * Set localStorage data.
		 *
		 * @return {object|boolean}
		 */
		self.setLocalStorageData = function(){}