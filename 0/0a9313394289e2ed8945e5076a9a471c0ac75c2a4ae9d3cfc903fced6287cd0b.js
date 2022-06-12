(function() { /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var m;
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
r('Symbol', function(a) {
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
r('Symbol.iterator', function(a) {
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
}, ia = function() {
  function a() {
    function c() {}
    new c;
    Reflect.construct(c, [], function() {});
    return new c instanceof c
  }
  if ('undefined' != typeof Reflect && Reflect.construct) {
    if (a()) return Reflect.construct;
    var b = Reflect.construct;
    return function(c, d, e) {
      c = b(c, d);
      e && Reflect.setPrototypeOf(c, e.prototype);
      return c
    }
  }
  return function(c, d, e) {
    void 0 === e && (e = c);
    e = ha(e.prototype || Object.prototype);
    return Function.prototype.apply.call(c, e, d) || e
  }
}(), ja;
if ('function' == typeof Object.setPrototypeOf)
  ja = Object.setPrototypeOf;
else {
  var ka;
  a: {
    var la = {a: !0}, ma = {}; try {
      ma.__proto__ = la;
      ka = ma.a;
      break a
    } catch (a) {} ka = !1
  } ja = ka ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
    return a
  } : null
}
var na = ja;
function(){}
function(){}
function(){}
qa.prototype.F = function(a) {
  this.g = a
};
function(){}
qa.prototype['return'] = function(){};
function(){}
qa.prototype.O = function(a) {
  this.f = a
};
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
r('Reflect', function(a) {
  return a ? a : {}
});
r('Reflect.construct', function() {
  return ia
});
r('Reflect.setPrototypeOf', function(){});
function(){}
r('String.prototype.endsWith', function(){});
r('String.prototype.startsWith', function(){});
r('Object.setPrototypeOf', function(a) {
  return a || na
});
function Ba(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
var Ca = 'function' == typeof Object.assign ? Object.assign : function(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (d)
      for (var e in d) Ba(d, e) && (a[e] = d[e])
  }
  return a
};
r('Object.assign', function(a) {
  return a || Ca
});
r('Promise', function(){});
function(){}
r('Array.prototype.keys', function(a) {
  return a ? a : function() {
    return Da(this, function(b) {
      return b
    })
  }
});
r('Array.prototype.values', function(a) {
  return a ? a : function() {
    return Da(this, function(b, c) {
      return c
    })
  }
});
r('Object.is', function(a) {
  return a ? a : function(b, c) {
    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
  }
});
r('Array.prototype.includes', function(){});
r('String.prototype.includes', function(a) {
  return a ? a : function(b, c) {
    return -1 !== Aa(this, b, 'includes').indexOf(b, c || 0)
  }
});
r('WeakMap', function(){});
r('Array.prototype.entries', function(a) {
  return a ? a : function() {
    return Da(this, function(b, c) {
      return [b, c]
    })
  }
});
r('Map', function(){});
r('Object.entries', function(a) {
  return a ? a : function(b) {
    var c = [], d;
    for (d in b) Ba(b, d) && c.push([d, b[d]]);
    return c
  }
});
r('Set', function(){});
var v = this || self;
function(){}
function Ea() {}
function(){}
function(){}
function Ha(a) {
  var b = Ga(a);
  return 'array' == b || 'object' == b && 'number' == typeof a.length
}
function Ia(a) {
  var b = typeof a;
  return 'object' == b && null != a || 'function' == b
}
function(){}
var Ka = 'closure_uid_' + (1E9 * Math.random() >>> 0), La = 0;
function Ma(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function Oa(a, b, c) {
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
function Qa() {
  return Date.now()
}
function(){}
function(){}
function Ra(a) {
  return a
}
function Sa(a) {
  var b = null, c = v.trustedTypes;
  if (!c || !c.createPolicy) return b;
  try {
    b = c.createPolicy(
        a, {createHTML: Ra, createScript: Ra, createScriptURL: Ra})
  } catch (d) {
    v.console && v.console.error(d.message)
  }
  return b
};
function Ta(a) {
  if (Error.captureStackTrace)
    Error.captureStackTrace(this, Ta);
  else {
    var b = Error().stack;
    b && (this.stack = b)
  }
  a && (this.message = String(a))
}
A(Ta, Error);
Ta.prototype.name = 'CustomError';
var Ua;
function Va(a) {
  a = a.url;
  var b = /[?&]dsh=1(&|$)/.test(a);
  this.i = !b && /[?&]ae=1(&|$)/.test(a);
  this.l = !b && /[?&]ae=2(&|$)/.test(a);
  if ((this.f = /[?&]adurl=([^&]*)/.exec(a)) && this.f[1]) {
    try {
      var c = decodeURIComponent(this.f[1])
    } catch (d) {
      c = null
    }
    this.g = c
  }
};
function(){};
var Xa = Array.prototype.indexOf ? function(a, b) {
  return Array.prototype.indexOf.call(a, b, void 0)
} : function(){}, B = Array.prototype.forEach ? function(a, b, c) {
  Array.prototype.forEach.call(a, b, c)
} : function(a, b, c) {
  for (var d = a.length, e = 'string' === typeof a ? a.split('') : a, f = 0;
       f < d; f++)
    f in e && b.call(c, e[f], f, a)
}, Ya = Array.prototype.filter ? function(a, b, c) {
  return Array.prototype.filter.call(a, b, c)
} : function(){}, Za = Array.prototype.map ? function(a, b) {
  return Array.prototype.map.call(a, b, void 0)
} : function(){}, $a = Array.prototype.reduce ? function(a, b, c) {
  return Array.prototype.reduce.call(a, b, c)
} : function(){}, ab = Array.prototype.some ? function(a, b) {
  return Array.prototype.some.call(a, b, void 0)
} : function(a, b) {
  for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0;
       e < c; e++)
    if (e in d && b.call(void 0, d[e], e, a)) return !0;
  return !1
};
function(){}
function(){}
function db(a) {
  return Array.prototype.concat.apply([], arguments)
}
function eb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
    return c
  }
  return []
}
function(){}
function(){}
function(){}
function(){};
function(){}
function(){}
function(){}
function(){}
function(){}
var pb =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'
        .split(' ');
function(){};
var sb;
var tb = String.prototype.trim ? function(a) {
  return a.trim()
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
function(){}
var vb = /&/g, wb = /</g, xb = />/g, yb = /"/g, zb = /'/g, Ab = /\x00/g,
    Bb = /[\x00&<>"']/;
function Cb(a, b) {
  for (var c = 0, d = tb(String(a)).split('.'), e = tb(String(b)).split('.'),
           f = Math.max(d.length, e.length), g = 0;
       0 == c && g < f; g++) {
    var h = d[g] || '', k = e[g] || '';
    do {
      h = /(\d*)(\D*)(.*)/.exec(h) || ['', '', '', ''];
      k = /(\d*)(\D*)(.*)/.exec(k) || ['', '', '', ''];
      if (0 == h[0].length && 0 == k[0].length) break;
      c = Db(0 == h[1].length ? 0 : parseInt(h[1], 10),
             0 == k[1].length ? 0 : parseInt(k[1], 10)) ||
          Db(0 == h[2].length, 0 == k[2].length) || Db(h[2], k[2]);
      h = h[3];
      k = k[3]
    } while (0 == c)
  }
  return c
}
function Db(a, b) {
  return a < b ? -1 : a > b ? 1 : 0
};
function(){}
Eb.prototype.aa = !0;
Eb.prototype.Y = function() {
  return this.f.toString()
};
Eb.prototype.Ea = !0;
Eb.prototype.Aa = function() {
  return 1
};
function Gb(a) {
  if (a instanceof Eb && a.constructor === Eb) return a.f;
  Ga(a);
  return 'type_error:SafeUrl'
}
var Hb =
        /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
    Ib = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    Jb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, Fb = {},
    Kb = new Eb('about:invalid#zClosurez', Fb);
var Lb;
a: {
  var Mb = v.navigator; if (Mb) {
    var Nb = Mb.userAgent;
    if (Nb) {
      Lb = Nb;
      break a
    }
  } Lb = ''
} function(){};
function(){}
function Pb() {
  return C('Safari') &&
      !(Qb() || C('Coast') || C('Opera') || C('Edge') || C('Edg/') ||
        C('OPR') || Ob() || C('Silk') || C('Android'))
}
function(){}
function(){};
function(){}
Sb.prototype.Ea = !0;
Sb.prototype.Aa = function() {
  return this.g
};
Sb.prototype.aa = !0;
Sb.prototype.Y = function() {
  return this.f.toString()
};
function Ub(a) {
  if (a instanceof Sb && a.constructor === Sb) return a.f;
  Ga(a);
  return 'type_error:SafeHtml'
}
var Tb = {};
function Vb(a, b) {
  void 0 === sb && (sb = Sa('goog#html'));
  var c = (c = sb) ? c.createHTML(a) : a;
  return new Sb(c, b, Tb)
}
var Wb = new Sb(v.trustedTypes && v.trustedTypes.emptyHTML || '', 0, Tb);
var Xb = Wa(function(){});
function(){};
function(){}
function(){}
function(){};
var bc =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function(){}
function(){}
function ec(a, b) {
  if (!b) return a;
  var c = a.indexOf('#');
  0 > c && (c = a.length);
  var d = a.indexOf('?');
  if (0 > d || d > c) {
    d = c;
    var e = ''
  } else
    e = a.substring(d + 1, c);
  c = [a.substr(0, d), e, a.substr(c)];
  d = c[1];
  c[1] = b ? d ? d + '&' + b : b : d;
  return c[0] + (c[1] ? '?' + c[1] : '') + c[2]
}
function(){}
function gc(a, b) {
  for (var c = [], d = b || 0; d < a.length; d += 2) fc(a[d], a[d + 1], c);
  return c.join('&')
}
function(){}
function ic(a, b) {
  var c = 2 == arguments.length ? gc(arguments[1], 0) : gc(arguments, 1);
  return ec(a, c)
}
function(){}
var kc = /#|$/;
function(){};
function(){}
function(){};
function(){}
oc[' '] = Ea;
function pc(a, b, c, d) {
  d = d ? d(b) : b;
  return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
};
var qc = C('Opera'), D = C('Trident') || C('MSIE'), rc = C('Edge'),
    sc = rc || D,
    tc = C('Gecko') &&
    !(-1 != Lb.toLowerCase().indexOf('webkit') && !C('Edge')) &&
    !(C('Trident') || C('MSIE')) && !C('Edge'),
    uc = -1 != Lb.toLowerCase().indexOf('webkit') && !C('Edge'),
    vc = C('Macintosh'), wc = C('Windows'), xc = C('Android'), yc = mc(),
    zc = C('iPad'), Ac = C('iPod'), Bc = nc();
function Cc() {
  var a = v.document;
  return a ? a.documentMode : void 0
}
var Dc;
a: {
  var Fc = '',
  Gc =
      function() {
        var a = Lb;
        if (tc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (rc) return /Edge\/([\d\.]+)/.exec(a);
        if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (uc) return /WebKit\/(\S+)/.exec(a);
        if (qc) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();
  Gc && (Fc = Gc ? Gc[1] : '');
  if (D) {
    var Hc = Cc();
    if (null != Hc && Hc > parseFloat(Fc)) {
      Dc = String(Hc);
      break a
    }
  } Dc = Fc
} var Ic = Dc,
      Jc = {};
function(){}
var Lc;
if (v.document && D) {
  var Mc = Cc();
  Lc = Mc ? Mc : parseInt(Ic, 10) || void 0
} else
  Lc = void 0;
var Nc = Lc;
var Oc = Ob(), Pc = mc() || C('iPod'), Qc = C('iPad'), Rc = Rb(), Sc = Qb(),
    Tc = Pb() && !nc();
var Uc = {}, Vc = null;
var Wc = window;
function(){}
function(){}
function(){}
var Zc = {};
function(){}
m = ad.prototype;
m.isEnabled = function() {
  return navigator.cookieEnabled
};
m.set = function(a, b, c) {
  var d = !1;
  if ('object' === typeof c) {
    var e = c.wc;
    d = c.secure || !1;
    var f = c.domain || void 0;
    var g = c.path || void 0;
    var h = c.Ja
  }
  if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
  if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
  void 0 === h && (h = -1);
  this.f.cookie = a + '=' + b + (f ? ';domain=' + f : '') +
      (g ? ';path=' + g : '') +
      (0 > h      ? '' :
           0 == h ? ';expires=' + (new Date(1970, 1, 1)).toUTCString() :
                    ';expires=' + (new Date(Qa() + 1E3 * h)).toUTCString()) +
      (d ? ';secure' : '') + (null != e ? ';samesite=' + e : '')
};
m.get = function(){};
m.remove = function(){};
m.isEmpty = function() {
  return !this.f.cookie
};
m.clear = function(){};
var bd = new ad('undefined' == typeof document ? null : document);
var cd = !D || 9 <= Number(Nc),
    dd = !tc && !D || D && 9 <= Number(Nc) || tc && Kc('1.9.1'),
    ed = D && !Kc('9');
function(){}
m = E.prototype;
m.clone = function() {
  return new E(this.x, this.y)
};
m.equals = function(){};
function(){}
m.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this
};
m.floor = function(){};
m.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this
};
function gd(a, b) {
  this.width = a;
  this.height = b
}
m = gd.prototype;
m.clone = function() {
  return new gd(this.width, this.height)
};
m.aspectRatio = function() {
  return this.width / this.height
};
m.isEmpty = function(){};
m.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
m.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
m.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
var nd = {
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
function(){}
function sd(a) {
  return a.parentWindow || a.defaultView
}
function(){}
function(){}
function(){}
function(){}
function wd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function(){}
function(){}
function(){}
function(){}
function Ad(a, b) {
  if ('textContent' in a)
    a.textContent = b;
  else if (3 == a.nodeType)
    a.data = String(b);
  else if (a.firstChild && 3 == a.firstChild.nodeType) {
    for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
    a.firstChild.data = String(b)
  } else {
    for (var c; c = a.firstChild;) a.removeChild(c);
    c = jd(a);
    a.appendChild(c.createTextNode(String(b)))
  }
}
function(){}
function(){}
var Ed = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1},
    Fd = {IMG: ' ', BR: '\n'};
function Gd(a) {
  var b;
  if ((b = 'A' == a.tagName && a.hasAttribute('href') || 'INPUT' == a.tagName ||
               'TEXTAREA' == a.tagName || 'SELECT' == a.tagName ||
               'BUTTON' == a.tagName ?
           !a.disabled && (!Hd(a) || Id(a)) :
           Hd(a) && Id(a)) &&
      D) {
    var c;
    'function' !== typeof a.getBoundingClientRect ||
            D&& null == a.parentElement ?
        c = {height: a.offsetHeight, width: a.offsetWidth} :
        c = a.getBoundingClientRect();
    a = null != c && 0 < c.height && 0 < c.width
  } else
    a = b;
  return a
}
function(){}
function Id(a) {
  a = a.tabIndex;
  return 'number' === typeof a && 0 <= a && 32768 > a
}
function(){}
function(){}
function Ld(a, b, c, d) {
  if (!b && !c) return null;
  var e = b ? String(b).toUpperCase() : null;
  return Md(a, function(){}, !0, d)
}
function J(a, b) {
  return Ld(a, null, b, void 0)
}
function(){}
function(){}
id.prototype.getElementsByTagName = function(){};
id.prototype.createElement = function(a) {
  return ud(this.f, a)
};
id.prototype.appendChild = function(a, b) {
  a.appendChild(b)
};
id.prototype.isElement = yd;
function(){}
function(){}
var Od = {
  Ub: 'allow-forms',
  Vb: 'allow-modals',
  Wb: 'allow-orientation-lock',
  Xb: 'allow-pointer-lock',
  Yb: 'allow-popups',
  Zb: 'allow-popups-to-escape-sandbox',
  ac: 'allow-presentation',
  cc: 'allow-same-origin',
  dc: 'allow-scripts',
  ec: 'allow-top-navigation',
  fc: 'allow-top-navigation-by-user-activation'
},
    Qd = Wa(function() {
      return Pd()
    });
function(){};
function(){}
Sd.prototype.i = !1;
Sd.prototype.fa = function() {
  return this.i
};
Sd.prototype.dispose = function() {
  this.i || (this.i = !0, this.X())
};
Sd.prototype.X = function() {
  if (this.l)
    for (; this.l.length;) this.l.shift()()
};
function(){};
function Ud(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
m = Ud.prototype;
m.getHeight = function() {
  return this.bottom - this.top
};
m.clone = function() {
  return new Ud(this.top, this.right, this.bottom, this.left)
};
m.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this
};
m.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this
};
m.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this
};
function Vd(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
Vd.prototype.clone = function() {
  return new Vd(this.left, this.top, this.width, this.height)
};
Vd.prototype.ceil = function(){};
Vd.prototype.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
Vd.prototype.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
var Wd = {};
function Xd() {}
function(){}
pa(Yd, Xd);
Yd.prototype.toString = function() {
  return this.f
};
new Yd('about:blank', Wd);
new Yd('about:invalid#zTSz', Wd);
function(){}
var ae = {};
function(){}
function(){}
function(){}
function(){}
function ee(a) {
  if (D && !(8 <= Number(Nc))) return a.offsetParent;
  var b = jd(a), c = ce(a, 'position'), d = 'fixed' == c || 'absolute' == c;
  for (a = a.parentNode; a && a != b; a = a.parentNode)
    if (11 == a.nodeType && a.host && (a = a.host), c = ce(a, 'position'),
        d = d && 'static' == c && a != b.documentElement && a != b.body,
        !d &&
            (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight ||
             'fixed' == c || 'absolute' == c || 'relative' == c))
      return a;
  return null
}
function fe(a) {
  for (var b = new Ud(0, Infinity, Infinity, 0), c = hd(a), d = c.f.body,
           e = c.f.documentElement, f = rd(c.f);
       a = ee(a);)
    if (!(D && 0 == a.clientWidth || uc && 0 == a.clientHeight && a == d) &&
        a != d && a != e && 'visible' != ce(a, 'overflow')) {
      var g = ge(a), h = new E(a.clientLeft, a.clientTop);
      g.x += h.x;
      g.y += h.y;
      b.top = Math.max(b.top, g.y);
      b.right = Math.min(b.right, g.x + a.clientWidth);
      b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
      b.left = Math.max(b.left, g.x)
    }
  d = f.scrollLeft;
  f = f.scrollTop;
  b.left = Math.max(b.left, d);
  b.top = Math.max(b.top, f);
  c = od(sd(c.f) || window);
  b.right = Math.min(b.right, d + c.width);
  b.bottom = Math.min(b.bottom, f + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ?
      b :
      null
}
function ge(a) {
  var b = jd(a), c = new E(0, 0);
  var d = b ? jd(b) : document;
  d = !D || 9 <= Number(Nc) || pd(hd(d).f) ? d.documentElement : d.body;
  if (a == d) return c;
  a = de(a);
  b = qd(hd(b).f);
  c.x = a.left + b.x;
  c.y = a.top + b.y;
  return c
}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function oe(a, b) {
  if (/^\d+px?$/.test(b)) return parseInt(b, 10);
  var c = a.style.left, d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  var e = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return +e
}
function pe(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null;
  return c ? oe(a, c) : 0
}
var qe = {thin: 2, medium: 4, thick: 6};
function re(a, b) {
  if ('none' == (a.currentStyle ? a.currentStyle[b + 'Style'] : null)) return 0;
  var c = a.currentStyle ? a.currentStyle[b + 'Width'] : null;
  return c in qe ? qe[c] : oe(a, c)
};
var se = (new Date).getTime();
function te(a) {
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
var ue = window, ve = document, we = ue.location;
function xe() {}
var ye = /\[native code\]/;
function K(a, b, c) {
  return a[b] = a[b] || c
}
function ze(a) {
  a = a.sort();
  for (var b = [], c = void 0, d = 0; d < a.length; d++) {
    var e = a[d];
    e != c && b.push(e);
    c = e
  }
  return b
}
function Ae() {
  var a;
  if ((a = Object.create) && ye.test(a))
    a = a(null);
  else {
    a = {};
    for (var b in a) a[b] = void 0
  }
  return a
}
var Be = K(ue, 'gapi', {});
var L;
L = K(ue, '___jsl', Ae());
K(L, 'I', 0);
K(L, 'hel', 10);
function Ce() {
  var a = we.href;
  if (L.dpo)
    var b = L.h;
  else {
    b = L.h;
    var c = RegExp('([#].*&|[#])jsh=([^&#]*)', 'g'),
        d = RegExp('([?#].*&|[?#])jsh=([^&#]*)', 'g');
    if (a = a && (c.exec(a) || d.exec(a))) try {
        b = decodeURIComponent(a[2])
      } catch (e) {
      }
  }
  return b
}
function De(a) {
  var b = K(L, 'PQ', []);
  L.PQ = [];
  var c = b.length;
  if (0 === c)
    a();
  else
    for (var d = 0, e = function(){}, f = 0; f < c; f++)
      b[f](e)
}
function Ee(a) {
  return K(K(L, 'H', Ae()), a, Ae())
};
function(){};
function(){}
function(){};
function(){};
var Je = K(L, 'perf', Ae());
K(Je, 'g', Ae());
var Ke = K(Je, 'i', Ae());
K(Je, 'r', []);
Ae();
Ae();
function Le(a, b, c) {
  b && 0 < b.length &&
      (b = Me(b), c && 0 < c.length && (b += '___' + Me(c)),
       28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b,
       b = K(Ke, '_p', Ae()), K(b, c, Ae())[a] = (new Date).getTime(), b = Je.r,
       'function' === typeof b ? b(a, '_p', c) : b.push([a, '_p', c]))
}
function Me(a) {
  return a.join('__').replace(/\./g, '_').replace(/\-/g, '_').replace(/,/g, '_')
};
var Ne = Ae(), Oe = [];
function Pe(a) {
  throw Error('Bad hint' + (a ? ': ' + a : ''));
}
Oe.push([
  'jsl',
  function(){}
]);
var Qe = /^(\/[a-zA-Z0-9_\-]+)+$/, Re = [/\/amp\//, /\/amp$/, /^\/amp$/],
    Se = /^[a-zA-Z0-9\-_\.,!]+$/, Te = /^gapi\.loaded_[0-9]+$/,
    Ue = /^[a-zA-Z0-9,._-]+$/;
function Ve(a, b, c, d) {
  var e = a.split(';'), f = e.shift(), g = Ne[f], h = null;
  g ? h = g(e, b, c, d) : Pe('no hint processor for: ' + f);
  h || Pe('failed to generate load url');
  b = h;
  c = b.match(We);
  (d = b.match(Xe)) && 1 === d.length && Ye.test(b) && c && 1 === c.length ||
      Pe('failed sanity: ' + a);
  return h
}
function Ze(a, b, c, d) {
  function e(f) {
    return encodeURIComponent(f).replace(/%2C/g, ',')
  }
  a = $e(a);
  Te.test(c) || Pe('invalid_callback');
  b = af(b);
  d = d && d.length ? af(d) : null;
  return [
    encodeURIComponent(a.pathPrefix).replace(/%2C/g, ',').replace(/%2F/g, '/'),
    '/k=', e(a.version), '/m=', e(b), d ? '/exm=' + e(d) : '',
    '/rt=j/sv=1/d=1/ed=1', a.sa ? '/am=' + e(a.sa) : '',
    a.Wa ? '/rs=' + e(a.Wa) : '', a.gb ? '/t=' + e(a.gb) : '', '/cb=', e(c)
  ].join('')
}
function $e(a) {
  '/' !== a.charAt(0) && Pe('relative path');
  for (var b = a.substring(1).split('/'), c = []; b.length;) {
    a = b.shift();
    if (!a.length || 0 == a.indexOf('.'))
      Pe('empty/relative directory');
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
  Qe.test(b) || Pe('invalid_prefix');
  c = 0;
  for (d = Re.length; c < d; ++c) Re[c].test(b) && Pe('invalid_prefix');
  c = bf(a, 'k', !0);
  d = bf(a, 'am');
  e = bf(a, 'rs');
  a = bf(a, 't');
  return {
    pathPrefix: b, version: c, sa: d, Wa: e, gb: a
  }
}
function af(a) {
  for (var b = [], c = 0, d = a.length; c < d; ++c) {
    var e = a[c].replace(/\./g, '_').replace(/-/g, '_');
    Ue.test(e) && b.push(e)
  }
  return b.join(',')
}
function bf(a, b, c) {
  a = a[b];
  !a && c && Pe('missing: ' + b);
  if (a) {
    if (Se.test(a)) return a;
    Pe('invalid: ' + b)
  }
  return null
}
var Ye =
        /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
    Xe = /\/cb=/g, We = /\/\//g;
function cf() {
  var a = Ce();
  if (!a) throw Error('Bad hint');
  return a
}
Ne.m = function(){};
var df = decodeURI('%73cript'), ef = /^[-+_0-9\/A-Za-z]+={0,2}$/;
function ff(a, b) {
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
function gf() {
  var a = L.nonce;
  return void 0 !== a ?
      a && a === String(a) && a.match(ef) ? a : L.nonce = null :
      ve.querySelector ?
      (a = ve.querySelector('script[nonce]')) ?
      (a = a.nonce || a.getAttribute('nonce') || '',
       a && a === String(a) && a.match(ef) ? L.nonce = a : L.nonce = null) :
      null :
      null
}
function hf(a) {
  if ('loading' != ve.readyState)
    jf(a);
  else {
    var b = gf(), c = '';
    null !== b && (c = ' nonce="' + b + '"');
    a = '<' + df + ' src="' + encodeURI(a) + '"' + c + '></' + df + '>';
    ve.write(kf ? kf.createHTML(a) : a)
  }
}
function jf(a) {
  var b = ve.createElement(df);
  b.setAttribute('src', kf ? kf.createScriptURL(a) : a);
  a = gf();
  null !== a && b.setAttribute('nonce', a);
  b.async = 'true';
  (a = ve.getElementsByTagName(df)[0]) ?
      a.parentNode.insertBefore(b, a) :
      (ve.head || ve.body || ve.documentElement).appendChild(b)
}
function lf(a, b) {
  var c = b && b._c;
  if (c)
    for (var d = 0; d < Oe.length; d++) {
      var e = Oe[d][0], f = Oe[d][1];
      f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b)
    }
}
function mf(a, b, c) {
  nf(function(){}, c)
}
function of (a, b) {
  var c = b || {};
  'function' == typeof b && (c = {}, c.callback = b);
  lf(a, c);
  var d = a ? a.split(':') : [], e = c.h || cf(), f = K(L, 'ah', Ae());
  if (f['::'] && d.length) {
    for (var g = [], h = null; h = d.shift();) {
      var k = h.split('.');
      k = f[h] || f[k[1] && 'ns:' + k[0] || ''] || e;
      var l = g.length && g[g.length - 1] || null, n = l;
      l && l.hint == k || (n = {hint: k, features: []}, g.push(n));
      n.features.push(h)
    }
    var p = g.length;
    if (1 < p) {
      var q = c.callback;
      q && (c.callback = function() {
        0 == --p && q()
      })
    }
    for (; d = g.shift();) pf(d.features, c, d.hint)
  } else
    pf(d || [], c, e)
}
function pf(a, b, c) {
  function d(oa, Na) {
    if (p) return 0;
    ue.clearTimeout(n);
    q.push.apply(q, w);
    var Ec = ((Be || {}).config || {}).update;
    Ec ? Ec(f) : f && K(L, 'cu', []).push(f);
    if (Na) {
      Le('me0', oa, t);
      try {
        mf(Na, c, l)
      } finally {
        Le('me1', oa, t)
      }
    }
    return 1
  }
  a = ze(a) || [];
  var e = b.callback, f = b.config, g = b.timeout, h = b.ontimeout,
      k = b.onerror, l = void 0;
  'function' == typeof k && (l = k);
  var n = null, p = !1;
  if (g && !h || !g && h)
    throw 'Timeout requires both the timeout parameter and ontimeout parameter to be set';
  k = K(Ee(c), 'r', []).sort();
  var q = K(Ee(c), 'L', []).sort(), t = [].concat(k);
  0 < g && (n = ue.setTimeout(function() {
    p = !0;
    h()
  }, g));
  var w = ff(a, q);
  if (w.length) {
    w = ff(a, k);
    var F = K(L, 'CP', []), I = F.length;
    F[I] = function(oa) {
      function Na() {
        var Dd = F[I + 1];
        Dd && Dd()
      }
      function Ec(Dd) {
        F[I] = null;
        d(w, oa) && De(function(){})
      }
      if (!oa) return 0;
      Le('ml1', w, t);
      0 < I && F[I - 1] ? F[I] = function() {
        Ec(Na)
      } : Ec(Na)
    };
    if (w.length) {
      var qb = 'loaded_' + L.I++;
      Be[qb] = function(oa) {
        F[I](oa);
        Be[qb] = null
      };
      a = Ve(c, w, 'gapi.' + qb, k);
      k.push.apply(k, w);
      Le('ml0', w, t);
      b.sync || ue.___gapisync ? hf(a) : jf(a)
    } else
      F[I](xe)
  } else
    d(w) && e && e()
}
var kf = Sa('goog#gapi');
function nf(a, b) {
  if (L.hee && 0 < L.hel) try {
      return a()
    } catch (c) {
      b && b(c), L.hel--, of('debug_error', function() {
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
Be.load = function(a, b) {
  return nf(function() {
    return of(a, b)
  })
};
function(){}
qf.prototype.set = function(){};
qf.prototype.get = function(a) {
  return !!this.g[a]
};
function(){};
function(){}
sf.prototype.get = function() {
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
function uf(a) {
  v.setTimeout(function() {
    throw a;
  }, 0)
}
var vf;
function(){};
function xf() {
  this.g = this.f = null
}
var zf = new sf(
    function() {
      return new yf
    },
    function(a) {
      a.reset()
    });
xf.prototype.add = function(a, b) {
  var c = zf.get();
  c.set(a, b);
  this.g ? this.g.next = c : this.f = c;
  this.g = c
};
xf.prototype.remove = function() {
  var a = null;
  this.f &&
      (a = this.f, this.f = this.f.next, this.f || (this.g = null),
       a.next = null);
  return a
};
function yf() {
  this.next = this.scope = this.f = null
}
yf.prototype.set = function(a, b) {
  this.f = a;
  this.scope = b;
  this.next = null
};
yf.prototype.reset = function() {
  this.next = this.scope = this.f = null
};
function(){}
var Bf;
function(){}
var Df = !1, Ef = new xf;
function(){};
function(){}
function(){}
If.prototype.reset = function() {
  this.context = this.onRejected = this.i = this.f = null;
  this.g = !1
};
var Jf = new sf(
    function() {
      return new If
    },
    function(a) {
      a.reset()
    });
function(){}
function(){}
function Mf(a) {
  return new Gf(function(b, c) {
    c(a)
  })
}
Gf.prototype.then = function(a, b, c) {
  return Nf(
      this, 'function' === typeof a ? a : null,
      'function' === typeof b ? b : null, c)
};
Gf.prototype.$goog_Thenable = !0;
function Of(a, b) {
  var c = Kf(b, b, void 0);
  c.g = !0;
  Pf(a, c)
}
function(){}
Gf.prototype.cancel = function(){};
function(){}
function(){}
function(){}
Gf.prototype.J = function(a) {
  this.f = 0;
  Hf(this, 2, a)
};
Gf.prototype.T = function(a) {
  this.f = 0;
  Hf(this, 3, a)
};
function(){}
function(){}
function(){}
function(){}
Gf.prototype.F = function() {
  for (var a; a = Tf(this);) Uf(this, a, this.f, this.B);
  this.A = !1
};
function(){}
function(){}
function(){}
var Zf = uf;
function Rf(a) {
  Ta.call(this, a)
}
A(Rf, Ta);
Rf.prototype.name = 'cancel';
function(){}
A($f, Sd);
m = $f.prototype;
m.Z = 0;
m.X = function(){};
m.start = function(){};
m.stop = function(){};
m.isActive = function() {
  return 0 != this.Z
};
m.ob = function() {
  this.Z = 0;
  this.f && this.f.call(this.g)
};
function(){};
function(){}
A(bg, ag);
bg.prototype.reset = function() {
  this.f[0] = 1732584193;
  this.f[1] = 4023233417;
  this.f[2] = 2562383102;
  this.f[3] = 271733878;
  this.f[4] = 3285377520;
  this.o = this.i = 0
};
function(){}
bg.prototype.update = function(){};
bg.prototype.digest = function(){};
var dg = 'StopIteration' in v ? v.StopIteration :
                                {message: 'StopIteration', stack: ''};
function eg() {}
eg.prototype.next = function() {
  throw dg;
};
eg.prototype.N = function() {
  return this
};
function(){}
function(){}
function(){};
function(){}
function(){}
m = ig.prototype;
m.equals = function(){};
function lg(a, b) {
  return a === b
}
m.isEmpty = function() {
  return 0 == this.g
};
m.clear = function(){};
m.remove = function(){};
function(){}
m.get = function(){};
m.set = function(){};
m.forEach = function(){};
m.clone = function() {
  return new ig(this)
};
m.N = function(){};
function(){}
function(){}
function(){}
function(){}
function(){}
function pg(a, b) {
  if (a.classList)
    B(b, function(f) {
      N(a, f)
    });
  else {
    var c = {};
    B(ng(a), function(f) {
      c[f] = !0
    });
    B(b, function(f) {
      c[f] = !0
    });
    var d = '', e;
    for (e in c) d += 0 < d.length ? ' ' + e : e;
    og(a, d)
  }
}
function(){}
function(){}
function(){}
function tg(a, b, c) {
  M(a, b) && (qg(a, b), N(a, c))
}
function ug(a, b) {
  var c = !M(a, b);
  sg(a, b, c)
};
var vg = !D && !Pb();
function wg(a, b) {
  if (/-[a-z]/.test(b)) return null;
  if (vg && a.dataset) {
    if (Rb() && !(b in a.dataset)) return null;
    var c = a.dataset[b];
    return void 0 === c ? null : c
  }
  return a.getAttribute(
      'data-' + String(b).replace(/([A-Z])/g, '-$1').toLowerCase())
};
function(){}
function zg() {}
function(){}
var Bg = {
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
    Cg = /\uffff/.test('\uffff') ? /[\\"\x00-\x1f\x7f-\uffff]/g :
                                   /[\\"\x00-\x1f\x7f-\xff]/g;
function(){};
var Dg = new WeakMap;
function Eg(a, b) {
  for (var c = [a], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
  return c.join('\x0B')
};
var Fg = function(){}();
function(){}
var Hg = function(){}();
function Ig(a, b, c, d, e, f, g) {
  var h;
  if (h = c.offsetParent) {
    var k = 'HTML' == h.tagName || 'BODY' == h.tagName;
    if (!k || 'static' != ce(h, 'position')) {
      var l = ge(h);
      if (!k) {
        k = ne(h);
        var n;
        if (n = k) {
          n = Tc && 0 <= Cb(Hg, 10);
          var p;
          if (p = Bc) p = 0 <= Cb(Fg, 10);
          var q = Sc && 0 <= Cb(Hg, 85);
          n = tc || n || p || q
        }
        k = n ? -h.scrollLeft :
            !k || sc && Kc('8') || 'visible' == ce(h, 'overflowX') ?
                h.scrollLeft :
                h.scrollWidth - h.clientWidth - h.scrollLeft;
        l = fd(l, new E(k, h.scrollTop))
      }
    }
  }
  h = l || new E;
  l = me(a);
  if (k = fe(a))
    q = new Vd(k.left, k.top, k.right - k.left, k.bottom - k.top),
    k = Math.max(l.left, q.left),
    n = Math.min(l.left + l.width, q.left + q.width),
    k <= n &&
        (p = Math.max(l.top, q.top),
         q = Math.min(l.top + l.height, q.top + q.height),
         p <= q && (l.left = k, l.top = p, l.width = n - k, l.height = q - p));
  k = hd(a);
  p = hd(c);
  if (k.f != p.f) {
    n = k.f.body;
    p = sd(p.f);
    q = new E(0, 0);
    var t = (t = jd(n)) ? sd(t) : window;
    b: {
      try {
        oc(t.parent);
        var w = !0;
        break b
      } catch (qb) {} w = !1
    } if (w) {
      w = n;
      do {
        var F = t == p ? ge(w) : he(w);
        q.x += F.x;
        q.y += F.y
      } while (t && t != p && t != t.parent && (w = t.frameElement) &&
               (t = t.parent))
    }
    w = fd(q, ge(n));
    !D || 9 <= Number(Nc) || pd(k.f) || (w = fd(w, qd(k.f)));
    l.left += w.x;
    l.top += w.y
  }
  a = Jg(a, b);
  b = l.left;
  a&4 ? b += l.width : a & 2 && (b += l.width / 2);
  b = new E(b, l.top + (a & 1 ? l.height : 0));
  b = fd(b, h);
  e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
  var I;
  g && (I = fe(c)) &&
      (I.top -= h.y, I.right -= h.x, I.bottom -= h.y, I.left -= h.x);
  return Kg(b, c, d, f, I, g, void 0)
}
function Kg(a, b, c, d, e, f, g) {
  a = a.clone();
  var h = Jg(b, c);
  c = ke(b);
  g = g ? g.clone() : c.clone();
  a = a.clone();
  g = g.clone();
  var k = 0;
  if (d || 0 != h)
    h&4      ? a.x -= g.width + (d ? d.right : 0) :
        h& 2 ? a.x -= g.width / 2 :
               d && (a.x += d.left),
        h& 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
  if (f) {
    if (e) {
      d = a;
      h = g;
      k = 0;
      65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
      132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
      d.x < e.left && f&1 && (d.x = e.left, k |= 1);
      if (f & 16) {
        var l = d.x;
        d.x < e.left && (d.x = e.left, k |= 4);
        d.x + h.width > e.right &&
            (h.width = Math.min(e.right - d.x, l + h.width - e.left),
             h.width = Math.max(h.width, 0), k |= 4)
      }
      d.x + h.width > e.right && f&1 &&
          (d.x = Math.max(e.right - h.width, e.left), k |= 1);
      f&2 &&
          (k |= (d.x < e.left ? 16 : 0) | (d.x + h.width > e.right ? 32 : 0));
      d.y < e.top && f&4 && (d.y = e.top, k |= 2);
      f&32 &&
          (l = d.y, d.y < e.top && (d.y = e.top, k |= 8),
           d.y + h.height > e.bottom &&
               (h.height = Math.min(e.bottom - d.y, l + h.height - e.top),
                h.height = Math.max(h.height, 0), k |= 8));
      d.y + h.height > e.bottom && f&4 &&
          (d.y = Math.max(e.bottom - h.height, e.top), k |= 2);
      f&8 &&
          (k |= (d.y < e.top ? 64 : 0) | (d.y + h.height > e.bottom ? 128 : 0));
      e = k
    } else
      e = 256;
    k = e
  }
  f = new Vd(0, 0, 0, 0);
  f.left = a.x;
  f.top = a.y;
  f.width = g.width;
  f.height = g.height;
  e = k;
  if (e & 496) return e;
  a = new E(f.left, f.top);
  a instanceof E ? (g = a.x, a = a.y) : (g = a, a = void 0);
  b.style.left = je(g, !1);
  b.style.top = je(a, !1);
  g = new gd(f.width, f.height);
  c == g || c && g && c.width == g.width && c.height == g.height ||
      (c = g, g = jd(b), a = pd(hd(g).f),
       !D || Kc('10') || a && Kc('8') ?
           (b = b.style,
            tc     ? b.MozBoxSizing = 'border-box' :
                uc ? b.WebkitBoxSizing = 'border-box' :
                     b.boxSizing = 'border-box',
            b.width = Math.max(c.width, 0) + 'px',
            b.height = Math.max(c.height, 0) + 'px') :
           (g = b.style,
            a ? (D ? (a = pe(b, 'paddingLeft'), f = pe(b, 'paddingRight'),
                      d = pe(b, 'paddingTop'), h = pe(b, 'paddingBottom'),
                      a = new Ud(d, f, h, a)) :
                     (a = be(b, 'paddingLeft'), f = be(b, 'paddingRight'),
                      d = be(b, 'paddingTop'), h = be(b, 'paddingBottom'),
                      a = new Ud(
                          parseFloat(d), parseFloat(f), parseFloat(h),
                          parseFloat(a))),
                 !D || 9 <= Number(Nc) ?
                     (f = be(b, 'borderLeftWidth'),
                      d = be(b, 'borderRightWidth'),
                      h = be(b, 'borderTopWidth'),
                      b = be(b, 'borderBottomWidth'),
                      b = new Ud(
                          parseFloat(h), parseFloat(d), parseFloat(b),
                          parseFloat(f))) :
                     (f = re(b, 'borderLeft'), d = re(b, 'borderRight'),
                      h = re(b, 'borderTop'), b = re(b, 'borderBottom'),
                      b = new Ud(h, d, b, f)),
                 g.pixelWidth = c.width - b.left - a.left - a.right - b.right,
                 g.pixelHeight =
                     c.height - b.top - a.top - a.bottom - b.bottom) :
                (g.pixelWidth = c.width, g.pixelHeight = c.height)));
  return e
}
function(){};
function(){}
A(O, Sd);
m = O.prototype;
m.subscribe = function(){};
function Lg(a, b) {
  var c = !1, d = a.subscribe('ROOT_MENU_REMOVED', function(e) {
    c || (c = !0, this.W(d), b.apply(void 0, arguments))
  }, a)
}
function Mg(a, b, c) {
  if (b = a.g[b]) {
    var d = a.f;
    (b = bb(b, function(e) {
       return d[e + 1] == c && void 0 == d[e + 2]
     })) && a.W(b)
  }
}
m.W = function(){};
m.M = function(){};
function(){}
m.clear = function(){};
function Og(a, b) {
  if (b) {
    var c = a.g[b];
    return c ? c.length : 0
  }
  c = 0;
  for (var d in a.g) c += Og(a, d);
  return c
}
m.X = function(){};
function Pg(a) {
  this.f = a
}
Pg.prototype.set = function(){};
Pg.prototype.get = function(){};
Pg.prototype.remove = function(a) {
  this.f.remove(a)
};
function Qg(a) {
  this.f = a
}
A(Qg, Pg);
function Rg(a) {
  this.data = a
}
function(){}
Qg.prototype.set = function(){};
Qg.prototype.g = function(){};
Qg.prototype.get = function(){};
function Tg(a) {
  this.f = a
}
A(Tg, Qg);
Tg.prototype.set = function(){};
Tg.prototype.g = function(){};
function Ug() {};
function Vg() {}
A(Vg, Ug);
Vg.prototype.clear = function(){};
function Wg(a) {
  this.f = a
}
A(Wg, Vg);
m = Wg.prototype;
m.isAvailable = function(){};
m.set = function(){};
m.get = function(){};
m.remove = function(a) {
  this.f.removeItem(a)
};
m.N = function(){};
m.clear = function() {
  this.f.clear()
};
m.key = function(a) {
  return this.f.key(a)
};
function(){}
A(Xg, Wg);
function(){}
A(Yg, Vg);
var $g = {
  '.': '.2E',
  '!': '.21',
  '~': '.7E',
  '*': '.2A',
  '\'': '.27',
  '(': '.28',
  ')': '.29',
  '%': '.'
},
    Zg = null;
function(){}
m = Yg.prototype;
m.isAvailable = function() {
  return !!this.f
};
m.set = function(){};
m.get = function(){};
m.remove = function(){};
m.N = function(){};
m.clear = function(){};
function(){};
function(){}
A(ch, Vg);
ch.prototype.set = function(){};
ch.prototype.get = function(){};
ch.prototype.remove = function(){};
ch.prototype.N = function(){};
var dh =
    window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
z('yt.config_', dh);
function(){}
function(){};
var fh = [];
function(){}
function(){}
function ih(a) {
  var b = x('yt.logging.errors.log');
  b ? b(a, 'ERROR', void 0, void 0, void 0) :
      (b = P('ERRORS', []), b.push([a, 'ERROR', void 0, void 0, void 0]),
       eh('ERRORS', b))
}
function(){};
function(){}
function lh(a) {
  window.clearTimeout(a)
};
var mh = v.ytPubsubPubsubInstance || new O,
    nh = v.ytPubsubPubsubSubscribedKeys || {},
    oh = v.ytPubsubPubsubTopicToKeys || {},
    ph = v.ytPubsubPubsubIsSynchronous || {};
function qh(a, b, c) {
  var d = rh();
  if (d) {
    var e = d.subscribe(a, function() {
      var f = arguments;
      var g = function(){};
      try {
        ph[a] ? g() : kh(g, 0)
      } catch (h) {
        ih(h)
      }
    }, c);
    nh[e] = !0;
    oh[a] || (oh[a] = []);
    oh[a].push(e);
    return e
  }
  return 0
}
function sh(a) {
  var b = rh();
  b &&
      ('number' === typeof a ? a = [a] :
                               'string' === typeof a && (a = [parseInt(a, 10)]),
       B(a, function(c) {
         b.unsubscribeByKey(c);
         delete nh[c]
       }))
}
function th(a, b) {
  var c = rh();
  return c ? c.publish.apply(c, arguments) : !1
}
function uh(a, b) {
  ph[a] = !0;
  var c = rh();
  c && c.publish.apply(c, arguments);
  ph[a] = !1
}
function rh() {
  return v.ytPubsubPubsubInstance
}
O.prototype.subscribe = O.prototype.subscribe;
O.prototype.unsubscribeByKey = O.prototype.W;
O.prototype.publish = O.prototype.M;
O.prototype.clear = O.prototype.clear;
z('ytPubsubPubsubInstance', mh);
z('ytPubsubPubsubTopicToKeys', oh);
z('ytPubsubPubsubIsSynchronous', ph);
z('ytPubsubPubsubSubscribedKeys', nh);
function vh(a, b, c) {
  a &&
      (a.dataset ? a.dataset[wh(b)] = String(c) :
                   a.setAttribute('data-' + b, c))
}
function(){}
function yh(a, b) {
  a && (a.dataset ? delete a.dataset[wh(b)] : a.removeAttribute('data-' + b))
}
var zh = {};
function(){};
function Q(a, b) {
  this.version = a;
  this.args = b
};
function R(a, b) {
  this.topic = a;
  this.f = b
}
R.prototype.toString = function() {
  return this.topic
};
function Ah() {}
function Bh(a, b) {
  return Ch(a, 0, b)
}
function(){};
function Eh() {}
pa(Eh, Ah);
function(){}
Eh.prototype.start = function(){};
Fa(Eh);
Eh.C();
var Fh = x('ytPubsub2Pubsub2Instance') || new O;
O.prototype.subscribe = O.prototype.subscribe;
O.prototype.unsubscribeByKey = O.prototype.W;
O.prototype.publish = O.prototype.M;
O.prototype.clear = O.prototype.clear;
z('ytPubsub2Pubsub2Instance', Fh);
var Gh = x('ytPubsub2Pubsub2SubscribedKeys') || {};
z('ytPubsub2Pubsub2SubscribedKeys', Gh);
var Hh = x('ytPubsub2Pubsub2TopicToKeys') || {};
z('ytPubsub2Pubsub2TopicToKeys', Hh);
var Ih = x('ytPubsub2Pubsub2IsAsync') || {};
z('ytPubsub2Pubsub2IsAsync', Ih);
z('ytPubsub2Pubsub2SkipSubKey', null);
function(){}
function Kh(a, b, c) {
  var d = Jh();
  if (!d) return 0;
  var e = d.subscribe(a.toString(), function(f, g) {
    var h = x('ytPubsub2Pubsub2SkipSubKey');
    h && h == e || (h = function() {
      if (Gh[e]) try {
          if (g && a instanceof R && a != f) try {
              var k = a.f, l = g;
              if (!l.args || !l.version)
                throw Error(
                    'yt.pubsub2.Data.deserialize(): serializedData is incomplete.');
              try {
                if (!k.P) {
                  var n = new k;
                  k.P = n.version
                }
                var p = k.P
              } catch (q) {
              }
              if (!p || l.version != p)
                throw Error(
                    'yt.pubsub2.Data.deserialize(): serializedData version is incompatible.');
              try {
                g = Reflect.construct(k, eb(l.args))
              } catch (q) {
                throw q.message = 'yt.pubsub2.Data.deserialize(): ' + q.message,
                      q;
              }
            } catch (q) {
              throw q.message =
                  'yt.pubsub2.pubsub2 cross-binary conversion error for ' +
                  a.toString() + ': ' + q.message,
                    q;
            }
          b.call(c || window, g)
        } catch (q) {
          ih(q)
        }
    }, Ih[a.toString()] ? x('yt.scheduler.instance') ? Dh(h) : kh(h, 0) : h())
  });
  Gh[e] = !0;
  Hh[a.toString()] || (Hh[a.toString()] = []);
  Hh[a.toString()].push(e);
  return e
}
function(){}
function Jh() {
  return x('ytPubsub2Pubsub2Instance')
};
var Mh = 0;
function Nh(a) {
  var b = a.__yt_uid_key;
  b || (b = Oh(), a.__yt_uid_key = b);
  return b
}
function Ph(a, b) {
  a = G(a);
  b = G(b);
  return !!Md(a, function(c) {
    return c === b
  }, !0, void 0)
}
function Qh(a, b) {
  var c = ld(document, a, null, b);
  return c.length ? c[0] : null
}
function Rh() {
  var a = document, b;
  ab(
      [
        'fullscreenElement', 'webkitFullscreenElement', 'mozFullScreenElement',
        'msFullscreenElement'
      ],
      function(){});
  return b
}
function Sh() {
  sg(document.body, 'hide-players', !1);
  var a = kd('preserve-players');
  B(a, function(b) {
    qg(b, 'preserve-players')
  })
}
var Oh = x('ytDomDomGetNextId') || function() {
  return ++Mh
};
z('ytDomDomGetNextId', Oh);
var Th = {
  stopImmediatePropagation: 1,
  stopPropagation: 1,
  preventMouseEvent: 1,
  preventManipulation: 1,
  preventDefault: 1,
  layerX: 1,
  layerY: 1,
  screenX: 1,
  screenY: 1,
  scale: 1,
  rotation: 1,
  webkitMovementX: 1,
  webkitMovementY: 1
};
function(){}
Uh.prototype.preventDefault = function() {
  this.event &&
      (this.event.returnValue = !1,
       this.event.preventDefault && this.event.preventDefault())
};
Uh.prototype.stopPropagation = function(){};
Uh.prototype.stopImmediatePropagation = function() {
  this.event &&
      (this.event.cancelBubble = !0,
       this.event.stopImmediatePropagation &&
           this.event.stopImmediatePropagation())
};
var mb = v.ytEventsEventsListeners || {};
z('ytEventsEventsListeners', mb);
var Vh = v.ytEventsEventsCounter || {count: 0};
z('ytEventsEventsCounter', Vh);
function(){}
function T(a, b, c, d) {
  d = void 0 === d ? {} : d;
  if (!a || !a.addEventListener && !a.attachEvent) return '';
  var e = Wh(a, b, c, d);
  if (e) return e;
  e = ++Vh.count + '';
  var f =
      !('mouseenter' != b && 'mouseleave' != b || !a.addEventListener ||
        'onmouseenter' in document);
  var g = f ? function(){} : function(){};
  g = hh(g);
  a.addEventListener ?
      ('mouseenter' == b&& f     ? b = 'mouseover' :
           'mouseleave' == b&& f ? b = 'mouseout' :
                                   'mousewheel' == b &&
               'MozBoxSizing' in document.documentElement.style &&
               (b = 'MozMousePixelScroll'),
       Xh() || 'boolean' === typeof d ? a.addEventListener(b, g, d) :
                                        a.addEventListener(b, g, !!d.capture)) :
      a.attachEvent('on' + b, g);
  mb[e] = [a, b, c, g, d];
  return e
}
function Yh(a, b, c) {
  var d = a || document;
  return T(d, 'click', function(){})
}
function Zh(a) {
  a = a || window.event;
  a = a.target || a.srcElement;
  3 == a.nodeType && (a = a.parentNode);
  return a
}
var Xh = Wa(function() {
  var a = !1;
  try {
    var b = Object.defineProperty({}, 'capture', {
      get: function() {
        a = !0
      }
    });
    window.addEventListener('test', null, b)
  } catch (c) {
  }
  return a
});
function $h(a, b, c) {
  return Yh(a, b, function(d) {
    return M(d, c)
  })
}
function ai(a) {
  if (document.createEvent) {
    var b = document.createEvent('HTMLEvents');
    b.initEvent('click', !0, !0);
    a.dispatchEvent(b)
  } else
    b = document.createEventObject(), a.fireEvent('onclick', b)
}
function(){};
var ci = {}, di = 'ontouchstart' in document;
function ei(a, b, c) {
  switch (a) {
    case 'mouseover':
    case 'mouseout':
      var d = 3;
      break;
    case 'mouseenter':
    case 'mouseleave':
      d = 9
  }
  return Md(c, function(e) {
    return M(e, b)
  }, !0, d)
}
function fi(a) {
  var b = 'mouseover' == a.type && 'mouseenter' in ci ||
      'mouseout' == a.type && 'mouseleave' in ci,
      c = a.type in ci || b;
  if ('HTML' != a.target.tagName && c) {
    if (b) {
      b = 'mouseover' == a.type ? 'mouseenter' : 'mouseleave';
      c = ci[b];
      for (var d in c.g) {
        var e = ei(b, d, a.target);
        e && !Md(a.relatedTarget, function(f) {
          return f == e
        }, !0) && c.M(d, e, b, a)
      }
    }
    if (b = ci[a.type])
      for (d in b.g) (e = ei(a.type, d, a.target)) && b.M(d, e, a.type, a)
  }
}
T(document, 'blur', fi, !0);
T(document, 'change', fi, !0);
T(document, 'click', fi);
T(document, 'focus', fi, !0);
T(document, 'mouseover', fi);
T(document, 'mouseout', fi);
T(document, 'mousedown', fi);
T(document, 'keydown', fi);
T(document, 'keyup', fi);
T(document, 'keypress', fi);
T(document, 'cut', fi);
T(document, 'paste', fi);
di &&
    (T(document, 'touchstart', fi), T(document, 'touchend', fi),
     T(document, 'touchcancel', fi));
function gi(a) {
  this.o = a;
  this.B = {};
  this.J = [];
  this.F = []
}
m = gi.prototype;
m.K = function(){};
function U(a, b) {
  return 'yt-uix' + (a.o ? '-' + a.o : '') + (b ? '-' + b : '')
}
m.unregister = function() {
  sh(this.J);
  this.J.length = 0;
  Lh(this.F);
  this.F.length = 0
};
m.init = Ea;
m.dispose = Ea;
function hi(a, b, c) {
  a.J.push(qh(b, c, a))
}
function ii(a, b, c) {
  a.F.push(Kh(b, c, a))
}
function V(a, b, c, d) {
  d = U(a, d);
  var e = y(c, a);
  b in ci || (ci[b] = new O);
  ci[b].subscribe(d, e);
  a.B[c] = e
}
function W(a, b, c, d) {
  if (b in ci) {
    var e = ci[b];
    Mg(e, U(a, d), a.B[c]);
    0 >= Og(e) && (e.dispose(), delete ci[b])
  }
  delete a.B[c]
}
m.V = function(a, b, c) {
  var d = this.j(a, b);
  if (d && (d = x(d))) {
    var e = hb(arguments, 2);
    gb(e, 0, 0, a);
    d.apply(null, e)
  }
};
m.j = function(a, b) {
  return xh(a, b)
};
function(){};
var ki = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
z('yt.uix.widgets_', ki);
function(){}
function(){}
function ni(a) {
  return -1 != a.indexOf('?') ?
      (a = (a || '').split('#')[0], a = a.split('?', 2),
       mi(1 < a.length ? a[1] : a[0])) :
      {}
}
function(){}
function pi(a) {
  if (!b) var b = window.location.href;
  var c = a.match(bc)[1] || null, d = dc(a);
  c && d ? (a = a.match(bc), b = b.match(bc),
            a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) :
           a = d ? dc(b) == d &&
              (Number(b.match(bc)[4] || null) || null) ==
                  (Number(a.match(bc)[4] || null) || null) :
                   !0;
  return a
};
function qi(a) {
  a = void 0 === a ? {} : a;
  'function' === typeof a && (a = {callback: a});
  if (a.gapiHintOverride || P('GAPI_HINT_OVERRIDE')) {
    var b = ni(document.location.href).gapi_jsh;
    b && rb(a, {_c: {jsl: {h: b}}})
  }
  of('gapi.iframes:gapi.iframes.style.common', a)
};
function(){};
function si(a) {
  Q.call(this, 1, arguments);
  this.f = a
}
A(si, Q);
function(){}
A(ti, Q);
function ui(a, b, c) {
  Q.call(this, 3, arguments);
  this.i = a;
  this.g = b;
  this.f = null != c ? !!c : null
}
A(ui, Q);
function vi(a, b, c, d, e, f) {
  Q.call(this, 2, arguments);
  this.f = a;
  this.g = b;
  this.l = c || null;
  this.i = d || null;
  this.source = e || null;
  this.params = f || null
}
A(vi, Q);
function(){}
A(wi, Q);
function xi(a, b, c, d, e, f, g, h) {
  Q.call(this, 1, arguments);
  this.f = a;
  this.o = b;
  this.g = c;
  this.A = d || null;
  this.l = e || null;
  this.i = f || null;
  this.source = g || null;
  this.params = h || null
}
A(xi, Q);
var yi = new R('subscription-batch-subscribe', si),
    zi = new R('subscription-batch-unsubscribe', si),
    Ai = new R('subscription-subscribe', vi),
    Bi = new R('subscription-subscribe-loading', ti),
    Ci = new R('subscription-subscribe-loaded', ti),
    Di = new R('subscription-subscribe-success', wi),
    Ei = new R('subscription-subscribe-external', vi),
    Fi = new R('subscription-unsubscribe', xi),
    Gi = new R('subscription-unsubscirbe-loading', ti),
    Hi = new R('subscription-unsubscribe-loaded', ti),
    Ii = new R('subscription-unsubscribe-success', ti),
    Ji = new R('subscription-external-unsubscribe', xi),
    Ki = new R('subscription-enable-ypc', ti),
    Li = new R('subscription-disable-ypc', ti),
    Mi = new R('subscription-prefs', ui),
    Ni = new R('subscription-prefs-success', ui),
    Oi = new R('subscription-prefs-failure', ui);
function Pi() {
  var a = void 0 === a ? !1 : a;
  var b = Rh();
  if (a)
    for (; b && b.shadowRoot;) b = b.shadowRoot.fullscreenElement;
  return b ? b : null
};
function Qi(a, b) {
  (a = G(a)) && a.style && (a.style.display = b ? '' : 'none', sg(a, 'hid', !b))
}
function Ri(a) {
  return (a = G(a)) ? 'none' != a.style.display && !M(a, 'hid') : !1
}
function Si(a) {
  B(arguments, function(b) {
    !Ha(b) || b instanceof Element ? Qi(b, !0) : B(b, function(c) {
      Si(c)
    })
  })
}
function Ti(a) {
  B(arguments, function(b) {
    !Ha(b) || b instanceof Element ? Qi(b, !1) : B(b, function(c) {
      Ti(c)
    })
  })
}
(function(a, b) {
function c(f) {
  var g = u(f);
  f = g.next().value;
  g = fa(g);
  return a.apply(f, g)
}
function d(f) {
  f = u(f);
  f.next();
  f = fa(f);
  return b(e, f)
}
b = void 0 === b ? Eg : b;
var e = Ja(a);
return function(f) {
  for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
  h = this || v;
  var k = Dg.get(h);
  k || (k = {}, Dg.set(h, k));
  return pc(k, [this].concat(g instanceof Array ? g : fa(u(g))), c, d)
}
})(function(a) {
var b = ud(document, 'DIV');
a && (b.className = a);
b.style.cssText =
    'overflow:auto;position:absolute;top:0;width:100px;height:100px';
a = ud(document, 'DIV');
ie(a, '200px', '200px');
b.appendChild(a);
document.body.appendChild(b);
a = b.offsetWidth - b.clientWidth;
wd(b);
return a
});
function Ui() {
  gi.call(this, 'tooltip');
  this.f = 0;
  this.g = {}
}
A(Ui, gi);
Fa(Ui);
m = Ui.prototype;
m.register = function() {
  V(this, 'mouseover', this.ga);
  V(this, 'mouseout', this.R);
  V(this, 'focus', this.za);
  V(this, 'blur', this.ta);
  V(this, 'click', this.R);
  V(this, 'touchstart', this.ab);
  V(this, 'touchend', this.ia);
  V(this, 'touchcancel', this.ia)
};
m.unregister = function() {
  W(this, 'mouseover', this.ga);
  W(this, 'mouseout', this.R);
  W(this, 'focus', this.za);
  W(this, 'blur', this.ta);
  W(this, 'click', this.R);
  W(this, 'touchstart', this.ab);
  W(this, 'touchend', this.ia);
  W(this, 'touchcancel', this.ia);
  this.dispose();
  Ui.G.unregister.call(this)
};
m.dispose = function() {
  for (var a in this.g) this.R(this.g[a]);
  this.g = {}
};
m.ga = function(a) {
  if (!(this.f && 1E3 > Qa() - this.f)) {
    var b = parseInt(this.j(a, 'tooltip-hide-timer'), 10);
    b && (yh(a, 'tooltip-hide-timer'), lh(b));
    b = y(function() {
      Vi(this, a);
      yh(a, 'tooltip-show-timer')
    }, this);
    var c = parseInt(this.j(a, 'tooltip-show-delay'), 10) || 0;
    b = kh(b, c);
    vh(a, 'tooltip-show-timer', b.toString());
    a.title && (ji(a, Wi(this, a)), a.title = '');
    b = Ja(a).toString();
    this.g[b] = a
  }
};
m.R = function(a) {
  var b = parseInt(this.j(a, 'tooltip-show-timer'), 10);
  b && (lh(b), yh(a, 'tooltip-show-timer'));
  b = y(function() {
    if (a) {
      var c = G(Xi(this, a));
      c && (Yi(c), wd(c), yh(a, 'content-id'));
      c = G(Xi(this, a, 'arialabel'));
      wd(c)
    }
    yh(a, 'tooltip-hide-timer')
  }, this);
  b = kh(b, 50);
  vh(a, 'tooltip-hide-timer', b.toString());
  if (b = this.j(a, 'tooltip-text')) a.title = b;
  b = Ja(a).toString();
  delete this.g[b]
};
m.za = function(){};
m.ta = function(a) {
  this.f = 0;
  this.R(a)
};
m.ab = function(a, b, c) {
  c.changedTouches &&
      (this.f = 0,
       (a = ei(b, U(this), c.changedTouches[0].target)) && this.ga(a, b))
};
m.ia = function(a, b, c) {
  c.changedTouches &&
      (this.f = Qa(),
       (a = ei(b, U(this), c.changedTouches[0].target)) && this.R(a))
};
function Zi(a, b, c) {
  ji(b, c);
  a = a.j(b, 'content-id');
  (a = G(a)) && Ad(a, c)
}
function Wi(a, b) {
  return a.j(b, 'tooltip-text') || b.title
}
function Vi(a, b) {
  if (b) {
    var c = Wi(a, b);
    if (c) {
      var d = G(Xi(a, b));
      if (!d) {
        d = document.createElement('div');
        d.id = Xi(a, b);
        og(d, U(a, 'tip'));
        var e = document.createElement('div');
        og(e, U(a, 'tip-body'));
        var f = document.createElement('div');
        og(f, U(a, 'tip-arrow'));
        var g = document.createElement('div');
        g.setAttribute('aria-hidden', 'true');
        og(g, U(a, 'tip-content'));
        var h = $i(a, b), k = Xi(a, b, 'content');
        g.id = k;
        vh(b, 'content-id', k);
        e.appendChild(g);
        h && d.appendChild(h);
        d.appendChild(e);
        d.appendChild(f);
        var l = Jd(b);
        k = Xi(a, b, 'arialabel');
        f = document.createElement('div');
        N(f, U(a, 'arialabel'));
        f.id = k;
        l = b.hasAttribute('aria-label') ? b.getAttribute('aria-label') :
            'rtl' == document.body.getAttribute('dir') ? c + ' ' + l :
                                                         l + ' ' + c;
        Ad(f, l);
        b.setAttribute('aria-labelledby', k);
        k = Pi() || document.body;
        k.appendChild(f);
        k.appendChild(d);
        Zi(a, b, c);
        (c = parseInt(a.j(b, 'tooltip-max-width'), 10)) && e.offsetWidth > c &&
            (e.style.width = c + 'px', N(g, U(a, 'normal-wrap')));
        g = M(b, U(a, 'reverse'));
        aj(a, b, d, e, h, g) || aj(a, b, d, e, h, !g);
        var n = U(a, 'tip-visible');
        kh(function() {
          N(d, n)
        }, 0)
      }
    }
  }
}
function aj(a, b, c, d, e, f) {
  sg(c, U(a, 'tip-reverse'), f);
  var g = 0;
  f && (g = 1);
  var h = ke(b);
  f = new E((h.width - 10) / 2, f ? h.height : 0);
  var k = ge(b);
  Kg(new E(k.x + f.x, k.y + f.y), c, g);
  f = od(window);
  if (1 == c.nodeType)
    var l = he(c);
  else
    c = c.changedTouches ? c.changedTouches[0] : c,
    l = new E(c.clientX, c.clientY);
  c = ke(d);
  var n = Math.floor(c.width / 2);
  g = !!(f.height < l.y + h.height);
  h = !!(l.y < h.height);
  k = !!(l.x < n);
  f = !!(f.width < l.x + n);
  l = (c.width + 3) / -2 - -5;
  a = a.j(b, 'force-tooltip-direction');
  if ('left' == a || k)
    l = -5;
  else if ('right' == a || f)
    l = 20 - c.width - 3;
  a = Math.floor(l) + 'px';
  d.style.left = a;
  e &&
      (e.style.left = a, e.style.height = c.height + 'px',
       e.style.width = c.width + 'px');
  return !(g || h)
}
function Xi(a, b, c) {
  a = U(a) + Nh(b);
  c && (a += '-' + c);
  return a
}
function $i(a, b) {
  var c = null;
  wc && M(b, U(a, 'masked')) &&
      ((c = G('yt-uix-tooltip-shared-mask')) ?
           (c.parentNode.removeChild(c), Si(c)) :
           (c = ud(document, 'IFRAME'), c.src = 'javascript:""',
            c.id = 'yt-uix-tooltip-shared-mask', og(c, U(a, 'tip-mask'))));
  return c
}
function Yi(a) {
  var b = G('yt-uix-tooltip-shared-mask'), c = b && Md(b, function(d) {
                                                 return d == a
                                               }, !1, 2);
  b && c && (b.parentNode.removeChild(b), Ti(b), document.body.appendChild(b))
};
function bj(a) {
  var b = cj();
  if (b = window.open(
          b, 'loginPopup', 'width=375,height=440,resizable=yes,scrollbars=yes',
          !0)) {
    var c = qh('LOGGED_IN', function(d) {
      sh(P('LOGGED_IN_PUBSUB_KEY', void 0));
      eh('LOGGED_IN', !0);
      a(d)
    });
    eh('LOGGED_IN_PUBSUB_KEY', c);
    b.moveTo((screen.width - 375) / 2, (screen.height - 440) / 2)
  }
}
function cj() {
  var a = document.location.protocol + '//' + document.domain + '/post_login';
  a = ic(a, 'mode', 'subscribe');
  a = ic('/signin?context=popup', 'next', a);
  return a = ic(a, 'feature', 'sub_button')
}
z('yt.pubsub.publish', th);
function(){}
function(){}
function(){}
function fj() {
  var a = [], b = P('EXPERIMENTS_FORCED_FLAGS', {});
  for (c in b) a.push({key: c, value: String(b[c])});
  var c = P('EXPERIMENT_FLAGS', {});
  for (var d in c)
    d.startsWith('force_') && void 0 === b[d] &&
        a.push({key: d, value: String(c[d])});
  return a
};
var gj = window,
    hj = gj.ytcsi && gj.ytcsi.now ?
    gj.ytcsi.now :
    gj.performance && gj.performance.timing && gj.performance.now &&
        gj.performance.timing.navigationStart ?
    function(){} :
    function() {
      return (new Date).getTime()
    };
var ij = ej('initial_gel_batch_timeout', 1E3), jj = Math.pow(2, 16) - 1,
    kj = null, lj = 0, mj = void 0, nj = 0, oj = 0, pj = 0, qj = !0,
    rj = v.ytLoggingTransportLogPayloadsQueue_ || {};
z('ytLoggingTransportLogPayloadsQueue_', rj);
var sj = v.ytLoggingTransportGELQueue_ || new Map;
z('ytLoggingTransportGELQueue_', sj);
var tj = v.ytLoggingTransportTokensToCttTargetIds_ || {};
z('ytLoggingTransportTokensToCttTargetIds_', tj);
function uj() {
  lh(nj);
  lh(oj);
  oj = 0;
  mj && mj.isReady() ?
      (vj(sj), 'log_event' in rj && vj(Object.entries(rj.log_event)),
       sj.clear(), delete rj.log_event) :
      wj()
}
function wj() {
  X('web_gel_timeout_cap') && !oj && (oj = kh(uj, 6E4));
  lh(nj);
  var a = P('LOGGING_BATCH_TIMEOUT', ej('web_gel_debounce_ms', 1E4));
  X('shorten_initial_gel_batch_timeout') && qj && (a = ij);
  nj = kh(uj, a)
}
function(){}
function(){}
function(){};
var Cj = v.ytLoggingGelSequenceIdObj_ || {};
z('ytLoggingGelSequenceIdObj_', Cj);
function Dj(a, b, c, d) {
  d = void 0 === d ? {} : d;
  var e = {};
  e.eventTimeMs = Math.round(d.timestamp || hj());
  e[a] = b;
  a = String;
  d.timestamp ?
      b = -1 :
      (b = x('_lact', window), b = null == b ? -1 : Math.max(Qa() - b, 0));
  e.context = {lastActivityMs: a(b)};
  X('log_sequence_info_on_gel_web') && d.Xa &&
      (a = e.context, b = d.Xa, Cj[b] = b in Cj ? Cj[b] + 1 : 0,
       a.sequence = {index: Cj[b], groupKey: b}, d.pc && delete Cj[d.Xa]);
  d = d.oc;
  a = '';
  d &&
      (a = {},
       d.videoId ? a.videoId = d.videoId :
                   d.playlistId && (a.playlistId = d.playlistId),
       tj[d.token] = a, a = d.token);
  d = sj.get(a) || [];
  sj.set(a, d);
  d.push(e);
  c && (mj = new c);
  c = ej('web_logging_max_batch') || 100;
  e = hj();
  d.length >= c ? uj() : 10 <= e - pj && (wj(), pj = e)
};
function(){}
function(){}
function Hj(a) {
  var b = a.f;
  try {
    var c = b.screenX;
    var d = b.screenY
  } catch (l) {
  }
  try {
    var e = b.outerWidth;
    var f = b.outerHeight
  } catch (l) {
  }
  try {
    var g = b.innerWidth;
    var h = b.innerHeight
  } catch (l) {
  }
  b = [
    b.screenLeft, b.screenTop, c, d, b.screen ? b.screen.availWidth : void 0,
    b.screen ? b.screen.availTop : void 0, e, f, g, h
  ];
  c = a.f.top;
  try {
    var k = od(c || window).round()
  } catch (l) {
    k = new gd(-12245933, -12245933)
  }
  c = k;
  k = {};
  d = new qf;
  v.SVGElement && v.document.createElementNS && d.set(0);
  e = Rd();
  e['allow-top-navigation-by-user-activation'] && d.set(1);
  e['allow-popups-to-escape-sandbox'] && d.set(2);
  v.crypto && v.crypto.subtle && d.set(3);
  v.TextDecoder && v.TextEncoder && d.set(4);
  d = rf(d);
  k.bc = d;
  k.bih = c.height;
  k.biw = c.width;
  k.brdim = b.join();
  a = a.g;
  return k.vis = {
    visible: 1,
    hidden: 2,
    prerender: 3,
    preview: 4,
    unloaded: 5
  }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState ||
    ''] || 0,
         k.wgl = !!Wc.WebGLRenderingContext, k
}
var Fj = new function(){};
z('yt.ads_.signals_.getAdSignalsString', function(a) {
  return li(Ej(a))
});
var Ij = 'XMLHttpRequest' in v ? function() {
  return new XMLHttpRequest
} : null;
function(){};
var Kj = {
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
    Lj =
        'app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address'
            .split(' '),
    Mj = !1;
function Nj(a, b) {
  b = void 0 === b ? {} : b;
  var c = pi(a), d = X('web_ajax_ignore_global_headers_if_set'), e;
  for (e in Kj) {
    var f = P(Kj[e]);
    !f || !c && dc(a) || d && void 0 !== b[e] || (b[e] = f)
  }
  if (c || !dc(a))
    b['X-YouTube-Utc-Offset'] = String(-(new Date).getTimezoneOffset());
  (c || !dc(a)) &&
      (d = 'undefined' != typeof Intl ?
           (new Intl.DateTimeFormat).resolvedOptions().timeZone :
           null) &&
      (b['X-YouTube-Time-Zone'] = d);
  if (c || !dc(a)) b['X-YouTube-Ad-Signals'] = li(Ej(void 0));
  return b
}
function(){}
function(){}
function Sj(a, b) {
  var c = b.format || 'JSON';
  a = Qj(a, b);
  var d = Rj(a, b), e = !1,
      f = Tj(a, function(k) {
        if (!e) {
          e = !0;
          h && lh(h);
          a: switch (k && 'status' in k ? k.status : -1) {
            case 200:
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
            case 206:
            case 304:
              var l = !0;
              break a;
            default:
              l = !1
          }
          var n = null, p = 400 <= k.status && 500 > k.status,
              q = 500 <= k.status && 600 > k.status;
          if (l || p || q) n = Uj(a, c, k, b.nc);
          if (l)
            a: if (k && 204 == k.status) l = !0;
          else {
            switch (c) {
              case 'XML':
                l = 0 == parseInt(n && n.return_code, 10);
                break a;
              case 'RAW':
                l = !0;
                break a
            }
            l = !!n
          }
          n = n || {};
          p = b.context || v;
          l ? b.onSuccess && b.onSuccess.call(p, k, n) :
              b.onError && b.onError.call(p, k, n);
          b.ba && b.ba.call(p, k, n)
        }
      }, b.method, d, b.headers, b.responseType, b.withCredentials);
  if (b.ha && 0 < b.timeout) {
    var g = b.ha;
    var h = kh(function() {
      e || (e = !0, f.abort(), lh(h), g.call(b.context || v, f))
    }, b.timeout)
  }
}
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
function xj(a) {
  var b = {
    client: {
      hl: a.Ab,
      gl: a.zb,
      clientName: a.yb,
      clientVersion: a.innertubeContextClientVersion,
      configInfo: a.xb
    }
  },
      c = window.devicePixelRatio;
  c && 1 != c && (b.client.screenDensityFloat = String(c));
  c = P('EXPERIMENTS_TOKEN', '');
  '' !== c && (b.client.experimentsToken = c);
  c = fj();
  0 < c.length && (b.request = {internalExperimentFlags: c});
  a.appInstallData && X('web_log_app_install_experiments') &&
      (b.client.configInfo = b.client.configInfo || {},
       b.client.configInfo.appInstallData = a.appInstallData);
  P('DELEGATED_SESSION_ID') && !X('pageid_as_header_web') &&
      (b.user = {onBehalfOfUser: P('DELEGATED_SESSION_ID')});
  b.client = Object.assign(b.client, Yj());
  return b
}
function(){};
function(){}
function ck(a) {
  a = bk(a);
  var b = new bg;
  b.update(JSON.stringify(a, Object.keys(a).sort()));
  a = b.digest();
  b = '';
  for (var c = 0; c < a.length; c++)
    b += '0123456789ABCDEF'.charAt(Math.floor(a[c] / 16)) +
        '0123456789ABCDEF'.charAt(a[c] % 16);
  return b
};
function dk(a, b, c, d, e) {
  bd.set('yt-dev.' + a, b, {
    Ja: c,
    path: '/',
    domain: void 0 === d ? 'google.com' : d,
    secure: void 0 === e ? !1 : e
  })
}
function ek(a) {
  return bd.get('yt-dev.' + a, void 0)
};
function(){}
fk.prototype.set = function(){};
fk.prototype.get = function(a, b) {
  var c = void 0, d = !this.f;
  if (!d) try {
      c = this.f.get(a)
    } catch (e) {
      d = !0
    }
  if (d && (c = ek(a)) && (c = unescape(c), b)) try {
      c = JSON.parse(c)
    } catch (e) {
      this.remove(a), c = void 0
    }
  return c
};
fk.prototype.remove = function(){};
var gk;
function(){}
function(){}
function(){}
function(){};
function lk() {}
function mk() {
  var a = {}, b = Ie([]);
  b &&
      (a.Authorization = b, a['X-Goog-AuthUser'] = P('SESSION_INDEX', 0),
       'INNERTUBE_HOST_OVERRIDE' in dh ||
           (a['X-Origin'] = window.location.origin),
       X('pageid_as_header_web') && 'DELEGATED_SESSION_ID' in dh &&
           (a['X-Goog-PageId'] = P('DELEGATED_SESSION_ID')));
  return a
};
var nk = {identityType: 'UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN'};
var ok = Pc || Qc;
function pk(a) {
  var b = Lb;
  return b ? 0 <= b.toLowerCase().indexOf(a) : !1
};
function(){}
function rk(a) {
  return a
}
function(){}
Y.all = function(){};
Y.resolve = function(){};
Y.reject = function(a) {
  return new Y(function(b, c) {
    c(a)
  })
};
Y.prototype.then = function(){};
function(){}
function tk(a, b, c, d, e) {
  try {
    if ('FULFILLED' !== a.state.status)
      throw Error('calling handleResolve before the promise is fulfilled.');
    var f = c(a.state.value);
    f instanceof Y ? vk(a, b, f, d, e) : d(f)
  } catch (g) {
    e(g)
  }
}
function(){}
function(){};
function wk() {
  var a = Error.call(this, 'Transaction was aborted');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, wk.prototype)
}
pa(wk, Error);
function xk() {
  var a = Error.call(this, 'IndexedDB is not supported.');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, xk.prototype)
}
pa(xk, Error);
function yk() {
  var a = Error.call(
      this, 'The current transaction exceeded its quota limitations.');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, yk.prototype)
}
pa(yk, Error);
function zk() {
  var a = Error.call(
      this,
      'The current transaction may have failed because of exceeding quota limitations.');
  this.message = a.message;
  'stack' in a && (this.stack = a.stack);
  this.name = 'YtIdbKnownError';
  Object.setPrototypeOf(this, zk.prototype)
}
pa(zk, Error);
function Ak(a) {
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
function Dk(a) {
  return new Gf(function(b, c) {
    Ck(a, b, c)
  })
}
function(){};
function Fk(a) {
  this.f = a
}
m = Fk.prototype;
m.add = function(){};
m.clear = function(){};
m.close = function() {
  this.f.close()
};
m.count = function(a, b) {
  return Gk(this, [a], 'readonly', function(c) {
    return Hk(c, a).count(b)
  })
};
function(){}
m['delete'] = function(){};
m.get = function(){};
function Kk(a, b) {
  return Gk(a, ['databases'], 'readwrite', function(c) {
    return Lk(Hk(c, 'databases'), b, void 0)
  })
}
function Gk(a, b, c, d) {
  c = void 0 === c ? 'readonly' : c;
  return new Gf(function(e, f) {
    var g = a.f.transaction(b, c), h = new Mk(g, b);
    sk(d(h).then(function(k) {
      Qf(Nk(h).then(function() {
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
function Jk(a) {
  this.f = a
}
m = Jk.prototype;
m.add = function(a, b) {
  var c = b ? this.f.add(a, b) : this.f.add(a);
  return Ek(c)
};
m.clear = function(){};
m.count = function(a) {
  a = a ? this.f.count(a) : this.f.count();
  return Ek(a)
};
m['delete'] = function(){};
m.get = function(a) {
  return Ek(this.f.get(a))
};
m.index = function(a) {
  return new Ok(this.f.index(a))
};
m.getName = function() {
  return this.f.name
};
function Lk(a, b, c) {
  a = c ? a.f.put(b, c) : a.f.put(b);
  return Ek(a)
}
function Mk(a) {
  var b = this;
  this.f = a;
  this.g = new Map;
  this.aborted = !1;
  this.done = new Gf(function(c, d) {
    b.f.addEventListener('complete', function() {
      c()
    });
    b.f.addEventListener('error', function(){});
    b.f.addEventListener('abort', function() {
      var e = b.f.error;
      e ? ('QuotaExceededError' === e.name ?
               jh(new yk) :
               'UnknownError' === e.name && jh(new zk),
           d(e)) :
          d(new wk)
    })
  })
}
Mk.prototype.abort = function(){};
function Nk(a) {
  var b = a.f;
  b.commit && !a.aborted && b.commit();
  return a.done
}
function(){}
function Ok(a) {
  this.f = a
}
Ok.prototype.count = function(a) {
  a = a ? this.f.count(a) : this.f.count();
  return Ek(a)
};
Ok.prototype.get = function(a) {
  return Ek(this.f.get(a))
};
function(){}
function Rk(a, b) {
  this.request = a;
  this.f = b
}
function(){}
Rk.prototype['delete'] = function(){};
Rk.prototype.update = function(a) {
  return Ek(this.f.update(a))
};
function Sk(a, b, c) {
  function d() {
    n || (n = new Fk(f.result));
    return n
  }
  var e = Mk;
  var f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
  var g = c.blocked, h = c.blocking, k = c.f, l = c.upgrade, n;
  l && f.addEventListener('upgradeneeded', function(){});
  g && f.addEventListener('blocked', function() {
    g()
  });
  return Dk(f).then(function(){})
}
function(){};
var Uk, Vk, Wk = ['getAll', 'getAllKeys', 'getKey', 'openKeyCursor'],
            Xk = ['getAll', 'getAllKeys', 'getKey', 'openKeyCursor'];
function Yk() {
  return lc(this, function b() {
    var c;
    return za(b, function(d) {
      switch (d.f) {
        case 1:
          var e;
          if (e = ok)
            e = /WebKit\/([0-9]+)/.exec(Lb),
            e = !!(e && 600 <= parseInt(e[1], 10));
          e &&
              (e = /WebKit\/([0-9]+)/.exec(Lb),
               e = !(e && 602 <= parseInt(e[1], 10)));
          if (e && !X('ytidb_allow_on_ios_safari_v8_and_v9'))
            return d['return'](!1);
          try {
            if (!self.indexedDB) return d['return'](!1)
          } catch (f) {
            return d['return'](!1)
          }
          d.A = 2;
          d.o = 3;
          return ta(d, Tk('yt-idb-test-do-not-use'), 5);
        case 5:
          c = d.g;
        case 3:
          d.J = [d.i];
          d.A = 0;
          d.o = 0;
          if (c) try {
              c.close()
            } catch (f) {
            }
          e = d.J.splice(0)[0];
          (e = d.i = d.i || e) ? e.Ga        ? d.f = d.A || d.o :
                  void 0 != e.O && d.o < e.O ? (d.f = e.O, d.i = null) :
                                               d.f = d.o :
                                 d.f = 4;
          break;
        case 2:
          return d.A = 0, d.i = null, d['return'](!1);
        case 4:
          return d['return'](!0)
      }
    })
  })
}
function(){}
function(){};
var al;
function bl() {
  function a(b) {
    b.close();
    al = void 0
  }
  al ||
      (al =
           Qf(Tk('YtIdbMeta', 1, {
                blocking: a,
                upgrade: function(){}
              }),
              function(b) {
                return Ak(b) ? Tk('YtIdbMeta', void 0, {blocking: a}) : Mf(b)
              }));
  return al
}
function cl(a) {
  return bl().then(function(b) {
    return b.get('databases', a.actualName).then(function(c) {
      if (c ? a.actualName !== c.actualName || a.publicName !== c.publicName ||
                  a.userIdentifier !== c.userIdentifier ||
                  a.signedIn !== c.signedIn :
              1)
        return Kk(b, a)
    })
  })
}
function dl(a) {
  return bl().then(function(){})
};
function el(a) {
  try {
    var b = {
      actualName: 'LogsDataBase',
      publicName: 'LogsDataBase',
      userIdentifier: void 0,
      signedIn: !1
    }
  } catch (c) {
    return Mf(c)
  }
  return Qf(
      cl(b).then(function() {
        return a(b)
      }),
      function(c) {
        return Qf(dl(b.actualName), function() {}).then(function() {
          return Mf(c)
        })
      })
}
function fl() {
  return Zk().then(function(a) {
    if (!a) throw new xk;
  })
}
function gl(a, b) {
  b = void 0 === b ? {} : b;
  return fl().then(function() {
    return el(function(c) {
      return Tk(c.actualName, a, b)
    })
  })
};
function hl() {
  Y.call(this, function() {});
  throw Error(
      'Not allowed to instantiate the thennable outside of the core library.');
}
pa(hl, Y);
hl.reject = Y.reject;
hl.resolve = Y.resolve;
hl.all = Y.all;
var il;
function jl() {
  return lc(this, function b() {
    return za(b, function(c) {
      if (!il) try {
          il = gl(1, {
            upgrade: function(d, e) {
              1 > e &&
                  (Ik(d, 'LogsRequestsStore',
                      {keyPath: 'id', autoIncrement: !0})
                       .f.createIndex(
                           'newRequest', ['status', 'authHash', 'timestamp'],
                           {unique: !1}),
                   Ik(d, 'sapisid'))
            }
          })
        } catch (d) {
          if (!Ak(d)) return ih(d), c['return'](Promise.reject(d));
          il = gl()
        }
      return c['return'](il)
    })
  })
}
function kl(a) {
  return lc(this, function c() {
    var d, e, f;
    return za(c, function(g) {
      if (1 == g.f) return ta(g, ll(), 2);
      if (3 != g.f) return d = g.g, ta(g, jl(), 3);
      e = g.g;
      f = Object.assign(
          Object.assign({}, a),
          {options: JSON.parse(JSON.stringify(a.options)), authHash: d});
      return g['return'](e.add('LogsRequestsStore', f))
    })
  })
}
function ml() {
  return lc(this, function b() {
    var c, d, e, f, g, h;
    return za(b, function(k) {
      switch (k.f) {
        case 1:
          return ta(k, ll(), 2);
        case 2:
          return c = k.g, d = ['NEW', c, 0], e = ['NEW', c, hj()],
                 f = IDBKeyRange.bound(d, e), ta(k, jl(), 3);
        case 3:
          return g = k.g, h = void 0,
                 ta(k, Gk(g, ['LogsRequestsStore'], 'readwrite', function(l) {
                      return Pk(
                          Hk(l, 'LogsRequestsStore').index('newRequest'),
                          {query: f, direction: 'prev'}, function(n) {
                            n.f.value &&
                                (h = n.f.value, h.status = 'QUEUED',
                                 n.update(h))
                          })
                    }), 4);
        case 4:
          return k['return'](h)
      }
    })
  })
}
function nl(a) {
  return lc(this, function c() {
    var d;
    return za(c, function(e) {
      if (1 == e.f) return ta(e, jl(), 2);
      d = e.g;
      return e['return'](Gk(d, ['LogsRequestsStore'], 'readwrite', function(f) {
        var g = Hk(f, 'LogsRequestsStore');
        return g.get(a).then(function(){})
      }))
    })
  })
}
function ol(a) {
  return lc(this, function c() {
    var d;
    return za(c, function(e) {
      if (1 == e.f) return ta(e, jl(), 2);
      d = e.g;
      return e['return'](Gk(d, ['LogsRequestsStore'], 'readwrite', function(f) {
        var g = Hk(f, 'LogsRequestsStore');
        return g.get(a).then(function(h) {
          return h ?
              (h.status = 'NEW', h.sendCount += 1, Lk(g, h).then(function() {
                return h
              })) :
              hl.resolve(void 0)
        })
      }))
    })
  })
}
function pl(a) {
  return lc(this, function c() {
    var d;
    return za(c, function(e) {
      if (1 == e.f) return ta(e, jl(), 2);
      d = e.g;
      return e['return'](d['delete']('LogsRequestsStore', a))
    })
  })
}
function ll() {
  return lc(this, function b() {
    var c;
    return za(b, function(d) {
      if (1 == d.f) {
        lk.f || (lk.f = new lk);
        var e = Lf(mk());
        return ta(d, e, 2)
      }
      c = d.g;
      return d['return'](ck(c))
    })
  })
};
var ql = ej('network_polling_interval', 3E4);
function rl() {
  this.l = 0;
  this.f = window.navigator.onLine;
  sl(this);
  tl(this)
}
function ul() {
  rl.f || (rl.f = new rl);
  return rl.f
}
function vl(a) {
  var b = wl, c = xl;
  (new Gf(function(d) {
    a.g = d
  })).then(function() {
    b();
    c && (a.i = c)
  });
  yl(a)
}
function tl(a) {
  window.addEventListener('online', function() {
    a.f = !0;
    a.g && a.g()
  })
}
function(){}
function yl(a) {
  a.l || (zl(a), window.navigator.onLine && a.g && a.g())
}
function zl(a) {
  a.l = Bh(function() {
    window.navigator.onLine ?
        (!1 === a.f && ih(Error('NetworkStatusManager missed online event.')),
         a.f = !0, a.g && a.g()) :
        (!0 === a.f && ih(Error('NetworkStatusManager missed offline event.')),
         a.f = !1, a.i && a.i());
    zl(a)
  }, ql)
};
var Al = ej('networkless_throttle_timeout') || 100,
    Bl = ej('networkless_retry_attempts') || 1, Cl = 0;
function Dl(a, b) {
  b = void 0 === b ? {} : b;
  El().then(function(c) {
    var d = ul().f;
    if (!c || X('networkless_bypass_write') ||
        d && X('vss_networkless_bypass_write'))
      Sj(a, b);
    else {
      var e =
          {url: a, options: b, timestamp: hj(), status: 'NEW', sendCount: 0};
      kl(e).then(function(f) {
        e.id = f;
        f = ul();
        f.f && !X('networkless_always_offline') ? Fl(e) : vl(f)
      })['catch'](function(f) {
        Fl(e);
        ih(f)
      })
    }
  })
}
function wl() {
  var a = this;
  Cl || (Cl = Dh(function() {
           return lc(a, function c() {
             var d;
             return za(c, function(e) {
               if (1 == e.f) return ta(e, ml(), 2);
               if (3 != e.f)
                 return d = e.g, d ? ta(e, Fl(d), 3) : (xl(), e['return']());
               Cl = 0;
               wl();
               e.f = 0
             })
           })
         }, Al))
}
function xl() {
  var a = Cl;
  if (!isNaN(a)) {
    var b = x('yt.scheduler.instance.cancelJob');
    b ? b(a) : lh(a)
  }
  Cl = 0
}
function Fl(a) {
  return lc(this, function c() {
    var d;
    return za(c, function(e) {
      switch (e.f) {
        case 1:
          if (!a.id) {
            e.O(2);
            break
          }
          return ta(e, nl(a.id), 3);
        case 3:
          (d = e.g) ? a = d :
                      jh(Error('The request cannot be found in the database.'));
        case 2:
          var f = a.timestamp;
          if (!(2592E6 <= hj() - f)) {
            e.O(4);
            break
          }
          jh(Error(
              'Networkless Logging: Stored logs request expired age limit'));
          if (!a.id) {
            e.O(5);
            break
          }
          return ta(e, pl(a.id), 5);
        case 5:
          return e['return']();
        case 4:
          f = a = Gl(a);
          var g, h;
          if (null ===
                          (h = null ===
                                       (g = null === f || void 0 === f ?
                                            void 0 :
                                            f.options) ||
                                   void 0 === g ?
                               void 0 :
                               g.D) ||
                      void 0 === h ?
                  0 :
                  h.requestTimeMs)
            f.options.D.requestTimeMs = Math.round(hj());
          (a = f) && Sj(a.url, a.options);
          e.f = 0
      }
    })
  })
}
function Gl(a) {
  var b = this, c = a.options.onError ? a.options.onError : function() {};
  a.options.onError = function(e, f) {
    return lc(b, function h() {
      return za(h, function(k) {
        if (1 == k.f)
          return a && a.id ?
              a.sendCount < Bl ? ta(k, ol(a.id), 6) : ta(k, pl(a.id), 2) :
              k.O(2);
        2 != k.f && vl(ul());
        c(e, f);
        k.f = 0
      })
    })
  };
  var d = a.options.onSuccess ? a.options.onSuccess : function() {};
  a.options.onSuccess = function(e, f) {
    return lc(b, function h() {
      return za(h, function(k) {
        if (1 == k.f) return a && a.id ? ta(k, pl(a.id), 2) : k.O(2);
        d(e, f);
        k.f = 0
      })
    })
  };
  return a
}
function El() {
  return lc(this, function b() {
    return za(b, function(c) {
      return X('networkless_logging') ?
          (2 === ej('networkless_ytidb_version') && $k().then(function(d) {
            return d
          }),
           c['return'](Zk())) :
          c['return'](!1)
    })
  })
};
function(){}
pa(Hl, Error);
function(){}
Il.prototype.isReady = function(){};
function Bj(a, b, c, d) {
  !P('VISITOR_DATA') && 'visitor_id' !== b && .01 > Math.random() &&
      jh(new Hl(
          'Missing VISITOR_DATA when sending innertube request.', b, c, d));
  if (!a.isReady()) {
    var e = new Hl('innertube xhrclient not ready', b, c, d);
    ih(e);
    e.sampleWeight = 0;
    throw e;
  }
  var f = {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    D: c,
    Va: 'JSON',
    ha: function() {
      d.ha()
    },
    Sa: d.ha,
    onSuccess: function(p, q) {
      if (d.onSuccess) d.onSuccess(q)
    },
    Ra: function(p) {
      if (d.onSuccess) d.onSuccess(p)
    },
    onError: function(){},
    uc: function(){},
    timeout: d.timeout,
    withCredentials: !0
  },
      g = '';
  (e = a.f.Bb) && (g = e);
  var h = a.f.Db || !1, k = ak(h, g, d);
  Object.assign(f.headers, k);
  f.headers.Authorization && !g &&
      (f.headers['x-origin'] = window.location.origin);
  e = '/youtubei/' + a.f.innertubeApiVersion + '/' + b;
  var l = {alt: 'json'};
  a.f.Cb && f.headers.Authorization || (l.key = a.f.innertubeApiKey);
  var n = oi('' + g + e, l || {}, !0);
  El().then(function(p) {
    if (d.retry && X('retry_web_logging_batches') &&
        'www.youtube-nocookie.com' != g) {
      if (X('networkless_gel') && !p || !X('networkless_gel'))
        var q = ik(b, c, k, h);
      if (q) {
        var t = f.onSuccess, w = f.Ra;
        f.onSuccess = function(F, I) {
          jk(q);
          t(F, I)
        };
        c.Ra = function(){}
      }
    }
    try {
      X('use_fetch_for_op_xhr') ?
          Pj(n, f) :
          X('networkless_gel') && d.retry ?
          (f.method = 'POST', Dl(n, f)) :
          (f.method = 'POST', f.D || (f.D = {}), Sj(n, f))
    } catch (F) {
      if ('InvalidAccessError' == F.name)
        q && (jk(q), q = 0),
            jh(Error('An extension is blocking network request.'));
      else
        throw F;
    }
    q && Bh(function() {
      kk(a)
    }, 5E3)
  })
};
var Jl = Qa().toString();
function(){};
var Ll = v.ytLoggingDocDocumentNonce_ || Kl();
z('ytLoggingDocDocumentNonce_', Ll);
function Ml(a) {
  a = void 0 === a ? 0 : a;
  return 0 == a ? 'client-screen-nonce' : 'client-screen-nonce.' + a
}
function(){}
z('yt_logging_screen.getRootVeType', function(a) {
  return P(Nl(void 0 === a ? 0 : a), void 0)
});
function(){}
function Pl(a) {
  a = void 0 === a ? 0 : a;
  var b = P(Ml(a));
  if (!b && !P('USE_CSN_FALLBACK', !0)) return null;
  b || 0 != a ||
      (X('kevlar_client_side_screens') || X('c3_client_side_screens') ?
           b = 'UNDEFINED_CSN' :
           b = P('EVENT_ID'));
  return b ? b : null
}
z('yt_logging_screen.getCurrentCsn', Pl);
function(){}
z('yt_logging_screen.getCttAuthInfo', function(a) {
  return Ol()[a]
});
z('yt_logging_screen.setCurrentScreen', function(a, b, c, d) {
  c = void 0 === c ? 0 : c;
  if (a !== P(Ml(c)) || b !== P(Nl(c)))
    if (Ql(a, d, c), eh(Ml(c), a), eh(Nl(c), b),
        0 == c || X('web_screen_associated_all_layers'))
      b =
          function(){},
      'requestAnimationFrame' in window ? window.requestAnimationFrame(b) : b()
});
function Rl() {
  gi.call(this, 'button');
  this.f = null;
  this.i = [];
  this.g = {}
}
A(Rl, gi);
Fa(Rl);
m = Rl.prototype;
m.register = function() {
  V(this, 'click', this.bb);
  V(this, 'keydown', this.Ha);
  V(this, 'keypress', this.Ia);
  hi(this, 'page-scroll', this.ub)
};
m.unregister = function() {
  W(this, 'click', this.bb);
  W(this, 'keydown', this.Ha);
  W(this, 'keypress', this.Ia);
  Sl(this);
  this.g = {};
  Rl.G.unregister.call(this)
};
m.bb = function(a) {
  a && !a.disabled && (this.toggle(a), this.click(a))
};
m.Ha = function(a, b, c) {
  if (!(c.altKey || c.ctrlKey || c.shiftKey || c.metaKey) &&
      (b = Tl(this, a))) {
    var d = function(g) {
      var h = '';
      g.tagName && (h = g.tagName.toLowerCase());
      return 'ul' == h || 'table' == h
    }, e;
    d(b) ? e = b : e = Bd(b, d);
    if (e) {
      e = e.tagName.toLowerCase();
      if ('ul' == e)
        var f = this.Ib;
      else
        'table' == e && (f = this.Hb);
      f && Ul(this, a, b, c, y(f, this))
    }
  }
};
m.ub = function() {
  var a = this.g, b = 0;
  for (d in a) b++;
  if (0 != b)
    for (var c in a) {
      b = a[c];
      var d = J(b.activeButtonNode || b.parentNode, U(this));
      if (void 0 == d || void 0 == b) break;
      Vl(this, d, b, !0)
    }
};
function Ul(a, b, c, d, e) {
  var f = Ri(c), g = 9 == d.keyCode;
  if (g || 32 == d.keyCode || 13 == d.keyCode)
    if (d = Wl(a, c)) {
      if (void 0 !== d.firstElementChild)
        b = d.firstElementChild;
      else
        for (b = d.firstChild; b && 1 != b.nodeType;) b = b.nextSibling;
      if ('a' == b.tagName.toLowerCase()) {
        var h = void 0 === h ? {} : h;
        var k = void 0 === k ? '' : k;
        var l = void 0 === l ? window : l;
        l = l.location;
        h = jc(b.href, h) + k;
        h instanceof Eb || h instanceof Eb ||
            (h = 'object' == typeof h && h.aa ? h.Y() : String(h),
             Jb.test(h) || (h = 'about:invalid#zClosurez'), h = new Eb(h, Fb));
        l.href = Gb(h)
      } else
        ai(b)
    } else
      g && Xl(a, b);
  else
    f ? 27 == d.keyCode ? (Wl(a, c), Xl(a, b)) : e(b, c, d) :
        (h = M(b, U(a, 'reverse')) ? 38 : 40,
         d.keyCode == h && (ai(b), d.preventDefault()))
}
m.Ia = function(a, b, c) {
  c.altKey || c.ctrlKey || c.shiftKey || c.metaKey ||
      (a = Tl(this, a), Ri(a) && c.preventDefault())
};
function Wl(a, b) {
  var c = U(a, 'menu-item-highlight'), d = H(c, b);
  d && qg(d, c);
  return d
}
function Yl(a, b, c) {
  N(c, U(a, 'menu-item-highlight'));
  var d = c.getAttribute('id');
  d || (d = U(a, 'item-id-' + Ja(c)), c.setAttribute('id', d));
  b.setAttribute('aria-activedescendant', d)
}
m.Hb = function(a, b, c) {
  var d = Wl(this, b);
  b = Qh('table', b);
  var e = Qh('tr', b);
  e = ld(document, 'td', null, e).length;
  b = ld(document, 'td', null, b);
  d = Zl(d, b, e, c);
  -1 != d && (Yl(this, a, b[d]), c.preventDefault())
};
m.Ib = function(a, b, c) {
  if (40 == c.keyCode || 38 == c.keyCode) {
    var d = Wl(this, b);
    b = Ya(ld(document, 'li', null, b), Ri);
    d = Zl(d, b, 1, c);
    Yl(this, a, b[d]);
    c.preventDefault()
  }
};
function Zl(a, b, c, d) {
  var e = b.length;
  a = Xa(b, a);
  if (-1 == a)
    if (38 == d.keyCode)
      a = e - c;
    else {
      if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode) a = 0
    }
  else
    39 == d.keyCode     ? (a % c == c - 1 && (a -= c), a += 1) :
        37 == d.keyCode ? (0 == a % c && (a += c), --a) :
        38 == d.keyCode ? (a < c && (a += e), a -= c) :
                          40 == d.keyCode && (a >= e - c && (a -= e), a += c);
  return a
}
function $l(a, b) {
  var c = b.iframeMask;
  c ||
      (c = ud(document, 'IFRAME'), c.src = 'javascript:""',
       og(c, U(a, 'menu-mask')), Ti(c), b.iframeMask = c);
  return c
}
function Vl(a, b, c, d) {
  var e = J(b, U(a, 'group')), f = !!a.j(b, 'button-menu-ignore-group');
  e = e && !f ? e : b;
  f = 9;
  var g = 8, h = me(b);
  if (M(b, U(a, 'reverse'))) {
    f = 8;
    g = 9;
    h = h.top + 'px';
    try {
      c.style.maxHeight = h
    } catch (n) {
    }
  }
  M(b, 'flip') && (M(b, U(a, 'reverse')) ? (f = 12, g = 13) : (f = 13, g = 12));
  var k;
  a.j(b, 'button-has-sibling-menu') ?
      k = ee(e) :
      a.j(b, 'button-menu-root-container') && (k = am(a, b));
  D && !Kc('8') && (k = null);
  if (k) {
    var l = me(k);
    l = new Ud(-l.top, l.left, l.top, -l.left)
  }
  k = new E(0, 1);
  M(b, U(a, 'center-menu')) &&
      (k.x -= Math.round((ke(c).width - ke(b).width) / 2));
  d && (k.y += qd(document).y);
  if (a = $l(a, b))
    b = ke(c), a.style.width = b.width + 'px', a.style.height = b.height + 'px',
    Ig(e, f, a, g, k, l, 197), d && Zd(a, 'position', 'fixed');
  Ig(e, f, c, g, k, l, 197)
}
function am(a, b) {
  if (a.j(b, 'button-menu-root-container')) {
    var c = a.j(b, 'button-menu-root-container');
    return J(b, c)
  }
  return document.body
}
m.eb = function(a) {
  if (a) {
    var b = Tl(this, a);
    if (b) {
      a.setAttribute('aria-pressed', 'true');
      a.setAttribute('aria-expanded', 'true');
      b.originalParentNode = b.parentNode;
      b.activeButtonNode = a;
      b.parentNode.removeChild(b);
      var c;
      this.j(a, 'button-has-sibling-menu') ? c = a.parentNode : c = am(this, a);
      c.appendChild(b);
      b.style.minWidth = a.offsetWidth - 2 + 'px';
      var d = $l(this, a);
      d && c.appendChild(d);
      (c = !!this.j(a, 'button-menu-fixed')) && (this.g[Nh(a).toString()] = b);
      Vl(this, a, b, c);
      uh('yt-uix-button-menu-before-show', a, b);
      Si(b);
      d && Si(d);
      this.V(a, 'button-menu-action', !0);
      N(a, U(this, 'active'));
      b = y(this.cb, this, a, !1);
      d = y(this.cb, this, a, !0);
      c = y(this.Sb, this, a, void 0);
      this.f && Tl(this, this.f) == Tl(this, a) || Sl(this);
      th('yt-uix-button-menu-show', a);
      bi(this.i);
      this.i = [
        T(document, 'click', d), T(document, 'contextmenu', b),
        T(window, 'resize', c)
      ];
      this.f = a
    }
  }
};
function Xl(a, b) {
  if (b) {
    var c = Tl(a, b);
    if (c) {
      a.f = null;
      b.setAttribute('aria-pressed', 'false');
      b.setAttribute('aria-expanded', 'false');
      b.removeAttribute('aria-activedescendant');
      Ti(c);
      a.V(b, 'button-menu-action', !1);
      var d = $l(a, b), e = Nh(c).toString();
      delete a.g[e];
      kh(function() {
        d && d.parentNode && (Ti(d), d.parentNode.removeChild(d));
        c.originalParentNode &&
            (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c),
             c.originalParentNode = null, c.activeButtonNode = null)
      }, 1)
    }
    e = J(b, U(a, 'group'));
    var f = [U(a, 'active')];
    e && f.push(U(a, 'group-active'));
    rg(b, f);
    th('yt-uix-button-menu-hide', b);
    bi(a.i);
    a.i.length = 0
  }
}
m.Sb = function(a, b) {
  var c = Tl(this, a);
  if (c) {
    b && (b instanceof Sb ? Yb(c, b) : Ad(c, b));
    var d = !!this.j(a, 'button-menu-fixed');
    Vl(this, a, c, d)
  }
};
m.cb = function(a, b, c) {
  c = Zh(c);
  var d = J(c, U(this));
  if (d) {
    d = Tl(this, d);
    var e = Tl(this, a);
    if (d == e) return
  }
  d = J(c, U(this, 'menu'));
  e = d == Tl(this, a);
  var f = M(c, U(this, 'menu-item')), g = M(c, U(this, 'menu-close'));
  if (!d || e && (f || g))
    Xl(this, a),
        d && b && this.j(a, 'button-menu-indicate-selected') &&
        ((a = H(U(this, 'content'), a)) && Ad(a, Jd(c)), bm(this, d, c))
};
function bm(a, b, c) {
  var d = U(a, 'menu-item-selected');
  a = kd(d, b);
  B(a, function(e) {
    qg(e, d)
  });
  N(c.parentNode, d)
}
function Tl(a, b) {
  if (!b.widgetMenu) {
    var c = a.j(b, 'button-menu-id');
    c = c && G(c);
    var d = U(a, 'menu');
    c ? pg(c, [d, U(a, 'menu-external')]) : c = H(d, b);
    b.widgetMenu = c
  }
  return b.widgetMenu
}
m.isToggled = function(a) {
  return M(a, U(this, 'toggled'))
};
m.toggle = function(a) {
  if (this.j(a, 'button-toggle')) {
    var b = J(a, U(this, 'group')), c = U(this, 'toggled'), d = M(a, c);
    if (b && this.j(b, 'button-toggle-group')) {
      var e = this.j(b, 'button-toggle-group');
      b = kd(U(this), b);
      B(b, function(f) {
        f != a || 'optional' == e && d ?
            (qg(f, c), f.removeAttribute('aria-pressed')) :
            (N(a, c), f.setAttribute('aria-pressed', 'true'))
      })
    } else
      d ? a.removeAttribute('aria-pressed') :
          a.setAttribute('aria-pressed', 'true'),
          ug(a, c)
  }
};
m.click = function(a) {
  if (Tl(this, a)) {
    var b = Tl(this, a);
    if (b) {
      var c = J(b.activeButtonNode || b.parentNode, U(this));
      c && c != a ? (Xl(this, c), kh(y(this.eb, this, a), 1)) :
          Ri(b)   ? Xl(this, a) :
                    this.eb(a)
    }
    a.focus()
  }
  this.V(a, 'button-action')
};
function Sl(a) {
  a.f && Xl(a, a.f)
};
function(){}
A(cm, gi);
m = cm.prototype;
m.K = function(a) {
  var b = gi.prototype.K.call(this, a);
  return b ? b : a
};
m.register = function() {
  hi(this, 'yt-uix-kbd-nav-move-out-done', this.hide)
};
m.dispose = function(){};
m.j = function(a, b) {
  var c = cm.G.j.call(this, a, b);
  return c                                                            ? c :
      (c = cm.G.j.call(this, a, 'card-config')) && (c = x(c)) && c[b] ? c[b] :
                                                                        null
};
m.show = function(a) {
  var b = this.K(a);
  if (b) {
    N(b, U(this, 'active'));
    var c = em(this, a, b);
    if (c) {
      c.cardTargetNode = a;
      c.cardRootNode = b;
      fm(this, a, c);
      var d = U(this, 'card-visible'),
          e = this.j(a, 'card-delegate-show') && this.j(b, 'card-action');
      this.V(b, 'card-action', a);
      this.i = a;
      Ti(c);
      kh(y(function() {
           e || (Si(c), th('yt-uix-card-show', b, a, c));
           gm(c);
           N(c, d);
           th('yt-uix-kbd-nav-move-in-to', c)
         }, this), 10)
    }
  }
};
function em(a, b, c) {
  var d = c || b, e = U(a, 'card');
  c = hm(a, d);
  var f = G(U(a, 'card') + Nh(d));
  if (f)
    return a = H(U(a, 'card-body'), f), zd(a, c) || (wd(c), a.appendChild(c)),
           f;
  f = document.createElement('div');
  f.id = U(a, 'card') + Nh(d);
  og(f, e);
  (d = a.j(d, 'card-class')) && pg(f, d.split(/\s+/));
  d = document.createElement('div');
  d.className = U(a, 'card-border');
  b = a.j(b, 'orientation') || 'horizontal';
  e = document.createElement('div');
  e.className = 'yt-uix-card-border-arrow yt-uix-card-border-arrow-' + b;
  var g = document.createElement('div');
  g.className = U(a, 'card-body');
  a = document.createElement('div');
  a.className = 'yt-uix-card-body-arrow yt-uix-card-body-arrow-' + b;
  wd(c);
  g.appendChild(c);
  d.appendChild(a);
  d.appendChild(g);
  f.appendChild(e);
  f.appendChild(d);
  document.body.appendChild(f);
  return f
}
function fm(a, b, c) {
  var d = a.j(b, 'orientation') || 'horizontal';
  var e = H(U(a, 'anchor'), b) || b;
  var f = a.j(b, 'position'), g = !!a.j(b, 'force-position'),
      h = a.j(b, 'position-fixed');
  d = 'horizontal' == d;
  var k = 'bottomright' == f || 'bottomleft' == f,
      l = 'topright' == f || 'bottomright' == f;
  if (l && k) {
    var n = 13;
    var p = 8
  } else
    l && !k ? (n = 12, p = 9) : !l && k ? (n = 9, p = 12) : (n = 8, p = 13);
  var q = ne(document.body);
  f = ne(b);
  q != f && (n ^= 4);
  if (d) {
    f = b.offsetHeight / 2 - 12;
    var t = new E(-12, b.offsetHeight + 6)
  } else
    f = b.offsetWidth / 2 - 6, t = new E(b.offsetWidth + 6, -12);
  var w = ke(c);
  f = Math.min(f, (d ? w.height : w.width) - 24 - 6);
  6 > f &&
      (f = 6,
       d ? t.y += 12 - b.offsetHeight / 2 : t.x += 12 - b.offsetWidth / 2);
  w = null;
  g || (w = 10);
  b = U(a, 'card-flip');
  a = U(a, 'card-reverse');
  sg(c, b, l);
  sg(c, a, k);
  w = Ig(e, n, c, p, t, null, w);
  !g && w &&
      (w & 48 && (l = !l, n ^= 4, p ^= 4), w & 192 && (k = !k, n ^= 1, p ^= 1),
       sg(c, b, l), sg(c, a, k), Ig(e, n, c, p, t));
  h &&
      (e = parseInt(c.style.top, 10), g = qd(document).y,
       Zd(c, 'position', 'fixed'), Zd(c, 'top', e - g + 'px'));
  q &&
      (c.style.right = '', e = me(c),
       e.left = e.left || parseInt(c.style.left, 10), g = od(window),
       c.style.left = '', c.style.right = g.width - e.left - e.width + 'px');
  e = H('yt-uix-card-body-arrow', c);
  g = H('yt-uix-card-border-arrow', c);
  d = d ? k ? 'top' : 'bottom' : !q && l || q && !l ? 'left' : 'right';
  e.setAttribute('style', '');
  g.setAttribute('style', '');
  e.style[d] = f + 'px';
  g.style[d] = f + 'px';
  k = H('yt-uix-card-arrow', c);
  l = H('yt-uix-card-arrow-background', c);
  k && l &&
      (c = 'right' == d ? ke(c).width - f - 13 : f + 11, f = c / Math.sqrt(2),
       k.style.left = c + 'px', k.style.marginLeft = '1px',
       l.style.marginLeft = -f + 'px', l.style.marginTop = f + 'px')
}
m.hide = function(a) {
  if (a = this.K(a)) {
    var b = G(U(this, 'card') + Nh(a));
    b &&
        (qg(a, U(this, 'active')), qg(b, U(this, 'card-visible')), Ti(b),
         this.i = null, b.cardTargetNode = null, b.cardRootNode = null,
         b.cardMask && (wd(b.cardMask), b.cardMask = null))
  }
};
function(){}
m.Rb = function(a, b) {
  var c = this.K(a);
  if (c) {
    if (b) {
      var d = hm(this, c);
      if (!d) return;
      b instanceof Sb ? Yb(d, b) : Ad(d, b)
    }
    M(c, U(this, 'active')) &&
        (c = em(this, a, c), fm(this, a, c), Si(c), gm(c))
  }
};
m.isActive = function(a) {
  return (a = this.K(a)) ? M(a, U(this, 'active')) : !1
};
function hm(a, b) {
  var c = b.cardContentNode;
  if (!c) {
    var d = U(a, 'content'), e = U(a, 'card-content');
    (c = (c = a.j(b, 'card-id')) ? G(c) : H(d, b)) ||
        (c = document.createElement('div'));
    var f = c;
    qg(f, d);
    N(f, e);
    b.cardContentNode = c
  }
  return c
}
function gm(a) {
  var b = a.cardMask;
  b ||
      (b = ud(document, 'IFRAME'), b.src = 'javascript:""',
       pg(b, ['yt-uix-card-iframe-mask']), a.cardMask = b);
  b.style.position = a.style.position;
  b.style.top = a.style.top;
  b.style.left = a.offsetLeft + 'px';
  b.style.height = a.clientHeight + 'px';
  b.style.width = a.clientWidth + 'px';
  document.body.appendChild(b)
};
function im() {
  gi.call(this, 'kbd-nav')
}
var jm;
A(im, gi);
Fa(im);
m = im.prototype;
m.register = function() {
  V(this, 'keydown', this.Ca);
  hi(this, 'yt-uix-kbd-nav-move-in', this.Pa);
  hi(this, 'yt-uix-kbd-nav-move-in-to', this.Jb);
  hi(this, 'yt-uix-kbd-move-next', this.Qa);
  hi(this, 'yt-uix-kbd-nav-move-to', this.ea)
};
m.unregister = function() {
  W(this, 'keydown', this.Ca);
  bi(jm)
};
m.Ca = function(a, b, c) {
  var d = c.keyCode;
  if (a = J(a, U(this))) switch (d) {
      case 13:
      case 32:
        this.Pa(a);
        break;
      case 27:
        c.preventDefault();
        c.stopImmediatePropagation();
        a: {
          for (c = wg(a, 'kbdNavMoveOut'); !c;) {
            c = J(a.parentElement, U(this));
            if (!c) break a;
            c = wg(c, 'kbdNavMoveOut')
          } c = G(c);
          this.ea(c);
          th('yt-uix-kbd-nav-move-out-done', c)
        } break;
      case 40:
      case 38:
        if ((b = c.target) && M(a, U(this, 'list'))) switch (d) {
            case 40:
              this.Qa(b, a);
              break;
            case 38:
              d = document.activeElement == a, a = km(a), b = a.indexOf(b),
              0 > b && !d ||
                  (b = d ? a.length - 1 : (a.length + b - 1) % a.length,
                   a[b].focus(), lm(this, a[b]))
          }
        c.preventDefault()
    }
};
m.Pa = function(a) {
  var b = wg(a, 'kbdNavMoveIn');
  b = G(b);
  mm(this, a, b);
  this.ea(b)
};
m.Jb = function(a) {
  var b = document;
  try {
    var c = b && b.activeElement;
    var d = c && c.nodeName ? c : null
  } catch (e) {
    d = null
  }
  mm(this, d, a);
  this.ea(a)
};
m.ea = function(a) {
  if (a)
    if (Gd(a))
      a.focus();
    else {
      var b = Bd(a, function(c) {
        return yd(c) ? Gd(c) : !1
      });
      b ? b.focus() : (a.setAttribute('tabindex', '-1'), a.focus())
    }
};
function mm(a, b, c) {
  if (b && c)
    if (N(c, U(a)), a = b.id,
        a || (a = 'kbd-nav-' + Math.floor(1E6 * Math.random() + 1), b.id = a),
        b = a, vg && c.dataset)
      c.dataset.kbdNavMoveOut = b;
    else {
      if (/-[a-z]/.test('kbdNavMoveOut')) throw Error('');
      c.setAttribute(
          'data-' +
              'kbdNavMoveOut'.replace(/([A-Z])/g, '-$1').toLowerCase(),
          b)
    }
}
m.Qa = function(a, b) {
  var c = document.activeElement == b, d = km(b), e = d.indexOf(a);
  0 > e && !c || (c = c ? 0 : (e + 1) % d.length, d[c].focus(), lm(this, d[c]))
};
function lm(a, b) {
  if (b) {
    var c = Ld(b, 'LI');
    c && (N(c, U(a, 'highlight')), jm = T(b, 'blur', y(function(d) {
                                            qg(d, U(this, 'highlight'));
                                            bi(jm)
                                          }, a, c)))
  }
}
function km(a) {
  if ('UL' != a.tagName.toUpperCase()) return [];
  a = Ya(xd(a), function(){});
  return Ya(Za(a, function(b) {
              return Ri(b) ? Bd(b, function(){}) : !1
            }), function(b) {
    return !!b
  })
};
function nm() {
  gi.call(this, 'menu');
  this.g = this.f = null;
  this.i = {};
  this.A = {};
  this.l = null
}
A(nm, gi);
Fa(nm);
function om(a) {
  var b = nm.C();
  if (M(a, U(b))) return a;
  var c = b.K(a);
  return c ? c : J(a, U(b, 'content')) == b.f ? b.g : null
}
m = nm.prototype;
m.register = function() {
  V(this, 'click', this.Ba);
  V(this, 'mouseenter', this.sb);
  hi(this, 'page-scroll', this.vb);
  hi(this, 'yt-uix-kbd-nav-move-out-done', function(a) {
    a = this.K(a);
    pm(this, a)
  });
  this.l = new O
};
m.unregister = function() {
  W(this, 'click', this.Ba);
  this.g = this.f = null;
  bi(ib(kb(this.i)));
  this.i = {};
  jb(this.A, function(a) {
    wd(a)
  }, this);
  this.A = {};
  Td(this.l);
  this.l = null;
  nm.G.unregister.call(this)
};
m.Ba = function(a, b, c) {
  a && (b = qm(this, a), !b.disabled && Ph(c.target, b) && rm(this, a))
};
m.sb = function(a, b, c) {
  a && M(a, U(this, 'hover')) &&
      (b = qm(this, a), Ph(c.target, b) && rm(this, a, !0))
};
m.vb = function() {
  this.f && this.g && sm(this, this.g, this.f)
};
function sm(a, b, c) {
  var d = tm(a, b);
  d && ie(d, ke(c));
  if (c == a.f) {
    var e = 9, f = 8;
    M(b, U(a, 'reversed')) && (e ^= 1, f ^= 1);
    M(b, U(a, 'flipped')) && (e ^= 4, f ^= 4);
    a = new E(0, 1);
    d && Ig(b, e, d, f, a, null, 197);
    Ig(b, e, c, f, a, null, 197)
  }
}
function rm(a, b, c) {
  um(a, b) && !c ?
      pm(a, b) :
      (vm(a, b), !a.f || Ph(b, a.f) ? a.fb(b) : Lg(a.l, y(a.fb, a, b)))
}
m.fb = function(a) {
  if (a) {
    var b = wm(this, a);
    if (b) {
      uh('yt-uix-menu-before-show', a, b);
      if (this.f)
        Ph(a, this.f) || pm(this, this.g);
      else {
        this.g = a;
        this.f = b;
        M(a, U(this, 'sibling-content')) ||
            (wd(b), document.body.appendChild(b));
        var c = qm(this, a).offsetWidth - 2;
        b.style.minWidth = c + 'px'
      }
      (c = tm(this, a)) && b.parentNode &&
          b.parentNode.insertBefore(c, b.nextSibling);
      qg(b, U(this, 'content-hidden'));
      sm(this, a, b);
      pg(qm(this, a), [U(this, 'trigger-selected'), 'yt-uix-button-toggled']);
      th('yt-uix-menu-show', a);
      xm(b);
      ym(this, a);
      th('yt-uix-kbd-nav-move-in-to', b);
      var d = y(this.Tb, this, a), e = y(this.Fb, this, a);
      c = Ja(a).toString();
      this.i[c] = [T(b, 'click', e), T(document, 'click', d)];
      M(a, U(this, 'indicate-selected')) &&
          (d = y(this.Gb, this, a), this.i[c].push(T(b, 'click', d)));
      M(a, U(this, 'hover')) &&
          (a = y(this.tb, this, a), this.i[c].push(T(document, 'mousemove', a)))
    }
  }
};
m.tb = function(a, b) {
  var c = Zh(b);
  if (c) {
    var d = qm(this, a);
    Ph(c, d) || zm(this, c) || Am(this, a)
  }
};
m.Tb = function(a, b) {
  var c = Zh(b);
  if (c) {
    if (zm(this, c)) {
      var d = J(c, U(this, 'content')), e = Ld(c, 'LI');
      e && d && zd(d, e) && uh('yt-uix-menu-item-clicked', c);
      c = J(c, U(this, 'close-on-select'));
      if (!c) return;
      d = om(c)
    }
    pm(this, d || a)
  }
};
function vm(a, b) {
  if (b) {
    var c = J(b, U(a, 'content'));
    c && (c = kd(U(a), c), B(c, function(d) {
            !Ph(d, b) && um(this, d) && Am(this, d)
          }, a))
  }
}
function pm(a, b) {
  if (b) {
    var c = [];
    c.push(b);
    var d = wm(a, b);
    d && (d = kd(U(a), d), d = eb(d), c = c.concat(d), B(c, function(e) {
            um(this, e) && Am(this, e)
          }, a))
  }
}
function Am(a, b) {
  if (b) {
    var c = wm(a, b);
    rg(qm(a, b), [U(a, 'trigger-selected'), 'yt-uix-button-toggled']);
    N(c, U(a, 'content-hidden'));
    var d = wm(a, b);
    d && md(d, {'aria-expanded': 'false'});
    (d = tm(a, b)) && d.parentNode && wd(d);
    c && c == a.f &&
        (a.g.appendChild(c), a.f = null, a.g = null,
         a.l && a.l.M('ROOT_MENU_REMOVED'));
    th('yt-uix-menu-hide', b);
    c = Ja(b).toString();
    bi(a.i[c]);
    delete a.i[c]
  }
}
m.Fb = function(a, b) {
  var c = Zh(b);
  c && Bm(this, a, c)
};
m.Gb = function(a, b) {
  var c = Zh(b);
  if (c) {
    var d = qm(this, a);
    if (d && (c = Ld(c, 'LI')))
      if (c = Jd(c).trim(), d.hasChildNodes()) {
        var e = Rl.C();
        (d = H(U(e, 'content'), d)) && Ad(d, c)
      } else
        Ad(d, c)
  }
};
function ym(a, b) {
  var c = wm(a, b);
  if (c) {
    B(c.children, function(e) {
      'LI' == e.tagName && md(e, {role: 'menuitem'})
    });
    md(c, {'aria-expanded': 'true'});
    var d = c.id;
    d || (d = 'aria-menu-id-' + Ja(c), c.id = d);
    (c = qm(a, b)) && md(c, {'aria-controls': d})
  }
}
function Bm(a, b, c) {
  var d = wm(a, b);
  d && M(b, U(a, 'checked')) && (a = Ld(c, 'LI')) &&
      (a = H('yt-ui-menu-item-checked-hid', a)) &&
      (d = kd('yt-ui-menu-item-checked', d), B(d, function(e) {
         tg(e, 'yt-ui-menu-item-checked', 'yt-ui-menu-item-checked-hid')
       }), tg(a, 'yt-ui-menu-item-checked-hid', 'yt-ui-menu-item-checked'))
}
function um(a, b) {
  var c = wm(a, b);
  return c ? !M(c, U(a, 'content-hidden')) : !1
}
function xm(a) {
  a = ld(document, 'UL', null, a);
  B(a, function(b) {
    b.tabIndex = 0;
    var c = im.C();
    pg(b, [U(c), U(c, 'list')])
  })
}
function wm(a, b) {
  var c = xh(b, 'menu-content-id');
  return c && (c = G(c)) ?
                 (pg(c, [U(a, 'content'), U(a, 'content-external')]), c) :
      b == a.g ? a.f :
                 H(U(a, 'content'), b)
}
function tm(a, b) {
  var c = Ja(b).toString(), d = a.A[c];
  if (!d) {
    d = ud(document, 'IFRAME');
    d.src = 'javascript:""';
    var e = [U(a, 'mask')];
    B(ng(b), function(){});
    pg(d, e);
    a.A[c] = d
  }
  return d || null
}
function qm(a, b) {
  return H(U(a, 'trigger'), b)
}
function zm(a, b) {
  return Ph(b, a.f) || Ph(b, a.g)
};
function Cm() {
  cm.call(this, 'clickcard');
  this.f = {};
  this.g = {}
}
A(Cm, cm);
Fa(Cm);
m = Cm.prototype;
m.register = function() {
  Cm.G.register.call(this);
  V(this, 'click', this.wa, 'target');
  V(this, 'click', this.va, 'close')
};
m.unregister = function() {
  Cm.G.unregister.call(this);
  W(this, 'click', this.wa, 'target');
  W(this, 'click', this.va, 'close');
  for (var a in this.f) bi(this.f[a]);
  this.f = {};
  for (a in this.g) bi(this.g[a]);
  this.g = {}
};
m.wa = function(a, b, c) {
  c.preventDefault();
  b = Ld(c.target, 'button');
  if (!b || !b.disabled) {
    if (b = this.j(a, 'card-target'))
      a = document, a = 'string' === typeof b ? a.getElementById(b) : b;
    b = this.K(a);
    this.j(b, 'disabled') ||
        (M(b, U(this, 'active')) ? (this.hide(a), qg(b, U(this, 'active'))) :
                                   (this.show(a), N(b, U(this, 'active'))))
  }
};
m.show = function(a) {
  Cm.G.show.call(this, a);
  var b = this.K(a), c = Ja(a).toString();
  if (!xh(b, 'click-outside-persists')) {
    if (this.f[c]) return;
    b = T(document, 'click', y(this.xa, this, a));
    var d = T(window, 'blur', y(this.xa, this, a));
    this.f[c] = [b, d]
  }
  a = T(window, 'resize', y(this.Rb, this, a, void 0));
  this.g[c] = a
};
m.hide = function(a) {
  Cm.G.hide.call(this, a);
  a = Ja(a).toString();
  var b = this.f[a];
  b && (bi(b), this.f[a] = null);
  if (b = this.g[a]) bi(b), delete this.g[a]
};
m.xa = function(a, b) {
  var c = 'yt-uix' + (this.o ? '-' + this.o : '') + '-card', d = null;
  b.target && (d = J(b.target, c) || J(om(b.target), c));
  (d = d || J(document.activeElement, c) ||
       (document.activeElement ? J(om(document.activeElement), c) : null)) ||
      this.hide(a)
};
m.va = function(a) {
  (a = J(a, U(this, 'card'))) && (a = a.cardTargetNode) && this.hide(a)
};
function Dm() {
  cm.call(this, 'hovercard')
}
A(Dm, cm);
Fa(Dm);
m = Dm.prototype;
m.register = function() {
  V(this, 'mouseenter', this.La, 'target');
  V(this, 'mouseleave', this.Na, 'target');
  V(this, 'mouseenter', this.Ma, 'card');
  V(this, 'mouseleave', this.Oa, 'card')
};
m.unregister = function() {
  W(this, 'mouseenter', this.La, 'target');
  W(this, 'mouseleave', this.Na, 'target');
  W(this, 'mouseenter', this.Ma, 'card');
  W(this, 'mouseleave', this.Oa, 'card')
};
m.La = function(a) {
  if (Em != a) {
    Em && (this.hide(Em), Em = null);
    var b = y(this.show, this, a), c = parseInt(this.j(a, 'delay-show'), 10);
    b = kh(b, -1 < c ? c : 200);
    vh(a, 'card-timer', b.toString());
    Em = a;
    a.alt && (vh(a, 'card-alt', a.alt), a.alt = '');
    a.title && (vh(a, 'card-title', a.title), a.title = '')
  }
};
m.Na = function(a) {
  var b = parseInt(this.j(a, 'card-timer'), 10);
  lh(b);
  this.K(a).isCardHidable = !0;
  b = parseInt(this.j(a, 'delay-hide'), 10);
  b = -1 < b ? b : 200;
  kh(y(this.wb, this, a), b);
  if (b = this.j(a, 'card-alt')) a.alt = b;
  if (b = this.j(a, 'card-title')) a.title = b
};
m.wb = function(a) {
  this.K(a).isCardHidable && (this.hide(a), Em = null)
};
m.Ma = function(){};
m.Oa = function(){};
var Em = null;
function Fm(a, b, c, d, e, f) {
  this.f = a;
  this.B = null;
  this.i = H('yt-dialog-fg', this.f) || this.f;
  if (a = H('yt-dialog-title', this.i)) {
    var g = 'yt-dialog-title-' + Ja(this.i);
    a.setAttribute('id', g);
    this.i.setAttribute('aria-labelledby', g)
  }
  this.i.setAttribute('tabindex', '-1');
  this.T = H('yt-dialog-focus-trap', this.f);
  this.ca = !1;
  this.l = new O;
  this.F = [];
  this.F.push($h(this.f, y(this.Kb, this), 'yt-dialog-dismiss'));
  this.F.push(T(this.T, 'focus', y(this.rb, this), !0));
  Gm(this);
  this.ja = b;
  this.ib = c;
  this.hb = d;
  this.J = e;
  this.jb = f;
  this.A = this.o = null
}
var Hm = {LOADING: 'loading', hc: 'content', ic: 'working'};
function Im(a, b) {
  a.fa() || a.l.subscribe('post-all', b)
}
function Gm(a) {
  a = H('yt-dialog-fg-content', a.f);
  var b = [];
  jb(Hm, function(c) {
    b.push('yt-dialog-show-' + c)
  });
  rg(a, b);
  N(a, 'yt-dialog-show-content')
}
m = Fm.prototype;
m.show = function() {
  if (!this.fa()) {
    this.B = document.activeElement;
    if (!this.hb) {
      this.g ||
          (this.g = G('yt-dialog-bg'),
           this.g ||
               (this.g = ud(document, 'div'), this.g.id = 'yt-dialog-bg',
                og(this.g, 'yt-dialog-bg'), document.body.appendChild(this.g)));
      var a = window, b = a.document;
      var c = 0;
      if (b) {
        c = b.body;
        var d = b.documentElement;
        if (d && c)
          if (a = od(a).height, pd(b) && d.scrollHeight)
            c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
          else {
            b = d.scrollHeight;
            var e = d.offsetHeight;
            d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
            c = b > a ? b > e ? b : e : b < e ? b : e
          }
        else
          c = 0
      }
      this.g.style.height = c + 'px';
      Si(this.g)
    }
    this.Da();
    c = Jm(this);
    Km(c);
    this.o = T(document, 'keydown', y(this.Eb, this));
    c = this.f;
    d = qh('player-added', this.Da, this);
    vh(c, 'player-ready-pubsub-key', d);
    this.ib && (this.A = T(document, 'click', y(this.Pb, this)));
    Si(this.f);
    this.i.setAttribute('tabindex', '0');
    Lm(this);
    this.J || N(document.body, 'yt-dialog-active');
    Sl(Rl.C());
    dm(Cm.C());
    dm(Dm.C());
    th('yt-ui-dialog-show-complete', this)
  }
};
function Mm() {
  var a = kd('yt-dialog');
  return ab(a, function(b) {
    return Ri(b)
  })
}
m.Da = function() {
  if (!this.jb) {
    var a = this.f;
    sg(document.body, 'hide-players', !0);
    a && sg(a, 'preserve-players', !0)
  }
};
function Jm(a) {
  var b = ld(document, 'iframe', null, a.f);
  B(b, function(c) {
    var d = xh(c, 'onload');
    d && (d = x(d)) && T(c, 'load', d);
    if (d = xh(c, 'src')) c.src = d
  }, a);
  return eb(b)
}
function Km(a) {
  B(document.getElementsByTagName('iframe'), function(b) {
    -1 == Xa(a, b) && N(b, 'iframe-hid')
  })
}
function Nm() {
  var a = kd('iframe-hid');
  B(a, function(b) {
    qg(b, 'iframe-hid')
  })
}
m.Kb = function(a) {
  a = a.currentTarget;
  a.disabled || (a = xh(a, 'action') || '', this.dismiss(a))
};
m.dismiss = function(a) {
  if (!this.fa()) {
    this.l.M('pre-all');
    this.l.M('pre-' + a);
    Ti(this.f);
    dm(Cm.C());
    dm(Dm.C());
    this.i.setAttribute('tabindex', '-1');
    Mm() ||
        (Ti(this.g), this.J || qg(document.body, 'yt-dialog-active'), Sh(),
         Nm());
    this.o && (bi(this.o), this.o = null);
    this.A && (bi(this.A), this.A = null);
    var b = this.f;
    if (b) {
      var c = xh(b, 'player-ready-pubsub-key');
      c && (sh(c), yh(b, 'player-ready-pubsub-key'))
    }
    this.l.M('post-all');
    th('yt-ui-dialog-hide-complete', this);
    'cancel' == a && th('yt-ui-dialog-cancelled', this);
    this.l && this.l.M('post-' + a);
    this.B && this.B.focus()
  }
};
m.setTitle = function(a) {
  Ad(H('yt-dialog-title', this.f), a)
};
m.Eb = function(a) {
  kh(y(function() {
       this.ja || 27 != a.keyCode || this.dismiss('cancel')
     }, this), 0);
  9 == a.keyCode && a.shiftKey && M(document.activeElement, 'yt-dialog-fg') &&
      a.preventDefault()
};
m.Pb = function(a) {
  'yt-dialog-base' == a.target.className && this.dismiss('cancel')
};
m.fa = function() {
  return this.ca
};
m.dispose = function() {
  Ri(this.f) && this.dismiss('dispose');
  bi(this.F);
  this.F.length = 0;
  kh(y(function() {
       this.B = null
     }, this), 0);
  this.T = this.i = null;
  this.l.dispose();
  this.l = null;
  this.ca = !0
};
m.rb = function(){};
function Lm(a) {
  kh(y(function() {
       this.i && this.i.focus()
     }, a), 0)
}
z('yt.ui.Dialog', Fm);
function Om() {
  gi.call(this, 'overlay');
  this.l = this.g = this.i = this.f = null
}
pa(Om, gi);
m = Om.prototype;
m.register = function() {
  V(this, 'click', this.oa, 'target');
  V(this, 'click', this.hide, 'close');
  Pm(this)
};
m.unregister = function() {
  gi.prototype.unregister.call(this);
  W(this, 'click', this.oa, 'target');
  W(this, 'click', this.hide, 'close');
  this.l && (sh(this.l), this.l = null);
  this.g && (bi(this.g), this.g = null)
};
m.oa = function(a) {
  if (!this.f || !Ri(this.f.f)) {
    var b = this.K(a);
    a = Qm(b, a);
    b || (b = a ? a.overlayParentNode : null);
    if (b && a) {
      var c = !!this.j(b, 'disable-shortcuts') || !1,
          d = !!this.j(b, 'disable-outside-click-dismiss') || !1;
      this.f = new Fm(a, c);
      this.i = b;
      var e = H('yt-dialog-fg', a);
      if (e) {
        var f = this.j(b, 'overlay-class') || '',
            g = this.j(b, 'overlay-style') || 'default',
            h = this.j(b, 'overlay-shape') || 'default';
        f = f ? f.split(' ') : [];
        f.push(U(this, g));
        f.push(U(this, h));
        pg(e, f)
      }
      this.f.show();
      th('yt-uix-kbd-nav-move-to', e || a);
      Pm(this);
      c || d ||
          (c = y(function(k) {
             M(k.target, 'yt-dialog-base') && Rm(this)
           }, this), a = H('yt-dialog-base', a), this.g = T(a, 'click', c));
      this.V(b, 'overlay-shown');
      th('yt-uix-overlay-shown', b)
    }
  }
};
function Pm(a) {
  a.l || (a.l = qh('yt-uix-overlay-hide', Sm));
  a.f && Im(a.f, function() {
    var b = Om.C();
    b.i = null;
    b.f.dispose();
    b.f = null
  })
}
function Rm(a) {
  if (a.f) {
    var b = a.i;
    a.f.dismiss('overlayhide');
    b && a.V(b, 'overlay-hidden');
    a.i = null;
    a.g && (bi(a.g), a.g = null);
    a.f = null
  }
}
function Qm(a, b) {
  var c;
  if (a)
    if (c = H('yt-dialog', a)) {
      var d = G('body-container');
      d && (d.appendChild(c), a.overlayContentNode = c, c.overlayParentNode = a)
    } else
      c = a.overlayContentNode;
  else
    b && (c = J(b, 'yt-dialog'));
  return c
}
function Tm() {
  var a = Om.C();
  if (a.i)
    a = H('yt-dialog-fg-content', a.i.overlayContentNode);
  else
    a: {
      if (a = kd('yt-dialog-fg-content')) for (var b = 0; b < a.length; b++) {
        var c = J(a[b], 'yt-dialog');
        if (Ri(c)) {
          a = a[b];
          break a
        }
      } a = null
    } return a
}
m.hide = function(a) {
  a && a.disabled || th('yt-uix-overlay-hide')
};
function(){}
m.show = function(a) {
  this.oa(a)
};
Fa(Om);
var Um = {}, Vm = [];
function Wm(a) {
  a = J(a, 'yt-uix-button-subscription-container');
  a = H('unsubscribe-confirmation-overlay-container', a);
  return H('yt-dialog', a)
}
function Xm(a, b) {
  bi(Vm);
  Vm.length = 0;
  Um[b] || (Um[b] = Wm(a));
  Om.C().show(Um[b]);
  var c = Tm();
  return new Gf(function(d) {
    Vm.push($h(c, function() {
      d()
    }, 'overlay-confirmation-unsubscribe-button'))
  })
};
function Ym() {
  var a = P('PLAYER_CONFIG');
  return a && a.args && void 0 !== a.args.authuser ?
      !0 :
      !(!P('SESSION_INDEX') && !P('LOGGED_IN'))
};
function Zm() {
  gi.call(this, 'subscription-button')
}
pa(Zm, gi);
m = Zm.prototype;
m.register = function() {
  V(this, 'click', this.ra);
  ii(this, Bi, this.Ua);
  ii(this, Ci, this.Ta);
  ii(this, Di, this.Nb);
  ii(this, Gi, this.Ua);
  ii(this, Hi, this.Ta);
  ii(this, Ii, this.Ob);
  ii(this, Ki, this.Mb);
  ii(this, Li, this.Lb)
};
m.unregister = function() {
  W(this, 'click', this.ra);
  gi.prototype.unregister.call(this)
};
m.isSubscribed = function(a) {
  return !!this.j(a, 'is-subscribed')
};
m.ra = function(a) {
  var b = this.j(a, 'href'), c = this.j(a, 'insecure');
  if (b)
    a = this.j(a, 'target') || '_self', window.open(b, a);
  else if (!c)
    if (Ym()) {
      b = this.j(a, 'channel-external-id');
      c = this.j(a, 'clicktracking');
      var d = $m(this, a), e = this.j(a, 'parent-url');
      if (this.j(a, 'is-subscribed')) {
        var f = this.j(a, 'subscription-id'),
            g = this.j(a, 'unsubscribe-params'),
            h = new xi(b, f, d, a, c, e, g);
        this.j(a, 'show-unsub-confirm-dialog') ? Xm(a, b).then(function() {
          S(Fi, h)
        }) :
                                                 S(Fi, h)
      } else
        a = this.j(a, 'params'), S(Ai, new vi(b, d, c, e, void 0, a))
    } else
      an(this, a)
};
m.Ua = function(a) {
  this.U(a.f, this.Ya, !0)
};
m.Ta = function(a) {
  this.U(a.f, this.Ya, !1)
};
m.Nb = function(a) {
  this.U(a.f, this.Za, !0, a.g)
};
m.Ob = function(){};
m.Mb = function(a) {
  this.U(a.f, this.pb)
};
m.Lb = function(){};
m.Za = function(a, b, c) {
  b ? (vh(a, 'is-subscribed', 'true'), c && vh(a, 'subscription-id', c)) :
      (yh(a, 'is-subscribed'), yh(a, 'subscription-id'));
  bn(this, a)
};
function $m(a, b) {
  if (!a.j(b, 'ypc-enabled')) return null;
  var c = a.j(b, 'ypc-item-type'), d = a.j(b, 'ypc-item-id');
  return {
    itemType: c, itemId: d, subscriptionElement: b
  }
}
m.Ya = function(a, b) {
  var c = J(a, 'yt-uix-button-subscription-container');
  sg(c, 'yt-subscription-button-disabled-mask-container', b);
  a.setAttribute('aria-busy', b ? 'true' : 'false');
  a.disabled = b
};
function bn(a, b) {
  var c = a.j(b, 'style-type'), d = !!a.j(b, 'is-subscribed');
  c = '-' + c;
  var e = 'yt-uix-button-subscribed' + c;
  sg(b, 'yt-uix-button-subscribe' + c, !d);
  sg(b, e, d);
  a.j(b, 'subscriber-count-tooltip') &&
      !a.j(b, 'subscriber-count-show-when-subscribed') &&
      (c = U(Ui.C()), sg(b, c, !d),
       b.title = d ? '' : a.j(b, 'subscriber-count-title'));
  d ? kh(function() {
    N(b, 'hover-enabled')
  }, 1E3) : qg(b, 'hover-enabled')
}
m.pb = function(a) {
  var b = !!this.j(a, 'ypc-item-type'), c = !!this.j(a, 'ypc-item-id');
  !this.j(a, 'ypc-enabled') && b && c &&
      (N(a, 'ypc-enabled'), vh(a, 'ypc-enabled', 'true'))
};
m.nb = function(a) {
  this.j(a, 'ypc-enabled') && (qg(a, 'ypc-enabled'), yh(a, 'ypc-enabled'))
};
function cn(a, b) {
  var c = kd(U(a));
  return Ya(c, function(d) {
    return b == this.j(d, 'channel-external-id')
  }, a)
}
m.kb = function(a, b, c) {
  var d = hb(arguments, 2);
  B(a, function(e) {
    b.apply(this, db(e, d))
  }, this)
};
m.U = function(a, b, c) {
  var d = cn(this, a);
  d = db([d], hb(arguments, 1));
  this.kb.apply(this, d)
};
function an(a, b) {
  var c = y(function(d) {
    d.discoverable_subscriptions &&
        eh('SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS',
           d.discoverable_subscriptions);
    this.ra(b)
  }, a);
  bj(c)
}
Fa(Zm);
function(){};
var en = [
  {
    Ka: function(a) {
      return 'Cannot read property \'' + a.key + '\''
    },
    ma: {
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
    Ka: function(a) {
      return 'Cannot call \'' + a.key + '\''
    },
    ma: {
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
function fn() {
  this.f = [];
  this.g = []
}
var gn;
var hn = new O;
var jn = new Set, kn = 0,
    ln = ['PhantomJS', 'Googlebot', 'TO STOP THIS SECURITY SCAN go/scan'];
function mn(a) {
  nn(a)
}
function on(a) {
  nn(a, 'WARNING')
}
function nn(a, b) {
  var c = void 0 === c ? {} : c;
  c.name = P('INNERTUBE_CONTEXT_CLIENT_NAME', 1);
  c.version = P('INNERTUBE_CONTEXT_CLIENT_VERSION', void 0);
  var d = c || {};
  c = void 0 === b ? 'ERROR' : b;
  c = void 0 === c ? 'ERROR' : c;
  var e = void 0 === e ? !1 : e;
  if (a) {
    if (X('console_log_js_exceptions')) {
      var f = [];
      f.push('Name: ' + a.name);
      f.push('Message: ' + a.message);
      a.hasOwnProperty('params') &&
          f.push('Error Params: ' + JSON.stringify(a.params));
      f.push('File name: ' + a.fileName);
      f.push('Stacktrace: ' + a.stack);
      window.console.log(f.join('\n'), a)
    }
    if ((window && window.yterr || e) && !(5 <= kn) && 0 !== a.sampleWeight) {
      var g = Xc(a);
      e = g.message || 'Unknown Error';
      f = g.name || 'UnknownError';
      var h = g.lineNumber || 'Not available',
          k = g.fileName || 'Not available';
      g = g.stack || a.f || 'Not available';
      if (a.hasOwnProperty('args') && a.args && a.args.length)
        for (var l = 0, n = 0; n < a.args.length; n++) {
          var p = a.args[n], q = 'params.' + n;
          l += q.length;
          if (p)
            if (Array.isArray(p))
              for (var t = d, w = 0;
                   w < p.length && !(p[w] && (l += pn(w, p[w], q, t), 500 < l));
                   w++)
                ;
            else if ('object' === typeof p)
              for (t in t = void 0, w = d, p) {
                if (p[t] && (l += pn(t, p[t], q, w), 500 < l)) break
              }
            else
              d[q] = String(JSON.stringify(p)).substring(0, 500),
              l += d[q].length;
          else
            d[q] = String(JSON.stringify(p)).substring(0, 500),
            l += d[q].length;
          if (500 <= l) break
        }
      else if (a.hasOwnProperty('params') && a.params)
        if (p = a.params, 'object' === typeof a.params)
          for (n in q = 0, p) {
            if (p[n] &&
                (l = 'params.' + n,
                 t = String(JSON.stringify(p[n])).substr(0, 500), d[l] = t,
                 q += l.length + t.length, 500 < q))
              break
          }
        else
          d.params = String(JSON.stringify(p)).substr(0, 500);
      navigator.vendor && !d.hasOwnProperty('vendor') &&
          (d.vendor = navigator.vendor);
      d = {
        message: e,
        name: f,
        lineNumber: h,
        fileName: k,
        stack: g,
        params: d
      };
      e = Number(a.columnNumber);
      isNaN(e) || (d.lineNumber = d.lineNumber + ':' + e);
      e = u(en);
      for (f = e.next(); !f.done; f = e.next())
        if (f = f.value, f.ma[d.name])
          for (k = u(f.ma[d.name]), h = k.next(); !h.done; h = k.next())
            if (g = h.value, h = d.message.match(g.regexp)) {
              d.params['error.original'] = h[0];
              k = g.groups;
              g = {};
              for (n = 0; n < k.length; n++)
                g[k[n]] = h[n + 1], d.params['error.' + k[n]] = h[n + 1];
              d.message = f.Ka(g);
              break
            }
      window.yterr && 'function' === typeof window.yterr && window.yterr(d);
      if (!(jn.has(d.message) || 0 <= d.stack.indexOf('/YouTubeCenter.js') ||
            0 <= d.stack.indexOf('/mytube.js'))) {
        hn.M('handleError', d);
        if (X('kevlar_gel_error_routing')) {
          e = c;
          a: {
            f = u(ln); for (h = f.next(); !h.done;
                            h = f.next()) if (pk(h.value.toLowerCase())) {
              f = !0;
              break a
            } f = !1
          } if (!f) {
            f = {stackTrace: d.stack};
            d.fileName && (f.filename = d.fileName);
            h = d.lineNumber && d.lineNumber.split ? d.lineNumber.split(':') :
                                                     [];
            0 !== h.length &&
                (1 !== h.length || isNaN(Number(h[0])) ?
                     2 !== h.length || isNaN(Number(h[0])) ||
                         isNaN(Number(h[1])) ||
                         (f.lineNumber = Number(h[0]),
                          f.columnNumber = Number(h[1])) :
                     f.lineNumber = Number(h[0]));
            h = d.message;
            k = d.name;
            gn || (gn = new fn);
            g = gn;
            a: {
              n = u(g.g); for (p = n.next(); !p.done; p = n.next()) if (
                              p = p.value, d.message && d.message.match(p.f)) {
                g = p.weight;
                break a
              } g = u(g.f);
              for (n = g.next(); !n.done;
                   n = g.next()) if (n = n.value, n.f(d)) {
                g = n.weight;
                break a
              } g = 1
            } h = {
              level: 'ERROR_LEVEL_UNKNOWN',
              message: h,
              errorClassName: k,
              sampleWeight: g
            };
            'ERROR' === e ?
                h.level = 'ERROR_LEVEL_ERROR' :
                'WARNING' === e && (h.level = 'ERROR_LEVEL_WARNNING');
            e = {isObfuscated: !0, browserStackInfo: f};
            f = {pageUrl: window.location.href, kvPairs: []};
            if (k = d.params)
              for (g = u(Object.keys(k)), n = g.next(); !n.done; n = g.next())
                n = n.value,
                f.kvPairs.push({key: 'client.' + n, value: String(k[n])});
            k = P('SERVER_NAME', void 0);
            g = P('SERVER_VERSION', void 0);
            k && g &&
                (f.kvPairs.push({key: 'server.name', value: k}),
                 f.kvPairs.push({key: 'server.version', value: g}));
            dn('clientError', {errorMetadata: f, stackTrace: e, logMessage: h});
            uj()
          }
        }
        e = d.params || {};
        c = {
          qa: {
            a: 'logerror',
            t: 'jserror',
            type: d.name,
            msg: d.message.substr(0, 250),
            line: d.lineNumber,
            level: c,
            'client.name': e.name
          },
          D: {url: P('PAGE_NAME', window.location.href), file: d.fileName},
          method: 'POST'
        };
        e.version && (c['client.version'] = e.version);
        if (c.D) {
          d.stack && (c.D.stack = d.stack);
          f = u(Object.keys(e));
          for (h = f.next(); !h.done; h = f.next())
            h = h.value, c.D['client.' + h] = e[h];
          if (e = P('LATEST_ECATCHER_SERVICE_TRACKING_PARAMS', void 0))
            for (f = u(Object.keys(e)), h = f.next(); !h.done; h = f.next())
              h = h.value, c.D[h] = e[h];
          e = P('SERVER_NAME', void 0);
          f = P('SERVER_VERSION', void 0);
          e && f && (c.D['server.name'] = e, c.D['server.version'] = f)
        }
        Sj(P('ECATCHER_REPORT_HOST', '') + '/error_204', c);
        jn.add(d.message);
        kn++
      }
    }
  }
}
function(){};
function(){}
function(){}
function un(a, b) {
  for (var c = u(b), d = c.next(); !d.done; d = c.next())
    d = d.value,
    rn(d)     ? a.push(sn({}, d)) :
        tn(d) ? a.push(un([], d)) :
                a.push(d);
  return a
}
function(){}
function(){};
var vn = {}, wn = 0;
function xn(a, b, c, d, e) {
  e = void 0 === e ? '' : e;
  if (a)
    if (c && !pk('cobalt')) {
      if (a) {
        a instanceof Eb ||
            (a = 'object' == typeof a && a.aa ? a.Y() : String(a),
             Jb.test(a) ?
                 a = new Eb(a, Fb) :
                 (a = String(a), a = a.replace(/(%0A|%0D)/g, ''),
                  a = (b = a.match(Ib)) && Hb.test(b[1]) ? new Eb(a, Fb) :
                                                           null));
        a = Gb(a || Kb);
        if ('about:invalid#zClosurez' === a || a.startsWith('data'))
          a = '';
        else {
          if (!(a instanceof Sb)) {
            b = 'object' == typeof a;
            var f = null;
            b && a.Ea && (f = a.Aa());
            a = Vb(ub(b && a.aa ? a.Y() : String(a)), f)
          }
          a = Ub(a).toString();
          a = encodeURIComponent(String(xg(a)))
        }
        /^[\s\xa0]*$/.test(a) ||
            (a = td('IFRAME', {
               src: 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"',
               style: 'display:none'
             }),
             jd(a).body.appendChild(a))
      }
    } else if (e)
      Tj(a, b, 'POST', e, d);
    else if (P('USE_NET_AJAX_FOR_PING_TRANSPORT', !1) || d)
      Tj(a, b, 'GET', '', d);
    else {
      b: {
        try {
          var g = new Va({url: a});
          if (g.i && g.g || g.l) {
            var h = cc(a.match(bc)[5] || null), k;
            if (!(k = !h || !h.endsWith('/aclk'))) {
              var l = a.search(kc);
              d: {
                for (c = 0; 0 <= (c = a.indexOf('ri', c)) && c < l;) {
                  var n = a.charCodeAt(c - 1);
                  if (38 == n || 63 == n) {
                    var p = a.charCodeAt(c + 2);
                    if (!p || 61 == p || 38 == p || 35 == p) {
                      var q = c;
                      break d
                    }
                  }
                  c += 3
                } q = -1
              } if (0 > q) var t = null;
              else {
                var w = a.indexOf('&', q);
                if (0 > w || w > l) w = l;
                q += 3;
                t = decodeURIComponent(a.substr(q, w - q).replace(/\+/g, ' '))
              }
              k = '1' !== t
            }
            f = !k;
            break b
          }
        } catch (F) {} f = !1
      } f ?
          yn(a) ? (b && b(), f = !0) : f = !1 :
          f = !1;
      f || zn(a, b)
    }
}
function(){}
function(){};
function An(a, b) {
  Q.call(this, 1, arguments)
}
pa(An, Q);
function(){}
pa(Bn, Q);
var Cn = new R('aft-recorded', An), Dn = new R('timing-sent', Bn);
var En = window;
function Fn() {
  this.timing = {};
  this.clearResourceTimings = function() {};
  this.webkitClearResourceTimings = function() {};
  this.mozClearResourceTimings = function() {};
  this.msClearResourceTimings = function() {};
  this.oClearResourceTimings = function() {}
}
var Gn = En.performance || En.mozPerformance || En.msPerformance ||
    En.webkitPerformance || new Fn;
var Hn = !1;
y(Gn.clearResourceTimings || Gn.webkitClearResourceTimings ||
      Gn.mozClearResourceTimings || Gn.msClearResourceTimings ||
      Gn.oClearResourceTimings || Ea,
  Gn);
function(){}
function Kn(a) {
  var b;
  (b = x('ytcsi.' + (a || '') + 'data_')) ||
      (b = {tick: {}, info: {}}, z('ytcsi.' + (a || '') + 'data_', b));
  return b
}
function Ln(a) {
  a = Kn(a);
  a.info || (a.info = {});
  return a.info
}
function(){}
function(){}
function(){};
function On() {
  var a = x('ytcsi.debug');
  a || (a = [], z('ytcsi.debug', a), z('ytcsi.reference', {}));
  return a
}
function Pn(a) {
  a = a || '';
  var b = x('ytcsi.reference');
  b || (On(), b = x('ytcsi.reference'));
  if (b[a]) return b[a];
  var c = On(), d = {timerName: a, info: {}, tick: {}, span: {}};
  c.push(d);
  return b[a] = d
};
var Qn = v.ytLoggingLatencyUsageStats_ || {};
z('ytLoggingLatencyUsageStats_', Qn);
function Rn() {
  this.f = 0
}
function(){}
Rn.prototype.tick = function(a, b, c) {
  Tn(this, 'tick_' + a + '_' + b) ||
      dn('latencyActionTicked', {tickName: a, clientActionNonce: b},
         {timestamp: c})
};
Rn.prototype.info = function(a, b) {
  var c = Object.keys(a).join('');
  Tn(this, 'info_' + c + '_' + b) ||
      (c = Object.assign({}, a), c.clientActionNonce = b,
       dn('latencyActionInfo', c))
};
Rn.prototype.span = function(a, b) {
  var c = Object.keys(a).join('');
  Tn(this, 'span_' + c + '_' + b) ||
      (a.clientActionNonce = b, dn('latencyActionSpan', a))
};
function Tn(a, b) {
  Qn[b] = Qn[b] || {count: 0};
  var c = Qn[b];
  c.count++;
  c.time = hj();
  a.f || (a.f = Bh(function(){}, 5E3));
  return 5 < c.count ?
      (6 === c.count && 1 > 1E5 * Math.random() &&
           (c = new Hl(
                'CSI data exceeded logging limit with key', b.split('_')),
            0 <= b.indexOf('plev') || on(c)),
       !0) :
      !1
};
var Z = {},
    Un =
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
    Vn =
        'isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap'
            .split(' '),
    Wn = {},
    Xn =
        (Wn.ccs = 'CANARY_STATE_', Wn.mver = 'MEASUREMENT_VERSION_',
         Wn.pis = 'PLAYER_INITIALIZED_STATE_', Wn.yt_pt = 'LATENCY_PLAYER_',
         Wn.pa = 'LATENCY_ACTION_', Wn.yt_vst = 'VIDEO_STREAM_TYPE_', Wn),
    Yn =
        'all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds'
            .split(' ');
function Zn(a) {
  return !!P('FORCE_CSI_ON_GEL', !1) || X('csi_on_gel') || !!Kn(a).useGel
}
function $n(a) {
  a = Kn(a);
  if (!('gel' in a))
    a.gel = {gelTicks: {}, gelInfos: {}};
  else if (a.gel) {
    var b = a.gel;
    b.gelInfos || (b.gelInfos = {});
    b.gelTicks || (b.gelTicks = {})
  }
  return a.gel
};
function ao(a, b, c) {
  if (null !== b)
    if (Ln(c)[a] = b, Zn(c)) {
      var d = b;
      b = $n(c);
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
      if (a in Un) {
        b = Un[a];
        cb(Vn, b) && (d = !!d);
        a in Xn && 'string' === typeof d && (d = Xn[a] + d.toUpperCase());
        a = d;
        d = b.split('.');
        for (var g = e = {}, h = 0; h < d.length - 1; h++) {
          var k = d[h];
          g[k] = {};
          g = g[k]
        }
        g[d[d.length - 1]] = 'requestIds' === b ? [{id: a, endpoint: f}] : a;
        f = qn({}, e)
      } else
        cb(Yn, a) || on(new Hl('Unknown label logged with GEL CSI', a)),
            f = void 0;
      f && Zn(c) &&
          (b = Pn(c || ''), qn(b.info, f), b = $n(c),
           'gelInfos' in b || (b.gelInfos = {}), qn(b.gelInfos, f), c = Mn(c),
           Sn().info(f, c))
    } else
      Pn(c || '').info[a] = b
}
function bo(a, b, c) {
  var d = Jn(c);
  if (X('use_first_tick') && co(a, c)) return d[a];
  if (!b && '_' !== a[0]) {
    var e = a;
    Gn.mark &&
        (0 == e.lastIndexOf('mark_', 0) || (e = 'mark_' + e),
         c && (e += ' (' + c + ')'), Gn.mark(e))
  }
  e = b || hj();
  d[a] = e;
  e = $n(c);
  e.gelTicks && (e.gelTicks['tick_' + a] = !0);
  c || b || hj();
  if (Zn(c)) {
    Pn(c || '').tick[a] = b || hj();
    e = Mn(c);
    if ('_start' === a) {
      var f = Sn();
      Tn(f, 'baseline_' + e) ||
          dn('latencyActionBaselined', {clientActionNonce: e}, {timestamp: b})
    } else
      Sn().tick(a, e, b);
    Nn(c);
    e = !0
  } else
    e = !1;
  if (!e) {
    if (!x('yt.timing.' + (c || '') + 'pingSent_') &&
        (f = P((c || '') + 'TIMING_ACTION', void 0), e = Jn(c),
         x('ytglobal.timing' + (c || '') + 'ready_') && f && co('_start') &&
             In(c)))
      if (Nn(c), c)
        eo(c);
      else {
        f = !0;
        var g = P('TIMING_WAIT', []);
        if (g.length)
          for (var h = 0, k = g.length; h < k; ++h)
            if (!(g[h] in e)) {
              f = !1;
              break
            }
        f && eo(c)
      }
    Pn(c || '').tick[a] = b || hj()
  }
  return d[a]
}
function co(a, b) {
  var c = Jn(b);
  return a in c
}
function eo(a) {
  if (!Zn(a)) {
    var b = Jn(a), c = Ln(a), d = b._start,
        e = P('CSI_SERVICE_NAME', 'youtube'),
        f = {v: 2, s: e, action: P((a || '') + 'TIMING_ACTION', void 0)},
        g = c.srt;
    void 0 !== b.srt && delete c.srt;
    b.aft = In(a);
    var h = Jn(a), k = h.pbr, l = h.vc;
    h = h.pbs;
    k && l && h && k < l && l < h && Ln(a).yt_pvis && 'youtube' === e &&
        (ao('yt_lt', 'hot_bg', a), e = b.vc, k = b.pbs, delete b.aft,
         c.aft = Math.round(k - e));
    for (var n in c) '_' !== n.charAt(0) && (f[n] = c[n]);
    b.ps = hj();
    n = {};
    e = [];
    for (var p in b)
      '_' !== p.charAt(0) &&
          (k = Math.round(b[p] - d), n[p] = k, e.push(p + '.' + k));
    f.rt = e.join(',');
    b = !!c.ap;
    X('debug_csi_data') &&
        (c = x('yt.timing.csiData'), c || (c = [], z('yt.timing.csiData', c)),
         c.push({page: location.href, time: new Date, args: f}));
    c = '';
    for (var q in f) f.hasOwnProperty(q) && (c += '&' + q + '=' + f[q]);
    f = '/csi_204?' + c.substring(1);
    if (window.navigator && window.navigator.sendBeacon && b) {
      var t = void 0 === t ? '' : t;
      yn(f, t) || xn(f, void 0, void 0, void 0, t)
    } else
      xn(f);
    z('yt.timing.' + (a || '') + 'pingSent_', !0);
    S(Dn, new Bn(n.aft + (Number(g) || 0), a))
  }
}
var fo = window;
fo.ytcsi && (fo.ytcsi.info = ao, fo.ytcsi.tick = bo);
new $f(go, 1E3);
function(){};
function ho(a) {
  this.f = a;
  this.L = null;
  P('SUBSCRIBE_EMBED_HOVERCARD_URL') &&
      (io(this), T(this.f, 'mouseover', y(this.l, this)),
       T(this.f, 'mouseout', y(this.ka, this)),
       T(this.f, 'click', y(this.ka, this)), Kh(Di, Pa(this.g, !0), this),
       Kh(Ii, Pa(this.g, !1), this), jo(this))
}
function io(a) {
  var b = {
    url: P('SUBSCRIBE_EMBED_HOVERCARD_URL'),
    style: 'bubble',
    hideClickDetection: !0,
    show: !1,
    anchor: a.f,
    relayOpen: '-1'
  };
  a = y(a.i, a);
  ri().open(b, a)
}
function jo(a) {
  Ym() || qh('LOGGED_IN', function() {
    this.L && (this.ka(), this.L.close(), this.L = null, io(this))
  }, a)
}
ho.prototype.i = function(a) {
  this.L = a;
  a = Zm.C().isSubscribed(this.f);
  this.g(a)
};
ho.prototype.l = function() {
  this.L && this.L.restyle({show: !0})
};
ho.prototype.ka = function(){};
ho.prototype.g = function(a) {
  if (this.L) {
    a = {isSubscribed: a};
    try {
      this.L.send(
          'msg-hovercard-subscription', a, void 0,
          x('gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER'))
    } catch (b) {
    }
  }
};
function ko() {
  qi(function() {
    var a = ke(G('yt-subscribe'));
    a = {width: a.width, height: a.height};
    var b = lo;
    ri().ready(a, null, b)
  })
}
function lo(a) {
  if (a.length && a[a.length - 1]) {
    a = a[a.length - 1].eurl;
    var b = G('yt-subscribe'), c = Zm.C();
    if (b = H(U(c), b)) a && (Zm.C(), vh(b, 'parent-url', a)), new ho(b)
  }
};
var mo = x('ytglobal.prefsUserPrefsPrefs_') || {};
z('ytglobal.prefsUserPrefsPrefs_', mo);
function no() {
  this.f = P('ALT_PREF_COOKIE_NAME', 'PREF');
  var a = ek(this.f);
  if (a) {
    a = decodeURIComponent(a).split('&');
    for (var b = 0; b < a.length; b++) {
      var c = a[b].split('='), d = c[0];
      (c = c[1]) && (mo[d] = c.toString())
    }
  }
}
m = no.prototype;
m.get = function(a, b) {
  oo(a);
  po(a);
  var c = qo(a);
  return null != c ? c : b ? b : ''
};
m.set = function(){};
function ro(a) {
  var b = qo('f' + (Math.floor(a / 31) + 1));
  return !!(
      ((null != b && /^[A-Fa-f0-9]+$/.test(b) ? parseInt(b, 16) : null) || 0) &
      1 << a % 31)
}
m.remove = function(){};
m.save = function(){};
m.clear = function(){};
m.dump = function(){};
function(){}
function(){}
function qo(a) {
  return void 0 !== mo[a] ? mo[a].toString() : null
}
Fa(no);
var so = new Map([
  ['dark', 'USER_INTERFACE_THEME_DARK'], ['light', 'USER_INTERFACE_THEME_LIGHT']
]),
    to = [
      '/fashion', '/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ',
      '/channel/UCTApTkbpcqiLL39WUlne4ig', '/channel/UCW5PCzG3KQvbOX4zc3KY0lQ'
    ];
function uo() {
  var a = void 0 === a ? window.location.href : a;
  if (X('kevlar_disable_theme_param')) return null;
  var b = cc(a.match(bc)[5] || null);
  if (vo(b)) return 'USER_INTERFACE_THEME_DARK';
  a = ni(a).theme;
  return so.get(a) || null
}
function vo(a) {
  var b = to.map(function(c) {
    return c.toLowerCase()
  });
  return !X('disable_dark_fashion_destination_launch') && b.some(function(c) {
    return a.toLowerCase().startsWith(c)
  }) ?
      !0 :
      !1
};
function wo() {
  this.f = {};
  var a = ek('CONSISTENCY');
  a && xo(this, {encryptedTokenJarContents: a})
}
wo.prototype.g = function(a, b) {
  var c, d, e,
      f = null ===
              (d = null === (c = b.context) || void 0 === c ? void 0 :
                                                              c.request) ||
          void 0 === d ?
      void 0 :
      d.consistencyTokenJars,
      g = null === (e = a.responseContext) || void 0 === e ?
      void 0 :
      e.consistencyTokenJar;
  f && g && this.replace(f, g)
};
wo.prototype.replace = function(a, b) {
  for (var c = u(a), d = c.next(); !d.done; d = c.next())
    delete this.f[d.value.encryptedTokenJarContents];
  xo(this, b)
};
function xo(a, b) {
  if (b.encryptedTokenJarContents &&
      (a.f[b.encryptedTokenJarContents] = b,
       'string' === typeof b.expirationSeconds)) {
    var c = Number(b.expirationSeconds);
    setTimeout(function(){}, 1E3 * c);
    dk('CONSISTENCY', b.encryptedTokenJarContents, c, void 0, !0)
  }
};
function yo() {
  var a = P('LOCATION_PLAYABILITY_TOKEN');
  a && (this.locationPlayabilityToken = a, this.f = void 0)
}
function zo() {
  yo.f || (yo.f = new yo);
  return yo.f
}
yo.prototype.g = function(a) {
  var b;
  a = null === (b = a.responseContext) || void 0 === b ?
      void 0 :
      b.locationPlayabilityToken;
  void 0 !== a && (this.locationPlayabilityToken = a, this.f = void 0)
};
var Ao = {
  bluetooth: 'CONN_DISCO',
  cellular: 'CONN_CELLULAR_UNKNOWN',
  ethernet: 'CONN_WIFI',
  none: 'CONN_NONE',
  wifi: 'CONN_WIFI',
  wimax: 'CONN_CELLULAR_4G',
  other: 'CONN_UNKNOWN',
  unknown: 'CONN_UNKNOWN',
  'slow-2g': 'CONN_CELLULAR_2G',
  '2g': 'CONN_CELLULAR_2G',
  '3g': 'CONN_CELLULAR_3G',
  '4g': 'CONN_CELLULAR_4G'
};
function(){}
function Co(a) {
  if (!Do) {
    var b = {
      ya: {
        playlistEditEndpoint: Eo,
        subscribeEndpoint: Fo,
        unsubscribeEndpoint: Go,
        modifyChannelNotificationPreferenceEndpoint: Ho
      }
    };
    var c = X('web_enable_client_location_service') ? zo() : void 0, d = [];
    c && d.push(c);
    Io.f || (Io.f = new Io);
    c = Io.f;
    lk.f || (lk.f = new lk);
    Bo.f = new Bo(b, c, d);
    Do = Bo.f
  }
  b = Do;
  var e = void 0 === e ? nk : e;
  a: {
    var f, g; if ((null === (f = a.signalServiceEndpoint) || void 0 === f ?
                       0 :
                       f.signal) &&
                  b.f.Qb && (f = b.f.Qb[a.signalServiceEndpoint.signal])) {
      var h = new f;
      break a
    } if ((null === (g = a.continuationCommand) || void 0 === g ? 0 :
                                                                  g.request) &&
          b.f.lb && (g = b.f.lb[a.continuationCommand.request])) {
      h = new g;
      break a
    } for (h in a) if (b.f.ya[h] && (g = b.f.ya[h])) {
      h = new g;
      break a
    } h = void 0
  } if (!h) return b
      .g(new Hl('Error: No request builder found for command.', a)),
      Lf({});
  g = void 0;
  g = void 0 === g ? {} : g;
  f = a.clickTrackingParams;
  var k = void 0 === k ? !0 : k;
  if (d = P('INNERTUBE_CONTEXT')) {
    d = ob(d);
    d.client || (d.client = {});
    c = d.client;
    'MWEB' === c.clientName &&
        (c.clientFormFactor =
             P('IS_TABLET') ? 'LARGE_FORM_FACTOR' : 'SMALL_FORM_FACTOR');
    c.screenWidthPoints = window.innerWidth;
    c.screenHeightPoints = window.innerHeight;
    c.screenPixelDensity = Math.round(window.devicePixelRatio) || 1;
    c.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var l = void 0 === l ? !1 : l;
    no.C();
    var n =
        ro(165) ? 'USER_INTERFACE_THEME_DARK' : 'USER_INTERFACE_THEME_LIGHT';
    X('kevlar_apply_prefers_color_theme') &&
        (n = ro(165) ? 'USER_INTERFACE_THEME_DARK' :
             ro(174) ? 'USER_INTERFACE_THEME_LIGHT' :
             window.matchMedia &&
                 window.matchMedia('(prefers-color-scheme)').matches &&
                 window.matchMedia('(prefers-color-scheme: dark)').matches ?
                       'USER_INTERFACE_THEME_DARK' :
                       'USER_INTERFACE_THEME_LIGHT');
    l = l ? n : uo() || n;
    c.userInterfaceTheme = l;
    if (X('web_log_connection')) {
      c: {
        if (n = (l = window.navigator) ? l.connection : void 0) {
          l = Ao[n.type || 'unknown'] || 'CONN_UNKNOWN';
          n = Ao[n.f || 'unknown'] || 'CONN_UNKNOWN';
          'CONN_CELLULAR_UNKNOWN' === l && 'CONN_UNKNOWN' !== n && (l = n);
          if ('CONN_UNKNOWN' !== l) break c;
          if ('CONN_UNKNOWN' !== n) {
            l = n;
            break c
          }
        } l = void 0
      } l &&
          (c.connectionType = l)
    }
    (l = ek('EXPERIMENTS_DEBUG')) ?
        c.experimentsToken = 'ZERO' === l ? 'GgIQAQ%3D%3D' : l :
        delete c.experimentsToken;
    l = fj();
    wo.f || (wo.f = new wo);
    c = kb(wo.f.f);
    d.request = Object.assign(
        Object.assign({}, d.request),
        {internalExperimentFlags: l, consistencyTokenJars: c});
    c = no.C();
    l = ro(58);
    c = c.get('gsml', '');
    d.user = Object.assign({}, d.user);
    l && (d.user.enableSafetyMode = l);
    c && (d.user.lockedSafetyMode = !0);
    (l = P('DELEGATED_SESSION_ID')) && !X('pageid_as_header_web') &&
        (d.user.onBehalfOfUser = l);
    k && (k = Pl()) && (d.clientScreenNonce = k);
    f && (d.clickTracking = {clickTrackingParams: f});
    X('web_enable_client_location_service') &&
        (k = zo(), d.client || (d.client = {}),
         k.f ? (d.client.locationInfo || (d.client.locationInfo = {}),
                d.client.locationInfo.latitudeE7 = 1E7 * k.f.coords.latitude,
                d.client.locationInfo.longitudeE7 = 1E7 * k.f.coords.longitude,
                d.client.locationInfo.horizontalAccuracyMeters =
                    k.f.coords.accuracy) :
               k.locationPlayabilityToken &&
                 (d.client.locationPlayabilityToken =
                      k.locationPlayabilityToken));
    k = d
  } else
    nn(Error('Error: No InnerTubeContext shell provided in ytconfig.')), k = {};
  k = {context: k};
  (f = h.i(a)) ?
      h.f(k, f, g) :
      (nn(new Hl('Error: Failed to create Request from Command.', a)),
       k = void 0);
  if (!k)
    return b.g(new Hl('Error: Failed to build request for command.', a)),
           Lf({});
  var p, q;
  h = '/youtubei/v1/' + Jo(h.g());
  (g = null ===
               (q = null === (p = a.commandMetadata) || void 0 === p ?
                    void 0 :
                    p.webCommandMetadata) ||
           void 0 === q ?
       void 0 :
       q.apiUrl) &&
      (h = g);
  h = oi(h, {key: P('INNERTUBE_API_KEY')}, !1);
  if (p = P('INNERTUBE_HOST_OVERRIDE'))
    p = String(p), q = String, f = h.match(bc), h = f[5], g = f[6], f = f[7],
    d = '', h && (d += h), g && (d += '?' + g), f && (d += '#' + f),
    h = p + q(d);
  p = h;
  a = {
    input: p,
    na: {
      method: 'POST',
      mode: pi(p) ? 'same-origin' : 'cors',
      credentials: pi(p) ? 'same-origin' : 'include'
    },
    Fa: k,
    config: {command: a, kc: {identity: e}}
  };
  return Ko(b, a)
}
function Ko(a, b) {
  var c = JSON.stringify(b.Fa);
  return Lo()
      .then(function(d) {
        b.na = Object.assign(Object.assign({}, b.na), {headers: d});
        d = Object.assign(Object.assign({}, b.na), {body: c});
        return a.l.fetch(b.input, d)
      })
      .then(function(d) {
        if (d && a.i)
          for (var e = u(a.i), f = e.next(); !f.done; f = e.next())
            f.value.g(d, b.Fa);
        return Lf(d)
      })
}
function Lo() {
  return Lf(mk()).then(function(a) {
    a = Object.assign(
        {
          'Content-Type': 'application/json',
          'X-Goog-Visitor-Id': P('VISITOR_DATA')
        },
        a);
    return Lf(a)
  })
};
var Mo = ['notification/modify_channel_preference'],
    No = ['browse/edit_playlist'], Oo = ['subscription/subscribe'],
    Po = ['subscription/unsubscribe'];
var Qo = {},
    Ro =
        (Qo.WEB_UNPLUGGED = '^unplugged/',
         Qo.WEB_UNPLUGGED_ONBOARDING = '^unplugged/',
         Qo.WEB_UNPLUGGED_OPS = '^unplugged/',
         Qo.WEB_UNPLUGGED_PUBLIC = '^unplugged/', Qo.WEB_CREATOR = '^creator/',
         Qo.WEB_KIDS = '^kids/', Qo.WEB_EXPERIMENTS = '^experiments/',
         Qo.WEB_MUSIC = '^music/', Qo.WEB_REMIX = '^music/',
         Qo.WEB_MUSIC_EMBEDDED_PLAYER = '^music/',
         Qo.WEB_MUSIC_EMBEDDED_PLAYER = '^main_app/|^sfv/', Qo);
function Jo(a) {
  var b = void 0 === b ? 'UNKNOWN_INTERFACE' : b;
  if (1 === a.length) return a[0];
  var c = Ro[b];
  if (c) {
    var d = new RegExp(c), e = u(a);
    for (c = e.next(); !c.done; c = e.next())
      if (c = c.value, d.exec(c)) return c
  }
  var f = [];
  Object.entries(Ro).forEach(function(g) {
    var h = u(g);
    g = h.next().value;
    h = h.next().value;
    b !== g && f.push(h)
  });
  d = new RegExp(f.join('|'));
  a.sort(function(g, h) {
    return g.length - h.length
  });
  e = u(a);
  for (c = e.next(); !c.done; c = e.next())
    if (c = c.value, !d.exec(c)) return c;
  return a[0]
};
function So() {};
function Fo() {}
pa(Fo, So);
Fo.prototype.g = function() {
  return Oo
};
Fo.prototype.i = function(a) {
  return a.subscribeEndpoint
};
Fo.prototype.f = function(){};
function Go() {}
pa(Go, So);
Go.prototype.g = function() {
  return Po
};
Go.prototype.i = function(a) {
  return a.unsubscribeEndpoint
};
Go.prototype.f = function(){};
function Ho() {}
pa(Ho, So);
Ho.prototype.g = function() {
  return Mo
};
Ho.prototype.i = function(a) {
  return a.modifyChannelNotificationPreferenceEndpoint
};
Ho.prototype.f = function(){};
function Eo() {}
pa(Eo, So);
Eo.prototype.g = function() {
  return No
};
Eo.prototype.i = function(a) {
  return a.playlistEditEndpoint
};
Eo.prototype.f = function(a, b) {
  b.actions && (a.actions = b.actions);
  b.params && (a.params = b.params);
  b.playlistId && (a.playlistId = b.playlistId)
};
function Io() {}
Io.prototype.fetch = function(a, b) {
  var c = new Request(a, b);
  return Lf(fetch(c).then(function(d) {
    return To(d)
  })['catch'](function(d) {
    on(d)
  }))
};
function To(a) {
  var b = a.json();
  a.redirected || a.ok || b.then(function(c) {
    on(new Hl('Error: API fetch failed', a.status, a.url, c))
  });
  return b
};
var Do;
function Uo(a) {
  Q.call(this, 1, arguments)
}
A(Uo, Q);
function Vo(a, b) {
  Q.call(this, 2, arguments);
  this.g = a;
  this.f = b
}
A(Vo, Q);
function Wo(a, b, c, d) {
  Q.call(this, 1, arguments);
  this.f = b;
  this.itemType = c || null;
  this.itemId = d || null
}
A(Wo, Q);
function Xo(a, b) {
  Q.call(this, 1, arguments);
  this.g = a;
  this.f = b || null
}
A(Xo, Q);
function(){}
A(Yo, Q);
var Zo = new R('ypc-core-load', Uo), $o = new R('ypc-guide-sync-success', Vo),
    ap = new R('ypc-purchase-success', Wo),
    bp = new R('ypc-subscription-cancel', Yo),
    cp = new R('ypc-subscription-cancel-success', Xo),
    dp = new R('ypc-init-subscription', Yo);
var ep = [];
function fp(a) {
  a.g ? S(Zo, new Uo(function() {
            S(dp, new Yo(a.g))
          })) :
      X('web_classic_innertube_subscription_update') ?
        gp(a.f, a.params) :
        hp(a.f, a.l, a.i, a.source, a.params)
}
function ip(a) {
  a.g ? S(Zo, new Uo(function() {
            S(bp, new Yo(a.g))
          })) :
      X('web_classic_innertube_subscription_update') ?
        jp(a.f, a.params) :
        kp(a.f, a.o, a.l, a.i, a.source)
}
function(){}
function np(a) {
  op(eb(a.f))
}
function(){}
function rp(a) {
  var b = a.itemId, c = a.f.subscriptionId;
  b && c && S(Di, new wi(b, c, a.f.channelInfo))
}
function sp(a) {
  var b = a.f;
  jb(a.g, function(c, d) {
    S(Di, new wi(d, c, b[d]))
  })
}
function tp(a) {
  S(Ii, new ti(a.g.itemId));
  a.f && a.f.length && (up(a.f, Ii), up(a.f, Ki))
}
function gp(a, b) {
  var c = new ti(a);
  S(Bi, c);
  Of(Co({
       commandMetadata: {
         webCommandMetadata: {apiUrl: '/youtubei/v1/subscription/subscribe'}
       },
       subscribeEndpoint: {channelIds: [a], params: b}
     }).then(function() {
    S(Di,
      new wi(
          a, Math.round(1E4 * Math.random()).toString(),
          {thumbnail: '', title: '', url: '', sc: a}))
  }),
     function() {
       S(Ci, c)
     })
}
function hp(a, b, c, d, e) {
  var f = new ti(a);
  S(Bi, f);
  var g = {};
  g.c = a;
  c && (g.eurl = c);
  d && (g.source = d);
  c = {};
  (d = P('PLAYBACK_ID')) && (c.plid = d);
  (d = P('EVENT_ID')) && (c.ei = d);
  e && (c.params = e);
  b && vp(b, c);
  Sj('/subscription_ajax?action_create_subscription_to_channel=1', {
    method: 'POST',
    qa: g,
    D: c,
    onSuccess: function(h, k) {
      var l = k.response;
      S(Di, new wi(a, l.id, l.channel_info));
      l.show_feed_privacy_dialog && th('SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG', a)
    },
    ba: function() {
      S(Ci, f)
    }
  })
}
function jp(a, b) {
  var c = new ti(a);
  S(Gi, c);
  Of(Co({
       commandMetadata: {
         webCommandMetadata: {apiUrl: '/youtubei/v1/subscription/unsubscribe'}
       },
       unsubscribeEndpoint: {channelIds: [a], params: b}
     }).then(function() {
    S(Ii, c)
  }),
     function() {
       S(Hi, c)
     })
}
function kp(a, b, c, d, e) {
  var f = new ti(a);
  S(Gi, f);
  var g = {};
  g.c = a;
  d && (g.eurl = d);
  e && (g.source = e);
  d = {};
  d.c = a;
  d.s = b;
  (a = P('PLAYBACK_ID')) && (d.plid = a);
  (a = P('EVENT_ID')) && (d.ei = a);
  c && vp(c, d);
  Sj('/subscription_ajax?action_remove_subscriptions=1', {
    method: 'POST',
    qa: g,
    D: d,
    onSuccess: function() {
      S(Ii, f)
    },
    ba: function() {
      S(Hi, f)
    }
  })
}
function qp(a, b, c) {
  if (a) {
    var d = {};
    d.channel_id = a;
    switch (b) {
      case 'receive-all-updates':
        d.receive_all_updates = !0;
        break;
      case 'receive-no-updates':
        d.receive_no_updates = !0;
        d.receive_post_updates = !1;
        break;
      case 'receive-highlight-updates':
        d.receive_all_updates = !1;
        d.receive_no_updates = !1;
        break;
      default:
        return
    }
    null === c || d.receive_no_updates || (d.receive_post_updates = c);
    var e = new ui(a, b, c);
    Sj('/subscription_ajax?action_update_subscription_preferences=1', {
      method: 'POST',
      D: d,
      onError: function() {
        S(Oi, e)
      },
      onSuccess: function() {
        S(Ni, e)
      }
    })
  }
}
function mp(a) {
  if (a.length) {
    var b = gb(a, 0, 40);
    S('subscription-batch-subscribe-loading');
    up(b, Bi);
    var c = {};
    c.a = b.join(',');
    var d = function() {
      S('subscription-batch-subscribe-loaded');
      up(b, Ci)
    };
    Sj('/subscription_ajax?action_create_subscription_to_all=1', {
      method: 'POST',
      D: c,
      onSuccess: function(e, f) {
        d();
        var g = f.response, h = g.id;
        if (Array.isArray(h) && h.length == b.length) {
          var k = g.channel_info_map;
          B(h, function(l, n) {
            var p = b[n];
            S(Di, new wi(p, l, k[p]))
          });
          a.length ? mp(a) : S('subscription-batch-subscribe-finished')
        }
      },
      onError: function(){}
    })
  }
}
function op(a) {
  if (a.length) {
    var b = gb(a, 0, 40);
    S('subscription-batch-unsubscribe-loading');
    up(b, Gi);
    var c = {};
    c.c = b.join(',');
    var d = function(){};
    Sj('/subscription_ajax?action_remove_subscriptions=1', {
      method: 'POST',
      D: c,
      onSuccess: function() {
        d();
        up(b, Ii);
        a.length && op(a)
      },
      onError: function() {
        d()
      }
    })
  }
}
function up(a, b) {
  B(a, function(){}