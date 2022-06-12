(function zTrkInit(w, d, t, s, zsdks) {
  s = d.getElementsByTagName('script')[0];

  if (!w.ZA) {
    if (!t) {
      zsdks = d.createElement('script');
      zsdks.type = 'text/javascript';
      zsdks.src = 'https://stc.za.zaloapp.com/v3/za.js?v=2.0';
      zsdks.async = false;
      s.parentNode.insertBefore(zsdks, s);
      t = setInterval(function () {
        zTrkInit(w, d, t);
      }, 2000);
    }

    var q = w.ztr.queue || [];

    w.ztr = function (action, args) {
      w.ztr.queue.push({
        'action': 'track',
        'event': event,
        'arguments': args
      });
    };

    w.ztr.queue = q || [];
    return;
  }

  if (t) {
    clearInterval(t);
  }

  var q = w.ztr.queue || [];

  w.ztr = function (action, event, args) {
    switch (action) {
      case 'init':
        localStorage.setItem('zdmp_px_id', '' + event);
        break;

      case 'track':
        if (!w.ZA) {
          w.ztr.queue = w.ztr.queue || [];
          w.ztr.queue.push({
            'action': 'track',
            'event': event,
            'arguments': args
          });
          zTrkInit(w, d);
          return;
        }

        var eventString = event ? '&event=' + event : '';
        var queryString = args ? Object.keys(args).map(function(){}).join('') : '';
        var pixelId = localStorage.getItem('zdmp_px_id');

        if (!pixelId) {
          console.log('Pixel ID is not correctly initialized.');
          return;
        }

        w.ZA.getVisitorID(function () {
          var pxImg = new Image();
          pxImg.src = 'https://px.za.zalo.me/tr?id=' + pixelId + '&version=1.0' + eventString + queryString + '&zscript=1';
          var vid = getCookie('__zi');
          if (vid) {
            pxImg.src += '&vid=' + vid;
          }
        });
        break;

      default:
        console.log('Unsupported action: ' + action);
    }
  };

  ztr.callMethod = ztr;

  var getCookie = function(cname) {
    var cookies = document.cookie.split(';');
    var sig = cname + '=';
    for (var i = 0; i < cookies.length; i++) {
      var c = cookies[i].trim();
      if (c.indexOf(sig) === 0) {
        return c.substring(sig.length, c.length);
      }
    }
    return '';
  };

  if (q.length) {
    q.forEach(function(){}