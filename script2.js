var topPosition = 50;
var leftPosition = 0;

var ball = document.getElementById('ball')


var itervalId = setInterval ("ballMove()", 1000)

document.getElementById('slider').addEventListener("input", function() {
    console.log(document.getElementById('slider').value)
    speed = document.getElementById('slider').value;



clearInterval(intervalID)
intervalID = setInterval ("ballMove()", speed)
})

function ballMove() {
    
ball.style.position = "absolute";
ball.style.left = leftPosition+"px";
ball.style.top = topPosition+"px;"

topPosition += 5;
leftPosition += 15;

if (leftPosition >= window.innerWidth - 57) {
    topPosition = 0;
    leftPosition = 0;
}

}