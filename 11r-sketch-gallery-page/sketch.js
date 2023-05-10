let numOfParticles = 500; 
let particles = [];

function setup(){
   let cnv =  createCanvas(600,600);
   cnv.parent("canvasContainer");
}

function draw(){
    background(0);

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
       p.move();
       p.display();
      }
      
      noStroke();
      circle(mouseX,mouseY,35);
      fill(247, 47, 47,10)
      circle(mouseX,mouseY,30);
      fill(247, 234, 47,100)
      circle(mouseX,mouseY,25);
      fill(47, 247, 74,100);
      if(mouseIsPressed==true){
        for(let i = 0; i < 10; i++){
          particles.push(new Particle(mouseX, mouseY))
        }
        noStroke();
        circle(mouseX,mouseY,15);
      }
      
      
    }
    
    function mousePressed() {
      particles.push(new Particle(mouseX, mouseY));
    }
    
    class Particle {
      // constructor function
      constructor(x, y) {
        // properties
        this.x = x;
        this.y = y;
        this.dia = random(5,20);
        this.xSpd = random (-5,5);
        this.ySpd = random(-5,5);
      }
    
      display() {
        push();
        translate(this.x, this.y);
        noStroke();
        fill(random(0,255),random(0,255),random(0,255));
        circle(0, 0, this.dia);
        fill(random(0,255),random(0,255),random(0,255));
        circle(8,8,this.dia);
        fill(random(0,255),random(0,255),random(0,255));
        circle(-8,8,this.dia);
        fill(random(0,255),random(0,255),random(0,255));
        circle(0,14,this.dia);
        pop();
      }
      move() {
        this.x += this.xSpd;
        this.y += this.ySpd;
      }
      
     // appear(){
     //   push();
     //   translate(this.x, this.y);
     //   noStorke();
       
       // pop();
     // }
      
    
    }
    

