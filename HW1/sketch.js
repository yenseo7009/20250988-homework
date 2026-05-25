function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  
  fill(0, 0, 255);
  noStroke();
  circle(100, 100,100);
  
  fill(0,0,255);
  noStroke();
  triangle(100, 200, 50, 300, 150, 300);
  
  fill(0, 0, 255);
  noStroke();
  arc(300, 100, 100, 100, PI, 0);
  
  fill(0, 0, 255);
  noStroke();
  arc(300, 250, 100, 100, 0, PI);
  
  fill(0, 0, 255);
  noStroke();
  rect(450, 50, 100, 100);
  
  fill(0, 0, 255);
  noStroke();
  circle(500, 250,100);
}