function(){}
//credits James Padolsey http://james.padolsey.com/
var qualifyURL = function(){};

(function ($, window, document, undefined) {

    $.fn.visible = function(){};

    var pluginName = "finalTilesGallery",
        defaults = {
            layout: 'final', // final | columns | smart
            columns: [
                [4000, 5],
                [1024, 4],
                [800, 3],
                [480, 2],
                [320, 1]
            ],
            rowHeight: 200,
            margin: 10,
            minTileWidth: 200,
            ignoreImageAttributes: true,
            imageSizeFactor: [
                [4000, .9],
                [1024, .8],
                [800, .7],
                [600, .6],
                [480, .5],
                [320, .3]
            ],
            gridSize: 10,
            disableGridSizeBelow: 800,
            allowEnlargement: true,
            autoLoadURL: null,
            selectedFilter: '',
            loadMethod: 'sequential',
                        
            onComplete: function () {},
            onUpdate: function () {},
            onLoading: function () {},
            debug: false
        };

    // The actual plugin constructor
    function(){}

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        print : function(){},
        setCurrentImageSizeFactor : function(){},        
        setCurrentColumnSize: function(){},
        setCurrentGridSize: function(){},
        init: function () {
            var instance = this;
            var current_filter = this.settings.selectedFilter;
            var filter_url = ftg_getURLParameter('ftg-set');
                if(filter_url)
                    current_filter = filter_url;

            instance.currentWidth = instance.$element.width();

            if(instance.$element.filter(":visible").length == 0) {
                instance.print('cannot initialize the gallery, container is hidden. Retrying in 500ms.');
                setTimeout(function () {
                    instance.init();
                }, 500);
                return;
            }
            
            this.$element.find(".ftg-items").css({
                position: 'relative'
            });

            var current_filter = this.settings.selectedFilter;
            var filter_url = ftg_getURLParameter('ftg-set');
                if(filter_url)
                    current_filter = filter_url;

            var instance = this;           

            if(current_filter != null && current_filter != "n-a")
            {
                instance.print(".. found filter (" + current_filter + ")");
                instance.$element.find(".ftg-filters a").removeClass('selected');
                instance.$element.find(".ftg-filters a").each(function(){})
            }                     
          
            var hash = window.location.hash;

            this.$element.find(".ftg-items").css({
                position: 'relative',
                minWidth: instance.settings.minTileWidth
            });

            if((hash && hash != "#ftg-set-ftgall" && hash.substr(0, 8) == '#ftg-set') ||
                    instance.settings.selectedFilter)
            {
                var ft = '#ftg-set-' + instance.settings.selectedFilter;
                if(hash)
                    ft = hash;

                var hash_class = ft.replace('#','.');
                var filters = [];

                instance.$element.find(".ftg-filters a").each(function(){
                    filters.push($(this).attr('href'));
                });

                if($.inArray(ft, filters) >= 0)
                {
                   hash_class = hash_class.substring(1);       

                    instance.$element.find(".ftg-filters a").each(function(){});

                     $('a[href="' + ft + '"]').addClass('selected');
                }                
            }   

            this.tiles = this.$element.find('.tile').not('.ftg-hidden-tile').not('.ftg-filter-hidden-tile');

            /*this.tiles.css({
                transition: 'all .3s'
            });*/
            this.currentWidth = this.$element.width();
            this.print("this.currentWidth: " + this.currentWidth);
            
            if(this.settings.layout != 'columns' && this.settings.layout != 'rows' && 
                this.settings.layout != 'final') {
                    console.log("WARNING: unknown layout, falling back to 'final'.")
                }
                
            if(this.settings.layout == 'columns') {
                this.setCurrentColumnSize();
            }

            var _resizeTo = 0;
            this.setCurrentImageSizeFactor();
            this.setCurrentGridSize();
            $(window).resize(function(){});

            instance.isLoading = true;
            if(instance.settings.autoLoadURL) {
                $(window).scroll(function(){});
            }

            
            this.edges.push({ left: 0, top: 0, width: this.currentWidth, index: 0 });

            this.isImageLoading = false;
            if(this.settings.loadMethod == 'lazy') {				
				$(window).scroll(function(event) {  
					instance.loadImage();
				});				
			}
            this.loadImage();
        },
        addElements: function(){},
        removeAt: function(){},
        clear: function(){},
        
        printEdges: function(){},
        printEdge: function(){},
        refresh: function(){},
                
        getAvailableRowSpace: function(){},
        
        getBusyRowSpace: function(){},
        
        addImageToRow: function(){},
        
        fitImagesInRow: function(){},
        
        nextTile : function(){},
        
        /*! loadImage */
        loadImage: function(){},
        higherEdge: function(){},
        lowerEdgeTop: function(){},
        alignEdge: function(){},
        removeEdge: function(){},
        get_highest_col: function(){},
        get_shortest_col: function(){},
        add: function(){},
        add_to_column: function (tileIndex) {
            var $t = this.tiles.eq(tileIndex);
            
            var $item = $t.find('.item');
            var key = "tile" + tileIndex;
            var w = this.imagesData[key].width;
            var h = this.imagesData[key].height;

            var slot = this.get_shortest_col();
            
            var ratio = h / w;

            var t_w = this._columnSize;
            var t_h = t_w * ratio;
            var t_h_b = t_w * ratio;
            
            if(this.currentGridSize) {                
                var n = Math.floor(t_h / this.currentGridSize);
                if(n > 0) {
                    t_h = this.currentGridSize * n;
                }
            }

            /*if(this.currentGridSize) {
                console.log("this.currentGridSize", this.currentGridSize);
                var diff = h % this.currentGridSize;
                console.log("diff", diff);
                slot.top -= diff;
                h -= diff;
            }*/

            $t.css({
                position: 'absolute',
                width: t_w,
                height: t_h,
                top: slot.top + this.settings.margin,
                left: (slot.col * this._columnSize) + (this.settings.margin * slot.col)
            });

            var hdiff = t_h_b - t_h;

            if ($t.data("ftg-type") != "iframe") 
              $item.css({ height: "auto" });

            if(hdiff > 0) {
                $item.css({
                    top: 0 - (hdiff / 2)                    
                });
            }
            var transition = $t.css('transition');

            setTimeout( function () {
                $t.css( {
                    display  : 'block',
                    transform: 'scale(1)'
                } );
            }, 1 );

            $t.addClass("ftg-loaded");

            this.columns[slot.col].push(slot.top + t_h + this.settings.margin);
            
            this.$element.find(".ftg-items").css({
                height: this.get_highest_col() + "px"
            });
        },
        add_to_final: function (tileIndex) {
            var outside = false;
            if ($('.final-tiles-gallery').hasClass('caption-outside')) {
                outside = true;
            }
            var $t = this.tiles.eq(tileIndex);

            var $item = $t.find('.item');
            var key = "tile" + tileIndex;
            
            var w = this.imagesData[key].width;
            var h = this.imagesData[key].height;

            var hEdge = this.higherEdge();
            this.print(hEdge);
            hEdge.tileIndex = tileIndex;

            this.print(tileIndex + " [" + $t.data("ftg-type") + "] (" + w + "x" + h + ")");
            this.print("hEdge.width: " + hEdge.width);

            if (hEdge.top > 0) {
                hEdge.top += this.settings.margin;
            }
            if (outside === true) {
                h += 30;
            }

            $t.css({
                left: hEdge.left,
                top: hEdge.top,
                position: 'absolute'
            });

            hEdge.enlarged = false;

            //is the tile wider than the current edge?
            if (hEdge.width - w < w + this.settings.margin) {
                hEdge.case = 'Te';
                this.print('Te');
                //edge smaller than the image
                var w2 = hEdge.width;
                var h2 = (h / w) * w2;

                if (w2 + hEdge.left - this.settings.margin == this.currentWidth) {
                    this.print("END");
                    w2 -= this.settings.margin;
                    h2 = (h / w) * w2;
                }

                w = w2;
                h = h2;
            } else if (hEdge.width >= w) {
                this.print('tE');
                //break the edge
                //is the new edge wider than minTileWidth?
                if (this.settings.layout == 'columns' || hEdge.width - w >= this.settings.minTileWidth) {
                    hEdge.case = 'tE';
                    this.print('tE1', hEdge.width, hEdge.left, this.currentWidth);

                    var newEdge = {
                        left: hEdge.left + w + this.settings.margin,
                        top: hEdge.top - (hEdge.top > 0 ? this.settings.margin : 0),
                        width: hEdge.width - w - this.settings.margin,
                        marginLeft: true,
                        case: 'NEW',
                        index: hEdge.index + 1
                    }

                    //console.log("newEdge", newEdge);
                    this.edges.push(newEdge);
                    //this.printEdge(newEdge);
                } else {
                    hEdge.case = 'tE2';
                    this.print('tE2');
                    //not enough space for the next tile
                    //enlargement
                    this.print("enlargement", hEdge.width, hEdge.left, this.currentWidth);
                    var m = hEdge.left + hEdge.width == this.currentWidth ?  0 : this.settings.margin;
                    //var w2 = hEdge.width - m;
                    var w2 = hEdge.width;
                    var h2 = this.settings.allowEnlargement && this.settings.layout != 'rows' ? (h / w) * w2 : h;

                    if (this.settings.allowEnlargement) {
                        $t.addClass("ftg-enlarged");
                        hEdge.enlarged = true;
                    } else {
                        if(this.settings.layout != 'rows')
                            $t.find(".item").css({
                                width: w,
                                height: h
                            }); 
                    }

                    w = w2;
                    h = h2;
                }
            }

            hEdge.top += h;
            if(this.currentGridSize) {
                var diff = hEdge.top % this.currentGridSize;
                hEdge.top -= diff;
                h -= diff;
            }

            hEdge.left = hEdge.left;
            hEdge.width = w;
            //hEdge.index = tileIndex + 1;

            var printEdge = true;

            var aligned = this.alignEdge(hEdge, tileIndex);
            if (aligned) {
                if(aligned.side == 'left') {
                    this.removeEdge(hEdge);
                    aligned.edge.width += w + this.settings.margin;
                    h = h - (hEdge.top - aligned.edge.top);
                    hEdge.top -= h;
                    printEdge = false;
                } else {
                    this.removeEdge(aligned.edge);
                    hEdge.width += this.settings.margin + aligned.edge.width;
                    printEdge = false;
                }

                $t.height(h);
            }

            if (this.$element.find(".ftg-items").height() < hEdge.top)
                this.$element.find(".ftg-items").height(hEdge.top);

            if(this.settings.debug && printEdge) {
                this.printEdge(hEdge);
            }

            if ($t.data("ftg-type") == "iframe") {
                $t.find("iframe").height(h);
            }

            this.print(w + "x" + h);
            this.print("----");

            if (outside === true) {
                h += 30;
            }

            $t.css({
                width: w,
                height: h
            });
            var transition = $t.css('transition');
            var ratio = w / this.imagesData[key].width;
            var hdiff = (this.imagesData[key].height * ratio) - h;

            if ($t.data("ftg-type") != "iframe") 
              $item.css({ height: "auto" });

            if(hdiff > 0) {
                $item.css({
                    top: 0 - (hdiff / 2)                    
                });
            }

            // Set a minor timeout so that the function won't be triggered right away
            setTimeout( function () {
                $t.css( {
                    display  : 'block',
                    transform: 'scale(1)'
                } );
            }, 1 );

            $t.addClass("ftg-loaded");
        }
    });

    $.fn[pluginName] = function(){};

    $(window).on('load', function(){
        $('.loading-bar i').css({
            width: '100%'
        });
    });

    $(function () {
        
        $(".ftg-social a").on( 'click', function(){}