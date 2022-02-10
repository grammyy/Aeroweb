 
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
const Changelog = [
    "==---------------------------------------------------------------------------------------------==",
    "+Added Cookie Clicker 2.031 (Latest version)"
]
//const songs = require('../packages/songs.json');
function clock() { var cl = new Date(); document.getElementById("clock").innerHTML = cl.toLocaleTimeString();}
var con = function(func,request){
    switch(func){
        case "log":
            request.forEach(element => console.insertAdjacentHTML("beforeend","<p>"+element+"</p>"))
            break;
        case "clear":
            console.innerHTML="";
            console.style.opacity = "60%";
            break;
    }
}
    //
function init(){
    con("log",WelMSG);
    con("log",Changelog)
}
init();