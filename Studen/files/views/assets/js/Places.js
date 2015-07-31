var service;

function initialize(map) {
  service = new google.maps.places.PlacesService(map);
}

function search(loc, type) {
  var request = {
    location: loc,
    radius: '500',
    types: [type]
  };
  service.search(request, callback);
}
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}