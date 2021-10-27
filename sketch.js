var player, target;
var score = 0;

function preload(){

}

function setup() {
  createCanvas(1200,800);
  


  target = createSprite(Math.round(random(200,1000)),Math.round(random(200,600)),50,50); 
  
  
}

function draw() {
  background("cyan"); 

  text("Score =" + score,500,100);

  if(mouseX - target.x <= 75 && mouseX - target.x >= 0
    && mouseY - target.y <= 25 && mouseY - target.y >= -25) {
    target.velocityX = Math.round(random(-10,0))
  }

  if(mouseX - target.x >= -75 && mouseX - target.x <= 0
    && mouseY - target.y <= 25 && mouseY- target.y >= -25) {
    target.velocityX = Math.round(random(0,10))
  }

  if(mouseY - target.y <= 75 && mouseY - target.y >= 0
    && mouseX - target.x <= 25 && mouseX - target.x >= -25) {
    target.velocityY = Math.round(random(-10,0))
  }

  if(mouseY - target.y >= -75 && mouseY - target.y <= 0
    && mouseX - target.x <= 25 && mouseX - target.x >= -25) {
    target.velocityY = Math.round(random(0,10))
  }

   if(mouseY - target.y <= 50 && mouseY - target.y >= 25
    && mouseX - target.x <= 50 && mouseX - target.x >= 25) {
     target.velocityX = -5;
     target.velocityY = -5;
   }

   if(mouseY - target.y <= 50 && mouseY - target.y >= 25
    && mouseX - target.x >= -50 && mouseX - target.x <= 25) {
     target.velocityX = 5;
     target.velocityY = -5;
   }

   if(mouseY - target.y >= -50 && mouseY - target.y <= 25
    && mouseX - target.x <= 50 && mouseX - target.x >= 25) {
     target.velocityX = -5;
     target.velocityY = 5;
   }

   if(mouseY - target.y >= -50 && mouseY - target.y <= 25
    && mouseX - target.x >= -50 && mouseX - target.x <= 25) {
     target.velocityX = 5;
     target.velocityY = 5;
   }

   if(frameCount % 40 === 0) {
     score = score + 1;
   }

  drawSprites();
}