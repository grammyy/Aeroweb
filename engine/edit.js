(function(){
    var tk=Cookies.get("token"); if(bake(tk)!=true){token.generate()} //no spitting or even encryption yet
    var cd=Cookies.get("code"); if(bake(cd)){editor.open(cd,tk)}else{editor.new(tk)} //no spitting or even encryption yet
})