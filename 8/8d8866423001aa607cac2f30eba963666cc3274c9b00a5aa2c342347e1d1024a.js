window.psRSS=function(b){function ya(a){for(var c=f.getElementsByTagName("script"),g,b=c.length;b--;)if(~c[b].innerHTML.indexOf("image.providesupport.com")&&c[b].parentElement!==document.head){if(~c[b].innerHTML.indexOf("ps_h\x3d"+e)){c=c[b];c.parentElement.insertBefore(a,c);return}g=c[b]}g?g.parentElement.insertBefore(a,g):W.appendChild(a)}function ia(){x=x||f.getElementById(J);var a=Math.round(kb),c=1===lb?"%":"px",b=1===mb?"top":"bottom";x.style[1===nb?"left":"right"]=Math.round(ob)+(1===pb?"%":
"px");x.style[b]=a+c;1===qb&&(x.style.margin="-"+za/2+"px 0 0 -"+ja/2+"px")}function K(a){a=2==a?"auto":"chat";d.onscroll=ia;d.onresize=ia;ia();ka=0;a=rb+"/"+a+"-invitation/"+F+".html?ps_t\x3d"+N()+"\x26ps_vsid\x3d"+r+"\x26ps_h\x3d"+e+"\x26ps_l\x3d"+escape(f.location)+sb;var c=document.getElementById(J);if(null!=c){var b=document.getElementById("sd"+e);if(null!=b){var I=c.parentNode;I.removeChild(c);I.insertBefore(c,b)}c.style.zIndex=2147483647;c.innerHTML='\x3ciframe allowtransparency\x3d"true" style\x3d"background:transparent;width:'+
ja+';height:{chat-invitation-bg-height}" src\x3d"'+a+'" onload\x3d"ps'+e+'ld()" frameborder\x3d"no" width\x3d"'+ja+'" height\x3d"'+za+'" scrolling\x3d"no"\x3e\x3c/iframe\x3e'}}function Aa(a){la!=a&&(ma=(la=a)?Ba:Ca,null!=O&&(clearTimeout(O),O=null),O=Da(na,ma))}function na(){O=Da(na,ma);try{B.src=oa+"/cmd/"+P+"?ps_t\x3d"+N()+"\x26ps_l\x3d"+escape(f.location)+"\x26ps_r\x3d"+escape(f.referrer)+"\x26ps_s\x3d"+r+tb+pa,Ea()}catch(a){}}var Fa=b[0],qa=b[1],e=b[2],r=b[3],Q=b[4],J=b[5],ob=b[6],kb=b[7],pb=
b[8],lb=b[9],nb=b[10],mb=b[11],qb=b[12],za=b[13],ja=b[14],rb=b[15],F=b[16],sb=b[17],ub=b[18],h=b[19],vb=b[20],Ba=b[21],Ca=b[22],oa=b[23],P=b[24],tb=b[25],pa=b[26],ra=!1!==b[27],Ga=b[28]||"bottom:20px;right:20px;",R=b[29],wb=b[30],xb=b[31],X=b[32],Ha=b[33],Ia=b[34],yb=b[35],zb=b[36],Ja=b[37],Ka=b[38],La=b[39],sa=b[40],Ma=b[41],Ab=b[42],Na=b[43],Bb=b[44],Cb=b[45],p=b[46],S=b[47],Y=b[48],Z=b[49],aa=b[50],z=b[51]||2147483647,Db=!1!==b[52],Eb=!0===b[53],Oa=b[54],Pa=b[55],Qa=b[56],Ra=b[57],Sa=b[58],Ta=
b[59],Fb=b[60],Ua=b[61],Va=b[62],Gb=b[63],Hb=b[64],Ib=b[65],Wa=b[66],ba=3===Fa,Xa=4===Fa,Ya=~qa.indexOf("standard"),ca=~qa.indexOf("textlink"),Za=~qa.indexOf("monitor");var d=window;var f=document;var W=f.body||f.children[0];var n=function(a){return f.createElement.call(f,a)};if(!d["ps"+e+"be"]){var C=new function(){var a={};return{addEventListener:function(c,b){a[c]||(a[c]={b:[],c:0});a[c].b.push(b)},a:function(c,b){if(a[c]){a[c].c++;for(var g=0;g<a[c].b.length;g++)a[c].b[g](b,a[c])}}}};var N=function(){return Date.now()};
var Jb=N();var Da=function(a,c){return 72E5>N()-Jb?setTimeout(a,1E3*c):null};var Kb=function(a){try{return d.localStorage.getItem(a)}catch(c){return""}};var Lb=function(){}