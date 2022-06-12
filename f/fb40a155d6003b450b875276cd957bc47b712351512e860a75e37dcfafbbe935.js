( function( $ ) {
	'use strict';

	var JetMenuPlugin = function( element, options ) {

		this.defaultSettings = {
			enabled: false,
			mouseLeaveDelay: 500,
			openSubType: 'click', // hover, click
			ajaxLoad: true,
			megaWidthType: 'container',
			megaWidthSelector: '',
			mainMenuSelector: '.jet-menu',
			menuItemSelector: '.jet-menu-item',
			moreMenuContent:  '&middot;&middot;&middot;',
			rollUpDelta: 0,
		}

		this.settings = $.extend( this.defaultSettings, options );

		this.$window = $( window );

		this.$document = $( document );

		this.$element = $( element );

		this.$instance = $( this.settings.mainMenuSelector, this.$element );

		this.$menuItems = $( '>' + this.settings.menuItemSelector, this.$instance );

		this.menuItemsData = this.$menuItems.toArray().map( ( item ) => {
			return {
				element: item,
				outerWidth: $( item ).outerWidth( true ) + this.settings.rollUpDelta,
			}
		} );

		this.$moreItemsInstance = null;

		this.hiddenItemsArray = [];

		this.createMenuInstance();

		this.$instance.trigger( 'jetMenuCreated' );

		return this;
	}

	JetMenuPlugin.prototype = {
		constructor: JetMenuPlugin,

		self: this,

		createMenuInstance: function(){},

		/**
		 * SubMenu items Handler.
		 *
		 * @return {void}
		 */
		subMenuHandler: function(){},

		maybeTemplateLoad: function(){},

		/**
		 * Responsive menu watcher function.
		 *
		 * @param  {number} Watcher debounce delay.
		 * @return {void}
		 */
		watch: function(){},

		/**
		 * Responsive menu watcher callback.
		 *
		 * @param  {Object} Resize or Orientationchange event.
		 * @return {void}
		 */
		watcher: function(){},

		/**
		 * Responsive Menu rebuilding function.
		 *
		 * @return {void}
		 */
		rebuildItems: function(){},

		/*rebuildItems() {

			if ( ! this.settings.enabled ) {
				return false;
			}

			var self                       = this,
				mainMenuWidth              = this.$instance.width(),
				iterationVisibleItemsWidth = 0,
				visibleItemsArray          = [],
				hiddenItemsArray           = [];

			$( '> .jet-sub-menu', self.$moreItemsInstance ).empty();

			for ( let menuItem of self.menuItemsData ) {
				let element = menuItem.element;

				iterationVisibleItemsWidth += menuItem.outerWidth;

				if ( iterationVisibleItemsWidth > mainMenuWidth ) {
					element.hidden = true;
					hiddenItemsArray.push( element );
				} else {
					element.hidden = false;
					visibleItemsArray.push( element );
				}
			}

			for ( let hiddenMenuItem of hiddenItemsArray ) {
				let $hiddenClone = $( hiddenMenuItem ).clone();

				$hiddenClone[0].hidden = false;

				// Remove sub-mega-menu content
				$( '.jet-sub-mega-menu', $hiddenClone ).remove();
				$( '> .top-level-link', $hiddenClone ).toggleClass( 'top-level-link sub-level-link' );
				$hiddenClone.addClass( 'jet-sub-menu-item' );
				$( '> .jet-sub-menu', self.$moreItemsInstance ).append( $hiddenClone );
			}

			this.$moreItemsInstance[0].hidden = hiddenItemsArray.length ? false : true;

			this.$instance.trigger( 'rebuildItems' );
		},*/

		/**
		 * Sub Menu rebuilding function.
		 *
		 * @return {void}
		 */
		subMenuRebuild: function(){},

		/**
		 * Sub Mega Menu rebuilding function.
		 *
		 * @return {void}
		 */
		subMegaMenuRebuild: function(){},

		/**
		 * Get visible items total width
		 *
		 * @return {int}
		 */
		getVisibleItemsWidth: function(){},

		/**
		 * Mobile and tablet check funcion.
		 *
		 * @return {boolean} Mobile Status
		 */
		mobileAndTabletcheck: function() {
			var check = false;

			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);

			return check;
		},

		/**
		 * Debounce the function call
		 *
		 * @param  {number}   threshold The delay.
		 * @param  {Function} callback  The function.
		 */
		debounce: function(){}
	}

	/*
	 * Js tools
	 */
	var tools = {
		isEmpty: function(){},

		isEmptyObject: function(){},

		isString: function(){},

		isArray: function( value ) {
			return $.isArray( value );
		},

		inArray: function( value, array ) {
			return ( $.inArray( value, array ) !== -1);
		}
	};

	/*
	 * Jq tools
	 */
	$.fn.hasAttr = function(){};

	// jQuery plugin
	$.fn.JetMenuPlugin = function(){};

}( jQuery ) );

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

		mobileVueComponents: function(){},

		loadScriptAsync: function(){},

		loadStyle: function(){},

		elementorContentRender: function( $templateContainer, templateContent ) {
			let content = templateContent || false;

			Promise.all( jetMenu.addedAssetsPromises ).then( function( value ) {

				if ( templateContent ) {
					$templateContainer.html( templateContent );
				}

				// Before ajax frontend init
				$( window ).trigger( 'jet-menu/ajax/frontend-init/before', {
					$container: $templateContainer,
					content: content,
				} );

				jetMenu.elementorFrontendInit( $templateContainer );

				// Before ajax frontend init
				$( window ).trigger( 'jet-menu/ajax/frontend-init/after', {
					$container: $templateContainer,
					content: content,
				} );
			}, function( reason ) {
				console.log( 'Script Loaded Error' );
			});
		},

		elementorFrontendInit: function(){}