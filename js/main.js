jQuery(function($) {
	function initialize() {
	var mapCanvas = document.getElementById('map');
	 var latlng = new google.maps.LatLng(57.0442, 9.9116);
	 var settings = {
	 zoom: 15,
	 center: latlng,
	 mapTypeControl: true,
	 mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
	 navigationControl: true,
	 navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
	 mapTypeId: google.maps.MapTypeId.ROADMAP
	 };

	 var map = new google.maps.Map(mapCanvas, settings);
	}
	 //Когда документ загружен полностью - запускаем инициализацию карты.
	initialize();
});