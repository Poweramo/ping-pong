import drawEverything from "./drawEverything.js";
import didBallTouchSide from "./didBallTouchSide.js";
import didBallTouchBorder from "./didBallTouchBorder.js";
import changeScores from "./changeScores.js";
import didBallTouchPlayer from "./didBallTouchPlayer.js";
import drawBall from "./drawBall.js";

export default async function moveBall(isDirectionLeft, isDirectionUp) {
	let directionXSign = 1;
	let directionYSign = 1;
	let speedModule = 1;
	let trajectoryAngle = Math.PI * 0.5 * Math.random();
	let gameStartTimeInSeconds = Temporal.Now.instant().epochMilliseconds * (10 ** -3);

	if (!isDirectionLeft) directionXSign *= -1;
	if (!isDirectionUp) directionYSign *= -1;
	while (true) {
		let nowInSeconds = Temporal.Now.instant().epochMilliseconds * (10 ** -3);
		let pastTimeInSeconds = nowInSeconds - gameStartTimeInSeconds;
        	drawEverything();
		ballCurrentX += Math.round(directionXSign * speedModule * Math.cos(trajectoryAngle) * pastTimeInSeconds);
		ballCurrentY += Math.round(directionYSign * speedModule * Math.sin(trajectoryAngle) * pastTimeInSeconds);

		if (didBallTouchBorder()) directionYSign *= -1;

		if (didBallTouchSide()) {
			changeScores();
			drawBall();
			ballCurrentX = Math.floor(canvasWidth / 2);
			ballCurrentY =  Math.floor(Math.random() * (canvasHeight + 1));
			break;
		}
		if (didBallTouchPlayer()) {
			directionXSign *= -1;
			break;
		}
		await delay(20);
	}

	if (directionXSign == 1) {
		directionYSign == 1 ? moveBall(true, true) : moveBall(true, false);
	} else {
		directionYSign == 1 ? moveBall(false, true) : moveBall(false, false);
	}
}
