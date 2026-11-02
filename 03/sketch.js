// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const maxHeight = 300;
const minHeight = 25;
let speed = 3;
let speedx = 3;
let circleY = 150;
let circleX = 200;
let red,green,blue;
const textArray = ['Hello', 'World', 'How', 'Are', 'You','?'];


function setup() {
  createCanvas(400, 300);
  red = random(0, 255);
  green = random(0, 255);
  blue = random(0, 255);
  lyricCount = 0;
}

function draw() {
  
  circleY += speed;
  circleX += speedx;
  
  if (circleY > maxHeight || circleY < minHeight) {
    speed *= -1;
    red = random(0, 255);
    green = random(0, 255);
    blue = random(0, 255);
    lyricCount += 1;
  }
  if (circleX > 300 || circleX < 0) {
    speedx *= -1;
    red = random(0, 255);
    green = random(0, 255);
    blue = random(0, 255);
    lyricCount += 1;
  }
  if (lyricCount >= textArray.length) {
    lyricCount = 0;
  }
  background(0);
  noStroke();
  fill(color);
  //circle(circleX, circleY, 50);
  fill(red,green,blue);
  text(textArray[lyricCount],circleX, circleY);
  textSize(50);
  
}
