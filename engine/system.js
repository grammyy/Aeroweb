
window.onload=function(){
    var webpage=document.body.children[0]
    if(!Cookies.get("app")){
        Cookies.set("app",{"style":{"webpage":"height:90%;width:95%"}})}
    webpage.style=JSON.parse(Cookies.get("app"))["style"]["webpage"]
    compilers.write(webpage.children[2],aeroweb[0],"")
    for(let c=0;c<aeroweb[1].length;c++){
        webpage.children[3].insertAdjacentHTML("beforeend",'<div onclick=con.exec('+"'"+aeroweb[1][c][1]+"'"+') class=verse desktop>'+aeroweb[1][c][0]+'</div>')
        GUI.warn([aeroweb[1][c][0]+" : Verse <<"])}
    for(let d=0;d<aeroweb[2].length;d++){
        if(aeroweb[2][d][1].split(":")[0]=="https"){
            webpage.children[0].insertAdjacentHTML("beforeend",'<div onclick=con.exec('+"'"+aeroweb[2][d][1]+"'"+') class=database desktop>'+aeroweb[2][d][0]+'<label style="color: grey;margin-left: auto;right: 0">'+aeroweb[2][d][2]+'</label></div>')
        }else{
            webpage.children[0].insertAdjacentHTML("beforeend",'<div onclick='+"window.open('"+aeroweb[2][d][2]+"')"+' class=database desktop>'+aeroweb[2][d][0]+'<label style="color: grey;margin-left: auto;right: 0">'+aeroweb[2][d][1]+'</label></div>')}
        GUI.warn([aeroweb[2][d][0]+" : List <<"])}
    for(var e=0,len=aeroweb[3].length;e<len;e++){ //margin-top: 15px;margin-left: 15px
        webpage.children[1].insertAdjacentHTML("beforeEnd",'<li id='+'li;'+e+' style="padding-bottom: 10px;margin-left: 15px" class="folders" >'+aeroweb[3][e][0]+'<ul style="padding-left: 20px;display: flex;flex-direction: column;margin: 0" id="'+aeroweb[3][e][0]+'ul'+'"></ul></li>')
        for(var _e=1,_len=aeroweb[3][e].length;_e<_len;_e++){
            d=aeroweb[3][e][_e]
            webpage.children[1].children[e+2].children[0].insertAdjacentHTML("beforeEnd",'<a '+d[1]+' class="folders">'+d[0].split(":")[0]+'<label style="color:yellow;margin-left:auto;right:0;white-space:nowrap">'+d[0].split(":")[1]+'</label></a>')}
        GUI.warn([aeroweb[3][e][0]+" : Folder <<"])}
    webpage.children[1].children[2].style.marginTop="20px"
    setInterval(function(){webpage.children[1].children[0].innerText=new Date().toLocaleTimeString();if(webpage.children[1].clientWidth<170){webpage.children[1].children[0].style.visibility="hidden"}else{webpage.children[1].children[0].style.visibility="visible"}},500) 
    setInterval(function(){webpage.children[1].children[1].innerText=Date.now()},100)}
function AddEvent(object, id, func){
	if(object.attachEvent) object.attachEvent("on" + id, function(){func.call(object)});
	else if(object.addEventListener) object.addEventListener(id, func, false)}
AddEvent(window,'keydown',function(e){
    console.info(e.ctrlKey+" "+e.keyCode)
    switch(e.keyCode){
        case e.ctrlKey && 70:
            e.preventDefault();
            engine.resize(size+=1)
            if(size==3);engine.resize(0)
            break
        case 13:
            e.preventDefault() //console.log(rcon.value)
            //eval("try{"+document.activeElement.value+"}catch(err){engine.exec('inspect',[err]);book(err)}");Cookies.set('rcon',rcon.value,{ expires: 14400 })
            eval(document.activeElement.value)
            break;
        case e.shiftKey && 49:
            e.preventDefault();
            engine.resize(0)
            break
        case e.shiftKey && 50:
            e.preventDefault();
            engine.resize(1)
            break
        case e.shiftKey && 51:
            e.preventDefault();
            engine.resize(2)
            break}})
//window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart
