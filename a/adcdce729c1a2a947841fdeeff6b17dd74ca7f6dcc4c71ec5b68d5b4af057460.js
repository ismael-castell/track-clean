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

(function ($, Drupal, drupalSettings, cookies) {

  'use strict';
  var euCookieComplianceBlockCookies;
  var cookieValueDisagreed = (typeof drupalSettings.eu_cookie_compliance.cookie_value_disagreed === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_value_disagreed === '') ? '0' : drupalSettings.eu_cookie_compliance.cookie_value_disagreed;
  var cookieValueAgreedShowThankYou = (typeof drupalSettings.eu_cookie_compliance.cookie_value_agreed_show_thank_you === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_value_agreed_show_thank_you === '') ? '1' : drupalSettings.eu_cookie_compliance.cookie_value_agreed_show_thank_you;
  var cookieValueAgreed = (typeof drupalSettings.eu_cookie_compliance.cookie_value_agreed === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_value_agreed === '') ? '2' : drupalSettings.eu_cookie_compliance.cookie_value_agreed;

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

  Drupal.eu_cookie_compliance.execute = function(){};

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

  Drupal.eu_cookie_compliance.setAcceptedCategories = function (categories) {
    // Make a new observer & fire it to allow other scripts to hook in.
    var prePreferencesSaveObject = new PrePreferencesSave();
    self.handleEvent('prePreferencesSave', prePreferencesSaveObject);

    var date = new Date();
    var domain = drupalSettings.eu_cookie_compliance.domain ? drupalSettings.eu_cookie_compliance.domain : '';
    var path = drupalSettings.eu_cookie_compliance.domain_all_sites ? '/' : drupalSettings.path.baseUrl;
    var cookieName = (typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed-categories' : drupalSettings.eu_cookie_compliance.cookie_name + '-categories';
    if (path.length > 1) {
      var pathEnd = path.length - 1;
      if (path.lastIndexOf('/') === pathEnd) {
        path = path.substring(0, pathEnd);
      }
    }
    var categoriesString = JSON.stringify(categories);
    var cookie_session = parseInt(drupalSettings.eu_cookie_compliance.cookie_session);
    if (cookie_session) {
      cookies.set(cookieName, categoriesString, { path: path, domain: domain, sameSite: 'strict' });
    }
    else {
      var lifetime = parseInt(drupalSettings.eu_cookie_compliance.cookie_lifetime);
      date.setDate(date.getDate() + lifetime);
      cookies.set(cookieName, categoriesString, { expires: date, path: path, domain: domain, sameSite: 'strict' });
    }
    _euccSelectedCategories = categories;
    $(document).trigger('eu_cookie_compliance.changePreferences', [categories]);

    // TODO: Store categories with consent if applicable?
    // Make a new observer & fire it to allow other scripts to hook in.
    var postPreferencesSaveObject = new PostPreferencesSave();
    self.handleEvent('postPreferencesSave', postPreferencesSaveObject);
  };

  Drupal.eu_cookie_compliance.hasAgreed = function(){};

  Drupal.eu_cookie_compliance.hasAgreedWithCategory = function(){};

  Drupal.eu_cookie_compliance.showBanner = function(){};

  Drupal.eu_cookie_compliance.cookiesEnabled = function(){};

  Drupal.eu_cookie_compliance.cookieMatches = function(){};

  Drupal.eu_cookie_compliance.isAllowed = function(){}

  Drupal.eu_cookie_compliance.getVersion = function () {
    // Only get cookie-agreed-version version cookie, if user agreed.
    if (!Drupal.eu_cookie_compliance.hasAgreed()) {
      return false;
    }

    var cookieName = (typeof drupalSettings.eu_cookie_compliance.cookie_name === 'undefined' || drupalSettings.eu_cookie_compliance.cookie_name === '') ? 'cookie-agreed-version' : drupalSettings.eu_cookie_compliance.cookie_name + '-version';
    return cookies.get(cookieName);
  };

  Drupal.eu_cookie_compliance.setVersion = function(){};

  // Load blocked scripts if the user has agreed to being tracked.
  var euCookieComplianceHasLoadedScripts = false;
  var euCookieComplianceHasLoadedScriptsForCategory = [];
  $(function(){});

  Drupal.eu_cookie_compliance.BlockCookies = function(){}

  // Block cookies when the user hasn't agreed.
  if ((typeof drupalSettings.eu_cookie_compliance !== 'undefined') &&
    drupalSettings.eu_cookie_compliance.automatic_cookies_removal &&
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
  var PostPreferencesLoad = (function () {
    // Constructor.
    var postPreferencesLoad = function () {
      // Observers.
      this.handlers = [];
    };
    // Convenience var for the prototype.
    var prototype = postPreferencesLoad.prototype;
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
    return postPreferencesLoad;
  })();

  /**
   * Observer: triggered before categories are being saved to cookie.
   */
  var PrePreferencesSave = (function () {
    // Constructor.
    var prePreferencesSave = function () {
      // Observers.
      this.handlers = [];
    };
    // Convenience var for the prototype.
    var prototype = prePreferencesSave.prototype;
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
    return prePreferencesSave;
  })();

  /**
   * Observer: triggered after categories were saved to cookie.
   */
  var PostPreferencesSave = (function(){}