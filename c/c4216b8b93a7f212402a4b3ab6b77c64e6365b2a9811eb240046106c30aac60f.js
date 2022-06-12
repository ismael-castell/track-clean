/*!
######################################################

# INFINITY_COMMON.JS

# Version: 1.14

# BUILD DATE: Thursday October 29 2020

# COPYRIGHT ORACLE CORP 2020 [UNLESS STATED OTHERWISE]

######################################################
*/
var OraInfCustPluginGlobals=(function(){var publicScope={};publicScope.getUrlQueryParameter=function(){};publicScope.getHostName=function(r){if(r){var e=r.match(/\/\/(www[0-9]?\.)?(.[^/:]+)/i);return null!=e&&e.length>2&&"string"==typeof e[2]&&e[2].length>0?e[2]:null;}};publicScope.getHostObject=function(r){if(r){var e=r.match(/^(?:https?:|ftps?:)?(?:\/\/)?([^\/\?]+[.]+[\w]+[:\w]*)/i);return null!=e&&e.length>1&&"string"==typeof e[1]&&e[1].length>0?{origin:e[0],host:e[1]}:null;}};publicScope.getMetaTagValue=function(name){var tag,value="";tag=document.head.querySelector('meta[name="'+name+'" i]');if(tag){value=tag.getAttribute("content");}return value;};publicScope.domainSpecificParamsForCampaigns=function(){var params={"go.oracle.com":"src1","event.on24.com":"Partnerref","myservices.us.oraclecloud.com":"sourceType"};return params;};return publicScope;})();
/*! Truste Global script - v1.1 */
try{oracle.truste.api.getGdprConsentDecision();}catch(err){var oracle=oracle||{};oracle.truste={},oracle.truste.api={},function(){this.getCookieName=function(){return"notice_preferences";},this.getStorageItemName=function(){return"truste.eu.cookie.notice_preferences";},this.getGdprCookieName=function(){return"notice_gdpr_prefs";},this.getGdprStorageItemName=function(){return"truste.eu.cookie.notice_gdpr_prefs";};}.apply(oracle.truste),function(){var e=oracle.truste;function t(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "==o.charAt(0);){o=o.substring(1);}if(0==o.indexOf(t)){return o.substring(t.length,o.length);}}return null;}function r(e){var t,r=(t=e,"undefined"!=typeof Storage?localStorage.getItem(t):null);return null!=r?JSON.parse(r).value:null;}this.getConsentCode=function(){}