let img1;
function setup() {
    //let cnv1 = createCanvas(400,800, WEBGL);
    let cnv2 = createCanvas(400,800, WEBGL);
    //cnv1.parent('canvasLeft');
    cnv2.parent('canvasRight');
    //img = loadImage("C:/MRT page/Img/crazy texture.jpg");
    
}

function draw() {
    background('#4842bd');

    translate(100, 30, 0);
    noStroke();
    //texture(img);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(60, 15);
    pop();
    
    translate(0, -170, 0);
    noStroke();
    //texture(img);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(60, 15);
    pop();
    
    translate(0, -170, 0);
    noStroke();
    //texture(img);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(60, 15);
    pop();
    
}
