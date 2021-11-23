const sketchHeight = 400;
const sketchWeight = 400;


function setup() {

  createCanvas(sketchWeight, sketchHeight);
  background(255);


  fill(10,20,30,40);

  translate(200, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 60, 80, 120);
    rotate(PI/5);
  }
  save("sketch.png");
}
