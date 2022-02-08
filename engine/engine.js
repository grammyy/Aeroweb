 
var console = document.getElementById("console");
setInterval(function() { clock();}, 500);
const WelMSG = [
    "░█████╗░███████╗██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░",
    "██╔══██╗██╔════╝██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗",
    "███████║█████╗░░██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╦╝",
    "██╔══██║██╔══╝░░██╔══██╗██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗",
    "██║░░██║███████╗██║░░██║╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██████╦╝",
    "╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░",
    "══════════════════════════════════════════════════════════════",
    "IMPORTANT! THIS WEBSITE IS NOT FINISHED AND PROBABLY WON'T BE FOR A LONG TIME.",
    "IF YOU'RE SEEKING COMMUNICATION, DM THE DISCORD ACCOUNT: Bartender#0531"]
//const songs = require('../packages/songs.json');
function clock() { var cl = new Date(); document.getElementById("clock").innerHTML = cl.toLocaleTimeString();}
var con = function(request){
        request.forEach(element => console.insertAdjacentHTML("beforeend","<p>"+element+"</p>"))}
function init(){
    con(WelMSG);
}
init();