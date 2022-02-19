let color = "red"
const WelMSG = [
    "░█████╗░███████╗██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░",
    "██╔══██╗██╔════╝██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗",
    "███████║█████╗░░██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╦╝",
    "██╔══██║██╔══╝░░██╔══██╗██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗",
    "██║░░██║███████╗██║░░██║╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██████╦╝",
    "╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░",
    "══════════════════════════════════════════════════════════════",
    "If the layout of this website seems wrong, your HTML scale may be too low",
    "The problem is fixable, it just would take a while. Expect a proper layout update soon.",
    "==---------------------------------------------------------------------------------------------==",
    "+Added Proxy (miniProxy)",
    "+Added Cloth Sim (@abro_oks)",
    "+Added Cookie Clicker 2.031 (Latest version)"]
const universes = [["Cloth Sim","cloth.html"],["Encrypted Web Proxy","https://aerophp.000webhostapp.com"],["Cookie Clicker 2.031","CC2031.html"],["Console Emulator","CESTE.html"],["Flex Background","FLPBE.html"]]
const items = [[]]

var clock=document.getElementById("clock")
var win = document.getElementById("universal");
var con = document.getElementById("con");
var inspect = document.getElementById("inspect");
var c = document.getElementById("c");
var cc = document.getElementById("cc");
var rcon = document.getElementById("rcon");
var execute = document.getElementById("execute");

var mv=document.getElementById("multiverse");
var fr=document.getElementById("folder");
var ls=document.getElementById("list");
var exec = function(ex,array){
    switch(ex){
        case "color":
            color=array; console.log("[== New color: "+color+" ==]")
            break;
        case "log":
            array.forEach(element => con.insertAdjacentHTML("beforeend","<p style='position: sticky; z-index: 2; color: "+color+"'>"+element+"</p>"))
            break;
        case "inspect":
            array.forEach(element => inspect.insertAdjacentHTML("beforeend","<p style='position: sticky; right: 0; z-index: 3; color: "+color+"'>"+element+"</p>"), element => console.log(element))
            break;
        case "resize":
            switch(array){
                case 0:
                    con.style = "height: 66%; width: 73%; position: absolute; margin: 0.5%";
                    c.style = "visibility: visible; top: 6%"; c.setAttribute("onclick","exec('resize', 1)");
                    cc.style = "visibility: visible; position: absolute"; cc.setAttribute("onclick","exec('resize', 2)");
                    mv.style = "visibility: visible";
                    fr.style = "visibility: visible";
                    ls.style = "visibility: visible";
                    win.style = "height: 80%; width: 90%; border: 1px dotted red";
                    break;
                case 1:
                    con.style = "height: 100%; width: 100%; position: initial; margin: 0";
                    c.style = "visibility: visible; position: fixed; top: 0";  c.setAttribute("onclick","exec('resize', 0)");
                    cc.style = "visibility: hidden";
                    mv.style = "visibility: hidden";
                    fr.style = "visibility: hidden";
                    ls.style = "visibility: hidden";
                    win.style = "height: 80%; width: 90%; border: 1px dotted red";
                    break;
                case 2: 
                    con.style = "height: 100%; width: 100%; position: initial; margin: 0";
                    c.style = "visibility: hidden";
                    cc.style = "visibility: visible; position: fixed";  cc.setAttribute("onclick","exec('resize', 0)");
                    mv.style = "visibility: hidden";
                    fr.style = "visibility: hidden";
                    ls.style = "visibility: hidden";
                    win.style = "height: 100%; width: 100%; border: unset";
                    break;
            }
            if(op!=0){con.style.opacity = "100%";}
            break;
        case "clear":
            var p = document.getElementsByTagName('p');
            var frame = document.getElementsByTagName('iframe');
            while(p[0]) { p[0].parentNode.removeChild(p[0]); }
            while(frame[0]) { frame[0].parentNode.removeChild(frame[0]); }
            con.style.opacity = "60%";
            break;
    }
}
var link = function(link){
    try{
        con.insertAdjacentHTML("beforeend","<iframe id='worker' src=./multiverse/"+universes[link][1]+"></iframe>");
    }catch{
        con.insertAdjacentHTML("beforeend","<iframe id='worker' src="+link+"></iframe>");
    }
    con.style.opacity = "100%"; op=1
}
function loop(){
    clock.innerHTML= Date.now(); //Add localtime and other events such as the time that a golden cookie is going to occure.
    con.scrollTop = con.scrollHeight; inspect.scrollTop = inspect.scrollHeight
}
var init = function(){
    setInterval(loop,100);
    for (let step = 0; step < universes.length; step++) {
        if(universes[step][1].split(":")[0]=="https"){
            mv.insertAdjacentHTML("beforeend",'<div onclick=link('+"'"+universes[step][1]+"'"+') class=verse desktop>'+universes[step][0]+'</div>')
        }else{
            mv.insertAdjacentHTML("beforeend",'<div onclick=link('+step+') class=verse desktop>'+universes[step][0]+'</div>')
        }
        exec("inspect",[universes[step][0]+" : Init <<"]);
    }
        //universes.forEach(element => mv.insertAdjacentHTML("beforeend",'<div onclick="link('+element[1]+')" id="'+element[1]+'" class="verse desktop">'+element[0]+'</div>'))
    
    exec("log",WelMSG);
}
var op=0
init();
//$.ajax({ url: 'your-url', success: function(data) { alert(data); } });