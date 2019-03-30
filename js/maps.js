// HERE Keys
const platform = new H.service.Platform({
  'app_id': '3Z54Y9jNR2aDfCoqEpKF' ,
  'app_code': 'MnCWGRtOH6dYTDHnw8L7sg'
  });

/*// Initialize the platform object:
const platform = new H.service.Platform({
  'app_id': '6KZF7fTyJhZnoww41JjO',
  'app_code': '0DJqkbCOzlBYeMqbXIUw9w'
});

let lat;
let lng;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    console.log(pos.lat, pos.lng)


/*
    // Obtain the default map types from the platform object
    const maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    const map = new H.Map(
      document.getElementById('mapContainer'),
      maptypes.normal.map, {
        zoom: 10,
        center: {
          lng: pos.lng,
          lat: pos.lat
        }
      });*/ 

/*
const maptypes = platform.createDefaultLayers();
const map = new H.Map(
  document.getElementById('mapContainer'),
  maptypes.normal.map);

// Define a variable holding SVG mark-up that defines an animated icon image:


// Create an icon object, an object with geographic coordinates and a marker:
  coords = {lat: pos.lat, lng: pos.lng},
  marker = new H.map.Marker(coords);

// Set map center and zoom, add the marker to the map:
map.setCenter(coords);
map.setZoom(17);
map.addObject(marker);




  })
};



// https://github.com/heremaps/examples/#simple-examples

*/


// Initialize the platform object:


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      console.log(pos.lat, pos.lng)
      
    


  // Obtain the default map types from the platform object
  var maptypes = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
  var map = new H.Map(
  document.getElementById('mapContainer'),
  maptypes.normal.map,
  {
    zoom: 16,
    center: { lng: pos.lng, lat: pos.lat }
  });

})};