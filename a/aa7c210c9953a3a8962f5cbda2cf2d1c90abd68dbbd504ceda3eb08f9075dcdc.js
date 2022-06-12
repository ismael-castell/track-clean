define(['jquery','uiComponent','Magento_Captcha/js/model/captcha','Magento_Captcha/js/model/captchaList','Magento_Customer/js/customer-data','underscore'],function($,Component,Captcha,captchaList,customerData,_){'use strict';var captchaConfig;return Component.extend({defaults:{template:'Magento_Captcha/checkout/captcha'},dataScope:'global',currentCaptcha:null,captchaValue:function(){return this.currentCaptcha.getCaptchaValue();},initialize:function(){this._super();if(window[this.configSource]&&window[this.configSource].captcha){captchaConfig=window[this.configSource].captcha;$.each(captchaConfig,function(formId,captchaData){var captcha;captchaData.formId=formId;captcha=Captcha(captchaData);this.checkCustomerData(formId,customerData.get('captcha')(),captcha);this.subscribeCustomerData(formId,captcha);captchaList.add(captcha);}.bind(this));}},checkCustomerData:function(formId,captchaData,captcha){if(!_.isEmpty(captchaData)&&!_.isEmpty(captchaData)[formId]&&captchaData[formId].timestamp>captcha.timestamp){if(!captcha.isRequired()&&captchaData[formId].isRequired){captcha.refresh();}
captcha.isRequired(captchaData[formId].isRequired);captcha.timestamp=captchaData[formId].timestamp;}},subscribeCustomerData:function(){},getIsLoading:function(){},getCurrentCaptcha:function(){return this.currentCaptcha;},setCurrentCaptcha:function(captcha){this.currentCaptcha=captcha;},getFormId:function(){return this.currentCaptcha!==null?this.currentCaptcha.getFormId():null;},getIsVisible:function(){return this.currentCaptcha!==null?this.currentCaptcha.getIsVisible():false;},setIsVisible:function(flag){this.currentCaptcha.setIsVisible(flag);},isRequired:function(){return this.currentCaptcha!==null?this.currentCaptcha.getIsRequired():false;},setIsRequired:function(flag){this.currentCaptcha.setIsRequired(flag);},isCaseSensitive:function(){return this.currentCaptcha!==null?this.currentCaptcha.getIsCaseSensitive():false;},imageHeight:function(){}