var ship1,ship;
var water,sea,invisiblewater;
function preload(){
ship1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
water = loadImage("sea.png");
}

function setup(){
 createCanvas(400,400);
 background("blue");
 sea= createSprite(400,200);
 sea.addImage(water);
 sea.velocityX = -4;
 sea.scale = 0.3;

 ship = createSprite(100,200,30,20);
 ship.addAnimation("ship2",ship1);
 ship.scale = 0.15;
}

function draw() {
 background(0);
 if(sea.x<0){
   sea.x = sea.width/8
 }
 //ship.collide(sea);
  sea.velocityX = -3;
 drawSprites();
}