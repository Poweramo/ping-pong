import drawCentralLine from "./drawCentralLine.js";
import drawScores from "./drawScores.js";
import drawPlayer from "./drawPlayer.js";
import generateBall from "./generateBall.js";

export default function drawEverything() {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        drawCentralLine();
        drawScores();
        drawPlayer(firstPlayerX, firstPlayerY);
        drawPlayer(secondPlayerX, secondPlayerY);
        generateBall();
}
