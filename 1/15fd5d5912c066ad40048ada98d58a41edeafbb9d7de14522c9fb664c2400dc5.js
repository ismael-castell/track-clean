var tippy=function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;function e(){return(e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var n={passive:!0};function r(t,e){t.innerHTML=e}function(){}function(){}function(){}function(){}function u(t,e){return t&&t.modifiers&&t.modifiers[e]}function(){}function c(t){return s(t,"Element")}function l(t){return s(t,"MouseEvent")}function(){}function(){}function v(){return document.createElement("div")}function(){}function(){}function(){}function(){}function y(t){return[].slice.call(t)}function(){}function E(t,e){return t.indexOf(e)>-1}function(){}function T(t,e){return void 0!==t?t:e}function(){}function(){}function(){}function(){}function(){}var L={isTouch:!1},k=0;function(){}function(){}function(){}var V="undefined"!=typeof window&&"undefined"!=typeof document,B=V?navigator.userAgent:"",H=/MSIE |Trident\//.test(B),U=V&&/iPhone|iPad|iPod/.test(navigator.platform);function(){}var z=e({allowHTML:!0,animation:"fade",appendTo:function(){return document.body},aria:"describedby",arrow:!0,boundary:"scrollParent",content:"",delay:0,distance:10,duration:[300,250],flip:!0,flipBehavior:"flip",flipOnUpdate:!1,hideOnClick:!0,ignoreAttributes:!1,inertia:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,lazy:!0,maxWidth:350,multiple:!1,offset:0,onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},placement:"top",plugins:[],popperOptions:{},role:"tooltip",showOnCreate:!1,theme:"",touch:!0,trigger:"mouseenter focus",triggerTarget:null,updateDuration:0,zIndex:9999},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1}),R=Object.keys(z),q=["arrow","boundary","distance","flip","flipBehavior","flipOnUpdate","offset","placement","popperOptions"];function(){}function(){}function _(t){return t.split("-")[0]}function W(t){t.setAttribute("data-inertia","")}function X(t){t.setAttribute("data-interactive","")}function(){}function(){}function(){}function(){}function(){}function(){}function(){}var tt=1,et=[],nt=[];function rt(r,i){var a,s,c,v=j(r,e({},z,{},F(i)));if(!v.multiple&&r._tippy)return null;var k,M,S,P,V,B=!1,U=!1,R=!1,W=0,X=[],Y=h(Dt,v.interactiveDebounce),G=C(v.triggerTarget||r),$=tt++,rt=K($,v),it=J(rt),ot=(V=v.plugins).filter((function(t,e){return V.indexOf(t)===e})),at=it.tooltip,pt=it.content,ut=[at,pt],st={id:$,reference:r,popper:rt,popperChildren:it,popperInstance:null,props:v,state:{currentPlacement:null,isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:ot,clearDelayTimeouts:function(){clearTimeout(a),clearTimeout(s),cancelAnimationFrame(c)},setProps:function(t){if(st.state.isDestroyed)return;gt("onBeforeUpdate",[st,t]),It();var n=st.props,i=j(r,e({},st.props,{},t,{ignoreAttributes:!0}));i.ignoreAttributes=T(t.ignoreAttributes,n.ignoreAttributes),st.props=i,Ct(),n.interactiveDebounce!==i.interactiveDebounce&&(yt(),Y=h(Dt,i.interactiveDebounce));Q(rt,n,i),st.popperChildren=J(rt),n.triggerTarget&&!i.triggerTarget?x(n.triggerTarget).forEach((function(t){t.removeAttribute("aria-expanded")})):i.triggerTarget&&r.removeAttribute("aria-expanded");if(bt(),st.popperInstance)if(q.some((function(){}))){var a=st.popperInstance.reference;st.popperInstance.destroy(),St(),st.popperInstance.reference=a,st.state.isVisible&&st.popperInstance.enableEventListeners()}else st.popperInstance.update();gt("onAfterUpdate",[st,t])},setContent:function(t){st.setProps({content:t})},show:function(){},hide:function(){},enable:function(){st.state.isEnabled=!0},disable:function(){},destroy:function(){}};r._tippy=st,rt._tippy=st;var ct=ot.map((function(t){return t.fn(st)})),lt=r.hasAttribute("aria-expanded");return Ct(),bt(),v.lazy||St(),gt("onCreate",[st]),v.showOnCreate&&Vt(),rt.addEventListener("mouseenter",(function(){})),rt.addEventListener("mouseleave",(function(){})),st;function(){}function(){}function vt(){return P||r}function(){}function(){}function(){}function(){}function(){}function(){}function Et(){G.addEventListener("mousedown",wt,!0)}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}}function(){}it.version="5.2.1",it.defaultProps=z,it.setDefaultProps=function(){},it.currentInput=L;var ot={mouseover:"mouseenter",focusin:"focus",click:"click"};var at={name:"animateFill",defaultValue:!1,fn:function(t){var e=t.popperChildren,n=e.tooltip,r=e.content,i=t.props.animateFill?function(){}():null;function(){}return{onCreate:function(){},onMount:function(){},onShow:function(){},onHide:function(){},onAfterUpdate:function(){o()}}}};var pt={name:"followCursor",defaultValue:!1,fn:function(t){var e,n=t.reference,r=t.popper,i=null,o=C(t.props.triggerTarget||n),a=null,p=!1,u=t.props;function(){}function(){}function(){}function(){}function(){}function m(){t.popperInstance&&c()&&f()&&t.popperInstance.disableEventListeners()}function(){}function(){}function b(){o.removeEventListener("mousemove",y)}function y(o){var a=e=o,p=a.clientX,u=a.clientY;if(t.popperInstance&&t.state.currentPlacement){var s=w(o.target,(function(t){return t===n})),c=t.props.followCursor,l="horizontal"===c,d="vertical"===c,v=E(["top","bottom"],_(t.state.currentPlacement)),m=function(){}(r,v),g=m.size,h=m.x,y=m.y;!s&&t.props.interactive||(null===i&&(i=t.popperInstance.reference),t.popperInstance.reference={referenceNode:n,clientWidth:0,clientHeight:0,getBoundingClientRect:function(){var t=n.getBoundingClientRect();return{width:v?g:0,height:v?0:g,top:(l?t.top:u)-y,bottom:(l?t.bottom:u)+y,left:(d?t.left:p)-h,right:(d?t.right:p)+h}}},t.popperInstance.update()),f()&&b()}}return{onAfterUpdate:function(){},onMount:function(){h(),m()},onShow:function(){},onTrigger:function(){},onUntrigger:function(){},onHidden:function(){}}}};var ut={name:"inlinePositioning",defaultValue:!1,fn:function(){}};var st={name:"sticky",defaultValue:!1,fn:function(){}};function(){}return V&&function(){}(".tippy-tooltip[data-animation=fade][data-state=hidden]{opacity:0}.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{pointer-events:none;max-width:calc(100vw - 10px);transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-property:transform}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;background-color:#333;transition-property:visibility,opacity,transform;outline:0}.tippy-tooltip[data-placement^=top]>.tippy-arrow{border-width:8px 8px 0;border-top-color:#333;margin:0 3px;transform-origin:50% 0;bottom:-7px}.tippy-tooltip[data-placement^=bottom]>.tippy-arrow{border-width:0 8px 8px;border-bottom-color:#333;margin:0 3px;transform-origin:50% 7px;top:-7px}.tippy-tooltip[data-placement^=left]>.tippy-arrow{border-width:8px 0 8px 8px;border-left-color:#333;margin:3px 0;transform-origin:0 50%;right:-7px}.tippy-tooltip[data-placement^=right]>.tippy-arrow{border-width:8px 8px 8px 0;border-right-color:#333;margin:3px 0;transform-origin:7px 50%;left:-7px}.tippy-tooltip[data-interactive][data-state=visible]{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{position:absolute;border-color:transparent;border-style:solid}.tippy-content{padding:5px 9px}"),it.setDefaultProps({plugins:[at,pt,ut,st]}),it.createSingleton=function(){},it.delegate=function(){},it.hideAll=function(){}