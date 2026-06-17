export default function didBallTouchSide(ballX) {
	const distanceX = ballRadius + 5;

        if ((ballX <= distanceX) || (ballX >= canvasWidth - distanceX)) return true;
	return false;
}
