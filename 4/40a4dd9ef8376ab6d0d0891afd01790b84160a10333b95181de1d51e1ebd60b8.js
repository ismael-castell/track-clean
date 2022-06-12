/* ======================================================================================================================================================
Avia Slideshow
====================================================================================================================================================== */

(function($)
{
    "use strict";

	$.AviaSlider  =  function(){};

	$.AviaSlider.defaults  = {


		//interval between autorotation switches
		interval:5,

		//autorotation active or not
		autoplay:false,
		
		//set if the loop will stop at the last/first slide or if the slides will loop infinite
		//set to false for infinite loop, "last" to stop at the last slide or "first" to stop at the first slide
		stopinfiniteloop: false,

		//fade or slide animation
		animation:'slide',

		//transition speed when switching slide
		transitionSpeed:900,

		//easing method for the transition
		easing:'easeInOutQuart',

		//slide wrapper
		wrapElement: '>ul',

		//slide element
		slideElement: '>li',

		//pause if mouse cursor is above item
		hoverpause: false,
		
		//attach images as background
		bg_slider: false,
		
		//delay of milliseconds to wait before showing the next slide
		show_slide_delay: 0,
		
		//if slider animation is set to "fade" the fullfade property sets the crossfade behaviour
		fullfade: false,

        //enable carousel mode with multiple visible slides
		carousel: 'no',

		// how many slides are displayed at once in the carousel
        carouselSlidesToShow: 3,

		// TODO: how many slides are scrolled in the carousel
		carouselSlidesToScroll: 1,

		// responsive carousel
		carouselResponsive : new Array()

	};

  	$.AviaSlider.prototype =
    {
    	_init: function(){},

    	//set the slider options by first merging the efault options and the passed options, then checking the slider element if any data attributes overwrite the option set
    	_setOptions: function(options)
		{
			var newOptions 	= $.extend( true, {}, $.AviaSlider.defaults, options ),
				htmlData 	= this.$slider.data();
		
			//overwritte passed option set with any data properties on the html element
			for( var i in htmlData )
			{
				//	data attribute is transformed to lower case, but js is case sensitive - transform key
				var key = ( 'transition_speed' != i ) ? i :'transitionSpeed';

				if( typeof htmlData[ i ] === "string" || typeof htmlData[ i ] === "number" || typeof htmlData[ i ] === "boolean" )
				{
					newOptions[ key ] = htmlData[ i ];
				}

			}

			return newOptions;
		},
		
		_prepareSlides: function(){},
		
		//start preloading the background images
		_bgPreloadImages : function(){},
		
    	//if we are using a background image slider, fetch the images from a data attribute and preload them one by one
    	_getImageURLS: function(){},
    	
    	
    	_preloadSingle: function(){},
		
		_preloadNext: function(){},
    	

    	//bind click events of slide controlls to the public functions
    	_bindEvents: function(){},

    	//kickoff the slider by binding all functions to slides and buttons, show the first slide and start autoplay
    	_kickOff: function(){},

		_buildCarousel : function(){},

    	//calculate which slide should be displayed next and call the executing transition function
    	_navigate : function(){},

		//if the next slide has a different height than the current change the slideshow height
		_setSize: function(){},
		
		_setCenter: function(){},

		_carouselmove : function(){},

		_carouselslide: function(){},
		
		_slide: function(dir)
		{
			var dynamic			= false, //todo: pass by option if a slider is dynamic
				modifier		= dynamic == true ? 2 : 1,
				sliderWidth		= this.$slider.width(),
				direction		= dir === 'next' ? -1 : 1,
				property  		= this.browserPrefix + 'transform',
				reset			= {}, transition = {},  transition2 = {},
				trans_val 		= ( sliderWidth * direction * -1),
				trans_val2 		= ( sliderWidth * direction) / modifier;
			
			//do a css3 animation
			if(this.cssActive)
			{
				property  = this.browserPrefix + 'transform';

				//do a translate 3d transformation if available, since it uses hardware acceleration
				if(this.css3DActive)
				{
					reset[property]  = "translate3d(" + trans_val + "px, 0, 0)";
					transition[property]  = "translate3d(" + trans_val2 + "px, 0, 0)";
					transition2[property] = "translate3d(0,0,0)";
				}
				else //do a 2d transform. still faster than a position "left" change
				{
					reset[property]  = "translate(" + trans_val + "px,0)";
					transition[property]  = "translate(" + trans_val2 + "px,0)";
					transition2[property] = "translate(0,0)";
				}
			}
			else
			{
				reset.left = trans_val;
				transition.left = trans_val2;
				transition2.left = 0;
			}
			
			if(dynamic)
			{
				transition['z-index']  = "1";
				transition2['z-index']  = "2";
			}
			
			this._slide_animate(reset, transition, transition2);
		},
		
		_slide_up: function(){},
		
		
		//slide animation: do a slide transition by css3 transform if possible. if not simply do a position left transition
		_slide_animate: function(){},
		
		//simple fade transition of the slideshow
		_fade: function()
		{
			var self			= this,
				displaySlide 	= this.$slides.eq(this.current),
				hideSlide		= this.$slides.eq(this.prev),
				properties		= {visibility:'visible', zIndex:3, opacity:0},
				fadeCallback 	= function(){};
			
			hideSlide.trigger('pause');	
			if( !displaySlide.data('disableAutoplay') ) {
				
				if(displaySlide.hasClass('av-video-lazyload') && !displaySlide.hasClass('av-video-lazyload-complete'))
				{
					displaySlide.find('.av-click-to-play-overlay').trigger('click');
				}
				else
				{
					displaySlide.trigger('play');
				}
			}
			
			if(self.options.fullfade == true)
			{
				hideSlide.avia_animate({opacity:0}, 200, 'linear', function(){});
			}
			else
			{
				if (self.current === 0) {
					hideSlide.avia_animate({opacity:0}, self.options.transitionSpeed/2, 'linear');
					displaySlide.css(properties).avia_animate({opacity:1}, self.options.transitionSpeed/2, 'linear',fadeCallback);
				}
				else{
					displaySlide.css(properties).avia_animate({opacity:1}, self.options.transitionSpeed/2, 'linear', function(){});
				}

			}
			
		},
		
		
		/************************************************************************
		Video functions
		*************************************************************************/
		
		//bind events to the video that tell the slider to autorotate once a video has been played
		_attach_video_events: function(){},
		
		
		
		/************************************************************************
		Slideshow control functions
		*************************************************************************/
		
		_timer: function(){},

		//start autorotation
		_startSlideshow: function(){},

		//stop autorotation
		_stopSlideshow: function(){},

		// public method: shows next image
		next : function(){},

		// public method: shows previous image
		previous : function(e)
		{
			e.preventDefault();
			this._stopSlideshow();
			this._navigate( 'prev' );
		},

		// public method: goes to a specific image
		go2 : function(){},

		// public method: starts the slideshow
		// any call to next(), previous() or goto() will stop the slideshow autoplay
		play : function(){},

		// public methos: pauses the slideshow
		pause : function()
		{
			if( this.isPlaying )
			{
				this.slideshow.pause();
			}
		},

		// publiccmethos: resumes the slideshow
		resume : function()
		{
			if( this.isPlaying )
			{
				this.slideshow.resume();
			}
		},

		// public methos: destroys the instance
		destroy : function( callback )
		{
			this.slideshow.destroy( callback );
		}

    };

    //simple wrapper to call the slideshow. makes sure that the slide data is not applied twice
    $.fn.aviaSlider = function(){}