(window.webpackJsonpWidget=window.webpackJsonpWidget||[]).push([[8],{162:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n.n(a),c=n(2),s=n(193),l=n(171),p=n(610),u=n.n(p),f=n(5),d=n(18),m=n(32),g=n(35),h=n.n(g),b=n(15),y=n(611),w=n.n(y),x=n(1),v=n(7),k=v.b.button.withConfig({displayName:"elements__ContactOption",componentId:"sc-1coytcc-0"})(["width:100%;text-align:left;font-size:1rem;padding:16px;border-radius:8px;background-color:#fff;margin:16px 0 32px 0;cursor:pointer;font-weight:600;border:2px solid #fff;box-shadow:0 0 2px 0 rgba(18,52,77,0.16),0 2px 12px 0 rgba(18,52,77,0.1);outline:none;color:#123447;&:hover{background-color:#fdfdfd;}&:focus,&:hover{border:2px solid #2c5cc5;transition:all 0.05s ease-out;}"]),E={height:"12px",width:"12px",float:"right",margin:"4px"},C=v.b.div.withConfig({displayName:"elements__HomeWrapper",componentId:"sc-1coytcc-1"})(["height:inherit;"]);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return P(r,(n=r=P(this,(e=S(t)).call.apply(e,[this].concat(a))),r.state={searchResults:[],faqsResults:[],faqsLoading:!1,searchLoading:!1,isEmptyResult:!1,query:""},r.onChange=function(){},r.onSearch=function(){var e=r.state.query,t=r.props,n=t.searchActive,o=t.activateSearch,a=t.settings,i=t.t,c=a.freshdeskDomain,s=a.widgetLanguage;if(e.length){n||o();var l="".concat(c,"/api/widget/search/solutions?language=").concat(s,"&term=").concat(e);r.setState({searchLoading:!0,isEmptyResult:!1});Object(x.f)(l,{method:"GET"}).then(function(e){return e.ok?e.json():(e.json().then(function(e){r.setState({searchLoading:!1,searchResults:[],error:{message:Object(x.e)(e,i,"errors","something_wrong"),info:Object(x.e)(e,i,"errorDescription")}})}),!1)}).then(function(e){r.setState({searchLoading:!1,searchResults:e,isEmptyResult:e&&0===e.length})})}},n))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.widgetType,r=t.settings,o=t.showForm,a=t.t,i=r.componentsSolutionArticlesEnabled,s=r.componentsMode,l=r.freshdeskDomain,p=r.widgetLanguage;if(i&&!c.j.includes(n)){this.setState({faqsLoading:!0});var u="".concat(l,"/api/widget/solutions/suggested_articles?language=").concat(p),f={method:"get",headers:{"X-Widget-Referrer":window.parent&&window.parent.location.href||window.location.href}};Object(x.f)(u,f).then(function(t){return t.ok?t.json():(t.json().then(function(t){e.setState({faqsLoading:!1,faqsResults:[],error:{message:Object(x.e)(t,a,"errors","something_wrong"),info:Object(x.e)(t,a,"errorDescription")}})}),!1)}).then(function(t){var n=s===c.f&&o.ticket&&"[object Array]"===Object.prototype.toString.call(t)?j(t).splice(0,c.b):t;e.setState({faqsResults:n,faqsLoading:!1})},function(){})}return!0}},{key:"componentDidUpdate",value:function(e){var t=this.props.searchActive;e.searchActive&&!t&&this.setState({query:"",searchResults:[],searchLoading:!1,showContactOption:!1})}},{key:"render",value:function(){var e=this.props,t=e.gotoContactUs,n=e.mainPage,a=e.t,i=e.widgetType,l=e.card,p=e.settings,u=e.showForm;if(!l.show)return null;var f=p.componentsMode,d=p.labelsContactFormTitle,m=p.componentsSolutionArticlesEnabled,g=m&&u.ticket&&f===c.f;if(i&&c.j.includes(i)&&u.frustrationTracking)return o.a.createElement(b.c,_({"data-testid":"contact-form"},this.props));var h=this.state,y=h.searchResults,x=h.faqsResults,v=h.faqsLoading,O=h.searchLoading,j=h.isEmptyResult,T=h.query,P=h.error;return o.a.createElement(C,{"data-testid":"home-wrapper"},!!m&&o.a.createElement(s.m,null,o.a.createElement(b.f,_({"data-testid":"solutions",onSearch:this.onSearch,onChange:this.onChange,searchResults:y,faqsResults:x,faqsLoading:v,searchLoading:O,isEmptyResult:j,query:T,error:P},this.props))),!(!n||!g)&&o.a.createElement(k,{"data-testid":"contact-us",onClick:t},d,o.a.createElement(w.a,{role:"img",style:E,alt:a("common.goto")})),!(m||!u.ticket)&&o.a.createElement(r.Suspense,{fallback:Object(s.g)()},o.a.createElement(b.h,this.props)))}}])&&T(n.prototype,a),i&&T(n,i),t}();L.propTypes={gotoContactUs:i.a.func,t:i.a.func,mainPage:i.a.bool,widgetType:i.a.any,card:i.a.object,searchActive:i.a.bool,activateSearch:i.a.func,settings:i.a.object,showForm:i.a.object},L.defaultProps={gotoContactUs:function(){},t:function(){},mainPage:!1,widgetType:"",card:{},searchActive:!1,activateSearch:function(){},settings:{},showForm:{}};var N=Object(l.b)()(L),B=v.b.div.withConfig({displayName:"elements__CardWrapper",componentId:"sc-1xc5bem-0"})(["left:16px;right:16px;border-radius:8px;",";&.main-page{",";background:none;}&.page,&.deck{position:fixed;height:100%;background:#fff;animation-duration:0.2s;box-shadow:0 0 2px 0 rgba(18,52,77,0.16),0 2px 12px 0 rgba(18,52,77,0.1);}&.deck.forward{animation-direction:normal;transition:all 0.2s ease-out;}&.deck.reverse{animation-direction:reverse;transition:all 0.2s ease-in;}&.deck:nth-last-of-type(1){transform:translateY(12px) scale(1);opacity:1;}&.deck:nth-last-of-type(1).cards-enter{animation-name:first;animation-direction:normal;}&.deck:nth-last-of-type(1).cards-leave{animation-name:first;animation-direction:reverse;}&.deck:nth-last-of-type(1).reverse.last{transform:translateY(0);}&.deck:nth-last-of-type(2){animation-name:second;transform:translateY(6px) scaleX(0.95);opacity:0.5;}&.deck:nth-last-of-type(3){animation-name:third;transform:translateY(0) scaleX(0.9);opacity:0.3;}.card{box-shadow:0 0 1px 0 rgba(24,50,71,0.2),0 2px 6px 0 rgba(22,29,37,0.05);}@keyframes first{0%{transform:translateY(100%);opacity:0;}100%{transform:translateY(12px);opacity:1;}}@keyframes second{0%{transform:translateY(12px);opacity:1;}100%{transform:translateY(6px) scaleX(0.95);opacity:0.5;}}@keyframes third{0%{transform:translateY(6px) scaleX(0.95);opacity:0.5;}100%{transform:translateY(0) scaleX(0.9);opacity:0.3;}}"],function(e){return e.overflowHidden?"overflow-y:hidden":""},function(e){return e.widgetType?"":"min-height: 364px"});function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e,t,n,r){return e?"main-page":t?"deck ".concat(n," ").concat(1===r?"last":""):"page"},q=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return H(r,(n=r=H(this,(e=A(t)).call.apply(e,[this].concat(i))),r.Content=function(e){switch(e.card.name){case"Home":return o.a.createElement(N,e);case"Ticket":return o.a.createElement(b.h,e);case"Article":return o.a.createElement(b.a,e);case"Thanks":return o.a.createElement(b.g,e);case"FrustrationTracking":return o.a.createElement(b.c,e);default:return o.a.createElement(N,e)}},n))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this,t=this.props,n=t.cards,a=t.showDeck,i=t.deckClassName,c=t.overflowHidden,l=t.mainPage,p=t.widgetType;return o.a.createElement(h.a,{component:"div",transitionName:"cards",transitionEnter:a,transitionLeave:a,transitionEnterTimeout:200,transitionLeaveTimeout:200},n.map(function(t,u){var f="deck-".concat(u);return o.a.createElement(B,{"data-testid":f,key:u,showDeck:a,mainPage:l,className:D(l,a,i,n.length),overflowHidden:c,widgetType:p},o.a.createElement(r.Suspense,{fallback:Object(s.g)()},e.Content(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){W(e,t,n[t])})}return e}({},e.props,{card:t}))))}))}}])&&R(n.prototype,a),i&&R(n,i),t}();q.propTypes={cards:i.a.array,showDeck:i.a.bool,deckClassName:i.a.string,overflowHidden:i.a.bool,mainPage:i.a.bool,widgetType:i.a.any},q.defaultProps={cards:[],showDeck:!1,deckClassName:"none",overflowHidden:!1,mainPage:!1,widgetType:""};var z=q,M=Object(v.d)(["0%{transform:scale(0);transform-origin:bottom right;}100%{transform:scale(1);transform-origin:bottom right;}"]),U=v.b.div.withConfig({displayName:"elements__Wrapper",componentId:"h3m622-0"})(["box-shadow:0 5px 40px rgba(0,0,0,0.16);opacity:",";visibility:",";animation:"," 0.3s ease;position:absolute;background-color:#f5f7f9;top:0;bottom:0;overflow:hidden;left:0;right:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#123447;word-break:break-word;word-wrap:break-word;*{box-sizing:border-box;}form{width:100%;}button::-moz-focus-inner{border:0;}"],function(e){return e.isOpen?1:0},function(e){return e.isOpen?"visible":"hidden"},M),G=v.b.div.withConfig({displayName:"elements__WidgetBody",componentId:"h3m622-1"})(["position:relative;flex:1;background-color:#fff;box-shadow:inset 0 21px 4px -20px rgba(0,0,0,0.2);"]),X=v.b.div.withConfig({displayName:"elements__WidgetHome",componentId:"h3m622-2"})(["position:fixed;top:0;left:0;right:0;bottom:0;overflow-y:",";"],function(e){return e.mainPage?"auto":"hidden"}),J=v.b.div.withConfig({displayName:"elements__WidgetHomeBody",componentId:"h3m622-3"})(["height:",";padding:"," 16px 0 16px;display:flex;flex-direction:column;box-sizing:border-box;min-height:100%;transition:padding 0.3s ease-out;"],function(){},function(e){return e.mainPage?"120px":"62px"}),Z=v.b.div.withConfig({displayName:"elements__WidgetFooter",componentId:"h3m622-4"})(["z-index:1000;position:fixed;bottom:0;width:100%;min-height:","px;padding:2px 0;",";",";text-align:center;display:flex;justify-content:center;align-items:center;"],c.h,function(e){return e.isFooter?"background: linear-gradient(180deg, rgba(242, 244, 246, 0) 0%, #ffffff 30%);":""},function(){}),K=v.b.div.withConfig({displayName:"elements__ButtonContainer",componentId:"h3m622-5"})(["padding:0;"]),Q=v.b.div.withConfig({displayName:"elements__PoweredByWrapper",componentId:"h3m622-6"})(["text-align:center;svg{vertical-align:middle;}"]),V=v.b.a.withConfig({displayName:"elements__PoweredBy",componentId:"h3m622-7"})(["font-size:0.75rem;color:#123447;text-decoration:none;b{font-weight:600;}"]);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var te=function(e){var t=ee(Object(d.b)(),2),n=t[0],a=n.deck,i=n.app.widgetType,l=t[1],p=e.isOpen,g=e.onClose,h=e.t,b=e.settings,y=ee(Object(r.useState)(null),2),w=y[0],x=y[1],v=Object(m.c)(),k=function(e){e.target.closest("#imageUpload-dropzone")||(e.preventDefault(),e.dataTransfer.effectAllowed="none",e.dataTransfer.dropEffect="none")};Object(r.useEffect)(function(){v.window.addEventListener("dragenter",function(e){return k(e)},!1),v.window.addEventListener("dragover",function(e){return k(e)},!1),v.window.addEventListener("drop",function(e){return k(e)},!1)},[]);var E=b.labelsBanner,C=b.labelsFrustrationTrackingBanner,O=b.appearanceRemoveFreshworksBranding,_=a.showDeck,j=a.mainPage,T=a.overflowHidden,P=a.cards,S=a.currentPage,I=a.deckClassName,L=a.selectedArticleId,N=a.searchActive,B=a.scrollTop,F=a.showFooterWrapper,W=a.refreshId,R=i&&c.j.includes(i)?C:E,H=[c.e.home,c.e.thanks].includes(S)&&!N&&!O,A=F||H;return o.a.createElement(U,{isOpen:p,"data-testid":"wrapper"},o.a.createElement(s.l,{mainPage:j,message:R,searchActive:N,onClose:g,scrollTop:B,removeDecks:function(){},currentPage:S,"data-testid":"widget-header",settings:b}),o.a.createElement(G,{onScroll:function(e){var t=e.target,n=t.id,r=t.scrollTop;"home"===n&&Object(f.m)(l,r)},"data-testid":"widget-body"},o.a.createElement(X,{id:"home",mainPage:j,"data-testid":"widget-body-home"},o.a.createElement(J,{mainPage:j},o.a.createElement(z,$({key:W,gotoContactUs:function(){return Object(f.q)(l,a.cards)},gotoThanks:function(){},searchActive:N,activateSearch:function(){return Object(f.l)(l)},deactivateSearch:function(){return Object(f.n)(l)},gotoArticle:function(){},buttonContainerRef:w,cards:P,mainPage:j,showDeck:_,deckClassName:I,overflowHidden:T,selectedArticleId:L,showFooterWrapper:function(e){return Object(f.t)(l,e)}},e))))),o.a.createElement(Z,{showDeck:_,isFooter:A},o.a.createElement(K,{innerRef:function(e){x(e)}}),H&&o.a.createElement(Q,{"data-testid":"poweredby"},o.a.createElement(V,{target:"_blank",rel:"noopener noreferrer",href:"https://freshdesk.com/customer-engagement/help-widget?utm_source=widget&utm_medium=branding"},o.a.createElement(u.a,null),h("common.header.poweredby"),o.a.createElement("b",null,h("common.header.freshworks"))))))};te.propTypes={onClose:i.a.func,isOpen:i.a.bool,t:i.a.func,widgetType:i.a.string,refreshId:i.a.string,settings:i.a.object,deck:i.a.object,dispatch:i.a.func},te.defaultProps={onClose:function(){},isOpen:!1,t:function(){},widgetType:"",refreshId:"",settings:{},deck:{},dispatch:function(){}};t.default=Object(l.b)()(te)},193:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(7),i=n(171),c=n(232),s=n.n(c),l=n(3),p=n.n(l),u=n(290),f=n.n(u);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w={1:"linear-gradient(214.85deg, #00a886 0%, #006c9f 100%)",2:"linear-gradient(205.05deg, #2e6ed8 0%, #6a11cb 100%)",3:"linear-gradient(207.93deg, #e43538 0%, #ad0017 100%)",4:"linear-gradient(41.43deg, #cf0000 0%, #f79605 100%)",5:"linear-gradient(218.44deg, #813dda 0%, #9b0694 100%)"},x=a.b.div.withConfig({displayName:"WidgetHeader__Wrapper",componentId:"e8xmgj-0"})(["height:184px;position:relative;background:",";background-size:contain;color:",";&:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background:",";background-size:contain;opacity:0.8;transition:all 0.5s;}"],function(e){return t=e.settings,n=t.appearanceColorScheme,r=t.appearanceGradient,o=t.appearanceThemeColor,1===n&&r?w[r]:o||"white";var t,n,r,o},function(e){return t=e.settings,n=t.appearanceColorScheme,r=t.appearanceThemeTextColor,1===n?"white":r;var t,n,r},function(e){return t=e.settings,(r=t.appearancePattern)>1&&r<7?"url(".concat(n(291)("./pattern_".concat(r,".png")),")"):"none";var t,r}),v=a.b.div.withConfig({displayName:"WidgetHeader__CaptionWrapper",componentId:"e8xmgj-1"})(["height:120px;display:flex;align-items:center;padding:16px;margin:0 48px 0 16px;"]),k=a.b.h2.withConfig({displayName:"WidgetHeader__Caption",componentId:"e8xmgj-2"})(["margin:0;font-weight:600;line-height:2rem;word-break:break-word;"]),E=a.b.div.withConfig({displayName:"WidgetHeader__CloseWrapper",componentId:"e8xmgj-3"})(["z-index:1000;background-color:rgba(7,18,40,0.4);position:absolute;right:16px;top:16px;width:32px;height:32px;display:flex;align-items:center;border-radius:8px;cursor:pointer;&:hover{background-color:rgba(7,18,40,0.6);svg{transform:scale(1.1);-ms-transform:none;-ms-zoom:1.1;transition:all 0.1s ease-out;}}"]),C=Object(a.b)(s.a).withConfig({displayName:"WidgetHeader__CloseIconWrapper",componentId:"e8xmgj-4"})(["fill:#ffffff;margin:0 auto;display:block;width:14px;height:14px;transition:0.1s ease-in;"]),O=a.b.button.withConfig({displayName:"WidgetHeader__BackButton",componentId:"e8xmgj-5"})(["z-index:1000;background-color:rgba(7,18,40,0.4);position:absolute;left:16px;top:16px;min-width:80px;border-radius:8px;height:32px;font-size:0.875rem;color:#fff;border:none;font-weight:600;cursor:pointer;transition:opacity 0.2s;text-transform:capitalize;&:hover{background-color:rgba(7,18,40,0.6);}&:focus{outline:none;}"]),_={verticalAlign:"bottom",float:"left"},j=function(e){return{opacity:e>0?"".concat(1-e/75):"1",transform:e>0?"translateY(".concat(e/-2,"px)"):"translateY(0)"}},T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,b(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["PureComponent"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.mainPage,n=e.message,r=e.onClose,a=e.scrollTop,i=e.removeDecks,c=e.t,s=e.currentPage,l=!t&&!("Thanks"===s);return o.a.createElement(x,m({},this.props,{"data-testid":"header-wrapper"}),t&&o.a.createElement(v,m({},this.props,{style:j(a),"data-testid":"caption-container"}),o.a.createElement(k,m({},this.props,{"data-testid":"caption-message"}),n)),l&&o.a.createElement(O,{onClick:i,"data-testid":"header-back-button"},o.a.createElement(f.a,{style:_,alt:c("common.header.back")}),o.a.createElement("span",null,c("common.header.back"))),o.a.createElement(E,{onClick:r,"data-testid":"header-close"},o.a.createElement(C,{alt:c("common.close")})))}}])&&g(n.prototype,a),i&&g(n,i),t}();T.propTypes={mainPage:p.a.bool,message:p.a.string,onClose:p.a.func,scrollTop:p.a.number,removeDecks:p.a.func,t:p.a.func,currentPage:p.a.string},T.defaultProps={mainPage:!1,message:"",onClose:function(){},scrollTop:0,removeDecks:function(){},t:function(){},currentPage:""};var P=Object(i.b)()(T),S=a.b.div.withConfig({displayName:"Scrim__ContentScrim",componentId:"mlf2gg-0"})(["position:sticky;top:0;left:0;right:0;background-image:linear-gradient(to top,rgba(255,255,255,0),rgb(255,255,255));height:24px;"]);var I=function(){return o.a.createElement(S,null)},L=n(70),N=n(25),B=n.n(N);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var W=a.b.div.withConfig({displayName:"ButtonWrapper__Wrapper",componentId:"sc-1pgn6p-0"})(["margin-bottom:12px;"]);function R(e){var t=e.children,n=e.buttonContainerRef;return n?B.a.createPortal(o.a.createElement(W,F({},e,{className:"button-wrapper"}),t),n):o.a.createElement(W,F({},e,{className:"button-wrapper"}),t)}R.propTypes={children:p.a.any,buttonContainerRef:p.a.object},R.defaultProps={children:{},buttonContainerRef:null};var H=R,A=a.b.svg.withConfig({displayName:"ButtonLoader__InlineLoader",componentId:"sc-1qs3i0g-0"})(["animation:rotate 1s linear infinite;width:30px;height:30px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;& .path{stroke:#fff;stroke-linecap:round;animation:dash 1s ease-in-out infinite;}@keyframes rotate{100%{transform:rotate(360deg);}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0;}50%{stroke-dasharray:90,150;stroke-dashoffset:-35;}100%{stroke-dasharray:90,150;stroke-dashoffset:-124;}}"]),Y=function(){return o.a.createElement(A,{viewBox:"0 0 50 50"},o.a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"}))},D=n(297),q=n.n(D),z=a.b.div.withConfig({displayName:"SearchBar__Wrapper",componentId:"sc-39np2c-0"})(["margin-top:0;position:relative;"]),M=a.b.input.withConfig({displayName:"SearchBar__Input",componentId:"sc-39np2c-1"})(["padding:11px 38px 11px 14px;margin:5px 0 3px 0;border-radius:6px;display:block;border:solid 1px rgb(207,215,223);width:100%;box-shadow:0 5px 8px 0 rgba(0,0,0,0.02),0 0 8px 0 rgba(0,0,0,0.06);font-size:0.875rem;font-weight:600;height:44px;&:hover{box-shadow:0 0 1px 0 rgba(24,50,71,0.3),0 2px 14px 0 rgba(22,29,37,0.12);border:1px #475867 solid;}&:focus{box-shadow:0 0 0 1px #1054da;border:1px #1054da solid;outline:none;}&::placeholder{font-weight:400;color:#647a8e;}"]),U=a.b.button.withConfig({displayName:"SearchBar__Icon",componentId:"sc-39np2c-2"})(["font-size:1.125rem;align-self:center;cursor:pointer;position:absolute;right:0px;top:0;background:#647a8e;margin:6px;padding:0 8px;border-radius:4px;height:32px;width:32px;outline:none;border:none;svg{width:14px;height:14px;fill:#fff;}"]),G=function(e){var t=e.query,n=e.placeHolder,r=e.onChange,a=e.t,i=e.onSearch,c=e.isFocus;return o.a.createElement(z,{"data-testid":"search-bar-wrapper"},o.a.createElement(M,{type:"text",placeholder:n,name:"query",autoComplete:"off",value:t,onChange:r,autoFocus:c,onKeyDown:function(e){return function(){}(e,i)},"data-testid":"search-input"}),o.a.createElement(U,{type:"submit","aria-label":a("common.search"),onClick:function(){i()},"data-testid":"search-icon"},o.a.createElement(q.a,{alt:a("common.search")})))};G.propTypes={query:p.a.string,placeHolder:p.a.string,onSearch:p.a.func,onChange:p.a.func,t:p.a.func,isFocus:p.a.bool},G.defaultProps={query:"",placeHolder:"",onSearch:function(){},onChange:function(){},t:function(){},isFocus:!1};var X=Object(i.b)()(G),J=n(357),Z={primaryColor:"#f5f7f9",secondaryColor:"rgba(255, 255, 255, 0.5)"},K="400",Q={height:250,maxTimes:2,maxLines:7,lineHt:18,rectY:17,rectYIncrement:31,rx:3,ry:3},V={height:250,maxTimes:1,maxLines:4,lineHt:48,rectY:12,rectYIncrement:62,rx:8,ry:8},$={height:400,maxTimes:1,maxLines:6,lineHt:20,rectY:17,rectYIncrement:31,rx:4,ry:4};function ee(e){for(var t=[],n=0;n<e.maxTimes;n+=1)t.push(e.children(n));return o.a.createElement(o.a.Fragment,null,t)}function te(e,t,n){return"content"===e&&t===n?"250":"form"===e&&t%2==0?"120":K}function ne(e,t,n){return"form"===e&&t%2==1?2.4*n:n}function re(e){var t=e.maxTimes,n=e.lineHeight,r=e.rectY,a=e.rectYIncrement,i=e.loaderType,c=e.rx,s=e.ry;return o.a.createElement(ee,{maxTimes:t},function(t){return r=function(e,t,n,r,o){var a=t;return a=0===n?a:a+r,"form"===e&&0!==n&&n%2==0&&(a+=2.4*o),a}(i,r,t,a,n),o.a.createElement("rect",{x:"0",y:r,rx:c,ry:s,width:te(i,t,e.maxTimes-1),height:ne(i,t,n),key:t})})}function oe(){return o.a.createElement(ee,{maxTimes:Q.maxTimes},function(e){return o.a.createElement(J.a,{primaryColor:Z.primaryColor,secondaryColor:Z.secondaryColor,height:Q.height,key:e,"data-testid":"loading-content-loader"},o.a.createElement(re,{maxTimes:Q.maxLines,lineHeight:Q.lineHt,loaderType:"content",rectY:Q.rectY,rectYIncrement:Q.rectYIncrement,rx:Q.rx,ry:Q.ry}))})}function ae(){return o.a.createElement(ee,{maxTimes:$.maxTimes},function(e){return o.a.createElement(J.a,{primaryColor:Z.primaryColor,secondaryColor:Z.secondaryColor,height:$.height,key:e,"data-testid":"form-loader"},o.a.createElement(re,{maxTimes:$.maxLines,lineHeight:$.lineHt,loaderType:"form",rectY:$.rectY,rectYIncrement:$.rectYIncrement,rx:$.rx,ry:$.ry}))})}function ie(){return o.a.createElement(ee,{maxTimes:V.maxTimes},function(e){return o.a.createElement(J.a,{primaryColor:Z.primaryColor,secondaryColor:Z.secondaryColor,height:V.height,key:e,"data-testid":"bullet-list-loader"},o.a.createElement(re,{maxTimes:V.maxLines,lineHeight:V.lineHt,rectY:V.rectY,rectYIncrement:V.rectYIncrement,rx:V.rx,ry:V.ry}))})}re.propTypes={maxTimes:p.a.any},re.defaultProps={maxTimes:""},ee.propTypes={maxTimes:p.a.any,children:p.a.any},ee.defaultProps={maxTimes:"",children:[]};var ce=a.b.div.withConfig({displayName:"PageWrapper__Wrapper",componentId:"xmkvb5-0"})(["transition:all 0.5s ease-in;min-height:364px;height:100%;border-radius:8px;overflow-y:auto;overflow-x:hidden;",";background:#fff;box-shadow:0 0 2px 0 rgba(18,52,77,0.16),0 2px 12px 0 rgba(18,52,77,0.1);"],function(e){return e.isFrameContent?"":"padding: 0 16px 18px 16px"}),se=a.b.form.withConfig({displayName:"PageWrapper__FormWrapper",componentId:"xmkvb5-1"})(["",";"],function(e){return e.showDeck?"padding-bottom: 86px;":""}),le=a.b.h2.withConfig({displayName:"PageWrapper__SubTitle",componentId:"xmkvb5-2"})(["font-size:1rem;font-weight:700;margin:0 0 20px 0;"]),pe=n(358),ue=n.n(pe),fe=n(4),de=n(18);function me(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ge(e){var t=me(Object(de.b)(),2),n=t[0].app,a=t[1],i=window.parent.document.getElementById("lightbox-frame").contentDocument.getElementById("lightbox-modal");ue.a.setAppElement(i);var c=e.src,l=function(){e.setLightBoxSource(),Object(fe.k)(a)};return Object(r.useEffect)(function(){return Object(fe.k)(a,!0),function(){}},[]),o.a.createElement(ue.a,{isOpen:n.showLightBox,onRequestClose:l,overlayClassName:"helpwidget-modal-overlay",className:"helpwidget-modal-content",contentLabel:"Image Lightbox",parentSelector:function(){return i}},o.a.createElement("div",{className:"lightbox-image-container"},o.a.createElement("button",{onClick:l,type:"button",className:"lightbox-close-button","data-testid":"lightbox-close"},o.a.createElement(s.a,{className:"lightbox-close"})),o.a.createElement("img",{src:c,alt:"lightbox",className:"lightbox-image","data-testid":"lightbox-image"})))}ge.propTypes={src:p.a.string,setLightBoxSource:p.a.func},ge.defaultProps={src:"",setLightBoxSource:function(){}};var he=ge;n.d(t,"l",function(){return P}),n.d(t,"i",function(){return I}),n.d(t,"g",function(){return L.a}),n.d(t,"c",function(){return H}),n.d(t,"b",function(){return Y}),n.d(t,"m",function(){return ce}),n.d(t,"e",function(){return se}),n.d(t,"k",function(){return le}),n.d(t,"j",function(){return X}),n.d(t,"h",function(){return oe}),n.d(t,"a",function(){return ie}),n.d(t,"d",function(){return ae}),n.d(t,"f",function(){return he})},232:function(e,t,n){var r=n(0);function o(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Close"),r.createElement("path",{d:"M19.919 16l8.269 8.269c1.082 1.082 1.082 2.837 0 3.919s-2.837 1.082-3.919 0l-8.269-8.269-8.269 8.269c-1.082 1.082-2.837 1.082-3.919 0s-1.082-2.837 0-3.919l8.269-8.269-8.269-8.269c-1.082-1.082-1.082-2.837 0-3.919s2.837-1.082 3.919 0l8.269 8.269 8.269-8.269c1.082-1.082 2.837-1.082 3.919 0s1.082 2.837 0 3.919l-8.269 8.269z",key:1})])}o.defaultProps={version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"},e.exports=o,o.default=o},290:function(e,t,n){var r=n(0);function o(e){return r.createElement("svg",e,[r.createElement("defs",{key:0}),r.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:1},r.createElement("g",{id:"back",fill:"#fff",fillRule:"nonzero"},r.createElement("path",{d:"M13.8998999,27.5076008 L29.0235879,12.7547915 C29.9969303,11.8053184 30.0162802,10.2465685 29.0668071,9.27322603 C29.0525801,9.25864135 29.0381726,9.24423384 29.0235879,9.23000682 L29.0235879,9.23000682 C28.0186024,8.24966668 26.4151772,8.24966668 25.4101917,9.23000682 L5.65174505,28.5039164 L5.65174505,28.5039164 C4.82548091,29.3099181 4.8090549,30.6331309 5.61505654,31.4593951 C5.62713377,31.4717759 5.63936421,31.4840063 5.65174505,31.4960836 L25.4101917,50.7699932 L25.4101917,50.7699932 C26.4151772,51.7503333 28.0186024,51.7503333 29.0235879,50.7699932 C29.9969303,49.8205201 30.0162802,48.2617701 29.0668071,47.2884277 C29.0525801,47.273843 29.0381726,47.2594355 29.0235879,47.2452085 L13.8998999,32.4923992 L52.4449431,32.4923992 C53.856062,32.4923992 55,31.3765141 55,30 C55,28.6234859 53.856062,27.5076008 52.4449431,27.5076008 L13.8998999,27.5076008 Z"})))])}o.defaultProps={width:"16px",height:"16px",viewBox:"0 0 60 60",version:"1.1"},e.exports=o,o.default=o},291:function(){},292:function(e,t){e.exports="https://widget.freshworks.com/widgetBase/static/media/pattern_2.f2b4abff.png"},293:function(e,t){e.exports="https://widget.freshworks.com/widgetBase/static/media/pattern_3.5bdba8f9.png"},294:function(e,t){e.exports="https://widget.freshworks.com/widgetBase/static/media/pattern_4.1f330768.png"},295:function(e,t){e.exports="https://widget.freshworks.com/widgetBase/static/media/pattern_5.47acda0d.png"},296:function(e,t){e.exports="https://widget.freshworks.com/widgetBase/static/media/pattern_6.79d80bfb.png"},297:function(){}