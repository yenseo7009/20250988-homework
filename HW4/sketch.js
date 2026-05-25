let a = 10
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  
  fill(random(0,255), random(0,255),random(0,255));
  noStroke();
  circle(100, 100,a);
  a+=10;
  a%=100;
  
  fill(random(0,255), random(0,255),random(0,255));
  noStroke();
  triangle(100, 200, 50, 300, 150, 300);
  
  fill(random(0,255), random(0,255),random(0,255));
  noStroke();
  arc(300, 100, 100, 100, PI, 0);
  
  fill(random(0,255), random(0,255),random(0,255));
  noStroke();
  arc(300, 250, 100, 100, 0, PI);
  
  fill(random(0,255), random(0,255),random(0,255));
  noStroke();
  rect(450, 50, 100, 100);
  
  fill(random(0,255), random(0,255),random(0,255));
  noStroke();
  circle(500, 250,100);
}
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}