const canvasGame = document.getElementById("game-canvas");
const canvasHeight = canvasGame.height;
const canvasWidth = canvasGame.width;
const ballRadius = 5;
const initialBallX = canvasWidth / 2
const initialBallY =  ballRadius + Math.random() * (canvasHeight - 2 * ballRadius);
const firstPlayerX = 10;
const secondPlayerX = canvasWidth - firstPlayerX;
const initialPlayerY = canvasHeight / 2;
const initialScoreA = 0;
const initialScoreB = 0;

import drawCentralLine from "./utils/drawCentralLine.js";
import drawScores from "./utils/drawScores.js";
import drawPlayer from "./utils/drawPlayer.js";
import drawBall from "./utils/drawBall.js";
import moveBall from "./utils/moveBall.js";

drawCentralLine();
drawScores(initialScoreA, initialScoreB);
drawPlayer(firstPlayerX, initialPlayerY);
drawPlayer(secondPlayerX, initialPlayerY);
drawBall(initialBallX, initialBallY);
let gameStartTimeInSeconds = Temporal.Now.instant().epochMilliseconds * (10 ** -3);
await moveBall(initialBallX, initialBallY, initialPlayerY, initialPlayerY, initialScoreA, initialScoreB, true, true, gameStartTimeInSeconds, gameStartTimeInSeconds);
