export default function didBallTouchPlayer(player) {
        const distanceX = 5 + ballRadius;

        if ((Math.abs(ballCurrentX - firstPlayerX) <= distanceX) && (Math.abs(ballCurrentY - firstPlayerY) <= playerHeight)) return true;
        if ((Math.abs(ballCurrentX - secondPlayerX) <= distanceX) && (Math.abs(ballCurrentY - secondPlayerY) <= playerHeight)) return true;
	return false;
}
