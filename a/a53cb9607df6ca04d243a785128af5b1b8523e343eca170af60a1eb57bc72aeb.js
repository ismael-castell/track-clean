

window.cpMedia = window.cpMedia || (function (global, documentElement) {

	var DEBUG = false;
	var matchMedia = global.matchMedia;

	function(){}

	function isArray(target) {
		return Object.prototype.toString.apply(target) === '[object Array]';
	}
	
	function isFunction(target) {
		return typeof target === 'function';
	}

	function evalMediaQueryOnElement(query, element) {
		var media = { all: true, screen: true, print: false };
		var coordinates;
		try {
			coordinates = element.getBoundingClientRect();
		} catch (e) {
			coordinates = {
				width: element.offsetWidth,
				height: element.offsetHeight
			};
		}

		media.thisWidth = coordinates.width || coordinates.right - coordinates.left;
		media.thisHeight = coordinates.height || coordinates.bottom - coordinates.top;
		media.thisAspectRatio = media.thisWidth / media.thisHeight,
		media.thisOrientation = media.thisWidth > media.thisHeight ? "landscape" : "portrait";

		var qReplaced = query
			.replace(/\(|\)/g, "")
			.replace(/\s*,\s*/g, ") || (")
			.replace(/\s+and\s+/gi, " && ")
			.replace(/min-(.*?):/gi, "$1>=")
			.replace(/max-(.*?):/gi, "$1<=")
			.replace(/above-(.*?):/gi, "$1>")
			.replace(/below-(.*?):/gi, "$1<")
			.replace(/min-|max-/gi, "")
			.replace(/(all|screen|print)/, "d.$1")
			.replace(/:/g, "==")
			.replace(/([\w-]+)\s*([<>=]+)\s*(\w+)/g, function ($0, $1, $2, $3) {
				return "d." + toCamelCase($1) + $2 + parseCSSNumber($3);
			})
			.replace(/([<>=]+)([A-z][\w-]*)/g, '$1"$2"');
		var a = Function("d", "return(" + qReplaced + ")")(media);
		return a;
	}
	
	function toCamelCase(value) {
		return value.toLowerCase().replace(/-[a-z]/g, function(){});
	}
	
	function parseCSSNumber(value) {
		return value.replace(/([\d\.]+)(%|em|in|pt|px)/, function ($0, $1, $2) {
			return ($2 == "em") ? $1 * 16 : ($2 == "in") ? $1 * 96 : ($2 == "pt") ? $1 * 96 / 72 : ($2 == "%") ? $1 / (scope.innerWidth || documentElement.clientWidth) : $1;
		});
	}
	
	function(){}

	function QueryHandler(options, elements) {
		this.options = options;
		!options.deferSetup && this.setup(elements);
	}
	QueryHandler.prototype = {

		setup: function (elements) {
			if (this.options.setup) {
				this.options.setup(elements);
			}
			this.initialised = true;
		},

		on: function (e, element) {
			!this.initialised && this.setup();
			this.options.match && this.options.match(e, element);
		},

		off: function (e, element) {
			this.options.unmatch && this.options.unmatch(e, element);
		},

		destroy: function () {
			this.options.destroy ? this.options.destroy() : this.off();
		},

		equals: function (target) {
			return this.options === target || this.options.match === target;
		}
	};

	function MediaQuery(query, isUnconditional) {
		this.query = query;
		this.isUnconditional = isUnconditional;
		this.handlers = [];
		this.mql = matchMedia(query);
		
		if (this.mql.media != query) {
			diag("Media query might be invalid=" + query + "\nParsed as=" + this.mql.media);
		}

		var self = this;
		this.listener = function (mql) {
			self.mql = mql;
			self.assess();
		};
		this.mql.addListener(this.listener);
	}
	MediaQuery.prototype = {
		addHandler: function(){},

		removeHandler: function (handler) {
			var handlers = this.handlers;
			each(handlers, function (h, i) {
				if (h.equals(handler)) {
					h.destroy();
					return !handlers.splice(i, 1); //remove from array and exit each early
				}
			});
		},

		matches: function () {
			return this.mql.matches || this.isUnconditional;
		},
		
		clear: function(){},

		assess: function () {
			var action = this.matches() ? 'on' : 'off';

			each(this.handlers, function (handler) {
				handler[action]();
			});
		}
	};

	function ElementWrapper (element, query, rawQuery) {
		this.element = element;
		this.matched = false;
		this.query = query;
		this.rawQuery = rawQuery;
		var rwdinfo = $(element).data('rwdinfo');
		if (rwdinfo == null) {
			rwdinfo = [];
		}
		rwdinfo.push(this);
		$(element).data('rwdinfo', rwdinfo);
	}

	function MediaElement(query, isUnconditional) {
		this.query = query;
		this.isUnconditional = isUnconditional;
		this.handlers = [];
		this.isMediaElement = true;
		this.elementWrappers = [];
		this.initElements();
	}
	MediaElement.prototype = {
		
		initElements : function () {
			var all,
				element,
				match = this.query.match(/(.+?):media\((.+?)\)/);
			this.elementWrappers = [];
			if (match && /this/.test(match[2])) {
				if (documentElement.querySelectorAll) {
					all = documentElement.querySelectorAll(match[1]);

					for (var index = 0; element = all[index]; ++index) {
						this.elementWrappers.push(new ElementWrapper(element, match[2], this.query));
					}
				}
			}
		},	
		addHandler: function (handler) {
			var elementWrappers = this.elementWrappers,
				index,
				elements = [];
			for (index = 0; index < elementWrappers.length; ++index) {
				elements.push(elementWrappers[index].element);
			}
			var qh = new QueryHandler(handler, elements);
			this.handlers.push(qh);

			this.assessOneHandler(null, qh);//this.matched && qh.on();
			//this.assessForce(null, qh); //performance decrease, but not cached elements
		},

		removeHandler: function(){},

		clear: function () {
			each(this.handlers, function (handler) {
				handler.destroy();
			});
			//this.mql.removeListener(this.listener);
			this.handlers.length = 0; //clear array
		},

		/// Access and execute specific handler if matches media query on current elements
		assessOneHandler: function (e, handler) {
			var elementWrappers = this.elementWrappers,
				elementWrapper,
				index;

			for (index = 0; index < elementWrappers.length; ++index) {
				elementWrapper = elementWrappers[index];

				if (evalMediaQueryOnElement(elementWrapper.query, elementWrapper.element) || this.isUnconditional) {
					handler.on(e, elementWrapper.element);
					elementWrapper.matched = true;
				}
			}
		},

		/// Access and execute current handlers if matches or unmatched media query on current elements
		assess: function (e) {
			var elementWrappers = this.elementWrappers,
				elementWrapper,
				index;

			for (index = 0; index < elementWrappers.length; ++index) {
				elementWrapper = elementWrappers[index];

				if (evalMediaQueryOnElement(elementWrapper.query, elementWrapper.element) || this.isUnconditional) {
					this.match(e, elementWrapper);
				} else {
					this.unmatch(e, elementWrapper);
				}
			}
		},
		
		match: function (e, elementWrapper) {
			if (elementWrapper.matched) {
				return; //already on
			}

			each(this.handlers, function (handler) {
				handler.on(e, elementWrapper.element);
			});
			elementWrapper.matched = true;
		},

		unmatch: function (e, elementWrapper) {
			if (!elementWrapper.matched) {
				return; //already off
			}

			each(this.handlers, function (handler) {
				handler.off(e, elementWrapper.element);
			});
			elementWrapper.matched = false;
		},
		/// Access and execute current handlers if matches or unmatched media query on all elements (no cached)
		/// If handler provided, access and execute only that handler if matches media query on all elements (no cached)
		assessForce: function (e, handler) {
			var all,
				element,
				match = this.query.match(/(.+?):media\((.+?)\)/);
			if (match && /this/.test(match[2])) {
				if (documentElement.querySelectorAll) {
					all = documentElement.querySelectorAll(match[1]);

					for (var index = 0; element = all[index]; ++index) {
						var action = (evalMediaQueryOnElement(match[2], element) || this.isUnconditional) ? 'on' : 'off';
						if (!handler) {
							each(this.handlers, function (handler) {
								handler[action](e, element);
							});
						} else if (action === 'on') {
							handler[action](e, element);
						}
					}
				}
			}
		}
	};

	function MediaQueryDispatch() {
		if (!matchMedia) {
			throw new Error('matchMedia not present, legacy browsers require a polyfill');
		}
		this.queries = {};
		this.listening = false;
		this.browserIsIncapable = !matchMedia('only all').matches;

		this.fire = function (e) {
			var queries = this.queries,
				mediaQuery;

			for (mediaQuery in queries) {
				if (queries.hasOwnProperty(mediaQuery)) {
					queries[mediaQuery].isMediaElement && queries[mediaQuery].assess(e);
					//queries[mediaQuery].isMediaElement && queries[mediaQuery].assessForce(e, null); //performance decrease, but not cached elements
				}
			}
			return this;
		};

		this.fireQuery = function (mediaQuery, e) {
			var queries = this.queries;

			if (queries.hasOwnProperty(mediaQuery)) {
				queries[mediaQuery].isMediaElement && queries[mediaQuery].assess(e);
			}
			return this;
		};

		this.listen = function (timeout) {
			var self = this;

			timeout = timeout || 160;

			//creates closure for separate timed events
			function wireFire(event) {
				var timer;

				window.addEventListener(event, function (e) {
					timer && clearTimeout(timer);

					timer = setTimeout(function () {
						self.fire(e);
					}, timeout);
				}, false);
			}

			//prevent multiple event handlers
			if (this.listening) {
				return this;
			}

			// any browser that doesn't implement this
			// will not have media query support
			if (window.addEventListener) {
				wireFire('resize');
				wireFire('orientationChange');
			}

			self.fire();
			this.listening = true;

			return this;
		};
	}
	MediaQueryDispatch.prototype = {

		register: function (q, options, shouldDegrade) {
			var queries = this.queries,
                isUnconditional = shouldDegrade && this.browserIsIncapable;
			
			if (!queries[q]) {
				if (/this/.test(q)) {
					queries[q] = new MediaElement(q, isUnconditional);
					this.listen();
				} else {
					queries[q] = new MediaQuery(q, isUnconditional);
				}
			}

			//normalize to object in an array
			if (isFunction(options)) {
				options = { match: options };
			}
			if (!isArray(options)) {
				options = [options];
			}
			each(options, function (handler) {
				queries[q].addHandler(handler);
			});

			return this;
		},

		unregister: function(){}