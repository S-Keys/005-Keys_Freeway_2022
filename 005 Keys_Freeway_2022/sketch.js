/*
Repo: https://github.com/??????
Created by S_keys in class "Lógica de programação: Lógica de programação: laços e listas com Javascript - Alura"
Version v0.0.1 | september 05, 2022
*/

console.log("{Keys Freeway 2022}");
///////////////////////////////////

function setup() {
  createCanvas(700, 400);
  trackSound.loop();
}

function draw() {
  background(imageRoad);
  showActor();
  showCar();
  actorMovements();
  carMovements();
  carReturn();
  checkCollision();
  score();
  scoreIn();
}
