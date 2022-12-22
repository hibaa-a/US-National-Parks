console.log('park.js')

d3.csv('/static/data/park_count.csv').then((park_data) => {
console.log("park_data")
console.log(park_data)

x_list = []
y_list = []

for (i = 0; i < park_data.length; i++) {
x_list.push(park_data[i]['Park Name'])
y_list.push(park_data[i]['count'])
}

var Barchartdata = [{
x: y_list,
y: x_list,
type: 'bar',
opacity: 0.7,
orientation: 'h'
}];

var layout = {
    title: 'Number of Species in each National Park',
    xaxis: {
        tikfont: {
            size: 11
        },
        title: 'Number of Species'
    },
    yaxis: {
        title: 'National Parks',
        tickfont: {
            size: 12
        },
        automargin: true
    },
    autosize: false,
    width: 1200,
    height: 1000,
    margin: {
        pad: 8
    }
};

Plotly.newPlot('myDiv', Barchartdata, layout);
})

