export default function didBallTouchSide(ballX) {
	const canvasGame = document.getElementById("game-canvas");
	const canvasWidth = canvasGame.width;
	const ballRadius = 5;
	const distanceX = ballRadius + 5;

        if ((ballX <= distanceX) || (ballX >= canvasWidth - distanceX)) return true;
	return false;
}
