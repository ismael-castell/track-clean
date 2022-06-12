// json2.js  start
/*
 json2.js
 2015-05-03
 Public Domain.
 NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 See http://www.JSON.org/js.html
 This code should be minified before deployment.
 See http://javascript.crockford.com/jsmin.html
 USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
 NOT CONTROL.
 This file creates a global JSON object containing two methods: stringify
 and parse. This file is provides the ES5 JSON capability to ES3 systems.
 If a project might run on IE8 or earlier, then this file should be included.
 This file does nothing on ES5 systems.
 JSON.stringify(value, replacer, space)
 value       any JavaScript value, usually an object or array.
 replacer    an optional parameter that determines how object
 values are stringified for objects. It can be a
 function or an array of strings.
 space       an optional parameter that specifies the indentation
 of nested structures. If it is omitted, the text will
 be packed without extra whitespace. If it is a number,
 it will specify the number of spaces to indent at each
 level. If it is a string (such as '\t' or '&nbsp;'),
 it contains the characters used to indent at each level.
 This method produces a JSON text from a JavaScript value.
 When an object value is found, if the object contains a toJSON
 method, its toJSON method will be called and the result will be
 stringified. A toJSON method does not serialize: it returns the
 value represented by the name/value pair that should be serialized,
 or undefined if nothing should be serialized. The toJSON method
 will be passed the key associated with the value, and this will be
 bound to the value
 For example, this would serialize Dates as ISO strings.
 Date.prototype.toJSON = function (key) {
 function f(n) {
 // Format integers to have at least two digits.
 return n < 10
 ? '0' + n
 : n;
 }
 return this.getUTCFullYear()   + '-' +
 f(this.getUTCMonth() + 1) + '-' +
 f(this.getUTCDate())      + 'T' +
 f(this.getUTCHours())     + ':' +
 f(this.getUTCMinutes())   + ':' +
 f(this.getUTCSeconds())   + 'Z';
 };
 You can provide an optional replacer method. It will be passed the
 key and value of each member, with this bound to the containing
 object. The value that is returned from your method will be
 serialized. If your method returns undefined, then the member will
 be excluded from the serialization.
 If the replacer parameter is an array of strings, then it will be
 used to select the members to be serialized. It filters the results
 such that only members with keys listed in the replacer array are
 stringified.
 Values that do not have JSON representations, such as undefined or
 functions, will not be serialized. Such values in objects will be
 dropped; in arrays they will be replaced with null. You can use
 a replacer function to replace those with JSON values.
 JSON.stringify(undefined) returns undefined.
 The optional space parameter produces a stringification of the
 value that is filled with line breaks and indentation to make it
 easier to read.
 If the space parameter is a non-empty string, then that string will
 be used for indentation. If the space parameter is a number, then
 the indentation will be that many spaces.
 Example:
 text = JSON.stringify(['e', {pluribus: 'unum'}]);
 // text is '["e",{"pluribus":"unum"}]'
 text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
 // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'
 text = JSON.stringify([new Date()], function (key, value) {
 return this[key] instanceof Date
 ? 'Date(' + this[key] + ')'
 : value;
 });
 // text is '["Date(---current time---)"]'
 JSON.parse(text, reviver)
 This method parses a JSON text to produce an object or array.
 It can throw a SyntaxError exception.
 The optional reviver parameter is a function that can filter and
 transform the results. It receives each of the keys and values,
 and its return value is used instead of the original value.
 If it returns what it received, then the structure is not modified.
 If it returns undefined then the member is deleted.
 Example:
 // Parse the text. Values that look like ISO date strings will
 // be converted to Date objects.
 myData = JSON.parse(text, function (key, value) {
 var a;
 if (typeof value === 'string') {
 a =
 /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
 if (a) {
 return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
 +a[5], +a[6]));
 }
 }
 return value;
 });
 myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
 var d;
 if (typeof value === 'string' &&
 value.slice(0, 5) === 'Date(' &&
 value.slice(-1) === ')') {
 d = new Date(value.slice(5, -1));
 if (d) {
 return d;
 }
 }
 return value;
 });
 This is a reference implementation. You are free to copy, modify, or
 redistribute.
 */

/*jslint
 eval, for, this
 */

/*property
 JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
 getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
 lastIndex, length, parse, prototype, push, replace, slice, stringify,
 test, toJSON, toString, valueOf
 */


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
  JSON = {};
}

(function () {
  'use strict';

  var rx_one = /^[\],:{}\s]*$/,
    rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
    rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    rx_four = /(?:^|:|,)(?:\s*\[)+/g,
    rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

  function f(n) {
    // Format integers to have at least two digits.
    return n < 10
      ? '0' + n
      : n;
  }

  function this_value() {
    return this.valueOf();
  }

  if (typeof Date.prototype.toJSON !== 'function') {

    Date.prototype.toJSON = function () {

      return isFinite(this.valueOf())
        ? this.getUTCFullYear() + '-' +
        f(this.getUTCMonth() + 1) + '-' +
        f(this.getUTCDate()) + 'T' +
        f(this.getUTCHours()) + ':' +
        f(this.getUTCMinutes()) + ':' +
        f(this.getUTCSeconds()) + 'Z'
        : null;
    };

    Boolean.prototype.toJSON = this_value;
    Number.prototype.toJSON = this_value;
    String.prototype.toJSON = this_value;
  }

  var gap,
    indent,
    meta,
    rep;


  function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

    rx_escapable.lastIndex = 0;
    return rx_escapable.test(string)
      ? '"' + string.replace(rx_escapable, function (a) {
      var c = meta[a];
      return typeof c === 'string'
        ? c
        : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"'
      : '"' + string + '"';
  }


  function str(key, holder) {

// Produce a string from holder[key].

    var i,          // The loop counter.
      k,          // The member key.
      v,          // The member value.
      length,
      mind = gap,
      partial,
      value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

    if (value && typeof value === 'object' &&
      typeof value.toJSON === 'function') {
      value = value.toJSON(key);
    }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

    if (typeof rep === 'function') {
      value = rep.call(holder, key, value);
    }

// What happens next depends on the value's type.

    switch (typeof value) {
      case 'string':
        return quote(value);

      case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

        return isFinite(value)
          ? String(value)
          : 'null';

      case 'boolean':
      case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

        return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

      case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

        if (!value) {
          return 'null';
        }

// Make an array to hold the partial results of stringifying this object value.

        gap += indent;
        partial = [];

// Is the value an array?

        if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

          length = value.length;
          for (i = 0; i < length; i += 1) {
            partial[i] = str(i, value) || 'null';
          }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

          v = partial.length === 0
            ? '[]'
            : gap
              ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
              : '[' + partial.join(',') + ']';
          gap = mind;
          return v;
        }

// If the replacer is an array, use it to select the members to be stringified.

        if (rep && typeof rep === 'object') {
          length = rep.length;
          for (i = 0; i < length; i += 1) {
            if (typeof rep[i] === 'string') {
              k = rep[i];
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (
                  gap
                    ? ': '
                    : ':'
                ) + v);
              }
            }
          }
        } else {

// Otherwise, iterate through all of the keys in the object.

          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (
                  gap
                    ? ': '
                    : ':'
                ) + v);
              }
            }
          }
        }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

        v = partial.length === 0
          ? '{}'
          : gap
            ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
            : '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
  }

// If the JSON object does not yet have a stringify method, give it one.

  if (typeof JSON.stringify !== 'function') {
    meta = {    // table of character substitutions
      '\b': '\\b',
      '\t': '\\t',
      '\n': '\\n',
      '\f': '\\f',
      '\r': '\\r',
      '"': '\\"',
      '\\': '\\\\'
    };
    JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

      var i;
      gap = '';
      indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

      if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
          indent += ' ';
        }

// If the space parameter is a string, it will be used as the indent string.

      } else if (typeof space === 'string') {
        indent = space;
      }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

      rep = replacer;
      if (replacer && typeof replacer !== 'function' &&
        (typeof replacer !== 'object' ||
          typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
      }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

      return str('', {'': value});
    };
  }


// If the JSON object does not yet have a parse method, give it one.

  if (typeof JSON.parse !== 'function') {
    JSON.parse = function(){};
  }
}());
// json2.js  end







// jquery.min.js  start
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(){});
// jquery.min.js  end







//  jquery-migrate.js    start
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
//  jquery-migrate.js    end








// I18N.js  start
/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
  'use strict';

  var nav, I18N,
    slice = Array.prototype.slice;
  /**
   * @constructor
   * @param {Object} options
   */
  I18N = function ( options ) {
    // Load defaults
    this.options = $.extend( {}, I18N.defaults, options );

    this.parser = this.options.parser;
    this.locale = this.options.locale;
    this.messageStore = this.options.messageStore;
    this.languages = {};

    this.init();
  };

  I18N.prototype = {
    /**
     * Initialize by loading locales and setting up
     * String.prototype.toLocaleString and String.locale.
     */
    init: function () {
      var i18n = this;

      // Set locale of String environment
      String.locale = i18n.locale;

      // Override String.localeString method
      String.prototype.toLocaleString = function () {
        var localeParts, localePartIndex, value, locale, fallbackIndex,
          tryingLocale, message;

        value = this.valueOf();
        locale = i18n.locale;
        fallbackIndex = 0;

        while ( locale ) {
          // Iterate through locales starting at most-specific until
          // localization is found. As in fi-Latn-FI, fi-Latn and fi.
          localeParts = locale.split( '-' );
          localePartIndex = localeParts.length;

          do {
            tryingLocale = localeParts.slice( 0, localePartIndex ).join( '-' );
            message = i18n.messageStore.get( tryingLocale, value );

            if ( message ) {
              return message;
            }

            localePartIndex--;
          } while ( localePartIndex );

          if ( locale === 'en' ) {
            break;
          }

          locale = ( $.i18n.fallbacks[ i18n.locale ] && $.i18n.fallbacks[ i18n.locale ][ fallbackIndex ] ) ||
            i18n.options.fallbackLocale;
          $.i18n.log( 'Trying fallback locale for ' + i18n.locale + ': ' + locale + ' (' + value + ')' );

          fallbackIndex++;
        }

        // key not found
        return '';
      };
    },

    /*
     * Destroy the i18n instance.
     */
    destroy: function () {
      $.removeData( document, 'i18n' );
    },

    /**
     * General message loading API This can take a URL string for
     * the json formatted messages. Example:
     * <code>load('path/to/all_localizations.json');</code>
     *
     * To load a localization file for a locale:
     * <code>
     * load('path/to/de-messages.json', 'de' );
     * </code>
     *
     * To load a localization file from a directory:
     * <code>
     * load('path/to/i18n/directory', 'de' );
     * </code>
     * The above method has the advantage of fallback resolution.
     * ie, it will automatically load the fallback locales for de.
     * For most usecases, this is the recommended method.
     * It is optional to have trailing slash at end.
     *
     * A data object containing message key- message translation mappings
     * can also be passed. Example:
     * <code>
     * load( { 'hello' : 'Hello' }, optionalLocale );
     * </code>
     *
     * A source map containing key-value pair of languagename and locations
     * can also be passed. Example:
     * <code>
     * load( {
		 * bn: 'i18n/bn.json',
		 * he: 'i18n/he.json',
		 * en: 'i18n/en.json'
		 * } )
     * </code>
     *
     * If the data argument is null/undefined/false,
     * all cached messages for the i18n instance will get reset.
     *
     * @param {string|Object} source
     * @param {string} locale Language tag
     * @return {jQuery.Promise}
     */
    load: function(){},

    /**
     * Does parameter and magic word substitution.
     *
     * @param {string} key Message key
     * @param {Array} parameters Message parameters
     * @return {string}
     */
    parse: function ( key, parameters ) {
      var message = key.toLocaleString();
      // FIXME: This changes the state of the I18N object,
      // should probably not change the 'this.parser' but just
      // pass it to the parser.
      this.parser.language = $.i18n.languages[ $.i18n().locale ] || $.i18n.languages[ 'default' ];
      if ( message === '' ) {
        message = key;
      }
      return this.parser.parse( message, parameters );
    }
  };

  /**
   * Process a message from the $.I18N instance
   * for the current document, stored in jQuery.data(document).
   *
   * @param {string} key Key of the message.
   * @param {string} param1 [param...] Variadic list of parameters for {key}.
   * @return {string|$.I18N} Parsed message, or if no key was given
   * the instance of $.I18N is returned.
   */
  $.i18n = function ( key, param1 ) {
    var parameters,
      i18n = $.data( document, 'i18n' ),
      options = typeof key === 'object' && key;

    // If the locale option for this call is different then the setup so far,
    // update it automatically. This doesn't just change the context for this
    // call but for all future call as well.
    // If there is no i18n setup yet, don't do this. It will be taken care of
    // by the `new I18N` construction below.
    // NOTE: It should only change language for this one call.
    // Then cache instances of I18N somewhere.
    if ( options && options.locale && i18n && i18n.locale !== options.locale ) {
      String.locale = i18n.locale = options.locale;
    }

    if ( !i18n ) {
      i18n = new I18N( options );
      $.data( document, 'i18n', i18n );
    }

    if ( typeof key === 'string' ) {
      if ( param1 !== undefined ) {
        parameters = slice.call( arguments, 1 );
      } else {
        parameters = [];
      }

      return i18n.parse( key, parameters );
    } else {
      // FIXME: remove this feature/bug.
      return i18n;
    }
  };

  $.fn.i18n = function () {
    var i18n = $.data( document, 'i18n' );

    if ( !i18n ) {
      i18n = new I18N();
      $.data( document, 'i18n', i18n );
    }
    String.locale = i18n.locale;
    return this.each( function(){} );
  };

  String.locale = String.locale || $( 'html' ).attr( 'lang' );

  if ( !String.locale ) {
    if ( typeof window.navigator !== undefined ) {
      nav = window.navigator;
      String.locale = nav.language || nav.userLanguage || '';
    } else {
      String.locale = '';
    }
  }

  $.i18n.languages = {};
  $.i18n.messageStore = $.i18n.messageStore || {};
  $.i18n.parser = {
    // The default parser only handles variable substitution
    parse: function ( message, parameters ) {
      return message.replace( /\$(\d+)/g, function ( str, match ) {
        var index = parseInt( match, 10 ) - 1;
        return parameters[ index ] !== undefined ? parameters[ index ] : '$' + match;
      } );
    },
    emitter: {}
  };
  $.i18n.fallbacks = {};
  $.i18n.debug = false;
  $.i18n.log = function(){};
  /* Static members */
  I18N.defaults = {
    locale: String.locale,
    fallbackLocale: 'en',
    parser: $.i18n.parser,
    messageStore: $.i18n.messageStore
  };

  // Expose constructor
  $.i18n.constructor = I18N;
}( jQuery ) );

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do anything special to
 * choose one license or the other and you don't have to notify anyone which license you are using.
 * You are free to use UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */
( function(){}( jQuery ) );

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2011-2013 Santhosh Thottingal, Neil Kandalgaonkar
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
  'use strict';

  var MessageParserEmitter = function(){};

  MessageParserEmitter.prototype = {
    constructor: MessageParserEmitter,

    /**
     * (We put this method definition here, and not in prototype, to make
     * sure it's not overwritten by any magic.) Walk entire node structure,
     * applying replacements and template functions when appropriate
     *
     * @param {Mixed} node abstract syntax tree (top node or subnode)
     * @param {Array} replacements for $1, $2, ... $n
     * @return {Mixed} single-string node or array of nodes suitable for
     *  jQuery appending.
     */
    emit: function(){},

    /**
     * Parsing has been applied depth-first we can assume that all nodes
     * here are single nodes Must return a single node to parents -- a
     * jQuery with synthetic span However, unwrap any other synthetic spans
     * in our children and pass them upwards
     *
     * @param {Array} nodes Mixed, some single nodes, some arrays of nodes.
     * @return {string}
     */
    concat: function ( nodes ) {
      var result = '';

      $.each( nodes, function(){} );

      return result;
    },

    /**
     * Return escaped replacement of correct index, or string if
     * unavailable. Note that we expect the parsed parameter to be
     * zero-based. i.e. $1 should have become [ 0 ]. if the specified
     * parameter is not found return the same string (e.g. "$99" ->
     * parameter 98 -> not found -> return "$99" ) TODO throw error if
     * nodes.length > 1 ?
     *
     * @param {Array} nodes One element, integer, n >= 0
     * @param {Array} replacements for $1, $2, ... $n
     * @return {string} replacement
     */
    replace: function(){},

    /**
     * Transform parsed structure into pluralization n.b. The first node may
     * be a non-integer (for instance, a string representing an Arabic
     * number). So convert it back with the current language's
     * convertNumber.
     *
     * @param {Array} nodes List [ {String|Number}, {String}, {String} ... ]
     * @return {string} selected pluralized form according to current
     *  language.
     */
    plural: function(){},

    /**
     * Transform parsed structure into gender Usage
     * {{gender:gender|masculine|feminine|neutral}}.
     *
     * @param {Array} nodes List [ {String}, {String}, {String} , {String} ]
     * @return {string} selected gender form according to current language
     */
    gender: function(){},

    /**
     * Transform parsed structure into grammar conversion. Invoked by
     * putting {{grammar:form|word}} in a message
     *
     * @param {Array} nodes List [{Grammar case eg: genitive}, {String word}]
     * @return {string} selected grammatical form according to current
     *  language.
     */
    grammar: function(){}
  };

  $.extend( $.i18n.parser.emitter, new MessageParserEmitter() );
}( jQuery ) );

/*!
 * BIDI embedding support for jQuery.i18n
 *
 * Copyright (C) 2015, David Chan
 *
 * This code is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use this code
 * in commercial projects as long as the copyright header is left intact.
 * See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
  'use strict';
  var strongDirRegExp;

  /**
   * Matches the first strong directionality codepoint:
   * - in group 1 if it is LTR
   * - in group 2 if it is RTL
   * Does not match if there is no strong directionality codepoint.
   *
   * Generated by UnicodeJS (see tools/strongDir) from the UCD; see
   * https://phabricator.wikimedia.org/diffusion/GUJS/ .
   */
  strongDirRegExp = new RegExp(
    '(?:' +
    '(' +
    '[\u0041-\u005a\u0061-\u007a\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u02bb-\u02c1\u02d0\u02d1\u02e0-\u02e4\u02ee\u0370-\u0373\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0482\u048a-\u052f\u0531-\u0556\u0559-\u055f\u0561-\u0587\u0589\u0903-\u0939\u093b\u093d-\u0940\u0949-\u094c\u094e-\u0950\u0958-\u0961\u0964-\u0980\u0982\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd-\u09c0\u09c7\u09c8\u09cb\u09cc\u09ce\u09d7\u09dc\u09dd\u09df-\u09e1\u09e6-\u09f1\u09f4-\u09fa\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3e-\u0a40\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd-\u0ac0\u0ac9\u0acb\u0acc\u0ad0\u0ae0\u0ae1\u0ae6-\u0af0\u0af9\u0b02\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b3e\u0b40\u0b47\u0b48\u0b4b\u0b4c\u0b57\u0b5c\u0b5d\u0b5f-\u0b61\u0b66-\u0b77\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe\u0bbf\u0bc1\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd0\u0bd7\u0be6-\u0bf2\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c41-\u0c44\u0c58-\u0c5a\u0c60\u0c61\u0c66-\u0c6f\u0c7f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd-\u0cc4\u0cc6-\u0cc8\u0cca\u0ccb\u0cd5\u0cd6\u0cde\u0ce0\u0ce1\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d40\u0d46-\u0d48\u0d4a-\u0d4c\u0d4e\u0d57\u0d5f-\u0d61\u0d66-\u0d75\u0d79-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dcf-\u0dd1\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df4\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e4f-\u0e5b\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edf\u0f00-\u0f17\u0f1a-\u0f34\u0f36\u0f38\u0f3e-\u0f47\u0f49-\u0f6c\u0f7f\u0f85\u0f88-\u0f8c\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce-\u0fda\u1000-\u102c\u1031\u1038\u103b\u103c\u103f-\u1057\u105a-\u105d\u1061-\u1070\u1075-\u1081\u1083\u1084\u1087-\u108c\u108e-\u109c\u109e-\u10c5\u10c7\u10cd\u10d0-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1360-\u137c\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u167f\u1681-\u169a\u16a0-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1735\u1736\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17b6\u17be-\u17c5\u17c7\u17c8\u17d4-\u17da\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1923-\u1926\u1929-\u192b\u1930\u1931\u1933-\u1938\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19da\u1a00-\u1a16\u1a19\u1a1a\u1a1e-\u1a55\u1a57\u1a61\u1a63\u1a64\u1a6d-\u1a72\u1a80-\u1a89\u1a90-\u1a99\u1aa0-\u1aad\u1b04-\u1b33\u1b35\u1b3b\u1b3d-\u1b41\u1b43-\u1b4b\u1b50-\u1b6a\u1b74-\u1b7c\u1b82-\u1ba1\u1ba6\u1ba7\u1baa\u1bae-\u1be5\u1be7\u1bea-\u1bec\u1bee\u1bf2\u1bf3\u1bfc-\u1c2b\u1c34\u1c35\u1c3b-\u1c49\u1c4d-\u1c7f\u1cc0-\u1cc7\u1cd3\u1ce1\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200e\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u214f\u2160-\u2188\u2336-\u237a\u2395\u249c-\u24e9\u26ac\u2800-\u28ff\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d70\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u302e\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u3190-\u31ba\u31f0-\u321c\u3220-\u324f\u3260-\u327b\u327f-\u32b0\u32c0-\u32cb\u32d0-\u32fe\u3300-\u3376\u337b-\u33dd\u33e0-\u33fe\u3400-\u4db5\u4e00-\u9fd5\ua000-\ua48c\ua4d0-\ua60c\ua610-\ua62b\ua640-\ua66e\ua680-\ua69d\ua6a0-\ua6ef\ua6f2-\ua6f7\ua722-\ua787\ua789-\ua7ad\ua7b0-\ua7b7\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua824\ua827\ua830-\ua837\ua840-\ua873\ua880-\ua8c3\ua8ce-\ua8d9\ua8f2-\ua8fd\ua900-\ua925\ua92e-\ua946\ua952\ua953\ua95f-\ua97c\ua983-\ua9b2\ua9b4\ua9b5\ua9ba\ua9bb\ua9bd-\ua9cd\ua9cf-\ua9d9\ua9de-\ua9e4\ua9e6-\ua9fe\uaa00-\uaa28\uaa2f\uaa30\uaa33\uaa34\uaa40-\uaa42\uaa44-\uaa4b\uaa4d\uaa50-\uaa59\uaa5c-\uaa7b\uaa7d-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaaeb\uaaee-\uaaf5\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab65\uab70-\uabe4\uabe6\uabe7\uabe9-\uabec\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\ue000-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]|\ud800[\udc00-\udc0b]|\ud800[\udc0d-\udc26]|\ud800[\udc28-\udc3a]|\ud800\udc3c|\ud800\udc3d|\ud800[\udc3f-\udc4d]|\ud800[\udc50-\udc5d]|\ud800[\udc80-\udcfa]|\ud800\udd00|\ud800\udd02|\ud800[\udd07-\udd33]|\ud800[\udd37-\udd3f]|\ud800[\uddd0-\uddfc]|\ud800[\ude80-\ude9c]|\ud800[\udea0-\uded0]|\ud800[\udf00-\udf23]|\ud800[\udf30-\udf4a]|\ud800[\udf50-\udf75]|\ud800[\udf80-\udf9d]|\ud800[\udf9f-\udfc3]|\ud800[\udfc8-\udfd5]|\ud801[\udc00-\udc9d]|\ud801[\udca0-\udca9]|\ud801[\udd00-\udd27]|\ud801[\udd30-\udd63]|\ud801\udd6f|\ud801[\ude00-\udf36]|\ud801[\udf40-\udf55]|\ud801[\udf60-\udf67]|\ud804\udc00|\ud804[\udc02-\udc37]|\ud804[\udc47-\udc4d]|\ud804[\udc66-\udc6f]|\ud804[\udc82-\udcb2]|\ud804\udcb7|\ud804\udcb8|\ud804[\udcbb-\udcc1]|\ud804[\udcd0-\udce8]|\ud804[\udcf0-\udcf9]|\ud804[\udd03-\udd26]|\ud804\udd2c|\ud804[\udd36-\udd43]|\ud804[\udd50-\udd72]|\ud804[\udd74-\udd76]|\ud804[\udd82-\uddb5]|\ud804[\uddbf-\uddc9]|\ud804\uddcd|\ud804[\uddd0-\udddf]|\ud804[\udde1-\uddf4]|\ud804[\ude00-\ude11]|\ud804[\ude13-\ude2e]|\ud804\ude32|\ud804\ude33|\ud804\ude35|\ud804[\ude38-\ude3d]|\ud804[\ude80-\ude86]|\ud804\ude88|\ud804[\ude8a-\ude8d]|\ud804[\ude8f-\ude9d]|\ud804[\ude9f-\udea9]|\ud804[\udeb0-\udede]|\ud804[\udee0-\udee2]|\ud804[\udef0-\udef9]|\ud804\udf02|\ud804\udf03|\ud804[\udf05-\udf0c]|\ud804\udf0f|\ud804\udf10|\ud804[\udf13-\udf28]|\ud804[\udf2a-\udf30]|\ud804\udf32|\ud804\udf33|\ud804[\udf35-\udf39]|\ud804[\udf3d-\udf3f]|\ud804[\udf41-\udf44]|\ud804\udf47|\ud804\udf48|\ud804[\udf4b-\udf4d]|\ud804\udf50|\ud804\udf57|\ud804[\udf5d-\udf63]|\ud805[\udc80-\udcb2]|\ud805\udcb9|\ud805[\udcbb-\udcbe]|\ud805\udcc1|\ud805[\udcc4-\udcc7]|\ud805[\udcd0-\udcd9]|\ud805[\udd80-\uddb1]|\ud805[\uddb8-\uddbb]|\ud805\uddbe|\ud805[\uddc1-\udddb]|\ud805[\ude00-\ude32]|\ud805\ude3b|\ud805\ude3c|\ud805\ude3e|\ud805[\ude41-\ude44]|\ud805[\ude50-\ude59]|\ud805[\ude80-\udeaa]|\ud805\udeac|\ud805\udeae|\ud805\udeaf|\ud805\udeb6|\ud805[\udec0-\udec9]|\ud805[\udf00-\udf19]|\ud805\udf20|\ud805\udf21|\ud805\udf26|\ud805[\udf30-\udf3f]|\ud806[\udca0-\udcf2]|\ud806\udcff|\ud806[\udec0-\udef8]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e]|\ud809[\udc70-\udc74]|\ud809[\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38]|\ud81a[\ude40-\ude5e]|\ud81a[\ude60-\ude69]|\ud81a\ude6e|\ud81a\ude6f|\ud81a[\uded0-\udeed]|\ud81a\udef5|\ud81a[\udf00-\udf2f]|\ud81a[\udf37-\udf45]|\ud81a[\udf50-\udf59]|\ud81a[\udf5b-\udf61]|\ud81a[\udf63-\udf77]|\ud81a[\udf7d-\udf8f]|\ud81b[\udf00-\udf44]|\ud81b[\udf50-\udf7e]|\ud81b[\udf93-\udf9f]|\ud82c\udc00|\ud82c\udc01|\ud82f[\udc00-\udc6a]|\ud82f[\udc70-\udc7c]|\ud82f[\udc80-\udc88]|\ud82f[\udc90-\udc99]|\ud82f\udc9c|\ud82f\udc9f|\ud834[\udc00-\udcf5]|\ud834[\udd00-\udd26]|\ud834[\udd29-\udd66]|\ud834[\udd6a-\udd72]|\ud834\udd83|\ud834\udd84|\ud834[\udd8c-\udda9]|\ud834[\uddae-\udde8]|\ud834[\udf60-\udf71]|\ud835[\udc00-\udc54]|\ud835[\udc56-\udc9c]|\ud835\udc9e|\ud835\udc9f|\ud835\udca2|\ud835\udca5|\ud835\udca6|\ud835[\udca9-\udcac]|\ud835[\udcae-\udcb9]|\ud835\udcbb|\ud835[\udcbd-\udcc3]|\ud835[\udcc5-\udd05]|\ud835[\udd07-\udd0a]|\ud835[\udd0d-\udd14]|\ud835[\udd16-\udd1c]|\ud835[\udd1e-\udd39]|\ud835[\udd3b-\udd3e]|\ud835[\udd40-\udd44]|\ud835\udd46|\ud835[\udd4a-\udd50]|\ud835[\udd52-\udea5]|\ud835[\udea8-\udeda]|\ud835[\udedc-\udf14]|\ud835[\udf16-\udf4e]|\ud835[\udf50-\udf88]|\ud835[\udf8a-\udfc2]|\ud835[\udfc4-\udfcb]|\ud836[\udc00-\uddff]|\ud836[\ude37-\ude3a]|\ud836[\ude6d-\ude74]|\ud836[\ude76-\ude83]|\ud836[\ude85-\ude8b]|\ud83c[\udd10-\udd2e]|\ud83c[\udd30-\udd69]|\ud83c[\udd70-\udd9a]|\ud83c[\udde6-\ude02]|\ud83c[\ude10-\ude3a]|\ud83c[\ude40-\ude48]|\ud83c\ude50|\ud83c\ude51|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6]|\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34]|\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1d]|\ud86e[\udc20-\udfff]|[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udea1]|\ud87e[\udc00-\ude1d]|[\udb80-\udbbe][\udc00-\udfff]|\udbbf[\udc00-\udffd]|[\udbc0-\udbfe][\udc00-\udfff]|\udbff[\udc00-\udffd]' +
    ')|(' +
    '[\u0590\u05be\u05c0\u05c3\u05c6\u05c8-\u05ff\u07c0-\u07ea\u07f4\u07f5\u07fa-\u0815\u081a\u0824\u0828\u082e-\u0858\u085c-\u089f\u200f\ufb1d\ufb1f-\ufb28\ufb2a-\ufb4f\u0608\u060b\u060d\u061b-\u064a\u066d-\u066f\u0671-\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u0710\u0712-\u072f\u074b-\u07a5\u07b1-\u07bf\u08a0-\u08e2\ufb50-\ufd3d\ufd40-\ufdcf\ufdf0-\ufdfc\ufdfe\ufdff\ufe70-\ufefe]|\ud802[\udc00-\udd1e]|\ud802[\udd20-\ude00]|\ud802\ude04|\ud802[\ude07-\ude0b]|\ud802[\ude10-\ude37]|\ud802[\ude3b-\ude3e]|\ud802[\ude40-\udee4]|\ud802[\udee7-\udf38]|\ud802[\udf40-\udfff]|\ud803[\udc00-\ude5f]|\ud803[\ude7f-\udfff]|\ud83a[\udc00-\udccf]|\ud83a[\udcd7-\udfff]|\ud83b[\udc00-\uddff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\ude00-\udeef]|\ud83b[\udef2-\udeff]' +
    ')' +
    ')'
  );

  /**
   * Gets directionality of the first strongly directional codepoint
   *
   * This is the rule the BIDI algorithm uses to determine the directionality of
   * paragraphs ( http://unicode.org/reports/tr9/#The_Paragraph_Level ) and
   * FSI isolates ( http://unicode.org/reports/tr9/#Explicit_Directional_Isolates ).
   *
   * TODO: Does not handle BIDI control characters inside the text.
   * TODO: Does not handle unallocated characters.
   *
   * @param {string} text The text from which to extract initial directionality.
   * @return {string} Directionality (either 'ltr' or 'rtl')
   */
  function(){}

  $.extend( $.i18n.parser.emitter, {
    /**
     * Wraps argument with unicode control characters for directionality safety
     *
     * This solves the problem where directionality-neutral characters at the edge of
     * the argument string get interpreted with the wrong directionality from the
     * enclosing context, giving renderings that look corrupted like "(Ben_(WMF".
     *
     * The wrapping is LRE...PDF or RLE...PDF, depending on the detected
     * directionality of the argument string, using the BIDI algorithm's own "First
     * strong directional codepoint" rule. Essentially, this works round the fact that
     * there is no embedding equivalent of U+2068 FSI (isolation with heuristic
     * direction inference). The latter is cleaner but still not widely supported.
     *
     * @param {string[]} nodes The text nodes from which to take the first item.
     * @return {string} Wrapped String of content as needed.
     */
    bidi: function(){}
  } );
}( jQuery ) );

/* global pluralRuleParser */
( function ( $ ) {
  'use strict';

  // jscs:disable
  var language = {
    // CLDR plural rules generated using
    // libs/CLDRPluralRuleParser/tools/PluralXML2JSON.html
    pluralRules: {
      ak: {
        one: 'n = 0..1'
      },
      am: {
        one: 'i = 0 or n = 1'
      },
      ar: {
        zero: 'n = 0',
        one: 'n = 1',
        two: 'n = 2',
        few: 'n % 100 = 3..10',
        many: 'n % 100 = 11..99'
      },
      ars: {
        zero: 'n = 0',
        one: 'n = 1',
        two: 'n = 2',
        few: 'n % 100 = 3..10',
        many: 'n % 100 = 11..99'
      },
      as: {
        one: 'i = 0 or n = 1'
      },
      be: {
        one: 'n % 10 = 1 and n % 100 != 11',
        few: 'n % 10 = 2..4 and n % 100 != 12..14',
        many: 'n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14'
      },
      bh: {
        one: 'n = 0..1'
      },
      bn: {
        one: 'i = 0 or n = 1'
      },
      br: {
        one: 'n % 10 = 1 and n % 100 != 11,71,91',
        two: 'n % 10 = 2 and n % 100 != 12,72,92',
        few: 'n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99',
        many: 'n != 0 and n % 1000000 = 0'
      },
      bs: {
        one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
        few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
      },
      cs: {
        one: 'i = 1 and v = 0',
        few: 'i = 2..4 and v = 0',
        many: 'v != 0'
      },
      cy: {
        zero: 'n = 0',
        one: 'n = 1',
        two: 'n = 2',
        few: 'n = 3',
        many: 'n = 6'
      },
      da: {
        one: 'n = 1 or t != 0 and i = 0,1'
      },
      dsb: {
        one: 'v = 0 and i % 100 = 1 or f % 100 = 1',
        two: 'v = 0 and i % 100 = 2 or f % 100 = 2',
        few: 'v = 0 and i % 100 = 3..4 or f % 100 = 3..4'
      },
      fa: {
        one: 'i = 0 or n = 1'
      },
      ff: {
        one: 'i = 0,1'
      },
      fil: {
        one: 'v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9'
      },
      fr: {
        one: 'i = 0,1'
      },
      ga: {
        one: 'n = 1',
        two: 'n = 2',
        few: 'n = 3..6',
        many: 'n = 7..10'
      },
      gd: {
        one: 'n = 1,11',
        two: 'n = 2,12',
        few: 'n = 3..10,13..19'
      },
      gu: {
        one: 'i = 0 or n = 1'
      },
      guw: {
        one: 'n = 0..1'
      },
      gv: {
        one: 'v = 0 and i % 10 = 1',
        two: 'v = 0 and i % 10 = 2',
        few: 'v = 0 and i % 100 = 0,20,40,60,80',
        many: 'v != 0'
      },
      he: {
        one: 'i = 1 and v = 0',
        two: 'i = 2 and v = 0',
        many: 'v = 0 and n != 0..10 and n % 10 = 0'
      },
      hi: {
        one: 'i = 0 or n = 1'
      },
      hr: {
        one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
        few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
      },
      hsb: {
        one: 'v = 0 and i % 100 = 1 or f % 100 = 1',
        two: 'v = 0 and i % 100 = 2 or f % 100 = 2',
        few: 'v = 0 and i % 100 = 3..4 or f % 100 = 3..4'
      },
      hy: {
        one: 'i = 0,1'
      },
      is: {
        one: 't = 0 and i % 10 = 1 and i % 100 != 11 or t != 0'
      },
      iu: {
        one: 'n = 1',
        two: 'n = 2'
      },
      iw: {
        one: 'i = 1 and v = 0',
        two: 'i = 2 and v = 0',
        many: 'v = 0 and n != 0..10 and n % 10 = 0'
      },
      kab: {
        one: 'i = 0,1'
      },
      kn: {
        one: 'i = 0 or n = 1'
      },
      kw: {
        one: 'n = 1',
        two: 'n = 2'
      },
      lag: {
        zero: 'n = 0',
        one: 'i = 0,1 and n != 0'
      },
      ln: {
        one: 'n = 0..1'
      },
      lt: {
        one: 'n % 10 = 1 and n % 100 != 11..19',
        few: 'n % 10 = 2..9 and n % 100 != 11..19',
        many: 'f != 0'
      },
      lv: {
        zero: 'n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19',
        one: 'n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1'
      },
      mg: {
        one: 'n = 0..1'
      },
      mk: {
        one: 'v = 0 and i % 10 = 1 or f % 10 = 1'
      },
      mo: {
        one: 'i = 1 and v = 0',
        few: 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'
      },
      mr: {
        one: 'i = 0 or n = 1'
      },
      mt: {
        one: 'n = 1',
        few: 'n = 0 or n % 100 = 2..10',
        many: 'n % 100 = 11..19'
      },
      naq: {
        one: 'n = 1',
        two: 'n = 2'
      },
      nso: {
        one: 'n = 0..1'
      },
      pa: {
        one: 'n = 0..1'
      },
      pl: {
        one: 'i = 1 and v = 0',
        few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
        many: 'v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14'
      },
      prg: {
        zero: 'n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19',
        one: 'n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1'
      },
      pt: {
        one: 'i = 0..1'
      },
      ro: {
        one: 'i = 1 and v = 0',
        few: 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'
      },
      ru: {
        one: 'v = 0 and i % 10 = 1 and i % 100 != 11',
        few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
        many: 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'
      },
      se: {
        one: 'n = 1',
        two: 'n = 2'
      },
      sh: {
        one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
        few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
      },
      shi: {
        one: 'i = 0 or n = 1',
        few: 'n = 2..10'
      },
      si: {
        one: 'n = 0,1 or i = 0 and f = 1'
      },
      sk: {
        one: 'i = 1 and v = 0',
        few: 'i = 2..4 and v = 0',
        many: 'v != 0'
      },
      sl: {
        one: 'v = 0 and i % 100 = 1',
        two: 'v = 0 and i % 100 = 2',
        few: 'v = 0 and i % 100 = 3..4 or v != 0'
      },
      sma: {
        one: 'n = 1',
        two: 'n = 2'
      },
      smi: {
        one: 'n = 1',
        two: 'n = 2'
      },
      smj: {
        one: 'n = 1',
        two: 'n = 2'
      },
      smn: {
        one: 'n = 1',
        two: 'n = 2'
      },
      sms: {
        one: 'n = 1',
        two: 'n = 2'
      },
      sr: {
        one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
        few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
      },
      ti: {
        one: 'n = 0..1'
      },
      tl: {
        one: 'v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9'
      },
      tzm: {
        one: 'n = 0..1 or n = 11..99'
      },
      uk: {
        one: 'v = 0 and i % 10 = 1 and i % 100 != 11',
        few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
        many: 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'
      },
      wa: {
        one: 'n = 0..1'
      },
      zu: {
        one: 'i = 0 or n = 1'
      }
    },
    // jscs:enable

    /**
     * Plural form transformations, needed for some languages.
     *
     * @param {integer} count
     *            Non-localized quantifier
     * @param {Array} forms
     *            List of plural forms
     * @return {string} Correct form for quantifier in this language
     */
    convertPlural: function ( count, forms ) {
      var pluralRules,
        pluralFormIndex,
        index,
        explicitPluralPattern = new RegExp( '\\d+=', 'i' ),
        formCount,
        form;

      if ( !forms || forms.length === 0 ) {
        return '';
      }

      // Handle for Explicit 0= & 1= values
      for ( index = 0; index < forms.length; index++ ) {
        form = forms[ index ];
        if ( explicitPluralPattern.test( form ) ) {
          formCount = parseInt( form.slice( 0, form.indexOf( '=' ) ), 10 );
          if ( formCount === count ) {
            return ( form.slice( form.indexOf( '=' ) + 1 ) );
          }
          forms[ index ] = undefined;
        }
      }

      forms = $.map( forms, function(){} );

      pluralRules = this.pluralRules[ $.i18n().locale ];

      if ( !pluralRules ) {
        // default fallback.
        return ( count === 1 ) ? forms[ 0 ] : forms[ 1 ];
      }

      pluralFormIndex = this.getPluralForm( count, pluralRules );
      pluralFormIndex = Math.min( pluralFormIndex, forms.length - 1 );

      return forms[ pluralFormIndex ];
    },

    /**
     * For the number, get the plural for index
     *
     * @param {integer} number
     * @param {Object} pluralRules
     * @return {integer} plural form index
     */
    getPluralForm: function(){},

    /**
     * Converts a number using digitTransformTable.
     *
     * @param {number} num Value to be converted
     * @param {boolean} integer Convert the return value to an integer
     * @return {string} The number converted into a String.
     */
    convertNumber: function ( num, integer ) {
      var tmp, item, i,
        transformTable, numberString, convertedNumber;

      // Set the target Transform table:
      transformTable = this.digitTransformTable( $.i18n().locale );
      numberString = String( num );
      convertedNumber = '';

      if ( !transformTable ) {
        return num;
      }

      // Check if the restore to Latin number flag is set:
      if ( integer ) {
        if ( parseFloat( num, 10 ) === num ) {
          return num;
        }

        tmp = [];

        for ( item in transformTable ) {
          tmp[ transformTable[ item ] ] = item;
        }

        transformTable = tmp;
      }

      for ( i = 0; i < numberString.length; i++ ) {
        if ( transformTable[ numberString[ i ] ] ) {
          convertedNumber += transformTable[ numberString[ i ] ];
        } else {
          convertedNumber += numberString[ i ];
        }
      }

      return integer ? parseFloat( convertedNumber, 10 ) : convertedNumber;
    },

    /**
     * Grammatical transformations, needed for inflected languages.
     * Invoked by putting {{grammar:form|word}} in a message.
     * Override this method for languages that need special grammar rules
     * applied dynamically.
     *
     * @param {string} word
     * @param {string} form
     * @return {string}
     */
    // eslint-disable-next-line no-unused-vars
    convertGrammar: function ( word, form ) {
      return word;
    },

    /**
     * Provides an alternative text depending on specified gender. Usage
     * {{gender:[gender|user object]|masculine|feminine|neutral}}. If second
     * or third parameter are not specified, masculine is used.
     *
     * These details may be overriden per language.
     *
     * @param {string} gender
     *      male, female, or anything else for neutral.
     * @param {Array} forms
     *      List of gender forms
     *
     * @return {string}
     */
    gender: function(){},

    /**
     * Get the digit transform table for the given language
     * See http://cldr.unicode.org/translation/numbering-systems
     *
     * @param {string} language
     * @return {Array|boolean} List of digits in the passed language or false
     * representation, or boolean false if there is no information.
     */
    digitTransformTable: function ( language ) {
      var tables = {
        ar: '٠١٢٣٤٥٦٧٨٩',
        fa: '۰۱۲۳۴۵۶۷۸۹',
        ml: '൦൧൨൩൪൫൬൭൮൯',
        kn: '೦೧೨೩೪೫೬೭೮೯',
        lo: '໐໑໒໓໔໕໖໗໘໙',
        or: '୦୧୨୩୪୫୬୭୮୯',
        kh: '០១២៣៤៥៦៧៨៩',
        pa: '੦੧੨੩੪੫੬੭੮੯',
        gu: '૦૧૨૩૪૫૬૭૮૯',
        hi: '०१२३४५६७८९',
        my: '၀၁၂၃၄၅၆၇၈၉',
        ta: '௦௧௨௩௪௫௬௭௮௯',
        te: '౦౧౨౩౪౫౬౭౮౯',
        th: '๐๑๒๓๔๕๖๗๘๙', // FIXME use iso 639 codes
        bo: '༠༡༢༣༤༥༦༧༨༩' // FIXME use iso 639 codes
      };

      if ( !tables[ language ] ) {
        return false;
      }

      return tables[ language ].split( '' );
    }
  };

  $.extend( $.i18n.languages, {
    'default': language
  } );
}( jQuery ) );


/*!
 * jQuery Internationalization library - Message Store
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do anything special to
 * choose one license or the other and you don't have to notify anyone which license you are using.
 * You are free to use UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
  'use strict';

  var MessageStore = function(){};

  function(){}

  /**
   * See https://github.com/wikimedia/jquery.i18n/wiki/Specification#wiki-Message_File_Loading
   */
  MessageStore.prototype = {

    /**
     * General message loading API This can take a URL string for
     * the json formatted messages.
     * <code>load('path/to/all_localizations.json');</code>
     *
     * This can also load a localization file for a locale <code>
     * load( 'path/to/de-messages.json', 'de' );
     * </code>
     * A data object containing message key- message translation mappings
     * can also be passed Eg:
     * <code>
     * load( { 'hello' : 'Hello' }, optionalLocale );
     * </code> If the data argument is
     * null/undefined/false,
     * all cached messages for the i18n instance will get reset.
     *
     * @param {string|Object} source
     * @param {string} locale Language tag
     * @return {jQuery.Promise}
     */
    load: function ( source, locale ) {
      var key = null,
        deferred = null,
        deferreds = [],
        messageStore = this;

      if ( typeof source === 'string' ) {
        // This is a URL to the messages file.
        $.i18n.log( 'Loading messages from: ' + source );
        deferred = jsonMessageLoader( source )
          .done( function ( localization ) {
            messageStore.set( locale, localization );
          } );

        return deferred.promise();
      }

      if ( locale ) {
        // source is an key-value pair of messages for given locale
        messageStore.set( locale, source );

        return $.Deferred().resolve();
      } else {
        // source is a key-value pair of locales and their source
        for ( key in source ) {
          if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
            locale = key;
            // No {locale} given, assume data is a group of languages,
            // call this function again for each language.
            deferreds.push( messageStore.load( source[ key ], locale ) );
          }
        }
        return $.when.apply( $, deferreds );
      }

    },

    /**
     * Set messages to the given locale.
     * If locale exists, add messages to the locale.
     *
     * @param {string} locale
     * @param {Object} messages
     */
    set: function(){},

    /**
     *
     * @param {string} locale
     * @param {string} messageKey
     * @return {boolean}
     */
    get: function(){}
  };

  $.extend( $.i18n.messageStore, new MessageStore() );
}( jQuery ) );

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2011-2013 Santhosh Thottingal, Neil Kandalgaonkar
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
  'use strict';

  var MessageParser = function(){};

  MessageParser.prototype = {

    constructor: MessageParser,

    simpleParse: function(){},

    parse: function ( message, replacements ) {
      if ( message.indexOf( '{{' ) < 0 ) {
        return this.simpleParse( message, replacements );
      }

      this.emitter.language = $.i18n.languages[ $.i18n().locale ] ||
        $.i18n.languages[ 'default' ];

      return this.emitter.emit( this.ast( message ), replacements );
    },

    ast: function ( message ) {
      var pipe, colon, backslash, anyCharacter, dollar, digits, regularLiteral,
        regularLiteralWithoutBar, regularLiteralWithoutSpace, escapedOrLiteralWithoutBar,
        escapedOrRegularLiteral, templateContents, templateName, openTemplate,
        closeTemplate, expression, paramExpression, result,
        pos = 0;

      // Try parsers until one works, if none work return null
      function(){}

      // Try several parserSyntax-es in a row.
      // All must succeed; otherwise, return null.
      // This is the only eager one.
      function(){}

      // Run the same parser over and over until it fails.
      // Must succeed a minimum of n times; otherwise, return null.
      function(){}

      // Helpers -- just make parserSyntax out of simpler JS builtin types

      function makeStringParser( s ) {
        var len = s.length;

        return function () {
          var result = null;

          if ( message.slice( pos, pos + len ) === s ) {
            result = s;
            pos += len;
          }

          return result;
        };
      }

      function(){}

      pipe = makeStringParser( '|' );
      colon = makeStringParser( ':' );
      backslash = makeStringParser( '\\' );
      anyCharacter = makeRegexParser( /^./ );
      dollar = makeStringParser( '$' );
      digits = makeRegexParser( /^\d+/ );
      regularLiteral = makeRegexParser( /^[^{}\[\]$\\]/ );
      regularLiteralWithoutBar = makeRegexParser( /^[^{}\[\]$\\|]/ );
      regularLiteralWithoutSpace = makeRegexParser( /^[^{}\[\]$\s]/ );

      // There is a general pattern:
      // parse a thing;
      // if it worked, apply transform,
      // otherwise return null.
      // But using this as a combinator seems to cause problems
      // when combined with nOrMore().
      // May be some scoping issue.
      function(){}

      // Used to define "literals" within template parameters. The pipe
      // character is the parameter delimeter, so by default
      // it is not a literal in the parameter
      function literalWithoutBar() {
        var result = nOrMore( 1, escapedOrLiteralWithoutBar )();

        return result === null ? null : result.join( '' );
      }

      function(){}

      function(){}

      choice( [ escapedLiteral, regularLiteralWithoutSpace ] );
      escapedOrLiteralWithoutBar = choice( [ escapedLiteral, regularLiteralWithoutBar ] );
      escapedOrRegularLiteral = choice( [ escapedLiteral, regularLiteral ] );

      function(){}

      templateName = transform(
        // see $wgLegalTitleChars
        // not allowing : due to the need to catch "PLURAL:$1"
        makeRegexParser( /^[ !"$&'()*,.\/0-9;=?@A-Z\^_`a-z~\x80-\xFF+\-]+/ ),

        function ( result ) {
          return result.toString();
        }
      );

      function templateParam() {
        var expr,
          result = sequence( [ pipe, nOrMore( 0, paramExpression ) ] );

        if ( result === null ) {
          return null;
        }

        expr = result[ 1 ];

        // use a "CONCAT" operator if there are multiple nodes,
        // otherwise return the first node, raw.
        return expr.length > 1 ? [ 'CONCAT' ].concat( expr ) : expr[ 0 ];
      }

      function templateWithReplacement() {
        var result = sequence( [ templateName, colon, replacement ] );

        return result === null ? null : [ result[ 0 ], result[ 2 ] ];
      }

      function(){}

      templateContents = choice( [
        function(){},
        function(){}
      ] );

      openTemplate = makeStringParser( '{{' );
      closeTemplate = makeStringParser( '}}' );

      function(){}

      expression = choice( [ template, replacement, literal ] );
      paramExpression = choice( [ template, replacement, literalWithoutBar ] );

      function(){}

      result = start();

      /*
       * For success, the pos must have gotten to the end of the input
       * and returned a non-null.
       * n.b. This is part of language infrastructure, so we do not throw an internationalizable message.
       */
      if ( result === null || pos !== message.length ) {
        throw new Error( 'Parse error at position ' + pos.toString() + ' in input: ' + message );
      }

      return result;
    }

  };

  $.extend( $.i18n.parser, new MessageParser() );
}( jQuery ) );
// I18N.js  end


// dot.js start
/* Laura Doktorova https://github.com/olado/doT */
// doT.js
// 2011-2014, Laura Doktorova, https://github.com/olado/doT
// Licensed under the MIT license.

(function () {
  "use strict";

  var doT = {
    name: "doT",
    version: "1.1.1",
    templateSettings: {
      evaluate:    /\{\{([\s\S]+?(\}?)+)\}\}/g,
      interpolate: /\{\{=([\s\S]+?)\}\}/g,
      encode:      /\{\{!([\s\S]+?)\}\}/g,
      use:         /\{\{#([\s\S]+?)\}\}/g,
      useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
      define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
      defineParams:/^\s*([\w$]+):([\s\S]+)/,
      conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
      iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
      varname:	"it",
      strip:		true,
      append:		true,
      selfcontained: false,
      doNotSkipEncoded: false
    },
    template: undefined, //fn, compile template
    compile:  undefined, //fn, for express
    log: true
  }, _globals;

  doT.encodeHTMLSource = function(){};

  _globals = (function(){}());

  /* istanbul ignore else */
  if (typeof module !== "undefined" && module.exports) {
    module.exports = doT;
  } else if (typeof define === "function" && define.amd) {
    define(function(){return doT;});
  } else {
    _globals.doT = doT;
  }

  var startend = {
    append: { start: "'+(",      end: ")+'",      startencode: "'+encodeHTML(" },
    split:  { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" }
  }, skip = /$^/;

  function(){}

  function unescape(code) {
    return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
  }

  doT.template = function(tmpl, c, def) {
    c = c || doT.templateSettings;
    var cse = c.append ? startend.append : startend.split, needhtmlencode, sid = 0, indv,
      str  = (c.use || c.define) ? resolveDefs(c, tmpl, def || {}) : tmpl;

    str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ")
        .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""): str)
        .replace(/'|\\/g, "\\$&")
        .replace(c.interpolate || skip, function(){})
        .replace(c.encode || skip, function(){})
        .replace(c.conditional || skip, function(){})
        .replace(c.iterate || skip, function(){})
        .replace(c.evaluate || skip, function(){})
      + "';return out;")
      .replace(/\n/g, "\\n").replace(/\t/g, '\\t').replace(/\r/g, "\\r")
      .replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, "");
    //.replace(/(\s|;|\}|^|\{)out\+=''\+/g,'$1out+=');

    if (needhtmlencode) {
      if (!c.selfcontained && _globals && !_globals._encodeHTML) _globals._encodeHTML = doT.encodeHTMLSource(c.doNotSkipEncoded);
      str = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("
        + doT.encodeHTMLSource.toString() + "(" + (c.doNotSkipEncoded || '') + "));"
        + str;
    }
    try {
      return new Function(c.varname, str);
    } catch (e) {
      /* istanbul ignore else */
      if (typeof console !== "undefined") console.log("Could not create a template function: " + str);
      throw e;
    }
  };

  doT.compile = function(tmpl, def) {
    return doT.template(tmpl, null, def);
  };
}());
// dot.js end





// xss.min.js  start

!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var FilterCSS=require("cssfilter").FilterCSS,getDefaultCSSWhiteList=require("cssfilter").getDefaultWhiteList,_=require("./util");function(){}var defaultCSSFilter=new FilterCSS;function escapeHtml(html){return html.replace(REGEXP_LT,"&lt;").replace(REGEXP_GT,"&gt;")}var REGEXP_LT=/</g,REGEXP_GT=/>/g,REGEXP_QUOTE=/"/g,REGEXP_QUOTE_2=/&quot;/g,REGEXP_ATTR_VALUE_1=/&#([a-zA-Z0-9]*);?/gim,REGEXP_ATTR_VALUE_COLON=/&colon;?/gim,REGEXP_ATTR_VALUE_NEWLINE=/&newline;?/gim,REGEXP_DEFAULT_ON_TAG_ATTR_4=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,REGEXP_DEFAULT_ON_TAG_ATTR_7=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,REGEXP_DEFAULT_ON_TAG_ATTR_8=/u\s*r\s*l\s*\(.*/gi;function escapeQuote(str){return str.replace(REGEXP_QUOTE,"&quot;")}function unescapeQuote(str){return str.replace(REGEXP_QUOTE_2,'"')}function(){}function escapeDangerHtml5Entities(str){return str.replace(REGEXP_ATTR_VALUE_COLON,":").replace(REGEXP_ATTR_VALUE_NEWLINE," ")}function(){}function(){}function(){}var STRIP_COMMENT_TAG_REGEXP=/<!--[\s\S]*?-->/g;exports.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]},exports.getDefaultWhiteList=getDefaultWhiteList,exports.onTag=function(tag,html,options){},exports.onIgnoreTag=function(tag,html,options){},exports.onTagAttr=function(tag,name,value,isWhiteAttr){if(isWhiteAttr&&"a"===tag&&"href"===name&&"sqyc://"===value.substr(0,7))return name+'="'+value+'"'},exports.onIgnoreTagAttr=function(tag,name,value){},exports.safeAttrValue=function(){},exports.escapeHtml=escapeHtml,exports.escapeQuote=escapeQuote,exports.unescapeQuote=unescapeQuote,exports.escapeHtmlEntities=escapeHtmlEntities,exports.escapeDangerHtml5Entities=escapeDangerHtml5Entities,exports.clearNonPrintableCharacter=clearNonPrintableCharacter,exports.friendlyAttrValue=friendlyAttrValue,exports.escapeAttrValue=escapeAttrValue,exports.onIgnoreTagStripAll=function(){return""},exports.StripTagBody=function(){},exports.stripCommentTag=function(html){return html.replace(STRIP_COMMENT_TAG_REGEXP,"")},exports.stripBlankChar=function(){},exports.cssFilter=defaultCSSFilter,exports.getDefaultCSSWhiteList=getDefaultCSSWhiteList},{"./util":4,cssfilter:8}],2:[function(){},{"./default":1,"./parser":3,"./xss":5}],3:[function(require,module,exports){var _=require("./util");function(){}function(){}var REGEXP_ILLEGAL_ATTR_NAME=/[^a-zA-Z0-9_:\.\-]/gim;function(){}function(){}function(){}exports.parseTag=function(html,onTag,escapeHtml){"use strict";var rethtml="",lastPos=0,tagStart=!1,quoteStart=!1,currentPos=0,len=html.length,currentTagName="",currentHtml="";for(currentPos=0;currentPos<len;currentPos++){var c=html.charAt(currentPos);if(!1===tagStart){if("<"===c){tagStart=currentPos;continue}}else if(!1===quoteStart){if("<"===c){rethtml+=escapeHtml(html.slice(lastPos,currentPos)),lastPos=tagStart=currentPos;continue}if(">"===c){rethtml+=escapeHtml(html.slice(lastPos,tagStart)),currentTagName=getTagName(currentHtml=html.slice(tagStart,currentPos+1)),rethtml+=onTag(tagStart,rethtml.length,currentTagName,currentHtml,isClosing(currentHtml)),lastPos=currentPos+1,tagStart=!1;continue}if(('"'===c||"'"===c)&&"="===html.charAt(currentPos-1)){quoteStart=c;continue}}else if(c===quoteStart){quoteStart=!1;continue}}return lastPos<html.length&&(rethtml+=escapeHtml(html.substr(lastPos))),rethtml},exports.parseAttr=function(html,onAttr){"use strict";var lastPos=0,retAttrs=[],tmpName=!1,len=html.length;function(){}for(var i=0;i<len;i++){var j,c=html.charAt(i);if(!1!==tmpName||"="!==c)if(!1===tmpName||i!==lastPos||'"'!==c&&"'"!==c||"="!==html.charAt(i-1)){if(/\s|\n|\t/.test(c)){if(html=html.replace(/\s|\n|\t/g," "),!1===tmpName){if(-1===(j=findNextEqual(html,i))){addAttr(_.trim(html.slice(lastPos,i))),tmpName=!1,lastPos=i+1;continue}i=j-1;continue}if(-1!==(j=findBeforeEqual(html,i-1)))continue;addAttr(tmpName,stripQuoteWrap(_.trim(html.slice(lastPos,i)))),tmpName=!1,lastPos=i+1}}else{if(-1===(j=html.indexOf(c,i+1)))break;addAttr(tmpName,_.trim(html.slice(lastPos+1,j))),tmpName=!1,lastPos=(i=j)+1}else tmpName=html.slice(lastPos,i),lastPos=i+1}return lastPos<html.length&&(!1===tmpName?addAttr(html.slice(lastPos)):addAttr(tmpName,stripQuoteWrap(_.trim(html.slice(lastPos))))),_.trim(retAttrs.join(" "))}},{"./util":4}],4:[function(require,module,exports){module.exports={indexOf:function(arr,item){var i,j;if(Array.prototype.indexOf)return arr.indexOf(item);for(i=0,j=arr.length;i<j;i++)if(arr[i]===item)return i;return-1},forEach:function(arr,fn,scope){var i,j;if(Array.prototype.forEach)return arr.forEach(fn,scope);for(i=0,j=arr.length;i<j;i++)fn.call(scope,arr[i],i,arr)},trim:function(str){return String.prototype.trim?str.trim():str.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(){}}},{}],5:[function(require,module,exports){var FilterCSS=require("cssfilter").FilterCSS,DEFAULT=require("./default"),parser=require("./parser"),parseTag=parser.parseTag,parseAttr=parser.parseAttr,_=require("./util");function isNull(obj){return null==obj}function FilterXSS(options){(options=function(obj){var ret={};for(var i in obj)ret[i]=obj[i];return ret}(options||{})).stripIgnoreTag&&(options.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),options.onIgnoreTag=DEFAULT.onIgnoreTagStripAll),options.whiteList=options.whiteList||DEFAULT.whiteList,options.onTag=options.onTag||DEFAULT.onTag,options.onTagAttr=options.onTagAttr||DEFAULT.onTagAttr,options.onIgnoreTag=options.onIgnoreTag||DEFAULT.onIgnoreTag,options.onIgnoreTagAttr=options.onIgnoreTagAttr||DEFAULT.onIgnoreTagAttr,options.safeAttrValue=options.safeAttrValue||DEFAULT.safeAttrValue,options.escapeHtml=options.escapeHtml||DEFAULT.escapeHtml,!1===(this.options=options).css?this.cssFilter=!1:(options.css=options.css||{},this.cssFilter=new FilterCSS(options.css))}FilterXSS.prototype.process=function(){},module.exports=FilterXSS},{"./default":1,"./parser":3,"./util":4,cssfilter:8}],6:[function(){},{"./default":7,"./parser":9,"./util":10}],7:[function(require,module,exports){function(){}var REGEXP_URL_JAVASCRIPT=/javascript\s*\:/gim;exports.whiteList=getDefaultWhiteList(),exports.getDefaultWhiteList=getDefaultWhiteList,exports.onAttr=function(name,value,options){},exports.onIgnoreAttr=function(name,value,options){},exports.safeAttrValue=function(){}},{}],8:[function(){},{"./css":6,"./default":7}],9:[function(){},{"./util":10}],10:[function(){},{}]},{},[2]);

// xss.min.js  end






// MD5.js   Start
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function(){}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */
function(){}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function(){}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function(){}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function(){}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function(){}

/*
 * Convert an array of little-endian words to a string
 */
function(){}

/*
 * Convert an array of little-endian words to a hex string.
 */
function(){}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function(){}