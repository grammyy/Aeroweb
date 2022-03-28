    var worker = ""
    var layout = []
    var line=0
var engine = {
    resize:function(data){
        switch(data){
            case 0:
                engine.paint(Cookies.get("color"))
                layout[3].style.height = "82.5%"; layout[3].style.width = "-webkit-fill-available"; layout[3].style.margin = "5px"
                layout[3].style.marginLeft = "11%"; layout[3].style.marginRight = "16%"
                layout[0].style.height = "80%"; layout[0].style.width = "90%"
                layout[8].style.visibility = "visible"; layout[8].style.position = "absolute" 
                
                layout[1].style.visibility = "visible"
                layout[2].style.visibility = "visible"
                layout[4].style.visibility = "visible"
                layout[0].style.borderColor = Cookies.get("color")
                Cookies.set("size",0, { expires: 14400 })
                break
            case 1:
                engine.paint(Cookies.get("color"))
                layout[3].style.height = "-webkit-fill-available"; layout[3].style.width = "-webkit-fill-available" 
                layout[3].style.margin = "5px"; layout[3].style.margin = "5px"
                layout[0].style.height = "80%"; layout[0].style.width = "90%"
                layout[8].style.visibility = "visible"; layout[8].style.position = "fixed" 

                layout[1].style.visibility = "hidden"
                layout[2].style.visibility = "hidden"
                layout[4].style.visibility = "hidden"
                layout[0].style.borderColor = Cookies.get("color")
                Cookies.set("size",1, { expires: 14400 })
                break
            case 2:
                engine.paint(Cookies.get("color"))
                layout[3].style.height = "-webkit-fill-available"; layout[3].style.width = "-webkit-fill-available"; layout[3].style.margin = "5px"; layout[3].style.margin = "0"
                layout[0].style.height = "-webkit-fill-available"; layout[0].style.width = "-webkit-fill-available"
                layout[8].style.visibility = "visible"; layout[8].style.position = "fixed" 
                
                layout[1].style.visibility = "hidden"
                layout[2].style.visibility = "hidden"
                layout[4].style.visibility = "hidden"
                layout[0].style.borderColor = "transparent"
                Cookies.set("size",2, { expires: 14400 })
                break    
        }
    },
    paint:function(data){
        for(var index=0,len=["div","p","input","li","a"].length;index<len;index++){
            query=document.querySelectorAll(["div","p","input","li","a"][index])
            for(var subindex=0,len=query.length;subindex<len;subindex++){
                query[subindex].style.color = data
                switch(query[subindex].className){
                    case "button":
                        query[subindex].style.backgroundColor = data
                        break;
                    case "window":
                        query[subindex].style.borderColor = data
                        break
                    case "verse":
                        query[subindex].style.borderColor = data
                        break;
                }
            }
        }
        Cookies.set("color",data, { expires: 14400 })
    }
}
var API = {
    fade:function(data){
        setTimeout(function(){
            data[0].style.transition = "opacity "+data[2]/1000+"s ease"; 
            data[0].style.opacity = 0;
            setTimeout(function() { 
                try{data[0].parentNode.removeChild(data[0]);}catch(err){}
            }, data[2]);
        },data[1]);
    },
    bake:function(data){
        switch(data){
            case null:
                return false
            case undefined:
                return false
            case "undefined":
                return false
            case NaN:
                return false
            default:
                return [true,data]
        }
    },
    mod:function(pid,data){
        for(var index=0,len=data.length;len>index;index++){
            switch(data[index]){
                case "command line":
                    document.getElementById(pid).insertAdjacentHTML("beforeEnd","<input spellcheck='false' id='"+pid+";cmd"+"' style='color:"+Cookies.get("color")+"'></input>")
                    break
                case "drag":
                    break
                case "borderless":
                    break
            }
        }
    }
}
var con = {
    log:function(data){
        var time=0
        for(var index=0,len=data.length;len>index;index++){
            time++
            layout[3].insertAdjacentHTML("beforeEnd","<p id="+layout[3].id+time+"></p>")
            for(var subindex=0,sublen=data[index].length;sublen>subindex;subindex++){
                document.getElementById(layout[3].id+time).insertAdjacentHTML("beforeEnd",data[index][subindex])
                document.getElementById(layout[3].id+time).style.marginLeft = "5px"
                if(subindex==sublen){
                    line++
                }
            }
        }
        document.getElementById(layout[3].id+"1").style.marginTop = "5px"
    },
    clear:function(){
        while (layout[3].lastChild) {
            layout[3].removeChild(layout[3].lastChild);
        }
    },
    exec:function(data){
        this.clear(); layout[3].style.opacity = "100%"
        layout[3].insertAdjacentHTML("afterBegin","<iframe id='worker' src="+data+"></iframe>");
        Cookies.set("program",data, { expires: 14400 })
    }
}
var str = {
    unpack:function(data){
        for(var index=0,len=data[0].length;len>index;index++){
            layout.push(document.getElementById(data[0][index]))
        }
        for (let step = 0; step < data[2].length; step++) {
            try{
                layout[4].insertAdjacentHTML("beforeend",'<div onclick=con.exec('+"'"+data[2][step][1]+"'"+') class=verse desktop>'+data[2][step][0]+'</div>')
            }catch(err){
                layout[4].insertAdjacentHTML("beforeend",'<div onclick=con.exec('+data[2][step][1]+') class=verse desktop>'+data[2][step][0]+'</div>')
            }
            //con.exec("inspect",[data[2][step][0]+" : Verse <<"])
        }
        for (let step = 0; step < data[3].length; step++) {
            if(data[3][step][1].split(":")[0]=="https"){
                layout[1].insertAdjacentHTML("beforeend",'<div onclick=con.exec('+"'"+data[3][step][1]+"'"+') class=database desktop>'+data[3][step][0]+'<label style="color: grey; margin-left: auto; right: 0">'+data[3][step][2]+'</label></div>')
            }else{
                layout[1].insertAdjacentHTML("beforeend",'<div onclick='+"window.open('"+data[3][step][2]+"')"+' class=database desktop>'+data[3][step][0]+'<label style="color: grey; margin-left: auto; right: 0">'+data[3][step][1]+'</label></div>')
            }
            //con.exec("inspect",[data[3][step][0]+" : List <<"])
        }
        for(var index=0,len=data[4].length;index<len;index++){ //margin-top: 15px; margin-left: 15px
            layout[2].insertAdjacentHTML("beforeEnd",'<li id='+'li;'+index+' style="padding-bottom: 10px; margin-left: 15px" class="folders" >'+data[4][index][0]+'<ul style="padding-left: 20px; display: flex; flex-direction: column; margin: 0" id="'+data[4][index][0]+'ul'+'"></ul></li>')
            for(var subindex=1,len=data[4][index].length;subindex<len;subindex++){
            //con.exec("inspect",[
                this.insert(data[4][index][subindex],data[4][index][0])//]) 
            }
        }
        document.getElementById("li;0").style.marginTop = "20px"
        var size=parseInt(Cookies.get("size"));if(API.bake(size)){engine.resize(size);if(size!=0){}else{con.log(data[1])}}else{Cookies.set("size",0);size=0;con.log(data[1])}
        var color=Cookies.get("color");if(API.bake(color)){engine.paint(color)}else{Cookies.set("color","red")}
        var pg=Cookies.get("program");if(API.bake(pg)){{con.exec(pg)}}else{Cookies.set("program",undefined)}
    },
    insert:function(data,id){ data[0]=data[0].split(":"); //console.log(data[1])
        document.getElementById(id+'ul').insertAdjacentHTML("beforeEnd",'<a '+data[1]+' class="folders" style="white-space: nowrap" >'+data[0][0]+'<label style="color: yellow; margin-left: auto; right: 0; white-space: nowrap">'+data[0][1]+'</label></a>')
        return data[0][0]+" : Init <<"
    }
}
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