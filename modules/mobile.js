setInterval(function(){
    if(webpage.getBoundingClientRect().width<710){
        webpage.children[0].style.display=webpage.children[1].style.display="none"
        webpage.children[2].style.marginLeft=webpage.children[3].style.marginLeft="0px"
        webpage.children[2].style.marginRight=webpage.children[3].style.marginRight="0px"
        if(webpage.children[3].children[0].tagName!="IFRAME")webpage.children[3].insertAdjacentHTML("afterbegin","<iframe src='./programs/mobile.html'></iframe>")
        webpage.children[3].className="subwindow mobile"
        webpage.children[3].children["toolkit"].className="mobile"
    }else{
        webpage.children[0].style.display=webpage.children[1].style.display="block"
        webpage.children[2].style.marginLeft=webpage.children[3].style.marginLeft="11%"
        webpage.children[2].style.marginRight=webpage.children[3].style.marginRight="16%"
        webpage.children[3].className="subwindow"
        webpage.children[3].children["toolkit"].className=""}},250)