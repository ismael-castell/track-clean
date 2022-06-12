var MailMunchPopover=function(i){this.overlay=document.createElement("div"),this.dialog=document.createElement("div"),this.sensitivity=20,MailMunchBaseForm.call(this,i)};MailMunchHelpers.inheritPrototype(MailMunchPopover,MailMunchBaseForm),MailMunchPopover.prototype.loadHTML=function(i){var e=document.getElementById("mailmunch-popover-frame-"+this.viewId);this._loadHTML(e,i)},MailMunchPopover.prototype.addClickTriggers=function(){var e=this,o=[];if("undefined"!=typeof document.querySelectorAll){var i=document.body.querySelectorAll('*[href="https://www.mailmunch.com#'+e.options.widgetID+'"]');MailMunchHelpers.forEach(i,function(i){o.push(i)});var t=document.body.querySelectorAll('*[href="#mailmunch-pop-'+e.options.widgetID+'"]');MailMunchHelpers.forEach(t,function(i){o.push(i)})}var s=MailMunchHelpers.getElementsByClassName(document.body,"mailmunch-pop-"+e.options.widgetID);MailMunchHelpers.forEach(s,function(i){o.push(i)}),o.length,MailMunchHelpers.forEach(o,function(i){i.onclick=function(){}}),e.retriesTrigger<10&&setTimeout(function(){},1e3)},MailMunchPopover.prototype.prepare=function(){var i=this;this.prepared||(this.overlay.className="mailmunch-overlay",this.overlay.id="mailmunch-overlay-"+this.viewId,this.overlay.style.display="none",this.overlay.style.background=this.options.overlayColor,this.overlay.onclick=function(){i.hide()},document.body.appendChild(this.overlay),MailMunchHelpers.isPhone()?(this._scrollLock=!1,this._topMargin=40,this._currentScale=1,this.dialog.className="mailmunch-popover-mobile",this.dialog.id="mailmunch-popover-"+this.viewId,this.dialog.style.cssText="position:absolute;left:-5000px;top:-5000px;",this.dialog.innerHTML='<div class="mailmunch-popover-container" id="mailmunch-popover-container-'+this.viewId+'"><iframe id="mailmunch-popover-frame-'+this.viewId+'" title="'+this.options.widgetName+'" class="mailmunch-popover-iframe" frameborder="0" scrolling="no" allowtransparency="true" style="max-width: '+this.options.maxWidth+'px;"></iframe></div>'):(this.dialog.className="mailmunch-popover",this.dialog.id="mailmunch-popover-"+this.viewId,this.dialog.style.cssText="position:fixed;left:-5000px;top:-5000px;",this.dialog.innerHTML='<div class="mailmunch-popover-container" id="mailmunch-popover-container-'+this.viewId+'"><div class="mailmunch-inner-overlay" id="mailmunch-inner-overlay-'+this.viewId+'"></div><div class="mailmunch-popover-content" style="max-width: '+this.options.maxWidth+'px;"><div class="mailmunch-popover-iframe-scaler" style="padding-top: '+this.options.iframeHeight+'px;"><iframe id="mailmunch-popover-frame-'+this.viewId+'" title="'+this.options.widgetName+'" class="mailmunch-popover-iframe" frameborder="0" scrolling="no" allowtransparency="true" style="height: '+this.options.iframeHeight+'px;"></iframe></div></div></div>'),document.body.appendChild(this.dialog),this.iframeContainer=document.getElementById("mailmunch-popover-container-"+this.viewId),this.iframe=document.getElementById("mailmunch-popover-frame-"+this.viewId),this.innerOverlay=document.getElementById("mailmunch-inner-overlay-"+this.viewId),this.innerOverlay&&(this.innerOverlay.onclick=function(){i.hide()}),this.addClickTriggers(),this._afterPrepare())},MailMunchPopover.prototype.resizeWidget=function(i,e){this._beforeResize(i,e),this.reposition()},MailMunchPopover.prototype._setOverflow=function(){MailMunchHelpers.addClass(document.documentElement,"mailmunch-pop-open"),MailMunchHelpers.addClass(document.body,"mailmunch-pop-open")},MailMunchPopover.prototype._unsetOverflow=function(){},MailMunchPopover.prototype.show=function(i){var e=this;this._beforeShow(i)&&(this.overlay.style.display="block",this.dialog.style.display="block",this.dont_show=!0,""!=e.options.animation&&MailMunchHelpers.addClass(this.iframeContainer,e.options.animation),MailMunchHelpers.isPhone()?(this._scrollLock=!0,this.scaleFrame(),this.scrollToForm(0)):this.options.contentGate&&this._setOverflow(),MailMunchHelpers.setCookie("mailmunch_shown_"+this.options.widgetID,"true",this.options.cookieDuration),this.options.widgetTestID&&MailMunchHelpers.setCookie("mailmunch_shown_test_"+this.options.widgetTestID,"true",this.options.cookieDuration))},MailMunchPopover.prototype.preview=function(){var i=this;this._beforePreview()&&(this.overlay.style.display="block",this.dialog.style.display="block",this.dont_show=!0,""!=i.options.animation&&MailMunchHelpers.addClass(this.iframeContainer,i.options.animation),MailMunchHelpers.isPhone()?(this._scrollLock=!0,this.scaleFrame(),this.scrollToForm(0)):this.options.contentGate&&this._setOverflow())},MailMunchPopover.prototype.hide=function(){if(this.options.contentGate&&!this.subscribed)return!1;this.dialog.style.display="none",this.overlay.style.display="none",""!=this.options.animation&&MailMunchHelpers.removeClass(this.iframeContainer,this.options.animation),MailMunchHelpers.isPhone()?this._scrollLock=!1:this.options.contentGate&&this._unsetOverflow()},MailMunchPopover.prototype.remove=function(){this.dialog.remove(),this.overlay.remove()},MailMunchPopover.prototype.reposition=function(){var e=this,i=document.getElementById("mailmunch-popover-frame-"+this.viewId),o=this.dialog,t=this.overlay;if(t&&"block"==t.style.display||(o.style.display="none"),i.style.height=this.options.iframeHeight+"px",o.style.top="0px",o.style.left="0px",MailMunchHelpers.isPhone());else{var s=MailMunchHelpers.getElementsByClassName(o,"mailmunch-popover-iframe-scaler");MailMunchHelpers.forEach(s,function(){})}},MailMunchPopover.prototype.inputFocus=function(i){if(MailMunchHelpers.isPhone()){var e=this;this._scrollLock=!1,this._unscaled||(this.unscaleFrame(),clearTimeout(this._scrollTimer),setTimeout(function(){e.scrollToForm(i)},100))}},MailMunchPopover.prototype.unscaleFrame=function(){this._unscaled=!0,this.iframe.style.webkitTransform="none",this.dialog.style.marginTop=this._topMargin+"px",this._currentScale=1},MailMunchPopover.prototype.scaleFrame=function(){if(!this._unscaled){this.iframe.style.webkitTransform="none",this._currentScale=.9*MailMunchHelpers.getScale(this.iframe);var i=MailMunchHelpers.getZoomFactor();this.iframe.style.webkitTransform="scale("+this._currentScale+")",this.dialog.style.marginTop=this._topMargin/i+"px"}},MailMunchPopover.prototype.inputBlur=function(){MailMunchHelpers.isPhone()&&(this._scrollLock=!0)},MailMunchPopover.prototype.scrollToForm=function(i){var e=this.iframe.getBoundingClientRect(),o=this._unscaled?e.width:1.1*e.width,t=MailMunchHelpers.getDocumentWidth()/2-o/2,s=this.dialog.offsetTop+i;window.scrollTo(t,s)},MailMunchPopover.prototype.scrollForm=function(i){var e=this,o=this.iframe.getBoundingClientRect(),t=window.scrollY;if(i){var s=MailMunchHelpers.getZoomFactor(),n=o.height-MailMunchHelpers.getWindowHeight();t=t-n-this._topMargin/s}clearTimeout(this._scrollTimer),this._scrollTimer=setTimeout(function(){}