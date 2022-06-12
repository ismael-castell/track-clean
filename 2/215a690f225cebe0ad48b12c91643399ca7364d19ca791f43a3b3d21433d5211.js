(function() {
  this.Calendly = {};

  this.Calendly._util = {};

}).call(this);
// @see http://beeker.io/jquery-document-ready-equivalent-vanilla-javascript
Calendly._util.domReady = function(callback) {
    var ready = false;

    var detach = function(){}
    var completed = function(){};

    if(document.readyState === "complete") {
        callback();
    } else if(document.addEventListener) {
        document.addEventListener("DOMContentLoaded", completed);
        window.addEventListener("load", completed);
    } else {
        document.attachEvent("onreadystatechange", completed);
        window.attachEvent("onload", completed);

        var top = false;

        try {
            top = window.frameElement == null && document.documentElement;
        } catch(e) {}

        if(top && top.doScroll) {
            (function(){})();
        }
    }
};
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
Calendly._util.assign = function(){}
;
(function() {
  Calendly._url = {};

  Calendly._url.extractQueryStringParams = function(url) {
    var i, key, len, param, paramString, params, parser, ref, ref1, value;
    parser = document.createElement('a');
    parser.href = url;
    paramString = parser.search.substr(1);
    params = {};
    ref = paramString.split('&');
    for (i = 0, len = ref.length; i < len; i++) {
      param = ref[i];
      ref1 = param.split('='), key = ref1[0], value = ref1[1];
      if (value !== void 0) {
        params[key.toLowerCase()] = decodeURIComponent(value);
      }
    }
    return params;
  };

  Calendly._url.stripQuery = function(url) {
    return url.split('?')[0];
  };

}).call(this);
(function() {
  Calendly._util.snakeCaseKeys = function(options) {
    var convertedKey, key, result;
    result = {};
    for (key in options) {
      convertedKey = key.split(/(?=[A-Z])/).join('_').toLowerCase();
      result[convertedKey] = options[key];
    }
    return result;
  };

  Calendly._util.pick = function(options, keyWhitelist) {
    var i, key, len, result;
    if (!options) {
      return;
    }
    result = {};
    for (i = 0, len = keyWhitelist.length; i < len; i++) {
      key = keyWhitelist[i];
      if (options[key]) {
        result[key] = options[key];
      }
    }
    return result;
  };

}).call(this);
(function (global, factory) {
  var mod = {
    exports: {}
  };

  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    mod.exports = exports
  }

  factory(mod.exports);
  global.bodyScrollLock = mod.exports;
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function(){}

  // Older browsers don't support event options, feature detect it.

  // Adopted and modified solution from Bohdan Didukh (2017)
  // https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

  var hasPassiveEvents = false;
  if (typeof window !== 'undefined') {
    var passiveTestOptions = {
      get passive
    };
    window.addEventListener('testPassive', null, passiveTestOptions);
    window.removeEventListener('testPassive', null, passiveTestOptions);
  }

  var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform);


  var locks = [];
  var documentListenerAdded = false;
  var initialClientY = -1;
  var previousBodyOverflowSetting = void 0;
  var previousBodyPaddingRight = void 0;

  // returns true if `el` should be allowed to receive touchmove events.
  var allowTouchMove = function(){};

  var preventDefault = function(){};

  var setOverflowHidden = function(){};

  var restoreOverflowSetting = function(){};

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
  var isTargetElementTotallyScrolled = function(){};

  var handleScroll = function(){};

  var disableBodyScroll = exports.disableBodyScroll = function(){};

  var clearAllBodyScrollLocks = exports.clearAllBodyScrollLocks = function(){};

  var enableBodyScroll = exports.enableBodyScroll = function(){};
});







(function() {
  var createBadgeWidget, createInlineWidgets, extractBadgeOptions, findInlineParentElement, shouldSkipAutoLoadInlineWidget;

  Calendly._autoLoadInlineWidgets = function(){};

  Calendly.initBadgeWidget = function(){};

  Calendly.destroyBadgeWidget = function() {
    if (!Calendly.badgeWidget) {
      return;
    }
    Calendly.badgeWidget.destroy();
    return delete Calendly.badgeWidget;
  };

  Calendly.initPopupWidget = function(){};

  Calendly.initInlineWidget = function(options) {
    if (!options.url) {
      return;
    }
    if (!options.parentElement) {
      options.parentElement = findInlineParentElement();
    }
    return Calendly._util.domReady(function() {
      options.embedType = 'Inline';
      return new Calendly.Iframe(options);
    });
  };

  Calendly.showPopupWidget = function(url, embedType, options) {
    var onCloseHandler;
    if (embedType == null) {
      embedType = 'PopupText';
    }
    if (options == null) {
      options = {};
    }
    this.closePopupWidget();
    onCloseHandler = function(){};
    Calendly.popupWidget = new Calendly.PopupWidget(url, onCloseHandler, embedType, options);
    return Calendly.popupWidget.show();
  };

  Calendly.closePopupWidget = function() {
    if (!Calendly.popupWidget) {
      return;
    }
    return Calendly.popupWidget.close();
  };

  findInlineParentElement = function() {
    var thisScript;
    thisScript = document.scripts[document.scripts.length - 1];
    return thisScript.parentNode;
  };

  createInlineWidgets = function() {
    var element, elements, i, len, results;
    elements = document.querySelectorAll('.calendly-inline-widget');
    results = [];
    for (i = 0, len = elements.length; i < len; i++) {
      element = elements[i];
      if (!shouldSkipAutoLoadInlineWidget(element)) {
        element.setAttribute('data-processed', true);
        results.push(new Calendly.Iframe({
          parentElement: element,
          inlineStyles: true,
          embedType: 'Inline'
        }));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  shouldSkipAutoLoadInlineWidget = function(element) {
    return element.getAttribute('data-processed') || element.getAttribute('data-auto-load') === 'false';
  };

  createBadgeWidget = function(options) {
    var badgeOptions, initBadgeOptions, onClickHandler;
    Calendly.destroyBadgeWidget();
    badgeOptions = extractBadgeOptions(options);
    onClickHandler = function(){};
    initBadgeOptions = Calendly._util.assign({
      onClick: onClickHandler
    }, badgeOptions);
    return Calendly.badgeWidget = new Calendly.BadgeWidget(initBadgeOptions);
  };

  extractBadgeOptions = function(options) {
    var badgeKeys, badgeOptions;
    badgeKeys = ['color', 'textColor', 'text', 'branding'];
    badgeOptions = {};
    badgeKeys.forEach(function(key) {
      badgeOptions[key] = options[key];
      return delete options[key];
    });
    return badgeOptions;
  };

}).call(this);
(function() {
  Calendly.Iframe = (function() {
    Iframe.prototype.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    function Iframe(options) {
      this.options = options;
      this.parseOptions();
      this.build();
      this.inject();
    }

    Iframe.prototype.parseOptions = function() {
      var defaultOptions;
      defaultOptions = {
        inlineStyles: false
      };
      this.options = Calendly._util.assign({}, defaultOptions, this.options);
      this.parent = this.options.parentElement;
      if (!this.parent) {
        throw 'Calendly: Parent element not set';
      }
      if (this.parent.jquery) {
        this.parent = this.parent[0];
      }
      this.inlineStyles = this.options.inlineStyles;
      this.embedType = this.options.embedType;
      this.url = (this.options.url || this.getUrlFromParent()).split('#')[0];
      if (!this.url) {
        throw 'Calendly: Widget URL not set';
      }
    };

    Iframe.prototype.build = function() {
      this.node = document.createElement('iframe');
      this.node.src = this.getSource();
      this.node.width = '100%';
      this.node.height = '100%';
      return this.node.frameBorder = '0';
    };

    Iframe.prototype.inject = function() {
      this.format();
      this.parent.appendChild(this.buildSpinner());
      return this.parent.appendChild(this.node);
    };

    Iframe.prototype.getSource = function() {
      return (Calendly._url.stripQuery(this.url)) + "?" + (this.getParams());
    };

    Iframe.prototype.getUrlFromParent = function() {
      return this.parent.getAttribute('data-url');
    };

    Iframe.prototype.getParams = function() {
      var key, params, parts, value;
      params = {
        embed_domain: this.getDomain(),
        embed_type: this.embedType
      };
      params = Calendly._util.assign(params, this.getUtmParamsFromHost(), this.getParamsFromUrl(), this.getParamsFromOptions());
      parts = [];
      for (key in params) {
        value = params[key];
        parts.push(key + "=" + (encodeURIComponent(value)));
      }
      return parts.join('&');
    };

    Iframe.prototype.getUtmParamsFromHost = function() {
      var keyFilters, queryStringParams;
      keyFilters = ['utm_campaign', 'utm_source', 'utm_medium', 'utm_content', 'utm_term'];
      queryStringParams = Calendly._url.extractQueryStringParams(window.location.href);
      return Calendly._util.pick(queryStringParams, keyFilters);
    };

    Iframe.prototype.getParamsFromUrl = function() {
      return Calendly._url.extractQueryStringParams(this.url);
    };

    Iframe.prototype.getParamsFromOptions = function(){};

    Iframe.prototype.getUtmParams = function() {
      var keyFilters;
      if (!this.options.utm) {
        return null;
      }
      keyFilters = ['utmCampaign', 'utmSource', 'utmMedium', 'utmContent', 'utmTerm'];
      return Calendly._util.snakeCaseKeys(Calendly._util.pick(this.options.utm, keyFilters));
    };

    Iframe.prototype.getPrefillParams = function() {
      var key, keyFilters, params, ref, value;
      if (!this.options.prefill) {
        return null;
      }
      keyFilters = ['name', 'firstName', 'lastName', 'email'];
      params = Calendly._util.snakeCaseKeys(Calendly._util.pick(this.options.prefill, keyFilters));
      if (this.options.prefill['customAnswers']) {
        ref = this.options.prefill['customAnswers'];
        for (key in ref) {
          value = ref[key];
          if (key.match(/^a\d{1,2}$/)) {
            params[key] = value;
          }
        }
      }
      return params;
    };

    Iframe.prototype.getDomain = function() {
      return document.location.host;
    };

    Iframe.prototype.format = function(){};

    Iframe.prototype.formatDesktop = function() {
      if (this.inlineStyles) {
        return this.parent.setAttribute('style', 'position: relative;' + this.parent.getAttribute('style'));
      }
    };

    Iframe.prototype.formatMobile = function() {
      if (this.inlineStyles) {
        return this.parent.setAttribute('style', 'position: relative;overflow-y:auto;-webkit-overflow-scrolling:touch;' + this.parent.getAttribute('style'));
      } else {
        return this.parent.className += ' calendly-mobile';
      }
    };

    Iframe.prototype.buildSpinner = function() {
      var spinner;
      spinner = document.createElement('div');
      spinner.className = 'calendly-spinner';
      spinner.appendChild(this.buildBounce(1));
      spinner.appendChild(this.buildBounce(2));
      spinner.appendChild(this.buildBounce(3));
      return spinner;
    };

    Iframe.prototype.buildBounce = function(number) {
      var bounce;
      bounce = document.createElement('div');
      bounce.className = "calendly-bounce" + number;
      return bounce;
    };

    return Iframe;

  })();

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Calendly.PopupWidget = (function() {
    function PopupWidget(url, onClose, embedType, options) {
      this.url = url;
      this.onClose = onClose;
      this.embedType = embedType;
      this.options = options != null ? options : {};
      this.close = bind(this.close, this);
    }

    PopupWidget.prototype.show = function() {
      this.buildOverlay();
      this.insertOverlay();
      return this.lockPageScroll();
    };

    PopupWidget.prototype.close = function(){};

    PopupWidget.prototype.buildOverlay = function() {
      this.overlay = document.createElement('div');
      this.overlay.className = 'calendly-overlay';
      this.overlay.appendChild(this.buildCloseOverlay());
      this.overlay.appendChild(this.buildPopup());
      return this.overlay.appendChild(this.buildCloseButton());
    };

    PopupWidget.prototype.insertOverlay = function() {
      return document.body.appendChild(this.overlay);
    };

    PopupWidget.prototype.buildCloseOverlay = function() {
      var node;
      node = document.createElement('div');
      node.className = 'calendly-close-overlay';
      node.onclick = this.close;
      return node;
    };

    PopupWidget.prototype.buildPopup = function() {
      var node;
      node = document.createElement('div');
      node.className = 'calendly-popup';
      node.appendChild(this.buildPopupContent());
      return node;
    };

    PopupWidget.prototype.buildPopupContent = function() {
      var node;
      node = document.createElement('div');
      node.className = 'calendly-popup-content';
      node.setAttribute('data-url', this.url);
      this.options.parentElement = node;
      this.options.embedType = this.embedType;
      new Calendly.Iframe(this.options);
      return node;
    };

    PopupWidget.prototype.buildCloseButton = function() {
      var node;
      node = document.createElement('div');
      node.className = 'calendly-popup-close';
      node.onclick = this.close;
      return node;
    };

    PopupWidget.prototype.destroyOverlay = function() {
      return this.overlay.parentNode.removeChild(this.overlay);
    };

    PopupWidget.prototype.lockPageScroll = function() {
      bodyScrollLock.disableBodyScroll(this.overlay);
      return document.addEventListener('touchmove', this.handleLockedTouchmove, {
        passive: false
      });
    };

    PopupWidget.prototype.unlockPageScroll = function() {
      bodyScrollLock.enableBodyScroll(this.overlay);
      return document.removeEventListener('touchmove', this.handleLockedTouchmove, {
        passive: false
      });
    };

    PopupWidget.prototype.handleLockedTouchmove = function(event) {
      return event.preventDefault();
    };

    return PopupWidget;

  })();

}).call(this);
(function() {
  Calendly.BadgeWidget = (function() {
    function(){}

    BadgeWidget.prototype.destroy = function(){};

    BadgeWidget.prototype.buildWidget = function() {
      this.widget = document.createElement('div');
      this.widget.className = 'calendly-badge-widget';
      return this.widget.appendChild(this.buildContent());
    };

    BadgeWidget.prototype.insertWidget = function(){}