import drawCentralLine from "./drawCentralLine.js";
import drawScores from "./drawScores.js";
import drawPlayer from "./drawPlayer.js";
import drawBall from "./drawBall.js";

export default function drawEverything(ballX, ballY, firstPlayerY, secondPlayerY, scoreA, scoreB) {
	const canvasGame = document.getElementById("game-canvas");
	const context = canvasGame.getContext("2d");
	const canvasWidth = canvasGame.width;
	const canvasHeight = canvasGame.height;
	const firstPlayerX = 10;
	const secondPlayerX = canvasWidth - firstPlayerX;

        context.clearRect(0, 0, canvasWidth, canvasHeight);
        drawCentralLine();
        drawScores(scoreA, scoreB);
        drawPlayer(firstPlayerX, firstPlayerY);
        drawPlayer(secondPlayerX, secondPlayerY);
        drawBall(ballX, ballY);
}
