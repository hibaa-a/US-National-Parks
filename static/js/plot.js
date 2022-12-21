// creating barchart
var data = JSON.parse(data)
console.log(data[0])

park_array = [];

data.map((row) => {
  // console.log("row_data")
  // console.log(row_data)

  if (park_array.indexOf(row["Park Name"]) === -1) {
    park_array.push(row["Park Name"])
  }

});

console.log(park_array)

var Barchartdata = [
    {
      y: [2876, 2115, 2106, 1910, 1856, 1785, 1576, 1499, 1403, 1356, 1334, 1308, 1303, 1279, 1244, 1239, 1204, 1201, 1194, 1168, 1105, 1075, 1023, 1010, 1001, 997, 993, 992, 986, 983, 933, 910, 869, 847, 840, 785, 765, 763, 762, 737, 679, 654, 643, 623, 619, 608, 600, 510, 505, 504, 500, 457, 410, 389, 378, 367, 305, 299, 287],
      x: ['Great Smoky Mountains', 'Shenandoah', 'North Cascades', 'Rocky Mountain', 'Glacier', 'Grand Canyon', 'Yosemite', 'Sequoia and Kings Canyon', 'Big Bend', 'Grand Teton', 'Yellowstone', 'Mammoth Cave', 'Saguaro', 'Congaree', 'Cuyahoga Valley', 'Wrangell - St Elias', 'Mount Rainier', 'Guadalupe Mountains', 'Hawaii Volcanoes', 'Haleakala', 'Redwood', 'Everglades', 'Zion', 'Death Valley', 'Carlsbad Caverns', 'Channel Islands', 'Crater Lake', 'Acadia', 'Olympic', 'Capitol Reef', 'Mesa Verde', 'Isle Royale', 'Voyageurs', 'Denali', 'Lassen Volcanic', 'Lake CLark', 'Great Basin', 'Pinnacles', 'Theodore Roosevelt', 'Glacier Bay', 'Wind Cave', 'Great Sand Dunes', 'Gates Of The Arctic', 'Bryce Canyon', 'Canyonlands', 'Badlands', 'Katmai', 'Joshua Tree', 'Arches', 'Black Canyon of the Gunnison', 'Petrified Forest', 'Biscayne', 'Hot Springs', 'Kenai Fjords', 'Kobuk Valley', 'Dry Tortugas'],
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('myDiv', Barchartdata);