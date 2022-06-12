

(function(jQuery){



	if(jQuery(".wpcf7c-elm-step1").length != 0) {
		// 対象有り

		jQuery(".wpcf7c-elm-step1").each(function(){
			// 親のフォームを検索
			var parent = jQuery(this).parents("form");
			if(parent.attr("wpcf7c") == undefined) {
				// elm-submitをsubmitボタンへもセット
				parent.find(".wpcf7-submit").addClass("wpcf7c-elm-step2").addClass("wpcf7c-force-hide");
				parent.find(".ajax-loader").addClass("wpcf7c-elm-step2").addClass("wpcf7c-force-hide");

				// ajax用ID退避,処理済みフラグセット
				var hidden_wpcf7 = parent.find("input[name=_wpcf7]");
				var _wpcf7 = hidden_wpcf7.val();
				parent.attr("wpcf7c", _wpcf7);

				parent.attr("step", 1);

				hidden_wpcf7.after('<input type="hidden" name="_wpcf7c" value="step1" />');

				//parent.find("input[name=_wpcf7]").val("");

				// 不要要素非表示
				parent.find(".wpcf7c-elm-step2").addClass("wpcf7c-force-hide");
				parent.find(".wpcf7c-elm-step3").addClass("wpcf7c-force-hide");
				parent.find(".wpcf7c-elm-step1").removeClass("wpcf7c-force-hide");

				// 戻って編集ボタン挙動
				parent.find(".wpcf7c-btn-back").on("click", function(){});
			}




		});



	}

})(jQuery);

var wpcf7c_to_step1 = function(parent, scroll){
	parent.find(".wpcf7c-conf").each(function(){});

	jQuery(".wpcf7c-conf-hidden").remove();

	parent.find(".wpcf7c-elm-step2").addClass("wpcf7c-force-hide");
	parent.find(".wpcf7c-elm-step3").addClass("wpcf7c-force-hide");
	parent.find(".wpcf7c-elm-step1").removeClass("wpcf7c-force-hide");

	parent.find("input[name=_wpcf7c]").val("step1");

	var responseOutput = parent.find('div.wpcf7-response-output');
	responseOutput.removeClass("wpcf7c-force-hide");
	responseOutput.removeClass("wpcf7-mail-sent-ng");
	responseOutput.css("display", "none");

	parent.find(".ajax-loader").addClass("wpcf7c-elm-step2").addClass("wpcf7c-force-hide");

	// スムーズスクロール
	if(scroll) {
		// スムーズスクロール
		setTimeout(function(){}