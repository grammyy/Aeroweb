//initialize(); 
setInterval(function() { clock();}, 500);
function clock() { var cl = new Date(); document.getElementById("clock").innerHTML = cl.toLocaleTimeString();}
var printText = ""+
"░█████╗░███████╗██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░/n"+
"██╔══██╗██╔════╝██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗/n"+
"███████║█████╗░░██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╦╝/n"+
"██╔══██║██╔══╝░░██╔══██╗██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗/n"+
"██║░░██║███████╗██║░░██║╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██████╦╝/n"+
"╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░/n"+
"══════════════════════════════════════════════════════════════/n"+
"Console version: 1.0; complete recode coming soon./n"+
"Python support coming soon!/n"
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
//function initialize() { }

