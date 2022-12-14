// Create our initial map object.
// Set the longitude, latitude, and starting zoom level.
var myMap = L.map("map-id").setView([39.5, -98.25], 5);


// Add a tile layer (the background map image) to our map.
// Use the addTo() method to add objects to our map.
L.tileLayer('https:////{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var data =  JSON.parse(data);

for(var i=0; i< data.length; i++){
    row = data[i]
    lat = row.Latitude
    lon = row.Longitude
    L.marker(lat,lon)
      .bindPopup(`<h1>${data.park}</h1> <hr> <h3>Population ${data.state.toLocaleString()}</h3>`)
      .addTo(myMap);
  }

//activity 3 Stu_City_markers




  