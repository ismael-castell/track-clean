var PrintElements = (function () {
    "use strict";

    var hideFromPrintClass = "pe-no-print";
    var preservePrintClass = "pe-preserve-print";
    var preserveAncestorClass = "pe-preserve-ancestor";
    var bodyElementName = "BODY";

    var _hide = function(){};

    var _preserve = function (element, isStartingElement) {
        element.classList.remove(hideFromPrintClass);
        element.classList.add(preservePrintClass);
        if (!isStartingElement) {
            element.classList.add(preserveAncestorClass);
        }
    };

    var _clean = function(){};

    var _walkSiblings = function (element, callback) {
        var sibling = element.previousElementSibling;
        while (sibling) {
            callback(sibling);
            sibling = sibling.previousElementSibling;
        }
        sibling = element.nextElementSibling;
        while (sibling) {
            callback(sibling);
            sibling = sibling.nextElementSibling;
        }
    };

    var _attachPrintClasses = function(){};

    var _cleanup = function(){}