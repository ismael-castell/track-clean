!function(){}();var MalinkyAjaxPaging=function($){var init=function(mapVars){function debounce(a,t,n){var o;return function(){var i=this,e=arguments,p=function(){o=null,n||a.apply(i,e)},m=n&&!o;clearTimeout(o),o=setTimeout(p,t),m&&a.apply(i,e)}}var mymapAjaxLoader=mapVars.mapAjaxLoader,mymapCssLoadMore=mapVars.mapCssLoadMore,mymapCssLoadMoreButton=mapVars.mapCssLoadMoreButton,mymapInfiniteScrollBuffer=mapVars.mapInfiniteScrollBuffer,mymapLoadingTimer="",mymapLoadingMorePostsText=mapVars.mapLoadingMorePostsText,mymapLoadMoreButtonText=mapVars.mapLoadMoreButtonText,mymapPaginationClass=mapVars.mapPaginationClass,mymapPaginationClassPixelsToDocBottom=mapVars.mapPaginationClassPixelsToDocBottom,mymapPagingType=mapVars.mapPagingType,mymapPostsWrapperClass=mapVars.mapPostsWrapperClass,mymapPostClass=mapVars.mapPostClass,mymapNextPageSelector=mapVars.mapNextPageSelector,mymapNextPageUrl=mapVars.mapNextPageUrl,mymapPaginatorCount=mapVars.mapPaginatorCount,mymapUserCallback=mapVars.mapUserCallback,infiniteScrollRunning=!1,mapLoadPosts=function(){$.ajax({type:"GET",url:mymapNextPageUrl,dataType:"html",beforeSend:function(){},success:function(){},error:function(a,t){mapFailed()},complete:function(){}})},mapPaginatorTotalCount=function(){},mapAddPaginatorCount=function(){},mapIsLastPage=function(){},mapAddLoader=function(){},mapLoading=function(){$('.malinky-ajax-pagination-loading[data-paginator-count="'+mymapPaginatorCount+'"]').show(),"load-more"!=mymapPagingType&&"infinite-scroll"!=mymapPagingType||$('#malinky-ajax-pagination-button[data-paginator-count="'+mymapPaginatorCount+'"]').text(mymapLoadingMorePostsText)},mapLoaded=function(){},mapFailed=function(){},mapInfiniteScroll=debounce(function(){},250);"infinite-scroll"==mymapPagingType?$(mymapNextPageSelector+'[data-paginator-count="'+mymapPaginatorCount+'"]').attr("href")&&(mapAddLoader(),$(mymapPaginationClass+'[data-paginator-count="'+mymapPaginatorCount+'"]').remove(),window.addEventListener("scroll",mapInfiniteScroll)):"load-more"==mymapPagingType?$(mymapNextPageSelector+'[data-paginator-count="'+mymapPaginatorCount+'"]').attr("href")&&($(mymapPaginationClass+'[data-paginator-count="'+mymapPaginatorCount+'"]').last().after('<div class="malinky-load-more"><a href="'+mymapNextPageUrl+'" id="malinky-ajax-pagination-button" class="malinky-load-more__button" data-paginator-count="'+mymapPaginatorCount+'">'+mymapLoadMoreButtonText+"</a></div>"),mapAddLoader(),$(mymapPaginationClass+'[data-paginator-count="'+mymapPaginatorCount+'"]:not(:has(>a#malinky-ajax-pagination-button[data-paginator-count="'+mymapPaginatorCount+'"]))').remove(),$('#malinky-ajax-pagination-button[data-paginator-count="'+mymapPaginatorCount+'"]').click(function(){})):"pagination"==mymapPagingType&&(mapAddLoader(),$(document).on("click",mymapPaginationClass+'[data-paginator-count="'+mymapPaginatorCount+'"] a',function(){}),window.addEventListener("popstate",function(){}