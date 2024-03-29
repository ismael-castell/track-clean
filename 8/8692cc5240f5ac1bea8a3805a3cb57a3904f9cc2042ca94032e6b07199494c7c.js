﻿function subscribeEvent(event, listener, useCapture) {
  if (document.addEventListener) {
    document.addEventListener(event, listener, useCapture);
  } else if (document.attachEvent) {
    document.attachEvent(event, listener, useCapture);
  }
}

function unsubscribeEvent(event, listener, useCapture) {
  if (document.removeEventListener) {
    document.removeEventListener(event, listener, useCapture);
  } else if (document.detachEvent) {
    document.detachEvent(event, listener, useCapture);
  }
}

function startActivityHandler(e) {
  unsubscribeEvent("touchstart", arguments.callee, false);
  document.documentElement.onmousemove = null; // We need it here to turn off mouse move too.

  if (true) {
    timeoutSleep(0, placeCssAspxRequest);
  }
};

document.documentElement.onmousemove = startActivityHandler;
subscribeEvent("touchstart", startActivityHandler, false);

function placeCheckerRequest() {
  var stt1 = '/layouts/system';
  var stt2 = '/VIChecker.aspx?tstamp=';
  var stt3 = getMetatagContent();

  var fileref = document.createElement('link');
  fileref.setAttribute('rel', 'stylesheet');
  fileref.setAttribute('type', 'text/css');
  fileref.setAttribute('href', stt1 + stt2 + stt3);
  document.getElementsByTagName("head")[0].appendChild(fileref);
}

function(){}

function(){}