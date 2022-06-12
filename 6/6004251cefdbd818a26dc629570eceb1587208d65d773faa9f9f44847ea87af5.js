/*! layer-v2.4 弹层组件 License LGPL  http://layer.layui.com/ By 贤心 */
;!function(a,b){"use strict";var c,d,e={getPath:function(){}(),enter:function(a){13===a.keyCode&&a.preventDefault()},config:{},end:{},btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},f={v:"2.4",ie6:!!a.ActiveXObject&&!a.XMLHttpRequest,index:0,path:e.getPath,config:function(){},use:function(){},ready:function(){},alert:function(){},confirm:function(){},msg:function(){},load:function(){},tips:function(a,b,d){return f.open(c.extend({type:4,content:[a,b],closeBtn:!1,time:3e3,shade:!1,fix:!1,maxWidth:210},d))}},g=function(){};g.pt=g.prototype;var h=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];h.anim=["layer-anim","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],g.pt.config={type:0,shade:.3,fix:!0,move:h[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,shift:0,icon:-1,scrollbar:!0,tips:2},g.pt.vessel=function(a,b){var c=this,d=c.index,f=c.config,g=f.zIndex+d,i="object"==typeof f.title,j=f.maxmin&&(1===f.type||2===f.type),k=f.title?'<div class="layui-layer-title" style="'+(i?f.title[1]:"")+'">'+(i?f.title[0]:f.title)+"</div>":"";return f.zIndex=g,b([f.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+d+'" times="'+d+'" style="'+("z-index:"+(g-1)+"; background-color:"+(f.shade[1]||"#000")+"; opacity:"+(f.shade[0]||f.shade)+"; filter:alpha(opacity="+(100*f.shade[0]||100*f.shade)+");")+'"></div>':"",'<div class="'+h[0]+(" layui-layer-"+e.type[f.type])+(0!=f.type&&2!=f.type||f.shade?"":" layui-layer-border")+" "+(f.skin||"")+'" id="'+h[0]+d+'" type="'+e.type[f.type]+'" times="'+d+'" showtime="'+f.time+'" conType="'+(a?"object":"string")+'" style="z-index: '+g+"; width:"+f.area[0]+";height:"+f.area[1]+(f.fix?"":";position:absolute;")+'">'+(a&&2!=f.type?"":k)+'<div id="'+(f.id||"")+'" class="layui-layer-content'+(0==f.type&&-1!==f.icon?" layui-layer-padding":"")+(3==f.type?" layui-layer-loading"+f.icon:"")+'">'+(0==f.type&&-1!==f.icon?'<i class="layui-layer-ico layui-layer-ico'+f.icon+'"></i>':"")+(1==f.type&&a?"":f.content||"")+'</div><span class="layui-layer-setwin">'+function(){}()+"</span>"+(f.btn?function(){}():"")+"</div>"],k),c},g.pt.creat=function(){var a=this,b=a.config,g=a.index,i=b.content,j="object"==typeof i;if(!c("#"+b.id)[0]){switch("string"==typeof b.area&&(b.area="auto"===b.area?["",""]:[b.area,""]),b.type){case 0:b.btn="btn"in b?b.btn:e.btn[0],f.closeAll("dialog");break;case 2:var i=b.content=j?b.content:[b.content||"http://layer.layui.com","auto"];b.content='<iframe scrolling="'+(b.content[1]||"auto")+'" allowtransparency="true" id="'+h[4]+g+'" name="'+h[4]+g+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+b.content[0]+'"></iframe>';break;case 3:b.title=!1,b.closeBtn=!1,-1===b.icon&&0===b.icon,f.closeAll("loading");break;case 4:j||(b.content=[b.content,"body"]),b.follow=b.content[1],b.content=b.content[0]+'<i class="layui-layer-TipsG"></i>',b.title=!1,b.tips="object"==typeof b.tips?b.tips:[b.tips,!0],b.tipsMore||f.closeAll("tips")}a.vessel(j,function(){}).auto(g),2==b.type&&f.ie6&&a.layero.find("iframe").attr("src",i[0]),c(document).off("keydown",e.enter).on("keydown",e.enter),a.layero.on("keydown",function(){}),4==b.type?a.tips():a.offset(),b.fix&&d.on("resize",function(){}),b.time<=0||setTimeout(function(){f.close(a.index)},b.time),a.move().callback(),h.anim[b.shift]&&a.layero.addClass(h.anim[b.shift])}},g.pt.auto=function(){},g.pt.offset=function(){},g.pt.tips=function(){},g.pt.move=function(){},g.pt.callback=function(){function(){}var b=this,d=b.layero,g=b.config;b.openLayer(),g.success&&(2==g.type?d.find("iframe").on("load",function(){g.success(d,b.index)}):g.success(d,b.index)),f.ie6&&b.IE6(d),d.find("."+h[6]).children("a").on("click",function(){}),d.find("."+h[7]).on("click",a),g.shadeClose&&c("#layui-layer-shade"+b.index).on("click",function(){f.close(b.index)}),d.find(".layui-layer-min").on("click",function(){}),d.find(".layui-layer-max").on("click",function(){}),g.end&&(e.end[b.index]=g.end)},e.reselect=function(){},g.pt.IE6=function(){},g.pt.openLayer=function(){},e.record=function(){},e.rescollbar=function(){},a.layer=f,f.getChildFrame=function(){},f.getFrameIndex=function(){},f.iframeAuto=function(){},f.iframeSrc=function(){},f.style=function(){},f.min=function(){},f.restore=function(){},f.full=function(){},f.title=function(){},f.close=function(){},f.closeAll=function(){};var i=f.cache||{},j=function(){};f.prompt=function(a,b){a=a||{},"function"==typeof a&&(b=a);var d,e=2==a.formType?'<textarea class="layui-layer-input">'+(a.value||"")+"</textarea>":function(){}();return f.open(c.extend({btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:e,skin:"layui-layer-prompt"+j("prompt"),success:function(){},yes:function(){}},a))},f.tab=function(a){a=a||{};var b=a.tab||{};return f.open(c.extend({type:1,skin:"layui-layer-tab"+j("tab"),title:function(){var a=b.length,c=1,d="";if(a>0)for(d='<span class="layui-layer-tabnow">'+b[0].title+"</span>";a>c;c++)d+="<span>"+b[c].title+"</span>";return d}(),content:'<ul class="layui-layer-tabmain">'+function(){var a=b.length,c=1,d="";if(a>0)for(d='<li class="layui-layer-tabli xubox_tab_layer">'+(b[0].content||"no content")+"</li>";a>c;c++)d+='<li class="layui-layer-tabli">'+(b[c].content||"no  content")+"</li>";return d}()+"</ul>",success:function(){}},a))},f.photos=function(b,d,e){function(){}var h={};if(b=b||{},b.photos){var i=b.photos.constructor===Object,k=i?b.photos:{},l=k.data||[],m=k.start||0;if(h.imgIndex=(0|m)+1,b.img=b.img||"img",i){if(0===l.length)return f.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var n=c(b.photos),o=function(){};if(o(),0===l.length)return;if(d||n.on("click",b.img,function(){}),!d)return}h.imgprev=function(){},h.imgnext=function(){},h.keyup=function(){},h.tabimg=function(){},h.event=function(){},h.loadi=f.load(1,{shade:"shade"in b?!1:.9,scrollbar:!1}),g(l[m].src,function(d){f.close(h.loadi),h.index=f.open(c.extend({type:1,area:function(){var e=[d.width,d.height],f=[c(a).width()-50,c(a).height()-50];return!b.full&&e[0]>f[0]&&(e[0]=f[0],e[1]=e[0]*d.height/d.width),[e[0]+"px",e[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,shift:5*Math.random()|0,skin:"layui-layer-photos"+j("photos"),content:'<div class="layui-layer-phimg"><img src="'+l[m].src+'" alt="'+(l[m].alt||"")+'" layer-pid="'+l[m].pid+'"><div class="layui-layer-imgsee">'+(l.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(e?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(l[m].alt||"")+"</a><em>"+h.imgIndex+"/"+l.length+"</em></span></div></div></div>",success:function(){},end:function(){}},b))},function(){})}},e.run=function(){}