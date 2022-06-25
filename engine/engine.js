var compilers={
    program:function(n,p,s){
        document.body.children[1].insertAdjacentHTML("beforeEnd","<div style='display:flex;flex-direction:column;color:rgb(173,173,173);transition-duration:unset;top:50px;left:430px;border-color:"+Cookies.get("app")["style"]["color"]+"!important;"+s+"' class='window'></div>")
        var self=Array.from(document.body.children[1].children).at(-1)
        self.insertAdjacentHTML("beforeEnd","<div style='position:absolute;right:0;height:10px;width:10px;z-index:10000' onclick='Array.from(document.body.children[1].children).at(-1).remove()'><svg aria-hidden='false' width='10' height='10' style='display:flex' viewBox='0 0 12 12'><polygon fill='currentColor' fill-rule='evenodd' points='11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1'></polygon></svg></div>")
        self.insertAdjacentHTML("beforeEnd","<div style='width:-webkit-fill-available;height:10px;z-index:1000;cursor:all-scroll'><label style='width:fit-content;white-space:nowrap;position:absolute'>"+n+"</label></div>")
        self.insertAdjacentHTML("beforeEnd","<div style='width:inherit;height:inherit;position:absolute'></div>")
        self.children[2].insertAdjacentHTML("beforeEnd","<iframe src='"+p+"' style='width:100%;height:100%;position:absolute'></iframe>")
        if(n)self.children[1].style.backgroundColor = "#545454"
        GUI.drag(self)},
    cluster:function(){},
    write:function(o,d,c){
        for(var i=0,len=d.length;len>i;i++){
            if(d[i]=="/linebreak/"){
                o.insertAdjacentHTML("afterbegin","<p id="+o.id+i+" style='height: 11px'></p>")
            }else{
                o.insertAdjacentHTML("afterbegin","<p id="+o.id+i+" "+c+">"+d[i]+"</p>")}}}}
var GUI={
    fade:function(){},
    warn:function(){},
    log:function(){},
    open:function(s){
        packaging.encode("app",["programs","page"],s)
        webpage.children[2].style.opacity="100%"
        if(webpage.children[2].children["worker"])webpage.children[2].children["worker"].src=s
        else webpage.children[2].insertAdjacentHTML("afterBegin","<iframe id='worker' src="+s+"></iframe>")
        webpage.children[2].children["worker"].contentWindow.document.body.style.backgroundColor="#00000080"},
    exit:function(){
        try{webpage.children[2].children["worker"].remove()}catch(e){}},
    clear:function(o,t){
        r=o.getElementsByTagName(t)
        for(var i=0,len=r.length;i<len;i++){
            r[i].remove()}
        compilers.write(webpage.children[2],aeroweb[0],"")},
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
            s.style.left = (s.offsetLeft - position[0]) + "px"}}}}
var appdata={
    set:function(n){
        if(!document.cookie)document.cookie=n+"={}"
        else document.cookie=document.cookie+"; "+String(n)},
    encode:function(n,d,v){
        if(!document.cookie.includes(n+"="))document.cookie=n+"={"+d.replaceAll("]","").replaceAll("[","").split(",").join(":{},")+":{}}"
        var t=decodeURIComponent(document.cookie).replaceAll("};","}||").split("||")
        var p=t.findIndex((e)=>e.includes(n+"="))
        var m=t[p].replaceAll(n+"=","")
        console.log(JSON.parse(m)[d[0]][d[1]])
        return JSON.parse(m.replace(JSON.parse(m)[d[0]][d[1]],v))},
    get:function(n){
        var t=decodeURIComponent(document.cookie).replaceAll("};","}||").split("||")
        var p=t.findIndex((e)=>e.includes(n+"="))
        return p==-1?undefined:JSON.parse(t[p].replaceAll(n+"=",""))}}