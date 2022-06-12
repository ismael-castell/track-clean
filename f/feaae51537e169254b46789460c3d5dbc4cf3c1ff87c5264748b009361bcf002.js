var Hatena = Hatena || {};

/* UTF-8 でないページから読み込まれても動くように、
 * コメントは複数行コメント (閉じる "*" の前にスペースを置く) を使い、
 * 文字列リテラル中の ASCII 外の文字は \uXXXX とエスケープする。
 */

(function (Hatena) {

var B = Hatena.Bookmark = Hatena.Bookmark || {};
if (B.BookmarkButton) return;

B.origin = 'https://b.hatena.ne.jp';
B.staticOrigin = 'https://b.st-hatena.com';

var matchLocal = new RegExp('^((?:local|b(?!log)\\w+)\\.hatena\\.ne\\.jp(?::[0-9]+)?)$').exec(location.host);
var matchDevHost = new RegExp('^([\\w-]+\\.dev\\.hatena\\.ne\\.jp)$').exec(location.host);
var isLocal;
if (matchLocal) {
    B.origin = B.staticOrigin = 'http://' + matchLocal[1];
    isLocal = true;
} else if (matchDevHost) {
    B.origin = B.staticOrigin = location.protocol + '//' + matchDevHost[1];
    isLocal = true;
}

var U = B.ButtonUtils = {};

var extend = U.extend = function (dest, src) {
    for (var i in src)
        dest[i] = src[i];
    return dest;
};

var E = U.createElement = function (name, props) {
    var element = document.createElement(name);
    for (var p in props)
        element[p] = props[p];
    for (var i = 2; i < arguments.length; i++) {
        var child = arguments[i];
        if (!child.nodeType)
            child = document.createTextNode(child);
        element.appendChild(child);
    }
    return element;
};

var getLocation = U.getLocation = function () {
    var url = location.href;
    /* Safari は location.href でパス中の URI エスケープを
     * デコードしてしまうので、document.URL も調べてみる
     */
    if (url.length < document.URL.length)
        url = document.URL;
    return url;
};

Number.isFinite = Number.isFinite || function(value) {
    return typeof value === "number" && isFinite(value);
};

var View = U.View = {
    root: null,
    clientLeft: 0,
    clientTop: 0,
    init: function () {
        this.root = ((document.compatMode || '') === 'CSS1Compat')
                    ? document.documentElement : document.body;
        this.clientLeft = this.root.clientLeft || 0;
        this.clientTop = this.root.clientTop || 0;
    },
    getElementRect: function (element) {
        if (!this.root) this.init();
        this.getElementRect = element.getBoundingClientRect
            ? this.getElementRectByRect : this.getElementRectByOffset;
        return this.getElementRect(element);
    },
    getElementRectByRect: function (element) {
        var rect = element.getBoundingClientRect();
        var scroll = this.getScroll();
        return {
            x: rect.left + scroll.x - this.clientLeft,
            y: rect.top + scroll.y - this.clientTop,
            width: rect.width || rect.right - rect.left,
            height: rect.height || rect.bottom - rect.top
        };
    },
    getElementRectByOffset: function (element) {
        var x = 0, y = 0;
        for (var node = element, base; base = node.offsetParent; node = base) {
            x += node.offsetLeft;
            y += node.offsetTop;
        }
        return { x: x, y: y, width: element.offsetWidth, height: element.offsetHeight };
    },
    getWindowSize: function () {
        if (!this.root) this.init();
        return { width: this.root.clientWidth, height: this.root.clientHeight };
    },
    getDocumentSize: function () {
        if (!this.root) this.init();
        return { width: this.root.scrollWidth, height: this.root.scrollHeight };
    },
    getScroll: function () {
        if (!this.root) this.init();
        this.getScroll = (typeof window.pageXOffset === 'number')
                         ? this.getScrollByPage : this.getScrollByRoot;
        return this.getScroll();
    },
    getScrollByPage: function () {
        return { x: window.pageXOffset, y: window.pageYOffset };
    },
    getScrollByRoot: function () {
        return { x: this.root.scrollLeft, y: this.root.scrollTop };
    }
};

var Dispatchable = U.Dispatchable = {
    addEventListener: function (type, listener) {
        var listeners = this.getListeners(type);
        for (var i = 0; i < listeners.length; i++)
            if (listeners[i] === listener)
                return;
        listeners.push(listener);
    },
    removeEventListener: function (type, listener) {
        var listeners = this.getListeners(type);
        for (var i = 0; i < listeners.length; i++) {
            if (listeners[i] === listener) {
                listeners.splice(i, 1);
                return;
            }
        }
    },
    dispatchEvent: function (type, data) {
        var event = new Dispatchable.Event(type, data);
        var listeners = this.getListeners(type);
        for (var i = 0; i < listeners.length; i++)
            listeners[i].call(this, event);
        return !event.defaultPrevented;
    },
    getListeners: function (type) {
        if (!this.hasOwnProperty('_listenersMap'))
            this._listenersMap = {};
        return this._listenersMap[type] || (this._listenersMap[type] = []);
    }
};

Dispatchable.Event = function (type, data) {
    this.type = type;
    this.data = data;
    this.defaultPrevented = false;
};

extend(Dispatchable.Event.prototype, {
    preventDefault: function () {
        this.defaultPrevented = true;
    }
});

var Observer = U.Observer = function (target, type, handler, method) {
    this.target = target;
    this.type = type;
    this.listener = handler;
    if (method) {
        this.listener = (typeof method === 'string')
            ? function () { return handler[method].apply(handler, arguments); }
            : function () { return handler.apply(method, arguments); };
    }
    if (!target.addEventListener && target.attachEvent) {
        var listener = this.listener;
        this.listener = function(){};
        this.start = this.startAttach;
        this.stop = this.stopAttach;
    }
    this.start();
};

extend(Observer.prototype, {
    start: function () {
        this.target.addEventListener(this.type, this.listener, false);
    },
    stop: function(){},
    startAttach: function () {
        this.target.attachEvent('on' + this.type, this.listener);
    },
    stopAttach: function(){}