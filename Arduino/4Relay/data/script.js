// node-minify --compressor uglify-es --input 'script.js' --output 'script.min.js'

var wsc;

document.addEventListener("DOMContentLoaded", function(){
    wsc = new ReconnectingWebSocket('ws://' + window.location.hostname + ':81');
    wsc.timeoutInterval = 3000;

    wsc.onopen = function (e) {
        console.log("WebSocketClient connected:", e);
    }

    wsc.onmessage = function (data, flags, number) {
        console.log('WebSocketClient message #${number}: ', data);
        var switchstatus = JSON.parse(data.data);
        if(switchstatus.light1 == "ON") {
            document.getElementById("onoff1").checked = true;
        } else {
            document.getElementById("onoff1").checked = false;
        }
        if(switchstatus.light2 == "ON") {
            document.getElementById("onoff2").checked = true;
        } else {
            document.getElementById("onoff2").checked = false;
        }
        if(switchstatus.light3 == "ON") {
            document.getElementById("onoff3").checked = true;
        } else {
            document.getElementById("onoff3").checked = false;
        }
        if(switchstatus.light4 == "ON") {
            document.getElementById("onoff4").checked = true;
        } else {
            document.getElementById("onoff4").checked = false;
        }
    }

    document.getElementById("onoff1").onchange = function () {
        var JsonData;
        if (document.getElementById("onoff1").checked) {
            JsonData = { light: 1, state: "ON" };
        } else {
            JsonData = { light: 1, state: "OFF" };
        }
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("onoff2").onchange = function () {
        var JsonData;
        if (document.getElementById("onoff2").checked) {
            JsonData = { light: 2, state: "ON" };
        } else {
            JsonData = { light: 2, state: "OFF" };
        }
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("onoff3").onchange = function () {
        var JsonData;
        if (document.getElementById("onoff3").checked) {
            JsonData = { light: 3, state: "ON" };
        } else {
            JsonData = { light: 3, state: "OFF" };
        }
        wsc.send(JSON.stringify(JsonData));
    }

    document.getElementById("onoff4").onchange = function () {
        var JsonData;
        if (document.getElementById("onoff4").checked) {
            JsonData = { light: 4, state: "ON" };
        } else {
            JsonData = { light: 4, state: "OFF" };
        }
        wsc.send(JSON.stringify(JsonData));
    }
});