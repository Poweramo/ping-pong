import drawEverything from "./drawEverything.js";

export default function movePlayer(player, sign) {
        if (player === 1) {
                sign === "+" ? firstPlayerY++ : firstPlayerY--;
        } else {
                sign === "+" ? secondPlayerY++ : secondPlayerY--;
        }

        drawEverything();
}
