function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(0, 255, 255);
  
  fill(0, 145, 255);
  noStroke();
  triangle(100, 50, 50, 200, 150, 200);
  
  fill(0, 145, 255);
  noStroke();
  triangle(250, 50,200, 200, 300, 200);
  fill(255, 241, 200);
  noStroke();
  ellipse(175, 300, 300, 300);
  fill(255, 241, 200);
  noStroke();
  ellipse(20,300, 30, 150);
  fill(255, 241, 200);
  noStroke();
  ellipse(325, 300, 30, 150);
  fill(0,0,255);
  noStroke();
  arc(175, 250, 300, 200, PI, 0); 
  fill(255,255,255);
  noStroke();
  ellipse(250, 300, 75, 75);
  fill(0,0,0);
  noStroke();
  ellipse(250,300,25,25);
  fill(255,255,255);
  noStroke();
  ellipse(100, 300, 75,75);
  fill(0,0,0);
  noStroke();
  ellipse(100,300,25,25);
  stroke(0,0,0);
  strokeWeight(3);
  line(175, 300, 175, 350);
  fill(255,0,0);
  noStroke();
  arc(175,370, 140,140,0,PI);
  
}