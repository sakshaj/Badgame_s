let clicks = 0;

const myButton = document.getElementById('myButton');
const myText = document.getElementById('myText');
function clicked(){
    clicks += 1;
    document.getElementById("myText").innerHTML = clicks;
}

