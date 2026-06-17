import drawEverything from "./drawEverything.js";

export default function changeScores(ballX, ballY, isDirectionLeft) {
	isDirectionLeft ? scoreA++ : scoreB++;
        drawEverything(ballX, ballY);
}
