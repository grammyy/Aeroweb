var win = document.getElementById("editor")
var editor = {
    open:function(data){
        win.value=data
    },
    new:function(){

    }
}
window.onload = function(){
    parent.window.engine.exec("inspect",["-WARNING!! WARNING!! WARNING!!-","/linebreak/","The code window is not recommended currently, it may randomly delete data."])
    //var tk=Cookies.get("token"); if(bake(tk)!=true){token.generate()} //no spitting or even encryption yet
    try{
        var cd=Cookies.get("code"); if(bake(cd)){editor.open(cd)}else{editor.new(tk)} //no spitting or even encryption yet
    }catch(err){

    } 
}