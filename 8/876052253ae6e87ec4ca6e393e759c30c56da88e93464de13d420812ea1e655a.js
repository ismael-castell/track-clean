define(['jquery','Magento_Customer/js/model/authentication-popup','Magento_Customer/js/customer-data','Magento_Ui/js/modal/alert','Magento_Ui/js/modal/confirm','underscore','jquery-ui-modules/widget','mage/decorate','mage/collapsible','mage/cookies','jquery-ui-modules/effect-fade'],function($,authenticationPopup,customerData,alert,confirm,_){'use strict';$.widget('mage.sidebar',{options:{isRecursive:true,minicart:{maxItemsVisible:3}},scrollHeight:0,shoppingCartUrl:window.checkout.shoppingCartUrl,_create:function(){this._initContent();},update:function(){},_initContent:function(){var self=this,events={};this.element.decorate('list',this.options.isRecursive);events['click '+this.options.button.close]=function(){};events['click '+this.options.button.checkout]=$.proxy(function(){},this);events['click '+this.options.button.remove]=function(){};events['keyup '+this.options.item.qty]=function(event){self._showItemButton($(event.target));};events['change '+this.options.item.qty]=function(event){self._showItemButton($(event.target));};events['click '+this.options.item.button]=function(){};events['focusout '+this.options.item.qty]=function(event){self._validateQty($(event.currentTarget));};this._on(this.element,events);this._calcHeight();},_showItemButton:function(){},_isValidQty:function(){},_validateQty:function(){},_hideItemButton:function(){},_updateItemQty:function(){},_updateItemQtyAfter:function(){},_removeItem:function(){},_removeItemAfter:function(){},_getProductById:function(){},_ajax:function(){},_calcHeight:function(){}