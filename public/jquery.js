function initialize_gmaps() {
// initialize new google maps LatLng object
var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
// var myLatlng = new google.maps.LatLng(99.705189,-74.009209);
// set the map options hash
var mapOptions = {
    center: myLatlng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
// get the maps div's HTML obj
var map_canvas_obj = document.getElementById("maparea");
// initialize a new Google Map with the options
var map = new google.maps.Map(map_canvas_obj, mapOptions);
// Add the marker to the map



// var marker = new google.maps.Marker({
//     position: myLatlng,
//     title:"Hello World!"
// });
// Add the marker to the map by calling setMap()
// marker.setMap(map);
  setMarkers(map);

}

function setMarkers(map) {
	var image = {
		url: 'hotelIcon.png', 
		size: new google.maps.Size(100, 40),
		origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0,0)
	};
  var beachMarker = new google.maps.Marker({
    position: {lat: 40.705189, lng: -74.009209},
    map: map,
    icon: image
  });
 }

$(document).ready(function() {

    $('.button').on("click", function() {
        $('form').slideToggle();
        $('.delete').slideToggle();
        $(this).text(function(i, text) {
        	return text === "edit your itinerary" ? "save itinerary" : "edit your itinerary";
        });
    });

    $('.day-button').on("click", function() {
    		$('.days li').removeClass('active');
    		$(this).parent('li').addClass('active');
    		var day = $(this).attr('data-day');
    		$('.list').hide();
    		$('.'+day).fadeToggle(600);

    });
    initialize_gmaps();


});