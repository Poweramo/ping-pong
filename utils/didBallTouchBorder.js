export default function didBallTouchBorder(ballY) {
	const distanceY = ballRadius;

        if (ballY <= distanceY) return true;
        if (ballY >= (canvasHeight - distanceY)) return true;
	return false;
}
