// TODO: add to github

const canvasGame = document.getElementById("game-canvas");
const canvasHeight = canvasGame.height;
const canvasWidth = canvasGame.width;
const context = canvasGame.getContext("2d");

context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 5;
context.moveTo(canvasWidth / 2 , 0);
context.lineTo(canvasWidth / 2, canvasWidth / 2);
context.stroke();

let x = 10;
const playerHeight = 15;
const y = (canvasHeight / 2);

context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 5;
context.moveTo(x, y);
context.lineTo(x, y + playerHeight);
context.moveTo(x, y);
context.lineTo(x, y - playerHeight);
context.stroke();


x = canvasWidth - x

context.beginPath();
context.strokeStyle = "white";
context.lineWidth = 5;
context.moveTo(x, y);
context.lineTo(x, y + playerHeight);
context.moveTo(x, y);
context.lineTo(x, y - playerHeight);
context.stroke();
