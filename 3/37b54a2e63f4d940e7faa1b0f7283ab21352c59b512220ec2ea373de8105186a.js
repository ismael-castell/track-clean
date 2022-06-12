var oCONFIG={GWT_UAID:["UA-33523145-1"],FORCE_SSL:!0,ANONYMIZE_IP:!0,AGENCY:"",SUB_AGENCY:"",VERSION:"20181010 v4.1 - Universal Analytics",SITE_TOPIC:"",SITE_PLATFORM:"",SCRIPT_SOURCE:"",URL_PROTOCOL:location.protocol,USE_MAIN_CUSTOM_DIMENSIONS:!0,MAIN_AGENCY_CUSTOM_DIMENSION_SLOT:"dimension1",MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT:"dimension2",MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT:"dimension3",MAIN_SITE_TOPIC_CUSTOM_DIMENSION_SLOT:"dimension4",MAIN_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT:"dimension5",
MAIN_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT:"dimension6",MAIN_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT:"dimension7",MAIN_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT:"dimension8",USE_PARALLEL_CUSTOM_DIMENSIONS:!1,PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT:"dimension1",PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT:"dimension2",PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT:"dimension3",PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT:"dimension4",PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT:"dimension5",PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT:"dimension6",
PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT:"dimension7",PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT:"dimension8",COOKIE_DOMAIN:location.hostname.replace("www.","").toLowerCase(),COOKIE_TIMEOUT:63072E3,SEARCH_PARAMS:"q|querytext|nasaInclude|k|qt",YOUTUBE:!1,AUTOTRACKER:!0,EXTS:"doc|docx|xls|xlsx|xlsm|ppt|pptx|exe|zip|pdf|js|txt|csv|dxf|dwgd|rfa|rvt|dwfx|dwg|wmv|jpg|msi|7z|gz|tgz|wma|mov|avi|mp3|mp4|csv|mobi|epub|swf|rar",SUBDOMAIN_BASED:!0,DOUBLECLICK_LINK:!1,ENHANCED_LINK:!1,OPTOUT_PAGE:!1,TRANSPORT:"xhr",
PUA_NAME:"GSA_ENOR"};function _onEveryPage(){_updateConfig();_defineCookieDomain();_defineAgencyCDsValues()}_onEveryPage();
function _defineCookieDomain(){/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/.test(oCONFIG.SUBDOMAIN_BASED.toString())?(oCONFIG.COOKIE_DOMAIN=oCONFIG.SUBDOMAIN_BASED.toLowerCase().replace("www.",""),oCONFIG.SUBDOMAIN_BASED=!0):!1===oCONFIG.SUBDOMAIN_BASED?(oCONFIG.COOKIE_DOMAIN=document.location.hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1],oCONFIG.SUBDOMAIN_BASED=!0):(oCONFIG.COOKIE_DOMAIN=location.hostname.toLowerCase().replace("www.",
""),oCONFIG.SUBDOMAIN_BASED=!1)}function _defineAgencyCDsValues(){oCONFIG.AGENCY=oCONFIG.AGENCY||"unspecified:"+oCONFIG.COOKIE_DOMAIN;oCONFIG.SUB_AGENCY=oCONFIG.SUB_AGENCY||""+oCONFIG.COOKIE_DOMAIN;oCONFIG.SUB_AGENCY=oCONFIG.AGENCY+" - "+oCONFIG.SUB_AGENCY;oCONFIG.SITE_TOPIC=oCONFIG.SITE_TOPIC||"unspecified:"+oCONFIG.COOKIE_DOMAIN;oCONFIG.SITE_PLATFORM=oCONFIG.SITE_PLATFORM||"unspecified:"+oCONFIG.COOKIE_DOMAIN}
function _cleanBooleanParam(a){switch(a.toString().toLowerCase()){case "true":case "on":case "yes":case "1":return!0;case "false":case "off":case "no":case "0":return!1;default:return a}}function _isValidUANum(a){a=a.toLowerCase();a=a.match(/^ua\-([0-9]+)\-[0-9]+$/);return null!=a&&0<a.length}
function _cleanDimensionValue(a){try{pattern=/^dimension([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;if(pattern.test(a))return a;if(null!==a.match(/\d+$/g)){var b="dimension"+a.match(/\d+$/g)[0];if(pattern.test(b))return b}return""}catch(c){}}
function _updateConfig(){if("undefined"!==typeof _fedParmsGTM){var a=_fedParmsGTM.toLowerCase().split("&");oCONFIG.SCRIPT_SOURCE="GTM"}else{var b=document.getElementById("_fed_an_ua_tag");_fullParams=b.src.match(/^([^\?]*)(.*)$/i)[2].replace("?","");a=_fullParams.split("&");oCONFIG.SCRIPT_SOURCE=b.src.split("?")[0]}for(b=0;b<a.length;b++)switch(_keyValuePair=decodeURIComponent(a[b].toLowerCase()),_key=_keyValuePair.split("=")[0],_value=_keyValuePair.split("=")[1],_key){case "pua":for(var c=_value.split(","),
d=0;d<c.length;d++)_isValidUANum(c[d])&&oCONFIG.GWT_UAID.push(c[d].toUpperCase());break;case "agency":oCONFIG.AGENCY=_value.toUpperCase();break;case "subagency":oCONFIG.SUB_AGENCY=_value.toUpperCase();break;case "sitetopic":oCONFIG.SITE_TOPIC=_value;break;case "siteplatform":oCONFIG.SITE_PLATFORM=_value;break;case "parallelcd":_value=_cleanBooleanParam(_value);if(!0===_value||!1===_value)oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS=_value;break;case "palagencydim":_value=_cleanDimensionValue(_value);""!==
_value&&(oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT=_value);break;case "palsubagencydim":_value=_cleanDimensionValue(_value);""!==_value&&(oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT=_value);break;case "palversiondim":_value=_cleanDimensionValue(_value);""!==_value&&(oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT=_value);break;case "paltopicdim":_value=_cleanDimensionValue(_value);""!==_value&&(oCONFIG.PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT=_value);break;case "palplatformdim":_value=
_cleanDimensionValue(_value);""!==_value&&(oCONFIG.PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT=_value);break;case "palscriptsrcdim":_value=_cleanDimensionValue(_value);""!==_value&&(oCONFIG.PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT=_value);break;case "palurlprotocoldim":_value=_cleanDimensionValue(_value);""!==_value&&(oCONFIG.PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT=_value);break;case "palinteractiontypedim":_value=_cleanDimensionValue(_value);""!==_value&&(oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT=
_value);break;case "cto":oCONFIG.COOKIE_TIMEOUT=2628E3*parseInt(_value);break;case "sp":oCONFIG.SEARCH_PARAMS+="|"+_value.replace(/,/g,"|");break;case "exts":oCONFIG.EXTS+="|"+_value.replace(/,/g,"|");break;case "yt":_value=_cleanBooleanParam(_value);if(!0===_value||!1===_value)oCONFIG.YOUTUBE=_value;break;case "autotracker":_value=_cleanBooleanParam(_value);if(!0===_value||!1===_value)oCONFIG.AUTOTRACKER=_value;break;case "sdor":oCONFIG.SUBDOMAIN_BASED=_cleanBooleanParam(_value);break;case "dclink":_value=
_cleanBooleanParam(_value);if(!0===_value||!1===_value)oCONFIG.DOUBLECLICK_LINK=_value;break;case "enhlink":_value=_cleanBooleanParam(_value);if(!0===_value||!1===_value)oCONFIG.ENHANCED_LINK=_value;break;case "optout":_value=_cleanBooleanParam(_value);if(!0===_value||!1===_value)oCONFIG.OPTOUT_PAGE=_value;break;case "transport":if("xhr"===_value||"beacon"===_value||"image"===_value)oCONFIG.TRANSPORT=_value}}
function _sendCustomDimensions(a,b){if(0<a.length&&""!==b&&void 0!==b){tObjectCheck!==window.GoogleAnalyticsObject&&createTracker(!1);for(var c=0;c<oCONFIG.GWT_UAID.length;c++)if("dimension0"!==a[c])try{window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME+c+".set",a[c],b)}catch(d){}}}
function _sendCustomMetrics(a,b){if(0<a.length&&""!==b&&void 0!==b){tObjectCheck!=window.GoogleAnalyticsObject&&createTracker(!1);for(var c=0;c<oCONFIG.GWT_UAID.length;c++)if("metric0"!==a[c])try{window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME+c+".set",a[c],b)}catch(d){}}}
function _sendEvent(a,b,c,d,f,e){if(""!==a&&void 0!==a&&""!==b&&void 0!==b){var h=oCONFIG.MAIN_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT;tObjectCheck!==window.GoogleAnalyticsObject&&createTracker(!1);for(var g=0;g<oCONFIG.GWT_UAID.length;g++)try{0<g&&(!0===oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS?h=oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT:e=void 0),window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME+g+".set",h,e),window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME+g+".send","event",
a,b,void 0!==c?c:"",""===d&&isNaN(d)&&void 0===d?0:parseInt(d),{nonInteraction:f})}catch(k){}}}function _sendPageview(a,b){if(""!==a&&void 0!==a){tObjectCheck!==window.GoogleAnalyticsObject&&createTracker(!1);for(var c=0;c<oCONFIG.GWT_UAID.length;c++)try{window[window.GoogleAnalyticsObject](oCONFIG.PUA_NAME+c+".send","pageview",{page:a,title:""!==b||void 0!==b?b:document.title})}catch(d){}}}
function gas(a,b,c,d,f,e,h){if(void 0!==a&&""!==a&&void 0!==b&&""!==b&&void 0!==c&&""!==c)if("pageview"===b.toLowerCase())try{_sendPageview(c,void 0===d||""===d?document.title:d)}catch(n){}else if("event"===b.toLowerCase()&&void 0!==d&&""!==d)try{var g=!1;void 0!==h&&"boolean"===typeof _cleanBooleanParam(h)&&(g=_cleanBooleanParam(h));_sendEvent(c,d,void 0===f?"":f,void 0===e||""===e||isNaN(e)?0:parseInt(e),g)}catch(n){}else if(-1!=b.toLowerCase().indexOf("dimension"))try{g=b.toLowerCase().split(",");
var k=[];dimsPattern=/^dimension([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;for(var l=0;l<g.length;l++)if(dimsPattern.test(g[l]))k.push(g[l]);else{var m="dimension"+g[l].match(/\d+$/g)[0];(dimsPattern.test(m)||"dimension0"===m)&&k.push(m)}0<k.length&&_sendCustomDimensions(k,void 0===c?"":c)}catch(n){}else if(-1!=b.toLowerCase().indexOf("metric"))try{k=b.toLowerCase().split(",");g=[];mtrcsPattern=/^metric([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;for(m=0;m<k.length;m++)mtrcsPattern.test(k[m])?g.push(k[m]):
(l="metric"+k[m].match(/\d+$/g)[0],(mtrcsPattern.test(l)||"metric0"===l)&&g.push(l));0<g.length&&_sendCustomMetrics(g,void 0===c||""===c||isNaN(c)?1:parseFloat(c))}catch(n){}}function _URIHandler(a){var b=new RegExp("([?&])("+oCONFIG.SEARCH_PARAMS+")(=[^&]*)","i");b.test(a)&&(a=a.replace(b,"$1query$3"));return a}
function _isExcludedReferrer(){if(""!==document.referrer){var a=document.referrer.replace(/https?:\/\//,"").split("/")[0].replace("www.","");return oCONFIG.SUBDOMAIN_BASED?-1!=a.indexOf(oCONFIG.COOKIE_DOMAIN)?!0:!1:a===oCONFIG.COOKIE_DOMAIN?!0:!1}}var tObjectCheck;
"undefined"===typeof window.GoogleAnalyticsObject&&function(){}