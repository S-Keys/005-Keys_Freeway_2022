let xActor = 120;
let yActor = 369;
let widthActor = 27;
let heigthActor = 26;
let collision = false;
let p1Score = 0;

function showActor() {
  image(imageActor, xActor, yActor, widthActor, heigthActor);
}

function actorMovements() {
  if (keyIsDown(UP_ARROW)) {
    yActor -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (canMove()){
      yActor += 5}
  }
}

function checkCollision() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imageCars.length; i++) {
    collision = collideRectCircle(xCars[i],yCars[i],widthCars[i],heightCars,xActor,yActor,heigthActor-16)
    if (collision){
      backToStart();
      hitSound.play();
      if (scoreNoZero()){
        p1Score -= 1}
    }
  }
}

function backToStart(){
  yActor = 369
}

function score(){
  textAlign(CENTER)
  textSize(25)
  text(p1Score, xActor, 27)
  fill(color(244,240,0))
}

function scoreIn (){
  if (yActor < 15){
    p1Score += 1;
    backToStart();
    scoreSound.play();
  }
}

function scoreNoZero(){
  return p1Score > 0
}

function canMove(){
  return yActor < 369
}








