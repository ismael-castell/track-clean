export class Utils {
    constructor () {
        this.Deferred = class {
            constructor (timeout) {
                this.isResolved = false;
                this.timeout = timeout ? timeout : null;
                this.promise = new Promise((resolve, reject) => {
                    this.resolve = resolve;
                    this.reject = reject;
                    if (timeout) {
                        setTimeout(() => {
                            resolve();
                        }, timeout);
                    }
                }).then();
            }
        };
        this.UA = {
            IS_ANDROID: /Android/.test(navigator.userAgent) && !window.MSStream,
            IS_IPHONE: /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
            IS_IPAD: /iPad/.test(navigator.userAgent) && !window.MSStream,
            IS_IOSMOBILE: /iPhone|iPod|iPad/.test(navigator.userAgent) && !window.MSStream
        };
        this.UA.IS_MOBILE = this.UA.IS_ANDROID || this.UA.IS_IOSMOBILE;
    }
    checkVisible (elm, threshold, viewHeight) {
        threshold = threshold || 0;
        viewHeight = viewHeight || Math.max(document.documentElement.clientHeight, window.innerHeight);
        let rect = elm.getBoundingClientRect(), above = rect.bottom - threshold < 0, below = rect.top - viewHeight + threshold >= 0;
        return (above) ? 'above' : (below) ? 'below' : 'visible';
    }
    cstToObj (cst) {
        let list = cst.split('/');
        return {
            section: list[0] || '',
            subsection: list[1] || '',
            topic: list[2] || ''
        };
    }
    broadcastEvent (eventName, params) {
        let parameters = {bubbles: true, cancelable: false, detail: params};
        if (typeof window['CustomEvent'] === 'function') {
            window.dispatchEvent(new CustomEvent(eventName, parameters));
        } else {
            let docEvt = document.createEvent('CustomEvent');
            docEvt.initCustomEvent(eventName, parameters.bubbles, parameters.cancelable, parameters.detail);
            window.dispatchEvent(docEvt);
        }
    }
    findAncestor 
    loadScript (url, id) {
        // prevent duplicate script loads
        if (document.getElementById(id)) {
            return Promise.resolve(url);
        }
        return new Promise((resolve, reject) => {
            let element = document.createElement('script');
            element.id = id;
            element.async = true;
            element.src = url;
            // Important success and error for the promise
            element.onload = function () {
                resolve(url);
            };
            element.onerror = function () {
                reject(url);
            };
            document.body.appendChild(element);
        });
    }
    importAndCreateEl (relativePath) {
        return new Promise((resolve, reject) => {
            Polymer.Base.importHref(`${window.ga_data.site.hosts.clientStatic}${window.ga_data.server.clientRoot}${relativePath}`, () => {
                try {
                    const parts = relativePath.toLowerCase().split('/');
                    const name = parts[parts.length - 1].replace('.html', '');
                    const element = window.document.createElement(name);

                    resolve(element);
                } catch (err) {
                    if (window.newrelic) window.newrelic.noticeError(err);
                    reject(err);
                }
            }, err => {
                if (window.newrelic) window.newrelic.noticeError(err);
                reject(err);
            });
        });
    }
    getCoords (el) {
        let box = el.getBoundingClientRect(), docEl = document.documentElement, top = box.top + window.pageYOffset - (docEl.clientTop || 0), left = box.left + window.pageXOffset - (docEl.clientLeft || 0);
        return {top: Math.round(top), left: Math.round(left)};
    }
    getNested (obj, ...path) {
        if (obj) {
            return path.reduce(function (obj, arg) {
                return obj && obj[arg];
            }, obj);
        }
        return undefined;
    }
    getUrlParamValue (key) {
        let value = decodeURI((new RegExp(key + '=' + '(.+?)(&|$)').exec(window.location.search) || ['', 'false'])[1]);
        if (value === 'false') {
            return false;
        } else if (value === 'true') {
            return true;
        }
        return value;
    }
    readCookie 
    writeCookie (name, value, days, secure, sameSite) {
        let date, expires, options ='';
        if (!days) {
            days = 365 * 20;
        }
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();

        if (secure) {
            options = options.concat('; secure');
        }

        if (sameSite) {
            options = options.concat('; samesite=' + sameSite);
        }

        document.cookie = name + '=' + value + expires + '; path=/' + options;
    }
    removeCookie (name) {
        this.writeCookie(name, '', -1);
    }
    /**
     * Simple json retriever
     * @param url - url to fetch JSON from
     * @returns {Promise<T>}
     */
    getJSON (url) {
        if (window.fetch) {
            return window.fetch(url).then(response => {
                return response.json().then(json => {
                    return response.ok ? json : Promise.reject(json);
                });
            });
        } else {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest(), errorOut = function () {
                    reject(xhr.statusText);
                };
                xhr.open('GET', url);
                xhr.onload = function () {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        try {
                            resolve(JSON.parse(xhr.responseText));
                        } catch (err) {
                            errorOut();
                        }
                    } else {
                        errorOut();
                    }
                };
                xhr.onerror = function () {
                    errorOut();
                };
                xhr.send(null);
            });
        }
    }

    /**
     * Simple http request retriever
     * @param url - url to fetch from
     * @returns {Promise<T>}
     */
    fetch (url, withCredentials) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest(),
                errorOut = function () {
                    reject(xhr.statusText);
                };
            xhr.withCredentials = !!withCredentials;
            xhr.open('GET', url);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        resolve(xhr.responseText);
                    } catch (err) {
                        errorOut();
                    }
                } else {
                    errorOut();
                }
            };
            xhr.onerror = function () {
                errorOut();
            };
            xhr.send(null);
        });
    }

    throttle (func, wait, options) {
        let context, args, result, later,
            timeout = null,
            previous = 0;

        if (!options) options = {};

        later = function(){};

        return function () {
            let remaining,
                now = Date.now();

            if (!previous && options.leading === false) previous = now;
            remaining = wait - (now - previous);
            context = this; //eslint-disable-line no-invalid-this
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
        return result;
        };
    }

    /**
     * Whether the current user is logged in with Scroll.com
     * https://developer.scroll.com/
     */
    scrollUserDetected () {
        if (this._scrollUserDetected === undefined) {
            this._scrollUserDetected = document.cookie.indexOf('scroll0=') > -1;
        }
        return this._scrollUserDetected;
    }

    /**
     * Checks which type of ads we can serve
     * https://support.google.com/admanager/answer/9805023#consent-policies
     */
    getAdPrivacyChoice (tcData) {
        const purpose = tcData.purpose || {};
        const consents = purpose.consents;
        const legitimateInterests = purpose.legitimateInterests;
        let eligiblity = 'none';

        if (consents && consents['1'] && legitimateInterests && legitimateInterests['2'] && legitimateInterests['7'] && legitimateInterests['9'] && legitimateInterests['10']) {
            eligiblity = 'non-personalized';

            if (consents['3'] && consents['4']) {
                eligiblity = 'personalized';
            }
        }

        return eligiblity;
    }

    getPrivacyChoices () {
        let choices = ga_data.privacyChoices;
        if (!choices && typeof window.OnetrustActiveGroups === 'string') {
            choices = {
                necessary: false,
                performance: false,
                functional: false,
                targeting: false,
                social: false
            };
            window.OnetrustActiveGroups.split(',').filter(Boolean).forEach(i => {
                switch (i) {
                    case '1':
                        choices.necessary = true;
                        break;
                    case '2':
                        choices.performance = true;
                        break;
                    case '3':
                        choices.functional = true;
                        break;
                    case '4':
                        choices.targeting = true;
                        break;
                    case '5':
                        choices.social = true;
                        break;
                }
            });
            ga_data.privacyChoices = choices;
        }
        return choices || {};
    }

    /**
     * Whether the current GDPR currently applies
     * Returns if GDPR applies, and the consent string (if available)
     */
    isEUuserRestrictedAccess () {
        return new Promise((resolve, reject) => {
            const loc = (this.getNested(window, 'otStubData', 'userLocation', 'country') || this.getNested(window, 'otLocation', 'country') || '').toLowerCase();
            const rule = this.getNested(window, 'otStubData', 'regionRule', 'Name') || '';
            const t = true;
            const gdprCountries = {'de': t, 'no': t, 'be': t, 'fi': t, 'pt': t, 'bg': t, 'dk': t, 'lt': t, 'lu': t, 'lv': t, 'hr': t, 'fr': t, 'hu': t, 'se': t, 'mc': t, 'si': t, 'sk': t, 'mf': t, 'sm': t, 'gb': t, 'yt': t, 'ie': t, 'gf': t, 'ee': t, 'mq': t, 'mt': t, 'gp': t, 'is': t, 'it': t, 'gr': t, 'es': t, 're': t, 'at': t, 'cy': t, 'cz': t, 'ax': t, 'pl': t, 'li': t, 'ro': t, 'nl': t};
            const gdprApplies = rule.indexOf('GDPR') > -1 || gdprCountries[loc] === t;
            const tcDataStub = {
                gdprApplies: gdprApplies,
                tcString: ''
            };

            if (!gdprApplies) {
                return resolve(tcDataStub);
            }

            if(!window.__tcfapi) {
                // load stub for tcfapi
                //eslint-disable-next-line
                var OneTrustTCFStub=function(e){"use strict";var t=function(){var o=this;this.LOCATOR_NAME="__tcfapiLocator",this.win=window,this.init=function(){for(;o.win;){try{if(o.win.frames[o.LOCATOR_NAME]){o.cmpFrame=o.win;break}}catch(e){}if(o.win===window.top)break;o.win=o.win.parent}o.cmpFrame||(o.addFrame(),o.win.__tcfapi=o.executeTcfApi,o.win.receiveOTMessage=o.receiveIabMessage,(o.win.attachEvent||o.win.addEventListener)("message",o.win.receiveOTMessage,!1))},this.addFrame=function(){var e=o.win.document,t=!!o.win.frames[o.LOCATOR_NAME];if(!t)if(e.body){var i=e.createElement("iframe");i.style.cssText="display:none",i.name=o.LOCATOR_NAME,i.setAttribute("title","TCF Locator"),e.body.appendChild(i)}else setTimeout(o.addFrame,5);return!t},this.receiveIabMessage=function(a){var n="string"==typeof a.data,e={};try{e=n?JSON.parse(a.data):a.data}catch(e){}if(e&&e.__tcfapiCall){var t=e.__tcfapiCall,r=t.callId,i=t.command,s=t.parameter,c=t.version;o.executeTcfApi(i,s,function(e,t){var i={__tcfapiReturn:{returnValue:e,success:t,callId:r}};a&&a.source&&a.source.postMessage&&a.source.postMessage(n?JSON.stringify(i):i,"*")},c)}},this.executeTcfApi=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(!e.length)return o.win.__tcfapi.a||[];if("setGdprApplies"===e[0])3<e.length&&2===parseInt(e[1],10)&&"boolean"==typeof e[3]&&(o.gdprApplies=e[3],"function"==typeof e[2]&&e[2]("set",!0));else{var i=e[0],a=e[1],n=e[2],r=e[3];"function"==typeof n&&i&&("ping"===i?o.getPingReq(n,o.gdprApplies):o.addToQ(i,a,n,r))}},this.addToQ=function(e,t,i,a){var n=o.win.__tcfapi;n.a=n.a||[],n.a.push([e,t,i,a])},this.getPingReq=function(e,t){void 0===t&&(t=void 0),e({gdprApplies:t,cmpLoaded:!1,cmpStatus:"stub",apiVersion:"2.0"})},this.init()},i=new t;return e.TCF=t,e.tcfStub=i,e}({});
            }

            // Ping to see if OneTrust is loaded, and either fetch tcData or listen for when it's ready
            window.__tcfapi('ping', 2, pingReturn => {
                if (pingReturn.cmpLoaded === true) {
                    // CMP is loaded we can get TCData
                    window.__tcfapi('getTCData', 2, (tcData, success) => {
                        if(success && tcData) {
                            resolve(tcData);
                        } else {
                            // No success, we will pass back our stubbed version
                            resolve(tcDataStub);
                        }
                    });
                } else {
                    window.__tcfapi('addEventListener', 2, (tcData, success) => {
                        if(success && tcData && tcData.eventStatus === 'tcloaded') {
                            ga_data.adPrivacyChoice = this.getAdPrivacyChoice(tcData);
                            resolve(tcData);

                            // remove listener to not get called more than once
                            window.__tcfapi('removeEventListener', 2, success => {
                                if(!success) {
                                    console.info('Failed to remove tcloaded event listener'); // eslint-disable-line no-console
                                }
                            }, tcData.listenerId);
                        } else {
                            // No success, we will pass back our stubbed version
                            resolve(tcDataStub);
                        }
                    });
                }
            });

            setTimeout(() => {
                // Timeout reached
                resolve(tcDataStub);
            }, 5000);
        });
    }

    /**
     * Whether "Ad Free" handling should be applied to the page.
     */
    isAdFreeExperience () {
        return (
            // Scroll.com users
            (this.getNested(window, 'ga_data', 'site', 'ads', 'scroll', 'enabled') &&
            this.scrollUserDetected()) || (ga_data.intents.indexOf('variant-group:streamlined') > -1) || this._isAdFreeSubscription()
        );
    }

    _isAdFreeSubscription (user = {}) {
        if (!Object.keys(user).length) {
            try {
                user = JSON.parse(window.localStorage.getItem('gupUserInfo')) || {};
            } catch(e) {
                user = {};
                if (window.newrelic) window.newrelic.noticeError(e);
            }
        }
        if (user.meta && user.meta.status === 200 && user.meta.isAuthenticatedInCurrentContext) {
            const adFreeLicenses = this.getNested(window, 'ga_data', 'site', 'consumerMarketing', 'ad_free_entitlements');
            const currentLicense = this.getNested(user, 'response', 'user', 'userLicenseType');

            if (adFreeLicenses.indexOf(currentLicense) > -1) {
                return true;
            }
        }
        return false;
    }

    checkIfAdFreeReloadRequired (user, localUser) {
        if (this._isAdFreeSubscription(user) && !this._isAdFreeSubscription(localUser)) {
            window.ga_data.flags = window.ga_data.flags || {};
            window.ga_data.flags.reloadPage = true;
        }
    }

    inIframe 