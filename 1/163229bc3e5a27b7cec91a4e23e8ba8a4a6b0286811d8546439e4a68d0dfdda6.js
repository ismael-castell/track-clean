/*!
  * Bootstrap v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(){}(this,(function(){"use strict";const t={find:,findOne:,children:,parents,prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next},e=,i=,n=,s=,o=,r=,a=,l=,c=,d=,h=,u=,f=,p=()=>{},m=t=>t.offsetHeight,g=,_=,b=t=>{var e;e=,"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()},v=,y=new Map;var w={set,get:,remove};const E=/[^.]*(?=\..*)\.|.*/,T=/\..*/,A=/::\d+$/,L={};let O=1;const k={mouseenter:"mouseover",mouseleave:"mouseout"},C=/^(mouseenter|mouseleave)/i,x=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function(){}function(){}function(){}function(){}function(){}function(){}function(){}const H={on(t,e,i,n){j(t,e,i,n,!1)},one,off,trigger};class R{_queueCallback(t,e,i=!0){if(!i)return void v(t);const n=o(e);H.one(e,"transitionend",()=>v(t)),c(e,n)}static get VERSION(){return"5.0.1"}static get DATA_KEY(){return"bs."+this.NAME}}class B extends R{static get NAME(){return"alert"}_removeElement(t){t.classList.remove("show");const e=t.classList.contains("fade");this._queueCallback(()=>this._destroyElement(t),t,e)}}H.on(document,"click.bs.alert.data-api",'[data-bs-dismiss="alert"]',B.handleDismiss(new B)),b(B);function(){}function(){}H.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',),b(W);const U={setDataAttribute,removeDataAttribute,getDataAttributes,getDataAttribute:,offset,position:},$={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},F={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},V="next",K="prev",X="left",Y="right";class Q extends R{static get Default(){return $}static get NAME(){return"carousel"}next(){this._isSliding||this._slide(V)}_slide(e,i){const n=this._directionToOrder(e),s=t.findOne(".active.carousel-item",this._element),o=this._getItemIndex(s),r=i||this._getItemByOrder(n,s),a=this._getItemIndex(r),l=Boolean(this._interval),c=n===V,d=c?"carousel-item-start":"carousel-item-end",h=c?"carousel-item-next":"carousel-item-prev",u=this._orderToDirection(n);if(r&&r.classList.contains("active"))return void(this._isSliding=!1);if(this._triggerSlideEvent(r,u).defaultPrevented)return;if(!s||!r)return;this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r;const f=;if(this._element.classList.contains("slide")){r.classList.add(h),m(r),s.classList.add(d),r.classList.add(d);const t=;this._queueCallback(t,s,!0)}else s.classList.remove("active"),r.classList.add("active"),this._isSliding=!1,f();l&&this.cycle()}_directionToOrder(t){return[Y,X].includes(t)?_()?t===X?K:V:t===X?V:K:t}static jQueryInterface(t){return this.each((function(){Q.carouselInterface(this,t)}))}}H.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",Q.dataApiClickHandler),H.on(window,"load.bs.carousel.data-api",),b(Q);const G={toggle:!0,parent:""},Z={toggle:"boolean",parent:"(string|element)"};class J extends R{static get Default(){return G}static get NAME(){return"collapse"}show(){if(this._isTransitioning||this._element.classList.contains("show"))return;let e,i;this._parent&&(e=t.find(".show, .collapsing",this._parent).filter(),0===e.length&&(e=null));const n=t.findOne(this._selector);if(e){const t=e.find(t=>n!==t);if(i=t?w.get(t,"bs.collapse"):null,i&&i._isTransitioning)return}if(H.trigger(this._element,"show.bs.collapse").defaultPrevented)return;e&&e.forEach();const s=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[s]=0,this._triggerArray.length&&this._triggerArray.forEach(),this.setTransitioning(!0);const o="scroll"+(s[0].toUpperCase()+s.slice(1));this._queueCallback(,this._element,!0),this._element.style[s]=this._element[o]+"px"}hide(){if(this._isTransitioning||!this._element.classList.contains("show"))return;if(H.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",m(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");const e=this._triggerArray.length;if(e>0)for(let t=0;t<e;t++){const e=this._triggerArray[t],i=s(e);i&&!i.classList.contains("show")&&(e.classList.add("collapsed"),e.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]="",this._queueCallback(,this._element,!0)}setTransitioning(t){this._isTransitioning=t}_getParent(){let{parent:e}=this._config;e=l(e);const i=`[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;return t.find(i,e).forEach(),e}}H.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(){})),b(J);var tt="top",et="bottom",it="right",nt="left",st=[tt,et,it,nt],ot=st.reduce((function(){}),[]),rt=[].concat(st,["auto"]).reduce((function(){}),[]),at=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function(){}function(){}function dt(t){return t instanceof ct(t).Element||t instanceof Element}function(){}function(){}var ft={name:"applyStyles",enabled:!0,phase:"write",fn:function(){},effect:function(){},requires:["computeStyles"]};function pt(t){return t.split("-")[0]}function(){}function(){}function(){}function bt(t){return ct(t).getComputedStyle(t)}function(){}function(){}function(){}function(){}function(){}function(){}var Lt=Math.max,Ot=Math.min,kt=Math.round;function Ct(t,e,i){return Lt(t,Ot(e,i))}function(){}function(){}var Nt={name:"arrow",enabled:!0,phase:"main",fn:function(){},effect:function(){},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},St={top:"auto",right:"auto",bottom:"auto",left:"auto"};function(){}var jt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(){},data:{}},Pt={passive:!0},Mt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(){},data:{}},Ht={left:"right",right:"left",bottom:"top",top:"bottom"};function Rt(t){return t.replace(/left|right|bottom|top/g,(function(t){return Ht[t]}))}var Bt={start:"end",end:"start"};function Wt(t){return t.replace(/start|end/g,(function(t){return Bt[t]}))}function(){}function(){}function(){}function(){}function(){}function(){}function Kt(t){return t.split("-")[1]}function(){}function(){}function(){}var Gt={name:"flip",enabled:!0,phase:"main",fn:function(){},requiresIfExists:["offset"],data:{_skip:!1}};function(){}function(){}var te={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(){}},ee={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(){}},ie={name:"popperOffsets",enabled:!0,phase:"read",fn:function(){},data:{}},ne={name:"preventOverflow",enabled:!0,phase:"main",fn:function(){},requiresIfExists:["offset"]};function(){}var oe={placement:"bottom",modifiers:[],strategy:"absolute"};function(){}function(){}var le=ae(),ce=ae({defaultModifiers:[Mt,ie,jt,ft]}),de=ae({defaultModifiers:[Mt,ie,jt,ft,ee,Gt,ne,Nt,te]}),he=Object.freeze({__proto__:null,popperGenerator:ae,detectOverflow:Yt,createPopperBase:le,createPopper:de,createPopperLite:ce,top:tt,bottom:et,right:it,left:nt,auto:"auto",basePlacements:st,start:"start",end:"end",clippingParents:"clippingParents",viewport:"viewport",popper:"popper",reference:"reference",variationPlacements:ot,placements:rt,beforeRead:"beforeRead",read:"read",afterRead:"afterRead",beforeMain:"beforeMain",main:"main",afterMain:"afterMain",beforeWrite:"beforeWrite",write:"write",afterWrite:"afterWrite",modifierPhases:at,applyStyles:ft,arrow:Nt,computeStyles:jt,eventListeners:Mt,flip:Gt,hide:te,offset:ee,popperOffsets:ie,preventOverflow:ne});const ue=new RegExp("ArrowUp|ArrowDown|Escape"),fe=_()?"top-end":"top-start",pe=_()?"top-start":"top-end",me=_()?"bottom-end":"bottom-start",ge=_()?"bottom-start":"bottom-end",_e=_()?"left-start":"right-start",be=_()?"right-start":"left-start",ve={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},ye={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class we extends R{static get Default(){return ve}static get DefaultType(){return ye}static get NAME(){return"dropdown"}show(){if(u(this._element)||this._menu.classList.contains("show"))return;const t=we.getParentFromElement(this._element),e={relatedTarget:this._element};if(!H.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(this._inNavbar)U.setDataAttribute(this._menu,"popper","none");else{if(void 0===he)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:a(this._config.reference)?e=l(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const i=this._getPopperConfig(),n=i.modifiers.find();this._popper=de(e,this._menu,i),n&&U.setDataAttribute(this._menu,"popper","static")}"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach(),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),H.trigger(this._element,"shown.bs.dropdown",e)}}hide(){if(u(this._element)||!this._menu.classList.contains("show"))return;const t={relatedTarget:this._element};this._completeHide(t)}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_selectMenuItem(e){const i=t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(h);if(!i.length)return;let n=i.indexOf(e.target);"ArrowUp"===e.key&&n>0&&n--,"ArrowDown"===e.key&&n<i.length-1&&n++,n=-1===n?0:n,i[n].focus()}static jQueryInterface(t){return this.each((function(){we.dropdownInterface(this,t)}))}static clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;const i=t.find('[data-bs-toggle="dropdown"]');for(let t=0,n=i.length;t<n;t++){const n=w.get(i[t],"bs.dropdown");if(!n||!1===n._config.autoClose)continue;if(!n._element.classList.contains("show"))continue;const s={relatedTarget:n._element};if(e){const t=e.composedPath(),i=t.includes(n._menu);if(t.includes(n._element)||"inside"===n._config.autoClose&&!i||"outside"===n._config.autoClose&&i)continue;if(n._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(s.clickEvent=e)}n._completeHide(s)}}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?"Space"===e.key||"Escape"!==e.key&&("ArrowDown"!==e.key&&"ArrowUp"!==e.key||e.target.closest(".dropdown-menu")):!ue.test(e.key))return;const i=this.classList.contains("show");if(!i&&"Escape"===e.key)return;if(e.preventDefault(),e.stopPropagation(),u(this))return;const n=;if("Escape"===e.key)return n().focus(),void we.clearMenus();i||"ArrowUp"!==e.key&&"ArrowDown"!==e.key?i&&"Space"!==e.key?we.getInstance(n())._selectMenuItem(e):we.clearMenus():n().click()}}H.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',we.dataApiKeydownHandler),H.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",we.dataApiKeydownHandler),H.on(document,"click.bs.dropdown.data-api",we.clearMenus),H.on(document,"keyup.bs.dropdown.data-api",we.clearMenus),H.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',(function(t){t.preventDefault(),we.dropdownInterface(this)})),b(we);const Ee=,Te=(t=Ee())=>{Ae(),Le("body","paddingRight",e=>e+t),Le(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",),Le(".sticky-top","marginRight",)},Ae=()=>{const t=document.body.style.overflow;t&&U.setDataAttribute(document.body,"overflow",t),document.body.style.overflow="hidden"},Le=,Oe=()=>{ke("body","overflow"),ke("body","paddingRight"),ke(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),ke(".sticky-top","marginRight")},ke=(e,i)=>{t.find(e).forEach()},Ce={isVisible:!0,isAnimated:!1,rootElement:document.body,clickCallback:null},xe={isVisible:"boolean",isAnimated:"boolean",rootElement:"element",clickCallback:"(function|null)"};class De{_getConfig(t){return(t={...Ce,..."object"==typeof t?t:{}}).rootElement=t.rootElement||document.body,d("backdrop",t,xe),t}dispose(){this._isAppended&&(H.off(this._element,"mousedown.bs.backdrop"),this._getElement().parentNode.removeChild(this._element),this._isAppended=!1)}_emulateAnimation(t){if(!this._config.isAnimated)return void v(t);const e=o(this._getElement());H.one(this._getElement(),"transitionend",()=>v(t)),c(this._getElement(),e)}}const Ne={backdrop:!0,keyboard:!0,focus:!0},Se={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class Ie extends R{constructor(e,i){super(e),this._config=this._getConfig(i),this._dialog=t.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1}static get Default(){return Ne}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;this._isAnimated()&&(this._isTransitioning=!0);const e=H.trigger(this._element,"show.bs.modal",{relatedTarget:t});this._isShown||e.defaultPrevented||(this._isShown=!0,Te(),document.body.classList.add("modal-open"),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),H.on(this._element,"click.dismiss.bs.modal",'[data-bs-dismiss="modal"]',t=>this.hide(t)),H.on(this._dialog,"mousedown.dismiss.bs.modal",),this._showBackdrop(()=>this._showElement(t)))}hide(t){if(t&&t.preventDefault(),!this._isShown||this._isTransitioning)return;if(H.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),H.off(document,"focusin.bs.modal"),this._element.classList.remove("show"),H.off(this._element,"click.dismiss.bs.modal"),H.off(this._dialog,"mousedown.dismiss.bs.modal"),this._queueCallback(()=>this._hideModal(),this._element,e)}dispose(){[window,this._dialog].forEach(t=>H.off(t,".bs.modal")),this._backdrop.dispose(),super.dispose(),H.off(document,"focusin.bs.modal")}handleUpdate(){this._adjustDialog()}_getConfig(t){return t={...Ne,...U.getDataAttributes(this._element),...t},d("modal",t,Se),t}_showElement(e){const i=this._isAnimated(),n=t.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),i&&m(this._element),this._element.classList.add("show"),this._config.focus&&this._enforceFocus(),this._queueCallback(,this._dialog,i)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove("modal-open"),this._resetAdjustments(),Oe(),H.trigger(this._element,"hidden.bs.modal")})}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=Ee(),i=e>0;(!i&&t&&!_()||i&&!t&&_())&&(this._element.style.paddingLeft=e+"px"),(i&&!t&&!_()||!i&&t&&_())&&(this._element.style.paddingRight=e+"px")}static jQueryInterface(t,e){return this.each((function(){const i=Ie.getInstance(this)||new Ie(this,"object"==typeof t?t:{});if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}H.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=s(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),H.one(e,"show.bs.modal",),(Ie.getInstance(e)||new Ie(e)).toggle(this)})),b(Ie);const je={backdrop:!0,keyboard:!0,scroll:!1},Pe={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"};class Me extends R{static get NAME(){return"offcanvas"}static get Default(){return je}show(t){this._isShown||H.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(Te(),this._enforceFocusOnElement(this._element)),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show"),this._queueCallback(,this._element,!0))}hide(){this._isShown&&(H.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(H.off(document,"focusin.bs.offcanvas"),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),this._backdrop.hide(),this._queueCallback(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||Oe(),H.trigger(this._element,"hidden.bs.offcanvas")},this._element,!0)))}dispose(){this._backdrop.dispose(),super.dispose(),H.off(document,"focusin.bs.offcanvas")}}H.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(e){const i=s(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),u(this))return;H.one(i,"hidden.bs.offcanvas",);const n=t.findOne(".offcanvas.show");n&&n!==i&&Me.getInstance(n).hide(),(w.get(i,"bs.offcanvas")||new Me(i)).toggle(this)})),H.on(window,"load.bs.offcanvas.data-api",),b(Me);const He=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Re=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,Be=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,We=;function(){}const ze=new RegExp("(^|\\s)bs-tooltip\\S+","g"),Ue=new Set(["sanitize","allowList","sanitizeFn"]),$e={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Fe={AUTO:"auto",TOP:"top",RIGHT:_()?"left":"right",BOTTOM:"bottom",LEFT:_()?"right":"left"},Ve={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Ke={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"};class Xe extends R{static get Default(){return Ve}static get NAME(){return"tooltip"}static get Event(){return Ke}static get DefaultType(){return $e}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}dispose(){clearTimeout(this._timeout),H.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip),this._popper&&this._popper.destroy(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=H.trigger(this._element,this.constructor.Event.SHOW),i=f(this._element),n=null===i?this._element.ownerDocument.documentElement.contains(this._element):i.contains(this._element);if(t.defaultPrevented||!n)return;const s=this.getTipElement(),o=e(this.constructor.NAME);s.setAttribute("id",o),this._element.setAttribute("aria-describedby",o),this.setContent(),this._config.animation&&s.classList.add("fade");const r="function"==typeof this._config.placement?this._config.placement.call(this,s,this._element):this._config.placement,a=this._getAttachment(r);this._addAttachmentClass(a);const{container:l}=this._config;w.set(s,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(l.appendChild(s),H.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=de(this._element,s,this._getPopperConfig(a)),s.classList.add("show");const c="function"==typeof this._config.customClass?this._config.customClass():this._config.customClass;c&&s.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach();const d=this.tip.classList.contains("fade");this._queueCallback(,this.tip,d)}hide(){if(!this._popper)return;const t=this.getTipElement();if(H.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;t.classList.remove("show"),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>H.off(t,"mouseover",p)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const e=this.tip.classList.contains("fade");this._queueCallback(,this.tip,e),this._hoverState=""}_addAttachmentClass(t){this.getTipElement().classList.add("bs-tooltip-"+this.updateAttachment(t))}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(ze);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}}b(Xe);const Ye=new RegExp("(^|\\s)bs-popover\\S+","g"),Qe={...Xe.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},Ge={...Xe.DefaultType,content:"(string|element|function)"},Ze={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class Je extends Xe{static get Default(){return Qe}static get NAME(){return"popover"}static get Event(){return Ze}static get DefaultType(){return Ge}}b(Je);const ti={offset:10,method:"auto",target:""},ei={offset:"number",method:"string",target:"(string|element)"};class ii extends R{static get Default(){return ti}static get NAME(){return"scrollspy"}static jQueryInterface(t){return this.each((function(){const e=ii.getInstance(this)||new ii(this,"object"==typeof t?t:{});if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}H.on(window,"load.bs.scrollspy.data-api",),b(ii);class ni extends R{static get NAME(){return"tab"}}H.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),u(this)||(w.get(this,"bs.tab")||new ni(this)).show()})),b(ni);const si={animation:"boolean",autohide:"boolean",delay:"number"},oi={animation:!0,autohide:!0,delay:5e3};class ri extends R{static get DefaultType(){return si}static get Default(){return oi}static get NAME(){return"toast"}show(){H.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove("hide"),m(this._element),this._element.classList.add("showing"),this._queueCallback(()=>{this._element.classList.remove("showing"),this._element.classList.add("show"),H.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this._element.classList.contains("show")&&(H.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.remove("show"),this._queueCallback(,this._element,this._config.animation)))}_setListeners(){H.on(this._element,"click.dismiss.bs.toast",'[data-bs-dismiss="toast"]',()=>this.hide()),H.on(this._element,"mouseover.bs.toast",t=>this._onInteraction(t,!0)),H.on(this._element,"mouseout.bs.toast",t=>this._onInteraction(t,!1)),H.on(this._element,"focusin.bs.toast",t=>this._onInteraction(t,!0)),H.on(this._element,"focusout.bs.toast",)}