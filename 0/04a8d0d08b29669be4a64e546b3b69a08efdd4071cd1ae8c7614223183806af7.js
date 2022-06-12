( function(){}( jQuery ) );

( function( $ ) {
	'use strict';

	window.jetMenu = {

		addedScripts: {},

		addedStyles: {},

		addedAssetsPromises: [],

		initedMobileMenuInstance: [],

		eventBus: new Vue(),

		$body: $( 'body' ),

		init: function() {
			this.initDesktopMenu();
			this.mobileVueComponents();
			this.initMobileMenu();
		},

		initDesktopMenu: function(){},

		initMobileMenu: function(){},

		createMobileMenuInstance: function(){},

		mobileVueComponents: function() {

			Vue.component( 'mobilemenuitem', {
				template: '#mobile-menu-item-template',

				props: {
					itemDataObject: Object,
					depth: Number,
					menuOptions: Object
				},

				data: function() {
					return ( {
						ajaxRequest: null,
						templateLoadStatus: false,
					} )
				},

				computed: {

					itemClasses: function(){},

					isСhildrenDefine: function() {
						return this.itemDataObject.children ? true : false;
					},

					isTemplateDefine: function(){},

					isSub: function() {
						return this.isСhildrenDefine || this.isTemplateDefine ? true : false;
					},

					isTopLevel: function() {
						return 0 === this.depth ? true : false;
					},

					depthClass: function() {
						return 0 === this.depth ? 'mobile-top-level-link' : 'mobile-sub-level-link';
					},

					dropdownIconHtml: function() {
						return '' !== this.menuOptions.dropdownIcon ? this.menuOptions.dropdownIcon : '<i class="fas fa-angle-right"></i>';
					},

					itemIconHtml: function() {
						return this.itemDataObject.itemIcon;
					},

					isIconVisible: function() {
						let iconVisible = this.menuOptions['itemIconVisible'] || 'true';

						return 'false' === iconVisible || '' === this.itemDataObject.itemIcon || ! this.itemDataObject.itemIcon ? false : true;
					},

					isBadgeVisible: function() {
						let badgeVisible = this.menuOptions['itemBadgeVisible'] || 'true';

						return 'false' === badgeVisible || '' === this.itemDataObject.badgeText || ! this.itemDataObject.badgeText ? false : true;
					},

					isDescVisible: function(){},

					loaderColor: function() {
						return this.menuOptions.loaderColor || '#3a3a3a';
					},
				},

				methods: {
					itemSubHandler: function(){},

					maskerSubHandler: function(){},

					switchToSub: function( event ) {

						if ( ! this.isSub ) {
							return;
						}

						if ( ! this.isTemplateDefine ) {

							jetMenu.eventBus.$emit( 'itemsSubSwitch', {
								menuUniqId: this.menuOptions.menuUniqId,
								id: this.itemDataObject.id,
								name: this.itemDataObject.name,
								children: this.itemDataObject.children || false
							} );

						} else {

							if ( ! this.itemDataObject.elementorContent ) {
								this.getElementorTemplate();
							} else {

								jetMenu.eventBus.$emit( 'showTemplateContent', {
									menuUniqId: this.menuOptions.menuUniqId,
									id: this.itemDataObject.id,
									name: this.itemDataObject.name,
									elementorContent: this.itemDataObject.elementorContent
								} );
							}
						}
					},

					getElementorTemplate: function(){}
				}

			});

			Vue.component( 'mobilemenulist', {
				template: '#mobile-menu-list-template',

				props: {
					depth: Number,
					childrenObject: Object,
					menuOptions: Object
				}

			});

			Vue.component( 'mobilemenu', {
				template: '#mobile-menu-template',

				props: {
					menuOptions: {
						type: Object,
						default: {}
					},
				},

				data: function(){},

				mounted: function() {
					let vueInstance = this;

					if ( this.menuOpen ) {
						jetMenu.$body.addClass( 'jet-mobile-menu-visible' );
					}

					this.ajaxPromises.push(
						new Promise( function(){} )
					);

					if ( 0 !== +this.headerTemplate ) {
						this.ajaxPromises.push(
							new Promise( function( resolve, reject ) {
								$.ajax( {
									type: 'GET',
									url: window.jetMenuPublicSettings.templateApiUrl,
									dataType: 'json',
									data: {
										'id': vueInstance.headerTemplate,
										'dev': window.jetMenuPublicSettings.devMode
									},
									success: function(){}
								} );
							} )
						);
					}

					if ( 0 !== +this.beforeTemplate ) {
						this.ajaxPromises.push(
							new Promise( function( resolve, reject ) {
								$.ajax( {
									type: 'GET',
									url: window.jetMenuPublicSettings.templateApiUrl,
									dataType: 'json',
									data: {
										'id': vueInstance.beforeTemplate,
										'dev': window.jetMenuPublicSettings.devMode
									},
									success: function( responce, textStatus, jqXHR ) {
										let templateContent = responce['template_content'],
											templateScripts = responce['template_scripts'],
											templateStyles  = responce['template_styles'];

										for ( let scriptHandler in templateScripts ) {
											jetMenu.addedAssetsPromises.push( jetMenu.loadScriptAsync( scriptHandler, templateScripts[ scriptHandler ] ) );
										}

										for ( let styleHandler in templateStyles ) {
											jetMenu.addedAssetsPromises.push( jetMenu.loadStyle( styleHandler, templateStyles[ styleHandler ] ) );
										}

										vueInstance.beforeContent = templateContent;

										resolve();
									}
								} );
							} )
						);
					}

					if ( 0 !== +this.afterTemplate ) {
						this.ajaxPromises.push(
							new Promise( function( resolve, reject ) {
								$.ajax( {
									type: 'GET',
									url: window.jetMenuPublicSettings.templateApiUrl,
									dataType: 'json',
									data: {
										'id': vueInstance.afterTemplate,
										'dev': window.jetMenuPublicSettings.devMode
									},
									success: function(){}
								} );
							} )
						);
					}

					this.instanceLoadStatus = true;

					Promise.all( this.ajaxPromises ).then( function() {
						vueInstance.instanceLoadStatus = false;
					}, function( reason ) {
						console.log( 'Script Loaded Error' );
					} );

					jetMenu.eventBus.$on( 'itemsSubSwitch', function(){} );

					jetMenu.eventBus.$on( 'showTemplateContent', function(){} );

				},

				computed: {
					instanceClass: function(){},

					menuId: function(){},

					coverVisible: function() {

						let avaliableForLayout = [
							'slide-out'
						];

						return avaliableForLayout.includes( this.menuOptions.menuLayout );
					},

					itemsList: function(){},

					isClose: function(){},

					isBack: function(){},

					isBreadcrumbs: function(){},

					depth: function() {
						return this.trail.length;
					},

					containerPosition: function() {
						return this.menuOptions['menuPosition'];
					},

					showAnimation: function(){},

					toggleClosedIcon: function() {
						return '' !== this.menuOptions.toggleClosedIcon ? this.menuOptions.toggleClosedIcon : '<i class="fas fa-bars"></i>';
					},

					toggleOpenedIcon: function() {
						return '' !== this.menuOptions.toggleOpenedIcon ? this.menuOptions.toggleOpenedIcon : '<i class="fas fa-times"></i>';
					},

					toggleText: function() {
						return '' !== this.menuOptions.toggleText ? this.menuOptions.toggleText : false;
					},

					closeIcon: function() {
						return '' !== this.menuOptions.closeIcon ? this.menuOptions.closeIcon : '<i class="fas fa-times"></i>';
					},

					backIcon: function(){},

					backText: function() {
						return '' !== this.menuOptions.backText ? this.menuOptions.backText : false;
					},

					breadcrumbIcon: function(){},

					loaderColor: function() {
						return this.menuOptions.loaderColor || '#3a3a3a';
					},

					toggleLoaderVisible: function(){},

					beforeTemplateVisible: function() {
						return this.beforeContent ? true : false;
					},

					afterTemplateVisible: function() {
						return this.afterContent ? true : false;
					}

				},

				watch: {
					menuOpen: function(){}
				},

				methods: {
					menuToggle: function() {
						this.menuOpen = ! this.menuOpen;
					},

					closeMenu: function() {
						this.menuOpen = false;
					},

					clearStates: function(){},

					goBack: function(){},

					showTemplateContent: function(){},

					initTemplatesContent: function(){},

					breadcrumbHandle: function(){}

				}
			});
		},

		loadScriptAsync: function(){},

		loadStyle: function(){},

		elementorContentRender: function(){},

		elementorFrontendInit: function(){}