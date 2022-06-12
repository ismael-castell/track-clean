/*
 * @version   $Id: sidemenu.js 18923 2014-02-21 03:03:39Z djamil $
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - 2017 RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */
((function(){var b=(function(){})(),a=navigator.userAgent.match(/iPad/i)!=null;var c=this.SideMenu=new Class({initialize:function(){this.build();this.mediaQuery(RokMediaQueries.getQuery());
this.attachEvents();this.mediaQuery(RokMediaQueries.getQuery());},build:function(){if(this.toggler){return this.toggler;}this.toggler=new Element("div.gf-menu-toggle").inject(document.body);
this.container=document.getElement(".gf-menu-device-container");this.wrapper=new Element("div.gf-menu-device-container-wrapper").inject(this.container);
this.container=new Element("div.gf-menu-device-wrapper-sidemenu").wraps(this.container);this.menu=document.getElement(".gf-menu");this.originalPosition=this.menu.getParent();
this.open=false;(3).times(function(){},this);this.container.inject(document.body);return this.toggler;
},attachEvents:function(){var e=this.toggler.retrieve("roknavmenu:click",function(f){f.preventDefault().stopPropagation();this.toggle.call(this,f,this.toggler);
}.bind(this));this.toggler.addEvent("click",e);this.touchEvents={click:function(f){f.preventDefault();},touchstart:function(){this.store("touched",true);
},touchcancel:function(){}