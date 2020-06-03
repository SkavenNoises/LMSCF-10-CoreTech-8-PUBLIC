function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  setInterval(function() {
      let element = document.getElementById("rainbowText");
      
      let r = getRandomInt(0, 255);
      let g = getRandomInt(0, 255);
      let b = getRandomInt(0, 255);
      
      element.style.color = "rgb(" + r + "," + g + "," + b + ")";
      
  }, 1500);


    
