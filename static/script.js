const Hydro = require('../model')
var x = [], y = [];
var trace = {
    x: x,
    y: y,
    mode: 'lines+markers'
};
var data = [trace];
var layout = {
    xaxis: {
        range: [0, 100],
        autorange: false
    },
    yaxis: {
        range: [0, 10000],
        autorange: false
    }
};
var model = new Hydro();
var intervalId = null;
function start() {
    Plotly.newPlot('plot', data, layout);
    intervalId = setInterval(function () {
        var point = model.next();
        x.push(point[0]);
        y.push(point[1]);
        Plotly.update('plot', data, layout);
    }, 1000);
    document.getElementById("start-button").disabled = true;
    document.getElementById("stop-button").disabled = false;
}
function stop() {
    clearInterval(intervalId);
    document.getElementById("start-button").disabled = false;
    document.getElementById("stop-button").disabled = true;
}