export default function drawScores() {
        context.font = "15px Arial";
        context.fillStyle = "white";
        context.fillText(scoreA, canvasWidth / 2 - 20, 20);
        context.fillText(scoreB, canvasWidth / 2 + 10, 20);
}
