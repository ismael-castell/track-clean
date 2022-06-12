/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
;if(typeof JSON_PIWIK!=="object"&&typeof window.JSON==="object"&&window.JSON.stringify&&window.JSON.parse){JSON_PIWIK=window.JSON}else{(function(){})()}if(typeof _paq!=="object"){_paq=[]}if(typeof window.Piwik!=="object"){window.Matomo=window.Piwik=(function(){var r,b={},y={},G=document,h=navigator,X=screen,T=window,i=T.performance||T.mozPerformance||T.msPerformance||T.webkitPerformance,t=T.encodeURIComponent,S=T.decodeURIComponent,l=unescape,I=[],E,e,ah=[],x=0,ab=0,U=0,m=false;
function(){}function(){}function A(ao){return typeof ao==="function"}function W(ao){return typeof ao==="object"}function(){}function ag(ao){return typeof ao==="number"||ao instanceof Number}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function s(ao){var aq=new RegExp("^([a-z]+):"),ap=aq.exec(ao);return ap?ap[1]:null}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function D(ao){return unescape(t(ao))}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}var ae={htmlCollectionToArray:function(){},find:function(){},findMultiple:function(){},findNodesByTagName:function(){},makeNodesUnique:function(){},getAttributeValueFromNode:function(){},hasNodeAttributeWithValue:function(){},hasNodeAttribute:function(){},hasNodeCssClass:function(){},findNodesHavingAttribute:function(){},findFirstNodeHavingAttribute:function(aq,ap){if(!aq||!ap){return}if(this.hasNodeAttribute(aq,ap)){return aq}var ao=this.findNodesHavingAttribute(aq,ap);if(ao&&ao.length){return ao[0]}},findFirstNodeHavingAttributeWithValue:function(){},findNodesHavingCssClass:function(){},findFirstNodeHavingClass:function(){},isLinkElement:function(){},setAnyAttribute:function(){}};var v={CONTENT_ATTR:"data-track-content",CONTENT_CLASS:"piwikTrackContent",CONTENT_NAME_ATTR:"data-content-name",CONTENT_PIECE_ATTR:"data-content-piece",CONTENT_PIECE_CLASS:"piwikContentPiece",CONTENT_TARGET_ATTR:"data-content-target",CONTENT_TARGET_CLASS:"piwikContentTarget",CONTENT_IGNOREINTERACTION_ATTR:"data-content-ignoreinteraction",CONTENT_IGNOREINTERACTION_CLASS:"piwikContentIgnoreInteraction",location:undefined,findContentNodes:function(){},findContentNodesWithinNode:function(){},findParentContentNode:function(){},findPieceNode:function(){},findTargetNodeNoDefault:function(){},findTargetNode:function(){},findContentName:function(){},findContentPiece:function(){},findContentTarget:function(){},isSameDomain:function(){},removeDomainIfIsInLink:function(){},findMediaUrlInNode:function(){},trim:function(ao){return a(ao)},isOrWasNodeInViewport:function(){},isNodeVisible:function(){},buildInteractionRequestParams:function(){},buildImpressionRequestParams:function(){},buildContentBlock:function(){},collectContent:function(){},setLocation:function(ao){this.location=ao},getLocation:function(){},toAbsoluteUrl:function(){},isUrlToCurrentDomain:function(){},setHrefAttribute:function(){},shouldIgnoreInteraction:function(){}};function(){}function(){}function(){}function(){}function Q(cd,b8){var bH=this,bd="mtm_consent",cK="mtm_consent_removed",b3=aa(G.domain,T.location.href,K()),cT=L(b3[0]),bM=p(b3[1]),bm=p(b3[2]),cR=false,ch="GET",c9=ch,aH="application/x-www-form-urlencoded; charset=UTF-8",cw=aH,aD=cd||"",bG="",cY="",b5=b8||"",bx="",bN="",a4,bi="",c5=["7z","aac","apk","arc","arj","asf","asx","avi","azw3","bin","csv","deb","dmg","doc","docx","epub","exe","flv","gif","gz","gzip","hqx","ibooks","jar","jpg","jpeg","js","mobi","mp2","mp3","mp4","mpg","mpeg","mov","movie","msi","msp","odb","odf","odg","ods","odt","ogg","ogv","pdf","phps","png","ppt","pptx","qt","qtm","ra","ram","rar","rpm","sea","sit","tar","tbz","tbz2","bz","bz2","tgz","torrent","txt","wav","wma","wmv","wpd","xls","xlsx","xml","z","zip"],ax=[cT],by=[],bK=[],a8=[],bI=500,cV=false,cG,a5,bQ,c6=1800,bO,ao,cq=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],bF=["pk_kwd","piwik_kwd","utm_term"],bj="_pk_",av="pk_vid",aZ=180,cW,bo,bR=false,bk=false,cO,be,bu,cH=33955200000,co=1800000,c4=15768000000,a2=true,cm=0,bP=false,aQ=false,ca,bV={},cl={},bl={},bs=200,cZ={},c7={},b9=[],ce=false,cA=false,ap=false,c8=false,cL=false,aN=false,bc=u(),cQ=null,cX=null,cb,aR,bz,b6=am,bn,aK,cr=0,bt=["id","ses","cvar","ref"],cz=false,bA=null,cI=[],aw=U++;
try{bi=G.title}catch(cx){bi=""}function(){}function(){}bA=!aC(cK);function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function aT(di){return bj+di+"."+b5+"."+bn}function(){}function(){}function bh(){bn=b6((cW||cT)+(bo||"/")).slice(0,4)}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}bQ=function(){};function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function cv(){return G.all&&!G.addEventListener}function(){}function(){}function a1(di){return di.target||di.srcElement}function(){}function(){}function(){}function(){}var bB={enabled:true,requests:[],timeout:null,interval:2500,sendRequests:function(){},push:function(){}};bh();aL();this.hasConsent=function(){return bA};this.getVisitorId=function(){};this.getVisitorInfo=function(){return cM()};this.getAttributionInfo=function(){return bL()};this.getAttributionCampaignName=function(){return bL()[0]};this.getAttributionCampaignKeyword=function(){return bL()[1]};this.getAttributionReferrerTimestamp=function(){return bL()[2]};this.getAttributionReferrerUrl=function(){return bL()[3]};this.setTrackerUrl=function(di){aD=di};this.getTrackerUrl=function(){return aD};this.getPiwikUrl=function(){};this.addTracker=function(){};this.getSiteId=function(){return b5};this.setSiteId=function(di){b2(di)};this.resetUserId=function(){bx=""};this.setUserId=function(){};this.getUserId=function(){return bx};this.setCustomData=function(){};this.getCustomData=function(){return ao};this.setCustomRequestProcessing=function(di){ca=di};this.appendToTrackingUrl=function(di){cY=di
};this.getRequest=function(di){return cs(di)};this.addPlugin=function(di,dj){b[di]=dj};this.setCustomDimension=function(){};this.getCustomDimension=function(){};this.deleteCustomDimension=function(){};this.setCustomVariable=function(){};this.getCustomVariable=function(){};this.deleteCustomVariable=function(){};this.deleteCustomVariables=function(){};this.storeCustomVariablesInCookie=function(){bP=true};this.setLinkTrackingTimer=function(di){bI=di};this.getLinkTrackingTimer=function(){return bI};this.setDownloadExtensions=function(){};this.addDownloadExtensions=function(){};this.removeDownloadExtensions=function(){};this.setDomains=function(){};this.enableCrossDomainLinking=function(){cL=true};this.disableCrossDomainLinking=function(){cL=false};this.isCrossDomainLinkingEnabled=function(){return cL
};this.setCrossDomainLinkingTimeout=function(di){aZ=di};this.getCrossDomainLinkingUrlParameter=function(){};this.setIgnoreClasses=function(di){by=w(di)?[di]:di};this.setRequestMethod=function(di){c9=di||ch};this.setRequestContentType=function(){};this.setReferrerUrl=function(di){bm=di};this.setCustomUrl=function(di){a4=bU(bM,di)};this.getCurrentUrl=function(){return a4||bM};this.setDocumentTitle=function(di){bi=di};this.setAPIUrl=function(di){bG=di};this.setDownloadClasses=function(di){bK=w(di)?[di]:di};this.setLinkClasses=function(di){a8=w(di)?[di]:di};this.setCampaignNameKey=function(di){cq=w(di)?[di]:di};this.setCampaignKeywordKey=function(){};this.discardHashTag=function(di){bO=di};this.setCookieNamePrefix=function(){};this.setCookieDomain=function(){};this.getCookieDomain=function(){return cW};this.hasCookies=function(){};this.setSessionCookie=function(){};this.getCookie=function(){};this.setCookiePath=function(di){bo=di;bh()};this.getCookiePath=function(di){return bo};this.setVisitorCookieTimeout=function(){};this.setSessionCookieTimeout=function(di){co=di*1000};this.getSessionCookieTimeout=function(){return co};this.setReferralCookieTimeout=function(di){c4=di*1000};this.setConversionAttributionFirstReferrer=function(di){bu=di};this.setSecureCookie=function(di){bR=di};this.disableCookies=function(){};this.deleteCookies=function(){aE()};this.setDoNotTrack=function(){};this.alwaysUseSendBeacon=function(){cV=true};this.addListener=function(dj,di){aq(dj,di)};this.enableLinkTracking=function(){};this.enableJSErrorTracking=function(){};this.disablePerformanceTracking=function(){a2=false};this.setGenerationTimeMs=function(){};this.setVisitStandardLength=function(){};this.enableHeartBeatTimer=function(){};this.disableHeartBeatTimer=function(){};this.killFrame=function(){};this.redirectFile=function(){};this.setCountPreRendered=function(di){be=di};this.trackGoal=function(){};this.trackLink=function(dj,di,dl,dk){cg(function(){c0(dj,di,dl,dk)
})};this.getNumTrackedPageViews=function(){return cr};this.trackPageView=function(){};this.trackAllContentImpressions=function(){};this.trackVisibleContentImpressions=function(){};this.trackContentImpression=function(){};this.trackContentImpressionsWithinNode=function(){};this.trackContentInteraction=function(){};this.trackContentInteractionNode=function(){};this.logAllContentBlocksOnPage=function(){};this.trackEvent=function(){};this.trackSiteSearch=function(){};this.setEcommerceView=function(){};this.getEcommerceItems=function(){return JSON.parse(JSON.stringify(cZ))
};this.addEcommerceItem=function(){};this.removeEcommerceItem=function(){};this.clearEcommerceCart=function(){cZ={}};this.trackEcommerceOrder=function(){};this.trackEcommerceCartUpdate=function(di){br(di)};this.trackRequest=function(){};this.ping=function(){};this.disableQueueRequest=function(){bB.enabled=false};this.setRequestQueueInterval=function(){};this.queueRequest=function(){};this.isConsentRequired=function(){return cz};this.getRememberedConsent=function(){};this.hasRememberedConsent=function(){return !!this.getRememberedConsent()
};this.requireConsent=function(){};this.setConsentGiven=function(){};this.rememberConsentGiven=function(){};this.forgetConsentGiven=function(){};this.isUserOptedOut=function(){return !bA};this.optUserOut=this.forgetConsentGiven;this.forgetUserOptOut=this.rememberConsentGiven;e.trigger("TrackerSetup",[this])}function H(){return{push:af}}function(){}var C=["addTracker","disableCookies","setTrackerUrl","setAPIUrl","enableCrossDomainLinking","setCrossDomainLinkingTimeout","setSessionCookieTimeout","setVisitorCookieTimeout","setSecureCookie","setCookiePath","setCookieDomain","setDomains","setUserId","setSiteId","alwaysUseSendBeacon","enableLinkTracking","requireConsent","setConsentGiven"];function(){}an(T,"beforeunload",ai,false);window.addEventListener("message",function(){});Date.prototype.getTimeAlias=Date.prototype.getTime;e={initialized:false,JSON:JSON_PIWIK,DOM:{addEventListener:function(){},onLoad:n,onReady:q,isNodeVisible:j,isOrWasNodeVisible:v.isNodeVisible},on:function(){},off:function(){},trigger:function(){},addPlugin:function(ao,ap){b[ao]=ap},getTracker:function(){},getAsyncTrackers:function(){return I},addTracker:function(){},getAsyncTracker:function(){},retryMissedPluginCalls:function(){}};if(typeof define==="function"&&define.amd){define("piwik",[],function(){return e});define("matomo",[],function(){return e})}return e}())}
/*!!! pluginTrackerHook */
(function(){}());(function(){}());if(typeof piwik_log!=="function"){piwik_log=function(){}