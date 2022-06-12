function setCookieSW(e,t){var i=new Date;i.setTime(i.getTime()+31536e6);var r="expires="+i.toGMTString();if("string"!=typeof t)var n=JSON.stringify(t);else n=t;document.cookie=e+"="+n+";"+r+";path=/"}function(){}if("undefined"==typeof jQuery){console.log("jquery not defined, loading it");var script=document.createElement("script");script.type="text/javascript",script.onload=SmartWishlistScripts,script.src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js",document.getElementsByTagName("head")[0].appendChild(script)}else SmartWishlistScripts();var SmartWishlistMain;

function SmartWishlistScripts()
{
	
//tooltip
;(function(){})(jQuery,window,document);
	

(function($) {
	
var hostname=$(location).attr('hostname');
app_url="https://cloud.smartwishlist.webmarked.net/";
appdata_url="https://front.smartwishlist.webmarked.net/";
appsave_url="https://cloud.smartwishlist.webmarked.net/";
css_url="https://assets.smartwishlist.webmarked.net/static/v6/css/smartwishlist.min.css?20200409";
$("<link/>",{rel:"stylesheet",type:"text/css",href:css_url}).appendTo("head"),$("<link/>",{rel:"stylesheet",type:"text/css",href:"//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"}).appendTo("head");

console.log("SW: Smart Wishlist loaded successfully.");

customer_id=$("input[name='sw_customer_id']").val();

if((typeof __st)!=="undefined")
{
	if(customer_id==undefined) customer_id=__st.cid;
	if(customer_id==undefined) customer_id=0;
	store_id=__st.a;
	if(store_id==undefined) store_id=0;
}
else 
{
	store_id=0;customer_id=0;
}

SWGetExpressWishlistId=function(){return getCookieSW("wishlist_id");};
SWGetCustomerWishlistId=function(){return customer_id;};

var savewishlist= function (product_id,variant_id,wishlist_id,action,variant) {
	$.ajax({
	url: appsave_url+"v6/savewishlist.php/",
	data: {product_id: product_id,variant_id:variant_id,wishlist_id:wishlist_id,customer_id:customer_id,action:action,hostname:hostname,variant:variant,store_id:store_id},
	dataType: 'jsonp',
	jsonp: "callback",   
	})
	.done(function(data) {
	});				
	
return 0;
} 

var decodeEntities=function(){}


var getParameterByName=	function(paramatername) {
			paramatername = paramatername.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + paramatername + "=([^&#]*)");
				results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}		

var objectExists=function(items,product_variant)
{
	for (var i=0;i<items.length;i++)
	{
		if((items[i][0]==product_variant[0])&&(items[i][1]==product_variant[1]))
		return i;
	}
	return -1;
}

enable_accounts=0;

var initalWishlistSetupAccounts;
SmartWishlistMain=function()
{
		enable_variants=1;

		extra_css_product = $('<textarea />').html(extra_css_product).text();
		
		//unbind click for all wishlist buttons before we proceed
		$( ".smartwishlist" ).off( "click");
		
		if(swpbutton_type>1) extra_css_product+="#sw_wishlist_label{margin-left:10px} div#smartwishlist{margin:20px 0;} span#smartwishlist{margin-left:10px;}  #bookmarkit.swpbutton2{padding:0;height:50px;line-height:50px}";
		
		//add button
		
		swfl_text="My Wishlist";
		swfl_html=decodeEntities(swfl_html);

		
		if(display_fixed_link=="1") $("body").append('<div id="smartwishlistfixedlink"><a class="smartwishlistlink" href="'+wishlist_url+'" id="smartwishlist_desktop_link" title="'+swfl_text+'" aria-label="'+swfl_text+'">'+swfl_html+'</a></div>');
		
		

		
		topbadge_font="sans-serif";

		
		
		$(".smartwishlistlink").css("background-color",swfl_background_color);
		$(".smartwishlistlink").css("color",swfl_text_color);		
		$("#smartwishlistfixedlink").css(swfl_margin_desktop,swfl_margin_value_desktop);
		
		if(swfl_position_desktop=="left") $("#smartwishlistfixedlink").css("left","0");
		else if(swfl_position_desktop=="right") $("#smartwishlistfixedlink").css("right","0");
		
		if((swfl_position_desktop=="left")&&(swfl_orientation_desktop=="vertical"))
		{
		 $("#smartwishlistfixedlink").css("transform","rotate(-90deg)");
		 $("#smartwishlistfixedlink").css("transform-origin","left top 0");
		}
		else if((swfl_position_desktop=="right")&&(swfl_orientation_desktop=="vertical"))
		{
		 $("#smartwishlistfixedlink").css("transform","rotate(90deg)");
		 $("#smartwishlistfixedlink").css("transform-origin","right top 0");
		}
		
		$(".topbadge").css("font-family",topbadge_font);
	
	
	
		wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);
		wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);
		
		tagproductid=$("#smartwishlist").data("product");
		if(tagproductid!=undefined) product_id=tagproductid;
		else
		{
			if((typeof __st)!=="undefined")	 product_id=__st.rid; else product_id=0;
		}	 
		
		
		urlvariantid=getParameterByName("variant");
		tagvariantid=$("#smartwishlist").data("variant");
		if((urlvariantid!=undefined)&&(urlvariantid!="")) 	variant_id=parseInt(urlvariantid);
		else if(tagvariantid!==undefined) variant_id=tagvariantid;
		else variant_id=0;
		
		var product_variant=[product_id,variant_id,1];
		
		if(use_extra_icon==1)
		{
			$("#smartwishlist").html('<div role="button" tabindex="0" id="bookmarkit" status="unbookmarked" class="unbookmarked sw_tooltip tooltip" title="'+wishlist_add_tooltip+'" aria-label="'+swpbutton_add_text+'"> <i id="wishlist_icon" class="'+extra_icon_class_name+'"></i><span id="bookmarkcount" class="wishlistcounter"></span></div><span id="wishlist_message"></span>');
			$(".smartwishlist").html('<span class="'+extra_icon_class_name+'"></span>');
		}
		else
		{
			$("#smartwishlist").html('<div role="button" tabindex="0" id="bookmarkit" status="unbookmarked" class="unbookmarked sw_tooltip tooltip" title="'+wishlist_add_tooltip+'" aria-label="'+swpbutton_add_text+'"> <i id="wishlist_icon" class="fa"></i><span id="bookmarkcount" class="wishlistcounter"></span></div><span id="wishlist_message"></span>');
			$("#wishlist_icon").addClass("fa-"+wishlist_icon_name);
			$(".smartwishlist").html('<span class="fa fa-'+wishlist_icon_name+'"></span>');
			
		}
		
		
		
		
		//initialize label        
		if(swpbutton_type=="2")
		{ 	
			$("#bookmarkit").addClass("swpbutton2").append('<span id="sw_wishlist_label"></span>');
			$("#sw_wishlist_label").html(swpbutton_add_text);
			
			$("#sw_wishlist_label").css("font-size", swpbutton_label_fontsize);
			$("#wishlist_icon").css("font-size", swpbutton_icon_fontsize);
			
			$("#bookmarkit").css("font-size", "inherit");//important
			
		}
		
		else if(swpbutton_type=="3")
		{
			
			$("#bookmarkit").addClass("swpbutton3").append('<span id="sw_wishlist_label"></span>');			
			$("#sw_wishlist_label").html(swpbutton_add_text);			
			
			$("#bookmarkit").css("font-size", "inherit");//important
			$("#sw_wishlist_label").css("font-size", swpbutton_label_fontsize);
			$("#wishlist_icon").css("font-size", swpbutton_icon_fontsize);
			
			$("#bookmarkit").css("height", swpbutton3_height);
			$("#bookmarkit").css("line-height", swpbutton3_height);
			$("#bookmarkit").css("border-radius", swpbutton3_radius);		
			
			extra_css_product+="#bookmarkit.swpbutton3{width:"+swpbutton3_width_desktop+" !important}";
			
			if(optimize_swpbutton_mobile==1) extra_css_product+=" @media (max-width:"+mobile_max_width+"){ #bookmarkit.swpbutton3{width:"+swpbutton3_width_mobile+" !important} #smartwishlist{text-align:center} span#smartwishlist{display:block!important;margin:20px 0}}";
			
			extra_css_product+=" #bookmarkit.swpbutton3{color: "+swpbutton3_color+" !important}";
			$("#bookmarkit").css("background-color", swpbutton3_background_color);
			
			
			$("div#smartwishlist").css("height",swpbutton3_height).css("display","block");
			
		}
		
		$("head").append("<style>/*CSS Dynamically added by Smart Wishlist*/"+extra_css_product+"</style>");   
		
	
		if(display_tooltip==1)	$(".smartwishlist").addClass("sw_tooltip").addClass("tooltip");
		$(".smartwishlist").attr("title",wishlist_add_tooltip);
		$(".smartwishlist").attr("aria-label",swpbutton_add_text).attr("role","button").attr("tabindex","0");
		
		 $("#bookmarkit, .smartwishlist")
        	.mouseenter(function(){})
        	.mouseleave(function() {
        		var title = $(this).attr("tmp_title");
        		$(this).attr("title", title);
        	})
        	.click(function() {	
        		var title = $(this).attr("tmp_title");
        		$(this).attr("title", title);
        	//});
        });	

         
		//initialize topbadge but hide it
		
		
		if(display_topbadge==1)
		{
			
			$('a[href$="'+wishlist_url+'"]').each(function(index) {
				var wishlist_link_text=$(this).html();
				if(wishlist_link_text.indexOf("topbadge")===-1) wishlist_link_text+='<span class="topbadge"></span>';
				$(this).html(wishlist_link_text);
				
				});
					
			$(".topbadge").css("color",topbadge_color);
			$(".topbadge").css("background-color",topbadge_background_color);
			if(topbadge_padding!="") $(".topbadge").css("padding",topbadge_padding);
			$(".topbadge").hide();
		}
		
	

		if(display_item_count==1) $("#bookmarkcount").show(); else $("#bookmarkcount").hide();
		

		var bookmarkeditems=getCookieSW('bookmarkeditems'); 
		
		//drop random wishlist id if not present
		var wishlist_id=getCookieSW('wishlist_id');
		//console.log("SW: Express Wishlist Id= "+wishlist_id);
		if(wishlist_id==undefined)
		{
			if((typeof __st)!=="undefined")	wishlist_id=__st.a+(Math.random().toString(36)).slice(2, 22);
			else wishlist_id=(Math.random().toString(36)).slice(2, 22)+(Math.random().toString()).slice(2, 22);
			setCookieSW('wishlist_id',wishlist_id,{ expires: 365 });
		}
		
		if(customer_id==0)
		{
							
		if(bookmarkeditems==undefined) 
		{
				$("#bookmarkcount").html(""); 
				$("#bookmarkit").attr("title",wishlist_add_tooltip);
				$("#sw_wishlist_label").html(swpbutton_add_text);
				setCookieSW('bookmarkeditems',JSON.stringify({"items":[]}),{ expires: 365 });
				$(".smartwishlist").removeClass("bookmarked").addClass("unbookmarked");
			

		}
		else
		{
			var bookmarkeditems_json=JSON.parse(bookmarkeditems);
			
			//upgrade
			
			if(bookmarkeditems!="undefined")
			{
				if(bookmarkeditems_json.items.length>0)
					{
						if(typeof bookmarkeditems_json.items[0]!="object")
						{
							$.ajax({url:app_url+"/upgradewishlistdata.php",
							data: {bookmarkeditems:bookmarkeditems,shop:hostname},
							dataType: 'jsonp',
							jsonp: "callback",   
							success:function(data)
							{
								setCookieSW('bookmarkeditems',JSON.stringify({"items":data}),{ expires: 365 });
								bookmarkeditems=getCookieSW('bookmarkeditems'); 
								bookmarkeditems_json=JSON.parse(bookmarkeditems);
								alert("Your Wishlist has been upgraded to use multiple Variants. Please reload the Page to continue");

							},
							error: function(data){},
							complete: function(xhr,status){}
							});				
						}
						
					}
			}		
			
			
			if(bookmarkeditems_json.items.length>0) 
			{
				$("#bookmarkcount").html(bookmarkeditems_json.items.length);
				$(".topbadge").show();
				$(".topbadge").html(bookmarkeditems_json.items.length);
			}	
			
			if(objectExists(bookmarkeditems_json.items,product_variant)>-1) 
			{
				$("#bookmarkit").attr("status","bookmarked");
				$("#bookmarkit").removeClass("unbookmarked").addClass("bookmarked sw_tooltip tooltip");
				$("#bookmarkit").attr("title",wishlist_remove_tooltip);
				$("#sw_wishlist_label").html(swpbutton_remove_text);
				$("#bookmarkit").attr("aria-label",swpbutton_remove_text);
				if(use_extra_icon==1)
				$("#wishlist_icon").removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
				else 
				$("#wishlist_icon").removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
				
			}				
				
				
			var updateWishlist=function()
			{
				urlvariantid=getParameterByName("variant");
				tagvariantid=$("#smartwishlist").data("variant");
				
				if((urlvariantid!=undefined)&&(urlvariantid!="")) 
				{
					variant_id=parseInt(urlvariantid);
				}
				else if(tagvariantid!=undefined) variant_id=tagvariantid;		
				else variant_id=0;
				
				product_variant=[product_id,variant_id,1];
				
				if(objectExists(bookmarkeditems_json.items,product_variant)>-1) 
				{
					$("#bookmarkit").attr("status","bookmarked");
					$("#bookmarkit").removeClass("unbookmarked").addClass("bookmarked sw_tooltip tooltip");
					$("#bookmarkit").attr("title",wishlist_remove_tooltip);
					$("#sw_wishlist_label").html(swpbutton_remove_text);
					$("#bookmarkit").attr("aria-label",swpbutton_remove_text);
					
					wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);
					if(display_tooltip_productpage==1) $("#bookmarkit").tooltipster('content', wishlist_remove_tooltip);
					
					if(use_extra_icon==1) 
					$("#wishlist_icon").removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
					else 
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
					
				}
				else
				{
					$("#bookmarkit").attr("status","unbookmarked");
					$("#bookmarkit").removeClass("bookmarked").addClass("unbookmarked sw_tooltip tooltip");
					$("#bookmarkit").attr("title",wishlist_add_tooltip);
					$("#sw_wishlist_label").html(swpbutton_add_text);
					$("#bookmarkit").attr("aria-label",swpbutton_add_text);
					
					wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);
					if(display_tooltip_productpage==1) $("#bookmarkit").tooltipster('content', wishlist_add_tooltip);
					
					if(use_extra_icon==1) 
					$("#wishlist_icon").removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
					else 
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
					
				}									
				
			};	
			
			 var oldLocation = location.href;
			 setInterval(function() {
				  if(location.href != oldLocation) {
					   updateWishlist();
					   oldLocation = location.href;
				  }
			  }, 1000); // check every second	
			
			
							
			// initial setup on category/collection pages
			$(".smartwishlist").each(function(index)
			{
				var product_variant_local=[$(this).data("product"),$(this).data("variant"),0];
				if(objectExists(bookmarkeditems_json.items,product_variant_local)>-1) 
				{
					$(this).removeClass("unbookmarked").addClass("bookmarked");
					$(this).attr("title",wishlist_remove_tooltip);
					$(this).attr("aria-label",swpbutton_remove_text);
					
					if(use_extra_icon==1) 
					{
						$(this).find('span').removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
					}
					else 
					{
						$(this).find('span').removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
					}
					
				}
				else
				{
					$(this).removeClass("bookmarked").addClass("unbookmarked");
					$(this).attr("title",wishlist_add_tooltip);
					$(this).attr("aria-label",swpbutton_add_text);
					
					
					if(use_extra_icon==1) 
					{
						$(this).find('span').removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
					}
					else 
					{
						$(this).find('span').removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
					}
				}
								
			
			});
		
			

		}
		/* end bookmarkeditems present */
	} /* end customer_id 0 */
	else /* customer_id > 0 */
	{
		if(bookmarkeditems==undefined) 		setCookieSW('bookmarkeditems',JSON.stringify({"items":[]}),{ expires: 365 });
		else
		{
			var bookmarkeditems_json=JSON.parse(bookmarkeditems);
			
			//upgrade wishlist format
			
			if(bookmarkeditems!="undefined")
			{
				if(bookmarkeditems_json.items.length>0)
					{
						if(typeof bookmarkeditems_json.items[0]!="object")
						{
							$.ajax({url:app_url+"/upgradewishlistdata.php",
							data: {bookmarkeditems:bookmarkeditems,shop:hostname},
							dataType: 'jsonp',
							jsonp: "callback",   
							success:function(data)
							{
								setCookieSW('bookmarkeditems',JSON.stringify({"items":data}),{ expires: 365 });
								bookmarkeditems=getCookieSW('bookmarkeditems'); 
								bookmarkeditems_json=JSON.parse(bookmarkeditems);
								alert("Your Wishlist has been upgraded to use multiple Variants. Please reload the Page to continue");

							},
							error: function(data){},
							complete: function(xhr,status){}
							});				
						}
						
					}
			}
		}			
			
			
			
				
				
			var updateWishlist=function()
			{
				urlvariantid=getParameterByName("variant");
				tagvariantid=$("#smartwishlist").data("variant");
				
				if((urlvariantid!=undefined)&&(urlvariantid!="")) 
				{
					variant_id=parseInt(urlvariantid);
				}
				else if(tagvariantid!=undefined) variant_id=tagvariantid;		
				else variant_id=0;
				
				product_variant=[product_id,variant_id,1];
				
				if(objectExists(saved_wishlist_items,product_variant)>-1) 
				{
					$("#bookmarkit").attr("status","bookmarked");
					$("#bookmarkit").removeClass("unbookmarked").addClass("bookmarked sw_tooltip tooltip");
					$("#bookmarkit").attr("title",wishlist_remove_tooltip);
					$("#sw_wishlist_label").html(swpbutton_remove_text);
					$("#bookmarkit").attr("aria-label",swpbutton_remove_text);
					
					wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);
					if(display_tooltip_productpage==1) $("#bookmarkit").tooltipster('content', wishlist_remove_tooltip);
					
					if(use_extra_icon==1)
					$("#wishlist_icon").removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
					else 
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
					
				}
				else
				{
					$("#bookmarkit").attr("status","unbookmarked");
					$("#bookmarkit").removeClass("bookmarked").addClass("unbookmarked sw_tooltip tooltip");
					$("#bookmarkit").attr("title",wishlist_add_tooltip);
					$("#sw_wishlist_label").html(swpbutton_add_text);
					$("#bookmarkit").attr("aria-label",swpbutton_add_text);
					
					wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);
					if(display_tooltip_productpage==1) $("#bookmarkit").tooltipster('content', wishlist_add_tooltip);
					
					if(use_extra_icon==1)
					$("#wishlist_icon").removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
					else 
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
					
				}									
				
			};	
			
			 var oldLocation = location.href;
			 setInterval(function() {
				  if(location.href != oldLocation) {
					   updateWishlist();
					   oldLocation = location.href;
				  }
			  }, 1000); // check every second	
			
			
			
			
			initalWishlistSetupAccounts=function()
			{
				//initial setup for product pages
				
				if(num_saved_wishlist_items>0) 
				{
					//display counters only if items are present in the wishlist
					$("#bookmarkcount").html(num_saved_wishlist_items);
					$(".topbadge").show();
					$(".topbadge").html(num_saved_wishlist_items);
				}
				else $(".topbadge").html(num_saved_wishlist_items).hide();
				
				if(objectExists(saved_wishlist_items,product_variant)>-1) 
				{
					$("#bookmarkit").attr("status","bookmarked");
					$("#bookmarkit").removeClass("unbookmarked").addClass("bookmarked sw_tooltip tooltip");
					$("#bookmarkit").attr("title",wishlist_remove_tooltip);
					$("#sw_wishlist_label").html(swpbutton_remove_text);
					$("#bookmarkit").attr("aria-label",swpbutton_remove_text);
					
					if(use_extra_icon==1)
					$("#wishlist_icon").removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
					else 
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
					
				}
				else
				{
					$("#bookmarkit").attr("status","unbookmarked");
					$("#bookmarkit").removeClass("bookmarked").addClass("unbookmarked sw_tooltip tooltip");
					$("#bookmarkit").attr("title",wishlist_add_tooltip);
					$("#sw_wishlist_label").html(swpbutton_add_text);
					$("#bookmarkit").attr("aria-label",swpbutton_add_text);
					
					if(use_extra_icon==1)
					$("#wishlist_icon").removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
					else 
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
				}	
							
								
				// initial setup on category/collection pages
				$(".smartwishlist").each(function(index)
				{
					var product_variant_local=[$(this).data("product"),$(this).data("variant"),0];
					if(objectExists(saved_wishlist_items,product_variant_local)>-1) 
					{
						$(this).removeClass("unbookmarked").addClass("bookmarked");
						$(this).attr("title",wishlist_remove_tooltip);
						$(this).attr("aria-label",swpbutton_remove_text);
						if(use_extra_icon==1) 
						{
							$(this).find('span').removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
						}
						else 
						{
							$(this).find('span').removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
						}
						
					}
					else
					{
						$(this).removeClass("bookmarked").addClass("unbookmarked");
						$(this).attr("title",wishlist_add_tooltip);
						$(this).attr("aria-label",swpbutton_add_text);
						
						if(use_extra_icon==1) 
						{
							$(this).find('span').removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
						}
						else 
						{
							$(this).find('span').removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
						}
					}
									
				
				});
			
		};
		
		initalWishlistSetupAccounts();
		
			

		//}
	}/* end customer_id > 0 */


//repeat the same for on click events
if(customer_id==0)
{
			
		$(".smartwishlist").click(function(event)
			{
				event.preventDefault();
				bookmarkeditems=getCookieSW('bookmarkeditems');

						if(force_login==1)
						{
							location.href="/account/login?redirect_url="+location.pathname;
						}
						else
						{
							if(bookmarkeditems!=undefined)
							{
								bookmarkeditems_json=JSON.parse(bookmarkeditems);
								var wishlistitemcount=bookmarkeditems_json.items.length;
								
								var product_variant_local=[$(this).data("product"),$(this).data("variant"),0];
								if(objectExists(bookmarkeditems_json.items,product_variant_local)>-1) 
								{
									
									bookmarkeditems_json.items.splice(objectExists(bookmarkeditems_json.items,product_variant_local),1);
									
									if(customer_id==0)
									setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });
								
									$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').removeClass("bookmarked").addClass("unbookmarked").attr("aria-label",swpbutton_add_text);
									
									if(use_extra_icon==1)								
									{
										$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
									}
									else
									{
										$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
									}
																		
									
									try
									{
										wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);
										if(display_tooltip==1) $('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').tooltipster('content', wishlist_add_tooltip);
									}
									catch (e) {console.log("SW MSG: Tooltipster's content method called on an uninitialized element");}
									
									wishlistitemcount--;
									savewishlist($(this).data("product"),$(this).data("variant"),wishlist_id,"remove",0);
									
									if (typeof SWCallbackExpressWishlistCollectionItemRemoved !== "undefined" && $.isFunction(SWCallbackExpressWishlistCollectionItemRemoved)) SWCallbackExpressWishlistCollectionItemRemoved();
																
								}
								else
								{
									bookmarkeditems_json.items.push(product_variant_local);
									
									if(customer_id==0)
									setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });							
									
									$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').removeClass("unbookmarked").addClass("bookmarked").attr("aria-label",swpbutton_remove_text);
									
									if(use_extra_icon==1)								
									{
										$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
									}
									else
									{
										$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
									}
									
									try
									{
										wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);
										if(display_tooltip==1) $('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').tooltipster('content', wishlist_remove_tooltip);
									}
									catch (e) {console.log("SW MSG: Tooltipster's content method called on an uninitialized element");}
									
									wishlistitemcount++;
									savewishlist($(this).data("product"),$(this).data("variant"),wishlist_id,"add",0);
									
									if (typeof SWCallbackExpressWishlistCollectionItemAdded !== "undefined" && $.isFunction(SWCallbackExpressWishlistCollectionItemAdded)) SWCallbackExpressWishlistCollectionItemAdded();
								}
								
								
								if(wishlistitemcount>0)
								{
									$(".topbadge").show();
									$(".topbadge").html(wishlistitemcount);		
								}
								else
								{
									$(".topbadge").html(wishlistitemcount).hide();
								}
								
								
							} 	
							bookmarkeditems=getCookieSW('bookmarkeditems');
						}
						 return false;				
				
			});		

		$("#bookmarkit").click(function()
		{
			if(force_login==1)
			{
				location.href="/account/login?redirect_url="+location.pathname;
			}
			else
			{	
				
				bookmarkeditems=getCookieSW('bookmarkeditems');
				bookmarkeditems_json=JSON.parse(bookmarkeditems);
				var bookmarkcount= bookmarkeditems_json.items.length;
				
				if($("#bookmarkit").attr("status")=="unbookmarked")
				{
					$("#bookmarkit").attr("status","bookmarked");
					$("#bookmarkit").removeClass("unbookmarked").addClass("bookmarked sw_tooltip tooltip");
					$("#sw_wishlist_label").html(swpbutton_remove_text);
					$("#bookmarkit").attr("aria-label",swpbutton_remove_text);
					
					if(use_extra_icon==1)
					{
						$("#wishlist_icon").removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
					}
					else
					{
						$("#wishlist_icon").removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
					}
				
					wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);
					if(display_tooltip_productpage==1)	$(this).tooltipster('content', wishlist_remove_tooltip);
					
					bookmarkeditems_json.items.push(product_variant);
					if(customer_id==0)
					setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });
					
					bookmarkcount++;
					savewishlist(product_id,variant_id,wishlist_id,"add",1);
					
					if (typeof SWCallbackExpressWishlistProductItemAdded !== "undefined" && $.isFunction(SWCallbackExpressWishlistProductItemAdded)) SWCallbackExpressWishlistProductItemAdded();
					
					
				}
				else
				{
					
					$("#bookmarkit").attr("status","unbookmarked");
					$("#bookmarkit").removeClass("bookmarked").addClass("unbookmarked sw_tooltip tooltip");
					
					if(use_extra_icon==1)
					{
						$("#wishlist_icon").removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
					}
					else
					{
						$("#wishlist_icon").removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
					}
				
					wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);
					if(display_tooltip_productpage==1) $(this).tooltipster('content', wishlist_add_tooltip);
					$("#sw_wishlist_label").html(swpbutton_add_text);
					$("#bookmarkit").attr("aria-label",swpbutton_add_text);
					
					bookmarkcount--;	
					
					bookmarkeditems_json.items.splice(objectExists(bookmarkeditems_json.items,product_variant),1);
					
					if(customer_id==0)
					setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });
					savewishlist(product_id,variant_id,wishlist_id,"remove",1);
					
					if (typeof SWCallbackExpressWishlistProductItemRemoved !== "undefined" && $.isFunction(SWCallbackExpressWishlistProductItemRemoved)) SWCallbackExpressWishlistProductItemRemoved();
			
				}
			}
			
			
			
			if(bookmarkcount>0)
			{
				$(".topbadge").show();
				$(".topbadge").html(bookmarkcount);
				$("#bookmarkcount").html(bookmarkcount);		
			}
			else
			{
				$(".topbadge").html(bookmarkcount).hide();
				$("#bookmarkcount").html("");
			}
			bookmarkeditems=getCookieSW('bookmarkeditems');
		});
} 
else //customer_id >0	
{
	$(".smartwishlist").click(function(event)
			{
				event.preventDefault();

							
							var product_variant_local=[$(this).data("product"),$(this).data("variant"),0];
							if(objectExists(saved_wishlist_items,product_variant_local)>-1) 
							{
								
								saved_wishlist_items.splice(objectExists(saved_wishlist_items,product_variant_local),1);
								$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').removeClass("bookmarked").addClass("unbookmarked").attr("aria-label",swpbutton_add_text);
								
								if(use_extra_icon==1)								
								{
									$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
								}
								else
								{
									$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
								}
								
								try
								{
									wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);
									if(display_tooltip==1) $('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').tooltipster('content', wishlist_add_tooltip);
								}
								catch (e) {console.log("SW MSG: Tooltipster's content method called on an uninitialized element");}
								
								num_saved_wishlist_items--;
								savewishlist($(this).data("product"),$(this).data("variant"),wishlist_id,"remove",0);
								
								if (typeof SWCallbackCustomerWishlistCollectionItemRemoved !== "undefined" && $.isFunction(SWCallbackCustomerWishlistCollectionItemRemoved)) SWCallbackCustomerWishlistCollectionItemRemoved();
															
							}
							else
							{
								saved_wishlist_items.push(product_variant_local);			
								$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').removeClass("unbookmarked").addClass("bookmarked").attr("aria-label",swpbutton_remove_text);
								
								if(use_extra_icon==1)								
								{
									$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
								}
								else
								{
									$('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').find('span').removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
								}
								
								try
								{
									wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);
									if(display_tooltip==1) $('[data-product='+$(this).data("product")+'][data-variant='+$(this).data("variant")+']').tooltipster('content', wishlist_remove_tooltip);
								}
								catch (e) {console.log("SW MSG: Tooltipster's content method called on an uninitialized element");}
								
								num_saved_wishlist_items++;
								savewishlist($(this).data("product"),$(this).data("variant"),wishlist_id,"add",0);
								
								if (typeof SWCallbackCustomerWishlistCollectionItemAdded !== "undefined" && $.isFunction(SWCallbackCustomerWishlistCollectionItemAdded)) SWCallbackCustomerWishlistCollectionItemAdded();
							}
							
							bookmarkeditems=getCookieSW('bookmarkeditems');
							if(bookmarkeditems!=undefined)
							{
								bookmarkeditems_json=JSON.parse(bookmarkeditems);
								var wishlistitemcount=bookmarkeditems_json.items.length;
								
								var product_variant_local=[$(this).data("product"),$(this).data("variant"),0];
								if(objectExists(bookmarkeditems_json.items,product_variant_local)>-1) 
								{
									
									bookmarkeditems_json.items.splice(objectExists(bookmarkeditems_json.items,product_variant_local),1);
									setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });
																
								}
							}	
							
							
							if(num_saved_wishlist_items>0)
							{
								$(".topbadge").show();
								$(".topbadge").html(num_saved_wishlist_items);		
							}
							else
							{
								$(".topbadge").html(num_saved_wishlist_items).hide();
							}
							
						return false;					
				
			});		

		$("#bookmarkit").click(function()
		{
			if($("#bookmarkit").attr("status")=="unbookmarked")
			{
				$("#bookmarkit").attr("status","bookmarked");
				$("#bookmarkit").removeClass("unbookmarked").addClass("bookmarked sw_tooltip tooltip");
				$("#sw_wishlist_label").html(swpbutton_remove_text);
				$("#bookmarkit").attr("aria-label",swpbutton_remove_text);
				
				if(use_extra_icon==1)
				{
					$("#wishlist_icon").removeClass(extra_icon_class_name).addClass(extra_icon_hover_class_name);
				}
				else
				{
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_name).addClass("fa-"+wishlist_icon_hover_name);
				}
				
				wishlist_remove_tooltip=decodeEntities(wishlist_remove_tooltip);

				if(display_tooltip_productpage==1)	$(this).tooltipster('content', wishlist_remove_tooltip);
				
				saved_wishlist_items.push(product_variant);				
				num_saved_wishlist_items++;
				savewishlist(product_id,variant_id,wishlist_id,"add",1);
				
				if (typeof SWCallbackCustomerWishlistProductItemAdded !== "undefined" && $.isFunction(SWCallbackCustomerWishlistProductItemAdded)) SWCallbackCustomerWishlistProductItemAdded();
				
				
			}
			else
			{
				
				$("#bookmarkit").attr("status","unbookmarked");
				//$("#bookmarkit").attr("class","unbookmarked sw_tooltip tooltip");
				$("#bookmarkit").removeClass("bookmarked").addClass("unbookmarked sw_tooltip tooltip");
				//if(display_tooltip==1) $(".sw_tooltip.tooltip").tooltipster('content', wishlist_add_tooltip);
				
				if(use_extra_icon==1)
				{
					$("#wishlist_icon").removeClass(extra_icon_hover_class_name).addClass(extra_icon_class_name);
				}
				else
				{
					$("#wishlist_icon").removeClass("fa-"+wishlist_icon_hover_name).addClass("fa-"+wishlist_icon_name);
				}
				
				wishlist_add_tooltip=decodeEntities(wishlist_add_tooltip);

				if(display_tooltip_productpage==1) $(this).tooltipster('content', wishlist_add_tooltip);
				$("#sw_wishlist_label").html(swpbutton_add_text);
				$("#bookmarkit").attr("aria-label",swpbutton_add_text);
				
				//$("#bookmarktext").html(pre_bookmark_text);
				num_saved_wishlist_items--;	
				//var bookmarkeditems_json=JSON.parse(bookmarkeditems);	
				
				saved_wishlist_items.splice(objectExists(saved_wishlist_items,product_variant),1);
				savewishlist(product_id,variant_id,wishlist_id,"remove",1);
				
				if (typeof SWCallbackCustomerWishlistProductItemRemoved !== "undefined" && $.isFunction(SWCallbackCustomerWishlistProductItemRemoved)) SWCallbackCustomerWishlistProductItemRemoved();

				
				//if(Cookies2==undefined) var Cookies2=Cookies.noConflict();
				bookmarkeditems=getCookieSW('bookmarkeditems');
				if(bookmarkeditems!=undefined)
				{
					bookmarkeditems_json=JSON.parse(bookmarkeditems);
					var wishlistitemcount=bookmarkeditems_json.items.length;
					
					var product_variant_local=[$(this).data("product"),$(this).data("variant"),1];
					if(objectExists(bookmarkeditems_json.items,product_variant_local)>-1) 
					{
						bookmarkeditems_json.items.splice(objectExists(bookmarkeditems_json.items,product_variant_local),1);
						setCookieSW('bookmarkeditems',bookmarkeditems_json,{ expires: 365 });
													
					}
				}

			}
			
			if(num_saved_wishlist_items>0)
			{
				$(".topbadge").show();
				$(".topbadge").html(num_saved_wishlist_items);
				$("#bookmarkcount").html(num_saved_wishlist_items);		
			}
			else
			{
				$(".topbadge").html(num_saved_wishlist_items).hide();
				$("#bookmarkcount").html("");
			}
		});
}

//patch for admin bar
if($("#admin_bar_iframe").css("right")!=undefined)
{
	if($("#admin_bar_iframe").css("left")=="0px")
	{
		tooltip_offset_y="40px";
		console.log("SW: Tooltip position adjusted due to Shopify Admin Bar.");
	}
	
}


if(display_tooltip_productpage==1)
		{	
			$('#smartwishlist .sw_tooltip.tooltip').tooltipster({
			 theme: 'tooltip-store-theme',
			 hideOnClick:true,
			 updateAnimation:false,	 
			 interactive:true,
			 contentAsHTML:true,		
			 delay:0,
			 offsetX:tooltip_offset_x,
			 offsetY:tooltip_offset_y,
			 position:tooltip_position
			 });
		}

		
		//initialize tooltip
		if(display_tooltip==1)
		{	
			$('.smartwishlist.sw_tooltip.tooltip').tooltipster({
			 theme: 'tooltip-store-theme',
			 hideOnClick:true,
			 updateAnimation:false,	 
			 interactive:true,
			 contentAsHTML:true,		
			 delay:0,
			 offsetX:tooltip_offset_x,
			 offsetY:tooltip_offset_y,
			 position:tooltip_position
			 });
		}
		
		
}

//use_autosetup=1;
display_button_inline=1;
if(location.pathname.indexOf("/products/")!=-1) is_product_page=1; else is_product_page=0;

function SmartWishlistMainAuto()
{

	if(is_product_page==1)
	{
		//not homepage
		jsonURL=location.origin+location.pathname+".json";

		$.ajax({
		  url: jsonURL,			  
		  success: function(data)
			{
				autoproductid=data.product.id;
				autovariantid=data.product.variants[0].id;
				
				if($("#smartwishlist").html()==undefined)
				{
					//console.log("SW: Auto Wishlist button displayed");
					$('form[action^="/cart/add"]').after('<div id="smartwishlist" data-product="'+autoproductid+'" data-variant="'+autovariantid+'"></div>');
				}
				//else console.log("SW: Manual Wishlist button displayed");
				
				SmartWishlistMain();
			},
		  dataType: 'json'
		});	
	}	
}

var webstorage_supported=0;
if (typeof(Storage) !== "undefined") webstorage_supported=1; else console.log("SW: Browser doesn't support local storage. caching not possible");

if (webstorage_supported==1) var smartwishlist_local_config=localStorage.getItem("smartwishlist_config");
if(smartwishlist_local_config!=undefined)
{
		
		smartwishlist_local_config=JSON.parse(smartwishlist_local_config);
		
		
		pre_bookmark_text=smartwishlist_local_config['add_tooltip_text'];
		post_bookmark_text=smartwishlist_local_config['remove_tooltip_text'];
		wishlist_icon_color=smartwishlist_local_config['wishlist_icon_color'];
		wishlist_icon_hover_color=smartwishlist_local_config['wishlist_icon_hover_color'];
		wishlist_icon_name=smartwishlist_local_config['wishlist_icon_name'];
		wishlist_icon_hover_name=smartwishlist_local_config['wishlist_icon_hover_name'];
		use_extra_icon=parseInt(smartwishlist_local_config['use_extra_icon']);
		extra_icon_class_name=smartwishlist_local_config['extra_icon_class_name'];
		extra_icon_hover_class_name=smartwishlist_local_config['extra_icon_hover_class_name'];
		display_item_count=smartwishlist_local_config['display_item_count'];		
		wishlist_add_tooltip=smartwishlist_local_config['add_tooltip_text'];
		wishlist_remove_tooltip=smartwishlist_local_config['remove_tooltip_text'];
		wishlist_url=smartwishlist_local_config['proxy_base'];
		display_topbadge=smartwishlist_local_config['display_topbadge'];
		topbadge_color=smartwishlist_local_config['topbadge_color'];
		topbadge_background_color=smartwishlist_local_config['topbadge_background_color'];
		topbadge_padding=smartwishlist_local_config['topbadge_padding'];
		enable_accounts=smartwishlist_local_config['enable_accounts'];
		force_login=smartwishlist_local_config['force_login'];
		extra_css_product=smartwishlist_local_config['extra_css_product'];
		saved_wishlist_items=smartwishlist_local_config['wishlist_items'];
		num_saved_wishlist_items=saved_wishlist_items.length;
		tooltip_offset_x=smartwishlist_local_config['tooltip_offset_x'];
		tooltip_offset_y=smartwishlist_local_config['tooltip_offset_y'];
		tooltip_position=smartwishlist_local_config['tooltip_position'];
		display_tooltip=smartwishlist_local_config['display_tooltip'];
		display_tooltip_productpage=smartwishlist_local_config['display_tooltip_productpage'];
		use_autosetup=smartwishlist_local_config['use_autosetup'];
		display_fixed_link=smartwishlist_local_config['display_fixed_link'];
		swfl_html=smartwishlist_local_config['swfl_html'];
		swfl_orientation_desktop=smartwishlist_local_config['swfl_orientation_desktop'];
		swfl_position_desktop=smartwishlist_local_config['swfl_position_desktop'];
		swfl_margin_desktop=smartwishlist_local_config['swfl_margin_desktop'];
		swfl_margin_value_desktop=smartwishlist_local_config['swfl_margin_value_desktop'];
		swfl_background_color=smartwishlist_local_config['swfl_background_color'];
		swfl_text_color=smartwishlist_local_config['swfl_text_color'];
		swpbutton_type=smartwishlist_local_config['swpbutton_type'];
		swpbutton_add_text=smartwishlist_local_config['swpbutton_add_text'];
		swpbutton_remove_text=smartwishlist_local_config['swpbutton_remove_text'];
		swpbutton_font_family=smartwishlist_local_config['swpbutton_font_family'];
		swpbutton_label_fontsize=smartwishlist_local_config['swpbutton_label_fontsize'];
		swpbutton_icon_fontsize=smartwishlist_local_config['swpbutton_icon_fontsize'];
		swpbutton3_color=smartwishlist_local_config['swpbutton3_color'];
		swpbutton3_background_color=smartwishlist_local_config['swpbutton3_background_color'];
		swpbutton3_radius=smartwishlist_local_config['swpbutton3_radius'];
		swpbutton3_width_desktop=smartwishlist_local_config['swpbutton3_width_desktop'];
		swpbutton3_width_mobile=smartwishlist_local_config['swpbutton3_width_mobile'];
		swpbutton3_height=smartwishlist_local_config['swpbutton3_height'];
		optimize_swpbutton_mobile=smartwishlist_local_config['optimize_swpbutton_mobile'];
		mobile_max_width=smartwishlist_local_config['mobile_max_width'];
		
		
		if((use_autosetup==1)&&(is_product_page==1)) SmartWishlistMainAuto(); else SmartWishlistMain();
		//console.log("SW: Loading from App Cache");
}


$.ajax({
	url:appdata_url+"v6/fetchstoredata.php",
	data: {store_domain:hostname,store_id:store_id,customer_id:customer_id},
	dataType: 'jsonp',
	jsonp: "callback",
	success: function(data)
	{  
		pre_bookmark_text=data['add_tooltip_text'];
		post_bookmark_text=data['remove_tooltip_text'];
		wishlist_icon_color=data['wishlist_icon_color'];
		wishlist_icon_hover_color=data['wishlist_icon_hover_color'];
		wishlist_icon_name=data['wishlist_icon_name'];
		wishlist_icon_hover_name=data['wishlist_icon_hover_name'];
		use_extra_icon=parseInt(data['use_extra_icon']);
		extra_icon_class_name=data['extra_icon_class_name'];
		extra_icon_hover_class_name=data['extra_icon_hover_class_name'];
		display_item_count=data['display_item_count'];		
		wishlist_add_tooltip=data['add_tooltip_text'];
		wishlist_remove_tooltip=data['remove_tooltip_text'];
		wishlist_url=data['proxy_base'];
		display_topbadge=data['display_topbadge'];
		topbadge_color=data['topbadge_color'];
		topbadge_background_color=data['topbadge_background_color'];
		topbadge_padding=data['topbadge_padding'];
		enable_accounts=data['enable_accounts'];
		force_login=data['force_login'];
		extra_css_product=data['extra_css_product'];
		saved_wishlist_items=data['wishlist_items'];
		num_saved_wishlist_items=saved_wishlist_items.length;
		tooltip_offset_x=data['tooltip_offset_x'];
		tooltip_offset_y=data['tooltip_offset_y'];
		tooltip_position=data['tooltip_position'];
		display_tooltip=data['display_tooltip'];
		display_tooltip_productpage=data['display_tooltip_productpage'];
		
		
		
		use_autosetup=data['use_autosetup'];
		display_fixed_link=data['display_fixed_link'];
		swfl_html=data['swfl_html'];
		swfl_text=data['swfl_text'];
		swfl_orientation_desktop=data['swfl_orientation_desktop'];
		swfl_position_desktop=data['swfl_position_desktop'];
		swfl_margin_desktop=data['swfl_margin_desktop'];
		swfl_margin_value_desktop=data['swfl_margin_value_desktop'];
		swfl_background_color=data['swfl_background_color'];
		swfl_text_color=data['swfl_text_color'];
		swpbutton_type=data['swpbutton_type'];
		swpbutton_add_text=data['swpbutton_add_text'];
		swpbutton_remove_text=data['swpbutton_remove_text'];
		swpbutton_font_family=data['swpbutton_font_family'];
		swpbutton_label_fontsize=data['swpbutton_label_fontsize'];
		swpbutton_icon_fontsize=data['swpbutton_icon_fontsize'];
		swpbutton3_color=data['swpbutton3_color'];
		swpbutton3_background_color=data['swpbutton3_background_color'];
		swpbutton3_radius=data['swpbutton3_radius'];
		swpbutton3_width_desktop=data['swpbutton3_width_desktop'];
		swpbutton3_width_mobile=data['swpbutton3_width_mobile'];
		swpbutton3_height=data['swpbutton3_height'];
		optimize_swpbutton_mobile=data['optimize_swpbutton_mobile'];
		mobile_max_width=data['mobile_max_width'];
		
			
		if(smartwishlist_local_config==undefined) {if((use_autosetup==1)&&(is_product_page==1)) SmartWishlistMainAuto(); else SmartWishlistMain();	}
		if (webstorage_supported==1) localStorage.setItem("smartwishlist_config",JSON.stringify(data));
		
		if(parseInt(num_saved_wishlist_items)>0) { $("#bookmarkcount, .topbadge").html(num_saved_wishlist_items);}
		
		if(customer_id>0) initalWishlistSetupAccounts();

		
				 
	
	},
	error: function(data)
	{    
		//
	},
	complete: function(data)
	{    
			if(wishlist_id==undefined)
			{
				var wishlist_id=getCookieSW('wishlist_id');
			}
			
			if (typeof SWCallbackWishlistButtonLoaded !== "undefined" && $.isFunction(SWCallbackWishlistButtonLoaded)) SWCallbackWishlistButtonLoaded();

			//sync wishlist data
			//console.log("SW: Customer_id= "+customer_id);
			//console.log("SW: Enable_accounts= "+enable_accounts);
			if((customer_id!=undefined)&&(customer_id>0)&&(enable_accounts==1))
			{
			var wishlist_customer_id=getCookieSW('wishlist_customer_id');
			var sync=false;
			if(wishlist_customer_id=="undefined") {sync=true; setCookieSW('wishlist_customer_id',customer_id,{ expires: 365 });}
			else if(wishlist_customer_id!=customer_id) {sync=true; setCookieSW('wishlist_customer_id',customer_id,{ expires: 365 });}
			if(sync==true)
				{
					console.log("syncing wishlist");
					$.ajax({
						url:app_url+"v6/syncwishlist.php",
						data: {wishlist_id:wishlist_id,customer_id:customer_id,store_id:store_id},
						dataType: 'jsonp',
						jsonp: "callback",
						success: function(data)
						{
							var total_count= parseInt(data.total_count);
							if((total_count>0)&&(display_topbadge>0))
							{
								$(".topbadge").show();
								$(".topbadge").html(total_count);
							}
							
						},
						error: function(data)
						{    
						},
						complete: function(data)
						{    

						}		
						});	
				}	
			}
			else 
			{
				setCookieSW('wishlist_customer_id',0,{ expires: 365 });
				
			}				

	}			
});



//patch for admin bar changes
if($("#admin_bar_iframe").length>0)
{
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	var target = document.querySelector('#admin_bar_iframe');
	var observer = new MutationObserver(function(mutations) {
		
		if($("#admin_bar_iframe").css("left")=="0px")
		{
			tooltip_offset_y="40px";
		}
		else tooltip_offset_y="0";
			
		$(".sw_tooltip.tooltip").tooltipster('option','offsetY', tooltip_offset_y);

	});
	var config = { attributes: true }
	observer.observe(target, config);
}

//redirect back to original page after login
var sw_redirect_url=getParameterByName("redirect_url");
if((sw_redirect_url!="")&&(sw_redirect_url!=null)&&(sw_redirect_url!=undefined))
{ 
	
	var input_checkout_url= document.getElementsByName("checkout_url");
	for (i = 0; i < input_checkout_url.length; i++) {
    input_checkout_url[i].value =sw_redirect_url;
	}

}

})(jQuery);


}

function(){}