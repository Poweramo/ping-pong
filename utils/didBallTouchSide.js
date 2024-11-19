export default function didBallTouchSide() {
	const distanceX = ballRadius + 5;

        if (Math.round(ballCurrentX) === distanceX) {
		ballDirection = ballDirection = "right" ? "left" : "right"; 
		return 1;
	}
        if (Math.round(ballCurrentX) === (canvasWidth - distanceX)) {
		ballDirection = ballDirection = "right" ? "left" : "right"; 
		return 2;
	}
}
