let imageRoad;
let imageActor;
let imageCar1;
let imageCar2;
let imageCar3;
let trackSound;
let hitSound;
let scoreSound;

function preload() {
  imageRoad = loadImage("images/estrada.png");
  imageActor = loadImage("images/ator-1.png");
  imageCar1 = loadImage("images/carro-1.png");
  imageCar2 = loadImage("images/carro-2.png");
  imageCar3 = loadImage("images/carro-3.png");
  imageCars = [imageCar1, imageCar2, imageCar3, imageCar1, imageCar2, imageCar3];
  
  
  trackSound = loadSound("sounds/mixkit-ride-the-waves-48.mp3");
  hitSound = loadSound("sounds/colidiu.mp3");
  scoreSound = loadSound("sounds/pontos.wav");
}