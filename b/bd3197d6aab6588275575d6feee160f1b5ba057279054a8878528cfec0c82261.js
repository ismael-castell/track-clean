/* Do not modify this file directly. It is compiled from other files. */
/* global WPCOM_sharing_counts, grecaptcha */
!function(){var e=document.currentScript,t=!1;function n(t){var n=document.createElement("script"),o=e||document.getElementsByTagName("script")[0];n.setAttribute("async",!0),n.setAttribute("src",t),o.parentNode.insertBefore(n,o)}function(){}function r(e,t){if(e.closest)return e.closest(t);var n=e;do{if(o(n,t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null}function(){}function a(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function(){}function(){}function c(e){return!e||"none"===e.style.display}var l=".sharing-hidden .inner",d="data-sharing-more-button-id";function h(e){this.button=e,this.pane=r(e,"div").querySelector(l),this.openedBy=null,this.recentlyOpenedByHover=!1,h.instances.push(this),this.pane.setAttribute(d,h.instances.length-1),this.attachHandlers()}if(h.instances=[],h.hoverOpenDelay=200,h.recentOpenDelay=400,h.hoverCloseDelay=300,h.instantiateOrReuse=function(e){var t=r(e,"div").querySelector(l),n=t&&t.getAttribute(d),o=h.instances[n];return o||new h(e)},h.getButtonInstanceFromPane=function(){},h.closeAll=function(){},h.prototype.open=function(){var e,t,n=[0,0];function(){}function(){}for(e=o(this.button),t=this.button.offsetParent||document.documentElement;t&&(t===document.body||t===document.documentElement)&&"static"===getComputedStyle(t).getPropertyValue("position");)t=t.parentNode;t&&t!==this.button&&1===t.nodeType&&(n=[(n=o(t))[0]+r(t,"border-left-width"),n[1]+r(t,"border-top-width")]);var i=e[0]-n[0]-r(this.button,"margin-left"),a=e[1]-n[1]-r(this.button,"margin-top");this.pane.style.left=i+"px",this.pane.style.top=a+this.button.offsetHeight+3+"px",u(this.pane)},h.prototype.close=function(){s(this.pane),this.openedBy=null},h.prototype.toggle=function(){},h.prototype.resetCloseTimer=function(){clearTimeout(this.closeTimer),this.closeTimer=setTimeout(this.close.bind(this),h.hoverCloseDelay)},h.prototype.attachHandlers=function(){this.buttonClick=function(e){e.preventDefault(),e.stopPropagation(),this.openedBy="click",clearTimeout(this.openTimer),clearTimeout(this.closeTimer),m(),this.recentlyOpenedByHover?(this.recentlyOpenedByHover=!1,clearTimeout(this.hoverOpenTimer),this.open()):this.toggle()}.bind(this),this.buttonEnter=function(){this.openedBy||(this.openTimer=setTimeout(function(){m(),this.open(),this.openedBy="hover",this.recentlyOpenedByHover=!0,this.hoverOpenTimer=setTimeout(function(){this.recentlyOpenedByHover=!1}.bind(this),h.recentOpenDelay)}.bind(this),h.hoverOpenDelay)),clearTimeout(this.closeTimer)}.bind(this),this.buttonLeave=function(){"hover"===this.openedBy&&this.resetCloseTimer(),clearTimeout(this.openTimer)}.bind(this),this.paneEnter=function(){clearTimeout(this.closeTimer)}.bind(this),this.paneLeave=function(){}.bind(this),this.documentClick=function(){this.close()}.bind(this),this.button.addEventListener("click",this.buttonClick),document.addEventListener("click",this.documentClick),void 0===document.ontouchstart&&(this.button.addEventListener("mouseenter",this.buttonEnter),this.button.addEventListener("mouseleave",this.buttonLeave),this.pane.addEventListener("mouseenter",this.paneEnter),this.pane.addEventListener("mouseleave",this.paneLeave))},window.sharing_js_options&&window.sharing_js_options.counts){var p={done_urls:[],get_counts:function(){var e,t,o,r,i;if("undefined"!=typeof WPCOM_sharing_counts)for(e in WPCOM_sharing_counts)if(o=WPCOM_sharing_counts[e],void 0===p.done_urls[o]){for(r in t={pinterest:[window.location.protocol+"//api.pinterest.com/v1/urls/count.json?callback=WPCOMSharing.update_pinterest_count&url="+encodeURIComponent(e)],facebook:[window.location.protocol+"//graph.facebook.com/?callback=WPCOMSharing.update_facebook_count&ids="+encodeURIComponent(e)]})if(document.querySelector("a[data-shared=sharing-"+r+"-"+o+"]")){for(;i=t[r].pop();)n(i);window.sharing_js_options.is_stats_active&&p.bump_sharing_count_stat(r)}p.done_urls[o]=!0}},get_permalink:function(){},update_facebook_count:function(e){var t,n;if(e)for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&e[t].share&&e[t].share.share_count&&(n=p.get_permalink(t))in WPCOM_sharing_counts&&p.inject_share_count("sharing-facebook-"+WPCOM_sharing_counts[n],e[t].share.share_count)},update_pinterest_count:function(e){void 0!==e.count&&1*e.count>0&&p.inject_share_count("sharing-pinterest-"+WPCOM_sharing_counts[e.url],e.count)},inject_share_count:function(e,t){i(document.querySelectorAll("a[data-shared="+e+"] > span"),function(e){a(e.querySelector(".share-count"));var n=document.createElement("span");n.className="share-count",n.textContent=p.format_count(t),e.appendChild(n)})},format_count:function(e){return e<1e3?e:e>=1e3&&e<1e4?String(e).substring(0,1)+"K+":"10K+"},bump_sharing_count_stat:function(){}};window.WPCOMSharing=p}function f(e){return/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(e)}function(){}