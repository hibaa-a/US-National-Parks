// Create our initial map object.
// Set the longitude, latitude, and starting zoom level.
var myMap = L.map("map-id").setView([39.5, -98.25], 5);


// Add a tile layer (the background map image) to our map.
// Use the addTo() method to add objects to our map.
L.tileLayer('https:////{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var data =  JSON.parse(data);


var myIcon = L.divIcon({className: 'my-div-icon'});
// you can set .my-div-icon styles in CSS

function markerSize(Acres) {
  return Math.sqrt(Acres) * 50;
}


for(var i=0; i< data.length; i++){
  row = data[i]
  Latitude = row.Latitude
  Longitude = row.Longitude
  //console.log(Latitude, Longitude)
  L.circle([Latitude,Longitude], {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius to equal the output of our markerSize() function:
    // This will make our marker's size proportionate to its population.
    radius: markerSize(row.Acres)
  }).bindPopup(`<h1>Park Name: ${row.Park_Name}</h1> <hr> <h3>State(s): ${row.State.toLocaleString()}</h3>`).addTo(myMap); //change to column Park Name once it is renamed
}




  