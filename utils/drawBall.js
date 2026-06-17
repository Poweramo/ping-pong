export default function drawBall(ballX, ballY) {
        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
        context.stroke();
}

