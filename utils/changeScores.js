import drawEverything from "./drawEverything.js";
import didBallTouchSide from "./didBallTouchSide.js";

export default function changeScores() {
	const side = didBallTouchSide();

        side === 1 ? scoreB++ : scoreA++;
        drawEverything();
}
