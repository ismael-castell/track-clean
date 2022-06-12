/*  Prototype JavaScript framework, version 1.7.1
 *  (c) 2005-2010 Sam Stephenson
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://www.prototypejs.org/
 *
 *--------------------------------------------------------------------------*/

var Prototype = {

  Version: '1.7.1',

  Browser: (function(){})(),

  BrowserFeatures: {
    XPath: !!document.evaluate,

    SelectorsAPI: !!document.querySelector,

    ElementExtensions: (function(){})(),
    SpecificElementExtensions: (function(){})()
  },

  ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script\\s*>',
  JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,

  emptyFunction: function() { },

  K: function(x) { return x }
};

if (Prototype.Browser.MobileSafari)
  Prototype.BrowserFeatures.SpecificElementExtensions = false;
/* Based on Alex Arnell's inheritance implementation. */

var Class = (function(){})();
(function(){})();
Object.extend(Function.prototype, (function(){})());



(function(){})(Date.prototype);


RegExp.prototype.match = RegExp.prototype.test;

RegExp.escape = function(str) {
  return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};
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

Object.extend(String.prototype, (function(){})());

var Template = Class.create({
  initialize: function(){},

  evaluate: function(){}
});
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;

var $break = { };

var Enumerable = (function(){})();

function(){}


function(){}

Array.from = $A;


(function(){})();
function $H(object) {
  return new Hash(object);
};

var Hash = Class.create(Enumerable, (function(){})());

Hash.from = $H;
Object.extend(Number.prototype, (function(){})());

function $R(start, end, exclusive) {
  return new ObjectRange(start, end, exclusive);
}

var ObjectRange = Class.create(Enumerable, (function(){})());



var Abstract = { };


var Try = {
  these: function(){}
};

var Ajax = {
  getTransport: function(){},

  activeRequestCount: 0
};

Ajax.Responders = {
  responders: [],

  _each: function(iterator, context) {
    this.responders._each(iterator, context);
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

  getStatusText: function(){},

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

(function(){})(this);
(function(){})();

(function(){})();
window.$$ = function(){};

Prototype.Selector = (function(){})();
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){})();

Prototype._original_property = window.Sizzle;

;(function(){})(Sizzle);

window.Sizzle = Prototype._original_property;
delete Prototype._original_property;

var Form = {
  reset: function(){},

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

Form.Element.Serializers = (function(){})();

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
(function(){})(this);

(function(){})(this);

(function(){})(this);


Element.addMethods();
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

var Position = {
  includeScrollOffsets: false,

  prepare: function(){},

  within: function(){},

  withinIncludingScrolloffsets: function(){},

  overlap: function(){},


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

  remove: function(){},

  toString: function() {
    return $A(this).join(' ');
  }
};

Object.extend(Element.ClassNames.prototype, Enumerable);

/*--------------------------------------------------------------------------*/

(function(){}