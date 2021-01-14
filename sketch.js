var garden,gardenimg;
var tom,tomimg,jerry,jerryimg;
function preload() {
    //load the images here
    gardenimg=loadImage("garden.png");
    tomimg=loadAmimation("tomOme.png","tomFour.png");
    jerryimg=loadAmimation("jerryOne.png","jerryThree.png","jerryTwo.png","jerryFour.png");
    tomchng = loadAmimation("tomTwo.png","tomThree.png");
}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
tom = createSprite(200,150,20,100);
jerry = createSprite(300,300,30,60);
jerry= addAnimation(jerryimg);
garden=createSprite(600,600,100,100);
garden.addImage(gardenimg);
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
  
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
   tom.velocityX = -5;
   tom.addAnimation("tomimg",tomimg2);
   tom.changeAnimation("tomimg");
}

}
