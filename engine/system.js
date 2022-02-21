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
    exec("inspect",[[e.ctrlKey,e.keyCode]])
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