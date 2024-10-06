const canvasGame = document.getElementById("game-canvas");
const canvasHeight = canvasGame.height;
const canvasWidth = canvasGame.width;
const context = canvasGame.getContext("2d");

drawPlayer1();
drawPlayer2();
drawCentralLine();
drawScores();
setBallFirstLineMvt();

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

function generateBall() {
	const x = canvasGame.width / 2;
	const y = Math.floor(Math.random() * (canvasGame.height + 1));
	const radius = 5;

	context.beginPath();
	context.strokeStyle = "green";
	context.lineWidth = 2;
	context.arc(x, y, radius, 0, 2 * Math.PI);
	context.stroke();
	
	return y;
}

function setBallFirstLineMvt() {
	const startX = canvasGame.width / 2;
	const startY = generateBall();
	const finishY = Math.floor(Math.random() * (canvasGame.height + 1));
	const finishX = (finishY === 0 || finishY === canvasGame.height) ? Math.floor(Math.random() * (startX + 1)) : 0;

	context.beginPath();
	context.strokeStyle = "yellow";
	context.lineWidth = 2;
	context.moveTo(startX, startY);
	context.lineTo(finishX, finishY);
	context.stroke();

	return { startY, finishX, finishY };
}

function moveBall() {
	const cood = setBallFirstLineMvt();
	let x = canvasGame.width / 2;
	let y = cood.startY;

	// while
}
