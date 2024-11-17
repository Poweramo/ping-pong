import didBallTouchPlayer from "./didBallTouchPlayer.js";
import generateTrajectory from "./generateTrajectory.js";
import drawEverything from "./drawEverything.js";
import changeScores from "./changeScores.js";
import generateBall from "./generateBall.js";

export default async function moveBall() {
        while (ballCurrentX !== ballDestinationX || (Math.floor(ballCurrentY) !== ballDestinationY && Math.ceil(ballCurrentY) !== ballDestinationY)) {
                if (didBallTouchPlayer(1) || Math.floor(ballCurrentY) === 0 || Math.ceil(ballCurrentY) === 0 || Math.floor(ballCurrentY) === canvasHeight || Math.ceil(ballCurrentY) === canvasHeight) {
                        generateTrajectory();
                }

                const stepY = (ballDestinationY - ballCurrentY) / (ballDestinationX - ballCurrentX);
                drawEverything();

		console.log(stepY, ballCurrentY, ballDestinationY)

                if (ballCurrentX !== ballDestinationX) ballCurrentX > ballDestinationX ? ballCurrentX-- : ballCurrentX++;
                if (Math.floor(ballCurrentY) !== ballDestinationY && Math.ceil(ballCurrentY) !== ballDestinationY) {
			if (ballCurrentY > ballDestinationY) {
				stepY >= 0 ? ballCurrentY -= stepY : ballCurrentY += stepY;
			} else {
				stepY >= 0 ? ballCurrentY += stepY : ballCurrentY -= stepY;
			}
		}

                await delay(50);
        }

        changeScores();
        ballCurrentY =  Math.floor(Math.random() * (canvasHeight + 1));
        ballDestinationY = Math.floor(Math.random() * (canvasHeight + 1));
        ballCurrentX = Math.floor(canvasWidth / 2);
        ballDestinationX = (ballDestinationY === 0 || ballDestinationY === canvasHeight) ? Math.floor(Math.random() * (ballCurrentX + 1)) : 0;
        generateBall();
        moveBall();
}
