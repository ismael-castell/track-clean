/*! elementor - v3.4.8 - 16-11-2021 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[819],{9220:,9804:,5654:,4058:,7537:,6397:,2987:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BackgroundVideo extends elementorModules.frontend.handlers.Base{prepareVimeoVideo(e,t){const n=this.getElementSettings(),i={url:t,width:this.elements.$backgroundVideoContainer.outerWidth().width,autoplay:!0,loop:!n.background_play_once,transparent:!1,background:!0,muted:!0};this.player=new e.Player(this.elements.$backgroundVideoContainer,i),this.handleVimeoStartEndTimes(n),this.player.ready().then(())}onElementChange(e){"background_background"===e&&this.run()}}t.default=BackgroundVideo},355:,9320:,3384:,2804:,3346:,6866:,8646:,7139:,2064:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{links:'a[href^="%23elementor-action"], a[href^="#elementor-action"]'}}}initActions(){this.actions={lightbox:async e=>{const t=await elementorFrontend.utils.lightbox;e.id?t.openSlideshow(e.id,e.url):(e.html&&delete e.html,t.showModal(e))}}}}t.default=_default},6028:,4773:,1911:,1604:,59:,4375:,9469:,3308:,5107:,6046:},