(function(){}(window,'detectZoom',function(){}));var wpcom_img_zoomer={zoomed:false,timer:null,interval:1000,imgNeedsSizeAtts:function(){},updateResizeUrl:function(url,width,height){var url_resize=url.match(/resize=([0-9%2C,]+)/);if(url_resize===null||!url_resize[1]){return url;}
var url_sizes=url_resize[1].split(',');var new_resize=null;if(url_sizes[0]!==width){new_resize=width;}
if(url_sizes[1]!==height){if(new_resize!==null){new_resize+='%2C';}
new_resize+=height;}
if(new_resize!==url_resize[1]){new_resize='resize='+new_resize;url=url.replace(url_resize[0],new_resize);}
return url;},init:function(){},stop:function(){},getScale:function(){var scale=detectZoom.device();if(scale>3){scale=Math.ceil(scale*2)/2;}
return scale;},shouldZoom:function(){},zoomImages:function(){var t=this;var scale=t.getScale();if(!t.shouldZoom(scale)){return;}
t.zoomed=true;var imgs=document.getElementsByTagName("img");for(var i=0;i<imgs.length;i++){if("complete"in imgs[i]&&!imgs[i].complete)
continue;if(imgs[i].hasAttribute('srcset')&&imgs[i].hasAttribute('sizes')&&('sizes'in imgs[i])){continue;}
var imgScale=imgs[i].getAttribute("scale");if(imgScale==scale||imgScale=="0")
continue;var scaleFail=imgs[i].getAttribute("scale-fail");if(scaleFail&&scaleFail<=scale)
continue;if(!(imgs[i].width&&imgs[i].height))
continue;if(!imgScale&&imgs[i].getAttribute("data-lazy-src")&&(imgs[i].getAttribute("data-lazy-src")!==imgs[i].getAttribute("src")))
continue;if(t.scaleImage(imgs[i],scale)){imgs[i].setAttribute("scale",scale);}
else{imgs[i].setAttribute("scale","0");}}},scaleImage:function(img,scale){var t=this;var newSrc=img.src;if(img.parentNode.className.match(/slideshow-slide/))
return false;if(img.src.match(/^https?:\/\/([^\/]*\.)?gravatar\.com\/.+[?&](s|size)=/)){newSrc=img.src.replace(/([?&](s|size)=)(\d+)/,function(){});}
else if(img.src.match(/^https?:\/\/([^\/]+)\.files\.wordpress\.com\/.+[?&][wh]=/)){if(img.src.match(/[?&]crop/))
return false;var changedAttrs={};var matches=img.src.match(/([?&]([wh])=)(\d+)/g);for(var i=0;i<matches.length;i++){var lr=matches[i].split('=');var thisAttr=lr[0].replace(/[?&]/g,'');var thisVal=lr[1];var originalAtt='original'+thisAttr,originalSize=img.getAttribute(originalAtt);if(originalSize===null){originalSize=thisVal;img.setAttribute(originalAtt,originalSize);if(t.imgNeedsSizeAtts(img)){img.width=img.width;img.height=img.height;}}
var size=thisAttr=='w'?img.clientWidth:img.clientHeight;var naturalSize=(thisAttr=='w'?img.naturalWidth:img.naturalHeight);var targetSize=Math.ceil(size*scale);targetSize=Math.max(targetSize,originalSize);if(scale>img.getAttribute("scale")&&targetSize<=naturalSize)
targetSize=thisVal;if(naturalSize<thisVal)
targetSize=thisVal;if(targetSize!=thisVal)
changedAttrs[thisAttr]=targetSize;}
var w=changedAttrs.w||false;var h=changedAttrs.h||false;if(w){newSrc=img.src.replace(/([?&])w=\d+/g,function($0,$1){return $1+'w='+w;});}
if(h){newSrc=newSrc.replace(/([?&])h=\d+/g,function($0,$1){return $1+'h='+h;});}}
else if(img.src.match(/^https?:\/\/([^\/]+\.)*(wordpress|wp)\.com\/mshots\/.+[?&]w=\d+/)){newSrc=img.src.replace(/([?&]w=)(\d+)/,function(){});newSrc=newSrc.replace(/([?&]h=)(\d+)/,function(){});}
else if(img.src.match(/^https?:\/\/([^\/.]+\.)*(wp|wordpress)\.com\/imgpress\?(.+)/)){var imgpressSafeFunctions=["zoom","url","h","w","fit","filter","brightness","contrast","colorize","smooth","unsharpmask"];var qs=RegExp.$3.split('&');for(var q in qs){q=qs[q].split('=')[0];if(imgpressSafeFunctions.indexOf(q)==-1){return false;}}
img.width=img.width;img.height=img.height;if(scale==1)
newSrc=img.src.replace(/\?(zoom=[^&]+&)?/,'?');else
newSrc=img.src.replace(/\?(zoom=[^&]+&)?/,'?zoom='+scale+'&');}
else if(img.src.match(/^https?:\/\/([^\/.]+\.)*(wp|wordpress)\.com\/latex\.php\?(latex|zoom)=(.+)/)||img.src.match(/^https?:\/\/i[\d]{1}\.wp\.com\/(.+)/)){if(navigator.userAgent.indexOf('Firefox')>-1){return;}
img.width=img.width;img.height=img.height;if(scale==1)
newSrc=img.src.replace(/\?(zoom=[^&]+&)?/,'?');else
newSrc=img.src.replace(/\?(zoom=[^&]+&)?/,'?zoom='+scale+'&');if(!img.srcset&&img.src.match(/resize/)){newSrc=t.updateResizeUrl(newSrc,img.width,img.height);img.setAttribute('srcset',newSrc);}}
else if(img.src.match(/^https?:\/\/[^\/]+\/.*[-@]([12])x\.(gif|jpeg|jpg|png)(\?|$)/)){img.width=img.width;img.height=img.height;var currentSize=RegExp.$1,newSize=currentSize;if(scale<=1)
newSize=1;else
newSize=2;if(currentSize!=newSize)
newSrc=img.src.replace(/([-@])[12]x\.(gif|jpeg|jpg|png)(\?|$)/,'$1'+newSize+'x.$2$3');}
else{return false;}
if(newSrc!=img.src){var prevSrc,origSrc=img.getAttribute("src-orig");if(!origSrc){origSrc=img.src;img.setAttribute("src-orig",origSrc);}
prevSrc=img.src;img.onerror=function(){}