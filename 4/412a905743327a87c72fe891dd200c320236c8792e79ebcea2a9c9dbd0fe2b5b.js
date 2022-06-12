var BITLY = {};
(function($, BITLY) {
  var _xsrf = document.cookie.match("\\b\_xsrf=([^;]*)\\b"),
  _xsrf = (_xsrf ? _xsrf[1] : undefined);
  var cookieName = 'anon_shortlinks';
  var cookieValue = document.cookie.match('(^|[^;]+)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
  var shortlinks = cookieValue ? cookieValue[2].split(',') : [];

  $.ajaxSetup({
    cache : false,
    timeout : 12000,
    type: 'POST',
    dataType: 'json',
    traditional: true
  });
  
  function shorten(longUrl, success, error) {
    var options = {
      url: '/data/anon_shorten',
      data: { url: longUrl },
      beforeSend : function(XMLHttpRequest) {
        XMLHttpRequest.setRequestHeader('X-XSRFToken', _xsrf);
      },
      success: function(res) {
        if (res && res.data && res.status_code == 200) {
          handleShortenSuccess(res, success);
        } else {
          handleError(res, error);
        }
      },
      error: function(res) { handleError(res, error); }
    };
    
    $.ajax(options);
  }


  function handleShortenSuccess(res, cb) {
    var data = res.data;
    var hash = getHash(data.link);
    shortlinks.push(data.link);

    document.cookie = cookieName + "=" + shortlinks.join(",") + ";max-age=31536000";

    var result = {
      data: {
        hash: hash,
        long_url: data.long_url,
        short_url: data.link
      },
      status_code: res.status_code,
      status_txt: res.status_txt
    };

    cb(result);
  }

  function getHistory(hashes, success, error) {
    var options = {
      url: '/data/info',
      data: {
        hash: hashes,
        _xsrf: _xsrf
      },
      beforeSend : function(XMLHttpRequest) {
        XMLHttpRequest.setRequestHeader('X-XSRFToken', _xsrf);
      },
      success: function(res) {
        if (res && res.data && res.status_code == 200) {
          handleHistorySuccess(res, hashes, success, error);
        } else {
          handleError(res, error);
        }
      },
      error: function(res) { handleError(res, error); }
    };

    $.ajax(options);
  }
  

  function handleHistorySuccess(res, hashes, success) {
    var result = {};
    result.data = {};
    result.status_code = res.status_code;
    result.status_txt = res.status_txt;
    for (var i = 0; i < res.data.info.length; i++) {
      var item = res.data.info[i];
      var data = {
        hash: item.hash,
        long_url: item.long_url,
        title: item.title,
        short_url: getShortLink(item.hash) || 'https//bit.ly/' + item.hash
      }
      result.data[item.hash] = data;
    }

    success(result);
  }

  function handleError(res, cb) {
    var results = res;
    if (res && res.status_txt) {
      results.message = getFriendlyError(res.status_txt);
    }
    cb(results);
  }
  
  function(){}