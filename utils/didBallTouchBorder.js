export default function didBallTouchBorder() {
	const distanceY = ballRadius + 5;

        if (Math.round(ballCurrentY) === distanceY) return true;
        if (Math.round(ballCurrentY) === (canvasHeight - distanceY)) return true;
}
