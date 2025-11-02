var dice;
var dices = ['&#48;', '&#49', '&#50', '&#51', '&#52', '&#53', '&#54', '&#55', '&#56', '&#57','10'];
var stopped = true;
var t;

function change(){
    var random = Math.floor(Math.random()*11);
    dice.innerHTML =    dices[random];
}
function stopstart(){
    if(stopped) {
        stopped =  false;
        t = setInterval(change, 250);
    } else{
        clearInterval(t);
        stopped = true;
    }
}
window.onload = function(){
    dice = document.getElementById("dice");
    stopstart();
}
