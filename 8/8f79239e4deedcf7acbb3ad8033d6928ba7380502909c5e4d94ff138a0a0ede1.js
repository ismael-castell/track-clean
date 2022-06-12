/**
 * @file
 * eu_cookie_compliance.js
 *
 * Defines the behavior of the eu cookie compliance banner.
 *
 * Statuses:
 *  null: not yet agreed (or withdrawn), show popup
 *  0: Disagreed
 *  1: Agreed, show thank you banner
 *  2: Agreed
 */

(function ($, Drupal, drupalSettings) {

  'use strict';
  var euCookieComplianceBlockCookies;

  Drupal.behaviors.euCookieCompliancePopup = {
    attach: function(){},
  };

  // Set up the namespace as a function to store list of arguments in a queue.
  Drupal.eu_cookie_compliance = Drupal.eu_cookie_compliance || function () {
    (Drupal.eu_cookie_compliance.queue = Drupal.eu_cookie_compliance.queue || []).push(arguments)
  };
  // Initialize the object with some data.
  Drupal.eu_cookie_compliance.a = +new Date;
  // A shorter name to use when accessing the namespace.
  var self = Drupal.eu_cookie_compliance;
  // Save our cookie preferences locally only.
  // Used by external scripts to modify data before it is used.
  var _euccSelectedCategories = [];
  var _euccCurrentStatus = null;
  self.updateSelectedCategories = function (categories) {
    _euccSelectedCategories = categories;
  }
  self.updateCurrentStatus = function (status) {
    _euccCurrentStatus = status;
  }

  Drupal.eu_cookie_compliance.execute = function () {
    try {
      if (!drupalSettings.eu_cookie_compliance.popup_enabled) {
        return;
      }

      if (!Drupal.eu_cookie_compliance.cookiesEnabled()) {
        return;
      }

      Drupal.eu_cookie_compliance.getCurrentStatus();

      if (typeof Drupal.eu_cookie_compliance.getVersion() === 'undefined') {
        // If version doesn't exist as a cookie, set it to the current one.
        // For modules that update to this, it prevents needless retriggering
        // For first time runs, it makes no difference as the other IF statements
        // below will still cause the popup to trigger
        // For incrementing the version, it also makes no difference as either it's
        // a returning user and will have a version set, or it's a new user and
        // the other checks will trigger it.
        Drupal.eu_cookie_compliance.setVersion();
      }

      var versionChanged = Drupal.eu_cookie_compliance.getVersion() !== drupalSettings.eu_cookie_compliance.cookie_policy_version;
      // Closed if status has a value and the version hasn't changed.
      var closed = _euccCurrentStatus !== null && !versionChanged;
      // Only worried about OPT_IN / GDPR method at present for the perm. settings tab.
      if (_euccCurrentStatus == 0 && drupalSettings.eu_cookie_compliance.settings_tab_enabled && drupalSettings.eu_cookie_compliance.method === 'opt_in' && !versionChanged) {
         Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.popup_html_info, (_euccCurrentStatus !== null));
         $('.eu-cookie-withdraw-tab').click(Drupal.eu_cookie_compliance.toggleWithdrawBanner);
         Drupal.eu_cookie_compliance.attachAgreeEvents();
      }
      else if ((_euccCurrentStatus === 0 && drupalSettings.eu_cookie_compliance.method === 'default') || _euccCurrentStatus === null || (_euccCurrentStatus !== 1 && drupalSettings.eu_cookie_compliance.withdraw_enabled && drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup) || (_euccCurrentStatus !== 1 && versionChanged)) {
        if (drupalSettings.eu_cookie_compliance.withdraw_enabled || !drupalSettings.eu_cookie_compliance.disagree_do_not_show_popup || _euccCurrentStatus === null) {
          // Detect mobile here and use mobile_popup_html_info, if we have a mobile device.
          if (window.matchMedia('(max-width: ' + drupalSettings.eu_cookie_compliance.mobile_breakpoint + 'px)').matches && drupalSettings.eu_cookie_compliance.use_mobile_message) {
            Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.mobile_popup_html_info, closed);
          }
          else {
            Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.popup_html_info, closed);
          }
          Drupal.eu_cookie_compliance.initPopup();
          Drupal.eu_cookie_compliance.resizeListener();
        }
      }
      else if (_euccCurrentStatus === 1 && drupalSettings.eu_cookie_compliance.popup_agreed_enabled) {
        // Thank you banner.
        Drupal.eu_cookie_compliance.createPopup(drupalSettings.eu_cookie_compliance.popup_html_agreed);
        Drupal.eu_cookie_compliance.attachHideEvents();
      }
      else if (_euccCurrentStatus === 2 && drupalSettings.eu_cookie_compliance.withdraw_enabled) {
        if (!drupalSettings.eu_cookie_compliance.withdraw_button_on_info_popup) {
          Drupal.eu_cookie_compliance.createWithdrawBanner(drupalSettings.eu_cookie_compliance.withdraw_markup);
          Drupal.eu_cookie_compliance.initPopup();
          Drupal.eu_cookie_compliance.resizeListener();
        }
      }
    }
    catch (e) {
    }
  };

  Drupal.eu_cookie_compliance.initPopup = function(){}

  Drupal.eu_cookie_compliance.positionTab = function(){};


  Drupal.eu_cookie_compliance.createWithdrawBanner = function(){};

  Drupal.eu_cookie_compliance.toggleWithdrawBanner = function(){};

  Drupal.eu_cookie_compliance.resizeListener = function(){};

  Drupal.eu_cookie_compliance.createPopup = function(){};

  Drupal.eu_cookie_compliance.attachAgreeEvents = function(){};

  Drupal.eu_cookie_compliance.attachSavePreferencesEvents = function(){};

  Drupal.eu_cookie_compliance.attachHideEvents = function(){};

  Drupal.eu_cookie_compliance.attachWithdrawEvents = function(){};

  Drupal.eu_cookie_compliance.acceptAction = function(){};

  Drupal.eu_cookie_compliance.acceptAllAction = function(){}

  Drupal.eu_cookie_compliance.savePreferencesAction = function(){};

  Drupal.eu_cookie_compliance.loadCategoryScripts = function(){}

  Drupal.eu_cookie_compliance.declineAction = function(){};

  Drupal.eu_cookie_compliance.withdrawAction = function(){};

  Drupal.eu_cookie_compliance.moreInfoAction = function(){};

  Drupal.eu_cookie_compliance.getCookieStatus = function(){}

  Drupal.eu_cookie_compliance.getCurrentStatus = function(){};

  Drupal.eu_cookie_compliance.setPreferenceCheckboxes = function(){}

  Drupal.eu_cookie_compliance.getAcceptedCategories = function(){};

  Drupal.eu_cookie_compliance.changeStatus = function(){};

  Drupal.eu_cookie_compliance.showWithdrawBanner = function(){};

  Drupal.eu_cookie_compliance.setStatus = function(){};

  Drupal.eu_cookie_compliance.setAcceptedCategories = function(){};

  Drupal.eu_cookie_compliance.hasAgreed = function(){};

  Drupal.eu_cookie_compliance.hasAgreedWithCategory = function(){};

  Drupal.eu_cookie_compliance.showBanner = function(){};

  Drupal.eu_cookie_compliance.cookiesEnabled = function(){};

  Drupal.eu_cookie_compliance.cookieMatches = function(){};

  Drupal.eu_cookie_compliance.isAllowed = function(){}

  Drupal.eu_cookie_compliance.getVersion = function(){};

  Drupal.eu_cookie_compliance.setVersion = function(){};

  // Load blocked scripts if the user has agreed to being tracked.
  var euCookieComplianceHasLoadedScripts = false;
  var euCookieComplianceHasLoadedScriptsForCategory = [];
  $(function(){});

  Drupal.eu_cookie_compliance.BlockCookies = function () {
    var cookieStatus = Drupal.eu_cookie_compliance.getCookieStatus();
    if (cookieStatus === 1 || cookieStatus === 2) {
      // Stop blocking the cookies if it's already been agreed to (e.g. in a different tab).
      if (typeof euCookieComplianceBlockCookies !== 'undefined') {
        clearInterval(euCookieComplianceBlockCookies);
        return;
      }
    }
    // Load all cookies from jQuery.
    var cookies = $.cookie();

    // Check each cookie and try to remove it if it's not allowed.
    for (var i in cookies) {
      var remove = true;
      var hostname = window.location.hostname;
      var cookieRemoved = false;
      var index = 0;

      remove = !Drupal.eu_cookie_compliance.isAllowed(i);

      // Remove the cookie if it's not allowed.
      if (remove) {
        while (!cookieRemoved && hostname !== '') {
          // Attempt to remove.
          cookieRemoved = $.removeCookie(i, { domain: '.' + hostname, path: '/' });
          if (!cookieRemoved) {
            cookieRemoved = $.removeCookie(i, { domain: hostname, path: '/' });
          }

          index = hostname.indexOf('.');

          // We can be on a sub-domain, so keep checking the main domain as well.
          hostname = (index === -1) ? '' : hostname.substring(index + 1);
        }

        // Some jQuery Cookie versions don't remove cookies well.  Try again
        // using plain js.
        if (!cookieRemoved) {
          document.cookie = i + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
        }
      }
    }
  }

  // Block cookies when the user hasn't agreed.
  if (drupalSettings.eu_cookie_compliance.automatic_cookies_removal &&
    (
      (drupalSettings.eu_cookie_compliance.method === 'opt_in' && (_euccCurrentStatus === null  || !Drupal.eu_cookie_compliance.hasAgreed()))
      || (drupalSettings.eu_cookie_compliance.method === 'opt_out' && !Drupal.eu_cookie_compliance.hasAgreed() && _euccCurrentStatus !== null)
      || (drupalSettings.eu_cookie_compliance.method === 'categories')
    )) {
    euCookieComplianceBlockCookies = setInterval(Drupal.eu_cookie_compliance.BlockCookies, 5000);
  }

  /**
   * Filter the event listeners by event name and return the list of handlers.
   *
   * @param forEventName
   *
   * @returns {[]}
   */
  var filterQueue = function(){}

  /**
   * Handle event by finding and executing handlers pushed to the queue.
   */
  self.handleEvent = function(){};

  /**
   * Observer: triggered before status gets read from cookie.
   */
  var PreStatusLoad = (function () {
    // Constructor.
    var PreStatusLoad = function () {
      // Observers.
      this.handlers = [];
    };
    // Convenience var for the prototype.
    var prototype = PreStatusLoad.prototype;
    prototype.subscribe = function (fn) {
      this.handlers.push(fn);
    };
    prototype.unsubscribe = function (fn) {
      this.handlers = this.handlers.filter(
          function (item) {
            if (item !== fn) {
              return item;
            }
          }
      );
    };
    prototype.fire = function (o, thisObj) {
      var scope = thisObj || window;
      this.handlers.forEach(function (item) {
        item.call(scope, o);
      });
    };
    return PreStatusLoad;
  })();

  /**
   * Observer: when status was read from cookie and stored in private variable.
   */
  var PostStatusLoad = (function () {
    // Constructor.
    var PostStatusLoad = function () {
      // Observers.
      this.handlers = [];
    };
    // Convenience var for the prototype.
    var prototype = PostStatusLoad.prototype;
    prototype.subscribe = function (fn) {
      this.handlers.push(fn);
    };
    prototype.unsubscribe = function(){};
    prototype.fire = function(){};
    return PostStatusLoad;
  })();

  /**
   * Observer: triggered before status gets saved into cookie.
   */
  var PreStatusSave = (function () {
    // Constructor.
    var PreStatusSave = function () {
      // Observers.
      this.handlers = [];
    };
    // Convenience var for the prototype.
    var prototype = PreStatusSave.prototype;
    prototype.subscribe = function (fn) {
      this.handlers.push(fn);
    };
    prototype.unsubscribe = function (fn) {
      this.handlers = this.handlers.filter(
          function (item) {
            if (item !== fn) {
              return item;
            }
          }
      );
    };
    prototype.fire = function (o, thisObj) {
      var scope = thisObj || window;
      this.handlers.forEach(function (item) {
        item.call(scope, o);
      });
    };
    return PreStatusSave;
  })();

  /**
   * Observer: triggered after status was saved into cookie.
   */
  var PostStatusSave = (function () {
    // Constructor.
    var PostStatusSave = function () {
      // Observers.
      this.handlers = [];
    };
    // Convenience var for the prototype.
    var prototype = PostStatusSave.prototype;
    prototype.subscribe = function (fn) {
      this.handlers.push(fn);
    };
    prototype.unsubscribe = function (fn) {
      this.handlers = this.handlers.filter(
          function (item) {
            if (item !== fn) {
              return item;
            }
          }
      );
    };
    prototype.fire = function (o, thisObj) {
      var scope = thisObj || window;
      this.handlers.forEach(function (item) {
        item.call(scope, o);
      });
    };
    return PostStatusSave;
  })();

  /**
   * Observer: triggered before categories are read from cookie.
   */
  var PrePreferencesLoad = (function () {
    // Constructor.
    var prePreferencesLoad = function () {
      // Observers.
      this.handlers = [];
    };
    // Convenience var for the prototype.
    var prototype = prePreferencesLoad.prototype;
    prototype.subscribe = function (fn) {
      this.handlers.push(fn);
    };
    prototype.unsubscribe = function (fn) {
      this.handlers = this.handlers.filter(
          function (item) {
            if (item !== fn) {
              return item;
            }
          }
      );
    };
    prototype.fire = function (o, thisObj) {
      var scope = thisObj || window;
      this.handlers.forEach(function (item) {
        item.call(scope, o);
      });
    };
    return prePreferencesLoad;
  })();

  /**
   * Observer: triggered after categories were read from cookie.
   */
  var PostPreferencesLoad = (function(){}