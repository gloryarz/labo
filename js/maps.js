// HERE Keys
const platform = new H.service.Platform({
  app_id: '3Z54Y9jNR2aDfCoqEpKF' ,
  app_code: 'MnCWGRtOH6dYTDHnw8L7sg',
  useHTTPS : true
  });


// https://github.com/heremaps/examples/#simple-examples

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

  coords = {lat: pos.lat, lng: pos.lng},
  marker = new H.map.Marker(coords);

  // Set map center and zoom, add the marker to the map:
map.setCenter(coords);
map.setZoom(16);
map.addObject(marker);
})};

const url = 'https://raw.githubusercontent.com/gloryarz/labo/master/data/data.json';
fetch(url).then(resp => resp.json())
.then(data => {
  console.log(data)
  const dataArr = data;
  dataArr.forEach(el => {
    workTheData(el.nombre, el.direccion, el.delegacion, el.telefono, el.web, el.resumen, el.mail, el.etiquetas, el.facebook, el.twitter, el.categoria,  el.latitud, el.longitud)
  });
})


const getTagValue = (selectObject) => {
  var value = selectObject.value; 
  console.log(value) 
}

const workTheData = (nombre, direccion, delegacion, telefono, web, resumen, mail, etiquetas, facebook, twitter, categoria, latitud, longitud) => {
  
}



