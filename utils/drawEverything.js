import drawCentralLine from "./drawCentralLine.js";
import drawScores from "./drawScores.js";
import drawPlayer from "./drawPlayer.js";
import drawBall from "./drawBall.js";

export default function drawEverything(ballX, ballY) {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        drawCentralLine();
        drawScores();
        drawPlayer(firstPlayerX, firstPlayerY);
        drawPlayer(secondPlayerX, secondPlayerY);
        drawBall(ballX, ballY);
}
