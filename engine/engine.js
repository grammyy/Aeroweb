function exec(func,data){
    switch(func){ //Add try developer cons later
        case "log":
            data.forEach(element => con.insertAdjacentHTML("beforeend","<p style='position: sticky; z-index: 2; color: "+rgb+"; opacity: inherit !important'>"+element+"</p>"))
            break;
        case "inspect":
            data.forEach((element) => { index++
                inspect.insertAdjacentHTML("beforeend","<p id="+element.toString().replace(/ /g,"-")+index+" style='position: sticky; right: 0; z-index: 3; color: "+color+"'>"+element+"</p>")
                exec("fade",[document.getElementById(element.toString().replace(/ /g,"-")+index), 2000, 2000]);
            }); 
            break;
        case "linebreak":
            var ran = Math.random()
            inspect.insertAdjacentHTML("beforeend","<p id='linebreak"+ran+"' style='margin-left: fit-content; height: 11px'></p>")
            exec("fade",[document.getElementById("linebreak"+ran), 2000, 2000]);
            break;
        case "fade":
                setTimeout(function(){
                    data[0].style.transition = "opacity "+data[2]/1000+"s ease"; 
                    data[0].style.opacity = 0;
                    setTimeout(function() { 
                        data[0].parentNode.removeChild(data[0]);
                    }, data[2]);
                },data[1]);
                break;
        case "link":
            try{
                clear("global"); con.style.opacity = "100%"
                con.insertAdjacentHTML("afterBegin","<iframe id='worker' src=./multiverse/"+universes[data[0]][1]+"></iframe>");
                Cookies.set("program","./multiverse/"+universes[data[0]][1])
            }catch{
                clear("global"); con.style.opacity = "100%"
                con.insertAdjacentHTML("afterBegin","<iframe id='worker' src="+data[0]+"></iframe>");
                Cookies.set("program",universes[data[0]][1])
            }
            //top.worker.contentWindow.document.body.insertAdjacentHTML("beforeEnd","<script src='engine/system.js'></script>")
            con.style.opacity = "100%"
            break;
        case "files":
                folders.insertAdjacentHTML("beforeend",'<li style="padding-bottom: 10px" class="folders" >'+data[0]+'<ul style="padding-left: 20px; display: flex; flex-direction: column" id="'+data[0]+'ul'+'"></ul></li>')
                data[1].forEach((value) => { value[0]=value[0].split(":");
                    document.getElementById(data[0]+'ul').insertAdjacentHTML("beforeend",'<a '+value[1]+' class="folders" >'+value[0][0]+'<label style="color: yellow; margin-left: auto; right: 0">'+value[0][1]+'</label></a>')
                })
            break;
    }
}
function resize(data){
    switch(data){
        case 0:
            con.style = "height: 66%; width: 73%; position: absolute; margin: 0.5%";
            c.style = "visibility: visible"; c.style.backgroundColor = rgb; c.setAttribute("onclick","resize(1)");
            cc.style = "visibility: visible"; cc.style.backgroundColor = rgb; cc.setAttribute("onclick","resize(2)");
            toolkit.style = "position: absolute"
            multiverse.style = "visibility: visible";
            folder.style = "visibility: visible";
            list.style = "visibility: visible";
            universal.style.height = "80%"
            universal.style.width = "90%"
            universal.style.borderStyle = "groove";

            size=0;Cookies.set("size",0)
            break;
        case 1:
            con.style = "height: 100%; width: 100%; position: initial; margin: 0";
            c.style = "visibility: visible; position: fixed; top: 0"; c.style.backgroundColor = rgb;  c.setAttribute("onclick","resize(0)");
            cc.style = "visibility: hidden"; cc.style.backgroundColor = rgb;
            toolkit.style = "position: fixed; top:0; right: 0"
            multiverse.style = "visibility: hidden";
            folder.style = "visibility: hidden";
            list.style = "visibility: hidden";
            universal.style.height = "80%"
            universal.style.width = "90%"
            universal.style.borderStyle = "groove";

            size=1;Cookies.set("size",1)
            break;
        case 2:
            con.style = "height: 100%; width: 100%; position: initial; margin: 0";
            c.style = "visibility: hidden"; c.style.backgroundColor = rgb;
            cc.style = "visibility: visible"; cc.style.backgroundColor = rgb; cc.setAttribute("onclick","resize(0)");
            toolkit.style = "position: fixed; top:0; right: 0"
            multiverse.style = "visibility: hidden";
            folder.style = "visibility: hidden";
            list.style = "visibility: hidden";

            universal.style.height = "100%"
            universal.style.width = "100%"
            universal.style.borderStyle = "none";

            size=2;Cookies.set("size",2)
            break;
    }
    if(size!=0){ 
        con.style.opacity = "100%"
        score.remove()
    }else{ 
        con.style.opacity = "80%"
    }
}
function color(rgb){
    document.querySelectorAll('div').forEach(function(node) {
        node.style.color = rgb; node.style.borderColor = rgb;
        if(node.className=="button"){ node.style.backgroundColor = rgb}
    });
    document.querySelectorAll('p').forEach(function(node) {
        node.style.color = rgb
    });
    document.querySelectorAll('input').forEach(function(node) {
        node.style.color = rgb
    });
    document.querySelectorAll('li').forEach(function(node) {
        node.style.color = rgb
    });
    document.querySelectorAll('a').forEach(function(node) {
        node.style.color = rgb
    });
    //; node.style.borderColor = rgb;
    Cookies.set("color",rgb)
}
function clear(func){
    function re(obj){ obj.parentNode.removeChild(obj)}
    switch(func){
        case "con":
            var obj = document.getElementsByTagName("p")
            while(obj[0]){re(obj[0])}
            break;
        case "global":
            objs.forEach((value)=>{
                var obj = document.getElementsByTagName(value)
                while(obj[0]){re(obj[0])}
                con.style.opacity = "80%"
            })}
}
(function(){
    //document.addEventListener('readystatechange', function() { console.log("Fiered '" + document.readyState + "' after " + performance.now() + " ms"); });
    //document.addEventListener('DOMContentLoaded', function() { console.log("Fiered DOMContentLoaded after " + performance.now() + " ms"); }, false);
    //window.addEventListener('load', function() { console.log("Fiered load after " + performance.now() + " ms"); }, false);
    setInterval(function(){
        execute.setAttribute("onclick","exec('inspect',['"+rcon.value+" :<<']); try{"+rcon.value+"; Cookies.set('rcon','"+rcon.value+"')}catch(err){exec('inspect',[err]); book(err)}"); rcon.setAttribute("onchange","exec('inspect',['"+rcon.value+" :<<']); try{"+rcon.value+"; Cookies.set('rcon','"+rcon.value+"')}catch(err){exec('inspect',[err]); book(err)}")
        clock.innerHTML=new Date().toLocaleTimeString()
        //add auto scrolling
    },500);
    setInterval(function(){
        analog.innerHTML=Date.now()
    },100);
    
    exec("files",["SYSTEMS",shelf[0]])
    exec("files",["PROGRAMS",shelf[1]])
    for (let step = 0; step < universes.length; step++) {
        if(universes[step][1].split(":")[0]=="https"){
            multiverse.insertAdjacentHTML("beforeend",'<div onclick=exec("link",'+"['"+universes[step][1]+"']"+') class=verse desktop>'+universes[step][0]+'</div>')
        }else{
            multiverse.insertAdjacentHTML("beforeend",'<div onclick=exec("link",['+step+']) class=verse desktop>'+universes[step][0]+'</div>')
        }
        exec("inspect",[universes[step][0]+" : Verse <<"])
    }
    for (let step = 0; step < database.length; step++) {
        if(database[step][1].split(":")[0]=="https"){
            list.insertAdjacentHTML("beforeend",'<div onclick=exec("link",'+"['"+database[step][1]+"']"+') class=database desktop>'+database[step][0]+'<label style="color: grey; margin-left: auto; right: 0">'+database[step][2]+'</label></div>')
        }else{
            list.insertAdjacentHTML("beforeend",'<div onclick='+"window.open('"+database[step][2]+"')"+' class=database desktop>'+database[step][0]+'<label style="color: grey; margin-left: auto; right: 0">'+database[step][1]+'</label></div>')
        }
        //ls.insertAdjacentHTML("beforeend",'<div href='+"'"+database[step][1]+"'"+' class=database desktop>'+database[step][0]+'</div>')
        exec("inspect",[database[step][0]+" : List <<"])
    }
    function bake(data){ 
        switch(data){
            case null:
                return false
            case undefined:
                return false
            case "undefined":
                return false
            default:
                return true,data
        }
    }//{return true,data}else{return false}}//embed into actual script later
    if(bake(Cookies.get("program"))){exec("link",[Cookies.get("program")]); clear("global")}
    if(bake(Cookies.get("rcon"))){rcon.value = Cookies.get("rcon")}

    scoreInner.innerHTML=rank
    resize(parseInt(Cookies.get("size"))); size=parseInt(Cookies.get("size"))
    exec("log",WelMSG)
    color(Cookies.get("color"))
})()
