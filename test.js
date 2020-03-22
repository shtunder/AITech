
/**
 * Adds markers to the map highlighting the locations of the captials of
 * France, Italy, Germany, Spain and the United Kingdom.
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(map) {
    var parisMarker = new H.map.Marker({lat:48.8567, lng:2.3508});
    map.addObject(parisMarker);

    var romeMarker = new H.map.Marker({lat:41.9, lng: 12.5});
    map.addObject(romeMarker);

    var berlinMarker = new H.map.Marker({lat:52.5166, lng:13.3833});
    map.addObject(berlinMarker);

    var madridMarker = new H.map.Marker({lat:40.4, lng: -3.6833});
    map.addObject(madridMarker);

    var londonMarker = new H.map.Marker({lat:51.5008, lng:-0.1224});
    map.addObject(londonMarker);



    const lineString =new H.geo.LineString();
lineString.pushPoint(parisMarker.getPosition());
lineString.pushPoint(madridMarker.getPosition());
    const polyline = new H.map.Polyline(
      lineString,
    {
      style:{
        strokeColor:"green",
        lineWigth:5
      }
    });

    map.addObject([parisMarker,madridMarke,londonMarker,polyline])


}







/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  "app_id":"fNeoBkVzRyXqaFTjozyY",
  "apikey":"tNoN2z_aC06Fi_C9Mc18MGxvSVRTzkbh3dGcamYNVho"
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:50, lng:5},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1,
  name:"carteprince"
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);


let data;
$(document).on('click', '.Search', function(){
  data = $('input[name="donne"]').val();
  h=[]
for (boutique in boutiques) {
      let valer = boutiques[boutique].mark
    if (valer==data) 
    {
      h=valer;
     console.log(h);
    }
      console.log(valer)
      //if (true) {}
}
});


              
 
              
                


// Now use the map as required...
window.onload = function () {



  addMarkersToMap(map);

 let alice = (map) =>{

ip= "195.70.215.185"
  var access_key = '0ac0d7ad2f3722aedf4eb590d57ad7d9';

// get the API result via jQuery.ajax
$.ajax({
    url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {

console.log('ll')
var lat =json.latitude;
var  lon =json.longitude;
const marker =new H.map.Marker({lat:lat,lng:lon})
        // output the "capital" object inside "location"
  map.addObject(marker);

   
    }
});
}

alice(map);
} 

let champPoruit = document.getElementById('donne')

 champPoruit.addEventListener("change", function(){

        Produit = this.value


        if (Produit != "") {

              // On envoie la requête
            ajaxGet(`http://localhost/AITtech/chargeMarket?donne=${Produit}`)
            .then(reponse => {
                // On supprime toutes les couches de la carte
                carte.eachLayer(function(layer){
                    if(layer.options.name != 'tiles') carte.removeLayer(layer)
                })

                

                // On boucle sur les données
                let donnees = JSON.parse(reponse)

                Object.entries(donnees).forEach(Market => {
                    // On crée le marqueur
                    
                    
                })
                // On centre la carte sur le cercle
                
            })

        }

      }
)


 /**
 * Cette fonction effectue un appel Ajax vers une url et retourne une promesse
 * @param {string} url 
 */
function ajaxGet(url){
    return new Promise(function(resolve, reject){
        // Nous allons gérer la promesse
        console.log(url);
        let xmlhttp = new XMLHttpRequest()

        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4){
                if(xmlhttp.status == 200){
                    // On "résoud" la promesse
                    resolve(xmlhttp.response)
                }else{
                    reject(xmlhttp)
                }
            }
        }

        xmlhttp.onerror = function(error){
            reject(error)
        }

        xmlhttp.open('POST', url, true)
        xmlhttp.send()
    })
}


/*
const marker = new H.map.Marker(center, {volatility: true});
marker.draggable = true;
map.addObject(marker);
for (boutique in boutiques) 
  var romeMarker = new H.map.Marker({lat:41.9, lng: 12.5});
{
 
 console.log(boutiques[boutique]);
}
*/


/**
 * Adds markers to the map highlighting the locations of the captials of
 * France, Italy, Germany, Spain and the United Kingdom.
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */


/*

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

        }
      }
      xmlhttp.send()
      console.long( 'myArr');
}
addXmasMkts();

*/
/*
let onResult = result => {
    let locations = result.Response.View[0].Result
    let position = {
      lat: locations[0].Location.DisplayPosition.Latitude,
      lng: locations[0].Location.DisplayPosition.Longitude
    }
    let marker = new H.map.Marker(position,{icon: iconXmas})
    map.addObject(marker)
}




var jqxhr = $.ajax( "example.php" )
  .done(function() {
    alert( "success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "complete" );
  });
  */  


        