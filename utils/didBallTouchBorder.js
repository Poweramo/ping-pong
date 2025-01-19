export default function didBallTouchBorder() {
	const distanceY = ballRadius;

        if (Math.round(ballCurrentY) === distanceY) return true;
        if (Math.round(ballCurrentY) === (canvasHeight - distanceY)) return true;
}
