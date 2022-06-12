(function($){

var gf_placeholder = function() {

	$('.gform_wrapper .gf-add-placeholder')
		.find('input, textarea').filter(function(){})
		.each(function(){});

	var support = (!('placeholder' in document.createElement('input'))); 
	if ( support && jquery_placeholder_url )
		$.ajax({
			cache: true,
			dataType: 'script',
			url: jquery_placeholder_url,
			success: function() {
				$('input[placeholder], textarea[placeholder]').placeholder({
					blankSubmit: true
				});
			},
			type: 'get'
		});

    $('.gform_wrapper .gf-add-placeholder').find('select').filter(function(i){
        var $theSelect = $(this);

       $theSelect.each(function(){
           var elementID = this.id;
           var inIdFormat = "#" + elementID;
           var theLabel = $('label[for=' + elementID + ']').text();
           console.log('The id for this field is '+ elementID + ' the label for this field is ' + theLabel);
           $(inIdFormat).prepend("<option class='placeholder' selected disabled value=" + "'" + theLabel + "'" + ">" + theLabel + "</option>" );
            $('label[for=' + elementID + ']').hide();

       })
    });







};

$(document).ready(function(){}