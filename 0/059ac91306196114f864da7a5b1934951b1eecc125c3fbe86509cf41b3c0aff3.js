if (typeof window['kartra_tracking_loaded'] == "undefined") {
    window['kartra_tracking_loaded'] = true;
    window['processed_assets'] = [];

    if (window.addEventListener) {
        window.addEventListener('load', function() {init_kartra_tracking();}, false);
    } else {
        window.attachEvent('load', function() {init_kartra_tracking();});
    }

    function(){}

    // check if we need to track the analytics
    function track_analytics() {
        if (inIframe()) {
            try {
                var url = window.top.location.href;
            } catch (e) {
                var url = '';
            }
        } else {
            var url = window.location.href;
        }

        var excluded_locations = ['pages/sites/', 'membership/edit', '/load_template_for_screenshot/', 'load_form_for_screenshot/', 'forms/edit/'];
        var ok = true;

        if (url) {
            excluded_locations.forEach(function (value) {
                if (url.indexOf(value) !== -1) {
                    ok = false;
                }
            });
        }

        return ok;

    }

    function(){}

    function load_tracking(container) {

        if (typeof container === 'undefined') {
            var kartra_trackable_elements = document.getElementsByClassName("js_kartra_trackable_object");
        } else {
            var kartra_trackable_elements = container.getElementsByClassName("js_kartra_trackable_object");
        }

        var vendors = {};

        if (kartra_trackable_elements.length > 0 && track_analytics()) {
            for (i = 0; i < kartra_trackable_elements.length; i++) {

                /* Attribute not present move to next element */
                if (kartra_trackable_elements[i].getAttribute('data-kt-type') == null ||
                    kartra_trackable_elements[i].getAttribute('data-kt-value') == null ||
                    kartra_trackable_elements[i].getAttribute('data-kt-type') == '' ||
                    kartra_trackable_elements[i].getAttribute('data-kt-value') == '') {
                    continue;
                }

                var parent_wrapper = ( typeof container === 'undefined' ? true : false ) && someParentHasTheClass(kartra_trackable_elements[i], 'js_trackable_wrapper');

                if (parent_wrapper) {
                    parent_wrapper.addEventListener('kartra_show_hidden_asset', handle_show_hidden_asset, false);
                } else {
                    var value = kartra_trackable_elements[i].getAttribute('data-kt-value');
                    var type = kartra_trackable_elements[i].getAttribute('data-kt-type');

                    if (window['processed_assets'].indexOf(value) !== -1) {
                        continue;
                    }

                    window['processed_assets'].push(type + '|' +value);
                    var the_trackable = 'kartra_trackable_items_' + kartra_trackable_elements[i].getAttribute('data-kt-owner');



                    if (typeof window[the_trackable] == "undefined") {
                        window[the_trackable] = {};
                    }

                    if (typeof window[the_trackable][type] == "undefined") {
                        window[the_trackable][type] = [];
                    }

                    if (window[the_trackable][type].indexOf(value) == -1) {
                        window[the_trackable][type].push(value);
                    }
                    if (typeof vendors[kartra_trackable_elements[i].getAttribute('data-kt-owner')] == "undefined") {
                        vendors[kartra_trackable_elements[i].getAttribute('data-kt-owner')] = [];
                    }
                    vendors[kartra_trackable_elements[i].getAttribute('data-kt-owner')] = window[the_trackable];
                }
            }

            track(vendors);
            window[the_trackable] = {};
        }
    }

    function track(vendors) {
        var links = [];
        for (var key in vendors) {
            a = 'https://app.kartra.com/analytics/track/'+key+'?';
            a += Object.keys(vendors[key]).map(function(k) {
                if (vendors[key][k].length > 1) {
                    var element = [];
                    vendors[key][k].forEach(function(tracking_element) {
                        element.push(encodeURIComponent(k) + '[]=' + encodeURIComponent(tracking_element));
                    });
                    return element.join('&').trim('&');
                } else {
                    return encodeURIComponent(k) + '[]=' + encodeURIComponent(vendors[key][k])
                }

            }).join('&');

            // add the device
            a += '&device=' + get_device_for_tracking();
            links.push(a);
        }

        var timeout = 0;
        if (inIframe()) {
            timeout = 1000;
        }
        setTimeout(function() {
            for (var key_link in links) {
                var img = document.createElement("img");
                img.width = 1;
                img.height = 1;
                img.src = links[key_link];
            }
        }, timeout);
    }

    function someParentHasTheClass(element, classname) {
        if (element.className && element.className.split(' ').indexOf(classname)>=0) {
            return element;
        }

        return element.parentNode && someParentHasTheClass(element.parentNode, classname);
    }

    function(){}