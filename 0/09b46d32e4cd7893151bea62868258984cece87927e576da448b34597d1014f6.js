(function(e,t){function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function v(e,n){n.width=parseInt(n.container.width(),0);n.height=parseInt(n.container.height(),0);n.bw=n.width/n.startwidth;n.bh=n.height/n.startheight;if(n.bh>1){n.bw=1;n.bh=1}if(e.data("orgw")!=t&&e.data("orgw")!=0){e.width(e.data("orgw"));e.height(e.data("orgh"))}var r=n.width/e.width();var i=n.height/e.height();n.fw=r;n.fh=i;if(e.data("orgw")==t||e.data("orgw")==0){e.data("orgw",e.width());e.data("orgh",e.height())}if(n.fullWidth=="on"&&n.fullScreen!="on"){var s=n.container.parent().width();var o=n.container.parent().height();var u=o/e.data("orgh");var a=s/e.data("orgw");e.width(e.width()*u);e.height(o);if(e.width()<s){e.width(s+50);var a=e.width()/e.data("orgw");e.height(e.data("orgh")*a)}if(e.width()>s){e.data("fxof",s/2-e.width()/2);e.css({position:"absolute",left:e.data("fxof")+"px"})}if(e.height()<=o){e.data("fyof",0);e.data("fxof",s/2-e.width()/2);e.css({position:"absolute",top:e.data("fyof")+"px",left:e.data("fxof")+"px"})}if(e.height()>o&&e.data("fullwidthcentering")=="on"){e.data("fyof",o/2-e.height()/2);e.data("fxof",s/2-e.width()/2);e.css({position:"absolute",top:e.data("fyof")+"px",left:e.data("fxof")+"px"})}}else if(n.fullScreen=="on"){var s=n.container.parent().width();var o=jQuery(window).height();if(n.fullScreenOffsetContainer!=t){try{o=o-jQuery(n.fullScreenOffsetContainer).outerHeight(true)}catch(f){}}n.container.parent().height(o);n.height=o;var u=o/e.data("orgh");var a=s/e.data("orgw");e.width(e.width()*u);e.height(o);if(e.width()<s){e.width(s+50);var a=e.width()/e.data("orgw");e.height(e.data("orgh")*a)}if(e.width()>s){e.data("fxof",s/2-e.width()/2);e.css({position:"absolute",left:e.data("fxof")+"px"})}if(e.height()<=o){e.data("fyof",0);e.data("fxof",s/2-e.width()/2);e.css({position:"absolute",top:e.data("fyof")+"px",left:e.data("fxof")+"px"})}if(e.height()>o&&e.data("fullwidthcentering")=="on"){e.data("fyof",o/2-e.height()/2);e.data("fxof",s/2-e.width()/2);e.css({position:"absolute",top:e.data("fyof")+"px",left:e.data("fxof")+"px"})}}else{e.width(n.width);e.height(e.height()*r);if(e.height()<n.height&&e.height()!=0&&e.height()!=null){e.height(n.height);e.width(e.data("orgw")*i)}}e.data("neww",e.width());e.data("newh",e.height());if(n.fullWidth=="on"){n.slotw=Math.ceil(e.width()/n.slots)}else{n.slotw=Math.ceil(n.width/n.slots)}if(n.fullSreen=="on")n.sloth=Math.ceil(jQuery(window).height()/n.slots);else n.sloth=Math.ceil(n.height/n.slots)}function(){}function(){}function(){}function(){}function(){}function(){}function S(e,n){try{var r=e.find(">ul:first-child >li:eq("+n.act+")")}catch(o){var r=e.find(">ul:first-child >li:eq(1)")}n.lastslide=n.act;var u=e.find(">ul:first-child >li:eq("+n.next+")");var a=u.find(".defaultimg");if(a.data("lazyload")!=t&&a.data("lazydone")!=1){a.attr("src",u.find(".defaultimg").data("lazyload")),a.data("lazydone",1);a.data("orgw",0);e.find(".tp-loader").fadeIn(300);setTimeout(function(){s(n,e)},180);u.waitForImages(function(){i(n,e);v(a,n);x(e,n);e.find(".tp-loader").fadeOut(300)})}else{x(e,n)}}function(){}function T(){}function N(e){if(e.data==YT.PlayerState.PLAYING){var t=jQuery("body").find(".tp-bannertimer");var n=t.data("opt");t.stop();n.videoplaying=true;n.videostartednow=1}else{var t=jQuery("body").find(".tp-bannertimer");var n=t.data("opt");if(e.data!=-1){if(n.conthover==0)t.animate({width:"100%"},{duration:n.delay-n.cd-100,queue:false,easing:"linear"});n.videoplaying=false;n.videostoppednow=1}}if(e.data==0&&n.nextslideatend==true)n.container.revnext()}function C(e){e.target.playVideo()}function(){}function L(e){var t=$f(e);t.addEvent("ready",function(e){t.addEvent("play",function(e){var t=jQuery("body").find(".tp-bannertimer");var n=t.data("opt");t.stop();n.videoplaying=true});t.addEvent("finish",function(e){var t=jQuery("body").find(".tp-bannertimer");var n=t.data("opt");if(n.conthover==0)t.animate({width:"100%"},{duration:n.delay-n.cd-100,queue:false,easing:"linear"});n.videoplaying=false;n.videostartednow=1;if(n.nextslideatend==true)n.container.revnext()});t.addEvent("pause",function(e){var t=jQuery("body").find(".tp-bannertimer");var n=t.data("opt");if(n.conthover==0)t.animate({width:"100%"},{duration:n.delay-n.cd-100,queue:false,easing:"linear"});n.videoplaying=false;n.videostoppednow=1})})}function A(e){var t=$f(e);t.addEvent("ready",function(e){t.api("play")});t.addEvent("play",function(){});t.addEvent("finish",function(e){var t=jQuery("body").find(".tp-bannertimer");var n=t.data("opt");if(n.conthover==0)t.animate({width:"100%"},{duration:n.delay-n.cd-100,queue:false,easing:"linear"});n.videoplaying=false;n.videostartednow=1;if(n.nextslideatend==true)n.container.revnext()});t.addEvent("pause",function(){})}function(){}function M(n,r,i){var s=0;var o=0;n.find(".tp-caption").each(function(i){s=r.width/2-r.startwidth/2;if(r.bh>1){r.bw=1;r.bh=1}if(r.bw>1){r.bw=1;r.bh=1}var u=r.bw;var a=r.bh;if(r.fullScreen=="on")o=r.height/2-r.startheight*r.bh/2;if(o<0)o=0;var f=n.find(".tp-caption:eq("+i+")");var l=0;if(r.width<r.hideCaptionAtLimit&&f.data("captionhidden")=="on"){f.addClass("tp-hidden-caption");l=1}else{if(r.width<r.hideAllCaptionAtLilmit){f.addClass("tp-hidden-caption");l=1}else{f.removeClass("tp-hidden-caption")}}f.stop(true,true);if(l==0){if(f.data("linktoslide")!=t){f.css({cursor:"pointer"});if(f.data("linktoslide")!="no"){f.click(function(){})}}if(f.hasClass("coloredbg"))s=0;if(s<0)s=0;clearTimeout(f.data("timer"));clearTimeout(f.data("timer-end"));var c="iframe"+Math.round(Math.random()*1e3+1);if(f.find("iframe").length>0){f.find("iframe").each(function(){var n=e(this);if(n.attr("src").toLowerCase().indexOf("youtube")>=0){r.nextslideatend=f.data("nextslideatend");if(!n.hasClass("HasListener")){try{n.attr("id",c);var i;if(f.data("autoplay")==true)i=new YT.Player(c,{events:{onStateChange:N,onReady:C}});else i=new YT.Player(c,{events:{onStateChange:N}});n.addClass("HasListener");f.data("player",i);if(f.data("autoplay")==true){var s=jQuery("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");setTimeout(function(){s.stop();r.videoplaying=true},200)}}catch(o){}}else{if(f.data("autoplay")==true){var i=f.data("player");i.playVideo();var s=jQuery("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");setTimeout(function(){s.stop();r.videoplaying=true},200)}}}else{if(n.attr("src").toLowerCase().indexOf("vimeo")>=0){r.nextslideatend=f.data("nextslideatend");if(!n.hasClass("HasListener")){n.addClass("HasListener");n.attr("id",c);var u=n.attr("src");var a={},l=u,h=/([^&=]+)=([^&]*)/g,p;while(p=h.exec(l)){a[decodeURIComponent(p[1])]=decodeURIComponent(p[2])}if(a["player_id"]!=t){u=u.replace(a["player_id"],c)}else{u=u+"&player_id="+c}try{u=u.replace("api=0","api=1")}catch(o){}u=u+"&api=1";n.attr("src",u);var i=f.find("iframe")[0];if(f.data("autoplay")==true){$f(i).addEvent("ready",A);var s=jQuery("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");setTimeout(function(){s.stop();r.videoplaying=true},200)}else{$f(i).addEvent("ready",L)}}else{if(f.data("autoplay")==true){var n=f.find("iframe");var d=n.attr("id");var v=$f(d);v.api("pause");var s=jQuery("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");setTimeout(function(){s.stop();r.videoplaying=true},200)}}}}})}if(f.find("video").length>0){f.find("video").each(function(){})}if(f.hasClass("randomrotate")&&(r.ie||r.ie9))f.removeClass("randomrotate").addClass("sfb");f.removeClass("noFilterClass");var h=0;var p=0;if(f.find("img").length>0){var d=f.find("img");if(d.data("ww")==t)d.data("ww",d.width());if(d.data("hh")==t)d.data("hh",d.height());var v=d.data("ww");var m=d.data("hh");d.width(v*r.bw);d.height(m*r.bh);h=d.width();p=d.height()}else{if(f.find("iframe").length>0){var d=f.find("iframe");if(f.data("ww")==t){f.data("ww",d.width())}if(f.data("hh")==t)f.data("hh",d.height());var v=f.data("ww");var m=f.data("hh");var g=f;if(g.data("fsize")==t)g.data("fsize",parseInt(g.css("font-size"),0)||0);if(g.data("pt")==t)g.data("pt",parseInt(g.css("paddingTop"),0)||0);if(g.data("pb")==t)g.data("pb",parseInt(g.css("paddingBottom"),0)||0);if(g.data("pl")==t)g.data("pl",parseInt(g.css("paddingLeft"),0)||0);if(g.data("pr")==t)g.data("pr",parseInt(g.css("paddingRight"),0)||0);if(g.data("mt")==t)g.data("mt",parseInt(g.css("marginTop"),0)||0);if(g.data("mb")==t)g.data("mb",parseInt(g.css("marginBottom"),0)||0);if(g.data("ml")==t)g.data("ml",parseInt(g.css("marginLeft"),0)||0);if(g.data("mr")==t)g.data("mr",parseInt(g.css("marginRight"),0)||0);if(g.data("bt")==t)g.data("bt",parseInt(g.css("borderTop"),0)||0);if(g.data("bb")==t)g.data("bb",parseInt(g.css("borderBottom"),0)||0);if(g.data("bl")==t)g.data("bl",parseInt(g.css("borderLeft"),0)||0);if(g.data("br")==t)g.data("br",parseInt(g.css("borderRight"),0)||0);if(g.data("lh")==t)g.data("lh",parseInt(g.css("lineHeight"),0)||0);var y=r.width;var b=r.height;if(y>r.startwidth)y=r.startwidth;if(b>r.startheight)b=r.startheight;if(!f.hasClass("fullscreenvideo"))f.css({"font-size":g.data("fsize")*r.bw+"px","padding-top":g.data("pt")*r.bh+"px","padding-bottom":g.data("pb")*r.bh+"px","padding-left":g.data("pl")*r.bw+"px","padding-right":g.data("pr")*r.bw+"px","margin-top":g.data("mt")*r.bh+"px","margin-bottom":g.data("mb")*r.bh+"px","margin-left":g.data("ml")*r.bw+"px","margin-right":g.data("mr")*r.bw+"px","border-top":g.data("bt")*r.bh+"px","border-bottom":g.data("bb")*r.bh+"px","border-left":g.data("bl")*r.bw+"px","border-right":g.data("br")*r.bw+"px","line-height":g.data("lh")*r.bh+"px",height:m*r.bh+"px","white-space":"nowrap"});else f.css({width:r.startwidth*r.bw,height:r.startheight*r.bh});d.width(v*r.bw);d.height(m*r.bh);h=d.width();p=d.height()}else{var g=f;if(g.data("fsize")==t)g.data("fsize",parseInt(g.css("font-size"),0)||0);if(g.data("pt")==t)g.data("pt",parseInt(g.css("paddingTop"),0)||0);if(g.data("pb")==t)g.data("pb",parseInt(g.css("paddingBottom"),0)||0);if(g.data("pl")==t)g.data("pl",parseInt(g.css("paddingLeft"),0)||0);if(g.data("pr")==t)g.data("pr",parseInt(g.css("paddingRight"),0)||0);if(g.data("mt")==t)g.data("mt",parseInt(g.css("marginTop"),0)||0);if(g.data("mb")==t)g.data("mb",parseInt(g.css("marginBottom"),0)||0);if(g.data("ml")==t)g.data("ml",parseInt(g.css("marginLeft"),0)||0);if(g.data("mr")==t)g.data("mr",parseInt(g.css("marginRight"),0)||0);if(g.data("bt")==t)g.data("bt",parseInt(g.css("borderTop"),0)||0);if(g.data("bb")==t)g.data("bb",parseInt(g.css("borderBottom"),0)||0);if(g.data("bl")==t)g.data("bl",parseInt(g.css("borderLeft"),0)||0);if(g.data("br")==t)g.data("br",parseInt(g.css("borderRight"),0)||0);if(g.data("lh")==t)g.data("lh",parseInt(g.css("lineHeight"),0)||0);f.css({"font-size":g.data("fsize")*r.bw+"px","padding-top":g.data("pt")*r.bh+"px","padding-bottom":g.data("pb")*r.bh+"px","padding-left":g.data("pl")*r.bw+"px","padding-right":g.data("pr")*r.bw+"px","margin-top":g.data("mt")*r.bh+"px","margin-bottom":g.data("mb")*r.bh+"px","margin-left":g.data("ml")*r.bw+"px","margin-right":g.data("mr")*r.bw+"px","border-top":g.data("bt")*r.bh+"px","border-bottom":g.data("bb")*r.bh+"px","border-left":g.data("bl")*r.bw+"px","border-right":g.data("br")*r.bw+"px","line-height":g.data("lh")*r.bh+"px","white-space":"nowrap"});p=f.outerHeight(true);h=f.outerWidth(true)}}if(f.data("voffset")==t)f.data("voffset",0);if(f.data("hoffset")==t)f.data("hoffset",0);var w=f.data("voffset")*u;var E=f.data("hoffset")*u;var S=r.startwidth*u;var x=r.startheight*u;if(f.data("x")=="center"||f.data("xcenter")=="center"){f.data("xcenter","center");f.data("x",(S/2-f.outerWidth(true)/2)/u+E)}if(f.data("x")=="left"||f.data("xleft")=="left"){f.data("xleft","left");f.data("x",0/u+E)}if(f.data("x")=="right"||f.data("xright")=="right"){f.data("xright","right");f.data("x",(S-f.outerWidth(true))/u+E)}if(f.data("y")=="center"||f.data("ycenter")=="center"){f.data("ycenter","center");f.data("y",(x/2-f.outerHeight(true)/2)/r.bh+w)}if(f.data("y")=="top"||f.data("ytop")=="top"){f.data("ytop","top");f.data("y",0/r.bh+w)}if(f.data("y")=="bottom"||f.data("ybottom")=="bottom"){f.data("ybottom","bottom");f.data("y",(x-f.outerHeight(true))/r.bh+w)}if(f.hasClass("fade")){f.css({opacity:0,left:u*f.data("x")+s+"px",top:r.bh*f.data("y")+o+"px"})}if(f.hasClass("randomrotate")){f.css({left:u*f.data("x")+s+"px",top:a*f.data("y")+o+"px"});var T=Math.random()*2+1;var k=Math.round(Math.random()*200-100);var M=Math.round(Math.random()*200-100);var _=Math.round(Math.random()*200-100);f.data("repx",M);f.data("repy",_);f.data("repo",f.css("opacity"));f.data("rotate",k);f.data("scale",T);f.transition({opacity:0,scale:T,rotate:k,x:M,y:_,duration:"0ms"})}else{if(r.ie||r.ie9){}else{if(f.find("iframe").length==0)f.transition({scale:1,rotate:0})}}if(f.hasClass("lfr")){f.css({opacity:1,left:15+r.width+"px",top:r.bh*f.data("y")+o+"px"})}if(f.hasClass("lfl")){f.css({opacity:1,left:-15-h+"px",top:r.bh*f.data("y")+o+"px"})}if(f.hasClass("sfl")){f.css({opacity:0,left:u*f.data("x")-50+s+"px",top:r.bh*f.data("y")+o+"px"})}if(f.hasClass("sfr")){f.css({opacity:0,left:u*f.data("x")+50+s+"px",top:r.bh*f.data("y")+o+"px"})}if(f.hasClass("lft")){f.css({opacity:1,left:u*f.data("x")+s+"px",top:-25-p+"px"})}if(f.hasClass("lfb")){f.css({opacity:1,left:u*f.data("x")+s+"px",top:25+r.height+"px"})}if(f.hasClass("sft")){f.css({opacity:0,left:u*f.data("x")+s+"px",top:r.bh*f.data("y")+o-50+"px"})}if(f.hasClass("sfb")){f.css({opacity:0,left:u*f.data("x")+s+"px",top:r.bh*f.data("y")+o+50+"px"})}f.data("timer",setTimeout(function(){f.css({visibility:"visible"});if(f.hasClass("fade")){f.data("repo",f.css("opacity"));f.animate({opacity:1},{duration:f.data("speed"),complete:function(){if(r.ie)e(this).addClass("noFilterClass")}})}if(f.hasClass("randomrotate")){f.transition({opacity:1,scale:1,left:u*f.data("x")+s+"px",top:a*f.data("y")+o+"px",rotate:0,x:0,y:0,duration:f.data("speed")});if(r.ie)f.addClass("noFilterClass")}if(f.hasClass("lfr")||f.hasClass("lfl")||f.hasClass("sfr")||f.hasClass("sfl")||f.hasClass("lft")||f.hasClass("lfb")||f.hasClass("sft")||f.hasClass("sfb")){var n=f.data("easing");if(n==t)n="linear";f.data("repx",f.position().left);f.data("repy",f.position().top);f.data("repo",f.css("opacity"));f.animate({opacity:1,left:u*f.data("x")+s+"px",top:r.bh*f.data("y")+o+"px"},{duration:f.data("speed"),easing:n,complete:function(){}})}},f.data("start")));if(f.data("end")!=t)f.data("timer-end",setTimeout(function(){},f.data("end")))}});var u=jQuery("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");u.data("opt",r)}function(){}function(){}function(){}function(){}e.fn.extend({revolution:function(i){e.fn.revolution.defaults={delay:9e3,startheight:500,startwidth:960,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"bullet",navigationArrows:"withbullet",navigationStyle:"round",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,touchenabled:"on",onHoverStop:"on",stopAtSlide:-1,stopAfterLoops:-1,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,hideSliderAtLimit:0,shadow:1,fullWidth:"off"};i=e.extend({},e.fn.revolution.defaults,i);return this.each(function(){var s=i;var o=e(this);if(!o.hasClass("revslider-initialised")){o.addClass("revslider-initialised");if(o.attr("id")==t)o.attr("id","revslider-"+Math.round(Math.random()*1e3+5));s.firefox13=false;s.ie=!e.support.opacity;s.ie9=document.documentMode==9;var a=e.fn.jquery.split("."),f=parseFloat(a[0]),d=parseFloat(a[1]),v=parseFloat(a[2]||"0");if(f==1&&d<7){o.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+a+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>")}if(!e.support.transition)e.fn.transition=e.fn.animate;e.cssEase["bounce"]="cubic-bezier(0,1,0.5,1.3)";o.find(".caption").each(function(){e(this).addClass("tp-caption")});var g=0;var y=0;var b=0;o.find(".tp-caption iframe").each(function(t){try{if(e(this).attr("src").indexOf("you")>0&&g==0){g=1;var n=document.createElement("script");n.src="http://www.youtube.com/player_api";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r)}}catch(i){}});o.find(".tp-caption iframe").each(function(){});o.find(".tp-caption video").each(function(){});if(s.shuffle=="on"){for(var w=0;w<o.find(">ul:first-child >li").length;w++){var E=Math.round(Math.random()*o.find(">ul:first-child >li").length);o.find(">ul:first-child >li:eq("+E+")").prependTo(o.find(">ul:first-child"))}}s.slots=4;s.act=-1;s.next=0;if(s.startWithSlide!=t)s.next=s.startWithSlide;var x=n("#")[0];if(x.length<9){if(x.split("slide").length>1){var T=parseInt(x.split("slide")[1],0);if(T<1)T=1;if(T>o.find(">ul:first >li").length)T=o.find(">ul:first >li").length;s.next=T-1}}s.origcd=s.delay;s.firststart=1;if(s.navigationHOffset==t)s.navOffsetHorizontal=0;if(s.navigationVOffset==t)s.navOffsetVertical=0;o.append('<div class="tp-loader"></div>');if(o.find(".tp-bannertimer").length==0)o.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');var N=o.find(".tp-bannertimer");if(N.length>0){N.css({width:"0%"})}o.addClass("tp-simpleresponsive");s.container=o;s.slideamount=o.find(">ul:first >li").length;if(o.height()==0)o.height(s.startheight);if(s.startwidth==t||s.startwidth==0)s.startwidth=o.width();if(s.startheight==t||s.startheight==0)s.startheight=o.height();s.width=o.width();s.height=o.height();s.bw=s.startwidth/o.width();s.bh=s.startheight/o.height();if(s.width!=s.startwidth){s.height=Math.round(s.startheight*(s.width/s.startwidth));o.height(s.height)}if(s.shadow!=0){o.parent().append('<div class="tp-bannershadow tp-shadow'+s.shadow+'"></div>');o.parent().find(".tp-bannershadow").css({width:s.width})}o.find("ul").css({display:"none"});if(s.lazyLoad!="on"){o.waitForImages(function(){})}else{var C=o.find("ul >li >img").first();if(C.data("lazyload")!=t)C.attr("src",C.data("lazyload"));C.data("lazydone",1);C.parent().waitForImages(function(){})}e(window).resize(function(){})}})},revpause:function(){},revresume:function(){},revnext:function(t){return this.each(function(){var t=e(this);t.parent().find(".tp-rightarrow").click()})},revprev:function(){},revmaxslide:function(t){return e(this).find(">ul:first-child >li").length},revcurrentslide:function(t){var n=e(this);var r=n.parent().find(".tp-bannertimer");var i=r.data("opt");return i.act},revlastslide:function(){},revshowslide:function(){}