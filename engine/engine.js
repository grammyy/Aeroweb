let color = "red"; let size = 0; var index=0
const WelMSG = [
    "░█████╗░███████╗██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░",
    "██╔══██╗██╔════╝██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗",
    "███████║█████╗░░██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╦╝",
    "██╔══██║██╔══╝░░██╔══██╗██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗",
    "██║░░██║███████╗██║░░██║╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██████╦╝",
    "╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░",
    "══════════════════════════════════════════════════════════════",
    "You can find the credits to all code/media artists in the HTML page source.",
    "-Adding a bunch of HTTP requests functions for dyanmic data along with proper coloring settings.",
    "-Working on neco-arc fighter HTML5 game.",
    "==-----------------------------------------------------------------------------------------------------------------------------==",
    "+Added Keybinds and Cookies",
    "+Added multiple public google docs, API controls coming soon",
    "+Added Proxy (miniProxy)",
    "+Added Cloth Sim (@abro_oks)",
    "+Added Cookie Clicker 2.031 (Latest version)"]
const universes = [["Cloth Sim","cloth.html"],["Encrypted Web Proxy","https://aerophp.000webhostapp.com"],["Cookie Clicker 2.031","CC2031.html"],["Console Emulator","CESTE.html"],["Flex Background","FLPBE.html"]]
const database = [["Public DOC.1","https://docs.google.com/document/d/1_qpvRk_4rMYjyb9gz8h2HkStVHwUBYWUdFRi_FO-vC8/edit?usp=sharing","Document"],["Public DOC.2","https://docs.google.com/document/d/1gO_NaXDcCk9OZRklirPDxB5kVp1NdOV7quAHqXSVnaE/edit?usp=sharing","Document"],["Public DOC.3","https://docs.google.com/document/d/1WHgwzGz4EVP2nYBiky0ikJohPukdAVOUQYvLOe6A5-E/edit?usp=sharing","Document"],["PAC Module","Python","https://github.com/BartenderWinery/PAC/releases/download/module/pac.py"],["Youtubmp4","Python","https://github.com/BartenderWinery/Youtubmp4/releases/download/release/Youtubmp4.exe"],["Algorithms","Example Package",""]]
const shelf = [[["Operating Sub-system: [Unfinished]",""]],[["Cookie Clicker 2.031: [Orteil.dashnet]","onclick=exec('resize',1);link('multiverse/CC2031.html')"],["Neco-Arc Arcade: [Unfinshed]"],["Encrypted Proxy: [MiniProxy]","onclick=exec('resize',1);link('https://aerophp.000webhostapp.com')"],["Ported Website: [Developer Branch]","onclick=exec('resize',2);link('https://aerophp.000webhostapp.com/substage/index.html')"]]]
//onclick=exec('resize',2);link('engine/os.html')

var analog=document.getElementById("analog")
var local=document.getElementById("local")
var clock=document.getElementById("clock")

var win = document.getElementById("universal");
var con = document.getElementById("con");
var inspect = document.getElementById("inspect");
var c = document.getElementById("c");
var cc = document.getElementById("cc");
var rcon = document.getElementById("rcon");
var execute = document.getElementById("execute");
var toolkit = document.getElementById("toolkit");

var overlay = document.getElementById("overlay");

var mv=document.getElementById("multiverse");
var fr=document.getElementById("folder");
var frs=document.getElementById("frs");
var ls=document.getElementById("list");
var exec = function(ex,array){
    switch(ex){
        case "color":
            document.querySelectorAll('div').forEach(function(node) {
                color=array
                node.style.color = color; node.style.borderColor = color;
                if(node.className=="button"){
                    node.style.backgroundColor = color
                }
            });
            document.querySelectorAll('p').forEach(function(node) {
                color=array; node.style.color = color; node.style.borderColor = color;
            });
            document.querySelectorAll('input').forEach(function(node) {
                color=array; node.style.color = color; node.style.borderColor = color;
            });
            document.querySelectorAll('li').forEach(function(node) {
                color=array; node.style.color = color; node.style.borderColor = color;
            });
            document.querySelectorAll('a').forEach(function(node) {
                color=array; node.style.color = color; node.style.borderColor = color;
            });
            Cookies.set("color",color)
            break;
        case "log":
            array.forEach(element => con.insertAdjacentHTML("beforeend","<p style='position: sticky; z-index: 2; color: "+color+"; opacity: inherit !important'>"+element+"</p>"))
            break;
        case "inspect":
            array.forEach((element) => { index++
                inspect.insertAdjacentHTML("beforeend","<p id="+element.toString().replace(/ /g,"-")+index+" style='position: sticky; right: 0; z-index: 3; color: "+color+"'>"+element+"</p>")
                fade(document.getElementById(element.toString().replace(/ /g,"-")+index), 2000, 2000);
            }); 
            break;
        case "linebreak":
            var ran = Math.random()
            inspect.insertAdjacentHTML("beforeend","<p id='linebreak"+ran+"' style='margin-left: fit-content; height: 11px'></p>")
            fade(document.getElementById("linebreak"+ran), 2000, 2000);
            break;
        case "resize":
            switch(array){
                case 0:
                    con.style = "height: 66%; width: 73%; position: absolute; margin: 0.5%";
                    c.style = "visibility: visible"; c.style.backgroundColor = color; c.setAttribute("onclick","exec('resize', 1)");
                    cc.style = "visibility: visible"; cc.style.backgroundColor = color; cc.setAttribute("onclick","exec('resize', 2)");
                    toolkit.style = "position: absolute"
                    mv.style = "visibility: visible";
                    fr.style = "visibility: visible";
                    ls.style = "visibility: visible";
                    win.style.height = "80%"
                    win.style.width = "90%"
                    win.style.borderStyle = "groove";

                    size=0; Cookies.set("size",0)
                    break;
                case 1:
                    con.style = "height: 100%; width: 100%; position: initial; margin: 0";
                    c.style = "visibility: visible; position: fixed; top: 0"; c.style.backgroundColor = color;  c.setAttribute("onclick","exec('resize', 0)");
                    cc.style = "visibility: hidden"; cc.style.backgroundColor = color;
                    toolkit.style = "position: fixed; top:0; right: 0"
                    mv.style = "visibility: hidden";
                    fr.style = "visibility: hidden";
                    ls.style = "visibility: hidden";
                    win.style.height = "80%"
                    win.style.width = "90%"
                    win.style.borderStyle = "groove";

                    size=1; Cookies.set("size",1)
                    break;
                case 2: 
                    con.style = "height: 100%; width: 100%; position: initial; margin: 0";
                    c.style = "visibility: hidden"; c.style.backgroundColor = color;
                    cc.style = "visibility: visible"; cc.style.backgroundColor = color; cc.setAttribute("onclick","exec('resize', 0)");
                    toolkit.style = "position: fixed; top:0; right: 0"
                    mv.style = "visibility: hidden";
                    fr.style = "visibility: hidden";
                    ls.style = "visibility: hidden";

                    win.style.height = "100%"
                    win.style.width = "100%"
                    win.style.borderStyle = "none";

                    size=2; Cookies.set("size",2)
                    break;
            }
            if(op!=0){con.style.opacity = "100%";}
            break;
        case "clear":
            var p = document.getElementsByTagName('p');
            var frame = document.getElementsByTagName('iframe');
            var code = document.getElementsByTagName('code');
            while(p[0]) { p[0].parentNode.removeChild(p[0]); }
            while(frame[0]) { frame[0].parentNode.removeChild(frame[0]); }
            while(code[0]) { code[0].parentNode.removeChild(code[0]); }
            con.style.opacity = "80%";
            break;
    }
}
var clear = function(){
    var p = document.getElementsByTagName('p');
    while(p[0]) { p[0].parentNode.removeChild(p[0]); }
}
function fade( obj, delay, speed ) {
    setTimeout(function(){
        obj.style.transition = "opacity "+speed/1000+"s ease"; 
        obj.style.opacity = 0;
        setTimeout(function() { 
            obj.parentNode.removeChild(obj);
        }, speed);
    },delay);
}
var link = function(link){
    try{
        exec("clear")
        con.insertAdjacentHTML("afterBegin","<iframe id='worker' src=./multiverse/"+universes[link][1]+"></iframe>");
    }catch{
        exec("clear")
        con.insertAdjacentHTML("afterBegin","<iframe id='worker' src="+link+"></iframe>");
    }
    //top.worker.contentWindow.document.body.insertAdjacentHTML("beforeEnd","<script src='engine/system.js'></script>")
    con.style.opacity = "100%"; op=1; Cookies.set("program",link)
}
function loop(){
    execute.setAttribute("onclick","exec('inspect',['"+rcon.value+" :<<']); try{"+rcon.value+"; Cookies.set('rcon','"+rcon.value+"')}catch(err){exec('inspect',[err]); book(err)}"); rcon.setAttribute("onchange","exec('inspect',['"+rcon.value+" :<<']); try{"+rcon.value+"; Cookies.set('rcon','"+rcon.value+"')}catch(err){exec('inspect',[err]); book(err)}")
    analog.innerHTML=Date.now()
    if(size!=0){con.scrollTop = con.scrollHeight; inspect.scrollTop = inspect.scrollHeight}
}
function tick(){
    now=new Date(); clock.innerHTML=now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()
}
//var win = function(ID,length,CSS){ this is so bad it hurts
//    function runtime(){
//        
//    }
//    function init(){
//        //setInterval(runtime,tps)
//        exec("inspect",["placeholder"+" : Win <<"])
//
//        overlay.insertAdjacentHTML("beforeend","<div id='"+ID+"'></div>"); ID = document.getElementById(ID); dragElement(ID)
//        ID.style = "position: absolute; background-color: purple"+"; width: "+length[0]+"; height: "+length[1]+"; "+CSS;
//        function dragElement(elmnt) {
//            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//            if (document.getElementById(elmnt.id + "header")) {
//              // if present, the header is where you move the DIV from:
//              document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//            } else {
//              // otherwise, move the DIV from anywhere inside the DIV:
//              elmnt.onmousedown = dragMouseDown;
//            }
//            function dragMouseDown(e) {
//                e = e || window.event;
//                e.preventDefault();
//                // get the mouse cursor position at startup:
//                pos3 = e.clientX;
//                pos4 = e.clientY;
//                document.onmouseup = closeDragElement;
//                // call a function whenever the cursor moves:
//                document.onmousemove = elementDrag;
//              }
//            function elementDrag(e) {
//              e = e || window.event;
//              e.preventDefault();
//              // calculate the new cursor position:
//              pos1 = pos3 - e.clientX;
//              pos2 = pos4 - e.clientY;
//              pos3 = e.clientX;
//              pos4 = e.clientY;
//              // set the element's new position:
//              elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//              elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//            }
//        
//            function closeDragElement() {
//              // stop moving when mouse button is released:
//              document.onmouseup = null;
//              document.onmousemove = null;
//            }
//        }
//    }
//    init()
//}
var file = function(disk,files){
    frs.insertAdjacentHTML("beforeend",'<li style="padding-bottom: 10px" class="folders" >'+disk+'<ul style="padding-left: 20px; display: flex; flex-direction: column" id="'+disk+'ul'+'"></ul></li>')
    files.forEach((value) => { value[0]=value[0].split(":");
        document.getElementById(disk+'ul').insertAdjacentHTML("beforeend",'<a '+value[1]+' class="folders" >'+value[0][0]+'<label style="color: yellow; margin-left: auto; right: 0">'+value[0][1]+'</label></a>')
    })
}
var init = function(){
    setInterval(loop,100)
    setInterval(tick,500)

    file("SYSTEMS",shelf[0])
    file("PROGRAMS",shelf[1])
    for (let step = 0; step < universes.length; step++) {
        if(universes[step][1].split(":")[0]=="https"){
            mv.insertAdjacentHTML("beforeend",'<div onclick=link('+"'"+universes[step][1]+"'"+') class=verse desktop>'+universes[step][0]+'</div>')
        }else{
            mv.insertAdjacentHTML("beforeend",'<div onclick=link('+step+') class=verse desktop>'+universes[step][0]+'</div>')
        }
        exec("inspect",[universes[step][0]+" : Verse <<"])
    }
    for (let step = 0; step < database.length; step++) {
        if(database[step][1].split(":")[0]=="https"){
            ls.insertAdjacentHTML("beforeend",'<div onclick=link('+"'"+database[step][1]+"'"+') class=database desktop>'+database[step][0]+'<label style="color: grey; margin-left: auto; right: 0">'+database[step][2]+'</label></div>')
        }else{
            ls.insertAdjacentHTML("beforeend",'<div onclick='+"window.open('"+database[step][2]+"')"+' class=database desktop>'+database[step][0]+'<label style="color: grey; margin-left: auto; right: 0">'+database[step][1]+'</label></div>')
        }
        //ls.insertAdjacentHTML("beforeend",'<div href='+"'"+database[step][1]+"'"+' class=database desktop>'+database[step][0]+'</div>')
        exec("inspect",[database[step][0]+" : List <<"])
    }
    exec("color",Cookies.get("color"))
    exec("resize",parseInt(Cookies.get("size")))
    
    exec("log",WelMSG)

    var pack=[Cookies.get("program"),Cookies.get("rcon")] //Packages the cookies and creates them for process if none present
    switch(pack[0]){
        case null:
            break;
        case undefined:
            break;
        case "undefined":
            break;
        default:
            link(pack[0]); clear()
            break;
    }
    switch(pack[1]){
        case null:
            break;
        case undefined:
            break;
        case "undefined":
            break;
        default:
            rcon.value = pack[1]
            break;
    }
    if(size!=0){document.getElementById("score").remove()}
}
var op=0
init()