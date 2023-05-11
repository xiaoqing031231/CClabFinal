let dancers1 = [];
let dancers2 = [];
let numOfDancers1 = 5;
let numOfDancers2 = 5;
let lightColor = (0);
let lightMove = 0
let angle = 200




function setup(){
   let cnv =  createCanvas(600,600);
   cnv.parent("canvasContainer");
   
   //song = loadSound('lib/music.mp3');
   
   
   for (let i = 0; i < numOfDancers1; i++) {
    dancers1.push(new Dancer1());
  }

  for (let i = 0; i < numOfDancers1; i++) {
    dancers2.push(new Dancer2());
  }
}



function draw(){
    background(166, 5, 5);
   //background(random(255), random(255),random(255))


    //stage
    noStroke();
    fill(255);
    ellipse(300,500,480,120);
    ellipse(300,520,480,120);
    rect(60,500,480,20);
    noFill();
    stroke(242, 237, 237);
    curve(80,80,60,500,540,500,10,250);
    
    //lights
    // quad(280,0,200,480,400,480,300,0);
    // ellipse()
    fill(251, 255, 8,40);
    stroke(0,0);
    arc(width/2, height/2+lightMove+120, 200, 90, 0, PI, OPEN);
    triangle(width/2-100,height/2+120+lightMove, width/2+100, height/2+120+lightMove, width/2, -50)

    fill(160, 8, 255,60);
    stroke(0,0);
    // rotate(radians(angle));
    arc(width/2-150, height/2+lightMove+120, 200, 90, 0, PI, OPEN);
    triangle(width/2-150-100,height/2+120+lightMove, width/2-150+100, height/2+120+lightMove, width/2-150, -50)

    fill(8, 255, 12,80);
    stroke(0,0);
    arc(width/2+150, height/2+lightMove+120, 200, 90, 0, PI, OPEN);
    triangle(width/2+150-100,height/2+120+lightMove, width/2+150+100, height/2+120+lightMove, width/2+150, -50)
  
    
   
    for (let i = 0; i < dancers1.length; i++) {
        dancers1[i].update();
        dancers1[i].position();
        dancers1[i].display();
      }

      for (let i = 0; i < dancers2.length; i++) {
        dancers2[i].update();
        dancers2[i].position();
        dancers2[i].display();
      }  

  
   }



class Dancer1{
    constructor() {
    this.xPos1 = random(120, 280);
    this.yPos1 = random(340, 380);
    this.angle = 40;
    this.rotationSpeed = random(-1,3);
  }

  update() {
    this.xPos1 += random(-1, 1);
    this.yPos1 += random(-1, 1);
    this.angle += this.rotationSpeed
  }


  position() {
    if (this.xPos1 >= width){
      this.xPos1 = width - 1;
    } 
    if (this.xPos1 <= 0){
      this.xPos1 = 1;
    } 

    if (this.yPos1 >= height){
      this.yPos1 = height - 1;
    } 
    if (this.yPos1 <= 0){
      this.yPos1 = 1;
    } 
  }

  display() {

    
    // Draw body and head
    push();
    translate(this.xPos1, this.yPos1);
    stroke(0);
    fill(255,80);
    line(0, 25, 0, 100);
    ellipse(0, 15, 20, 20);

    // Draw Arms
    push();
    translate(0, 30);
    rotate(radians(this.angle));
    line(0, 0, 40, 0);
    // rotate(this.);
    // line(0, 0, 30, 0);
    pop();

    push();
    translate(0, 30);
    rotate(radians(-this.angle));
    line(0, 0, 40, 0);
    // rotate(this.);
    // line(0, 0, 30, 0);
    pop();

    // Draw Legs
    translate(0, 100);
    rotate(radians(this.angle-20));
    line(0, 0, 60, 0);
    rotate(radians(this.angle-10));
    line(0, 0, 60, 0);
    

    pop();
  }
}

class Dancer2{
  constructor() {
  this.xPos2 = random(280, 480);
  this.yPos2 = random(360, 420);
  this.angle = 140;
  this.rotationSpeed = random(-1,3);
}

update() {
  this.xPos2 += random(-1, 1);
  this.yPos2 += random(-1, 1);
  this.angle += this.rotationSpeed
}


position() {
  if (this.xPos2 >= width){
    this.xPos2 = width - 1;
  } 
  if (this.xPos2 <= 0){
    this.xPos2 = 1;
  } 

  if (this.yPos2 >= height){
    this.yPos2 = height - 1;
  } 
  if (this.yPos2 <= 0){
    this.yPos2 = 1;
  } 
}

display() {

  // Draw body and head
  push();
  translate(this.xPos2, this.yPos2);
  stroke(0);
  fill(255,80);

 // push();
  //translate(0,30);
  //rotate(radians(this.angle));
  line(0, 25, 0, 60);
  ellipse(0, 15, 20, 20);
 // pop();

  // Draw Arms
  push();
  translate(0, 30);
  rotate(radians(this.angle));
  line(0, 0, 30, 0);
  // rotate(this.);
  // line(0, 0, 30, 0);
  pop();

  push();
  translate(0, 30);
  rotate(radians(-this.angle));
  line(0, 0, 30, 0);
  // rotate(this.);
  // line(0, 0, 30, 0);
  pop();

  // Draw Legs
  translate(0, 60);
 // rotate(radians(this.angle-20));
  line(0, 0, 40, 0);
  rotate(radians(this.angle-10));
  line(0, 0, 40, 0);
  

  pop();
}
}