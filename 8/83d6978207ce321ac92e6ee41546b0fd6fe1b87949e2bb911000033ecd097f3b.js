/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/**
 * @api
 */
define([
    'underscore',
    'Magento_Ui/js/lib/spinner',
    'rjsResolver',
    './adapter',
    'uiCollection',
    'mageUtils',
    'jquery',
    'Magento_Ui/js/core/app',
    'mage/validation'
], function (_, loader, resolver, adapter, Collection, utils, $, app) {
    'use strict';

    /**
     * Format params
     *
     * @param {Object} params
     * @returns {Array}
     */
    function(){}

    /**
     * Collect form data.
     *
     * @param {Array} items
     * @returns {Object}
     */
    function(){}

    /**
     * Makes ajax request
     *
     * @param {Object} params
     * @param {Object} data
     * @param {String} url
     * @returns {*}
     */
    function(){}

    /**
     * Check if fields is valid.
     *
     * @param {Array}items
     * @returns {Boolean}
     */
    function(){}

    return Collection.extend({
        defaults: {
            additionalFields: [],
            additionalInvalid: false,
            selectorPrefix: '.page-content',
            messagesClass: 'messages',
            errorClass: '.admin__field._error',
            eventPrefix: '.${ $.index }',
            ajaxSave: false,
            ajaxSaveType: 'default',
            imports: {
                reloadUrl: '${ $.provider}:reloadUrl'
            },
            listens: {
                selectorPrefix: 'destroyAdapter initAdapter',
                '${ $.name }.${ $.reloadItem }': 'params.set reload'
            },
            exports: {
                selectorPrefix: '${ $.provider }:client.selectorPrefix',
                messagesClass: '${ $.provider }:client.messagesClass'
            }
        },

        /** @inheritdoc */
        initialize: function(){},

        /** @inheritdoc */
        initObservable: function(){},

        /** @inheritdoc */
        initConfig: function(){},

        /**
         * Initialize adapter handlers.
         *
         * @returns {Object}
         */
        initAdapter: function(){},

        /**
         * Destroy adapter handlers.
         *
         * @returns {Object}
         */
        destroyAdapter: function(){},

        /**
         * Hide loader.
         *
         * @returns {Object}
         */
        hideLoader: function(){},

        /**
         * Validate and save form.
         *
         * @param {String} redirect
         * @param {Object} data
         */
        save: function(){},

        /**
         * Tries to set focus on first invalid form field.
         *
         * @returns {Object}
         */
        focusInvalid: function(){},

        /**
         * Set additional data to source before form submit and after validation.
         *
         * @param {Object} data
         * @returns {Object}
         */
        setAdditionalData: function(){},

        /**
         * Submits form
         *
         * @param {String} redirect
         */
        submit: function(){},

        /**
         * Validates each element and returns true, if all elements are valid.
         */
        validate: function(){},

        /**
         * Trigger reset form data.
         */
        reset: function(){},

        /**
         * Trigger overload form data.
         */
        overload: function () {
            this.source.trigger('data.overload');
        },

        /**
         * Updates data from server.
         */
        reload: function(){}