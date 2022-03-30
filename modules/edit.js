var win = document.getElementById("editor")
var editor = {
    open:function(data){
        try{
            win.value=data

            //label.value=label.value+" - Code imported from localStorage" 
        }catch(err){
            parent.window.engine.exec("inspect",[err])
        }
    },
    new:function(){

    },
    compile:function(){
        
    },
    language:function(data){

    }
}
window.onload = function(){
    parent.window.con.log(["-WARNING!! WARNING!! WARNING!!-","/linebreak/","The code window is not recommended currently, it may randomly delete data."])
    //var tk=Cookies.get("token"); if(bake(tk)!=true){token.generate()} //no spitting or even encryption yet
    try{
        var cd=Cookies.get("code"); if(bake(cd)){editor.open(cd)}else{editor.new(tk)} //no spitting or even encryption yet
    }catch(err){

    } 
}