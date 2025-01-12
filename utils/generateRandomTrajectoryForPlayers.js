export default function generateRandomTrajectory(direction) {
	const distanceY = ballRadius + 5;
	ballDestinationY = Math.random() * canvasHeight;

	if (direction === "left") {
			ballDestinationX = Math.floor(Math.random() * ballCurrentX);
		} else {
			ballDestinationX = Math.floor(Math.random() * (canvasWidth - ballCurrentX) + ballCurrentX);
		}

	if (Math.floor(ballDestinationX) === 0 || Math.floor(ballDestinationX) === canvasWidth) {
		ballDestinationY = Math.floor(ballDestinationY);
	} else {
		ballDestinationY = (ballDestinationY < (canvasHeight / 2)) ? 0 : canvasHeight;
	}
}
