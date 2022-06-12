/**
 * Responsive Tabs Front JS (minified)
 */

;(function($){$(document).ready(function(){function setupTabs(){$('.rtbs').each(function(){var rtbs_def_colors={backgroundColor:''}
rtbs_def_colors.backgroundColor=$(this).find('.rtbs_inactive_tab_background').html();var color=$(this).find('.rtbs_color').html();var breakpoint=$(this).find('.rtbs_breakpoint').html();var rtbssize=$(this).width();if(rtbssize>breakpoint){$(this).find('.rtbs_menu a').not('.active').css(rtbs_def_colors);$(this).removeClass('rtbs_full');$(this).find(".mobile_toggle").hide();$(this).find('.rtbs_menu li:not(".mobile_toggle")').show();$(this).find('.rtbs_menu li:not(".mobile_toggle")').css("display","inline-block")}
else{$(this).addClass('rtbs_full');$(this).find('.rtbs_menu li:not(".mobile_toggle")').css("display","block");$(this).find(".mobile_toggle").css('background',color);$(this).find('.rtbs_menu li:not(".mobile_toggle")').hide()}});$('.rtbs').each(function(){})}
$("body").on('click','.dmb_show_preview_tab_set',function(){setupTabs()});setupTabs();var resizeTimerTwo;$(window).resize(function(){clearTimeout(resizeTimerTwo);resizeTimerTwo=setTimeout(function(){$('.rtbs').each(function(){}