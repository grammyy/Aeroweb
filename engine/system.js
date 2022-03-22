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
                eval("try{"+rcon.value+"}catch(err){engine.exec('inspect',[err]);book(err)}");Cookies.set('rcon',rcon.value, { expires: 14400 })
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
    var size=Cookies.get("size");if(engine.bake(size)){engine.resize(size);if(size!=0){}else{engine.exec("log",WelMSG)}}else{Cookies.set("size",0);size=0;engine.exec("log",WelMSG)}
    var color=Cookies.get("color");if(engine.bake(color)){engine.paint(color)}else{Cookies.set("color","red")}
    var pg=Cookies.get("program");if(engine.bake(pg)){{engine.exec("iframe",pg)}}else{Cookies.set("program",undefined)}
    var rc=Cookies.get("rcon"); if(engine.bake(rc)){rcon.value = rc}
    if(size==0){ scoreInner.innerHTML=rank}
    imgs=document.querySelectorAll('img')
    for(var index=0,len=imgs;index<len;index++){
        imgs[index].style.width = "40%"
    }
    function port(){
        if(innerWidth<innerHeight){
            folder.style.visibility = "hidden"
            list.style.visibility = "hidden"
            
            multiverse.style.left = "unset"
            multiverse.style.width = "99%"
            con.style.left = "unset"
            con.style.width = "99%"
            
            const pack=[document.getElementsByClassName("verse"),document.getElementsByClassName("button")]
            for(var index=0,len=pack[0].length;index<len;index++){
                pack[0][index].style.width = "160px"
                pack[0][index].style.height = "30px"
            }
            for(var index=0,len=pack[1].length;index<len;index++){
                pack[1][index].style.height = "25px"
                pack[1][index].style.width = "25px"
            }
            toolkit.style.width = "25px"
            multiverse.style.height = "15%"
            con.style.height = "82%"
    }else{
        folder.style.visibility = "visible"
        list.style.visibility = "visible"
        
        multiverse.style.left = "9.5%"
        multiverse.style.width = "73%"
        con.style.left = "9.5%"
        con.style.width = "73%"
        
        const pack=[document.getElementsByClassName("verse"),document.getElementsByClassName("button")]
        for(var index=0,len=pack[0].length;index<len;index++){
            pack[0][index].style.width = "125px"
            pack[0][index].style.height = "15px"
        }
        for(var index=0,len=pack[1].length;index<len;index++){
            pack[1][index].style.height = "10px"
            pack[1][index].style.width = "10px"
        }
        toolkit.style.width = "20px"
        multiverse.style.height = "30%"
        con.style.height = "66%"
    
    }}
    window.onload=function(){port()}
    window.onresize=function(){port()}
}
    //var wl=Cookies.get("wallpaper"); if(bake(wl)){exec("wallpaper",wl)}