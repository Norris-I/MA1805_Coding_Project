function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(110);
  //strokeWeight(5);
  noStroke();
  quad(155, 20, 160, 20, 170, 95, 100, 130);//ears
  quad(245, 20, 240, 20, 230, 95, 300, 130);
  fill(255,150,150);
  quad(155, 36, 158, 36, 165, 95, 110, 130);
  quad(245, 36, 242, 36, 235, 95, 290, 130);
  fill(110);
  circle(200,200,250);//head
  fill(255,150,150);
  triangle(200, 175, 170, 215, 230, 215);//nose
  stroke(0);
  strokeWeight(5);
  line(135,120,170,135);//eyebrpws
  line(265,120,230,135);
  
  
  noStroke();
  fill(110);
  quad(10, 170, 60, 190, 85, 300, 40, 275);//wings
  quad(390, 170, 340, 190, 315, 300, 360, 275);
  stroke(0);
  arc(150, 180, 60, 60, PI, PI+ PI );//eyes
  arc(250, 180, 60, 60, PI, PI+ PI );
  fill(220,220,220);
  noStroke();
  arc(12, 220, 60, 90, PI+HALF_PI-0.025 ,HALF_PI - 0.585 );//wings again
  arc(40, 280, 70, 50, PI+HALF_PI-0.247,HALF_PI - 1.18 );

  arc(388, 220, 60, 90, HALF_PI +0.585 ,HALF_PI+PI+0.025 );
  arc(360, 280, 70, 50, HALF_PI+1.18,HALF_PI+PI + 0.247 );
  fill(0, 0, 0);
  arc(200, 220, 160, 140, 0, PI, CHORD);//mouth
  fill(255, 255, 255);
  triangle(155,250,140,220,160,220);
  triangle(245,250,260,220,240,220);
  fill(255, 0, 0);
  triangle(155,250,150,240,157,238);
  triangle(245,250,250,240,243,238);

}
