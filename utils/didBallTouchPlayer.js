export default function didBallTouchPlayer(ballX, ballY) {
        const distanceX = 5 + ballRadius;

        if ((Math.abs(ballX - firstPlayerX) <= distanceX) && (Math.abs(ballY - firstPlayerY) <= playerHeight)) return true;
        if ((Math.abs(ballX - secondPlayerX) <= distanceX) && (Math.abs(ballY - secondPlayerY) <= playerHeight)) return true;
	return false;
}
