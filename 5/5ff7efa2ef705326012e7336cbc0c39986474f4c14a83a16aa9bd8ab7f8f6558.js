(function(){"use strict";if(!BX||!!BX&&typeof BX.namespace!=="function"||!!BX&&typeof BX.loadExt==="function"){return}BX.namespace("BX");var n="main.bitrix.main.controller.loadext.getextensions";var t="success";var r={};function(){}function i(n){if(n.status!==t){n.errors.map(console.warn);return[]}return n.data.map(function(n){return u(n.extension)||(r[n.extension]=new BX.LoadExt.Extension(n))})}function(){}function u(n){return r[n]}function(){}