let img = new Image();
img.src = './assets/images/loading-screen.png';
img.onload = function () {
    init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

// const scale = 10;
// const width = 24;
// const height = 36;
// const scaledWidth = scale * width;
// const scaledHeight = scale * height;

// function drawFrame(frameX, frameY, canvasX, canvasY) {
//     ctx.drawImage(img,
//         frameX * width, frameY * height, width, height,
//         canvasX, canvasY, scaledWidth, scaledHeight);
// }


// const cycleLoop = [0, 27, 0, 27];
// let currentLoopIndex = 0;
// let frameCount = 0;
// let currentDirection = 0;

// function step() {
//   frameCount++;
//   if (frameCount < 15) {
//     window.requestAnimationFrame(step);
//     return;
//   }
//   frameCount = 0;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0);
//   currentLoopIndex++;
//   if (currentLoopIndex >= cycleLoop.length) {
//     currentLoopIndex = 0;
//     currentDirection++; // Next row/direction in the sprite sheet
//   }
//   // Reset to the "down" direction once we've run through them all
//   if (currentDirection >= 2) {
//     currentDirection = 0;
//   }
//   window.requestAnimationFrame(step);
// }

var x1 = [0, 32, 0, 32];
var y1 = [0, 0, 32, 32];
var x2 = [32, 64, 32, 64];
var y2 = [32, 32, 64, 64];
var widthArray = [800, 1600, 800, 1600];
var heightArray = [600, 600, 1200, 1200];
let frameCount = 0;
let currentLoopIndex = 0;


function step() {
    frameCount++;
    if (frameCount < 15) {
        window.requestAnimationFrame(step);
        return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x1[currentLoopIndex], y1[currentLoopIndex], x2[currentLoopIndex], y2[currentLoopIndex], 0, 0, widthArray[currentLoopIndex], heightArray[currentLoopIndex]);
    currentLoopIndex++;
    if (currentLoopIndex >= x1.length) {
        currentLoopIndex = 0;
    }
    window.requestAnimationFrame(step);
}

function init() {
    window.requestAnimationFrame(step);
    // ctx.drawImage(img, 0, 0, 49, 49, 0, 0, 800, 600)
    // ctx.drawImage(img, 51, 0, 100, 49, 0, 0, 1600, 600)
    // ctx.drawImage(img, 0, 51, 49, 100, 0, 0, 800, 1200)
    // ctx.drawImage(img, 51, 51, 100, 100, 0, 0, 1600, 1200)
}