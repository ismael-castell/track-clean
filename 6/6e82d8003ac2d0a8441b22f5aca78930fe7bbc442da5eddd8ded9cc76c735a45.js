if ("undefined" === typeof(_etmc)) {
  var _etmc = [];
}

if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

var _etmc_temp = _etmc;
var _etmc = {

  debug: false,

  setup: function(array) {
    var l = array.length;
    for (var i = 0; i < l; i++) {
      this.callFunc(array[i]);
    }
  },

  push: function(){},

  callFunc: function(array) {
    func_name = array[0];
    args = array.slice(1,3);
    this[func_name](args);
  },

  setOrgId: function(args) {
    if(Array.isArray(args[0]) === true) {
      this.org_id = args[0];
    } else {
      this.org_id = [ args[0] ];
    }
  },

  setUserInfo: function(args) {
    var user_info = args[0];
    if(this.user_info && this.user_info.email) {
      user_info.email = this.user_info.email;
    }
    this.user_info = user_info;
  },

  setFirstParty: function(args) {
    this.first_party = args[0];
  },

  setInsecure: function(){},

  doNotTrack: function() {
    this.tracking_disabled = true;
  },

  setConversionTrackingInfoFromUrl: function() {
    this.email_job_id = this.getURLParameter("sfmc_j") || this.getURLParameter("j");
    this.email = this.getURLParameter("sfmc_e") || this.getURLParameter("e");
    if (this.email != null) {
      if (this.user_info) {
        this.user_info.email = this.email;
      } else {
        this.user_info = { "email" : this.email };
      }
    }
    this.email_list_id = this.getURLParameter("sfmc_l") || this.getURLParameter("l");
    this.email_landing_url_id = this.getURLParameter("sfmc_u") || this.getURLParameter("u");
    this.email_job_batch_id = this.getURLParameter("sfmc_jb") || this.getURLParameter("jb");
    this.email_subscriber_id = this.getURLParameter("sfmc_s") || this.getURLParameter("s") || this.getURLParameter("sfmc_sub");
    this.mid = this.getURLParameter("sfmc_mid") || this.getURLParameter("mid");
  },

  isEtConversionTracking: function() {
    return (
      this.email_job_id != null &&
     (this.email != null || this.email_subscriber_id != null) &&
      this.email_list_id != null &&
      this.email_landing_url_id != null &&
      this.email_job_batch_id != null &&
      this.mid != null
    );
  },

  getCurrentLocation: function() {
    return window.location.href;
  },

  trackPageView: function(args) {
    this.setConversionTrackingInfoFromUrl();
    var pageView = args[0] || {};
    if (this.org_id) {
      pageView.title = pageView.title || document.title;
      pageView.url = pageView.url || this.getCurrentLocation();
      pageView.referrer = document.referrer;
      if (this.isEtConversionTracking()) {
        pageView.et_email                = {};
        pageView.et_email.job_id         = this.email_job_id;
        pageView.et_email.list_id        = this.email_list_id.replace(/\D+/, '');
        pageView.et_email.landing_url_id = this.email_landing_url_id;
        pageView.et_email.job_batch_id   = this.email_job_batch_id;
        pageView.et_email.subscriber_id  = this.email_subscriber_id;
        pageView.et_email.mid            = this.mid;
      }
      this.sendDataWithImage("track_page_view", pageView);
    }
  },

  trackCart: function(args) {
    var cart = args[0] || {};
    if (this.org_id) {
      var cartInfo = this.standardizeCart(cart);
      if ("clear_cart" in cart) {
        cartInfo.clear_cart = cart.clear_cart;
      }
      cartInfo.url = this.getCurrentLocation();
      this.sendDataWithImage("track_cart", cartInfo);
    }
  },

  trackConversion: function(args) {
    var cart = args[0] || [];
    var opts = args[1];
    if (this.org_id) {
      var cartInfo = this.standardizeCart(cart);
      if (cart["details"]) {
        cartInfo.details = cart["details"];
      } else if (opts) {
        if ("details" in opts) {
          cartInfo.details = opts.details;
        }
        if ("currency_code" in opts) {
          cartInfo.currency_code = opts.currency_code;
        }
      }
      cartInfo.url = this.getCurrentLocation();
      this.sendDataWithImage("track_conversion", cartInfo);
    }
  },

  trackEvent: function(args) {
    var customEvent = args[0] || {};
    var customName = customEvent.name;
    var newEvent = {};
    if (this.org_id) {
      if (customName !== null) {
        newEvent.event_name = customName;
        if (customEvent.details) {
          newEvent.details = customEvent.details;
        }
        this.sendDataWithImage("track_event", newEvent);
      }
    }
  },

  trackWishlist: function(args) {
    var wishlist = args[0] || [];
    if (this.org_id) {
      if (wishlist != []) {
        this.sendDataWithImage("track_wishlist", wishlist);
      }
    }
  },

  trackRating: function(args){
    var rating = args[0] || {};
    if (this.org_id){
      if (rating.rating != null) {
        this.sendDataWithImage("track_rating", rating);
      }
    }
  },

  sendDataWithImage: function(endpoint, args) {
    if (this.user_info) {
      args.user_info = this.user_info;
    }
    if (this.org_id.length > 1) {
      temp_org_id = [this.org_id.shift()];
      args.child_ids = this.org_id;
      this.org_id = temp_org_id;
    }

    var collectData = encodeURIComponent(JSON.stringify(args));
    var protocolPrepend = 'https';
    if (this.insecure === true && document.location.protocol === 'http:') protocolPrepend = 'http';
    if (this.first_party) {
      collect_url = this.first_party;
    } else {
      collect_url = 'nova.collect.igodigital.com';
    }

    var image_src = protocolPrepend + '://' + collect_url + '/c2/' + this.org_id + '/' + endpoint +'?payload=' + collectData;
    var image_tag = document.createElement('img');
    image_tag.src = image_src;
    image_tag.style.display = 'none';
    image_tag.width = '0';
    image_tag.height = '0';
    image_tag.title = 'blank image';
    image_tag.alt = '';
    image_tag.setAttribute('aria-hidden', 'true');

    if (this.debug) {
      console.log(args);
      console.log(image_tag.outerHTML);
    } else {
      var etmc_element = document.createElement('div');
      etmc_element.style.display = "none";
      etmc_element.innerHTML = image_tag.outerHTML;
      document.body.appendChild(etmc_element);
    }
  },

  standardizeCart: function(){}