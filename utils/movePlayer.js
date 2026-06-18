import drawEverything from "./drawEverything.js";

export default function movePlayer(player, sign, ballX, ballY) {
        if (player === 1) {
                sign === "+" ? firstPlayerY += speedFactor: firstPlayerY -= speedFactor;
        } else {
                sign === "+" ? secondPlayerY += speedFactor : secondPlayerY -= speedFactor;
        }

        drawEverything(ballX, ballY);
}
