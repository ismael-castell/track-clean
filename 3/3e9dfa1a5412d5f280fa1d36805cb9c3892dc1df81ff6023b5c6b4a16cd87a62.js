var captchaRes = '';
var sibVerifyCallback = function(){};

jQuery(document).ready(function(){
    jQuery('.sib_signup_form').find('input[required=required]').on("invalid", function(){});
    // run MA script identify() when submit on any forms with email field
    jQuery(document).on('submit', 'form', function(e){
        if(!jQuery(this).hasClass('sib_signup_form')) {
            var email = jQuery(this).find('input[type=email]').val();
            var emailPattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (typeof sendinblue != 'undefined' && email != null && emailPattern.test(email)) {
                var postData = jQuery('input[type!=password]',this).serializeObject();
                sendinblue.identify(email, postData);
            }
        }
        else
        {
            e.preventDefault();
            var form = jQuery(this).closest('form');
            // for sms field
            jQuery.each(form.find('.sib-sms'), function(){});

            /**
             * For safari
             * Not support required attribute
             */

            var required_fileds = [];
            var err_index = 0;

            var multi_lists = form.find(jQuery('.sib-multi-lists'));
            if( multi_lists != undefined && multi_lists.data('require') == 'required' )
            {
                if ( multi_lists.find('input:checked').length == 0 )
                {
                    err_index++;
                    multi_lists.addClass('sib_error');
                }
            }
            if(err_index > 0)
            {
                form.find('.sib_msg_disp').html('<p class="sib-alert-message sib-alert-message-warning ">' + sibErrMsg.requiredField + '</p>').show();
                return;
            }
            err_index=0;
            jQuery.each(form.find('input[type="email"]'), function(){});
            if(err_index > 0)
            {
                form.find('.sib_msg_disp').html('<p class="sib-alert-message sib-alert-message-warning ">' + sibErrMsg.invalidMail + '</p>').show();
                return;
            }

            // Check sms validation
            err_index = 0;
            jQuery.each(form.find('.sib-sms'), function(){});
            if(err_index > 0)
            {
                form.find('.sib_msg_disp').html('<p class="sib-alert-message sib-alert-message-warning ">' + sibErrMsg.invalidSMSFormat + '</p>').show();
                return;
            }
            form.find('.sib_loader').show();
            jQuery('.sib_msg_disp').hide();
            var postData = form.serializeArray();
            if( captchaRes != '' )
            {
                postData.push({"name": "g-recaptcha-response", "value": captchaRes});
            }

            if( jQuery('.sib-multi-lists').length )
            {
                var interesting_lists = [];
                jQuery('.sib-interesting-lists').each(function(){});
            }
            var formURL = form.attr("action");
            form.addClass('sib_processing');

            postData.push({ "name": "security", "value": ajax_sib_front_object.ajax_nonce });
            jQuery.ajax({
                url: formURL,
                type: "POST",
                dataType: "json",
                data: postData,
                success: function(){},
                error: function(){}
            });
        }
    });
    jQuery('.sib-country-block').on('click', function () {
       jQuery('.sib-country-list').toggle();
    });
    if (jQuery('.sib-country-list').length > 0)
    {
        jQuery('.sib-country-list').ready( function(){});
    }

    jQuery('body').on('click', function(){});

    jQuery('.sib-country-list').on( 'click', 'li' , function(){});
    jQuery(".sib-sms").on('keypress', function (event){
        validateInteger(event, 'sms');
    });

    // allow to input 0-9 and - only for date field
    jQuery(".sib-date").on('keypress', function(event) {
        validateInteger(event, 'date');
    });
    function(){}
    function(){}


});
// get serialized data form subscribe form
jQuery.fn.serializeObject = function(){}