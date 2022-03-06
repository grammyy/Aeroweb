window.onload=function(){
    for(var index=0,len=contacts.length;index<len;index++){
        console.log(contacts[index])}
    function AddEvent(object, id, func) {
    	if(object.attachEvent) object.attachEvent("on" + id, function() {func.call(object);});
    	else if(object.addEventListener) object.addEventListener(id, func, false);
    }
    AddEvent(window,'keydown',function(e){
        //engine.exec("inspect",[e.ctrlKey+" "+e.keyCode])
        switch(e.keyCode){
            case e.ctrlKey && 70:
                e.preventDefault();
                engine.resize(size+=1); if(size==3){engine.resize(0)}
                break; 
            case 13:
                e.preventDefault(); console.log(rcon.value)
                eval("try{"+rcon.value+"}catch(err){engine.exec('inspect',[err]);book(err)}");Cookies.set('rcon',rcon.value)
                break;
            case e.ctrlKey && 81:
                e.preventDefault();
                exec("inspect",["Launch window keybind not finished : ERR <<"])
                break; 
            case e.shiftKey && 49:
                e.preventDefault();
                engine.resize(0)
                break; 
            case e.shiftKey && 50:
                e.preventDefault();
                engine.resize(1)
                break; 
            case e.shiftKey && 51:
                e.preventDefault();
                engine.resize(2)
                break; 
        }
    });
    
    setInterval(function(){ clock.innerHTML=new Date().toLocaleTimeString();time=Date.now()},500);
    setInterval(function(){ analog.innerHTML=Date.now()},100);
    
    str.compile(shelf)
    str.verse()

    if(size==0){engine.exec("log",WelMSG)}; color=Cookies.get("color");engine.paint(color)
    var pg=Cookies.get("program"); if(bake(pg)){engine.exec("iframe",[pg])}
    var rc=Cookies.get("rcon"); if(bake(rc)){rcon.value = rc}
    var rs=parseInt(Cookies.get("size")); engine.resize(rs); size=rs
    if(rs==0){ scoreInner.innerHTML=rank}
    
    imgs=document.querySelectorAll('img')
    for(var index=0,len=imgs;index<len;index++){
        imgs[index].style.width = "40%"
    }
   
    if(innerWidth<innerHeight){engine.clear()
        folder.style.visibility = "hidden"
        list.style.visibility = "hidden"

        multiverse.style.left = "unset"
        multiverse.style.width = "99%"
        con.style.left = "unset"
        con.style.width = "99%"
        
        const pack=[document.getElementsByClassName("verse"),document.getElementsByClassName("button")]
        for(var index=0,len=pack[0].length;index<len;index++){
            pack[0][index].style.width = "200px"
            pack[0][index].style.height = "30px"
        }
        for(var index=0,len=pack[1].length;index<len;index++){
            pack[1][index].style.height = "25px"
            pack[1][index].style.width = "25px"
        }
        toolkit.style.width = "25px"
        multiverse.style.height = "15%"
        con.style.height = "82%"
    }
    
}
    //var wl=Cookies.get("wallpaper"); if(bake(wl)){exec("wallpaper",wl)}