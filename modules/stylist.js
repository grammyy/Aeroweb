function paint(c){
    packaging.encode("app","style","color",c)
    o=["div","p"]
    for(var i=0;i<o.length;i++){
        _o=document.getElementsByTagName(o[i])
        for(var _i=0;_i<_o.length;_i++){
            _o[_i].style.color=c
            if(_o[_i].className.includes("button")){_o[_i].style.backgroundColor=c}
            if(_o[_i].className.includes("window")){_o[_i].style.borderColor=c}
            if(_o[_i].className.includes("verse")){_o[_i].style.borderColor=c}}}}
function wrap(w){
    packaging.encode("app","style","wallpaper",w)
    o=document.getElementsByTagName("div")
    if(w=="revert"||!w){w="url('packages/init.webp')"}
    if(w.includes("/"))document.body.style.backgroundImage=w
    else document.body.style.background=w
    for(var i=0;i<o.length;i++){
        if(o[i].className.includes("window")){
            if(w.includes("/"))o[i].style.backgroundImage=w
            else o[i].style.background=w}}}
function theme(t){
    packaging.encode("app","style","theme",t)
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