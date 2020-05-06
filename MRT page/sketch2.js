let img;

let sketch1 = function(p){
    
   p.setup = function(){
       let cnv1 = p.createCanvas(300,600, p.WEBGL);
        cnv1.parent('canvasLeft');
       //img = loadImage("texture.jpg");
   } 
   
   p.draw = function(){
        p.background('#4842bd');

        p.translate(70, 200, 0);
        p.noStroke();
        //texture(img);
        p.normalMaterial();
        p.push();
        p.rotateZ(p.frameCount * 0.01);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.torus(60, 15);
        p.pop();

        p.translate(0, -170, 0);
        p.noStroke();
        //texture(img);
        p.normalMaterial();
        p.push();
        p.rotateZ(p.frameCount * 0.01);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.torus(60, 15);
        p.pop();

        p.translate(0, -170, 0);
        p.noStroke();
        //texture(img);
        p.normalMaterial();
        p.push();
        p.rotateZ(p.frameCount * 0.01);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.torus(60, 15);
        p.pop();
   }
}

let sketch2 = function(p){
    
   p.setup = function(){
       let cnv1 = p.createCanvas(300,600, p.WEBGL);
        cnv1.parent('canvasRight');
   } 
   
   p.draw = function(){
        p.background('#4842bd');

        p.translate(-70, 200, 0);
        p.noStroke();
        //texture(img);
        p.normalMaterial();
        p.push();
        p.rotateZ(p.frameCount * 0.01);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.torus(60, 15);
        p.pop();

        p.translate(0, -170, 0);
        p.noStroke();
        //texture(img);
        p.normalMaterial();
        p.push();
        p.rotateZ(p.frameCount * 0.01);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.torus(60, 15);
        p.pop();

        p.translate(0, -170, 0);
        p.noStroke();
        //texture(img);
        p.normalMaterial();
        p.push();
        p.rotateZ(p.frameCount * 0.01);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.torus(60, 15);
        p.pop();
   }
}


let myp51 = new p5(sketch1);
let myp52 = new p5(sketch2);
/*
function setup() {
    let cnv1 = p.createCanvas(screen.width/2,screen.height/2, WEBGL);
    //let cnv2 = createCanvas(400,800, WEBGL);
    cnv1.parent('canvasLeft');
    //cnv2.parent('canvasRight');
    //img = loadImage("C:/MRT page/Img/crazy texture.jpg");
    
}

function draw() {
    background('#4842bd');

    translate(-100, 30, 0);
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
*/
