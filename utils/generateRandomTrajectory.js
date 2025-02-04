export default function generateRandomTrajectory(direction) {
	const distanceY = ballRadius;

	if (direction === "left") {
		ballDestinationX = Math.round(Math.random() * ballCurrentX);
	} else {
		ballDestinationX = Math.round(Math.random() * (canvasWidth - ballCurrentX) + ballCurrentX);
	}

	if (ballDestinationX === 0 || ballDestinationX === canvasWidth) {
		ballDestinationY = Math.random() * canvasHeight;
		ballDestinationY = Math.round(ballDestinationY);
	} else {
		ballDestinationY = (Math.round(ballDestinationY) === canvasHeight) ? 0 : canvasHeight;
	}
}
