var path,Runner1,Runner2;
var pathImg,Runner1Img,Runner2Img;

function preload()
{
  pathImg=loadImage("path.png")
  Runner1Img=loadImage("Runner-1.png")
  Runner2Img=loadImage("Runner-2.png")

}

function setup()
{
  createCanvas(400,400);
  background("blue");
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=3;
  path.scale=0.8;

  Runner1=createSprite(130,200,30,40);
  Runner1.addImage(Runner1Img);
  Runner1.velocityY=0.7;
  Runner1.scale=0.1;

  Runner2=createSprite(130,200,30,40);
  Runner2.addImage(Runner2Img);
  Runner2.velocityY=0.7;
  Runner2.scale=0.1;

}

function draw(MouseX)
 {
  background(0);
  path.velocityY=3;
  
  if (path.y>400) {
    path.y= height/10;
  }
  drawSprites();

}
