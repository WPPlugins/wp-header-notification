//Set Cookies
function wp_header_notification_set_cookie(c_name, value, expiredays){
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function wp_header_notification_pushdownyes(){
	wp_header_notification_set_cookie("close_wp_header_notification", true, parseInt(wp_header_notification_info.renotice_time));
	window.open(wp_header_notification_info.button_link, "_blank");
	jQuery(document.getElementById('top_notice')).hide();
}
function wp_header_notification_pushdownclose(){
	wp_header_notification_set_cookie("close_wp_header_notification", true, parseInt(wp_header_notification_info.renotice_time));
	jQuery(document.getElementById('top_notice')).hide();
}