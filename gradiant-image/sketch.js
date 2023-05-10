let gradient;


function preload(){
    loadImage("assets/gardient-bkg.png");
}

function setup(){
   let cnv =  createCanvas(400,400);
   cnv.parent("canvasContainer");
   //image(gradient,0,0,width,height);
}

function draw(){
   // background(120,40,240);
   // fill(120,40,240);
   // rect(0,0,width,height);
   imgae(gradient,0,0,width,height);

   //draw stuff as normal
   circle(frameCount,100,40)

}