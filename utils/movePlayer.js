import drawEverything from "./drawEverything.js";

export default function movePlayer(player, sign) {
        if (player === 1) {
                sign === "+" ? firstPlayerY += speedFactor: firstPlayerY -= speedFactor;
        } else {
                sign === "+" ? secondPlayerY += speedFactor : secondPlayerY -= speedFactor;
        }

        drawEverything();
}
