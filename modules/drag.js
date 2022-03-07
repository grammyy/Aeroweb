function dragElement(elmnt) {
  const position =[0,0,0,0]

  document.getElementById(elmnt.id+"toolbar").onmousedown = dragMouseDown;
  function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      position[2] = e.clientX;
      position[3] = e.clientY;
      document.onmouseup = function(){
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
      };
      // call a function whenever the cursor moves:
  document.onmousemove = function(e){      
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      position[0] = position[2] - e.clientX;
      position[1] = position[3] - e.clientY;
      position[2] = e.clientX;
      position[3] = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - position[1]) + "px";
      elmnt.style.left = (elmnt.offsetLeft - position[0]) + "px";
      };
  }
} 