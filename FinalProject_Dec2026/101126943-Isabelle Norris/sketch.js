let moves = 0;
let cubeX = 200;
let cubeY = 350;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  fill(0);
  square(cubeX, cubeY, 50);

    //noLoop();
  
  }
  function keyPressed() {
     if (keyCode === RIGHT_ARROW) {
      cubeX += 50;
    } else if (keyCode === LEFT_ARROW) {
      cubeX -= 50;
    } else if (keyCode === UP_ARROW) {
      cubeY -= 50;
    } else if (keyCode === DOWN_ARROW) {
      cubeY += 50;
    }}