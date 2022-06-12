/**
 * Partner: Namespace used to initialize advertising
 * Sets up:
 * - Googletag with global settings
 * - Ad Logger
 * - Prebid.js
 * - IAS
 * @example
 * Partner.init();
 */
export let Partner = {

    init () {
        // Abort if ads should not be shown
        if (ga_data.utils.getNested(ga_data, 'route', 'noAdvertising') || ga_data.utils.getUrlParamValue('no_ads') || ga_data.utils.isAdFreeExperience()) return;

        window.ads = window.ads || {};

        // GDPR check, will halt everything until we are certain
        ga_data.utils.isEUuserRestrictedAccess().then(tcData => this.setupFramework(tcData));
    },

    setupFramework (tcData) {
        const getNested = ga_data.utils.getNested;
        const gdprApplies = this.gdprApplies = tcData.gdprApplies;
        const tcString = this.tcString = tcData.tcString;
        const choices = this.choices = ga_data.utils.getPrivacyChoices();
        this.consentTargetBarrier = new ga_data.utils.Deferred();

        if (gdprApplies) {
            if (this.needConsent === undefined) {
                window.addEventListener('consent-update', data => this.onConsentUpdate(data), {passive: true});
            }

            if (tcString && (choices.functional || ga_data.adPrivacyChoice === 'personalized' || ga_data.adPrivacyChoice === 'non-personalized')) {
                this.needConsent = false;
                if(choices.targeting || ga_data.adPrivacyChoice === 'non-personalized') {
                    this.consentTargetBarrier.resolve();
                }
            } else {
                this.needConsent = true;
                // can't go any further, GDPR applies and we don't have the right consent
                return;
            }
        } else {
            this.consentTargetBarrier.resolve();
        }

        // Get the U.S. Privacy String
        if(!gdprApplies) {
            if (typeof window.__uspapi === 'function') {
                window.__uspapi('getUSPData', 1, res => {
                    var uspString = res.uspString;
                    this.uspString = uspString;
                    if (uspString === '1YYY') {
                        this._setPageTargeting({'privacy': 'ccpa-out'});
                    }
                });
            } else {
                this.uspString = '1---';
            }
        }

        // Barriers to making an ad call
        this.adCallPromises = [];

        // Setup logging
        this.adLoggerEnabled = !!ga_data.utils.getUrlParamValue('usat_console');
        this.adLogger('Partner Framework Initializing');
        this.platform = (this._inMobileEnvironment()) ? 'mobile' : 'desktop';

        // Set Bucket for experiments
        this.setupExperiment();
        this.setABTestVariant();

        // Set Global Targeting
        this.setGlobalTargeting();
        this.setGlobalExclusionTargeting();

        // Setup Brandlock and our tagless handler
        window.ads.tagless = {
            push: slot => this.fireTagless(slot)
        };
        this.setupBrandLock();

        // Set up GPT
        this.adCallPromises.push(this.setupGoogletag());

        this.disableBidding = !!getNested(window, 'ga_data', 'route', 'disableBidding');

        this.consentTargetBarrier.promise.then(() => {
            // Set up google propensity cookie
            if (!this.hasUSPrivacy()) {
                this.getPtSScore();
            }

            // Set up prebid
            if(this.prebidEnabled()) {
                const index = getNested(ga_data, 'site', 'ads', 'prebid', this.platform, 'indexExchange') || {};
                if((index.enabled || ga_data.utils.getUrlParamValue('ix_debug')) && index.identityLib.scriptUrl) {
                    this.setupIxIdentityLib(index.identityLib.scriptUrl);
                }
                this.setupPrebidJS();

                // Setup Rivr Tag
                this.rivrConfig = getNested(ga_data, 'site', 'ads', 'prebid', 'rivr') || {};
                if (this.rivrConfig && (this.rivrConfig.enabled || ga_data.utils.getUrlParamValue('rivr'))){
                    this.setupRivr();
                }
            }

            // Set up APS (Amazon Bidding)
            if (this.apsEnabled()) {
                this.setupAPS();
            }

            // Set up IAS
            if (this.iasEnabled()) {
                this.setupIAS();
            }

            // Set up Index Exchange Wrapper
            if (this.inxEnabled() && !ga_data.utils.getUrlParamValue('ix_debug')) {
                this.setupINX();
            }
        });

        // Set up Confiant
        if (this.confiantEnabled()) {
            this.setupConfiant();
        }

        // Add listener for CP targeting, if we are embedded
        this._onPostMessageFn = e => this._onPostMessage(e);
        window.addEventListener('message', this._onPostMessageFn);

        window.requestAnimationFrame(() => {
            if (document.readyState === 'complete') {
                this.onPageReady();
            } else {
                // DOM isn't ready let's listen for when it's complete
                document.addEventListener('readystatechange', e => {
                    const readyState = e.target.readyState;
                    this.adLogger('readyState', readyState);
                    if (readyState === 'complete') {
                        this.onPageReady();
                    }
                });
            }
        });

        // Listen for the earliest point at which all elements present on page load have registered themselves
        this.slotReady = () => this._onSlotReady();
        window.addEventListener('slotReady', this.slotReady);
    },

    onConsentUpdate: function (data) {
        const tcData = data && data.detail || {};
        if(this.needConsent && tcData.gdprApplies !== undefined) {
            this.setupFramework(tcData);
        } else {
            this.choices = ga_data.utils.getPrivacyChoices();
            if (this.choices.targeting || ga_data.adPrivacyChoice === 'personalized') {
                this.consentTargetBarrier.resolve();
            }
        }
    },

    _onSlotReady: function () {
        let timeout = ga_data.utils.getNested(ga_data, 'site', 'ads', 'loadTimeoutInitial') || 1000;
        if (this.slotReadyTO) {
            clearTimeout(this.slotReadyTO);
            timeout = ga_data.utils.getNested(ga_data, 'site', 'ads', 'loadTimeoutSubsequent') || 300;
        }
        this.slotReadyTO = setTimeout(() => this.onPageReady(), timeout);
    },

    onPageReady: function () {
        /*
         * Multiple points of entry to this function, let's make sure:
         *     • we haven't been here before
         */
        if (this.initialized) {
            return false;
        }
        this.initialized = true;
        window.removeEventListener('slotReady', this.slotReady);
        this.adLogger('onPageReady()');

        if (this.prebidEnabled()) this.getPrebid();
        if (this.apsEnabled()) this.getAPS();
        if (this.iasEnabled()) this.getIAS();
        if (this.inxEnabled()) this.getINX();

        Promise.all(this.adCallPromises).then(() => this.firstCalls()).catch(e => {
            this.firstCalls();
            this.adLogger('A partner failed to setup, moving forward with ad calls without them.');
            if (window.newrelic) window.newrelic.noticeError(e);
        });

        const blockThroughConfig = ga_data.utils.getNested(ga_data, 'site', 'ads', 'blockThrough') || {};
        if ((blockThroughConfig.enabled || ga_data.utils.getUrlParamValue('blockThrough')) && blockThroughConfig.scriptUrl) {
            this.testAdBlocking();
        }
    },

    firstCalls: function () {
        let userguid = ga_data.utils.readCookie('gup_anonid') || '',
            kuid = localStorage && localStorage.getItem('kxgannett_user') || '';

        this._setPageTargeting({
            userguid: userguid,
            kuid: kuid
        });

        this.adLogger('First Call');
        ga_data.ads = ga_data.ads || {};
        ga_data.ads.displayQueue = ga_data.ads.displayQueue || [];
        ga_data.ads.displayQueue.forEach(el => this.displayAd(el));
        ga_data.ads.displayQueue = {
            push: el => this.displayAd(el)
        };
        ga_data.ads.refreshQueue = ga_data.ads.refreshQueue || [];
        ga_data.ads.refreshQueue.forEach(el => this.refreshAd(el));
        ga_data.ads.refreshQueue = {
            push: el => this.refreshAd(el)
        };
    },

    testAdBlocking: function (callback) {
        const testDiv = document.createElement('div'),
            container = document.body;
        testDiv.className = 'ad-slot playAds1 leaderboard-container partner'; // trc-content-sponsoredUB
        testDiv.style.cssText = 'position:absolute;top:-9999px;left:-9999px;width:2px;height:2px';
        container.appendChild(testDiv);
        const bcr = testDiv.getBoundingClientRect(),
            adBlockEnabled = bcr.top === 0 && bcr.bottom === 0 && bcr.width === 0 && bcr.height === 0;
        container.removeChild(testDiv);
        if (adBlockEnabled) {
            callback();
        }
    },

    adLogger: function (msg) {
        let elapsed,
            args = Array.prototype.slice.call(arguments, 1);

        if (this.adLoggerEnabled && window.console) {
            elapsed = (performance.now() / 1000).toFixed(3);
            msg = `AD FRAMEWORK : ${elapsed}s : ${msg}`;
            console.info(msg, ...args); // eslint-disable-line no-console
        }
    },

    setupGoogletag: function () {
        const scriptUrl = ga_data.utils.getNested(ga_data, 'site', 'ads', 'dfp', 'scriptUrl') || 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
        return ga_data.utils.loadScript(scriptUrl, 'googletagservicesScript')
            .catch(() => {
                window.ads.scriptFailed = true;
            })
            .then();
    },

    onGoogletagLoaded: function () {
        // Global settings
        window.googletag = window.googletag || {};
        window.googletag.cmd = window.googletag.cmd || [];
        window.googletag.cmd.push(() => {
            window.googletag.pubads().setTagForChildDirectedTreatment(0);
            window.googletag.pubads().enableSingleRequest();
            window.googletag.enableServices();

            let gup_anonid = ga_data.utils.readCookie('gup_anonid') || '';
            if (gup_anonid) {
                window.googletag.pubads().setPublisherProvidedId(gup_anonid);
            }
        });
    },

    setupExperiment: function () {
        let name = 'ad-control';
        const bucket = Math.random() * 1000;
        window.ga_data.ads = window.ga_data.ads || {};
        window.ga_data.ads.bucket = bucket;
        window.ga_data.ads.experiment = {
            name: name
        };

        const utils = window.ga_data.utils;
        const experiments = utils.getNested(window.ga_data, 'site', 'ads', 'experiments') || [];

        // Using some, so we can break when we found an experiment (there should only be one match)
        experiments.some(experiment => {
            if(bucket >= experiment.bucketStart && bucket < experiment.bucketEnd) {
                name = experiment.name;

                // addition work for omitting one bidder
                if(experiment.flag === 'omitOne') {
                    const bidder = this.chooseOneBidder();
                    experiment.params = bidder;
                    name = `${name}-${bidder}`;
                    experiment.name = name;
                    const disbledBidder = {};
                    disbledBidder[bidder] = {enabled: false};
                    experiment.override = {
                        prebid: {
                            desktop: disbledBidder,
                            mobile: disbledBidder
                        }
                    };
                }

                // We have an active experiment here!
                window.ga_data.ads.experiment = experiment;

                if(typeof experiment.override === 'object') {
                    // override any settings for our ad object
                    const adSettings = Object.assign({}, window.ga_data.site.ads);
                    utils.deepMerge(adSettings, experiment.override);
                    window.ga_data.site.ads = adSettings;
                }

                // break array iteration
                return true;
            }
        });

        // Set our current varient as targeting
        this.varients = [name];
    },

    chooseOneBidder: function () {
        const bidders = window.ga_data.utils.getNested(window.ga_data, 'site', 'ads', 'prebid', this.platform);
        const bidderClean = Object.keys(bidders).filter(bidder => {
            // remove keys that are not bidders
            return ['enabled', 'timeout', 'sizes', 'staq'].indexOf(bidder) === -1;
        });

        return bidderClean[Math.floor(Math.random()*bidderClean.length)];
    },

    /**
     * Get AB Test variant that may be currently running on the site, return the variant string
     * @return {String} Varient string to pass to DFP
     */
    setABTestVariant: function () {
        const intents = window.ga_data.intents;
        let value;

        if (window.ABTasty && typeof window.ABTasty.getTestsOnPage === 'function') {
            const tests = window.ABTasty.getTestsOnPage(),
                key = Object.keys(tests)[0],
                test = tests[key];
            if (test) {
                value = `[${key}]${test.name}-[${test.variationID}]${test.variationName}`;
            }
        }

        if (!value && intents.length) {
            intents.find(intent => {
                if (intent.indexOf('variant-group:') > -1) {
                    // strip 'variant-group:' and only pass the group identifier
                    return value = intent.substr(14);
                }
            });
        }

        if(value) {
            this.varients.push(value);
        }
    },

    getNavigationType: function () {
        const qp = ga_data.utils.getUrlParamValue('navigationtype');
        if (qp) {
            return qp;
        }
        if (ga_data.utils.readCookie('page_refresh')) {
            ga_data.utils.removeCookie('page_refresh');

            let hiddenAttr = '';
            if (typeof document.hidden !== 'undefined') {
                hiddenAttr = 'hidden';
            } else if (typeof document.msHidden !== 'undefined') {
                hiddenAttr = 'msHidden';
            } else if (typeof document.webkitHidden !== 'undefined') {
                hiddenAttr = 'webkitHidden';
            }
            return (!document[hiddenAttr]) ? 'pagerefresh-on' : 'pagerefresh-off';
        }
        if (document.referrer.indexOf(document.location.host) !== -1) {
            return 'internal';
        }
        if (!document.referrer) {
            return 'direct';
        }
        return 'external';
    },

    getUtm: function () {
        const getParam = ga_data.utils.getUrlParamValue,
            source = getParam('itm_source') || '',
            medium = getParam('itm_medium') || '',
            campaign = getParam('itm_campaign') || '';

        return `${source}|${medium}|${campaign}`;
    },

    getFront: function () {
        let lastFront = '';
        const pageType = ga_data.utils.getNested(ga_data, 'route', 'basePageType');
        const sectionName = ga_data.utils.getNested(ga_data, 'route', 'sectionName');

        if (pageType.includes('front') || pageType.includes('franchise page')) {
            // If we are on a front type page we'll store that information
            const taxonomy = (pageType.includes('front')) ? 'cst' : 'ssts';
            const cstParts = (ga_data.utils.getNested(ga_data, 'route', taxonomy) || '').split('/');
            let currentFront = cstParts.splice(-1).pop();
            if (currentFront === 'main') {
                currentFront = cstParts.splice(-1).pop();
            }
            ga_data.utils.writeCookie('last_front', currentFront, 0);
        } else {
            lastFront = sectionName.includes('sponsor-story') ? '' : ga_data.utils.readCookie('last_front');
            ga_data.utils.removeCookie('last_front');
        }

        return lastFront;
    },

    getFeatures: function () {
        const features = [];
        const overrides = ga_data.utils.getUrlParamValue('features');

        if (overrides) {
            return overrides.split(',');
        }

        if (window.chrome) {
            features.push('noautoplay');
        }

        const nav = navigator,
            ni = nav.connection,
            niEffectiveType = ni && ni.effectiveType;

        if (ni && ni.saveData || niEffectiveType && niEffectiveType !== '4g' || nav.deviceMemory < 4 || (!!window.MSInputMethodContext && !!document.documentMode)) {
            features.push('low');
        }

        if (document.querySelector('.big-story-container')) {
            features.push('big-story');
        }

        const chromeVer = this.getChromeVersion();
        if (chromeVer && chromeVer > 84) {
            features.push('heavyads');
        }

        return features;
    },

    getChromeVersion: function () {
        const r = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

        return r ? parseInt(r[2]) : false;
    },

    setGlobalTargeting: function () {
        const getNested = ga_data.utils.getNested,
            getParam = ga_data.utils.getUrlParamValue,
            routeConfig = ga_data.route,
            siteConfig = ga_data.site,
            cstParts = getNested(routeConfig, 'cst').split('/'),
            ssts = getNested(routeConfig, 'ssts') || '',
            sstsParts = ssts.split('/'),
            keywords = routeConfig.keywords || [],
            breakingNewsEnabled = getNested(siteConfig, 'ads', 'breakingNews', 'enabled') || false,
            navigationType = this.getNavigationType(),
            pageType = this.mapPageType(routeConfig.basePageType),
            usatl = getParam('usatl'),
            siteName = getNested(siteConfig, 'awsSiteName') || 'usat',
            categoryValue = this.getCategoryValue(routeConfig);
        let personalTargeting = {},
            globalTargeting = {
                aam_props: `${getParam('sitelabel') || 'universal'}|${getParam('platform') || (this._inMobileEnvironment()) ? 'mobileweb' : 'desktop'}|${routeConfig.basePageType}`, // Omniture props 26|4|16
                adlabel: usatl ? usatl.toString() : null,
                alerttype: breakingNewsEnabled ? routeConfig.isBreakingNews ? 'breaking' : 'none' : '',
                build: (getParam('build')) ? [getNested(siteConfig, 'build'), getParam('build')] : [getNested(siteConfig, 'build'), getNested(siteConfig, 'theme')],
                categoryvalue: categoryValue,
                contentid: routeConfig.contentId,
                cst_section: cstParts[0] || '',
                cst_subsection: cstParts[1] || '',
                cst_topic: cstParts[2] || '',
                features: this.getFeatures(),
                front: this.getFront(),
                navigationType: navigationType,
                origin: getNested(routeConfig, 'sourceOrganization', 'name') || '',
                pageType: pageType,
                privacy: this.getPrivacyValue(),
                property: siteName,
                referrer: (document.referrer.match(/https?:\/\/[:\w.-]+/) || [''])[0],
                series: routeConfig.series || '',
                sitepage: `${siteName}/${ssts}`,
                ssts_section: sstsParts[0] || '',
                ssts_subsection: sstsParts[1] || '',
                ssts_subtopic: sstsParts[3] || '',
                ssts_topic: sstsParts[2] || '',
                subsection: routeConfig.subsection || '',
                topic: keywords.join(',').toLowerCase().trim().replace(/[^a-z0-9\s-,]/g, '').replace(/[\s-]+/g, '-') || '',
                variant: this.varients
            };

        if(!this.gdprApplies || (this.gdprApplies && this.choices.targeting === true)) {
            personalTargeting = {
                ksg: (localStorage && localStorage.getItem('kxgannett_segs') || '').split(','),
                kuid: (localStorage && localStorage.getItem('kxgannett_user') || ''),
                ss: this.getSSInfo(),
                swgt: this.getPropensitySubscribe(),
                user_traits: this.getUserTraits(),
                user_gsp: this.user_gsp,
                userguid: ga_data.utils.readCookie('gup_anonid') || '',
                utm_props: this.getUtm()
            };
        }
        globalTargeting = ga_data.globalAdTargeting = Object.assign(globalTargeting, personalTargeting);
        window.ads.globalTargeting = globalTargeting;
        this._setPageTargeting(globalTargeting);
        this._markTargeting(globalTargeting);
    },

    _onPostMessage: function (e) {
        const data = e.data,
            overwrite = ['adlabel', 'navigationType', 'referrer', 'utm_props'],
            addTo = ['front', 'series', 'subsection', 'topic', 'property', 'cst_section', 'cst_subsection', 'cst_topic', 'ssts_section', 'ssts_subsection', 'ssts_topic', 'ssts_subtopic', 'alerttype', 'origin'];

        if(typeof data === 'object' && data.contentid) {
            window.removeEventListener('message', this._onPostMessageFn);
            const targeting = ga_data.globalAdTargeting;

            for (let key in targeting) {
                if (targeting.hasOwnProperty(key)) {
                    if(data[key] && (typeof data[key] === 'string' && data[key].toLowerCase() !== 'na')) {
                        if(overwrite.indexOf(key) !== -1) {
                            targeting[key] = data[key];
                        } else if (addTo.indexOf(key) !== -1) {
                            let val = targeting[key];
                            if(typeof val === 'string') {
                                targeting[key] = [val, data[key]];
                            } else if (Array.isArray(val)) {
                                targeting[key] = val.concat(data[key]);
                            }
                        }
                    }
                }
            }
            // Update page targeting with ingested values from CP page we are embedded in
            this._setPageTargeting(targeting);
        }
    },

    getPrivacyValue: function () {
        let privacy = 'NA';
        if (this.uspString === '1YYY') {
            privacy = 'ccpa-out';
        } else if (this.gdprApplies) {
            if (this.choices.targeting) {
                privacy = 'gdpr-in';
            } else {
                privacy = 'gdpr-out';
            }
        }
        return privacy;
    },

    /**
     * Retrieves different categories
     */

    getCategoryValue: function (routeConfig) {
        let categoryValue = [];

        if (routeConfig.simpleTarget && routeConfig.simpleTarget.length) {
            categoryValue = categoryValue.concat(routeConfig.simpleTarget);
        }

        if(routeConfig.simpleExclusion && routeConfig.simpleExclusion.length) {
            categoryValue = categoryValue.concat(routeConfig.simpleExclusion);
        }

        if (document.querySelector('.big-story-container')) {
            categoryValue.push('disasters');
        }

        return [...new Set(categoryValue)];
    },


    /**
     * Retrieves different user traits
     */

    getUserTraits: function () {
        const traits = [],
            camEid = ga_data.utils.readCookie('gnt_eid') || ga_data.utils.readCookie('cam_eid') || '',
            camExperienceId = ga_data.utils.getNested(this.getUserInsights(), 'cam-experience', 'id');

        //Check for caucus segment
        if(camEid) {
            traits.push(camEid);
        }

        //Check for cam experience ID
        if(camExperienceId) {
            traits.push(camExperienceId);
        }

        return [...new Set(traits)];
    },

    /**
     * Retrieves the current GUP Insights object from local storage.
     */

    getUserInsights: function () {
        let insights = {};

        try {
            insights = JSON.parse(window.localStorage && window.localStorage.getItem('user_insights'));
        } catch(e) {
            if (window.newrelic) window.newrelic.noticeError(e);
        }

        return insights;
    },

    getSSInfo: function () {
        if (!this.ss) {
            // lets check the userinfo for details
            try {
                let gupUserInfo = JSON.parse(window.localStorage && window.localStorage.getItem('gupUserInfo')) || {};
                const license = gupUserInfo.response.user.userLicenseType;

                if (license) {
                    return license.split('_').map(pair => {
                        return pair.substring(0, 3);
                    }).join('_');
                }
            } catch(e) {
                // gupUserInfo not a json string
            }

            // If there are no details in the userinfo object, let's try the last known cookie to see if they are logged out
            let ss = 'non';
            try {
                const last = JSON.parse(decodeURIComponent(ga_data.utils.readCookie('gup_lng')));
                if(last && last.auth === false) {
                    if (last['ret-sub'] === true) {
                        ss = 'sub_off';
                    } else if (last['ret-usr'] === true) {
                        ss = 'reg_off';
                    }
                }
            } catch(e) {
                // gup_lng not a json string
            }

            this.ss = ss;
        }

        return this.ss;
    },

    /**
     * Get gupUserInfo from localStorage for google propensity
     */
    getPropensitySubscribe: function () {
        let gupUserInfo = {},
            propensitySubscribe,
            result = [];
        try {
            gupUserInfo = JSON.parse(window.localStorage && window.localStorage.getItem('gupUserInfo')) || {};
            propensitySubscribe = gupUserInfo.response.propensitySubscribe;

            result = Object.keys(propensitySubscribe).find(key => propensitySubscribe[key]);
        } catch(e) {
            // gupUserInfo not a json string
        }

        return (result) ? result : '';
    },

    /**
     * Get user_gsp from cookies for google propensity
     */

    getPtSScore: function () {
        this.user_gsp = ga_data.utils.readCookie('user_gsp');
        if(!this.user_gsp && (['non', 'reg_no_sub', 'reg_off'].indexOf(this.getSSInfo()) > -1) ){
            const dfp = ga_data.utils.getNested(ga_data, 'site', 'ads', 'dfp') || {},
                accId = ga_data.utils.getUrlParamValue('usatai') || dfp.accountId,
                iu = encodeURIComponent(`/${accId}/swg/pts_${dfp.accountName}`),
                sz = encodeURIComponent('1x1'),
                ref = encodeURIComponent(document.referrer),
                gadsvalue = encodeURIComponent(ga_data.utils.readCookie('__gads')),
                c = Math.floor(Math.random()*1e15),
                tz = -(new Date().getTimezoneOffset()),
                gdprString = (this.gdprApplies) ? `&gdpr=1&gdpr_consent=${this.tcString}` : '',
                adTag = `https://securepubads.g.doubleclick.net/gampad/adx?iu=${iu}&sz=${sz}&ref=${ref}&cookie=${gadsvalue}&c=${c}&tile=1&u_tz=${tz}${gdprString}`;

            ga_data.utils.getJSON(adTag).then(res => {
                const user_gsp = res.value;
                this.user_gsp = user_gsp;
                ga_data.utils.writeCookie('user_gsp', user_gsp, 30, true, 'None');
                this._setPageTargeting({
                    user_gsp: user_gsp
                });
            }).catch(function(){});
        }
    },

    setGlobalExclusionTargeting: function (pubads) {
        let pageTags,
            getNested = ga_data.utils.getNested,
            keywords = getNested(ga_data, 'route', 'seoKeywords') || '', // Should always be a string, but have seen arrays from Presto
            taxonomy = getNested(ga_data, 'route', 'keywords') || '', // Should always be a string, but have seen arrays from Presto
            categories = getNested(ga_data.site, 'ads', 'exclusionCategories') || [];

        // Added checks to make sure keywords and taxonomy are strings
        keywords = (Array.isArray(keywords)) ? keywords.join(',') : keywords;
        taxonomy = (Array.isArray(taxonomy)) ? taxonomy.join(',') : taxonomy;
        pageTags = (`${keywords},${taxonomy}`).split(',').map(function (tag) {
            return tag.toLowerCase().trim();
        });

        categories.forEach(function (category) {
            if (!category) return;

            let tags = category.tags.join(',').toLowerCase().split(','),
                matched = tags.filter(function (tag) {
                    return pageTags.indexOf(tag) > -1;
                });

            if (matched.length) {
                window.googletag.cmd.push(() => {
                    window.googletag.pubads().setCategoryExclusion(category.name);
                });
            }
        });
    },

    _setPageTargeting: function (targeting) {
        window.googletag = window.googletag || {cmd: []};
        window.googletag.cmd.push(() => {
            let key, value,
                pubads = window.googletag.pubads();
            for (key in targeting) {
                if (targeting.hasOwnProperty(key)) {
                    value = targeting[key];
                    if (!(typeof value === 'undefined' || value === null || value === '' || (Array.isArray(value) && !value.length))) {
                        pubads.setTargeting(key, String(value));
                    }
                }
            }
        });
    },

    _markTargeting: function (targeting) {
        if (window.newrelic && targeting.pageType === 'story' && (!targeting.topic || targeting.topic === 'NA')) {
            window.newrelic.addPageAction('advertisingSuspiciousTargeting', {
                mediaType: 'display',
                build: 'universal web',
                experiment: ga_data.utils.getNested(window.ga_data, 'ads', 'experiment', 'name'),
                targeting: JSON.stringify(targeting)
            });
        }
    },

    mapPageType: function (pageType) {
        let type = pageType;
        switch (pageType) {
            case 'homefront':
                type = 'home-front';
                break;
            case 'story pages':
                type = 'story';
                break;
            case 'section front':
                type = 'section-front';
                break;
            case 'sub-section front':
                type = 'subsection-front';
                break;
            case 'vertical asset gallery':
                type = 'gallery-vertical';
                break;
            case 'video':
                type = 'video-asset';
                break;
            case 'topic front':
            case 'sub-topic front':
                type = 'topic';
                break;
        }
        return type;
    },

    apsEnabled: function () {
        const apsDebug = !!ga_data.utils.getUrlParamValue('aps_debug');
        return (apsDebug || ga_data.utils.getNested(ga_data, 'site', 'ads', 'aps', 'enabled')) && !this.disableBidding;
    },

    setupAPS: function () {
        const scriptUrl = ga_data.utils.getNested(ga_data, 'site', 'ads', 'aps', 'scriptUrl') || 'https://c.amazon-adsystem.com/aax2/apstag.js';
        this.apsLoaded = ga_data.utils.loadScript(scriptUrl, 'apsScript')
            .catch(() => {
                window.ads.scriptFailed = true;
            })
            .then(() => this.onAPSLoaded());
    },

    onAPSLoaded: function () {
        const config = {
            pubID: ga_data.utils.getNested(ga_data, 'site', 'ads', 'aps', 'pubid'),
            adServer: 'googletag',
            videoAdServer: 'DFP',
            bidTimeout: ga_data.utils.getNested(ga_data, 'site', 'ads', 'aps', 'timeout'),
            params: {
                us_privacy: this.uspString
            }
        };
        window.apstag = window.apstag || {};
        if (window.apstag.init) {
            window.apstag.init(config);
        }
    },

    getAPS: function () {
        this.apsLoaded.then(() => {
            const timeout = ga_data.utils.getNested(ga_data, 'site', 'ads', 'aps', 'timeout') || 1500;
            ga_data.ads = ga_data.ads || {};
            ga_data.ads.apsAdUnits = ga_data.ads.apsAdUnits || [];

            const els = ga_data.ads.apsAdUnits;
            this.adLogger('getAPS()', els);

            // Replace queue
            ga_data.ads.apsAdUnits = {
                push: el => this.pushToAPS([el], timeout)
            };

            // Make first request with queued units
            if(els.length) {
                this.pushToAPS(els, timeout);
            }
        });
    },

    pushToAPS: function (els, timeout) {
        this.adCallPromises.push(new Promise((resolve, reject) => {
            this.adLogger('Requesting Bids from Amazon');

            // Construct APS slots from elements
            const slots = [];
            els.forEach(el => slots.push(el.apsUnit));

            // Push bid request to apstag
            window.apstag = window.apstag || {};
            if (window.apstag.fetchBids && slots.length) {
                window.apstag.fetchBids({
                    slots: slots,
                    timeout: timeout
                }, bids => {
                    this.apsBidsBack(bids);
                    this.notifyReturned('apsBids', els, bids);
                    resolve();
                });
            } else {
                reject();
            }

            // Timeout
            setTimeout(() => {
                reject();
            }, timeout);

            // Prebid reached cutoff, cancel our request to aps
            window.addEventListener('prebidcutoff', reject);
        }).catch(() => {
            this.adLogger(`APS timeout of ${timeout}ms reached`, els);
            this.notifyReturned('apsBids', els);
        }));
    },

    apsBidsBack: function (bids) {
        this.adLogger('apsBidsBack()', bids);

        window.googletag = window.googletag || {};
        window.googletag.cmd = window.googletag.cmd || [];
        window.googletag.cmd.push(function (){
            window.apstag.setDisplayBids();
        });
    },

    inxEnabled: function () {
        const inxDebug = !!ga_data.utils.getUrlParamValue('inx_debug'),
            onCP = ga_data.utils.getUrlParamValue('sitelabel') === 'reimagine',
            configEnabled = ga_data.utils.getNested(ga_data, 'site', 'ads', 'inx_universal', 'enabled');

        return !onCP && !this.disableBidding && (inxDebug || configEnabled);
    },

    setupINX: function () {
        const scriptUrl = ga_data.utils.getNested(ga_data, 'site', 'ads', 'inx_universal', 'scriptUrl') || 'https://js-sec.indexww.com/ht/p/184808-80700235986665.js';
        ga_data.utils.loadScript(scriptUrl, 'inxScript')
            .catch(() => {
                window.ads.scriptFailed = true;
            });
    },

    getINX: function () {
        ga_data.ads = ga_data.ads || {};
        ga_data.ads.inxAdUnits = ga_data.ads.inxAdUnits || [];

        const els = ga_data.ads.inxAdUnits;
        this.adLogger('getINX()', els);
        // Replace queue
        ga_data.ads.inxAdUnits = {
            push: el => this.pushToINX([el])
        };

        window.headertag = window.headertag || {};
        window.headertag.cmd = window.headertag.cmd || [];
        const globalTargeting = window.ads.globalTargeting;
        if(globalTargeting) {
            window.headertag.cmd.push(() => {
                window.headertag.setSiteKeyValueData( {
                    topic: globalTargeting.ssts_topic,
                    section: globalTargeting.ssts_section,
                    subsection: globalTargeting.ssts_subsection,
                    brandSafety: globalTargeting.categoryvalue,
                    domain: ga_data.utils.getNested(window, 'ga_data', 'site', 'baseName') + ga_data.utils.getNested(window, 'ga_data', 'site', 'topLevelDomain')
                });
            });
        }

        // Make first request with queued units
        if(els.length) {
            this.pushToINX(els);
        }
    },

    pushToINX: function (els) {
        const timeout = ga_data.utils.getNested(ga_data, 'site', 'ads', 'inx_universal', 'timeout') || 1500;

        this.adCallPromises.push(new Promise((resolve, reject) => {
            const slotDemandObjs = [];
            els.forEach();

            // Push request to INX
            window.headertag.cmd.push(() => {
                this.adLogger('Requesting Bids from Index Exchange');
                // Universal Index Exchange Wrapper
                // Map duplicate-free array of slot names to htSlotName objects
                const slotNames = slotDemandObjs.filter((val, i, self) => {
                        return self.indexOf(val) === i;
                    }),
                    inxSlots = slotNames.map();
                if (inxSlots.length) {
                    window.headertag.retrieveDemand(inxSlots, demand => {
                        this.inxReponseHandler(els, demand);
                        resolve();
                    });
                } else {
                    // no valid slots to bid on, resolve INX Barrier
                    this.notifyReturned('inxBids', els);
                    resolve();
                }
            });

            // Timeout
            setTimeout(() => {
                reject();
            }, timeout);

            // Prebid reached cutoff, cancel our request to aps
            window.addEventListener('prebidcutoff', reject);
        }).catch(() => {
            this.adLogger(`INX timeout of ${timeout}ms reached`, els);
            this.notifyReturned('inxBids', els);
        }));
    },

    inxReponseHandler: function (els, demand) {
        if (demand && demand.page) {
            demand.page.forEach(targeting => {
                this._setPageTargeting(targeting);
            });
        }

        // We will only have demand if we are using the universal wrapper
        this.notifyReturned('inxBids', els, demand);
    },

    confiantEnabled: function () {
        const debugEnabled = ga_data.utils.getUrlParamValue('confiant_debug');
        const configEnabled = ga_data.utils.getNested(ga_data, 'site', 'ads', 'confiant', 'enabled');
        const inIframe = ga_data.utils.inIframe();

        return !inIframe && (debugEnabled || configEnabled);
    },

    setupConfiant: function () {
        const config = ga_data.utils.getNested(ga_data, 'site', 'ads', 'confiant') || {};

        const scriptUrl = ga_data.utils.getNested(config, 'scriptUrl') || 'https://confiant-integrations.global.ssl.fastly.net/r5TdgVvkbv-PeaJCKaQfCh5Xsto/gpt_and_prebid/config.js';
        window.confiant = window.confiant || {};
        window.confiant.enable_integrations = ['gpt'];
        window.confiant.callback = this.confiantCallback;
        ga_data.utils.loadScript(scriptUrl, 'confiantScript');
    },

    confiantCallback: function (blockingType, blockingId, isBlocked, wrapperId, tagId, impressionData) {

        // Log blocking event to NewRelic
        if (window.newrelic) {
            window.newrelic.addPageAction('advertisingConfiant', {
                blockingType: blockingType,
                blockingId: blockingId,
                isBlocked: isBlocked,
                wrapperId: wrapperId,
                tagId: tagId,
                experiment: ga_data.utils.getNested(window.ga_data, 'ads', 'experiment', 'name')
            });
        }

        // Refresh blocked ads to recapture revenue
        if (ga_data.utils.getNested(ga_data, 'site', 'ads', 'confiant', 'refreshBlocked')) {

            // DFP Slot element ID should be available at `impressionData.dfp.s` per Confiant documentation
            const slotId = ga_data.utils.getNested(impressionData, 'dfp', 's');
            if (slotId) {
                const els = ga_data.utils.getNested(window, 'ga_data', 'ads', 'units') || [];
                els.forEach(el => {
                    if (el.slotId === slotId && typeof el.refresh === 'function') {
                        el.refresh();
                    }
                });
            }
        }
    },

    prebidEnabled: function () {
        return ga_data.utils.getNested(ga_data, 'site', 'ads', 'prebid', this.platform, 'enabled') && !this.disableBidding;
    },

    setupPrebidJS: function () {
        const scriptUrl = ga_data.utils.getNested(ga_data, 'site', 'ads', 'prebid', 'scriptUrl') || 'https://www.gannett-cdn.com/partner/vendor/pbjsandwich.min.js';
        ga_data.utils.loadScript(scriptUrl, 'prebidScript')
            .catch(() => {
                window.ads.scriptFailed = true;
            })
            .then(() => this.onPrebidJSLoaded());
    },

    onPrebidJSLoaded: function () {
        const getNested = ga_data.utils.getNested,
            prebidConfigs = getNested(ga_data, 'site', 'ads', 'prebid') || {},
            config = prebidConfigs.config || {},
            staq = getNested(prebidConfigs, this.platform, 'staq') || {},
            liveintent = prebidConfigs.liveintent || {},
            identityLink = prebidConfigs.identityLink || {},
            gdpr = prebidConfigs.gdpr || {},
            priceGranularity = {
                buckets: [
                    {
                        precision: 2,
                        min: 0,
                        max: 10,
                        increment: 0.01
                    },
                    {
                        precision: 2,
                        min: 10,
                        max: 20,
                        increment: 0.05
                    },
                    {
                        precision: 2,
                        min: 20,
                        max: 50,
                        increment: 0.10
                    },
                    {
                        precision: 2,
                        min: 50,
                        max: 75,
                        increment: 0.25
                    },
                    {
                        precision: 2,
                        min: 75,
                        max: 100,
                        increment: 0.50
                    },
                    {
                        precision: 2,
                        min: 100,
                        max: 200,
                        increment: 1.00
                    },
                    {
                        precision: 2,
                        min: 200,
                        max: 480,
                        increment: 5.00
                    }
                ]
            };

        window.pbjs = window.pbjs || {};

        // Configure prebid
        window.pbjs.que = window.pbjs.que || [];
        window.pbjs.que.push(() => {
            const userIds = [],
                options = {
                    consentManagement: {
                        gdpr: {
                            cmpApi: 'iab',
                            allowAuctionWithoutConsent: false,
                            timeout: gdpr.timeout || 10000,
                            defaultGdprScope: true,
                            rules: gdpr.rules || []
                        },
                        usp: {
                            cmpApi: 'iab',
                            timeout: config.uspapiTimeout || 0
                        }
                    },
                    priceGranularity: priceGranularity,
                    cache: {
                        url: 'https://prebid.adnxs.com/pbc/v1/cache'
                    },
                    bidderSequence: config.bidderSequence || 'random',
                    enableSendAllBids: false,
                    usePrebidCache: true,
                    maxRequestsPerOrigin: config.maxRequestsPerOrigin || 4,
                    timeoutBuffer: config.timeoutBuffer || 200,
                    userSync: {
                        syncEnabled: true,
                        filterSettings: {
                            iframe: {
                                bidders: config.syncBlacklistIframe || [],
                                filter: 'exclude'
                            },
                            image: {
                                bidders: config.syncBlacklistImage || [],
                                filter: 'exclude'
                            }
                        },
                        syncsPerBidder: config.syncsPerBidder || 5,
                        syncDelay: config.syncDelay || 5000
                    },
                    rubicon: {singleRequest: true},
                    useBidCache: !!config.useBidCache
                };

            if (liveintent.enabled || ga_data.utils.getUrlParamValue('liveintent')) {
                userIds.push({
                    name: 'liveIntentId',
                    params: {
                        publisherId: liveintent.publisherId,
                        identifiersToResolve: ['gup_anonid']
                    },
                    storage: {
                        type: 'cookie',
                        name: 'pbjs_li_nonid',
                        expires: 1
                    }
                });
            }

            if (identityLink.enabled || ga_data.utils.getUrlParamValue('identitylink')) {
                userIds.push({
                    name: 'identityLink',
                    params: {
                        pid: identityLink.placementId
                    },
                    storage: {
                        type: 'cookie',
                        name: 'idl_env',
                        expires: 7
                    }
                });
            }

            if (userIds.length) options.userSync.userIds = userIds;

            window.pbjs.setConfig(options);
            window.pbjs.bidderSettings = {
                standard: {
                    adserverTargeting: [
                        {
                            key: 'hb_ap',
                            val: bidResponse => {
                                return bidResponse.pbCg;
                            }
                        },
                        {
                            key: 'hb_pb',
                            val: bidResponse => {
                                if (bidResponse.mediaType === 'video') {
                                    return bidResponse.pbCg;
                                }
                                return '';
                            }
                        },
                        {
                            key: 'hb_bidder',
                            val: bidResponse => {
                                return bidResponse.bidderCode;
                            }
                        },
                        {
                            key: 'hb_adid',
                            val: bidResponse => {
                                return bidResponse.adId;
                            }
                        },
                        {
                            key: 'hb_size',
                            val: bidResponse => {
                                return bidResponse.size;
                            }
                        },
                        {
                            key: 'hb_source',
                            val: bidResponse => {
                                return bidResponse.source;
                            }
                        },
                        {
                            key: 'hb_format',
                            val: bidResponse => {
                                return bidResponse.mediaType;
                            }
                        },
                        {
                            key: 'hb_ap_id',
                            val: bidResponse => {
                                const env = this._inMobileEnvironment() ? 'mobile' : 'desktop';
                                const adPointId = ga_data.utils.getNested(ga_data, 'site', 'ads', 'prebid', env, bidResponse.bidderCode, 'adPointId');
                                if (!adPointId && bidResponse.mediaType !== 'video' && window.newrelic) {
                                    // Log an event to Newrelic so we can trigger alerts.
                                    window.newrelic.addPageAction('advertisingError', {
                                        build: 'universal web',
                                        experiment: ga_data.utils.getNested(ga_data, 'ads', 'experiment', 'name'),
                                        message: `AdPoint ID not found in config for bidder code: ${bidResponse.bidderCode}`
                                    });
                                }
                                return adPointId;
                            }
                        },
                        {
                            key: 'hb_deal',
                            val: 
                        }
                    ]
                }
            };
            if(staq.enabled) {
                window.pbjs.enableAnalytics([{
                    provider: 'staq',
                    options: {
                        host: document.location.hostname,
                        url: staq.url,
                        connId: staq.connId
                    }
                }]);
            }
            // Add listeners for events
            window.pbjs.onEvent('bidWon', bid => {
                if (window.newrelic) {
                    window.newrelic.addPageAction('advertisingPrebidWon', {
                        adId: bid.adId,
                        adUnitCode: bid.adUnitCode,
                        bidder: bid.bidder,
                        cpm: bid.cpm,
                        experiment: ga_data.utils.getNested(window.ga_data, 'ads', 'experiment', 'name'),
                        mediaType: bid.mediaType,
                        size: bid.size
                    });
                }
                this.adLogger(`Bid Won | Unit : ${bid.adUnitCode} | Bidder : ${bid.bidder} | CPM : ${bid.cpm}`);
            });

            window.pbjs.onEvent('adRenderFailed', bid => {
                if (window.newrelic) {
                    window.newrelic.addPageAction('advertisingPrebidFailed', {
                        adId: bid.adId,
                        adUnitCode: bid.adUnitCode,
                        bidder: bid.bidder,
                        experiment: ga_data.utils.getNested(window.ga_data, 'ads', 'experiment', 'name'),
                        mediaType: bid.mediaType,
                        size: bid.size
                    });
                }
                this.adLogger(`Bid Render Failed | Unit : ${bid.adUnitCode} | Bidder : ${bid.bidder}`);
            });
        });
    },

    getPrebid: function () {
        ga_data.ads = ga_data.ads || {};
        ga_data.ads.pbAdUnits = ga_data.ads.pbAdUnits || [];

        const els = ga_data.ads.pbAdUnits;
        this.adLogger('getPrebid()', els);

        // Replace queue
        ga_data.ads.pbAdUnits = {
            batched: ga_data.ads.pbAdUnits.length,
            push: 
        };

        // Make first request with any queued units
        if(els.length) {
            this.pushToPrebid(els);
        }
    },

    pushToPrebid: function (els) {
        const config = ga_data.utils.getNested(ga_data, 'site', 'ads', 'prebid', this.platform) || {};
        const timeout = config.timeout || 1500;
        const buffer = config.timeoutBuffer || 200;
        const cutoff = config.cutoff || 0;

        // Rejects with either no bid in the case of a timeout, or  bid in the case of cutoff being met
        this.adCallPromises.push(new Promise( (resolve, reject) => {
            // Construct ad unit codes from elements
            const adUnitCodes = [];
            els.forEach(el => adUnitCodes.push(el.slotId));
            // Push bid request to Prebid
            window.pbjs = window.pbjs || {};
            window.pbjs.que = window.pbjs.que || [];
            window.pbjs.que.push(() => {
                this.adLogger('Requesting Prebid Bids', els);
                const requestObj = {
                    adUnitCodes: adUnitCodes,
                    bidsBackHandler: bids => {
                        this.notifyReturned('prebidBids', els, bids);
                        resolve();
                        this.adLogger('prebidBidsBack()', bids);
                    },
                    timeout: timeout
                };

                if (window.rivraddon && typeof window.rivraddon.adjustRequest === 'function') {
                    const adjustedRequestedObj = window.rivraddon.adjustRequest(requestObj);
                    window.pbjs.requestBids(adjustedRequestedObj);
                } else {
                    window.pbjs.requestBids(requestObj);
                }

                window.pbjs.offEvent('bidResponse', this.prebidResponse);
                this.prebidResponse = bid => {
                    if (cutoff > 0) {
                        window.pbjs.auction = window.pbjs.auction || {};
                        window.pbjs.auction[bid.adUnitCode] = window.pbjs.auction[bid.adUnitCode] || { cpm: 0, ttl: 0 };

                        // only capture the current valid highest bid for this ad unit
                        if(bid.cpm > window.pbjs.auction[bid.adUnitCode].cpm || ((Date.now() - bid.requestTimestamp) / 1000) > window.pbjs.auction[bid.adUnitCode].ttl) {
                            window.pbjs.auction[bid.adUnitCode] = bid;
                        }

                        if (bid.cpm > cutoff) {
                            this.adLogger('BID FLOOR MET', bid.adUnitCode, bid.bidderCode, bid.cpm);
                            reject(bid);
                            ga_data.utils.broadcastEvent('prebidcutoff');
                        }
                    }

                    this.adLogger(`Bid | Unit : ${bid.adUnitCode} | Bidder : ${bid.bidder} | Response : ${bid.timeToRespond} | CPM : ${bid.cpm}`);
                };
                window.pbjs.onEvent('bidResponse', this.prebidResponse);
            });

            // Timeout : base timeout + window.pbjs timeout buffer + allotment for script to load
            setTimeout(, (timeout + buffer + 500));
        }).catch(bid => {
            this.notifyReturned('prebidTimeout', els, bid);
            this.adLogger(`Prebid timeout of ${timeout}ms reached`, els);
        }));
    },

    setupRivr: function () {
        ga_data.utils.loadScript(this.rivrConfig.scriptUrl, 'rivraddon').then(()=> {
            window.pbjs.que.push(() => {
                const args = {
                    clientID: this.rivrConfig.clientId,
                    authToken: this.rivrConfig.clientAuthToken,
                    pbjs: window.pbjs
                };
                if (window.rivraddon) {
                    window.rivraddon.enable(args);
                } else {
                    window.RIVR_ARGS = args;
                }
            });
        });
    },

    iasEnabled: function () {
        const iasDebugEnabled = !!ga_data.utils.getUrlParamValue('ias_debug');
        return iasDebugEnabled || ga_data.utils.getNested(ga_data, 'site', 'ads', 'ias', 'enabled');
    },

    setupIAS: function () {
        const scriptUrl = ga_data.utils.getNested(ga_data, 'site', 'ads', 'ias', 'scriptUrl') || 'https://cdn.adsafeprotected.com/iasPET.1.js';
        ga_data.utils.loadScript(scriptUrl, 'iasScript')
            .catch(