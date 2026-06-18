import drawEverything from "./drawEverything.js";
import didBallTouchSide from "./didBallTouchSide.js";
import didBallTouchBorder from "./didBallTouchBorder.js";
import changeScores from "./changeScores.js";
import didBallTouchPlayer from "./didBallTouchPlayer.js";
import drawBall from "./drawBall.js";
import movePlayer from "./movePlayer.js";

export default async function moveBall(ballX, ballY, isDirectionRight, isDirectionDown, nowInSeconds, gameStartTimeInSeconds) {
function getPlayerInput(event) {
	if (event.type === "keydown") {		
		switch (event.key) {
			case "ArrowUp":
				if (firstPlayerY >= playerHeight) {
					if (ballX <= canvasWidth / 2) movePlayer(1, "-");
				}

				if (secondPlayerY >= playerHeight) {
					if (ballX > canvasWidth / 2) movePlayer(2, "-");
				}
				break;
			case "ArrowDown":
				if (firstPlayerY <= canvasHeight - playerHeight) {
					if (ballX <= canvasWidth / 2) movePlayer(1, "+");
				}

				if (secondPlayerY <= canvasHeight - playerHeight) {
					if (ballX > canvasWidth / 2) movePlayer(2, "+");
				}
				break;
			default:
				break;
			}
	}
}
	let directionXSign = 1;
	let directionYSign = 1;
	let speedModule = 1;
	let trajectoryAngle = Math.PI * 0.5 * Math.random();
	let pastTimeInSeconds = nowInSeconds - gameStartTimeInSeconds;

	if (!isDirectionRight) directionXSign *= -1;
	if (!isDirectionDown) directionYSign *= -1;

	window.addEventListener("keydown", getPlayerInput);
        drawEverything(ballX, ballY);
	ballX += directionXSign * speedModule * Math.cos(trajectoryAngle) * pastTimeInSeconds;
	ballY += directionYSign * speedModule * Math.sin(trajectoryAngle) * pastTimeInSeconds;
	console.log(ballX, ballY);

	await delay(10);
	window.removeEventListener("keydown", getPlayerInput);
	if (didBallTouchBorder(ballY)) {
		ballY -= directionYSign * ballRadius;
		await moveBall(ballX, ballY, isDirectionRight, !isDirectionDown, Temporal.Now.instant().epochMilliseconds * (10 ** -3), Temporal.Now.instant().epochMilliseconds * (10 ** -3));
	} else if (didBallTouchSide(ballX)) {
		changeScores(ballX, ballY, isDirectionRight);
		drawBall(ballX, ballY);
		ballX = canvasWidth / 2;
		ballY =  ballRadius + Math.random() * (canvasHeight - 2 * ballRadius);
		await moveBall(ballX, ballY, isDirectionRight, isDirectionDown, Temporal.Now.instant().epochMilliseconds * (10 ** -3), Temporal.Now.instant().epochMilliseconds * (10 ** -3));
	} else if (didBallTouchPlayer(ballX, ballY)) {
		ballX -= directionXSign * (ballRadius + 5);
		await moveBall(ballX, ballY, !isDirectionRight, isDirectionDown, Temporal.Now.instant().epochMilliseconds * (10 ** -3),Temporal.Now.instant().epochMilliseconds * (10 ** -3));
	} else {
		await moveBall(ballX, ballY, isDirectionRight, isDirectionDown, Temporal.Now.instant().epochMilliseconds * (10 ** -3), gameStartTimeInSeconds);
	}
}
