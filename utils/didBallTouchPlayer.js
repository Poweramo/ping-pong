export default function didBallTouchPlayer(ballX, ballY, firstPlayerY, secondPlayerY) {
	const canvasGame = document.getElementById("game-canvas");
	const canvasWidth = canvasGame.width;
	const firstPlayerX = 10;
	const secondPlayerX = canvasWidth - firstPlayerX;
	const ballRadius = 5;
	const playerHeight = 15;
        const distanceX = 5 + ballRadius;

        if ((Math.abs(ballX - firstPlayerX) <= distanceX) && (Math.abs(ballY - firstPlayerY) <= playerHeight)) return true;
        if ((Math.abs(ballX - secondPlayerX) <= distanceX) && (Math.abs(ballY - secondPlayerY) <= playerHeight)) return true;
	return false;
}
