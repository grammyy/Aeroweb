window.onload = function () { console.log("Aeroweb initized; https://github.com/BartenderWinery");}

var myVar = setInterval(function() { clock();}, 0);
function clock() { var d = new Date(); document.getElementById("clock").innerHTML = d.toLocaleTimeString();}