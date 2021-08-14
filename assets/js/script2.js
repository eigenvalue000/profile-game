var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 100;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0};
    }
}


document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();


    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            // alert('GAME OVER');
            document.location.reload();
            clearInterval(interval);
        }

    }

    if (rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
        }
    } else if (leftPressed) {
        paddleX -= 7;
        if (paddleX < 0) {
            paddleX = 0;
        }
    }

    x += dx;
    y += dy;
}



function keyDownHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = true;
    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = false;
    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = false;
    }
}


var interval = setInterval(draw, 10);




















// var x1 = [0, 100, 200, 0, 100, 200, 0, 100, 200, 0, 100, 200];
// var y1 = [0, 0, 0, 100, 100, 100, 200, 200, 200, 300, 300, 300];
// var x2 = [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300];
// var y2 = [100, 100, 100, 200, 200, 200, 300, 300, 300, 400, 400, 400];
// var widthArray = [800, 1600, 2400, 800, 1600, 2400, 800, 1600, 2400, 800, 1600, 2400];
// var heightArray = [600, 600, 600, 1200, 1200, 1200, 1800, 1800, 1800, 2400, 2400, 2400];
// let frameCount = 0;
// let currentLoopIndex = 0;

// let img = new Image();
// img.src = './assets/images/crude-clock.png';
// img.onload = function () {
//     init();
// };

// function drawBackground() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, x1[currentLoopIndex], y1[currentLoopIndex], x2[currentLoopIndex], y2[currentLoopIndex], 0, 0, widthArray[currentLoopIndex], heightArray[currentLoopIndex]);
//     currentLoopIndex += 1;
//     if (currentLoopIndex > 11) {
//         currentLoopIndex = 0;
//     }
// }

// function step() {
//     frameCount++;
//     if (frameCount < 50) {
        
//         window.requestAnimationFrame(step);
//         return;
//     }
//     frameCount = 0;

//     drawBackground();
  
//     window.requestAnimationFrame(step);
// }

// function init() {
//     window.requestAnimationFrame(step);
//     // ctx.drawImage(img, 0, 0, 49, 49, 0, 0, 800, 600)
//     // ctx.drawImage(img, 51, 0, 100, 49, 0, 0, 1600, 600)
//     // ctx.drawImage(img, 0, 51, 49, 100, 0, 0, 800, 1200)
//     // ctx.drawImage(img, 51, 51, 100, 100, 0, 0, 1600, 1200)
// }