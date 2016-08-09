/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/
$(document).ready(function() {
  
  //Insert Smooth Scroll//
$('a[href*="#"]').click(function(e) {
    e.preventDefault();
    
  var target = this.hash;
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});
// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
var mymap = L.map('map-container').setView([46.852, -121.760], 13);
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:
  
var outdoorLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2VhdHRsZXppYiIsImEiOiJjaXI0MmQ1d28wMWdxdHNsdzFpeW5xMjgzIn0.ApUk6wO4Y7OIdrQgq7by_g', {
    attribution: 'Map data & copy; © <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 25, minZoom: 10
}); 

var satLayer = L.tileLayer( 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2VhdHRsZXppYiIsImEiOiJjaXI0MmQ1d28wMWdxdHNsdzFpeW5xMjgzIn0.ApUk6wO4Y7OIdrQgq7by_g', {
  attribution: 'Map data & copy; © <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',  
  maxZoom: 25, minZoom: 10    
});

var streetLayer = L.tileLayer( 'https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2VhdHRsZXppYiIsImEiOiJjaXI0MmQ1d28wMWdxdHNsdzFpeW5xMjgzIn0.ApUk6wO4Y7OIdrQgq7by_g', {
  attribution: 'Map data & copy; © <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',    
  maxZoom: 25, minZoom: 10
});

var mapLayers = {
  "Outdoor": outdoorLayer,
  "Satellite": satLayer,
  "Streets": streetLayer 
};


L.control.layers(mapLayers).addTo(mymap);
  outdoorLayer.addTo(mymap);
  


var paradiseMarker = L.marker([46.786, -121.733]).addTo(mymap);
paradiseMarker.bindPopup("<b>Paradise Inn!</b><br>Wake up to a breathtaking view!").openPopup();
  
var mowichMarker = L.marker([46.937, -121.862]).addTo(mymap);
mowichMarker.bindPopup("<b>Mowich Lake!</b><br>The mountain in all it's glory!").openPopup();
  
var crystalMarker = L.marker([46.981, -121.459]).addTo(mymap);
crystalMarker.bindPopup("<b>Crystal Mountain Ski Resort</b><br>World class skiing and mountain top dining!").openPopup();
  

 }); 
// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)
