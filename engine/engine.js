 
setInterval(function() { clock();}, 500);
function clock() { var cl = new Date(); document.getElementById("clock").innerHTML = cl.toLocaleTimeString();}
function rcon(type, array) { 
    switch(type){
        case "console":
            const package = {log: "Logged message from console; formatted as const;"}
            console.info(package.log); console.log(array);
            break
        
    }
}
const helloworld = ""+
"░█████╗░███████╗██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░/n"+
"██╔══██╗██╔════╝██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗/n"+
"███████║█████╗░░██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╦╝/n"+
"██╔══██║██╔══╝░░██╔══██╗██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗/n"+
"██║░░██║███████╗██║░░██║╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██████╦╝/n"+
"╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░/n"+
"══════════════════════════════════════════════════════════════/n"+
"Console version: 2.0; Github independant version coming soon."
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
con(helloworld)