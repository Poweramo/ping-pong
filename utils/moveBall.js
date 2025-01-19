import didBallTouchPlayer from "./didBallTouchPlayer.js";
import generateStartingTrajectory from "./generateStartingTrajectory.js";
import generateRandomTrajectoryForPlayers from "./generateRandomTrajectoryForPlayers.js";
import generateRandomTrajectoryForBorders from "./generateRandomTrajectoryForBorders.js";
import drawEverything from "./drawEverything.js";
import changeScores from "./changeScores.js";
import generateBall from "./generateBall.js";
import didBallTouchSide from "./didBallTouchSide.js";
import didBallTouchBorder from "./didBallTouchBorder.js";

export default async function moveBall() {
        while (ballCurrentX !== ballDestinationX || (Math.floor(ballCurrentY) !== ballDestinationY && Math.ceil(ballCurrentY) !== ballDestinationY)) {
                if (didBallTouchSide()) break;
		if (didBallTouchPlayer()) generateRandomTrajectoryForPlayers(ballDirection);
		if (didBallTouchBorder()) generateRandomTrajectoryForBorders(ballDirection);

                const stepY = Math.abs((ballDestinationY - ballCurrentY) / ((ballDestinationX - ballCurrentX) + speedFactor));
                drawEverything();

                if (ballCurrentX !== ballDestinationX) ballCurrentX > ballDestinationX ? ballCurrentX -= speedFactor : ballCurrentX += speedFactor;
                if (Math.floor(ballCurrentY) !== ballDestinationY && Math.ceil(ballCurrentY) !== ballDestinationY) {
			ballCurrentY > ballDestinationY ? ballCurrentY -= stepY : ballCurrentY += stepY;
		}

                await delay(50);
        }

        changeScores();
	generateStartingTrajectory(ballDirection);
        generateBall();
        moveBall();
}
