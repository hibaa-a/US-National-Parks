console.log('park.js')

d3.csv('/static/data/park_count.csv').then((data) => {
    console.log(data)
})

x=[]
y=[]

for (i=0; i<data.length; i++) {
    x.push(data[i]['Park Name'])
    y.push(data[i]['count'])
}

console.log(x)
console.log(y)

