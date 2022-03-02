const windows=[]
function AddEvent(html_element, event_name, event_function)
{
	if(html_element.attachEvent) html_element.attachEvent("on" + event_name, function() {event_function.call(html_element);});
	else if(html_element.addEventListener) html_element.addEventListener(event_name, event_function, false);
}
AddEvent(window,'keydown',function(e){
    //exec("inspect",[e.ctrlKey+" "+e.keyCode])
    switch(e.keyCode){
        case e.ctrlKey && 70:
            e.preventDefault();
            resize(size+=1); if(size==3){resize(0)}
            break; 
        case 13:
            e.preventDefault();
            console.log(rcon.value)
            eval("try{"+rcon.value+"}catch(err){exec('inspect',[err]);book(err)}");Cookies.set('rcon',rcon.value)
            break;
        case e.ctrlKey && 81:
            e.preventDefault();
            exec("inspect",["Launch window keybind not finished : ERR <<"])
            break; 
        case e.shiftKey && 49:
            e.preventDefault();
            resize(0)
            break; 
        case e.shiftKey && 50:
            e.preventDefault();
            resize(1)
            break; 
        case e.shiftKey && 51:
            e.preventDefault();
            resize(2)
            break; 
    }
});
function shell(data){
    if(data.length==4){
        if(data[0]!=0){ //no modules yet lol
            index++
            overlay.insertAdjacentHTML("beforeEnd","<div id='"+data[1]+index+"' style='"+data[3]+";display:flex;flex-direction:column"+"' class='window'></div>")
            var pack=data[2].split("/");windows.push((data[1]+index).replace(" ",""))
            function processs(string){
                switch(string){
                    case "drag": //no taskbar support yet
                        document.getElementById(data[1]+index).insertAdjacentHTML("beforeEnd","<div id='"+data[1]+index+"toolbar"+"' style='width:-webkit-fill-available;height:15px;z-index:1000'><label style='margin:2.5px'>"+data[1]+"</label></div>")
                        document.getElementById(data[1]+index).insertAdjacentHTML("beforeEnd","<div id='"+data[1]+index+"canvas"+"' style='width:inherit;height:inherit;position:absolute'></div>")
                        dragElement(document.getElementById(data[1]+index));
                        break;
                    }
            }
            if(pack.length>1){
                pack.ForEach((mod)=>{
                    processs(mod)
                })}else{
                    processs(data[2])
                }
            color(rgb)
            return data[1]+" : Opened <<"
        }
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