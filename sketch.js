var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(200,100,50,50);
  movingRect.shapeColor = "green";
 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < 51
      && fixedRect.x - movingRect.x < 51
      && movingRect.y - fixedRect.y < 51
      && fixedRect.y - movingRect.y < 51) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}