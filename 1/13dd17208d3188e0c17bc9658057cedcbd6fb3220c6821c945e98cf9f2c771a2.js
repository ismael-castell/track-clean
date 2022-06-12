var WLike = {

  loading: false,
  hideCallback: null,
  nextStats: false,
  checkboxEl: null,
  mainEl: null,

  init: function() {
    if (!window.fastXDM) return;

    this.override('lite.js');

    this.checkboxEl = ge('checkbox');
    this.mainEl = ge('main');

    var tooltipInited = false;
    addEvent(this.mainEl, 'mouseover', function (e) {
      if (noAuthVal || !cur.Rpc) return;
      if (!tooltipInited) {
        tooltipInited = true;
        setTimeout(cur.Rpc.callMethod.bind(cur.Rpc, 'initTooltip', counter), 100);
      } else if (counter) {
        setTimeout(cur.Rpc.callMethod.bind(cur.Rpc, 'showTooltip'), 100);
      }
    });

    addEvent(this.checkboxEl, 'mouseup mousedown mouseover mouseout click', function (e) {
      if (e.type == 'mouseup' || e.type == 'mousedown') {
        window[e.type == 'mousedown' ? 'addClass' : 'removeClass'](this.checkboxEl, 'checkbox_pressed');
        return;
      }
      if (e.type == 'mouseover' || e.type == 'mouseout') {
        var isOver = e.type == 'mouseover';
        window[isOver ? 'addClass' : 'removeClass'](this, 'checkbox_over');
        if (!isOver) removeClass(this.checkboxEl, 'checkbox_pressed');
        return;
      }
      if (window.noAuthVal) return Widgets.oauth();
      var val = !hasClass(this.checkboxEl, 'checked');
      if (!WLike.saveLike(val)) return;
      val ? addClass(this.checkboxEl, 'checked') : removeClass(this.checkboxEl, 'checked');
      return cancelEvent(e);
    }.bind(this));

    cur.RpcMethods = {
      onInit: function() {},
      share: WLike.shareThisPage,
      shared: WLike.sharedThisPage,
      openFullList: openFullList,
      hide: function () {
        if (this.hideCallback) this.hideCallback();
      }.bind(this)
    };

    cur.Rpc = new fastXDM.Client(cur.RpcMethods, {
      safe: true,
      sameOrigin: partConfigEnabled('widgets_xdm_same_origin'),
      unsafeMethods: ['hide'],
    });

    setTimeout(function () {
      this.resizeWidget();
      setStyle('stats_text', 'visibility', 'visible');
      setInterval(this.resizeWidget.bind(this), 1000);
    }.bind(this), 0);
  },

  saveLike: function(val) {
    if (this.loading) return false;
    this.loading = true;
    cur.captchaHide = cur.recaptchaHide = function() {
      this.loading = false;
    }.bind(this);

    counter += val ? 1 : -1;

    cur.Rpc.callMethod('proxy', val ? 'showUser' : 'hideUser');
    if (val && counter == 1) {
      cur.Rpc.callMethod('showTooltip', true);
    } else if (!counter) {
      cur.Rpc.callMethod('hideTooltip', true);
    }
    !val && cur.Rpc.callMethod('proxy', 'unpublish');

    ajax.post('widget_like.php', {
      act: 'a_like',
      value: val ? 1 : 0,
      hash: likeHash,
      url: likeURL,
      app: _aid,
      pageQuery: _pageQuery,
      s: cur.shorter ? 1 : 0,
      verb: cur.verb
    }, {
      onDone: function(resp) {
        this.loading = false;
        delete cur.captchaHide;
        delete cur.recaptchaHide;
        WLike.updateStats(resp, true);
        cur.Rpc.callMethod('proxy', 'update', resp);
        this.nextStats = extend({}, resp, {stats: resp.next_stats});
        cur.Rpc.callMethod('publish', (val ? 'widgets.like.liked' : 'widgets.like.unliked'), resp.num);
      }.bind(this),
      onFail: function() {
        this.loading = false;
        delete cur.captchaHide;
        delete cur.recaptchaHide;
      }.bind(this),
      hideProgress: function () {
        hide('loading');
      }
    });

    if (hasClass(this.mainEl, 'like_dived') && ge('stats_text')) {
      if (this.hideCallback !== null) {
        this.hideCallback = null;
      } else {
        this.hideCallback = function () {
          this.hideCallback = null;
          if (this.nextStats) {
            WLike.updateStats(this.nextStats);
            this.resizeWidget();
          }
          this.nextStats = false;
        }.bind(this);
      }
      if (!val && this.hideCallback) {
        setTimeout(this.hideCallback, 200);
        this.hideCallback = null;
      }
    }

    return true;
  },

  updateStats: function(stats, noAnim) {
    var statsNum = ge('stats_num');
    statsNum && animateCount(statsNum, (stats.num ? stats.num_text || '' : '+1'), {str: 1, leftOnly: 1, onDone: function(){}.bind(this)});
    counter = stats.num;
    if (ge('stats_text') && stripHTML(ge('stats_text').innerHTML).toLowerCase() != stripHTML(stats.stats).toLowerCase()) {
      var el = ge('stats_text');
      if (noAnim) {
        el.innerHTML = stats.stats || '';
        this.resizeWidget();
        return;
      }
      if (!el.innerHTML) {
        setStyle(el, {opacity: 0});
        el.innerHTML = stats.stats;
        animate(el, {opacity: 1}, 100);
      } else {
        animate(el, {opacity: 0}, 100, function () {
          if (!(el.innerHTML = stats.stats)) return;
          animate(el, {opacity: 1}, 100);
        });
      }
      setTimeout(this.resizeWidget.bind(this), 150);
    }
  },

  shareThisPage: function(val, hash) {
    if (hash != shareData.wall_hash) return;

    ajax.post('widget_like.php', {
      act: 'a_recommend',
      hash: shareData.wall_hash,
      description: shareData.description,
      title: shareData.title,
      url: likeURL,
      text: shareData.text,
      val: val ? 1 : 0,
      app: _aid,
      pageQuery: _pageQuery,
      s: cur.shorter ? 1 : 0
    }, {
      onDone: function (text) {
        WLike.sharedThisPage(text, val);
      }
    });
    if (val && !hasClass(this.checkboxEl, 'checked')) {
      addClass(this.checkboxEl, 'checked');
      counter++;
    }
  },

  sharedThisPage: function(resp, val) {
    if (val && !hasClass(this.checkboxEl, 'checked')) {
      addClass(this.checkboxEl, 'checked');
      counter++;
    }

    cur.Rpc.callMethod('publish', (val ? 'widgets.like.shared' : 'widgets.like.unshared'), resp.num);
  },

  showMore: function() {
    if (cur.loadingMore) return false;
    cur.loadingMore = true;

    ajax.post('widget_like.php', {
      act: 'a_stats_box',
      offset: cur.shown,
      pageQuery: _pageQuery,
      app: _aid,
      obj: cur.obj,
      from: cur.from,
      tab: cur.tab || '',
      check_hash: cur.likeCheckHash || ''
    }, {
      onDone: function(rows, shown, more) {
        ge('like_users_cont').appendChild(cf(rows));
        cur.shown = shown;
        more ? show('like_more_link') : hide('like_more_link');
        cur.loadingMore = false;
      },
      showProgress: function() {
        lockButton('like_more_link');
        addClass('like_more_link', 'flat_button_loading');
      },
      hideProgress: function(){}