var universes = 4
console=document.getElementById("console")
for (let step = 0; step < universes; step++) {
    $('.grid').prepend('<div onclick="link('+step+')" id="'+'universe'+step+'" class="verse desktop"></div>');}
    if (steps = universes){
        document.getElementById("universe0").innerHTML = 'Encrypted Web Proxy';
        document.getElementById("universe1").innerHTML = 'Cookie Clicker 2.031';
        document.getElementById("universe2").innerHTML = 'Console Animation';
        document.getElementById("universe3").innerHTML = 'Linear Auto Pattern';
    }
    function link(step){
      console.style.opacity = "100%";
      var state = step
      switch (state){
        case 0:
          console.innerHTML = '<iframe src="./multiverse/proxy.html"></iframe>';
          break;
        case 1:
          console.innerHTML = '<iframe src="./multiverse/CC2031.html"></iframe>';
          break;
        case 2:
          console.innerHTML = '<iframe src="./multiverse/CESTE.html"></iframe>';
          break;
        case 3:
          console.innerHTML = '<iframe src="./multiverse/FLPBE.html"></iframe>';
          break;
        case 4:
          break;
      }
    }