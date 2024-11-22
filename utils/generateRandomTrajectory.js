export default function generateRandomTrajectory(direction) {
	const distanceY = ballRadius + 5;
	
	if (direction === "right") {
		ballDestinationX = Math.floor(Math.random() * ballCurrentX);

	} else {
		ballDestinationX = Math.floor(Math.random() * (canvasWidth - ballCurrentX) + ballCurrentX);
	}


	if (ballDestinationX === 0 || ballDestinationX === canvasWidth) {
		ballDestinationY = Math.floor(Math.random() * (canvasHeight - ballCurrentY) + ballCurrentY);
	} else {
		ballDestinationY === 0 ? canvasWidth : 0;
	}

}
