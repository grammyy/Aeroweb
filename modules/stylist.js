function paint(c){
    encode("app","color",c)
    o=document.body.getElementsByTagName("*")
    a=["button","window","verse"]
    for(var i=0;i<o.length;i++){ //make into api function
        o[i].style.color=c
        for(var _i=0;_i<a.length;_i++){
            switch(o[i].split(";").indexOf(a[_i])){
                case "button":
                    o[i].style.backgroundColor = c
                    break
                case "window":
                    o[i].style.borderColor = c
                    break
                case "verse":
                    o[i].style.borderColor = c
                    break}}}}
        
function wrap(w){
    encode(app,"wallpaper",w)
    o=document.body.getElementsByTagName("*")
    for(var i=0;i<o.length;i++){ //see above
        }}
function theme(t){
    encode(app,"theme",t)
    switch(t){
        case "default":
            break
        case "minimal":
            break
        case "fullscreen":
            break
        default:
            //unpackage and apply style to custom css
            break}}