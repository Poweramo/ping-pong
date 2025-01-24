export default function didBallTouchSide() {
	const distanceX = ballRadius + 5;

        if (ballCurrentX === distanceX) {
		ballDirection = ballDirection === "right" ? "left" : "right";
		return true;
	}
        if (ballCurrentX === (canvasWidth - distanceX)) {
		ballDirection = ballDirection === "right" ? "left" : "right";
		return true;
	}
}
