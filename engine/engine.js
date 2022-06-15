var compilers={
    program:function(n,p,s){
        document.body.children[1].insertAdjacentHTML("beforeEnd","<div style='display:flex;flex-direction:column;color:rgb(173,173,173);transition-duration:unset;"+s+"' class='window'></div>")
        self=document.body.children[1].children[document.body.children[1].children.length-1]
        self.insertAdjacentHTML("beforeEnd","<div style='position:absolute;right:0;height:15px;width:15px;z-index:10000' onclick='document.getElementById("+self.id+").remove()'></div>")
        self.insertAdjacentHTML("beforeEnd","<div style='width:-webkit-fill-available;height:15px;z-index:1000;cursor:all-scroll'><label style='margin:2.5px;display:flex;width:fit-content;white-space:nowrap'>"+n+"</label></div>")
        self.insertAdjacentHTML("beforeEnd","<div style='width:inherit;height:inherit;position:relative'></div>")
        self.children[2].insertAdjacentHTML("beforeEnd","<div src='"+p+"' style='width:100%;height:100%;position:absolute'></div>")
        GUI.drag(self)
        if(n)self.children[1].style.backgroundColor = "#545454"},
    cluster:function(){},
    write:function(o,d,c){
        for(var i=0,len=d.length;len>i;i++){
            if(d[i]=="/linebreak/"){
                o.insertAdjacentHTML("beforeEnd","<p id="+o.id+i+" style='height: 11px'></p>")
            }else{
                o.insertAdjacentHTML("beforeEnd","<p id="+o.id+i+" "+c+">"+d[i]+"</p>")}}}}
var GUI={
    fade:function(){},
    warn:function(){},
    log:function(){},
    open:function(){},
    clear:function(){},
    insert:function(d,i){
        document.getElementById(i+'ul').insertAdjacentHTML("beforeEnd",'<a '+d[1]+' class="folders">'+data[0][0]+'<label style="color: yellow; margin-left: auto; right: 0; white-space: nowrap">'+d[0][1]+'</label></a>')},
    drag:function(s){
        const position =[0,0,0,0]
        s.children[1].onmousedown = dragMouseDown;
        function dragMouseDown(e){
            s.children[2].children[0].style.pointerEvents = "none"
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            position[2] = e.clientX;
            position[3] = e.clientY;
            document.onmouseup = function(){
                document.onmouseup = null;
                document.onmousemove = null;
                s.children[2].children[0].style.pointerEvents = "all"}
        document.onmousemove = function(e){      
            e = e || window.event;
            e.preventDefault();
            position[0] = position[2] - e.clientX
            position[1] = position[3] - e.clientY
            position[2] = e.clientX
            position[3] = e.clientY
            s.style.top = (s.offsetTop - position[1]) + "px"
            s.style.left = (s.offsetLeft - position[0]) + "px"
            }}}}
var packaging={
    port:function(){},
    encode:function(d,s,p,r){
        a=JSON.parse(Cookies.get(d))
        a[s][p]=r
        Cookies.set(d,a)}}
! function(rcon) {
    var cook;
    if ("function" == typeof define && define.amd && (define(rcon), cook = !0), "object" == typeof exports && (module.exports = rcon(), cook = !0), !cook) {
       var tray = window.Cookies,
          oven = window.Cookies = rcon();
       oven.noConflict = function() {
          return window.Cookies = tray, oven}}}
(function() {
    function rcon() {
        for (var cook = 0, cook = {}; rcon < arguments.length; rcon++) {
           var tray = arguments[rcon];
           for (var oven in tray) cook[oven] = tray[oven]}
        return cook}
    function cook(rcon) {
        return rcon.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)}
    return function tray(oven) {
    function record() {}
    function write(cook, tray, write) {
        if ("undefined" != typeof document) {
            "number" == typeof(write = rcon({
                path: "/"},
            record.defaults, write)).expires && (write.expires = new Date(1 * new Date + 864e5 * write.expires)), write.expires = write.expires ? write.expires.toUTCString() : "";
            try {
                var read = JSON.stringify(tray);
                /^[\{\[]/.test(read) && (tray = read)} catch (rcon) {}
            tray = oven.write ? oven.write(tray, cook) : encodeURIComponent(String(tray)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), cook = encodeURIComponent(String(cook)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
            var ID = "";
            for (var strings in write) write[strings] && (ID += "; " + strings, !0 !== write[strings] && (ID += "=" + write[strings].split(";")[0]));
            return document.cookie = cook + "=" + tray + ID}}
    function read(rcon, tray) {
        if ("undefined" != typeof document) {
            for (var record = {}, write = document.cookie ? document.cookie.split("; ") : [], read = 0; read < write.length; read++) {
                var ID = write[read].split("="),
                strings = ID.slice(1).join("=");
                tray || '"' !== strings.charAt(0) || (strings = strings.slice(1, -1));
                try {
                    var baked = cook(ID[0]);
                    if (strings = (oven.read || oven)(strings, baked) || cook(strings), tray) 
                    try {
                        strings = JSON.parse(strings)} catch (rcon) {}
                    if (record[baked] = strings, rcon === baked) break} catch (rcon) {}}
          return rcon ? record[rcon] : record}}
    return record.set = write, record.get = function(rcon) {
        return read(rcon, !1)}, record.getJSON = function(rcon) {
        return read(rcon, !0)}, record.remove = function(cook, tray) {
        write(cook, "", rcon(tray, {
            expires: -1}))}, record.defaults = {}, record.withConverter = tray, record}(function() {})})