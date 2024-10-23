export default function generateTrajectory() {
        ballDestinationX = Math.round((Math.random() * (canvasWidth - ballCurrentX)) + ballCurrentX)
        ballDestinationY = ballDestinationY === 0 ? canvasHeight : 0;
}
