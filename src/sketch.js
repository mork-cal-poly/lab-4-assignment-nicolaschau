let x = 0;
let y = 150;
let r = 0;
let click = false;
function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  drawBackground();
  drawBat(x, y);
  drawPig(200, 350);
  if (x > width / 2) {
    r = r + 0.05;
  }
  if (click) {
    x = x + 1;
  }
}

function drawBat(x, y) {
  push();
  translate(x, y);
  fill(168, 168, 168);
  scale(0.9);
  stroke(0);
  strokeWeight(1.5);
  quad(0, 100, -100, -25, -40, -80, 0, 0);
  quad(0, 100, 100, -25, 40, -80, 0, 0);
  triangle(-100, -25, -40, -80, -150, -100);
  triangle(100, -25, 40, -80, 150, -100);
  triangle(-40, -80, -150, -100, -190, -150);
  triangle(40, -80, 150, -100, 190, -150);
  //wings
  strokeWeight(3);
  line(10, 60, 15, 82);
  line(-10, 60, -15, 82);
  strokeWeight(4);
  line(15, 82, 23, 88);
  line(15, 82, 15, 92);
  line(15, 82, 7, 90);
  line(-15, 82, -23, 88);
  line(-15, 82, -15, 92);
  line(-15, 82, -7, 90);
  //legs and feet
  stroke(0);
  strokeWeight(2);
  ellipse(0, 0, 75, 120);
  //body
  triangle(-15, -55, -10, -59, -12.5, -73);
  triangle(15, -55, 10, -59, 12.5, -73);
  //ears
  stroke(0);
  strokeWeight(1.5);
  ellipse(0, -17, 10, 10);
  //nose
  noStroke();
  fill(0);
  ellipse(0, 0, 20, 10);
  //mouth
  ellipse(-15, -30, 5, 5);
  ellipse(15, -30, 5, 5);
  //eyes
  //creature
  pop();
}
function drawPig(xp, yp) {
  push();
  translate(xp, yp);
  rotate(r);
  stroke(0);
  strokeWeight(1.5);
  fill(255, 182, 193);
  ellipse(-50, 0, 50, 100); //back leg
  ellipse(50, 0, 50, 100); //front leg
  ellipse(0, -50, 200, 120); //body
  ellipse(100, -75, 100); //head
  triangle(95, -135, 90, -124, 100, -125); //left ear
  triangle(110, -135, 105, -125, 115, -123); //right ear
  fill(0);
  ellipse(87, -90, 7); //left eye
  ellipse(113, -90, 7); //right eye
  noFill();
  ellipse(100, -75, 20, 15); //nose
  fill(0);
  ellipse(95, -75, 4); //left nostril
  ellipse(105, -75, 4); //right nostril
  noFill();
  arc(100, -60, 50, 25, 0, PI); //smile
  strokeWeight(4);
  arc(-105, -50, 10, 10, 0, (6 * PI) / 4); //tail
  arc(-105, -60, 10, 10, (3 * PI) / 2, PI / 2); //tail
  pop();
}

function drawBackground() {
  background(100, 225, 253);
  fill(0, 255, 0);
  noStroke();
  rect(0, (3 * height) / 4, width, height / 4);
  fill(255, 255, 0);
  ellipse(0, 0, 200); //sun
  fill(255);
  ellipse(200, 50, 100, 50); //cloud
  ellipse(200, 25, 60, 40); //cloud
  ellipse(325, 50, 100, 50); //cloud
  ellipse(325, 25, 60, 40); //cloud
  fill(150, 75, 0);
  rect(50, 200, 50, 100);
  fill(1, 200, 32);
  ellipse(75, 180, 125, 100);
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < 37.5 && mouseY > 90 && mouseY < 210)
    click = !click;
}
