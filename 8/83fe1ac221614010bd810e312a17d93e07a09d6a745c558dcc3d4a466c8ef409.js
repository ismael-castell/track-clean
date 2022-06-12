(function(){})(window);
;(function(){}).call(this);
"object"!=typeof JSON&&(JSON={}),function(){}();
!function(){}(window.jQuery);
;(function(window,document,$,_){'use strict';function WufooFieldLogic(){}
_.merge(WufooFieldLogic.prototype,{initializeFocus:function(){var fields=$('.field');_.forEach(fields,function(field){var $field=$(field);var type=$field.attr('type');if(type==='radio'||type==='checkbox'){$field.on('click',function(){fieldHighlight(this,4);});$field.on('focus',function(){fieldHighlight(this,4);});}else if($field.hasClass('addr')||$field.hasClass('other')){$field.on('focus',function(){fieldHighlight(this,3);});}else{$field.on('focus',function(){fieldHighlight(this,2);});}});},highlight:function(el,depth){var fieldContainer;fieldContainer=(depth===2)?el.parentNode.parentNode:(depth===3)?el.parentNode.parentNode.parentNode:(depth===4)?el.parentNode.parentNode.parentNode.parentNode:null;var $fieldContainer=$(fieldContainer);var $focusedFields=$('.focused');var $lola=$('#lola');$fieldContainer.addClass('focused');_.forEach($focusedFields,function(field){if(field!==$fieldContainer[0]){$(field).removeClass('focused');}});if($(document.getElementsByTagName('html')[0]).hasClass('embed')&&$lola.length){var __FIELD_TOP=window.__FIELD_TOP=-5;var getOffsetTop=function(elem){var offsetTop=0;do{if(!isNaN(elem.offsetTop)){offsetTop+=elem.offsetTop;}
elem=elem.offsetParent}while(elem);return offsetTop;}
__FIELD_TOP+=getOffsetTop($fieldContainer[0]);var offset=$('#header')[0].offsetHeight;$lola.css('margin-top',__FIELD_TOP-offset);}},showRangeCounters:function(){var $counters=$('em.currently');_.forEach($counters,function(){});},validateRange:function(ColumnId,RangeType){var $msg=$('#rangeUsedMsg'+ColumnId);var field;if(document.getElementById('Field'+ColumnId)){field=document.getElementById('Field'+ColumnId);}else if(document.getElementById('Field'+ColumnId+'_other')){field=document.getElementById('Field'+ColumnId+'_other');}
if($msg.length){if(RangeType==='character'){$msg.html(this.getCharacterMessage(field));}else if(RangeType==='word'){$msg.html(this.getWordMessage(field));}else if(RangeType==='digit'){$msg.html(this.getDigitMessage(field));}}},handleRadioOther:function(id,last){var label=document.getElementById(id+'_otherlabel');if(label){if(last){label.style.display='block';}else{label.style.display='none';}}},getCharacterMessage:function(field){return field.value.length;},getWordMessage:function(field){var val=trim($(field).val().replace(/\n/g,' '));var words=val.split(' ');var used=0;var i=0;for(;i<words.length;i++){if(words[i].replace(/\s+$/,'')!==''){used++;}}
return used;},getDigitMessage:function(field){return field.value.length;},ratingToggle:function(){this.setRating();},setRating:function(){var self=this;$(document).on('click',function(e){var $ratings=$(e.target).closest('.rating');if($ratings.length){var el=$ratings[0],inputEl=$(el.getElementsByTagName('input')[0]),currentRating=inputEl.attr('value')||0,newRating=$(e.target).attr('value'),elems=el.getElementsByTagName('span');self.toggleRatingElement(inputEl[0],newRating,currentRating,elems);}});},toggleRatingElement:function(inputEl,newRating,currentRating,elems){var $inputEl=$(inputEl);if(newRating===currentRating){newRating=0;}
_.forEach(elems,function(el){var $el=$(el);$el[(($el.attr('value')<=newRating)?'add':'remove')+'Class']('clicked');});$inputEl.val(((newRating>0)?newRating:''));this.attachRatingRulesHandler(inputEl);},attachRatingRulesHandler:function(el){var env=(typeof __PF!=='undefined')?'__PF':'__MNG';if(window[env]&&window[env].handleInput){window[env].handleInput(el);}},checkFileSize:function(){if(!window.File||!window.FileList){return;}
function onChangeHandler(el){return function(evt){var $parentLi=$(el.parentNode.parentNode);var file=evt.target.files[0];$parentLi.removeClass('error');$parentLi.find('.error').remove();if(file&&file!==undefined){var size=file.size/1000/1000;size=Math.round(size*100)/100;if(size>el.dataset.fileMaxSize){var errorMessage="File must be below "+el.dataset.fileMaxSize+"MB. That one was "+size+"MB!";setLocalFieldError($parentLi,errorMessage);var clone=el.cloneNode();$(clone).on('change',onChangeHandler(clone));$(el).replaceWith(clone);if(clone.value){clone.value='';}}}
var batch_size=0;var max_batch_size=window.__FORM_LIMIT;_.forEach($('.file'),function(el){var file=el.files[0];if(typeof file!=='undefined')
batch_size+=file.size;});batch_size=batch_size/1000/1000;batch_size=Math.round(batch_size*100)/100;if(batch_size>max_batch_size){var errorMessage="Total File upload size for the form is limited to "+max_batch_size+"MB. The total is "+batch_size+'MB.';setLocalFieldError($parentLi,errorMessage);var clone=el.cloneNode();$(clone).on('change',onChangeHandler(clone));$(el).replaceWith(clone);if(clone.value){clone.value='';}}};}
_.forEach($('.file'),function(el){$(el).on('change',onChangeHandler(el))});}});function trim(str){return str.replace(/^\s+|\s+$/g,'');}
function setLocalFieldError($container,message){var newError=document.createElement('p');$(newError).addClass('error').html(message);$container.addClass('error');$container.append(newError);}
window.WufooFieldLogic=WufooFieldLogic;}(window,document,jQuery,_));
;(function(window,document,$,_){'use strict';function lambda(){}
function preventDefault(e){e.preventDefault()}
function WufooFormLogic(){}
_.merge(WufooFormLogic.prototype,{offset:0,startTime:0,endTime:0,loadTime:0,resizeCallFromParent:function(event){if(event.data==='resize'){this.initAutoResize();}},observeFormSubmit:function(){var $activeForm=$('form').eq(0);var self=this;$activeForm.on('submit',function(){$activeForm.off();$activeForm.on('submit',preventDefault);self.disableSubmitButton();if(parent.postMessage){parent.postMessage('formSubmitted','*');}});$(window).on('unload',lambda);},disableSubmitButton:function(){if($('#previousPageButton').length!==0){$('#saveForm').attr('disabled','disabled');}},ifInstructs:function(){var $container=$('#public');if($container.length){if($container.offsetWidth<=450){$container.addClass('altInstruct');}}},setClick:function(){$('#clickOrEnter').val('click');},beginTimer:function(){this.startTime=new Date().getTime()-this.loadTime;},endTimer:function(){this.endTime=new Date().getTime()-this.loadTime;var $stats=$('#stats');var stats=JSON.parse($stats.val())||{};stats.endTime+=this.endTime;if(stats.startTime===0){stats.startTime=this.startTime;}
$stats.val(JSON.stringify(stats));},setLoadTime:function(){},initAutoResize:function(additionalOffset){var key=(typeof __EMBEDKEY!=='undefined')?__EMBEDKEY:'wufooForm';if(this.isEmbeddedForm()&&key!=='false'){additionalOffset=this.getAdditionalOffset(additionalOffset);if(parent.postMessage){parent.postMessage((document.body.offsetHeight+additionalOffset)+'|'+key,'*');}else{if(this.childProxyFrameExist()){this.saveHeightOnParent(document.body.offsetHeight+this.offset);}else{this.saveHeightOnServer(key,(document.body.offsetHeight+this.offset));}}}},getAdditionalOffset:function(additionalOffset){additionalOffset=additionalOffset||0;if(navigator.userAgent.toUpperCase().indexOf('MSIE 7')!==-1){additionalOffset+=70;}
this.offset=additionalOffset;return this.offset;},isEmbeddedForm:function(){if($('#submit_form_here').length){return false;}
if(parent.frames.length<1){return false;}
return true;},childProxyFrameExist:function(){var childProxyFrameExist=false;try{var childProxyFrame=parent.frames['wufooProxyFrame'+this.getFormHash()];if(childProxyFrame.location.href.length>0){childProxyFrameExist=true;}}catch(e){}
return childProxyFrameExist;},saveHeightOnParent:function(frameHeight){try{var url=this.getURLToParent();parent.location.href=this.addFragment(url,'_h',frameHeight);}catch(e){}},getURLToParent:function(){var url=parent.frames['wufooProxyFrame'+this.getFormHash()].location.href;url=url.substring(url.indexOf('#')+1,url.length);return url;},getFormHash:function(){var formHashLink=document.getElementById('formHash');if(formHashLink){return formHashLink.value;}else{var href=document.location.href;var hrefArray=href.split('/');return hrefArray[4];}},addFragment:function(url,fragment,frameHeight){url=this.removeFragment(url,fragment);url+='#'+fragment+'='+frameHeight;return url;},removeFragment:function(){},saveHeightOnServer:function(name,value){this.createTempCookie(name,value);document.body.appendChild(this.getScriptEl(name,value));},getScriptEl:function(name,value){var rules=(this.hasRules())?1:0;var $script=$(document.createElement('script'));var src=document.location.protocol+'//wufoo.com/forms/height.js?action=set&embedKey=';src+=name+'&height='+value+'&rules='+rules+'&protocol='+document.location.protocol+'&timestamp='+new Date().getTime().toString();$script.attr('src',src);return $script[0];},hasRules:function(){var hasRules=false;if(typeof __RULES!=='undefined'){if(!_.isArray(__RULES)){hasRules=true;}}
return hasRules;},isArray:function(object){return _.isArray(object);},createTempCookie:function(name,height){var date=new Date();date.setTime(date.getTime()+(60*1000));var expires='; expires='+date.toGMTString();var rules=(this.hasRules())?1:0;var value=height+'|'+rules+'|'+document.location.protocol;document.cookie=name+'='+value+expires+'; domain=.wufoo.com; path=/';},readTempCookie:function(){}});window.WufooFormLogic=WufooFormLogic;}(window,document,jQuery,_));
;(function(window,document,$,_){'use strict';function WufooConditions(isEntryManager,entry){this.isEntryManager=isEntryManager;this.entry=entry;}
_.merge(WufooConditions.prototype,{isEntryManager:false,entry:'',match:function(rule){var ret;for(var i=0;i<rule.Conditions.length;i++){ret=this.compare(rule.Conditions[i],rule.Setting.FieldTypes);if(rule.MatchType==='any'&&ret===true){ret=true;break;}
if(rule.MatchType==='all'&&ret===false){ret=false;break;}}
return ret;},compare:function(condition,fieldTypes){var fieldType=fieldTypes[condition.FieldName];var fieldValue=this.cleanForComparison(this.getFieldValue(condition.FieldName,fieldType));var conditionValue=this.cleanForComparison(condition.Value);var ret=this[condition.Filter.replace(/ /g,'')](conditionValue,fieldValue,fieldType);return ret;},cleanForComparison:function(string){return trim(stripTags(String(string)).toLowerCase());},getFieldValue:function(columnId,fieldType){var field=this.getField(fieldType,columnId);return this.getInputValue(this.verifyFieldType(fieldType,field),field,columnId)||'';},getField:function(fieldType,columnId){if(fieldType=='radio'||fieldType=='likert'){return this.getRadioField(fieldType,columnId);}else{return $('#Field'+columnId)[0];}},getRadioField:function(fieldType,columnId){var counter=(fieldType=='radio')?0:1;var keepSearching=true;var field=false;while(keepSearching){var $radioField=$('#Field'+columnId+'_'+counter);if($radioField.length){field=$radioField[0];if($radioField.prop('checked')){keepSearching=false;}else{counter=counter+1;}}else{keepSearching=false;}}
if(field&&fieldType=='radio'){if(field.value=='Other'){var otherField=$('#Field'+columnId+'_other');if(otherField.length){field=otherField[0];}}}
return field;},verifyFieldType:function(fieldType,field){if(fieldType=='radio'&&field){if(endsWith(field.id,'_other')){fieldType='text';}}
return fieldType;},getFieldLI:function(field){var $li=$(field).closest('li[id^="fo"]');return $li.length?$li[0]:field;},getInputValue:function(fieldType,field,columnId){if(field){return this.getInputValueFromCurrentPage(fieldType,field,columnId);}else{return this.getInputValueFromEntry(fieldType,columnId);}},getInputValueFromCurrentPage:function(fieldType,field,columnId){var value='';switch(fieldType){case'time':value=this.getTimeInputValue(columnId);break;case'eurodate':value=this.getEuroDateInputValue(columnId);break;case'date':value=this.getDateInputValue(columnId);break;case'phone':value=this.getPhoneInputValue(columnId);break;case'money':value=this.getMoneyInputValue(columnId);break;case'checkbox':value=this.getCheckboxInputValue(field);break;case'radio':value=this.getRadioInputValue(field);break;default:value=this.getSimpleInputValue(field);break;}
return value;},getTimeInputValue:function(columnId){var hour=$('#Field'+columnId).eq(0).val();var min=$('#Field'+columnId+'-1').eq(0).val();var sec=$('#Field'+columnId+'-2').eq(0).val();var amPm=$('#Field'+columnId+'-3').eq(0).val();if(amPm=='PM'&&hour<12){hour=hour*1;hour=hour+12;}
if(amPm=='AM'&&hour==12){hour=hour-12;}
if(sec===''){sec=0;}
return this.formatNum(hour)+':'+this.formatNum(min)+':'+this.formatNum(sec);},getEuroDateInputValue:function(columnId){var year=$('#Field'+columnId).eq(0).val();var month=$('#Field'+columnId+'-2').eq(0).val();var day=$('#Field'+columnId+'-1').eq(0).val();return year+'-'+this.formatNum(month)+'-'+this.formatNum(day);},getDateInputValue:function(columnId){var year=$('#Field'+columnId).eq(0).val();var month=$('#Field'+columnId+'-1').eq(0).val();var day=$('#Field'+columnId+'-2').eq(0).val();return year+'-'+this.formatNum(month)+'-'+this.formatNum(day);},formatNum:function(num){num=String(num)||'';return(num.length==1)?'0'+num:num;},getPhoneInputValue:function(columnId){var val1=$('#Field'+columnId+'-1').eq(0).val();var val2=$('#Field'+columnId+'-2').eq(0).val();var phone=$('#Field'+columnId).value+val1+val2;return phone;},getMoneyInputValue:function(columnId){var integer=$('#Field'+columnId).eq(0).val();var digit=$('#Field'+columnId+'-1').eq(0).val();if(digit>0){integer=integer+'.'+digit;}
return integer;},getCheckboxInputValue:function(field){return(field.checked)?field.value:'';},getRadioInputValue:function(field){if(field.classList.contains('other')){return field.value;}else{return(field.checked)?field.value:'';}},getSimpleInputValue:function(field){return field.value;},getInputValueFromEntry:function(fieldType,columnId){var value=String(this.entry['Field'+columnId]);if(fieldType=='date'||fieldType=='eurodate'){value=value.substring(0,4)+'-'+value.substring(4,6)+'-'+value.substring(6,8);}
return value;},contains:function(needle,haystack){if(needle===''&&haystack===''){return true;}
if(needle===''&&haystack!==''){return false;}
if(String(haystack).indexOf(needle)===-1){return false;}
return true;},doesnotcontain:function(needle,haystack){if(needle===''&&haystack===''){return false;}
if(needle===''&&haystack!==''){return true;}
if(String(haystack).indexOf(needle)===-1){return true;}
return false;},is:function(needle,haystack){return(needle===haystack);},isequalto:function(needle,haystack){return(needle===haystack);},isnot:function(needle,haystack){return this.isnotequalto(needle,haystack);},isnotequalto:function(needle,haystack){return(needle!==haystack);},beginswith:function(needle,haystack){return(String(haystack).indexOf(needle)===0);},endswith:function(needle,haystack){var d=haystack.length-needle.length;return(d>=0&&String(haystack).lastIndexOf(needle)===d);},isgreaterthan:function(conditionValue,fieldValue){if(!isEmpty(fieldValue)){conditionValue=Number(conditionValue);fieldValue=Number(fieldValue);if(fieldValue>conditionValue){return true;}else{return false;}}else{return false;}},islessthan:function(conditionValue,fieldValue){if(!isEmpty(fieldValue)){conditionValue=Number(conditionValue);fieldValue=Number(fieldValue);if(fieldValue<conditionValue){return true;}else{return false;}}else{return false;}},isat:function(conditionDate,dateValue){return(conditionDate==dateValue);},ison:function(conditionDate,dateValue){return(conditionDate==dateValue);},isbefore:function(conditionDate,dateValue,type){if(type=='time'){return this.compareTimes(conditionDate,dateValue,'isbefore');}else{return this.compareDates(conditionDate,dateValue,'isbefore');}},isafter:function(conditionDate,dateValue,type){if(type=='time'){return this.compareTimes(conditionDate,dateValue,'isafter');}else{return this.compareDates(conditionDate,dateValue,'isafter');}},compareDates:function(conditionDate,dateValue,compareType){var condArray=this.cleanSplit('-',conditionDate,3);var dateArray=this.cleanSplit('-',dateValue,3);var condDate=new Date(condArray[0],parseInt(condArray[1])-1,condArray[2],1,1,1,1);var date=new Date(dateArray[0],parseInt(dateArray[1])-1,dateArray[2],1,1,1,1);if(dateArray[0].length<4||dateArray[1].length<2||dateArray[0].length<2){return false;}
if(compareType=='isbefore'){return(date<condDate);}else{return(date>condDate);}},compareTimes:function(conditionTime,timeValue,compareType){var condArray=this.cleanSplit(':',conditionTime,3);var timeArray=this.cleanSplit(':',timeValue,3);var condTime=new Date(2000,1,1,condArray[0],condArray[1],condArray[2],1);var time=new Date(2000,1,1,timeArray[0],timeArray[1],timeArray[2],1);if(timeArray[0].length<2||timeArray[1].length<2||timeArray[2].length<2){return false;}
if(compareType=='isbefore'){return(time<condTime);}else{return(time>condTime);}},cleanSplit:function(delimiter,text,expectedLength){var textArray=text.split(delimiter);for(var i=0;i<expectedLength;i++){textArray[i]=textArray[i]||'';}
return textArray;}});WufooConditions.prototype.is=WufooConditions.prototype.isequalto;function trim(str){return str.replace(/^\s+|\s+$/g,'');}
function isEmpty(value){return(trim(value||'')==='');}
function(){}
function endsWith(haystack,needle,position){position=position||haystack.length;position=position-needle.length;var lastIndex=_.lastIndexOf(haystack,needle);return lastIndex!==-1&&lastIndex===position;}
window.WufooConditions=WufooConditions;}(window,document,jQuery,_));
;(function(window,document,$,_){'use strict';function(){}
function WufooRuleLogic(publicForm){this.PublicForm=publicForm;this.initializeVariables(this.PublicForm.isEntryManager);this.attachFakeOnchangeToRadioButtons();this.attachOnChangeToSelectFields();}
_.merge(WufooRuleLogic.prototype,{formId:'',valueHash:{},hiddenHash:{},isEntryManager:false,Rules:'',PublicForm:'',ConditionService:'',Entry:{},RulesByConditionFieldName:{},processAfterShowArray:{},initializeVariables:function(isEntryManager){if(typeof __RULES!=='undefined'){this.Rules=__RULES;this.RulesByTargetField=this.organizeRulesByTargetField();}
if(typeof __ENTRY!=='undefined'){this.Entry=__ENTRY;}
if(typeof isEntryManager!=='undefined'){this.isEntryManager=isEntryManager;}
this.ConditionService=new WufooConditions(this.isEntryManager,this.Entry);},getRuleFieldsOriginalState:function(rules){var ogStates={};_.forEach(rules,function(rule,index){var $el=this.getLiEl(rule.FormId,rule.Setting.FieldName);if($el){ogStates[$el.attr('id')]=null}})},attachFakeOnchangeToRadioButtons:function(){var $liInputs=(this.isEntryManager)?$('li input.field'):$('input');_.forEach($liInputs,function(input){if(input.type==='checkbox'||input.type==='radio'){$(input).on('click',inputHandler);}});},attachOnChangeToSelectFields:function(){function(){}
if(this.attachOnChangeToSelect()){var $liInputs=(this.isEntryManager)?$('li select.field'):$('select');_.forEach($liInputs,function(){});}},attachOnChangeToSelect:function(){if(navigator.userAgent.toLowerCase().indexOf('chrome')!==-1){return true;}else if(/ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase())){return true;}else if(navigator.appVersion.indexOf('Win')!==-1&&$.browser.webKit){return true;}else if(navigator.appVersion.indexOf('Mac')!==-1&&$.browser.opera){return true;}else{return false;}},organizeRulesByTargetField:function(){for(var fieldId in this.Rules){var rules=this.Rules[fieldId];for(var i=0;i<rules.length;i++){var rule=rules[i];if(typeof rule!=='undefined'){if(this.formId===''){this.formId=rule.FormId;}
for(var j=0;j<rule.Conditions.length;j++){var c=rule.Conditions[j];this.addToRulesByConditionFieldName(rule.Setting.FieldName,c.FieldName);}}}}},addToRulesByConditionFieldName:function(key,value){var columnId='Field'+value;if(_.isArray(this.RulesByConditionFieldName[key])){if(_.indexOf(this.RulesByConditionFieldName[key],columnId)===-1){this.RulesByConditionFieldName[key].push(columnId);}}else{this.RulesByConditionFieldName[key]=[columnId];}},process:function(el,count){var rules=this.getRules(el);var self=this;if(typeof rules!=='undefined'){_.forEach(rules,function(rule){if(self.ConditionService.match(rule)){self.toggleDisplay(rule,false,count);}else{self.toggleDisplay(rule,true,count);}});}},processAll:function(){var self=this;_.forEach(this.Rules,function(rules){_.forEach(rules,function(rule){if(self.ConditionService.match(rule)){self.toggleDisplay(rule,false);}else{self.toggleDisplay(rule,true);}});})},getRules:function(el){var idArray=el.id.split('_');idArray=idArray[0].split('-');return this.Rules[idArray[0]];},toggleDisplay:function(rule,inverse,count){var liEl=this.getLiEl(rule.FormId,rule.Setting.FieldName);var $liEl=$(liEl);var className=(this.isEntryManager)?'rule_hide':'hide';if($liEl.length){var originalClassName=trim(liEl.className).replace(/\n/g,'');if((rule.Type==='Show'&&!inverse)||(rule.Type==='Hide'&&inverse)){$liEl.removeClass(className);}
if((rule.Type==='Hide'&&!inverse)||(rule.Type==='Show'&&inverse)){$liEl.removeClass('error');$liEl.removeClass('hide');$liEl.removeClass('rule_hide');$liEl.addClass(className);}
var newClassName=trim(liEl.className).replace(/\n/g,'');if(originalClassName!==newClassName){this.processElAfterShow(liEl,rule.Setting.FieldName,count);}
this.PublicForm.handleTabs();}},processElAfterShow:function(liEl,fieldName,count){this.processThreeStandardInputs(liEl,count);var conditionIds=this.RulesByConditionFieldName[fieldName];for(var i=0;i<conditionIds.length;i++){var conditionLiEl=this.getLiEl(this.formId,conditionIds[i]);if(conditionLiEl){this.processThreeStandardInputs(conditionLiEl,count);}}},getLiEl:function(formId,fieldName){fieldName=fieldName.replace('Field','');var liEl=$('#fo'+formId+'li'+fieldName);liEl=(liEl.length)?liEl:$('#foli'+fieldName);return liEl[0];},processThreeStandardInputs:function(liEl,count){this.findInputsAndCallHandleInput('input',liEl,count);this.findInputsAndCallHandleInput('select',liEl,count);this.findInputsAndCallHandleInput('textarea',liEl,count);},procceedWithComparisonOld:function(liEl){var proceed=false;var $liEl=$(liEl);if($liEl.length){if(!$liEl.hasClass('hide')&&!$liEl.hasClass('rule_hide')){proceed=true;}}
return proceed;},findInputsAndCallHandleInput:function(tag,liEl,count){var $liInputs=(this.isEntryManager)?$('#main #'+liEl.id+' '+tag+'.field'):$(liEl).find(tag);var liInputs=this.findInputsToHandle($liInputs);this.handleInputOnAllElements(liEl,liInputs,count);},findInputsToHandle:function(liInputs){var hasRadio=false;var radioInputs=[];for(var i=0;i<liInputs.length;i++){var input=liInputs[i];if(input.type==='radio'){hasRadio=true;if(input.checked){radioInputs.push(input);}}}
if(hasRadio){return radioInputs;}else{return liInputs;}},handleInputOnAllElements:function(liEl,inputs,count){for(var i=0;i<inputs.length;i++){var input=inputs[i];if(this.procceedWithComparison(liEl,input)){this.addToProcessAfterShowArray(input,count);if(this.processAfterShowArray[input.id]<3){if(input.type==='radio'){if(input.checked){this.process(inputs[i],1);}}else{this.process(inputs[i],1);}}}}},procceedWithComparison:function(liEl,input){var proceedWithComparison=false;var $liEl=$(liEl);var hiddenValue=(($liEl.hasClass('hide')&&!this.isEntryManager)||$liEl.hasClass('rule_hide'))?'hide':'';if(typeof this.valueHash[input.id]==='undefined'||typeof this.hiddenHash[liEl.id]==='undefined'){proceedWithComparison=true;}else if(this.valueHash[input.id]!==input.value||this.hiddenHash[liEl.id]!==hiddenValue){proceedWithComparison=true;}
this.valueHash[input.id]=input.value;this.hiddenHash[liEl.id]=hiddenValue;return proceedWithComparison;},addToProcessAfterShowArray:function(input,count){if(typeof count==='undefined'||count<1){this.processAfterShowArray[input.id]=0;}else{var elCount=this.processAfterShowArray[input.id];elCount=isNaN(elCount)?0:elCount;this.processAfterShowArray[input.id]=elCount+1;}}});function trim(str){return str.replace(/^\s+|\s+$/g,'');}
window.WufooRuleLogic=WufooRuleLogic;}(window,document,jQuery,_));
;(function(window,document,$,_){'use strict';var tmpl=_.template('\
    <table id="run" border="0" cellspacing="0" cellpadding="0">\
      <tfoot>${rows}</tfoot>\
      <tbody>\
        <tr><td colspan="2"><b>${totalText}</b><span>${total}</span></td></tr>\
      </tbody>\
    </table>');function RunningTotal(publicForm){var self=this;self.publicForm=publicForm;if(self.showRunningTotal()){self.makeGlobalVariablesSafe();self.entry=__ENTRY;self.currency=__PRICES.Currency;self.decimals=__PRICES.Decimals;self.totalText=__PRICES.TotalText;self.basePriceText=__PRICES.BasePriceText;self.basePrice=self.toNumber(__PRICES.BasePrice);self.organizeMerchantFields(__PRICES.MerchantFields);self.updateTotal();self.calculateTop();self.runLolaRun();var html=document.getElementsByTagName('html')[0];if(!$(html).hasClass('embed')){$(window).on('scroll',self.runLolaRun);}}}
_.merge(RunningTotal.prototype,{entry:'',decimals:2,basePrice:0,currency:'',totalText:'',basePriceText:'',publicForm:'',merchantFields:[],hiddenClassNames:['rule_hide','hide'],showRunningTotal:function(){var canShowRunningTotal=false;if(!this.publicForm.isEntryManager){if($('#lola').length){canShowRunningTotal=true;}}
return canShowRunningTotal;},makeGlobalVariablesSafe:function(){window.__ENTRY=(typeof __ENTRY==='undefined')?{}:__ENTRY;if(typeof __PRICES==='undefined'||!__PRICES){window.__PRICES={BasePrice:0,Currency:'&#36;',MerchantFields:[]};}},calculateTop:function(){var el=document.getElementById('lola');window.__PRICE_TOP=-14;if(el){window.__PRICE_TOP+=$(el).offset().top;el=el.offsetParent;}},runLolaRun:function(){var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;var $lola=$('#lola');if(scrollTop>=__PRICE_TOP&&$lola.length){$lola.css('margin-top',scrollTop-window.__PRICE_TOP+7);}else{$lola.css('margin-top',7);}},organizeMerchantFields:function(rawMerchantFields){this.merchantFields=[];var self=this;_.forEach(rawMerchantFields,function(field){if(String(field.Typeof)==='checkbox'){_.forEach(field.SubFields,function(subField){if(typeof subField==='object'){self.addToMerchantFields(field,subField,0);}});}else if(String(field.Typeof)==='radio'||String(field.Typeof)==='select'){var textToIndex=self.getTextToIndexs(field);_.forEach(field.Choices,function(choice){if(typeof choice==='object'){var index=textToIndex[choice.Choice];self.addToMerchantFields(field,choice,index);}});}else if(String(field.Typeof)==='money'){self.addToMerchantFields(field,null,0);}});},getTextToIndexs:function(field){var count=0;var textToIndex=[];_.forEach(field.Choices,function(){var $el=$('#Field'+field.ColumnId+'_'+count);if($el.length){textToIndex[$el.val()]=count;}
count+=1;});return textToIndex;},addToMerchantFields:function(field,subObj,i){var merchantField={};var obj=(String(field.Typeof)==='money')?field:subObj;merchantField.ColumnId='Field'+obj.ColumnId;merchantField.Price=obj.Price;merchantField.Choice=obj.Choice;merchantField.Typeof=field.Typeof;merchantField.Index=i;if(String(field.Typeof)==='checkbox'){merchantField.Header=obj.ChoicesText;}else if(String(field.Typeof)==='money'){merchantField.Header=obj.Title;}else{merchantField.Header=obj.Choice;}
this.merchantFields.push(merchantField);},updateTotal:function(){var $lola=$('#lola');if($lola.length){var fieldToPrices=this.getFieldToPrices();var tableHTML=this.buildRunningTotalTable(fieldToPrices);$lola.html(tableHTML);}},buildRunningTotalTable:function(fieldToPrices){var html='';var total=this.basePrice;if(this.basePrice>0){html+='<tr><th>'+_.escape(this.basePriceText)+'</th>';html+='<td>'+this.formatNumber(this.basePrice)+'</td></tr>';}
for(var i=0;i<fieldToPrices.length;i++){var fieldToPrice=fieldToPrices[i];total=total+fieldToPrice.fieldValue;var className=(fieldToPrice.fieldValue<0)?'negAmount':'';html+='<tr class="'+className+'"><th>'+fieldToPrice.field.Header+'</th>';html+='<td>'+this.formatNumber(fieldToPrice.fieldValue)+'</td></tr>';}
var tplValues={'totalText':this.totalText,'total':this.formatNumber(total),'rows':html};return tmpl(tplValues);},formatNumber:function(num){var isNegative=(num<0)?true:false;num=Math.abs(num);num=num.toFixed(this.decimals);num=this.addCommas(num);num=this.currency+num;num=(isNegative)?'-'+num:num;return num;},addCommas:function(){},getFieldToPrices:function(){var fieldToPrices=[];var fieldValue,fieldToPrice;for(var i=0;i<this.merchantFields.length;i++){fieldValue=this.getFieldValue(this.merchantFields[i]);fieldValue=(String(this.merchantFields[i].Typeof)==='money'&&fieldValue<0)?0:fieldValue;if(fieldValue>0||fieldValue<0){fieldToPrice={'fieldValue':fieldValue,'field':this.merchantFields[i]};fieldToPrices.push(fieldToPrice);}}
return fieldToPrices;},getFieldValue:function(field){var value=0;var el=this.getElement(field);var fieldType=String(field.Typeof);if(el){if(!this.isElementHidden(el)){value=this.getElementValue(field,el);}}else{if(fieldType==='money'){value=this.entry[field.ColumnId];}else if(fieldType==='checkbox'){if(typeof this.entry[field.ColumnId]!=='undefined'&&this.entry[field.ColumnId]!==''){value=field.Price;}}else if(fieldType==='radio'||fieldType==='select'){if(field.Choice===this.entry[field.ColumnId]){value=field.Price;}}}
return this.toNumber(value);},getElement:function(field){if(String(field.Typeof)==='radio'){return $('#'+field.ColumnId+'_'+field.Index)[0];}else{return $('#'+field.ColumnId)[0];}},isElementHidden:function(el){var isElementHidden=false;var li=this.publicForm.getFieldLI(el);if(this.hasHiddenClassName(li)){isElementHidden=true;}
return isElementHidden;},hasHiddenClassName:function(li){var $li=$(li);return _.some(this.hiddenClassNames,function(className){return $li.hasClass(className);});},getElementValue:function(field,el){if(String(field.Typeof)==='checkbox'||String(field.Typeof)==='radio'){return(el.checked)?field.Price:0;}else if(String(field.Typeof)==='select'){return(field.Choice===el.value)?field.Price:0;}else if(String(field.Typeof)==='money'){var $field=$('#'+field.ColumnId);var $field1=$('#'+field.ColumnId+'-1');$field.val($field.val().replace(/[^0-9]/g,''));$field1.val($field1.val().replace(/[^0-9]/g,''));var integer=$field.val();var decimal=$field1.val();return String(integer+'.'+decimal);}},toNumber:function(numAsString){if(typeof numAsString==='undefined'){numAsString='0';}
var num=Number(numAsString);num=(isNaN(num))?0.00:num;return num;}});window.RunningTotal=RunningTotal;}(window,document,jQuery,_));
;(function(window,document,$,_,undefined){'use strict';function PublicForm(runInit,isEntryManager){this.isEntryManager=isEntryManager;if(runInit){this.runInit();}
this.ruleLogic=new WufooRuleLogic(this);this.runningTotal=new RunningTotal(this);}
_.merge(PublicForm.prototype,{formLogic:new WufooFormLogic(),fieldLogic:new WufooFieldLogic(),runningTotal:'',ruleLogic:'',formHeight:'',timerActive:false,genericInputs:{},sortedTabindexes:[],isEntryManager:false,unableToChangeFile:'We were unable to change your file.',runInit:function(){var redirectingToPaymentPage=this.continueToPaypal();this.initCalendars();this.formLogic.setLoadTime();this.formLogic.observeFormSubmit();this.fieldLogic.initializeFocus();this.fieldLogic.showRangeCounters();if(!redirectingToPaymentPage){this.formLogic.initAutoResize(0);}
this.handleTabs();this.addOffsetForCaptcha();this.addOffsetForFreeAccount();this.formLogic.initAutoResize(this.formLogic.offset);this.setFormHeight();this.fieldLogic.ratingToggle();this.fieldLogic.checkFileSize();},addOffsetForCaptcha:function(){var IE6=(navigator.userAgent.indexOf('MSIE 6')>=0);if(IE6&&$('.captcha').length>0){this.formLogic.offset=30;}},addOffsetForFreeAccount:function(){if(typeof __SHOW_BRANDING!=='undefined'&&__SHOW_BRANDING){this.formLogic.offset+=50;}},initCalendars:function(){var $dateLIs=$('li.date, li.eurodate');_.forEach($dateLIs,function(li){var start=li.id.indexOf('li')+2;var calendaFieldID=li.id.substring(start);var $field1=$('#Field'+calendaFieldID+'-1');var $field2=$('#Field'+calendaFieldID+'-2');var $field3=$('#Field'+calendaFieldID);$(li).find('.datepicker').datepicker().on('changeDate',function(ev){var newDate=new Date(ev.date);var mo=padNumberArray(newDate.getMonth()+1,2);var day=padNumberArray(newDate.getDate(),2);var year=padNumberArray(newDate.getFullYear(),4);if($(this).data('date-format')==='yyyy-mm-dd'){if($field1.val()!==mo){$field1.val(mo).trigger('change');}
if($field2.val()!==day){$field2.val(day).trigger('change');}
if($field3.val()!==year){$field3.val(year).trigger('change');}}else{if($field1.val()!==day){$field1.val(day).trigger('change');}
if($field2.val()!==mo){$field2.val(mo).trigger('change');}
if($field3.val()!==year){$field3.val(year).trigger('change');}}
$(this).datepicker('hide')});});},handleTabs:function(){if($.browser.msie||$.browser.opera){return;}
var $inputs;var self=this;this.genericInputs={};this.sortedTabindexes=[];if(this.isEntryManager){var $entryForm=$('#entry_form');$inputs=$entryForm.find('input, textarea, select');}else{$inputs=$('input, textarea, select');}
var validInputs=[];_.forEach($inputs,function(input){var li=self.getFieldLI(input);var $li=$(li);if($li.hasClass('hideAddr2')){if(!$(input.parentNode).hasClass('addr2')){validInputs.push(input);}}else if($li.hasClass('hideAMPM')){if(!$(input.parentNode).hasClass('ampm')){validInputs.push(input);}}else if($li.hasClass('hideSeconds')){if(!$(input.parentNode).hasClass('seconds')){validInputs.push(input);}}else if($li.hasClass('hideCents')){if(!$(input.parentNode).hasClass('cents')){validInputs.push(input);}}else if(input.type!=='hidden'){validInputs.push(input);}});var inputs=validInputs;var noTabIndexes=[];var highestTabIndex=1;_.merge(inputs,function(input){var tabIndex=$(input).attr('tabindex');if(tabIndex>0&&_.indexOf(self.sortedTabindexes,tabIndex)===-1){if($.browser.mozilla&&input.type==='file'){return;}
if(tabIndex>highestTabIndex){highestTabIndex=tabIndex;}
$(input).on('keydown',_.bind(self.tabToInput,self));self.genericInputs[$(input).attr('tabindex')]=input;self.sortedTabindexes.push($(input).attr('tabindex'));}});this.sortedTabindexes.sort(function(a,b){return a-b;});_.forEach(noTabIndexes,function(noTab){highestTabIndex=highestTabIndex+1;$(noTab).on('keydown',_.bind(self.tabToInput,self));$(noTab).attr('tabindex',highestTabIndex);self.genericInputs[highestTabIndex]=noTab;self.sortedTabindexes.push(highestTabIndex);});},getFieldLI:function(field){var $li=$(field).closest('li[id^="fo"]');return $li.length?$li[0]:field;},tabToInput:function(event){if(event.keyCode===9&&this.sortedTabindexes.length>0){var nextField;var self=this;var currTabIndex=Number(event.currentTarget.getAttribute('tabindex'));var firstInputElement=this.genericInputs[this.sortedTabindexes[0]];var lastInputElement=this.genericInputs[this.sortedTabindexes[this.sortedTabindexes.length-1]];if(!event.shiftKey&&currTabIndex===$(lastInputElement).attr('tabindex')){nextField=firstInputElement;}else if(event.shiftKey&&currTabIndex===$(firstInputElement).attr('tabindex')){nextField=lastInputElement;}else{_.every(this.sortedTabindexes,function(tabIndex,i){if(tabIndex===currTabIndex){var nextTabIndex=(event.shiftKey)?self.sortedTabindexes[i-1]:self.sortedTabindexes[i+1];nextField=self.genericInputs[nextTabIndex];return false;}
return true;});}
if(nextField){nextField.focus();if(event&&event.preventDefault){event.preventDefault();}else{return false;}}}},setFormHeight:function(){this.formHeight=document.body.offsetHeight+this.formLogic.offset;},continueToPaypal:function(){var redirectingToPaymentPage=false;var $merchant=$('#merchant');var $merchantMessageText=$('#merchantMessageText');if($merchant.length){redirectingToPaymentPage=true;if($merchantMessageText.length){$merchantMessageText.show();$('#merchantButton').hide();}
$merchant.trigger('submit');}
return redirectingToPaymentPage;},deleteFile:function(fieldId,file_name,container,removal,removeFile,formId){$.ajax({url:'/forms/File.Change.php',dataType:'json',data:{entryId:$('#EntryId').val(),fieldId:fieldId,fileName:file_name,formId:formId},}).done(function(result){finishDeleteFile(result,removeFile,removal,container);});},failedDeleteFile:function(){alert(this.unableToChangeFile);},successfulDeleteFile:function(removeFile,removal,container){$(removeFile).remove();$(removal).hide();$(container).show();},handleInput:function(el,count){if(!this.timerActive){this.formLogic.beginTimer();this.timerActive=true;}
this.ruleLogic.process(el,count);this.runningTotal.updateTotal(el);this.adjustFormHeight();},doSubmitEvents:function(){this.formLogic.endTimer();this.formLogic.setClick();},adjustFormHeight:function(){var currentHeight=document.body.offsetHeight+this.formLogic.offset;if(this.formHeight!==currentHeight&&this.formHeight!==document.body.offsetHeight){this.formLogic.initAutoResize(this.formLogic.offset);this.setFormHeight();}},selectDateOnForm:function(cal){selectDate(cal);var p=cal.params;var year=p.inputField.id;$('#'+year).trigger('change');},selectEuroDateOnForm:function(cal){selectEuroDate(cal);var p=cal.params;var year=p.inputField.id;$('#'+year).trigger('change');},autotab:function(current,to,previous){if(current.getAttribute&&current.value.length==current.getAttribute("maxlength")&&event.keyCode!=8){to.focus();}
if(current.getAttribute&&current.value.length==0&&event.keyCode==8){previous.focus();}},filterNonnumeric:function(field){field.value=field.value.replace(/\D/g,'')}});function(){}
PublicForm.prototype.selectEuroDateOnForm=PublicForm.prototype.selectDateOnForm;window.PublicForm=PublicForm;}(window,document,jQuery,_));
;(function(window,document,$,_){'use strict';$(window).on('load',init);$(window).on('message',resizeCallFromParent);function init(){window.__PF=new PublicForm(true);}
function tabToInput(event){window.__PF.tabToInput(event);}
function(){}
function validateRange(ColumnId,RangeType){window.__PF.fieldLogic.validateRange(ColumnId,RangeType);}
function handleRadioOther(id,last){window.__PF.fieldLogic.handleRadioOther(id,last);}
function deleteFile(fieldId,file_name,container,removal,removeFile,formId){window.__PF.deleteFile(fieldId,file_name,container,removal,removeFile,formId);}
function finishDeleteFile(ret,removeFile,removal,container){if(ret.success=='false'){window.__PF.failedDeleteFile(ret);}else{window.__PF.successfulDeleteFile(removeFile,removal,container);}}
function(){}
function selectDateOnForm(cal){window.__PF.selectDateOnForm(cal);}
function selectEuroDateOnForm(cal){window.__PF.selectEuroDateOnForm(cal);}
function doSubmitEvents(){window.__PF.doSubmitEvents();}
function resizeCallFromParent(event){if(window.__PF.formLogic){window.__PF.formLogic.resizeCallFromParent(event);}}
function(){}
function(){}