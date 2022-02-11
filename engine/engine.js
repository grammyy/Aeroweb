var universal = document.getElementById("universal");
var console = document.getElementById("console");
var control = document.getElementById("control");
var controller = document.getElementById("controller");
var fullscreen=0
var fullscreener=0
setInterval(function() { clock();}, 500);
const WelMSG = [
    "░█████╗░███████╗██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░",
    "██╔══██╗██╔════╝██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗",
    "███████║█████╗░░██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╦╝",
    "██╔══██║██╔══╝░░██╔══██╗██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗",
    "██║░░██║███████╗██║░░██║╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██████╦╝",
    "╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░",
    "══════════════════════════════════════════════════════════════",
    "If the layout of this website seems wrong, your HTML scale may be too low",
    "The problem is fixable, it just would take a while. Expect a proper layout update soon."]
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
                case "screen":
                    if (fullscreen==0){ //needs improving lol
                        console.style.height = "100%";
                        console.style.width = "100%";
                        console.style.position = "initial";
                        console.style.margin = "0";
                        document.getElementById("folder").style.visibility = "hidden";
                        document.getElementById("multiverse").style.visibility = "hidden";
                        controller.style.visibility = "hidden";
                        control.style.visibility = "visible";
                        control.style.position = "fixed";
                        control.style.top = "0";
                        fullscreen=1
                    } else {
                        console.style.height = "66%";
                        console.style.width = "73%";
                        console.style.position = "absolute";
                        console.style.margin = "0.5%";
                        document.getElementById("folder").style.visibility = "visible";
                        document.getElementById("multiverse").style.visibility = "visible";
                        control.style.visibility = "visible";
                        control.style.position = "absolute";
                        controller.style.visibility = "visible";
                        control.style.top = "6%";
                        fullscreen = 0 
                    }
                    break;
                    case "fullscreen":
                        if (fullscreener==0){ //needs improving lol
                            console.style.height = "100%";
                            console.style.width = "100%";
                            console.style.position = "initial";
                            console.style.margin = "0";
                            document.getElementById("folder").style.visibility = "hidden";
                            document.getElementById("multiverse").style.visibility = "hidden";
                            controller.style.visibility = "visible";
                            controller.style.position = "fixed";
                            control.style.visibility = "hidden";
                            universal.style.height = "100%";
                            universal.style.width = "100%";
                            universal.style.border = "unset";
                            fullscreener = 1
                        } else {
                            console.style.height = "66%";
                            console.style.width = "73%";
                            console.style.position = "absolute";
                            console.style.margin = "0.5%";
                            document.getElementById("folder").style.visibility = "visible";
                            document.getElementById("multiverse").style.visibility = "visible";
                            controller.style.visibility = "visible";
                            controller.style.position = "absolute";
                            control.style.visibility = "visible";
                            universal.style.height = "80%";
                            universal.style.width = "90%";
                            universal.style.border = "1px dotted red";
                            fullscreener = 0 
                        }
                        break;
                        case "clear":
                            console.innerHTML="";
                            console.style.opacity = "60%";
                            break;
    }
}
function init(){
    con("log",WelMSG);
    con("log",Changelog)
}
init();