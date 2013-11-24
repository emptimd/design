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
/*=====UNCOMMENT ANY OF THIS FUNCTIONS TO USE THEM INTO MAIN.JS====*/


/**
 * Automaticaly add * for label that contains *:required. 
 */
// function label_required() {
// 	$('*:required').parent('label').append('*');
// }


/**
 * Fade button + scroll to top on click.
 */
// function window_scrool() {
// 	$(window).scroll(function () {
// 		if ($(this).scrollTop() != 0) {
// 			$('#bttop').fadeIn();
// 		} else {
// 			$('#bttop').fadeOut();
// 		}
// 	});
// 	$('#bttop').click(function () {
// 		$('body,html').animate({scrollTop: 0}, 800);
// 	});
// }