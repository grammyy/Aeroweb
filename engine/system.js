function AddEvent(html_element, event_name, event_function)
{
	if(html_element.attachEvent) html_element.attachEvent("on" + event_name, function() {event_function.call(html_element);});
	else if(html_element.addEventListener) html_element.addEventListener(event_name, event_function, false);
}
var book = function(err){
    switch(err.toString().split(" ")[0]){
        case "SecurityError:":
            exec("inspect",["DOM SecurityError: You may be offline! Browsers by default block remote IFrame editing."])
            break;
    }
}
AddEvent(window,'keydown',function(e){
    exec("inspect",[e.ctrlKey+" "+e.keyCode])
    switch(e.keyCode){
        case e.ctrlKey && 70:
            e.preventDefault();
            exec("resize",size+=1); if(size==2){size=-1}
            break; 
        case e.ctrlKey && 88:
            e.preventDefault();
            execute.click()
            break;
        case e.ctrlKey && 81:
            e.preventDefault();
            exec("inspect",["Launch window keybind not finished : ERR <<"])
            break; 
        case e.shiftKey && 49:
            e.preventDefault();
            exec("resize",0)
            break; 
        case e.shiftKey && 50:
            e.preventDefault();
            exec("resize",1)
            break; 
        case e.shiftKey && 51:
            e.preventDefault();
            exec("resize",2)
            break; 
    }
});
var cookie = function(func,payload){
    switch(func){
        //d.setTime(d.getTime() + (days*24*60*60*1000));
        //let expires = "expires="+ d.toUTCString();
        case "set": //No expiring payloads yet, needs array setting for advance cookies such as time n stuff with ease
            exec("inspect",["cookie! ",new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()])
            document.cookie = payload[0]+"="+payload[1]+";"+new Date(new Date().getTime()+1000*60*60*24*365).toGMTString();
            break;
        //case "del":
        //    if(cookie("return",payload[0])){
        //        switch(payload[1].typeof){
        //            case string:
        //                cookie("set",[payload[0],""])
        //                break;
        //            case object && payload[1].isArray: //No use until advance cookies
        //                for(let i = 0; i < payload[1].length; i++){
        //                    cookie("set",[payload[0],payload[1][i]])
        //                }
        //                break;
        //        }
        //    }
        //    break;
        case "get":
            let cookies = decodeURIComponent(document.cookie).split(';');
            for(let i = 0; i < cookies.length; i++) {
                while(cookies[i].charAt(0)==' '){
                    cookies[i]=cookies[i].substring(1);
                }
                if(cookies[i].indexOf(payload[0]+"="==0)){
                    return cookies[i].substring(payload[0]+"=".length,cookies[i].length)
                }
            }
            break;
    }
}