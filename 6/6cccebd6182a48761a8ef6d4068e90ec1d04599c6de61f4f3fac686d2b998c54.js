var __gf_timeout_handle;function(){}function gf_check_field_rule(e,t,i,a){var r=gf_get_field_logic(e,t);if(!r)return"show";t=gf_get_field_action(e,r.section);return t="hide"!=t?gf_get_field_action(e,r.field):t}function gf_get_field_logic(e,t){var i=rgars(window,"gf_form_conditional_logic/"+e);if(!i)return!1;e=rgars(i,"logic/"+t);if(e)return e;var a,r=rgar(i,"dependents");if(!r)return!1;for(a in r)if(-1!==r[a].indexOf(t))return rgars(i,"logic/"+a);return!1}function gf_apply_field_rule(e,t,i,a){gf_do_field_action(e,gf_check_field_rule(e,t,i,a),t,i,a);a=window.gf_form_conditional_logic[e].logic[t];a.nextButton&&gf_do_next_button_action(e,gf_get_field_action(e,a.nextButton),t,i)}function gf_get_field_action(e,t){if(!t)return"show";for(var i=0,a=0;a<t.rules.length;a++)gf_is_match(e,gform.applyFilters("gform_rule_pre_evaluation",jQuery.extend({},t.rules[a]),e,t))&&i++;return"all"==t.logicType&&i==t.rules.length||"any"==t.logicType&&0<i?t.actionType:"show"==t.actionType?"hide":"show"}function gf_is_match(e,t){var i=jQuery,a=t.fieldId,r=gformExtractFieldId(a),a=gformExtractInputIndex(a),a=i(!1!==a?"#input_{0}_{1}_{2}".format(e,r,a):'input[id="input_{0}_{1}"], input[id^="input_{0}_{1}_"], input[id^="choice_{0}_{1}_"], select#input_{0}_{1}, textarea#input_{0}_{1}'.format(e,r)),r=-1!==i.inArray(a.attr("type"),["checkbox","radio"])?gf_is_match_checkable(a,t,e,r):gf_is_match_default(a.eq(0),t,e,r);return gform.applyFilters("gform_is_value_match",r,e,t)}function gf_is_match_checkable(e,r,n,o){if(""===r.value)return"is"===r.operator?gf_is_checkable_empty(e):!gf_is_checkable_empty(e);var _=!1;return e.each(function(){}),_}function gf_is_checkable_empty(e){var t=!0;return e.each(function(){}),t}function gf_is_match_default(e,t,i,a){for(var e=e.val(),r=e instanceof Array?e:[e],n=0,o=Math.max(r.length,1),_=0;_<o;_++){var l=!r[_]||0<=r[_].indexOf("|"),d=gf_get_value(r[_]),s=gf_get_field_number_format(t.fieldId,i,"value");gf_matches_operation(d=s&&!l?gf_format_number(d,s):d,t.value,t.operator)&&n++}return"isnot"==t.operator?n==o:0<n}function(){}function gf_try_convert_float(e){var t="decimal_dot";if(gformIsNumeric(e,t))return gformCleanNumber(e,"","",".");return e}function(){}function(){}function(){}function(){}function gf_do_action(e,t,i,a,r,n,o){var _,l=jQuery(t);l.data("gf-disabled-assessed")||(l.find(":input:disabled").addClass("gf-default-disabled"),l.data("gf-disabled-assessed",!0)),"show"==e?(l.find("select").each(function(){var e=jQuery(this);e.attr("tabindex",e.data("tabindex"))}),i&&!r?0<l.length?(l.find(":input:hidden:not(.gf-default-disabled)").removeAttr("disabled"),(l.is('input[type="submit"]')||l.hasClass("gform_next_button"))&&(l.removeAttr("disabled").css("display",""),"1"==gf_legacy.is_legacy&&l.removeClass("screen-reader-text")),l.slideDown(n)):n&&n():(""!=(_=l.data("gf_display"))&&"none"!=_||(_="1"===gf_legacy.is_legacy?"list-item":"block"),l.find(":input:hidden:not(.gf-default-disabled)").removeAttr("disabled"),l.is('input[type="submit"]')||l.hasClass("gform_next_button")?(l.removeAttr("disabled").css("display",""),"1"==gf_legacy.is_legacy&&l.removeClass("screen-reader-text")):l.css("display",_),n&&n())):(0<(_=l.children().first()).length&&gform.applyFilters("gform_reset_pre_conditional_logic_field_action",!0,o,t,a,r)&&!gformIsHidden(_)&&gf_reset_to_default(t,a),l.find("select").each(function(){}),l.data("gf_display")||l.data("gf_display",l.css("display")),i&&!r?l.is('input[type="submit"]')||l.hasClass("gform_next_button")?(l.attr("disabled","disabled").hide(),"1"===gf_legacy.is_legacy&&l.addClass("screen-reader-text")):0<l.length&&l.is(":visible")?l.slideUp(n):n&&n():(l.is('input[type="submit"]')||l.hasClass("gform_next_button")?(l.attr("disabled","disabled").hide(),"1"===gf_legacy.is_legacy&&l.addClass("screen-reader-text")):l.css("display","none"),l.find(":input:hidden:not(.gf-default-disabled)").attr("disabled","disabled"),n&&n()))}function gf_reset_to_default(e,a){var t=jQuery(e).find(".gfield_date_month input, .gfield_date_day input, .gfield_date_year input, .gfield_date_dropdown_month select, .gfield_date_dropdown_day select, .gfield_date_dropdown_year select");if(0<t.length)t.each(function(){var e,t=jQuery(this);val=a?(e="d",t.parents().hasClass("gfield_date_month")||t.parents().hasClass("gfield_date_dropdown_month")?e="m":(t.parents().hasClass("gfield_date_year")||t.parents().hasClass("gfield_date_dropdown_year"))&&(e="y"),a[e]):"","SELECT"==t.prop("tagName")&&""!=val&&(val=parseInt(val,10)),t.val()!=val?t.val(val).trigger("change"):t.val(val)});else{var i=jQuery(e).find('select, input[type="text"]:not([id*="_shim"]), input[type="number"], input[type="hidden"], input[type="email"], input[type="tel"], input[type="url"], textarea'),r=0;if(a&&0<i.parents(".ginput_list").length&&i.length<a.length)for(;i.length<a.length;)gformAddListItem(i.eq(0),0),i=jQuery(e).find('select, input[type="text"]:not([id*="_shim"]), input[type="number"], textarea');i.each(function(){var e,t="",i=jQuery(this);i.is('[type="hidden"]')&&!gf_is_hidden_pricing_input(i)||("gf_other_choice"==i.prev("input").attr("value")?t=i.attr("value"):jQuery.isArray(a)&&!i.is("select[multiple]")?t=a[r]:jQuery.isPlainObject(a)?(!(t=a[i.attr("name")])&&i.attr("id")&&(e=i.attr("id").split("_").slice(2).join("."),t=a[e]),!t&&i.attr("name")&&(e=i.attr("name").split("_")[1],t=a[e])):a&&(t=a),i.is("select:not([multiple])")&&!t&&(t=i.find("option").not(":disabled").eq(0).val()),i.val()!=t?(i.val(t).trigger("change"),i.is("select")&&i.next().hasClass("chosen-container")&&i.trigger("chosen:updated"),gf_is_hidden_pricing_input(i)&&(e=gf_get_ids_by_html_id(i.parents(".gfield").attr("id")),jQuery("#input_"+e[0]+"_"+e[1]).text(gformFormatMoney(i.val())),i.val(gformFormatMoney(i.val())))):i.val(t),r++)}),jQuery(e).find('input[type="radio"], input[type="checkbox"]:not(".copy_values_activated")').each(function(){}