const canvasGame = document.getElementById("game-canvas");
const canvasHeight = canvasGame.height;
const canvasWidth = canvasGame.width;
const context = canvasGame.getContext("2d");

moveBall();

function drawEverything(circleX, circleY, mvtLineStartX, mvtLineStartY, mvtLineFinishX, mvtLineFinishY) {
	drawPlayer1();
	drawPlayer2();
	drawCentralLine();
	drawScores();
	generateBall(circleX, circleY);
	setBallFirstLineMvt(mvtLineStartX, mvtLineStartY, mvtLineFinishX, mvtLineFinishY);
}


function drawCentralLine() {
	context.beginPath();
	context.strokeStyle = "white";
	context.lineWidth = 5;
	context.moveTo(canvasWidth / 2 , 0);
	context.lineTo(canvasWidth / 2, canvasWidth / 2);
	context.stroke();
}

function drawPlayer1() {
	const x = 10;
	const y = canvasHeight / 2;
	const playerHeight = 15;

	context.beginPath();
	context.strokeStyle = "white";
	context.lineWidth = 5;
	context.moveTo(x, y);
	context.lineTo(x, y + playerHeight);
	context.moveTo(x, y);
	context.lineTo(x, y - playerHeight);
	context.stroke();
}

function drawPlayer2() {
	const x = canvasWidth - 10;
	const y = canvasHeight / 2;
	const playerHeight = 15;

	context.beginPath();
	context.strokeStyle = "white";
	context.lineWidth = 5;
	context.moveTo(x, y);
	context.lineTo(x, y + playerHeight);
	context.moveTo(x, y);
	context.lineTo(x, y - playerHeight);
	context.stroke();
}

function drawScores() {
	context.font = "15px Arial";
	context.fillStyle = "white";
	context.fillText("0", canvasWidth / 2 - 20, 20);
	context.fillText("0", canvasWidth / 2 + 10, 20);
}

function generateBall(x, y) {
	const radius = 5;

	context.beginPath();
	context.strokeStyle = "green";
	context.lineWidth = 2;
	context.arc(x, y, radius, 0, 2 * Math.PI);
	context.stroke();
}

function setBallFirstLineMvt(startX, startY, finishX, finishY) {
	context.beginPath();
	context.strokeStyle = "yellow";
	context.lineWidth = 2;
	context.moveTo(startX, startY);
	context.lineTo(finishX, finishY);
	context.stroke();
}

async function moveBall() {
	let circleX = Math.floor(canvasGame.width / 2);
	let circleY = Math.floor(Math.random() * (canvasGame.height + 1));
	const mvtLineStartX = circleX;
	const mvtLineStartY = circleY;
	const mvtLineFinishY = Math.floor(Math.random() * (canvasGame.height + 1)); 
	const mvtLineFinishX = (mvtLineFinishY === 0 || mvtLineFinishY === canvasGame.height) ? Math.floor(Math.random() * (mvtLineStartX + 1)) : 0;
	const delay = ms => new Promise(res => setTimeout(res, ms));

	while (circleX !== mvtLineFinishX || circleY !== mvtLineFinishY) {
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		drawEverything(circleX, circleY, mvtLineStartX, mvtLineStartY, mvtLineFinishX, mvtLineFinishY);
		if (circleX !== mvtLineFinishX) circleX > mvtLineFinishX ? circleX-- : circleX++;
		if (circleY !== mvtLineFinishY) circleY > mvtLineFinishY ? circleY-- : circleY++;
		await delay(100)
	}
}
