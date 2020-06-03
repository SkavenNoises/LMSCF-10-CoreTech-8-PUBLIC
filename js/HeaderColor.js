var div = document.getElementById("teamHeader");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(color)
function changeColor(){
  div.style.color= getRandomColor();
}

setInterval(changeColor,2000);