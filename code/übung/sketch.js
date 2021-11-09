const colorValue = random(0, 255);
let xValue = random(180,220);

let yValue = 5;
let textColor ="red";
let trueFalse = true; // false



function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  background(255);
  stroke("green");
  fill(230,30,60,50);
  rect(155,155,90,90);
  fill("black");
  circle(
  random (180, 220),
  random (180, 220),
  50

  );
  


}
