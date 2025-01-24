export default function generateStartingTrajectory(direction) {
        ballCurrentX = Math.round(canvasWidth / 2);
        ballCurrentY =  Math.round(Math.random() * canvasHeight);
	ballDestinationY = Math.round(Math.random() * canvasHeight);

	if (direction === "right") {
		ballDestinationX = (ballDestinationY === 0 || ballDestinationY === canvasHeight) ? Math.round(Math.random() * (canvasWidth / 2)) : canvasWidth;
	} else {
		ballDestinationX = (ballDestinationY === 0 || ballDestinationY === canvasHeight) ? Math.round(Math.random() * (canvasWidth / 2) + canvasWidth / 2) : 0;
	}
}
