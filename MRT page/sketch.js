let img;
function setup() {
  createCanvas(1024,600, WEBGL);
  //img = loadImage("texture.jpg");
}

function draw() {
    background('#4842bd');

    translate(-341, -100, 0);
    noStroke();
    //texture(img);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.05);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.01);
    torus(60, 15);
    pop();
    
    translate(341, 0, 0);
    noStroke();
    //texture(img);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.05);
    torus(150, 20);
    pop();
    
    translate(341, 0, 0);
    noStroke();
    //texture(img);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.05);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.02);
    torus(60, 15);
    pop();
    
}
