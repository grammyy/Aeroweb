setInterval(function(){
    if(!Cookies.get("app")["style"]["theme"]||["undefined","default"].some(a=>appdata.get("app")["style"]["theme"].includes(a))){
        if(webpage.getBoundingClientRect().width<710||window.innerWidth<710){
            webpage.children[0].style.display=webpage.children[1].style.display="none"
            webpage.children[2].style.marginLeft=webpage.children[3].style.marginLeft="0px"
            webpage.children[2].style.marginRight=webpage.children[3].style.marginRight="0px"
            try{if(webpage.children["dock"].tagName!="IFRAME")webpage.children[3].insertAdjacentHTML("afterend","<iframe src='./programs/mobile.html' id='dock' style='margin-bottom:31%;bottom:0;height:10px'></iframe>")}catch(e){}
            webpage.children[3].className="subwindow mobile"
            webpage.children["toolkit"].className="mobile"
        }else{
            webpage.children[0].style.display=webpage.children[1].style.display="block"
            webpage.children[2].style.marginLeft=webpage.children[3].style.marginLeft="11%"
            webpage.children[2].style.marginRight=webpage.children[3].style.marginRight="16%"
            try{if(webpage.children["dock"].tagName=="IFRAME")webpage.children["dock"].remove()}catch(e){}
            webpage.children[3].className="subwindow"
            webpage.children["toolkit"].className=""}}},250)