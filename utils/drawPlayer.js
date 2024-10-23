export default function drawPlayer(x, y) {
        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = 5;
        context.moveTo(x, y);
        context.lineTo(x, y + playerHeight);
        context.moveTo(x, y);
        context.lineTo(x, y - playerHeight);
        context.stroke();
}

