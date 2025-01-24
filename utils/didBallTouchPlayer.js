export default function didBallTouchPlayer(player) {
        const distanceX = 5 + ballRadius;

        if (ballCurrentX - firstPlayerX === distanceX && Math.abs(ballCurrentY - firstPlayerY) <= playerHeight) {
		ballDirection = (ballDirection === "right" ? "left" : "right");
		return true;
	}

        if (ballCurrentX - secondPlayerX === -distanceX && Math.abs(ballCurrentY - secondPlayerY) <= playerHeight) {
		ballDirection = (ballDirection === "right" ? "left" : "right");
		return true;
	}
}
