var book = function(err){
    switch(err.toString().split(" ")[0]){
        case "SecurityError:":
            exec("inspect",["DOM SecurityError: You may be offline! Browsers by default block remote IFrame editing."])
            break;
    }
}