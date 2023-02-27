var girl, girlImg;
var bg, bgImg;
var butterfly, butterfly1, butterfly2, butterfly1Img, butterfly2Img;
var jump, jumpImg;

function preload(){
bgImg = loadImage("bg.png");
girlImg = loadImage("girl1.png");
butterfly1Img = loadImage("butterfly1.png");
butterfly2Img = loadImage("butterfly2.png");
jumpImg = loadImage("jump.png");
}

function setup(){
  bg = createSprite(165,485,1,1);
  bg.addImage(bgImg);
  bg.scale = 0.05;

 girl = createSprite(160,300,20,50);
girl.addImage(girlImg);
 girl.scale = 0.1;


}

function draw(){
  background(bgImg);
  


    drawSprites();
  
}




