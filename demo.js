/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function moveMapToBerlin(map){
  map.setCenter({lat:52.5159, lng:13.3777});
  map.setZoom(14);
}


var boutiques ={
  "boutique1":{"lat":47858,"long":45854,"produit":'ordinateur',"prix":5000,"mark":"HP"},
  "boutique2":{"lat":47858,"long":45854,"produit":'ordinateur',"prix":500,"mark":"HP"},
  "boutique3":{"lat":47858,"long":45854,"produit":'ordinateur',"prix":570,"mark":"HP"},
  "boutique4":{"lat":47858,"long":45854,"produit":'ordinateur',"prix":800,"mark":"HP"},
  "boutique5":{"lat":47858,"long":45854,"produit":'ordinateur',"prix":5500,"mark":"HP"}
}


const marker = new H.map.Marker(center, {volatility: true});
marker.draggable = true;
map.addObject(marker);
for (boutique in boutiques) 
  var romeMarker = new H.map.Marker({lat:41.9, lng: 12.5});
{
 
 console.log(boutiques[boutique]);
}


let addXmasMkts = () => {
      let geocodingParams = {
        searchText: ' '
      }
      let xmlhttp = new XMLHttpRequest()
      xmlhttp.open("GET", "https://www.berlin.de/sen/web/service/maerkte-feste/weihnachtsmaerkte/index.php/index/all.json?q=", true)
      xmlhttp.onreadystatechange = function() 
      {
        if (this.readyState == 4 && this.status == 200) 
        {
          let myArr = JSON.parse(this.responseText)
          let XmasDataString = ''
          console.long( myArr);

          for(i = 0; i < myArr.results.count; i ++)
          {
            XmasDataString = myArr.index[i].strasse +','+ myArr.index[i].plz_ort
            geocodingParams = {
              searchText: XmasDataString
            }
            platform.getGeocodingService().geocode(geocodingParams, onResult, e => {
             alert(e);
            })
          }
        }
      }
      xmlhttp.send()
}

let onResult = result => {
    let locations = result.Response.View[0].Result
    let position = {
      lat: locations[0].Location.DisplayPosition.Latitude,
      lng: locations[0].Location.DisplayPosition.Longitude
    }
    let marker = new H.map.Marker(position,{icon: iconXmas})
    map.addObject(marker)
}
    
addXmasMkts()

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: window.apikey
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:50, lng:5},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
  moveMapToBerlin(map);
}                  
                