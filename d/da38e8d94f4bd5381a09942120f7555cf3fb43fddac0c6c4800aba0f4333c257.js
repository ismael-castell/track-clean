/*!
 * bootstrap-typeahead.js v0.0.3 (http://www.upbootstrap.com)
 * Copyright 2012-2014 Twitter Inc.
 * Licensed under MIT (https://github.com/biggora/bootstrap-ajax-typeahead/blob/master/LICENSE)
 * See Demo: http://plugins.upbootstrap.com/bootstrap-ajax-typeahead
 * Updated: 2014-02-09 02:4:38
 *
 * Modifications by Paul Warelis and Alexey Gordeyev
 */
!function ($) {

    "use strict"; // jshint ;_;

    /* TYPEAHEAD PUBLIC CLASS DEFINITION
     * ================================= */

    var Typeahead = function (element, options) {

        var that = this;
        that.$element = $(element);
        that.options = $.extend({}, $.fn.typeahead.defaults, options);
        that.$menu = $(that.options.menu).insertAfter(that.$element);

        // Method overrides
        that.eventSupported = that.options.eventSupported || that.eventSupported;
        that.grepper = that.options.grepper || that.grepper;
        that.highlighter = that.options.highlighter || that.highlighter;
        that.lookup = that.options.lookup || that.lookup;
        that.matcher = that.options.matcher || that.matcher;
        that.render = that.options.render || that.render;
        that.onSelect = that.options.onSelect || null;
        that.sorter = that.options.sorter || that.sorter;
        that.source = that.options.source || that.source;
        that.displayField = that.options.displayField || that.displayField;
        that.valueField = that.options.valueField || that.valueField;

        if (that.options.ajax) {
            var ajax = that.options.ajax;

            if (typeof ajax === 'string') {
                that.ajax = $.extend({}, $.fn.typeahead.defaults.ajax, {
                    url: ajax
                });
            } else {
                if (typeof ajax.displayField === 'string') {
                    that.displayField = that.options.displayField = ajax.displayField;
                }
                if (typeof ajax.valueField === 'string') {
                    that.valueField = that.options.valueField = ajax.valueField;
                }

                that.ajax = $.extend({}, $.fn.typeahead.defaults.ajax, ajax);
            }

            if (!that.ajax.url) {
                that.ajax = null;
            }
            that.query = "";
        } else {
            that.source = that.options.source;
            that.ajax = null;
        }
        that.shown = false;
        that.listen();
    };

    Typeahead.prototype = {
        constructor: Typeahead,
        //=============================================================================================================
        //  Utils
        //  Check if an event is supported by the browser eg. 'keypress'
        //  * This was included to handle the "exhaustive deprecation" of jQuery.browser in jQuery 1.8
        //=============================================================================================================
        eventSupported: function(){},
        select: function () {

            var $selectedItem = this.$menu.find('.active');
            var value = $selectedItem.attr('data-value');
            var text = this.$menu.find('.active a').text();
            var txt1;

            console.log(JSON.stringify(value));
            console.log(JSON.stringify(text));

            var container = document.createElement("p");
            container.innerHTML = value;
            var anchors = container.getElementsByTagName("a");
            if (anchors != null & anchors.length > 0) {
                //console.log(JSON.stringify(anchors[0].href));

                window.location.href = anchors[0].href;
                return null;
            }


            if (text == '') {
                text = this.query;
            }

            if (this.options.onSelect) {
                this.options.onSelect({
                    value: value,
                    text: text
                });
            }
            this.$element
                .val(this.updater(text))
                .change();
            return this.hide();
        },
        updater: function (item) {
            var is_after_autocomplete_block_submit = jQuery('#is_after_autocomplete_block_submit').val();
            this.$element[0].value = item;
            if (is_after_autocomplete_block_submit != '1') {
                this.$element[0].form.submit();

            }
            return item;


        },
        show: function(){},
        hide: function () {
            this.$menu.hide();
            this.shown = false;
            return this;
        },
        ajaxLookup: function(){},
        ajaxSource: function(){},
        ajaxToggleLoadClass: function(){},
        lookup: function(){},
        matcher: function (item) {
            return ~item.toLowerCase().indexOf(this.query.toLowerCase());
        },
        sorter: function(){},
        highlighter: function (item) {
            return item; // breaks html and anyway Solr is already highlighting content.
            /*
             var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
             return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
             return '<strong>' + match + '</strong>';
             });
             */
        },
        render: function (items) {
            var that = this, display, isString = typeof that.options.displayField === 'string';

            items = $(items).map(function(){});

            //items.first().addClass('active');
            this.$menu.html(items);
            return this;
        },
        //------------------------------------------------------------------
        //  Filters relevent results
        //
        grepper: function(){},
        next: function(){},
        prev: function(){},
        listen: function(){},
        move: function(){},
        keydown: function(){},
        keypress: function(){},
        keyup: function(){},
        focus: function (e) {
            this.focused = true
        },
        blur: function (e) {
            this.focused = false
            if (!this.mousedover && this.shown)
                this.hide()
        },
        click: function(){},
        mouseenter: function(){},
        mouseleave: function(){}
    };


    /* TYPEAHEAD PLUGIN DEFINITION
     * =========================== */

    $.fn.typeahead = function(){};

    $.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="wdm_ul typeahead wdm-dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        displayField: 'name',
        valueField: 'id',
        onSelect: function () {
        },
        ajax: {
            url: null,
            timeout: 300,
            method: 'get',
            triggerLength: 1,
            loadingClass: null,
            preDispatch: null,
            preProcess: null
        }
    };

    $.fn.typeahead.Constructor = Typeahead;

    /* TYPEAHEAD DATA-API
     * ================== */

    $(function(){}