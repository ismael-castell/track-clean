function PredictiveSearchExtender(n,t,i,r,u,f,e){var o=this;this.clientID=n;this.resultsID="results_"+n;this.textBoxID=t;this.resultsHolderID=i;this.minChars=r;this.selectedCssClass=f;this.resultsCssClass=e;this.selectionEnabled=u;this.timeout=undefined;this.hideTimeout=undefined;this.doNotHide=!1;this.selectedResult=-1;this.lastSearchQuery="";this.RecieveSearchResults=function(n,t){o.selectedResult=-1;o.lastSearchQuery=t;$cmsj("#"+o.resultsID).html(n);o.selectionEnabled&&($cmsj("#"+o.resultsID+" > :not(.nonSelectable)").hover(function(){$cmsj("#"+o.resultsID+" > *").removeClass(o.selectedCssClass);$cmsj(this).addClass(o.selectedCssClass);o.selectedResult=$cmsj("#"+o.resultsID+" > :not(.nonSelectable)").index($cmsj(this))},function(){}),$cmsj("#"+o.resultsID+" > .nonSelectable").hover(function(){},function(){}));n!=""?$cmsj("#"+o.resultsID).show():$cmsj("#"+o.resultsID).hide()};this.HideResults=function(){};this.MoveSelectedDown=function(){var t=$cmsj("#"+o.resultsID),n=$cmsj("#"+o.resultsID+" > :not(.nonSelectable)");t.is(":visible")?o.selectedResult+1<=n.length-1?(o.selectedResult++,n.removeClass(o.selectedCssClass),n.eq(o.selectedResult).addClass(o.selectedCssClass)):(o.selectedResult=-1,n.removeClass(o.selectedCssClass)):t.html()!=""&&(o.selectedResult=0,n.removeClass(o.selectedCssClass),n.eq(o.selectedResult).addClass(o.selectedCssClass),t.show())};this.MoveSelectedUp=function(){var n=$cmsj("#"+o.resultsID+" > :not(.nonSelectable)");o.selectedResult>0?(o.selectedResult--,n.removeClass(o.selectedCssClass),n.eq(o.selectedResult).addClass(o.selectedCssClass)):o.selectedResult==0?(o.selectedResult=-1,n.removeClass(o.selectedCssClass)):o.selectedResult==-1&&(o.selectedResult=n.length-1,n.removeClass(o.selectedCssClass),n.eq(o.selectedResult).addClass(o.selectedCssClass))};this.KeyChanged=function(){var n=$cmsj("#"+o.textBoxID).val();o.timeout&&clearTimeout(o.timeout);n.length>=o.minChars?n!==o.lastSearchQuery&&(o.timeout=setTimeout(function(){o.CallPredictiveSearch(n,n)},500)):o.timeout=setTimeout(function(){$cmsj("#"+o.resultsID).html("").hide();o.lastSearchQuery=""},500)};this.RedirectToResult=function(n){var i=$cmsj("#"+o.resultsID+" ."+o.selectedCssClass),t;i.length==1&&(t="",t=i.attr("href"),(t==undefined||t=="")&&(t=i.find("[href]").attr("href")),t!=undefined&&t!=""&&(n.preventDefault(),document.location.href=t))};$cmsj(function(){$cmsj("#"+o.resultsHolderID).html("<div id='"+o.resultsID+"' class='"+o.resultsCssClass+"'><\/div>");o.HideResults();$cmsj("#"+o.textBoxID).attr("autocomplete","off").keyup(o.KeyChanged).keydown(function(n){switch(n.keyCode){case 38:o.selectionEnabled&&o.MoveSelectedUp();n.preventDefault();break;case 40:o.selectionEnabled&&o.MoveSelectedDown();n.preventDefault();break;case 27:$cmsj("#"+o.resultsID).hide()}}).bind("keypress keydown keyup",function(){}