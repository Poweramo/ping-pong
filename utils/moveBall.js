import drawEverything from "./drawEverything.js";
import didBallTouchSide from "./didBallTouchSide.js";
import didBallTouchBorder from "./didBallTouchBorder.js";
import changeScores from "./changeScores.js";
import generateStartingTrajectory from "./generateStartingTrajectory.js";
import didBallTouchPlayer from "./didBallTouchPlayer.js";
import generateRandomTrajectory from "./generateRandomTrajectory.js";
import generateBall from "./generateBall.js";

export default async function moveBall() {
	let state = "border";
	while (ballCurrentX !== ballDestinationX && Math.round(ballCurrentY) !== ballDestinationY) {
		let stepY = Math.abs((ballDestinationY - ballCurrentY) / (ballDestinationX - ballCurrentX));
        	drawEverything();

        	if (ballCurrentX !== ballDestinationX) ballCurrentX > ballDestinationX ? ballCurrentX -= speedFactor : ballCurrentX += speedFactor;
        	if (Math.round(ballCurrentY) !== ballDestinationY) {
			ballCurrentY > ballDestinationY ? ballCurrentY -= stepY : ballCurrentY += stepY;
		}

		if (didBallTouchSide()) {
			changeScores();
			generateBall();
			state = "side";
			break;
		}
		if (didBallTouchPlayer()) break;


		await delay(20);
	}

	state === "side" ? generateStartingTrajectory(ballDirection) : generateRandomTrajectory(ballDirection);
	moveBall();
}
