let yCars = [40, 97, 149, 210, 262, 317];
let xCars = [600, 600, 600, 600, 600, 600];
let speedCars = [15, 11, 5, 9, 13, 7];
let widthCars = [70, 100, 80, 105, 60, 140];
let heightCars = 40;

function showCar() {
  for (let i = 0; i < imageCars.length; i++) {
    image(imageCars[i], xCars[i], yCars[i], widthCars[i], heightCars);
  }
}

function carMovements() {
  for (let i = 0; i < imageCars.length; i++) {
    xCars[i] -= speedCars[i];
  }
}

function carReturn() {
  for (let i = 0; i < imageCars.length; i++) {
    if (xCars[i] < -50 - widthCars[i]) {
      xCars[i] = 700;
    }
  }
}