export default function didBallTouchPlayer(player) {
        const distanceX = 5 + ballRadius;

        if (Math.round(ballCurrentX - firstPlayerX) === distanceX && Math.abs(Math.round(ballCurrentY - firstPlayerY)) <= playerHeight) {
		ballDirection = (ballDirection === "right" ? "left" : "right");
		return true;
	}

        if (Math.round(ballCurrentX - secondPlayerX) === -distanceX && Math.abs(Math.round(ballCurrentY - secondPlayerY)) <= playerHeight) {
		ballDirection = (ballDirection === "right" ? "left" : "right");
		return true;
	}
}
