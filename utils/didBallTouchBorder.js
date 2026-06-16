export default function didBallTouchBorder() {
	const distanceY = ballRadius;

        if (ballCurrentY <= distanceY) return true;
        if (ballCurrentY >= (canvasHeight - distanceY)) return true;
	return false;
}
