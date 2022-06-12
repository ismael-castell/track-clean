/********************************************
	-	THEMEPUNCH TOOLS Ver. 6.0     -
	 Last Update of Tools 12.02.2019
*********************************************/
/*!
 * @fileOverview TouchSwipe - jQuery Plugin @version 1.6.18 / SANDBOXED VERSION FOR TP
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

!function(){}(function(){});

/*! Console Check and GSAP Sandboxing */
if(typeof(console) === 'undefined') {var console = {};console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};}
var RS_CacheGS = window.GreenSockGlobals, RS_CacheGS_queue = window._gsQueue,RS_Cache_define = window._gsDefine; window._gsDefine = null;delete window._gsDefine;var tpGS = punchgs = window.GreenSockGlobals = {};

/*!
 * FOR ALL GREENSOCK UTILS, PLUGINS, ETC ADDED BELOW :
 * https://greensock.com
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

/*! GSAP 3.2.4 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(){});

/*! CustomBounce 3.2.4 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).window=e.window||{})}(this,function(){});


/*! CustomEase 3.2.4 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(){});


/*! CustomWiggle 3.2.4 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(){});

/*! DrawSVGPlugin 3.2.4 */ 
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(){});


/*! SplitText 3.2.4 */
!function(D,u){"object"==typeof exports&&"undefined"!=typeof module?u(exports):"function"==typeof define&&define.amd?define(["exports"],u):u((D=D||self).window=D.window||{})}(this,function(){});

/*! MotionPathPlugin 3.2.4 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(){});

/*! Scroll To Plugin 3.2.4 */
!function(){}(this,function(){});


/*! Map SplitText to tpGS TPGSSPLITTEXT */
tpGS.SplitText = TPGSSPLITTEXT;
tpGS.RAD2DEG = 180/Math.PI;
tpGS.DEG2RAD = Math.PI / 180;

/*! REGISTER MOTION PATH (BEZIER) */
tpGS.gsap.registerPlugin(MotionPathPlugin);
tpGS.gsap.config({nullTargetWarn: false});

/*!FallBack for old and new Eases*/
tpGS.eases = tpGS.gsap.parseEase();
for (var ease in tpGS.eases) if (tpGS.eases.hasOwnProperty(ease) && tpGS[ease]===undefined) tpGS[ease] = tpGS.eases[ease];

/*! SANDBOX */
try{window.GreenSockGlobals=null,window._gsQueue=null,window._gsDefine=null,delete window.GreenSockGlobals,delete window._gsQueue,delete window._gsDefine}catch(e){}try{window.GreenSockGlobals=RS_CacheGS,window._gsQueue=RS_CacheGS_queue,window._gsDefine=RS_Cache_define}catch(e){}

/*! FallBack for Essential Grid */
if (punchgs!==undefined && punchgs.TweenLite!==undefined && punchgs.TweenLite.lagSmoothing===undefined) punchgs.TweenLite.lagSmoothing = function() {};

/*! Wait For Images Library */
!function(){}