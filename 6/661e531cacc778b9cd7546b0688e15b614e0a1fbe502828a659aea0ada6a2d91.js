jQuery(document).ready(function(){jQuery(".um-profile.um-viewing .um-profile-body .um-row").each(function(){}),jQuery(".um-profile.um-viewing .um-profile-body").length&&0==jQuery(".um-profile.um-viewing .um-profile-body").find(".um-field").length&&(jQuery(".um-profile.um-viewing .um-profile-body").find(".um-row-heading,.um-row").remove(),jQuery(".um-profile-note").show()),jQuery(document.body).on("click",".um-profile-save",function(){}),jQuery(document.body).on("click",".um-profile-edit-a",function(e){jQuery(this).addClass("active")}),jQuery(document.body).on("click",".um-cover a.um-cover-add, .um-photo a",function(e){e.preventDefault()}),jQuery(document.body).on("click",".um-photo-modal",function(){}),jQuery(document.body).on("click",".um-reset-profile-photo",function(e){return jQuery(".um-profile-photo-img img").attr("src",jQuery(this).attr("data-default_src")),user_id=jQuery(this).attr("data-user_id"),metakey="profile_photo",UM.dropdown.hideAll(),jQuery.ajax({url:wp.ajax.settings.url,type:"post",data:{action:"um_delete_profile_photo",metakey:metakey,user_id:user_id,nonce:um_scripts.nonce}}),jQuery(this).parents("li").hide(),!1}),jQuery(document.body).on("click",".um-reset-cover-photo",function(e){var r=jQuery(this);return jQuery(".um-cover-overlay").hide(),jQuery(".um-cover-e").html('<a href="javascript:void(0);" class="um-cover-add" style="height: 370px;"><span class="um-cover-add-i"><i class="um-icon-plus um-tip-n" original-title="Upload a cover photo"></i></span></a>'),um_responsive(),user_id=jQuery(this).attr("data-user_id"),metakey="cover_photo",jQuery.ajax({url:wp.ajax.settings.url,type:"post",data:{action:"um_delete_cover_photo",metakey:metakey,user_id:user_id,nonce:um_scripts.nonce},success:function(e){r.hide()}}),UM.dropdown.hideAll(),!1}),jQuery(document.body).on("change, keyup",'textarea[id="um-meta-bio"]',function(){}),jQuery('textarea[id="um-meta-bio"]').trigger("change"),jQuery(".um-profile-edit a.um_delete-item").on("click",function(){}