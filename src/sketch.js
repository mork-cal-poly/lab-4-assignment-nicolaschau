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
  drawBear(46, 240, 0.2);
  fill(150, 75, 0);
  rect(50, 200, 50, 100);
  fill(1, 200, 32);
  ellipse(75, 180, 125, 100);
}

function mouseClicked() {
  if (
    mouseX > x - 37.5 &&
    mouseX < x + 37.5 &&
    mouseY > y - 60 &&
    mouseY < y + 60
  )
    click = !click;
} //if the bat's body is clicked the bat will move
function drawBear(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  //creature
  push();
  translate(200, 250);
  //legs
  fill(79, 34, 0);
  noStroke();
  quad(-107, 40, -94, -40, -63, -20, -87, 50);
  quad(-35, 50, -50, -20, -20, -25, -15, 43);
  quad(25, 45, 33, -25, 65, -23, 45, 50);
  quad(65, -23, 85, -35, 110, 0, 90, 10);
  quad(110, 0, 120, 15, 85, 37, 80, 18);
  //body
  ellipse(0, -60, 210, 115);
  //nose
  push();
  rotate(PI / 14);
  fill(0, 0, 0);
  noStroke();
  ellipse(120, -77, 57, 30);
  pop();
  //head
  push();
  scale(1.2);
  fill(79, 34, 0);
  stroke(0);
  strokeWeight(0.15);
  quad(0 + 72, 0 - 35, 0 + 72, -47 - 35, 55 + 72, -20 - 35, 50 + 72, 10 - 35);
  pop();
  //face
  //eye
  fill(189, 21, 2);
  noStroke();
  triangle(0 + 135, 0 - 60, 6 + 135, -5 - 60, -8 + 135, -12 - 60);
  //ear
  push();
  fill(176, 73, 0);
  noStroke();
  rotate(PI / 3.7);
  ellipse(2, -129, 14, 9);
  pop();
  pop();
  pop();
}
