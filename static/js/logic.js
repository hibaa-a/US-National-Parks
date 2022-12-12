// Create our initial map object.
// Set the longitude, latitude, and starting zoom level.
var myMap = L.map("map-id").setView([39.5, -98.25], 5);


// Add a tile layer (the background map image) to our map.
// Use the addTo() method to add objects to our map.
L.tileLayer('https:////{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// getting data from csv file Remember to change the file
const url = "https://github.com/hibaaaldubai/Group-4-Project-3/blob/main/Resources/cleaned_park.csv"

d3.csv()
// Async / await usage
const jsonArray=await csv().fromFile(csvFilePath);