 
setInterval(function() { clock();}, 500);

const WelMSG = ""+
"░█████╗░███████╗██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░/n"+
"██╔══██╗██╔════╝██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗/n"+
"███████║█████╗░░██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╦╝/n"+
"██╔══██║██╔══╝░░██╔══██╗██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗/n"+
"██║░░██║███████╗██║░░██║╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██████╦╝/n"+
"╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░/n"+
"══════════════════════════════════════════════════════════════/n"+
"IMPORTANT! THIS WEBSITE IS NOT FINISHED AND PROBABLY WON'T BE FOR A LONG TIME./n"+
"IF YOU'RE SEEKING COMMUNICATION, DM THE DISCORD ACCOUNT: Bartender#0531"
//const songs = require('../packages/songs.json');
function clock() { var cl = new Date(); document.getElementById("clock").innerHTML = cl.toLocaleTimeString();}
function rcon(type, array) { 
    switch(type){
        case "console":
            const package = {log: "Logged message from console; formatted as const;"}
            console.info(package.log); console.log(array);
            break
        
    }
}
function con(request){
    var array = request.split("/n");
    rcon("console", array);
    $.each(array, function(index) {
        $('.text').append('<span style="display:block;" id="'+index+'"></span>');
        var lineID = index; var self = $(this);
          setTimeout(function () {
            $.each(self, function(index, chunk){ setTimeout(function () {
                  $('#'+lineID).append("<span>"+chunk+"</span>");
                  $('body, html').scrollTop($(document).height());
              }, index*5);}); }, index*100);});
}
function init(){
    con(WelMSG);
}
init();