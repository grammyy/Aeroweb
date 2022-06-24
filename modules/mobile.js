setInterval(function(){
    if(webpage.getBoundingClientRect().width<710){
        webpage.children[0].style.display=webpage.children[1].style.display="none"
        webpage.children[2].style.marginLeft=webpage.children[3].style.marginLeft="0px"
        webpage.children[2].style.marginRight=webpage.children[3].style.marginRight="0px"
        try{if(webpage.children[4].tagName!="IFRAME")webpage.children[3].insertAdjacentHTML("afterend","<iframe src='./programs/mobile.html' style='margin-bottom:31%;bottom:0;height:10px'></iframe>")}catch(e){}
        webpage.children[3].className="subwindow mobile"
        webpage.children[3].children["toolkit"].className="mobile"
    }else{
        webpage.children[0].style.display=webpage.children[1].style.display="block"
        webpage.children[2].style.marginLeft=webpage.children[3].style.marginLeft="11%"
        webpage.children[2].style.marginRight=webpage.children[3].style.marginRight="16%"
        try{if(webpage.children[4].tagName="IFRAME")webpage.children[4].remove()}catch(e){}
        webpage.children[3].className="subwindow"
        webpage.children[3].children["toolkit"].className=""}},250)