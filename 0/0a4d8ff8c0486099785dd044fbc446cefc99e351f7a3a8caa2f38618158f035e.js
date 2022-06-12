/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'underscore',
    'jquery',
    'mageUtils',
    'uiRegistry',
    './types',
    '../../lib/logger/console-logger'
], function (_, $, utils, registry, types, consoleLogger) {
    'use strict';

    var templates = registry.create(),
        layout = {},
        cachedConfig = {};

    /**
     * Build name from parent name and node name
     *
     * @param {Object} parent
     * @param {Object} node
     * @param {String} [name]
     * @returns {String}
     */
    function(){}

    /**
     * Get node type from node or parent.
     *
     * @param {Object} parent
     * @param {Object} node
     * @returns {String}
     */
    function(){}

    /**
     * Get data scope based on parent data scope and node data scope.
     *
     * @param {Object} parent
     * @param {Object} node
     * @returns {String}
     */
    function(){}

    /**
     * Load node dependencies on other instances.
     *
     * @param {Object} node
     * @returns {jQueryPromise}
     */
    function(){}

    /**
     * Load node component file via requirejs.
     *
     * @param {Object} node
     * @returns {jQueryPromise}
     */
    function(){}

    /**
     * Create a new component instance and set it to the registry.
     *
     * @param {Object} node
     * @param {Function} Constr
     */
    function(){}

    /**
     * Application entry point.
     *
     * @param {Object} nodes
     * @param {Object} parent
     * @param {Boolean} cached
     * @param {Boolean} merge
     * @returns {Boolean|undefined}
     */
    function(){}

    _.extend(layout, {
        /**
         * Determines if node ready to be added or process it.
         *
         * @param {Object} parent
         * @param {Object|String} node
         */
        iterator: function(){},

        /**
         * Prepare component.
         *
         * @param {Object} parent
         * @param {Object} node
         * @param {String} name
         * @returns {Object}
         */
        process: function(){},

        /**
         * Detailed processing of component config.
         *
         * @param {Object} parent
         * @param {Object} node
         * @param {String} name
         * @returns {Boolean|Object}
         */
        build: function(){},

        /**
         * Filter out all disabled components.
         *
         * @param {Object} children
         * @returns {*}
         */
        filterDisabledChildren: function(){},

        /**
         * Init component.
         *
         * @param {Object} node
         * @returns {Object}
         */
        initComponent: function(){}
    });

    _.extend(layout, {
        /**
         * Loading component marked as isTemplate.
         *
         * @param {Object} parent
         * @param {Object} node
         * @returns {Object}
         */
        waitTemplate: function(){},

        /**
         * Waiting for parent component and process provided component.
         *
         * @param {Object} node
         * @param {String} name
         * @returns {Object}
         */
        waitParent: function(){},

        /**
         * Processing component marked as isTemplate.
         *
         * @param {Object} parent
         * @param {Object} node
         * @param {String} name
         */
        applyTemplate: function(){}
    });

    _.extend(layout, {
        /**
         * Determines inserting strategy.
         *
         * @param {Object} node
         * @returns {Object}
         */
        manipulate: function(){},

        /**
         * Insert component to provide target and position.
         *
         * @param {Object|String} item
         * @param {Object} target
         * @param {Number} position
         * @returns {Object}
         */
        insert: function(){},

        /**
         * Insert component into multiple targets.
         *
         * @param {Object} item
         * @param {Array} targets
         * @returns {Object}
         */
        insertTo: function(){},

        /**
         * Add provided child to parent.
         *
         * @param {Object} parent
         * @param {Object|String} child
         * @returns {Object}
         */
        addChild: function(){},

        /**
         * Merge components configuration with cached configuration.
         *
         * @param {Array} components
         */
        merge: function(){},

        /**
         * Recursive dataSource assignment.
         *
         * @param {Object} config
         * @param {String} parentPath
         * @returns {Object}
         */
        getDataSources: function(){},

        /**
         * Configuration getter.
         *
         * @param {String} path
         * @param {Object} config
         * @returns {Boolean|Object}
         */
        getFullConfig: function(){},

        /**
         * Filter data by property and value.
         *
         * @param {Object} data
         * @param {String} prop
         * @param {*} propValue
         */
        getByProperty: function(){},

        /**
         * Filter components.
         *
         * @param {Array} data
         * @param {Boolean} splitPath
         * @param {Number} index
         * @param {String} separator
         * @param {String} keyName
         * @returns {Array}
         */
        filterComponents: function(){}