var universes = 2
for (let step = 0; step < universes; step++) {
    $('.grid').prepend('<div onclick="link('+step+')" id="'+'universe'+step+'" class="verse desktop"></div>');}
    if (steps = universes){
        document.getElementById("universe0").innerHTML = '';
        document.getElementById("universe1").innerHTML = '';
    }
    function link(step){
      var state = step
      switch (state){
        case 0:
          document.getElementById("console").innerHTML = '<iframe src="./multiverse/CESTE.html"></iframe>';
          break
        case 1:
          document.getElementById("console").innerHTML = '<iframe src="./multiverse/FLPBE.html"></iframe>';
          break
      }
    }