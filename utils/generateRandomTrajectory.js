export default function generateRandomTrajectory(direction) {
	const distanceY = ballRadius + 5;
	
	ballDestinationY = Math.floor(Math.random() * canvasHeight);

	if (Math.floor(ballDestinationY) === 0 || Math.floor(ballDestinationY) === canvasHeight) {

		if (direction === "left") {
			ballDestinationX = Math.floor(Math.random() * ballCurrentX);
		} else {
			ballDestinationX = Math.floor(Math.random() * (canvasWidth - ballCurrentX) + ballCurrentX);
		}

	} else {
		ballDestinationX = Math.floor(ballDestinationX) === 0 ? canvasWidth : 0;
	}

}
