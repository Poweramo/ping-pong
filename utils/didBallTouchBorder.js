export default function didBallTouchBorder(ballY) {
	const canvasGame = document.getElementById("game-canvas");
	const canvasHeight = canvasGame.height;
	const ballRadius = 5;

        if (ballY <= ballRadius) return true;
        if (ballY >= (canvasHeight - ballRadius)) return true;
	return false;
}
