/*!jQuery v1.6.4 http://jquery.com/ | http://jquery.org/license*/(function(){})(window);;(function(g){g.fn.extend({elastic:function(){var h=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight"];return this.each(function(){function i(c,j){curratedHeight=Math.floor(parseInt(c,10));a.height()!=curratedHeight&&a.css({height:curratedHeight+"px",overflow:j})}function k(){var c=a.val().replace(/&/g,"&amp;").replace(/ /g,"&nbsp;").replace(/<|>/g,"&gt;").replace(/\n/g,"<br />"),j=b.html().replace(/<br>/ig,"<br />");if(c+"&nbsp;"!=j){b.html(c+"&nbsp;");if(Math.abs(b.height()+l-a.height())>3){c=b.height()+l;if(c>=d)i(d,"auto");else c<=e?i(e,"hidden"):i(c,"hidden")}}}if(this.type!="textarea")return false;var a=g(this),b=g("<div />").css({position:"absolute",display:"none","word-wrap":"break-word"}),l=parseInt(a.css("line-height"),10)||parseInt(a.css("font-size"),"10"),e=parseInt(a.css("height"),10)||l*3,d=parseInt(a.css("max-height"),10)||Number.MAX_VALUE,f=0;if(d<0)d=Number.MAX_VALUE;b.appendTo(a.parent());for(f=h.length;f--;)b.css(h[f].toString(),a.css(h[f].toString()));a.css({overflow:"hidden"});a.bind("keyup change cut paste",function(){k()});a.bind("blur",function(){if(b.height()<d)b.height()>e?a.height(b.height()):a.height(e)});a.live("input paste",function(){setTimeout(k,250)});k()})}})})(jQuery);;(function(){})(jQuery);;$(document).ready(function(){});;(function($){$.facebox=function(){}
$.extend($.facebox,{settings:{opacity:0.2,overlay:true,loadingImage:'/facebox/loading.gif',closeImage:'/facebox/closelabel.png',imageTypes:['png','jpg','jpeg','gif'],faceboxHtml:'\
    <div id="facebox" style="display:none;"> \
      <div class="popup"> \
        <div class="content"> \
        </div> \
        <a href="#" class="close"></a> \
      </div> \
    </div>'},loading:function(){},reveal:function(){},close:function(){}})
$.fn.facebox=function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
$(document).bind('close.facebox',function(){})})(jQuery);;$(document).ready(function(){var player_ad_animation=$("#player_ad_animation");var next_timeout;function showad(){$('#player_ad_animation').fadeIn(1000);}
function hidead(){$('#player_ad_animation').fadeOut(1000);}
$('#player_ad_content .close').click(function(){clearTimeout(next_timeout);hidead();setTimeout(showad,1000*60*20);return false;});if(player_ad_animation){setTimeout(showad,1000*60);}});;(function($){$.dbj_sound={tracks:{},enabled:true,url:function(host_element){var url=$(host_element).attr("href");if("undefined"==typeof(url))throw new Error(0xFF,"DBJ-SOUND EXCEPTION: host element invalid or missing a valid HREF attribute");return url;},loop:function(host_element){this.play(host_element,true);},play:function(host_element,looping){var sound_jq=function(src){return $('<embed />').attr({style:"height:0",loop:(looping?"true":"false"),src:options.track,autostart:"true",hidden:"true"});}
if(!this.enabled)return;if(!host_element)return;var options={track:this.url(host_element)};if(this.tracks[options.track]){var current=this.tracks[options.track];current.remove();}
var element=sound_jq();element.appendTo(document.body);this.tracks[options.track]=element;return element;},stop:function(host_element){var url=this.url(host_element);if(this.tracks[url]){var current=this.tracks[url];if('undefined'!=typeof[0].Stop)current[0].Stop();else if('undefined'!=typeof current[0].stop)current[0].stop();current.remove();this.tracks[url]=null;}},playing:function(host_element){if(!$.dbj_sound.enabled)return false;return this.tracks[this.url(host_element)]!=null;},enabledisable:function(){this.enabled=!this.enabled;if(this.enabled==false)
for(var j in this.tracks){if(this.tracks[j]){this.tracks[j].remove();this.tracks[j]=null;}}
return this.enabled;}};})(jQuery);;jQuery.cookie=function(){};;$(document).ready(function(){$('a.popup_link').live("click",function(){var url=$(this).attr("href");if(window.location.search.indexOf("from_tube")!==-1){url=url+"?from_tube=1"}
var popupwindow=window.open(url,'_blank','status=0,toolbar=0,menubar=0,directories=0,resizable=1,'+'scrollbars=1,height=768,width=850');popupwindow.focus();return false;});$('a.toolbar_popup_link').live("click",function(){var popupwindow=window.open($(this).attr("href"),'_blank','status=0,toolbar=1,menubar=0,directories=0,resizable=1,'+'scrollbars=1,height=768,width=850,top=50,left=50');popupwindow.focus();return false;});$('a.small_popup_link').live("click",function(){var popupwindow=window.open($(this).attr("href"),'_blank','status=0,toolbar=0,menubar=0,directories=0,resizable=1,'+'scrollbars=1,height=450,width=600');popupwindow.focus();return false;});$('a.medium_popup_link').live("click",function(){var popupwindow=window.open($(this).attr("href"),'_blank','status=0,toolbar=0,menubar=0,directories=0,resizable=1,'+'scrollbars=1,height=700,width=715');popupwindow.focus();return false;});});;function isiPad(){return((/iPad/i.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1))&&window["MSStream"]===undefined)}
function isiPhone(){return/iPhone/i.test(navigator.userAgent)&&window["MSStream"]===undefined}
function isiPod(){return/iPod/i.test(navigator.userAgent)&&window["MSStream"]===undefined}
function(){}
function isMobileDevice(){return/Android|webOS|BlackBerry|IEMobile|Opera Mini|SamsungBrowser/i.test(navigator.userAgent)||isiOS()}
function(){}
function isIE9OrBelow(){return isIE()&&window["atob"]===undefined}
function isIE10OrBelow(){return isIE()&&document["__proto__"]===undefined};/*!Copyright Twitter Inc. and other contributors. Licensed under MIT*/var twemoji=function(){}