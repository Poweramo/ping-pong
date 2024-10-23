export default function generateBall() {
        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.arc(ballCurrentX, ballCurrentY, ballRadius, 0, 2 * Math.PI);
        context.stroke();
}

