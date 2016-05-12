var name;
function initialize_gmaps() {

	var customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          {hue: '#90b03e'},
          // {visibility: 'complex'},
          {gamma: 0.5},
          {weight: 0.5}
        ]
      },
      {
        elementType: 'labels',
        stylers: [{visibility: 'on'}]
      },
      {
        featureType: 'water',
        stylers: [{color: '#007c92'}, {lightness: 85}]
      }
    ], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';

// initialize new google maps LatLng object
var myLatlng = new google.maps.LatLng(40.705189, -74.009209 - 0.003);
// var myLatlng = new google.maps.LatLng(99.705189,-74.009209);
// set the map options hash
var mapOptions = {
    center: myLatlng,
    zoom: 16,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
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
  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);

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

		$('.splash-button').on("click", function() {
			name = $('#username').val() || "Your";
			if(name !== "Your") name = name + "'s";
			$('.overlay').remove();
			$('.itinerary h2').text(name + " Itinerary");
		});

    $('button.button').on("click", function() {
    		event.preventDefault();
        $('form').slideToggle();
        $('.delete').slideToggle();
        $(this).text(function(i, text) {
        	return text === "edit your itinerary" ? "save itinerary" : "edit your itinerary";
        });
    });

    $('.day-button').on("click", function() {
    		event.preventDefault();
    		$('.days li').removeClass('active');
    		$(this).parent('li').addClass('active');
    		var day = $(this).attr('data-day');
    		$('.list').hide();
    		$('.'+day).fadeToggle(600);

    });
    initialize_gmaps();


});