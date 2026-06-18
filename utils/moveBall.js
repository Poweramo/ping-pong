import drawEverything from "./drawEverything.js";
import didBallTouchSide from "./didBallTouchSide.js";
import didBallTouchBorder from "./didBallTouchBorder.js";
import didBallTouchPlayer from "./didBallTouchPlayer.js";
import drawBall from "./drawBall.js";


export default async function moveBall(ballX, ballY, firstPlayerY, secondPlayerY, scoreA, scoreB, isDirectionRight, isDirectionDown, nowInSeconds, gameStartTimeInSeconds) {

const delay = ms => new Promise(res => setTimeout(res, ms));
	const canvasGame = document.getElementById("game-canvas");
	const canvasHeight = canvasGame.height;
	const canvasWidth = canvasGame.width;
const ballRadius = 5;
	const playerHeight = 15;

function movePlayer(event) {
	if (event.type === "keydown") {		
		const speedFactor= 1;
		switch (event.key) {
			case "ArrowUp":
				if (firstPlayerY >= playerHeight && ballX <= canvasWidth / 2) firstPlayerY -= speedFactor;
				if (secondPlayerY >= playerHeight && ballX > canvasWidth / 2) secondPlayerY -= speedFactor;
				break;
			case "ArrowDown":
				if (firstPlayerY <= canvasHeight - playerHeight && ballX <= canvasWidth / 2) firstPlayerY += speedFactor;
				if (secondPlayerY <= canvasHeight - playerHeight && ballX > canvasWidth / 2) secondPlayerY += speedFactor;
				break;
			default:
				break;
			}
	}
}
	const speedModule = 1;
	const trajectoryAngle = Math.PI * 0.5 * Math.random();
	const pastTimeInSeconds = nowInSeconds - gameStartTimeInSeconds;
	let directionXSign = 1;
	let directionYSign = 1;

	if (!isDirectionRight) directionXSign *= -1;
	if (!isDirectionDown) directionYSign *= -1;

	window.addEventListener("keydown", movePlayer);
        drawEverything(ballX, ballY, firstPlayerY, secondPlayerY, scoreA, scoreB);
	ballX += directionXSign * speedModule * Math.cos(trajectoryAngle) * pastTimeInSeconds;
	ballY += directionYSign * speedModule * Math.sin(trajectoryAngle) * pastTimeInSeconds;
	console.log(ballX, ballY);

	await delay(10);
	window.removeEventListener("keydown", movePlayer);
	if (didBallTouchBorder(ballY)) {
		ballY -= directionYSign * ballRadius;
		await moveBall(ballX, ballY, firstPlayerY, secondPlayerY, scoreA, scoreB, isDirectionRight, !isDirectionDown, Temporal.Now.instant().epochMilliseconds * (10 ** -3), Temporal.Now.instant().epochMilliseconds * (10 ** -3));
	} else if (didBallTouchSide(ballX)) {

		if (isDirectionRight) {
			scoreA++;
		} else {
			scoreB++;
		}
		drawEverything(ballX, ballY, firstPlayerY, secondPlayerY, scoreA, scoreB);
		ballX = canvasWidth / 2;
		ballY =  ballRadius + Math.random() * (canvasHeight - 2 * ballRadius);
		await moveBall(ballX, ballY, firstPlayerY, secondPlayerY, scoreA, scoreB, isDirectionRight, isDirectionDown, Temporal.Now.instant().epochMilliseconds * (10 ** -3), Temporal.Now.instant().epochMilliseconds * (10 ** -3));
	} else if (didBallTouchPlayer(ballX, ballY, firstPlayerY, secondPlayerY)) {
		ballX -= directionXSign * (ballRadius + 5);
		await moveBall(ballX, ballY, firstPlayerY, secondPlayerY, scoreA, scoreB, !isDirectionRight, isDirectionDown, Temporal.Now.instant().epochMilliseconds * (10 ** -3),Temporal.Now.instant().epochMilliseconds * (10 ** -3));
	} else {
		await moveBall(ballX, ballY, firstPlayerY, secondPlayerY, scoreA, scoreB, isDirectionRight, isDirectionDown, Temporal.Now.instant().epochMilliseconds * (10 ** -3), gameStartTimeInSeconds);
	}
}
