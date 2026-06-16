export default function didBallTouchSide() {
	const distanceX = ballRadius + 5;

        if ((ballCurrentX <= distanceX) || (ballCurrentX >= canvasWidth - distanceX)) return true;
	return false;
}
