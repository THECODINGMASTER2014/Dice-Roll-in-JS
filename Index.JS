var dice;
var dices = ['&#9812', '&#9813', '&#9814', '&#9815', '&#9816', '&#9817'];
var stopped = true;
var t;

function change(){
    var random = Math.floor(Math.random()*6);
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
