$(document).ready(function(){for(var l=function(a){if(-1===this.className.indexOf("disabled")){var b=this.querySelector(".ripple-container");b||(b=document.createElement("div"),b.className="ripple-container",this.appendChild(b));var e=b.getBoundingClientRect(),d=e.width,c=document.createElement("div");c.className="ripple";c.style.width=d+"px";c.style.height=d+"px";c.style.top=a.clientY-e.top-d/2+"px";c.style.left=a.clientX-e.left-d/2+"px";b.appendChild(c);setTimeout(function(){}