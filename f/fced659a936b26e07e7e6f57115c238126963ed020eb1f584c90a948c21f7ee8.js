function t_initZoom(){$('[data-zoomable="yes"]').length&&(window.tzoominited=!0,$('[data-zoomable="yes"]:not(.t-slds__thumbs_gallery)').addClass("t-zoomable"),$("body").append('<div class="t-zoomer__wrapper">            <div class="t-zoomer__container">            </div>            <div class="t-zoomer__bg"></div>            <div class="t-zoomer__close">                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">                    <path d="M1.41421 -0.000151038L0 1.41406L21.2132 22.6273L22.6274 21.2131L1.41421 -0.000151038Z" fill="black"/>                    <path d="M22.6291 1.41421L21.2148 0L0.00164068 21.2132L1.41585 22.6274L22.6291 1.41421Z" fill="black"/>                </svg>            </div>            </div>'),window.isMobile||$(".t-zoomer__wrapper").append('<div class="t-zoomer__scale showed">            <svg class="icon-increase" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">                <path d="M22.832 22L17.8592 17.0273" stroke="black" stroke-width="2" stroke-linecap="square"/>                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.58591 3.7511C0.917768 7.41924 0.917768 13.367 4.58591 17.0352C8.25405 20.7033 14.2019 20.7033 17.87 17.0352C21.5381 13.367 21.5381 7.41924 17.87 3.7511C14.2019 0.0829653 8.25405 0.0829653 4.58591 3.7511Z" stroke="black" stroke-width="2"/>                <path d="M6.25781 10.3931H16.2035" stroke="black" stroke-width="2"/>                <path d="M11.2305 15.3662V5.42053" stroke="black" stroke-width="2"/>            </svg>            <svg class="icon-decrease" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                <path d="M21.9961 22L17.0233 17.0273" stroke="black" stroke-width="2" stroke-linecap="square"/>                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.74997 3.7511C0.0818308 7.41924 0.0818308 13.367 3.74997 17.0352C7.41811 20.7033 13.3659 20.7033 17.0341 17.0352C20.7022 13.367 20.7022 7.41924 17.0341 3.7511C13.3659 0.0829653 7.41811 0.0829653 3.74997 3.7511Z" stroke="black" stroke-width="2"/>                <path d="M5.41797 10.3931H15.3637" stroke="black" stroke-width="2"/>            </svg>        </div>'),$(".t-records").on("click",".t-zoomable",t_zoomHandler),$(".t-records").on("click",".t-slds__thumbs_gallery",t_zoomHandler),$(".t-zoomer__close, .t-zoomer__bg").click(function(){t_zoom_close(),0!=$(document).find(".t-popup_show").length&&$(document).keydown(function(o){27==o.keyCode&&void 0!==window.t_store_closePopup&&t_store_closePopup(!1)})}))}function t_zoomHandler(){$("body").addClass("t-zoomer__show"),$(".t-zoomer__container").html('    <div class="t-carousel__zoomed">        <div class="t-carousel__zoomer__slides">        <div class="t-carousel__zoomer__inner">        </div>        <div class="t-carousel__zoomer__control t-carousel__zoomer__control_left" data-zoomer-slide="prev">            <div class="t-carousel__zoomer__arrow__wrapper t-carousel__zoomer__arrow__wrapper_left">            <div class="t-carousel__zoomer__arrow t-carousel__zoomer__arrow_left t-carousel__zoomer__arrow_small"></div>            </div>        </div>        <div class="t-carousel__zoomer__control t-carousel__zoomer__control_right" data-zoomer-slide="next">            <div class="t-carousel__zoomer__arrow__wrapper t-carousel__zoomer__arrow__wrapper_right">            <div class="t-carousel__zoomer__arrow t-carousel__zoomer__arrow_right t-carousel__zoomer__arrow_small"></div>            </div>        </div>        </div>    </div>');var o=$(this).closest(".r").attr("id"),e=$("#"+o).find(".t-zoomable:not(.t-slds__thumbs_gallery)");if($("#"+o).find(".t-slds").length){var t=$(this).closest(".t-slds");t.length&&(e=t.find(".t-zoomable:not(.t-slds__thumbs_gallery)"))}e.each(function(o,e){var t="",s="",i="",_="",a=$(e).attr("data-img-zoom-url").split(",");($(e).is("img")||$(e).is("div"))&&(t=$(e).attr("title")||"",s=$(e).attr("data-img-zoom-descr")||""),""!==t&&(i='<div class="t-zoomer__title t-name t-descr_xxs">'+t+"</div>"),""!==s&&(_='<div class="t-zoomer__descr t-descr t-descr_xxs">'+s+"</div>"),$(".t-carousel__zoomer__inner").append('        <div class="t-carousel__zoomer__item">        <div class="t-carousel__zoomer__wrapper">            <img class="t-carousel__zoomer__img" src="'+a+'"></div>            <div class="t-zoomer__comments">'+i+_+"</div>        </div>")}),$(".t-carousel__zoomer__item").each(function(o,e){$(e).css("display","block");var t=$(e).find(".t-zoomer__comments"),s=t.find(".t-zoomer__title"),i=t.find(".t-zoomer__descr");""===s&&""===i&&t.css("padding","0");var _=t.innerHeight();$(e).css("display",""),$(e).find(".t-carousel__zoomer__wrapper").css("bottom",_)});var s=$(this).attr("data-img-zoom-url"),i=$('.t-carousel__zoomer__img[src="'+s+'"]'),_=$(".t-carousel__zoomer__item");i.closest(_).addClass("active"),_.each(function(o,e){$(e).attr("data-zoomer-slide-number",o)});var a=parseInt($(".t-carousel__zoomer__item:visible").attr("data-zoomer-slide-number"),10);$(".t-carousel__zoomer__control_right").click(function(){t_zoom_unscale(),a=(a+1)%_.length,_.removeClass("active").eq(a).addClass("active"),t_zoom_checkForScale()}),$(".t-carousel__zoomer__control_left").click(function(){t_zoom_unscale(),a=(a-1)%_.length,_.removeClass("active").eq(a).addClass("active"),t_zoom_checkForScale()}),$(document).unbind("keydown"),$(document).keydown(function(o){37!=o.keyCode&&39!=o.keyCode&&27!=o.keyCode||(t_zoom_unscale(),a={37:a-1,39:a+1}[o.keyCode]%_.length,_.removeClass("active").eq(a).addClass("active"),t_zoom_checkForScale());27==o.keyCode&&(t_zoom_close(),$(document).find(".t-popup_show").length>0&&$(document).keydown(function(){}))});var r=$(".t-carousel__zoomer__item").size();$("body").addClass("t-zoomer__show_fixed"),1==r&&$(".t-carousel__zoomer__control").css("display","none"),$(".t-carousel__zoomer__inner").click(function(){}