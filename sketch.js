var moving,fixed;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "green";

  moving = createSprite(300,250,50,50);
  moving.shapeColor = "green";
}

function draw() {
  background(200,255,255); 
  
 moving.x = mouseX;
 moving.y = mouseY; 

 if(moving.x-fixed.x<=moving.width/2+fixed.width/2
  && moving.x-fixed.x>=-(moving.width/2+fixed.width/2)
  &&  moving.y - fixed.y <= moving.height/2 + fixed.height/2
  &&  moving.y - fixed.y >= - (moving.height/2 + fixed.height/2)){
  fixed.shapeColor = "red";
  moving.shapeColor = "red"; 
 }

 else{
  fixed.shapeColor = "green";
  moving.shapeColor = "green";  
 }
  drawSprites();
}