define(['jquery','domReady','consoleLogger','Magento_PageCache/js/form-key-provider','jquery-ui-modules/widget','mage/cookies'],function($,domReady,consoleLogger,formKeyInit){'use strict';function(){}
$.fn.comments=function(){};$.widget('mage.formKey',{options:{inputSelector:'input[name="form_key"]',allowedCharacters:'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',length:16},_create:function(){var formKey=$.mage.cookies.get('form_key'),options={secure:window.cookiesConfig?window.cookiesConfig.secure:false};if(!formKey){formKey=generateRandomString(this.options.allowedCharacters,this.options.length);$.mage.cookies.set('form_key',formKey,options);}
$(this.options.inputSelector).val(formKey);}});$.widget('mage.pageCache',{options:{url:'/',patternPlaceholderOpen:/^ BLOCK (.+) $/,patternPlaceholderClose:/^ \/BLOCK (.+) $/,versionCookieName:'private_content_version',handles:[]},_create:function(){},_searchPlaceholders:function(){},_replacePlaceholder:function(){},_ajax:function(){}