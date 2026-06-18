export default function drawBall(ballX, ballY) {
	const canvasGame = document.getElementById("game-canvas");
	const context = canvasGame.getContext("2d");
	const ballRadius = 5;

        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
        context.stroke();
}

