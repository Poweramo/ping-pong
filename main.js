// TODO: fix second player going beyond the canvas 
// TODO: make the ball bounce when touching borders (code in generateRandomTrajectory.js)
// TODO: make the ball fast

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
window.ballCurrentY =  Math.floor(Math.random() * (canvasHeight + 1));
window.ballDestinationY = Math.floor(Math.random() * (canvasHeight + 1));
window.ballCurrentX = Math.floor(canvasWidth / 2);
window.ballDestinationX = (ballDestinationY === 0 || ballDestinationY === canvasHeight) ? Math.floor(Math.random() * (ballCurrentX + 1)) : 0;
window.firstPlayerY = canvasHeight / 2;
window.secondPlayerY = canvasHeight / 2;
window.scoreA = 0;
window.scoreB = 0;

import drawCentralLine from "./utils/drawCentralLine.js";
import drawScores from "./utils/drawScores.js";
import drawPlayer from "./utils/drawPlayer.js";
import generateBall from "./utils/generateBall.js";
import moveBall from "./utils/moveBall.js";
import movePlayer from "./utils/movePlayer.js";

drawCentralLine();
drawScores();
drawPlayer(firstPlayerX, firstPlayerY);
drawPlayer(secondPlayerX, secondPlayerY);
generateBall();
moveBall();
window.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "ArrowUp":
			if (firstPlayerY >= playerHeight) {
				ballCurrentX <= canvasWidth / 2 ? movePlayer(1, "-") : movePlayer(2, "-");
			}
			break;
		case "ArrowDown":
			if (firstPlayerY <= canvasHeight - playerHeight) {
				ballCurrentX <= canvasWidth / 2 ? movePlayer(1, "+") : movePlayer(2, "+");
			}
			break;
		default:
			break;
	}
})
