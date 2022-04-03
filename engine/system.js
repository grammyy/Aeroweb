window.onload=function(){
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
                e.preventDefault() //console.log(rcon.value)
                //eval("try{"+document.activeElement.value+"}catch(err){engine.exec('inspect',[err]);book(err)}");Cookies.set('rcon',rcon.value, { expires: 14400 })
                eval(document.activeElement.value)
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
    })
    str.unpack(HTTP())
    //var rc=Cookies.get("rcon"); if(engine.bake(rc)){rcon.value = rc}
    if(Cookies.get("size")=="0"){API.mod("console",["command line"]);con.log(["/linebreak/","If code appears under this line, you have data saved to cookie clicker that is not imported to the new Cookie host. Please copy if it appears and import it to the new host.","small;"+window.localStorage.getItem("CookieClickerGame")])}
    setInterval(function(){layout[5].innerHTML=new Date().toLocaleTimeString();if(Cookies.get("size")!="2"){if(screen.width<1600){layout[0].style.height="100%";layout[0].style.width="100%"}else{layout[0].style.height="80%";layout[0].style.width="90%"}}},500)
    setInterval(function(){layout[6].innerHTML=Date.now()},100)
}