
var Cookies={
    set:function(k,v){
        document.cookie=k+"="+encodeURIComponent(typeof(v)!="object"?v:JSON.stringify(v))
        return _cookies[k]=v},
    get:function(k){
        return _cookies[k]},
    parse:function(k){
        return JSON.parse(this.get(k))},
    remove:function(k){
        document.cookie=k+"=; expires=Thu, 18 Dec 2013 12:00:00 UTC"
        delete _cookies[k]}}
addEventListener("DOMContentLoaded",()=>{
    if(!document.cookie){
        document.cookie="app="+encodeURIComponent("{\"style\":{\"webpage\":"+(window.innerWidth>700?"\"height:90%;width:95%\"":"\"height:100%;width:100%\"")+",\"bloom\":\"false\",\"color\":\"#ff4e4e\",\"wallpaper\":\"url('packages/init.webp')\"},\"programs\":{\"page\":\"\"}}")
        location.reload()}})
var _cookies=document.cookie?Object.fromEntries(decodeURIComponent(document.cookie).split("; ").map((m)=>{m=m.split("=");return[m[0],m[1]]})):{}
app={
    terminal:webpage.children[2].children["terminal"],
    cmd:webpage.children[2].children["terminal"].children[0].children[0],
    color:Cookies.parse("app")["style"]["color"],
    buffer:120}
for(var i=0,len=system["modules"].length;i<len;i++){
        d=document.createElement("script")
        d.src=system["modules"][i]
        document.head.appendChild(d)}
window.onload=function(){
    var webpage=document.body.children[0]
    for(let c=0;c<aeroweb[1].length;c++){
        webpage.children[3].insertAdjacentHTML("beforeend",'<div onclick=GUI.open('+"'"+aeroweb[1][c][1]+"'"+') class="verse '+aeroweb[1][c][2]+'">'+aeroweb[1][c][0]+'</div>')
        GUI.warn([aeroweb[1][c][0]+" : Verse <<"])}
    for(let d=0;d<aeroweb[2].length;d++){
        if(aeroweb[2][d][1].split(":")[0]=="https"){
            webpage.children[0].insertAdjacentHTML("beforeend",'<div onclick=GUI.open('+"'"+aeroweb[2][d][1]+"'"+') class="database desktop">'+aeroweb[2][d][0]+'<label style="color:grey;margin-left:auto;right:0;font-size:8px">'+aeroweb[2][d][2]+'</label></div>')
            }else{
                webpage.children[0].insertAdjacentHTML("beforeend",'<div onclick='+"window.open('"+aeroweb[2][d][2]+"')"+' class="database desktop">'+aeroweb[2][d][0]+'<label style=color:grey;margin-left:auto;right:0;font-size:8px>'+aeroweb[2][d][1]+'</label></div>')}
        GUI.warn([aeroweb[2][d][0]+" : List <<"])}
    for(var e=0,len=aeroweb[3].length;e<len;e++){ //margin-top: 15px;margin-left: 15px
        webpage.children[1].insertAdjacentHTML("beforeEnd",'<li id='+'li;'+e+' style="padding-bottom: 10px;margin-left: 15px" class="folders" >'+aeroweb[3][e][0]+'<ul style="padding-left: 20px;display: flex;flex-direction: column;margin: 0" id="'+aeroweb[3][e][0]+'ul'+'"></ul></li>')
        for(var _e=1,_len=aeroweb[3][e].length;_e<_len;_e++){
            d=aeroweb[3][e][_e]
            webpage.children[1].children[e+2].children[0].insertAdjacentHTML("beforeEnd","<a "+d[1]+" class='folders'>"+d[0].split(":")[0]+"<label style='color:yellow;margin-left:auto;right:0;white-space:nowrap'>"+d[0].split(":")[1]+"</label></a>")}
        GUI.warn([aeroweb[3][e][0]+" : Folder <<"])}
    webpage.children[1].children[2].style.marginTop="20px"
    webpage.style=Cookies.parse("app")["style"]["webpage"]
    paint(Cookies.parse("app")["style"]["color"])
    wrap(Cookies.parse("app")["style"]["wallpaper"])
    t=Cookies.parse("app")["programs"]["page"];if(t){GUI.open(t)}else{compilers.write(webpage.children[2],aeroweb[0],"")}
    SYS.clear=function(e,i){
        while(e.children.length-i){e.children[0].remove()}
        e.children[0].value=""}
    CMD.set("cls",["SYS.clear(webpage.children[2],1);"])
    switch(window.location.href.split("/").at(-1)){
        case "#business":
            GUI.inspect(["Business presentation started <<"]); theme("fullscreen")
            GUI.open("https://aerophp.000webhostapp.com/query/business.html")
            break}
    setInterval(function(){webpage.children[1].children[0].innerText=new Date().toLocaleTimeString();if(webpage.children[1].clientWidth<170){webpage.children[1].children[0].style.visibility="hidden"}else{webpage.children[1].children[0].style.visibility="visible"}},500) 
    setInterval(function(){webpage.children[1].children[1].innerText=Date.now()},100)}
//window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart