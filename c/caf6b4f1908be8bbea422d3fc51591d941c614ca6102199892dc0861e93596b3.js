// script.aculo.us slider.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Marty Haught, Thomas Fuchs
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

if (!Control) var Control = { };

// options:
//  axis: 'vertical', or 'horizontal' (default)
//
// callbacks:
//  onChange(value)
//  onSlide(value)
Control.Slider = Class.create({
  initialize: function(){},
  dispose: function(){},
  setDisabled: function(){},
  setEnabled: function(){
    this.disabled = false;
  },
  getNearestValue: function(){},
  setValue: function(){},
  setValueBy: function(){},
  translateToPx: function(){},
  translateToValue: function(){},
  getRange: function(){},
  minimumOffset: function(){},
  maximumOffset: function(){},
  isVertical:  function(){
    return (this.axis == 'vertical');
  },
  drawSpans: function(){},
  setSpan: function(){},
  updateStyles: function(){},
  startDrag: function(){},
  update: function(){},
  draw: function(){},
  endDrag: function(){},
  finishDrag: function(){},
  updateFinished: function(){}