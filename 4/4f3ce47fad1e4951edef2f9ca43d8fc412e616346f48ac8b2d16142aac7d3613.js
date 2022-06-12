(function(){"use strict";var CmpReaderInfo={_version:"0.0.1",version:function(){return this._version;}};const cmpGdprCookieName="euconsent-v2";const cmpCcpaCookieName="usprivacy";const waitTimeoutMs=6000;const vsOptOutGdprCookieName="vsOptOutGdpr";const vsOptOutCcpaCookieName="vsOptOutCcpa";const cookieExpiryDay=7;function(){}
async function waitForFn(stringFnToWait,timeoutMs,callbackFnToExec,callbackParam){const incrementMs=100;let durationMs=0;let isLoaded=typeof window[stringFnToWait]==="function";while(!isLoaded&&durationMs<timeoutMs){await sleep(incrementMs);durationMs+=incrementMs;isLoaded=typeof window[stringFnToWait]==="function";}
if(isLoaded){callbackFnToExec(callbackParam);}}
function(){}
function(){}
function(){}