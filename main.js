// FIX: ball is blinking
// FIX: ball can get stuck in top middle or bottom middle of the table
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
window.ballInitialY =  Math.floor(Math.random() * (canvasHeight + 1));
window.ballDestinationY = Math.floor(Math.random() * (canvasHeight + 1));
window.ballInitialX = Math.floor(canvasWidth / 2);
window.ballDestinationX = (ballDestinationY === 0 || ballDestinationY === canvasHeight) ? Math.floor(Math.random() * (ballInitialX + 1)) : 0;
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
