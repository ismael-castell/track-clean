!function(){function o(o){var i=x.cookie,n=o+"=",t=i.indexOf("; "+n);if(-1==t){if(t=i.indexOf(n),0!=t)return null}else t+=2;var e=x.cookie.indexOf(";",t);return-1==e&&(e=i.length),i.substring(t+n.length,e)}function i(){var o=location.hostname.match(/.*(sogou?\.com)$/);return null!==o?o[1]:"sogo.com"}function n(o,i){o=CryptoJS.enc.Utf8.parse(o),i=CryptoJS.enc.Utf8.parse(i);var n=CryptoJS.AES.encrypt(o,i,{iv:i,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7});return CryptoJS.enc.Base64.stringify(n.ciphertext)}function t(o){if(!$(o.loginBtn))return!1;var i=o.loginBtn,n=$(o.parent)||$("body"),t=o.cbLink||"https://www.sogou.com/login/qq_login_callback_page.html",e=o.cbFn;$(i)[0]&&($(i)[0].onclick=function(){return u("webindex_new","show_login","sogou_login"),a(n,t),e&&e(),!1})}function e(){if($("#loginStyle").length>0)return!1;var o=".mask-layer{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;opacity:.4;filter:alpha(opacity=40);z-index:1111111112}.login-wrap{font-family:'Microsoft Yahei';font-size:13px;width:566px;height:448px;background-color:#fff;position:absolute;top:50%;left:50%;margin:-219px 0 0 -263px;z-index:1111111113;-webkit-box-shadow:0 9px 50px 0 rgba(51,51,51,0.5);box-shadow:0 9px 50px 0 rgba(51,51,51,0.5)}.login-wrap{font-family:'Microsoft Yahei';font-size:13px;width:566px;height:448px;background-color:#fff;position:fixed;top:50%;left:50%;margin:-219px 0 0 -263px;z-index:1111111113;-webkit-box-shadow:0 9px 50px 0 rgba(51,51,51,0.5);box-shadow:0 9px 50px 0 rgba(51,51,51,0.5)}.login-wrap .mask-layer{height:auto;position:absolute;top:56px;bottom:0;z-index:10}.login-wrap .login-tips{position:absolute;top:50%;left:50%;margin-left:-162px;margin-top:-95px;width:278px;height:148px;z-index:15;background-color:#fff;padding:15px 22px 30px 24px}.login-wrap .login-tips .yzm-box{height:40px;*zoom:1;margin-bottom:37px;position:relative}.login-wrap .login-tips .error{position:absolute;line-height:30px;bottom:-30px;font-size:12px;left:0;color:#ff532e}.login-wrap .login-tips h5{margin-top:auto;line-height:25px;margin-bottom:5px;color:#333;font-size:16px;font-weight:normal}.login-wrap .login-tips input{width:100px;height:38px;border:solid 1px #e9e9e9;margin-right:8px;float:left;padding:0 5px;outline:0}.login-wrap .login-tips .yzm{margin-right:8px;float:left;width:110px;height:40px;overflow:hidden}.login-wrap .login-tips .yzm img{width:100%;height:100%}.login-wrap .login-tips .change{float:left;line-height:20px;color:#999;font-size:12px}.login-wrap .login-tips .tips-btn{overflow:hidden;height:40px}.login-wrap .login-tips .tips-btn a{text-decoration-line:none;float:left;width:132px;line-height:38px;border:solid 1px #ddd;font-size:16px;text-align:center;color:#333;border-radius:2px}.login-wrap .login-tips .tips-btn .ok{background-color:#ff532e;border:solid 1px #ff532e;margin-left:8px;color:#fff}.login-wrap h3{height:56px;line-height:56px;font-size:18px;color:#555;background-color:#f5f5f5;font-weight:normal;padding:0 20px;overflow:hidden;margin-bottom:22px;z-index:1111111113;}.login-wrap .title-tab{text-align:center;margin-bottom:20px;color:#555}.login-wrap .title-tab span{margin:0 30px;display:inline-block;*display:inline;*zoom:1;font-size:15px;line-height:24px;padding:5px 0;border-bottom:2px solid #fff;cursor:pointer}"+'.login-wrap .title-tab span.cur{border-color:#ff6542;color:#ff6542}.login-wrap .del{width:18px;height:18px;overflow:hidden;position:absolute;z-index:2;top:20px;right:20px;background:url("/web/index/images/sprite_login.png") no-repeat;background-image:-webkit-image-set(url("/web/index/images/sprite_login@2x.png") 2x,url("/web/index/images/sprite_login.png") 1x);background-image:image-set(url("/web/index/images/sprite_login@2x.png") 2x,url("/web/index/images/sprite_login.png") 1x);background-position:0 -55px}.login-wrap .logo{width:24px;height:24px;display:inline-block;*display:inline;*zoom:1;overflow:hidden;background:url("/web/index/images/logo/logo.png") no-repeat;background-image:-webkit-image-set(url("/web/index/images/logo/logo@x2.png") 2x,url("/web/index/images/logo/logo.png") 1x);background-image:image-set(url("/web/index/images/logo/logo@x2.png") 2x,url("/web/index/images/logo/logo.png") 1x);background-position:0 0;vertical-align:middle;position:relative;top:-2px;margin-right:8px}.login-wrap .login-content{margin:0 auto;width:400px}.login-wrap .input-wrap{width:398px;height:93px;border:solid 1px #e2e2e2;-webkit-border-radius:6px;border-radius:6px}.login-wrap .input-box{position:relative;height:16px;padding:14px 0 16px 34px}.login-wrap .input-box .tips{position:absolute;left:34px;top:15px;line-height:16px;color:#bbb}.login-wrap .input-box .yzm-link{position:absolute;top:15px;right:13px;color:#ff6542;cursor:pointer}.login-wrap .input-box .input-icon{position:absolute;top:15px;left:13px;width:12px;height:16px;background:url("/web/index/images/sprite_login.png") no-repeat;background-image:-webkit-image-set(url("/web/index/images/sprite_login@2x.png") 2x,url("/web/index/images/sprite_login.png") 1x);background-image:image-set(url("/web/index/images/sprite_login@2x.png") 2x,url("/web/index/images/sprite_login.png") 1x);background-position:0 -55px}.login-wrap .input-box .input-icon.input-tel{background-position:-52px -55px}.login-wrap .input-box .input-icon.input-yzm{background-position:-72px -55px}.login-wrap .input-box input{border:0;font-size:13px;font-family:\'Microsoft Yahei\';outline:0}.login-wrap .input-box+.input-box{border-top:1px solid #f3f3f3}.login-wrap .login-btn{display:block;height:40px;line-height:40px;text-align:center;color:#fff;background-color:#ff6542;font-size:16px;letter-spacing:10px;margin-bottom:26px;-webkit-border-radius:2px;border-radius:2px;text-decoration:none}.login-wrap .operate-box{line-height:22px;padding:13px 0;height:22px;overflow: hidden;}.login-wrap .input-box .input-error{color:#ff6542;position:absolute;top:15px;right:13px;}.login-wrap .operate-box .login-right{float:right}.login-wrap .operate-box .login-right a{text-decoration-line:none;color:#666}.login-wrap .operate-box .login-right i{font-style:normal;color:#f1f1f1;margin:0 8px}.login-wrap .operate-box .show-password{float:left;color:#999}.login-wrap .operate-box .show-password input{margin-right:8px;position:relative;top:2px}.login-wrap .other-login{width:400px;margin:0 auto;text-align:center}.login-wrap .other-login h4{font-weight:normal;position:relative;height:1px;line-height:0;background-color:#e7e7e7;color:#bbb;margin-bottom:26px}.login-wrap .other-login h4 span{background-color:#fff;padding:0 8px;line-height:14px;position:relative;top:-7px}.login-wrap .other-login a{display:inline-block;*display:inline;*zoom:1;width:47px;height:47px;margin:0 17px;background:url("/web/index/images/sprite_login.png") no-repeat;background-image:-webkit-image-set(url("/web/index/images/sprite_login@2x.png") 2x,url("/web/index/images/sprite_login.png") 1x);background-image:image-set(url("/web/index/images/sprite_login@2x.png") 2x,url("/web/index/images/sprite_login.png") 1x);background-position:0 0}.login-wrap .other-login .ico-wx{background-position:-55px 0}.login-wx-wrap{width:800px;height:496px;-webkit-box-shadow:0 9px 50px 0 rgba(51,51,51,0.5);box-shadow:0 9px 50px 0 rgba(51,51,51,0.5);background-color:#fff;position:fixed;top:50%;left:50%;margin:-258px 0 0 -402px;z-index:1111111113;text-align:center;}.login-wx-wrap .wx-del{width:18px;height:18px;overflow:hidden;position:absolute;z-index:2;top:20px;right:20px;background:url("/web/index/images/sprite_login.png") no-repeat;background-image:-webkit-image-set(url("/web/index/images/sprite_login@2x.png") 2x,url("/web/index/images/sprite_login.png") 1x);background-image:image-set(url("/web/index/images/sprite_login@2x.png") 2x,url("/web/index/images/sprite_login.png") 1x);background-position:0 -55px}.login-wx-wrap .QQ-del{width:18px;height:18px;overflow:hidden;position:absolute;z-index:2;top:16px;right:20px;background:url("/web/index/images/sprite_login.png") no-repeat;background-image:-webkit-image-set(url("/web/index/images/sprite_login@2x.png") 2x,url("/web/index/images/sprite_login.png") 1x);background-image:image-set(url("/web/index/images/sprite_login@2x.png") 2x,url("/web/index/images/sprite_login.png") 1x);background-position:-26px -55px}.login-wx-wrap .ewm{width:100%;height:456px;padding-top:40px;margin:0 auto;margin-bottom:37px;-webkit-border-radius:3px;border-radius:3px}.login-wx-wrap ul{position:absolute;left:531px;top:76px;z-index:20;text-align:left}.login-wx-wrap ul li{padding:7px 0;font-size:12px;line-height:22px;border-bottom:1px dotted #e3e3e3}.login-wx-wrap ul li a{color:#3481cf;margin-right:8px}.login-wx-wrap ul li.font-gray{color:#666}.login-wx-wrap ul li .protocol{margin-left:8px}.login-wx-wrap ul li.no-line{border:0;padding-top:28px}',i=$("<style/>").attr({id:"loginStyle"});$(i)[0].type="text/css",$("body").append(i),i[0].styleSheet?i[0].styleSheet.cssText=o:i[0].appendChild(document.createTextNode(o))}function a(o,n){if($("#loginBox").length>0)return $("#sogoLoginWrap").show(),$("#loginMask").show(),$(".login-tips").hide(),!1;e();var t='<input type="password" value="" style="display:none;">',a='<div id="emptyLogin"></div><div id="loginBox"><div class="mask-layer" style="display:none" id="loginMask"></div><div class="login-wrap"id="sogoLoginWrap"><div class="mask-layer"></div><div class="login-tips"><h5>\u8bf7\u8f93\u5165\u56fe\u7247\u9a8c\u8bc1\u7801</h5><div class="yzm-box"><span class="error"></span><input type="text"><span class="yzm"><img src=""alt=""></span><span class="change">\u770b\u4e0d\u6e05<br>\u6362\u4e00\u5f20</span></div><div class="tips-btn"><a href="javascript:;">\u53d6\u6d88</a><a href="javascript:;"class="ok">\u786e\u8ba4</a></div></div><h3><span class="logo"></span>\u641c\u72d7\u641c\u7d22</h3><a href="javascript:;"class="del"></a><div class="title-tab"><span class="cur">\u8d26\u53f7\u767b\u5f55</span><span>\u77ed\u4fe1\u767b\u5f55</span></div><form action=""><div class="login-content"><div class="input-wrap"><div class="input-box"><span class="tips">\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801</span><i class="input-icon input-tel"></i><input type="text"value=""><p class="input-error"></p></div><div class="input-box"><span class="tips">\u8f93\u5165\u5bc6\u7801</span><i class="input-icon input-yzm"></i><input type="text"value="">'+t+'<a class="yzm-link">\u83b7\u53d6\u9a8c\u8bc1\u7801</a><p class="input-error"></p></div></div><div class="operate-box"><p class="show-password"><input type="checkbox" id="showPw" name="showPw"><label for="showPw">\u663e\u793a\u5bc6\u7801</label></p><div class="login-right"><a href="javascript:void(0)">\u5fd8\u8bb0\u5bc6\u7801\uff1f</a><i>|</i><a href="javascript:void(0)">\u6ce8\u518c\u65b0\u8d26\u53f7</a></div></div><a href="javascript:void(0)"class="login-btn">\u767b\u5f55</a></div></form><div class="other-login"><h4><span>\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f</span></h4><div><a href="javascript:;"class="ico-QQ"></a><a href="javascript:;"class="ico-wx"></a></div></div></div><div class="login-wx-wrap"><a href="javascript:;"class="wx-del"></a><div class="ewm"><iframe width="100%"height="456"frameborder="0"scrolling="no"src=""></iframe></div></div><div class="login-wx-wrap"><a href="javascript:;"class="QQ-del"></a><iframe width="100%"height="100%"frameborder="0"scrolling="no"src=""></iframe><ul><li><a href="javascript:;">\u641c\u72d7\u641c\u7d22</a>\u5c06\u83b7\u5f97\u4ee5\u4e0b\u6743\u9650\uff1a</li><li class="font-gray">\u83b7\u5f97\u60a8\u7684\u6635\u79f0\u3001\u5934\u50cf\u3001\u6027\u522b</li><li class="no-line">\u6388\u6743\u540e\u8868\u660e\u60a8\u4ee5\u540c\u610f<a href="javascript:;"class="protocol">QQ\u767b\u5f55\u670d\u52a1\u534f\u8bae</a></li></ul></div></div>';$(".header").after(a),$(".login-wrap:eq(0)").attr("id","sogoLoginWrap"),$(".login-wx-wrap:eq(0)").attr("id","wxLoginWrap").hide(),$(".login-wx-wrap:eq(1)").attr("id","qqLoginWrap").hide(),$(".mask-layer").hide(),$("#loginMask").show(),$(".ico-QQ").click(function(){var o=window.navigator.userAgent.toLowerCase(),i=o.indexOf("macintosh")>-1&&o.indexOf("safari")>-1&&o.indexOf("version")>-1&&o.indexOf("chrome")<0;return $("#sogoLoginWrap").hide(),s(i),!1}),$(".ico-wx").click(function(){return $("#loginMask").show(),$("#sogoLoginWrap").hide(),$("#wxLoginWrap").show(),p(n),!1}),$(".QQ-del").click(function(){return $("#qqLoginWrap, .mask-layer").hide(),$("#qqLoginWrap iframe").attr("src",""),!1}),$(".wx-del").click(function(){return $("#wxLoginWrap, .mask-layer").hide(),$("#wxLoginWrap iframe").attr("src",""),!1}),$("#sogoLoginWrap>.del").click(function(){});var l="";l="?ru"===location.search.substring(0,3)?location.search.substring(4):encodeURIComponent(location.href),$(".operate-box a:eq(1)").attr({href:"https://www.sogou.com/register?ru="+l,target:"_blank"}),$(".operate-box a:eq(0)").attr({href:"https://account."+i()+"/web/findpwd?/web/indexhttps%3A%2F%2Faccount."+i()+"&client_id=1120",target:"_blank"}),r()}function r(){window.PassportSC.appid="2017",window.PassportSC.redirectUrl=window.location.protocol+"//"+window.location.hostname+"/jump.htm",$("#sogoLoginWrap .title-tab>span").each(function(o,n){$(n).click(function(){$("#sogoLoginWrap .title-tab>span").removeClass("cur"),$(this).addClass("cur"),v(),0==o?(i=!0,m()):(i=!1,b())})});var o,i=!0,t="",e="password",a=$("#sogoLoginWrap .input-box input:eq(1)"),r=$("#sogoLoginWrap .input-box input:eq(2)"),p=$("#sogoLoginWrap .input-box input:not(:eq(0))"),l=$("#sogoLoginWrap .input-box span:eq(0)"),s=$("#sogoLoginWrap .input-box span:eq(1)"),d=function(){},c=function(){return $(this).find("span").eq(0).html(""),$(this).find('input[type="'+e+'"]').focus(),v(),!1},x=$("#sogoLoginWrap .input-box input:eq(0)").blur(function(){}),h=$("#sogoLoginWrap .yzm-link").click(function(){return W(x.val())?!1:(L(),a.val("").show(),!1)}),w=function(){e="text",p.hide(),a.show(),o=a},f=function(){e="password",p.hide(),r.show(),o=r},b=function(){h.show(),$(".show-password").hide(),d(),w(),a.val("")},m=function(){h.hide(),$(".show-password").show(),d(),f(),r.val(""),$("#sogoLoginWrap").find(":checkbox").removeAttr("checked")},v=function(){$("#sogoLoginWrap .input-error").html("").hide()};$("#sogoLoginWrap .input-box:eq(0)").bind("click",function(){return $(this).find("span").eq(0).html(""),$(this).find("input").focus(),v(),!1}),$("#sogoLoginWrap .input-box:eq(1)").bind("click",c),$("#sogoLoginWrap .input-box input").not(":eq(0)").focus(function(){s.html("")}).blur(function(){}),$("#sogoLoginWrap").find(":checkbox").click(function(){$(this).is(":checked")?(a.val(r.val()),w()):(r.val(a.val()),f())}),$("#sogoLoginWrap .login-btn").click(function(){return i?M():U(),!1});var k=$("#sogoLoginWrap .login-tips").attr("id","sogoAuth").hide(),y=function(){k.find("img").attr({src:T()})},_=function(o){k.find(".error").html(o).show()},L=function(){k.show(),$("#sogoLoginWrap .mask-layer").show(),y(),$("#sogoLoginWrap #tokenInput").val("")};k.find("input").attr("id","tokenInput").focus(function(){_("")}),k.find(".change").click(function(){return y(),_(""),!1}),k.find(".tips-btn>a:eq(0)").click(function(){return k.hide(),$("#sogoLoginWrap .mask-layer").hide(),!1}),k.find(".tips-btn>a:eq(1)").click(function(){return Q(),!1});var W=function(o){return"undefined"!=typeof o&&""!=o&&o.match(/^[1]([3-9])[0-9]{9}$/)?!1:(C("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801",!0),!0)},q=function(o){return"undefined"!=typeof o&&""!=o&&o.match(/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,16}$/)?!1:(C("\u5bc6\u7801\u957f\u5ea6\u5e94\u4e3a6~16\u4f4d"),!0)},z=function(o){return"undefined"!=typeof o&&""!=o&&o.match(/^[0-9]{4,6}$/)?!1:(C("\u8f93\u5165\u7684\u9a8c\u8bc1\u7801\u683c\u5f0f\u6709\u8bef",!0),!0)},C=function(o,i){i?$("#sogoLoginWrap .input-error").eq(0).html(o).show():$("#sogoLoginWrap .input-error").eq(1).html(o).show()},S=function(){C("\u5bc6\u7801\u9519\u8bef"),o.val("").focus()},j=function(){},T=function(){return t=j(),"https://account.sogou.com/captcha?token="+t},I=function(){$("#sogoLoginWrap .login-tips").hide(),$("#sogoLoginWrap .mask-layer").hide()},Q=function(){return W(x.val())?!1:void $.ajax({method:"POST",url:"/passport/wap/smsCodeLogin/sendSms",data:{mobile:x.val(),client_id:"2017",captcha:$("#tokenInput").val(),token:t},dataType:"json",contentType:"application/x-www-form-urlencoded; charset=utf-8",success:function(o){try{o=JSON.parse(o),"0"===o.status?(I(),C(o.statusText,!0)):_(o.statusText)}catch(i){}},error:function(){_("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}})},U=function(){u("webindex_new","sogouSMS_login","sogou_login");var i=o.val(),t=z(i);if(W(x.val())||t)return!1;var e=location.hostname,a=location.protocol.toLowerCase()+"//"+e+"/login/qq_login_callback_page_new.html?xy=https&from="+encodeURIComponent(location.href),r="Lg7khs4uSrWL0r5u";$.ajax({method:"POST",url:"/passport/wap/smsCode/login",data:{client_id:"2017",v:0,ru:encodeURIComponent(a),mobile:x.val(),smsCode:o.val()},contentType:"application/x-www-form-urlencoded; charset=utf-8",dataType:"json",success:function(o){if(o&&o.statusText){var i=o.statusText;"\u64cd\u4f5c\u6210\u529f"==i?(C("\u767b\u5f55\u4e2d\uff0c\u8bf7\u7a0d\u5019...",!0),o.data&&o.data.sgid&&(g("ssppuid",n(o.data.userid,r)),g("ssppunid",n(o.data.uniqname,r))),location.reload()):"\u8be5\u624b\u673a\u53f7\u672a\u6ce8\u518c\uff0c\u63a8\u8350\u77ed\u4fe1\u9a8c\u8bc1\u767b\u5f55"==i?C(i,!0):"\u5bc6\u7801\u9519\u8bef"==i?C(i,!0):"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"==i?L():"\u9a8c\u8bc1\u7801\u9519\u8bef\u6216\u5df2\u8fc7\u671f"==i&&C(i,!0)}},error:function(){C("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",!0)}})},M=function(){u("webindex_new","sogouPwdLogin","sogou_login");var i=o.val(),n=q(i),t=x.val();W(t)||n||PassportSC.loginHandle(t,i,"",1,document.getElementById("emptyLogin"),function(o){if(o&&o.msg){var i=decodeURIComponent(o.msg);"\u5bc6\u7801\u9519\u8bef"==i?S(i):"\u8be5\u624b\u673a\u53f7\u672a\u6ce8\u518c\uff0c\u63a8\u8350\u77ed\u4fe1\u9a8c\u8bc1\u767b\u5f55"==i&&C("\u8be5\u624b\u673a\u53f7\u672a\u6ce8\u518c\uff0c\u8bf7\u5148\u6ce8\u518c\u8be5\u8d26\u53f7")}},function(){"?ru"==location.search.substring(0,3)?location.href=decodeURIComponent(location.search.substring(4)):location.reload()})};m(),v()}function p(o){u("webindex_new","wx_login","sogou_login"),l(o)}function l(){var o=function(){var o=["https://account.sogou.com/connect/login?provider=weixin","client_id=2017","ru="+encodeURIComponent(location.href),"third_appid=wx6634d697e8cc0a29","href="+encodeURIComponent("https://dlweb.sogoucdn.com/weixin/css/weixin_join.min.css?v=20170315")];return o.join("&")};$("#wxLoginWrap iframe").attr({src:o()})}function s(){u("webindex_new","qq_login","sogou_login");var o=location.protocol.toLowerCase()+"//"+location.hostname+"/login/qq_login_callback_page_new.html?xy=https&from="+encodeURIComponent(location.href),i="https://account.sogou.com/connect/login?provider=qq&client_id=2017&ru="+encodeURIComponent(o);return window.location.href=i,!1}function(){}