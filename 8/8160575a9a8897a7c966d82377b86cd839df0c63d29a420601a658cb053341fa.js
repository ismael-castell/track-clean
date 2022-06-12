(function() { /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r;
function aa(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
  }
}
var ba = 'function' == typeof Object.defineProperties ?
    Object.defineProperty :
    function(a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a
    };
function(){}
var da = ca(this);
function(){}
t('Symbol', function(a) {
  function b(e) {
    if (this instanceof b) throw new TypeError('Symbol is not a constructor');
    return new c('jscomp_symbol_' + (e || '') + '_' + d++, e)
  }
  function c(e, f) {
    this.f = e;
    ba(this, 'description', {configurable: !0, writable: !0, value: f})
  }
  if (a) return a;
  c.prototype.toString = function() {
    return this.f
  };
  var d = 0;
  return b
});
t('Symbol.iterator', function(a) {
  if (a) return a;
  a = Symbol('Symbol.iterator');
  for (
      var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'
                  .split(' '),
          c = 0;
      c < b.length; c++) {
    var d = da[b[c]];
    'function' === typeof d && 'function' != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function() {
            return ea(aa(this))
          }
        })
  }
  return a
});
function(){}
function(){}
function fa(a) {
  for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
  return c
}
var ha = 'function' == typeof Object.create ? Object.create : function(a) {
  function b() {}
  b.prototype = a;
  return new b
}, ia;
if ('function' == typeof Object.setPrototypeOf)
  ia = Object.setPrototypeOf;
else {
  var ja;
  a: {
    var ka = {a: !0}, la = {}; try {
      la.__proto__ = ka;
      ja = la.a;
      break a
    } catch (a) {} ja = !1
  } ia = ja ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
    return a
  } : null
}
var ma = ia;
function(){}
function(){}
function(){}
na.prototype.D = function(a) {
  this.g = a
};
function(){}
na.prototype['return'] = function(){};
function(){}
na.prototype.G = function(a) {
  this.f = a
};
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
t('Reflect.setPrototypeOf', function(){});
function(){}
t('String.prototype.endsWith', function(){});
t('String.prototype.startsWith', function(){});
t('Object.setPrototypeOf', function(a) {
  return a || ma
});
function A(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
var xa = 'function' == typeof Object.assign ? Object.assign : function(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (d)
      for (var e in d) A(d, e) && (a[e] = d[e])
  }
  return a
};
t('Object.assign', function(a) {
  return a || xa
});
t('Promise', function(){});
function(){}
t('Array.prototype.keys', function(a) {
  return a ? a : function() {
    return ya(this, function(b) {
      return b
    })
  }
});
t('Array.prototype.values', function(a) {
  return a ? a : function() {
    return ya(this, function(b, c) {
      return c
    })
  }
});
t('Object.is', function(a) {
  return a ? a : function(b, c) {
    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
  }
});
t('Array.prototype.includes', function(){});
t('String.prototype.includes', function(a) {
  return a ? a : function(b, c) {
    return -1 !== wa(this, b, 'includes').indexOf(b, c || 0)
  }
});
t('Array.prototype.entries', function(a) {
  return a ? a : function() {
    return ya(this, function(b, c) {
      return [b, c]
    })
  }
});
t('WeakMap', function(){});
t('Map', function(){});
t('Object.entries', function(a) {
  return a ? a : function(b) {
    var c = [], d;
    for (d in b) A(b, d) && c.push([d, b[d]]);
    return c
  }
});
t('Set', function(){});
var B = this || self;
function(){}
function za() {}
function(){}
function Ba(a) {
  var b = Aa(a);
  return 'array' == b || 'object' == b && 'number' == typeof a.length
}
function Ca(a) {
  var b = typeof a;
  return 'object' == b && null != a || 'function' == b
}
function Da(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function Ea(a, b, c) {
  if (!a) throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function(){}
function(){}
function(){}
function Ga(a) {
  return a
}
function Ha(a) {
  var b = null, c = B.trustedTypes;
  if (!c || !c.createPolicy) return b;
  try {
    b = c.createPolicy(
        a, {createHTML: Ga, createScript: Ga, createScriptURL: Ga})
  } catch (d) {
    B.console && B.console.error(d.message)
  }
  return b
};
function Ia(a) {
  if (Error.captureStackTrace)
    Error.captureStackTrace(this, Ia);
  else {
    var b = Error().stack;
    b && (this.stack = b)
  }
  a && (this.message = String(a))
}
E(Ia, Error);
Ia.prototype.name = 'CustomError';
function Ja(a) {
  a = a.url;
  var b = /[?&]dsh=1(&|$)/.test(a);
  this.i = !b && /[?&]ae=1(&|$)/.test(a);
  this.j = !b && /[?&]ae=2(&|$)/.test(a);
  if ((this.f = /[?&]adurl=([^&]*)/.exec(a)) && this.f[1]) {
    try {
      var c = decodeURIComponent(this.f[1])
    } catch (d) {
      c = null
    }
    this.g = c
  }
};
var Ka = Array.prototype.indexOf ? function(a, b) {
  return Array.prototype.indexOf.call(a, b, void 0)
} : function(){}, G = Array.prototype.forEach ? function(a, b, c) {
  Array.prototype.forEach.call(a, b, c)
} : function(a, b, c) {
  for (var d = a.length, e = 'string' === typeof a ? a.split('') : a, f = 0;
       f < d; f++)
    f in e && b.call(c, e[f], f, a)
}, La = Array.prototype.filter ? function(a, b) {
  return Array.prototype.filter.call(a, b, void 0)
} : function(a, b) {
  for (var c = a.length, d = [], e = 0,
           f = 'string' === typeof a ? a.split('') : a, g = 0;
       g < c; g++)
    if (g in f) {
      var h = f[g];
      b.call(void 0, h, g, a) && (d[e++] = h)
    }
  return d
}, Ma = Array.prototype.reduce ? function(a, b, c) {
  return Array.prototype.reduce.call(a, b, c)
} : function(){};
function Na(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c
  }
  return []
}
function(){};
function(){}
function(){}
var Sa =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ');
function(){};
var Ua;
var Va = String.prototype.trim ? function(a) {
  return a.trim()
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
function(){}
var Xa = /&/g, Ya = /</g, Za = />/g, $a = /"/g, ab = /'/g, bb = /\x00/g,
    cb = /[\x00&<>"']/;
function(){}
H.prototype.P = !0;
H.prototype.O = function() {
  return this.f.toString()
};
H.prototype.aa = !0;
H.prototype.Z = function() {
  return 1
};
var eb =
        /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
    fb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, db = {},
    hb = new H('about:invalid#zClosurez', db);
var I;
a: {
  var ib = B.navigator; if (ib) {
    var jb = ib.userAgent;
    if (jb) {
      I = jb;
      break a
    }
  } I = ''
} function(){};
function(){}
kb.prototype.aa = !0;
kb.prototype.Z = function() {
  return this.g
};
kb.prototype.P = !0;
kb.prototype.O = function() {
  return this.f.toString()
};
var lb = {};
function mb(a, b) {
  void 0 === Ua && (Ua = Ha('goog#html'));
  var c = (c = Ua) ? c.createHTML(a) : a;
  return new kb(c, b, lb)
};
function(){};
var ob =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function(){}
function(){}
function(){}
function(){}
var ub = /#|$/;
function(){};
var vb = J('Opera'), wb = J('Trident') || J('MSIE'), xb = J('Edge'),
    yb = J('Gecko') &&
    !(-1 != I.toLowerCase().indexOf('webkit') && !J('Edge')) &&
    !(J('Trident') || J('MSIE')) && !J('Edge'),
    zb = -1 != I.toLowerCase().indexOf('webkit') && !J('Edge');
function Ab() {
  var a = B.document;
  return a ? a.documentMode : void 0
}
var Bb;
a: {
  var Cb = '',
  Db =
      function() {
        var a = I;
        if (yb) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (xb) return /Edge\/([\d\.]+)/.exec(a);
        if (wb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (zb) return /WebKit\/(\S+)/.exec(a);
        if (vb) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();
  Db && (Cb = Db ? Db[1] : '');
  if (wb) {
    var Eb = Ab();
    if (null != Eb && Eb > parseFloat(Cb)) {
      Bb = String(Eb);
      break a
    }
  } Bb = Cb
} var Fb = Bb,
      Gb;
if (B.document && wb) {
  var Hb = Ab();
  Gb = Hb ? Hb : parseInt(Fb, 10) || void 0
} else
  Gb = void 0;
var Ib = Gb;
var Jb = J('iPhone') && !J('iPod') && !J('iPad') || J('iPod'), Kb = J('iPad');
var Lb = {}, Mb = null;
var L = window;
function(){}
function(){}
function(){}
var Pb = {};
function(){}
r = Rb.prototype;
r.isEnabled = function() {
  return navigator.cookieEnabled
};
r.set = function(){};
r.get = function(){};
r.remove = function(){};
r.isEmpty = function() {
  return !this.f.cookie
};
r.clear = function(){};
var Sb = new Rb('undefined' == typeof document ? null : document);
var Tb = !wb || 9 <= Number(Ib);
function Ub(a, b) {
  this.width = a;
  this.height = b
}
r = Ub.prototype;
r.clone = function() {
  return new Ub(this.width, this.height)
};
r.aspectRatio = function() {
  return this.width / this.height
};
r.isEmpty = function(){};
r.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
r.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
r.round = function(){};
function(){}
var Wb = {
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  colspan: 'colSpan',
  frameborder: 'frameBorder',
  height: 'height',
  maxlength: 'maxLength',
  nonce: 'nonce',
  role: 'role',
  rowspan: 'rowSpan',
  type: 'type',
  usemap: 'useMap',
  valign: 'vAlign',
  width: 'width'
};
function(){}
function(){}
function(){};
function(){}
function(){}
var ac = {
  ya: 'allow-forms',
  za: 'allow-modals',
  Aa: 'allow-orientation-lock',
  Ba: 'allow-pointer-lock',
  Ca: 'allow-popups',
  Da: 'allow-popups-to-escape-sandbox',
  Ea: 'allow-presentation',
  Fa: 'allow-same-origin',
  Ga: 'allow-scripts',
  Ha: 'allow-top-navigation',
  Ia: 'allow-top-navigation-by-user-activation'
},
    cc = function(a) {
      var b = !1, c;
      return function() {
        b || (c = a(), b = !0);
        return c
      }
    }(function() {
      return bc()
    });
function(){};
function(){}
ec.prototype.i = !1;
ec.prototype.dispose = function() {
  this.i || (this.i = !0, this.L())
};
ec.prototype.L = function() {
  if (this.j)
    for (; this.j.length;) this.j.shift()()
};
var fc = {};
function gc() {}
function(){}
v(hc, gc);
hc.prototype.toString = function() {
  return this.f
};
new hc('about:blank', fc);
new hc('about:invalid#zTSz', fc);
function ic(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = zb && !b && !c;
  if ((void 0 === b || d) && a.getBoundingClientRect) {
    try {
      var e = a.getBoundingClientRect()
    } catch (f) {
      e = { left: 0, top: 0, right: 0, bottom: 0 }
    }
    return new Ub(e.right - e.left, e.bottom - e.top)
  }
  return new Ub(b, c)
};
var jc = (new Date).getTime();
function kc(a) {
  if (!a) return '';
  a = a.split('#')[0].split('?')[0];
  a = a.toLowerCase();
  0 == a.indexOf('//') && (a = window.location.protocol + a);
  /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
  var b = a.substring(a.indexOf('://') + 3), c = b.indexOf('/');
  -1 != c && (b = b.substring(0, c));
  a = a.substring(0, a.indexOf('://'));
  if ('http' !== a && 'https' !== a && 'chrome-extension' !== a &&
      'moz-extension' !== a && 'file' !== a && 'android-app' !== a &&
      'chrome-search' !== a && 'chrome-untrusted' !== a && 'chrome' !== a &&
      'app' !== a && 'devtools' !== a)
    throw Error('Invalid URI scheme in origin: ' + a);
  c = '';
  var d = b.indexOf(':');
  if (-1 != d) {
    var e = b.substring(d + 1);
    b = b.substring(0, d);
    if ('http' === a && '80' !== e || 'https' === a && '443' !== e) c = ':' + e
  }
  return a + '://' + b + c
}; /*
   gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var lc = window, mc = document, nc = lc.location;
function oc() {}
var pc = /\[native code\]/;
function M(a, b, c) {
  return a[b] = a[b] || c
}
function qc(a) {
  a = a.sort();
  for (var b = [], c = void 0, d = 0; d < a.length; d++) {
    var e = a[d];
    e != c && b.push(e);
    c = e
  }
  return b
}
function N() {
  var a;
  if ((a = Object.create) && pc.test(a))
    a = a(null);
  else {
    a = {};
    for (var b in a) a[b] = void 0
  }
  return a
}
var rc = M(lc, 'gapi', {});
var P;
P = M(lc, '___jsl', N());
M(P, 'I', 0);
M(P, 'hel', 10);
function sc() {
  var a = nc.href;
  if (P.dpo)
    var b = P.h;
  else {
    b = P.h;
    var c = RegExp('([#].*&|[#])jsh=([^&#]*)', 'g'),
        d = RegExp('([?#].*&|[?#])jsh=([^&#]*)', 'g');
    if (a = a && (c.exec(a) || d.exec(a))) try {
        b = decodeURIComponent(a[2])
      } catch (e) {
      }
  }
  return b
}
function tc(a) {
  var b = M(P, 'PQ', []);
  P.PQ = [];
  var c = b.length;
  if (0 === c)
    a();
  else
    for (var d = 0, e = function(){}, f = 0; f < c; f++)
      b[f](e)
}
function uc(a) {
  return M(M(P, 'H', N()), a, N())
};
function(){};
function(){}
function(){};
function(){};
var zc = M(P, 'perf', N());
M(zc, 'g', N());
var Ac = M(zc, 'i', N());
M(zc, 'r', []);
N();
N();
function Bc(a, b, c) {
  b && 0 < b.length &&
      (b = Cc(b), c && 0 < c.length && (b += '___' + Cc(c)),
       28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b,
       b = M(Ac, '_p', N()), M(b, c, N())[a] = (new Date).getTime(), b = zc.r,
       'function' === typeof b ? b(a, '_p', c) : b.push([a, '_p', c]))
}
function Cc(a) {
  return a.join('__').replace(/\./g, '_').replace(/\-/g, '_').replace(/,/g, '_')
};
var Dc = N(), Ec = [];
function Q(a) {
  throw Error('Bad hint' + (a ? ': ' + a : ''));
}
Ec.push([
  'jsl',
  function(){}
]);
var Fc = /^(\/[a-zA-Z0-9_\-]+)+$/, Gc = [/\/amp\//, /\/amp$/, /^\/amp$/],
    Hc = /^[a-zA-Z0-9\-_\.,!]+$/, Ic = /^gapi\.loaded_[0-9]+$/,
    Jc = /^[a-zA-Z0-9,._-]+$/;
function Kc(a, b, c, d) {
  var e = a.split(';'), f = e.shift(), g = Dc[f], h = null;
  g ? h = g(e, b, c, d) : Q('no hint processor for: ' + f);
  h || Q('failed to generate load url');
  b = h;
  c = b.match(Lc);
  (d = b.match(Mc)) && 1 === d.length && Nc.test(b) && c && 1 === c.length ||
      Q('failed sanity: ' + a);
  return h
}
function Oc(a, b, c, d) {
  function e(f) {
    return encodeURIComponent(f).replace(/%2C/g, ',')
  }
  a = Pc(a);
  Ic.test(c) || Q('invalid_callback');
  b = Qc(b);
  d = d && d.length ? Qc(d) : null;
  return [
    encodeURIComponent(a.pathPrefix).replace(/%2C/g, ',').replace(/%2F/g, '/'),
    '/k=', e(a.version), '/m=', e(b), d ? '/exm=' + e(d) : '',
    '/rt=j/sv=1/d=1/ed=1', a.X ? '/am=' + e(a.X) : '',
    a.ha ? '/rs=' + e(a.ha) : '', a.ja ? '/t=' + e(a.ja) : '', '/cb=', e(c)
  ].join('')
}
function Pc(a) {
  '/' !== a.charAt(0) && Q('relative path');
  for (var b = a.substring(1).split('/'), c = []; b.length;) {
    a = b.shift();
    if (!a.length || 0 == a.indexOf('.'))
      Q('empty/relative directory');
    else if (0 < a.indexOf('=')) {
      b.unshift(a);
      break
    }
    c.push(a)
  }
  a = {};
  for (var d = 0, e = b.length; d < e; ++d) {
    var f = b[d].split('='), g = decodeURIComponent(f[0]),
        h = decodeURIComponent(f[1]);
    2 == f.length && g && h && (a[g] = a[g] || h)
  }
  b = '/' + c.join('/');
  Fc.test(b) || Q('invalid_prefix');
  c = 0;
  for (d = Gc.length; c < d; ++c) Gc[c].test(b) && Q('invalid_prefix');
  c = Rc(a, 'k', !0);
  d = Rc(a, 'am');
  e = Rc(a, 'rs');
  a = Rc(a, 't');
  return {
    pathPrefix: b, version: c, X: d, ha: e, ja: a
  }
}
function Qc(a) {
  for (var b = [], c = 0, d = a.length; c < d; ++c) {
    var e = a[c].replace(/\./g, '_').replace(/-/g, '_');
    Jc.test(e) && b.push(e)
  }
  return b.join(',')
}
function Rc(a, b, c) {
  a = a[b];
  !a && c && Q('missing: ' + b);
  if (a) {
    if (Hc.test(a)) return a;
    Q('invalid: ' + b)
  }
  return null
}
var Nc =
        /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
    Mc = /\/cb=/g, Lc = /\/\//g;
function Sc() {
  var a = sc();
  if (!a) throw Error('Bad hint');
  return a
}
Dc.m = function(){};
var Tc = decodeURI('%73cript'), Uc = /^[-+_0-9\/A-Za-z]+={0,2}$/;
function Vc(a, b) {
  for (var c = [], d = 0; d < a.length; ++d) {
    var e = a[d], f;
    if (f = e) {
      a: {for (f = 0; f < b.length; f++) if (b[f] === e) break a; f = -1} f =
          0 > f
    }
    f && c.push(e)
  }
  return c
}
function Wc() {
  var a = P.nonce;
  return void 0 !== a ?
      a && a === String(a) && a.match(Uc) ? a : P.nonce = null :
      mc.querySelector ?
      (a = mc.querySelector('script[nonce]')) ?
      (a = a.nonce || a.getAttribute('nonce') || '',
       a && a === String(a) && a.match(Uc) ? P.nonce = a : P.nonce = null) :
      null :
      null
}
function Xc(a) {
  if ('loading' != mc.readyState)
    Yc(a);
  else {
    var b = Wc(), c = '';
    null !== b && (c = ' nonce="' + b + '"');
    a = '<' + Tc + ' src="' + encodeURI(a) + '"' + c + '></' + Tc + '>';
    mc.write(Zc ? Zc.createHTML(a) : a)
  }
}
function Yc(a) {
  var b = mc.createElement(Tc);
  b.setAttribute('src', Zc ? Zc.createScriptURL(a) : a);
  a = Wc();
  null !== a && b.setAttribute('nonce', a);
  b.async = 'true';
  (a = mc.getElementsByTagName(Tc)[0]) ?
      a.parentNode.insertBefore(b, a) :
      (mc.head || mc.body || mc.documentElement).appendChild(b)
}
function $c(a, b) {
  var c = b && b._c;
  if (c)
    for (var d = 0; d < Ec.length; d++) {
      var e = Ec[d][0], f = Ec[d][1];
      f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b)
    }
}
function ad(a, b, c) {
  bd(function(){}, c)
}
function cd(a, b) {
  var c = b || {};
  'function' == typeof b && (c = {}, c.callback = b);
  $c(a, c);
  var d = a ? a.split(':') : [], e = c.h || Sc(), f = M(P, 'ah', N());
  if (f['::'] && d.length) {
    for (var g = [], h = null; h = d.shift();) {
      var k = h.split('.');
      k = f[h] || f[k[1] && 'ns:' + k[0] || ''] || e;
      var l = g.length && g[g.length - 1] || null, m = l;
      l && l.hint == k || (m = {hint: k, features: []}, g.push(m));
      m.features.push(h)
    }
    var n = g.length;
    if (1 < n) {
      var q = c.callback;
      q && (c.callback = function() {
        0 == --n && q()
      })
    }
    for (; d = g.shift();) dd(d.features, c, d.hint)
  } else
    dd(d || [], c, e)
}
function dd(a, b, c) {
  function d(O, Y) {
    if (n) return 0;
    lc.clearTimeout(m);
    q.push.apply(q, w);
    var Ra = ((rc || {}).config || {}).update;
    Ra ? Ra(f) : f && M(P, 'cu', []).push(f);
    if (Y) {
      Bc('me0', O, p);
      try {
        ad(Y, c, l)
      } finally {
        Bc('me1', O, p)
      }
    }
    return 1
  }
  a = qc(a) || [];
  var e = b.callback, f = b.config, g = b.timeout, h = b.ontimeout,
      k = b.onerror, l = void 0;
  'function' == typeof k && (l = k);
  var m = null, n = !1;
  if (g && !h || !g && h)
    throw 'Timeout requires both the timeout parameter and ontimeout parameter to be set';
  k = M(uc(c), 'r', []).sort();
  var q = M(uc(c), 'L', []).sort(), p = [].concat(k);
  0 < g && (m = lc.setTimeout(function() {
    n = !0;
    h()
  }, g));
  var w = Vc(a, q);
  if (w.length) {
    w = Vc(a, k);
    var x = M(P, 'CP', []), F = x.length;
    x[F] = function(O) {
      function Y() {
        var tb = x[F + 1];
        tb && tb()
      }
      function Ra(tb) {
        x[F] = null;
        d(w, O) && tc(function(){})
      }
      if (!O) return 0;
      Bc('ml1', w, p);
      0 < F && x[F - 1] ? x[F] = function() {
        Ra(Y)
      } : Ra(Y)
    };
    if (w.length) {
      var ta = 'loaded_' + P.I++;
      rc[ta] = function(O) {
        x[F](O);
        rc[ta] = null
      };
      a = Kc(c, w, 'gapi.' + ta, k);
      k.push.apply(k, w);
      Bc('ml0', w, p);
      b.sync || lc.___gapisync ? Xc(a) : Yc(a)
    } else
      x[F](oc)
  } else
    d(w) && e && e()
}
var Zc = Ha('goog#gapi');
function bd(a, b) {
  if (P.hee && 0 < P.hel) try {
      return a()
    } catch (c) {
      b && b(c), P.hel--, cd('debug_error', function() {
        try {
          window.___jsl.hefn(c)
        } catch (d) {
          throw c;
        }
      })
    }
  else
    try {
      return a()
    } catch (c) {
      throw b && b(c), c;
    }
}
rc.load = function(a, b) {
  return bd(function() {
    return cd(a, b)
  })
};
function(){}
ed.prototype.set = function(){};
ed.prototype.get = function(a) {
  return !!this.g[a]
};
function(){};
function(){}
gd.prototype.get = function() {
  if (0 < this.g) {
    this.g--;
    var a = this.f;
    this.f = a.next;
    a.next = null
  } else
    a = this.i();
  return a
};
function(){};
function id(a) {
  B.setTimeout(function() {
    throw a;
  }, 0)
}
var jd;
function(){};
function ld() {
  this.g = this.f = null
}
var nd = new gd(
    function() {
      return new md
    },
    function(a) {
      a.reset()
    });
ld.prototype.add = function(a, b) {
  var c = nd.get();
  c.set(a, b);
  this.g ? this.g.next = c : this.f = c;
  this.g = c
};
ld.prototype.remove = function() {
  var a = null;
  this.f &&
      (a = this.f, this.f = this.f.next, this.f || (this.g = null),
       a.next = null);
  return a
};
function md() {
  this.next = this.scope = this.f = null
}
md.prototype.set = function(a, b) {
  this.f = a;
  this.scope = b;
  this.next = null
};
md.prototype.reset = function() {
  this.next = this.scope = this.f = null
};
function(){}
var pd;
function(){}
var rd = !1, sd = new ld;
function(){};
function(){}
function(){}
vd.prototype.reset = function() {
  this.context = this.onRejected = this.g = this.f = null;
  this.i = !1
};
var wd = new gd(
    function() {
      return new vd
    },
    function(a) {
      a.reset()
    });
function(){}
function(){}
function zd(a) {
  return new R(function(b, c) {
    c(a)
  })
}
R.prototype.then = function(a, b, c) {
  return Ad(
      this, 'function' === typeof a ? a : null,
      'function' === typeof b ? b : null, c)
};
R.prototype.$goog_Thenable = !0;
function(){}
R.prototype.cancel = function(){};
function(){}
function(){}
function(){}
R.prototype.K = function(a) {
  this.f = 0;
  ud(this, 2, a)
};
R.prototype.T = function(a) {
  this.f = 0;
  ud(this, 3, a)
};
function(){}
function(){}
function(){}
function(){}
R.prototype.D = function() {
  for (var a; a = Ed(this);) Fd(this, a, this.f, this.A);
  this.o = !1
};
function(){}
function(){}
function(){}
var Ld = id;
function Cd(a) {
  Ia.call(this, a)
}
E(Cd, Ia);
Cd.prototype.name = 'cancel';
function(){}
E(Md, ec);
r = Md.prototype;
r.M = 0;
r.L = function(){};
r.start = function(){};
r.stop = function(){};
r.isActive = function() {
  return 0 != this.M
};
r.na = function() {
  this.M = 0;
  this.f && this.f.call(this.g)
};
function(){};
function(){}
E(Od, Nd);
Od.prototype.reset = function() {
  this.f[0] = 1732584193;
  this.f[1] = 4023233417;
  this.f[2] = 2562383102;
  this.f[3] = 271733878;
  this.f[4] = 3285377520;
  this.l = this.i = 0
};
function(){}
Od.prototype.update = function(){};
Od.prototype.digest = function(){};
var Qd = 'StopIteration' in B ? B.StopIteration :
                                {message: 'StopIteration', stack: ''};
function Rd() {}
Rd.prototype.next = function() {
  throw Qd;
};
Rd.prototype.F = function() {
  return this
};
function(){}
function(){}
function(){};
function(){}
function(){}
r = Vd.prototype;
r.equals = function(){};
function Yd(a, b) {
  return a === b
}
r.isEmpty = function() {
  return 0 == this.g
};
r.clear = function(){};
r.remove = function(){};
function(){}
r.get = function(){};
r.set = function(){};
r.forEach = function(){};
r.clone = function() {
  return new Vd(this)
};
r.F = function(){};
function(){}
function(){}
function ae(a, b) {
  if (a.classList)
    var c = a.classList.contains(b);
  else
    c = a.classList ? a.classList : Zd(a).match(/\S+/g) || [],
    c = 0 <= Ka(c, b);
  return c
}
function(){}
function(){};
function(){}
function fe() {}
function(){}
var he = {
  '"': '\\"',
  '\\': '\\\\',
  '/': '\\/',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t',
  '\x0B': '\\u000b'
},
    ie = /\uffff/.test('\uffff') ? /[\\"\x00-\x1f\x7f-\uffff]/g :
                                   /[\\"\x00-\x1f\x7f-\xff]/g;
function(){};
function(){}
E(S, ec);
r = S.prototype;
r.subscribe = function(){};
r.S = function(){};
r.W = function(){};
function(){}
r.clear = function(){};
r.L = function(){};
function ke(a) {
  this.f = a
}
ke.prototype.set = function(){};
ke.prototype.get = function(){};
ke.prototype.remove = function(a) {
  this.f.remove(a)
};
function le(a) {
  this.f = a
}
E(le, ke);
function me(a) {
  this.data = a
}
function(){}
le.prototype.set = function(){};
le.prototype.g = function(){};
le.prototype.get = function(){};
function oe(a) {
  this.f = a
}
E(oe, le);
oe.prototype.set = function(){};
oe.prototype.g = function(){};
function pe() {};
function qe() {}
E(qe, pe);
qe.prototype.clear = function(){};
function re(a) {
  this.f = a
}
E(re, qe);
r = re.prototype;
r.isAvailable = function(){};
r.set = function(){};
r.get = function(){};
r.remove = function(a) {
  this.f.removeItem(a)
};
r.F = function(){};
r.clear = function() {
  this.f.clear()
};
r.key = function(a) {
  return this.f.key(a)
};
function(){}
E(se, re);
function(){}
E(te, qe);
var ve = {
  '.': '.2E',
  '!': '.21',
  '~': '.7E',
  '*': '.2A',
  '\'': '.27',
  '(': '.28',
  ')': '.29',
  '%': '.'
},
    ue = null;
function(){}
r = te.prototype;
r.isAvailable = function() {
  return !!this.f
};
r.set = function(){};
r.get = function(){};
r.remove = function(){};
r.F = function(){};
r.clear = function(){};
function(){};
function(){}
E(ye, qe);
ye.prototype.set = function(){};
ye.prototype.get = function(){};
ye.prototype.remove = function(){};
ye.prototype.F = function(){};
var ze =
    window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
D('yt.config_', ze);
function(){}
function(){};
var Be = [];
function(){}
function(){}
function Ee(a) {
  var b = C('yt.logging.errors.log');
  b ? b(a, 'ERROR', void 0, void 0, void 0) :
      (b = T('ERRORS', []), b.push([a, 'ERROR', void 0, void 0, void 0]),
       Ae('ERRORS', b))
}
function(){};
function(){}
function(){}
function(){};
function(){}
function Ke() {
  return C('gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER')
};
function(){}
function(){}
function(){};
var Ne = 0;
D('ytDomDomGetNextId', C('ytDomDomGetNextId') || function() {
  return ++Ne
});
D('ytEventsEventsListeners', B.ytEventsEventsListeners || {});
D('ytEventsEventsCounter', B.ytEventsEventsCounter || {count: 0});
function(){};
function Pe() {}
function(){};
function Se() {}
v(Se, Pe);
function(){}
Se.prototype.start = function(){};
Se.f = void 0;
Se.g = function(){};
Se.g();
var Te = B.ytPubsubPubsubInstance || new S,
    Ue = B.ytPubsubPubsubSubscribedKeys || {},
    Ve = B.ytPubsubPubsubTopicToKeys || {},
    We = B.ytPubsubPubsubIsSynchronous || {};
S.prototype.subscribe = S.prototype.subscribe;
S.prototype.unsubscribeByKey = S.prototype.S;
S.prototype.publish = S.prototype.W;
S.prototype.clear = S.prototype.clear;
D('ytPubsubPubsubInstance', Te);
D('ytPubsubPubsubTopicToKeys', Ve);
D('ytPubsubPubsubIsSynchronous', We);
D('ytPubsubPubsubSubscribedKeys', Ue);
var Xe = window,
    V = Xe.ytcsi && Xe.ytcsi.now ?
    Xe.ytcsi.now :
    Xe.performance && Xe.performance.timing && Xe.performance.now &&
        Xe.performance.timing.navigationStart ?
    function(){} :
    function() {
      return (new Date).getTime()
    };
var Ye = Me('initial_gel_batch_timeout', 1E3), Ze = Math.pow(2, 16) - 1,
    $e = null, af = 0, bf = void 0, cf = 0, df = 0, ef = 0, ff = !0,
    gf = B.ytLoggingTransportLogPayloadsQueue_ || {};
D('ytLoggingTransportLogPayloadsQueue_', gf);
var hf = B.ytLoggingTransportGELQueue_ || new Map;
D('ytLoggingTransportGELQueue_', hf);
var jf = B.ytLoggingTransportTokensToCttTargetIds_ || {};
D('ytLoggingTransportTokensToCttTargetIds_', jf);
function(){}
function(){}
function(){}
function(){}
function(){};
var sf = B.ytLoggingGelSequenceIdObj_ || {};
D('ytLoggingGelSequenceIdObj_', sf);
function tf(a, b, c, d) {
  d = void 0 === d ? {} : d;
  var e = {};
  e.eventTimeMs = Math.round(d.timestamp || V());
  e[a] = b;
  a = String;
  d.timestamp ? b = -1 :
                (b = C('_lact', window),
                 b = null == b ? -1 : Math.max(Date.now() - b, 0));
  e.context = {lastActivityMs: a(b)};
  U('log_sequence_info_on_gel_web') && d.ia &&
      (a = e.context, b = d.ia, sf[b] = b in sf ? sf[b] + 1 : 0,
       a.sequence = {index: sf[b], groupKey: b}, d.Oa && delete sf[d.ia]);
  d = d.Na;
  a = '';
  d &&
      (a = {},
       d.videoId ? a.videoId = d.videoId :
                   d.playlistId && (a.playlistId = d.playlistId),
       jf[d.token] = a, a = d.token);
  d = hf.get(a) || [];
  hf.set(a, d);
  d.push(e);
  c && (bf = new c);
  c = Me('web_logging_max_batch') || 100;
  e = V();
  d.length >= c ? kf() : 10 <= e - ef && (mf(), ef = e)
};
function(){}
function(){}
function(){}
var vf = new function(){};
D('yt.ads_.signals_.getAdSignalsString', function(a) {
  return Ge(uf(a))
});
var yf = 'XMLHttpRequest' in B ? function() {
  return new XMLHttpRequest
} : null;
function(){};
var Af = {
  Authorization: 'AUTHORIZATION',
  'X-Goog-Visitor-Id': 'SANDBOXED_VISITOR_ID',
  'X-YouTube-Client-Name': 'INNERTUBE_CONTEXT_CLIENT_NAME',
  'X-YouTube-Client-Version': 'INNERTUBE_CONTEXT_CLIENT_VERSION',
  'X-YouTube-Device': 'DEVICE',
  'X-Youtube-Identity-Token': 'ID_TOKEN',
  'X-YouTube-Page-CL': 'PAGE_CL',
  'X-YouTube-Page-Label': 'PAGE_BUILD_LABEL',
  'X-YouTube-Variants-Checksum': 'VARIANTS_CHECKSUM'
},
    Bf =
        'app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address'
            .split(' '),
    Cf = !1;
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){};
function(){};
function(){}
function(){}
function nf(a) {
  var b = {
    client: {
      hl: a.ta,
      gl: a.sa,
      clientName: a.ra,
      clientVersion: a.innertubeContextClientVersion,
      configInfo: a.qa
    }
  },
      c = window.devicePixelRatio;
  c && 1 != c && (b.client.screenDensityFloat = String(c));
  c = T('EXPERIMENTS_TOKEN', '');
  '' !== c && (b.client.experimentsToken = c);
  c = [];
  var d = T('EXPERIMENTS_FORCED_FLAGS', {});
  for (e in d) c.push({key: e, value: String(d[e])});
  var e = T('EXPERIMENT_FLAGS', {});
  for (var f in e)
    f.startsWith('force_') && void 0 === d[f] &&
        c.push({key: f, value: String(e[f])});
  0 < c.length && (b.request = {internalExperimentFlags: c});
  a.appInstallData && U('web_log_app_install_experiments') &&
      (b.client.configInfo = b.client.configInfo || {},
       b.client.configInfo.appInstallData = a.appInstallData);
  T('DELEGATED_SESSION_ID') && !U('pageid_as_header_web') &&
      (b.user = {onBehalfOfUser: T('DELEGATED_SESSION_ID')});
  b.client = Object.assign(b.client, Of());
  return b
}
function(){};
function(){}
function Sf(a) {
  a = Rf(a);
  var b = new Od;
  b.update(JSON.stringify(a, Object.keys(a).sort()));
  a = b.digest();
  b = '';
  for (var c = 0; c < a.length; c++)
    b += '0123456789ABCDEF'.charAt(Math.floor(a[c] / 16)) +
        '0123456789ABCDEF'.charAt(a[c] % 16);
  return b
};
function(){}
Tf.prototype.set = function(){};
Tf.prototype.get = function(){};
Tf.prototype.remove = function(){};
var Uf;
function(){}
function(){}
function(){}
function Yf(a) {
  var b = Vf().get('requests', !0);
  if (b) {
    for (var c in b) {
      var d = b[c];
      if (!(6E4 > Math.round(V()) - d.requestTime)) {
        var e = d.authState;
        var f = Rf(Qf(!1));
        a: {
          var g = void 0, h = void 0;
          for (h in e) if (!(h in f) || e[h] !== f[h]) {
            e = !1;
            break a
          } for (g in f) if (!(g in e)) {
            e = !1;
            break a
          } e = !0
        } e &&
            (e = d.request,
             'requestTimeMs' in e && (e.requestTimeMs = Math.round(V())),
             rf(a, d.method, e, {}));
        delete b[c]
      }
    }
    Vf().set('requests', b, 86400, !0)
  }
};
function Zf() {};
var $f = Jb || Kb;
function ag(a) {
  var b = I;
  return b ? 0 <= b.toLowerCase().indexOf(a) : !1
};
function(){}
function cg(a) {
  return a
}
function(){}
W.all = function(){};
W.resolve = function(){};
W.reject = function(a) {
  return new W(function(b, c) {
    c(a)
  })
};
W.prototype.then = function(){};
function(){}
function eg(a, b, c, d, e) {
  try {
    if ('FULFILLED' !== a.state.status)
      throw Error('calling handleResolve before the promise is fulfilled.');
    var f = c(a.state.value);
    f instanceof W ? gg(a, b, f, d, e) : d(f)
  } catch (g) {
    e(g)
  }
}
function(){}
function(){};
function hg() {
  var a = Error.call(this, 'Transaction was aborted');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, hg.prototype)
}
v(hg, Error);
function ig() {
  var a = Error.call(this, 'IndexedDB is not supported.');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, ig.prototype)
}
v(ig, Error);
function jg() {
  var a = Error.call(
      this, 'The current transaction exceeded its quota limitations.');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, jg.prototype)
}
v(jg, Error);
function kg() {
  var a = Error.call(
      this,
      'The current transaction may have failed because of exceeding quota limitations.');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, kg.prototype)
}
v(kg, Error);
function lg(a) {
  return a instanceof DOMException ?
      'VersionError' === a.name :
      'DOMError' in self && a instanceof DOMError ?
      'VersionError' === a.name :
      a instanceof Object && 'message' in a ?
      'An attempt was made to open a database using a lower version than the existing version.' ===
          a.message :
      !1
}
function(){};
function(){}
function og(a) {
  return new R(function(b, c) {
    ng(a, b, c)
  })
}
function(){};
function pg(a) {
  this.f = a
}
r = pg.prototype;
r.add = function(){};
r.clear = function(){};
r.close = function() {
  this.f.close()
};
r.count = function(a, b) {
  return qg(this, [a], 'readonly', function(c) {
    return rg(c, a).count(b)
  })
};
function(){}
r['delete'] = function(){};
r.get = function(){};
function ug(a, b) {
  return qg(a, ['databases'], 'readwrite', function(c) {
    return vg(rg(c, 'databases'), b, void 0)
  })
}
function qg(a, b, c, d) {
  c = void 0 === c ? 'readonly' : c;
  return new R(function(e, f) {
    var g = a.f.transaction(b, c), h = new wg(g, b);
    dg(d(h).then(function(k) {
      Bd(xg(h).then(function() {
        e(k)
      }),
         function(l) {
           f(l)
         })
    }),
       function(k) {
         f(k)
       })
  })
}
function tg(a) {
  this.f = a
}
r = tg.prototype;
r.add = function(a, b) {
  var c = b ? this.f.add(a, b) : this.f.add(a);
  return X(c)
};
r.clear = function(){};
r.count = function(a) {
  a = a ? this.f.count(a) : this.f.count();
  return X(a)
};
r['delete'] = function(){};
r.get = function(a) {
  return X(this.f.get(a))
};
r.index = function(a) {
  return new yg(this.f.index(a))
};
r.getName = function() {
  return this.f.name
};
function vg(a, b, c) {
  a = c ? a.f.put(b, c) : a.f.put(b);
  return X(a)
}
function wg(a) {
  var b = this;
  this.f = a;
  this.g = new Map;
  this.aborted = !1;
  this.done = new R(function(c, d) {
    b.f.addEventListener('complete', function() {
      c()
    });
    b.f.addEventListener('error', function(){});
    b.f.addEventListener('abort', function() {
      var e = b.f.error;
      e ? ('QuotaExceededError' === e.name ?
               Fe(new jg) :
               'UnknownError' === e.name && Fe(new kg),
           d(e)) :
          d(new hg)
    })
  })
}
wg.prototype.abort = function(){};
function xg(a) {
  var b = a.f;
  b.commit && !a.aborted && b.commit();
  return a.done
}
function(){}
function yg(a) {
  this.f = a
}
yg.prototype.count = function(a) {
  a = a ? this.f.count(a) : this.f.count();
  return X(a)
};
yg.prototype.get = function(a) {
  return X(this.f.get(a))
};
function(){}
function Bg(a, b) {
  this.request = a;
  this.f = b
}
function(){}
Bg.prototype['delete'] = function(){};
Bg.prototype.update = function(a) {
  return X(this.f.update(a))
};
function Cg(a, b, c) {
  function d() {
    m || (m = new pg(f.result));
    return m
  }
  var e = wg;
  var f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
  var g = c.blocked, h = c.blocking, k = c.f, l = c.upgrade, m;
  l && f.addEventListener('upgradeneeded', function(){});
  g && f.addEventListener('blocked', function() {
    g()
  });
  return og(f).then(function(){})
}
function(){};
var Eg, Fg, Gg = ['getAll', 'getAllKeys', 'getKey', 'openKeyCursor'],
            Hg = ['getAll', 'getAllKeys', 'getKey', 'openKeyCursor'];
function Ig() {
  return K(this, function b() {
    var c;
    return z(b, function(d) {
      switch (d.f) {
        case 1:
          var e;
          if (e = $f)
            e = /WebKit\/([0-9]+)/.exec(I),
            e = !!(e && 600 <= parseInt(e[1], 10));
          e &&
              (e = /WebKit\/([0-9]+)/.exec(I),
               e = !(e && 602 <= parseInt(e[1], 10)));
          if (e && !U('ytidb_allow_on_ios_safari_v8_and_v9'))
            return d['return'](!1);
          try {
            if (!self.indexedDB) return d['return'](!1)
          } catch (f) {
            return d['return'](!1)
          }
          d.o = 2;
          d.l = 3;
          return y(d, Dg('yt-idb-test-do-not-use'), 5);
        case 5:
          c = d.g;
        case 3:
          d.K = [d.i];
          d.o = 0;
          d.l = 0;
          if (c) try {
              c.close()
            } catch (f) {
            }
          e = d.K.splice(0)[0];
          (e = d.i = d.i || e) ? e.ba        ? d.f = d.o || d.l :
                  void 0 != e.G && d.l < e.G ? (d.f = e.G, d.i = null) :
                                               d.f = d.l :
                                 d.f = 4;
          break;
        case 2:
          return d.o = 0, d.i = null, d['return'](!1);
        case 4:
          return d['return'](!0)
      }
    })
  })
}
function(){}
function(){};
var Lg;
function Mg() {
  function a(b) {
    b.close();
    Lg = void 0
  }
  Lg ||
      (Lg =
           Bd(Dg('YtIdbMeta', 1, {
                blocking: a,
                upgrade: function(){}
              }),
              function(b) {
                return lg(b) ? Dg('YtIdbMeta', void 0, {blocking: a}) : zd(b)
              }));
  return Lg
}
function Ng(a) {
  return Mg().then(function(b) {
    return b.get('databases', a.actualName).then(function(c) {
      if (c ? a.actualName !== c.actualName || a.publicName !== c.publicName ||
                  a.userIdentifier !== c.userIdentifier ||
                  a.signedIn !== c.signedIn :
              1)
        return ug(b, a)
    })
  })
}
function Og(a) {
  return Mg().then(function(){})
};
function Pg(a) {
  try {
    var b = {
      actualName: 'LogsDataBase',
      publicName: 'LogsDataBase',
      userIdentifier: void 0,
      signedIn: !1
    }
  } catch (c) {
    return zd(c)
  }
  return Bd(
      Ng(b).then(function() {
        return a(b)
      }),
      function(c) {
        return Bd(Og(b.actualName), function() {}).then(function() {
          return zd(c)
        })
      })
}
function Qg() {
  return Jg().then(function(a) {
    if (!a) throw new ig;
  })
}
function Rg(a, b) {
  b = void 0 === b ? {} : b;
  return Qg().then(function() {
    return Pg(function(c) {
      return Dg(c.actualName, a, b)
    })
  })
};
function Sg() {
  W.call(this, function() {});
  throw Error(
      'Not allowed to instantiate the thennable outside of the core library.');
}
v(Sg, W);
Sg.reject = W.reject;
Sg.resolve = W.resolve;
Sg.all = W.all;
var Tg;
function Ug() {
  return K(this, function b() {
    return z(b, function(c) {
      if (!Tg) try {
          Tg = Rg(1, {
            upgrade: function(d, e) {
              1 > e &&
                  (sg(d, 'LogsRequestsStore',
                      {keyPath: 'id', autoIncrement: !0})
                       .f.createIndex(
                           'newRequest', ['status', 'authHash', 'timestamp'],
                           {unique: !1}),
                   sg(d, 'sapisid'))
            }
          })
        } catch (d) {
          if (!lg(d)) return Ee(d), c['return'](Promise.reject(d));
          Tg = Rg()
        }
      return c['return'](Tg)
    })
  })
}
function Vg(a) {
  return K(this, function c() {
    var d, e, f;
    return z(c, function(g) {
      if (1 == g.f) return y(g, Wg(), 2);
      if (3 != g.f) return d = g.g, y(g, Ug(), 3);
      e = g.g;
      f = Object.assign(
          Object.assign({}, a),
          {options: JSON.parse(JSON.stringify(a.options)), authHash: d});
      return g['return'](e.add('LogsRequestsStore', f))
    })
  })
}
function Xg() {
  return K(this, function b() {
    var c, d, e, f, g, h;
    return z(b, function(k) {
      switch (k.f) {
        case 1:
          return y(k, Wg(), 2);
        case 2:
          return c = k.g, d = ['NEW', c, 0], e = ['NEW', c, V()],
                 f = IDBKeyRange.bound(d, e), y(k, Ug(), 3);
        case 3:
          return g = k.g, h = void 0,
                 y(k, qg(g, ['LogsRequestsStore'], 'readwrite', function(l) {
                     return zg(
                         rg(l, 'LogsRequestsStore').index('newRequest'),
                         {query: f, direction: 'prev'}, function(m) {
                           m.f.value &&
                               (h = m.f.value, h.status = 'QUEUED', m.update(h))
                         })
                   }), 4);
        case 4:
          return k['return'](h)
      }
    })
  })
}
function Yg(a) {
  return K(this, function c() {
    var d;
    return z(c, function(e) {
      if (1 == e.f) return y(e, Ug(), 2);
      d = e.g;
      return e['return'](qg(d, ['LogsRequestsStore'], 'readwrite', function(f) {
        var g = rg(f, 'LogsRequestsStore');
        return g.get(a).then(function(){})
      }))
    })
  })
}
function Zg(a) {
  return K(this, function c() {
    var d;
    return z(c, function(e) {
      if (1 == e.f) return y(e, Ug(), 2);
      d = e.g;
      return e['return'](qg(d, ['LogsRequestsStore'], 'readwrite', function(f) {
        var g = rg(f, 'LogsRequestsStore');
        return g.get(a).then(function(h) {
          return h ?
              (h.status = 'NEW', h.sendCount += 1, vg(g, h).then(function() {
                return h
              })) :
              Sg.resolve(void 0)
        })
      }))
    })
  })
}
function $g(a) {
  return K(this, function c() {
    var d;
    return z(c, function(e) {
      if (1 == e.f) return y(e, Ug(), 2);
      d = e.g;
      return e['return'](d['delete']('LogsRequestsStore', a))
    })
  })
}
function Wg() {
  return K(this, function b() {
    var c;
    return z(b, function(d) {
      if (1 == d.f) {
        Zf.f || (Zf.f = new Zf);
        var e = {};
        var f = yc([]);
        f &&
            (e.Authorization = f, e['X-Goog-AuthUser'] = T('SESSION_INDEX', 0),
             'INNERTUBE_HOST_OVERRIDE' in ze ||
                 (e['X-Origin'] = window.location.origin),
             U('pageid_as_header_web') && 'DELEGATED_SESSION_ID' in ze &&
                 (e['X-Goog-PageId'] = T('DELEGATED_SESSION_ID')));
        e = yd(e);
        return y(d, e, 2)
      }
      c = d.g;
      return d['return'](Sf(c))
    })
  })
};
var ah = Me('network_polling_interval', 3E4);
function bh() {
  this.j = 0;
  this.f = window.navigator.onLine;
  ch(this);
  dh(this)
}
function eh() {
  bh.f || (bh.f = new bh);
  return bh.f
}
function fh(a) {
  var b = gh, c = hh;
  (new R(function(d) {
    a.g = d
  })).then(function() {
    b();
    c && (a.i = c)
  });
  ih(a)
}
function(){}
function ch(a) {
  window.addEventListener('offline', function() {
    a.f = !1;
    a.i && a.i()
  })
}
function ih(a) {
  a.j || (jh(a), window.navigator.onLine && a.g && a.g())
}
function jh(a) {
  a.j = Qe(function() {
    window.navigator.onLine ?
        (!1 === a.f && Ee(Error('NetworkStatusManager missed online event.')),
         a.f = !0, a.g && a.g()) :
        (!0 === a.f && Ee(Error('NetworkStatusManager missed offline event.')),
         a.f = !1, a.i && a.i());
    jh(a)
  }, ah)
};
var kh = Me('networkless_throttle_timeout') || 100,
    lh = Me('networkless_retry_attempts') || 1, mh = 0;
function nh(a, b) {
  b = void 0 === b ? {} : b;
  oh().then(function(c) {
    var d = eh().f;
    if (!c || U('networkless_bypass_write') ||
        d && U('vss_networkless_bypass_write'))
      If(a, b);
    else {
      var e = {url: a, options: b, timestamp: V(), status: 'NEW', sendCount: 0};
      Vg(e).then(function(f) {
        e.id = f;
        f = eh();
        f.f && !U('networkless_always_offline') ? ph(e) : fh(f)
      })['catch'](function(f) {
        ph(e);
        Ee(f)
      })
    }
  })
}
function gh() {
  var a = this;
  mh || (mh = Re(function() {
           return K(a, function c() {
             var d;
             return z(c, function(e) {
               if (1 == e.f) return y(e, Xg(), 2);
               if (3 != e.f)
                 return d = e.g, d ? y(e, ph(d), 3) : (hh(), e['return']());
               mh = 0;
               gh();
               e.f = 0
             })
           })
         }, 1, kh))
}
function hh() {
  var a = mh;
  if (!isNaN(a)) {
    var b = C('yt.scheduler.instance.cancelJob');
    b ? b(a) : window.clearTimeout(a)
  }
  mh = 0
}
function ph(a) {
  return K(this, function c() {
    var d;
    return z(c, function(e) {
      switch (e.f) {
        case 1:
          if (!a.id) {
            e.G(2);
            break
          }
          return y(e, Yg(a.id), 3);
        case 3:
          (d = e.g) ? a = d :
                      Fe(Error('The request cannot be found in the database.'));
        case 2:
          var f = a.timestamp;
          if (!(2592E6 <= V() - f)) {
            e.G(4);
            break
          }
          Fe(Error(
              'Networkless Logging: Stored logs request expired age limit'));
          if (!a.id) {
            e.G(5);
            break
          }
          return y(e, $g(a.id), 5);
        case 5:
          return e['return']();
        case 4:
          f = a = qh(a);
          var g, h;
          if (null ===
                          (h = null ===
                                       (g = null === f || void 0 === f ?
                                            void 0 :
                                            f.options) ||
                                   void 0 === g ?
                               void 0 :
                               g.C) ||
                      void 0 === h ?
                  0 :
                  h.requestTimeMs)
            f.options.C.requestTimeMs = Math.round(V());
          (a = f) && If(a.url, a.options);
          e.f = 0
      }
    })
  })
}
function qh(a) {
  var b = this, c = a.options.onError ? a.options.onError : function() {};
  a.options.onError = function(e, f) {
    return K(b, function h() {
      return z(h, function(k) {
        if (1 == k.f)
          return a && a.id ?
              a.sendCount < lh ? y(k, Zg(a.id), 6) : y(k, $g(a.id), 2) :
              k.G(2);
        2 != k.f && fh(eh());
        c(e, f);
        k.f = 0
      })
    })
  };
  var d = a.options.onSuccess ? a.options.onSuccess : function() {};
  a.options.onSuccess = function(e, f) {
    return K(b, function h() {
      return z(h, function(k) {
        if (1 == k.f) return a && a.id ? y(k, $g(a.id), 2) : k.G(2);
        d(e, f);
        k.f = 0
      })
    })
  };
  return a
}
function oh() {
  return K(this, function b() {
    return z(b, function(c) {
      return U('networkless_logging') ?
          (2 === Me('networkless_ytidb_version') && Kg().then(function(d) {
            return d
          }),
           c['return'](Jg())) :
          c['return'](!1)
    })
  })
};
function(){}
v(rh, Error);
function(){}
sh.prototype.isReady = function(){};
function rf(a, b, c, d) {
  !T('VISITOR_DATA') && 'visitor_id' !== b && .01 > Math.random() &&
      Fe(new rh(
          'Missing VISITOR_DATA when sending innertube request.', b, c, d));
  if (!a.isReady()) {
    var e = new rh('innertube xhrclient not ready', b, c, d);
    Ee(e);
    e.sampleWeight = 0;
    throw e;
  }
  var f = {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    C: c,
    ga: 'JSON',
    R: function() {
      d.R()
    },
    fa: d.R,
    onSuccess: function(n, q) {
      if (d.onSuccess) d.onSuccess(q)
    },
    ea: function(n) {
      if (d.onSuccess) d.onSuccess(n)
    },
    onError: function(){},
    Ra: function(){},
    timeout: d.timeout,
    withCredentials: !0
  },
      g = '';
  (e = a.f.ua) && (g = e);
  var h = a.f.wa || !1, k = Qf(h, g, d);
  Object.assign(f.headers, k);
  f.headers.Authorization && !g &&
      (f.headers['x-origin'] = window.location.origin);
  e = '/youtubei/' + a.f.innertubeApiVersion + '/' + b;
  var l = {alt: 'json'};
  a.f.va && f.headers.Authorization || (l.key = a.f.innertubeApiKey);
  var m = Ie('' + g + e, l || {}, !0);
  oh().then(function(n) {
    if (d.retry && U('retry_web_logging_batches') &&
        'www.youtube-nocookie.com' != g) {
      if (U('networkless_gel') && !n || !U('networkless_gel'))
        var q = Wf(b, c, k, h);
      if (q) {
        var p = f.onSuccess, w = f.ea;
        f.onSuccess = function(x, F) {
          Xf(q);
          p(x, F)
        };
        c.ea = function(){}
      }
    }
    try {
      U('use_fetch_for_op_xhr') ?
          Ff(m, f) :
          U('networkless_gel') && d.retry ?
          (f.method = 'POST', nh(m, f)) :
          (f.method = 'POST', f.C || (f.C = {}), If(m, f))
    } catch (x) {
      if ('InvalidAccessError' == x.name)
        q && (Xf(q), q = 0),
            Fe(Error('An extension is blocking network request.'));
      else
        throw x;
    }
    q && Qe(function() {
      Yf(a)
    }, 5E3)
  })
};
function(){};
var uh = Date.now().toString();
function vh() {
  a: {
    if (window.crypto && window.crypto.getRandomValues) try {
      var a = Array(16), b = new Uint8Array(16);
      window.crypto.getRandomValues(b);
      for (var c = 0; c < a.length; c++) a[c] = b[c];
      var d = a;
      break a
    } catch (e) {} d = Array(16);
    for (a = 0; 16 > a; a++) {
      b = Date.now();
      for (c = 0; c < b % 23; c++) d[a] = Math.random();
      d[a] = Math.floor(256 * Math.random())
    } if (uh) for (a = 1, b = 0; b < uh.length; b++) d[a % 16] =
        d[a % 16] ^ d[(a - 1) % 16] / 4 ^ uh.charCodeAt(b),
    a++
  } a = [];
  for (b = 0; b < d.length; b++)
    a.push('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
               .charAt(d[b] & 63));
  return a.join('')
};
var wh = B.ytLoggingDocDocumentNonce_ || vh();
D('ytLoggingDocDocumentNonce_', wh);
function xh(a) {
  a = void 0 === a ? 0 : a;
  return 0 == a ? 'client-screen-nonce' : 'client-screen-nonce.' + a
}
function(){}
D('yt_logging_screen.getRootVeType', function(a) {
  return T(yh(void 0 === a ? 0 : a), void 0)
});
function(){}
function Ah(a) {
  a = void 0 === a ? 0 : a;
  var b = T(xh(a));
  if (!b && !T('USE_CSN_FALLBACK', !0)) return null;
  b || 0 != a ||
      (U('kevlar_client_side_screens') || U('c3_client_side_screens') ?
           b = 'UNDEFINED_CSN' :
           b = T('EVENT_ID'));
  return b ? b : null
}
D('yt_logging_screen.getCurrentCsn', Ah);
function(){}
D('yt_logging_screen.getCttAuthInfo', function(a) {
  return zh()[a]
});
D('yt_logging_screen.setCurrentScreen', function(a, b, c, d) {
  c = void 0 === c ? 0 : c;
  if (a !== T(xh(c)) || b !== T(yh(c)))
    if (Bh(a, d, c), Ae(xh(c), a), Ae(yh(c), b),
        0 == c || U('web_screen_associated_all_layers'))
      b =
          function(){},
      'requestAnimationFrame' in window ? window.requestAnimationFrame(b) : b()
});
function Ch(a, b) {
  this.version = a;
  this.args = b
};
function Dh(a) {
  this.topic = a
}
Dh.prototype.toString = function() {
  return this.topic
};
var Eh = C('ytPubsub2Pubsub2Instance') || new S;
S.prototype.subscribe = S.prototype.subscribe;
S.prototype.unsubscribeByKey = S.prototype.S;
S.prototype.publish = S.prototype.W;
S.prototype.clear = S.prototype.clear;
D('ytPubsub2Pubsub2Instance', Eh);
D('ytPubsub2Pubsub2SubscribedKeys', C('ytPubsub2Pubsub2SubscribedKeys') || {});
D('ytPubsub2Pubsub2TopicToKeys', C('ytPubsub2Pubsub2TopicToKeys') || {});
D('ytPubsub2Pubsub2IsAsync', C('ytPubsub2Pubsub2IsAsync') || {});
D('ytPubsub2Pubsub2SkipSubKey', null);
function Fh(a, b) {
  var c = C('ytPubsub2Pubsub2Instance');
  c && c.publish.call(c, a.toString(), a, b)
};
var Gh = [
  {
    da: function(a) {
      return 'Cannot read property \'' + a.key + '\''
    },
    V: {
      TypeError: [
        {
          regexp: /Cannot read property '([^']+)' of (null|undefined)/,
          groups: ['key', 'value']
        },
        {
          regexp:
              /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
          groups: ['value', 'key']
        },
        {
          regexp:
              /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
          groups: ['value', 'key']
        },
        {
          regexp:
              /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
          groups: ['key']
        },
        {
          regexp:
              /Unable to get property '([^']+)' of (undefined or null) reference/,
          groups: ['key', 'value']
        }
      ],
      Error: [{
        regexp: /(Permission denied) to access property "([^']+)"/,
        groups: ['reason', 'key']
      }]
    }
  },
  {
    da: function(a) {
      return 'Cannot call \'' + a.key + '\''
    },
    V: {
      TypeError: [
        {
          regexp: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
          groups: ['base', 'key']
        },
        {
          regexp: /Object (.*) has no method '([^ ]+)'/,
          groups: ['base', 'key']
        },
        {
          regexp: /Object doesn't support property or method '([^ ]+)'/,
          groups: ['key']
        },
        {
          regexp:
              /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
          groups: ['key']
        },
        {
          regexp:
              /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
          groups: ['key']
        }
      ]
    }
  }
];
function Hh() {
  this.f = [];
  this.g = []
}
var Ih;
var Jh = new S;
var Kh = new Set, Lh = 0,
    Mh = ['PhantomJS', 'Googlebot', 'TO STOP THIS SECURITY SCAN go/scan'];
function Nh(a) {
  var b = void 0 === b ? {} : b;
  b.name = T('INNERTUBE_CONTEXT_CLIENT_NAME', 1);
  b.version = T('INNERTUBE_CONTEXT_CLIENT_VERSION', void 0);
  var c = b || {};
  b = 'WARNING';
  b = void 0 === b ? 'ERROR' : b;
  var d = void 0 === d ? !1 : d;
  if (a) {
    if (U('console_log_js_exceptions')) {
      var e = [];
      e.push('Name: ' + a.name);
      e.push('Message: ' + a.message);
      a.hasOwnProperty('params') &&
          e.push('Error Params: ' + JSON.stringify(a.params));
      e.push('File name: ' + a.fileName);
      e.push('Stacktrace: ' + a.stack);
      window.console.log(e.join('\n'), a)
    }
    if ((window && window.yterr || d) && !(5 <= Lh) && 0 !== a.sampleWeight) {
      var f = Nb(a);
      d = f.message || 'Unknown Error';
      e = f.name || 'UnknownError';
      var g = f.lineNumber || 'Not available',
          h = f.fileName || 'Not available';
      f = f.stack || a.f || 'Not available';
      if (a.hasOwnProperty('args') && a.args && a.args.length)
        for (var k = 0, l = 0; l < a.args.length; l++) {
          var m = a.args[l], n = 'params.' + l;
          k += n.length;
          if (m)
            if (Array.isArray(m))
              for (var q = c, p = 0;
                   p < m.length && !(m[p] && (k += Oh(p, m[p], n, q), 500 < k));
                   p++)
                ;
            else if ('object' === typeof m)
              for (q in q = void 0, p = c, m) {
                if (m[q] && (k += Oh(q, m[q], n, p), 500 < k)) break
              }
            else
              c[n] = String(JSON.stringify(m)).substring(0, 500),
              k += c[n].length;
          else
            c[n] = String(JSON.stringify(m)).substring(0, 500),
            k += c[n].length;
          if (500 <= k) break
        }
      else if (a.hasOwnProperty('params') && a.params)
        if (m = a.params, 'object' === typeof a.params)
          for (l in n = 0, m) {
            if (m[l] &&
                (k = 'params.' + l,
                 q = String(JSON.stringify(m[l])).substr(0, 500), c[k] = q,
                 n += k.length + q.length, 500 < n))
              break
          }
        else
          c.params = String(JSON.stringify(m)).substr(0, 500);
      navigator.vendor && !c.hasOwnProperty('vendor') &&
          (c.vendor = navigator.vendor);
      c = {
        message: d,
        name: e,
        lineNumber: g,
        fileName: h,
        stack: f,
        params: c
      };
      a = Number(a.columnNumber);
      isNaN(a) || (c.lineNumber = c.lineNumber + ':' + a);
      a = u(Gh);
      for (d = a.next(); !d.done; d = a.next())
        if (d = d.value, d.V[c.name])
          for (g = u(d.V[c.name]), e = g.next(); !e.done; e = g.next())
            if (h = e.value, e = c.message.match(h.regexp)) {
              c.params['error.original'] = e[0];
              g = h.groups;
              h = {};
              for (f = 0; f < g.length; f++)
                h[g[f]] = e[f + 1], c.params['error.' + g[f]] = e[f + 1];
              c.message = d.da(h);
              break
            }
      window.yterr && 'function' === typeof window.yterr && window.yterr(c);
      if (!(Kh.has(c.message) || 0 <= c.stack.indexOf('/YouTubeCenter.js') ||
            0 <= c.stack.indexOf('/mytube.js'))) {
        Jh.W('handleError', c);
        if (U('kevlar_gel_error_routing')) {
          a = b;
          a: {
            d = u(Mh); for (e = d.next(); !e.done;
                            e = d.next()) if (ag(e.value.toLowerCase())) {
              d = !0;
              break a
            } d = !1
          } if (!d) {
            d = {stackTrace: c.stack};
            c.fileName && (d.filename = c.fileName);
            e = c.lineNumber && c.lineNumber.split ? c.lineNumber.split(':') :
                                                     [];
            0 !== e.length &&
                (1 !== e.length || isNaN(Number(e[0])) ?
                     2 !== e.length || isNaN(Number(e[0])) ||
                         isNaN(Number(e[1])) ||
                         (d.lineNumber = Number(e[0]),
                          d.columnNumber = Number(e[1])) :
                     d.lineNumber = Number(e[0]));
            e = c.message;
            g = c.name;
            Ih || (Ih = new Hh);
            h = Ih;
            a: {
              f = u(h.g); for (l = f.next(); !l.done; l = f.next()) if (
                              l = l.value, c.message && c.message.match(l.f)) {
                h = l.weight;
                break a
              } h = u(h.f);
              for (f = h.next(); !f.done;
                   f = h.next()) if (f = f.value, f.callback(c)) {
                h = f.weight;
                break a
              } h = 1
            } e = {
              level: 'ERROR_LEVEL_UNKNOWN',
              message: e,
              errorClassName: g,
              sampleWeight: h
            };
            'ERROR' === a ?
                e.level = 'ERROR_LEVEL_ERROR' :
                'WARNING' === a && (e.level = 'ERROR_LEVEL_WARNNING');
            a = {isObfuscated: !0, browserStackInfo: d};
            d = {pageUrl: window.location.href, kvPairs: []};
            if (g = c.params)
              for (h = u(Object.keys(g)), f = h.next(); !f.done; f = h.next())
                f = f.value,
                d.kvPairs.push({key: 'client.' + f, value: String(g[f])});
            g = T('SERVER_NAME', void 0);
            h = T('SERVER_VERSION', void 0);
            g && h &&
                (d.kvPairs.push({key: 'server.name', value: g}),
                 d.kvPairs.push({key: 'server.version', value: h}));
            th('clientError', {errorMetadata: d, stackTrace: a, logMessage: e});
            kf()
          }
        }
        a = c.params || {};
        b = {
          xa: {
            a: 'logerror',
            t: 'jserror',
            type: c.name,
            msg: c.message.substr(0, 250),
            line: c.lineNumber,
            level: b,
            'client.name': a.name
          },
          C: {url: T('PAGE_NAME', window.location.href), file: c.fileName},
          method: 'POST'
        };
        a.version && (b['client.version'] = a.version);
        if (b.C) {
          c.stack && (b.C.stack = c.stack);
          d = u(Object.keys(a));
          for (e = d.next(); !e.done; e = d.next())
            e = e.value, b.C['client.' + e] = a[e];
          if (a = T('LATEST_ECATCHER_SERVICE_TRACKING_PARAMS', void 0))
            for (d = u(Object.keys(a)), e = d.next(); !e.done; e = d.next())
              e = e.value, b.C[e] = a[e];
          a = T('SERVER_NAME', void 0);
          d = T('SERVER_VERSION', void 0);
          a && d && (b.C['server.name'] = a, b.C['server.version'] = d)
        }
        If(T('ECATCHER_REPORT_HOST', '') + '/error_204', b);
        Kh.add(c.message);
        Lh++
      }
    }
  }
}
function(){};
function(){}
function(){}
function Th(a, b) {
  for (var c = u(b), d = c.next(); !d.done; d = c.next())
    d = d.value,
    Qh(d)     ? a.push(Rh({}, d)) :
        Sh(d) ? a.push(Th([], d)) :
                a.push(d);
  return a
}
function(){}
function(){};
var Uh = {}, Vh = 0;
function Wh(a, b, c, d, e) {
  e = void 0 === e ? '' : e;
  if (a)
    if (c && !ag('cobalt')) {
      if (a) {
        a instanceof H ||
            (a = 'object' == typeof a && a.P ? a.O() : String(a),
             gb.test(a) ?
                 a = new H(a, db) :
                 (a = String(a), a = a.replace(/(%0A|%0D)/g, ''),
                  a = (b = a.match(fb)) && eb.test(b[1]) ? new H(a, db) :
                                                           null));
        a = a || hb;
        a instanceof H&& a.constructor === H ?
            a = a.f :
            (Aa(a), a = 'type_error:SafeUrl');
        if ('about:invalid#zClosurez' === a || a.startsWith('data'))
          a = '';
        else {
          if (!(a instanceof kb)) {
            b = 'object' == typeof a;
            var f = null;
            b && a.aa && (f = a.Z());
            a = mb(Wa(b && a.P ? a.O() : String(a)), f)
          }
          a instanceof kb&& a.constructor === kb ?
              a = a.f :
              (Aa(a), a = 'type_error:SafeHtml');
          a = encodeURIComponent(String(de(a.toString())))
        }
        /^[\s\xa0]*$/.test(a) ||
            (a = Xb('IFRAME', {
               src: 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"',
               style: 'display:none'
             }),
             (9 == a.nodeType ? a : a.ownerDocument || a.document)
                 .body.appendChild(a))
      }
    } else if (e)
      Jf(a, b, 'POST', e, d);
    else if (T('USE_NET_AJAX_FOR_PING_TRANSPORT', !1) || d)
      Jf(a, b, 'GET', '', d);
    else {
      b: {
        try {
          var g = new Ja({url: a});
          if (g.i && g.g || g.j) {
            var h = pb(a.match(ob)[5] || null), k;
            if (!(k = !h || !h.endsWith('/aclk'))) {
              var l = a.search(ub);
              d: {
                for (c = 0; 0 <= (c = a.indexOf('ri', c)) && c < l;) {
                  var m = a.charCodeAt(c - 1);
                  if (38 == m || 63 == m) {
                    var n = a.charCodeAt(c + 2);
                    if (!n || 61 == n || 38 == n || 35 == n) {
                      var q = c;
                      break d
                    }
                  }
                  c += 3
                } q = -1
              } if (0 > q) var p = null;
              else {
                var w = a.indexOf('&', q);
                if (0 > w || w > l) w = l;
                q += 3;
                p = decodeURIComponent(a.substr(q, w - q).replace(/\+/g, ' '))
              }
              k = '1' !== p
            }
            f = !k;
            break b
          }
        } catch (x) {} f = !1
      } f ?
          Xh(a) ? (b && b(), f = !0) : f = !1 :
          f = !1;
      f || Yh(a, b)
    }
}
function(){}
function(){};
function Zh(a, b) {
  Ch.call(this, 1, arguments)
}
v(Zh, Ch);
function(){}
v($h, Ch);
var ai = new Dh('aft-recorded'), bi = new Dh('timing-sent');
var ci = window;
function di() {
  this.timing = {};
  this.clearResourceTimings = function() {};
  this.webkitClearResourceTimings = function() {};
  this.mozClearResourceTimings = function() {};
  this.msClearResourceTimings = function() {};
  this.oClearResourceTimings = function() {}
}
var ei = ci.performance || ci.mozPerformance || ci.msPerformance ||
    ci.webkitPerformance || new di;
var fi = !1;
Fa(ei.clearResourceTimings || ei.webkitClearResourceTimings ||
       ei.mozClearResourceTimings || ei.msClearResourceTimings ||
       ei.oClearResourceTimings || za,
   ei);
function(){}
function ii(a) {
  var b;
  (b = C('ytcsi.' + (a || '') + 'data_')) ||
      (b = {tick: {}, info: {}}, D('ytcsi.' + (a || '') + 'data_', b));
  return b
}
function ji(a) {
  a = ii(a);
  a.info || (a.info = {});
  return a.info
}
function(){}
function(){}
function(){};
function mi() {
  var a = C('ytcsi.debug');
  a || (a = [], D('ytcsi.debug', a), D('ytcsi.reference', {}));
  return a
}
function ni(a) {
  a = a || '';
  var b = C('ytcsi.reference');
  b || (mi(), b = C('ytcsi.reference'));
  if (b[a]) return b[a];
  var c = mi(), d = {timerName: a, info: {}, tick: {}, span: {}};
  c.push(d);
  return b[a] = d
};
var oi = B.ytLoggingLatencyUsageStats_ || {};
D('ytLoggingLatencyUsageStats_', oi);
function pi() {
  this.f = 0
}
function(){}
pi.prototype.tick = function(a, b, c) {
  ri(this, 'tick_' + a + '_' + b) ||
      th('latencyActionTicked', {tickName: a, clientActionNonce: b},
         {timestamp: c})
};
pi.prototype.info = function(a, b) {
  var c = Object.keys(a).join('');
  ri(this, 'info_' + c + '_' + b) ||
      (c = Object.assign({}, a), c.clientActionNonce = b,
       th('latencyActionInfo', c))
};
pi.prototype.span = function(a, b) {
  var c = Object.keys(a).join('');
  ri(this, 'span_' + c + '_' + b) ||
      (a.clientActionNonce = b, th('latencyActionSpan', a))
};
function ri(a, b) {
  oi[b] = oi[b] || {count: 0};
  var c = oi[b];
  c.count++;
  c.time = V();
  a.f || (a.f = Qe(function(){}, 5E3));
  return 5 < c.count ?
      (6 === c.count && 1 > 1E5 * Math.random() &&
           (c = new rh(
                'CSI data exceeded logging limit with key', b.split('_')),
            0 <= b.indexOf('plev') || Nh(c)),
       !0) :
      !1
};
var Z = {},
    si =
        (Z.ad_allowed = 'adTypesAllowed', Z.yt_abt = 'adBreakType',
         Z.ad_cpn = 'adClientPlaybackNonce', Z.ad_docid = 'adVideoId',
         Z.yt_ad_an = 'adNetworks', Z.ad_at = 'adType',
         Z.aida = 'appInstallDataAgeMs', Z.browse_id = 'browseId',
         Z.p = 'httpProtocol', Z.t = 'transportProtocol',
         Z.cpn = 'clientPlaybackNonce',
         Z.ccs = 'creatorInfo.creatorCanaryState',
         Z.cseg = 'creatorInfo.creatorSegment', Z.csn = 'clientScreenNonce',
         Z.docid = 'videoId', Z.GetHome_rid = 'requestIds',
         Z.GetSearch_rid = 'requestIds', Z.GetPlayer_rid = 'requestIds',
         Z.GetWatchNext_rid = 'requestIds', Z.GetBrowse_rid = 'requestIds',
         Z.GetLibrary_rid = 'requestIds', Z.is_continuation = 'isContinuation',
         Z.is_nav = 'isNavigation', Z.b_p = 'kabukiInfo.browseParams',
         Z.is_prefetch = 'kabukiInfo.isPrefetch',
         Z.is_secondary_nav = 'kabukiInfo.isSecondaryNav',
         Z.prev_browse_id = 'kabukiInfo.prevBrowseId',
         Z.query_source = 'kabukiInfo.querySource',
         Z.voz_type = 'kabukiInfo.vozType', Z.yt_lt = 'loadType',
         Z.mver = 'creatorInfo.measurementVersion', Z.yt_ad = 'isMonetized',
         Z.nr = 'webInfo.navigationReason',
         Z.nrsu = 'navigationRequestedSameUrl',
         Z.ncnp = 'webInfo.nonPreloadedNodeCount',
         Z.pnt = 'performanceNavigationTiming', Z.prt = 'playbackRequiresTap',
         Z.plt = 'playerInfo.playbackType',
         Z.pis = 'playerInfo.playerInitializedState',
         Z.paused = 'playerInfo.isPausedOnLoad', Z.yt_pt = 'playerType',
         Z.fmt = 'playerInfo.itag', Z.yt_pl = 'watchInfo.isPlaylist',
         Z.yt_pre = 'playerInfo.preloadType', Z.yt_ad_pr = 'prerollAllowed',
         Z.pa = 'previousAction', Z.yt_red = 'isRedSubscriber',
         Z.rce = 'mwebInfo.responseContentEncoding', Z.scrh = 'screenHeight',
         Z.scrw = 'screenWidth', Z.st = 'serverTimeMs',
         Z.ssdm = 'shellStartupDurationMs', Z.aq = 'tvInfo.appQuality',
         Z.br_trs = 'tvInfo.bedrockTriggerState',
         Z.kebqat = 'kabukiInfo.earlyBrowseRequestInfo.abandonmentType',
         Z.kebqa = 'kabukiInfo.earlyBrowseRequestInfo.adopted',
         Z.label = 'tvInfo.label', Z.is_mdx = 'tvInfo.isMdx',
         Z.preloaded = 'tvInfo.isPreloaded',
         Z.upg_player_vis = 'playerInfo.visibilityState',
         Z.query = 'unpluggedInfo.query',
         Z.upg_chip_ids_string = 'unpluggedInfo.upgChipIdsString',
         Z.yt_vst = 'videoStreamType', Z.vph = 'viewportHeight',
         Z.vpw = 'viewportWidth', Z.yt_vis = 'isVisible',
         Z.rcl = 'mwebInfo.responseContentLength',
         Z.GetSettings_rid = 'requestIds', Z.GetTrending_rid = 'requestIds',
         Z.GetMusicSearchSuggestions_rid = 'requestIds',
         Z.REQUEST_ID = 'requestIds', Z),
    ti =
        'isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap'
            .split(' '),
    ui = {},
    vi =
        (ui.ccs = 'CANARY_STATE_', ui.mver = 'MEASUREMENT_VERSION_',
         ui.pis = 'PLAYER_INITIALIZED_STATE_', ui.yt_pt = 'LATENCY_PLAYER_',
         ui.pa = 'LATENCY_ACTION_', ui.yt_vst = 'VIDEO_STREAM_TYPE_', ui),
    wi =
        'all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds'
            .split(' ');
function xi(a) {
  return !!T('FORCE_CSI_ON_GEL', !1) || U('csi_on_gel') || !!ii(a).useGel
}
function yi(a) {
  a = ii(a);
  if (!('gel' in a))
    a.gel = {gelTicks: {}, gelInfos: {}};
  else if (a.gel) {
    var b = a.gel;
    b.gelInfos || (b.gelInfos = {});
    b.gelTicks || (b.gelTicks = {})
  }
  return a.gel
};
function zi(a, b, c) {
  if (null !== b)
    if (ji(c)[a] = b, xi(c)) {
      var d = b;
      b = yi(c);
      if (b.gelInfos)
        b.gelInfos['info_' + a] = !0;
      else {
        var e = {};
        b.gelInfos = (e['info_' + a] = !0, e)
      }
      if (a.match('_rid')) {
        var f = a.split('_rid')[0];
        a = 'REQUEST_ID'
      }
      if (a in si) {
        b = si[a];
        0 <= Ka(ti, b) && (d = !!d);
        a in vi && 'string' === typeof d && (d = vi[a] + d.toUpperCase());
        a = d;
        d = b.split('.');
        for (var g = e = {}, h = 0; h < d.length - 1; h++) {
          var k = d[h];
          g[k] = {};
          g = g[k]
        }
        g[d[d.length - 1]] = 'requestIds' === b ? [{id: a, endpoint: f}] : a;
        f = Ph({}, e)
      } else
        0 <= Ka(wi, a) || Nh(new rh('Unknown label logged with GEL CSI', a)),
            f = void 0;
      f && xi(c) &&
          (b = ni(c || ''), Ph(b.info, f), b = yi(c),
           'gelInfos' in b || (b.gelInfos = {}), Ph(b.gelInfos, f), c = ki(c),
           qi().info(f, c))
    } else
      ni(c || '').info[a] = b
}
function Ai(a, b, c) {
  var d = hi(c);
  if (U('use_first_tick') && Bi(a, c)) return d[a];
  if (!b && '_' !== a[0]) {
    var e = a;
    ei.mark &&
        (0 == e.lastIndexOf('mark_', 0) || (e = 'mark_' + e),
         c && (e += ' (' + c + ')'), ei.mark(e))
  }
  e = b || V();
  d[a] = e;
  e = yi(c);
  e.gelTicks && (e.gelTicks['tick_' + a] = !0);
  c || b || V();
  if (xi(c)) {
    ni(c || '').tick[a] = b || V();
    e = ki(c);
    if ('_start' === a) {
      var f = qi();
      ri(f, 'baseline_' + e) ||
          th('latencyActionBaselined', {clientActionNonce: e}, {timestamp: b})
    } else
      qi().tick(a, e, b);
    li(c);
    e = !0
  } else
    e = !1;
  if (!e) {
    if (!C('yt.timing.' + (c || '') + 'pingSent_') &&
        (f = T((c || '') + 'TIMING_ACTION', void 0), e = hi(c),
         C('ytglobal.timing' + (c || '') + 'ready_') && f && Bi('_start') &&
             gi(c)))
      if (li(c), c)
        Ci(c);
      else {
        f = !0;
        var g = T('TIMING_WAIT', []);
        if (g.length)
          for (var h = 0, k = g.length; h < k; ++h)
            if (!(g[h] in e)) {
              f = !1;
              break
            }
        f && Ci(c)
      }
    ni(c || '').tick[a] = b || V()
  }
  return d[a]
}
function Bi(a, b) {
  var c = hi(b);
  return a in c
}
function Ci(a) {
  if (!xi(a)) {
    var b = hi(a), c = ji(a), d = b._start,
        e = T('CSI_SERVICE_NAME', 'youtube'),
        f = {v: 2, s: e, action: T((a || '') + 'TIMING_ACTION', void 0)},
        g = c.srt;
    void 0 !== b.srt && delete c.srt;
    b.aft = gi(a);
    var h = hi(a), k = h.pbr, l = h.vc;
    h = h.pbs;
    k && l && h && k < l && l < h && ji(a).yt_pvis && 'youtube' === e &&
        (zi('yt_lt', 'hot_bg', a), e = b.vc, k = b.pbs, delete b.aft,
         c.aft = Math.round(k - e));
    for (var m in c) '_' !== m.charAt(0) && (f[m] = c[m]);
    b.ps = V();
    m = {};
    e = [];
    for (var n in b)
      '_' !== n.charAt(0) &&
          (k = Math.round(b[n] - d), m[n] = k, e.push(n + '.' + k));
    f.rt = e.join(',');
    b = !!c.ap;
    U('debug_csi_data') &&
        (c = C('yt.timing.csiData'), c || (c = [], D('yt.timing.csiData', c)),
         c.push({page: location.href, time: new Date, args: f}));
    c = '';
    for (var q in f) f.hasOwnProperty(q) && (c += '&' + q + '=' + f[q]);
    f = '/csi_204?' + c.substring(1);
    if (window.navigator && window.navigator.sendBeacon && b) {
      var p = void 0 === p ? '' : p;
      Xh(f, p) || Wh(f, void 0, void 0, void 0, p)
    } else
      Wh(f);
    D('yt.timing.' + (a || '') + 'pingSent_', !0);
    Fh(bi, new $h(m.aft + (Number(g) || 0), a))
  }
}
var Di = window;
Di.ytcsi && (Di.ytcsi.info = zi, Di.ytcsi.tick = Ai);
new Md(Ei, 1E3);
function(){}