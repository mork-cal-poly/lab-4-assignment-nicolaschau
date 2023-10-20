let x = 100;
let y = 200;
function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  drawBat(x, y);
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
}
