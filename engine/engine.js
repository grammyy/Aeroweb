//initialize(); 
setInterval(function() { clock();}, 0);
function clock() { var cl = new Date(); document.getElementById("clock").innerHTML = cl.toLocaleTimeString();}
var printText = ""+
"░█████╗░███████╗██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░/n"+
"██╔══██╗██╔════╝██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗/n"+
"███████║█████╗░░██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╦╝/n"+
"██╔══██║██╔══╝░░██╔══██╗██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗/n"+
"██║░░██║███████╗██║░░██║╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██████╦╝/n"+
"╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░/n"+
"══════════════════════════════════════════════════════════════/n"
var contentArray = printText.split("/n");
$.each(contentArray, function(index) {
  $('.text').append('<span style="display:block;" id="'+index+'"></span>');

  var lineID = index; var self = $(this);
    setTimeout(function () {
      $.each(self, function(index, chunk){ setTimeout(function () {
            $('#'+lineID).append("<span>"+chunk+"</span>");
            $('body, html').scrollTop($(document).height());
        }, index*5);}); }, index*100); });
var grid = $(".grid")
for (let step = 0; step < 2; step++) {
$('.grid').prepend('<div id="'+'universe'+step+'" class="verse"></div>');}
//function initialize() { }

