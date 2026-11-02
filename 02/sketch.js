
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  for (let i = 0; i <= 200; i++) {

    let pmx = pmouseX - 50;
    let pmy = pmouseY - 50;
    let mx = mouseX - 50;
    let my = mouseY - 50;


    let yValue = random(0, 100) + i;
    let xValue = random(0, 100) + i;
    fill(xValue, yValue ,200, yValue);
    circle(pmx + random(-i/4,i/4), (mouseY+ yValue)-250, random(0, 1)+i/4);

    noStroke();

  }
  
}
