/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/**
 * @api
 */
define([
    'jquery',
    'underscore',
    'ko',
    'Magento_Customer/js/section-config',
    'mage/url',
    'mage/storage',
    'jquery/jquery-storageapi'
], function ($, _, ko, sectionConfig, url) {
    'use strict';

    var options = {},
        storage,
        storageInvalidation,
        invalidateCacheBySessionTimeOut,
        invalidateCacheByCloseCookieSession,
        dataProvider,
        buffer,
        customerData;

    url.setBaseUrl(window.BASE_URL);
    options.sectionLoadUrl = url.build('customer/section/load');

    //TODO: remove global change, in this case made for initNamespaceStorage
    $.cookieStorage.setConf({
        path: '/',
        expires: 1
    });

    storage = $.initNamespaceStorage('mage-cache-storage').localStorage;
    storageInvalidation = $.initNamespaceStorage('mage-cache-storage-section-invalidation').localStorage;

    /**
     * @param {Object} invalidateOptions
     */
    invalidateCacheBySessionTimeOut = function(){};

    /**
     * Invalidate Cache By Close Cookie Session
     */
    invalidateCacheByCloseCookieSession = function(){};

    dataProvider = {

        /**
         * @param {Object} sectionNames
         * @return {Object}
         */
        getFromStorage: function(){},

        /**
         * @param {Object} sectionNames
         * @param {Boolean} forceNewSectionTimestamp
         * @return {*}
         */
        getFromServer: function(){}
    };

    /**
     * @param {Function} target
     * @param {String} sectionName
     * @return {*}
     */
    ko.extenders.disposableCustomerData = function(){};

    buffer = {
        data: {},

        /**
         * @param {String} sectionName
         */
        bind: function(){},

        /**
         * @param {String} sectionName
         * @return {Object}
         */
        get: function(){},

        /**
         * @return {Array}
         */
        keys: function () {
            return _.keys(this.data);
        },

        /**
         * @param {String} sectionName
         * @param {Object} sectionData
         */
        notify: function(){},

        /**
         * @param {Object} sections
         */
        update: function(){},

        /**
         * @param {Object} sections
         */
        remove: function(){}
    };

    customerData = {

        /**
         * Customer data initialization
         */
        init: function () {
            var expiredSectionNames = this.getExpiredSectionNames();

            if (expiredSectionNames.length > 0) {
                _.each(dataProvider.getFromStorage(storage.keys()), function (sectionData, sectionName) {
                    buffer.notify(sectionName, sectionData);
                });
                this.reload(expiredSectionNames, false);
            } else {
                _.each(dataProvider.getFromStorage(storage.keys()), function (sectionData, sectionName) {
                    buffer.notify(sectionName, sectionData);
                });

                if (!_.isEmpty(storageInvalidation.keys())) {
                    this.reload(storageInvalidation.keys(), false);
                }
            }
        },

        /**
         * Retrieve the list of sections that has expired since last page reload.
         *
         * Sections can expire due to lifetime constraints or due to inconsistent storage information
         * (validated by cookie data).
         *
         * @return {Array}
         */
        getExpiredSectionNames: function(){},

        /**
         * Check if some sections have to be reloaded.
         *
         * @deprecated Use getExpiredSectionNames instead.
         *
         * @return {Boolean}
         */
        needReload: function(){},

        /**
         * Retrieve the list of expired keys.
         *
         * @deprecated Use getExpiredSectionNames instead.
         *
         * @return {Array}
         */
        getExpiredKeys: function () {
            return this.getExpiredSectionNames();
        },

        /**
         * @param {String} sectionName
         * @return {*}
         */
        get: function (sectionName) {
            return buffer.get(sectionName);
        },

        /**
         * @param {String} sectionName
         * @param {Object} sectionData
         */
        set: function(){},

        /**
         * Avoid using this function directly 'cause of possible performance drawbacks.
         * Each customer section reload brings new non-cached ajax request.
         *
         * @param {Array} sectionNames
         * @param {Boolean} forceNewSectionTimestamp
         * @return {*}
         */
        reload: function(){},

        /**
         * @param {Array} sectionNames
         */
        invalidate: function(){},

        /**
         * @param {Object} settings
         * @constructor
         */
        'Magento_Customer/js/customer-data': function(){}
    };

    /**
     * Events listener
     */
    $(document).on('ajaxComplete', function(){});

    /**
     * Events listener
     */
    $(document).on('submit', function(){}