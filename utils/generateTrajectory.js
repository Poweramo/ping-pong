export default function generateTrajectory() {
	const minAddedValue = 20;

        ballDestinationX = Math.round((Math.random() * (canvasWidth - ballCurrentX)) + ballCurrentX) + minAddedValue;
        ballDestinationY = ballDestinationY === 0 ? canvasHeight : 0;
}
