// FIX: ball is blinking
window.canvasGame = document.getElementById("game-canvas");
window.canvasHeight = canvasGame.height;
window.canvasWidth = canvasGame.width;
window.context = canvasGame.getContext("2d");
window.delay = ms => new Promise(res => setTimeout(res, ms));
window.ballRadius = 5;
window.playerHeight = 15;
window.firstPlayerX = 10;
window.secondPlayerX = canvasWidth - firstPlayerX;
window.ballDirection = "left";
window.ballInitialY =  ballRadius + Math.random() * (canvasHeight - 2 * ballRadius);
window.ballInitialX = canvasWidth / 2
window.firstPlayerY = canvasHeight / 2;
window.secondPlayerY = canvasHeight / 2;
window.scoreA = 0;
window.scoreB = 0;
window.speedFactor = 1;

import drawCentralLine from "./utils/drawCentralLine.js";
import drawScores from "./utils/drawScores.js";
import drawPlayer from "./utils/drawPlayer.js";
import drawBall from "./utils/drawBall.js";
import moveBall from "./utils/moveBall.js";

drawCentralLine();
drawScores();
drawPlayer(firstPlayerX, firstPlayerY);
drawPlayer(secondPlayerX, secondPlayerY);
drawBall(ballInitialX, ballInitialY);
let gameStartTimeInSeconds = Temporal.Now.instant().epochMilliseconds * (10 ** -3);
await moveBall(ballInitialX, ballInitialY, true, true, gameStartTimeInSeconds, gameStartTimeInSeconds);
