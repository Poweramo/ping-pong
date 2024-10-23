export default function drawCentralLine() {
        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = 5;
        context.moveTo(canvasWidth / 2 , 0);
        context.lineTo(canvasWidth / 2, canvasWidth / 2);
        context.stroke();
}

