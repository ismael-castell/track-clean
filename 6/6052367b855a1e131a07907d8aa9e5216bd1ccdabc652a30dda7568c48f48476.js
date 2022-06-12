﻿Type.registerNamespace("Sys.Extended.UI"),Sys.Extended.UI.TextBoxWatermarkBehavior=function(e){Sys.Extended.UI.TextBoxWatermarkBehavior.initializeBase(this,[e]),this._watermarkText=null,this._watermarkCssClass=null,this._focusHandler=null,this._blurHandler=null,this._keyPressHandler=null,this._propertyChangedHandler=null,this._watermarkChangedHandler=null,this._oldClassName=null,this._clearedForSubmit=null,this._maxLength=null,"function"!=typeof WebForm_OnSubmit||Sys.Extended.UI.TextBoxWatermarkBehavior._originalWebForm_OnSubmit||(Sys.Extended.UI.TextBoxWatermarkBehavior._originalWebForm_OnSubmit=WebForm_OnSubmit,WebForm_OnSubmit=Sys.Extended.UI.TextBoxWatermarkBehavior.WebForm_OnSubmit)},Sys.Extended.UI.TextBoxWatermarkBehavior.prototype={initialize:function(){Sys.Extended.UI.TextBoxWatermarkBehavior.callBaseMethod(this,"initialize");var e=this.get_element(),t=!1,r=Sys.Extended.UI.TextBoxWatermarkBehavior.callBaseMethod(this,"get_ClientState");null!=r&&""!=r&&(t="Focused"==r,Sys.Extended.UI.TextBoxWatermarkBehavior.callBaseMethod(this,"set_ClientState",null)),this._oldClassName=e.className,this._focusHandler=Function.createDelegate(this,this._onFocus),this._blurHandler=Function.createDelegate(this,this._onBlur),this._keyPressHandler=Function.createDelegate(this,this._onKeyPress),$addHandler(e,"focus",this._focusHandler),$addHandler(e,"blur",this._blurHandler),$addHandler(e,"keypress",this._keyPressHandler),this.registerPropertyChanged();var a=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(this.get_element()).get_Current(),s=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(this.get_element());""!=a&&this._watermarkText!=a||(s.set_Watermark(this._watermarkText),s.set_IsWatermarked(!0)),t?this._onFocus():(e.blur(),this._onBlur()),this._clearedForSubmit=!1,this.registerPartialUpdateEvents(),this._watermarkChangedHandler=Function.createDelegate(this,this._onWatermarkChanged),s.add_WatermarkChanged(this._watermarkChangedHandler)},dispose:function(){var e=this.get_element();this._watermarkChangedHandler&&(Sys.Extended.UI.TextBoxWrapper.get_Wrapper(this.get_element()).remove_WatermarkChanged(this._watermarkChangedHandler),this._watermarkChangedHandler=null),e.control&&this._propertyChangedHandler&&(e.control.remove_propertyChanged(this._propertyChangedHandler),this._propertyChangedHandler=null),this._focusHandler&&($removeHandler(e,"focus",this._focusHandler),this._focusHandler=null),this._blurHandler&&($removeHandler(e,"blur",this._blurHandler),this._blurHandler=null),this._keyPressHandler&&($removeHandler(e,"keypress",this._keyPressHandler),this._keyPressHandler=null),Sys.Extended.UI.TextBoxWrapper.get_Wrapper(this.get_element()).get_IsWatermarked()&&this.clearText(!1),Sys.Extended.UI.TextBoxWatermarkBehavior.callBaseMethod(this,"dispose")},_onWatermarkChanged:function(e,t){Sys.Extended.UI.TextBoxWrapper.get_Wrapper(this.get_element()).get_IsWatermarked()?this._onBlur():this._onFocus()},clearText:function(e){var t=this.get_element(),r=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(t);r.set_Value(""),r.set_IsWatermarked(!1),e&&t.select()},_onFocus:function(e){var t=this.get_element();Sys.Extended.UI.TextBoxWrapper.get_Wrapper(t).get_IsWatermarked()&&this.clearText(!!e),t.className=this._oldClassName,this._maxLength>0&&(this.get_element().maxLength=this._maxLength,this._maxLength=null)},_onBlur:function(){},_applyWatermark:function(){var e=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(this.get_element());if(e.set_Watermark(this._watermarkText),e.set_IsWatermarked(!0),this._watermarkCssClass){var t=this.get_element().className.split();Array.indexOf(t,this._watermarkCssClass)===-1&&(t.push(this._watermarkCssClass),this.get_element().className=t.join(" "))}},_onKeyPress:function(){},registerPropertyChanged:function(){},_onPropertyChanged:function(){},_onSubmit:function(){},_partialUpdateEndRequest:function(e,t){Sys.Extended.UI.TextBoxWatermarkBehavior.callBaseMethod(this,"_partialUpdateEndRequest",[e,t]),this.get_element()&&this._clearedForSubmit&&(this.get_element().blur(),this._onBlur(),this._clearedForSubmit=!1)},get_watermarkText:function(){return this._watermarkText},set_watermarkText:function(e){this._watermarkText!=e&&(this._watermarkText=e,Sys.Extended.UI.TextBoxWrapper.get_Wrapper(this.get_element()).get_IsWatermarked()&&this._applyWatermark(),this.raisePropertyChanged("watermarkText"))},get_WatermarkText:function(){return Sys.Extended.Deprecated("get_WatermarkText()","get_watermarkText()"),this.get_watermarkText()},set_WatermarkText:function(e){Sys.Extended.Deprecated("set_WatermarkText(value)","set_watermarkText(value)"),this.set_watermarkText(e)},get_watermarkCssClass:function(){return this._watermarkCssClass},set_watermarkCssClass:function(){},get_WatermarkCssClass:function(){return Sys.Extended.Deprecated("get_WatermarkCssClass()","get_watermarkCssClass()"),this.get_watermarkCssClass()},set_WatermarkCssClass:function(e){Sys.Extended.Deprecated("set_WatermarkCssClass(value)","set_watermarkCssClass(value)"),this.set_watermarkCssClass(e)},get_text:function(){},set_text:function(){},get_Text:function(){},set_Text:function(){}},Sys.Extended.UI.TextBoxWatermarkBehavior.registerClass("Sys.Extended.UI.TextBoxWatermarkBehavior",Sys.Extended.UI.BehaviorBase),Sys.Extended.UI.TextBoxWatermarkBehavior.WebForm_OnSubmit=function(){}