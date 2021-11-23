const sketchWidth = 400;
const sketchHeight = 400;


function setup() {
  createCanvas(sketchWidth, sketchHeight, SVG);
}

function draw() {
  background(255);

  push();

  
  strokeWeight(5)
  noFill();
  star(200, 200, 10, 30, 5);
  pop();

  push();
  stroke("red");
  strokeWeight(5);
  noFill();
  star(200, 200, 30, 70, 5);
  pop();



  push();
  stroke("red");
  strokeWeight(5);
  noFill();
  star(200, 200, 150, 90, 5);
  pop();


  push();
  stroke("black");
  strokeWeight(3);
  noFill();
  star(268, 152, 5, 10, 6);
  pop();


  push();
  stroke("black");
  strokeWeight(3);
  noFill();
  star(173, 118, 5, 10, 6);
  pop();


  push();
  stroke("black");
  strokeWeight(3);
  noFill();
  star(268, 248, 5, 10, 6);
  pop();


  push();
  stroke("black");
  strokeWeight(3);
  noFill();
  star(175, 280, 5, 10, 6);
  pop();


  push();
  stroke("black");
  strokeWeight(3);
  noFill();
  star(115, 200, 5, 10, 6);
  pop();



  push();
  stroke("black");
  strokeWeight(3);
  noFill();
  star(90, 115, 5, 20, 4);
  pop();



  push();
  stroke("black");
  strokeWeight(3);
  noFill();
  star(240, 65, 5, 20, 4);
  pop();


  push();
  stroke("black");
  strokeWeight(3);
  noFill();
  star(340, 200, 5, 20, 4);
  pop();


  push();
  stroke("black");
  strokeWeight(3);
  noFill();
  star(242, 333, 5, 20, 4);
  pop();


  push();
  stroke("black");
  strokeWeight(3);
  noFill();
  star(90, 288, 5, 20, 4);
  pop();


  push();
  stroke("red");
  strokeWeight(3);
  noFill();
  star(200, 200, 190, 190, 6);
  pop();


}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

noLoop();
save("sketch.svg");



}