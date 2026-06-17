import drawEverything from "./drawEverything.js";
import didBallTouchSide from "./didBallTouchSide.js";
import didBallTouchBorder from "./didBallTouchBorder.js";
import changeScores from "./changeScores.js";
import didBallTouchPlayer from "./didBallTouchPlayer.js";
import drawBall from "./drawBall.js";
import getPlayerInput from "./getPlayerInput.js";

export default async function moveBall(ballX, ballY, isDirectionRight, isDirectionDown, nowInSeconds, gameStartTimeInSeconds) {
	let directionXSign = 1;
	let directionYSign = 1;
	let speedModule = 1;
	let trajectoryAngle = Math.PI * 0.5 * Math.random();
	let pastTimeInSeconds = nowInSeconds - gameStartTimeInSeconds;

	if (!isDirectionRight) directionXSign *= -1;
	if (!isDirectionDown) directionYSign *= -1;

        drawEverything(ballX, ballY);
	ballX += directionXSign * speedModule * Math.cos(trajectoryAngle) * pastTimeInSeconds;
	ballY += directionYSign * speedModule * Math.sin(trajectoryAngle) * pastTimeInSeconds;

	await delay(10);
	if (didBallTouchBorder(ballY)) {
		ballY -= directionYSign * ballRadius;
		await moveBall(ballX, ballY, isDirectionRight, !isDirectionDown, Temporal.Now.instant().epochMilliseconds * (10 ** -3), Temporal.Now.instant().epochMilliseconds * (10 ** -3));
	} else if (didBallTouchSide(ballX)) {
		changeScores(ballX, ballY, isDirectionRight);
		drawBall(ballX, ballY);
		ballX = canvasWidth / 2;
		ballY =  Math.random() * (canvasHeight + 1);
		await moveBall(ballX, ballY, isDirectionRight, isDirectionDown, Temporal.Now.instant().epochMilliseconds * (10 ** -3), Temporal.Now.instant().epochMilliseconds * (10 ** -3));
	} else if (didBallTouchPlayer(ballX, ballY)) {
		ballX -= directionXSign * (ballRadius + 5);
		await moveBall(ballX, ballY, !isDirectionRight, isDirectionDown, Temporal.Now.instant().epochMilliseconds * (10 ** -3),Temporal.Now.instant().epochMilliseconds * (10 ** -3));
	} else {
		await moveBall(ballX, ballY, isDirectionRight, isDirectionDown, Temporal.Now.instant().epochMilliseconds * (10 ** -3), gameStartTimeInSeconds);
	}
}
