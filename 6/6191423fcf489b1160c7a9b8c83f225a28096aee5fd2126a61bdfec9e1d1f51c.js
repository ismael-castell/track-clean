!function(e){var t=!0,a=1,i="",o=0;function r(t){var a=t.find(".uael-post-wrapper"),i=t.find(".slick-active"),o=-1,r=-1,d=-1;"yes"==t.data("equal-height")&&(i.each(function(t){var a=e(this),i=a.outerHeight(),n=a.find(".uael-post__bg-wrap").outerHeight();o<n&&(d=(o=n)+15),r<i&&(r=i)}),i.each(function(){}),t.find(".slick-list.draggable").animate({height:d},{duration:200,easing:"linear"}),o=-1,r=-1,a.each(function(){}))}var d=function(e,d){if(void 0!==e){var l=e.find(".uael-post-grid__inner");if(!(l.length<1)){i=e.find(".uael-post-inf-loader");var u=e.find(".uael-filters-dropdown-list");d("html").on("click",function(){u.removeClass("show-list")}),e.on("click",".uael-filters-dropdown-button",function(e){e.stopPropagation(),u.toggleClass("show-list")});var f=e.find(".uael-post-grid");if(layout=f.data("layout"),structure=f.data("structure"),"masonry"==structure&&e.imagesLoaded(function(){}),e.find(".uael-post__header-filter").off("click").on("click",function(t){$this=d(this),$this.siblings().removeClass("uael-filter__current"),$this.addClass("uael-filter__current");var i=$this.attr("data-filter"),o="";"*"===i?f.data("filter-default"):i.substr(1),o=f.data("default-filter")?f.data("default-filter"):f.data("filter-default");var r=e.find(".uael-filter__current").text();r=r.substring(o.length,r.length),e.find(".uael-filters-dropdown-button").text(r),a=1,n(e,$this)}),e.find(".uael-post__header-filter").off("keyup").on("keyup",function(t){if($this=d(this),9==t.keyCode){$this.siblings().removeClass("uael-filter__current"),$this.addClass("uael-filter__current");var i=$this.attr("data-filter"),o="";"*"===i?f.data("filter-default"):i.substr(1),o=f.data("default-filter")?f.data("default-filter"):f.data("filter-default");var r=e.find(".uael-filter__current").text();r=r.substring(o.length,r.length),e.find(".uael-filters-dropdown-button").text(r),a=1}13===t.keyCode&&n(e,$this)}),e.find(".uael-post__header").children().length>0){var p=e.find(".uael-post-grid").data("default-filter"),c=window.location.hash.substring(1),g=new RegExp("^[\\w\\-]+$");""!==c&&g.test(c)&&e.find(".uael-post__header-filter").each(function(e,t){var a=d(this),i=a.attr("data-filter");c==i.split(".").join("")&&(a.trigger("click"),a.trigger("keyup"))}),void 0!==p&&""!=p&&e.find(".uael-post__header-filter").each(function(e,t){var a=d(this);p==a.text()&&(a.trigger("click"),a.trigger("keyup"))})}if("carousel"==structure){var _=e.find(".uael-post-grid"),h=_.find(".uael-post-grid__inner"),v=_.data("post_slider");e.imagesLoaded(function(){}),_.on("afterChange",function(){r(_)}),d(window).on("resize",function(){d("#log").append("<div>Handler for .resize() called.</div>")})}if(l.hasClass("uael-post-infinite-scroll")&&l.hasClass("uael-post-infinite__event-scroll")){if("main"==e.find(".uael-post-grid").data("query-type"))return;var m=jQuery(window).outerHeight()/1.25;d(window).on("scroll",function(){})}}}};e(document).on("click",".uael-post__load-more",function(){}),e("body").on("click",".uael-grid-pagination .page-numbers",function(t){$scope=e(this).closest(".elementor-widget-uael-posts");var a=$scope.find(".uael-post-grid");if("main"!=a.data("query-type")){t.preventDefault(),$scope.find(".uael-post-grid .uael-post-wrapper").last().after('<div class="uael-post-loader"><div class="uael-loader"></div><div class="uael-loader-overlay"></div></div>');var i=1,o=parseInt($scope.find(".uael-grid-pagination .page-numbers.current").html()),r=e(this);i=r.hasClass("next")?o+1:r.hasClass("prev")?o-1:r.html(),$scope.find(".uael-post-grid .uael-post-wrapper").last().after('<div class="uael-post-loader"><div class="uael-loader"></div><div class="uael-loader-overlay"></div></div>');var d={page_id:a.data("page"),widget_id:$scope.data("id"),filter:$scope.find(".uael-filter__current").data("filter"),skin:a.data("skin"),page_number:i},n=a.data("offset-top");""!=a.data("filter-default")&&(n=$scope.find(".uael-post__header-filters").outerHeight()+parseFloat($scope.find(".uael-post__header .uael-post__header-filters-wrap").css("marginBottom"))),e("html, body").animate({scrollTop:$scope.find(".uael-post__body").offset().top-n},"slow"),s($scope,d)}});var n=function(){},s=function(){};e(window).on("elementor/frontend/init",function(){}