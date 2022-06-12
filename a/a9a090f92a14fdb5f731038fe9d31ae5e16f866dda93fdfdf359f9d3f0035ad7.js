var jqobjPrime=null;var show_error_combined=true;var lv_offset=function(currentOffset){return currentOffset;};var LiveValidation=function(element,optionsObj){this.initialize(element,optionsObj);}
function checkDay(day,month,year){var valid=false;if(day>=1){if((month==4||month==6||month==9||month==11)&&day<=30){valid=true;}
if((month==1||month==3||month==5||month==7||month==8||month==10||month==12)&&day<=31){valid=true;}
if(month==2)
{if(day<=28){valid=true;}else if(day==29){if((year%4==0&&year%100!=0)||year%400==0){valid=true;}}}}
return valid;}
LiveValidation.VERSION='1.4 standalone';LiveValidation.TEXTAREA=1;LiveValidation.TEXT=2;LiveValidation.PASSWORD=3;LiveValidation.CHECKBOX=4;LiveValidation.SELECT=5;LiveValidation.FILE=6;LiveValidation.CHECKBOX_GF=9;LiveValidation.RADIO=7;LiveValidation.massValidate=function(){}
function(){}
LiveValidation.prototype={validClass:'LV_valid',invalidClass:'LV_invalid',messageClass:'LV_validation_message',validFieldClass:'LV_valid_field',invalidFieldClass:'LV_invalid_field',initialize:function(element,optionsObj){var self=this;if(!element)
throw new Error("LiveValidation::initialize - No element reference or element id has been provided!");this.element=element.nodeName?element:document.getElementById(element);if(!this.element)
throw new Error("LiveValidation::initialize - No element with reference or id of '"+element+"' exists!");this.validations=[];this.elementType=this.getElementType();this.form=this.element.form;var options=optionsObj||{};if(options.jqObj&&!jqobjPrime){jqobjPrime=options.jqObj;}
this.fieldType=options.fieldType;if(typeof this.form=="undefined"){var Forms=jqobjPrime(this.element).parents("form");this.form=Forms[0];}
this.element.onfocus=function(){}
this.validMessage=options.validMessage||" ";var node=options.insertAfterWhatNode||this.element;this.insertAfterWhatNode=node.nodeType?node:document.getElementById(node);this.onlyOnBlur=options.onlyOnBlur||false;this.wait=options.wait||0;this.onlyOnSubmit=options.onlyOnSubmit||false;this.beforeValidation=options.beforeValidation||function(){};this.beforeValid=options.beforeValid||function(){};this.onValid=options.onValid||function(){this.insertMessage(this.createMessageSpan());this.addFieldClass();};this.afterValid=options.afterValid||function(){};this.beforeInvalid=options.beforeInvalid||function(){};this.onInvalid=options.onInvalid||function(){};this.afterInvalid=options.afterInvalid||function(){};this.afterValidation=options.afterValidation||function(){};if(this.form){this.formObj=LiveValidationForm.getInstance(this.form);this.formObj.addField(this);}
this.oldOnFocus=this.element.onfocus||function(){};this.oldOnBlur=this.element.onblur||function(){};if(this.fieldType=="checkbox"){this.oldOnClick_check={};var radioUL=this.element;var len=radioUL.childNodes.length;for(var i=0;i<radioUL.childNodes.length;i++){this.oldOnClick_check[radioUL.childNodes[i].querySelector('input').id]=(radioUL.childNodes[i].querySelector('input').onclick||function(){});}}else{this.oldOnClick_check=[];this.oldOnClick=this.element.onclick||function(){};}
this.oldOnChange=this.element.onchange||function(){};this.oldOnKeyup=this.element.onkeyup||function(){};this.element.onfocus=function(e){self.doOnFocus(e);jqobjPrime(document).trigger("lv_field_on_focus",e);return self.oldOnFocus.call(this,e);}
if(!this.onlyOnSubmit){switch(this.elementType){case LiveValidation.CHECKBOX_GF:var radioUL=this.element;var len=radioUL.childNodes.length;for(var i=0;i<radioUL.childNodes.length;i++){radioUL.childNodes[i].querySelector('input').onclick=function(){}
radioUL.childNodes[i].querySelector('input').onblur=function(e){return self.doOnBlur(e);}
radioUL.childNodes[i].querySelector('input').onfocus=function(){}}
break;case LiveValidation.CHECKBOX:case LiveValidation.RADIO:case LiveValidation.SELECT:this.element.onblur=function(){}
break;case LiveValidation.FILE:this.element.onchange=function(){}
break;default:this.element.onblur=function(e){if(hasSubFields.indexOf(self.fieldType)==-1){return self.doOnBlur(e);}
else{var elemLI=jqobjPrime(self.element).parents("li.gfield");elemLI.find("input , select").each(function(k,v){var str=jQuery(this).attr("id");var getConfig=str.split("_");var separator='input_'+getConfig[1]+"_";var get_match=str.split(separator).pop();if(typeof all_validations[getConfig[1]]!=="undefined"&&typeof all_validations[getConfig[1]][getConfig[2]+"_"+getConfig[3]]!=="undefined"){all_validations[getConfig[1]][getConfig[2]+"_"+getConfig[3]].validate();}});}}}}},destroy:function(){},add:function(){},remove:function(){},deferValidation:function(){},doOnBlur:function(e){this.focused=false;this.validate(e);},doOnFocus:function(){},getElementType:function(){var nn=this.element.nodeName.toUpperCase();var nt=this.element.type.toUpperCase();switch(true){case(nn=='TEXTAREA'):return LiveValidation.TEXTAREA;case(nn=='INPUT'&&nt=='TEXT'):return LiveValidation.TEXT;case(nn=='INPUT'&&nt=='EMAIL'):return LiveValidation.TEXT;case(nn=='INPUT'&&nt=='URL'):return LiveValidation.TEXT;case(nn=='INPUT'&&nt=='TEL'):return LiveValidation.TEXT;case(nn=='INPUT'&&nt=='NUMBER'):return LiveValidation.TEXT;case(nn=='INPUT'&&nt=='PASSWORD'):return LiveValidation.PASSWORD;case(nn=='INPUT'&&nt=='CHECKBOX'):return LiveValidation.CHECKBOX;case(nn=='INPUT'&&nt=='RADIO'):return LiveValidation.RADIO;case(nn=='INPUT'&&nt=='FILE'):return LiveValidation.FILE;case(nn=='SELECT'):return LiveValidation.SELECT;case(nn=='UL'):return LiveValidation.CHECKBOX_GF;case(nn=='INPUT'):throw new Error('LiveValidation::getElementType - Cannot use LiveValidation on an '+nt.toLowerCase()+' input!');default:throw new Error('LiveValidation::getElementType - Element must be an input, select, or textarea - '+nn.toLowerCase()+' was given!');}},doValidations:function(){this.validationFailed=false;for(var i=0,len=this.validations.length;i<len;++i){this.validationFailed=!this.validateElement(this.validations[i].type,this.validations[i].params);if(this.validationFailed)
return false;}
this.message=this.validMessage;return true;},validateElement:function(validationFunction,validationParamsObj){switch(validationFunction){case Validate.Presence:case Validate.Confirmation:case Validate.Acceptance:this.displayMessageWhenEmpty=true;break;case Validate.Custom:if(validationParamsObj.displayMessageWhenEmpty)
this.displayMessageWhenEmpty=true;break;}
if(this.elementType==LiveValidation.RADIO){value=this.element.checked;}
else{if(this.element.selectedIndex==-1&&this.elementType==LiveValidation.SELECT){var value="";}else{var value=(this.elementType==LiveValidation.SELECT)?this.element.options[this.element.selectedIndex].value:this.element.value;}
if(validationFunction==Validate.Acceptance||validationFunction==Validate.AcceptanceCheckbox){if(this.elementType!=LiveValidation.CHECKBOX)
throw new Error('LiveValidation::validateElement - Element to validate acceptance must be a checkbox!');value=this.element.checked;}}
var isValid=true;try{validationFunction(value,validationParamsObj);}catch(error){if(error instanceof Validate.Error){if(value!==''||(value===''&&this.displayMessageWhenEmpty)){this.validationFailed=true;this.message=error.message.split('\n')[0];isValid=false;}}else{throw error;}}finally{return isValid;}},validate:function(){if(!this.checkIfDisable(this.element)){this.beforeValidation();var isValid=this.doValidations();if(isValid){this.beforeValid();this.onValid();this.afterValid(this.element);return true;}else{this.beforeInvalid();this.onInvalid();this.afterInvalid(this.element);return false;}
this.afterValidation();}else{return true;}},enable:function(){},disable:function(){},checkIfDisable:function(){},createMessageSpan:function(){},insertMessage:function(){},addFieldClass:function(){},removeMessage:function(){},removeFieldClass:function(){},removeMessageAndFieldClass:function(){this.removeMessage();this.removeFieldClass();}}
var LiveValidationForm=function(element){this.initialize(element);}
LiveValidationForm.instances={};LiveValidationForm.getInstance=function(){}
LiveValidationForm.prototype={beforeValidation:function(){},onValid:function(){},onInvalid:function(){},afterValidation:function(){},initialize:function(element){this.name=element.id;this.element=element;this.fields=[];this.oldOnSubmit=this.element.onsubmit||function(){};var self=this;this.element.setAttribute("onsubmit","return false;");var submitbutton=jQuery(this.element).find(':submit').attr('id');this.element.onsubmit=function(e){var moveTo=0;var elem_form=e.currentTarget;if("undefined"===typeof elem_form){return true;}
if(hasClass(elem_form,"back_bt_press")){return true;}
if(hasClass(elem_form,"save_bt_press")){return true;}
var ret=false;self.beforeValidation(),self.valid=LiveValidation.massValidate(self.fields);self.valid?self.onValid():self.onInvalid();self.afterValidation();if(self.valid)
ret=self.oldOnSubmit.call(this,e||window.event)!==false;var parent=document.querySelector(".gform_body");var child=document.querySelector(".errorMessages");if(child){parent.removeChild(child);}
if(show_error_combined==true){var d=document.getElementsByClassName("LV_invalid_field");if(d.length>0){var formIDConfig=self.name.split("_");var ul=document.createElement('ul');var section=document.querySelector(".gform_body");ul.className="errorMessages";var contain_names=new Array();var containe_checks=new Array();section.insertBefore(ul,section.firstChild);for(var i=0;i<d.length;i++){var ID=d[i].id;if(contain_names.indexOf(d[i].name)==-1){contain_names.push(d[i].name);}
else{continue;}
if(d[i].type=="checkbox"){var a=d[i].name;var name=a.split(".")[0];if(containe_checks.indexOf(name)==-1){containe_checks.push(name);}
else{continue;}}
if(d[i].tagName=="UL"){continue;}
var error_message_elem=d[i].nextSibling;var label_elem=document.querySelector(".gfield_label[for='"+ID+"']");if(!label_elem){label_elem=document.getElementById(ID+"_label");}
if(!label_elem){label_elem=document.querySelector("label[for='"+ID+"']");}
if(d[i].type=="radio"){var get_mainLI="field_"+formIDConfig[1]+"_"+d[i].name.substr(6);label_elem=document.querySelector("#"+get_mainLI+" .gfield_label");}
if(d[i].type=="checkbox"){var a=d[i].name;var name=a.split(".")[0];var get_mainLI="field_"+formIDConfig[1]+"_"+name.substr(6);label_elem=document.querySelector("#"+get_mainLI+" .gfield_label");}
var li_elem=label_elem.parentNode;if(moveTo==0){moveTo=jqobjPrime(li_elem).offset().top;}
var li=document.createElement('li');if(label_elem&&error_message_elem){var error_message_text=(error_message_elem.textContent||error_message_elem.innerText);var label_text1=(label_elem.textContent||label_elem.innerText);if(label_text1==""||label_text1=="*"){label_elem=document.querySelector("#"+ID+"_container label[for='"+ID+"']");var label_text1=(label_elem.textContent||label_elem.innerText);}
li.innerHTML="<span><a href='#' onclick='window.scrollTo(0, "+jqobjPrime(li_elem).offset().top+"); return false;'>"+label_text1+"</a></span> "+error_message_text+" ";}}
var ul_j=jqobjPrime('.errorMessages');moveTo=window.lv_offset(moveTo);jqobjPrime('body,html').animate({scrollTop:moveTo},500);}
var elems=document.getElementsByClassName("LV_validation_message");}
var getFormIDconfig=self.name.split("_");if(false===ret){window['gf_submitting_'+getFormIDconfig[1]]=false;}
if(!ret){if(lv_gf_is_ajax=="yes"){jqobjPrime(".gform_ajax_spinner").remove();}
return ret;}}},addField:function(newField){this.fields.push(newField);},removeField:function(){},destroy:function(){}}
var Validate={Presence:function(value,paramsObj){var paramsObj=paramsObj||{};var message=paramsObj.failureMessage||"Can't be empty!";if(typeof paramsObj.mask!=="undefined"){if(paramsObj.mask==value){Validate.fail(message);}else{setTimeout(function(){},300);}}
if(value===''||value===null||value===undefined||value=="First Name"||value=="Last Name"||value=="Middle Name")
Validate.fail(message);return true;},Numericality:function(){},Format:function(value,paramsObj){var value=String(value);var paramsObj=paramsObj||{};var message=paramsObj.failureMessage||"Looks like an invalid pattern.";var pattern=paramsObj.pattern||/./;var negate=paramsObj.negate||false;var patternRes=pattern.test(value);if(!negate&&!patternRes){Validate.fail(message);}
if(negate&&patternRes){Validate.fail(message);}
return true;},Email:function(value,paramsObj){var paramsObj=paramsObj||{};var message=paramsObj.failureMessage||"Must be a valid email address!";Validate.Format(value,{failureMessage:message,pattern:/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i});return true;},Website:function(value,paramsObj){var paramsObj=paramsObj||{};var message=paramsObj.failureMessage||"Must be a valid url!";Validate.Format(value,{failureMessage:message,pattern:/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/});return true;},Name:function(){},Phone:function(value,paramsObj){var paramsObj=paramsObj||{};var formate=paramsObj.phoneFormate||"";if(formate=='standard'){var message=paramsObj.failureMessage||"Phone format:(###)###-####";var phonefield=paramsObj.phonefield;var newnumber="";for(place=0;place<=value.length;place++)
newnumber=newnumber+value.charAt(place).replace(/\D*/,'');if(newnumber.length==10){return true;}
else if(newnumber.length==0){Validate.fail(message);return false;}
else{Validate.fail(message);return false;}}else{var message=paramsObj.failureMessage||"only numbers!";Validate.Format(value,{failureMessage:message,pattern:/^[0-9()-]*$/});}
return true;},Length:function(){},Inclusion:function(){},Exclusion:function(){},Confirmation:function(value,paramsObj){if(!paramsObj.match)
throw new Error("Validate::Confirmation - Error validating confirmation: Id of element to match must be provided!");var paramsObj=paramsObj||{};var message=paramsObj.failureMessage||"Does not match!";var match=paramsObj.match.nodeName?paramsObj.match:document.getElementById(paramsObj.match);if(!match)
throw new Error("Validate::Confirmation - There is no reference with name of, or element with id of '"+paramsObj.match+"'!");if(value!=match.value)
Validate.fail(message);return true;},Acceptance:function(value,paramsObj){var paramsObj=paramsObj||{};var message=paramsObj.failureMessage||"Must be accepted!";if(!value)
Validate.fail(message);return true;},ConfirmEmail:function(value,paramsObj){var paramsObj=paramsObj||{};var message=paramsObj.failureMessage||"Must be accepted!";console.log('runs');var ParentValue=document.getElementById(paramsObj.parentField).value;console.log(value);console.log(ParentValue);if(value!==ParentValue){Validate.fail(message);}
return true;},AcceptanceCheckbox:function(value,paramsObj){var paramsObj=paramsObj||{};var message=paramsObj.failureMessage||"Must be accepted!";var get_mainUL="input_"+paramsObj.form_id+"_"+paramsObj.field_id;var radioUL=document.getElementById(get_mainUL);var len=radioUL.childNodes.length;for(var i=0;i<radioUL.childNodes.length;i++){if(radioUL.childNodes[i].querySelector('input').checked){if(typeof radioUL.classList=="undefined"){removeClass(radioUL,'LV_invalid_field');}else{radioUL.classList.remove("LV_invalid_field");}
for(var j=0;j<radioUL.childNodes.length;j++){removeClass(radioUL.childNodes[j].querySelector('input'),'LV_invalid_field');}
return true;}}
if(!value){if(typeof radioUL.classList=="undefined"){addClass(radioUL,'LV_invalid_field');}else{radioUL.classList.add("LV_invalid_field");}
Validate.fail(message);}
else{if(typeof radioUL.classList=="undefined"){removeClass(radioUL,'LV_invalid_field');}else{radioUL.classList.remove("LV_invalid_field");}}
return true;},AcceptanceRadio:function(value,paramsObj){var returnVar=false;var paramsObj=paramsObj||{};var message=paramsObj.failureMessage||"Must be accepted!";var get_mainUL="input_"+paramsObj.form_id+"_"+paramsObj.name_field.substr(6);var radioUL=document.getElementById(get_mainUL);if(paramsObj.name_field){var inps=document.getElementsByName(paramsObj.name_field);for(var i=0;i<inps.length;i++){if(inps[i].checked){if(typeof radioUL.classList=="undefined"){removeClass(radioUL,'LV_invalid_field');}else{radioUL.classList.remove("LV_invalid_field");}
if(typeof radioUL.classList=="undefined"){removeClass(radioUL,'LV_invalid_field');var inps=document.getElementsByName(paramsObj.name_field);for(var i=0;i<inps.length;i++){removeClass(inps[i],'LV_invalid_field');}}else{radioUL.classList.remove("LV_invalid_field");}
var inps=document.getElementsByName(paramsObj.name_field);for(var i=0;i<inps.length;i++){removeClass(inps[i],'LV_invalid_field');}
return true;}}}
if(!value){if(typeof radioUL.classList=="undefined"){addClass(radioUL,'LV_invalid_field');}else{radioUL.classList.add("LV_invalid_field");}
Validate.fail(message);}
else{if(typeof radioUL.classList=="undefined"){removeClass(radioUL,'LV_invalid_field');var inps=document.getElementsByName(paramsObj.name_field);for(var i=0;i<inps.length;i++){removeClass(inps[i],'LV_invalid_field');}}else{radioUL.classList.remove("LV_invalid_field");}
var inps=document.getElementsByName(paramsObj.name_field);for(var i=0;i<inps.length;i++){removeClass(inps[i],'LV_invalid_field');}}
return true;},Custom:function(){},GFCheckboxes:function(value,paramsObj){var paramsObj=paramsObj||{};var message=paramsObj.failureMessage||"Must be accepted!";var isValidated=false;var radioUL=document.getElementById(paramsObj.field_name);var len=radioUL.childNodes.length;for(var i=0;i<radioUL.childNodes.length;i++){if(radioUL.childNodes[i].querySelector('input').checked){isValidated=true;return true;}}
if(!isValidated){Validate.fail(message);}},Date:function(value,paramsObj){var paramsObj=paramsObj||{};var message=paramsObj.failureMessage||"Must be accepted!";if(!value)
Validate.fail(message);var d=new Date(value);var current=new Date();if(Object.prototype.toString.call(d)==="[object Date]"){if(isNaN(d.getTime())){Validate.fail(message);}
else{var re=/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;var regs=new Array();if(regs=value.match(re)){if(regs[3]<(current.getFullYear()-100)){Validate.fail(message);}
if(checkDay(regs[2],regs[1],regs[3])){return true;}else{Validate.fail(message);}}
Validate.fail(message);}}
else{Validate.fail(message);}
return true;},now:function(){},fail:function(){},Error:function(errorMessage){this.message=errorMessage;this.name='ValidationError';}}
function phoneformat(fld){var newnumber="";phonenumber=fld.val();for(place=0;place<=fld.val().length;place++)
newnumber=newnumber+phonenumber.charAt(place).replace(/\D*/,'');if(newnumber.length==10){fld.val('('+newnumber.substring(0,3)+')'+newnumber.substring(3,6)+'-'+newnumber.substring(6,newnumber.length));alert(phonenumber);return true;}
else if(newnumber.length==0){fld.val('');return false;}
else{fld.select();return false;}}
function(){}
function(){}
function(){}