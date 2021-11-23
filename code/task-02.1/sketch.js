function setup() {
  createCanvas(400, 400);
}

function draw() {
  noLoop();
  background(255);
  fill("red");
  stroke(0);
  strokeWeight(1);

  beginShape();
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(40, 80);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + 150, y + 220);
  }

  endShape(CLOSE);

  fill("beige");
  beginShape();
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(40, 80);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + 270, y + 100);
  }


  endShape(CLOSE);



fill("blue");
  beginShape();
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(40, 80);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + 350, y + 120);
  }


  endShape(CLOSE);


  fill("green");
  beginShape();
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(40, 80);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + 200, y + 40);
  }


  endShape(CLOSE);


  fill("yellow");
  beginShape();
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(40, 80);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + 350, y + 290);
  }


  endShape(CLOSE);


  fill("brown");
  beginShape();
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(40, 80);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + 280, y + 220);
  }


  endShape(CLOSE);

  fill("black");
  beginShape();
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(40, 80);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + 50, y + 50);
  }


  endShape(CLOSE);


  fill("white");
  beginShape();
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(40, 80);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + 100, y + 120);
  }


  endShape(CLOSE);


  fill("purple");
  beginShape();
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(40, 80);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + 50, y + 320);
  }


  endShape(CLOSE);

  fill("pink");
  beginShape();
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(40, 80);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + 200, y + 320);
  }


  endShape(CLOSE);


}
