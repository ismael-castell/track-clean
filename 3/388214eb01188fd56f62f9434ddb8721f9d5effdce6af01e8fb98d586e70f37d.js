/**
 * Touch & Keyboard navigation.
 *
 * Contains handlers for touch devices and keyboard navigation.
 */

(function() {

	/**
	 * Debounce
	 *
	 * @param {Function} func
	 * @param {number} wait
	 * @param {boolean} immediate
	 */
	function(){}

	/**
	 * Add class
	 *
	 * @param {Object} el
	 * @param {string} cls
	 */
	function(){}

	/**
	 * Delete class
	 *
	 * @param {Object} el
	 * @param {string} cls
	 */
	function(){}

	/**
	 * Has class?
	 *
	 * @param {Object} el
	 * @param {string} cls
	 *
	 * @returns {boolean} Has class
	 */
	function(){}

	/**
	 * Toggle Aria Expanded state for screenreaders
	 *
	 * @param {Object} ariaItem
	 */
	function(){}

	/**
	 * Open sub-menu
	 *
	 * @param {Object} currentSubMenu
	 */
	function(){}

	/**
	 * Close sub-menu
	 *
	 * @param {Object} currentSubMenu
	 */
	function(){}

	/**
	 * Find first ancestor of an element by selector
	 *
	 * @param {Object} child
	 * @param {String} selector
	 * @param {String} stopSelector
	 */
	function(){}

	/**
	 * Remove all off-canvas states
	 */
	function(){}

	/**
	 * Matches polyfill for IE11
	 */
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector;
	}

	/**
	 * Toggle `focus` class to allow sub-menu access on touch screens.
	 */
	function(){}

	/**
	 * Run our sub-menu function as soon as the document is `ready`
	 */
	document.addEventListener( 'DOMContentLoaded', function() {
		toggleSubmenuDisplay();
	});

	/**
	 * Run our sub-menu function on selective refresh in the customizer
	 */
	document.addEventListener( 'customize-preview-menu-refreshed', function(){});

	/**
	 * Run our sub-menu function every time the window resizes
	 */
	var isResizing = false;
	window.addEventListener( 'resize', function(){}