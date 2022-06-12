/*  Prototype JavaScript framework, version 1.6.0.3
 *  (c) 2005-2008 Sam Stephenson
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://www.prototypejs.org/
 *
 *--------------------------------------------------------------------------*/

var Prototype = {
  Version: '1.6.0.3',

  Browser: {
    IE:     !!(window.attachEvent &&
      navigator.userAgent.indexOf('Opera') === -1),
    Opera:  navigator.userAgent.indexOf('Opera') > -1,
    WebKit: navigator.userAgent.indexOf('AppleWebKit/') > -1,
    Gecko:  navigator.userAgent.indexOf('Gecko') > -1 &&
      navigator.userAgent.indexOf('KHTML') === -1,
    MobileSafari: !!navigator.userAgent.match(/Apple.*Mobile.*Safari/)
  },

  BrowserFeatures: {
    XPath: !!document.evaluate,
    SelectorsAPI: !!document.querySelector,
    ElementExtensions: !!window.HTMLElement,
    SpecificElementExtensions:
      document.createElement('div')['__proto__'] &&
      document.createElement('div')['__proto__'] !==
        document.createElement('form')['__proto__']
  },

  ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script>',
  JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,

  emptyFunction: function() { },
  K: function(x) { return x }
};

if (Prototype.Browser.MobileSafari)
  Prototype.BrowserFeatures.SpecificElementExtensions = false;


/* Based on Alex Arnell's inheritance implementation. */
var Class = {
  create: function(){}
};

Class.Methods = {
  addMethods: function(){}
};

var Abstract = { };

Object.extend = function(destination, source) {
  for (var property in source)
    destination[property] = source[property];
  return destination;
};

Object.extend(Object, {
  inspect: function(){},

  toJSON: function(){},

  toQueryString: function(object) {
    return $H(object).toQueryString();
  },

  toHTML: function(){},

  keys: function(object) {
    var keys = [];
    for (var property in object)
      keys.push(property);
    return keys;
  },

  values: function(){},

  clone: function(object) {
    return Object.extend({ }, object);
  },

  isElement: function(){},

  isArray: function(){},

  isHash: function(object) {
    return object instanceof Hash;
  },

  isFunction: function(object) {
    return typeof object == "function";
  },

  isString: function(object) {
    return typeof object == "string";
  },

  isNumber: function(object) {
    return typeof object == "number";
  },

  isUndefined: function(object) {
    return typeof object == "undefined";
  }
});

Object.extend(Function.prototype, {
  argumentNames: function(){},

  bind: function(){},

  bindAsEventListener: function(){},

  curry: function(){},

  delay: function(){},

  defer: function(){},

  wrap: function(){},

  methodize: function(){}
});

Date.prototype.toJSON = function(){};

var Try = {
  these: function(){}
};

RegExp.prototype.match = RegExp.prototype.test;

RegExp.escape = function(str) {
  return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

/*--------------------------------------------------------------------------*/

var PeriodicalExecuter = Class.create({
  initialize: function(){},

  registerCallback: function(){},

  execute: function() {
    this.callback(this);
  },

  stop: function(){},

  onTimerEvent: function(){}
});
Object.extend(String, {
  interpret: function(){},
  specialChar: {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '\\': '\\\\'
  }
});

Object.extend(String.prototype, {
  gsub: function(){},

  sub: function(){},

  scan: function(){},

  truncate: function(){},

  strip: function() {
    return this.replace(/^\s+/, '').replace(/\s+$/, '');
  },

  stripTags: function() {
    return this.replace(/<\/?[^>]+>/gi, '');
  },

  stripScripts: function(){},

  extractScripts: function(){},

  evalScripts: function(){},

  escapeHTML: function(){},

  unescapeHTML: function(){},

  toQueryParams: function(){},

  toArray: function() {
    return this.split('');
  },

  succ: function(){},

  times: function(){},

  camelize: function(){},

  capitalize: function(){},

  underscore: function(){},

  dasherize: function() {
    return this.gsub(/_/,'-');
  },

  inspect: function(){},

  toJSON: function() {
    return this.inspect(true);
  },

  unfilterJSON: function(){},

  isJSON: function(){},

  evalJSON: function(){},

  include: function(){},

  startsWith: function(){},

  endsWith: function(){},

  empty: function(){},

  blank: function() {
    return /^\s*$/.test(this);
  },

  interpolate: function(){}
});

if (Prototype.Browser.WebKit || Prototype.Browser.IE) Object.extend(String.prototype, {
  escapeHTML: function(){},
  unescapeHTML: function(){}
});

String.prototype.gsub.prepareReplacement = function(){};

String.prototype.parseQuery = String.prototype.toQueryParams;

Object.extend(String.prototype.escapeHTML, {
  div:  document.createElement('div'),
  text: document.createTextNode('')
});

String.prototype.escapeHTML.div.appendChild(String.prototype.escapeHTML.text);

var Template = Class.create({
  initialize: function(){},

  evaluate: function(){}
});
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;

var $break = { };

var Enumerable = {
  each: function(){},

  eachSlice: function(){},

  all: function(){},

  any: function(){},

  collect: function(){},

  detect: function(){},

  findAll: function(){},

  grep: function(){},

  include: function(){},

  inGroupsOf: function(){},

  inject: function(){},

  invoke: function(){},

  max: function(){},

  min: function(){},

  partition: function(){},

  pluck: function(){},

  reject: function(){},

  sortBy: function(){},

  toArray: function() {
    return this.map();
  },

  zip: function(){},

  size: function() {
    return this.toArray().length;
  },

  inspect: function(){}
};

Object.extend(Enumerable, {
  map:     Enumerable.collect,
  find:    Enumerable.detect,
  select:  Enumerable.findAll,
  filter:  Enumerable.findAll,
  member:  Enumerable.include,
  entries: Enumerable.toArray,
  every:   Enumerable.all,
  some:    Enumerable.any
});
function(){}

if (Prototype.Browser.WebKit) {
  $A = function(){};
}

Array.from = $A;

Object.extend(Array.prototype, Enumerable);

if (!Array.prototype._reverse) Array.prototype._reverse = Array.prototype.reverse;

Object.extend(Array.prototype, {
  _each: function(){},

  clear: function() {
    this.length = 0;
    return this;
  },

  first: function() {
    return this[0];
  },

  last: function() {
    return this[this.length - 1];
  },

  compact: function(){},

  flatten: function(){},

  without: function(){},

  reverse: function(){},

  reduce: function(){},

  uniq: function(){},

  intersect: function(){},

  clone: function(){},

  size: function() {
    return this.length;
  },

  inspect: function(){},

  toJSON: function(){}
});

// use native browser JS 1.6 implementation if available
if (Object.isFunction(Array.prototype.forEach))
  Array.prototype._each = Array.prototype.forEach;

if (!Array.prototype.indexOf) Array.prototype.indexOf = function(){};

if (!Array.prototype.lastIndexOf) Array.prototype.lastIndexOf = function(){};

Array.prototype.toArray = Array.prototype.clone;

function(){}

if (Prototype.Browser.Opera){
  Array.prototype.concat = function(){};
}
Object.extend(Number.prototype, {
  toColorPart: function() {
    return this.toPaddedString(2, 16);
  },

  succ: function(){},

  times: function(){},

  toPaddedString: function(){},

  toJSON: function(){}
});

$w('abs round ceil floor').each(function(){});
function $H(object) {
  return new Hash(object);
};

var Hash = Class.create(Enumerable, (function(){})());

Hash.prototype.toTemplateReplacements = Hash.prototype.toObject;
Hash.from = $H;
var ObjectRange = Class.create(Enumerable, {
  initialize: function(start, end, exclusive) {
    this.start = start;
    this.end = end;
    this.exclusive = exclusive;
  },

  _each: function(){},

  include: function(){}
});

var $R = function(start, end, exclusive) {
  return new ObjectRange(start, end, exclusive);
};

var Ajax = {
  getTransport: function(){},

  activeRequestCount: 0
};

Ajax.Responders = {
  responders: [],

  _each: function(iterator) {
    this.responders._each(iterator);
  },

  register: function(){},

  unregister: function(responder) {
    this.responders = this.responders.without(responder);
  },

  dispatch: function(){}
};

Object.extend(Ajax.Responders, Enumerable);

Ajax.Responders.register({
  onCreate:   function() { Ajax.activeRequestCount++ },
  onComplete: function() { Ajax.activeRequestCount-- }
});

Ajax.Base = Class.create({
  initialize: function(){}
});

Ajax.Request = Class.create(Ajax.Base, {
  _complete: false,

  initialize: function(){},

  request: function(){},

  onStateChange: function(){},

  setRequestHeaders: function(){},

  success: function(){},

  getStatus: function(){},

  respondToReadyState: function(){},

  isSameOrigin: function(){},

  getHeader: function(){},

  evalResponse: function(){},

  dispatchException: function(){}
});

Ajax.Request.Events =
  ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];

Ajax.Response = Class.create({
  initialize: function(){},

  status:      0,
  statusText: '',

  getStatus: Ajax.Request.prototype.getStatus,

  getStatusText: function() {
    try {
      return this.transport.statusText || '';
    } catch (e) { return '' }
  },

  getHeader: Ajax.Request.prototype.getHeader,

  getAllHeaders: function(){},

  getResponseHeader: function(name) {
    return this.transport.getResponseHeader(name);
  },

  getAllResponseHeaders: function() {
    return this.transport.getAllResponseHeaders();
  },

  _getHeaderJSON: function(){},

  _getResponseJSON: function(){}
});

Ajax.Updater = Class.create(Ajax.Request, {
  initialize: function(){},

  updateContent: function(){}
});

Ajax.PeriodicalUpdater = Class.create(Ajax.Base, {
  initialize: function(){},

  start: function(){},

  stop: function(){},

  updateComplete: function(){},

  onTimerEvent: function(){}
});
function(){}

if (Prototype.BrowserFeatures.XPath) {
  document._getElementsByXPath = function(){};
}

/*--------------------------------------------------------------------------*/

if (!window.Node) var Node = { };

if (!Node.ELEMENT_NODE) {
  // DOM level 2 ECMAScript Language Binding
  Object.extend(Node, {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    ENTITY_REFERENCE_NODE: 5,
    ENTITY_NODE: 6,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
    NOTATION_NODE: 12
  });
}

(function(){}).call(window);

Element.cache = { };

Element.Methods = {
  visible: function(){},

  toggle: function(){},

  hide: function(element) {
    element = $(element);
    element.style.display = 'none';
    return element;
  },

  show: function(){},

  remove: function(){},

  update: function(){},

  replace: function(){},

  insert: function(){},

  wrap: function(){},

  inspect: function(){},

  recursivelyCollect: function(){},

  ancestors: function(element) {
    return $(element).recursivelyCollect('parentNode');
  },

  descendants: function(element) {
    return $(element).select("*");
  },

  firstDescendant: function(){},

  immediateDescendants: function(){},

  previousSiblings: function(element) {
    return $(element).recursivelyCollect('previousSibling');
  },

  nextSiblings: function(element) {
    return $(element).recursivelyCollect('nextSibling');
  },

  siblings: function(){},

  match: function(){},

  up: function(){},

  down: function(){},

  previous: function(element, expression, index) {
    element = $(element);
    if (arguments.length == 1) return $(Selector.handlers.previousElementSibling(element));
    var previousSiblings = element.previousSiblings();
    return Object.isNumber(expression) ? previousSiblings[expression] :
      Selector.findElement(previousSiblings, expression, index);
  },

  next: function(){},

  select: function(){},

  adjacent: function(){},

  identify: function(){},

  readAttribute: function(){},

  writeAttribute: function(){},

  getHeight: function(element) {
    return $(element).getDimensions().height;
  },

  getWidth: function(){},

  classNames: function(element) {
    return new Element.ClassNames(element);
  },

  hasClassName: function(){},

  addClassName: function(){},

  removeClassName: function(){},

  toggleClassName: function(){},

  // removes whitespace-only text node children
  cleanWhitespace: function(){},

  empty: function(){},

  descendantOf: function(){},

  scrollTo: function(){},

  getStyle: function(){},

  getOpacity: function(element) {
    return $(element).getStyle('opacity');
  },

  setStyle: function(){},

  setOpacity: function(){},

  getDimensions: function(){},

  makePositioned: function(){},

  undoPositioned: function(){},

  makeClipping: function(){},

  undoClipping: function(){},

  cumulativeOffset: function(){},

  positionedOffset: function(){},

  absolutize: function(){},

  relativize: function(){},

  cumulativeScrollOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.scrollTop  || 0;
      valueL += element.scrollLeft || 0;
      element = element.parentNode;
    } while (element);
    return Element._returnOffset(valueL, valueT);
  },

  getOffsetParent: function(){},

  viewportOffset: function(){},

  clonePosition: function(){}
};

Element.Methods.identify.counter = 1;

Object.extend(Element.Methods, {
  getElementsBySelector: Element.Methods.select,
  childElements: Element.Methods.immediateDescendants
});

Element._attributeTranslations = {
  write: {
    names: {
      className: 'class',
      htmlFor:   'for'
    },
    values: { }
  }
};

if (Prototype.Browser.Opera) {
  Element.Methods.getStyle = Element.Methods.getStyle.wrap(
    function(){}
  );

  Element.Methods.readAttribute = Element.Methods.readAttribute.wrap(
    function(){}
  );
}

else if (Prototype.Browser.IE) {
  // IE doesn't report offsets correctly for static elements, so we change them
  // to "relative" to get the values, then change them back.
  Element.Methods.getOffsetParent = Element.Methods.getOffsetParent.wrap(
    function(){}
  );

  $w('positionedOffset viewportOffset').each(function(){});

  Element.Methods.cumulativeOffset = Element.Methods.cumulativeOffset.wrap(
    function(){}
  );

  Element.Methods.getStyle = function(){};

  Element.Methods.setOpacity = function(){};

  Element._attributeTranslations = {
    read: {
      names: {
        'class': 'className',
        'for':   'htmlFor'
      },
      values: {
        _getAttr: function(element, attribute) {
          return element.getAttribute(attribute, 2);
        },
        _getAttrNode: function(){},
        _getEv: function(){},
        _flag: function(){},
        style: function(element) {
          return element.style.cssText.toLowerCase();
        },
        title: function(element) {
          return element.title;
        }
      }
    }
  };

  Element._attributeTranslations.write = {
    names: Object.extend({
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing'
    }, Element._attributeTranslations.read.names),
    values: {
      checked: function(element, value) {
        element.checked = !!value;
      },

      style: function(){}
    }
  };

  Element._attributeTranslations.has = {};

  $w('colSpan rowSpan vAlign dateTime accessKey tabIndex ' +
      'encType maxLength readOnly longDesc frameBorder').each(function(){});

  (function(){})(Element._attributeTranslations.read.values);
}

else if (Prototype.Browser.Gecko && /rv:1\.8\.0/.test(navigator.userAgent)) {
  Element.Methods.setOpacity = function(){};
}

else if (Prototype.Browser.WebKit) {
  Element.Methods.setOpacity = function(){};

  // Safari returns margins on body which is incorrect if the child is absolutely
  // positioned.  For performance reasons, redefine Element#cumulativeOffset for
  // KHTML/WebKit only.
  Element.Methods.cumulativeOffset = function(){};
}

if (Prototype.Browser.IE || Prototype.Browser.Opera) {
  // IE and Opera are missing .innerHTML support for TABLE-related and SELECT elements
  Element.Methods.update = function(){};
}

if ('outerHTML' in document.createElement('div')) {
  Element.Methods.replace = function(){};
}

Element._returnOffset = function(){};

Element._getContentFromAnonymousElement = function(){};

Element._insertionTranslations = {
  before: function(element, node) {
    element.parentNode.insertBefore(node, element);
  },
  top: function(element, node) {
    element.insertBefore(node, element.firstChild);
  },
  bottom: function(element, node) {
    element.appendChild(node);
  },
  after: function(element, node) {
    element.parentNode.insertBefore(node, element.nextSibling);
  },
  tags: {
    TABLE:  ['<table>',                '</table>',                   1],
    TBODY:  ['<table><tbody>',         '</tbody></table>',           2],
    TR:     ['<table><tbody><tr>',     '</tr></tbody></table>',      3],
    TD:     ['<table><tbody><tr><td>', '</td></tr></tbody></table>', 4],
    SELECT: ['<select>',               '</select>',                  1]
  }
};

(function(){}).call(Element._insertionTranslations);

Element.Methods.Simulated = {
  hasAttribute: function(){}
};

Element.Methods.ByTag = { };

Object.extend(Element, Element.Methods);

if (!Prototype.BrowserFeatures.ElementExtensions &&
    document.createElement('div')['__proto__']) {
  window.HTMLElement = { };
  window.HTMLElement.prototype = document.createElement('div')['__proto__'];
  Prototype.BrowserFeatures.ElementExtensions = true;
}

Element.extend = (function(){})();

Element.hasAttribute = function(){};

Element.addMethods = function(){};

document.viewport = {
  getDimensions: function(){},

  getWidth: function() {
    return this.getDimensions().width;
  },

  getHeight: function() {
    return this.getDimensions().height;
  },

  getScrollOffsets: function(){}
};
/* Portions of the Selector class are derived from Jack Slocum's DomQuery,
 * part of YUI-Ext version 0.40, distributed under the terms of an MIT-style
 * license.  Please see http://www.yui-ext.com/ for more information. */

var Selector = Class.create({
  initialize: function(){},

  shouldUseXPath: function(){},

  shouldUseSelectorsAPI: function(){},

  compileMatcher: function(){},

  compileXPathMatcher: function(){},

  findElements: function(){},

  match: function(){},

  toString: function() {
    return this.expression;
  },

  inspect: function(){}
});

Object.extend(Selector, {
  _cache: { },

  xpath: {
    descendant:   "//*",
    child:        "/*",
    adjacent:     "/following-sibling::*[1]",
    laterSibling: '/following-sibling::*',
    tagName:      function(){},
    className:    "[contains(concat(' ', @class, ' '), ' #{1} ')]",
    id:           "[@id='#{1}']",
    attrPresence: function(){},
    attr: function(){},
    pseudo: function(){},
    operators: {
      '=':  "[@#{1}='#{3}']",
      '!=': "[@#{1}!='#{3}']",
      '^=': "[starts-with(@#{1}, '#{3}')]",
      '$=': "[substring(@#{1}, (string-length(@#{1}) - string-length('#{3}') + 1))='#{3}']",
      '*=': "[contains(@#{1}, '#{3}')]",
      '~=': "[contains(concat(' ', @#{1}, ' '), ' #{3} ')]",
      '|=': "[contains(concat('-', @#{1}, '-'), '-#{3}-')]"
    },
    pseudos: {
      'first-child': '[not(preceding-sibling::*)]',
      'last-child':  '[not(following-sibling::*)]',
      'only-child':  '[not(preceding-sibling::* or following-sibling::*)]',
      'empty':       "[count(*) = 0 and (count(text()) = 0)]",
      'checked':     "[@checked]",
      'disabled':    "[(@disabled) and (@type!='hidden')]",
      'enabled':     "[not(@disabled) and (@type!='hidden')]",
      'not': function(){},
      'nth-child':      function(m) {
        return Selector.xpath.pseudos.nth("(count(./preceding-sibling::*) + 1) ", m);
      },
      'nth-last-child': function(m) {
        return Selector.xpath.pseudos.nth("(count(./following-sibling::*) + 1) ", m);
      },
      'nth-of-type':    function(m) {
        return Selector.xpath.pseudos.nth("position() ", m);
      },
      'nth-last-of-type': function(){},
      'first-of-type':  function(){},
      'last-of-type':   function(m) {
        m[6] = "1"; return Selector.xpath.pseudos['nth-last-of-type'](m);
      },
      'only-of-type':   function(){},
      nth: function(){}
    }
  },

  criteria: {
    tagName:      'n = h.tagName(n, r, "#{1}", c);      c = false;',
    className:    'n = h.className(n, r, "#{1}", c);    c = false;',
    id:           'n = h.id(n, r, "#{1}", c);           c = false;',
    attrPresence: 'n = h.attrPresence(n, r, "#{1}", c); c = false;',
    attr: function(){},
    pseudo: function(){},
    descendant:   'c = "descendant";',
    child:        'c = "child";',
    adjacent:     'c = "adjacent";',
    laterSibling: 'c = "laterSibling";'
  },

  patterns: {
    // combinators must be listed first
    // (and descendant needs to be last combinator)
    laterSibling: /^\s*~\s*/,
    child:        /^\s*>\s*/,
    adjacent:     /^\s*\+\s*/,
    descendant:   /^\s/,

    // selectors follow
    tagName:      /^\s*(\*|[\w\-]+)(\b|$)?/,
    id:           /^#([\w\-\*]+)(\b|$)/,
    className:    /^\.([\w\-\*]+)(\b|$)/,
    pseudo:
/^:((first|last|nth|nth-last|only)(-child|-of-type)|empty|checked|(en|dis)abled|not)(\((.*?)\))?(\b|$|(?=\s|[:+~>]))/,
    attrPresence: /^\[((?:[\w]+:)?[\w]+)\]/,
    attr:         /\[((?:[\w-]*:)?[\w-]+)\s*(?:([!^$*~|]?=)\s*((['"])([^\4]*?)\4|([^'"][^\]]*?)))?\]/
  },

  // for Selector.match and Element#match
  assertions: {
    tagName: function(){},

    className: function(){},

    id: function(){},

    attrPresence: function(element, matches) {
      return Element.hasAttribute(element, matches[1]);
    },

    attr: function(){}
  },

  handlers: {
    // UTILITY FUNCTIONS
    // joins two collections
    concat: function(){},

    // marks an array of nodes for counting
    mark: function(){},

    unmark: function(){},

    // mark each child node with its position (for nth calls)
    // "ofType" flag indicates whether we're indexing for nth-of-type
    // rather than nth-child
    index: function(){},

    // filters out duplicates and extends all nodes
    unique: function(){},

    // COMBINATOR FUNCTIONS
    descendant: function(){},

    child: function(){},

    adjacent: function(){},

    laterSibling: function(){},

    nextElementSibling: function(){},

    previousElementSibling: function(node) {
      while (node = node.previousSibling)
        if (node.nodeType == 1) return node;
      return null;
    },

    // TOKEN FUNCTIONS
    tagName: function(){},

    id: function(){},

    className: function(){},

    byClassName: function(){},

    attrPresence: function(){},

    attr: function(){},

    pseudo: function(){}
  },

  pseudos: {
    'first-child': function(nodes, value, root) {
      for (var i = 0, results = [], node; node = nodes[i]; i++) {
        if (Selector.handlers.previousElementSibling(node)) continue;
          results.push(node);
      }
      return results;
    },
    'last-child': function(){},
    'only-child': function(){},
    'nth-child':        function(nodes, formula, root) {
      return Selector.pseudos.nth(nodes, formula, root);
    },
    'nth-last-child':   function(){},
    'nth-of-type':      function(nodes, formula, root) {
      return Selector.pseudos.nth(nodes, formula, root, false, true);
    },
    'nth-last-of-type': function(){},
    'first-of-type':    function(nodes, formula, root) {
      return Selector.pseudos.nth(nodes, "1", root, false, true);
    },
    'last-of-type':     function(){},
    'only-of-type':     function(){},

    // handles the an+b logic
    getIndices: function(){},

    // handles nth(-last)-child, nth(-last)-of-type, and (first|last)-of-type
    nth: function(){},

    'empty': function(){},

    'not': function(){},

    'enabled': function(){},

    'disabled': function(nodes, value, root) {
      for (var i = 0, results = [], node; node = nodes[i]; i++)
        if (node.disabled) results.push(node);
      return results;
    },

    'checked': function(){}
  },

  operators: {
    '=':  function(nv, v) { return nv == v; },
    '!=': function(nv, v) { return nv != v; },
    '^=': function(nv, v) { return nv == v || nv && nv.startsWith(v); },
    '$=': function(nv, v) { return nv == v || nv && nv.endsWith(v); },
    '*=': function(){},
    '$=': function(nv, v) { return nv.endsWith(v); },
    '*=': function(nv, v) { return nv.include(v); },
    '~=': function(){},
    '|=': function(){}
  },

  split: function(){},

  matchElements: function(){},

  findElement: function(){},

  findChildElements: function(){}
});

if (Prototype.Browser.IE) {
  Object.extend(Selector.handlers, {
    // IE returns comment nodes on getElementsByTagName("*").
    // Filter them out.
    concat: function(){},

    // IE improperly serializes _countedByPrototype in (inner|outer)HTML.
    unmark: function(){}
  });
}

function(){}
var Form = {
  reset: function(form) {
    $(form).reset();
    return form;
  },

  serializeElements: function(){}
};

Form.Methods = {
  serialize: function(form, options) {
    return Form.serializeElements(Form.getElements(form), options);
  },

  getElements: function(){},

  getInputs: function(){},

  disable: function(form) {
    form = $(form);
    Form.getElements(form).invoke('disable');
    return form;
  },

  enable: function(){},

  findFirstElement: function(){},

  focusFirstElement: function(){},

  request: function(){}
};

/*--------------------------------------------------------------------------*/

Form.Element = {
  focus: function(element) {
    $(element).focus();
    return element;
  },

  select: function(){}
};

Form.Element.Methods = {
  serialize: function(){},

  getValue: function(){},

  setValue: function(){},

  clear: function(){},

  present: function(){},

  activate: function(){},

  disable: function(element) {
    element = $(element);
    element.disabled = true;
    return element;
  },

  enable: function(){}
};

/*--------------------------------------------------------------------------*/

var Field = Form.Element;
var $F = Form.Element.Methods.getValue;

/*--------------------------------------------------------------------------*/

Form.Element.Serializers = {
  input: function(){},

  inputSelector: function(){},

  textarea: function(){},

  select: function(){},

  selectOne: function(){},

  selectMany: function(){},

  optionValue: function(){}
};

/*--------------------------------------------------------------------------*/

Abstract.TimedObserver = Class.create(PeriodicalExecuter, {
  initialize: function(){},

  execute: function(){}
});

Form.Element.Observer = Class.create(Abstract.TimedObserver, {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.Observer = Class.create(Abstract.TimedObserver, {
  getValue: function() {
    return Form.serialize(this.element);
  }
});

/*--------------------------------------------------------------------------*/

Abstract.EventObserver = Class.create({
  initialize: function(){},

  onElementEvent: function(){},

  registerFormCallbacks: function(){},

  registerCallback: function(){}
});

Form.Element.EventObserver = Class.create(Abstract.EventObserver, {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.EventObserver = Class.create(Abstract.EventObserver, {
  getValue: function() {
    return Form.serialize(this.element);
  }
});
if (!window.Event) var Event = { };

Object.extend(Event, {
  KEY_BACKSPACE: 8,
  KEY_TAB:       9,
  KEY_RETURN:   13,
  KEY_ESC:      27,
  KEY_LEFT:     37,
  KEY_UP:       38,
  KEY_RIGHT:    39,
  KEY_DOWN:     40,
  KEY_DELETE:   46,
  KEY_HOME:     36,
  KEY_END:      35,
  KEY_PAGEUP:   33,
  KEY_PAGEDOWN: 34,
  KEY_INSERT:   45,

  cache: { },

  relatedTarget: function(){}
});

Event.Methods = (function(){})();

Event.extend = (function(){})();

Object.extend(Event, (function() {
  var cache = Event.cache;

  function(){}

  function(){}

  function(){}

  function(){}

  function(){}

  function(){}

  function(){}

  function(){}


  // Internet Explorer needs to remove event handlers on page unload
  // in order to avoid memory leaks.
  if (window.attachEvent) {
    window.attachEvent("onunload", destroyCache);
  }

  // Safari has a dummy event handler on page unload so that it won't
  // use its bfcache. Safari <= 3.1 has an issue with restoring the "document"
  // object when page is returned to via the back button using its bfcache.
  if (Prototype.Browser.WebKit) {
    window.addEventListener('unload', Prototype.emptyFunction, false);
  }

  return {
    observe: function(){},

    stopObserving: function(){},

    fire: function(){}
  };
})());

Object.extend(Event, Event.Methods);

Element.addMethods({
  fire:          Event.fire,
  observe:       Event.observe,
  stopObserving: Event.stopObserving
});

Object.extend(document, {
  fire:          Element.Methods.fire.methodize(),
  observe:       Element.Methods.observe.methodize(),
  stopObserving: Element.Methods.stopObserving.methodize(),
  loaded:        false
});

(function(){})();
/*------------------------------- DEPRECATED -------------------------------*/

Hash.toQueryString = Object.toQueryString;

var Toggle = { display: Element.toggle };

Element.Methods.childOf = Element.Methods.descendantOf;

var Insertion = {
  Before: function(element, content) {
    return Element.insert(element, {before:content});
  },

  Top: function(element, content) {
    return Element.insert(element, {top:content});
  },

  Bottom: function(element, content) {
    return Element.insert(element, {bottom:content});
  },

  After: function(element, content) {
    return Element.insert(element, {after:content});
  }
};

var $continue = new Error('"throw $continue" is deprecated, use "return" instead');

// This should be moved to script.aculo.us; notice the deprecated methods
// further below, that map to the newer Element methods.
var Position = {
  // set to true if needed, warning: firefox performance problems
  // NOT neeeded for page scrolling, only if draggable contained in
  // scrollable elements
  includeScrollOffsets: false,

  // must be called before calling withinIncludingScrolloffset, every time the
  // page is scrolled
  prepare: function(){},

  // caches x/y coordinate pair to use with overlap
  within: function(){},

  withinIncludingScrolloffsets: function(){},

  // within must be called directly before
  overlap: function(){},

  // Deprecation layer -- use newer Element methods now (1.5.2).

  cumulativeOffset: Element.Methods.cumulativeOffset,

  positionedOffset: Element.Methods.positionedOffset,

  absolutize: function(element) {
    Position.prepare();
    return Element.absolutize(element);
  },

  relativize: function(){},

  realOffset: Element.Methods.cumulativeScrollOffset,

  offsetParent: Element.Methods.getOffsetParent,

  page: Element.Methods.viewportOffset,

  clone: function(){}
};

/*--------------------------------------------------------------------------*/

if (!document.getElementsByClassName) document.getElementsByClassName = function(){}(Element.Methods);

/*--------------------------------------------------------------------------*/

Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
  initialize: function(element) {
    this.element = $(element);
  },

  _each: function(){},

  set: function(className) {
    this.element.className = className;
  },

  add: function(){},

  remove: function(){}