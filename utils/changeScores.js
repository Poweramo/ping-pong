import drawEverything from "./drawEverything.js";

export default function changeScores(ballX, ballY, isDirectionRight) {
	if (isDirectionRight) {
		scoreA++
	} else {
		scoreB++;
	}
        drawEverything(ballX, ballY);
}
