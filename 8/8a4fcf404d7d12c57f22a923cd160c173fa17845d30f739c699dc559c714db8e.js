define(['ko','mageUtils'],function(ko,utils){'use strict';var captionPlaceholder={},optgroupTmpl='<optgroup label="${ $.label }"></optgroup>',nbspRe=/&nbsp;/g,optionsText,optionsValue,optionTitle;ko.bindingHandlers.optgroup={init:function(){},update:function(element,valueAccessor,allBindings){var selectWasPreviouslyEmpty=element.length===0,previousScrollTop=!selectWasPreviouslyEmpty&&element.multiple?element.scrollTop:null,includeDestroyed=allBindings.get('optionsIncludeDestroyed'),arrayToDomNodeChildrenOptions={},captionValue,unwrappedArray=ko.utils.unwrapObservable(valueAccessor()),filteredArray,previousSelectedValues,itemUpdate=false,callback=setSelectionCallback,nestedOptionsLevel=-1;optionsText=ko.utils.unwrapObservable(allBindings.get('optionsText'))||'text';optionsValue=ko.utils.unwrapObservable(allBindings.get('optionsValue'))||'value';optionTitle=optionsText+'title';if(element.multiple){previousSelectedValues=ko.utils.arrayMap(selectedOptions(),ko.selectExtensions.readValue);}else{previousSelectedValues=element.selectedIndex>=0?[ko.selectExtensions.readValue(element.options[element.selectedIndex])]:[];}
if(unwrappedArray){if(typeof unwrappedArray.length==='undefined'){unwrappedArray=[unwrappedArray];}
filteredArray=ko.utils.arrayFilter(unwrappedArray,function(){});filteredArray.map(recursivePathBuilder,null);}
arrayToDomNodeChildrenOptions.beforeRemove=function(option){element.removeChild(option);};if(allBindings.has('optionsAfterRender')){callback=function(){};}
filteredArray=formatOptions(filteredArray);ko.utils.setDomNodeChildrenFromArrayMapping(element,filteredArray,optionNodeFromArray,arrayToDomNodeChildrenOptions,callback);ko.dependencyDetection.ignore(function(){});if(previousScrollTop&&Math.abs(previousScrollTop-element.scrollTop)>20){element.scrollTop=previousScrollTop;}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}
function(){}