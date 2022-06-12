/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define(['underscore'], function (_) {
    'use strict';

    var baseUrls, sections, clientSideSections, sectionNames, canonize;

    /**
     * @param {String} url
     * @return {String}
     */
    canonize = function(){};

    return {
        /**
         * @param {String} url
         * @return {Array}
         */
        getAffectedSections: function(){},

        /**
         * @param {*} allSections
         * @return {*}
         */
        filterClientSideSections: function(){},

        /**
         * @param {String} sectionName
         * @return {Boolean}
         */
        isClientSideSection: function (sectionName) {
            return _.contains(clientSideSections, sectionName);
        },

        /**
         * Returns array of section names.
         *
         * @returns {Array}
         */
        getSectionNames: function () {
            return sectionNames;
        },

        /**
         * @param {Object} options
         * @constructor
         */
        'Magento_Customer/js/section-config': function(){}