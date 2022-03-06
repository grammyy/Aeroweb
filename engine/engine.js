var engine = {
    resize:function(data){
        switch(data){
            case 0:
                con.style = "height: 66%; width: 73%; position: absolute; margin: 0.5%";
                c.style = "visibility: visible" 
                c.style.backgroundColor = color 
                cc.style = "visibility: visible" 
                cc.style.backgroundColor = color 
                c.setAttribute("onclick","engine.resize(1)")
                cc.setAttribute("onclick","engine.resize(2)")

                toolkit.style = "position: absolute"
                multiverse.style = "visibility: visible"
                folder.style = "visibility: visible"
                list.style = "visibility: visible"
                universal.style.height = "80%"
                universal.style.width = "90%"
                universal.style.borderStyle = "groove"
    
                size=0;Cookies.set("size",0)
                break;
            case 1:
                con.style = "height: 100%; width: 100%; position: initial; margin: 0"
                c.style = "visibility: visible; position: fixed; top: 0" 
                c.style.backgroundColor = color  
                cc.style = "visibility: hidden";
                cc.style.backgroundColor = color
                c.setAttribute("onclick","engine.resize(0)")
                
                toolkit.style = "position: fixed; top:0; right: 0"
                multiverse.style = "visibility: hidden"
                folder.style = "visibility: hidden"
                list.style = "visibility: hidden"
                universal.style.height = "80%"
                universal.style.width = "90%"
                universal.style.borderStyle = "groove"
    
                size=1;Cookies.set("size",1)
                break;
            case 2:
                con.style = "height: 100%; width: 100%; position: initial; margin: 0"
                c.style = "visibility: hidden"; c.style.backgroundColor = color
                cc.style = "visibility: visible"; cc.style.backgroundColor = color
                cc.setAttribute("onclick","engine.resize(0)");

                toolkit.style = "position: fixed; top:0; right: 0"
                multiverse.style = "visibility: hidden"
                folder.style = "visibility: hidden"
                list.style = "visibility: hidden"
    
                universal.style.height = "100%"
                universal.style.width = "100%"
                universal.style.borderStyle = "none"
    
                size=2;Cookies.set("size",2)
                break;
        }
        if(size!=0){ 
            con.style.opacity = "100%"
            score.remove()
        }else{ 
            con.style.opacity = "80%"
        }
    },
    exec:function(func,data){
        switch(func){ //Add try developer cons later
            case "log":
                for(var index=0,len=data.length;index<len;index++){
                    if(data[index]!="/linebreak/"){
                        con.insertAdjacentHTML("beforeend","<p style='position: sticky; z-index: 2; color: "+color+"; opacity: inherit !important'>"+data[index]+"</p>")
                    }else{
                        con.insertAdjacentHTML("beforeend","<p style='margin-left: fit-content; height: 11px'></p>")
                    }
                }
                break;
            case "inspect":
                for(var index=0,len=data.length;index<len;index++){
                    if(data[index]!="/linebreak/"){
                        inspect.insertAdjacentHTML("beforeend","<p id="+data[index].toString().replace(/ /g,"-")+time+" style='position: sticky; right: 0; z-index: 3; color: "+color+"'>"+data[index]+"</p>")
                    }else{
                        inspect.insertAdjacentHTML("beforeend","<p id="+data[index].toString().replace(/ /g,"-")+time+" style='margin-left: fit-content; height: 11px'></p>")
                    }
                    API.fade([document.getElementById(data[index].toString().replace(/ /g,"-")+time), 2000, 2000])
                }
                break;
            case "iframe":
                engine.clear(); con.style.opacity = "100%"
                try{
                    con.insertAdjacentHTML("afterBegin","<iframe id='worker' src="+data+"></iframe>");
                    Cookies.set("program",data)
                }catch(err){
                    con.insertAdjacentHTML("afterBegin","<iframe id='worker' src=./multiverse/"+data+"></iframe>");
                    Cookies.set("program","./multiverse/"+data)
                }
                break;
        }
    },
    paint:function(color){
        for(var index=0,len=colorable.length;index<len;index++){
            query=document.querySelectorAll(colorable[index])
            for(var subindex=0,len=query.length;subindex<len;subindex++){
                query[subindex].style.color = color
                switch(query[subindex].className){
                    case "button":
                        query[subindex].style.backgroundColor = color
                        break;
                    case "window":
                        query[subindex].style.borderColor = color
                        break
                    case "verse":
                        query[subindex].style.borderColor = color
                        break;
                }
            }
        }
        Cookies.set("color",color)
    },
    clear:function(){
        try{function re(obj){ obj.parentNode.removeChild(obj)}}catch(err){engine.exec("inspect",[err])}
        for(var index=0,len=objs.length;index<len;index++){
            var obj = document.getElementsByTagName(objs[index])
            while(obj[0]){re(obj[0])}; con.style.opacity = "80%"}
        for(var index=0,len=windows.length;index<len;index++){
            var obj = document.getElementsByTagName(objs[index])
            while(obj[0]){re(obj[0])}; con.style.opacity = "80%"}
    }
};
var API = {
    fade:function(data){
        setTimeout(function(){
            data[0].style.transition = "opacity "+data[2]/1000+"s ease"; 
            data[0].style.opacity = 0;
            setTimeout(function() { 
                data[0].parentNode.removeChild(data[0]);
            }, data[2]);
        },data[1]);
    },
    compile:function(data){
        function processs(string){
            switch(string){ 
                case "drag": //no taskbar support yet
                    document.getElementById(time).insertAdjacentHTML("beforeEnd","<div id='"+data[1]+time+"toolbar"+"' style='width:-webkit-fill-available;height:15px;z-index:1000'><label style='margin:2.5px; display:flex'>"+data[1]+"</label></div>")
                    document.getElementById(time).insertAdjacentHTML("beforeEnd","<div id='"+data[1]+time+"canvas"+"' style='width:inherit;height:inherit;position:absolute'></div>")
                    if(data[1]!=""){document.getElementById(data[1]+time+"toolbar").style.backgroundImage = "url('packages/init.png')"}
                    dragElement(document.getElementById(time));
                    break;
                case "iframe": //write optional downscale function
                    document.getElementById(data[1]+time+"canvas").insertAdjacentHTML("beforeEnd","<iframe id='"+data[1]+time+"iframe"+"' src='"+data[0]+"' style='width: 200%; height: 200%; position: absolute; transform: scale(0.5); -webkit-transform-origin-y: top; -webkit-transform-origin-x: left'></iframe>")
                    break;
                }
        }
        try{
            overlay.insertAdjacentHTML("beforeEnd","<div id='"+time+"' style='"+data[3]+";display:flex;flex-direction:column"+"' class='window'></div>")
            document.getElementById(time).insertAdjacentHTML("beforeEnd","<div style='position:absolute;right:0;height:15px;width:15px;z-index:10000' onclick='document.getElementById("+time+").remove();windows.filter(function(e) { return e !== "+time+" })'></div>")
            const pack=data[2].split("/");windows.push(data[1]+time)
            if(pack.length>1){
                pack.forEach((mod)=>{
                    processs(mod)
                })}else{
                    processs(data[2])
                }
            engine.paint(color)
            return data[1]+" : Opened <<"
        }catch(err){
            return err
        }
    },
    purge:function(){
        for(var index=0,len=windows.length;index<len;index++){
            document.getElementById(win).remove()
            return win+" : Removed <<"

        }
    }
};
var str = {
    verse:function(){
        for (let step = 0; step < universes.length; step++) {
            try{
                multiverse.insertAdjacentHTML("beforeend",'<div onclick=engine.exec("iframe",'+"'"+universes[step][1]+"'"+') class=verse desktop>'+universes[step][0]+'</div>')
            }catch(err){
                multiverse.insertAdjacentHTML("beforeend",'<div onclick=engine.exec("iframe",'+universes[step][1]+') class=verse desktop>'+universes[step][0]+'</div>')
            }
            engine.exec("inspect",[universes[step][0]+" : Verse <<"])
        }
        for (let step = 0; step < database.length; step++) {
            if(database[step][1].split(":")[0]=="https"){
                list.insertAdjacentHTML("beforeend",'<div onclick=engine.exec("iframe",'+"'"+database[step][1]+"'"+') class=database desktop>'+database[step][0]+'<label style="color: grey; margin-left: auto; right: 0">'+database[step][2]+'</label></div>')
            }else{
                list.insertAdjacentHTML("beforeend",'<div onclick='+"window.open('"+database[step][2]+"')"+' class=database desktop>'+database[step][0]+'<label style="color: grey; margin-left: auto; right: 0">'+database[step][1]+'</label></div>')
            }
            engine.exec("inspect",[database[step][0]+" : List <<"])
        }
    },
    compile:function(data){
        for(var index=0,len=data.length;index<len;index++){
            folders.insertAdjacentHTML("beforeEnd",'<li style="padding-bottom: 10px" class="folders" >'+data[index][0]+'<ul style="padding-left: 20px; display: flex; flex-direction: column" id="'+data[index][0]+'ul'+'"></ul></li>')
            for(var subindex=1,len=data[index].length;subindex<len;subindex++){
                engine.exec("inspect",[str.insert(data[index][subindex],data[index][0])]) 
            }
        }
    },
    insert:function(data,id){ data[0]=data[0].split(":"); //console.log(data[1])
        document.getElementById(id+'ul').insertAdjacentHTML("beforeEnd",'<a '+data[1]+' class="folders" >'+data[0][0]+'<label style="color: yellow; margin-left: auto; right: 0">'+data[0][1]+'</label></a>')
        return data[0][0]+" : Init <<"
    }
};
//reprogram later
! function(rcon) { //Arguments for functions and indexes all cookies
    var cook;
    if ("function" == typeof define && define.amd && (define(rcon), cook = !0), "object" == typeof exports && (module.exports = rcon(), cook = !0), !cook) {
        var tray = window.Cookies,
            oven = window.Cookies = rcon();
            oven.noConflict = function() {
            return window.Cookies = tray, oven
        }
    }
}(function() { //Main wrapper for functions
    function rcon() { //Main caller for functions, uses arguments
        for (var cook = 0, cook = {}; rcon < arguments.length; rcon++) {
            var tray = arguments[rcon];
            for (var oven in tray) cook[oven] = tray[oven]
        }
        return cook
    }
    function cook(rcon) { //Main init componet
        return rcon.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function tray(oven) { //Read, write, and record
        function record() {}

        function write(cook, tray, write) { //Writes a cookie
            if ("undefined" != typeof document) {
                "number" == typeof(write = rcon({
                    path: "/"
                }, record.defaults, write)).expires && (write.expires = new Date(1 * new Date + 864e5 * write.expires)), write.expires = write.expires ? write.expires.toUTCString() : "";
                try {
                    var read = JSON.stringify(tray);
                    /^[\{\[]/.test(read) && (tray = read)
                } catch (rcon) {}
                tray = oven.write ? oven.write(tray, cook) : encodeURIComponent(String(tray)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), cook = encodeURIComponent(String(cook)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var ID = "";
                for (var strings in write) write[strings] && (ID += "; " + strings, !0 !== write[strings] && (ID += "=" + write[strings].split(";")[0]));
                return document.cookie = cook + "=" + tray + ID
            }
        }

        function read(rcon, tray) { //Reads the cookie
            if ("undefined" != typeof document) {
                for (var record = {}, write = document.cookie ? document.cookie.split("; ") : [], read = 0; read < write.length; read++) {
                    var ID = write[read].split("="),
                    strings = ID.slice(1).join("=");
                    tray || '"' !== strings.charAt(0) || (strings = strings.slice(1, -1));
                    try {
                        var baked = cook(ID[0]);
                        if (strings = (oven.read || oven)(strings, baked) || cook(strings), tray) try {
                            strings = JSON.parse(strings)
                        } catch (rcon) {}
                        if (record[baked] = strings, rcon === baked) break
                    } catch (rcon) {}
                }
                return rcon ? record[rcon] : record
            }
        }
        return record.set = write, record.get = function(rcon) { //Returns array and gets cookie from name
            return read(rcon, !1)
        }, record.getJSON = function(rcon) { //Non important
            return read(rcon, !0)
        }, record.remove = function(cook, tray) { //Important for Cookies.get
            write(cook, "", rcon(tray, {
                expires: -1
            }))
        }, record.defaults = {}, record.withConverter = tray, record //Important for Cookies.get
    }(function() {})
});
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
}