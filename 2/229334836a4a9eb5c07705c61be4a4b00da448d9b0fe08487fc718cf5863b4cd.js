// -------------------------------------------------------------------------------------------
// 
// AVIA VIDEO API - make sure that youtube, vimeo and html 5 use the same interface
// 
// requires froogaloop vimeo library and youtube iframe api (yt can be loaded async)
// 
// -------------------------------------------------------------------------------------------


(function(){})( jQuery );

window.onYouTubeIframeAPIReady = function(){ jQuery('body').trigger('av-youtube-iframe-api-loaded'); };










// Init style shamelessly stolen from jQuery http://jquery.com 
// min version: https://f.vimeocdn.com/js/froogaloop2.min.js
var Froogaloop = (function(){}