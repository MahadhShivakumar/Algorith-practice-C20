function setup() {
  createCanvas(800,400);
  a= createSprite(400, 200, 50, 50);
  b= createSprite(200, 200, 50, 50);
  a.velocityX=-3
  b.velocityX=3
  a.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  // if(a.x-b.x<a.width/2+b.width/2&&
  //   b.x-a.x<a.width/2+b.width/2&&
  //   a.y-b.y<a.width/2+b.width/2&&
  //   b.y-a.y<a.width/2+b.width/2){
  //   a.shapeColor="red"
  //   b.shapeColor="red"
  // }
  // else {
  //   a.shapeColor="blue"
  //   b.shapeColor="blue"
  // }
  
  // a.x=mouseX
  // a.y=mouseY

  if(a.x-b.x<a.width/2+b.width/2&&
    b.x-a.x<a.width/2+b.width/2){
    a.velocityX*=(-1)
    b.velocityX*=(-1)      
  }

  if(a.y-b.y<a.width/2+b.width/2&&
    b.y-a.y<a.width/2+b.width/2){
      a.velocityY*=(-1)
      b.velocityY*=(-1)      
  }

  drawSprites();
}