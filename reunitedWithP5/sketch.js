
function setup(){
   let cnv =  createCanvas(400,400);
   cnv.parent("canvasContainer");
}

function draw(){
    background(120,40,240);

    circle(x,height/2,radius);
    x+=3;
    if(x>width+radius){
        
    }
}