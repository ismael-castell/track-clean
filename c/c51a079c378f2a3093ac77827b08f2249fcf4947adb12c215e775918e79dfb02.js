import {Partner} from './partner.js';
import {Utils} from './utils.js';

/**
 * Core
 */
class Core {

    constructor () {
        window.ga_data = window.ga_data || {};
        window.ga_data.utils = new Utils();

        Partner.init();

        // Global, throttled, window scroll/resize broadcast
        window.addEventListener('scroll', ga_data.utils.throttle(() => window.ga_data.utils.broadcastEvent('ga-scroll'), 60), {passive: true});
        window.addEventListener('resize', ga_data.utils.throttle(, 60), {passive: true});

        // Global feedback request listener
        window.addEventListener('ga-feedback-request', event => {
            Polymer.Base.importHref(`${ga_data.site.hosts.clientStatic}${ga_data.server.clientRoot}elements/partner/partner-feedback/partner-feedback.html`, () => {
                if (!this._feedbackEl) {
                    this._feedbackEl = document.createElement('partner-feedback');
                }
                this._feedbackEl.redirectToFeedbackPage(event);
            }, null, true);
        });

        ga_data.utils.isEUuserRestrictedAccess().then(tcData => {
            if (tcData.gdprApplies) {
                window.__tcfapi('addEventListener', 2, (tcData, success) => {
                    if(success && tcData && tcData.eventStatus === 'useractioncomplete') {
                        ga_data.adPrivacyChoice = ga_data.utils.getAdPrivacyChoice(tcData);
                        window.ga_data.utils.broadcastEvent('consent-update', tcData);
                    }
                });
            }
        });

        /**
         * This is a hack to allow iPhones to blur out of input fields on hack. It is a common safari issue that isn't limited to polymer.
         * Link to Issue: https://github.com/Polymer/paper-input/issues/47
         */
        if (window.ga_data.utils.UA.IS_IPHONE || window.ga_data.utils.UA.IS_IPAD) {
            document.body.addEventListener('touchstart', () => document.activeElement.blur());
        }
        /**
         * End iPhone Hack
         */
    }

    /**
     * Finds all DOM elements marked with a module paths and loads the related import.
     * 
     * This function looks for elements with a "util-module-path" attribute.
     * If the module is in a <util-module-slot low-priority>, the module will not be imported until after page scroll
     * Else, the module will be imported immediately
     * 
     * TODO-FEATURE: Make root node overridable to allow loading from a shadow root
     * TODO-FEATURE: Make trigger attributes configurable
     */
    loadDynamicModules () {
        // List of modules that should never be loaded from anywhere
        let moduleBlacklist = [
            'partner-pong',
            'nav-global',
            'util-analytics',
            'util-module-slot'
        ];
        const matches = Array.prototype.slice.call(document.querySelectorAll('[util-module-path]'));
        const lazyModules = Array.prototype.slice.call(document.querySelectorAll('div.module-slot[low-priority] [util-module-path]'));

        matches.reduce((union, i) => {
            // If not a lazy module 
            if (lazyModules.indexOf(i) == -1) {
                union.push(i);
            }
            return union;
        }, []).forEach(match => {
            if (moduleBlacklist.indexOf(match.nodeName.toLowerCase()) !== -1) return;
            if (!(window.customElements.get(match.localName))) {
                this.importModuleForNode(match);
            }
        });

        const lazyLoader = () => {
            window.removeEventListener('ga-scroll', lazyLoader);
            lazyModules.forEach(match => {
                if (!(window.customElements.get(match.localName))) {
                    this.importModuleForNode(match);
                }
            });
        };
        window.addEventListener('ga-scroll', lazyLoader, {passive: true});
    }

    /**
     * Imports module associated with a DOM element
     * 
     * Takes the `util-module-path` from and element and creates a dynamic import of the related module.
     * Module path is based on the current environment's configured client root.
     * Module path assumes the module is located in a folder named to match the element, in an html file named to match the element.
     * If util-module-async is set on the element, the import will be requested async
     * On load, the element will set `data-module-loaded` with a bool pass/fail
     * 
     * @param {HTMLElement} node
     * @param {function} loadCallback: callback after node is successfully imported
     */
    importModuleForNode (node, loadCallback) {
        const nodePath = node.getAttribute('util-module-path') || 'elements';
        const loadAsync = node.hasAttribute('util-module-async');
        const normalized = node.nodeName.toLowerCase();

        // Remove attr to prevent additional imports
        node.removeAttribute('util-module-path');

        // Import
        this.importHref(`${ga_data.site.hosts.clientStatic}${ga_data.server.clientRoot}${nodePath}/${normalized}/${normalized}.html`, () => {
            node.dataset.moduleLoaded = true;
            if (node.dataset.modulePlaceholderId) {
                node.hidden = false;
                node.classList.add('module-loaded');
            }
            if (loadCallback) loadCallback();
        }, , loadAsync);
    }

    /**
     * Import a module. Creates a link tag to import a module at given path.
     * 
     * @param {string} src Full path to import
     * @param {function} loadCallback Called on success
     * @param {function} errCallback Called on fail
     * @param {boolean} loadAsync if import should happen async
     */
    importHref (src, loadCallback, errCallback, loadAsync) {
        if (!document.querySelector(`link[href="${src}"]`)) {
            let link = document.createElement('link');
            link.rel = 'import';
            link.href = src;
            link.async = loadAsync;
            link.addEventListener('load', loadCallback);
            link.addEventListener('error', errCallback);
            document.head.appendChild(link);
        }
    }

    /**
     * Clears cached user related objects and localStorage items.
     * This makes is possible to refetch (get) the user if they log in using an inline/embed method.
     */
    removeUser () {
        this._user = null;
        this._userPromise = null;

        window.localStorage.removeItem('gupUserInfo', '{}');
        window.localStorage.removeItem('user_insights', '{}');
    }

    /**
     * For analytics.
     * AdRev duplicates this method due to async issues.
     * When making changes, please also update the `_inMobileEnvironment` functions in both
     * gallium/core/partner.js and gallium/behaviors/partner-utils.html as well.
     */
    get isMobile 

    /**
     * Flag for determining if the CAM meter was incremented.
     *
     * Stores a copy of the firefly cookie in localStorage. If values are different, flag as true.
     */
    get isCAMMeterIncrement () {
        if (this._isCAMMeterIncrement === undefined) {
            const cookieKey = 'firefly_akamai_open';
            const cookie = ga_data.utils.readCookie(cookieKey);
            const localVal = window.localStorage.getItem(cookieKey);
            this._isCAMMeterIncrement = !!cookie && cookie !== localVal;

            if (this._isCAMMeterIncrement) {
                try {
                    window.localStorage.setItem(cookieKey, cookie);
                } catch (e) {
                    if (window.newrelic) window.newrelic.noticeError(e);
                }
            }
        }

        return this._isCAMMeterIncrement;
    }

    /**
     * Current user
     * 
     * returns Promise for a GUP User object for the current user
     */
    get user () {
        if (!this._userPromise) {
            this._userPromise = new Promise((resolve, reject) => {
                if (this._user) {
                    resolve(this._user);
                }

                let gupasURLTemplate = `https://user.${ga_data.site.baseName}${ga_data.site.topLevelDomain}/${ga_data.site.uaid}-GUP/user/`;
                fetch(gupasURLTemplate, {
                    credentials: 'include'
                }).then(response => {
                    return response.json().then(user => {
                        if (user && user.meta && user.meta.status === 200) {
                            window.ga_data.utils.checkIfAdFreeReloadRequired(user, this.userLocalData);
                            try {
                                window.localStorage.setItem('gupUserInfo', JSON.stringify(user || {}));
                                window.localStorage.setItem('user_insights', JSON.stringify(user.response.insights || {}));
                            } catch (e) {
                                if (window.newrelic) window.newrelic.noticeError(e);
                            }
                            this._user = user;
                            resolve(user);
                        } else {
                            reject('user not found');
                        }
                    });
                }).catch();
            });
        }
        return this._userPromise;
    }

    /**
     * Retrieves the current GUP Insights object from local storage.
     * Triggers the user promise in case it hasn't already been updated.
     */
    get userInsights () {
        let insights = {};
        this.user;

        try {
            insights = JSON.parse(window.localStorage.getItem('user_insights'));
        } catch (e) {
            if (window.newrelic) window.newrelic.noticeError(e);
        }

        return insights;
    }

    /**
     * Retrieves the current GUP user object from local storage.
     * Triggers the user promise in case it hasn't already been updated.
     */
    get userLocalData () {
        let gupUserInfo = {};
        this.user;

        try {
            gupUserInfo = JSON.parse(window.localStorage.getItem('gupUserInfo')) || {};
        } catch (e) {
            if (window.newrelic) window.newrelic.noticeError(e);
        }

        return gupUserInfo;
    }

    /**
     * Returns the current user cam experience id, from `gnt_eid` or 'cam_eid' cookie, defaulting to 'control' if it doesn't exist
     * @returns {*|string}
     */
    get userCamExperienceId () {
        return ga_data.utils.readCookie('gnt_eid') || ga_data.utils.readCookie('cam_eid') || 'control';
    }
}

window.Gallium = new Core();
// Initial import of all dynamic modules
requestAnimationFrame(