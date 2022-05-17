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
    setInterval(function(){layout[5].innerHTML=new Date().toLocaleTimeString();if(layout[2].clientWidth<170){layout[6].style.visibility="hidden"}else{layout[6].style.visibility="visible"}},500)
    setInterval(function(){layout[6].innerHTML=Date.now()},100)
    switch(window.location.href.split("/").last()){
        case "#business":
            con.inspect(["Business presentation started <<"]); engine.resize(2)
            con.exec("https://aerophp.000webhostapp.com/query/business.html")
            break
    }
}