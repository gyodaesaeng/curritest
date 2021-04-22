function urlParameter(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results != null ? results[1] : null;
}
