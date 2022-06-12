// script.aculo.us effects.js v1.9.0, Thu Dec 23 16:54:48 -0500 2010

// Copyright (c) 2005-2010 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
// Contributors:
//  Justin Palmer (http://encytemedia.com/)
//  Mark Pilgrim (http://diveintomark.org/)
//  Martin Bialasinki
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// converts rgb() and #xxx to #xxxxxx format,
// returns self (or first argument) if not convertable
String.prototype.parseColor = function(){};

/*--------------------------------------------------------------------------*/

Element.collectTextNodes = function(){};

Element.collectTextNodesIgnoreClass = function(){};

Element.setContentZoom = function(){};

Element.getInlineOpacity = function(){};

Element.forceRerendering = function(){};

/*--------------------------------------------------------------------------*/

var Effect = {
  _elementDoesNotExistError: {
    name: 'ElementDoesNotExistError',
    message: 'The specified DOM element does not exist, but is required for this effect to operate'
  },
  Transitions: {
    linear: Prototype.K,
    sinoidal: function(pos) {
      return (-Math.cos(pos*Math.PI)/2) + .5;
    },
    reverse: function(pos) {
      return 1-pos;
    },
    flicker: function(){},
    wobble: function(){},
    pulse: function(){},
    spring: function(){},
    none: function(pos) {
      return 0;
    },
    full: function(pos) {
      return 1;
    }
  },
  DefaultOptions: {
    duration:   1.0,   // seconds
    fps:        100,   // 100= assume 66fps max.
    sync:       false, // true for combining
    from:       0.0,
    to:         1.0,
    delay:      0.0,
    queue:      'parallel'
  },
  tagifyText: function(){},
  multiple: function(){},
  PAIRS: {
    'slide':  ['SlideDown','SlideUp'],
    'blind':  ['BlindDown','BlindUp'],
    'appear': ['Appear','Fade']
  },
  toggle: function(){}
};

Effect.DefaultOptions.transition = Effect.Transitions.sinoidal;

/* ------------- core effects ------------- */

Effect.ScopedQueue = Class.create(Enumerable, {
  initialize: function() {
    this.effects  = [];
    this.interval = null;
  },
  _each: function(iterator) {
    this.effects._each(iterator);
  },
  add: function(){},
  remove: function(){},
  loop: function(){}
});

Effect.Queues = {
  instances: $H(),
  get: function(){}
};
Effect.Queue = Effect.Queues.get('global');

Effect.Base = Class.create({
  position: null,
  start: function(){},
  loop: function(){},
  cancel: function(){},
  event: function(){},
  inspect: function(){}
});

Effect.Parallel = Class.create(Effect.Base, {
  initialize: function(){},
  update: function(position) {
    this.effects.invoke('render', position);
  },
  finish: function(){}
});

Effect.Tween = Class.create(Effect.Base, {
  initialize: function(){},
  update: function(position) {
    this.method(position);
  }
});

Effect.Event = Class.create(Effect.Base, {
  initialize: function(){},
  update: Prototype.emptyFunction
});

Effect.Opacity = Class.create(Effect.Base, {
  initialize: function(){},
  update: function(position) {
    this.element.setOpacity(position);
  }
});

Effect.Move = Class.create(Effect.Base, {
  initialize: function(){},
  setup: function(){},
  update: function(){}
});

// for backwards compatibility
Effect.MoveBy = function(){};

Effect.Scale = Class.create(Effect.Base, {
  initialize: function(){},
  setup: function(){},
  update: function(){},
  finish: function(){},
  setDimensions: function(){}
});

Effect.Highlight = Class.create(Effect.Base, {
  initialize: function(){},
  setup: function(){},
  update: function(){},
  finish: function(){}
});

Effect.ScrollTo = function(){};

/* ------------- combination effects ------------- */

Effect.Fade = function(){};

Effect.Appear = function(){};

Effect.Puff = function(){};

Effect.BlindUp = function(){};

Effect.BlindDown = function(){};

Effect.SwitchOff = function(){};

Effect.DropOut = function(){};

Effect.Shake = function(){};

Effect.SlideDown = function(){};

Effect.SlideUp = function(){};

// Bug in opera makes the TD containing this element expand for a instance after finish
Effect.Squish = function(){};

Effect.Grow = function(){};

Effect.Shrink = function(){};

Effect.Pulsate = function(){};

Effect.Fold = function(){};

Effect.Morph = Class.create(Effect.Base, {
  initialize: function(){},

  setup: function(){},
  update: function(){}
});

Effect.Transform = Class.create({
  initialize: function(){},
  addTracks: function(){},
  play: function(){}
});

Element.CSS_PROPERTIES = $w(
  'backgroundColor backgroundPosition borderBottomColor borderBottomStyle ' +
  'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth ' +
  'borderRightColor borderRightStyle borderRightWidth borderSpacing ' +
  'borderTopColor borderTopStyle borderTopWidth bottom clip color ' +
  'fontSize fontWeight height left letterSpacing lineHeight ' +
  'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+
  'maxWidth minHeight minWidth opacity outlineColor outlineOffset ' +
  'outlineWidth paddingBottom paddingLeft paddingRight paddingTop ' +
  'right textIndent top width wordSpacing zIndex');

Element.CSS_LENGTH = /^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;

String.__parseStyleElement = document.createElement('div');
String.prototype.parseStyle = function(){};

if (document.defaultView && document.defaultView.getComputedStyle) {
  Element.getStyles = function(){};
} else {
  Element.getStyles = function(){};
}

Effect.Methods = {
  morph: function(){},
  visualEffect: function(){},
  highlight: function(){}
};

$w('fade appear grow shrink fold blindUp blindDown slideUp slideDown '+
  'pulsate shake puff squish switchOff dropOut').each(
  function(){}