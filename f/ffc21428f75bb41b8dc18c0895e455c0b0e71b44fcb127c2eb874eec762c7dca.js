var scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/ba95ea16\/www-widgetapi.vflset\/www-widgetapi.js';
try {
  var ttPolicy = window.trustedTypes.createPolicy('youtube-widget-api', {createScriptURL: function(x) { return x; }});
  scriptUrl = ttPolicy.createScriptURL(scriptUrl);
} catch (e) { }
  if(!window["YT"])var YT={loading:0,loaded:0};if(!window["YTConfig"])var YTConfig={"host":"https://www.youtube.com"};
if(!YT.loading){YT.loading=1;(function(){var l=[];YT.ready=function(f){if(YT.loaded)f();else l.push(f)};window.onYTReady=function(){};YT.setConfig=function(){}