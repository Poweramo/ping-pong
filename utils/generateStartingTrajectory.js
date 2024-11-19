export default function generateStartingTrajectory(direction) {
        ballCurrentX = Math.floor(canvasWidth / 2);
        ballCurrentY =  Math.floor(Math.random() * canvasHeight);
	ballDestinationY = Math.floor(Math.random() * canvasHeight);

	if (direction === "left") {
		ballDestinationX = (ballDestinationY === 0 || ballDestinationY === canvasHeight) ? Math.floor(Math.random() * (canvasWidth / 2)) : 0
	} else {
		ballDestinationX = (ballDestinationY === 0 || ballDestinationY === canvasHeight) ? Math.floor(Math.random() * (canvasWidth / 2) + canvasWidth / 2) : 0;
	}
}
