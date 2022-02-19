var loop = function(){
    execute.setAttribute("onclick",rcon.value+"; exec('inspect',['"+rcon.value+" :<<'])"); rcon.setAttribute("onchange",rcon.value+"; exec('inspect',['"+rcon.value+" :<<'])")
    //seperate console needed
}